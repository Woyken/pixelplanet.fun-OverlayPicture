export class Configuration {
    public constructor() {
    }

    public fillFromSerialized(serialized: string): void {
        let initObj: any;
        try {
            initObj = JSON.parse(serialized);
        } catch (error) {
            return;
        }

        this.fillFromObj(initObj);
    }

    public fillFromObj(initObj: any): void {
        if (typeof initObj === 'object') {
            if (typeof initObj.imgUrl === 'string') {
                this.imgUrl = initObj.imgUrl;
                console.log(`Read img url ${this.imgUrl}`);
            }
            if (typeof initObj.xOffset === 'number') {
                this.xOffset = initObj.xOffset;
                console.log(`Read x offset ${this.xOffset.toString(10)}`);
            }
            if (typeof initObj.yOffset === 'number') {
                this.yOffset = initObj.yOffset;
                console.log(`Read y offset ${this.yOffset.toString(10)}`);
            }
            if (typeof initObj.transparency === 'number') {
                this.transparency = initObj.transparency;
                console.log(
                    `Read transparency ${this.transparency.toString(10)}`,
                );
            }
        }
    }

    public static createFromUrlHash(initializeFromUrlHash: string): Configuration {
        console.log('initializing config');
        const configObj = new Configuration();
        const hashstr = initializeFromUrlHash.substr(1).split(',');
        configObj.imgUrl = '';
        configObj.xOffset = parseInt(hashstr[0], 10);
        configObj.yOffset = parseInt(hashstr[1], 10);
        const serializedInitObj = decodeURIComponent(hashstr[3]);

        configObj.fillFromSerialized(serializedInitObj);

        return configObj;
    }

    public serializeForUrl(): string {
        return encodeURIComponent(JSON.stringify(this));
    }

    public imgUrl: string = '';
    public xOffset: number = 0;
    public yOffset: number = 0;
    public transparency: number = 70;
    public brighten: number = 15;
    public convertColors: boolean = false;
}
