/**
 * DONE
 * @description: 播放页面歌曲
 * @author: tutu
 * @time: 2023/10/10 10:23
 */
import {memo, useEffect} from "react";
import {PlayerSongsWrapper} from "./style.ts";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getSizeImage} from "@/utils/format.ts";
import {ISimiPlayList} from "@/pages/player/c-cpns/player-songs/type.ts";
import dayjs from "dayjs";
import {getSimiPlaylistAction} from "@/pages/player/store/actionCreators.ts";
import TUThemeHeaderPlayer from "@cpn/theme-header-player";

const TUPlayerSongs = memo(() => {
    // redux hooks
    const {simiPlaylist}: { simiPlaylist: ISimiPlayList[] } = useSelector((state: any) => ({
        simiPlaylist: state.getIn(["player", "simiPlaylist"])
    }), shallowEqual);
    const dispatch = useDispatch();
    console.log(simiPlaylist)

    // other hooks
    useEffect(() => {
        dispatch(getSimiPlaylistAction(dayjs().unix()) as any)
        // console.log()
    }, [dispatch]);
    return (
        <PlayerSongsWrapper>
            <TUThemeHeaderPlayer title="包含这首歌的歌单"/>
            <div className="songs">
                {simiPlaylist.map((item) => {
                    return (
                        <div className="song-item" key={item.id}>
                            <a className="image" href="/#">
                                <img src={getSizeImage(item.coverImgUrl, 50)} alt=""/>
                            </a>
                            <div className="info text-nowrap">
                                <a href="#/" className="name">{item.name}</a>
                                <div className="auchor">
                                    by
                                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </PlayerSongsWrapper>
    )
})

export default TUPlayerSongs
