import { ChunkCell } from '../../../chunkHelper';

const OP_CODE = 0xa3;

export default {
    OP_CODE,
    dehydrate(chunks: ChunkCell[]): ArrayBuffer {
        const buffer = new ArrayBuffer(1 + 1 + chunks.length * 2);
        const view = new Uint8Array(buffer);
        view[0] = OP_CODE;
        view[1] = 0;
        for (let i = 0; i < chunks.length * 2; i += 2) {
            view[i + 2] = chunks[i].chunkY;
            view[i + 3] = chunks[i].chunkX;
        }
        return buffer;
    },
};
