// tslint:disable-next-line:import-name
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

function init(): void {
    const rootNode = document.createElement('div');
    rootNode.id = 'PictureOverlay_RootNode';
    document.body.appendChild(rootNode);

    ReactDOM.render(<App />, rootNode);
}

init();
