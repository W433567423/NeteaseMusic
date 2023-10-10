import TuDiscover from "@/pages/discover";
import TuFriend from "@/pages/friend";
import TuMine from "@/pages/mine";
import {Navigate, useRoutes} from "react-router-dom";
import TURecommend from "@/pages/discover/c-pages/recommend";
import TURanking from "@/pages/discover/c-pages/ranking";
import TUSongs from "@/pages/discover/c-pages/songs";
import TUDjRadio from "@/pages/discover/c-pages/djradio";
import TUArtist from "@/pages/discover/c-pages/artist";
import TUAlbum from "@/pages/discover/c-pages/album";
import TUPlayer from '@/pages/player'

const TuRouter = () => {
    return useRoutes(
        [{
            path: '/',
            element: <Navigate to='/discover'/>
        }, {
            path: '/discover',
            element: <TuDiscover/>,
            children: [{
                path: "/discover",
                element: <Navigate to='/discover/recommend'/>
            }, {
                path: '/discover/recommend',
                element: <TURecommend/>
            }, {
                path: '/discover/ranking',
                element: <TURanking/>
            }, {
                path: '/discover/songs',
                element: <TUSongs/>
            }, {
                path: '/discover/djRadio',
                element: <TUDjRadio/>
            }, {
                path: '/discover/artist',
                element: <TUArtist/>
            }, {
                path: '/discover/album',
                element: <TUAlbum/>
            }, {
                path: '/discover/player',
                element: <TUPlayer/>
            }]
        }, {
            path: '/mine',
            element: <TuMine/>
        }, {
            path: '/friend',
            element: <TuFriend/>
        }
        ]
    )
}


export default TuRouter
