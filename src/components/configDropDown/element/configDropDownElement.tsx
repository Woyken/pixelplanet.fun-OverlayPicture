import React from 'react';
import './configDropDownElement.scss';
import { SavedConfiguration } from '../../../store/overlayStore';

interface OwnProps {
    config: SavedConfiguration;
    onDeleteCallback: (config: SavedConfiguration) => void;
}

type Props = OwnProps;

class ConfigDropDownElement extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="PictureOverlay_ConfigDropDownElement">
                <div className="PictureOverlay_ConfigDropDownElImg">
                    <img className="PictureOverlay_ConfigDropDownElImgImg" src={this.props.config.imageUrl} />
                </div>
                <a className="PictureOverlay_ConfigDropDownElText">{this.props.config.imageUrl}</a>
                <img
                    className="PictureOverlay_ConfigDropDownElDelete"
                    src="https://fonts.gstatic.com/s/i/materialicons/delete_forever/v1/24px.svg"
                    onClick={this.onDeleteElementClicked.bind(this)}
                />
            </div>
        );
    }

    onDeleteElementClicked(event: React.MouseEvent<HTMLImageElement, MouseEvent>): void {
        event.stopPropagation();
        this.props.onDeleteCallback(this.props.config);
    }
}

export default ConfigDropDownElement;
