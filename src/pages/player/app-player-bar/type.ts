import {IBfsvTpye} from "@/common/type";

interface ISongAl {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str: string
}

interface ISongArType {
    id: number,
    name: string,
    tns: [],
    alias: string[]
}

// 歌曲
interface ISongType {
    a: null
    al: ISongAl
    alia: string[]
    ar: ISongArType[]
    cd: string
    cf: string
    copyright: number
    cp: number
    crbt: null
    djId: number
    dt: number
    fee: number
    ftype: number
    h: IBfsvTpye
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
    pop: number
    pst: number
    publishTime: number
    rt: string
    rtUrl: null
    rtUrls: string[]
    rtype: number
    rurl: null
    s_id: number
    single: number
    st: number
    t: number
    v: number
}

// 歌词
interface ILyricsType {
    time: number
    content: string
}

export type {ISongType, ILyricsType}
