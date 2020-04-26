import React from 'react';
import './botModal.scss';
import { Checkbox, FormControlLabel, Tooltip, TextField } from '@material-ui/core';
import { GuiParametersState } from '../../store/guiTypes';
import { AppState, ActionTypes } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    botUpdateEnabled,
    botUpdateFeatureEnabled,
    botStartProcessingImage,
    botPlacePixel,
} from '../../actions/pixelData';
import { ChunkDataState } from '../../store/chunkDataTypes';
import autoBind from 'react-autobind';
import { Cell } from '../../chunkHelper';
import { getSha256Hash } from '../../utils/crypto/crypto';
import { CanvasImagePreview } from './canvasImagePreview/canvasImagePreview';

interface OwnState {
    isModalMinimized: boolean;
}

interface OwnProps {}

interface StateProps {
    guiState: GuiParametersState;
    chunkState: ChunkDataState;
}

interface DispatchProps {
    isEnabled: (isEnabled: boolean) => void;
    isEnabledFeature: (isEnabled: boolean) => void;
    startProcessingImage: () => void;
    placePixel: (canvasId: number, pixel: Cell, colorIndex: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class BotModal extends React.Component<Props, OwnState> {
    private intervalHandle: number | undefined;

    constructor(props: Props) {
        super(props);
        this.state = {
            isModalMinimized: false,
        };

        autoBind(this);
    }

    onUpdate(): void {
        if (!this.props.chunkState.botState.isFeatureEnabled || !this.props.chunkState.botState.config.isEnabled) {
            return;
        }
        if (
            !this.props.chunkState.botState.canvasImageData.diffAgainstInputData &&
            !this.props.chunkState.botState.canvasImageData.isProcessing
        ) {
            this.props.startProcessingImage();
            return;
        }
        if (!this.props.chunkState.botState.canvasImageData.diffAgainstInputData) {
            return;
        }
        if (this.props.chunkState.botState.placeNextPixelAt > new Date().getTime()) {
            return;
        }

        const pixelAt = this.props.chunkState.botState.canvasImageData.diffAgainstInputData.findIndex(
            (c) => c !== -1 && c !== 255,
        );
        if (pixelAt === -1) {
            // Looks like we're all done.
            this.props.isEnabled(false);
            return;
        }
        const xi = pixelAt % this.props.chunkState.botState.config.imageWidth;
        const yi = Math.floor(pixelAt / this.props.chunkState.botState.config.imageWidth);
        const x = xi + this.props.chunkState.botState.config.imageTopLeft.x;
        const y = yi + this.props.chunkState.botState.config.imageTopLeft.y;
        const colorIndex = this.props.chunkState.botState.canvasImageData.diffAgainstInputData[pixelAt];

        this.props.placePixel(this.props.chunkState.activeCanvasId, { x, y }, colorIndex);
        // Since we've tried placing this one, mark it as done.
        this.props.chunkState.botState.canvasImageData.diffAgainstInputData[pixelAt] = -1;
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
        const { guiState, chunkState, isEnabled } = this.props;
        const canvasMetadata = chunkState.canvasesMetadata[chunkState.activeCanvasId];

        return (
            <div id="PictureOverlay_BotConfigurationModal">
                <Tooltip
                    title={
                        this.props.chunkState.botState.isFeatureEnabled
                            ? 'Toggle on/off Bot'
                            : 'This feature is not ready for public eyes and needs to be unlocked with personal code. Ask owner for this feature'
                    }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={chunkState.botState.config.isEnabled}
                                onChange={(e): void => isEnabled(e.target.checked)}
                            />
                        }
                        label="Enable Bot"
                        labelPlacement="end"
                    />
                </Tooltip>
                <div
                    style={{
                        display: guiState.overlayEnabled ? '' : 'none',
                    }}
                >
                    <div
                        style={{
                            display: this.state.isModalMinimized ? 'none' : '',
                        }}
                    >
                        {this.props.chunkState.botState.isFeatureEnabled ? (
                            <CanvasImagePreview
                                botImage={this.props.chunkState.botState.canvasImageData.diffAgainstInputData}
                                colorPalette={canvasMetadata.colors}
                                height={this.props.chunkState.botState.config.imageHeight}
                                width={this.props.chunkState.botState.config.imageWidth}
                            />
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
        if (!this.props.chunkState.userData.name) {
            return;
        }

        getSha256Hash(this.props.chunkState.userData.name)
            .then((hash) => {
                if (code === hash) {
                    this.props.isEnabledFeature(true);
                }
            })
            .catch(() => {
                // ignore errors here.
            });
    }
}

function mapStateToProps(state: AppState): StateProps {
    return {
        guiState: state.guiData,
        chunkState: state.chunkData,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<AppState, null, ActionTypes>): DispatchProps {
    return {
        isEnabled: (isEnabled: boolean): unknown => dispatch(botUpdateEnabled(isEnabled)),
        isEnabledFeature: (isEnabled: boolean): unknown => dispatch(botUpdateFeatureEnabled(isEnabled)),
        startProcessingImage: (): unknown => dispatch(botStartProcessingImage()),
        placePixel: (canvasId: number, pixel: Cell, colorIndex: number): unknown =>
            dispatch(botPlacePixel(canvasId, pixel, colorIndex)),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(BotModal);
