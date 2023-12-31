interface Window {
  existLoading: boolean
  lazy: number
  unique: number
  requests: Function[]
  eventSource: EventSource
  loadLangHandle: Record<string, any>
}

interface anyObj {
  [key: string]: any
}

interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
  rows?: T[]
  total?: number
}

type ApiPromise<T = any> = Promise<ApiResponse<T>>
