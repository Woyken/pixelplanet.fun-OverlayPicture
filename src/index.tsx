import React from 'react';
import ReactDOM from 'react-dom';

import AppProvidersWrapper from './components/appProvidersWrapper';

function init(): void {
    const rootNode = document.createElement('div');
    rootNode.id = 'PictureOverlay_RootNode';
    document.body.prepend(rootNode);

    ReactDOM.render(<AppProvidersWrapper />, rootNode);
}

if (document.readyState !== 'complete') {
    document.addEventListener('readystatechange', function readyStateChange() {
        if (document.readyState === 'complete') {
            document.removeEventListener('readystatechange', readyStateChange);
            init();
        }
    });
} else {
    init();
}
