/**
 * DONE
 * @description: 用户登录模块
 * @author: tutu
 * @time: 2023/10/9 15:22
 */
import {memo} from "react";
import {UserLoginWrapper} from "./style.ts";

const TUUserLogin = memo(() => {
    return (
        <UserLoginWrapper className="sprite_02">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#/login" className="sprite_02">用户登录</a>
        </UserLoginWrapper>
    )
})

export default TUUserLogin
