import {memo} from "react";
import {DiscoverWrapper, TopMenu} from "@/pages/discover/style.ts";
import {discoverMenu} from "@/common/local-data.ts";
import {NavLink} from "react-router-dom";

interface IPropsType {
    route: any
}

const TuDiscover = memo((props: IPropsType) => {
    const {route} = props;
    console.log('aaaaaa', route)
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
            {/*{(route.routes)}*/}
        </DiscoverWrapper>
    )
})

export default TuDiscover
