import { gameSlice, selectCanvasSize } from 'store/slices/gameSlice';
import { pixelPlacementSlice } from 'store/slices/pixelPlacementSlice';
import { store } from 'store/store';
import { chunkToGameCoords } from 'utils/coordConversion';

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
    let promiseReject: ((reason?: unknown) => void) | undefined;
    const promise = new Promise<ReturnType<typeof pixelReturnPacket.hydrate>>((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    const timeoutHandle = setTimeout(() => {
        promiseReject?.(new Error('Pixel update timeout'));
    }, 4000);
    promise.finally(() => clearTimeout(timeoutHandle));

    waitingForPixelReturnList.push({
        promise,
        resolvePromise: (data: ReturnType<typeof pixelReturnPacket.hydrate>) => promiseResolve?.(data),
        rejectPromise: () => promiseReject?.(new Error('Pixel update rejected')),
    });
});

/**
 * On intercepted pixelReturn event, add to custom pixel placement queue
 */
webSocketSenderEvents.on('pixelPlacementIntercepted', (data) => {
    const canvasSize = selectCanvasSize(store.getState());
    const pixels = data.pixels.map((x) => ({ coord: chunkToGameCoords(data.chunkX, data.chunkY, x.offsetInChunk, canvasSize), color: x.color }));
    store.dispatch(pixelPlacementSlice.actions.addPixelsToPlaceQueue({ canvasSize, pixels }));
});

webSocketEvents.on('pixelReturn', (data) => {
    if (data.coolDownSeconds > 0) store.dispatch(gameSlice.actions.setLatestPixelReturnCooldown(data.coolDownSeconds * 1000));
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
        waitMs: response.waitMs,
        successfulPixels,
    };
}
