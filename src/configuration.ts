export class Configuration {
    constructor(initializeFromUrlHash: string) {
        console.log('initializing config');
        const hashstr = initializeFromUrlHash.substr(1).split(',');
        this.imgUrl = '';
        this.xOffset = parseInt(hashstr[0], 10);
        this.yOffset = parseInt(hashstr[1], 10);
        const serializedInitObj = decodeURIComponent(hashstr[3]);
        let initObj: any = undefined;
        try {
            initObj = JSON.parse(serializedInitObj);
            console.log('Parsed config from url. Reading..');
        } catch (error) {
            console.warn('Could not parse config from url');
        }
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
        } else {
            console.warn(
                `Invalid config, not an object. Found type = ${typeof initObj}`,
            );
        }
    }

    public serialize(): string {
        return encodeURIComponent(JSON.stringify(this));
    }

    public imgUrl: string = '';
    public xOffset: number = 0;
    public yOffset: number = 0;
    public transparency: number = 70;
}
