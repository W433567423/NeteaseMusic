/**
 * TODO
 * @description: 默认组件
 * @author: tutu
 * @time: 2023/10/14 11:52
 */
import {memo} from "react";
import {HeaderLeft, HeaderRight, HeaderWrapper} from "./style.ts";
import {shallowEqual, useSelector} from "react-redux";

const TUPlayHeader = memo(() => {
    const {playList, currentSong} = useSelector((state: any) => ({
        playList: state.getIn(["player", "playList"]),
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual);

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h3>播放列表({playList.length})</h3>
                <div className="operator">
                    <button>
                        <i className="sprite_playlist icon favor"></i>
                        收藏全部
                    </button>
                    <button>
                        <i className="sprite_playlist icon remove"></i>
                        清除
                    </button>
                </div>
            </HeaderLeft>
            <HeaderRight>
                {currentSong.name}
            </HeaderRight>
        </HeaderWrapper>
    )
})

export default TUPlayHeader

