import logger from './handlers/logger';
import { OverlayStore, ImageModifiers, PlacementConfiguration } from './store/overlayStore';

export interface SharableConfig {
    modifications: ImageModifiers;
    placementConfiguration: PlacementConfiguration;
    overlayImageUrl: string;
}

class UrlHelper {
    /**
     * This will make game window jump a little bit
     * But that's the only way to make sure zoom level is captured correctly.
     */
    public stickToGrid(targetX: number | null = null, targetY: number | null = null): void {
        const hashstr = window.location.hash.substr(1).split(',');
        const canvasId = hashstr[0];
        const x = targetX !== null ? targetX : hashstr[1];
        const y = targetY !== null ? targetY : hashstr[2];
        const zoom = hashstr[3];
        if (zoom === '0') {
            // If zoom is zero, don't try replacing href, it will freak out.
            return;
        }
        // Set 1 zoom level more, will update canvas.
        location.href = `${window.location.href.split('#')[0]}#${canvasId},${x},${y},${parseInt(zoom, 10) + 1}`;

        // Set zoom level back to what it was.
        location.href = `${window.location.href.split('#')[0]}#${canvasId},${x},${y},${zoom}`;
    }

    public getSharableLink(configuration: SharableConfig): string {
        const hashstr = window.location.hash.substr(1).split(',');

        // default link format is: pixelplanet.fun/#d,0,0,0
        const shareLink = `${window.location.href.split('#')[0]}#${
            hashstr[0]
        },${configuration.placementConfiguration.xOffset.toString(
            10,
        )},${configuration.placementConfiguration.yOffset.toString(10)},${hashstr[3] || 0},${JSON.stringify(
            configuration,
        )}`;

        return shareLink;
    }

    public deserializeSharedUrl(): SharableConfig | undefined {
        const hashstr = window.location.hash.substr(1).split(',');
        logger.log(JSON.stringify(hashstr));
        if (hashstr.length <= 3) {
            return;
        }
        const serializedObj = decodeURIComponent(hashstr.slice(4).join(','));
        if (serializedObj.trim().length < 1) {
            return;
        }
        // This might be error prone... For now leaving as is.
        try {
            const obj = JSON.parse(serializedObj) as SharableConfig;
            logger.log('Successfully parsed shared config.');
            return obj;
        } catch (error) {
            logger.logError(`Could not parse shared url from hash: ${hashstr} - {${serializedObj}}. ${error}`);
        }
        return;
    }

    public sharableConfigFromState(state: OverlayStore): SharableConfig | null {
        if (!state.overlayImage.inputImage.url) {
            logger.logWarn('url is not set, cannot generate sharable config');
            return null;
        }
        const result: SharableConfig = {
            modifications: state.modifications,
            placementConfiguration: state.placementConfiguration,
            overlayImageUrl: state.overlayImage.inputImage.url,
        };
        return result;
    }

    public get canvasStr(): string {
        const hashstr = window.location.hash.substr(1).split(',');
        return hashstr[0];
    }

    public get xCoord(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[1], 10);
    }

    public get yCoord(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[2], 10);
    }

    public get zoomLevel(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[3], 10);
    }

    public copyToClipboard(text: string): void {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.style.zIndex = '10000';
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
}

export default new UrlHelper();
