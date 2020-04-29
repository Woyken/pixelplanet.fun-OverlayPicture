import { gameStore } from '../store/gameStore';
import urlHelper from '../urlHelper';
import { updateImagePlacementConfiguration, updateOverlayEnabled, updateGameStateFAF } from '../actions/guiActions';
import logger from './logger';
import { overlayStore } from '../store/overlayStore';
import viewport from '../gameInjection/viewport';

function updatePositionFromUrl(): void {
    const urlData = urlHelper.parsedUrlData;

    if (gameStore.gameState.activeCanvasStringId !== urlData.canvasStr) {
        logger.log('Canvas has changed!');
        // fire and forget state update
        updateGameStateFAF(urlData.canvasStr, urlData.xCoord, urlData.yCoord, urlData.zoomLevel);
    }

    // If url is not set, update current coordinates to follow middle of screen
    if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
        updateImagePlacementConfiguration(undefined, urlData.xCoord, urlData.yCoord);
    }
}

export function initWindowEventHooks(): void {
    setInterval(() => {
        // Since hashchange is not called on url updates, only when we actually set location.href by ourselves, this will be more reliable.
        updatePositionFromUrl();
    }, 100);

    window.addEventListener('hashchange', () => {
        updatePositionFromUrl();
    });

    let isMoving = false;
    viewport.onMouseMove = (e, c): void => {
        if (e.buttons !== 1) {
            return;
        }
        if (c.style.cursor !== 'move') {
            return;
        }
        isMoving = true;
        updateGameStateFAF(urlHelper.canvasStr, undefined, undefined, undefined, isMoving);
    };

    // TODO this can be replaced with getter/setter on window.lastPosX
    // This would be nicer solution, rather than depending on mouse drag detection.

    viewport.onMouseUp = (e, c): void => {
        if (!isMoving) {
            return;
        }
        isMoving = false;
        const x = (window as any).lastPosX || urlHelper.xCoord;
        const y = (window as any).lastPosY || urlHelper.yCoord;
        // if no picture provided, set coordinates to center of the screen
        if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
            updateImagePlacementConfiguration(undefined, Math.round(x), Math.round(y));
        } else {
        }
        updateGameStateFAF(undefined, x, y, undefined, isMoving);
    };

    let timeoutAfterScroll = -1;
    viewport.onWheel = (e, c): void => {
        if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
            // if no picture provided, set coordinates to center of the screen
            updateImagePlacementConfiguration(undefined, urlHelper.xCoord, urlHelper.yCoord);
        } else {
        }
        updateGameStateFAF(undefined, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);

        if (!overlayStore.overlayEnabled) {
            // Should not re-stick/snap to grid if overlay is disabled.
            return;
        }

        if (timeoutAfterScroll > 0) {
            clearTimeout(timeoutAfterScroll);
            timeoutAfterScroll = -1;
        }

        if (urlHelper.zoomLevel <= 0) {
            // Don't re-stick if too far way, gets annoying when you just want to look around
            return;
        }

        timeoutAfterScroll = window.setTimeout(() => {
            clearTimeout(timeoutAfterScroll);
            timeoutAfterScroll = -1;
            if (overlayStore.overlayImage.inputImage.url || overlayStore.overlayImage.inputImage.file) {
                urlHelper.stickToGrid();
            }
        }, 1000);
    };

    window.addEventListener('keyup', (event) => {
        const target = event.target;
        if (!target) {
            return;
        }

        const clickedNodeName = (target as HTMLElement).tagName || (target as HTMLElement).nodeName;

        // Ignore if user is typing text.
        if (clickedNodeName === 'TEXTAREA') {
            return;
        }
        if (clickedNodeName === 'INPUT') {
            const inputEl = target as HTMLInputElement;
            if (inputEl.type === 'text') {
                return;
            }
        }

        const key = event.keyCode;
        switch (key) {
            case 79 /* O key */: {
                event.stopImmediatePropagation();
                updateOverlayEnabled(!overlayStore.overlayEnabled);
                break;
            }

            default:
                break;
        }
    });
}
