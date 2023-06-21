import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { MainProvider } from "./context/MainContext"
import { MainPageContextProvider } from './context/MainPageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
    <MainPageContextProvider>
    <App />
    </MainPageContextProvider>
    </MainProvider>
    </React.StrictMode>
   
  
)
