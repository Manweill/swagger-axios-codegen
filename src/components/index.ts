import { IDefinitionClasses, IDefinitionEnumSpecs } from '@/types/CodegenInterfaces'
import { IComponents } from '@/types/SwaggerInterfaces.v3'
import { parseSchema } from './define.schema'

export function getComponentsSpec(components: IComponents) {
  let definitionModels: IDefinitionClasses = {}
  let definitionEnums: IDefinitionEnumSpecs = {}

  for (const [k, v] of Object.entries(components)) {
    switch (k) {
      case 'schemas': {
        const { enums, models } = parseSchema(v)
        definitionModels = { ...definitionModels, ...models }
        definitionEnums = { ...definitionEnums, ...enums }
        break
      }
      default:
        break
    }
  }

  console.log(definitionModels)

  return { enums: definitionEnums, models: definitionModels }
}
