/**
 * DONE
 * @description: 播放头
 * @author: tutu
 * @time: 2023/10/10 11:05
 */
import {memo} from "react";
import {HeaderWrapper} from "./style.ts";

interface IPropsType {
    title: string
}

const TUThemeHeaderPlayer = memo((props: IPropsType) => {
    const {title} = props
    return (
        <HeaderWrapper>
            <h3>{title}</h3>
        </HeaderWrapper>
    )
})

export default TUThemeHeaderPlayer
