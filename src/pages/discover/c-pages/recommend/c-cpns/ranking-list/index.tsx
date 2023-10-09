/**
 * DONE
 * @description: discover页面-榜单
 * @author: tutu
 * @time: 2023/10/8 19:45
 */
import {memo, useEffect} from "react";
import TUThemeHeaderRCM from "@cpn/theme-header-rcm";
import {RankingWrapper} from "./style.ts";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopData} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";
import TUTopRanking from "@cpn/top-ranking";
import {ITopListType} from "@/pages/discover/c-pages/recommend/c-cpns/ranking-list/type.ts";

const TURankingList = memo(() => { // redux
    const dispatch = useDispatch();
    const {topUpList, topNewList, topOriginList}: { topUpList: ITopListType, topNewList: ITopListType, topOriginList: ITopListType } = useSelector((state: any) => ({
        topUpList: state.getIn(["recommend", "topUpList"]),
        topNewList: state.getIn(["recommend", "topNewList"]),
        topOriginList: state.getIn(["recommend", "topOriginList"])
    }), shallowEqual);

    // hooks
    useEffect(() => {
        dispatch(getTopData(19723756) as any);
        dispatch(getTopData(3779629) as any);
        dispatch(getTopData(2884035) as any);
    }, [dispatch])

    return (
        <RankingWrapper>
            <TUThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
            <div className="tops">
                <TUTopRanking info={topUpList}/>
                <TUTopRanking info={topNewList}/>
                <TUTopRanking info={topOriginList}/>
            </div>
        </RankingWrapper>
    )
})

export default TURankingList
