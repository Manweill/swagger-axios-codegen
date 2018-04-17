import { IDefinitionProperties, IDefinitions, IDefinitionProperty } from './baseInterfaces'
import { refClassName, toBaseType, getGenericsClassNames, isGenerics } from './utils'

export interface IDefinitionsClasses {
  [key: string]: {
    isGeneric: boolean
    value: string
  }
}

function propTrueType(v: IDefinitionProperty, isGenericType: boolean) {
  let propType = ''
  if (v.$ref) {
    // 是引用类型
    propType = refClassName(v.$ref)
  }
  //是个数组
  else if (v.items) {
    if (v.items.$ref) {
      // 是个引用类型
      propType = refClassName(v.items.$ref) + '[]'
    } else {
      if (v.items.type === "array") {
        propType = propTrueType(v.items, isGenericType) + '[]'
      } else {
        propType = toBaseType(v.items.type) + '[]'
      }
    }
  }
  // 是个枚举
  else if (v.enum) {
    propType = v.type === 'string' ? v.enum.map(item => `'${item}'`).join('|') : v.enum.join('|')
  }
  // 基本类型
  else {
    propType = toBaseType(v.type)
  }
  return propType
}

/**
 * 生成类定义
 * @param className class名称
 * @param properties 属性
 * @param isGenericsType 是否是泛型接口
 */
function createDefinitionClass(
  className: string,
  properties: IDefinitionProperties,
  isGenericType: boolean = false,
  hasDefaultGenericType = false
) {
  let propsStr = ''
  let constructorStr = ''
  let genericsType = ''
  const propertiesEntities = Object.entries(properties)
  for (const [k, v] of propertiesEntities) {
    let propType = propTrueType(v, isGenericType);
    // if (v.$ref) {
    //   // 是引用类型
    //   propType = refClassName(v.$ref)
    // }
    // //是个数组
    // else if (v.items) {
    //   if (v.items.$ref) {
    //     // 是个引用类型
    //     propType = isGenericType ? 'T[]' : refClassName(v.items.$ref) + '[]'
    //   } else {
    //     propType = toBaseType(v.items.type) + '[]'
    //   }
    // }
    // // 是个枚举
    // else if (v.enum) {
    //   propType = v.type === 'string' ? v.enum.map(item => `'${item}'`).join('|') : v.enum.join('|')
    // }
    // // 基本类型
    // else {
    //   propType = isGenericType && propertiesEntities.length === 1 ? 'T' : toBaseType(v.type)
    // }
    propsStr += `
    /**
     * 
     * @type {${propType}}
     * @memberof ${className}
     */
    ${k}:${propType};\n
    `
    constructorStr += `this['${k}'] = data['${k}'];\n`
    genericsType = isGenericType
      ? hasDefaultGenericType && propertiesEntities.length
        ? `<T=${toBaseType(v.type)}>`
        : '<T>'
      : ''
  }

  return `
  export class ${className}${genericsType} {
    ${propsStr}
    constructor(data?:any){
      if(data){
        ${constructorStr}
      }
    }
  }
  `
}

export function definitionsCodeGen(definitions: IDefinitions): string {
  let definitionsModels: IDefinitionsClasses = {}
  for (const [k, v] of Object.entries(definitions)) {
    // 是否是泛型类型 PagedResultDto[UserListDto]
    // if (isGenerics(k) && v.type === 'object') {
    //   const { interfaceClassName, TClassName } = getGenericsClassNames(k)
    //   // if (definitionsModels[interfaceClassName] == null) {
    //   definitionsModels[interfaceClassName] = {
    //     isGeneric: true,
    //     value: createDefinitionClass(interfaceClassName, v.properties, true)
    //   }
    //   // }
    // } else {
    // if (definitionsModels[k] && definitionsModels[k].isGeneric) {
    //   definitionsModels[k] = {
    //     isGeneric: true,
    //     value: createDefinitionClass(k, v.properties, true, true)
    //   }
    // } else {
    let className = refClassName(k)
    definitionsModels[k] = {
      isGeneric: false,
      value: createDefinitionClass(className, v.properties)
    }
    // }
    // }
  }

  let definitionsClasses = Object.values(definitionsModels)
    .map(item => item.value)
    .join('')

  return definitionsClasses
}
