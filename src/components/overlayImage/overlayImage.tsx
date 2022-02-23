import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectGameViewScale } from '../../store/slices/gameSlice';
import {
    selectInputFile,
    selectInputUrl,
    selectOverlayOffsetCoordsOnScreen,
    selectPlacementTransparency,
    selectRenderImageData,
    selectShouldShowImageFromData,
    selectShouldShowImageFromUrl,
} from '../../store/slices/overlaySlice';
import { makeStyles } from '../../theme/makeStyles';

const useStyles = makeStyles()({
    overlayImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        transformOrigin: 'top left',
        imageRendering: 'pixelated',
    },
});

const OverlayImageCanvas: React.FC = () => {
    const imageData = useAppSelector(selectRenderImageData);
    const { classes } = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { leftOffset, topOffset } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
    const opacity = useAppSelector(selectPlacementTransparency) / 100;
    const viewScale = useAppSelector(selectGameViewScale);

    useEffect(() => {
        if (!imageData) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const ctx = canvas.getContext('2d');
        ctx?.putImageData(imageData, 0, 0);
    }, [imageData]);

    if (!imageData) return <div>missing image data</div>;

    return (
        <canvas
            ref={canvasRef}
            className={classes.overlayImage}
            style={{
                opacity,
                transform: `scale(${viewScale})`,
                left: leftOffset,
                top: topOffset,
            }}
        />
    );
};

const useFileUrlFromFile = () => {
    const imageFile = useAppSelector(selectInputFile);
    const [fileUrl, setFileUrl] = React.useState<string>();
    useEffect(() => {
        if (!imageFile) return undefined;
        const newFileUrl = URL.createObjectURL(imageFile);
        setFileUrl(newFileUrl);
        return () => {
            URL.revokeObjectURL(newFileUrl);
        };
    }, [imageFile]);
    return fileUrl;
};

const useRenderImageUrl = () => {
    const imageUrl = useAppSelector(selectInputUrl);
    const fileUrl = useFileUrlFromFile();
    return fileUrl || imageUrl;
};

const OverlayImageImg: React.FC = () => {
    const imageUrl = useRenderImageUrl();
    const { classes } = useStyles();
    const { leftOffset, topOffset } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
    const opacity = useAppSelector(selectPlacementTransparency) / 100;
    const viewScale = useAppSelector(selectGameViewScale);

    if (!imageUrl) return <div>missing image url</div>;

    return (
        <img
            alt=""
            className={classes.overlayImage}
            src={imageUrl}
            style={{
                opacity,
                transform: `scale(${viewScale})`,
                left: leftOffset,
                top: topOffset,
            }}
        />
    );
};

const OverlayImage: React.FC = () => {
    const shouldShowImageFromData = useAppSelector(selectShouldShowImageFromData);
    const shouldShowImageFromUrl = useAppSelector(selectShouldShowImageFromUrl);

    if (shouldShowImageFromData) return <OverlayImageCanvas />;
    if (shouldShowImageFromUrl) return <OverlayImageImg />;
    return null;
};

export default OverlayImage;
