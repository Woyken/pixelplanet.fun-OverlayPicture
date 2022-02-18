import { createAsyncThunk } from '@reduxjs/toolkit';

import { pictureConverterApi, tryReadingImageData } from '../pictureConversionApi';
import { selectCanvasUserPalette } from '../store/slices/gameSlice';
import { overlaySlice, selectCombinedInputUrl, selectModifierImageBrightness, selectModifierShouldConvertColors } from '../store/slices/overlaySlice';
import { RootState } from '../store/store';
import { delay } from '../utils/promiseUtils';

interface OngoingFileProcess {
    id: string;
    abortController: AbortController;
}

const ongoingInputFileProcesses = {} as Record<string, OngoingFileProcess>;
const ongoingOutputFileProcesses = {} as Record<string, OngoingFileProcess>;
export const readImageDataMap = {} as Record<string, ImageData>;
export const outputImageDataMap = {} as Record<string, ImageData>;

function cleanupExistingImageDataProcess(fileUrl: string) {
    const process = ongoingInputFileProcesses[fileUrl];
    if (process) {
        process.abortController.abort();
        delete ongoingInputFileProcesses[fileUrl];
    }
    delete readImageDataMap[fileUrl];
}

type InputImage = File | string;
type SetInputImageActionResult = {
    url?: string;
    fileUrl?: string;
};
export const setInputImageAction = createAsyncThunk<SetInputImageActionResult, InputImage, { state: RootState }>('imageProcessing/setInputImage', async (input, { dispatch, getState }) => {
    await dispatch(clearInputImageAction());

    const fileUrl = typeof input !== 'string' ? URL.createObjectURL(input) : undefined;
    const url = typeof input === 'string' ? input : undefined;

    dispatch(startNewImageReadingProcess());
    return {
        url,
        fileUrl,
    };
});

export const clearInputImageAction = createAsyncThunk<void, void, { state: RootState }>('imageProcessing/clearInputImage', async (_, { dispatch, getState }) => {
    dispatch(clearOutputImageAction());
    const previousFileUrl = getState().overlay.overlayImage.inputImage.fileUrl;
    if (previousFileUrl != null) {
        URL.revokeObjectURL(previousFileUrl);
        cleanupExistingImageDataProcess(previousFileUrl);
    }
    const previousUrl = getState().overlay.overlayImage.inputImage.url;
    if (previousUrl != null) cleanupExistingImageDataProcess(previousUrl);
});

const clearOutputImageAction = createAsyncThunk<void, void, { state: RootState }>('imageProcessing/clearOutputImage', async (_, { getState }) => {
    const url = selectCombinedInputUrl(getState());
    if (url == null) return;
    delete outputImageDataMap[url];
    cancelOngoingInputFileProcess(url);
});

function cancelOngoingInputFileProcess(url: string) {
    const process = ongoingInputFileProcesses[url];
    if (process) {
        process.abortController.abort();
        delete ongoingInputFileProcesses[url];
    }
}

export const startNewImageReadingProcess = createAsyncThunk<unknown, void, { state: RootState }>('imageProcessing/startNewImageReadingProcess', async (_, { dispatch, getState }) => {
    // TODO check if this is needed.
    // Probably will have to wait for a small timeout until state actually updates
    await delay(0);
    const url = selectCombinedInputUrl(getState());
    if (url == null) return;
    const abortController = new AbortController();
    ongoingInputFileProcesses[url] = {
        id: url,
        abortController,
    };
    const result = await tryReadingImageData(url, abortController.signal);
    if (result) readImageDataMap[url] = result;
});

export const startProcessingOutputImage = createAsyncThunk<ImageData | undefined, void, { state: RootState }>('imageProcessing/startProcessingOutputImage', async (_, { getState }) => {
    const url = selectCombinedInputUrl(getState());
    const palette = selectCanvasUserPalette(getState());
    const modifierShouldConvertColors = selectModifierShouldConvertColors(getState());
    const modifierImageBrightness = selectModifierImageBrightness(getState());
    if (url == null) return undefined;
    // const abortController = new AbortController();
    const inputImageData = readImageDataMap[url];
    if (inputImageData == null) return undefined;
    const outImageData = await pictureConverterApi.applyModificationsToImageData(palette, inputImageData, modifierShouldConvertColors, modifierImageBrightness);
    outputImageDataMap[url] = outImageData;
    return outImageData;
});
