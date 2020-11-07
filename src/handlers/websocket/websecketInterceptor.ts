import { ChunkCell, chunkOffsetToPixel, chunkToIndex } from '../../chunkHelper';
import colorConverter from '../../colorConverter';
import { chunkStore } from '../../store/chunkStore';
import { gameStore } from '../../store/gameStore';
import { overlayStore } from '../../store/overlayStore';
import pixelUpdate from './packets/pixelUpdate';

/**
 * Will intercept WebSocket place pixel requests.
 * Only allow correct color to be placed if it's on the image area.
 */
class WebSocketInterceptor {
    private originalSend: (data: string | ArrayBuffer | SharedArrayBuffer | Blob | ArrayBufferView) => void;
    constructor() {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        this.originalSend = WebSocket.prototype.send;
        const interceptedSend = this.interceptedSend.bind(this);
        WebSocket.prototype.send = function (
            interceptedData: string | ArrayBuffer | SharedArrayBuffer | Blob | ArrayBufferView,
        ): void {
            interceptedSend(interceptedData, this);
        };
    }

    interceptedSend(
        interceptedData: string | ArrayBuffer | SharedArrayBuffer | Blob | ArrayBufferView,
        webSocketThis: WebSocket,
    ): void {
        if (!overlayStore.modifications.autoSelectColor) {
            // Auto select color is disabled.
            return this.originalSend.apply(webSocketThis, [interceptedData]);
        }
        if (typeof interceptedData === 'string') {
            return this.originalSend.apply(webSocketThis, [interceptedData]);
        }
        if (interceptedData instanceof Blob) {
            return this.originalSend.apply(webSocketThis, [interceptedData]);
        }
        if (interceptedData.byteLength == null) {
            return this.originalSend.apply(webSocketThis, [interceptedData]);
        }
        let data: DataView;
        if (ArrayBuffer.isView(interceptedData)) {
            data = new DataView(interceptedData.buffer);
        } else {
            data = new DataView(interceptedData);
        }
        const opcode = data.getUint8(0);

        switch (opcode) {
            case pixelUpdate.OP_CODE: {
                const result = pixelUpdate.hydrate(data);
                const shouldPlaceColor = this.getColorFromOutputImage(result.chunk, result.offset);
                if (shouldPlaceColor === undefined) {
                    // picture not loaded or pixel is outside the picture.
                    return this.originalSend.apply(webSocketThis, [interceptedData]);
                }
                // Actually modify the intercepted data to place correct pixel
                data.setUint8(6, shouldPlaceColor);

                if (this.isAlreadyCorrectColorPlaced(result.chunk, result.offset)) {
                    // We do know that correct color is placed. Don't do anything.
                    return;
                }

                return this.originalSend.apply(webSocketThis, [interceptedData]);
            }
            default:
                break;
        }

        return this.originalSend.apply(webSocketThis, [interceptedData]);
    }

    getColorFromOutputImage(chunkCell: ChunkCell, pixelInChunk: number): number | undefined {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return;
        }
        const outputImageData = overlayStore.overlayImage.outputImage.outputImageData;
        if (!outputImageData) {
            return;
        }

        const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];

        const worldPixel = chunkOffsetToPixel(
            chunkCell,
            pixelInChunk,
            gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId].size,
        );

        const xi = worldPixel.x - overlayStore.placementConfiguration.xOffset;
        const yi = worldPixel.y - overlayStore.placementConfiguration.yOffset;

        // Get outputImage values...
        const idx = (outputImageData.width * yi + xi) << 2;
        const r = outputImageData.data[idx + 0];
        const g = outputImageData.data[idx + 1];
        const b = outputImageData.data[idx + 2];
        const a = outputImageData.data[idx + 3];

        const colorIndexImage = colorConverter.convertActualColorFromPalette(
            canvasData.colors,
            canvasData.colorsReservedCount,
            r,
            g,
            b,
        );
        return colorIndexImage;
    }

    isAlreadyCorrectColorPlaced(chunkCell: ChunkCell, pixelInChunk: number): boolean {
        if (gameStore.gameState.activeCanvasId === undefined) {
            return true;
        }
        const canvasData = gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId];
        const chunkIndex = chunkToIndex(chunkCell);
        const loadedChunk = chunkStore.getChunk(chunkIndex);
        if (!loadedChunk) {
            return false;
        }

        const colorIndexCanvas = loadedChunk.data[pixelInChunk];

        const colorIndexImage = this.getColorFromOutputImage(chunkCell, pixelInChunk);
        if (colorIndexImage === undefined) {
            return false;
        }

        if (!colorConverter.areColorsEqual(canvasData.colors, colorIndexImage, colorIndexCanvas)) {
            return false;
        }

        return true;
    }
}
const webSocketInterceptor = new WebSocketInterceptor();

export default webSocketInterceptor;
