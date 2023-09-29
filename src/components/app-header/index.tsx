import {memo} from "react";
import {HeaderLeft, HeaderRight, HeaderWrapper} from "@cpns/app-header/style.ts";

const TuAppHeader = memo(() => {
    // const router = useNavigate()
    // const buttonCss = {
    //     cursor: 'pointer',
    //     padding: '6px',
    //     border: '1px solid #000',
    //     borderRadius: '4px',
    //     marginRight: '12px'
    // }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className='logo sprite_01'></a>
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
