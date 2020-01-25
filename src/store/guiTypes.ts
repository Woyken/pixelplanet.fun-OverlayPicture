import { Action } from "redux";

export interface ImageModifiers {
    /**
     * Can Image data be read at all? Depends on image source. CORS might not be enabled.
     */
    modificationsAvailable: boolean;
    /**
     * User choice to show original image or apply modifications to it?
     */
    doModifications: boolean;
    shouldConvertColors: boolean;
    imageBrightness: number;
}

export interface OverlayImageInput {
    url?: string;
    file?: File;
}

export interface OverlayImageOutput {
    isProcessing: boolean;
    outputImageData?: ImageData;
}

export interface OverlayImage {
    inputImage: OverlayImageInput;
    outputImage: OverlayImageOutput;
}

export interface PlacementConfiguration {
    xOffset: number;
    yOffset: number;
    transparency: number;
}

export interface GameState {
    zoomLevel: number;
    centerX: number;
    centerY: number;
    canvasStringId: string;
    isMouseDragging: boolean;
}

export interface SavedConfiguration {
    imageUrl: string;
    modifiers: ImageModifiers;
    placementConfiguration: PlacementConfiguration;
}

export interface SavedConfigurations {
    configs: SavedConfiguration[];
}

export interface GuiParametersState {
    modifications: ImageModifiers;
    placementConfiguration: PlacementConfiguration;
    currentGameState: GameState;
    overlayImage: OverlayImage;
    overlayEnabled: boolean;
    savedConfigurations: SavedConfigurations;
}

export const UPDATE_INPUT_IMAGE = 'UPDATE_INPUT_IMAGE';
export const UPDATE_OUTPUT_IMAGE_STATUS = 'UPDATE_OUTPUT_IMAGE_STATUS';
export const UPDATE_OUTPUT_IMAGE = 'UPDATE_OUTPUT_IMAGE';
export const UPDATE_IMAGE_MODIFIERS = 'UPDATE_IMAGE_MODIFIERS';
export const UPDATE_IMAGE_PLACEMENT_CONFIGURATION = 'UPDATE_IMAGE_PLACEMENT_CONFIGURATION';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_OVERLAY_ENABLED = 'UPDATE_OVERLAY_ENABLED';
export const LOAD_SAVED_CONFIGURATIONS = 'LOAD_SAVED_CONFIGURATIONS';
export const SAVE_CURRENT_CONFIGURATION = 'SAVE_CURRENT_CONFIGURATION';

interface LoadSavedConfigurations extends Action {
    type: typeof LOAD_SAVED_CONFIGURATIONS;
    config: SavedConfigurations;
}

interface SaveCurrentConfiguration extends Action {
    type: typeof SAVE_CURRENT_CONFIGURATION;
    config: SavedConfiguration;
}

interface UpdateOverlayEnabled extends Action {
    type: typeof UPDATE_OVERLAY_ENABLED;
    isEnabled: boolean;
}

interface UpdateInputImage extends Action {
    type: typeof UPDATE_INPUT_IMAGE;
    url?: string;
    file?: File;
}

interface UpdateOutputImageStatus extends Action {
    type: typeof UPDATE_OUTPUT_IMAGE_STATUS;
    isProcessing: boolean;
}

interface UpdateOutputImage extends Action {
    type: typeof UPDATE_OUTPUT_IMAGE;
    imageData?: ImageData;
}

interface UpdateImageModifiers extends Action {
    type: typeof UPDATE_IMAGE_MODIFIERS;
    modificationsAvailable?: boolean;
    doModifications?: boolean;
    shouldConvertColors?: boolean;
    imageBrightness?: number;
}

interface UpdatePlacementConfiguration extends Action {
    type: typeof UPDATE_IMAGE_PLACEMENT_CONFIGURATION;
    xOffset?: number;
    yOffset?: number;
    transparency?: number;
}

interface UpdateGameState extends Action {
    type: typeof UPDATE_GAME_STATE;
    zoomLevel?: number;
    centerX?: number;
    centerY?: number;
    canvasStringId?: string;
    isMouseDragging?: boolean;
}

export type ActionTypes =
    | UpdateInputImage
    | UpdateOutputImageStatus
    | UpdateOutputImage
    | UpdateImageModifiers
    | UpdatePlacementConfiguration
    | UpdateGameState
    | UpdateOverlayEnabled
    | LoadSavedConfigurations
    | SaveCurrentConfiguration;
