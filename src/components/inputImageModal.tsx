import { setInputImageAction } from 'actions/imageProcessing';
import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { makeStyles, useAppTheme } from 'theme/makeStyles';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { OverlayUrlInput } from './overlayConfig/overlayUrlInput';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const useStyles = makeStyles()((theme) => ({
    dropzoneEl: {
        border: '1px dashed #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        height: '200px',
        margin: '20px auto',
        textAlign: 'center',
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropzoneText: {
        color: theme.palette.text.secondary,
    },
}));

export const InputImageModal: React.FC<IProps> = (props) => {
    const { isOpen, onClose } = props;
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const theme = useAppTheme();

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0];
            if (file) dispatch(setInputImageAction(file));
        },
        [dispatch]
    );

    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Select overlay image</DialogTitle>
            <DialogContent>
                <OverlayUrlInput />
                <Dropzone onDrop={onDrop} accept="image/*">
                    {({ getRootProps, getInputProps, isDragActive, isDragAccept }) => (
                        <div {...getRootProps({ className: classes.dropzoneEl })} style={{ borderColor: isDragAccept ? theme.palette.success.main : undefined }}>
                            <input {...getInputProps()} hidden />
                            <span>{isDragActive ? '📂' : '📁'}</span>
                            <p className={classes.dropzoneText}>Drag&apos;n&apos;drop images, or click to select files</p>
                        </div>
                    )}
                </Dropzone>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};
