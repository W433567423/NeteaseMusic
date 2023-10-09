/**
 * DONE
 * @description: 图片封面组件
 * @author: tutu
 * @time: 2023/10/9 12:55
 */
import {memo} from "react";
import {ThemeCoverWrapper} from "@cpn/songs-cover/style.ts";
import {getCount, getSizeImage} from "@/utils/format";
import {IImgCoverType} from "@cpn/songs-cover/type.ts";

interface IPropsType {
    right?: number
    info: IImgCoverType
}

const TUSongsCover = memo((props: IPropsType) => {
    const {info, right} = props;

    return (
        <ThemeCoverWrapper right={right}>
            <div className="cover-top"
                 onClick={() => window.location.href = `https://music.163.com/#/playlist?id=${info.id}`}>
                <img src={getSizeImage(info.picUrl || info.coverImgUrl || '', 140)} alt=""/>
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                    <span>
                      <i className="sprite_icon erji"></i>
                        {getCount(info.playCount)}
                    </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                {info.name}
            </div>
            {/*单行？*/}
            {/*<div className="cover-bottom text-nowrap">*/}
            {/*    {info.name}*/}
            {/*</div>*/}
            {/*<div className="cover-source">*/}
            {/*    by {info.copywriter || info.creator.nickname}*/}
            {/*</div>*/}
        </ThemeCoverWrapper>
    )
})

export default TUSongsCover
