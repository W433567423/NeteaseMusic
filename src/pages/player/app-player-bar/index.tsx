/**
 * DONE
 * @description: 底部播放bar
 * @author: tutu
 * @time: 2023/10/9 15:53
 */
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {Control, Operator, PlayBarWrapper, PlayInfo} from "./style.ts";
import {NavLink} from "react-router-dom";
import {message, Slider} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import {
    changeCurrentLyricIndexAction,
    changePlaySequenceAction,
    changePlaySongAction,
    getSongDetailAction
} from "@/pages/player/store/actionCreators.ts";
import {ILyricsType, ISongType} from "@/pages/player/app-player-bar/type.ts";
import {getPlayUrl} from "@/utils/format.ts";
import {SONG_ID_TEST} from "@/common/constants.ts";

const TUAppPlayerBar = memo(() => {

    // props and state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    // redux hooks
    const {
        currentSong,
        currentLyrics,
        currentLyricIndex,
        playList,
        playSequence
    }: {
        currentSong: ISongType,
        currentLyrics: ILyricsType[],
        currentLyricIndex: number,
        playList: ISongType[],
        playSequence: number
    } = useSelector((state: any) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        currentLyrics: state.getIn(["player", "currentLyrics"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        playList: state.getIn(["player", "playList"]),
        playSequence: state.getIn(["player", "playSequence"])
    }), shallowEqual);
    const dispatch = useDispatch();

    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        // 测试歌曲
        dispatch(getSongDetailAction(SONG_ID_TEST) as any);
    }, [dispatch]);

    useEffect(() => {
        (audioRef.current as HTMLAudioElement).src = getPlayUrl(currentSong.id);
        // (audioRef.current as HTMLAudioElement).play().then(() => {
        //     setIsPlaying(true);
        // }).catch(() => {
        //     message.destroy()
        //     message.error('该音频需要会员才可以播放').then();
        //     setIsPlaying(false);
        // });
        setDuration(currentSong.dt);
    }, [currentSong]);

    // 播放/暂停函数
    const play = useCallback(() => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => {
            message.destroy()
            message.error('该音频需要会员才可以播放').then();
            setIsPlaying(false);
        });
    }, [isPlaying]);

    // 播放时间更新
    const timeUpdate = (e: any) => {
        const currentTime = e.target.currentTime;
        if (!isChanging) {
            setCurrentTime(currentTime);
            setProgress((currentTime * 1000) / duration * 100);
        }

        const lrcLength = currentLyrics.length;
        let i = 0;
        for (; i < lrcLength; i++) {
            const lrcTime = currentLyrics[i].time;
            if (currentTime * 1000 < lrcTime) {
                break
            }
        }
        const finalIndex = i - 1;
        if (finalIndex !== currentLyricIndex) {
            dispatch(changeCurrentLyricIndexAction(finalIndex));
            message.open({
                content: currentLyrics[finalIndex].content,
                key: "lyric",
                duration: 0,
                className: 'lyric-message',
            }).then()
        }
    }

    // 播放结束
    const timeEnded = () => {
        if (playSequence === 2 || playList.length === 1) {
            (audioRef.current as HTMLAudioElement).currentTime = 0;
            (audioRef.current as HTMLAudioElement).play().then();
        } else {
            dispatch(changePlaySongAction(1) as any);
        }
    }

    const sliderChange = useCallback((value: number) => {
        setProgress(value);
        const time = value / 100.0 * duration / 1000;
        setCurrentTime(time);
        setIsChanging(true);
    }, [duration])

    const sliderAfterChange = useCallback((value: number) => {
        const time = value / 100.0 * duration / 1000;
        (audioRef.current as HTMLAudioElement).currentTime = time;
        setCurrentTime(time);
        setIsChanging(false);

        if (!isPlaying) {
            play();
        }
    }, [duration, isPlaying, play]);

    return (
        <PlayBarWrapper className="sprite_play_bar">
            <div className="content wrap-v2">
                {/*左侧播放控件*/}
                <Control $isPlaying={isPlaying}>
                    <button className="sprite_play_bar btn prev"
                            onClick={() => dispatch(changePlaySongAction(-1) as any)}></button>
                    <button className="sprite_play_bar btn play" onClick={() => play()}></button>
                    <button className="sprite_play_bar btn next"
                            onClick={() => dispatch(changePlaySongAction(1) as any)}></button>
                </Control>
                {/*进度条控件*/}
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img
                                src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
                                alt=""/>
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <span className="singer-name">{currentSong.ar[0].name}</span>
                        </div>
                        <div className="progress">
                            <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange}/>
                            <div className="time">
                                <span className="now-time">{dayjs(currentTime * 1000).format('mm:ss')}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{dayjs(duration).format('mm:ss')}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                {/*右侧调试*/}
                <Operator $sequence={playSequence}>
                    <div className="left">
                        <button className="sprite_play_bar btn favor"></button>
                        <button className="sprite_play_bar btn share"></button>
                    </div>
                    <div className="right sprite_play_bar">
                        <button className="sprite_play_bar btn volume"></button>
                        <button className="sprite_play_bar btn loop"
                                onClick={() => dispatch(changePlaySequenceAction(playSequence + 1))}></button>
                        <button className="sprite_play_bar btn playlist"
                                onClick={() => setShowPanel(!showPanel)}>
                            {playList.length}
                        </button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded}/>
            {/*{showPanel && <TUAppPlayPanel/>}*/}
        </PlayBarWrapper>
    )
})

export default TUAppPlayerBar
