// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        fox: resolve(__dirname, 'src/foxx.html')
      },
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true
  },
  publicDir: resolve(__dirname, "public"),
});
