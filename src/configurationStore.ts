import { Configuration } from './configuration';

class ConfigurationStore {
    private readonly storageItemName = 'OverlaySavedConfigs';
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
            const conf = new Configuration();
            conf.fillFromObj(element);
            if (conf.imgUrl !== '') {
                configs.push(conf);
            }
        });
        return configs;
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
        let idx: number = -1;
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
        let idx: number = -1;
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
}

export const configurationStore = new ConfigurationStore();
