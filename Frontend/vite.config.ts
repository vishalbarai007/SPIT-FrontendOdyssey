import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate React and ReactDOM into a vendor chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust limit (optional)
  },
  plugins: [react()],
  base: '/', // Use '/' for root-level hosting
})
