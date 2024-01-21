import {App} from '@/App'
import {createRoot} from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import {Provider} from "react-redux";
import {store} from "@/services/store";

createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <App/>
        </Provider>
)
