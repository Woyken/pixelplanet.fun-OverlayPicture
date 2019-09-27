class ColorConverter {
    private colorDict: { [id: number]: [number, number, number]; } = {};

    constructor() {
        // * = new
        this.colorDict[2] = this.parseColor('#ffffff'); // white
        this.colorDict[3] = this.parseColor('#e4e4e4'); // light gray
        this.colorDict[4] = this.parseColor('#c4c4c4'); // silver*
        this.colorDict[5] = this.parseColor('#888888'); // dark gray
        this.colorDict[6] = this.parseColor('#4e4e4e'); // darker gray
        this.colorDict[7] = this.parseColor('#000000'); // black
        this.colorDict[8] = this.parseColor('#f4b3ae'); // skin
        this.colorDict[9] = this.parseColor('#ffa7d1'); // light pink
        this.colorDict[10] = this.parseColor('#ff54b2'); // pink*
        this.colorDict[11] = this.parseColor('#ff6565'); // peach
        this.colorDict[12] = this.parseColor('#e50000'); // red
        this.colorDict[13] = this.parseColor('#9a0000'); // dark red*
        this.colorDict[14] = this.parseColor('#fea460'); // light brown
        this.colorDict[15] = this.parseColor('#e59500'); // orange
        this.colorDict[16] = this.parseColor('#a06a42'); // brown
        this.colorDict[17] = this.parseColor('#604028'); // dark brown*
        this.colorDict[18] = this.parseColor('#f5dfb0'); // sand
        this.colorDict[19] = this.parseColor('#fff889'); // khaki*
        this.colorDict[20] = this.parseColor('#e5d900'); // yellow
        this.colorDict[21] = this.parseColor('#94e044'); // light green
        this.colorDict[22] = this.parseColor('#02be01'); // green
        this.colorDict[23] = this.parseColor('#688338'); // olive*
        this.colorDict[24] = this.parseColor('#006513'); // dark green
        this.colorDict[25] = this.parseColor('#cae3ff'); // sky blue
        this.colorDict[26] = this.parseColor('#00d3dd'); // light blue
        this.colorDict[27] = this.parseColor('#0083c7'); // dark blue
        this.colorDict[28] = this.parseColor('#0000ea'); // blue
        this.colorDict[29] = this.parseColor('#191973'); // darker blue
        this.colorDict[30] = this.parseColor('#cf6ee4'); // light violette
        this.colorDict[31] = this.parseColor('#820080'); // violette
    }

    public convertActualColor(r: number, g: number, b: number): number {
        let lowestDiff = 99999999;
        let resultColor = -1;
        for (const key in this.colorDict) {
            if (!key) {
                continue;
            }
            const value = this.colorDict[key];
            const difference = Math.sqrt(
                Math.pow(r - value[0], 2) +
                Math.pow(g - value[1], 2) +
                Math.pow(b - value[2], 2),
                );
            if (difference < lowestDiff) {
                lowestDiff = difference;
                resultColor = parseInt(key, 10);
            }
        }
        return resultColor;
    }

    public getActualColor(color: number): [number, number, number] {
        switch (color) {
            case 0:
// tslint:disable-next-line: no-parameter-reassignment
                color = 25;
                break;
            case 1:
// tslint:disable-next-line: no-parameter-reassignment
                color = 2;
            default:
                break;
        }
        return [this.colorDict[color][0], this.colorDict[color][1], this.colorDict[color][2]];
    }

    public areColorsEqual(c1: number, c2: number): boolean {
        if (c1 === c2) {
            return true;
        }
        // default ocean color
        if ((c1 === 0 && c2 === 25) || c1 === 25 && c2 === 0) {
            return true;
        }
        // default ground color
        if ((c1 === 1 && c2 === 2) || c1 === 2 && c2 === 1) {
            return true;
        }
        return false;
    }

    private parseColor(colorStr: string): [number, number, number] {
        const r = parseInt(colorStr.substr(1, 2), 16);
        const g = parseInt(colorStr.substr(3, 2), 16);
        const b = parseInt(colorStr.substr(5, 2), 16);
        return [r, g, b];
    }
}

export default new ColorConverter();
