import { RootState } from 'store/store';

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cell } from './gameSlice';

interface PixelPlacementState {
    pixelsToPlaceQueue: {
        coord: Cell;
        color: number;
    }[];
    pixelPlaceQueueEnabled: boolean;
}

const initialState: PixelPlacementState = {
    pixelsToPlaceQueue: [],
    pixelPlaceQueueEnabled: false,
};

export const pixelPlacementSlice = createSlice({
    initialState,
    name: 'pixelPlacement',
    reducers: {
        addPixelsToPlaceQueue: (state, action: PayloadAction<{ coord: Cell; color: number }[]>) => {
            // filter by already existing coordinates, replace existing, add new
            state.pixelsToPlaceQueue = state.pixelsToPlaceQueue.filter(
                (existing) => !action.payload.some((newPixel) => existing.coord.x === newPixel.coord.x && existing.coord.y === newPixel.coord.y)
            );
            state.pixelsToPlaceQueue.push(...action.payload);
        },
        removePixelsFromPlaceQueue: (state, action: PayloadAction<{ coord: Cell }[]>) => {
            state.pixelsToPlaceQueue = state.pixelsToPlaceQueue.filter(
                (existing) => !action.payload.some((newPixel) => existing.coord.x === newPixel.coord.x && existing.coord.y === newPixel.coord.y)
            );
        },
        setPixelPlaceQueueEnabled: (state, action: PayloadAction<boolean>) => {
            state.pixelPlaceQueueEnabled = action.payload;
        },
    },
});

export const selectPixelPlaceQueueEnabled = createSelector(
    (state: RootState) => state.pixelPlacement.pixelPlaceQueueEnabled,
    (pixelPlaceQueueEnabled) => pixelPlaceQueueEnabled
);

export const selectPixelsToPlaceQueue = createSelector(
    (state: RootState) => state.pixelPlacement.pixelsToPlaceQueue,
    (pixelsToPlaceQueue) => pixelsToPlaceQueue
);

export const selectPixelsToPlaceQueueFirstPixel = createSelector(selectPixelsToPlaceQueue, (pixelsToPlaceQueue) => pixelsToPlaceQueue[0]);
