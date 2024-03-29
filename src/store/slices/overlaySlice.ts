import colorConverter from 'colorConverter';

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearInputImageAction, clearOutputImageAction, loadSavedConfigurations, setInputImageAction, startProcessingOutputImage } from '../../actions/imageProcessing';
import { RootState } from '../store';

import { selectCanvasPalette, selectCanvasReservedColorCount, selectGameViewCenter, selectGameViewScale, selectHoverPixel } from './gameSlice';

interface OverlayImageInputState {
    url?: string;
    file?: File;
}

interface OverlayImageState {
    inputImage: OverlayImageInputState;
}

interface PlacementConfigurationState {
    xOffset: number;
    yOffset: number;
    transparency: number;
    isFollowMouseActive: boolean;
    autoSelectColor: boolean;
}

interface ImageModifiersState {
    shouldConvertColors: boolean;
    imageBrightness: number;
    smolPixels: boolean;
}

export interface OverlaySavedConfigurationState {
    imageUrl: string;
    modifiers: { shouldConvertColors: boolean; autoSelectColor: boolean; imageBrightness: number };
    placementConfiguration: { xOffset: number; yOffset: number; transparency: number };
}

interface BrowserWindowState {
    innerWidth: number;
    innerHeight: number;
}

interface OverlayState {
    savedConfigs: OverlaySavedConfigurationState[];
    overlayEnabled: boolean;
    overlayImage: OverlayImageState;
    placementConfiguration: PlacementConfigurationState;
    modifications: ImageModifiersState;
    isBotModalVisible: boolean;
    browserWindow: BrowserWindowState;
}

const initialState: OverlayState = {
    savedConfigs: [],
    overlayEnabled: true,
    overlayImage: { inputImage: {} },
    placementConfiguration: { yOffset: 0, xOffset: 0, transparency: 92, isFollowMouseActive: false, autoSelectColor: false },
    modifications: { imageBrightness: 0, shouldConvertColors: false, smolPixels: false },
    isBotModalVisible: false,
    browserWindow: { innerWidth: 100, innerHeight: 100 },
};

export const overlaySlice = createSlice({
    initialState,
    name: 'overlay',
    reducers: {
        setPlacementXOffset: (state, action: PayloadAction<number>) => {
            state.placementConfiguration.xOffset = action.payload;
        },
        setPlacementYOffset: (state, action: PayloadAction<number>) => {
            state.placementConfiguration.yOffset = action.payload;
        },
        setPlacementTransparency: (state, action: PayloadAction<number>) => {
            state.placementConfiguration.transparency = action.payload;
        },
        togglePlacementFollowMouse: (state) => {
            state.placementConfiguration.isFollowMouseActive = !state.placementConfiguration.isFollowMouseActive;
        },
        setPlacementIsFollowMouseActive: (state, action: PayloadAction<boolean>) => {
            state.placementConfiguration.isFollowMouseActive = action.payload;
        },
        setPlacementAutoSelectColor: (state, action: PayloadAction<boolean>) => {
            state.placementConfiguration.autoSelectColor = action.payload;
        },
        setModifierImageBrightness: (state, action: PayloadAction<number>) => {
            state.modifications.imageBrightness = action.payload;
        },
        setModifierShouldConvertColors: (state, action: PayloadAction<boolean>) => {
            state.modifications.shouldConvertColors = action.payload;
        },
        setModifierSmolPixels: (state, action: PayloadAction<boolean>) => {
            state.modifications.smolPixels = action.payload;
        },
        setOverlayEnabled: (state, action: PayloadAction<boolean>) => {
            state.overlayEnabled = action.payload;
        },
        setWindowSize: (state, action: PayloadAction<{ innerWidth: number; innerHeight: number }>) => {
            state.browserWindow = action.payload;
        },
        saveConfiguration: (state, action: PayloadAction<OverlaySavedConfigurationState>) => {
            const savedConfigurations = state.savedConfigs;
            const existingConfiguration = savedConfigurations.find((c) => c.imageUrl === action.payload.imageUrl);
            if (existingConfiguration != null) {
                existingConfiguration.modifiers = action.payload.modifiers;
                existingConfiguration.placementConfiguration = action.payload.placementConfiguration;
            } else {
                savedConfigurations.push(action.payload);
            }
        },
        removeSavedConfig: (state, action: PayloadAction<string>) => {
            const savedConfigurations = state.savedConfigs;
            const existingConfiguration = savedConfigurations.find((c) => c.imageUrl === action.payload);
            if (existingConfiguration) {
                savedConfigurations.splice(savedConfigurations.indexOf(existingConfiguration), 1);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setInputImageAction.fulfilled, (state, action) => {
            state.overlayImage.inputImage.url = action.payload.url;
            state.overlayImage.inputImage.file = action.payload.file;
        });
        builder.addCase(clearInputImageAction.fulfilled, (state) => {
            state.overlayImage.inputImage.file = undefined;
            state.overlayImage.inputImage.url = undefined;
        });
        builder.addCase(loadSavedConfigurations.fulfilled, (state, action) => {
            state.savedConfigs = action.payload;
        });
    },
});

export const selectInputUrl = createSelector(
    (state: RootState) => state.overlay.overlayImage.inputImage.url,
    (url) => url
);

export const selectInputImageData = createSelector(
    (state: RootState) => state.processedImages.inputImage.loadedImage.imageData,
    (imageData) => imageData
);

export const selectIsModificationsAvailable = createSelector(selectInputImageData, (inputImageData) => {
    return !!inputImageData;
});

export const selectInputFile = createSelector(
    (state: RootState) => state.overlay.overlayImage.inputImage.file,
    (file) => file
);

export const selectFileName = createSelector(selectInputFile, selectInputUrl, (file, url) => {
    const fileName = file?.name ?? url?.split('/').pop();
    if (fileName) {
        return {
            fileName,
            fileExtension: fileName.split('.').pop(),
            fileNameWithoutExtension: fileName.split('.').slice(0, -1).join('.'),
        };
    }
    return undefined;
});

export const selectShouldShowPlacementConfiguration = createSelector(selectInputFile, selectInputUrl, (file, url) => file || url);

export const selectPlacementXOffset = createSelector(
    (state: RootState) => state.overlay.placementConfiguration.xOffset,
    (xOffset) => xOffset
);

export const selectPlacementYOffset = createSelector(
    (state: RootState) => state.overlay.placementConfiguration.yOffset,
    (yOffset) => yOffset
);

export const selectPlacementTransparency = createSelector(
    (state: RootState) => state.overlay.placementConfiguration.transparency,
    (transparency) => transparency
);

export const selectPlacementIsFollowMouseActive = createSelector(
    (state: RootState) => state.overlay.placementConfiguration.isFollowMouseActive,
    (isFollowMouseActive) => isFollowMouseActive
);

export const selectPlacementAutoSelectColor = createSelector(
    (state: RootState) => state.overlay.placementConfiguration.autoSelectColor,
    (autoSelectColor) => autoSelectColor
);

export const selectModifierImageBrightness = createSelector(
    (state: RootState) => state.overlay.modifications.imageBrightness,
    (imageBrightness) => imageBrightness
);

export const selectModifierShouldConvertColors = createSelector(
    (state: RootState) => state.overlay.modifications.shouldConvertColors,
    (shouldConvertColors) => shouldConvertColors
);

export const selectModifierSmolPixels = createSelector(
    (state: RootState) => state.overlay.modifications.smolPixels,
    (smolPixels) => smolPixels
);

export const selectIsOverlayEnabled = createSelector(
    (state: RootState) => state.overlay.overlayEnabled,
    (overlayEnabled) => overlayEnabled
);

export const selectInputImageLoadingStatus = createSelector(
    (state: RootState) => state.processedImages.inputImage.loadedImage.status,
    (status) => status
);

export const selectIsOutputImageProcessing = createSelector(
    (state: RootState) => state.processedImages.outputImage.isProcessing,
    (isProcessing) => isProcessing
);

const selectOutputImageData = createSelector(
    (state: RootState) => state.processedImages.outputImage.isProcessing,
    (state: RootState) => state.processedImages.outputImage.imageData,
    (state: RootState) => state.processedImages.outputImage.abortController,
    (isProcessing, imageData, abortController) => {
        if (!isProcessing && imageData) {
            return imageData;
        }
        return undefined;
    }
);

export const selectRenderImageData = createSelector(selectOutputImageData, selectInputImageData, (outputImageData, inputImageData) => {
    return outputImageData || inputImageData;
});

export const selectShouldShowImageFromData = createSelector(selectRenderImageData, (imageData) => !!imageData);

export const selectShouldShowImageFromUrl = createSelector(selectShouldShowImageFromData, selectInputFile, selectInputUrl, (shouldShowImageFromData, file, url) => {
    if (shouldShowImageFromData) return false;
    if (file || url) return true;
    return false;
});

export const selectOverlayImageDataOrUrl = createSelector(selectInputUrl, selectOutputImageData, (url, imageData) => {
    return imageData || url;
});

export const selectWindowSize = createSelector(
    (state: RootState) => state.overlay.browserWindow.innerHeight,
    (state: RootState) => state.overlay.browserWindow.innerWidth,
    (innerHeight, innerWidth) => {
        return { innerHeight, innerWidth };
    }
);

// leftOffset: window.innerWidth / 2 - (gameState.centerX - placementConfiguration.xOffset) * gameStore.gameState.viewScale,
// topOffset: window.innerHeight / 2 - (gameState.centerY - placementConfiguration.yOffset) * gameStore.gameState.viewScale,
export const selectOverlayOffsetCoordsOnScreen = createSelector(
    selectWindowSize,
    selectGameViewCenter,
    selectPlacementXOffset,
    selectPlacementYOffset,
    selectGameViewScale,
    (windowSize, gameViewCenter, xOffset, yOffset, viewScale) => {
        const leftOffset = windowSize.innerWidth / 2 - (gameViewCenter.x - xOffset) * viewScale;
        const topOffset = windowSize.innerHeight / 2 - (gameViewCenter.y - yOffset) * viewScale;
        return { leftOffset, topOffset };
    }
);

export const selectCurrentHoverPixelOnOutputImageColorIndexInPalette = createSelector(
    selectPlacementAutoSelectColor,
    selectModifierSmolPixels,
    selectHoverPixel,
    selectPlacementXOffset,
    selectPlacementYOffset,
    selectRenderImageData,
    selectCanvasPalette,
    selectCanvasReservedColorCount,
    (autoSelectColor, modifierSmolPixels, hoverPixel, placementXOffset, placementYOffset, renderImageData, palette, reservedColorCount) => {
        if (!autoSelectColor) return undefined;
        if (!renderImageData) return undefined;
        const smolPixelsCanvasSizeModifier = modifierSmolPixels ? 3 : 1;
        const smolPixelsCanvasExtraOffsetToMiddle = Math.floor(smolPixelsCanvasSizeModifier / 2);
        const offsetXInImage = (hoverPixel.x - placementXOffset) * smolPixelsCanvasSizeModifier + smolPixelsCanvasExtraOffsetToMiddle;
        const offsetYInImage = (hoverPixel.y - placementYOffset) * smolPixelsCanvasSizeModifier + smolPixelsCanvasExtraOffsetToMiddle;
        if (offsetXInImage < 0 || offsetXInImage >= renderImageData.width || offsetYInImage < 0 || offsetYInImage >= renderImageData.height) return undefined;
        // eslint-disable-next-line no-bitwise
        const idx = (renderImageData.width * offsetYInImage + offsetXInImage) << 2;
        const r = renderImageData.data[idx + 0];
        const g = renderImageData.data[idx + 1];
        const b = renderImageData.data[idx + 2];
        const a = renderImageData.data[idx + 3];
        if (r == null || g == null || b == null || a == null) return undefined;
        if (a < 30) return undefined;
        const colorIndex = colorConverter.convertActualColorFromPalette(palette, reservedColorCount, r, g, b);
        return colorIndex;
    }
);

export const selectSavedConfigurations = createSelector(
    (state: RootState) => state.overlay.savedConfigs,
    (savedConfigurations) => savedConfigurations
);

export const selectCurrentStateAsConfiguration = createSelector(
    selectInputUrl,
    selectPlacementXOffset,
    selectPlacementYOffset,
    selectPlacementTransparency,
    selectPlacementAutoSelectColor,
    selectModifierImageBrightness,
    selectModifierShouldConvertColors,
    (inputUrl, xOffset, yOffset, transparency, autoSelectColor, imageBrightness, shouldConvertColors): OverlaySavedConfigurationState | undefined => {
        if (!inputUrl) return undefined;
        return {
            imageUrl: inputUrl,
            modifiers: {
                autoSelectColor,
                imageBrightness,
                shouldConvertColors,
            },
            placementConfiguration: {
                xOffset,
                yOffset,
                transparency,
            },
        };
    }
);
