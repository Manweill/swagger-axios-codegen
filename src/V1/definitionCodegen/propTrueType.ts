import { refClassName, toBaseType } from "../utils";
import { IDefinitionProperty } from "../swaggerInterfaces";

export function propTrueType(v: IDefinitionProperty): {
  propType: string, isEnum: boolean, isArray: boolean, isType: boolean, ref: string
} {
  let result = {
    propType: '',
    isEnum: false,
    isArray: false,
    /**ts type definition */
    isType: false,
    ref: ''
  }
  if (v.$ref) {
    // 是引用类型
    result.propType = refClassName(v.$ref)
    result.ref = result.propType
  }
  //是个数组
  else if (v.items) {
    if (v.items.$ref) {
      // 是个引用类型
      result.ref = refClassName(v.items.$ref)
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
    result.isArray = true
  }
  // 是枚举 并且是字符串类型
  else if (v.enum && v.type === 'string') {
    result.isEnum = true
    result.propType = getEnums(v.enum).map(item => {
      if (isNaN(item)) {
        return `'${item}'='${item}'`;
      }
      return `'KEY_${item}'='${item}'`;
    }).join(',')
  }
  else if (v.enum) {
    result.isType = true
    result.propType = v.type === 'string' ? getEnums(v.enum).map(item => `'${item}'`).join('|') : v.enum.join('|')
  }
  // 基本类型
  else {
    result.propType = toBaseType(v.type)
  }
  return result
}

function getEnums(enumObject: any): any[] {
  return Object.prototype.toString.call(enumObject) === '[object Object]' ? Object.values(enumObject) : enumObject;
}
