import React from 'react';
import './configDropDownElement.scss';
import autoBind from 'react-autobind';
import { SavedConfiguration } from '../../../store/guiTypes';

interface OwnProps {
    config: SavedConfiguration;
    onClickCallback: (config: SavedConfiguration) => void;
    onDeleteCallback: (config: SavedConfiguration) => void;
}

type Props = OwnProps;

class ConfigDropDownElement extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        autoBind(this);
    }

    render(): React.ReactNode {
        return (
            <div className="PictureOverlay_ConfigDropDownElement" onClick={this.onWholeElementClicked}>
                <img className="PictureOverlay_ConfigDropDownElImg" src={this.props.config.imageUrl} />
                <a className="PictureOverlay_ConfigDropDownElText">{this.props.config.imageUrl}</a>
                <img
                    className="PictureOverlay_ConfigDropDownElDelete"
                    src="https://fonts.gstatic.com/s/i/materialicons/delete_forever/v1/24px.svg"
                    onClick={this.onDeleteElementClicked}
                />
            </div>
        );
    }

    onWholeElementClicked(): void {
        this.props.onClickCallback(this.props.config);
    }

    onDeleteElementClicked(event: React.MouseEvent<HTMLImageElement, MouseEvent>): void {
        event.stopPropagation();
        this.props.onDeleteCallback(this.props.config);
    }
}

export default ConfigDropDownElement;
