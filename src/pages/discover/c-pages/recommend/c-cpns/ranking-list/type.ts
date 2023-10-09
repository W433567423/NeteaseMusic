// 作者详情
interface IAvatarDetailType {
    userType: number,
    identityLevel: number,
    identityIconUrl: string
}

// 创作者
interface ICreatorType {
    accountStatus: number
    anchor: boolean
    authStatus: number
    authenticationTypes: number
    authority: number
    avatarDetail: IAvatarDetailType
    avatarImgId: number
    avatarImgIdStr: string
    avatarImgId_str: string
    avatarUrl: string
    backgroundImgId: number
    backgroundImgIdStr: string
    backgroundUrl: string
    birthday: number
    city: number
    defaultAvatar: boolean
    description: string
    detailDescription: string
    djStatus: number
    expertTags: null
    experts: null
    followed: boolean
    gender: number
    mutual: boolean
    nickname: string
    province: number
    remarkName: null
    signature: string
    userId: number
    userType: number
    vipType: number
}

// 描述者
interface ISubscribersType {
    accountStatus: number
    anchor: boolean
    authStatus: number
    authenticationTypes: number
    authority: number
    avatarDetail: null
    avatarImgId: number
    avatarImgIdStr: string
    avatarImgId_str: string
    avatarUrl: string
    backgroundImgId: number
    backgroundImgIdStr: string
    backgroundUrl: string
    birthday: number
    city: number
    defaultAvatar: boolean
    description: string
    detailDescription: string
    djStatus: number
    expertTags: null
    experts: null
    followed: boolean
    gender: number
    mutual: boolean
    nickname: string
    province: number
    remarkName: null
    signature: string
    userId: number
    userType: number
    vipType: number
}

//
interface ITrackIdType {
    alg: null
    at: number
    f: null
    id: number
    lr: number
    rcmdReason: string
    sc: null
    sr: null
    t: number
    uid: number
    v: number
}

interface IBfsvTpye {
    br: number
    fid: number
    size: number
    vd: number
}

interface IAlTpye {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str: string
    tns: unknown[]
}

interface ITrackType {
    a: null
    al: IAlTpye
    alia: string[]
    ar: any[]
    awardTags: null
    cd: string
    cf: string
    copyright: number
    cp: number
    crbt: null
    djId: number
    dt: number
    entertainmentTags: null
    fee: number
    ftype: number
    h: IBfsvTpye
    hr: IBfsvTpye
    id: number
    l: IBfsvTpye
    m: IBfsvTpye
    mark: number
    mst: number
    mv: number
    name: string
    no: number
    noCopyrightRcmd: null
    originCoverType: number
    originSongSimpleData: null
    pop: number
    pst: number
    publishTime: number
    resourceState: boolean
    rt: string
    rtUrl: null
    rtUrls: []
    rtype: number
    rurl: null
    s_id: number
    single: number
    songJumpInfo: null
    sq: IBfsvTpye
    st: number
    t: number
    tagPicList: null
    v: number
    version: number
}

// 榜单
interface ITopListType {
    ToplistType: string
    adType: number
    algTags: null
    backgroundCoverId: number
    backgroundCoverUrl: null
    bannedTrackIds: null
    cloudTrackCount: number
    commentCount: number
    commentThreadId: string
    copied: boolean
    coverImgId: number
    coverImgId_str: string
    coverImgUrl: string
    createTime: number
    creator: ICreatorType
    description: string
    englishTitle: null
    gradeStatus: string
    highQuality: boolean
    historySharedUsers: null
    id: number
    mvResourceInfos: null
    name: string
    newImported: boolean
    officialPlaylistType: null
    opRecommend: boolean
    ordered: boolean
    playCount: number
    privacy: number
    relateResType: null
    remixVideo: null
    score: null
    shareCount: number
    sharedUsers: null
    specialType: number
    status: number
    subscribed: boolean
    subscribedCount: number
    subscribers: ISubscribersType[]
    tags: unknown[]
    titleImage: number
    titleImageUrl: null
    trackCount: number
    trackIds: ITrackIdType[]
    trackNumberUpdateTime: number
    trackUpdateTime: number
    tracks: ITrackType[]
    trialMode: number
    updateFrequency: null
    updateTime: number
    userId: number
    videoIds: null
    videos: null
}


export type {ITopListType,}
