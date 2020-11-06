import { gameStore } from '../store/gameStore';
import urlHelper from '../urlHelper';
import { updateImagePlacementConfiguration, updateOverlayEnabled, updateGameStateFAF } from '../actions/guiActions';
import logger from './logger';
import { overlayStore } from '../store/overlayStore';
import viewport from '../gameInjection/viewport';
import { coordBoxHook } from '../gameInjection/coordinateBoxHook';
import { TILE_SIZE, Cell } from '../chunkHelper';
import { observe } from 'mobx';
import keycode from 'keycode';

const MAX_SCALE = 40;

function clamp(n: number, min: number, max: number): number {
    return Math.max(min, Math.min(n, max));
}

function checkForCanvasChange(): void {
    const urlData = urlHelper.parsedUrlData;

    if (gameStore.gameState.activeCanvasStringId !== urlData.canvasStr) {
        logger.log('Canvas has changed!');
        // fire and forget state update
        updateGameStateFAF(urlData.canvasStr);
        // Current method of catching canvas change can have delays, so - not reliable enough. Force a url update.
        urlHelper.stickToGrid();
    }
}

function setScaleForZoompoint(zoomScale: number, zoomPoint?: Cell): void {
    let centerX = gameStore.gameState.centerX * 1;
    let centerY = gameStore.gameState.centerY * 1;
    if (gameStore.gameState.activeCanvasId === undefined) {
        logger.logError('Arrgh not ready yet');
        return;
    }
    const canvas = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];

    const minScale = TILE_SIZE / canvas.size;

    let viewScale = gameStore.gameState.viewScale * 1;
    let scalediff = viewScale;

    const newZoomScale = clamp(zoomScale, minScale, MAX_SCALE);
    if (zoomPoint) {
        // clamp to 1.0 (just do this when zoompoint is given, or it would mess with phones)
        viewScale = newZoomScale > 0.85 && newZoomScale < 1.2 ? 1.0 : newZoomScale;
        // make sure that zoompoint is on the same space
        // after zooming
        scalediff /= viewScale;
        const { x: zoomPointX, y: zoomPointY } = zoomPoint;
        centerX = zoomPointX + (centerX - zoomPointX) * scalediff;
        centerY = zoomPointY + (centerY - zoomPointY) * scalediff;
    } else {
        viewScale = newZoomScale;
    }

    const canvasMinXY = -canvas.size / 2;
    const canvasMaxXY = canvas.size / 2 - 1;

    // actually update the state
    gameStore.gameState.centerX = clamp(centerX, canvasMinXY, canvasMaxXY);
    gameStore.gameState.centerY = clamp(centerY, canvasMinXY, canvasMaxXY);
    gameStore.gameState.scale = newZoomScale;
    gameStore.gameState.viewScale = viewScale;

    if (overlayStore.overlayEnabled) {
        // Fallback. On some pc's mouse wheel updates seem to get lost between this script and PixelPlanet scroll hooks. Very strange...
        const urlScale = Math.round(Math.log2(viewScale) * 10);

        const urlData = urlHelper.parsedUrlData;
        if (Math.abs(urlScale - urlData.zoomLevel) > 1) {
            // scale seems a bit off. Need a way to recalculate? For not just use old reattach...
            logger.logError(`Scale calculations seem to gone off rails... Refreshing canvas url...`);
            urlHelper.stickToGrid();
            overlayStore.isRestickingNeeded = false;
        } else if (Math.abs(Math.round(gameStore.gameState.centerX) - urlData.xCoord) > 1) {
            overlayStore.isRestickingNeeded = true;
        } else if (Math.abs(Math.round(gameStore.gameState.centerY) - urlData.yCoord) > 1) {
            overlayStore.isRestickingNeeded = true;
        }
    }
}

function zoomIn(zoomPoint?: Cell): void {
    const scale = gameStore.gameState.scale;
    const zoomScale = scale >= 1.0 ? scale * 1.1 : scale * 1.04;
    setScaleForZoompoint(zoomScale, zoomPoint);
}

function zoomOut(zoomPoint?: Cell): void {
    const scale = gameStore.gameState.scale;
    const zoomScale = scale >= 1.0 ? scale / 1.1 : scale / 1.04;
    setScaleForZoompoint(zoomScale, zoomPoint);
}

/**
 * Call this to initialize game state for mouse wheel tracking.
 * Or when canvas changes...
 */
export function initGameStateFromUrl(): void {
    const urlData = urlHelper.parsedUrlData;
    gameStore.gameState.centerX = urlData.xCoord;
    gameStore.gameState.centerY = urlData.yCoord;

    const zoomLevel = urlData.zoomLevel;
    let scale = 2 ** (zoomLevel / 10);
    if (gameStore.gameState.activeCanvasId === undefined) {
        logger.logError('Arrgh not ready yet');
        return;
    }
    const canvas = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];
    if (gameStore.gameState.activeCanvasId !== undefined) {
        scale = clamp(scale, TILE_SIZE / canvas.size, MAX_SCALE);
    }
    gameStore.gameState.scale = scale;
    gameStore.gameState.viewScale = scale;
}

function moveView(x: number, y: number): void {
    gameStore.gameState.centerX += x / gameStore.gameState.viewScale;
    gameStore.gameState.centerY += y / gameStore.gameState.viewScale;
}

export function initWindowEventHooks(): void {
    // let lastMousePosX = 0;
    // let lastMousePosY = 0;
    // let maxEstimatedX = 0;
    // let maxEstimatedY = 0;
    // let isMouseMovingSlow = false;
    coordBoxHook.onCoordUpdated = (x, y): void => {
        if (gameStore.gameState.hoverPixel.x !== x || gameStore.gameState.hoverPixel.y !== y)
            gameStore.gameState.hoverPixel = { x, y };

        // Currently tracking center position by matching website's implementation of movement. Leaving this for reference:
        // // We don't yet have reliable way to check for center of canvas pixel
        // const centerX = gameStore.gameState.centerX;
        // const centerY = gameStore.gameState.centerY;

        // const xOffsetFromCenter = x - centerX;
        // const yOffsetFromCenter = y - centerY;
        // const canvas = viewport.currentActiveViewport;
        // if (!canvas) {
        //     // not sure what to do here...
        //     logger.logError('viewport is empty. HELP');
        //     return;
        // }
        // if (xOffsetFromCenter === 0 || yOffsetFromCenter === 0) {
        //     // I don't like zeros. doesn't help much with calculations.
        //     return;
        // }

        // const clientCenterX = canvas.width / 2;
        // const clientCenterY = canvas.height / 2;
        // const clientXOffsetFromCenter = lastMousePosX - clientCenterX;
        // const clientYOffsetFromCenter = lastMousePosY - clientCenterY;
        // // WRONG. I don't know which part of pixel mouse is in.
        // const estimatedPixelSizeInRealPixels = {
        //     x: Math.abs(clientXOffsetFromCenter) / Math.abs(xOffsetFromCenter) + 0.5,
        //     y: Math.abs(clientYOffsetFromCenter) / Math.abs(yOffsetFromCenter) + 0.5,
        // };
        // if (!isMouseMovingSlow) {
        //     // only if moving slowly recalculate.
        //     return;
        // }

        // maxEstimatedX = Math.max(maxEstimatedX, estimatedPixelSizeInRealPixels.x);
        // maxEstimatedY = Math.max(maxEstimatedY, estimatedPixelSizeInRealPixels.y);
        // This almost works.
        // logger.logError(
        //     `${x} ${y} ${xOffsetFromCenter} ${yOffsetFromCenter} ${clientXOffsetFromCenter} ${clientYOffsetFromCenter} maxEstimatedX ${maxEstimatedX} maxEstimatedY ${maxEstimatedY}`,
        // );
        // logger.logError(estimatedPixelSizeInRealPixels as any);
    };

    setInterval(() => {
        // Currently there are no hooks for canvas changes
        checkForCanvasChange();
    }, 100);

    window.addEventListener('hashchange', (a) => {
        initGameStateFromUrl();
        //updatePositionFromUrl();
    });

    observe(gameStore.gameState, 'activeCanvasId', (changes) => {
        initGameStateFromUrl();
    });

    let isMoving = false;
    // TODO proper solution for this.
    // For now saving drag state just as variable...
    let startDragClientX = 0;
    let startDragClientY = 0;
    viewport.onMouseMove = (e, c): void => {
        // isMouseMovingSlow = Math.abs(lastMousePosX - e.clientX) < 2 && Math.abs(lastMousePosY - e.clientY) < 2;
        //logger.logError(`${lastMousePosX - e.clientX} ${lastMousePosY - e.clientY}`);
        // lastMousePosX = e.clientX;
        // lastMousePosY = e.clientY;
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
        // On click turn off following cursor
        if (overlayStore.isFollowMouseActive) {
            overlayStore.isFollowMouseActive = false;
        }

        const deltaX = e.clientX - startDragClientX;
        const deltaY = e.clientY - startDragClientY;

        moveView(-deltaX, -deltaY);

        const x = gameStore.gameState.centerX;
        const y = gameStore.gameState.centerY;

        if (!isMoving) {
            return;
        }
        isMoving = false;
        // Previously used hooks on window 'lastPosX/Y' are gone now...
        // const x = (window as any).lastPosX || urlHelper.xCoord;
        // const y = (window as any).lastPosY || urlHelper.yCoord;

        // if no picture provided, set coordinates to center of the screen
        if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
            updateImagePlacementConfiguration(undefined, Math.round(x), Math.round(y));
        } else {
        }
        updateGameStateFAF(undefined, x, y, undefined, isMoving);
    };

    viewport.onMouseDown = (e, c): void => {
        startDragClientX = e.clientX;
        startDragClientY = e.clientY;
    };

    let timeoutAfterScroll = -1;
    viewport.onWheel = (e, c): void => {
        const zoomPoint = gameStore.gameState.hoverPixel;
        if (e.deltaY < 0) {
            zoomIn(zoomPoint);
        }
        if (e.deltaY > 0) {
            zoomOut(zoomPoint);
        }

        if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
            // if no picture provided, set coordinates to center of the screen
            updateImagePlacementConfiguration(undefined, urlHelper.xCoord, urlHelper.yCoord);
        } else {
        }
        // updateGameStateFAF(undefined, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);

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
                // TODO  disabled for now
                //urlHelper.stickToGrid();
            }
        }, 1000);
    };

    window.addEventListener('keydown', (event) => {
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
        switch (keycode.names[key]) {
            case 'o': {
                event.stopImmediatePropagation();
                updateOverlayEnabled(!overlayStore.overlayEnabled);
                break;
            }
            case 'up':
            case 'w':
                moveView(0, -100);
                break;
            case 'left':
            case 'a':
                moveView(-100, 0);
                break;
            case 'down':
            case 's':
                moveView(0, 100);
                break;
            case 'right':
            case 'd':
                moveView(100, 0);
                break;
            case '+':
            case 'e':
                zoomIn();
                break;
            case '-':
            case 'q':
                zoomOut();
                break;

            default:
                break;
        }
    });
}
