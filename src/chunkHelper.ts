import colorConverter from './colorConverter';

export const TILE_SIZE = 256;

export interface ChunkCell {
    chunkX: number;
    chunkY: number;
}

export interface Cell {
    x: number;
    y: number;
}

export function mod(n: number, m: number): number {
    return ((n % m) + m) % m;
}

export function pixelToChunk(cell: Cell, canvasSize: number): ChunkCell {
    const chunkX = Math.floor((cell.x + canvasSize / 2) / TILE_SIZE);
    const chunkY = Math.floor((cell.y + canvasSize / 2) / TILE_SIZE);
    return { chunkX, chunkY };
}

export function pixelInChunkOffset(cell: Cell, canvasSize: number): number {
    const canvasOffset = mod(canvasSize / 2, TILE_SIZE);
    const cx = mod(cell.x + canvasOffset, TILE_SIZE);
    const cy = mod(cell.y + canvasOffset, TILE_SIZE);
    return cy * TILE_SIZE + cx;
}

export function chunkOffsetToPixel(chunk: ChunkCell, offset: number, canvasSize: number): Cell {
    const cx = mod(offset, TILE_SIZE);
    const cy = Math.floor(offset / TILE_SIZE);
    const devOffset = canvasSize / 2 / TILE_SIZE;
    const x = (chunk.chunkX - devOffset) * TILE_SIZE + cx;
    const y = (chunk.chunkY - devOffset) * TILE_SIZE + cy;
    return { x, y };
}

export function chunkToIndex(chunk: ChunkCell): number {
    return (chunk.chunkY << 8) | chunk.chunkX;
}

export function indexToChunk(chunkIndex: number): ChunkCell {
    const y = chunkIndex >> 8;
    const x = chunkIndex - (y << 8);
    return { chunkX: x, chunkY: y };
}

export function colorRGBToIndex(r: number, g: number, b: number, allColors: [number, number, number][]): number {
    const index = allColors.findIndex((c) => {
        return c[0] === r && c[1] === g && c[2] === b;
    });
    return index;
}

export function colorIndexToRGB(x: number, allColors: [number, number, number][]): { r: number; g: number; b: number } {
    const rgb = allColors[x];
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
}
