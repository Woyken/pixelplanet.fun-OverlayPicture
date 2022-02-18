import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cell } from '../../chunkHelper';
import { RootState } from '../store';

interface GameGuiState {
    hoverPixel: Cell;
    viewScale: number;
    viewCenter: Cell;
}

interface CanvasState {
    palette: [number, number, number][];
    reservedColorCount: number;
}

interface GameState {
    gameGui: GameGuiState;
    canvas: CanvasState;
}

const initialState: GameState = {
    gameGui: {
        hoverPixel: { x: 0, y: 0 },
        viewScale: 1,
        viewCenter: { x: 0, y: 0 },
    },
    canvas: {
        palette: [],
        reservedColorCount: 0,
    },
};

export const gameSlice = createSlice({
    initialState,
    name: 'game',
    reducers: {
        setHoverPixel: (state, action: PayloadAction<Cell>) => {
            state.gameGui.hoverPixel = action.payload;
        },
        setViewScale: (state, action: PayloadAction<number>) => {
            state.gameGui.viewScale = action.payload;
        },
        setViewCenter: (state, action: PayloadAction<Cell>) => {
            state.gameGui.viewCenter = action.payload;
        },
        setPalette: (state, action: PayloadAction<[number, number, number][]>) => {
            state.canvas.palette = action.payload;
        },
    },
});

export const selectHoverPixel = createSelector(
    (state: RootState) => state.game.gameGui.hoverPixel,
    (hoverPixel) => hoverPixel
);

const selectCanvasReservedColorCount = createSelector(
    (state: RootState) => state.game.canvas.reservedColorCount,
    (reservedColorCount) => reservedColorCount
);

/**
 * Filtered out reserved colors from the palette
 */
export const selectCanvasUserPalette = createSelector(
    selectCanvasReservedColorCount,
    (state: RootState) => state.game.canvas.palette,
    (reservedColorCount, palette) => {
        return palette.slice(reservedColorCount);
    }
);

export const selectGameViewCenter = createSelector(
    (state: RootState) => state.game.gameGui.viewCenter,
    (viewCenter) => viewCenter
);

export const selectGameViewScale = createSelector(
    (state: RootState) => state.game.gameGui.viewScale,
    (viewScale) => viewScale
);
