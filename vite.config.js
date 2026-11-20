import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' mantiene las rutas relativas (./images/...) igual que el sitio original,
// así el build funciona en cualquier hosting o subcarpeta.
export default defineConfig({
  base: './',
  plugins: [react()],
})
