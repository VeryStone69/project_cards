// import React from 'react'
//
// import { App } from '@/App'
// import ReactDOM from 'react-dom/client'
//
// import './styles/index.scss'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/700.css'
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
import { StrictMode } from 'react'

import { App } from '@/App'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
//   </React.StrictMode>
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
