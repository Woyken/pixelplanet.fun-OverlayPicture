import React from 'react';
import './configurationModal.scss';
import OverlayConfig from '../overlayConfig/overlayConfig';
import { Configuration } from '../../configuration';
import ConfigDropDown from '../configDropDown/configDropDown';
import { Checkbox, FormControlLabel, Tooltip } from '@material-ui/core';
import { GuiParametersState } from '../../store/guiTypes';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateOverlayEnabled, updateBotModalVisible } from '../../actions/guiActions';

interface OwnState {
    isModalMinimized: boolean;
}

interface OwnProps {
}

interface StateProps {
    guiState: GuiParametersState;
}

interface DispatchProps {
    isEnabled: (isEnabled: boolean) => void;
    openBotModal: (isVisible: boolean) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class ConfigurationModal extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isModalMinimized: false,
        };
    }

    render(): React.ReactNode {
        const {
            guiState,
            isEnabled,
        } = this.props;

        return (
            <div id="PictureOverlay_ConfigurationModalRoot">
                <Tooltip title="Toggle on/off Overlay. Shortcut: O">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                checked={guiState.overlayEnabled}
                                onChange={(e): void => isEnabled(e.target.checked)}
                            />
                        }
                        label="Image Overlay"
                        labelPlacement="end"
                    />
                </Tooltip>
                <div style={{
                    display: guiState.overlayEnabled ? '' : 'none',
                }}>
                    <div style={{
                        display: this.state.isModalMinimized ? 'none' : '',
                    }}>
                        <div id="PictureOverlay_BaseForExpand">
                            <OverlayConfig />
                        </div>

                        {
                            this.props.guiState.modifications.modificationsAvailable && this.props.guiState.modifications.shouldConvertColors
                                ?
                                <Tooltip title="Open BOT window">
                                    <img
                                        style={{ position: 'absolute', right: '0.4em' }}
                                        width="4%"
                                        height="4%"
                                        src="https://fonts.gstatic.com/s/i/materialicons/accessible_forward/v4/24px.svg"
                                        onClick={
                                            (): void =>
                                                this.props.openBotModal(
                                                    !this.props.guiState.isBotModalVisible,
                                                )
                                        }
                                    />
                                </Tooltip>
                                : null
                        }

                        <ConfigDropDown />
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
        isEnabled: (isEnabled: boolean) => dispatch(updateOverlayEnabled(isEnabled)),
        openBotModal: (isVisible: boolean) => dispatch(updateBotModalVisible(isVisible)),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(ConfigurationModal);
