import { Dispatch, AnyAction, Store, CombinedState, MiddlewareAPI, Middleware } from 'redux';
import { ActionTypes, CANVAS_LOAD_CHUNK_DATA, CANVAS_CHANGE_CANVAS, ChunkDataState } from './chunkDataTypes';
import webSocketHandler from '../handlers/websocket/websocketHandler';

export default ((store) => (next) => (action: ActionTypes) => {
    // Start watching for chunk changes as soon as possible
    switch (action.type) {
        case CANVAS_LOAD_CHUNK_DATA: {
            webSocketHandler.watchChunk(action.chunk);
            break;
        }

        default:
            break;
    }

    // Execute other reducers
    const ret = next(action);

    // After reducers are done check if canvas was changed.
    switch (action.type) {
        case CANVAS_CHANGE_CANVAS: {
            webSocketHandler.setCanvas(action.activeCanvasId);
            break;
        }
        default:
            break;
    }

    return ret;
}) as Middleware<any, CombinedState<{ chunkData: ChunkDataState }>, any>;
