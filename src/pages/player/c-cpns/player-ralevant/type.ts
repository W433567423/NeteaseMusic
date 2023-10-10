import {IArtistType, INewAlbumType} from "@/pages/discover/c-pages/recommend/c-cpns/new-album/type.ts";

interface IMusicType {
    bitrate: number
    dfsId: number
    extension: string
    id: number
    name: string
    playTime: number
    size: number
    sr: number
    volumeDelta: number
}

interface IChargeInfoList {
    chargeMessage: null
    chargeType: number
    chargeUrl: null
    rate: number
}

interface IFreeTrialPrivilege {
    listenType: null
    resConsumable: boolean
    userConsumable: boolean
}

interface IPrivilege {
    chargeInfoList: IChargeInfoList[]
    cp: 0
    cs: false
    dl: 0
    dlLevel: "none"
    downloadMaxBrLevel: "lossless"
    downloadMaxbr: 999000
    fee: 1
    fl: 0
    flLevel: "none"
    flag: 260
    freeTrialPrivilege: IFreeTrialPrivilege
    id: 167827
    maxBrLevel: "lossless"
    maxbr: 999000
    payed: 0
    pl: 0
    plLevel: "none"
    playMaxBrLevel: "lossless"
    playMaxbr: 999000
    preSell: false
    rscl: null
    sp: 0
    st: 0
    subp: 1
    toast: false

}

interface ISimiSongsType {
    album: INewAlbumType
    alg: "itembased"
    alias: string[]
    artists: IArtistType[]
    audition: null
    bMusic: IMusicType
    commentThreadId: "R_SO_4_1413585838"
    copyFrom: ""
    copyrightId: 0
    crbt: null
    dayPlays: 0
    disc: "01"
    duration: 240000
    fee: 8
    ftype: 0
    hMusic: IMusicType
    hearTime: 0
    hrMusic: null
    id: 1413585838
    lMusic: IMusicType
    mMusic: IMusicType
    mark: 8192
    mp3Url: "http://m2.music.126.net/hmZoNQaqzZALvVp0rE7faA==/0.mp3"
    mvid: 0
    name: "与我无关"
    no: 1
    noCopyrightRcmd: null
    originCoverType: 1
    originSongSimpleData: null
    playedNum: 0
    popularity: 100
    position: 0
    privilege: IPrivilege
    recommendReason: "相似歌曲"
    ringtone: ""
    rtUrl: null
    rtUrls: null
    rtype: 0
    rurl: null
    score: 100
    songJumpInfo: null
    sqMusic: IMusicType
    starred: false
    starredNum: 0
    status: 0
}

export type {ISimiSongsType}
