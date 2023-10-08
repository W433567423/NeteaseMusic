/**
 * TODO
 * @description: discover页面热门推荐
 * @author: tutu
 * @time: 2023/10/8 18:56
 */
import {memo} from "react";
import {HotRecommendWrapper} from "@/pages/discover/c-pages/recommend/c-cpns/hot-recommend/style.ts";
import TUThemeHeaderRCM from "@cpns/sheme-header-rcm";

const TUHotRecommend = memo(() => {
    return (
        <HotRecommendWrapper>
            <TUThemeHeaderRCM title='热门推荐' moreLink="" keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                              keywordClick={(a: string) => console.log(a)}/>
        </HotRecommendWrapper>
    )
})

export default TUHotRecommend
