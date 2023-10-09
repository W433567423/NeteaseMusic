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
import {getPlayUrl} from "@/utils/format.ts";
import dayjs from "dayjs";
import {getSongDetailAction} from "@/pages/player/store";
import {
    changeCurrentLyricIndexAction,
    changePlaySequenceAction,
    changePlaySongAction
} from "@/pages/player/store/actionCreators.ts";

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
    } = useSelector((state: any) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        currentLyrics: state.getIn(["player", "currentLyrics"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        playList: state.getIn(["player", "playList"]),
        playSequence: state.getIn(["player", "playSequence"])
    }), shallowEqual);

    console.log(currentSong,
        currentLyrics,
        currentLyricIndex,
        playList,
        playSequence)
    const dispatch = useDispatch();

    // other hooks
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        dispatch(getSongDetailAction(167876) as any);
    }, [dispatch]);

    useEffect(() => {
        (audioRef.current as HTMLAudioElement).src = getPlayUrl(currentSong.id);
        (audioRef.current as HTMLAudioElement).play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setIsPlaying(false);
        });
        setDuration(currentSong.dt);
    }, [currentSong]);

    // 其他业务
    const play = useCallback(() => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => {
            setIsPlaying(false);
        });
    }, [isPlaying]);

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
                <Control isPlaying={isPlaying}>
                    <button className="sprite_play_bar btn prev"
                            onClick={() => dispatch(changePlaySongAction(-1) as any)}></button>
                    <button className="sprite_play_bar btn play" onClick={() => play()}></button>
                    <button className="sprite_play_bar btn next"
                            onClick={() => dispatch(changePlaySongAction(1) as any)}></button>
                </Control>
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
                                <span className="now-time">{dayjs(currentTime * 1000).format('mm/ss')}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{dayjs(duration).format('mm/ss')}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={playSequence}>
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
