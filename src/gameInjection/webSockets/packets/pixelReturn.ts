export const pixelReturnPacket = {
    OP_CODE: 0xc3,
    hydrate(data: DataView) {
        const retCode = data.getUint8(1);
        const wait = data.getUint32(2);
        const coolDownSeconds = data.getInt16(6);
        const pixelIndex = data.getUint8(8);
        return {
            retCode,
            wait,
            coolDownSeconds,
            pixelIndex,
        };
    },
};
