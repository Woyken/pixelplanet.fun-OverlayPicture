import logger from 'handlers/logger';
import { Cell, gameSlice } from 'store/slices/gameSlice';
import { selectCurrentHoverPixelOnOutputImageColorIndexInPalette } from 'store/slices/overlaySlice';
import { store } from 'store/store';
import { findPageReduxStore, pageReduxStoreSelectColorAction, selectPageStateHoverPixel, selectPageStateRoundedCanvasViewCenter } from 'utils/getPageReduxStore';

export function executeAllHooks(retryCounter = 0) {
    try {
        hookForAutoSelectColor();
        hookForHoverPixel();
    } catch (error) {
        if (retryCounter > 5) {
            // Something is terribly wrong.
            logger.logError('failed to executeAllHooks multiple times. Rethrowing exception', error);
            throw error;
        }
        const retryInMs = (retryCounter + 1) * 1000;
        logger.log('failed to executeAllHooks', error, 'retrying in', retryInMs);
        setTimeout(() => {
            executeAllHooks(retryCounter + 1);
        }, retryInMs);
    }
}

function hookForAutoSelectColor() {
    const pageStore = findPageReduxStore();
    const pageDispatch = pageStore.dispatch;
    let lastColorIndex: number;
    store.subscribe(() => {
        const colorIndex = selectCurrentHoverPixelOnOutputImageColorIndexInPalette(store.getState());
        if (colorIndex !== undefined && colorIndex !== lastColorIndex) {
            lastColorIndex = colorIndex;
            pageDispatch(pageReduxStoreSelectColorAction(colorIndex));
        }
    });
}

function hookForHoverPixel() {
    const pageStore = findPageReduxStore();
    let lastHoverPixel: Cell;
    pageStore.subscribe(() => {
        let hoverPixel = selectPageStateHoverPixel(pageStore.getState());
        if (hoverPixel) {
            if (hoverPixel !== lastHoverPixel) {
                lastHoverPixel = hoverPixel;
                store.dispatch(gameSlice.actions.setHoverPixel(hoverPixel));
            }
            return;
        }
        hoverPixel = selectPageStateRoundedCanvasViewCenter(pageStore.getState());
        if (hoverPixel) {
            if (hoverPixel !== lastHoverPixel) {
                lastHoverPixel = hoverPixel;
                store.dispatch(gameSlice.actions.setHoverPixel(hoverPixel));
            }
        }
    });
}
