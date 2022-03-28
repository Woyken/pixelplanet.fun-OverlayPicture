import { pixelUpdatePacket } from 'gameInjection/webSockets/packets/pixelUpdate';
import { RootState } from 'store/store';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { selectCanvasId } from './gameSlice';

type ChunkData =
    | {
          fetching: false;
          chunkX: number;
          chunkY: number;
          chunkData: Uint8Array;
      }
    | {
          chunkX: number;
          chunkY: number;
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
        setPixel: (state, action: PayloadAction<ReturnType<typeof pixelUpdatePacket.hydrate>>) => {
            const { chunkX, chunkY, pixels } = action.payload;
            const chunk = state.chunks.find((x) => x.chunkX === chunkX && x.chunkY === chunkY);
            if (!chunk || chunk.fetching) return;
            pixels.forEach((p) => {
                chunk.chunkData.set([p.color], p.offsetInChunk);
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChunkDataAction.pending, (state, action) => {
            const foundChunk = state.chunks.some((x) => x.chunkX === action.meta.arg.chunkX && x.chunkY === action.meta.arg.chunkY);
            if (!foundChunk) {
                state.chunks.push({
                    chunkX: action.meta.arg.chunkX,
                    chunkY: action.meta.arg.chunkY,
                    fetching: true,
                });
                return;
            }
            state.chunks = state.chunks.map((c) => {
                if (c.chunkX === action.meta.arg.chunkX && c.chunkY === action.meta.arg.chunkY) {
                    return {
                        chunkX: action.meta.arg.chunkX,
                        chunkY: action.meta.arg.chunkY,
                        fetching: true,
                    };
                }
                return c;
            });
        });
        builder.addCase(fetchChunkDataAction.fulfilled, (state, action) => {
            const foundChunk = state.chunks.some((x) => x.chunkX === action.meta.arg.chunkX && x.chunkY === action.meta.arg.chunkY);
            if (!foundChunk) {
                state.chunks.push({
                    chunkX: action.meta.arg.chunkX,
                    chunkY: action.meta.arg.chunkY,
                    chunkData: action.payload,
                    fetching: false,
                });
                return;
            }
            state.chunks = state.chunks.map((chunk) => {
                if (chunk.chunkX === action.meta.arg.chunkX && chunk.chunkY === action.meta.arg.chunkY) {
                    return {
                        chunkX: action.meta.arg.chunkX,
                        chunkY: action.meta.arg.chunkY,
                        fetching: false,
                        chunkData: action.payload,
                    };
                }
                return chunk;
            });
        });
        builder.addCase(fetchChunkDataAction.rejected, (state, action) => {
            state.chunks = state.chunks.filter((x) => x.chunkX !== action.meta.arg.chunkX && x.chunkY !== action.meta.arg.chunkY);
        });
    },
});

const fetchChunkDataAction = createAsyncThunk<Uint8Array, { chunkX: number; chunkY: number }, { state: RootState }>('chunkData/fetchChunkData', async (chunkCoords, { getState }) => {
    const canvasId = selectCanvasId(getState());
    const chunkData = await fetch(`/chunks/${canvasId}/${chunkCoords.chunkX}/${chunkCoords.chunkY}.bmp`)
        .then((x) => x.arrayBuffer())
        .then((x) => new Uint8Array(x));
    return chunkData;
});
