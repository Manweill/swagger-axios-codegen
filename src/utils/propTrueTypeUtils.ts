import { refClassName } from '@/utils/refsUtils'
import { IDefinitionProperty } from '@/types/SwaggerInterfaces.v3'
import { toBaseType } from '@/utils/baseTypeUtils'
import { getEnumDefSpec, toEnumContent } from '@/utils/enumUtils'

type IPropRealType = {
  /** 属性类型 */
  propType: string
  /** 是否是枚举 */
  isEnum: boolean
  /** 是否 Type 类型 */
  isType: boolean
  /** 是否是数组 */
  isArray: boolean
  /** 引用地址 */
  ref: string
  /** 是否是联合类型 */
  isUnionType: boolean
  /** 是否是组合的类型 */
  isCombinedType: boolean
}

/** 属性真实类型 */
export function propRealType(v: IDefinitionProperty): IPropRealType {
  let result: IPropRealType = {
    propType: '',
    isEnum: false,
    /**ts type definition */
    isType: false,
    isArray: false,
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
      result.propType = `Array<${result.ref}>`
    } else {
      if (v.type === 'array' && v.items.oneOf && v.items.oneOf.length > 0) {
        result.isUnionType = true
        result.propType = v.items.oneOf
          .map((type) => {
            return refClassName(type.$ref)
          })
          .join(',')
      } else if (v.type === 'array' && v.items.allOf && v.items.allOf.length > 0) {
        result.isCombinedType = true
        result.propType = v.items.allOf
          .map((type) => {
            return refClassName(type.$ref)
          })
          .join(',')
      } else if (v.items.type === 'array') {
        const currentResult = propRealType(v.items)
        result = { ...result, ...currentResult }
      } else if (v.items.enum) {
        const currentResult = propRealType(v.items)
        result = { ...result, ...currentResult }
      } else {
        result.propType = toBaseType(v.items.type) + '[]'
      }
    }
    result.isArray = true
  }
  // 是枚举 并且是字符串类型
  else if (v.enum) {
    const enumSpec = getEnumDefSpec('', getEnums(v.enum), v.type)
    result.propType = toEnumContent(enumSpec)
  } else if (v.oneOf && v.oneOf.length > 0) {
    result.isUnionType = true
    result.propType = v.oneOf
      .map((type) => {
        return refClassName(type.$ref)
      })
      .join(',')
  } else if (v.allOf && v.allOf) {
    result.isCombinedType = true
    result.propType = v.allOf
      .map((type) => {
        return refClassName(type.$ref)
      })
      .join(',')
  }
  // 基本类型
  else {
    result.propType = toBaseType(v.type)
  }
  return result
}

function getEnums(enumObject: any): any[] {
  return Object.prototype.toString.call(enumObject) === '[object Object]' ? Object.values(enumObject) : enumObject
}
