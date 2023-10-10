/**
 * DONE
 * @description: 歌曲操作条
 * @author: tutu
 * @time: 2023/10/10 10:18
 */
import {memo} from "react";
import {OperationBarWrapper} from "@cpn/song-operation-bar/style.ts";

interface IPropsType {
    favorTitle: string
    shareTitle: string
    downloadTitle: string
    commentTitle: string
}

const TUSongOperationBar = memo((props: IPropsType) => {
    const {favorTitle, shareTitle, downloadTitle, commentTitle} = props;
    return (
        <OperationBarWrapper>
      <span className="play">
        <a href="#/todo" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="#/todo" className="add-icon sprite_button">+</a>
      </span>
            <a href="#/todo" className="item sprite_button">
                <i className="icon favor-icon sprite_button">{favorTitle}</i>
            </a>
            <a href="#/todo" className="item sprite_button">
                <i className="icon share-icon sprite_button">{shareTitle}</i>
            </a>
            <a href="#/todo" className="item sprite_button">
                <i className="icon download-icon sprite_button">{downloadTitle}</i>
            </a>
            <a href="#/todo" className="item sprite_button">
                <i className="icon comment-icon sprite_button">{commentTitle}</i>
            </a>
        </OperationBarWrapper>
    )
})

export default TUSongOperationBar
