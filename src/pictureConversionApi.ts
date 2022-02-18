import { wrap } from 'comlink';
import PictureConverterWorker from 'web-worker:./workers/pictureConverterWorker.ts';

import logger from './handlers/logger';
import { pictureConverter } from './workers/pictureConverter';

const worker = new PictureConverterWorker();

export const pictureConverterApi = wrap<typeof pictureConverter>(worker);

export async function tryReadingImageData(url: string, abortSignal: AbortSignal) {
    try {
        return await loadImageDrawOnCanvasGetData(url, abortSignal);
    } catch (error) {
        logger.logError(`Error loading image: ${error}`);
        return undefined;
    }
}

async function loadImageDrawOnCanvasGetData(url: string, abortSignal: AbortSignal) {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Can't get context");
    const clearCallbacks = () => {
        img.onload = null;
        img.onerror = null;
        img.src = '';
        abortSignal.onabort = null;
    };
    const imageData = await new Promise<ImageData>((resolve, reject) => {
        img.onerror = () => {
            reject(new Error('Image load error'));
            clearCallbacks();
        };
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(ctx.getImageData(0, 0, img.width, img.height));
        };
        abortSignal.onabort = () => {
            reject(new Error('Aborted'));
            clearCallbacks();
        };
        img.src = url;
    });
    clearCallbacks();
    return imageData;
}
