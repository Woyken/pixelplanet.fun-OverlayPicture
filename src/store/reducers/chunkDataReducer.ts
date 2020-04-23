import {
    CANVAS_LOAD_CHUNK_DATA,
    ChunkDataState,
    ActionTypes,
    PIXEL_UPDATE,
    CANVAS_RECEIVE_METADATA,
    RECEIVE_USER_DATA,
    CANVAS_CHANGE_CANVAS,
} from '../chunkDataTypes';
import { chunkToIndex, pixelInChunkOffset, pixelToChunk } from '../../chunkHelper';
import { BOT_FEATURE_ENABLED, BOT_CONFIG_ENABLED, BOT_IMAGE_PROCESSING, BOT_IMAGE_PROCESSED_DATA, BOT_PIXEL_BEING_PLACED } from '../botState';

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
            imageHeight: 0,
            imageWidth: 0,
            imageTopLeft: {
                x: 0,
                y: 0,
            },
        },
        pixelBeingPlaced: false,
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
            const chunkData = allChunks[chunkToIndex(chunk)]?.data;
            if (!chunkData) {
                // We've got nothing loaded to update.
                return state;
            }
            chunkData[index] = action.colorIndex;

            let newBotState = state.botState;
            if (
                state.botState.canvasImageData.diffAgainstInputData
                && action.pixel.x >= state.botState.config.imageTopLeft.x
                && action.pixel.x < state.botState.config.imageTopLeft.x + state.botState.config.imageWidth
                && action.pixel.y >= state.botState.config.imageTopLeft.y
                && action.pixel.y < state.botState.config.imageTopLeft.y + state.botState.config.imageHeight
            ) {
                // the pixel is within bot's area.
                // Just set it to correct value. Will resolve itself down the line.
                const x = action.pixel.x - state.botState.config.imageTopLeft.x;
                const y = action.pixel.y - state.botState.config.imageTopLeft.y;
                const offset = (x + y * state.botState.config.imageWidth);
                const newDiffData = new Uint8Array(state.botState.canvasImageData.diffAgainstInputData);
                newDiffData[offset] = action.colorIndex;

                newBotState = {
                    ...state.botState,
                    canvasImageData: {
                        ...state.botState.canvasImageData,
                        diffAgainstInputData: newDiffData,
                    },
                };
            }

            return {
                ...state,
                loadedChunks: allChunks,
                botState: newBotState,
            };
        }
        case CANVAS_RECEIVE_METADATA: {
            return {
                ...state,
                canvasesMetadata: action.canvasesMetadata,
            };
        }
        case CANVAS_CHANGE_CANVAS: {
            return {
                ...state,
                activeCanvasId: action.activeCanvasId,
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
            let newConfig = state.botState.config;
            if (!action.diffAgainstInputData) {
                newConfig = {
                    ...state.botState.config,
                    imageHeight: 0,
                    imageWidth: 0,
                    imageTopLeft: {
                        x: 0,
                        y: 0,
                    },
                };
            } else if (action.imageMetadata) {
                newConfig = {
                    ...state.botState.config,
                    imageHeight: action.imageMetadata.height,
                    imageWidth: action.imageMetadata.width,
                    imageTopLeft: {
                        x: action.imageMetadata.x,
                        y: action.imageMetadata.y,
                    },
                };
            }
            return {
                ...state,
                botState: {
                    ...state.botState,
                    config: newConfig,
                    canvasImageData: {
                        ...state.botState.canvasImageData,
                        diffAgainstInputData: action.diffAgainstInputData,
                    },
                },
            };
        }
        case BOT_PIXEL_BEING_PLACED: {
            return {
                ...state,
                botState: {
                    ...state.botState,
                    pixelBeingPlaced: action.isBeingPlaced,
                },
            };
        }
        default:
            return state;
    }
}
