// tslint:disable-next-line:import-name
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { initStore } from './store';

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

    initStore();

    ReactDOM.render(<App />, rootNode);
}

init();
