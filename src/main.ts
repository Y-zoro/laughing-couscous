import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
import '@/static/icons/style.css'
import '@/style/global.scss'
import { setUviewPlus } from '@/libs/uview-plus/props'
import App from './App.vue'

export function createApp () {
    const app = createSSRApp(App)
    app.use(uviewPlus)
    setUviewPlus()

    return {
        app
    }
}
