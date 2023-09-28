import {memo} from "react";
import {NavLink} from "react-router-dom";

const TuAppHeader = memo(() => {
    return (
        <div>
            TuAppHeader
            <hr/>
            <NavLink style={{padding: '4px'}} to="/">discover</NavLink>
            <NavLink style={{padding: '4px'}} to="/friend">friend</NavLink>
            <NavLink style={{padding: '4px'}} to="/mine">mine</NavLink>
        </div>
    )
})

export default TuAppHeader
