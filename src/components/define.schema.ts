import { IDefinitionClasses, IDefinitionEnumSpecs } from '@/types/CodegenInterfaces'
import { IComponentsSchemas } from '@/types/SwaggerInterfaces.v3'
import { isGenerics } from '@/utils/genericTypesUtils'
import { refClassName } from '@/utils/refsUtils'
import { getClassDefineSpec } from './getClassDefineSpec'
import { getEnumDefSpec } from '@/utils/enumUtils'
/**
 * 解析 schema
 */
export function parseSchema(schemas: IComponentsSchemas) {
  const definitionModels: IDefinitionClasses = {}
  const definitionEnums: IDefinitionEnumSpecs = {}

  if (!schemas) return { enums: definitionEnums, models: definitionModels }

  for (const [k, v] of Object.entries(schemas)) {
    const className = refClassName(k)

    // 如果已经转为泛型类型，则不需要重新定义
    if (isGenerics(className)) continue
    // console.log({ className })
    if (v.enum) {
      const enumDef = getEnumDefSpec(className, v.enum, v.type)
      definitionEnums[`#/components/schemas/${k}`] = {
        name: enumDef.name,
        value: enumDef
      }
    } else {
      // default definition generate
      const { additionalDefinitions, model } = getClassDefineSpec(className, v.properties, v.required)
      // console.log('createDefinitionClass', model)
      additionalDefinitions.forEach((item) => {
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
  return { enums: definitionEnums, models: definitionModels }
}
