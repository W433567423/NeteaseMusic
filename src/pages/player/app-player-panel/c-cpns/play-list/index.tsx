/**
 * DONE
 * @description: 播放面板列表
 * @author: tutu
 * @time: 2023/10/14 12:25
 */
import {memo} from "react";
import {PlayListWrapper} from "./style.ts";
import {shallowEqual, useSelector} from "react-redux";
import {ISongType} from "@/pages/player/app-player-bar/type.ts";
import classNames from 'classnames';
import dayjs from "dayjs";

const TUPlayList = memo(() => {
    const {playList, currentSongIndex}: {
        playList: ISongType[],
        currentSongIndex: number
    } = useSelector((state: any) => ({
        playList: state.getIn(["player", "playList"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"])
    }), shallowEqual);
    return (
        <PlayListWrapper>
            {
                playList.map((item, index) => {
                    return (
                        <div key={item.id}
                             className={classNames("play-item", {"active": currentSongIndex === index})}>
                            <div className="left">{item.name}</div>
                            <div className="right">
                                <span className="singer">{item.ar[0].name}</span>
                                <span className="duration">{dayjs(item.dt).format('mm:ss')}</span>
                                <span className="sprite_playlist link"></span>
                            </div>
                        </div>
                    )
                })
            }
        </PlayListWrapper>
    )
})

export default TUPlayList
