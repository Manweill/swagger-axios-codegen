import { IDefinitionProperties } from "../swaggerInterfaces";
import { propTrueType } from "./propTrueType";
import pascalcase from "pascalcase";
import { IClassDef } from "../baseInterfaces";
import { getValidationModel } from "../utils";


/**
 * 生成类定义
 * @param className class名称
 * @param properties 属性
 * @param isGenericsType 是否是泛型接口
 */

export function createDefinitionClass(
  className: string,
  properties: IDefinitionProperties,
  required: string[]
) {
  /** 枚举值 */
  let enums = []
  let types = []
  let model: IClassDef = { name: className, props: [], imports: [] }
  const propertiesEntities = Object.entries(properties || {})
  for (const [k, v] of propertiesEntities) {
    // console.log('props name', k)
    let { propType, isEnum, isArray, isType, ref } = propTrueType(v);
    if (isEnum) {
      let enumName = `Enum${className}${pascalcase(k)}`
      enums.push({
        name: enumName, text: `export enum ${enumName}{
        ${propType}
      }`})
      propType = isArray ? enumName + '[]' : enumName
      ref = enumName
    }
    if (isType) {
      let typeName = `I${className}${pascalcase(k)}`
      enums.push({
        name: typeName, text: `type ${typeName} = ${propType};`
      })
      propType = isArray ? typeName + '[]' : typeName
      ref = typeName
    }
    // 转化引用值到引用列表
    if (!!ref) {
      model.imports.push(ref)
    }
    let validationModel = getValidationModel(k, v, required);
    // propsStr += classPropsTemplate(k, propType, v.description)
    model.props.push({ name: k, type: propType, format: v.format, desc: v.description?.replace(/\//g, '\/'), isType, isEnum, validationModel })
  }
  // : classTemplate(className, propsStr, constructorStr)
  return { enums, model }
}