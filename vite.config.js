    // vite.config.js
    import { resolve } from 'path';
    import { defineConfig } from 'vite';

    export default defineConfig({
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            game: resolve(__dirname, 'game.html'),
            facemesh: resolve(__dirname, 'facemesh.html'),
            facemodel: resolve(__dirname, 'facemodel.html'),
            parallax: resolve(__dirname, 'parallax.html'),
          },
        },
      },
    });