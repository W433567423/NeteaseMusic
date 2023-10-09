/**
 * TODO
 * @description: 入驻歌手
 * @author: tutu
 * @time: 2023/10/9 15:31
 */
import {memo, useEffect} from "react";
import {SetterSongerWrapper} from "./style.ts";
import {getSizeImage} from "@/utils/format.ts";
import TUThemeHeaderSmall from "@cpn/theme-header-small";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getSettleSingers} from "@/pages/discover/c-pages/recommend/store/actionCreators.ts";
import {ISettleSingType} from "@cpn/theme-header-small/type.ts";

const TUSettleSinger = memo(() => {
    // redux
    const dispatch = useDispatch();
    const {settleSings}: { settleSings: ISettleSingType[] } = useSelector((state: any) => ({
        settleSings: state.getIn(["recommend", "settleSings"])
    }), shallowEqual);

    // hooks
    useEffect(() => {
        dispatch(getSettleSingers() as any);
    }, [dispatch])
    return (
        <SetterSongerWrapper>
            <TUThemeHeaderSmall title="入驻歌手" more="查看全部>"/>
            <div className="singer-list">
                {
                    settleSings.map((item) => {
                        return (
                            <a href="#/singer" key={item.id} className="item">
                                <img src={getSizeImage(item.img1v1Url, 62)} alt=""/>
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="#/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    )
})

export default TUSettleSinger
