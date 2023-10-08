import {memo} from "react";
import TUTopBanner from "@/pages/discover/c-pages/recommend/c-cpns/top-banner";
import {Content, RecommendLeft, RecommendRight, RecommendWraper} from "@/pages/discover/c-pages/recommend/style.ts";
import TUHotRecommend from "@/pages/discover/c-pages/recommend/c-cpns/hot-recommend";

const TURecommend = memo(() => {
    return (
        <RecommendWraper>
            <TUTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <TUHotRecommend></TUHotRecommend>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWraper>
    )
})

export default TURecommend
//
// const TURecommend = (props: any) => {
//     const {getBanners, topBanners} = props
//     useEffect(() => {
//         getBanners()
//     }, []);
//     return (
//         <>
//             <h2>
//                 TURecommend:{topBanners}</h2>
//         </>
//     )
// }
//
// const mapStateToProps = (state: any) => ({
//     topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = (dispatch: any) => ({
//     getBanners: () => dispatch(getBannerAction())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(TURecommend))
