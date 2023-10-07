import {memo} from "react";
import {FriendWrapper} from "@/pages/friend/style.ts";

const TuFriend = memo(() => {
    return (
        <FriendWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a className="login" href="/#">立即登录</a>
                </div>
            </div>
        </FriendWrapper>
    )
})

export default TuFriend
