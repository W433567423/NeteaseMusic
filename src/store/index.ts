import reducer from './reducer';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore(
    {
        reducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            //关闭redux序列化检测
            serializableCheck: false
        })
    }
);

export default store;
