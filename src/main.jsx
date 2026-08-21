import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* 1. Bootstrap CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';

/* 2. Tailwind Import mit Präfix */
@import "tailwindcss" prefix(tw);
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
