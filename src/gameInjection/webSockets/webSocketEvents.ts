import logger from 'handlers/logger';
import { createNanoEvents } from 'nanoevents';

import { pixelReturnPacket } from './packets/pixelReturn';
import { pixelUpdatePacket } from './packets/pixelUpdate';
import { webSocketWrapper } from './webSocketWrapper';

interface Events {
    pixelReturn: (data: ReturnType<typeof pixelReturnPacket.hydrate>) => void;
    pixelUpdate: (data: ReturnType<typeof pixelUpdatePacket.hydrate>) => void;
}

const webSocketEventsEmitter = createNanoEvents<Events>();
export const webSocketEvents = webSocketEventsEmitter;

webSocketWrapper.subscribe('message', (ev) => {
    const { data } = ev;
    if (typeof data === 'string') {
        // ignore text messages
        return;
    }
    if (data instanceof ArrayBuffer) {
        if (data.byteLength === 0) return;
        const dataView = new DataView(data);
        const opCode = dataView.getUint8(0);
        switch (opCode) {
            case pixelReturnPacket.OP_CODE: {
                const retData = pixelReturnPacket.hydrate(dataView);
                webSocketEventsEmitter.emit('pixelReturn', retData);
                break;
            }
            case pixelUpdatePacket.OP_CODE: {
                const updateData = pixelUpdatePacket.hydrate(dataView);
                webSocketEventsEmitter.emit('pixelUpdate', updateData);
                break;
            }
            default:
                logger.log(`Unknown opCode: ${opCode}`);
                break;
        }
    }
});
