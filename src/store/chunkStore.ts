import { observable, IObservableArray, action } from 'mobx';

export class LoadedChunkData {
    @observable data: IObservableArray<number> = observable([]);
    @observable chunkIdx: number;

    constructor(chunkIdx: number, data: number[]) {
        this.chunkIdx = chunkIdx;
        this.data.replace(data);
    }
}

export class ChunkStore {
    @observable loadedChunks: IObservableArray<LoadedChunkData> = observable([]);

    @action
    addChunk(data: LoadedChunkData): void {
        if (!this.loadedChunks.find((v) => v.chunkIdx === data.chunkIdx)) this.loadedChunks.push(data);
    }

    @action
    getChunk(chunkIdx: number): LoadedChunkData | undefined {
        return this.loadedChunks.find((v) => v.chunkIdx === chunkIdx);
    }
}

export const chunkStore = new ChunkStore();
