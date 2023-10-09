import request from "./request";

// 获取头部banner图片接口
export const getTopBanner = () => {
    return request({
        url: "/banner"
    })
}

// 获取热门推荐接口
export const getHotRecommend = (limit?: number) => {
    return request({
        url: "/personalized", params: {
            limit
        }
    })
}

// 获取新碟上映接口
export const getNewAlbum = (limit: number, offset: number) => {
    return request({
        url: "/album/new",
        params: {
            limit,
            offset
        }
    })
}

// 获取榜单接口
export const getTopList = (id: number) => {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}


export const getArtistList = (limit: number, cat: number) => {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit
        }
    })
}
