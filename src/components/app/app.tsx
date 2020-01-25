import React from 'react';
import { Configuration, configurationMethods } from '../../configuration';
import ConfigurationModal from '../configurationModal/configurationModal';
import autoBind from 'react-autobind';
import OverlayImage from '../overlayImage/overlayImage';
import urlHelper from '../../urlHelper';
import { updateGameState, updateImagePlacementConfiguration, updateInputImage, updateImageModifiers, updateOverlayEnabled, loadSavedConfigurations } from '../../actions/guiActions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { GuiParametersState } from '../../store/guiTypes';
import logger from '../../handlers/logger';
import viewport from '../../gameInjection/viewport';

interface OwnState {
}

interface OwnProps {
}

interface StateProps {
    guiState: GuiParametersState,
}

interface DispatchProps {
    updateGame: (canvasId?: string, centerX?: number, centerY?: number, zoomLevel?: number, isMouseDragging?: boolean) => void;
    updateImage: (imgUrl: string) => void;
    updateConfig: (transparency?: number, x?: number, y?: number) => void;
    updateModifications: (modificationsAvailable?: boolean, doModifications?: boolean, shouldConvertColors?: boolean, imageBrightness?: number) => void;
    updateOverlayEnabled: (isEnabled: boolean) => void;
    loadSavedConfigs: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class App extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };

        // App was just loaded. Set initial values.
        this.props.updateGame(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
        this.props.loadSavedConfigs();

        // TODO: move this logic out somewhere else.
        window.addEventListener('hashchange', () => {
            // If url is not set, update current coordinates to follow middle of screen
            if (!this.props.guiState.overlayImage.inputImage.url) {
                this.props.updateConfig(undefined, urlHelper.xCoord, urlHelper.yCoord);
            }

            const shared = urlHelper.deserializeSharedUrl();
            if (!shared) {
                return;
            }

            this.props.updateImage(shared.overlayImageUrl);
            this.props.updateModifications(shared.modifications.modificationsAvailable, shared.modifications.doModifications, shared.modifications.shouldConvertColors, shared.modifications.imageBrightness);
            this.props.updateConfig(shared.placementConfiguration.transparency, shared.placementConfiguration.xOffset, shared.placementConfiguration.yOffset);
            
            this.props.updateGame(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
        });


        let isMoving = false;
        viewport.onMouseMove = (e, c) => {
            if (e.buttons !== 1) {
                return;
            }
            if (c.style.cursor !== 'move') {
                return;
            }
            isMoving = true;
            this.props.updateGame(urlHelper.canvasStr, undefined, undefined, undefined, isMoving);
        };

        // TODO this can be replaced with getter/setter on window.lastPosX 
        // This would be nicer solution, rather than depending on mouse drag detection.

        viewport.onMouseUp = (e, c) => {
            if (!isMoving) {
                return;
            }
            isMoving = false;
            const x = (window as any).lastPosX || urlHelper.xCoord;
            const y = (window as any).lastPosY || urlHelper.yCoord;
            // if no picture provided, set coordinates to center of the screen
            if (!this.props.guiState.overlayImage.inputImage.url) {
                this.props.updateConfig(undefined, Math.round(x), Math.round(y));
            } else {
            }
            this.props.updateGame(undefined, x, y, undefined, isMoving);
        };

        let timeoutAfterScroll: number = -1;
        viewport.onWheel = (e, c) => {
            if (!this.props.guiState.overlayImage.inputImage.url) {
                this.props.updateConfig(undefined, urlHelper.xCoord, urlHelper.yCoord);
            } else {
            }
            this.props.updateGame(undefined, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);

            if (!this.props.guiState.overlayEnabled) {
                // Should not re-stick/snap to grid if overlay is disabled.
                return;
            }

            if (timeoutAfterScroll > 0) {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
            }

            timeoutAfterScroll = setTimeout(() => {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
                if (this.props.guiState.overlayImage.inputImage.url) {
                    urlHelper.stickToGrid();
                }
            }, 1000) as any;
        };

        window.addEventListener('keyup', (event) => {
            const target = event.target;
            if (!target) {
                return;
            }

            const clickedNodeName = (target as HTMLElement).tagName ||
                (target as HTMLElement).nodeName;

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
                    this.props.updateOverlayEnabled(!this.props.guiState.overlayEnabled);
                    break;
                }

                default:
                    break;
            }
        });

        autoBind(this);
    }

    render(): React.ReactNode {
        const { guiState } = this.props;
        return (
            <div>
                {guiState.overlayEnabled
                    ? <OverlayImage />
                    : undefined}
                <ConfigurationModal />
            </div>
        );
    }

    modifyAvailableChanged(available: boolean): void {
        this.setState((prevState): OwnState => {
            return {
                ...prevState,
                modifyImageAvailable: available,
            };
        });
    }

    onApplyConfig(config: Configuration): void {
        this.setState((prevState) => {
            return {
                ...prevState,
                activeConfiguration: config,
            };
        });
    }
}

function mapStateToProps(state: AppState, ownProps: OwnProps): StateProps {
    return {
        guiState: state.guiData,
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<{}, {}, any>,
    ownProps: OwnProps,
): DispatchProps {
    return {
        updateGame: (canvasStringId?: string, centerX?: number, centerY?: number, zoomLevel?: number, isMouseDragging?: boolean) => dispatch(updateGameState(canvasStringId, centerX, centerY, zoomLevel, isMouseDragging)),
        updateImage: (imgUrl: string) => dispatch(updateInputImage(imgUrl)),
        updateConfig: (transparency?: number, x?: number, y?: number) => dispatch(updateImagePlacementConfiguration(transparency, x, y)),
        updateModifications: (modificationsAvailable?: boolean, doModifications?: boolean, shouldConvertColors?: boolean, imageBrightness?: number) => dispatch(updateImageModifiers(modificationsAvailable, doModifications, shouldConvertColors, imageBrightness)),
        updateOverlayEnabled: (isEnabled: boolean) => dispatch(updateOverlayEnabled(isEnabled)),
        loadSavedConfigs: () => dispatch(loadSavedConfigurations()),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(App);
