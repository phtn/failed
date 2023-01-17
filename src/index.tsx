import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
const container = document.getElementById('app-root') as HTMLElement
const root = createRoot(container)
root.render(
    <StrictMode>
        <App />
    </StrictMode>)