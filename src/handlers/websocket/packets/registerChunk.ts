import { ChunkCell } from "../../../chunkHelper";

const OP_CODE = 0xA1;

export default {
    dehydrate(chunk: ChunkCell): ArrayBuffer {
        const buffer = new ArrayBuffer(1 + 2);
        const view = new DataView(buffer);
        view.setInt8(0, OP_CODE);
        view.setInt8(1, chunk.chunkY);
        view.setInt8(2, chunk.chunkX);
        return buffer;
    },
};
