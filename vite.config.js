import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto permite que sea accesible desde cualquier IP de la red
    port: 5173,      // El puerto que estás usando
  },
})
