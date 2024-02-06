import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.mjs', '.js', '.jsx', '.json', '.vue']
    },
    plugins: [
        uni(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/ // .md
            ],
            imports: ['vue', 'uni-app'],
            eslintrc: {
                enabled: true
            },
            dts: 'typings/auto-imports.d.ts'
        })
    ]
})
