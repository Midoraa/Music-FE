interface ISongsAPIData {
    _id?: string,
    title?: string,
    artist?: string,
    genres?: string,
    releaseDate?: string,
    coverImg?: string,
    audioLink?:string,
    vipDownload?: boolean,
    playedNumber?: number,
    likedNumber?: number,
}
interface ISongsAPIDataRes extends IBaseAPIRes{
    results: {
        data: ISongsAPIData[];
    }
}
