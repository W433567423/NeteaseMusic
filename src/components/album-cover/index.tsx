/**
 * DONE
 * @description: 新碟上架的图片封面
 * @author: tutu
 * @time: 2023/10/9 13:47
 */
import {memo} from "react";
import {AlbumWrapper} from "@cpn/album-cover/style.ts";
import {getSizeImage} from "@/utils/format.ts";
import {INewAlbumType} from "@/pages/discover/c-pages/recommend/c-cpns/new-album/type.ts";

interface IPropsType {
    info: INewAlbumType

    width?: string
    size?: string
    bgp?: string
}

const TUAlbumCover = memo((props: IPropsType) => {
    const {info, size = "100px", width = "118px", bgp = "-570px"} = props;
    return (
        <AlbumWrapper size={size} width={width} $bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl || '', 150)} alt=""/>
                <a href={`https://music.163.com/#/album?id=${info.id}`} className="cover sprite_covor">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="name"
                     onClick={() => window.location.href = `todo`}>{info.name}</div>
                <div className="artist"
                     onClick={() => window.location.href = `todo`}>{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})

export default TUAlbumCover
