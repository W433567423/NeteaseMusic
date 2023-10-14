/**
 * DONE
 * @description: 播放面板-歌词
 * @author: tutu
 * @time: 2023/10/14 12:31
 */
import {memo, useEffect, useRef} from "react";
import classNames from "classnames";
import {PanelWrapper} from "./style.ts";
import {shallowEqual, useSelector} from "react-redux";
import {ILyricsType} from "@/pages/player/app-player-bar/type.ts";
import {scrollTo} from "@/utils/ui-helper";

const TULyricPanel = memo(() => {
    const {currentLyrics, currentLyricIndex}: {
        currentLyrics: ILyricsType[],
        currentLyricIndex: number
    } = useSelector((state: any) => ({
        currentLyrics: state.getIn(["player", "currentLyrics"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);

    // other hooks
    const panelRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
        scrollTo(panelRef.current as HTMLDivElement, (currentLyricIndex - 3) * 32, 300)
    }, [currentLyricIndex]);
    return (
        <PanelWrapper ref={panelRef}>
            <div className="lrc-content">
                {
                    currentLyrics.map((item, index) => {
                        return (
                            <div key={item.time}
                                 className={classNames("lrc-item", {"active": index === currentLyricIndex})}>
                                {item.content}
                            </div>
                        )
                    })
                }
            </div>
        </PanelWrapper>
    )
})

export default TULyricPanel
