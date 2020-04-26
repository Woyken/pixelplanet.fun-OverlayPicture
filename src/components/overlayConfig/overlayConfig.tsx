import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Typography, Slider, FormControlLabel, Checkbox, Button, Tooltip } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { updateImagePlacementConfiguration, updateInputImage, updateImageModifiers } from '../../actions/guiActions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState, ActionTypes } from '../../store';
import { GuiParametersState } from '../../store/guiTypes';
import ShareOverlayModal from '../shareOverlayModal/shareOverlayModal';

interface OwnState {
    isShareOverlayOpen: boolean;
}

interface OwnProps {}

interface StateProps {
    guiState: GuiParametersState;
}

interface DispatchProps {
    updateConfig: (transparency?: number, x?: number, y?: number) => void;
    updateInputImage: (url?: string, file?: File) => void;
    updateModifications: (
        modificationsAvailable?: boolean,
        doModifications?: boolean,
        shouldConvertColors?: boolean,
        imageBrightness?: number,
    ) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class OverlayConfig extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShareOverlayOpen: false,
        };

        autoBind(this);
    }

    render(): React.ReactNode {
        const { guiState, updateInputImage, updateConfig, updateModifications } = this.props;
        const showWarningAboutCors =
            !this.props.guiState.modifications.modificationsAvailable &&
            !!this.props.guiState.overlayImage.inputImage.url;

        return (
            <div>
                {guiState.overlayImage.inputImage.file ? null : (
                    <div>
                        <TextField
                            label="Url"
                            type="string"
                            value={guiState.overlayImage.inputImage.url}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                updateInputImage(e.target.value);
                            }}
                        />
                        {showWarningAboutCors ? (
                            <Tooltip title="Some features will not work. Most likely that current url does not support CORS requests. Some example sites that work: https://postimages.org/, https://imgur.com/, https://dropbox.com/ (For dropbox modify the url before using, replace 'www.dropbox.' with 'dl.dropboxusercontent.' )">
                                <WarningIcon />
                            </Tooltip>
                        ) : null}
                        <br />
                    </div>
                )}
                {guiState.overlayImage.inputImage.url ? null : (
                    <div>
                        <Input
                            type="file"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                const theFile = e.target.files?.[0];
                                updateInputImage(undefined, theFile);
                            }}
                        />
                        <br />
                    </div>
                )}
                <Button
                    onClick={(): void => {
                        updateInputImage('', undefined);
                    }}
                >
                    Clear input
                </Button>
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
                        if (typeof value !== 'number') {
                            return;
                        }
                        updateConfig(value);
                    }}
                />
                <div
                    style={{
                        display: guiState.modifications.modificationsAvailable ? '' : 'none',
                    }}
                >
                    <br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
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
                                if (typeof value !== 'number') {
                                    return;
                                }
                                updateModifications(undefined, undefined, undefined, value);
                            }}
                        />
                    </div>
                </div>
                <br />
                <Button onClick={(): void => this.setState({ isShareOverlayOpen: !this.state.isShareOverlayOpen })}>
                    Share overlay
                </Button>
                <ShareOverlayModal
                    isOpen={this.state.isShareOverlayOpen}
                    setIsOpen={(isOpen): void => this.setState({ isShareOverlayOpen: isOpen })}
                />
            </div>
        );
    }
}

function mapStateToProps(state: AppState): StateProps {
    return {
        guiState: state.guiData,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<AppState, null, ActionTypes>): DispatchProps {
    return {
        updateConfig: (transparency?: number, x?: number, y?: number): unknown =>
            dispatch(updateImagePlacementConfiguration(transparency, x, y)),
        updateInputImage: (url?: string, file?: File): unknown => dispatch(updateInputImage(url, file)),
        updateModifications: (
            modificationsAvailable?: boolean,
            doModifications?: boolean,
            shouldConvertColors?: boolean,
            imageBrightness?: number,
        ): unknown =>
            dispatch(
                updateImageModifiers(modificationsAvailable, doModifications, shouldConvertColors, imageBrightness),
            ),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(OverlayConfig);
