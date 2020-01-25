export interface UserDataResponse {
    name?:              null | string;
    minecraftname?:    null | string;
    totalPixels?:      number;
    dailyTotalPixels?: number;
    ranking?:          number;
    dailyRanking?:     number;
    mailreg?:          boolean;
    canvases:          { [key: string]: CanvasMetadataResponse };
}

export interface CanvasMetadataResponse {
    ident:  string;
    colors: [number, number, number][];
    alpha:  number;
    size:   number;
    bcd:    number;
    pcd:    number;
    cds:    number;
    req:    number;
    sd:     string;
}
