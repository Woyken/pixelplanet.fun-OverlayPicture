import { updateGameStateFAF, updateImagePlacementConfiguration } from '../actions/guiActions';
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
    }
}

const gameEventsHook = new GameEventsHook();

export default gameEventsHook;
