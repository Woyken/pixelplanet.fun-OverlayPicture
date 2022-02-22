import { setInputImageAction } from 'actions/imageProcessing';
import { get as getColor, to as toColor } from 'color-string';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { createMakeStyles } from 'tss-react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Checkbox, FormControlLabel, IconButton, Tooltip, useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { overlaySlice, selectIsOverlayEnabled } from '../../store/slices/overlaySlice';
import ConfigDropDown from '../configDropDown/configDropDown';
import OverlayConfig from '../overlayConfig/overlayConfig';

const makeStyles = createMakeStyles({ useTheme });
const useStyles = makeStyles.makeStyles()((theme) => {
    const backgroundColor = getColor.rgb(theme.palette.background.paper);
    backgroundColor[3] = 0.9;
    return {
        modalRoot: {
            position: 'absolute',
            right: '0.9em',
            top: '0.1em',
            width: '15em',
            border: '1px solid rgb(0, 0, 0)',
            backgroundColor: toColor.rgb(backgroundColor),
            padding: '5px',
            fontSize: '0.9em',
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: 'calc(100vh - 1.5em)',
        },
    };
});

const ConfigurationModal: React.FC = () => {
    const [isModalMinimized, setIsModalMinimized] = React.useState(false);
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0];
            if (file) dispatch(setInputImageAction(file));
        },
        [dispatch]
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*', noClick: true });

    const handleToggleOverlayOnOff = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(overlaySlice.actions.setOverlayEnabled(e.target.checked));
    };
    return (
        <div {...getRootProps()} className={classes.modalRoot} style={{ border: isDragActive ? '3px dashed red' : undefined }}>
            <input {...getInputProps()} hidden />
            <Tooltip title="Toggle on/off Overlay. Shortcut: O">
                <FormControlLabel control={<Checkbox color="primary" checked={isOverlayEnabled} onChange={handleToggleOverlayOnOff} />} label="Image Overlay" labelPlacement="end" />
            </Tooltip>
            <div
                style={{
                    display: isOverlayEnabled ? '' : 'none',
                }}
            >
                <div
                    style={{
                        display: isModalMinimized ? 'none' : '',
                    }}
                >
                    <div>
                        <OverlayConfig />
                    </div>

                    <ConfigDropDown />
                </div>
                <IconButton onClick={(): void => setIsModalMinimized(!isModalMinimized)}>{isModalMinimized ? <ExpandMore /> : <ExpandLess />}</IconButton>
            </div>
        </div>
    );
};

export default ConfigurationModal;
