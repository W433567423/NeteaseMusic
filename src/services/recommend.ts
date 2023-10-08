import request from "./request";

export function getTopBanner() {
    return request({
        url: "/banner"
    })
}

export function getHotRecommend() {
    return request({
        url: "/personalized"
    })
}

export function getNewAlbum(limit: number, offset: number) {
    return request({
        url: "/album/new",
        params: {
            limit,
            offset
        }
    })
}

export function getTopList(id: number) {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}


export function getArtistList(limit: number, cat: number) {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit
        }
    })
}
