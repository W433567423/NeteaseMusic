/**
 * TODO
 * @description: 榜单组件
 * @author: tutu
 * @time: 2023/10/9 14:25
 */
import {memo} from "react";
import {TopRankingWrapper} from "@cpn/top-ranking/style.ts";
import {getSizeImage} from "@/utils/format.ts";
import {ITopListType} from "@/pages/discover/c-pages/recommend/c-cpns/ranking-list/type.ts";

interface IPropsType {
    info: ITopListType
}

const TUTopRanking = memo((props: IPropsType) => {
    const {info} = props;
    const {tracks = []} = info;

    // redux hooks
    // const dispatch = useDispatch();
    //
    // // other handle
    // const playMusic = (item) => {
    //     dispatch(getSongDetailAction(item.id));
    // }
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={getSizeImage(info.coverImgUrl, 300)} alt=""/>
                    <a href="#/todo" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    <a href="#/todo">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index: number) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <span className="name text-nowrap">{item.name}</span>
                                    <div className="operate">
                                        {/*<button className="btn sprite_02 play"*/}
                                        {/*        onClick={() => playMusic(item)}></button>*/}
                                        <button className="btn sprite_icon2 addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="#/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})

export default TUTopRanking
