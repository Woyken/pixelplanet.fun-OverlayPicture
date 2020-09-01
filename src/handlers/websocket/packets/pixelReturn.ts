const OP_CODE = 0xc3;

type PixelReturnType = {
    retCode: number;
    wait: number;
    coolDownSeconds: number;
};

export default {
    OP_CODE,
    hydrate(data: DataView): PixelReturnType {
        const retCode = data.getUint8(1);
        const wait = data.getUint32(2);
        const coolDownSeconds = data.getInt16(6);
        return {
            retCode,
            wait,
            coolDownSeconds,
        };
    },
};
