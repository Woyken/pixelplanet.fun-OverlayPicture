import { updateGameStateFAF, updateImagePlacementConfiguration } from '../actions/guiActions';
import { selectColor } from '../actions/uiActions';
import colorConverter from '../colorConverter';
import { gameStore } from '../store/gameStore';
import { overlayStore } from '../store/overlayStore';
import viewport from './viewport';

class GameEventsHook {
    constructor() {
        window.pixelPlanetEvents.addListener('selectcanvas', (canvasId: number) => {
            if (gameStore.canvasesMetadata[canvasId] != null)
                updateGameStateFAF(gameStore.canvasesMetadata[canvasId].stringId);
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
        window.pixelPlanetEvents.addListener(
            'setscale',
            (scale: number, [zoomPointX, zoomPointY]: [number, number]) => {
                let centerX = gameStore.gameState.centerX;
                let centerY = gameStore.gameState.centerY;
                const previousViewScale = gameStore.gameState.viewScale;
                const newViewScale = scale > 0.85 && scale < 1.2 ? 1.0 : scale;

                const scaleDiff = previousViewScale / newViewScale;
                centerX = zoomPointX + (centerX - zoomPointX) * scaleDiff;
                centerY = zoomPointY + (centerY - zoomPointY) * scaleDiff;

                gameStore.gameState.scale = scale;
                gameStore.gameState.viewScale = newViewScale;
                gameStore.gameState.centerX = centerX;
                gameStore.gameState.centerY = centerY;
            },
        );
        window.pixelPlanetEvents.addListener('receivechunk', (chunk: any) => {
            // TODO
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

        const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];

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
