import { wrap } from 'comlink';

import logger from './handlers/logger';
import { pictureConverter } from './workers/pictureConverter';
import PictureConverterWorker from './workers/pictureConverterWorker?worker&inline';

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

            try {
                resolve(ctx.getImageData(0, 0, img.width, img.height));
            } catch (error) {
                // If somehow we fail on second try, let's not loop again
                if (!window.location.protocol.startsWith('http')) reject(error);
                // security error, cors request failed, let's try fetching the image data
                fetch(url, { signal: abortSignal })
                    .then((response) => response.blob())
                    .then((blob) => new File([blob], 'image.png', { type: 'image/png' }))
                    .then((file) =>
                        loadImageDrawOnCanvasGetData(URL.createObjectURL(file), abortSignal) //
                            .finally(() => URL.revokeObjectURL(url))
                    )
                    .then(resolve);
            }
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
