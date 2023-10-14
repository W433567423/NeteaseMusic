import {memo} from "react";
import {MineWrapper} from "@/pages/mine/style.ts";

const TuMine = memo(() => {
    return (
        <MineWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a className="login" href="/#">立即登录</a>
                </div>
            </div>
        </MineWrapper>
    )
})

export default TuMine
