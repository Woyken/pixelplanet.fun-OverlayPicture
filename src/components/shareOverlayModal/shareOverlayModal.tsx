import React, { useState } from 'react';

import { DialogTitle, Modal, TextField } from '@mui/material';

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
    const [sharedInput] = useState<string>();
    // const [parsedShared, setParsedShared] = useState<SharableConfig>();

    // We don't need anything here if modal is not visible.
    if (!isOpen) return null;
    // const shareConf = urlHelper.sharableConfigFromState(props.overlayStore);

    const handleClose = (): void => {
        setIsOpen(false);
    };

    const handleSharedInput = (): void => {
        // try {
        //     // TODO "safer" parsing.
        //     const shared = JSON.parse(sharedInput) as SharableConfig;
        //     if (shared.modifications && shared.overlayImageUrl && shared.placementConfiguration) {
        //         setParsedShared(shared);
        //     } else {
        //         setParsedShared(null);
        //     }
        // } catch {
        //     setParsedShared(null);
        // }
        // setSharedInput(sharedInput);
    };

    // const applySharedOverlay = (): void => {
    //     if (!parsedShared) return;

    //     updateInputImage(parsedShared.overlayImageUrl);
    //     updateImageModifiers(parsedShared.modifications.modificationsAvailable, parsedShared.modifications.shouldConvertColors, parsedShared.modifications.imageBrightness);
    //     updateImagePlacementConfiguration(parsedShared.placementConfiguration.transparency, parsedShared.placementConfiguration.xOffset, parsedShared.placementConfiguration.yOffset);
    //     handleClose();
    //     // Recenter on canvas in image.
    //     urlHelper.stickToGrid(parsedShared.placementConfiguration.xOffset, parsedShared.placementConfiguration.yOffset);
    // };

    // const onShareConfig = (): void => {
    //     handleSharedInput(JSON.stringify(shareConf));
    // };

    return (
        <div>
            <Modal open={isOpen} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <DialogTitle>Share your overlay</DialogTitle>
                    <TextField
                        label="Shared overlay"
                        type="string"
                        value={sharedInput}
                        onChange={(): void => {
                            handleSharedInput();
                        }}
                    />
                    {/* {sharedInput ? (parsedShared ? 'ok' : 'not ok') : null}
                    <Button onClick={applySharedOverlay} disabled={parsedShared === null}>
                        Apply
                    </Button>
                    <br />
                    <Button onClick={onShareConfig} disabled={shareConf === null}>
                        Fill from active overlay
                    </Button> */}
                </div>
            </Modal>
        </div>
    );
};

export default ShareOverlayModal;
