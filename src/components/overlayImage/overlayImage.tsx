import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectGameViewScale } from '../../store/slices/gameSlice';
import { selectOverlayImageDataOrUrl, selectOverlayOffsetCoordsOnScreen, selectPlacementTransparency } from '../../store/slices/overlaySlice';
import { makeStyles } from '../../theme/makeStyles';

/*
.PictureOverlay_OverlayImage {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    transform-origin: top left;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
}
*/
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

const OverlayImageCanvas: React.FC<{ imageData: ImageData }> = (props) => {
    const { imageData } = props;
    const { classes } = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { leftOffset, topOffset } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
    const opacity = useAppSelector(selectPlacementTransparency) / 100;
    const viewScale = useAppSelector(selectGameViewScale);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.putImageData(imageData, 0, 0);
        }
    }, [imageData]);

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

const OverlayImageImg: React.FC<{ imageUrl: string }> = (props) => {
    const { imageUrl } = props;
    const { classes } = useStyles();
    const { leftOffset, topOffset } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
    const opacity = useAppSelector(selectPlacementTransparency) / 100;
    const viewScale = useAppSelector(selectGameViewScale);

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
    const outputImageDataOrUrl = useAppSelector(selectOverlayImageDataOrUrl);
    if (!outputImageDataOrUrl) return null;
    return (
        <div>
            {typeof outputImageDataOrUrl !== 'string' && <OverlayImageCanvas imageData={outputImageDataOrUrl} />}
            {typeof outputImageDataOrUrl === 'string' && <OverlayImageImg imageUrl={outputImageDataOrUrl} />}
        </div>
    );
};

export default OverlayImage;
