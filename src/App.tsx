import {memo} from "react";

import TuAppHeader from "./components/app-header";
import TuAppFooter from "./components/app-footer";
import DefineRouter from "@/router";
import {BrowserRouter} from "react-router-dom";

const App = memo(() => {
    return (
        <BrowserRouter>
            <TuAppHeader/>
            <DefineRouter/>
            <TuAppFooter/>
        </BrowserRouter>
    )
})

export default App
