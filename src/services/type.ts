// topBanner的数据结构
interface ITopBannerType {
    imageUrl: string,
    targetId: number,
    adid: null,
    targetType: number,
    titleColor: string,
    typeTitle: string,
    url: string,
    exclusive: boolean,
    monitorImpress: null,
    monitorClick: null,
    monitorType: null,
    monitorImpressList: null,
    monitorClickList: null,
    monitorBlackList: null,
    extMonitor: null,
    extMonitorInfo: null,
    adSource: null,
    adLocation: null,
    adDispatchJson: null,
    encodeId: string,
    program: null,
    event: null,
    video: null,
    song: null,
    scm: string,
    bannerBizType: string
}

// 热门推荐的数据结构
interface IHotRecommendType {
    alg: string
    canDislike: boolean
    copywriter: string
    highQuality: boolean
    id: number
    name: string
    picUrl: string
    playCount: number
    trackCount: number
    trackNumberUpdateTime: number
    type: number
}

export type {ITopBannerType, IHotRecommendType}
