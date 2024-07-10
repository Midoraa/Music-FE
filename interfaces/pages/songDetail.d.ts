import { IBasePageProps, IBasePage } from '@interfaces/pages/base';

interface ISongDetailPageProps extends IBasePageProps {
}
interface ISongDetailPageState{
    isListSongs?: ISongsAPIData[],
    isPlayIngs?: boolean,
    curSongDetails?: ISongsAPIData,
    taskss?: {
        id: string,
        url: string,
        title: string,
        artist: string,
        coverImg: string
    }[],
    playListUrls?: string,
}
interface ISongDetailPage<P = {}> extends IBasePage<P> {}
