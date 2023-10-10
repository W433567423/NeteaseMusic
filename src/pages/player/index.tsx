/**
 * DONE
 * @description: 默认组件
 * @author: tutu
 * @time: 2023/10/10 10:04
 */
import {memo} from "react";
import {PlayerLeft, PlayerRight, PlayerWrapper} from "./style.ts";
import TUPlayerInfo from "./c-cpns/player-info";
import TUPlayerComment from "./c-cpns/player-comment";
import TUPlayerSongs from "./c-cpns/player-songs";

const TUPlayer = memo(() => {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <TUPlayerInfo/>
                    <TUPlayerComment/>
                </PlayerLeft>
                <PlayerRight>
                    <TUPlayerSongs/>
                    {/*<TUPlayerRelevant/>*/}
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})

export default TUPlayer
