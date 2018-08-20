import { IDefinitionProperties, IDefinitions, IDefinitionProperty } from './baseInterfaces'
import { refClassName, toBaseType } from './utils'
import pascalcase from 'pascalcase';

export interface IDefinitionsClasses {
  [key: string]: {
    value: string
  }
}


function propTrueType(v: IDefinitionProperty): { propType: string, isEnum: boolean, isArray: boolean } {
  let propType = ''
  let isEnum = false
  let isArray = false
  if (v.$ref) {
    // 是引用类型
    propType = refClassName(v.$ref)
  }
  //是个数组
  else if (v.items) {
    isArray = true
    if (v.items.$ref) {
      // 是个引用类型
      propType = refClassName(v.items.$ref) + '[]'
    } else {
      if (v.items.type === "array") {
        const result = propTrueType(v.items)
        propType = result.propType
        isEnum = result.isEnum
      } else if (!!v.items.enum) {
        const result = propTrueType(v.items)
        propType = result.propType
        isEnum = result.isEnum
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
  return { propType, isEnum, isArray }
}

/**
 * 生成类定义
 * @param className class名称
 * @param properties 属性
 * @param isGenericsType 是否是泛型接口
 */
function createDefinitionClass(
  className: string,
  properties: IDefinitionProperties
) {
  let propsStr = ''
  let constructorStr = ''
  let genericsType = ''
  /** 枚举值 */
  let enums = []
  const propertiesEntities = Object.entries(properties)
  for (const [k, v] of propertiesEntities) {
    let { propType, isEnum, isArray } = propTrueType(v);
    if (isEnum) {
      let enumName = `Enum${className}${pascalcase(k)}`
      enums.push({
        name: enumName, text: `export enum ${enumName}{
        ${propType}
      }`})
      propType = isArray ? enumName + '[]' : enumName
    }
    propsStr += `
    /** ${v.description || ''} */
    ${k}:${propType};\n
    `
    constructorStr += `this['${k}'] = data['${k}'];\n`
  }

  return {
    enums,
    model: `
  export class ${className} {
    ${propsStr}
    constructor(data?:any){
      if(data){
        ${constructorStr}
      }
    }
  }
  `
  }
}

export function definitionsCodeGen(definitions: IDefinitions): string {
  let definitionsModels: IDefinitionsClasses = {}
  for (const [k, v] of Object.entries(definitions)) {

    let className = refClassName(k)
    const { enums, model } = createDefinitionClass(className, v.properties)


    enums.forEach(item => {
      definitionsModels[item.name] = {
        value: item.text
      }
    })

    definitionsModels[k] = {
      value: model
    }
  }

  let definitionsClasses = Object.values(definitionsModels)
    .map(item => item.value)
    .join('')

  return definitionsClasses
}
