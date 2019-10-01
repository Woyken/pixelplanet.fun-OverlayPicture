import React from 'react';
import './configurationModal.scss';
import OverlayConfig from '../overlayConfig/overlayConfig';
import { Configuration } from '../../configuration';
import ConfigDropDown from '../configDropDown/configDropDown';
import { Checkbox, FormControlLabel, Tooltip } from '@material-ui/core';

interface OwnState {
    isModalMinimized: boolean;
}

interface OwnProps {
    activeConfiguration: Configuration;
    onConfigurationChange: (newConfig: Configuration) => void;
    isOverlayEnabled: boolean;
    isOverlayEnabledChanged: (enabled: boolean) => void;
    modifyImageAvailable: boolean;
}

type Props = OwnProps;

class ConfigurationModal extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isModalMinimized: false,
        };
    }

    render(): React.ReactNode {
        // tslint:disable-next-line: typedef
        const {
            activeConfiguration,
            onConfigurationChange,
            isOverlayEnabled,
            isOverlayEnabledChanged,
            modifyImageAvailable,
        } = this.props;

        return (
        <div id="PictureOverlay_ConfigurationModalRoot">
            <Tooltip title="Toggle on/off Overlay. Shortcut: O">
                <FormControlLabel
                    control={
                        <Checkbox color="primary"
                            checked={isOverlayEnabled}
                            onChange={(e): void => isOverlayEnabledChanged(e.target.checked)}
                        />
                    }
                    label="Image Overlay"
                    labelPlacement="end"
                />
            </Tooltip>
            <div style={{
                display: isOverlayEnabled ? '' : 'none',
            }}>
                <div style={{
                    display: this.state.isModalMinimized ? 'none' : '',
                }}>
                    <div id="PictureOverlay_BaseForExpand">
                        <OverlayConfig
                            activeConfiguration={activeConfiguration}
                            onConfigurationChange={onConfigurationChange}
                            modifyImageAvailable={modifyImageAvailable}
                        />
                    </div>
                    <ConfigDropDown
                        activeConfiguration={activeConfiguration}
                        onApplyConfig={onConfigurationChange}
                    />
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

export default ConfigurationModal;
