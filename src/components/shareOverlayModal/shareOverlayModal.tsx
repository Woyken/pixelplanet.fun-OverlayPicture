import { setInputImageAction } from 'actions/imageProcessing';
import { usePageReduxStoreSetViewCoordsAction } from 'components/configDropDown/configDropDown';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { OverlaySavedConfigurationState, overlaySlice, selectCurrentStateAsConfiguration } from 'store/slices/overlaySlice';

import { Button, DialogTitle, Modal, TextField } from '@mui/material';

import { makeStyles } from '../../theme/makeStyles';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

interface ModalStyle {
    top: string;
    left: string;
    transform: string;
}

function getModalStyle(): ModalStyle {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles()((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ShareOverlayModal: React.FunctionComponent<Props> = (props: Props) => {
    const { isOpen, setIsOpen } = props;
    const { classes } = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [sharedInput, setSharedInput] = useState<string>();
    const [sharedInputParsed, setSharedInputParsed] = useState<OverlaySavedConfigurationState>();
    const dispatch = useAppDispatch();
    const currentConfiguration = useAppSelector(selectCurrentStateAsConfiguration);
    const setViewCoords = usePageReduxStoreSetViewCoordsAction();

    useEffect(() => {
        try {
            if (sharedInput) setSharedInputParsed(JSON.parse(sharedInput));
            else setSharedInputParsed(undefined);
        } catch (error) {
            setSharedInputParsed(undefined);
        }
    }, [sharedInput]);

    // We don't need anything here if modal is not visible.
    if (!isOpen) return null;

    const handleClose = (): void => {
        setIsOpen(false);
    };

    const onApplyConfig = (config: OverlaySavedConfigurationState) => {
        dispatch(setInputImageAction(config.imageUrl));
        dispatch(overlaySlice.actions.setModifierImageBrightness(config.modifiers.imageBrightness));
        dispatch(overlaySlice.actions.setModifierShouldConvertColors(config.modifiers.shouldConvertColors));
        dispatch(overlaySlice.actions.setPlacementAutoSelectColor(config.modifiers.autoSelectColor));
        dispatch(overlaySlice.actions.setPlacementXOffset(config.placementConfiguration.xOffset));
        dispatch(overlaySlice.actions.setPlacementYOffset(config.placementConfiguration.yOffset));
        dispatch(overlaySlice.actions.setPlacementTransparency(config.placementConfiguration.transparency));
        setViewCoords(config.placementConfiguration.xOffset, config.placementConfiguration.yOffset);
        handleClose();
    };

    const fillFromOverlay = (): void => {
        const fillStr = JSON.stringify(currentConfiguration);
        setSharedInput(fillStr);
        navigator.clipboard.writeText(fillStr);
    };

    const handleApplyConfig = () => {
        if (sharedInputParsed) onApplyConfig(sharedInputParsed);
    };

    return (
        <div>
            <Modal open={isOpen} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <DialogTitle>Share your overlay</DialogTitle>
                    <TextField
                        label="Shared overlay"
                        type="string"
                        value={sharedInput}
                        onChange={(e) => {
                            setSharedInput(e.target.value);
                        }}
                    />
                    {sharedInput ? (sharedInputParsed ? 'ok' : 'not ok') : null}
                    <Button onClick={handleApplyConfig} disabled={sharedInputParsed == null}>
                        Apply
                    </Button>
                    <br />
                    <Button onClick={fillFromOverlay} disabled={currentConfiguration == null}>
                        Fill from active overlay
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default ShareOverlayModal;
