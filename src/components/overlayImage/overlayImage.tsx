import React from 'react';
import { Configuration } from '../../configuration';
import autoBind from 'react-autobind';
import { pictureConverter } from '../../pictureConverter';
import './overlayImage.scss';
import { connect } from 'react-redux';
import { OverlayImageOutput, PlacementConfiguration, GameState, OverlayImageInput } from '../../store/guiTypes';
import { AppState } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import logger from '../../handlers/logger';
import { LoadedChunkData, CanvasMetadata } from '../../store/chunkDataTypes';
import { pixelToChunk, ChunkCell, chunkToIndex, pixelInChunkOffset } from '../../chunkHelper';
import { loadChunkData } from '../../actions/pixelData';

interface OwnState {
    zoom: number;
    topOffset: number;
    leftOffset: number;
}

interface OwnProps {}

interface StateProps {
    placementConfiguration: PlacementConfiguration;
    outputImage: OverlayImageOutput;
    gameState: GameState;
    inputImage: OverlayImageInput;
    loadedChunks: LoadedChunkData[];
    canvasesMetadata: CanvasMetadata[];
    activeCanvasId: number;
}

interface DispatchProps {
    loadChunkData(canvasId: number, chunk: ChunkCell): void;
}

type Props = StateProps & DispatchProps & OwnProps;

class OverlayImage extends React.Component<Props, OwnState> {
    private imageCanvasRef: React.RefObject<HTMLCanvasElement>;
    private imageImageRef: React.RefObject<HTMLImageElement>;

    constructor(props: Props) {
        super(props);
        this.state = this.getImagePositionOffsetState(props.gameState, props.placementConfiguration);
        this.imageCanvasRef = React.createRef();
        this.imageImageRef = React.createRef();

        autoBind(this);
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<OwnState>): Promise<void> {
        if (prevProps !== this.props) {
            // Input has changed, update state.
            const { gameState, placementConfiguration } = this.props;
            this.setState(this.getImagePositionOffsetState(gameState, placementConfiguration));
        }
        if (this.props.outputImage.outputImageData !== prevProps.outputImage.outputImageData) {
            await this.updateSource();
        }
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
        const { outputImage, placementConfiguration, inputImage, gameState } = this.props;

        const { zoom, leftOffset, topOffset } = this.state;

        const opacity = placementConfiguration.transparency / 100;

        return (
            <div
                style={{
                    display: gameState.isMouseDragging ? 'none' : '',
                }}
            >
                {outputImage.outputImageData ? (
                    <canvas
                        ref={this.imageCanvasRef}
                        className="PictureOverlay_OverlayImage"
                        style={{
                            opacity,
                            transform: `scale(${zoom})`,
                            left: leftOffset,
                            top: topOffset,
                        }}
                        width={outputImage.outputImageData?.width}
                        height={outputImage.outputImageData?.height}
                    />
                ) : (
                    <img
                        ref={this.imageImageRef}
                        className="PictureOverlay_OverlayImage"
                        src={inputImage.url}
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
        const { outputImage } = this.props;
        if (!outputImage.outputImageData) {
            return;
        }
        logger.log(`updating image source, repainting canvas... ${outputImage.outputImageData.data.length}`);
        const canvas = this.imageCanvasRef.current;
        if (!canvas) {
            logger.logError('canvas is null');
            return;
        }
        // const image = this.refs.image as HTMLImageElement;
        const ctx = canvas.getContext('2d');

        ctx?.clearRect(0, 0, outputImage.outputImageData.width, outputImage.outputImageData.height);

        ctx?.putImageData(outputImage.outputImageData, 0, 0);
    }
}

function mapStateToProps(state: AppState, ownProps: OwnProps): StateProps {
    return {
        outputImage: state.guiData.overlayImage.outputImage,
        placementConfiguration: state.guiData.placementConfiguration,
        gameState: state.guiData.currentGameState,
        inputImage: state.guiData.overlayImage.inputImage,
        loadedChunks: state.chunkData.loadedChunks,
        canvasesMetadata: state.chunkData.canvasesMetadata,
        activeCanvasId: state.chunkData.activeCanvasId,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps {
    return {
        loadChunkData: (canvasId: number, chunk: ChunkCell): unknown => dispatch(loadChunkData(canvasId, chunk)),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(OverlayImage);
