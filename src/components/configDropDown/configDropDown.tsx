import React from 'react';
import ConfigDropDownContent from './content/configDropDownContent';
import autoBind from 'react-autobind';
import { observer } from 'mobx-react';
import { overlayStore, SavedConfiguration } from '../../store/overlayStore';
import { saveCurrentConfiguration, applySavedConfiguration, removeSavedConfiguration } from '../../actions/guiActions';

interface OwnState {
    isActive: boolean;
}

interface OwnProps {}

@observer
class ConfigDropDown extends React.Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isActive: false,
        };

        autoBind(this);
    }

    render(): React.ReactNode {
        // tslint:disable-next-line:typedef
        const { isActive } = this.state;
        return (
            <div>
                <img
                    src="https://fonts.gstatic.com/s/i/materialicons/save/v1/24px.svg"
                    onClick={this.onSaveActiveConfiguration}
                />
                <img
                    src="https://fonts.gstatic.com/s/i/materialicons/folder_open/v1/24px.svg"
                    onClick={(): void => this.toggle()}
                />
                <ConfigDropDownContent
                    onApplyConfig={this.onApplyConfig}
                    onRemoveConfig={this.onRemoveConfig}
                    configs={overlayStore.savedConfigs}
                    isActive={isActive}
                />
            </div>
        );
    }

    onSaveActiveConfiguration(): void {
        saveCurrentConfiguration();
    }

    onApplyConfig(config: SavedConfiguration): void {
        this.toggle(false);

        applySavedConfiguration(config);
    }

    onRemoveConfig(config: SavedConfiguration): void {
        removeSavedConfiguration(config.imageUrl);
    }

    toggle(enabled?: boolean): void {
        this.setState(
            (prevState): OwnState => {
                return {
                    ...prevState,
                    isActive: enabled !== undefined ? enabled : !prevState.isActive,
                };
            },
        );
    }
}

export default ConfigDropDown;