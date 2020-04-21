import { Action } from "redux";

export interface BotCanvasImageData {
    isProcessing: boolean;
    diffAgainstInputData?: Uint8Array;
}

export interface BotConfiguration {
    isEnabled: boolean;
}

export interface BotState {
    isFeatureEnabled: boolean;
    /**
     * Timestamp in ms when next pixel placement should be done.
     */
    placeNextPixelAt: number;
    canvasImageData: BotCanvasImageData;
    config: BotConfiguration;
}

export const BOT_FEATURE_ENABLED = 'BOT_FEATURE_ENABLED';
export const BOT_CONFIG_ENABLED = 'BOT_CONFIG_ENABLED';
export const BOT_IMAGE_PROCESSING = 'BOT_IMAGE_PROCESSING';
export const BOT_IMAGE_PROCESSED_DATA = 'BOT_IMAGE_PROCESSED_DATA';

interface BotSetFeatureEnabled extends Action {
    type: typeof BOT_FEATURE_ENABLED;
    isFeatureEnabled: boolean;
}

interface BotSetImageProcessing extends Action {
    type: typeof BOT_IMAGE_PROCESSING;
    isImageProcessing: boolean;
}

interface BotSetImageProcessedData extends Action {
    type: typeof BOT_IMAGE_PROCESSED_DATA;
    diffAgainstInputData?: Uint8Array;
}

interface BotConfigSetEnabled extends Action {
    type: typeof BOT_CONFIG_ENABLED;
    isEnabled: boolean;
}

export type BotActionTypes =
    | BotSetFeatureEnabled
    | BotSetImageProcessing
    | BotSetImageProcessedData
    | BotConfigSetEnabled;
