import React from 'react';
import autoBind from 'react-autobind';
import './overlayImage.scss';
import logger from '../../handlers/logger';
import { ChunkCell } from '../../chunkHelper';
import { loadChunkData } from '../../actions/pixelData';
import { GameState, gameStore } from '../../store/gameStore';
import { overlayStore, PlacementConfiguration } from '../../store/overlayStore';
import { observe } from 'mobx';
import { observer } from 'mobx-react';

interface OwnState {
    zoom: number;
    topOffset: number;
    leftOffset: number;
}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

@observer
class OverlayImage extends React.Component<Props, OwnState> {
    private imageCanvasRef: React.RefObject<HTMLCanvasElement>;
    private imageImageRef: React.RefObject<HTMLImageElement>;

    constructor(props: Props) {
        super(props);
        this.state = this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration);
        this.imageCanvasRef = React.createRef();
        this.imageImageRef = React.createRef();

        autoBind(this);

        observe(overlayStore.overlayImage.outputImage, 'outputImageData', (change) => {
            if (change.newValue !== change.oldValue) {
                this.updateSource();
            }
        });

        observe(overlayStore.placementConfiguration, 'xOffset', (change) => {
            // Input has changed, update state.
            this.setState(this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration));
        });

        observe(overlayStore.placementConfiguration, 'yOffset', (change) => {
            // Input has changed, update state.
            this.setState(this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration));
        });

        observe(gameStore.gameState, 'centerX', (change) => {
            // Input has changed, update state.
            this.setState(this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration));
        });

        observe(gameStore.gameState, 'centerY', (change) => {
            // Input has changed, update state.
            this.setState(this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration));
        });

        observe(gameStore.gameState, 'zoomLevel', (change) => {
            // Input has changed, update state.
            this.setState(this.getImagePositionOffsetState(gameStore.gameState, overlayStore.placementConfiguration));
        });
    }

    getImagePositionOffsetState(gameState: GameState, placementConfiguration: PlacementConfiguration): OwnState {
        const zoom = Math.pow(2, gameState.zoomLevel / 10);
        return {
            zoom,
            leftOffset: window.innerWidth / 2 - (gameState.centerX - placementConfiguration.xOffset) * zoom,
            topOffset: window.innerHeight / 2 - (gameState.centerY - placementConfiguration.yOffset) * zoom,
        };
    }

    render(): React.ReactNode {
        const { zoom, leftOffset, topOffset } = this.state;

        const opacity = overlayStore.placementConfiguration.transparency / 100;

        return (
            <div
                style={{
                    display: gameStore.gameState.isMouseDragging ? 'none' : '',
                }}
            >
                {overlayStore.overlayImage.outputImage.outputImageData ? (
                    <canvas
                        ref={this.imageCanvasRef}
                        className="PictureOverlay_OverlayImage"
                        style={{
                            opacity,
                            transform: `scale(${zoom})`,
                            left: leftOffset,
                            top: topOffset,
                        }}
                        width={overlayStore.overlayImage.outputImage.outputImageData?.width}
                        height={overlayStore.overlayImage.outputImage.outputImageData?.height}
                    />
                ) : (
                    <img
                        ref={this.imageImageRef}
                        className="PictureOverlay_OverlayImage"
                        src={overlayStore.overlayImage.inputImage.url}
                        style={{
                            opacity,
                            transform: `scale(${zoom})`,
                            left: leftOffset,
                            top: topOffset,
                        }}
                    />
                )}
            </div>
        );
    }

    async updateSource(): Promise<void> {
        if (!overlayStore.overlayImage.outputImage.outputImageData) {
            return;
        }
        logger.log(`updating image source, repainting canvas... ${overlayStore.overlayImage.outputImage.outputImageData.data.length}`);
        const canvas = this.imageCanvasRef.current;
        if (!canvas) {
            logger.logError('canvas is null');
            return;
        }
        // const image = this.refs.image as HTMLImageElement;
        const ctx = canvas.getContext('2d');

        ctx?.clearRect(0, 0, overlayStore.overlayImage.outputImage.outputImageData.width, overlayStore.overlayImage.outputImage.outputImageData.height);

        ctx?.putImageData(overlayStore.overlayImage.outputImage.outputImageData, 0, 0);
    }
}

export default OverlayImage;
