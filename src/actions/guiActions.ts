import { ActionTypes, UPDATE_IMAGE_MODIFIERS, UPDATE_INPUT_IMAGE, UPDATE_OUTPUT_IMAGE, UPDATE_OUTPUT_IMAGE_STATUS, UPDATE_IMAGE_PLACEMENT_CONFIGURATION, UPDATE_GAME_STATE, UPDATE_OVERLAY_ENABLED, LOAD_SAVED_CONFIGURATIONS, SAVE_CURRENT_CONFIGURATION, SavedConfiguration } from "../store/guiTypes";
import { AppState } from "../store";
import { ThunkAction } from "redux-thunk";
import { pictureConverter } from "../pictureConverter";
import logger from "../handlers/logger";
import { configurationStore } from "../configurationStore";

export function updateOverlayEnabled(isEnabled: boolean): ActionTypes {
    return {
        type: UPDATE_OVERLAY_ENABLED,
        isEnabled,
    };
}

export function updateImageModifiers(modificationsAvailable?: boolean, doModifications?: boolean, shouldConvertColors?: boolean, imageBrightness?: number): ActionTypes {
    return {
        type: UPDATE_IMAGE_MODIFIERS,
        modificationsAvailable: modificationsAvailable,
        doModifications: doModifications,
        imageBrightness: imageBrightness,
        shouldConvertColors: shouldConvertColors,
    };
}

export function updateInputImage(url?: string, file?: File): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_INPUT_IMAGE,
            file,
            url,
        });
        if (!url && !file) {
            // Clear output image
            dispatch(updateOutputImage())
            return;
        }
        if (url) {
            if (!pictureConverter.isImageValidCors(url)) {
                // No point in trying to parse this out.
                // Clear output image
                dispatch(updateOutputImage());
                return;
            }
        }
        if (!getState().guiData.modifications.modificationsAvailable || !getState().guiData.modifications.doModifications) {
            // Modifications should not be made. Clean up output image.
            dispatch(updateOutputImage(undefined));
            return;
        }
        dispatch(updateOutputImageStatus(true));
        try {
            let buffer: ArrayBuffer;
            if (url) {
                const response = await fetch(url);
                buffer = await response.arrayBuffer();
            } else if (file) {
                buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const data = reader.result as ArrayBuffer;
                        resolve(data);
                    };
                    reader.readAsArrayBuffer(file);
                });
            } else {
                // This shouldn't be possible.
                throw new Error('Something unexpected happened');
            }

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;

            const result = await pictureConverter.convertPictureFromUrl(buffer, ctx, false, 0);
            dispatch(updateOutputImage(result));
        }
        catch (err) {
            logger.logError(`Something went wrong while parsing picture: ${err}`);
            // Likely to happen when fetching image
            dispatch(updateOutputImage(undefined));
        }
        finally {
            dispatch(updateOutputImageStatus(false));
        }
    }
}

export function updateOutputImage(data?: ImageData): ActionTypes {
    return {
        type: UPDATE_OUTPUT_IMAGE,
        imageData: data,
    }
}

export function updateOutputImageStatus(isProcessing: boolean): ActionTypes {
    return {
        type: UPDATE_OUTPUT_IMAGE_STATUS,
        isProcessing: isProcessing,
    }
}

export function updateImagePlacementConfiguration(transparency?: number, xOffset?: number, yOffset?: number): ActionTypes {
    return {
        type: UPDATE_IMAGE_PLACEMENT_CONFIGURATION,
        transparency,
        xOffset,
        yOffset,
    };
}

export function updateGameState(canvasStringId?: string, centerX?: number, centerY?: number, zoomLevel?: number, isMouseDragging?: boolean): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        const state = getState();
        if (
            (canvasStringId === undefined
                || canvasStringId === state.guiData.currentGameState.canvasStringId)
            && (centerX === undefined
                || centerX === state.guiData.currentGameState.centerX)
            && (centerY === undefined
                || centerY === state.guiData.currentGameState.centerY)
            && (zoomLevel === undefined
                || zoomLevel === state.guiData.currentGameState.zoomLevel)
            && (isMouseDragging === undefined
                || isMouseDragging === state.guiData.currentGameState.isMouseDragging)
        ) {
            return;
        }

        dispatch({
            type: UPDATE_GAME_STATE,
            canvasStringId,
            centerX,
            centerY,
            zoomLevel,
            isMouseDragging,
        });
    }
}

const storageItemName: string = 'OverlaySavedConfigurationsv2';

export function loadSavedConfigurations(): ActionTypes {
    const serializedSavedData = localStorage.getItem(storageItemName);
    if (serializedSavedData == null) {
        // Nothing saved yet. 
        // For backwards compatibility, check old storage location, just in case:
        const oldConfigs = configurationStore.getSavedConfigurationsState();
        if (oldConfigs.length > 0) {
            // Consider it migrated, clear the old storage.
            configurationStore.clear();
        }
        localStorage.setItem(storageItemName, JSON.stringify(oldConfigs));
        return {
            type: LOAD_SAVED_CONFIGURATIONS,
            config: {
                configs: oldConfigs,
            },
        }

    }

    const data = JSON.parse(serializedSavedData) as SavedConfiguration[];
    return {
        type: LOAD_SAVED_CONFIGURATIONS,
        config: {
            configs: data,
        },
    }
}

export function saveCurrentConfiguration(): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        const state = getState();
        const imgUrl = state.guiData.overlayImage.inputImage.url;
        if (!imgUrl) {
            // If it's empty or undefined, we can't save it.
            return;
        }

        const idx = state.guiData.savedConfigurations.configs.findIndex((v) => {
            return v.imageUrl === imgUrl;
        })
        if (idx >= 0) {
            logger.log('Saving current configuration, same url already exists, replacing saved data.');
            // Already exists, need to replace existing one.
            // For now just remove it from the lsit and readd as new.
            const newList = state.guiData.savedConfigurations.configs;
            newList.splice(idx, 1);
            dispatch({
                type: LOAD_SAVED_CONFIGURATIONS,
                config: {
                    configs: [
                        ...newList,
                        {
                            imageUrl: imgUrl,
                            modifiers: state.guiData.modifications,
                            placementConfiguration: state.guiData.placementConfiguration,
                        },
                    ],
                },
            });
            // Save it to the storage.
            localStorage.setItem(storageItemName, JSON.stringify(getState().guiData.savedConfigurations.configs));
            return;
        }

        dispatch({
            type: SAVE_CURRENT_CONFIGURATION,
            config: {
                imageUrl: imgUrl,
                modifiers: state.guiData.modifications,
                placementConfiguration: state.guiData.placementConfiguration,
            },
        });

        // Save it to the storage.
        localStorage.setItem(storageItemName, JSON.stringify(getState().guiData.savedConfigurations.configs));
    };
}

export function removeSavedConfiguration(imgUrl: string): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        const state = getState();
        const idx = state.guiData.savedConfigurations.configs.findIndex((v) => {
            return v.imageUrl === imgUrl;
        })
        if (idx < 0) {
            logger.log('When removing saved config. Config with url was not found');
            return;
        }
        // exists. remove it
        const newList = state.guiData.savedConfigurations.configs;
        newList.splice(idx, 1);
        dispatch({
            type: LOAD_SAVED_CONFIGURATIONS,
            config: {
                configs: newList,
            },
        });
        // Save it to the storage.
        localStorage.setItem(storageItemName, JSON.stringify(newList));
    };
}

export function applySavedConfiguration(savedConfig: SavedConfiguration): ThunkAction<
    Promise<void>,
    AppState,
    null,
    ActionTypes
> {
    return async (dispatch, getState) => {
        await dispatch(updateInputImage(savedConfig.imageUrl));
        await dispatch(updateImagePlacementConfiguration(savedConfig.placementConfiguration.transparency, savedConfig.placementConfiguration.xOffset, savedConfig.placementConfiguration.yOffset));
        await dispatch(updateImageModifiers(savedConfig.modifiers.modificationsAvailable, savedConfig.modifiers.doModifications, savedConfig.modifiers.shouldConvertColors, savedConfig.modifiers.imageBrightness));
    };
}
