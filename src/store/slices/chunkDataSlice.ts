import { RootState } from 'store/store';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectCanvasId, selectChunkCoords } from './gameSlice';

type ChunkData =
    | {
          fetching: false;
          chunkId: number;
          chunkData: Uint8Array;
      }
    | {
          chunkId: number;
          fetching: true;
      };

interface ChunkDataState {
    chunks: ChunkData[];
}

const initialState: ChunkDataState = {
    chunks: [],
};

export const chunkDataSlice = createSlice({
    initialState,
    name: 'chunkData',
    reducers: {
        addChunk: (state, action: PayloadAction<ChunkDataState['chunks'][0]>) => {
            state.chunks.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChunkDataAction.pending, (state, action) => {
            const foundChunk = state.chunks.some((x) => x.chunkId === action.meta.arg.chunkId);
            if (!foundChunk) {
                state.chunks.push({
                    chunkId: action.meta.arg.chunkId,
                    fetching: true,
                });
                return;
            }
            state.chunks = state.chunks.map((c) => {
                if (c.chunkId === action.meta.arg.chunkId) {
                    return {
                        chunkId: action.meta.arg.chunkId,
                        fetching: true,
                    };
                }
                return c;
            });
        });
        builder.addCase(fetchChunkDataAction.fulfilled, (state, action) => {
            const foundChunk = state.chunks.some((x) => x.chunkId === action.meta.arg.chunkId);
            if (!foundChunk) {
                state.chunks.push({
                    chunkId: action.meta.arg.chunkId,
                    chunkData: action.payload,
                    fetching: false,
                });
                return;
            }
            state.chunks = state.chunks.map((chunk) => {
                if (chunk.chunkId === action.meta.arg.chunkId) {
                    return {
                        ...chunk,
                        fetching: false,
                        chunkData: action.payload,
                    };
                }
                return chunk;
            });
        });
        builder.addCase(fetchChunkDataAction.rejected, (state, action) => {
            state.chunks = state.chunks.filter((x) => x.chunkId !== action.meta.arg.chunkId);
        });
    },
});

const fetchChunkDataAction = createAsyncThunk<Uint8Array, { chunkId: number }, { state: RootState }>('chunkData/fetchChunkData', async (chunkCoords, { getState }) => {
    const canvasId = selectCanvasId(getState());
    const { chunkX, chunkY } = selectChunkCoords(getState(), chunkCoords.chunkId);
    const chunkData = await fetch(`/chunks/${canvasId}/${chunkX}/${chunkY}.bmp`)
        .then((x) => x.arrayBuffer())
        .then((x) => new Uint8Array(x));
    return chunkData;
});
