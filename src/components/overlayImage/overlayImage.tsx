import colorConverter from 'colorConverter';
import React, { useEffect, useRef } from 'react';
import { selectPixelsToPlaceQueue } from 'store/slices/pixelPlacementSlice';
import { gameCoordsToScreen } from 'utils/coordConversion';

import { useAppSelector } from '../../store/hooks';
import { Cell, selectCanvasPalette, selectCanvasSize, selectGameViewCenter, selectGameViewScale } from '../../store/slices/gameSlice';
import {
    selectInputFile,
    selectInputUrl,
    selectOverlayOffsetCoordsOnScreen,
    selectPlacementTransparency,
    selectRenderImageData,
    selectShouldShowImageFromData,
    selectShouldShowImageFromUrl,
    selectWindowSize,
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

const splitRenderCanvasSize = 1024;
const PlaceQueuePixels: React.FC = () => {
    // multiple canvases, because single canvas is not capable of handling too many pixels
    const canvasesRef = useRef<HTMLCanvasElement[]>([]);
    const { classes } = useStyles();
    const placeQueue = useAppSelector(selectPixelsToPlaceQueue);
    const viewScale = useAppSelector(selectGameViewScale);
    const windowSize = useAppSelector(selectWindowSize);
    const gameViewCenter = useAppSelector(selectGameViewCenter);
    const canvasPalette = useAppSelector(selectCanvasPalette);
    const canvasSize = useAppSelector(selectCanvasSize);
    const splitCanvasesWidth = Math.ceil(canvasSize / splitRenderCanvasSize);
    const splitCanvases = placeQueue
        .map((x) => ({
            ...x,
            splitRenderCanvasX: Math.floor((x.coord.x + canvasSize / 2) / splitRenderCanvasSize),
            splitRenderCanvasY: Math.floor((x.coord.y + canvasSize / 2) / splitRenderCanvasSize),
        }))
        .map((x) => ({ ...x, splitRenderCanvasId: x.splitRenderCanvasX + x.splitRenderCanvasY * splitCanvasesWidth }))
        .reduce((acc, x) => {
            const foundAccumulator = acc[x.splitRenderCanvasId];
            if (!foundAccumulator) {
                acc[x.splitRenderCanvasId] = {
                    pixels: [{ color: x.color, coord: x.coord }],
                    splitRenderCanvasId: x.splitRenderCanvasId,
                };
                return acc;
            }
            foundAccumulator.pixels.push({ color: x.color, coord: x.coord });
            return acc;
        }, [] as { splitRenderCanvasId: number; pixels: { color: number; coord: Cell }[] }[])
        .map((x) => {
            const gameCoordsTopLeft = {
                x: (x.splitRenderCanvasId % splitCanvasesWidth) * splitRenderCanvasSize - canvasSize / 2,
                y: Math.floor(x.splitRenderCanvasId / splitCanvasesWidth) * splitRenderCanvasSize - canvasSize / 2,
            };
            const screenCoords = gameCoordsToScreen(gameCoordsTopLeft, { height: windowSize.innerHeight, width: windowSize.innerWidth }, gameViewCenter, viewScale);
            return {
                ...x,
                gameCoordsTopLeft,
                leftCanvasOffsetOnScreen: screenCoords.clientX,
                topCanvasOffsetOnScreen: screenCoords.clientY,
            };
        });

    // TODO need to optimize the heck out of this.
    // Create some sort of selector to split pixels queue into chunked arrays (separate from splitCanvases obj), then we'll have to do less redraws

    useEffect(() => {
        splitCanvases.forEach((splitCanvas) => {
            const canvas = canvasesRef.current[splitCanvas.splitRenderCanvasId];
            if (!canvas) return;
            const imageDataWidth = splitRenderCanvasSize * 3;
            const imageData = new ImageData(imageDataWidth, imageDataWidth);
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            splitCanvas.pixels.forEach((x) => {
                const currentXOffsetFromCorner = x.coord.x - splitCanvas.gameCoordsTopLeft.x;
                const currentYOffsetFromCorner = x.coord.y - splitCanvas.gameCoordsTopLeft.y;
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
    }, [canvasPalette, splitCanvases]);

    return (
        <>
            {splitCanvases.map((x) => (
                <canvas
                    key={x.splitRenderCanvasId}
                    ref={(ref) => {
                        if (ref) canvasesRef.current[x.splitRenderCanvasId] = ref;
                    }}
                    className={classes.overlayImage}
                    style={{
                        left: x.leftCanvasOffsetOnScreen,
                        top: x.topCanvasOffsetOnScreen,
                        transform: `scale(${viewScale / 3})`,
                    }}
                />
            ))}
        </>
    );
};

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
    return <PlaceQueuePixels />;
};

export default OverlayImage;
