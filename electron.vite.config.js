import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
const pathSrc = fileURLToPath(new URL('./src/renderer/src', import.meta.url));
export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
    },
    renderer: {
        resolve: {
            alias: {
                '@renderer': resolve('src/renderer/src'),
                vue: 'vue/dist/vue.esm-bundler.js',
            },
        },
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia'],
                resolvers: [ElementPlusResolver()],
                dts: resolve(pathSrc, 'auto-imports.d.ts'),
                dirs: [resolve(pathSrc, 'stores')],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
                dts: resolve(pathSrc, 'components.d.ts'),
                dirs: [resolve(pathSrc, 'components')],
            }),
        ],
    },
});
