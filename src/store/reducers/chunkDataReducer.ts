import {
    CANVAS_LOAD_CHUNK_DATA,
    ChunkDataState,
    ActionTypes,
    PIXEL_UPDATE,
    CANVAS_RECEIVE_METADATA,
    RECEIVE_USER_DATA,
} from '../chunkDataTypes';
import { chunkToIndex, pixelInChunkOffset, pixelToChunk } from '../../chunkHelper';
import { BOT_FEATURE_ENABLED, BOT_CONFIG_ENABLED, BOT_IMAGE_PROCESSING, BOT_IMAGE_PROCESSED_DATA } from '../botState';

const initialState: ChunkDataState = {
    userData: {},
    loadedChunks: [],
    activeCanvasId: -1,
    canvasesMetadata: [],
    botState: {
        canvasImageData: {
            isProcessing: false,
        },
        config: {
            isEnabled: false,
        },
        isFeatureEnabled: false,
        placeNextPixelAt: 0,
    },
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
        case RECEIVE_USER_DATA: {
            return {
                ...state,
                userData: {
                    dailyRanking: action.userData.dailyRanking,
                    dailyTotalPixels: action.userData.dailyTotalPixels,
                    mailreg: action.userData.mailreg,
                    minecraftname: action.userData.minecraftname,
                    name: action.userData.name,
                    ranking: action.userData.ranking,
                    totalPixels: action.userData.totalPixels,
                },
            };
        }
        case BOT_FEATURE_ENABLED: {
            return {
                ...state,
                botState: {
                    ...state.botState,
                    isFeatureEnabled: action.isFeatureEnabled,
                },
            };
        }
        case BOT_CONFIG_ENABLED: {
            return {
                ...state,
                botState: {
                    ...state.botState,
                    config: {
                        ...state.botState.config,
                        isEnabled: action.isEnabled,
                    },
                },
            };
        }
        case BOT_IMAGE_PROCESSING: {
            return {
                ...state,
                botState: {
                    ...state.botState,
                    canvasImageData: {
                        ...state.botState.canvasImageData,
                        isProcessing: action.isImageProcessing,
                    },
                },
            };
        }
        case BOT_IMAGE_PROCESSED_DATA: {
            return {
                ...state,
                botState: {
                    ...state.botState,
                    canvasImageData: {
                        ...state.botState.canvasImageData,
                        diffAgainstInputData: action.diffAgainstInputData,
                    },
                },
            };
        }
        default:
            return state;
    }
}
