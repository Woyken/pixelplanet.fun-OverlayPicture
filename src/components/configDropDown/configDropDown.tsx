import { saveConfiguration, setInputImageAction } from 'actions/imageProcessing';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { OverlaySavedConfigurationState, overlaySlice, selectCurrentStateAsConfiguration, selectInputUrl, selectSavedConfigurations } from 'store/slices/overlaySlice';
import { makeStyles } from 'theme/makeStyles';
import { setViewCoordinates, usePageReduxStoreDispatch } from 'utils/getPageReduxStore';

import { FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';

import logger from '../../handlers/logger';

import { ConfigDropDownElement } from './element/configDropDownElement';

const useStyles = makeStyles()({
    configDropDownSelector: {
        'min-width': '10em',
    },
    configDropDownSaveIcon: {
        'vertical-align': 'bottom',
    },
});

const usePageReduxStoreSetViewCoordsAction = () => {
    const dispatch = usePageReduxStoreDispatch();

    return (x: number, y: number) => {
        if (dispatch) dispatch(setViewCoordinates([x, y]));
    };
};

const ConfigDropDown: React.FC = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const savedConfigurations = useAppSelector(selectSavedConfigurations);
    const inputUrl = useAppSelector(selectInputUrl);
    const currentStateAsConfiguration = useAppSelector(selectCurrentStateAsConfiguration);

    const setViewCoords = usePageReduxStoreSetViewCoordsAction();

    const onApplyConfig = (config: OverlaySavedConfigurationState) => {
        dispatch(setInputImageAction(config.imageUrl));
        dispatch(overlaySlice.actions.setModifierImageBrightness(config.modifiers.imageBrightness));
        dispatch(overlaySlice.actions.setModifierShouldConvertColors(config.modifiers.shouldConvertColors));
        dispatch(overlaySlice.actions.setPlacementAutoSelectColor(config.modifiers.autoSelectColor));
        dispatch(overlaySlice.actions.setPlacementXOffset(config.placementConfiguration.xOffset));
        dispatch(overlaySlice.actions.setPlacementYOffset(config.placementConfiguration.yOffset));
        dispatch(overlaySlice.actions.setPlacementTransparency(config.placementConfiguration.transparency));
        setViewCoords(config.placementConfiguration.xOffset, config.placementConfiguration.yOffset);
    };

    const onLoadConfigByUrl = (url: string) => {
        const config = savedConfigurations.find((c) => c.imageUrl === url);
        if (config) onApplyConfig(config);
        else logger.logError('Tried to load config from url, but not found in saved');
    };

    const onSaveActiveConfiguration = () => {
        if (currentStateAsConfiguration) dispatch(saveConfiguration(currentStateAsConfiguration));
    };

    const onRemoveConfig = (config: OverlaySavedConfigurationState) => {
        dispatch(overlaySlice.actions.removeSavedConfig(config.imageUrl));
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="saved-config-dropdown-label">Load saved config</InputLabel>
                <Select
                    className={classes.configDropDownSelector}
                    labelId="saved-config-dropdown-label"
                    value=""
                    onChange={(value): void => {
                        if (typeof value.target.value === 'string') onLoadConfigByUrl(value.target.value);
                    }}
                >
                    {savedConfigurations.map((config) => (
                        <MenuItem key={config.imageUrl} value={config.imageUrl}>
                            <ConfigDropDownElement config={config} key={config.imageUrl} onDeleteCallback={onRemoveConfig} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {inputUrl ? (
                <Tooltip title="Save current config">
                    <img className={classes.configDropDownSaveIcon} src="https://fonts.gstatic.com/s/i/materialicons/save/v1/24px.svg" onClick={onSaveActiveConfiguration} />
                </Tooltip>
            ) : null}
        </div>
    );
};

export default ConfigDropDown;
