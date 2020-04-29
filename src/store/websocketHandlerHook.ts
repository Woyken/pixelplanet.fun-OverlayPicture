import webSocketHandler from '../handlers/websocket/websocketHandler';
import { chunkStore } from './chunkStore';
import { indexToChunk, chunkOffsetToPixel } from '../chunkHelper';
import { gameStore } from './gameStore';
import { observe } from 'mobx';
import { updatePixel, updateMetadata } from '../actions/pixelData';

export function initWebSocketHooks(): void {
    chunkStore.loadedChunks.observe((changes) => {
        webSocketHandler.watchChunk(indexToChunk(changes.index));
    });

    observe(gameStore.gameState, 'activeCanvasStringId', (changes) => {
        webSocketHandler.setCanvas(changes.newValue as any);
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
