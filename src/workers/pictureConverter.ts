import colorConverter from '../colorConverter';

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

    async applyModificationsToImageData(colorPalette: [number, number, number][], imageData: ImageData, modifierConvertColors: boolean, brightenBy: number, modifierSmolPixels: boolean) {
        return new Promise<ImageData>((resolve) => {
            const outImageData = new ImageData(imageData.width, imageData.height);
            outImageData.data.set(imageData.data);
            if (modifierConvertColors) {
                for (let y = 0; y < outImageData.height; y++) {
                    for (let x = 0; x < outImageData.width; x++) {
                        // eslint-disable-next-line no-bitwise
                        const idx = (outImageData.width * y + x) << 2;

                        const originalR = imageData.data[idx + 0] ?? 0;
                        const originalG = imageData.data[idx + 1] ?? 0;
                        const originalB = imageData.data[idx + 2] ?? 0;
                        const originalA = imageData.data[idx + 3] ?? 0;

                        const r = Math.min(originalR + brightenBy, 255);
                        const g = Math.min(originalG + brightenBy, 255);
                        const b = Math.min(originalB + brightenBy, 255);

                        const resultArr = colorConverter.getClosestColorFromPalette(colorPalette, 0, r, g, b);
                        if (!resultArr) {
                            // unknown color...
                        } else {
                            const [convertedR, convertedG, convertedB] = resultArr;

                            outImageData.data[idx + 0] = convertedR;
                            outImageData.data[idx + 1] = convertedG;
                            outImageData.data[idx + 2] = convertedB;
                            // Trimming alpha if lower than threshold.
                            // Not sure if I should do this. But here we go. Results will be closer to actual canvas. Without transparency.
                            outImageData.data[idx + 3] = originalA > 30 ? 255 : 0;
                        }
                    }
                }
            }
            if (modifierSmolPixels) {
                const smolPixelsMultiplier = 3;
                const smolPixelsImageData = new ImageData(outImageData.width * smolPixelsMultiplier, outImageData.height * smolPixelsMultiplier);
                for (let outY = 0; outY < outImageData.height; outY++) {
                    for (let outX = 0; outX < outImageData.width; outX++) {
                        // eslint-disable-next-line no-bitwise
                        const outIdx = (outImageData.width * outY + outX) << 2;

                        const outR = outImageData.data[outIdx + 0] ?? 0;
                        const outG = outImageData.data[outIdx + 1] ?? 0;
                        const outB = outImageData.data[outIdx + 2] ?? 0;
                        const outA = outImageData.data[outIdx + 3] ?? 0;

                        const smolX = outX * smolPixelsMultiplier + Math.floor(smolPixelsMultiplier / 2);
                        const smolY = outY * smolPixelsMultiplier + Math.floor(smolPixelsMultiplier / 2);
                        // eslint-disable-next-line no-bitwise
                        const smolIdx = (smolY * smolPixelsImageData.width + smolX) << 2;

                        smolPixelsImageData.data[smolIdx + 0] = outR;
                        smolPixelsImageData.data[smolIdx + 1] = outG;
                        smolPixelsImageData.data[smolIdx + 2] = outB;
                        smolPixelsImageData.data[smolIdx + 3] = outA;
                    }
                }
                resolve(smolPixelsImageData);
                return;
            }
            resolve(outImageData);
        });
    },
};
