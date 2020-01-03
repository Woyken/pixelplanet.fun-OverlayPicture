class ConfigurationWithMethods {

    public createFromSerialized(serialized: string): Configuration | undefined {
        let initObj: any;
        try {
            initObj = JSON.parse(serialized);
        } catch (error) {
            return;
        }

        return this.createFromObj(initObj);
    }

    public createFromObj(initObj: any): Configuration {
        const config = new Configuration();
        if (typeof initObj === 'object') {
            if (typeof initObj.imgUrl === 'string') {
                config.imgUrl = initObj.imgUrl;
                console.log(`Read img url ${config.imgUrl}`);
            }
            if (typeof initObj.xOffset === 'number') {
                config.xOffset = initObj.xOffset;
                console.log(`Read x offset ${config.xOffset.toString(10)}`);
            }
            if (typeof initObj.yOffset === 'number') {
                config.yOffset = initObj.yOffset;
                console.log(`Read y offset ${config.yOffset.toString(10)}`);
            }
            if (typeof initObj.transparency === 'number') {
                config.transparency = initObj.transparency;
                console.log(
                    `Read transparency ${config.transparency.toString(10)}`,
                );
            }
        }
        return config;
    }

    public createFromUrlHash(initializeFromUrlHash: string): Configuration | undefined {
        console.log('initializing config');
        const hashstr = initializeFromUrlHash.substr(1)
                            .split(',');

        const serializedInitObj = decodeURIComponent(hashstr.slice(4)
                                                        .join(','));

        const newConf = this.createFromSerialized(serializedInitObj);

        return newConf;
    }

    public serializeForUrl(): string {
        return encodeURIComponent(JSON.stringify(this));
    }
}

export const configurationMethods = new ConfigurationWithMethods();

export class Configuration {
    public imgUrl: string = '';
    public xOffset: number = 0;
    public yOffset: number = 0;
    public transparency: number = 70;
    public brighten: number = 15;
    public convertColors: boolean = false;
}
