import createCachedSelector from 're-reselect';
import { RootState } from 'store/store';
import { gameCoordsToScreen } from 'utils/coordConversion';

import { createSelector, createSlice, Dictionary, PayloadAction } from '@reduxjs/toolkit';

import { Cell, selectCanvasSize, selectGameViewCenter, selectGameViewScale } from './gameSlice';
import { selectWindowSize } from './overlaySlice';

interface PixelPlacementState {
    pixelsToPlaceQueue: {
        [key: string]: {
            coord: Cell;
            color: number;
        };
    };
    pixelPlaceQueueEnabled: boolean;
}

const initialState: PixelPlacementState = {
    pixelsToPlaceQueue: {},
    pixelPlaceQueueEnabled: false,
};

export const pixelPlacementSlice = createSlice({
    initialState,
    name: 'pixelPlacement',
    reducers: {
        addPixelsToPlaceQueue: (state, action: PayloadAction<{ canvasSize: number; pixels: { coord: Cell; color: number }[] }>) => {
            action.payload.pixels.forEach(({ coord, color }) => {
                const pixelId = coord.x + action.payload.canvasSize / 2 + (coord.y + action.payload.canvasSize / 2) * action.payload.canvasSize;
                state.pixelsToPlaceQueue[pixelId] = { coord, color };
            });
        },
        removePixelsFromPlaceQueue: (state, action: PayloadAction<{ canvasSize: number; pixels: { coord: Cell }[] }>) => {
            action.payload.pixels.forEach(({ coord }) => {
                const pixelId = coord.x + action.payload.canvasSize / 2 + (coord.y + action.payload.canvasSize / 2) * action.payload.canvasSize;
                delete state.pixelsToPlaceQueue[pixelId];
            });
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

const selectPixelsToPlaceQueue = createSelector(
    (state: RootState) => state.pixelPlacement.pixelsToPlaceQueue,
    (pixelsToPlaceQueue) => pixelsToPlaceQueue
);

const selectPixelsToPlaceIds = createSelector(
    (state: RootState) => state.pixelPlacement.pixelsToPlaceQueue,
    (pixelsToPlaceQueue) => Object.keys(pixelsToPlaceQueue).map((key) => parseInt(key, 10))
);

export const selectPixelsToPlaceQueueFirstPixel = createSelector(selectPixelsToPlaceIds, selectPixelsToPlaceQueue, (pixelsToPlaceIds, pixelsToPlaceQueue) => {
    const first = pixelsToPlaceIds[0];
    if (!first) return undefined;
    return pixelsToPlaceQueue[first];
});

const splitRenderCanvasSize = 1024;

export const selectRenderCanvasCoords = createCachedSelector(
    selectCanvasSize,
    (_: RootState, renderCanvasId: number) => renderCanvasId,
    (canvasSize, renderCanvasId) => {
        const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize);
        const renderCanvasXCorner = Math.floor(renderCanvasId % splitCanvasesWidth) * splitRenderCanvasSize - canvasSize / 2;
        const renderCanvasYCorner = Math.floor(renderCanvasId / splitCanvasesWidth) * splitRenderCanvasSize - canvasSize / 2;
        return {
            renderCanvasXCorner,
            renderCanvasYCorner,
        };
    }
)((_: RootState, renderCanvasId) => renderCanvasId);

const selectPixelIdsToPlaceByRenderCanvasId = createSelector(selectPixelsToPlaceIds, selectCanvasSize, (pixelsToPlaceIds, canvasSize) => {
    const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize);

    const dict = pixelsToPlaceIds.reduce((acc, pixelId) => {
        const x = pixelId % canvasSize;
        const y = Math.floor(pixelId / canvasSize);
        const splitRenderCanvasX = Math.floor(x / splitRenderCanvasSize);
        const splitRenderCanvasY = Math.floor(y / splitRenderCanvasSize);
        const splitRenderCanvasId = splitRenderCanvasX + splitRenderCanvasY * splitCanvasesWidth;
        const foundAccumulator = acc[splitRenderCanvasId];
        if (!foundAccumulator) {
            acc[splitRenderCanvasId] = [pixelId];
            return acc;
        }
        foundAccumulator.push(pixelId);
        return acc;
    }, {} as Dictionary<number[]>);
    return dict;
});

export const selectMainCanvasTopLeftScreenCoords = createSelector(
    selectCanvasSize,
    selectWindowSize,
    selectGameViewCenter,
    selectGameViewScale,
    (canvasSize, windowSize, gameViewCenter, gameViewScale) => {
        return gameCoordsToScreen({ x: -canvasSize / 2, y: -canvasSize / 2 }, { height: windowSize.innerHeight, width: windowSize.innerWidth }, gameViewCenter, gameViewScale);
    }
);

export const selectPixelsToPlaceRenderCanvasIds = createSelector(selectPixelIdsToPlaceByRenderCanvasId, (pixelIdsToPlaceByRenderCanvasId) =>
    Object.keys(pixelIdsToPlaceByRenderCanvasId).map((key) => parseInt(key, 10))
);

export const selectPixelsToPlaceBySplitRenderCanvasId = createCachedSelector(
    selectPixelIdsToPlaceByRenderCanvasId,
    selectPixelsToPlaceQueue,
    selectCanvasSize,
    (_: RootState, renderCanvasId: number) => renderCanvasId,
    (pixelIdsToPlaceByRenderCanvasId, pixelsToPlaceQueue, canvasSize, renderCanvasId) => {
        const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize);
        const splitRenderCanvasX = Math.floor(renderCanvasId % splitCanvasesWidth);
        const splitRenderCanvasY = Math.floor(renderCanvasId / splitCanvasesWidth);
        const splitRenderCanvasId = splitRenderCanvasX + splitRenderCanvasY * splitCanvasesWidth;
        const pixelIdsToPlace = pixelIdsToPlaceByRenderCanvasId[splitRenderCanvasId];
        if (!pixelIdsToPlace) return [];
        return pixelIdsToPlace
            .map((pixelId) => pixelsToPlaceQueue[pixelId])
            .filter((pixel) => !!pixel)
            .map((pixel) => pixel as NonNullable<typeof pixel>);
    }
)((_: RootState, renderCanvasId) => renderCanvasId);
