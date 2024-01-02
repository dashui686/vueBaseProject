import type { RouteRecordRaw } from 'vue-router'

export interface SiteConfig {
  siteName: string
  recordNumber?: string
  version: string
  cdnUrl: string
  apiUrl: string
  upload: {
    mode: string
    maxsize: number
    mimetype: string
    savename: string
    url?: string
    params?: anyObj
  }
  headNav: RouteRecordRaw[]
  initialize: boolean
  userInitialize: boolean
}
