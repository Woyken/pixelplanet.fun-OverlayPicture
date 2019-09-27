import colorConverter from './colorConverter';
import { decode } from 'fast-png';

class PictureConverter {
    public async convertPictureFromUrl(
        imgUrl: string,
        contextForBufferCreation: CanvasRenderingContext2D,
        convertColors: boolean,
        brightenBy: number,
    ): Promise<ImageData> {
        console.log(`converting picture: ${imgUrl}, convertcolors: ${convertColors}, brightenBy: ${brightenBy}`);
        const response = await fetch(imgUrl);
        const buffer = await response.arrayBuffer();
        const decodedPng = decode(buffer);
        const imageData = contextForBufferCreation.createImageData(
            decodedPng.width, decodedPng.height);

        if (decodedPng.palette) {
            console.log('detected pallette png.');
            if (convertColors) {
                // need to convert the palette.
                for (let i = 0; i < decodedPng.palette.length; i++) {
                    const r = Math.min(decodedPng.palette[i][0] + brightenBy, 255);
                    const g = Math.min(decodedPng.palette[i][1] + brightenBy, 255);
                    const b = Math.min(decodedPng.palette[i][2] + brightenBy, 255);
                    const convertedColor = colorConverter.convertActualColor(
                        r,
                        g,
                        b,
                    );
                    const resultArr = colorConverter.getActualColor(convertedColor);
                    decodedPng.palette[i][0] = resultArr[0];
                    decodedPng.palette[i][1] = resultArr[1];
                    decodedPng.palette[i][2] = resultArr[2];
                }
            }

            // Now convert the picture
            for (let i = 0; i < decodedPng.data.length; i++) {
                const valueInPallette = decodedPng.data[i];
                const color = decodedPng.palette[valueInPallette];
                const idx = i << 2;
                imageData.data[idx + 0] = color[0];
                imageData.data[idx + 1] = color[1];
                imageData.data[idx + 2] = color[2];
                // Not sure, when using pallette, which values correspond to transparent...
                if (valueInPallette > 0 && color[0] === 0 && color[1] === 0 && color[2] === 0) {
                    imageData.data[idx + 3] = 0;
                } else {
                    imageData.data[idx + 3] = 255;
                }
            }
        } else {
            console.log('detected RGBA png.');
            if (convertColors) {
                for (let y = 0; y < decodedPng.height; y++) {
                    for (let x = 0; x < decodedPng.width; x++) {
                        // tslint:disable-next-line: no-bitwise
                        const idx = (decodedPng.width * y + x) << 2;

                        const r = Math.min(decodedPng.data[idx + 0] + brightenBy, 255);
                        const g = Math.min(decodedPng.data[idx + 1] + brightenBy, 255);
                        const b = Math.min(decodedPng.data[idx + 2] + brightenBy, 255);

                        const convertedColor = colorConverter.convertActualColor(
                            r,
                            g,
                            b,
                        );
                        const resultArr = colorConverter.getActualColor(convertedColor);
                        imageData.data[idx + 0] = resultArr[0];
                        imageData.data[idx + 1] = resultArr[1];
                        imageData.data[idx + 2] = resultArr[2];
                        imageData.data[idx + 3] = decodedPng.data[idx + 3];
                    }
                }
            } else {
                imageData.data.set(decodedPng.data);
            }
        }

        return imageData;
    }
}

export const pictureConverter = new PictureConverter();
