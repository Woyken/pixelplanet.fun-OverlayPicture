import React, { ReactElement, useRef, useEffect } from 'react';
import colorConverter from '../../../colorConverter';

interface CanvasImagePreviewProps {
    botImage?: Uint8Array;
    width: number;
    height: number;
    colorPalette?: [number, number, number][];
}

export const CanvasImagePreview: React.FunctionComponent<CanvasImagePreviewProps> = (
    props: CanvasImagePreviewProps,
): ReactElement => {
    const imageCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect((): void => {
        const canvas = imageCanvasRef.current;
        if (!canvas || !props.botImage || !props.colorPalette) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const imgData = ctx.createImageData(props.width, props.height);
        for (let y = 0; y < props.height; y++) {
            for (let x = 0; x < props.width; x++) {
                const colorIndex = props.botImage[props.width * y + x];
                let rgb: [number, number, number];
                if (colorIndex !== 255) rgb = colorConverter.getActualColorFromPalette(props.colorPalette, colorIndex);
                else rgb = [0, 0, 0];

                const idx = (props.width * y + x) << 2;
                imgData.data[idx + 0] = rgb[0];
                imgData.data[idx + 1] = rgb[1];
                imgData.data[idx + 2] = rgb[2];
                imgData.data[idx + 3] = colorIndex === 255 ? 0 : 255;
            }
        }

        ctx?.clearRect(0, 0, imgData.width, imgData.height);
        ctx?.putImageData(imgData, 0, 0);
    });

    return (
        <div>
            <canvas ref={imageCanvasRef} width={props.width} height={props.height} />
        </div>
    );
};
