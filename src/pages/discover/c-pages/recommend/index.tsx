import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBannerAction} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";

const TURecommend = memo(() => {
    // redux hooks
    const {topBanners} = useSelector((state: any) => ({topBanners: state.getIn(['recommend', 'topBanners'])}))
    //getIn() === get().get()
    const dispatch = useDispatch()

    useEffect(() => {
        // DONE 去获取轮播图数据
        dispatch(getBannerAction() as any)
    }, [dispatch]);

    return (
        <>
            <h2>
                TURecommend:{topBanners.length}
            </h2>
        </>
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
