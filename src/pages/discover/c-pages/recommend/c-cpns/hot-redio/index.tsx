/**
 * DONE
 * @description: 热门主播
 * @author: tutu
 * @time: 2023/10/9 15:42
 */
import {memo} from "react";
import {HotRadioWrapper} from "./style.ts";
import {hotRadios} from "@/common/local-data.ts";
import TUThemeHeaderSmall from "@cpn/theme-header-small";

const TUHotRadio = memo(() => {
    return (
        <HotRadioWrapper>
            <TUThemeHeaderSmall title="热门主播"/>
            <div className="radio-list">
                {
                    hotRadios.map((item) => {
                        return (
                            <div className="item" key={item.picUrl}>
                                <a href="#/todo" className="image">
                                    <img src={item.picUrl} alt=""/>
                                </a>
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="position text-nowrap">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})

export default TUHotRadio
