import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearInputImageAction, outputImageDataMap, readImageDataMap, setInputImageAction, startNewImageReadingProcess, startProcessingOutputImage } from '../../actions/imageProcessing';
import { RootState } from '../store';

import { selectGameViewCenter, selectGameViewScale } from './gameSlice';

interface OverlayImageInputState {
    url?: string;
    fileUrl?: string;
    isReadingImage: boolean;
}
interface OverlayImageOutputState {
    isProcessing: boolean;
    imageData?: ImageData;
}

interface OverlayImageState {
    inputImage: OverlayImageInputState;
    outputImage: OverlayImageOutputState;
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
}

interface OverlaySavedConfigurationState {
    imageUrl: string;
    modifiers: ImageModifiersState;
    placementConfiguration: PlacementConfigurationState;
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
    overlayImage: { inputImage: { isReadingImage: false }, outputImage: { isProcessing: false } },
    placementConfiguration: { yOffset: 0, xOffset: 0, transparency: 100, isFollowMouseActive: false, autoSelectColor: false },
    modifications: { imageBrightness: 0, shouldConvertColors: false },
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
        setOverlayEnabled: (state, action: PayloadAction<boolean>) => {
            state.overlayEnabled = action.payload;
        },
        setWindowSize: (state, action: PayloadAction<{ innerWidth: number; innerHeight: number }>) => {
            state.browserWindow = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setInputImageAction.fulfilled, (state, action) => {
            state.overlayImage.inputImage.fileUrl = action.payload.fileUrl;
            state.overlayImage.inputImage.url = action.payload.url;
        });
        builder.addCase(startNewImageReadingProcess.pending, (state, action) => {
            state.overlayImage.inputImage.isReadingImage = true;
        });
        builder.addCase(startNewImageReadingProcess.fulfilled, (state, action) => {
            state.overlayImage.inputImage.isReadingImage = false;
        });
        builder.addCase(startNewImageReadingProcess.rejected, (state, action) => {
            state.overlayImage.inputImage.isReadingImage = false;
        });
        builder.addCase(clearInputImageAction.fulfilled, (state, action) => {
            state.overlayImage.inputImage.fileUrl = undefined;
            state.overlayImage.inputImage.url = undefined;
        });
        builder.addCase(startProcessingOutputImage.pending, (state, action) => {
            state.overlayImage.outputImage.isProcessing = true;
        });
        builder.addCase(startProcessingOutputImage.fulfilled, (state, action) => {
            state.overlayImage.outputImage.isProcessing = false;
            state.overlayImage.outputImage.imageData = action.payload;
        });
    },
});

const selectInputFileUrl = createSelector(
    (state: RootState) => state.overlay.overlayImage.inputImage.fileUrl,
    (fileUrl) => fileUrl
);

const selectInputUrl = createSelector(
    (state: RootState) => state.overlay.overlayImage.inputImage.url,
    (url) => url
);

export const selectCombinedInputUrl = createSelector(selectInputFileUrl, selectInputUrl, (fileUrl, url) => {
    return fileUrl || url;
});

export const selectIsModificationsAvailable = createSelector(
    selectCombinedInputUrl,
    (state: RootState) => state.overlay.overlayImage.inputImage.isReadingImage,
    (url, isReadingImage) => {
        // Workaround to get actual ImageData
        const imageData = url ? readImageDataMap[url] : undefined;
        return !!imageData;
    }
);

export const selectShouldShowFileInput = createSelector(selectInputFileUrl, selectInputUrl, (fileUrl, url) => {
    return (!fileUrl && !url) || !!(fileUrl && !url);
});

export const selectShouldShowUrlInput = createSelector(selectInputFileUrl, selectInputUrl, (fileUrl, url) => {
    return (!fileUrl && !url) || !!(!fileUrl && url);
});

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

export const selectIsOverlayEnabled = createSelector(
    (state: RootState) => state.overlay.overlayEnabled,
    (overlayEnabled) => overlayEnabled
);

export const selectIsOutputImageProcessing = createSelector(
    (state: RootState) => state.overlay.overlayImage.outputImage.isProcessing,
    (isProcessing) => isProcessing
);

export const selectOutputImageData = createSelector(
    selectCombinedInputUrl,
    (state: RootState) => state.overlay.overlayImage.outputImage.isProcessing,
    (url, isProcessing) => {
        if (!url) return undefined;
        const imageData = outputImageDataMap[url];
        if (!imageData) return undefined;
        return imageData;
    }
);

export const selectOverlayImageDataOrUrl = createSelector(selectCombinedInputUrl, selectOutputImageData, (url, imageData) => {
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
