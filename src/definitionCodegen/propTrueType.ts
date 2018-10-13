import { refClassName, toBaseType } from "../utils";
import { IDefinitionProperty } from "../baseInterfaces";

export function propTrueType(v: IDefinitionProperty): {
  propType: string, isEnum: boolean, isArray: boolean, ref: string
} {
  let propType = ''
  let isEnum = false
  let isArray = false
  let ref = ''
  if (v.$ref) {
    // 是引用类型
    propType = refClassName(v.$ref)
    ref = propType
  }
  //是个数组
  else if (v.items) {
    isArray = true
    if (v.items.$ref) {
      // 是个引用类型
      ref = refClassName(v.items.$ref)
      propType = ref + '[]'
    } else {
      if (v.items.type === "array") {
        const result = propTrueType(v.items)
        propType = result.propType
        isEnum = result.isEnum
        ref = result.ref
      } else if (!!v.items.enum) {
        const result = propTrueType(v.items)
        propType = result.propType
        isEnum = result.isEnum
        ref = result.ref
      } else {
        propType = toBaseType(v.items.type) + '[]'
      }
    }
  }
  // 是枚举 并且是字符串类型
  else if (v.enum && v.type === 'string') {
    isEnum = true
    propType = v.enum.map(item => `'${item}'='${item}'`).join(',')
  }
  else if (v.enum) {
    propType = v.type === 'string' ? v.enum.map(item => `'${item}'`).join('|') : v.enum.join('|')
  }
  // 基本类型
  else {
    propType = toBaseType(v.type)
  }
  return { propType, isEnum, isArray, ref }
}