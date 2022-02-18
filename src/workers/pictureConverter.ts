import colorConverter from '../colorConverter';
import { decode, IndexedColors, PngDataArray } from 'fast-png';
import logger from '../handlers/logger';

type IndexedColorBitDepth = 1 | 2 | 4 | 8;

export const pictureConverter = {
    async isImageValidCors(url: string): Promise<boolean> {
        try {
            const response = await fetch(url);
        } catch (error) {
            // Likely failed due to cors.
            return false;
        }
        return true;
    },

    async applyModificationsToImageData(colorPalette: [number, number, number][], imageData: ImageData, modifierConvertColors: boolean, brightenBy: number) {
        return new Promise<ImageData>((resolve, reject) => {
            const outImageData = new ImageData(imageData.width, imageData.height);
            outImageData.data.set(imageData.data);
            if (modifierConvertColors) {
                for (let y = 0; y < outImageData.height; y++) {
                    for (let x = 0; x < outImageData.width; x++) {
                        // eslint-disable-next-line no-bitwise
                        const idx = (outImageData.width * y + x) << 2;

                        const r = Math.min(imageData.data[idx + 0] + brightenBy, 255);
                        const g = Math.min(imageData.data[idx + 1] + brightenBy, 255);
                        const b = Math.min(imageData.data[idx + 2] + brightenBy, 255);

                        const resultArr = colorConverter.getClosestColorFromPalette(colorPalette, 0, r, g, b);
                        if (!resultArr) {
                            // unknown color...
                        } else {
                            outImageData.data[idx + 0] = resultArr[0];
                            outImageData.data[idx + 1] = resultArr[1];
                            outImageData.data[idx + 2] = resultArr[2];
                            // Trimming alpha if lower than threshold.
                            // Not sure if I should do this. But here we go. Results will be closer to actual canvas. Without transparency.
                            outImageData.data[idx + 3] = imageData.data[idx + 3] > 30 ? 255 : 0;
                        }
                    }
                }
            }
            resolve(outImageData);
        });
    },
};
