import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initAds } from './lib/analytics'
// Fuente y animaciones se sirven desde el propio sitio (sin pedirlas a Google/cdnjs).
// Orden importante: animate.css primero, para que los estilos propios de index.css puedan sobrescribirlo.
import '@fontsource-variable/manrope'
import 'animate.css'
import './index.css'

initAds()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
