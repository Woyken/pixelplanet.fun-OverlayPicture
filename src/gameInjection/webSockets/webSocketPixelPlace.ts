import { pixelReturnPacket } from './packets/pixelReturn';
import { PixelUpdateData, pixelUpdatePacket } from './packets/pixelUpdate';
import { webSocketEvents } from './webSocketEvents';
import { webSocketSenderEvents, webSocketWrapper } from './webSocketWrapper';

const waitingForPixelReturnList: {
    promise: Promise<ReturnType<typeof pixelReturnPacket.hydrate>>;
    resolvePromise: (data: ReturnType<typeof pixelReturnPacket.hydrate>) => void;
    rejectPromise: () => void;
}[] = [];

/**
 * On intercepted sending pixelUpdate event, add to waiting list
 */
webSocketSenderEvents.on('pixelUpdate', () => {
    let promiseResolve: ((data: ReturnType<typeof pixelReturnPacket.hydrate>) => void) | undefined;
    let promiseReject: (() => void) | undefined;
    const promise = new Promise<ReturnType<typeof pixelReturnPacket.hydrate>>((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    const timeoutHandle = setTimeout(() => {
        promiseReject?.();
    }, 2000);
    promise.finally(() => clearTimeout(timeoutHandle));

    waitingForPixelReturnList.push({
        promise,
        resolvePromise: (data: ReturnType<typeof pixelReturnPacket.hydrate>) => promiseResolve?.(data),
        rejectPromise: () => promiseReject?.(),
    });
});

webSocketEvents.on('pixelReturn', (data) => {
    waitingForPixelReturnList.shift()?.resolvePromise(data);
});

export async function placePixel(chunkX: number, chunkY: number, pixels: PixelUpdateData[]) {
    webSocketWrapper.send(pixelUpdatePacket.dehydrate(chunkX, chunkY, pixels));
    const waitForResponse = waitingForPixelReturnList[0];
    if (!waitForResponse) throw new Error('Failed to register waiting list?');
    const response = await waitForResponse.promise;
    const successfulPixels = pixels.slice(0, response.pixelIndex);
    return {
        retCode: response.retCode,
        cooldownSeconds: response.coolDownSeconds,
        wait: response.wait,
        successfulPixels,
    };
}
