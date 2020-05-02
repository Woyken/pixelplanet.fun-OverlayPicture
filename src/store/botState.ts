import { observable, IObservableArray } from 'mobx';
import { Cell } from '../chunkHelper';

export class PixelToPlace {
    @observable pos: Cell;
    @observable colorIndex: number;

    constructor(pos: Cell, colorIndex: number) {
        this.pos = pos;
        this.colorIndex = colorIndex;
    }
}

export class BotCanvasImageData {
    @observable isBotWorkingInProgress = false;
    @observable isProcessing: boolean;
    @observable processingPercentage = 0;
    @observable processedPixelsTodo: IObservableArray<PixelToPlace> = observable([]);

    constructor(isProcessing: boolean) {
        this.isProcessing = isProcessing;
    }
}

class BotCell implements Cell {
    @observable x: number;
    @observable y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class BotConfiguration {
    @observable isEnabled: boolean;
    @observable isWatching = false;
    @observable imageWidth: number;
    @observable imageHeight: number;
    @observable imageTopLeft: BotCell;

    constructor(isEnabled: boolean, imageWidth: number, imageHeight: number, imageTopLeft: Cell) {
        this.isEnabled = isEnabled;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.imageTopLeft = imageTopLeft;
    }
}

export class BotState {
    @observable isFeatureEnabled: boolean;
    /**
     * Timestamp in ms when next pixel placement should be done.
     */
    @observable pixelPlaceTimeEmpty: number;
    @observable pixelBeingPlaced: boolean;
    @observable canvasImageData: BotCanvasImageData;
    @observable config: BotConfiguration;

    constructor(
        isFeatureEnabled: boolean,
        pixelPlaceTimeEmpty: number,
        pixelBeingPlaced: boolean,
        canvasImageData: BotCanvasImageData,
        config: BotConfiguration,
    ) {
        this.isFeatureEnabled = isFeatureEnabled;
        this.pixelPlaceTimeEmpty = pixelPlaceTimeEmpty;
        this.pixelBeingPlaced = pixelBeingPlaced;
        this.canvasImageData = canvasImageData;
        this.config = config;
    }
}

export const botState = new BotState(
    false,
    0,
    false,
    new BotCanvasImageData(false),
    new BotConfiguration(false, 0, 0, { x: 0, y: 0 }),
);
