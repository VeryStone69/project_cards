import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { App } from '@/App'
import { store } from '@/services/store'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastContainer
      autoClose={5000}
      closeOnClick
      draggable
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={'bottom-left'}
      rtl={false}
      theme={'dark'}
    />
    <App />
  </Provider>
)
