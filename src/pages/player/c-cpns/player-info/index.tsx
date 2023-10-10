/**
 * DONE
 * @description: 播放页面 信息
 * @author: tutu
 * @time: 2023/10/10 10:15
 */
import {memo, useState} from "react";
import {InfoLeft, InfoRight, InfoWrapper} from "./style.ts";
import {getSizeImage} from "@/utils/format.ts";
import {ILyricsType, ISongType} from "@/pages/player/app-player-bar/type.ts";
import {shallowEqual, useSelector} from "react-redux";
import TUSongOperationBar from "@cpn/song-operation-bar";

const TUPlayerInfo = memo(() => {
    // props and hooks
    const [isSpread, setIsSpread] = useState(false);

    // redux hooks
    const {
        currentSong,
        currentLyrics
    }: {
        currentSong: ISongType,
        currentLyrics: ILyricsType[]
    } = useSelector((state: any) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        currentLyrics: state.getIn(["player", "currentLyrics"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        playList: state.getIn(["player", "playList"]),
        playSequence: state.getIn(["player", "playSequence"])
    }), shallowEqual);

    // handle code
    const totalLyricCount = isSpread ? currentLyrics.length : 13;

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={getSizeImage(currentSong.al.picUrl, 130)} alt=""/>
                    <span className="cover image_cover"></span>
                </div>
                <div className="link">
                    <i className="sprite_icon2"></i>
                    <a href="#/">生成外联播放器</a>
                </div>
            </InfoLeft>
            <InfoRight $spread={isSpread}>
                <div className="header">
                    <i className="sprite_icon2"></i>
                    <h3 className="title">{currentSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{currentSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{currentSong.al.name}</a>
                </div>

                <TUSongOperationBar favorTitle="收藏"
                                    shareTitle="分享"
                                    downloadTitle="下载"
                                    commentTitle="(167366)"/>

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            currentLyrics.slice(0, totalLyricCount).map((item) => {
                                return <p key={item.time} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control"
                            onClick={() => setIsSpread(!isSpread)}>
                        {isSpread ? "收起" : "展开"}
                        <i className="sprite_icon2"></i>
                    </button>
                </div>
            </InfoRight>
        </InfoWrapper>
    )
})

export default TUPlayerInfo
