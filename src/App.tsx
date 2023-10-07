import {memo} from "react";

import TuAppHeader from "./components/app-header";
import TuAppFooter from "./components/app-footer";
import TuRouter from "@/router";
import {HashRouter} from "react-router-dom";

const App = memo(() => {
    return (
        <HashRouter>
            <TuAppHeader/>
            <TuRouter/>
            <TuAppFooter/>
        </HashRouter>
    )
})

export default App
