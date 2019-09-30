import React from 'react';
import './configDropDownElement.scss';
import { Configuration } from '../../../configuration';
import autoBind from 'react-autobind';

interface OwnProps {
    config: Configuration;
    onClickCallback: (config: Configuration) => void;
    onDeleteCallback: (config: Configuration) => void;
}

type Props = OwnProps;

class ConfigDropDownElement extends React.Component<Props, undefined> {
    constructor(props: Props) {
        super(props);

        autoBind(this);
    }

    render(): React.ReactNode {
        return (
            <div
                className="PictureOverlay_ConfigDropDownElement"
                onClick={this.onWholeElementClicked}
            >
                <img
                    className="PictureOverlay_ConfigDropDownElImg"
                    src={this.props.config.imgUrl}
                />
                <a
                    className="PictureOverlay_ConfigDropDownElText"
                >
                    {this.props.config.imgUrl}
                </a>
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
