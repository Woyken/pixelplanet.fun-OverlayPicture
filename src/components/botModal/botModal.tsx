import React from 'react';
import './botModal.scss';
import { Checkbox, FormControlLabel, Tooltip, TextField } from '@material-ui/core';
import autoBind from 'react-autobind';
import { getSha256Hash } from '../../utils/crypto/crypto';
import { CanvasImagePreview } from './canvasImagePreview/canvasImagePreview';
import { observer } from 'mobx-react';
import { botState } from '../../store/botState';
import { gameStore } from '../../store/gameStore';
import { overlayStore } from '../../store/overlayStore';
import {
    botStartProcessingImage,
    botUpdateEnabled,
    botPlacePixel,
    botUpdateFeatureEnabled,
} from '../../actions/botActions';

interface OwnState {
    isModalMinimized: boolean;
    currentTimeout: number;
}

interface OwnProps {}

@observer
class BotModal extends React.Component<OwnProps, OwnState> {
    private intervalHandle: number | undefined;

    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isModalMinimized: false,
            currentTimeout: 0,
        };

        autoBind(this);
    }

    componentDidMount(): void {
        this.intervalHandle = window.setInterval(() => {
            const currentTimeout = Math.max(botState.pixelPlaceTimeEmpty - new Date().getTime(), 0);
            if (this.state.currentTimeout > 0 || currentTimeout > 0) {
                this.setState({ currentTimeout: currentTimeout });
            }
        }, 400);
        // Let's experiment. Turning the bot for all...
        botUpdateFeatureEnabled(true);
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalHandle);
    }

    render(): React.ReactNode {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return null;
        }

        return (
            <div id="PictureOverlay_BotConfigurationModal">
                <Tooltip
                    title={
                        botState.isFeatureEnabled
                            ? 'Toggle on/off Bot'
                            : 'This feature is not ready for public eyes and needs to be unlocked with personal code. Ask owner for this feature'
                    }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={botState.config.isEnabled}
                                onChange={(e): unknown => botUpdateEnabled(e.target.checked)}
                            />
                        }
                        label="Enable Bot"
                        labelPlacement="end"
                    />
                </Tooltip>
                <div
                    style={{
                        display: overlayStore.overlayEnabled ? '' : 'none',
                    }}
                >
                    <div
                        style={{
                            display: this.state.isModalMinimized ? 'none' : '',
                        }}
                    >
                        {botState.isFeatureEnabled ? (
                            <div>
                                <Tooltip title={'When bot finishes, keep on looking after the picture'}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="secondary"
                                                checked={botState.config.isWatching}
                                                onChange={(e): void => {
                                                    botState.config.isWatching = e.target.checked;
                                                }}
                                            />
                                        }
                                        label="Protection mode"
                                        labelPlacement="end"
                                    />
                                </Tooltip>
                                {/* <CanvasImagePreview
                                    botImage={botState.canvasImageData.diffAgainstInputData}
                                    colorPalette={canvasMetadata.colors}
                                    height={botState.config.imageHeight}
                                    width={botState.config.imageWidth}
                                /> */}
                                {botState.canvasImageData.isProcessing ? (
                                    <div>{`Processing image/loading map... ${botState.canvasImageData.processingPercentage.toFixed(
                                        2,
                                    )}%`}</div>
                                ) : null}
                                <p>Timeout: {(this.state.currentTimeout / 1000).toFixed(2)}</p>
                                <p>Pixels left to place: {botState.canvasImageData.processedPixelsTodo.length}</p>
                            </div>
                        ) : (
                            <TextField
                                label="Unlock code"
                                type="string"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                    this.tryUnlockCode(e.target.value);
                                }}
                            />
                        )}
                    </div>
                    <img
                        src={
                            this.state.isModalMinimized
                                ? 'https://fonts.gstatic.com/s/i/materialicons/expand_more/v1/24px.svg'
                                : 'https://fonts.gstatic.com/s/i/materialicons/expand_less/v1/24px.svg'
                        }
                        onClick={(): void =>
                            this.setState({
                                ...this.state,
                                isModalMinimized: !this.state.isModalMinimized,
                            })
                        }
                    />
                </div>
            </div>
        );
    }

    tryUnlockCode(code: string): void {
        if (!gameStore.userData.name) {
            return;
        }

        getSha256Hash(gameStore.userData.name)
            .then((hash) => {
                if (code === hash) {
                    botUpdateFeatureEnabled(true);
                }
            })
            .catch(() => {
                // ignore errors here.
            });
    }
}

export default BotModal;
