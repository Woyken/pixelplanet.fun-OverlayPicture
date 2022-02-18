const colorConverter = {
    getClosestColorFromPalette(gamePalette: [number, number, number][], reservedOffset: number, r: number, g: number, b: number) {
        const idx = this.convertActualColorFromPalette(gamePalette, reservedOffset, r, g, b);
        return this.getActualColorFromPalette(gamePalette, idx);
    },

    convertActualColorFromPalette(gamePalette: [number, number, number][], reservedOffset: number, r: number, g: number, b: number): number {
        const resultColorIdx = gamePalette
            .map((color, i) => {
                if (i < reservedOffset) return undefined;
                const difference = Math.sqrt((r - color[0]) ** 2 + (g - color[1]) ** 2 + (b - color[2]) ** 2);
                return {
                    difference,
                    color,
                    index: i,
                };
            })
            .filter((a) => !!a)
            .map((a) => a as NonNullable<typeof a>)
            .sort((aa, bb) => aa.difference - bb.difference)[0]?.index;
        if (resultColorIdx === undefined) throw new Error(`Color not found ${r}, ${g}, ${b} from ${JSON.stringify(gamePalette)}`);
        return resultColorIdx;
    },

    getActualColorFromPalette(gamePalette: [number, number, number][], color: number): [number, number, number] | null {
        const colorData = gamePalette[color];
        if (!colorData) return null;
        return [colorData[0], colorData[1], colorData[2]];
    },

    areColorsEqual(gamePalette: [number, number, number][], c1: number, c2: number): boolean {
        if (c1 === c2) {
            return true;
        }
        const color1 = gamePalette[c1];
        const color2 = gamePalette[c2];
        if (!color1 || !color2) return c1 === c2;

        let areEqual = true;

        areEqual = areEqual && color1[0] === color2[0];
        areEqual = areEqual && color1[1] === color2[1];
        areEqual = areEqual && color1[2] === color2[2];
        return areEqual;
    },

    parseColor(colorStr: string): [number, number, number] {
        const r = parseInt(colorStr.substr(1, 2), 16);
        const g = parseInt(colorStr.substr(3, 2), 16);
        const b = parseInt(colorStr.substr(5, 2), 16);
        return [r, g, b];
    },
};

export default colorConverter;
