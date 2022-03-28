import { Cell } from '../store/slices/gameSlice';

export function gameCoordsToScreen(gameCoords: Cell, windowSize: { height: number; width: number }, viewCenter: Cell, viewScale: number) {
    const gameCoordsOffsetX = gameCoords.x - viewCenter.x;
    const gameCoordsOffsetY = gameCoords.y - viewCenter.y;
    const screenCoordsX = windowSize.width / 2 + gameCoordsOffsetX * viewScale + viewScale / 2;
    const screenCoordsY = windowSize.height / 2 + gameCoordsOffsetY * viewScale + viewScale / 2;
    return { clientX: Math.floor(screenCoordsX), clientY: Math.floor(screenCoordsY) };
}
