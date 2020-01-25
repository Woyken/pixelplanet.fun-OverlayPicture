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
        const chunkX = data.getInt16(1);
        const chunkY = data.getInt16(3);
        const offset = data.getUint16(5);
        const colorIndex = data.getUint8(7);
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