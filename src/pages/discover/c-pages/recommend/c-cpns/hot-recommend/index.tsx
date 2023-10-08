/**
 * TODO
 * @description: discover页面热门推荐
 * @author: tutu
 * @time: 2023/10/8 18:56
 */
import {memo, useCallback} from "react";
import {HotRecommendWrapper} from "@/pages/discover/c-pages/recommend/c-cpns/hot-recommend/style.ts";
import TUThemeHeaderRCM from "@cpn/theme-header-rcm";
import {useNavigate} from "react-router-dom";

const TUHotRecommend = memo(() => {
    const navigate = useNavigate()
    const keywordClick = useCallback((keyword: string) => {
        navigate(`/discover/songs?${keyword}`);
    }, [navigate]);
    return (
        <HotRecommendWrapper>
            <TUThemeHeaderRCM title='热门推荐' moreLink="/discover/songs"
                              keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                              keywordClick={keywordClick}/>
        </HotRecommendWrapper>
    )
})

export default TUHotRecommend
