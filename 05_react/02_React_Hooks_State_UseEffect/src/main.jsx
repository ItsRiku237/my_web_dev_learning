import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // for this tutorial we off <StrictMode> for learning (not coming 2 times alert)
  // <StrictMode>
    <App />
  // </StrictMode>,
)
