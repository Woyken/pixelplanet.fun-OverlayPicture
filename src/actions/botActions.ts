import { botState, PixelToPlace } from '../store/botState';
import { overlayStore } from '../store/overlayStore';
import logger from '../handlers/logger';
import { gameStore } from '../store/gameStore';
import { updateMetadata, loadChunkData, fetchPlacePixel, updatePixel } from './pixelData';
import { pixelToChunk, chunkToIndex, pixelInChunkOffset, Cell } from '../chunkHelper';
import { chunkStore } from '../store/chunkStore';
import colorConverter from '../colorConverter';

export async function botUpdateFeatureEnabled(isEnabled: boolean): Promise<void> {
    if (!isEnabled) {
        botState.canvasImageData.processedPixelsTodo.replace([]);
        botState.config.isEnabled = false;
    }
    botState.isFeatureEnabled = isEnabled;
}

export async function botStartProcessingImage(): Promise<void> {
    if (!overlayStore.overlayImage.outputImage.outputImageData || botState.canvasImageData.isProcessing) {
        return;
    }

    botState.canvasImageData.isProcessing = true;
    try {
        logger.log('bot processing');
        // Reset old pixels.
        botState.canvasImageData.processedPixelsTodo.replace([]);
        if (gameStore.gameState.activeCanvasId === undefined) {
            await updateMetadata();
            if (gameStore.gameState.activeCanvasId === undefined) {
                logger.logError('gameStore.gameState.activeCanvasId is null');
                return;
            }
        }
        const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];
        if (!canvasData) {
            logger.logError('canvasData is null');
            return;
        }
        const outputImageData = overlayStore.overlayImage.outputImage.outputImageData;
        const placementConfiguration = overlayStore.placementConfiguration;
        // TODO if we want to have some sort of pattern for placing, this is the place for it.
        for (let xi = 0; xi < outputImageData.width; xi++) {
            for (let yi = 0; yi < outputImageData.height; yi++) {
                const x = xi + placementConfiguration.xOffset;
                const y = yi + placementConfiguration.yOffset;
                const chunkCell = pixelToChunk({ x, y }, canvasData.size);

                const chunkIndex = chunkToIndex(chunkCell);
                const pixelInChunk = pixelInChunkOffset({ x, y }, canvasData.size);
                let loadedChunk = chunkStore.getChunk(chunkIndex);
                if (!loadedChunk) {
                    logger.log('fetching new chunk');
                    await loadChunkData(canvasData.id, chunkCell);
                    loadedChunk = chunkStore.getChunk(chunkIndex);
                    if (!loadedChunk) {
                        logger.logError('could not load chunk?');
                        // TODO how do we recover from chunk fetching fails?
                        return;
                    }
                }
                const colorIndexCanvas = loadedChunk.data[pixelInChunk];

                // Get outputImage values...
                const idx = (outputImageData.width * yi + xi) << 2;
                const r = outputImageData.data[idx + 0];
                const g = outputImageData.data[idx + 1];
                const b = outputImageData.data[idx + 2];
                const a = outputImageData.data[idx + 3];

                const colorIndexImage = colorConverter.convertActualColorFromPalette(
                    canvasData.colors,
                    canvasData.colorsReservedCount,
                    r,
                    g,
                    b,
                );

                // If alpha is below 30 ignore it.
                if (a > 30 && !colorConverter.areColorsEqual(canvasData.colors, colorIndexImage, colorIndexCanvas)) {
                    botState.canvasImageData.processedPixelsTodo.push(new PixelToPlace({ x, y }, colorIndexImage));
                }
            }
        }

        botState.config.imageHeight = outputImageData.height;
        botState.config.imageWidth = outputImageData.width;
        botState.config.imageTopLeft.x = placementConfiguration.xOffset;
        botState.config.imageTopLeft.y = placementConfiguration.yOffset;
    } finally {
        logger.log('bot processing end');
        botState.canvasImageData.isProcessing = false;
    }
}

export async function botPlacePixel(canvasId: number, pixel: Cell, colorIndex: number): Promise<void> {
    botState.pixelBeingPlaced = true;
    try {
        if (gameStore.gameState.activeCanvasId === undefined) {
            await updateMetadata();
            if (gameStore.gameState.activeCanvasId === undefined) {
                logger.logError('active canvas id is not set!');
                return;
            }
        }

        const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];
        if (!canvasData) {
            logger.logError('Could not find canvas data!');
            return;
        }

        const chunkCell = pixelToChunk({ x: pixel.x, y: pixel.y }, canvasData.size);
        const chunkIndex = chunkToIndex(chunkCell);
        const pixelInChunk = pixelInChunkOffset({ x: pixel.x, y: pixel.y }, canvasData.size);
        const loadedChunk = chunkStore.getChunk(chunkIndex);
        if (loadedChunk) {
            // Only if chunk is loaded we will check if color is the same.
            if (loadedChunk.data[pixelInChunk] === colorIndex) {
                // already the same, don't need to do anything.
                return;
            }
        }

        const response = await fetchPlacePixel({
            x: pixel.x,
            y: pixel.y,
            token: null,
            cn: canvasId.toString(),
            clr: colorIndex,
        });

        if (!response) {
            // That's a problem. Probably need to show re-captcha.
            alert('Captcha?');
            // TODO. For now just disable bot.
            botState.config.isEnabled = false;
            return;
        }

        // Wait till 0 to place next pixel to be safe.
        // since this is not shown anywhere, just replace it...
        botState.pixelPlaceTimeEmpty = new Date().getTime() + response.waitSeconds * 1000;

        if (response.success) {
            updatePixel(pixel, colorIndex);
        }
    } finally {
        botState.pixelBeingPlaced = false;
    }
}

async function waitFor(ms: number): Promise<void> {
    if (ms < 0) return;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function botStartWorkAsync(): Promise<void> {
    if (!botState.isFeatureEnabled || !botState.config.isEnabled) {
        return;
    }
    if (botState.canvasImageData.isBotWorkingInProgress) {
        logger.logError('Trying to start bot while already in progress?');
        return;
    }
    botState.canvasImageData.isBotWorkingInProgress = true;

    try {
        logger.log('Starting bot worker');
        // Make sure we have output we can work with.
        await botStartProcessingImage();

        if (botState.canvasImageData.processedPixelsTodo.length <= 0) {
            if (botState.config.isWatching) {
                logger.log('nothing to place, but keeping awake, watching for new pixels.');
            } else {
                // No more pixels to place.
                logger.logWarn('no pixels to place');
                return;
            }
        }
        // Main loop until nothing left to place.
        while (botState.canvasImageData.processedPixelsTodo.length > 0 || botState.config.isWatching) {
            if (gameStore.gameState.activeCanvasId === undefined) {
                return;
            }
            const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];

            const timeUntilEmpty = botState.pixelPlaceTimeEmpty - new Date().getTime();
            const pixelPlacingTimeout = Math.max(canvasData.timeoutOnEmpty, canvasData.timeoutOnReplace);
            // Wait until there's only few seconds left in timeout
            await waitFor(timeUntilEmpty - pixelPlacingTimeout * Math.random());

            if (botState.config.isWatching && botState.canvasImageData.processedPixelsTodo.length <= 0) {
                logger.log(`Waiting for few seconds between checks.`);
                await waitFor(2000);
            }

            while (
                botState.canvasImageData.processedPixelsTodo.length > 0 &&
                botState.pixelPlaceTimeEmpty - new Date().getTime() < canvasData.maxTimeout - pixelPlacingTimeout
            ) {
                if (!botState.isFeatureEnabled || !botState.config.isEnabled) {
                    logger.log(`bot worker disabled in the middle of it`);
                    return;
                }
                // keep on placing pixels while timeout is reached.
                const pixelTodo =
                    botState.canvasImageData.processedPixelsTodo[
                        botState.canvasImageData.processedPixelsTodo.length - 1
                    ];
                logger.log(`about to place ${JSON.stringify(pixelTodo)}`);
                await botPlacePixel(gameStore.gameState.activeCanvasId, pixelTodo.pos, pixelTodo.colorIndex);
                botState.canvasImageData.processedPixelsTodo.remove(pixelTodo);
            }
        }
        logger.logWarn('JOB IS DONE');
    } catch (error) {
        logger.logError(`Bot worker process has failed ${error}`);
    } finally {
        botState.canvasImageData.isBotWorkingInProgress = false;
        botState.config.isEnabled = false;
        botState.config.isWatching = false;
    }
}

export async function botUpdateEnabled(isEnabled: boolean): Promise<void> {
    if (!botState.isFeatureEnabled) {
        return;
    }

    if (!isEnabled) {
        botState.canvasImageData.processedPixelsTodo.replace([]);
        botState.config.isWatching = false;
    }
    botState.config.isEnabled = isEnabled;
    if (isEnabled) await botStartWorkAsync();
}
