import { IDefinitions } from '../saggerInterfaces'
import { refClassName } from '../utils'
import { createDefinitionClass } from './createDefinitionClass';
import { createDefinitionEnum } from './createDefinitionEnum';
import { IDefinitionClasses, IDefinitionEnums } from '../baseInterfaces';

export function definitionsCodeGen(definitions: IDefinitions) {
  let definitionModels: IDefinitionClasses = {}
  let definitionEnums: IDefinitionEnums = {}
  for (const [k, v] of Object.entries(definitions)) {

    let className = refClassName(k)
    let result = null
    // is an enum definition,just in swagger openAPI v2 
    if (v.enum) {
      const enumDef = createDefinitionEnum(className, v.enum, v.type)
      definitionEnums[`#/definitions/${k}`] = {
        name: enumDef.name,
        value: enumDef
      }
    }
    else if (v.type === 'array') {
      // #TODO
    }
    else {
      // default definition generate
      const { enums, model } = createDefinitionClass(className, v.properties)
      // console.log('createDefinitionClass', enums)
      enums.forEach(item => {
        // definitionModels[item.name] = {
        //   value: item.text
        // }
        definitionEnums[`#/definitions/${item.name}`] = {
          name: item.name,
          content: item.text
        }
      })

      definitionModels[`#/definitions/${k}`] = {
        value: model,
        name: className
      }
    }
  }

  return { models: definitionModels, enums: definitionEnums }
}
