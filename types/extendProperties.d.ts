import { ComponentCustomProperties } from 'vue'

// 如需添加其他全局变量，则往下加属性名和对应类型。
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $modal: proxy // 这里填类型
    $cache: cache // 这里填类型
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties
