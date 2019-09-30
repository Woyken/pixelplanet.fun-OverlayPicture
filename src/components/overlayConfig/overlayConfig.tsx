import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Configuration } from '../../configuration';
import { Typography, Slider, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import urlHelper from '../../urlHelper';
import autoBind from 'react-autobind';

interface OwnState {}

interface OwnProps {
    activeConfiguration: Configuration;
    onConfigurationChange: (newConfig: Configuration) => void;
    modifyImageAvailable: boolean;
}

type Props = OwnProps;

class OverlayConfig extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);

        autoBind(this);
    }
    render(): React.ReactNode {
        // tslint:disable-next-line: typedef
        const {
            activeConfiguration,
            onConfigurationChange,
            modifyImageAvailable,
        } = this.props;

        return (
        <div>
            <TextField
                label="Url"
                type="string"
                value={activeConfiguration.imgUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    onConfigurationChange({
                        ...activeConfiguration,
                        imgUrl: e.target.value,
                    });
                }}
            />
            <br/>
            <TextField
                label="X"
                type="number"
                value={activeConfiguration.xOffset}
                onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    const numValue = parseInt(e.target.value, 10);
                    if (isNaN(numValue)) {
                        return;
                    }
                    onConfigurationChange({
                        ...activeConfiguration,
                        xOffset: numValue,
                    });
                }}
            />
            <br/>
            <TextField
                label="Y"
                type="number"
                value={activeConfiguration.yOffset}
                onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    const numValue = parseInt(e.target.value, 10);
                    if (isNaN(numValue)) {
                        return;
                    }
                    onConfigurationChange({
                        ...activeConfiguration,
                        yOffset: numValue,
                    });
                }}
            />
            <br/>
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
                marks
                min={0}
                max={100}
                value={activeConfiguration.transparency}
                onChange={(e, value: number): void => {
                    onConfigurationChange({
                        ...activeConfiguration,
                        transparency: value,
                    });
                }}
            />
            <div style={{
                display: modifyImageAvailable ? '' : 'none',
            }}>
                <br/>
                <FormControlLabel
                    control={
                        <Checkbox color="primary"
                            checked={activeConfiguration.convertColors}
                            onChange={(e): void => {
                                onConfigurationChange({
                                    ...activeConfiguration,
                                    convertColors: e.target.checked,
                                });
                            }}
                        />
                    }
                    label="Convert colors"
                    labelPlacement="end"
                />
                <br/>
                <div style={{ display: activeConfiguration.convertColors ? '' : 'none' }}>
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
                        marks
                        min={-20}
                        max={20}
                        value={activeConfiguration.brighten}
                        onChange={(e, value: number): void => {
                            onConfigurationChange({
                                ...activeConfiguration,
                                brighten: value,
                            });
                        }}
                    />
                </div>
            </div>
            <br/>
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
        const { activeConfiguration } = this.props;

        const hashstr = window.location.hash.substr(1)
                            .split(',');

        // default link format is: pixelplanet.fun/#0,0,0
        const shareLink = `${
            window.location.href.split('#')[0]
        }#${activeConfiguration.xOffset.toString(
            10,
        )},${activeConfiguration.yOffset.toString(10)},${hashstr[2] ||
            0},${JSON.stringify(activeConfiguration)}`;

        urlHelper.copyToClipboard(shareLink);

        alert(`Copied link to your clipboard:
${shareLink}

Share this link with others to quickly share your overlay configuration.
`);
    }
}

export default OverlayConfig;
