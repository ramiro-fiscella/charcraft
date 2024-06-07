import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'client/public', // Asegúrate de que Vite use el directorio correcto
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos construidos
  },
  server: {
    port: 5173, // Puerto de desarrollo
  },
});
