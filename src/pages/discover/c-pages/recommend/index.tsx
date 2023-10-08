import {memo} from "react";
import TUTopBanner from "@/pages/discover/c-pages/recommend/c-cpns/top-banner";
import {RecommendWraper} from "@/pages/discover/c-pages/recommend/style.ts";

const TURecommend = memo(() => {
    return (
        <RecommendWraper>
            <TUTopBanner/>
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
