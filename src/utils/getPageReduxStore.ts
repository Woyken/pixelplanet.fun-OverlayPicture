import { useEffect, useState } from 'react';
import { AnyAction, Store } from 'redux';

import { createSelector } from '@reduxjs/toolkit';

function isStoreFromRedux(store: any) {
    if (typeof store !== 'object') return false;
    if (!store.dispatch) return false;
    if (!store.getState) return false;
    if (!store.subscribe) return false;
    return true;
}

function getStoreFromReactInternalEl(el: any) {
    if (el.tag !== 0 || !el.child) return undefined;
    if (el.child.tag !== 10) return undefined;
    if (!el.child.memoizedProps) return undefined;
    const childStore = el.child.memoizedProps?.value?.store;
    if (!isStoreFromRedux(childStore)) return undefined;
    const parentStore = el.memoizedProps?.store;
    if (!isStoreFromRedux(parentStore)) return undefined;
    if (childStore !== parentStore) return undefined;
    return parentStore;
}

function findReactRootContainerEl() {
    // eslint-disable-next-line no-underscore-dangle
    return Array.from(document.getElementsByTagName('div')).find((el) => !!(el as any)._reactRootContainer?._internalRoot?.current);
}

function findStoreInRoot(el: HTMLDivElement) {
    // eslint-disable-next-line no-underscore-dangle
    const root = (el as any)._reactRootContainer._internalRoot.current;
    let checkedReactInternalElement = root;
    while (checkedReactInternalElement.child) {
        const store = getStoreFromReactInternalEl(checkedReactInternalElement);
        if (store) return store;
        checkedReactInternalElement = checkedReactInternalElement.child;
    }
    return undefined;
}

export function findPageReduxStore(): Store<PageState, AnyAction> {
    const reactRootEl = findReactRootContainerEl();
    if (!reactRootEl) throw new Error("Couldn't find React root container");
    const store = findStoreInRoot(reactRootEl);
    if (!store) throw new Error("Couldn't find Redux store");
    return store;
}

interface TypedUseSelectorHookWithUndefined<TState> {
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: (left: TSelected, right: TSelected) => boolean): TSelected | undefined;
}

/**
 * Hacky useSelector hook to work for the custom page store
 */
export const usePageReduxStoreSelector: TypedUseSelectorHookWithUndefined<PageState> = (selector) => {
    const store = usePageReduxStore();
    const [selectedResult, setSelectedResult] = useState<ReturnType<typeof selector>>();
    useEffect(() => {
        if (!store) return undefined;

        setSelectedResult(selector(store.getState()));

        const unsubscribe = store.subscribe(() => {
            setSelectedResult(selector(store.getState()));
        });

        return () => unsubscribe();
    }, [store, selector]);
    return selectedResult;
};

export const usePageReduxStoreDispatch = () => {
    const store = usePageReduxStore();
    if (!store) return undefined;
    return store.dispatch;
};

export function pageReduxStoreSelectColorAction(colorIndex: number) {
    return {
        type: 'SELECT_COLOR',
        color: colorIndex,
    };
}

export function setViewCoordinates(view: [number, number]) {
    return {
        type: 'SET_VIEW_COORDINATES',
        view,
    };
}

export function usePageReduxStore() {
    const [pageReduxStore, setPageReduxStore] = useState<Store<PageState, AnyAction>>();
    useEffect(() => {
        setPageReduxStore(findPageReduxStore());
    }, [setPageReduxStore]);
    return pageReduxStore;
}

export const selectPageStateHoverPixel = createSelector(
    (state: PageState) => state.gui.hover,
    (hoverPixel) => {
        if (!hoverPixel) return undefined;
        const x = hoverPixel[0];
        const y = hoverPixel[1];
        if (x == null || y == null) return undefined;
        return { x, y };
    }
);

export const selectPageStateViewScale = createSelector(
    (state: PageState) => state.canvas.viewscale,
    (viewScale) => viewScale
);

export const selectPageStateCanvasViewCenter = createSelector(
    (state: PageState) => state.canvas.view,
    (view) => {
        const x = view[0];
        const y = view[1];
        if (x == null || y == null) return undefined;
        return { x, y };
    }
);

export const selectPageStateCanvasPalette = createSelector(
    (state: PageState) => state.canvas.palette.abgr,
    (paletteAbgr) => {
        return Array.from(new Uint32Array(paletteAbgr)).map<[number, number, number]>((abgr) => {
            // eslint-disable-next-line no-bitwise
            const b = (abgr & 0x00ff0000) >>> 16;
            // eslint-disable-next-line no-bitwise
            const g = (abgr & 0x0000ff00) >>> 8;
            // eslint-disable-next-line no-bitwise
            const r = abgr & 0x000000ff;
            return [r, g, b];
        });
    }
);

export interface PageState {
    audio: Audio;
    canvas: Canvas;
    gui: GUI;
    windows: Windows;
    user: User;
    ranks: Ranks;
    alert: Alert;
    chat: Chat;
    contextMenu: ContextMenu;
    chatRead: ChatRead;
    fetching: Fetching;
    _persist: Persist;
}

export interface Persist {
    version: number;
    rehydrated: boolean;
}

export interface Alert {
    alertOpen: boolean;
    alertType: null;
    alertTitle: null;
    alertMessage: null;
    alertBtn: null;
}

export interface Audio {
    mute: boolean;
    chatNotify: boolean;
}

export interface Canvas {
    canvasId: number;
    canvasIdent: string;
    canvasSize: number;
    historicalCanvasSize: number;
    is3D: boolean;
    canvasStartDate: Date;
    canvasMaxTiledZoom: number;
    palette: Palette;
    clrIgnore: number;
    selectedColor: number;
    view: number[];
    viewscale: number;
    scale: number;
    canvases: { [key: string]: Canvase };
    isHistoricalView: boolean;
    historicalDate: null;
    historicalTime: null;
    showHiddenCanvases: boolean;
    prevCanvasCoords: PrevCanvasCoords;
}

export interface Canvase {
    ident: string;
    colors: Array<number[]>;
    size: number;
    cli?: number;
    bcd: number;
    pcd?: number;
    cds: number;
    ranked?: boolean;
    sd: string;
    desc: string;
    title: string;
    historicalSizes?: Array<Array<number | string>>;
    req?: number | string;
    v?: boolean;
    hid?: boolean;
}

export interface Palette {
    length: number;
    rgb: Uint8Array;
    colors: string[];
    abgr: Uint32Array;
    fl: Array<[number, number, number]>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PrevCanvasCoords {}

export interface Chat {
    channels: { [key: string]: Array<number | string> };
    blocked: any[];
    messages: PrevCanvasCoords;
}

export interface ChatRead {
    mute: any[];
    readTs: { [key: string]: number };
    unread: { [key: string]: boolean };
    chatChannel: number;
}

export interface ContextMenu {
    menuOpen: boolean;
    menuType: null;
    xPos: number;
    yPos: number;
    args: PrevCanvasCoords;
}

export interface Fetching {
    fetchingChunks: number;
    fetchingChat: boolean;
    fetchinApi: boolean;
}

export interface GUI {
    showGrid: boolean;
    showPixelNotify: boolean;
    hover: number[] | null;
    autoZoomIn: boolean;
    isPotato: boolean;
    isLightGrid: boolean;
    compactPalette: boolean;
    paletteOpen: boolean;
    menuOpen: boolean;
    onlineCanvas: boolean;
    style: string;
    pixelsPlaced: number;
    chatChannel: number;
}

export interface Ranks {
    totalPixels: number;
    dailyTotalPixels: number;
    ranking: null;
    dailyRanking: null;
    online: Online;
    totalRanking: TotalRanking[];
    totalDailyRanking: TotalRanking[];
}

export interface Online {
    '0': number;
    '1': number;
    '2': number;
    '3': number;
    '7': number;
    '8': number;
    total: number;
}

export interface TotalRanking {
    id: number;
    name: string;
    totalPixels: number;
    ranking: number;
    dailyRanking: number;
    dailyTotalPixels: number;
    age: number;
}

export interface User {
    id: null;
    name: null;
    wait: null;
    coolDown: null;
    lastCoolDownEnd: null;
    requestingPixel: boolean;
    messages: any[];
    mailreg: boolean;
    blockDm: boolean;
    isOnMobile: boolean;
    notification: null;
    userlvl: number;
}

export interface Windows {
    showWindows: boolean;
    zMax: number;
    modal: Modal;
    windows: any[];
    args: PrevCanvasCoords;
}

export interface Modal {
    windowType: null;
    title: null;
    open: boolean;
    prevWinSize: PrevCanvasCoords;
}
