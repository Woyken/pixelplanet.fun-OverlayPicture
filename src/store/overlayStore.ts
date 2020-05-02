import { observable, IObservableArray } from 'mobx';

export class ImageModifiers {
    /**
     * Can Image data be read at all? Depends on image source. CORS might not be enabled.
     */
    @observable modificationsAvailable: boolean;
    @observable shouldConvertColors: boolean;
    @observable imageBrightness: number;

    constructor(modificationsAvailable: boolean, shouldConvertColors: boolean, imageBrightness: number) {
        this.modificationsAvailable = modificationsAvailable;
        this.imageBrightness = imageBrightness;
        this.shouldConvertColors = shouldConvertColors;
    }
}

export class PlacementConfiguration {
    @observable xOffset: number;
    @observable yOffset: number;
    @observable transparency: number;

    constructor(xOffset: number, yOffset: number, transparency: number) {
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.transparency = transparency;
    }
}

export class SavedConfiguration {
    @observable imageUrl: string;
    @observable modifiers: ImageModifiers;
    @observable placementConfiguration: PlacementConfiguration;

    constructor(imageUrl: string, modifiers: ImageModifiers, placementConfiguration: PlacementConfiguration) {
        this.imageUrl = imageUrl;
        this.modifiers = modifiers;
        this.placementConfiguration = placementConfiguration;
    }
}

export class OverlayImageInput {
    @observable url?: string;
    @observable file?: File;
}

export class OverlayImageOutput {
    @observable isProcessing: boolean;
    @observable outputImageData?: ImageData;

    constructor(isProcessing: boolean) {
        this.isProcessing = isProcessing;
    }
}

export class OverlayImage {
    @observable inputImage: OverlayImageInput;
    @observable outputImage: OverlayImageOutput;

    constructor(inputImage: OverlayImageInput, outputImage: OverlayImageOutput) {
        this.inputImage = inputImage;
        this.outputImage = outputImage;
    }
}

export class OverlayStore {
    @observable savedConfigs: IObservableArray<SavedConfiguration> = observable([]);
    @observable overlayEnabled: boolean;
    @observable overlayImage: OverlayImage;
    @observable placementConfiguration: PlacementConfiguration;
    @observable modifications: ImageModifiers;
    @observable isFollowMouseActive = false;
    @observable isBotModalVisible: boolean;
    @observable isRestickingNeeded = false;

    constructor(
        overlayEnabled: boolean,
        overlayImage: OverlayImage,
        placementConfiguration: PlacementConfiguration,
        modifications: ImageModifiers,
        isBotModalVisible: boolean,
    ) {
        this.overlayEnabled = overlayEnabled;
        this.overlayImage = overlayImage;
        this.placementConfiguration = placementConfiguration;
        this.modifications = modifications;
        this.isBotModalVisible = isBotModalVisible;
    }
}

export const overlayStore = new OverlayStore(
    true,
    new OverlayImage(new OverlayImageInput(), new OverlayImageOutput(false)),
    new PlacementConfiguration(0, 0, 80),
    new ImageModifiers(false, false, 0),
    false,
);
