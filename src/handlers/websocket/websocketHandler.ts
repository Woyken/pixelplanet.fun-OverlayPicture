import logger from '../logger';
import pixelUpdate from './packets/pixelUpdate';
import { ChunkCell } from '../../chunkHelper';
import registerChunks from './packets/registerChunks';
import registerChunk from './packets/registerChunk';
import changedMe from './packets/changedMe';
import registerCanvas from './packets/registerCanvas';

class WebSocketHandler {
    public onPixelUpdate?: (chunk: ChunkCell, pixelOffsetInChunk: number, colorIndex: number) => void;

    public onRequestReloadMetadata?: () => void;

    private canvasId = -1;

    private webSocket?: WebSocket;
    private watchingChunks: ChunkCell[] = [];
    private retryTimerId?: number;
    private isConnected = false;

    public connect(): void {
        // Continuously retry connection.
        if (!this.retryTimerId) {
            this.retryTimerId = window.setInterval(() => {
                if (
                    this.webSocket &&
                    (this.webSocket.readyState === WebSocket.CONNECTING || this.webSocket.readyState === WebSocket.OPEN)
                ) {
                    return;
                }
                this.connect();
            }, 5000);
        }
        this.webSocket = undefined;
        const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
        const url = `${protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}/ws`;

        this.webSocket = new WebSocket(url);
        this.webSocket.binaryType = 'arraybuffer';
        this.webSocket.onopen = this.onOpen.bind(this);
        this.webSocket.onmessage = this.onMessage.bind(this);
        this.webSocket.onclose = this.onClose.bind(this);
        this.webSocket.onerror = this.onError.bind(this);
    }

    public watchChunk(chunk: ChunkCell): void {
        const buffer = registerChunk.dehydrate(chunk);
        if (this.isConnected) {
            this.webSocket?.send(buffer);
        }

        if (
            this.watchingChunks.findIndex((v) => {
                return v.chunkX === chunk.chunkX && v.chunkY === chunk.chunkY;
            }) < 0
        ) {
            this.watchingChunks.push(chunk);
        }
    }

    private onOpen(): void {
        this.isConnected = true;
        if (this.retryTimerId) {
            clearInterval(this.retryTimerId);
            this.retryTimerId = undefined;
        }
        logger.log('Starting listening for changes via websocket');
        const buffer = registerChunks.dehydrate(this.watchingChunks);
        if (this.isConnected) {
            this.webSocket?.send(buffer);
        }
        if (this.isConnected && this.canvasId !== -1) {
            this.webSocket?.send(registerCanvas.dehydrate(this.canvasId));
        }
    }

    public setCanvas(canvasId: number): void {
        if (this.canvasId === canvasId || canvasId === -1) {
            return;
        }
        // Clear all watching chunks. Map has changed...
        this.watchingChunks = [];
        logger.log('Notify websocket server that we changed canvas');
        this.canvasId = canvasId;
        if (this.isConnected) {
            this.webSocket?.send(registerCanvas.dehydrate(this.canvasId));
        }
    }

    private onMessage(ev: MessageEvent): void {
        if (ev.data && typeof ev.data === 'string') {
            // Don't care about chat messages right now.
            return;
        }

        if (ev.data?.byteLength == null) {
            // Corrupt data?
            return;
        }

        const buffer = ev.data as ArrayBufferLike;
        if (buffer.byteLength === 0) {
            return;
        }
        const data = new DataView(buffer);
        const opcode = data.getUint8(0);

        switch (opcode) {
            case pixelUpdate.OP_CODE: {
                const result = pixelUpdate.hydrate(data);
                this.onPixelUpdate?.(result.chunk, result.offset, result.colorIndex);
                break;
            }
            case changedMe.OP_CODE: {
                this.onRequestReloadMetadata?.();
                break;
            }
            default:
                break;
        }
    }

    private onClose(event: CloseEvent): void {
        this.isConnected = false;
        this.webSocket = undefined;
        logger.logWarn(`Socket was closed. Reconnecting... ${event.reason}`);
        this.connect();
    }

    private onError(event: Event): void {
        logger.logError(`Socket encountered error, closing socket ${JSON.stringify(event)}`);
        this.webSocket?.close();
    }
}

const webSocketHandler = new WebSocketHandler();

export default webSocketHandler;
