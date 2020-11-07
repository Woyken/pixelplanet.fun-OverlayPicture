import { chunkToIndex, TILE_SIZE } from '../chunkHelper';
import logger from '../handlers/logger';
import { chunkStore, LoadedChunkData } from '../store/chunkStore';
import { gameStore } from '../store/gameStore';

class FetchInterceptor {
    private originalFetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
    constructor() {
        this.originalFetch = window.fetch.bind(window);
        window.fetch = this.interceptedFetch.bind(this);
    }

    async interceptedFetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
        const response = await this.originalFetch(input, init);
        try {
            if (typeof input === 'string') {
                const chunkRegex = new RegExp(/chunks\/(\d+)\/(\d+)\/(\d+).bmp/);
                const doesMatch = chunkRegex.exec(input);
                if (doesMatch) {
                    const canvasId = parseInt(doesMatch[1]);
                    const chunkX = parseInt(doesMatch[2]);
                    const chunkY = parseInt(doesMatch[3]);
                    if (gameStore.gameState.activeCanvasId !== canvasId) {
                        // Saved canvasId is different than request was made to? let's ignore and hope for the best.
                        return response;
                    }
                    if (response.ok) {
                        const chunkIndex = chunkToIndex({ chunkX, chunkY });
                        // WARNING this will consume response body, we'll need to return new response object with new data
                        const arrayBuffer = await response.arrayBuffer();
                        if (arrayBuffer.byteLength === 0) {
                            // If chunk is untouched, returned array will be empty. Treat it as ocean (color 0)
                            chunkStore.addChunk(
                                new LoadedChunkData(
                                    chunkIndex,
                                    Array.from(new Int8Array(new ArrayBuffer(TILE_SIZE * TILE_SIZE))),
                                ),
                            );
                        }
                        chunkStore.addChunk(new LoadedChunkData(chunkIndex, Array.from(new Int8Array(arrayBuffer))));
                        return new Response(arrayBuffer, response);
                    } else {
                        // Error has occurred. Since we are only intercepting it here, ignore failures, and just pass it on
                    }
                }
            }
        } catch (error) {
            logger.logError(`Error in fetch interceptor ${error}`);
        }

        return response;
    }
}

const fetchInterceptor = new FetchInterceptor();

export default fetchInterceptor;
