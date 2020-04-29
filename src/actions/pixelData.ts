import { ChunkCell, chunkToIndex, Cell, pixelInChunkOffset, pixelToChunk } from '../chunkHelper';
import { UserDataResponse } from './pixelPlanetResponseTypes';
import colorConverter from '../colorConverter';
import { gameStore, CanvasMetadata } from '../store/gameStore';
import logger from '../handlers/logger';
import { chunkStore, LoadedChunkData } from '../store/chunkStore';
import { botState } from '../store/botState';
import { overlayStore } from '../store/overlayStore';

export async function fetchChunk(canvasId: number, chunk: ChunkCell): Promise<ArrayBuffer> {
    const url = `/chunks/${canvasId}/${chunk.chunkX}/${chunk.chunkY}.bmp`;
    const response = await fetch(url);
    if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        return arrayBuffer;
    } else {
        const error = new Error('Could not retrieve chunk data.');
        throw error;
    }
}

/**
 * 403 - unauthorized/protected pixel
 * 422 - re-captcha
 */
export interface PixelPlaceResponse {
    success: boolean;
    waitSeconds: number;
    coolDownSeconds: number;
    errors?: PixelPlaceResponseErrors[];
    /**
     * Only case seen for this is when pixel is protected.
     */
    errorTitle?: string;
}

export interface PixelPlaceResponseErrors {
    msg: string;
}

export interface PixelPlaceParams {
    /**
     * Numeric canvasId but as string
     */
    cn: string;
    /**
     * X coordinate where to place.
     * Left of center negative, right positive.
     */
    x: number;
    /**
     * Y coordinate where to place.
     * Above center negative, below positive.
     */
    y: number;
    /**
     * Color index
     */
    clr: number;
    /**
     * Google re-captcha token.
     * When already authenticated, null does go through.
     */
    token: string | null;
}

export async function fetchPlacePixel(params: PixelPlaceParams): Promise<PixelPlaceResponse | undefined> {
    const url = '/api/pixel';
    const response = await fetch(url, {
        credentials: 'omit',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    if (response.ok) {
        const pixelPlacedResponse = (await response.json()) as PixelPlaceResponse;
        return pixelPlacedResponse;
    }
    return;
}

export async function loadChunkData(canvasId: number, chunk: ChunkCell): Promise<void> {
    if (canvasId !== gameStore.gameState.activeCanvasId) {
        logger.logWarn('trying to load chunk from different canvas');
        // Wrong active canvas. Don't try to mix data from different canvases.
        return;
    }

    const chunkIndex = chunkToIndex(chunk);
    if (!chunkStore.getChunk(chunkIndex)) {
        // TODO add retries if failed.
        const result = new Int8Array(await fetchChunk(canvasId, chunk));
        chunkStore.addChunk(new LoadedChunkData(chunkIndex, Array.from(result)));
    }
}

export function updatePixel(pixel: Cell, colorIndex: number): void {
    if (gameStore.gameState.activeCanvasId === undefined) {
        return;
    }
    const index = pixelInChunkOffset(pixel, gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId].size);
    const chunk = pixelToChunk(pixel, gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId].size);

    const chunkData = chunkStore.getChunk(chunkToIndex(chunk))?.data;
    if (!chunkData) {
        // We've got nothing loaded to update.
        return;
    }
    chunkData[index] = colorIndex;

    if (
        botState.canvasImageData.diffAgainstInputData &&
        pixel.x >= botState.config.imageTopLeft.x &&
        pixel.x < botState.config.imageTopLeft.x + botState.config.imageWidth &&
        pixel.y >= botState.config.imageTopLeft.y &&
        pixel.y < botState.config.imageTopLeft.y + botState.config.imageHeight
    ) {
        // the pixel is within bot's area.
        // Just set it to correct value. Will resolve itself down the line.
        const x = pixel.x - botState.config.imageTopLeft.x;
        const y = pixel.y - botState.config.imageTopLeft.y;
        const offset = x + y * botState.config.imageWidth;
        const newDiffData = new Uint8Array(botState.canvasImageData.diffAgainstInputData);
        newDiffData[offset] = colorIndex;
        botState.canvasImageData.diffAgainstInputData = newDiffData;
    }
}

export async function setActiveCanvasByStringIdAfterMetadataFetch(): Promise<void> {
    const canvasStringId = gameStore.gameState.activeCanvasStringId;
    if (!canvasStringId) {
        return;
    }

    const idx = gameStore.canvasesMetadata.findIndex((v) => v.stringId === canvasStringId);
    if (idx >= 0) {
        gameStore.gameState.activeCanvasId = gameStore.canvasesMetadata[idx].id;
    } else {
        logger.logError(`Could not find stringId ${canvasStringId} in canvases list`);
    }
}

async function receivedMetadata(me: UserDataResponse): Promise<void> {
    const canvasesMetadata: CanvasMetadata[] = [];
    for (const key in me.canvases) {
        if (me.canvases.hasOwnProperty(key)) {
            const canvasMetadata = me.canvases[key];
            canvasesMetadata.push(CanvasMetadata.fromResponse(parseInt(key, 10), canvasMetadata));
        }
    }
    gameStore.canvasesMetadata.replace(canvasesMetadata);
    await setActiveCanvasByStringIdAfterMetadataFetch();
    gameStore.userData.dailyRanking = me.dailyRanking;
    gameStore.userData.dailyTotalPixels = me.dailyTotalPixels;
    gameStore.userData.mailreg = me.mailreg;
    gameStore.userData.name = me.name;
    gameStore.userData.ranking = me.ranking;
    gameStore.userData.totalPixels = me.totalPixels;
    gameStore.userData.minecraftname = me.minecraftname;
}

export async function logout(): Promise<void> {
    if (gameStore.userData.name === undefined && gameStore.userData.totalPixels === undefined) {
        return;
    }
    const response = await fetch('/api/auth/logout', {
        credentials: 'include',
    });
    if (response.ok) {
        const me = (await response.json()).me as UserDataResponse;
        await receivedMetadata(me);
    }
}

export async function updateMetadata(): Promise<void> {
    const response = await fetch('/api/me', {
        credentials: 'include',
    });

    if (response.ok) {
        const me = (await response.json()) as UserDataResponse;
        await receivedMetadata(me);
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
        botState.placeNextPixelAt = new Date().getTime() + response.waitSeconds * 1000;

        if (response.success) {
            updatePixel(pixel, colorIndex);
        }
    } finally {
        botState.pixelBeingPlaced = false;
    }
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
