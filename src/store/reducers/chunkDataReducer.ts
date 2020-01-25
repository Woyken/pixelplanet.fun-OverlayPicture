import {
    CANVAS_LOAD_CHUNK_DATA,
    ChunkDataState,
    ActionTypes,
    PIXEL_UPDATE,
    CANVAS_RECEIVE_METADATA,
} from '../chunkDataTypes';
import { chunkToIndex, pixelInChunkOffset, pixelToChunk } from '../../chunkHelper';

const initialState: ChunkDataState = {
    userData: {},
    loadedChunks: [],
    activeCanvasId: -1,
    canvasesMetadata: [],
};

export function chunkDataReducer(
    state = initialState,
    action: ActionTypes,
): ChunkDataState {
    switch (action.type) {
        case CANVAS_LOAD_CHUNK_DATA: {
            const allChunks = [
                ...state.loadedChunks,
            ];
            allChunks[chunkToIndex(action.chunk)] = action.chunkData;
            return {
                ...state,
                loadedChunks: allChunks,
            };
        }
        case PIXEL_UPDATE: {
            const index = pixelInChunkOffset(action.pixel, state.canvasesMetadata[state.activeCanvasId].size);
            const chunk = pixelToChunk(action.pixel, state.canvasesMetadata[state.activeCanvasId].size);
            const allChunks = [
                ...state.loadedChunks,
            ];
            allChunks[chunkToIndex(chunk)].data[index] = action.colorIndex;
            return {
                ...state,
                loadedChunks: allChunks,
            };
        }
        case CANVAS_RECEIVE_METADATA: {
            return {
                ...state,
                canvasesMetadata: action.canvasesMetadata,
            };
        }
        default:
            return state;
    }
}
