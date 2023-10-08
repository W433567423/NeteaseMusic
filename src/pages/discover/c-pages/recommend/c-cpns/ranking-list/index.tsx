/**
 * TODO
 * @description: discover页面-榜单
 * @author: tutu
 * @time: 2023/10/8 19:45
 */
import {memo} from "react";
import HYThemeHeaderRCM from "@cpn/theme-header-rcm";
import {RankingWrapper} from "@/pages/discover/c-pages/recommend/c-cpns/ranking-list/style.ts";

const TURankingList = memo(() => {
    return (
        <RankingWrapper>
            <HYThemeHeaderRCM title="榜单" moreLink="/discover/album"/>
        </RankingWrapper>
    )
})

export default TURankingList
