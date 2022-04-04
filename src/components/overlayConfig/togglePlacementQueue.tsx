import { PixelUpdateReturnCode } from 'gameInjection/webSockets/packets/pixelReturn';
import { placePixel } from 'gameInjection/webSockets/webSocketPixelPlace';
import logger from 'handlers/logger';
import { useAsyncInterval } from 'hooks/useInterval';
import React, { useCallback } from 'react';
import {
    selectCanvasLatestPixelReturnCooldownMs,
    selectCanvasMaxTimeoutMs,
    selectCanvasSize,
    selectCanvasTimeoutOnBaseMs,
    selectCanvasTimeoutOnPlacedMs,
    selectWaitDate,
} from 'store/slices/gameSlice';
import { pixelPlacementSlice, selectPixelPlaceQueueEnabled, selectPixelsToPlaceQueueFirstPixel } from 'store/slices/pixelPlacementSlice';
import { store } from 'store/store';
import { gameCoordsToChunk } from 'utils/coordConversion';

import { Checkbox, FormControlLabel } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

const TogglePlacementQueue: React.FC = () => {
    const isEnabled = useAppSelector(selectPixelPlaceQueueEnabled);
    const areAnyPixelsInQueue = useAppSelector(selectPixelsToPlaceQueueFirstPixel) !== undefined;
    const dispatch = useAppDispatch();
    // different events version, intercept actual click and add pixel then
    // const mouseDownEventCallback = useCallback(() => {
    //     const hoverPixel = selectHoverPixel(store.getState());
    //     const selectedColor = selectCurrentSelectedColor(store.getState());
    //     dispatch(pixelPlacementSlice.actions.addPixelsToPlaceQueue([{ coord: hoverPixel, color: selectedColor }]));
    // }, [dispatch]);
    // useEffect(() => {
    //     if (isEnabled) {
    //         return viewPortEvents.on('mouseDownCaptured', (ev) => {
    //             ev.stopPropagation();
    //             mouseDownEventCallback();
    //         });
    //     }
    //     return undefined;
    // }, [isEnabled, mouseDownEventCallback]);

    const canvasSize = useAppSelector(selectCanvasSize);

    const waitDate = useAppSelector(selectWaitDate);
    const waitUntilMs = waitDate.getTime();
    const maxTimeoutMs = useAppSelector(selectCanvasMaxTimeoutMs);
    const timeoutOnBaseMs = useAppSelector(selectCanvasTimeoutOnBaseMs);
    const timeoutOnPlacedMs = useAppSelector(selectCanvasTimeoutOnPlacedMs);
    const latestPixelReturnCooldownMs = useAppSelector(selectCanvasLatestPixelReturnCooldownMs);
    const maxSinglePixelTimeoutMs = Math.max(timeoutOnBaseMs, timeoutOnPlacedMs, latestPixelReturnCooldownMs);
    const nowMs = Date.now();
    const untilPlacementAttemptMs = Math.max(waitUntilMs - nowMs - (maxTimeoutMs - maxSinglePixelTimeoutMs), 200);
    useAsyncInterval(
        async () => {
            const pixelToPlace = selectPixelsToPlaceQueueFirstPixel(store.getState());
            if (!pixelToPlace) return;
            const { coord, color } = pixelToPlace;
            const { chunkX, chunkY, offsetInChunk } = gameCoordsToChunk(coord, canvasSize);
            const returnedPixels = await placePixel(chunkX, chunkY, [{ color, offsetInChunk }]);

            switch (returnedPixels.retCode) {
                case PixelUpdateReturnCode.success:
                case PixelUpdateReturnCode.protectedPixel:
                case PixelUpdateReturnCode.xOutOfBounds:
                case PixelUpdateReturnCode.yOutOfBounds:
                case PixelUpdateReturnCode.zOutOfBounds:
                case PixelUpdateReturnCode.colorOutOfBounds:
                    dispatch(pixelPlacementSlice.actions.removePixelsFromPlaceQueue([pixelToPlace]));
                    break;
                case PixelUpdateReturnCode.catchaNeeded:
                case PixelUpdateReturnCode.canvasDoesntExist:
                case PixelUpdateReturnCode.notLoggedIn:
                case PixelUpdateReturnCode.notEnoughPixelsPlaced:
                case PixelUpdateReturnCode.needToBeInTop10:
                case PixelUpdateReturnCode.proxyDetected:
                    dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(false));
                    break;
                case PixelUpdateReturnCode.cooldownLimitReached:
                    break;
                default:
                    logger.logError('unknown pixel return code', returnedPixels.retCode);
                    dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(false));
                    break;
            }
        },
        isEnabled && areAnyPixelsInQueue ? untilPlacementAttemptMs : null
    );

    const handleToggle = useCallback(() => {
        dispatch(pixelPlacementSlice.actions.setPixelPlaceQueueEnabled(!isEnabled));
    }, [dispatch, isEnabled]);

    return <FormControlLabel control={<Checkbox color="primary" checked={isEnabled} onChange={handleToggle} />} label="Place Queue" labelPlacement="end" />;
};

export default TogglePlacementQueue;
