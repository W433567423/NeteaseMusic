import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBannerAction} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";

const TURecommend = memo(() => {
    // const {getBanners, topBanners} = props
    const {topBanners} = useSelector((state: any) => ({topBanners: state.recommend}))
    console.log(topBanners)
    const dispatch = useDispatch()
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(getBannerAction())
    }, [dispatch]);
    return (
        <>
            <h2>
                TURecommend:
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
