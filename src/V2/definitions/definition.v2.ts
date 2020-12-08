import { IDefinitionEnumSpecs } from "../types/CodegenInterfaces";
import { IDefinitions } from "../types/SwaggerInterfaces.v2";

export function getDefinitionSpec(definitions: IDefinitions) {
  // let definitionModels: IDefinitionClasses = {}
  let definitionEnums: IDefinitionEnumSpecs = {}
  if (!!definitions) {

  }

  return { enums: definitionEnums }
}