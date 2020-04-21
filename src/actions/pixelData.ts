import {
    CANVAS_LOAD_CHUNK_DATA,
    PIXEL_UPDATE,
    CANVAS_RECEIVE_METADATA,
    RECEIVE_USER_DATA,
    CANVAS_CHANGE_CANVAS,
    CanvasMetadata,
} from '../store/chunkDataTypes';
import { ThunkAction } from 'redux-thunk';
import { AppState, ActionTypes } from '../store';
import { ChunkCell, chunkToIndex, Cell, pixelInChunkOffset, pixelToChunk } from '../chunkHelper';
import { UserDataResponse, CanvasMetadataResponse } from './pixelPlanetResponseTypes';
import { BOT_IMAGE_PROCESSING, BOT_CONFIG_ENABLED, BOT_IMAGE_PROCESSED_DATA, BOT_FEATURE_ENABLED } from '../store/botState';
import colorConverter from '../colorConverter';

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

export async function fetchPlacePixel(
    params: PixelPlaceParams,
): Promise<PixelPlaceResponse | undefined> {
    const url = '/api/pixel';
    const response = await fetch(url);
    if (response.ok) {
        const pixelPlacedResponse = await response.json() as PixelPlaceResponse;
        return pixelPlacedResponse;
    }
    return;
}

export function loadChunkData(canvasId: number, chunk: ChunkCell): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState): Promise<void> => {
        const { chunkData } = getState();
        if (canvasId !== chunkData.activeCanvasId) {
            // Wrong active canvas. Don't try to mix data from different canvases.
            return;
        }

        const chunkIndex = chunkToIndex(chunk);
        if (!chunkData.loadedChunks[chunkIndex]) {
            // TODO add retries if failed.
            const result = new Int8Array(await fetchChunk(canvasId, chunk));
            dispatch({
                type: CANVAS_LOAD_CHUNK_DATA,
                chunkData: {
                    data: result,
                },
                chunk,
                canvasId,
            });
        }
    };
}

export function updatePixel(pixel: Cell, colorIndex: number): ActionTypes {
    return {
        type: PIXEL_UPDATE,
        pixel,
        colorIndex,
    }
}

export function updateMetadata(): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch) => {
        const response = await fetch('/api/me', {
            credentials: 'include',
        });

        if (response.ok) {
            const me = await response.json() as UserDataResponse;
            const canvasesMetadata: CanvasMetadata[] = [];
            for (const key in me.canvases) {
                if (me.canvases.hasOwnProperty(key)) {
                    const canvasMetadata = me.canvases[key];
                    canvasesMetadata.push({
                        stringId: canvasMetadata.ident,
                        title: canvasMetadata.title,
                        colors: canvasMetadata.colors,
                        colorsReservedCount: canvasMetadata.cli,
                        timeoutOnEmpty: canvasMetadata.bcd,
                        timeoutOnReplace: canvasMetadata.pcd,
                        maxTimeout: canvasMetadata.cds,
                        ranked: canvasMetadata.ranked,
                        pixelsMinimalRequirement: canvasMetadata.req,
                        sd: canvasMetadata.sd,
                        size: canvasMetadata.size,
                        description: canvasMetadata.desc,
                        id: parseInt(key, 10),
                    });
                }
            }
            dispatch({
                type: CANVAS_RECEIVE_METADATA,
                canvasesMetadata: canvasesMetadata,
            });
            dispatch({
                type: RECEIVE_USER_DATA,
                userData: {
                    dailyRanking: me.dailyRanking,
                    dailyTotalPixels: me.dailyTotalPixels,
                    mailreg: me.mailreg,
                    name: me.name,
                    ranking: me.ranking,
                    totalPixels: me.totalPixels,
                    minecraftname: me.minecraftname,
                },
            });
        }
    };
}

export function botPlacePixel(canvasId: number, pixel: Cell, colorIndex: number): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState): Promise<void> => {
        const response = await fetchPlacePixel({
            x: pixel.x,
            y: pixel.y,
            token: null,
            cn: canvasId.toString(),
            clr: colorIndex,
        });

        if (!response) {
            // That's a problem. Probably need to show re-captcha.
            // TODO. For now just disable bot.
            dispatch({
                type: BOT_CONFIG_ENABLED,
                isEnabled: false,
            });
            return;
        }
        if (response.success) {
            dispatch({
                colorIndex,
                pixel,
                type: PIXEL_UPDATE,
            });
        }
    };
}

export function botStartProcessingImage(): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        let { loadedChunks, activeCanvasId, canvasesMetadata } = getState().chunkData;
        const { outputImage } = getState().guiData.overlayImage;
        const { placementConfiguration } = getState().guiData;
        if (!outputImage.outputImageData) {
            return;
        }

        dispatch({
            type: BOT_IMAGE_PROCESSING,
            isImageProcessing: true,
        });
        try {
            const canvasData = canvasesMetadata[activeCanvasId];
            const canvasDiffColorsArray = new Uint8Array(
                outputImage.outputImageData.width * outputImage.outputImageData.height,
            );

            for (let xi = 0; xi < outputImage.outputImageData.width; xi++) {
                for (let yi = 0; yi < outputImage.outputImageData.height; yi++) {
                    const x = xi + placementConfiguration.xOffset;
                    const y = yi + placementConfiguration.yOffset;
                    const chunkCell = pixelToChunk({ x, y }, canvasData.size);

                    const chunkIndex = chunkToIndex(chunkCell);
                    const pixelInChunk = pixelInChunkOffset({ x, y }, canvasData.size);
                    let loadedChunk = loadedChunks[chunkIndex];
                    if (!loadedChunk) {
                        await dispatch(loadChunkData(canvasData.id, chunkCell));
                        loadedChunks = getState().chunkData.loadedChunks;
                        loadedChunk = loadedChunks[chunkIndex];
                        if (!loadedChunk) {
                            // TODO how do we recover from chunk fetching fails?
                            return;
                        }
                    }
                    const colorIndexCanvas = loadedChunk.data[pixelInChunk];

                    const offset = (xi + yi * outputImage.outputImageData.width);

                    // Get outputImage values...
                    const idx = (outputImage.outputImageData.width * y + x) << 2;
                    const r = outputImage.outputImageData.data[idx + 0];
                    const g = outputImage.outputImageData.data[idx + 1];
                    const b = outputImage.outputImageData.data[idx + 2];
                    const a = outputImage.outputImageData.data[idx + 3];

                    const colorIndexImage = colorConverter.convertActualColorFromPalette(
                        canvasData.colors,
                        canvasData.colorsReservedCount,
                        r,
                        g,
                        b,
                    );

                    // Add to array only if they are different or alpha is lower than magical number
                    canvasDiffColorsArray[offset] =
                        colorIndexImage === colorIndexCanvas || a <= 30
                            ? -1
                            : colorIndexCanvas;
                }
            }

            dispatch({
                type: BOT_IMAGE_PROCESSED_DATA,
                diffAgainstInputData: canvasDiffColorsArray,
            });

        } finally {
            dispatch({
                type: BOT_IMAGE_PROCESSING,
                isImageProcessing: false,
            });
        }
    };
}

export function botUpdateEnabled(isEnabled: boolean): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        if (!getState().chunkData.botState.isFeatureEnabled) {
            return;
        }

        dispatch({
            isEnabled,
            type: BOT_CONFIG_ENABLED,
        });
    };
}

export function botUpdateFeatureEnabled(isEnabled: boolean): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        dispatch({
            type: BOT_FEATURE_ENABLED,
            isFeatureEnabled: isEnabled,
        });
    };
}