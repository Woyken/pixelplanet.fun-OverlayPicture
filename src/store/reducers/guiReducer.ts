import {
    GuiParametersState,
    ActionTypes,
    UPDATE_OUTPUT_IMAGE_STATUS,
    UPDATE_IMAGE_MODIFIERS,
    UPDATE_INPUT_IMAGE,
    UPDATE_OUTPUT_IMAGE,
    UPDATE_IMAGE_PLACEMENT_CONFIGURATION,
    UPDATE_GAME_STATE,
    UPDATE_OVERLAY_ENABLED,
    LOAD_SAVED_CONFIGURATIONS,
    SAVE_CURRENT_CONFIGURATION,
    UPDATE_BOT_MODAL_VISIBLE,
} from '../guiTypes';

const initialState: GuiParametersState = {
    modifications: {
        modificationsAvailable: false,
        doModifications: false,
        imageBrightness: 0,
        shouldConvertColors: false,
    },
    overlayImage: {
        inputImage: {},
        outputImage: {
            isProcessing: false,
        },
    },
    placementConfiguration: {
        transparency: 70,
        xOffset: 0,
        yOffset: 0,
    },
    currentGameState: {
        canvasStringId: '0',
        centerX: 0,
        centerY: 0,
        zoomLevel: 0,
        isMouseDragging: false,
    },
    overlayEnabled: true,
    savedConfigurations: {
        configs: [],
    },
    isBotModalVisible: false,
};

export function guiDataReducer(state = initialState, action: ActionTypes): GuiParametersState {
    switch (action.type) {
        case UPDATE_OUTPUT_IMAGE_STATUS: {
            return {
                ...state,
                overlayImage: {
                    ...state.overlayImage,
                    outputImage: {
                        ...state.overlayImage.outputImage,
                        isProcessing: action.isProcessing,
                    },
                },
            };
        }
        case UPDATE_OUTPUT_IMAGE: {
            return {
                ...state,
                overlayImage: {
                    ...state.overlayImage,
                    outputImage: {
                        ...state.overlayImage.outputImage,
                        outputImageData: action.imageData,
                    },
                },
            };
        }
        case UPDATE_IMAGE_MODIFIERS: {
            return {
                ...state,
                modifications: {
                    modificationsAvailable: action.modificationsAvailable ?? state.modifications.modificationsAvailable,
                    doModifications: action.doModifications ?? state.modifications.doModifications,
                    imageBrightness: action.imageBrightness ?? state.modifications.imageBrightness,
                    shouldConvertColors: action.shouldConvertColors ?? state.modifications.shouldConvertColors,
                },
            };
        }
        case UPDATE_INPUT_IMAGE: {
            return {
                ...state,
                overlayImage: {
                    ...state.overlayImage,
                    inputImage: {
                        file: action.file,
                        url: action.url,
                    },
                },
            };
        }
        case UPDATE_IMAGE_PLACEMENT_CONFIGURATION: {
            return {
                ...state,
                placementConfiguration: {
                    transparency: action.transparency ?? state.placementConfiguration.transparency,
                    xOffset: action.xOffset ?? state.placementConfiguration.xOffset,
                    yOffset: action.yOffset ?? state.placementConfiguration.yOffset,
                },
            };
        }
        case UPDATE_GAME_STATE: {
            return {
                ...state,
                currentGameState: {
                    canvasStringId: action.canvasStringId ?? state.currentGameState.canvasStringId,
                    centerX: action.centerX ?? state.currentGameState.centerX,
                    centerY: action.centerY ?? state.currentGameState.centerY,
                    zoomLevel: action.zoomLevel ?? state.currentGameState.zoomLevel,
                    isMouseDragging: action.isMouseDragging ?? state.currentGameState.isMouseDragging,
                },
            };
        }
        case UPDATE_OVERLAY_ENABLED: {
            return {
                ...state,
                overlayEnabled: action.isEnabled,
            };
        }
        case LOAD_SAVED_CONFIGURATIONS: {
            return {
                ...state,
                savedConfigurations: action.config,
            };
        }
        case SAVE_CURRENT_CONFIGURATION: {
            return {
                ...state,
                savedConfigurations: {
                    configs: [...state.savedConfigurations.configs, action.config],
                },
            };
        }
        case UPDATE_BOT_MODAL_VISIBLE: {
            return {
                ...state,
                isBotModalVisible: action.isVisible,
            };
        }
        default: {
            return state;
        }
    }
}
