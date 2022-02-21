import React, { useCallback, useEffect } from 'react';

import { loadSavedConfigurations, startProcessingOutputImage } from '../../actions/imageProcessing';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { gameSlice, selectCanvasUserPalette } from '../../store/slices/gameSlice';
import {
    overlaySlice,
    selectCurrentHoverPixelOnOutputImageColorIndexInPalette,
    selectInputUrl,
    selectIsOverlayEnabled,
    selectModifierImageBrightness,
    selectModifierShouldConvertColors,
} from '../../store/slices/overlaySlice';
import {
    pageReduxStoreSelectColorAction,
    selectPageStateCanvasPalette,
    selectPageStateCanvasViewCenter,
    selectPageStateHoverPixel,
    selectPageStateViewScale,
    usePageReduxStoreDispatch,
    usePageReduxStoreSelector,
} from '../../utils/getPageReduxStore';
import ConfigurationModal from '../configurationModal/configurationModal';
import OverlayImage from '../overlayImage/overlayImage';

function usePageStoreHoverCoords() {
    const dispatch = useAppDispatch();
    const pageHoverCoords = usePageReduxStoreSelector(selectPageStateHoverPixel);

    useEffect(() => {
        if (pageHoverCoords) dispatch(gameSlice.actions.setHoverPixel(pageHoverCoords));
    }, [dispatch, pageHoverCoords]);
}

function usePageStoreViewScale() {
    const dispatch = useAppDispatch();
    const pageViewScale = usePageReduxStoreSelector(selectPageStateViewScale);

    useEffect(() => {
        if (pageViewScale) dispatch(gameSlice.actions.setViewScale(pageViewScale));
    }, [dispatch, pageViewScale]);
}

function usePageStoreViewCenter() {
    const dispatch = useAppDispatch();
    const pageViewCenter = usePageReduxStoreSelector(selectPageStateCanvasViewCenter);

    useEffect(() => {
        if (pageViewCenter) dispatch(gameSlice.actions.setViewCenter(pageViewCenter));
    }, [dispatch, pageViewCenter]);
}

function usePageStoreCanvasPalette() {
    const dispatch = useAppDispatch();
    const palette = usePageReduxStoreSelector(selectPageStateCanvasPalette);
    useEffect(() => {
        if (palette) dispatch(gameSlice.actions.setPalette(palette));
    }, [dispatch, palette]);
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
    }, []);
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
    useEffect(() => {
        dispatch(startProcessingOutputImage());
        // If anything changes, restart processing
    }, [dispatch, url, palette, modifierShouldConvertColors, modifierImageBrightness]);
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

function useAutoSelectColor() {
    const pageDispatch = usePageReduxStoreDispatch();
    const colorIndex = useAppSelector(selectCurrentHoverPixelOnOutputImageColorIndexInPalette);
    useEffect(() => {
        if (!pageDispatch) return;
        if (colorIndex == null) return;
        pageDispatch(pageReduxStoreSelectColorAction(colorIndex));
    }, [pageDispatch, colorIndex]);
}

const ProviderPageStateMapper: React.FC = ({ children }) => {
    useAutoSelectColor();
    useSubscribeToWindowResize();
    useReprocessOutputImage();
    useGlobalKeyShortcuts();
    useLoadSavedConfigurations();
    usePageStoreHoverCoords();
    usePageStoreViewScale();
    usePageStoreViewCenter();
    usePageStoreCanvasPalette();
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

const App: React.FC = () => {
    const isOverlayEnabled = useAppSelector(selectIsOverlayEnabled);
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
