import webSocketHandler from '../handlers/websocket/websocketHandler';
import { chunkStore } from './chunkStore';
import { indexToChunk, chunkOffsetToPixel } from '../chunkHelper';
import { gameStore } from './gameStore';
import { observe } from 'mobx';
import { updatePixel, updateMetadata } from '../actions/pixelData';

export function initWebSocketHooks(): void {
    chunkStore.loadedChunks.observe((changes) => {
        webSocketHandler.watchChunk(indexToChunk(changes.object[changes.index].chunkIdx));
    });

    observe(gameStore.gameState, 'activeCanvasId', (changes) => {
        if (changes.newValue) webSocketHandler.setCanvas(changes.newValue);
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

    webSocketHandler.onRequestReloadMetadata = (): void => {
        updateMetadata();
    };

    webSocketHandler.connect();
}
