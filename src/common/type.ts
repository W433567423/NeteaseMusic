interface IBfsvTpye {
    br: number
    fid: number
    size: number
    vd: number
}


interface ILocalRelation {
    title: string
    link: string
}

interface ILocalFooterImg {
    link: string
}

interface IHotRadio {
    picUrl: string
    name: string
    position: string
    url: string
}

export type {IBfsvTpye, ILocalRelation, ILocalFooterImg, IHotRadio}
