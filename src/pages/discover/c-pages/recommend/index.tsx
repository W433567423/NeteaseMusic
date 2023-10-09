import {memo} from "react";
import TUTopBanner from "@/pages/discover/c-pages/recommend/c-cpns/top-banner";
import {Content, RecommendLeft, RecommendRight, RecommendWraper} from "./style.ts";
import TUHotRecommend from "@/pages/discover/c-pages/recommend/c-cpns/hot-recommend";
import TUNewAlbum from "@/pages/discover/c-pages/recommend/c-cpns/new-album";
import TURankingList from "@/pages/discover/c-pages/recommend/c-cpns/ranking-list";
import TUUserLogin from "@/pages/discover/c-pages/recommend/c-cpns/user-login";
import TUSettleSinger from "@/pages/discover/c-pages/recommend/c-cpns/settle-singer";
import TUHotRadio from "@/pages/discover/c-pages/recommend/c-cpns/hot-redio";

const TURecommend = memo(() => {
    return (
        <RecommendWraper>
            <TUTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <TUHotRecommend/>
                    <TUNewAlbum/>
                    <TURankingList/>
                </RecommendLeft>
                <RecommendRight>
                    <TUUserLogin/>
                    <TUSettleSinger/>
                    <TUHotRadio/>
                </RecommendRight>
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
