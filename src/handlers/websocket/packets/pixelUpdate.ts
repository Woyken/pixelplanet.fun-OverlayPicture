import { ChunkCell } from "../../../chunkHelper";

type PixelUpdatePacket = {
    chunk: ChunkCell,
    offset: number;
    colorIndex: number,
};

const OP_CODE = 0xC1; // Chunk Update

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
};