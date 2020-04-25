import { ChunkCell } from '../../../chunkHelper';

const OP_CODE = 0xa1;

export default {
    dehydrate(chunk: ChunkCell): ArrayBuffer {
        const buffer = new ArrayBuffer(1 + 2);
        const view = new DataView(buffer);
        view.setInt8(0, OP_CODE);
        view.setInt8(1, chunk.chunkX);
        view.setInt8(2, chunk.chunkY);
        return buffer;
    },
};
