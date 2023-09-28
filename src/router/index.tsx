import TuDiscover from "@/pages/discover";
import TuFriend from "@/pages/friend";
import TuMine from "@/pages/mine";
import {useRoutes} from "react-router-dom";

const DefineRouter = () => {
    return useRoutes(
        [{
            path: '/',
            element: <TuDiscover/>
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


export default DefineRouter
