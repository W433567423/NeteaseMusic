import {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";

import TuDiscover from "@/pages/discover";
import TURecommend from "@/pages/discover/c-pages/recommend";

// 懒加载
const TuFriend = lazy(() => import( "@/pages/friend"))
const TuMine = lazy(() => import( "@/pages/mine"))
const TURanking = lazy(() => import( "@/pages/discover/c-pages/ranking"))
const TUSongs = lazy(() => import( "@/pages/discover/c-pages/songs"))
const TUDjRadio = lazy(() => import( "@/pages/discover/c-pages/djradio"))
const TUArtist = lazy(() => import( "@/pages/discover/c-pages/artist"))
const TUAlbum = lazy(() => import( "@/pages/discover/c-pages/album"))
const TUPlayer = lazy(() => import( '@/pages/player'))

// const TURecommend = lazy(() => import  ("@/pages/discover/c-pages/recommend"))
// const TURecommend = lazy(() => import  ("@/pages/discover/c-pages/recommend"))

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
