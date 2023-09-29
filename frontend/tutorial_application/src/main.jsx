import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TutorialProvider } from './hooks/TutorialContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TutorialProvider>
    <App />
    </TutorialProvider>
  </React.StrictMode>,
)
