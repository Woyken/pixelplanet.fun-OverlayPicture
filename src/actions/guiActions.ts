import { pictureConverter } from '../pictureConverter';
import logger from '../handlers/logger';
import { configurationStore } from '../configurationStore';
import { updateMetadata } from './pixelData';
import { overlayStore, SavedConfiguration, ImageModifiers, PlacementConfiguration } from '../store/overlayStore';
import { CanvasMetadata, gameStore } from '../store/gameStore';
import { botUpdateEnabled } from './botActions';

export function updateOverlayEnabled(isEnabled: boolean): void {
    overlayStore.overlayEnabled = isEnabled;
}

export function updateOutputImageStatus(isProcessing: boolean): void {
    overlayStore.overlayImage.outputImage.isProcessing = isProcessing;
}

export function updateOutputImage(data?: ImageData): void {
    overlayStore.overlayImage.outputImage.outputImageData = data;
}

function updateImageModifiersInternal(
    modificationsAvailable?: boolean,
    shouldConvertColors?: boolean,
    imageBrightness?: number,
): void {
    if (modificationsAvailable !== undefined)
        overlayStore.modifications.modificationsAvailable = modificationsAvailable;
    if (shouldConvertColors !== undefined) overlayStore.modifications.shouldConvertColors = shouldConvertColors;
    if (imageBrightness !== undefined) overlayStore.modifications.imageBrightness = imageBrightness;
}

export async function startProcessingImage(): Promise<void> {
    updateOutputImageStatus(true);
    try {
        let buffer: ArrayBuffer;
        const url = overlayStore.overlayImage.inputImage.url;
        const file = overlayStore.overlayImage.inputImage.file;
        if (url) {
            logger.log('Parsing url input');
            const response = await fetch(url);
            buffer = await response.arrayBuffer();
        } else if (file) {
            logger.log('Parsing file input');
            buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (ev): void => {
                    const data = reader.result as ArrayBuffer;
                    logger.log(`File parsed as array ${data.byteLength}`);
                    resolve(data);
                };
                reader.onerror = (ev): void => {
                    logger.logError(`File parsing failed`);
                    reject('could not parse file');
                };
                reader.readAsArrayBuffer(file);
            });
        } else {
            // This shouldn't be possible.
            throw new Error('Something unexpected happened');
        }

        logger.log(`Starting picture conversion ${buffer.byteLength}`);
        let currentCanvasMetadata: CanvasMetadata | undefined;
        for (let i = 0; i < gameStore.canvasesMetadata.length; i++) {
            if (gameStore.gameState.activeCanvasStringId === gameStore.canvasesMetadata[i].stringId) {
                currentCanvasMetadata = gameStore.canvasesMetadata[i];
            }
        }
        if (!currentCanvasMetadata) {
            await updateMetadata();
            for (let i = 0; i < gameStore.canvasesMetadata.length; i++) {
                if (gameStore.gameState.activeCanvasStringId === gameStore.canvasesMetadata[i].stringId) {
                    currentCanvasMetadata = gameStore.canvasesMetadata[i];
                }
            }
            // currentCanvasMetadata should be defined now
            if (!currentCanvasMetadata) {
                logger.logError(`Can't fetch canvas metadata? Can't continue parsing the image...`);
                return;
            }
        }
        const result = await pictureConverter.convertPictureFromUrl(
            currentCanvasMetadata.colors,
            currentCanvasMetadata.colorsReservedCount,
            buffer,
            overlayStore.modifications.shouldConvertColors,
            overlayStore.modifications.imageBrightness,
        );
        logger.log(`updating output image ${result.data.length}`);
        updateOutputImage(result);
    } catch (err) {
        logger.logError(`Something went wrong while parsing picture: ${err}`);
        // Likely to happen when fetching image
        updateOutputImage(undefined);
        updateImageModifiersInternal(false);
    } finally {
        updateOutputImageStatus(false);
    }
}

export async function updateImageModifiers(
    modificationsAvailable?: boolean,
    shouldConvertColors?: boolean,
    imageBrightness?: number,
): Promise<void> {
    logger.log('updated image modifiers');
    updateImageModifiersInternal(modificationsAvailable, shouldConvertColors, imageBrightness);
    await startProcessingImage();
}

export async function updateInputImage(url?: string, file?: File): Promise<void> {
    logger.log(`Updating input image (${url}, ${!!file})`);
    overlayStore.overlayImage.inputImage.url = url;
    overlayStore.overlayImage.inputImage.file = file;
    if (!url && !file) {
        logger.log(`Input image empty, clearing state...`);
        // Clear output image
        updateOutputImage();
        return;
    }
    if (url) {
        if (!(await pictureConverter.isImageValidCors(url))) {
            logger.log(`Image url ${url} not valid cors, don't parse`);
            // No point in trying to parse this out.
            // Clear output image
            updateOutputImage();
            updateImageModifiersInternal(false);
            return;
        }
        logger.log(`Cors seems to be fine, continuing.`);
        updateImageModifiersInternal(true);
    }
    if (file) {
        updateImageModifiersInternal(true);
    }
    if (!file && !overlayStore.modifications.modificationsAvailable) {
        logger.log('Modifications are disabled. Not parsing.');
        // Modifications should not be made. Clean up output image.
        updateOutputImage(undefined);
        return;
    }

    await startProcessingImage();
}

export function updateImagePlacementConfiguration(transparency?: number, xOffset?: number, yOffset?: number): void {
    if (xOffset !== undefined) overlayStore.placementConfiguration.xOffset = xOffset;
    if (yOffset !== undefined) overlayStore.placementConfiguration.yOffset = yOffset;
    if (transparency !== undefined) overlayStore.placementConfiguration.transparency = transparency;
}

export async function setActiveCanvasByStringId(canvasStringId: string): Promise<void> {
    if (
        gameStore.gameState.activeCanvasId !== undefined &&
        gameStore.canvasesMetadata[gameStore.gameState.activeCanvasId]?.stringId === canvasStringId
    ) {
        return;
    }
    logger.log('updating active canvas id');
    const idx = gameStore.canvasesMetadata.findIndex((v) => v.stringId === canvasStringId);
    if (idx >= 0) {
        await botUpdateEnabled(false);
        gameStore.gameState.activeCanvasId = gameStore.canvasesMetadata[idx].id;
        await startProcessingImage();
    }
}

export async function updateGameState(
    canvasStringId?: string,
    centerX?: number,
    centerY?: number,
    zoomLevel?: number,
): Promise<void> {
    if (canvasStringId !== undefined) gameStore.gameState.activeCanvasStringId = canvasStringId;
    if (centerX !== undefined) gameStore.gameState.centerX = centerX;
    if (centerY !== undefined) gameStore.gameState.centerY = centerY;

    if (canvasStringId !== undefined) await setActiveCanvasByStringId(canvasStringId);
}

export function updateGameStateFAF(
    canvasStringId?: string,
    centerX?: number,
    centerY?: number,
    zoomLevel?: number,
): void {
    updateGameState(canvasStringId, centerX, centerY, zoomLevel).catch((e) => {
        logger.logWarn(`Game state update failed. ${e}`);
    });
}

const storageItemName = 'OverlaySavedConfigurationsv2';

export function loadSavedConfigurations(): void {
    const serializedSavedData = localStorage.getItem(storageItemName);
    if (serializedSavedData == null) {
        // Nothing saved yet.
        // For backwards compatibility, check old storage location, just in case:
        const oldConfigs = configurationStore.getSavedConfigurationsState();
        if (oldConfigs.length > 0) {
            // Consider it migrated, clear the old storage.
            configurationStore.clear();
        }
        localStorage.setItem(storageItemName, JSON.stringify(oldConfigs));
        overlayStore.savedConfigs.replace(oldConfigs);
        return;
    }

    const loadedDataDoNotTrust = JSON.parse(serializedSavedData) as SavedConfiguration[];
    const configs = loadedDataDoNotTrust.map(
        (c) =>
            new SavedConfiguration(
                c.imageUrl,
                new ImageModifiers(
                    c.modifiers.modificationsAvailable,
                    c.modifiers.shouldConvertColors,
                    c.modifiers.imageBrightness,
                    overlayStore.modifications.autoSelectColor,
                ),
                new PlacementConfiguration(
                    c.placementConfiguration.xOffset,
                    c.placementConfiguration.yOffset,
                    c.placementConfiguration.transparency,
                ),
            ),
    );
    // TODO safer way to do
    overlayStore.savedConfigs.replace(configs);
}

export async function saveCurrentConfiguration(): Promise<void> {
    const imgUrl = overlayStore.overlayImage.inputImage.url;
    if (!imgUrl) {
        // If it's empty or undefined, we can't save it.
        return;
    }

    const idx = overlayStore.savedConfigs.findIndex((v) => {
        return v.imageUrl === imgUrl;
    });
    if (idx >= 0) {
        logger.log('Saving current configuration, same url already exists, replacing saved data.');
        // Already exists, need to replace existing one.
        const conf = overlayStore.savedConfigs[idx];
        conf.modifiers.modificationsAvailable = overlayStore.modifications.modificationsAvailable;
        conf.modifiers.shouldConvertColors = overlayStore.modifications.shouldConvertColors;
        conf.modifiers.imageBrightness = overlayStore.modifications.imageBrightness;

        conf.placementConfiguration.xOffset = overlayStore.placementConfiguration.xOffset;
        conf.placementConfiguration.yOffset = overlayStore.placementConfiguration.yOffset;
        conf.placementConfiguration.transparency = overlayStore.placementConfiguration.transparency;
        // Save it to the storage.
        localStorage.setItem(storageItemName, JSON.stringify(overlayStore.savedConfigs));
        return;
    }

    const savedConfig = new SavedConfiguration(
        imgUrl,
        new ImageModifiers(
            overlayStore.modifications.modificationsAvailable,
            overlayStore.modifications.shouldConvertColors,
            overlayStore.modifications.imageBrightness,
            overlayStore.modifications.autoSelectColor,
        ),
        new PlacementConfiguration(
            overlayStore.placementConfiguration.xOffset,
            overlayStore.placementConfiguration.yOffset,
            overlayStore.placementConfiguration.transparency,
        ),
    );
    overlayStore.savedConfigs.push(savedConfig);

    // Save it to the storage.
    localStorage.setItem(storageItemName, JSON.stringify(overlayStore.savedConfigs));
}

export async function removeSavedConfiguration(imgUrl: string): Promise<void> {
    const idx = overlayStore.savedConfigs.findIndex((v) => {
        return v.imageUrl === imgUrl;
    });
    if (idx < 0) {
        logger.log('When removing saved config. Config with url was not found');
        return;
    }
    // exists. remove it
    overlayStore.savedConfigs.splice(idx, 1);

    // Save it to the storage.
    localStorage.setItem(storageItemName, JSON.stringify(overlayStore.savedConfigs));
}

export async function applySavedConfiguration(savedConfig: SavedConfiguration): Promise<void> {
    updateImageModifiersInternal(
        savedConfig.modifiers.modificationsAvailable,
        savedConfig.modifiers.shouldConvertColors,
        savedConfig.modifiers.imageBrightness,
    );
    await updateInputImage(savedConfig.imageUrl);
    updateImagePlacementConfiguration(
        savedConfig.placementConfiguration.transparency,
        savedConfig.placementConfiguration.xOffset,
        savedConfig.placementConfiguration.yOffset,
    );
}

export function updateBotModalVisible(isVisible: boolean): void {
    overlayStore.isBotModalVisible = isVisible;
}
