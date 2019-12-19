export interface JsonResult<T> {
  code: number
  data: T
  message: string
  success: boolean
}