import request from "./request";

// 获取头部banner图片
export const getTopBanner = () => {
    return request({
        url: "/banner"
    })
}

// 获取热门推荐
export const getHotRecommend = (limit?: number) => {
    return request({
        url: "/personalized", params: {
            limit
        }
    })
}

export const getNewAlbum = (limit: number, offset: number) => {
    return request({
        url: "/album/new",
        params: {
            limit,
            offset
        }
    })
}

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
