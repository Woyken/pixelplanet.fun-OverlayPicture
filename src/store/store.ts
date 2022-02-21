import { configureStore } from '@reduxjs/toolkit';

import { gameSlice } from './slices/gameSlice';
import { overlaySlice } from './slices/overlaySlice';

export const store = configureStore({
    reducer: {
        overlay: overlaySlice.reducer,
        game: gameSlice.reducer,
    },
    devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
