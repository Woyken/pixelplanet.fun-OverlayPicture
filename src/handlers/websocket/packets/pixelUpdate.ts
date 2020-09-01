import { ChunkCell } from '../../../chunkHelper';

type PixelUpdatePacket = {
    chunk: ChunkCell;
    offset: number;
    colorIndex: number;
};

const OP_CODE = 0xc1; // Chunk Update

export default {
    OP_CODE,
    hydrate(data: DataView): PixelUpdatePacket {
        const chunkX = data.getUint8(1);
        const chunkY = data.getUint8(2);
        const offset = (data.getUint8(3) << 16) | data.getUint16(4);
        const colorIndex = data.getUint8(6);
        return {
            chunk: {
                chunkX,
                chunkY,
            },
            offset,
            colorIndex,
        };
    },

    dehydrate(i: number, j: number, offset: number, color: number): ArrayBuffer {
        const buffer = new ArrayBuffer(1 + 1 + 1 + 1 + 2 + 1);
        const view = new DataView(buffer);
        view.setUint8(0, OP_CODE);

        view.setUint8(1, i);
        view.setUint8(2, j);
        view.setUint8(3, offset >>> 16);
        view.setUint16(4, offset & 0x00ffff);
        view.setUint8(6, color);

        return buffer;
    },
};
