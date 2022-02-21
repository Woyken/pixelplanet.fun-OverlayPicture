import { createAsyncThunk } from '@reduxjs/toolkit';

import { pictureConverterApi, tryReadingImageData } from '../pictureConversionApi';
import { selectCanvasUserPalette } from '../store/slices/gameSlice';
import {
    OverlaySavedConfigurationState,
    selectInputFile,
    selectInputImageData,
    selectInputUrl,
    selectModifierImageBrightness,
    selectModifierShouldConvertColors,
    selectSavedConfigurations,
} from '../store/slices/overlaySlice';
import { RootState } from '../store/store';
import { delay } from '../utils/promiseUtils';

type InputImage = File | string;
type SetInputImageActionResult = {
    url?: string;
    file?: File;
    fileId?: number;
};
export const setInputImageAction = createAsyncThunk<SetInputImageActionResult, InputImage, { state: RootState }>('imageProcessing/setInputImage', async (input, { dispatch, getState }) => {
    await dispatch(clearInputImageAction());

    const file = typeof input !== 'string' ? input : undefined;
    const url = typeof input === 'string' ? input : undefined;
    const fileId = typeof input === 'number' ? input : undefined;

    // if (typeof input !== 'string') {
    //     dbAddFile({inputImage: input, });
    // }

    // TODO check if this is needed.
    // Probably will have to wait for a small timeout until state actually updates
    delay(0).then(() => dispatch(startNewImageReadingProcess()));
    return {
        file,
        url,
        fileId,
    };
});

export const clearInputImageAction = createAsyncThunk<void, void, { state: RootState }>('imageProcessing/clearInputImage', async (_, { dispatch, getState }) => {
    dispatch(clearOutputImageAction());
    // const previousFileUrl = getState().overlay.overlayImage.inputImage.fileUrl;
    // if (previousFileUrl != null) {
    //     URL.revokeObjectURL(previousFileUrl);
    //     cleanupExistingImageDataProcess(previousFileUrl);
    // }
});

export const clearOutputImageAction = createAsyncThunk<void, void, { state: RootState }>('imageProcessing/clearOutputImage', async (_, { getState }) => {
    getState().overlay.overlayImage.outputImage.abortController?.abort();
    // const url = selectCombinedInputUrl(getState());
    // if (url == null) return;
    // delete outputImageDataMap[url];
    // cancelOngoingInputFileProcess(url);
});

export const startNewImageReadingProcess = createAsyncThunk<ImageData | undefined, void, { state: RootState }>('imageProcessing/startNewImageReadingProcess', async (_, { dispatch, getState }) => {
    const url = selectInputUrl(getState());
    const file = selectInputFile(getState());
    const abortController = new AbortController();
    if (url != null) return tryReadingImageData(url, abortController.signal);
    if (file != null) {
        const fileUrl = URL.createObjectURL(file);
        // schedule cleanup of the file url
        delay(0).then(() => URL.revokeObjectURL(fileUrl));
        return tryReadingImageData(fileUrl, abortController.signal);
    }
    return undefined;
});

export const startProcessingOutputImage = createAsyncThunk<{ outImageData: ImageData; abortController: AbortController }, void, { state: RootState }>(
    'imageProcessing/startProcessingOutputImage',
    async (_, { getState }) => {
        const palette = selectCanvasUserPalette(getState());
        const modifierShouldConvertColors = selectModifierShouldConvertColors(getState());
        const modifierImageBrightness = selectModifierImageBrightness(getState());
        const inputImageData = selectInputImageData(getState());
        if (inputImageData == null) throw new Error("Can't process output image without input image data");
        const abortController = new AbortController();
        const outImageData = await new Promise<ImageData>((resolve, reject) => {
            abortController.signal.onabort = () => reject(new Error('aborted'));
            pictureConverterApi
                .applyModificationsToImageData(palette, inputImageData, modifierShouldConvertColors, modifierImageBrightness)
                .then((imageData) => {
                    resolve(imageData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
        return { outImageData, abortController };
    }
);

export const loadSavedConfigurations = createAsyncThunk<OverlaySavedConfigurationState[], void, { state: RootState }>('imageProcessing/loadSavedConfigurations', async (_, { dispatch, getState }) => {
    return JSON.parse(localStorage.getItem('OverlaySavedConfigurationsv2') || '[]') as OverlaySavedConfigurationState[];
});

// TODO, this would work better as middleware
const saveCurrentConfigurationsToLocalStorage = createAsyncThunk<void, void, { state: RootState }>('imageProcessing/saveCurrentConfigurationsToLocalStorage', async (_, { getState }) => {
    const savedConfigurations = selectSavedConfigurations(getState());
    localStorage.setItem('OverlaySavedConfigurationsv2', JSON.stringify(savedConfigurations));
});

export const saveConfiguration = createAsyncThunk<OverlaySavedConfigurationState, OverlaySavedConfigurationState, { state: RootState }>(
    'imageProcessing/saveConfiguration',
    async (configuration, { dispatch }) => {
        delay(0).then(() => dispatch(saveCurrentConfigurationsToLocalStorage()));
        return configuration;
    }
);
