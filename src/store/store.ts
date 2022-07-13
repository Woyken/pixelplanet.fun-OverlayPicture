import { configureStore } from '@reduxjs/toolkit';

import { chunkDataSlice } from './slices/chunkDataSlice';
import { gameSlice } from './slices/gameSlice';
import { overlaySlice } from './slices/overlaySlice';
import { pixelPlacementSlice } from './slices/pixelPlacementSlice';
import { processedImagesSlice } from './slices/precessedImages';

export function configureAppStore() {
    return configureStore({
        reducer: {
            overlay: overlaySlice.reducer,
            game: gameSlice.reducer,
            chunkData: chunkDataSlice.reducer,
            pixelPlacement: pixelPlacementSlice.reducer,
            processedImages: processedImagesSlice.reducer,
        },
        devTools: import.meta.env.DEV,
    });
}

export const store = configureAppStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
