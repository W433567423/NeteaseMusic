import {memo} from "react";
import {useNavigate} from "react-router-dom";

const TuAppHeader = memo(() => {
    const router = useNavigate()
    return (
        <div>
            <h2>TuAppHeader</h2>
            <button style={{
                cursor: 'pointer',
                padding: '6px',
                border: '1px solid #000',
                borderRadius: '4px',
                marginRight: '12px'
            }}
                    onClick={() => router('/')}>discover
            </button>
            <button style={{
                cursor: 'pointer',
                padding: '6px',
                border: '1px solid #000',
                borderRadius: '4px',
                marginRight: '12px'
            }}
                    onClick={() => router('/friend')}>friend
            </button>
            <button style={{
                cursor: 'pointer',
                padding: '6px',
                border: '1px solid #000',
                borderRadius: '4px',
                marginRight: '12px'
            }}
                    onClick={() => router('/mine')}>mine
            </button>
            {/*<NavLink style={{padding: '4px'}} to="/">discover</NavLink>*/}
            {/*<NavLink style={{padding: '4px'}} to="/friend">friend</NavLink>*/}
            {/*<NavLink style={{padding: '4px'}} to="/mine">mine</NavLink>*/}
        </div>
    )
})

export default TuAppHeader
