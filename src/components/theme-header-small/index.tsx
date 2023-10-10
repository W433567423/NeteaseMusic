/**
 * DONE
 * @description: 小头部组件
 * @author: tutu
 * @time: 2023/10/9 15:33
 */
import {memo} from "react";
import {HeaderWrapper} from "./style.ts";

interface IPropsType {
    title: string,
    more?: string
}

const TUThemeHeaderSmall = memo((props: IPropsType) => {
    const {title, more} = props;
    return (
        <HeaderWrapper>
            <h3>{title}</h3>
            <a href="#/todo">{more}</a>
        </HeaderWrapper>
    )
})

export default TUThemeHeaderSmall
