import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import useEmblaCarousel from "embla-carousel-react";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
