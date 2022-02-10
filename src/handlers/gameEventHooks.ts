import { gameStore } from '../store/gameStore';
import urlHelper from '../urlHelper';
import { updateOverlayEnabled } from '../actions/guiActions';
import logger from './logger';
import { overlayStore } from '../store/overlayStore';
import { TILE_SIZE, Cell } from '../chunkHelper';
import { observe } from 'mobx';
import keycode from 'keycode';

const MAX_SCALE = 40;

function clamp(n: number, min: number, max: number): number {
    return Math.max(min, Math.min(n, max));
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
    const canvas = gameStore.canvasesMetadata.find((c) => c.id === gameStore.gameState.activeCanvasId);
    if (!canvas) throw new Error('Canvas not found');
    if (gameStore.gameState.activeCanvasId !== undefined) {
        scale = clamp(scale, TILE_SIZE / canvas.size, MAX_SCALE);
    }
    gameStore.gameState.scale = scale;
    gameStore.gameState.viewScale = scale;
}

export function initWindowEventHooks(): void {
    window.addEventListener('hashchange', (a) => {
        initGameStateFromUrl();
        //updatePositionFromUrl();
    });

    observe(gameStore.gameState, 'activeCanvasId', (changes) => {
        initGameStateFromUrl();
    });

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
            default:
                break;
        }
    });
}
