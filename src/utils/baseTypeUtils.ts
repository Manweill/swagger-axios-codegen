/** 判断是否为JS基础类型 */
export function isBaseType(s: string) {
  return ['boolean', 'number', 'string', 'string', 'Date', 'any'].includes(s)
}
/**
 * 转换为基础类型，去掉原有的format参数，应在外围转换好再传入
 * @param s 类型
 */
export function toBaseType(s: string) {
  if (s === undefined || s === null || s.length === 0) {
    return 'any | null'
  }
  let result = ''
  switch (s) {
    case 'boolean':
    case 'bool':
    case 'Boolean':
      result = 'boolean'
      break
    case 'array':
      result = '[]'
      break
    case 'Int64':
    case 'Int32':
    case 'int':
    case 'integer':
    case 'number':
      result = 'number'
      break
    case 'uuid':
    case 'Guid':
    case 'String':
    case 'string':
      result = 'string'
      break
    case 'file':
      result = 'any'
      break
    case 'date':
    case 'date-time':
      result = 'Date'
      break
    default:
      result = s
      break
  }
  return result
}