import { observable, IObservableArray } from 'mobx';
import { CanvasMetadataResponse } from '../actions/pixelPlanetResponseTypes';
import { Cell } from '../chunkHelper';

export class UserData {
    @observable name?: null | string;
    @observable minecraftname?: null | string;
    @observable totalPixels?: number;
    @observable dailyTotalPixels?: number;
    @observable ranking?: number;
    @observable dailyRanking?: number;
    @observable mailreg?: boolean;
}

export class GameState {
    @observable scale = 1;
    @observable viewScale = 1;
    /**
     * Pixel where mouse is hovering
     * When setting it change whole object, since it's just an interface.
     */
    @observable hoverPixel: Cell = { x: 0, y: 0 };
    @observable centerX: number;
    @observable centerY: number;
    @observable isMouseDragging: boolean;
    @observable activeCanvasStringId?: string;
    @observable activeCanvasId?: number;

    constructor(centerX: number, centerY: number, isMouseDragging: boolean) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.isMouseDragging = isMouseDragging;
    }
}

export class CanvasMetadata {
    @observable id: number;
    @observable title: string;
    @observable colorsReservedCount: number;
    @observable stringId: string;
    @observable colors: IObservableArray<[number, number, number]> = observable([]);
    @observable size: number;
    @observable timeoutOnEmpty: number;
    @observable timeoutOnReplace: number;
    @observable maxTimeout: number;
    @observable ranked: boolean;
    @observable pixelsMinimalRequirement: number;
    @observable description: string;
    @observable sd: string;

    constructor(
        id: number,
        title: string,
        colorsReservedCount: number,
        stringId: string,
        colors: [number, number, number][],
        size: number,
        timeoutOnEmpty: number,
        timeoutOnReplace: number,
        maxTimeout: number,
        ranked: boolean,
        pixelsMinimalRequirement: number,
        description: string,
        sd: string,
    ) {
        this.id = id;
        this.title = title;
        this.colorsReservedCount = colorsReservedCount;
        this.stringId = stringId;
        this.colors.replace(colors);
        this.size = size;
        this.timeoutOnEmpty = timeoutOnEmpty;
        this.timeoutOnReplace = timeoutOnReplace;
        this.maxTimeout = maxTimeout;
        this.ranked = ranked;
        this.pixelsMinimalRequirement = pixelsMinimalRequirement;
        this.description = description;
        this.sd = sd;
    }

    static fromResponse(id: number, metadataResponse: CanvasMetadataResponse): CanvasMetadata {
        return new CanvasMetadata(
            id,
            metadataResponse.title,
            metadataResponse.cli,
            metadataResponse.ident,
            metadataResponse.colors,
            metadataResponse.size,
            metadataResponse.bcd,
            metadataResponse.pcd,
            metadataResponse.cds,
            metadataResponse.ranked,
            metadataResponse.req,
            metadataResponse.desc,
            metadataResponse.sd,
        );
    }
}

export class GameStore {
    @observable userData: UserData;
    @observable canvasesMetadata: IObservableArray<CanvasMetadata> = observable([]);
    @observable gameState: GameState;

    constructor(gameState: GameState, userData: UserData) {
        this.gameState = gameState;
        this.userData = userData;
    }
}

export const gameStore = new GameStore(new GameState(0, 0, false), new UserData());
