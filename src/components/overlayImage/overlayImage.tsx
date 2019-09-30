import React from 'react';
import { Configuration } from '../../configuration';
import autoBind from 'react-autobind';
import { pictureConverter } from '../../pictureConverter';
import './overlayImage.scss';

interface OwnState {
    imgUrl: string;
    zoom: number;
    leftOffset: number;
    topOffset: number;
    imageWidth: number;
    imageHeight: number;
}

interface OwnProps {
    activeConfiguration: Configuration;
    zoomLevelFromUrl: number;
    currentXPosition: number;
    currentYPosition: number;
    modifyAvailableChanged: (available: boolean) => void;
    temporarilyHidden: boolean;
    isOverlayEnabled: boolean;
}

type Props = OwnProps;

class OverlayImage extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            imageHeight: 0,
            imageWidth: 0,
            imgUrl: '',
            leftOffset: 0,
            topOffset: 0,
            zoom: 0,
        };

        autoBind(this);
    }

    async componentDidUpdate(
        prevProps: Readonly<Props>,
        prevState: Readonly<OwnState>,
    ): Promise<void> {
        if (prevProps !== this.props) {
            // Input has changed, update state.
            // tslint:disable-next-line: typedef
            const {
                activeConfiguration,
                zoomLevelFromUrl,
                currentXPosition,
                currentYPosition,
            } = this.props;
            const zoom = Math.pow(2, zoomLevelFromUrl / 10);
            this.setState({
                ...prevState,
                zoom,
                imgUrl: activeConfiguration.imgUrl,
                leftOffset: window.innerWidth / 2 -
                    (currentXPosition - activeConfiguration.xOffset) * zoom,
                topOffset: window.innerHeight / 2 -
                    (currentYPosition - activeConfiguration.yOffset) * zoom,
            });
        }
        if (this.state.imgUrl !== prevState.imgUrl ||
            this.props.activeConfiguration.brighten !==
                prevProps.activeConfiguration.brighten ||
            this.props.activeConfiguration.convertColors !==
                prevProps.activeConfiguration.convertColors
        ) {
            // url has changed, update the source
            await this.updateSource();
        }
    }

    render(): React.ReactNode {
        // tslint:disable-next-line: typedef
        const { activeConfiguration, temporarilyHidden, isOverlayEnabled } = this.props;
        // tslint:disable-next-line:typedef
        const {
            zoom,
            leftOffset,
            topOffset,
            imageWidth,
            imageHeight,
        } = this.state;

        const opacity = activeConfiguration.transparency / 100;

        return (
        <div style={{
            display: temporarilyHidden || !isOverlayEnabled ? 'none' : '',
        }}>
            <img
                ref="image"
                className="PictureOverlay_OverlayImage"
                src={activeConfiguration.imgUrl}
                style={{
                    opacity,
                    transform: `scale(${zoom})`,
                    left: leftOffset,
                    top: topOffset,
                }}
            />
            <canvas
                ref="canvas"
                className="PictureOverlay_OverlayImage"
                style={{
                    opacity,
                    transform: `scale(${zoom})`,
                    left: leftOffset,
                    top: topOffset,
                }}
                width={imageWidth}
                height={imageHeight}
            />
        </div>
        );
    }

    async updateSource(): Promise<void> {
        console.log('updating image source...');
        // tslint:disable-next-line: typedef
        const { activeConfiguration, modifyAvailableChanged } = this.props;
        // tslint:disable-next-line: typedef
        const { imgUrl } = this.state;

        const canvas = this.refs.canvas as HTMLCanvasElement;
        const image = this.refs.image as HTMLImageElement;
        const ctx = canvas.getContext('2d');

        const data = await pictureConverter.convertPictureFromUrl(
            imgUrl,
            ctx,
            activeConfiguration.convertColors,
            activeConfiguration.brighten)
            .catch((reason) => {
                // Probably CORS is disabled.
            });

        if (!data) {
            // render only <img/>
            image.style.display = 'block';
            canvas.style.display = 'none';

            modifyAvailableChanged(false);

            return;
        }
        image.style.display = 'none';
        canvas.style.display = 'block';

        modifyAvailableChanged(true);

        this.setState((prevState): OwnState => {
            return {
                ...prevState,
                imageHeight: data.height,
                imageWidth: data.width,
            };
        });

        ctx.clearRect(0, 0, data.width, data.height);

        ctx.putImageData(data, 0, 0);
    }
}

export default OverlayImage;
