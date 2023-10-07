import {memo} from "react";
import {DiscoverWrapper, TopMenu} from "@/pages/discover/style.ts";
import {discoverMenu} from "@/common/local-data.ts";
import {NavLink, Outlet} from "react-router-dom";


const TuDiscover = memo(() => {
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            );
                        })
                    }
                </TopMenu>
            </div>
            {/*子路由对应位置*/}
            <Outlet/>
        </DiscoverWrapper>
    )
})

export default TuDiscover
