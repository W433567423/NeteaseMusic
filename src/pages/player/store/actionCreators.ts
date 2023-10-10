import * as actionTypes from './constants';

import {getLyric, getSimiPlaylist, getSimiSong, getSongDetail} from '@/services/player';
import {parseLyric} from '@/utils/lrc-parse';

// 改变当前歌曲
const changeCurrentSongAction = (song: any) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    song
});

// 下一首
const changeCurrentSongIndexAction = (index: number) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
});

// 播放/暂停
const changePlayListAction = (playList: any) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: playList
})

// 改变歌词
const changeLyricsAction = (lyrics: any) => ({
    type: actionTypes.CHANGE_LYRICS,
    lyrics
})

// 改变被包含歌单列表
const changeSimiPlaylistAction = (res: any) => ({
    type: actionTypes.CHANGE_SIMI_PLAYLIST,
    simiPlaylist: res.playlists
})

// 改变相似歌曲列表
const changeSimiSongsAction = (res: any) => ({
    type: actionTypes.CHANGE_SIMI_SONGS,
    simiSongs: res.songs
})


// 改变redux中的当前歌词索引
export const changeCurrentLyricIndexAction = (index: number) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
})

// 改变redux中的播放顺序
export const changePlaySequenceAction = (currentSequence: any) => {
    if (currentSequence === 3) currentSequence = 0;
    return {
        type: actionTypes.CHANGE_PLAY_SEQUENCE,
        sequence: currentSequence
    }
}

// 改变redux中的播放歌曲
export const changePlaySongAction = (tag: number) => {
    return (dispatch: any, getState: any) => {
        // 1.获取当前的index
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
        const playSequence = getState().getIn(["player", "playSequence"]);
        const playList = getState().getIn(["player", "playList"]);

        // 2.判断当前播放列表
        switch (playSequence) {
            case 1:
                currentSongIndex = Math.floor(Math.random() * playList.length);
                break;
            default:
                currentSongIndex += tag;
                if (currentSongIndex === playList.length) currentSongIndex = 0;
                if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
        }

        // 3.处理修改数据
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(changeCurrentSongAction(currentSong));

        // 获取当前的歌词,并且解析
        getLyric(currentSong.id).then((res: any) => {
            const lrcString = res.lrc.lyric;
            const lyrics = parseLyric(lrcString);
            dispatch(changeLyricsAction(lyrics));
        });
    }
}

// 获取并修改redux中的歌曲详情
export const getSongDetailAction = (ids: number) => {
    return (dispatch: any, getState: any) => {
        // 1.判断是否歌曲存在playList中
        const playList = getState().getIn(["player", "playList"]);

        const songIndex = playList.findIndex((song: any) => song.id === ids);
        if (songIndex !== -1) { // 找到数据
            const currentSong = playList[songIndex];
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeCurrentSongAction(currentSong));
        } else { // 未找到数据
            getSongDetail(ids).then((res: any) => {
                const song = res.songs && res.songs[0];
                if (!song) return;
                // 1.添加到playList中
                const newPlayList = [...playList];
                newPlayList.push(song);
                dispatch(changePlayListAction(newPlayList));
                // 2.改变当前index
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));
            });
        }

        // 获取当前的歌词,并且解析
        getLyric(ids).then((res: any) => {
            const lrcString = res.lrc.lyric;
            const lyrics = parseLyric(lrcString);
            dispatch(changeLyricsAction(lyrics));
        });
    }
}

// 获取并修改redux中相似歌单列表
export const getSimiPlaylistAction = (timestamp?: number) => {
    return (dispatch: any, getState: any) => {
        const id = getState().getIn(["player", "currentSong"]).id;
        if (!id) return;

        getSimiPlaylist(id, timestamp).then(res => {
            dispatch(changeSimiPlaylistAction(res));
        })
    }
}

// 获取并修改redux中相似歌曲列表
export const getSimiSongAction = () => {
    return (dispatch: any, getState: any
    ) => {
        const id = getState().getIn(["player", "currentSong"]).id;
        if (!id) return;

        getSimiSong(id).then(res => {
            dispatch(changeSimiSongsAction(res));
        })
    }
}
