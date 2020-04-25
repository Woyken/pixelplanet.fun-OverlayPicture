import { Configuration, configurationMethods } from './configuration';
import { SavedConfiguration } from './store/guiTypes';

class ConfigurationStore {
    private readonly storageItemName: string = 'OverlaySavedConfigs';
    public getSavedConfigurations(): Configuration[] {
        const serializedSavedData = localStorage.getItem(this.storageItemName);
        if (serializedSavedData == null) {
            // do nothing.
            return [];
        }
        const data = JSON.parse(serializedSavedData);
        if (!Array.isArray(data)) {
            return [];
        }
        const configs: Configuration[] = [];
        data.forEach((element: any) => {
            const conf = configurationMethods.createFromObj(element);
            if (conf.imgUrl !== '') {
                configs.push(conf);
            }
        });
        return configs;
    }

    public getSavedConfigurationsState(): SavedConfiguration[] {
        const oldConfigs = this.getSavedConfigurations();
        return oldConfigs.map((c) => {
            const n: SavedConfiguration = {
                imageUrl: c.imgUrl,
                modifiers: {
                    doModifications: false,
                    shouldConvertColors: c.convertColors,
                    modificationsAvailable: false,
                    imageBrightness: c.brighten,
                },
                placementConfiguration: {
                    transparency: c.transparency,
                    xOffset: c.xOffset,
                    yOffset: c.yOffset,
                },
            };
            return n;
        });
    }

    private saveConfigurations(configs: Configuration[]): void {
        const serializedData = JSON.stringify(configs);
        localStorage.setItem(this.storageItemName, serializedData);
    }

    public add(config: Configuration): void {
        if (config.imgUrl === '') {
            return;
        }

        const saved = this.getSavedConfigurations();
        let idx = -1;
        saved.filter((v, i) => {
            if (v.imgUrl === config.imgUrl) {
                idx = i;
                return true;
            }
            return false;
        });
        if (idx > -1) {
            // already exists. Replace it.
            saved.splice(idx, 1, config);
        } else {
            saved.push(config);
        }

        this.saveConfigurations(saved);
    }

    public remove(imgUrl: string): void {
        const saved = this.getSavedConfigurations();
        let idx = -1;
        saved.filter((v, i) => {
            if (v.imgUrl === imgUrl) {
                idx = i;
                return true;
            }
            return false;
        });
        if (idx > -1) {
            // exists. remove it
            saved.splice(idx, 1);
            this.saveConfigurations(saved);
        }
    }

    public clear(): void {
        localStorage.removeItem(this.storageItemName);
    }
}

export const configurationStore = new ConfigurationStore();
