import * as actionTypes from './constants';
import {Map} from "immutable";

//Immutable类型优化性能
const defaultState = Map({
    topBanners: [],// 轮播图
    hotRecommends: [],// 热门推荐
    newAlbum: [], // 新碟上映
    topUpList: {}, // 榜单
    topNewList: {},
    topOriginList: {},

    settleSings: [],
})

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BNNAER:
            return state.set("topBanners", action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.recommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbum", action.newAlbum);
        case actionTypes.CHANGE_UP_LIST:
            return state.set("topUpList", action.topUpList);
        case actionTypes.CHANGE_NEW_LIST:
            return state.set("topNewList", action.topNewList);
        case actionTypes.CHANGE_ORIGIN_LIST:
            return state.set("topOriginList", action.topOriginList);
        case actionTypes.CHANGE_SETTLE_SONGER:
            return state.set("settleSings", action.settleSings)
        default:
            return state;
    }
}
