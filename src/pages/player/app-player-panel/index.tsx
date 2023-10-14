/**
 * DONE
 * @description: 播放面板
 * @author: tutu
 * @time: 2023/10/14 11:47
 */
import {memo} from "react";
import {PanelWrapper} from "@/pages/player/app-player-panel/style.ts";
import TUPlayHeader from "./c-cpns/play-header";
import TUPlayList from "./c-cpns/play-list";
import TULyricPanel from "@/pages/player/app-player-panel/c-cpns/lyric-panel";

const TUAppPlayList = memo(() => {
    return (
        <PanelWrapper>
            <TUPlayHeader/>
            <div className="main">
                <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
                     alt=""/>
                <TUPlayList/>
                <TULyricPanel/>
            </div>
        </PanelWrapper>
    )
})

export default TUAppPlayList
