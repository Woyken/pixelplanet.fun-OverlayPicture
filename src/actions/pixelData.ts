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

function updatePixelForBot(x: number, y: number, color: number): void {
    if (
        x >= botState.config.imageTopLeft.x &&
        x < botState.config.imageTopLeft.x + botState.config.imageWidth &&
        y >= botState.config.imageTopLeft.y &&
        y < botState.config.imageTopLeft.y + botState.config.imageHeight
    ) {
        // the pixel is within bot's area.
        // Just set it to correct value. Will resolve itself down the line.
        const result = botState.canvasImageData.processedPixelsTodo.find((p) => p.pos.x === x && p.pos.y === y);
        if (result) result.colorIndex = color;
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

    updatePixelForBot(pixel.x, pixel.y, colorIndex);
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
