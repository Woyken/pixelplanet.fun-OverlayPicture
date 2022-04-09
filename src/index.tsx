import { executeAllHooks } from 'gameInjection/pageStoreHooks';
import React from 'react';
import { createRoot } from 'react-dom/client';

import AppProvidersWrapper from './components/appProvidersWrapper';

function init(): void {
    executeAllHooks();

    const rootNode = document.createElement('div');
    rootNode.id = 'PictureOverlay_RootNode';
    document.body.prepend(rootNode);

    const root = createRoot(rootNode);
    root.render(<AppProvidersWrapper />);
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
