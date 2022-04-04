export enum PixelUpdateReturnCode {
    success = 0,
    canvasDoesntExist = 1,
    xOutOfBounds = 2,
    yOutOfBounds = 3,
    zOutOfBounds = 4,
    colorOutOfBounds = 5,
    notLoggedIn = 6,
    notEnoughPixelsPlaced = 7,
    protectedPixel = 8,
    cooldownLimitReached = 9,
    catchaNeeded = 10,
    proxyDetected = 11,
    needToBeInTop10 = 12,
}

export const pixelReturnPacket = {
    OP_CODE: 0xc3,
    hydrate(data: DataView) {
        const retCode = data.getUint8(1) as PixelUpdateReturnCode;
        const waitMs = data.getUint32(2);
        const coolDownSeconds = data.getInt16(6);
        const pixelIndex = data.getUint8(8);
        return {
            retCode,
            waitMs,
            coolDownSeconds,
            pixelIndex,
        };
    },
    dehydrate(retCode: PixelUpdateReturnCode, wait: number, coolDown: number, pxlCnt: number) {
        const buffer = new ArrayBuffer(1 + 1 + 4 + 2 + 1);
        const bufferView = new DataView(buffer);
        bufferView.setUint8(0, pixelReturnPacket.OP_CODE);
        bufferView.setUint8(1, retCode);
        bufferView.setUint32(2, wait);
        const coolDownSeconds = Math.round(coolDown / 1000);
        bufferView.setInt16(6, coolDownSeconds);
        bufferView.setUint8(8, pxlCnt);
        return buffer;
    },
};
