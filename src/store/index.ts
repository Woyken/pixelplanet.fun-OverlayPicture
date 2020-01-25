import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { chunkDataReducer } from './reducers/chunkDataReducer';
import websocketHandlerHook from './websocketHandlerHook';
import { guiDataReducer } from './reducers/guiReducer';

const rootReducer = combineReducers({
    chunkData: chunkDataReducer,
    guiData: guiDataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};

const middleware = [
    reduxThunk,
    websocketHandlerHook,
];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            : (f: any) => f,
    ),
);

export default store;
