import React from 'react';
import ConfigDropDownContent from './Content/configDropDownContent';
import { Configuration } from '../../configuration';
import { configurationStore } from '../../configurationStore';
import autoBind from 'react-autobind';

interface OwnState {
    isActive: boolean;
    savedConfigurations: Configuration[];
}

interface OwnProps {
    onApplyConfig: (config: Configuration) => void;
    activeConfiguration: Configuration;
}

type Props = OwnProps;

class ConfigDropDown extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isActive: false,
            savedConfigurations: configurationStore.getSavedConfigurations(),
        };

        autoBind(this);
    }

    render(): React.ReactNode {
        // tslint:disable-next-line:typedef
        const { isActive, savedConfigurations } = this.state;
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
                isActive={isActive}
                onApplyConfig={this.onApplyConfig}
                onRemoveConfig={this.onRemoveConfig}
                configs={savedConfigurations}
            />
        </div>
        );
    }

    onSaveActiveConfiguration(): void {
        // tslint:disable-next-line: typedef
        const { activeConfiguration } = this.props;
        configurationStore.add(activeConfiguration);
        this.setState((prevState): OwnState => {
            return {
                ...prevState,
                savedConfigurations: configurationStore.getSavedConfigurations(),
            };
        });
    }

    onApplyConfig(config: Configuration): void {
        this.toggle(false);

        // tslint:disable-next-line: typedef
        const { onApplyConfig } = this.props;
        onApplyConfig(config);
    }

    onRemoveConfig(config: Configuration): void {
        configurationStore.remove(config.imgUrl);
        this.setState((prevState): OwnState => {
            return {
                ...prevState,
                savedConfigurations: configurationStore.getSavedConfigurations(),
            };
        });
    }

    toggle(enabled?: boolean): void {
        this.setState((prevState): OwnState => {
            return {
                ...prevState,
                isActive: enabled !== undefined ? enabled : !prevState.isActive,
            };
        });
    }
}

export default ConfigDropDown;
