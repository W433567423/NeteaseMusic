import {memo} from 'react';
import HYThemeHeaderRCM from '@cpn/theme-header-rcm';
// import HYAlbumCover from "@/components/album-cover";
import {AlbumWrapper} from "./style";

const TUNewAlbum = memo(() => {
    // // redux
    // const state = useSelector(state => ({
    //     newAlbum: state.getIn(["recommend", "newAlbum"])
    // }), shallowEqual);
    // const dispatch = useDispatch();
    //
    // // hooks
    // const carouselRef = useRef();
    // useEffect(() => {
    //     dispatch(getAlbum());
    // }, [dispatch]);

    return (
        <AlbumWrapper>
            <HYThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
            {/*<div className="content">*/}
            {/*    <div className="arrow arrow-left sprite_02"*/}
            {/*         onClick={e => carouselRef.current.prev()}></div>*/}
            {/*    <div className="album">*/}
            {/*        <Carousel ref={carouselRef} dots={false}>*/}
            {/*            {*/}
            {/*                [0, 1].map(item => {*/}
            {/*                    return (*/}
            {/*                        <div key={item} className="page">*/}
            {/*                            {*/}
            {/*                                state.newAlbum.slice(item * 5, (item + 1) * 5).map(item => {*/}
            {/*                                    return (*/}
            {/*                                        <HYAlbumCover key={item.id} info={item}/>*/}
            {/*                                    )*/}
            {/*                                })*/}
            {/*                            }*/}
            {/*                        </div>*/}
            {/*                    )*/}
            {/*                })*/}
            {/*            }*/}
            {/*        </Carousel>*/}
            {/*    </div>*/}
            {/*    <div className="arrow arrow-right sprite_02"*/}
            {/*         onClick={e => carouselRef.current.next()}></div>*/}
            {/*</div>*/}
        </AlbumWrapper>
    )
})
export default TUNewAlbum
