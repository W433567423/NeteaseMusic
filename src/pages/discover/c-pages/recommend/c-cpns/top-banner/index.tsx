/**
 * DONE
 * @description: discover页面-轮播图组件
 * @author: tutu
 * @time: 2023/10/8 16:46
 */
import {memo, useEffect} from "react";
import {BannerLeft, BannerRight, BannerWrapper} from "@/pages/discover/c-pages/recommend/c-cpns/top-banner/style.ts";
import {useDispatch} from "react-redux";
import {getBannerAction} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";

const TUTopBanner = memo(() => {
    // redux hooks
    // const {topBanners} = useSelector((state: any) => ({topBanners: state.getIn(['recommend', 'topBanners'])}))
    //getIn() === get().get()
    const dispatch = useDispatch()

    useEffect(() => {
        // DONE 去获取轮播图数据
        dispatch(getBannerAction() as any)
    }, [dispatch]);
    return (
        <BannerWrapper>
            <div className="banner wrap-v2">
                <BannerLeft></BannerLeft>
                <BannerRight></BannerRight>
            </div>
        </BannerWrapper>
    )
})

export default TUTopBanner
