interface IArtistType {
    albumSize: number
    alias: string[]
    briefDesc: string
    followed: boolean
    id: number
    img1v1Id: number
    img1v1Id_str: string
    img1v1Url: string
    musicSize: number
    name: string
    picId: number
    picId_str: string
    picUrl: string
    topicPerson: number
    trans: string
    transNames: ['다희']
}

interface INewAlbumType {
    alias: string[]
    artist: IArtistType
    artists: any[]
    awardTags: null
    blurPicUrl: string
    briefDesc: string
    commentThreadId: string
    company: string
    companyId: number
    copyrightId: number
    description: string
    id: number
    mark: number
    name: string
    onSale: boolean
    paid: boolean
    pic: number
    picId: number
    picId_str: string
    picUrl: string
    publishTime: number
    size: number
    songs: unknown[]
    status: number
    subType: string
    tags: string
    type: string
}

export type {INewAlbumType}
