import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Definir manualmente los chunks para dividir el código
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Ajustar el límite de advertencia de tamaño de chunk a 1000 kB
    // chunkSizeWarningLimit: 1000,
  },
});