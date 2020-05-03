import React from 'react';
import './configurationModal.scss';
import OverlayConfig from '../overlayConfig/overlayConfig';
import ConfigDropDown from '../configDropDown/configDropDown';
import { Checkbox, FormControlLabel, Tooltip, Button } from '@material-ui/core';
import { updateOverlayEnabled, updateBotModalVisible } from '../../actions/guiActions';
import { overlayStore } from '../../store/overlayStore';
import { observer } from 'mobx-react';
import urlHelper from '../../urlHelper';

interface OwnState {
    isModalMinimized: boolean;
}

interface OwnProps {}

@observer
class ConfigurationModal extends React.Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isModalMinimized: false,
        };
    }

    render(): React.ReactNode {
        return (
            <div id="PictureOverlay_ConfigurationModalRoot">
                <Tooltip title="Toggle on/off Overlay. Shortcut: O">
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={overlayStore.overlayEnabled}
                                onChange={(e): void => updateOverlayEnabled(e.target.checked)}
                            />
                        }
                        label="Image Overlay"
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
                        <div id="PictureOverlay_BaseForExpand">
                            <OverlayConfig />
                        </div>

                        {overlayStore.modifications.modificationsAvailable &&
                        overlayStore.modifications.shouldConvertColors ? (
                            <Tooltip title="Open BOT window">
                                <img
                                    style={{ position: 'absolute', right: '0.4em' }}
                                    width="4%"
                                    height="4%"
                                    src="https://fonts.gstatic.com/s/i/materialicons/accessible_forward/v4/24px.svg"
                                    onClick={(): void => updateBotModalVisible(!overlayStore.isBotModalVisible)}
                                />
                            </Tooltip>
                        ) : null}

                        <ConfigDropDown />
                        {overlayStore.isRestickingNeeded ? (
                            <Tooltip title="Whoops. Something went wrong with offset/scale calculations... To fix the overlay image offset click this.">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(): void => {
                                        overlayStore.isRestickingNeeded = false;
                                        urlHelper.stickToGrid();
                                    }}
                                >
                                    Woopsie. Reset scale!
                                </Button>
                            </Tooltip>
                        ) : null}
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
}

export default ConfigurationModal;
