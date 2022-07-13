import localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';

import { chunkDataSlice } from './slices/chunkDataSlice';
import { gameSlice } from './slices/gameSlice';
import { overlaySlice } from './slices/overlaySlice';
import { pixelPlacementSlice } from './slices/pixelPlacementSlice';
import { processedImagesSlice } from './slices/precessedImages';
import { listenerMiddleware } from './storeMiddlewareCreator';

const reduxPersistedStorage = localforage.createInstance({
    name: 'picture_overlay',
    storeName: 'redux_persisted',
});

const commonPersistReducerParams = {
    serialize: false,
    deserialize: false,
    storage: reduxPersistedStorage,
};

const persistedOverlayReducer = persistReducer({ ...commonPersistReducerParams, key: 'overlay' }, overlaySlice.reducer);

export function configureAppStore() {
    return configureStore({
        reducer: {
            overlay: persistedOverlayReducer,
            game: gameSlice.reducer,
            chunkData: chunkDataSlice.reducer,
            pixelPlacement: pixelPlacementSlice.reducer,
            processedImages: processedImagesSlice.reducer,
        },
        devTools: import.meta.env.DEV,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware().concat([listenerMiddleware.middleware]);
        },
    });
}

export const store = configureAppStore();
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
