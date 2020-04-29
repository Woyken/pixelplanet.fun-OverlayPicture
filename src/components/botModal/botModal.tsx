import React from 'react';
import './botModal.scss';
import { Checkbox, FormControlLabel, Tooltip, TextField } from '@material-ui/core';
import {
    botUpdateEnabled,
    botUpdateFeatureEnabled,
    botStartProcessingImage,
    botPlacePixel,
} from '../../actions/pixelData';
import autoBind from 'react-autobind';
import { Cell } from '../../chunkHelper';
import { getSha256Hash } from '../../utils/crypto/crypto';
import { CanvasImagePreview } from './canvasImagePreview/canvasImagePreview';
import { observer } from 'mobx-react';
import { botState } from '../../store/botState';
import { startProcessingImage } from '../../actions/guiActions';
import { gameStore } from '../../store/gameStore';
import { overlayStore } from '../../store/overlayStore';

interface OwnState {
    isModalMinimized: boolean;
    botAlwaysWatching: boolean;
}

interface OwnProps {}

@observer
class BotModal extends React.Component<OwnProps, OwnState> {
    private intervalHandle: number | undefined;

    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isModalMinimized: false,
            botAlwaysWatching: false,
        };

        autoBind(this);
    }

    onUpdate(): void {
        if (!botState.isFeatureEnabled || !botState.config.isEnabled) {
            return;
        }
        if (!botState.canvasImageData.diffAgainstInputData && !botState.canvasImageData.isProcessing) {
            botStartProcessingImage();
            return;
        }
        if (!botState.canvasImageData.diffAgainstInputData) {
            return;
        }
        if (botState.placeNextPixelAt > new Date().getTime()) {
            return;
        }

        const pixelAt = botState.canvasImageData.diffAgainstInputData.findIndex((c) => c !== -1 && c !== 255);
        if (pixelAt === -1) {
            // Looks like we're all done.
            if (!this.state.botAlwaysWatching) {
                botUpdateEnabled(false);
            } else {
                // restart bot. WARNING. this is very poor performance solution... Need to fix
                setTimeout(() => {
                    botUpdateEnabled(false);
                    botUpdateEnabled(true);
                }, 500);
            }
            return;
        }
        const xi = pixelAt % botState.config.imageWidth;
        const yi = Math.floor(pixelAt / botState.config.imageWidth);
        const x = xi + botState.config.imageTopLeft.x;
        const y = yi + botState.config.imageTopLeft.y;
        const colorIndex = botState.canvasImageData.diffAgainstInputData[pixelAt];

        if (gameStore.gameState.activeCanvasId === undefined) {
            return;
        }
        botPlacePixel(gameStore.gameState.activeCanvasId, { x, y }, colorIndex);
        // Since we've tried placing this one, mark it as done.
        botState.canvasImageData.diffAgainstInputData[pixelAt] = -1;
    }

    componentDidMount(): void {
        this.intervalHandle = window.setInterval(() => {
            this.onUpdate();
        }, 200);
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalHandle);
    }

    render(): React.ReactNode {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return null;
        }
        const canvasMetadata = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];

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
                                <Tooltip title={'Warning! When bot finishes, can cause massive amounts of lag!'}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="secondary"
                                                checked={this.state.botAlwaysWatching}
                                                onChange={(e): void =>
                                                    this.setState({ botAlwaysWatching: e.target.checked })
                                                }
                                            />
                                        }
                                        label="Always watching mode"
                                        labelPlacement="end"
                                    />
                                </Tooltip>
                                <CanvasImagePreview
                                    botImage={botState.canvasImageData.diffAgainstInputData}
                                    colorPalette={canvasMetadata.colors}
                                    height={botState.config.imageHeight}
                                    width={botState.config.imageWidth}
                                />
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