import {memo, useEffect} from "react";
import {connect} from "react-redux";
import {getBannerAction} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";

const TURecommend = (props: any) => {
    const {getBanners, topBanners} = props
    useEffect(() => {
        getBanners()
    }, []);
    return (
        <>
            <h2>
                TURecommend:{topBanners}</h2>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    topBanners: state.recommend.topBanners
})
const mapDispatchToProps = (dispatch: any) => ({
    getBanners: () => dispatch(getBannerAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(TURecommend))
