import { createRouter, createWebHistory } from 'vue-router'
import { uniq } from 'lodash-es'
import { mergeMessage } from '../locale'
import { loading } from '/@/utils/loading'
import NProgress from 'nprogress'
import langAutoLoadMap from '/@/locale/autoload'
import { useConfig } from '../stores/config'
const routes = [
  {
    path: '/',
    name: 'home',
    // 使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('../view/homeView.vue'),
  },
  // {
  // 配置404页面
  // path: '/:catchAll(.*)',
  // name: '404',
  // component: () => import(''),
  // }
]
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false })
  NProgress.start()
  if (!window.existLoading) {
    loading.show()
    window.existLoading = true
  }

  // 按需动态加载页面的语言包-start
  let loadPath: string[] = []
  const config = useConfig()
  debugger

  // if (to.path in langAutoLoadMap) {
  //   loadPath.push(...langAutoLoadMap[to.path as keyof typeof langAutoLoadMap])
  // }

  // 此处可以自定义路径
  const prefix = './' + config.lang.defaultLang

  // 根据路由 name 加载的语言包
  if (to.name) {
    loadPath.push(prefix + '/' + to.name.toString() + '.ts')
  }

  if (!window.loadLangHandle.publicMessageLoaded) window.loadLangHandle.publicMessageLoaded = []
  const publicMessagePath = prefix + '.ts'
  if (!window.loadLangHandle.publicMessageLoaded.includes(publicMessagePath)) {
    loadPath.push(publicMessagePath)
    window.loadLangHandle.publicMessageLoaded.push(publicMessagePath)
  }

  // 去重
  loadPath = uniq(loadPath)

  for (const key in loadPath) {
    loadPath[key] = loadPath[key].replaceAll('${lang}', config.lang.defaultLang)
    if (loadPath[key] in window.loadLangHandle) {
      window.loadLangHandle[loadPath[key]]().then((res: { default: anyObj }) => {
        const pathName = loadPath[key].slice(loadPath[key].lastIndexOf(prefix) + (prefix.length + 1), loadPath[key].lastIndexOf('.'))
        mergeMessage(res.default, pathName)
      })
    }
  }
  // 动态加载语言包-end

  next()
})

// 路由加载后
router.afterEach(() => {
  if (window.existLoading) {
    loading.hide()
  }
  NProgress.done()
})

// 导出
export default router
