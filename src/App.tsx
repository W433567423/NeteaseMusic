import {memo} from "react";

import TuAppHeader from "./components/app-header";
import TuAppFooter from "./components/app-footer";
import TuRouter from "@/router";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/store";

const App = memo(() => {
    return (
        <Provider store={store}>
            <HashRouter>
                <TuAppHeader/>
                <TuRouter/>
                <TuAppFooter/>
            </HashRouter></Provider>
    )
})

export default App
