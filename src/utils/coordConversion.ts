import { Cell } from '../store/slices/gameSlice';

export function gameCoordsToScreen(gameCoords: Cell, windowSize: { height: number; width: number }, viewCenter: Cell, viewScale: number) {
    const gameCoordsOffsetX = gameCoords.x - viewCenter.x;
    const gameCoordsOffsetY = gameCoords.y - viewCenter.y;
    const screenCoordsX = windowSize.width / 2 + gameCoordsOffsetX * viewScale;
    const screenCoordsY = windowSize.height / 2 + gameCoordsOffsetY * viewScale;
    return { clientX: Math.floor(screenCoordsX), clientY: Math.floor(screenCoordsY) };
}

const CHUNK_SIZE = 256;
export function gameCoordsToChunk(gameCoords: Cell, canvasSize: number) {
    const chunkX = Math.floor((canvasSize / 2 + gameCoords.x) / CHUNK_SIZE);
    const chunkY = Math.floor((canvasSize / 2 + gameCoords.y) / CHUNK_SIZE);
    const offsetInChunk = ((canvasSize / 2 + gameCoords.x) % CHUNK_SIZE) + ((canvasSize / 2 + gameCoords.y) % CHUNK_SIZE) * CHUNK_SIZE;
    return { chunkX, chunkY, offsetInChunk };
}

export function chunkToGameCoords(chunkX: number, chunkY: number, offsetInChunk: number, canvasSize: number): Cell {
    const gameCoordsX = chunkX * CHUNK_SIZE + (offsetInChunk % CHUNK_SIZE) - canvasSize / 2;
    const gameCoordsY = chunkY * CHUNK_SIZE + Math.floor(offsetInChunk / CHUNK_SIZE) - canvasSize / 2;
    return { x: gameCoordsX, y: gameCoordsY };
}
