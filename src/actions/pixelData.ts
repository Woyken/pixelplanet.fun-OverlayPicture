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
import { ChunkCell, chunkToIndex, Cell } from '../chunkHelper';
import { UserDataResponse, CanvasMetadataResponse } from './pixelPlanetResponseTypes';
import { startProcessingImage } from './guiActions';

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

export function loadChunkData(canvasId: number, chunk: ChunkCell): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
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
                        id: parseInt(key),
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

export function setActiveCanvasByStringId(canvasStringId: string): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        if (getState().chunkData.canvasesMetadata[getState().chunkData.activeCanvasId]?.stringId === canvasStringId) {
            return;
        }
        const idx = getState().chunkData.canvasesMetadata.findIndex((v) => v.stringId === canvasStringId);
        if (idx >= 0) {
            dispatch({
                type: CANVAS_CHANGE_CANVAS,
                activeCanvasId: getState().chunkData.canvasesMetadata[idx].id,
            });
            await dispatch(startProcessingImage());
        }
    };
}
