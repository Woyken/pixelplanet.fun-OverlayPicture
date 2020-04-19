import { ChunkCell, Cell } from "../chunkHelper";

// TODO move to actions
export interface PixelPlaceResponse {
    success: boolean,
    waitSeconds: number,
    coolDownSeconds: number,
    errors: PixelPlaceResponseErrors[],
    errorTitle: string,
}

// TODO move to actions
export interface PixelPlaceResponseErrors {
    msg: string;
}

export interface LoadedChunkData {
    data: Int8Array;
}

export interface CanvasMetadata {
    id: number;
    stringId: string;
    colors: [number, number, number][];
    alpha: number;
    size: number;
    timeoutOnEmpty: number;
    timeoutOnReplace: number;
    maxTimeout: number;
    pixelsMinimalRequirement: number;
    sd: string;
}

export interface UserData {
    name?: null | string;
    minecraftname?: null | string;
    totalPixels?: number;
    dailyTotalPixels?: number;
    ranking?: number;
    dailyRanking?: number;
    mailreg?: boolean;
}

export interface ChunkDataState {
    userData: UserData
    loadedChunks: LoadedChunkData[];
    activeCanvasId: number;
    canvasesMetadata: CanvasMetadata[];
}

export const PIXEL_PLACE = 'PIXEL_PLACE';
export const PIXEL_UPDATE = 'PIXEL_UPDATE';
export const CANVAS_LOAD_CHUNK_DATA = 'CANVAS_LOAD_CHUNK_DATA';
export const CANVAS_CHANGE_CANVAS = 'CANVAS_CHANGE_CANVAS';
export const CANVAS_RECEIVE_METADATA = 'CANVAS_RECEIVE_METADATA';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

interface LoadChunkData {
    type: typeof CANVAS_LOAD_CHUNK_DATA;
    canvasId: number;
    chunk: ChunkCell;
    chunkData: LoadedChunkData;
}

interface PixelPlace {
    type: typeof PIXEL_PLACE;
    success: boolean;
    canvasId: string;
    coords: { x: number, y: number };
}

interface PixelUpdate {
    type: typeof PIXEL_UPDATE;
    pixel: Cell;
    colorIndex: number;
}

interface ReceiveChangeCanvas {
    type: typeof CANVAS_CHANGE_CANVAS;
    activeCanvasId: number;
}

interface ReceiveCanvasMetadata {
    type: typeof CANVAS_RECEIVE_METADATA;
    canvasesMetadata: CanvasMetadata[];
}

interface ReceiveUserData {
    type: typeof RECEIVE_USER_DATA;
    userData: UserData;
}

export type ActionTypes =
    | LoadChunkData
    | PixelPlace
    | PixelUpdate
    | ReceiveCanvasMetadata
    | ReceiveUserData
    | ReceiveChangeCanvas;
