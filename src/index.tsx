// tslint:disable-next-line:import-name
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider, connect } from 'react-redux';
import store from './store';
import webSocketHandler from './handlers/websocket/websocketHandler';
import { updateMetadata, updatePixel } from './actions/pixelData';
import { chunkOffsetToPixel } from './chunkHelper';

function init(): void {
    const rootNode = document.createElement('div');
    rootNode.id = 'PictureOverlay_RootNode';
    const gameCanvas = document.getElementById('gameWindow');
    if (gameCanvas) {
        // Insert right after main canvas element.
        gameCanvas.after(rootNode);
    } else {
        // If for some reason canvas doesn't exist, draw over everything.
        document.body.append(rootNode);
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootNode,
    );

    webSocketHandler.onPixelUpdate = (chunk, pixelOffset, colorIndex): void => {
        const { chunkData } = store.getState();
        store.dispatch(
            updatePixel(
                chunkOffsetToPixel(chunk, pixelOffset, chunkData.canvasesMetadata[chunkData.activeCanvasId].size),
                colorIndex,
            ),
        );
    };
    webSocketHandler.onRequestReloadMetadata = (): void => {
        store.dispatch((updateMetadata as any)());
    };
    webSocketHandler.connect();
}

init();
