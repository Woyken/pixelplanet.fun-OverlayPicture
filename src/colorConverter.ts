class ColorConverter {
    public convertActualColorFromPalette(gamePalette: [number, number, number][], reservedOffset: number, r: number, g: number, b: number): number {
        let lowestDiff = 99999999;
        let resultColor = -1;
        for (let i = reservedOffset; i < gamePalette.length; i++) {
            const value = gamePalette[i];
            const difference = Math.sqrt(
                Math.pow(r - value[0], 2) +
                Math.pow(g - value[1], 2) +
                Math.pow(b - value[2], 2),
                );
            if (difference < lowestDiff) {
                lowestDiff = difference;
                resultColor = i;
            }
        }
        return resultColor;
    }

    public getActualColorFromPalette(gamePalette: [number, number, number][], color: number): [number, number, number] {
        return [gamePalette[color][0], gamePalette[color][1], gamePalette[color][2]];
    }

    public areColorsEqual(gamePalette: [number, number, number][], c1: number, c2: number): boolean {
        if (c1 === c2) {
            return true;
        }

        let areEqual = false;
        areEqual = areEqual && gamePalette[c1][0] === gamePalette[c2][0];
        areEqual = areEqual && gamePalette[c1][1] === gamePalette[c2][1];
        areEqual = areEqual && gamePalette[c1][2] === gamePalette[c2][2];
        return areEqual;
    }

    private parseColor(colorStr: string): [number, number, number] {
        const r = parseInt(colorStr.substr(1, 2), 16);
        const g = parseInt(colorStr.substr(3, 2), 16);
        const b = parseInt(colorStr.substr(5, 2), 16);
        return [r, g, b];
    }
}

export default new ColorConverter();
