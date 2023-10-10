import request from './request';

export function getSongDetail(ids: number, cookie?: string) {
    return request({
        url: "/song/detail",
        params: {
            ids, cookie: cookie && encodeURIComponent(cookie)
        }

    })
}

export function getLyric(id: number) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}

export function getSimiPlaylist(id: number, timestamp?: number) {
    return request({
        url: "/simi/playlist",
        params: {
            id, timestamp
        }
    })
}

export function getSimiSong(id: number) {
    return request({
        url: "/simi/song",
        params: {
            id
        }
    })
}
