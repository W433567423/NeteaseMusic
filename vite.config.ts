import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@cpn': path.resolve(__dirname, './src/components'),
        },
    },
})
