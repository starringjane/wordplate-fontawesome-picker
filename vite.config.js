import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function wrapInIife(fileName) {
    return {
        name: 'iife-wrapper',
        generateBundle(_, bundle) {
            for (const [name, chunk] of Object.entries(bundle)) {
                if (chunk.type === 'chunk' && name === fileName) {
                    chunk.code = `(function(){\n${chunk.code}\n})();`;
                }
            }
        },
    };
}

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        wrapInIife('icon-picker.js'),
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: 'src/assets/index.js',
                'icon-picker': 'src/assets/icon-picker.js',
                style: 'src/assets/style.css',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
        // Prevent Vite from hashing filenames, preserving the original names
        cssCodeSplit: true,
    },
});
