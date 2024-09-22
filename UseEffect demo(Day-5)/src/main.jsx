import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FatchData from './components/FatchData.jsx'
import MouseTracker from './components/MouseTracker.jsx'
import DocumentTitle from './components/DocumentTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FatchData/>
<MouseTracker/>
<DocumentTitle/>
    <App />
  </StrictMode>,
)
