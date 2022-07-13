import { clearInputImageAction, clearOutputImageAction, startNewImageReadingProcess, startProcessingOutputImage } from 'actions/imageProcessing';

import { createSlice } from '@reduxjs/toolkit';

interface LoadedImageState {
    loadedImage: {
        status: 'loading' | 'loaded' | 'error' | 'none';
        error?: string;
        imageData?: ImageData;
    };
}

interface OverlayImageOutputState {
    abortController?: AbortController;
    isProcessing: boolean;
    imageData?: ImageData;
}

interface ProcessedImagesState {
    inputImage: LoadedImageState;
    outputImage: OverlayImageOutputState;
}

const initialState: ProcessedImagesState = {
    inputImage: {
        loadedImage: { status: 'none' },
    },
    outputImage: {
        isProcessing: false,
    },
};

export const processedImagesSlice = createSlice({
    initialState,
    name: 'processedImages',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(startNewImageReadingProcess.pending, (state) => {
            state.inputImage.loadedImage.status = 'loading';
            state.inputImage.loadedImage.error = undefined;
        });
        builder.addCase(startNewImageReadingProcess.fulfilled, (state, action) => {
            state.inputImage.loadedImage.status = 'loaded';
            state.inputImage.loadedImage.imageData = action.payload;
        });
        builder.addCase(startNewImageReadingProcess.rejected, (state, action) => {
            state.inputImage.loadedImage.status = 'error';
            state.inputImage.loadedImage.error = action.error.message;
        });
        builder.addCase(clearInputImageAction.fulfilled, (state) => {
            state.inputImage.loadedImage.status = 'none';
            state.inputImage.loadedImage.error = undefined;
            state.inputImage.loadedImage.imageData = undefined;
        });
        builder.addCase(startProcessingOutputImage.pending, (state) => {
            state.outputImage.isProcessing = true;
        });
        builder.addCase(startProcessingOutputImage.fulfilled, (state, action) => {
            state.outputImage.isProcessing = false;
            state.outputImage.imageData = action.payload.outImageData;
            state.outputImage.abortController = action.payload.abortController;
        });
        builder.addCase(clearOutputImageAction.fulfilled, (state) => {
            state.outputImage.imageData = undefined;
            state.outputImage.abortController = undefined;
            state.outputImage.isProcessing = false;
        });
    },
});
