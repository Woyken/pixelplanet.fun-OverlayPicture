import { EventEmitter } from 'events';

// 'receivechunk', action.chunk // chunk: ChunkRGB or ChunkRGB3D object,
// 'setscale', scale, zoompoint // scale: float of canvas scale aka zoom (not logarithmic, doesn't clamp to 1.0) zoompoint: center of scaling
// 'sethover', action.hover // hover: [x, y] integer canvas coordinates of cursor
// 'setviewcoordinates', action.view // view: [x, y] float canvas coordinates of the center of the screen,
// 'selectcanvas', action.canvasId
declare global {
    interface Window {
        pixelPlanetEvents: EventEmitter;
    }
}

export interface ChunkRGB {
    cell: [number, number, number];
    image: HTMLCanvasElement;
    ready: boolean;
    timestamp: number;
    palette: { getIndexOfColor(r: number, g: number, b: number): number | null };
    isBasechunk: boolean;
    buffer?: Uint8Array;
    faceCnt?: number;
    key?: string;
    lastPixel?: number;
    mesh?: {};
}
