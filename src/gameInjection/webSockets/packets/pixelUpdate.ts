/* eslint-disable no-bitwise */
export interface PixelUpdateData {
    /** 3 bytes */
    offsetInChunk: number;
    /** 1 byte */
    color: number;
}

export const pixelUpdatePacket = {
    OP_CODE: 0xc1,
    hydrate(data: DataView) {
        const chunkX = data.getUint8(1);
        const chunkY = data.getUint8(2);

        const pixels: PixelUpdateData[] = [];
        let off = data.byteLength;
        while (off > 3) {
            const color = data.getUint8((off -= 1));
            const offsetL = data.getUint16((off -= 2));
            const offsetH = data.getUint8((off -= 1)) << 16;
            pixels.push({ offsetInChunk: offsetH | offsetL, color });
        }
        return {
            chunkX,
            chunkY,
            pixels,
        };
    },

    dehydrate(chunkX: number, chunkY: number, pixels: PixelUpdateData[]) {
        const buffer = new ArrayBuffer(1 + 1 + 1 + pixels.length * 4);
        const view = new DataView(buffer);
        view.setUint8(0, pixelUpdatePacket.OP_CODE);
        view.setUint8(1, chunkX);
        view.setUint8(2, chunkY);

        let cnt = 2;
        pixels.forEach(({ offsetInChunk, color }) => {
            view.setUint8((cnt += 1), offsetInChunk >>> 16);
            view.setUint16((cnt += 1), offsetInChunk & 0x00ffff);
            view.setUint8((cnt += 2), color);
        });

        return buffer;
    },
};
