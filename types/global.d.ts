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

interface TableDataInfo<T = any> {
  code: number
  msg: string
  rows: T
  total: number
}

interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
}

type ApiPromise<T = any> = Promise<ApiResponse<T>>
type TablePromise<T = any> = Promise<TableDataInfo<T>>
