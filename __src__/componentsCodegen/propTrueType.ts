import { refClassName, toBaseType } from "../utils";
import { IDefinitionProperty } from "../swaggerInterfaces";

export function propTrueType(v: IDefinitionProperty): {
  propType: string, isEnum: boolean, isArray: boolean, isType: boolean, ref: string, isUnionType: boolean, isCombinedType: boolean
} {
  let result = {
    propType: '',
    isEnum: false,
    isArray: false,
    /**ts type definition */
    isType: false,
    isUnionType: false,
    isCombinedType: false,
    ref: ''
  }
  if (v.$ref) {
    // 是引用类型
    result.propType = refClassName(v.$ref || v.allOf[0].$ref)
    result.ref = result.propType
  }
  //是个数组
  else if (v.items) {
    if (v.items.$ref) {
      // 是个引用类型
      result.ref = refClassName(v.items.$ref)
      result.propType = result.ref + '[]'
    } else {
      if (v.type === "array" && v.items.oneOf && v.items.oneOf.length > 0) {
        result.isUnionType = true;
        result.propType = v.items.oneOf.map((type) => {
          return refClassName(type.$ref);
        }).join(',')
      }
      else if (v.type === "array" && v.items.allOf && v.items.allOf.length > 0) {
        result.isCombinedType = true;
        result.propType = v.items.allOf.map((type) => {
          return refClassName(type.$ref);
        }).join(',')
      }
      else if (v.items.type === "array") {
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
    result.propType = getEnums(v.enum).map(item => `'${item}'='${item}'`).join(',')
  }
  else if (v.enum) {
    result.isType = true
    result.propType = v.type === 'string' ? getEnums(v.enum).map(item => `'${item}'`).join('|') : v.enum.join('|')
  }
  else if (v.oneOf && v.oneOf.length > 0) {
    result.isUnionType = true;
    result.propType = v.oneOf.map((type) => {
      return refClassName(type.$ref);
    }).join(',')
  }
  else if (v.allOf && v.allOf) {
    result.isCombinedType = true;
    result.propType = v.allOf.map((type) => {
      return refClassName(type.$ref);
    }).join(',')
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