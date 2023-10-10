interface IExtProperties {
    coverImgId_str: string
}

interface ISimiPlayList {
    adType: number
    alg: string
    anonimous: boolean
    cloudTrackCount: number
    commentThreadId: string
    coverImgId: number
    coverImgUrl: string
    coverStatus: number
    coverText: null
    createTime: number
    creator: any
    description: string
    extProperties: IExtProperties
    highQuality: boolean
    iconImgUrl: null
    id: number
    name: string
    newImported: boolean
    ordered: true
    playCount: number
    privacy: number
    recommendInfo: null
    recommendReason: string
    recommendText: null
    relateResId: null
    relateResType: null
    socialPlaylistCover: null
    specialType: number
    status: number
    subscribed: boolean
    subscribedCount: number
    subscribers: unknown []
    tags: string[]
    totalDuration: number
    trackCount: number
    trackNumberUpdateTime: number
    trackUpdateTime: number
    tracks: null
    tsSongCount: number
    updateTime: number
    userId: number
    xInfo: IExtProperties
}

export type {ISimiPlayList}
