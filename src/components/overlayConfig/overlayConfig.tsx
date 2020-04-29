import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Typography, Slider, FormControlLabel, Checkbox, Button, Tooltip } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import autoBind from 'react-autobind';
import ShareOverlayModal from '../shareOverlayModal/shareOverlayModal';
import { observer } from 'mobx-react';
import { overlayStore } from '../../store/overlayStore';
import { updateInputImage, updateImagePlacementConfiguration, updateImageModifiers } from '../../actions/guiActions';

interface OwnState {
    isShareOverlayOpen: boolean;
}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

@observer
class OverlayConfig extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShareOverlayOpen: false,
        };

        autoBind(this);
    }

    render(): React.ReactNode {
        const showWarningAboutCors =
            !overlayStore.modifications.modificationsAvailable && !!overlayStore.overlayImage.inputImage.url;

        return (
            <div>
                {overlayStore.overlayImage.inputImage.file ? null : (
                    <div>
                        <TextField
                            label="Url"
                            type="string"
                            value={overlayStore.overlayImage.inputImage.url}
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
                {overlayStore.overlayImage.inputImage.url ? null : (
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
                    value={overlayStore.placementConfiguration.xOffset}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        const numValue = parseInt(e.target.value, 10);
                        if (isNaN(numValue)) {
                            return;
                        }
                        updateImagePlacementConfiguration(undefined, numValue);
                    }}
                />
                <br />
                <TextField
                    label="Y"
                    type="number"
                    value={overlayStore.placementConfiguration.yOffset}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        const numValue = parseInt(e.target.value, 10);
                        if (isNaN(numValue)) {
                            return;
                        }
                        updateImagePlacementConfiguration(undefined, undefined, numValue);
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
                    value={overlayStore.placementConfiguration.transparency}
                    onChange={(e, value): void => {
                        if (typeof value !== 'number') {
                            return;
                        }
                        updateImagePlacementConfiguration(value);
                    }}
                />
                <div
                    style={{
                        display: overlayStore.modifications.modificationsAvailable ? '' : 'none',
                    }}
                >
                    <br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={overlayStore.modifications.shouldConvertColors}
                                onChange={(e): void => {
                                    updateImageModifiers(undefined, e.target.checked);
                                }}
                            />
                        }
                        label="Convert colors"
                        labelPlacement="end"
                    />
                    <br />
                    <div style={{ display: overlayStore.modifications.shouldConvertColors ? '' : 'none' }}>
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
                            value={overlayStore.modifications.imageBrightness}
                            onChange={(e, value): void => {
                                if (typeof value !== 'number') {
                                    return;
                                }
                                updateImageModifiers(undefined, undefined, value);
                            }}
                        />
                    </div>
                </div>
                <br />
                <Button onClick={(): void => this.setState({ isShareOverlayOpen: !this.state.isShareOverlayOpen })}>
                    Share overlay
                </Button>
                <ShareOverlayModal
                    overlayStore={overlayStore}
                    isOpen={this.state.isShareOverlayOpen}
                    setIsOpen={(isOpen: boolean): void => this.setState({ isShareOverlayOpen: isOpen })}
                />
            </div>
        );
    }
}

export default OverlayConfig;
