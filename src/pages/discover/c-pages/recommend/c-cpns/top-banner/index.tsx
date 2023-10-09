/**
 * DONE
 * @description: discover页面-轮播图组件
 * @author: tutu
 * @time: 2023/10/8 16:46
 */
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {BannerControl, BannerLeft, BannerRight, BannerWrapper} from "./style.ts";
import {useDispatch, useSelector} from "react-redux";
import {getBannerAction} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";
import {Carousel} from "antd";
import {ITopBannerType} from "./type.ts";
import {CarouselRef} from "antd/es/carousel";

const TUTopBanner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // redux hooks
    const {topBanners}: {
        topBanners: ITopBannerType[]
    } = useSelector((state: any) => ({topBanners: state.getIn(['recommend', 'topBanners'])}))
    const dispatch = useDispatch()

    useEffect(() => {
        // 获取轮播图数据
        dispatch(getBannerAction() as any)
    }, [dispatch]);

    // 轮播图改变之前修改轮播图当前索引
    const bannerChange = useCallback((from: number) => {
        setTimeout(() => {
            setCurrentIndex(from);
        }, 0);
    }, []);
    const bannerRef = useRef<CarouselRef>(null);
    // 轮播图的模糊背景
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper $bgImg={bgImage}>
            <div className="banner wrap-v2">
                {/*轮播图*/}
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>

                {/*跳转到下载页面*/}
                <BannerRight></BannerRight>

                {/*轮播图的左右 按钮控件*/}
                <BannerControl>
                    <button className="btn left" onClick={() => bannerRef.current?.prev()}></button>
                    <button className="btn right" onClick={() => bannerRef.current?.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TUTopBanner
