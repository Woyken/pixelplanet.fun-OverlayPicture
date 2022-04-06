import colorConverter from 'colorConverter';
import React, { startTransition, useEffect, useRef } from 'react';
import { selectMainCanvasTopLeftScreenCoords, selectPixelsToPlaceBySplitRenderCanvasId, selectPixelsToPlaceRenderCanvasIds, selectRenderCanvasCoords } from 'store/slices/pixelPlacementSlice';

import { useAppSelector } from '../../store/hooks';
import { selectCanvasPalette, selectCanvasSize, selectGameViewScale } from '../../store/slices/gameSlice';
import {
    selectInputFile,
    selectInputUrl,
    selectModifierSmolPixels,
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
    overlayImageSplitChunk: {
        transform: `scale(${1 / 3})`,
        transformOrigin: 'top left',
        position: 'absolute',
        pointerEvents: 'none',
    },
    overlayImageSplitChunkWrapper: {
        position: 'fixed',
        pointerEvents: 'none',
        transformOrigin: 'top left',
        imageRendering: 'pixelated',
    },
});

const splitRenderCanvasSize = 1024;

const PixelQueueSplitCanvas: React.FC<{ splitRenderCanvasId: number }> = (props) => {
    const { splitRenderCanvasId } = props;
    const { classes } = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasPalette = useAppSelector(selectCanvasPalette);
    const pixelsToPlaceBySplitRenderCanvasId = useAppSelector((state) => selectPixelsToPlaceBySplitRenderCanvasId(state, splitRenderCanvasId));
    const { renderCanvasXCorner, renderCanvasYCorner } = useAppSelector((state) => selectRenderCanvasCoords(state, splitRenderCanvasId));
    const canvasSize = useAppSelector(selectCanvasSize);

    useEffect(() => {
        startTransition(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const imageDataWidth = splitRenderCanvasSize * 3;
            const imageData = new ImageData(imageDataWidth, imageDataWidth);
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            pixelsToPlaceBySplitRenderCanvasId.forEach((x) => {
                const currentXOffsetFromCorner = x.coord.x - renderCanvasXCorner;
                const currentYOffsetFromCorner = x.coord.y - renderCanvasYCorner;
                const rgb = colorConverter.getActualColorFromPalette(canvasPalette, x.color);
                if (!rgb) return;
                // eslint-disable-next-line no-bitwise
                const idx = (currentXOffsetFromCorner * 3 + 1 + (currentYOffsetFromCorner * 3 + 1) * imageDataWidth) << 2;
                const [r, g, b] = rgb;
                imageData.data[idx] = r;
                imageData.data[idx + 1] = g;
                imageData.data[idx + 2] = b;
                imageData.data[idx + 3] = 255;
            });
            canvas.getContext('2d')?.putImageData(imageData, 0, 0);
        });
    }, [canvasPalette, pixelsToPlaceBySplitRenderCanvasId, renderCanvasXCorner, renderCanvasYCorner]);

    return (
        <canvas
            key={splitRenderCanvasId}
            ref={canvasRef}
            className={classes.overlayImageSplitChunk}
            style={{
                left: renderCanvasXCorner + canvasSize / 2,
                top: renderCanvasYCorner + canvasSize / 2,
            }}
        />
    );
};

const PlaceQueuePixels: React.FC = () => {
    const { classes } = useStyles();
    const viewScale = useAppSelector(selectGameViewScale);
    const renderCanvasIds = useAppSelector(selectPixelsToPlaceRenderCanvasIds);
    const canvasTopLeftOnScreen = useAppSelector(selectMainCanvasTopLeftScreenCoords);

    return (
        <div
            className={classes.overlayImageSplitChunkWrapper}
            style={{
                left: canvasTopLeftOnScreen.clientX,
                top: canvasTopLeftOnScreen.clientY,
                transform: `scale(${viewScale})`,
            }}
        >
            {renderCanvasIds.map((x) => (
                <PixelQueueSplitCanvas key={x} splitRenderCanvasId={x} />
            ))}
        </div>
    );
};

const OverlayImageCanvas: React.FC = () => {
    const imageData = useAppSelector(selectRenderImageData);
    const { classes } = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { leftOffset, topOffset } = useAppSelector(selectOverlayOffsetCoordsOnScreen);
    const opacity = useAppSelector(selectPlacementTransparency) / 100;
    const viewScale = useAppSelector(selectGameViewScale);
    const modifierSmolPixels = useAppSelector(selectModifierSmolPixels);
    const canvasScaleModifier = modifierSmolPixels ? 1 / 3 : 1;

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
                transform: `scale(${viewScale * canvasScaleModifier})`,
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
    return <PlaceQueuePixels />;
};

export default OverlayImage;
