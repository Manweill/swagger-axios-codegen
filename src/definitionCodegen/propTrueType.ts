import { refClassName, toBaseType } from "../utils";
import { IDefinitionProperty } from "../baseInterfaces";

export function propTrueType(v: IDefinitionProperty): {
  propType: string, isEnum: boolean, isArray: boolean, ref: string
} {
  let result = {
    propType: '',
    isEnum: false,
    isArray: false,
    ref: ''
  }
  if (v.$ref) {
    // 是引用类型
    result.propType = refClassName(v.$ref)
    result.ref = result.propType
  }
  //是个数组
  else if (v.items) {
    result.isArray = true
    if (v.items.$ref) {
      // 是个引用类型
      result. = refClassName(v.items.$ref)
      result.propType = result.ref + '[]'
    } else {
      if (v.items.type === "array") {
        const currentResult = propTrueType(v.items)
        result = { ...result, ...currentResult }
      } else if (!!v.items.enum) {
        const currentResult = propTrueType(v.items)
        result = { ...result, ...currentResult }
      } else {
        result.propType = toBaseType(v.items.type) + '[]'
      }
    }
  }
  // 是枚举 并且是字符串类型
  else if (v.enum && v.type === 'string') {
    result.isEnum = true
    result.propType = v.enum.map(item => `'${item}'='${item}'`).join(',')
  }
  else if (v.enum) {
    result.propType = v.type === 'string' ? v.enum.map(item => `'${item}'`).join('|') : v.enum.join('|')
  }
  // 基本类型
  else {
    result.propType = toBaseType(v.type)
  }
  return result
}