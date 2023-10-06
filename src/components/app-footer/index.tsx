import {Fragment, memo} from "react";
import {AppFooterWrapper, FooterLeft, FooterRight} from "@cpns/app-footer/style.ts";
import {footerImages, footerLinks} from "@/common/local-data.ts";

const TuAppFooter = memo(() => {
    return (
        <AppFooterWrapper>
            <div className="wrap-v2 content">
                <FooterLeft className="left">
                    <div className="link">
                        {footerLinks.map(e => {
                            return (
                                <Fragment key={e.title}>
                                    <a href={e.link} target="_blank" rel="noopener noreferrer">{e.title}</a>
                                    <span className="line">|</span>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="copyright">
                        <span>网易公司版权所有&copy;1997-2020</span>
                        <span>杭州乐读科技有限公司运营:
                        <a rel="noopener noreferrer" target="_blank"
                           href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
                        </span>
                    </div>
                    <div className="report">
                        <span>违法和不良信息举报电话: 0571-89853516</span>
                        <span>举报邮箱:
                        <a href="mailto:ncm5990@163.com" target="_blank"
                           rel=" noreferrer noopener">ncm5990@163.com</a></span>
                    </div>
                    <div className="info">
                        <span>粤B2-20090191-18</span>
                        <a href="http://www.beian.miit.gov.cn/publish/query/indedxFirst.action"
                           rel="noreferrer noopener" target="_blank">工业和信息化部备案管理系统网站</a>
                    </div>
                </FooterLeft>

                <FooterRight>
                    {
                        footerImages.map(e => {
                            return (
                                <li className="item" key={e.link}>
                                    <a href={e.link} className="link" rel=" noopener noreferrer" target="_blank"></a>
                                    <span className="title"></span>
                                </li>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </AppFooterWrapper>
    )
})

export default TuAppFooter
