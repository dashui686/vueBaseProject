import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//routes
import router from "./routes";
//pinia
import pinia from '@/store' 
import { loadLang } from './lang';


// vue
const app = createApp(App)

// use
// 语言包会用到 所以先加载pinia
app.use(pinia)
// 全局语言包加载
await loadLang(app)
app.use(router)

app.mount('#app')
