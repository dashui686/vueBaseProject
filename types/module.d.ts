/// <reference types="vite/client" />

declare module 'js-cookie'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
