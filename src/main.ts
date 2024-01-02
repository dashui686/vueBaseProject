import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// routes
import router from './routers'
// pinia
import pinia from '@/store'
import mitt from 'mitt'
import plugins from './plugins' // plugins
import { loadLang } from './lang'
import ElementPlus from 'element-plus'
import { useDict } from '@/utils/dict'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/ruoyi'

// vue
const app = createApp(App)

// use
// 语言包会用到 所以先加载pinia
app.use(pinia)
// 全局语言包加载
await loadLang(app)
app.use(plugins)
app.use(router)
app.use(ElementPlus)

// modules start mark, Please do not remove.
// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.selectDictLabels = selectDictLabels
app.config.globalProperties.eventBus = mitt()

app.mount('#app')
