import React from 'react';
import { Configuration, configurationMethods } from '../../configuration';
import ConfigurationModal from '../configurationModal/configurationModal';
import autoBind from 'react-autobind';
import OverlayImage from '../overlayImage/overlayImage';
import urlHelper from '../../urlHelper';

interface OwnState {
    activeConfiguration: Configuration;
    modifyImageAvailable: boolean;
    currentXPosition: number;
    currentYPosition: number;
    zoomLevelFromUrl: number;
    overlayEnabled: boolean;
    overlayIsMoving: boolean;
}

interface OwnProps {
}

type Props = OwnProps;

class App extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);

        const initialConfig: Configuration | undefined =
            configurationMethods.createFromUrlHash(location.hash) || new Configuration();

        this.state = {
            activeConfiguration: initialConfig,
            modifyImageAvailable: false,
            currentXPosition: urlHelper.xCoord,
            currentYPosition: urlHelper.yCoord,
            zoomLevelFromUrl: urlHelper.zoomLevel,
            overlayEnabled: true,
            overlayIsMoving: false,
        };

        // TODO: move this logic out somewhere else.
        window.addEventListener('hashchange', () => {
            // If url is not set, update current coordinates to follow middle of screen
            if (!this.state.activeConfiguration.imgUrl) {
                this.setState({
                    ...this.state,
                    activeConfiguration: {
                        ...this.state.activeConfiguration,
                        xOffset: urlHelper.xCoord,
                        yOffset: urlHelper.yCoord,
                    },
                });
            }

            const hashstr = window.location.hash.substr(1)
                                .split(',');
            if (hashstr.length <= 2) {
                return;
            }

            // "shared" url, initialize fields from provided info
            const initialConfig: Configuration | undefined =
                configurationMethods.createFromUrlHash(location.hash);

            if (initialConfig) {
                this.setState({
                    ...this.state,
                    activeConfiguration: initialConfig,
                    currentXPosition: initialConfig.xOffset,
                    currentYPosition: initialConfig.yOffset,
                    zoomLevelFromUrl: urlHelper.zoomLevel,
                });
            }
        });

        const gameWindow = document.getElementById('gameWindow');
        let isMoving = false;

        gameWindow.addEventListener('mousemove', (e) => {
            if (e.buttons !== 1) {
                return;
            }
            if (gameWindow.style.cursor !== 'move') {
                return;
            }
            isMoving = true;
            this.setState({
                ...this.state,
                overlayIsMoving: isMoving,
            });
            // this.activeOverlayElement.style.display = 'none';
        });

        gameWindow.addEventListener('mouseup', (e) => {
            if (!isMoving) {
                return;
            }
            isMoving = false;
            const x = (window as any).lastPosX || urlHelper.xCoord;
            const y = (window as any).lastPosY || urlHelper.yCoord;
            // if no picture provided, set coordinates to center of the screen
            if (!this.state.activeConfiguration.imgUrl) {
                this.setState({
                    ...this.state,
                    overlayIsMoving: isMoving,
                    activeConfiguration: {
                        ...this.state.activeConfiguration,
                        xOffset: x,
                        yOffset: y,
                    },
                });
            } else {
                this.setState({
                    ...this.state,
                    overlayIsMoving: isMoving,
                    currentXPosition: x,
                    currentYPosition: y,
                });
            }
        });

        let timeoutAfterScroll: number = -1;
        gameWindow.addEventListener('wheel', () => {
            if (!this.state.activeConfiguration.imgUrl) {
                this.setState({
                    ...this.state,
                    activeConfiguration: {
                        ...this.state.activeConfiguration,
                        xOffset: urlHelper.xCoord,
                        yOffset: urlHelper.yCoord,
                    },
                });
            } else {
                this.setState({
                    ...this.state,
                    currentXPosition: urlHelper.xCoord,
                    currentYPosition: urlHelper.yCoord,
                    zoomLevelFromUrl: urlHelper.zoomLevel,
                });
            }

            // this.activeOverlayElement.style.display = 'none';

            if (timeoutAfterScroll > 0) {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
            }

            timeoutAfterScroll = setTimeout(() => {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
                if (this.state.activeConfiguration.imgUrl) {
                    urlHelper.stickToGrid();
                }
            },                              1000) as any;
        });

        autoBind(this);
    }

    render(): React.ReactNode {
        // tslint:disable-next-line: typedef
        const {
            activeConfiguration,
            currentXPosition,
            currentYPosition,
            zoomLevelFromUrl,
            overlayIsMoving,
            overlayEnabled,
            modifyImageAvailable,
        } = this.state;

        return (
        <div>
            <ConfigurationModal
                activeConfiguration={activeConfiguration}
                onConfigurationChange={this.onApplyConfig}
                isOverlayEnabled={overlayEnabled}
                isOverlayEnabledChanged={(enabled): void => this.setState({
                    ...this.state,
                    overlayEnabled: enabled,
                })}
                modifyImageAvailable={modifyImageAvailable}
            />
            <OverlayImage
                activeConfiguration={activeConfiguration}
                modifyAvailableChanged={this.modifyAvailableChanged}
                currentXPosition={currentXPosition}
                currentYPosition={currentYPosition}
                zoomLevelFromUrl={zoomLevelFromUrl}
                temporarilyHidden={overlayIsMoving}
                isOverlayEnabled={overlayEnabled}
            />
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

export default App;
