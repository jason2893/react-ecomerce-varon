import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/mi-tienda-react/', // Asegúrate de que esté configurado correctamente
});
