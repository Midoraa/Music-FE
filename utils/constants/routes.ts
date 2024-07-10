const HOME_PAGE: IRouteConstant = {
    href: '/',
};
const BXH_PAGE: IRouteConstant = {
    href: '/bxh',
};
const SONG_DETAIL_PAGE: IRouteConstant = {
    href: '/song/detail',
};
const PLAYLIST_PAGE: IRouteConstant = {
    href: '/playlist',
};
const ACTIST_PAGE: IRouteConstant = {
    href: '/actist',
};
const ACTIST_DETAIL_PAGE: IRouteConstant = {
    href: '/actist/detail',
};
const USER_DETAIL_PAGE: IRouteConstant = {
    href: '/user/detail',
};
const LOGIN_PAGE: IRouteConstant = {
    href: '/login',
};
const REGISTER_PAGE: IRouteConstant = {
    href: '/register',
};
const NOT_FOUND_PAGE: IRouteConstant = {
    href: '/404',
};

export const CLIENT = {
    HOME: HOME_PAGE,
    BXH: BXH_PAGE,
    SONG_DETAIL: SONG_DETAIL_PAGE,
    PLAYLIST: PLAYLIST_PAGE,
    ACTIST: ACTIST_PAGE,
    ACTIST_DETAIL: ACTIST_DETAIL_PAGE,
    USER_DETAIL: USER_DETAIL_PAGE,
    LOGIN: LOGIN_PAGE,
    REGISTER:REGISTER_PAGE,
    NOT_FOUND: NOT_FOUND_PAGE,
};

const LOGIN_API: IRouteConstant = {
    href: 'login',
};
const PROFILE_API: IRouteConstant = {
    href: 'profile',
};
const PLAY_LIST_API: IRouteConstant = {
    href: 'songs'
}
export const API = {
    LOGIN: LOGIN_API,
    PROFILE: PROFILE_API,
    PLAY_LISTS: PLAY_LIST_API
};
