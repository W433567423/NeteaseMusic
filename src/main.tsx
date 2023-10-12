import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 导入css重置
import '@/assets/css/index.css'

import {Map} from "immutable";

Map()

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <App/>
    // </React.StrictMode>,
)

