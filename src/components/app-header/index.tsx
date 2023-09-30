import {memo} from "react";
import {HeaderLeft, HeaderRight, HeaderWrapper} from "@cpns/app-header/style.ts";
import {headerLinks} from "@/common/local-data.ts";
import {NavLink} from "react-router-dom";
import {ILocalRelation} from "@/common/type.ts";

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
                <HeaderRight>right</HeaderRight>
                {/*<button style={buttonCss}*/}
                {/*        onClick={() => router('/')}>discover*/}
                {/*</button>*/}
                {/*<button style={buttonCss}*/}
                {/*        onClick={() => router('/friend')}>friend*/}
                {/*</button>*/}
                {/*<button style={buttonCss}*/}
                {/*        onClick={() => router('/mine')}>mine*/}
                {/*</button>*/}

                {/*<NavLink style={{padding: '4px'}} to="/">discover</NavLink>*/}
                {/*<NavLink style={{padding: '4px'}} to="/friend">friend</NavLink>*/}
                {/*<NavLink style={{padding: '4px'}} to="/mine">mine</NavLink>*/}</div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default TuAppHeader
