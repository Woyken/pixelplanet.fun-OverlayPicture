export interface UserDataResponse {
    name?: null | string;
    minecraftname?: null | string;
    totalPixels?: number;
    dailyTotalPixels?: number;
    ranking?: number;
    dailyRanking?: number;
    mailreg?: boolean;
    canvases: { [key: string]: CanvasMetadataResponse };
}

export interface CanvasMetadataResponse {
    ident: string;
    title: string;
    colors: [number, number, number][];
    size: number;
    cli: number;
    bcd: number;
    pcd: number;
    cds: number;
    ranked: boolean;
    req: number;
    sd: string;
    desc: string;
}
