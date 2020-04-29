import { botState } from '../store/botState';
import { overlayStore } from '../store/overlayStore';
import logger from '../handlers/logger';
import { gameStore } from '../store/gameStore';
import { updateMetadata, loadChunkData, fetchPlacePixel, updatePixel } from './pixelData';
import { pixelToChunk, chunkToIndex, pixelInChunkOffset, Cell } from '../chunkHelper';
import { chunkStore } from '../store/chunkStore';
import colorConverter from '../colorConverter';

export async function botUpdateEnabled(isEnabled: boolean): Promise<void> {
    if (!botState.isFeatureEnabled) {
        return;
    }

    if (!isEnabled) {
        botState.canvasImageData.diffAgainstInputData = undefined;
    }
    botState.config.isEnabled = isEnabled;
}

export async function botUpdateFeatureEnabled(isEnabled: boolean): Promise<void> {
    if (!isEnabled) {
        botState.canvasImageData.diffAgainstInputData = undefined;
    }
    botState.isFeatureEnabled = isEnabled;
}

export async function botStartProcessingImage(): Promise<void> {
    if (!overlayStore.overlayImage.outputImage.outputImageData) {
        return;
    }

    botState.canvasImageData.isProcessing = true;
    try {
        logger.log('bot processing');
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
        const canvasDiffColorsArray = new Uint8Array(outputImageData.width * outputImageData.height);
        const placementConfiguration = overlayStore.placementConfiguration;
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
                const offset = xi + yi * outputImageData.width;

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

                // Add to array only if they are different or alpha is lower than magical number
                canvasDiffColorsArray[offset] =
                    colorConverter.areColorsEqual(canvasData.colors, colorIndexImage, colorIndexCanvas) || a <= 30
                        ? -1
                        : colorIndexImage;
            }
        }

        botState.config.imageHeight = outputImageData.height;
        botState.config.imageWidth = outputImageData.width;
        botState.config.imageTopLeft.x = placementConfiguration.xOffset;
        botState.config.imageTopLeft.y = placementConfiguration.yOffset;
        botState.canvasImageData.diffAgainstInputData = canvasDiffColorsArray;
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
