// tslint:disable-next-line:import-name
import React from 'react';
import ReactDOM from 'react-dom';

import AppProvidersWrapper from './components/appProvidersWrapper';
// import { initStore } from './store';

function init(): void {
    const rootNode = document.createElement('div');
    rootNode.id = 'PictureOverlay_RootNode';
    const gameCanvas = document.getElementById('gameWindow');
    if (gameCanvas) {
        // Insert right after main canvas element.
        gameCanvas.after(rootNode);
    } else {
        // If for some reason canvas doesn't exist, draw over everything.
        document.body.prepend(rootNode);
    }

    // initStore();

    ReactDOM.render(<AppProvidersWrapper />, rootNode);
}

init();
