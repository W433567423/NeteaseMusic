/**
 * TODO
 * @description: discover页面热门推荐
 * @author: tutu
 * @time: 2023/10/8 18:56
 */
import {memo, useCallback, useEffect} from "react";
import {HotRecommendWrapper} from "@/pages/discover/c-pages/recommend/c-cpns/hot-recommend/style.ts";
import TUThemeHeaderRCM from "@cpn/theme-header-rcm";
import {useNavigate} from "react-router-dom";
import {getRecommend} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";
import {useDispatch, useSelector} from "react-redux";
import {IHotRecommendType} from "@/services/type.ts";
import {HOT_RECOMMEND_LIMIT} from "@/common/constants.ts";

const TUHotRecommend = memo(() => {
    const navigate = useNavigate()
    const keywordClick = useCallback((keyword: string) => {
        navigate(`/discover/songs?${keyword}`);
    }, [navigate]);
// redux hooks
    const {hotRecommends}: {
        hotRecommends: IHotRecommendType[]
    } = useSelector((state: any) => ({hotRecommends: state.getIn(['recommend', 'hotRecommends'])}))
    const dispatch = useDispatch()

    console.log(hotRecommends)
    useEffect(() => {
        // 获取轮播图数据
        dispatch(getRecommend(HOT_RECOMMEND_LIMIT) as any)
    }, [dispatch]);
    return (
        <HotRecommendWrapper>
            <TUThemeHeaderRCM title='热门推荐' moreLink="/discover/songs"
                              keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                              keywordClick={keywordClick}/>
            <div className="recommend-list">
                {hotRecommends.map(item =>
                    (<div><p>{item.name}</p></div>))}
            </div>
        </HotRecommendWrapper>
    )
})

export default TUHotRecommend
