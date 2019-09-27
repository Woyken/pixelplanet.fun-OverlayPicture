import colorConverter from './colorConverter';
import { decode } from 'fast-png';

class PictureConverter {
    public async convertPictureFromUrl(
        imgUrl: string,
        contextForBufferCreation: CanvasRenderingContext2D,
        convertColors: boolean,
        brightenBy: number,
    ): Promise<ImageData> {
        const response = await fetch(imgUrl);
        const buffer = await response.arrayBuffer();
        const decodedPng = decode(buffer);

        if (convertColors) {
            for (let y = 0; y < decodedPng.height; y++) {
                for (let x = 0; x < decodedPng.width; x++) {
                    // tslint:disable-next-line: no-bitwise
                    const idx = (decodedPng.width * y + x) << 2;

                    const r = decodedPng.data[idx + 0] + brightenBy;
                    const g = decodedPng.data[idx + 1] + brightenBy;
                    const b = decodedPng.data[idx + 2] + brightenBy;
                    const convertedColor = colorConverter.convertActualColor(
                        r,
                        g,
                        b,
                    );
                    const resultArr = colorConverter.getActualColor(convertedColor);
                    decodedPng.data[idx + 0] = resultArr[0];
                    decodedPng.data[idx + 1] = resultArr[1];
                    decodedPng.data[idx + 2] = resultArr[2];
                }
            }
        }

        const imageData = contextForBufferCreation.createImageData(
            decodedPng.width, decodedPng.height);

        imageData.data.set(decodedPng.data);
        return imageData;
    }
}

export const pictureConverter = new PictureConverter();
