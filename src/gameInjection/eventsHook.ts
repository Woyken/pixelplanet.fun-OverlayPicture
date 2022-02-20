import { selectColor } from '../actions/uiActions';
import { chunkToIndex, TILE_SIZE } from '../chunkHelper';
import colorConverter from '../colorConverter';
import logger from '../handlers/logger';

import { ChunkRGB } from './pixelplanetDeclarations';
import viewport from './viewport';

const MAX_SCALE = 40;

function clamp(n: number, min: number, max: number): number {
    return Math.max(min, Math.min(n, max));
}

class GameEventsHook {
    constructor() {
        window.pixelPlanetEvents.addListener('selectcanvas', (canvasId: number) => {
            logger.log(`pixelPlanetEvents - selectcanvas: ${canvasId}`);
            // TODO event canvas changed, update state
        });
        window.pixelPlanetEvents.addListener('setviewcoordinates', ([x, y]: [number, number]) => {
            logger.log(`pixelPlanetEvents - setviewcoordinates: ${x}, ${y}`);
            // TODO event center view coordinates changed, update state
        });
        window.pixelPlanetEvents.addListener('sethover', ([x, y]: [number, number]) => {
            logger.log(`pixelPlanetEvents - received sethover: ${x}, ${y}`);
            // TODO event hover coordinates changed, update state
        });
        window.pixelPlanetEvents.addListener('setscale', (unclampedScale: number, zoomPoint?: [number, number]) => {
            logger.log(`pixelPlanetEvents - received setscale event: ${unclampedScale}, zoomPoint: ${JSON.stringify(zoomPoint)}`);
            // TODO event scale changed, update state

            // const [zoomPointX, zoomPointY] = zoomPoint ?? [gameStore.gameState.centerX, gameStore.gameState.centerY];
            // const canvas = gameStore.canvasesMetadata.find((c) => c.id === gameStore.gameState.activeCanvasId);
            // let minScale = 0.1;
            // if (canvas) minScale = TILE_SIZE / canvas.size;

            // const newZoomScale = clamp(unclampedScale, minScale, MAX_SCALE);
            // let { centerX } = gameStore.gameState;
            // let { centerY } = gameStore.gameState;
            // const previousViewScale = gameStore.gameState.viewScale;
            // const newViewScale = newZoomScale > 0.85 && newZoomScale < 1.2 ? 1.0 : newZoomScale;

            // const scaleDiff = previousViewScale / newViewScale;
            // centerX = zoomPointX + (centerX - zoomPointX) * scaleDiff;
            // centerY = zoomPointY + (centerY - zoomPointY) * scaleDiff;

            // gameStore.gameState.scale = newZoomScale;
            // gameStore.gameState.viewScale = newViewScale;
            // gameStore.gameState.centerX = centerX;
            // gameStore.gameState.centerY = centerY;
        });
        window.pixelPlanetEvents.addListener('receivechunk', (chunk: ChunkRGB) => {
            logger.log(`pixelPlanetEvents - received chunk data, chunk{${chunk.cell[0]},${chunk.cell[1]},${chunk.cell[2]}}`);
            // if (!chunk.ready) return;
            // // Ignore the "big" chunks, when zooming out
            // if (!chunk.isBasechunk) return;
            // const ctx = chunk.image.getContext('2d');
            // if (!ctx) return;
            // const imageData = ctx.getImageData(0, 0, chunk.image.width, chunk.image.height);
            // const chunkData = new Array<number>(chunk.cell[1] * chunk.cell[2]);
            // for (let y = 0; y < imageData.height; y++) {
            //     for (let x = 0; x < imageData.width; x++) {
            //         const idx = (imageData.width * y + x) << 2;
            //         const r = imageData.data[idx + 0];
            //         const g = imageData.data[idx + 1];
            //         const b = imageData.data[idx + 2];
            //         let colorIndex = chunk.palette.getIndexOfColor(r, g, b);
            //         if (colorIndex === null || colorIndex < 0) colorIndex = 0; // For now default to 0
            //         chunkData[idx] = colorIndex;
            //     }
            // }
            // chunkStore.replaceChunk(new LoadedChunkData(chunkToIndex({ chunkX: chunk.cell[1], chunkY: chunk.cell[2] }), chunkData));
        });
    }
}

const gameEventsHook = new GameEventsHook();

export default gameEventsHook;
