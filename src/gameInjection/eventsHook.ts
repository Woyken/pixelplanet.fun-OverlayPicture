import { updateGameStateFAF, updateImagePlacementConfiguration } from '../actions/guiActions';
import { selectColor } from '../actions/uiActions';
import { chunkToIndex, TILE_SIZE } from '../chunkHelper';
import colorConverter from '../colorConverter';
import logger from '../handlers/logger';
import { chunkStore, LoadedChunkData } from '../store/chunkStore';
import { gameStore } from '../store/gameStore';
import { overlayStore } from '../store/overlayStore';
import { ChunkRGB } from './pixelplanetDeclarations';
import viewport from './viewport';

const MAX_SCALE = 40;

function clamp(n: number, min: number, max: number): number {
    return Math.max(min, Math.min(n, max));
}

class GameEventsHook {
    constructor() {
        window.pixelPlanetEvents.addListener('selectcanvas', (canvasId: number) => {
            const canvasMetadata = gameStore.canvasesMetadata.find((c) => c.id == canvasId);
            if (canvasMetadata != null) updateGameStateFAF(canvasMetadata.stringId);
        });
        window.pixelPlanetEvents.addListener('setviewcoordinates', ([x, y]: [number, number]) => {
            gameStore.gameState.centerX = x;
            gameStore.gameState.centerY = y;

            if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
                updateImagePlacementConfiguration(undefined, Math.round(x), Math.round(y));
            }
        });
        window.pixelPlanetEvents.addListener('sethover', ([x, y]: [number, number]) => {
            if (gameStore.gameState.hoverPixel.x !== x || gameStore.gameState.hoverPixel.y !== y)
                gameStore.gameState.hoverPixel = { x, y };
        });
        window.pixelPlanetEvents.addListener('setscale', (unclampedScale: number, zoomPoint?: [number, number]) => {
            const [zoomPointX, zoomPointY] = zoomPoint ?? [gameStore.gameState.centerX, gameStore.gameState.centerY];
            const canvas = gameStore.canvasesMetadata.find((c) => c.id === gameStore.gameState.activeCanvasId);
            let minScale = 0.1;
            if (canvas) minScale = TILE_SIZE / canvas.size;

            const newZoomScale = clamp(unclampedScale, minScale, MAX_SCALE);
            let centerX = gameStore.gameState.centerX;
            let centerY = gameStore.gameState.centerY;
            const previousViewScale = gameStore.gameState.viewScale;
            const newViewScale = newZoomScale > 0.85 && newZoomScale < 1.2 ? 1.0 : newZoomScale;

            const scaleDiff = previousViewScale / newViewScale;
            centerX = zoomPointX + (centerX - zoomPointX) * scaleDiff;
            centerY = zoomPointY + (centerY - zoomPointY) * scaleDiff;

            gameStore.gameState.scale = newZoomScale;
            gameStore.gameState.viewScale = newViewScale;
            gameStore.gameState.centerX = centerX;
            gameStore.gameState.centerY = centerY;
        });
        window.pixelPlanetEvents.addListener('receivechunk', (chunk: ChunkRGB) => {
            logger.log(
                `pixelPlanetEvents - received chunk data, chunk{${chunk.cell[0]},${chunk.cell[1]},${chunk.cell[2]}}`,
            );
            if (!chunk.ready) return;
            // Ignore the "big" chunks, when zooming out
            if (!chunk.isBasechunk) return;
            const ctx = chunk.image.getContext('2d');
            if (!ctx) return;
            const imageData = ctx.getImageData(0, 0, chunk.image.width, chunk.image.height);
            const chunkData = new Array<number>(chunk.cell[1] * chunk.cell[2]);
            for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < imageData.width; x++) {
                    const idx = (imageData.width * y + x) << 2;
                    const r = imageData.data[idx + 0];
                    const g = imageData.data[idx + 1];
                    const b = imageData.data[idx + 2];
                    let colorIndex = chunk.palette.getIndexOfColor(r, g, b);
                    if (colorIndex === null || colorIndex < 0) colorIndex = 0; // For now default to 0
                    chunkData[idx] = colorIndex;
                }
            }
            chunkStore.replaceChunk(
                new LoadedChunkData(chunkToIndex({ chunkX: chunk.cell[1], chunkY: chunk.cell[2] }), chunkData),
            );
        });

        viewport.onMouseUp = (e, c): void => {
            if (e.button !== 0) {
                // Don't care about other buttons
                return;
            }

            // On click turn off following cursor
            if (overlayStore.isFollowMouseActive) {
                overlayStore.isFollowMouseActive = false;
            }
        };

        viewport.onMouseDown = (e, c): void => {
            if (e.button !== 0) {
                // Don't care about other buttons
                return;
            }

            if (!overlayStore.modifications.autoSelectColor) {
                return;
            }

            const o = this.getColorFromOutputImage();
            if (o) selectColor(o[0], o[1], o[2]);
        };
    }

    getColorFromOutputImage(): [number, number, number] | undefined {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return;
        }

        const outputImageData = overlayStore.overlayImage.outputImage.outputImageData;
        if (!outputImageData) {
            return;
        }

        const canvasData = gameStore.canvasesMetadata.find((c) => c.id === gameStore.gameState.activeCanvasId);
        if (!canvasData) throw new Error('Canvas data not found');

        const worldPixel = gameStore.gameState.hoverPixel;

        const xi = worldPixel.x - overlayStore.placementConfiguration.xOffset;
        const yi = worldPixel.y - overlayStore.placementConfiguration.yOffset;

        // Get outputImage values...
        const idx = (outputImageData.width * yi + xi) << 2;
        const r = outputImageData.data[idx + 0];
        const g = outputImageData.data[idx + 1];
        const b = outputImageData.data[idx + 2];
        const a = outputImageData.data[idx + 3];

        const colorIndexImage = colorConverter.convertActualColorFromPalette(
            canvasData.colors,
            canvasData.colorsReservedCount,
            r,
            g,
            b,
        );

        const closestColor = colorConverter.getActualColorFromPalette(canvasData.colors, colorIndexImage);
        if (closestColor) return closestColor;

        return [r, g, b];
    }
}

const gameEventsHook = new GameEventsHook();

export default gameEventsHook;
