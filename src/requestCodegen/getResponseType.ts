import { refClassName, toBaseType } from '../utils'
import { IRequestMethod } from '../swaggerInterfaces'
/**
 * 获取请求的返回类型
 */
export function getResponseType(reqProps: IRequestMethod): { responseType: string, isRef: boolean } {
  // It does not allow the schema defined directly, but only the primitive type is allowed.
  let result: string = 'any'
  let isRef = false
  // 提取Schema
  const successStatusCode = Object.keys(reqProps.responses).find(statusCode => statusCode.match(/20[0-4]$/))
  if (!successStatusCode) {
    return { responseType: result, isRef }
  }
  const resSchema =
    reqProps.responses[successStatusCode] && reqProps.responses[successStatusCode].schema
      ? reqProps.responses[successStatusCode].schema
      : null

  if (!resSchema) {
    return { responseType: result, isRef }
  }

  let checkType = resSchema.type
  let format = resSchema.format;
  // 如果是数组
  if (checkType === 'array' || resSchema.items) {
    if (resSchema.items.$ref) {
      const refType = refClassName(resSchema.items.$ref)
      isRef = true
      result = refType + '[]'
    } else {
      const refType = toBaseType(resSchema.items.type, resSchema.items.format)
      result = refType + '[]'
    }
  } else if (resSchema.$ref) {
    // 如果是引用对象
    result = refClassName(resSchema.$ref) || 'any'
    isRef = true
  } else {
    console.log(checkType + " " + format);
    result = checkType
    result = toBaseType(result, format)
  }

  if (result == 'object') {
    result = 'any'
  } else if (result == 'array') {
    result = 'any[]'
  }

  return { responseType: result, isRef }
}
