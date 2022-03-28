import { createNanoEvents } from 'nanoevents';

import { pixelUpdatePacket } from './packets/pixelUpdate';

interface Events {
    pixelUpdate: (data: ReturnType<typeof pixelUpdatePacket.hydrate>) => void;
}

export const webSocketSenderEvents = createNanoEvents<Events>();

const originalSend = WebSocket.prototype.send;

WebSocket.prototype.send = function newSend(data) {
    if (data instanceof ArrayBuffer) {
        const dataView = new DataView(data);
        const opCode = dataView.getUint8(0);
        switch (opCode) {
            case pixelUpdatePacket.OP_CODE: {
                const updateData = pixelUpdatePacket.hydrate(dataView);

                webSocketSenderEvents.emit('pixelUpdate', updateData);
                break;
            }
            default:
                break;
        }
    }
    webSocketWrapper.resetWs(this);
    originalSend.apply(this, [data]);
};

interface WebSocketListener {
    type: keyof WebSocketEventMap;
    listener: (this: WebSocket, ev: WebSocketEventMap[keyof WebSocketEventMap]) => unknown;
}

/**
 * Intercepts existing WebSocket in page and provides a way to use it directly
 */
class WebSocketWrapper {
    private ws?: WebSocket;

    private listeners: WebSocketListener[] = [];

    public resetWs(ws: WebSocket) {
        if (this.ws === ws) return;
        this.listeners.forEach((x) => this.ws?.removeEventListener(x.type, x.listener));
        this.ws = ws;
        this.listeners.forEach((x) => this.ws?.addEventListener(x.type, x.listener));
    }

    public send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
        this.ws?.send(data);
    }

    public subscribe<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => unknown) {
        this.listeners.push({ type, listener: listener as WebSocketListener['listener'] });
        this.ws?.addEventListener(type, listener);
        return () => {
            this.ws?.removeEventListener(type, listener);
            const index = this.listeners.findIndex((x) => x.type === type && x.listener === listener);
            if (index === -1) return;
            this.listeners.splice(index, 1);
        };
    }
}

export const webSocketWrapper = new WebSocketWrapper();
