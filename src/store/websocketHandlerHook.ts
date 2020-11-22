import webSocketHandler from '../handlers/websocket/websocketHandler';
import { chunkStore } from './chunkStore';
import { indexToChunk, chunkOffsetToPixel } from '../chunkHelper';
import { gameStore } from './gameStore';
import { observe } from 'mobx';
import { updatePixel, updateMetadata } from '../actions/pixelData';
import { botState } from './botState';
import logger from '../handlers/logger';
import gameEventsHook from '../gameInjection/eventsHook';

export function initWebSocketHooks(): void {
    chunkStore.loadedChunks.observe((changes) => {
        webSocketHandler.watchChunk(indexToChunk(changes.object[changes.index].chunkIdx));
    });

    observe(gameStore.gameState, 'activeCanvasId', (changes) => {
        if (changes.newValue !== undefined) webSocketHandler.setCanvas(changes.newValue);
    });

    webSocketHandler.onPixelUpdate = (chunk, pixelOffset, colorIndex): void => {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return;
        }
        updatePixel(
            chunkOffsetToPixel(chunk, pixelOffset, gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId].size),
            colorIndex,
        );
    };

    webSocketHandler.onPixelReturn = (retCode, waitMs, coolDownSeconds): void => {
        try {
            logger.log(`Pixel response received ${retCode} ${waitMs} ${coolDownSeconds}`);
            if (gameStore.gameState.activeCanvasId === undefined) {
                logger.logError(`Active canvas is not set, not consuming response`);
                return;
            }

            let errorMessage: string | undefined;
            switch (retCode) {
                case 0:
                    break;
                case 1:
                    errorMessage = "This canvas doesn't exist";
                    break;
                case 2:
                    errorMessage = 'x out of bounds';
                    break;
                case 3:
                    errorMessage = 'y out of bounds';
                    break;
                case 4:
                    errorMessage = 'z out of bounds';
                    break;
                case 5:
                    errorMessage = 'Invalid color selected';
                    break;
                case 6:
                    errorMessage = 'You have to be logged in to place on this canvas';
                    break;
                case 7:
                    errorMessage = 'You can not access this canvas yet. You need to place more pixels';
                    break;
                case 8:
                    errorMessage = 'This pixel is protected.';
                    break;
                case 9:
                    // pixestack used up
                    // Not sure what to do now.
                    errorMessage = 'Pixel stack used up. How did this even happen?';
                    break;
                case 10:
                    // captcha, reCaptcha or hCaptcha
                    ((window as any)?.hcaptcha ?? (window as any)?.grecaptcha)?.execute();
                    break;
                case 11:
                    errorMessage = 'You are using a Proxy.';
                    break;
                default:
                    errorMessage = "Couldn't set Pixel. Unknown error";
            }

            if (errorMessage) {
                // That's a problem. Probably need to show re-captcha.
                alert(errorMessage);
                // TODO. For now just disable bot.
                botState.config.isEnabled = false;
                return;
            }
        } finally {
            // Update bot states

            // Wait till 0 to place next pixel to be safe.
            // since this is not shown anywhere, just replace it...
            botState.pixelPlaceTimeEmpty = new Date().getTime() + waitMs;
            botState.pixelBeingPlaced = false;
        }
    };

    webSocketHandler.onRequestReloadMetadata = (): void => {
        updateMetadata();
    };

    webSocketHandler.connect();

    gameEventsHook;
}
