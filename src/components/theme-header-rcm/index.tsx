/**
 * DONE
 * @description: 通用头部
 * @author: tutu
 * @time: 2023/10/8 19:08
 */

import {memo} from 'react';
import {HeaderWrapper} from "./style";
import {Link} from "react-router-dom";

interface ITUThemeHeaderRCMType {
    keywords?: string[]
    title: string,
    moreLink: string
    keywordClick?: (a: string) => void
}

const TUThemeHeaderRCM = memo((props: ITUThemeHeaderRCMType) => {
    const {title, keywords, moreLink, keywordClick} = props;

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords?.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className="link"
                                          onClick={() => keywordClick && keywordClick(item)}>{item}</span>
                                    {index !== keywords?.length - 1 && <span className="divider">|</span>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <Link to={moreLink}>更多</Link>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})


export default TUThemeHeaderRCM;

