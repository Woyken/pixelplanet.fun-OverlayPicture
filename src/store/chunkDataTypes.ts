import { ChunkCell, Cell } from "../chunkHelper";
import { BotState, BotActionTypes } from "./botState";

export interface LoadedChunkData {
    data: Int8Array;
}

export interface CanvasMetadata {
    id: number;
    title: string;
    colorsReservedCount: number;
    stringId: string;
    colors: [number, number, number][];
    size: number;
    timeoutOnEmpty: number;
    timeoutOnReplace: number;
    maxTimeout: number;
    ranked: boolean;
    pixelsMinimalRequirement: number;
    description: string;
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
    userData: UserData;
    loadedChunks: LoadedChunkData[];
    activeCanvasId: number;
    canvasesMetadata: CanvasMetadata[];
    botState: BotState;
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
    | BotActionTypes
    | LoadChunkData
    | PixelPlace
    | PixelUpdate
    | ReceiveCanvasMetadata
    | ReceiveUserData
    | ReceiveChangeCanvas;
