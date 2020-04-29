import React from 'react';
import { Configuration, configurationMethods } from '../../configuration';
import ConfigurationModal from '../configurationModal/configurationModal';
import autoBind from 'react-autobind';
import OverlayImage from '../overlayImage/overlayImage';
import urlHelper from '../../urlHelper';
import {
    updateGameState,
    updateImagePlacementConfiguration,
    updateInputImage,
    updateImageModifiers,
    updateOverlayEnabled,
    loadSavedConfigurations,
} from '../../actions/guiActions';
import logger from '../../handlers/logger';
import viewport from '../../gameInjection/viewport';
import { updateMetadata } from '../../actions/pixelData';
import BotModal from '../botModal/botModal';
import { observer } from 'mobx-react';
import { overlayStore } from '../../store/overlayStore';
import { gameStore } from '../../store/gameStore';

@observer
class App extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {};

        // App was just loaded. Set initial values.
        updateGameState(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
        loadSavedConfigurations();

        // TODO: move this logic out somewhere else.
        window.addEventListener('hashchange', () => {
            // If url is not set, update current coordinates to follow middle of screen
            if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
                updateImagePlacementConfiguration(undefined, urlHelper.xCoord, urlHelper.yCoord);
            }

            if (gameStore.gameState.activeCanvasStringId !== urlHelper.canvasStr) {
                logger.log('Canvas has changed!');
                updateGameState(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
                urlHelper.stickToGrid();
            }

            const shared = urlHelper.deserializeSharedUrl();
            if (!shared) {
                return;
            }

            updateInputImage(shared.overlayImageUrl);
            updateImageModifiers(
                shared.modifications.modificationsAvailable,
                shared.modifications.shouldConvertColors,
                shared.modifications.imageBrightness,
            );
            updateImagePlacementConfiguration(
                shared.placementConfiguration.transparency,
                shared.placementConfiguration.xOffset,
                shared.placementConfiguration.yOffset,
            );

            updateGameState(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
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
            updateGameState(urlHelper.canvasStr, undefined, undefined, undefined, isMoving);
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
            updateGameState(undefined, x, y, undefined, isMoving);
        };

        let timeoutAfterScroll = -1;
        viewport.onWheel = (e, c): void => {
            if (!overlayStore.overlayImage.inputImage.url && !overlayStore.overlayImage.inputImage.file) {
                // if no picture provided, set coordinates to center of the screen
                updateImagePlacementConfiguration(undefined, urlHelper.xCoord, urlHelper.yCoord);
            } else {
            }
            updateGameState(undefined, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);

            if (!overlayStore.overlayEnabled) {
                // Should not re-stick/snap to grid if overlay is disabled.
                return;
            }

            if (timeoutAfterScroll > 0) {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
            }

            if (urlHelper.zoomLevel <= 0) {
                // Don't re-stick if too far way, gets anoying when you just want to look around
                return;
            }

            timeoutAfterScroll = setTimeout(() => {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
                if (overlayStore.overlayImage.inputImage.url || overlayStore.overlayImage.inputImage.file) {
                    urlHelper.stickToGrid();
                }
            }, 1000) as any;
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

        autoBind(this);
    }

    render(): React.ReactNode {
        return (
            <div>
                {overlayStore.overlayEnabled ? <OverlayImage /> : undefined}
                <ConfigurationModal />
                {overlayStore.isBotModalVisible ? <BotModal /> : undefined}
            </div>
        );
    }
}

export default App;
