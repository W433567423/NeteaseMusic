/**
 * DONE
 * @description: 相似歌曲
 * @author: tutu
 * @time: 2023/10/10 11:07
 */
import {memo, useEffect} from "react";
import {RelevantWrapper} from "./style.ts";
import TUThemeHeaderPlayer from "@cpn/theme-header-player";
import {getSimiSongAction} from "@/pages/player/store/actionCreators.ts";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ISimiSongsType} from "@/pages/player/c-cpns/player-ralevant/type.ts";

const TUPlayerRelevant = memo(() => {
    const {simiSongs}: { simiSongs: ISimiSongsType[] } = useSelector((state: any) => ({
        simiSongs: state.getIn(["player", "simiSongs"])
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSimiSongAction() as any);
    }, [dispatch]);

    return (
        <RelevantWrapper>
            <TUThemeHeaderPlayer title="相似歌曲"/>
            <div className="songs">
                {
                    simiSongs.map((item) => {
                        return (
                            <div className="song-item" key={item.id}>
                                <div className="info">
                                    <div className="title">
                                        <a href="#/">{item.name}</a>
                                    </div>
                                    <div className="artist">
                                        <a href="#/">{item.artists[0].name}</a>
                                    </div>
                                </div>
                                <div className="operate">
                                    <button className="item sprite_icon3 play"></button>
                                    <button className="item sprite_icon3 add"></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </RelevantWrapper>
    )
})

export default TUPlayerRelevant
