import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Configuration } from '../../configuration';
import { Typography, Slider, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import urlHelper from '../../urlHelper';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { updateImagePlacementConfiguration, updateInputImage, updateImageModifiers } from '../../actions/guiActions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store';
import { PlacementConfiguration, ImageModifiers, OverlayImageInput, GuiParametersState } from '../../store/guiTypes';

interface OwnState { }

interface OwnProps {
}

interface StateProps {
    guiState: GuiParametersState;
}

interface DispatchProps {
    updateConfig: (transparency?: number, x?: number, y?: number) => void;
    updateInputImage: (url: string) => void;
    updateModifications: (modificationsAvailable?: boolean, doModifications?: boolean, shouldConvertColors?: boolean, imageBrightness?: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class OverlayConfig extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);

        autoBind(this);
    }
    render(): React.ReactNode {
        const {
            guiState,
            updateInputImage,
            updateConfig,
            updateModifications,
        } = this.props;

        return (
            <div>
                <TextField
                    label="Url"
                    type="string"
                    value={guiState.overlayImage.inputImage.url}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        updateInputImage(e.target.value);
                    }}
                />
                <br />
                <TextField
                    label="X"
                    type="number"
                    value={guiState.placementConfiguration.xOffset}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        const numValue = parseInt(e.target.value, 10);
                        if (isNaN(numValue)) {
                            return;
                        }
                        updateConfig(undefined, numValue);
                    }}
                />
                <br />
                <TextField
                    label="Y"
                    type="number"
                    value={guiState.placementConfiguration.yOffset}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        const numValue = parseInt(e.target.value, 10);
                        if (isNaN(numValue)) {
                            return;
                        }
                        updateConfig(undefined, undefined, numValue);
                    }}
                />
                <br />
                <Typography id="transparency-slider" gutterBottom>
                    Transparency
            </Typography>
                <Slider
                    defaultValue={70}
                    getAriaValueText={(v): string => {
                        return v.toString(10);
                    }}
                    aria-labelledby="transparency-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                    value={guiState.placementConfiguration.transparency}
                    onChange={(e, value): void => {
                        if(typeof(value) !== 'number') {
                            return;
                        }
                        updateConfig(value);
                    }}
                />
                <div style={{
                    display: guiState.modifications.modificationsAvailable ? '' : 'none',
                }}>
                    <br />
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                checked={guiState.modifications.shouldConvertColors}
                                onChange={(e): void => {
                                    updateModifications(undefined, undefined, e.target.checked);
                                }}
                            />
                        }
                        label="Convert colors"
                        labelPlacement="end"
                    />
                    <br />
                    <div style={{ display: guiState.modifications.shouldConvertColors ? '' : 'none' }}>
                        <Typography id="brightness-slider" gutterBottom>
                            Image brightness
                    </Typography>
                        <Slider
                            defaultValue={15}
                            getAriaValueText={(v): string => {
                                return v.toString(10);
                            }}
                            aria-labelledby="brightness-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            min={-20}
                            max={20}
                            value={guiState.modifications.imageBrightness}
                            onChange={(e, value): void => {
                                if(typeof(value) !== 'number') {
                                    return;
                                }
                                updateModifications(undefined, undefined, undefined, value);
                            }}
                        />
                    </div>
                </div>
                <br />
                <Button
                    onClick={(): void => this.onShareConfig()}
                >
                    Share overlay
            </Button>
            </div>
        );
    }

    private onShareConfig(): void {
        // tslint:disable-next-line:typedef
        const { guiState } = this.props;

        const shareConf = urlHelper.sharableConfigFromState(guiState);

        const shareLink = urlHelper.getSharableLink(shareConf);

        urlHelper.copyToClipboard(shareLink);

        alert(`Copied link to your clipboard:
${shareLink}

Share this link with others to quickly share your overlay configuration.
`);
    }
}


function mapStateToProps(state: AppState, ownProps: OwnProps): StateProps {
    return {
        guiState: state.guiData,
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<{}, {}, any>,
    ownProps: OwnProps,
): DispatchProps {
    return {
        updateConfig: (transparency?: number, x?: number, y?: number) => dispatch(updateImagePlacementConfiguration(transparency, x, y)),
        updateInputImage: (url: string) => dispatch(updateInputImage(url)),
        updateModifications: (modificationsAvailable?: boolean, doModifications?: boolean, shouldConvertColors?: boolean, imageBrightness?: number) => dispatch(updateImageModifiers(modificationsAvailable, doModifications, shouldConvertColors, imageBrightness))
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(OverlayConfig);
