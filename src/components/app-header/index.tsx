import {memo} from "react";
import {HeaderLeft, HeaderRight, HeaderWrapper} from "@cpns/app-header/style.ts";
import {headerLinks} from "@/common/local-data.ts";
import {NavLink} from "react-router-dom";
import {ILocalRelation} from "@/common/type.ts";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const TuAppHeader = memo(() => {
    const showSelectItem = (e: ILocalRelation, i: number) => {
        if (i < 3)
            return <NavLink to={e.link}><i className='sprite_01 icon'></i>{e.title}</NavLink>
        else
            return <a href={e.link}>{e.title}</a>
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className='logo sprite_01'></a>

                    <div className='select-list'>
                        {headerLinks.map((e, i) => {
                            return (<div key={e.title} className='select-item'>{showSelectItem(e, i)}</div>)
                        })}
                    </div>
                </HeaderLeft>

                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
                    <button className="center">创作者中心</button>
                    <button className="login">登录</button>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default TuAppHeader
