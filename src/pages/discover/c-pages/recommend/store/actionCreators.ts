import * as actionTypes from "./constants";

import {getArtistList, getHotRecommend, getNewAlbum, getTopBanner, getTopList} from "@/services/recommend";

const changeBannerAction = (res: any) => ({
    type: actionTypes.CHANGE_TOP_BNNAER,
    banners: res.banners
})

const changeRecommendAction = (res: any) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

const changeNewAlbumAction = (res: any) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.albums
})

const changeUpListAction = (res: any) => ({
    type: actionTypes.CHANGE_UP_LIST,
    topUpList: res.playlist
})

const changeNewListAction = (res: any) => ({
    type: actionTypes.CHANGE_NEW_LIST,
    topNewList: res.playlist
})

const changeOriginListAction = (res: any) => ({
    type: actionTypes.CHANGE_ORIGIN_LIST,
    topOriginList: res.playlist
})

const changeSettleSingsAction = (res: any) => ({
    type: actionTypes.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
})


// 获取轮播图数据
export const getBanner = () => {
    return (dispatch: (arg0: { type: string; banners: any; }) => void) => {
        getTopBanner().then((res: any) => {
            dispatch(changeBannerAction(res));
        })
    }
}

export const getRecommend = () => {
    return (dispatch: (arg0: { type: string; recommends: any; }) => void) => {
        getHotRecommend().then((res: any) => {
            dispatch(changeRecommendAction(res))
        })
    }
}

export const getAlbum = () => {
    return (dispatch: (arg0: { type: string; newAlbum: any; }) => void) => {
        getNewAlbum(10, 0).then((res: any) => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const getTopData = (idx: number) => {
    return (dispatch: (arg0: { type: string; topNewList?: any; topOriginList?: any; topUpList?: any; }) => void) => {
        getTopList(idx).then((res: any) => {
            switch (idx) {
                case 19723756:
                    dispatch(changeNewListAction(res));
                    break;
                case 3779629:
                    dispatch(changeOriginListAction(res));
                    break;
                case 2884035:
                    dispatch(changeUpListAction(res));
                    break;
                default:
                    console.log("其他数据处理");
            }
        })
    }
}

export const getSettleSingers = () => {
    return (dispatch: (arg0: { type: string; settleSings: any; }) => void) => {
        getArtistList(5, 5001).then((res: any) => {
            dispatch(changeSettleSingsAction(res))
        })
    }
}
