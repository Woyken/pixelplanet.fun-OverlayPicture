import React from 'react';
import './botModal.scss';
import OverlayConfig from '../overlayConfig/overlayConfig';
import { Configuration } from '../../configuration';
import ConfigDropDown from '../configDropDown/configDropDown';
import { Checkbox, FormControlLabel, Tooltip, TextField } from '@material-ui/core';
import { GuiParametersState } from '../../store/guiTypes';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateOverlayEnabled } from '../../actions/guiActions';
import { botUpdateEnabled, botUpdateFeatureEnabled } from '../../actions/pixelData';
import { ChunkDataState } from '../../store/chunkDataTypes';
import logger from '../../handlers/logger';

interface OwnState {
    isModalMinimized: boolean;
}

interface OwnProps {
}

interface StateProps {
    guiState: GuiParametersState;
    chunkState: ChunkDataState;
}

interface DispatchProps {
    isEnabled: (isEnabled: boolean) => void;
    isEnabledFeature: (isEnabled: boolean) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class BotModal extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isModalMinimized: false,
        };
    }

    render(): React.ReactNode {
        const {
            guiState,
            chunkState,
            isEnabled,
        } = this.props;

        return (
            <div id="PictureOverlay_BotConfigurationModal">
                <Tooltip title={
                    this.props.chunkState.botState.isFeatureEnabled
                    ? 'Toggle on/off Bot'
                    : 'This feature is not ready for public eyes and needs to be unlocked with personal code. Ask owner for this feature'
                }>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                checked={chunkState.botState.config.isEnabled}
                                onChange={(e): void => isEnabled(e.target.checked)}
                            />
                        }
                        label="Enable Bot"
                        labelPlacement="end"
                    />
                </Tooltip>
                <div style={{
                    display: guiState.overlayEnabled ? '' : 'none',
                }}>
                    <div style={{
                        display: this.state.isModalMinimized ? 'none' : '',
                    }}>
                        {
                            this.props.chunkState.botState.isFeatureEnabled
                                ? undefined
                                : <TextField
                                    label="Unlock code"
                                    type="string"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        this.tryUnlockCode(e.target.value);
                                    }}
                                />
                        }
                    </div>
                    <img
                        src={
                            this.state.isModalMinimized ?
                                'https://fonts.gstatic.com/s/i/materialicons/expand_more/v1/24px.svg' :
                                'https://fonts.gstatic.com/s/i/materialicons/expand_less/v1/24px.svg'
                        }
                        onClick={(): void => this.setState({
                            ...this.state,
                            isModalMinimized: !this.state.isModalMinimized,
                        })}
                    />
                </div>
            </div>
        );
    }

    tryUnlockCode(code: string): void {
        if (!this.props.chunkState.userData.name) {
            return;
        }

        sha256(this.props.chunkState.userData.name)
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

async function sha256(message: string): Promise<string> {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray
        .map(b => (b.toString(16)))
        .join('');
    return hashHex;
}

function mapStateToProps(state: AppState, ownProps: OwnProps): StateProps {
    return {
        guiState: state.guiData,
        chunkState: state.chunkData,
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<{}, {}, any>,
    ownProps: OwnProps,
): DispatchProps {
    return {
        isEnabled: (isEnabled: boolean) => dispatch(botUpdateEnabled(isEnabled)),
        isEnabledFeature: (isEnabled: boolean) => dispatch(botUpdateFeatureEnabled(isEnabled)),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(BotModal);
