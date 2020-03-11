import { IDefinitions, IComponents } from '../swaggerInterfaces'
import { refClassName, isGenerics } from '../utils'
import { createDefinitionClass } from './createDefinitionClass'
import { createDefinitionEnum } from './createDefinitionEnum'
import { IDefinitionClasses, IDefinitionEnums } from '../baseInterfaces'

export function componentsCodegen(definitions: IComponents) {
  let definitionModels: IDefinitionClasses = {}
  let definitionEnums: IDefinitionEnums = {}
  if (!definitions || !definitions.schemas) {
    definitions = {
      schemas: {}
    }
  }
  if (!!definitions)
    for (const [k, v] of Object.entries(definitions.schemas)) {
      let className = refClassName(k)
      // 如果已经转为泛型类型，则不需要重新定义
      if (isGenerics(className)) continue
      let result = null
      // is an enum definition,just in swagger openAPI v2
      if (v.enum) {
        const enumDef = createDefinitionEnum(className, v.enum, v.type)
        definitionEnums[`#/components/schemas/${k}`] = {
          name: enumDef.name,
          value: enumDef
        }
      } else if (v.type === 'array') {
        // #TODO
      } else {
        // default definition generate
        const { enums, model } = createDefinitionClass(className, v.properties, v.required)
        // console.log('createDefinitionClass', enums)
        enums.forEach(item => {
          // definitionModels[item.name] = {
          //   value: item.text
          // }
          definitionEnums[`#/components/schemas/${item.name}`] = {
            name: item.name,
            content: item.text
          }
        })

        definitionModels[`#/components/schemas/${k}`] = {
          value: model,
          name: className
        }
      }
    }

  return { models: definitionModels, enums: definitionEnums }
}
