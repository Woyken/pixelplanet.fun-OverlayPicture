import React from 'react';
import './configDropDownContent.scss';
import ConfigDropDownElement from '../element/configDropDownElement';
import autoBind from 'react-autobind';
import { SavedConfiguration } from '../../../store/guiTypes';

interface OwnState {}

interface OwnProps {
    configs: SavedConfiguration[];
    isActive: boolean;
    onApplyConfig: (config: SavedConfiguration) => void;
    onRemoveConfig: (config: SavedConfiguration) => void;
}

type Props = OwnProps;

class ConfigDropDownContent extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {};

        autoBind(this);
    }

    render(): React.ReactNode {
        // tslint:disable-next-line: typedef
        const { isActive, configs } = this.props;

        return (
        <div
            id="PictureOverlay_ConfigDropDownContent"
            style={{ display: isActive ? 'block' : 'none' }}
        >
            {configs.map(config =>
                <ConfigDropDownElement
                    config={config}
                    key={config.imageUrl}
                    onClickCallback={this.onConfigApply}
                    onDeleteCallback={this.removeConfig}
                />)}
        </div>
        );
    }

    removeConfig(config: SavedConfiguration): void {
        // tslint:disable-next-line: typedef
        const { onRemoveConfig } = this.props;
        onRemoveConfig(config);
    }

    onConfigApply(config: SavedConfiguration): void {
        // tslint:disable-next-line: typedef
        const { onApplyConfig } = this.props;
        onApplyConfig(config);
    }
}

export default ConfigDropDownContent;
