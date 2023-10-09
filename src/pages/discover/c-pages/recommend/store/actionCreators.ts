import * as actionTypes from "./constants";

import {getArtistList, getHotRecommend, getNewAlbum, getTopBanner, getTopList} from "@/services/recommend";

// 改变redux中的topBanners数据
const changeBannerAction = (res: any) => ({
    type: actionTypes.CHANGE_TOP_BNNAER,
    banners: res.banners
})

// 改变redux中的recommends数据
const changeRecommendAction = (res: any) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

// 改变redux中的newAlbum数据
const changeNewAlbumAction = (res: any) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.albums
})

// 修改redux中的topUpList数据
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
export const getBannerAction = () => {
    return (dispatch: any) => {
        getTopBanner().then((res: any) => {
            dispatch(changeBannerAction(res));
        })
    }
}

// 获取热门推荐数据
export const getRecommend = (limit?: number) => {
    return (dispatch: (arg0: { type: string; recommends: any; }) => void) => {
        getHotRecommend(limit).then((res: any) => {
            dispatch(changeRecommendAction(res))
        })
    }
}

//获取新碟上映数据
export const getAlbum = (limit: number = 10, offset: number = 0) => {
    return (dispatch: (arg0: { type: string; newAlbum: any; }) => void) => {
        getNewAlbum(limit, offset).then((res: any) => dispatch(changeNewAlbumAction(res))
        )
    }
}

// 获取榜单数据
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
