import {memo} from "react";

import TuAppHeader from "./components/app-header";
import TuAppFooter from "./components/app-footer";
import DefineRouter from "@/router";
import {HashRouter} from "react-router-dom";

const App = memo(() => {
    return (
        <HashRouter>
            <TuAppHeader/>
            <DefineRouter/>
            <TuAppFooter/>
        </HashRouter>
    )
})

export default App
