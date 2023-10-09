/**
 * DONE
 * @description: discover-新碟上映组件
 * @author: tutu
 * @time: 2023/10/8 19:42
 */
import {memo, useEffect, useRef} from 'react';
import TUThemeHeaderRCM from '@cpn/theme-header-rcm';
import {AlbumWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getAlbum} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";
import {Carousel} from "antd";
import {CarouselRef} from "antd/es/carousel";
import {INewAlbumType} from "./type.ts";
import TUAlbumCover from "@cpn/album-cover";
import {NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PRE_NUM} from "@/common/constants.ts";

const TUNewAlbum = memo(() => {
    // redux
    const {newAlbum}: { newAlbum: INewAlbumType[] } = useSelector((state: any) => ({
        newAlbum: state.getIn(["recommend", "newAlbum"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // hooks
    const carouselRef = useRef<CarouselRef>(null);
    useEffect(() => {
        dispatch(getAlbum(NEW_ALBUM_PRE_NUM * NEW_ALBUM_PAGE_NUM) as any);
    }, [dispatch]);

    return (
        <AlbumWrapper>
            <TUThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
            <div className="content">
                <div className="arrow arrow-left sprite_02"
                     onClick={() => carouselRef.current?.prev()}></div>
                <div className="album">
                    <Carousel ref={carouselRef} dots={false}>
                        {
                            [...Array(NEW_ALBUM_PAGE_NUM).keys()].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbum.slice(item * NEW_ALBUM_PRE_NUM, (item + 1) * NEW_ALBUM_PRE_NUM).map(item => {
                                                return (
                                                    <TUAlbumCover key={item.id} info={item}/>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02"
                     onClick={() => carouselRef.current?.next()}></div>
            </div>
        </AlbumWrapper>
    )
})
export default TUNewAlbum
