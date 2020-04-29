import React, { useState } from 'react';
import { Modal, DialogTitle, createStyles, makeStyles, Theme, TextField, Button } from '@material-ui/core';
import urlHelper, { SharableConfig } from '../../urlHelper';
import { observer, inject } from 'mobx-react';
import { OverlayStore } from '../../store/overlayStore';
import { updateInputImage, updateImagePlacementConfiguration, updateImageModifiers } from '../../actions/guiActions';

interface StateProps {
    overlayStore: OverlayStore;
}

interface OwnProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const ShareOverlayModal: React.FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [sharedInput, setSharedInput] = useState<string | undefined>(undefined);
    const [parsedShared, setParsedShared] = useState<SharableConfig | null>(null);
    const shareConf = urlHelper.sharableConfigFromState(props.overlayStore);

    // We don't need anything here if modal is not visible.
    if (!props.isOpen) return null;

    const handleClose = (): void => {
        props.setIsOpen(false);
    };

    const handleSharedInput = (sharedInput: string): void => {
        try {
            // TODO "safer" parsing.
            const shared = JSON.parse(sharedInput) as SharableConfig;
            if (shared.modifications && shared.overlayImageUrl && shared.placementConfiguration) {
                setParsedShared(shared);
            } else {
                setParsedShared(null);
            }
        } catch {
            setParsedShared(null);
        }
        setSharedInput(sharedInput);
    };

    const applySharedOverlay = (): void => {
        if (!parsedShared) return;

        updateInputImage(parsedShared.overlayImageUrl);
        updateImageModifiers(
            parsedShared.modifications.modificationsAvailable,
            parsedShared.modifications.doModifications,
            parsedShared.modifications.shouldConvertColors,
            parsedShared.modifications.imageBrightness,
        );
        updateImagePlacementConfiguration(
            parsedShared.placementConfiguration.transparency,
            parsedShared.placementConfiguration.xOffset,
            parsedShared.placementConfiguration.yOffset,
        );
        handleClose();
        // Recenter on canvas in image.
        urlHelper.stickToGrid(parsedShared.placementConfiguration.xOffset, parsedShared.placementConfiguration.yOffset);
    };

    const onShareConfig = (): void => {
        handleSharedInput(JSON.stringify(shareConf));
    };

    return (
        <div>
            <Modal open={props.isOpen} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <DialogTitle>Share your overlay</DialogTitle>
                    <TextField
                        label="Shared overlay"
                        type="string"
                        value={sharedInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            handleSharedInput(e.target.value);
                        }}
                    />
                    {sharedInput ? (parsedShared ? 'ok' : 'not ok') : null}
                    <Button onClick={applySharedOverlay} disabled={parsedShared === null}>
                        Apply
                    </Button>
                    <br />
                    <Button onClick={onShareConfig} disabled={shareConf === null}>
                        Fill from active overlay
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default observer(ShareOverlayModal);
