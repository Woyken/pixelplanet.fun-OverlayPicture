import type { EventEmitter } from 'events';
import { viewPortEvents } from 'gameInjection/viewport';
import { webSocketEvents } from 'gameInjection/webSockets/webSocketEvents';
import React, { useCallback, useEffect, useState } from 'react';
import { chunkDataSlice } from 'store/slices/chunkDataSlice';

import { loadSavedConfigurations, startProcessingOutputImage, useReadingInputImageProcess } from '../actions/imageProcessing';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { gameSlice, selectCanvasUserPalette, selectGameViewCenter, selectGameViewScale } from '../store/slices/gameSlice';
import {
    overlaySlice,
    selectInputImageData,
    selectInputUrl,
    selectIsOverlayEnabled,
    selectModifierImageBrightness,
    selectModifierShouldConvertColors,
    selectModifierSmolPixels,
    selectWindowSize,
} from '../store/slices/overlaySlice';
import {
    selectPageStateCanvasId,
    selectPageStateCanvasMaxTimeoutMs,
    selectPageStateCanvasPalette,
    selectPageStateCanvasReservedColors,
    selectPageStateCanvasSize,
    selectPageStateCanvasTimeoutOnBaseMs,
    selectPageStateCanvasViewCenter,
    selectPageStateCurrentSelectedColor,
    selectPageStatePixelWaitDate,
    selectPageStateViewScale,
    selectPaseStateCanvasTimeoutOnPlacedMs,
    usePageReduxStoreSelector,
} from '../utils/getPageReduxStore';

import ConfigurationModal from './configurationModal/configurationModal';
import OverlayImage from './overlayImage/overlayImage';

declare global {
    interface Window {
        pixelPlanetEvents: EventEmitter;
    }
}

function usePageStoreWaitDate() {
    const dispatch = useAppDispatch();
    const waitDate = usePageReduxStoreSelector(selectPageStatePixelWaitDate);
    useEffect(() => {
        if (waitDate) dispatch(gameSlice.actions.setWaitDate(waitDate));
        else dispatch(gameSlice.actions.setWaitDate(new Date()));
    }, [dispatch, waitDate]);
}

function usePageStoreCurrentSelectedColor() {
    const dispatch = useAppDispatch();
    const currentSelectedColor = usePageReduxStoreSelector(selectPageStateCurrentSelectedColor);
    useEffect(() => {
        if (currentSelectedColor) dispatch(gameSlice.actions.setSelectedColor(currentSelectedColor));
    }, [dispatch, currentSelectedColor]);
}

function usePageStoreViewScale() {
    const dispatch = useAppDispatch();
    // const pageViewScale = usePageReduxStoreSelector(selectPageStateViewScale);

    useEffect(() => {
        // Extension events: https://git.pixelplanet.fun/ppfun/pixelplanet/src/branch/master/src/store/middleware/extensions.js
        const processEvent = (scale: number) => dispatch(gameSlice.actions.setViewScale(scale));

        window.pixelPlanetEvents.on('setscale', processEvent);
        return () => {
            window.pixelPlanetEvents.off('setscale', processEvent);
        };
    }, [dispatch]);

    // useEffect(() => {
    //     if (pageViewScale) dispatch(gameSlice.actions.setViewScale(pageViewScale));
    // }, [dispatch, pageViewScale]);
}

function usePageStoreViewCenter() {
    const dispatch = useAppDispatch();
    // const pageViewCenter = usePageReduxStoreSelector(selectPageStateCanvasViewCenter);

    useEffect(() => {
        // Extension events: https://git.pixelplanet.fun/ppfun/pixelplanet/src/branch/master/src/store/middleware/extensions.js
        const processEvent = (viewCoordinates: number[]) => {
            if (viewCoordinates.length < 2) return;
            const x = viewCoordinates[0];
            const y = viewCoordinates[1];
            if (typeof x !== 'number' || typeof y !== 'number') return;
            dispatch(gameSlice.actions.setViewCenter({ x, y }));
        };

        window.pixelPlanetEvents.on('setviewcoordinates', processEvent);
        return () => {
            window.pixelPlanetEvents.off('setviewcoordinates', processEvent);
        };
    }, [dispatch]);

    // useEffect(() => {
    //     if (pageViewCenter) dispatch(gameSlice.actions.setViewCenter(pageViewCenter));
    // }, [dispatch, pageViewCenter]);
}

function usePageStoreCanvasPalette() {
    const dispatch = useAppDispatch();
    const palette = usePageReduxStoreSelector(selectPageStateCanvasPalette);
    useEffect(() => {
        if (palette) dispatch(gameSlice.actions.setPalette(palette));
    }, [dispatch, palette]);
}

function usePageStoreCanvasReservedColors() {
    const dispatch = useAppDispatch();
    const reservedColors = usePageReduxStoreSelector(selectPageStateCanvasReservedColors);
    useEffect(() => {
        if (reservedColors) dispatch(gameSlice.actions.setReservedColorCount(reservedColors ?? 0));
    }, [dispatch, reservedColors]);
}

function usePageStoreCanvasId() {
    const dispatch = useAppDispatch();
    const canvasId = usePageReduxStoreSelector(selectPageStateCanvasId);
    const canvasSize = usePageReduxStoreSelector(selectPageStateCanvasSize);
    const maxTimeoutMs = usePageReduxStoreSelector(selectPageStateCanvasMaxTimeoutMs);
    const timeoutOnBaseMs = usePageReduxStoreSelector(selectPageStateCanvasTimeoutOnBaseMs);
    const timeoutOnPlacedMs = usePageReduxStoreSelector(selectPaseStateCanvasTimeoutOnPlacedMs);

    useEffect(() => {
        if (canvasId) dispatch(gameSlice.actions.setCanvasId(canvasId));
    }, [dispatch, canvasId]);
    useEffect(() => {
        if (canvasSize) dispatch(gameSlice.actions.setCanvasSize(canvasSize));
    }, [dispatch, canvasSize]);
    useEffect(() => {
        if (maxTimeoutMs) dispatch(gameSlice.actions.setMaxTimeoutMs(maxTimeoutMs));
    }, [dispatch, maxTimeoutMs]);
    useEffect(() => {
        if (timeoutOnBaseMs) dispatch(gameSlice.actions.setTimeoutOnBaseMs(timeoutOnBaseMs));
    }, [dispatch, timeoutOnBaseMs]);
    useEffect(() => {
        if (timeoutOnPlacedMs) dispatch(gameSlice.actions.setTimeoutOnPlacedMs(timeoutOnPlacedMs));
    }, [dispatch, timeoutOnPlacedMs]);
}

function useWebSocketEvents() {
    const dispatch = useAppDispatch();
    useEffect(() => webSocketEvents.on('pixelUpdate', (data) => dispatch(chunkDataSlice.actions.setPixel(data))), [dispatch]);
}

function useGlobalKeyShortcuts() {
    const dispatch = useAppDispatch();
    const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
    const handleToggleOverlay = useCallback(() => {
        dispatch(overlaySlice.actions.setOverlayEnabled(!isOverlayEnabled));
    }, [dispatch, isOverlayEnabled]);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const { target } = event;
            if (!target) {
                return;
            }

            const clickedNodeName = (target as HTMLElement).tagName || (target as HTMLElement).nodeName;

            // Ignore if user is typing text.
            if (clickedNodeName === 'TEXTAREA') {
                return;
            }
            if (clickedNodeName === 'INPUT') {
                const inputEl = target as HTMLInputElement;
                if (inputEl.type === 'text') {
                    return;
                }
            }

            switch (event.key) {
                case 'o': {
                    event.stopImmediatePropagation();
                    handleToggleOverlay();
                    break;
                }
                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleToggleOverlay]);
}

function useLoadSavedConfigurations() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadSavedConfigurations());
    }, [dispatch]);
}

function useReprocessOutputImage() {
    const dispatch = useAppDispatch();
    const url = useAppSelector(selectInputUrl);
    const palette = useAppSelector(selectCanvasUserPalette);
    const modifierShouldConvertColors = useAppSelector(selectModifierShouldConvertColors);
    const modifierImageBrightness = useAppSelector(selectModifierImageBrightness);
    const modifierSmolPixels = useAppSelector(selectModifierSmolPixels);
    const inputImageData = useAppSelector(selectInputImageData);
    useEffect(() => {
        dispatch(startProcessingOutputImage());
        // If anything changes, restart processing
    }, [dispatch, url, palette, modifierShouldConvertColors, modifierImageBrightness, modifierSmolPixels, inputImageData]);
}

function useSubscribeToWindowResize() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const handleResize = () => dispatch(overlaySlice.actions.setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight }));
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);
}

function useAutoHandleTouchInputsToHoverState() {
    const dispatch = useAppDispatch();
    const windowSize = useAppSelector(selectWindowSize);
    const viewScale = useAppSelector(selectGameViewScale);
    const viewCenter = useAppSelector(selectGameViewCenter);
    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            const touches = event.touches[0];
            if (!touches) return;
            const { innerHeight, innerWidth } = windowSize;

            const { clientX, clientY } = touches;
            const x = Math.floor((clientX - innerWidth / 2) / viewScale + viewCenter.x);
            const y = Math.floor((clientY - innerHeight / 2) / viewScale + viewCenter.y);
            dispatch(gameSlice.actions.setHoverPixel({ x, y }));
        };
        return viewPortEvents.on('touchStartPassive', handleTouchStart);
    }, [dispatch, windowSize, viewScale, viewCenter]);
}

const ProviderPageStateMapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    useAutoHandleTouchInputsToHoverState();
    useSubscribeToWindowResize();
    useReprocessOutputImage();
    useGlobalKeyShortcuts();
    useLoadSavedConfigurations();
    usePageStoreWaitDate();
    usePageStoreCurrentSelectedColor();
    usePageStoreViewScale();
    usePageStoreViewCenter();
    usePageStoreCanvasPalette();
    usePageStoreCanvasReservedColors();
    usePageStoreCanvasId();
    useWebSocketEvents();
    useReadingInputImageProcess();
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

const App: React.FC = () => {
    const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // When palette loads consider page loaded.
    // Sometimes userscript might finish loading sooner than page
    const palette = usePageReduxStoreSelector(selectPageStateCanvasPalette);
    useEffect(() => {
        if (!palette?.length) return;
        setIsPageLoaded(true);
    }, [palette]);

    if (!isPageLoaded) return <>Waiting for page to load</>;

    return (
        <div>
            <ProviderPageStateMapper>
                {isOverlayEnabled && <OverlayImage />}
                <ConfigurationModal />
            </ProviderPageStateMapper>
        </div>
    );
};

export default App;
