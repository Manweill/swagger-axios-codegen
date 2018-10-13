import { IDefinitionProperties } from "../baseInterfaces";
import { propTrueType } from "./propTrueType";
import pascalcase from "pascalcase";
import { IPropDef } from "../template";

export interface IClassDef {
  name: string
  props: IPropDef[]
  imports: string[]
}

/**
 * 生成类定义
 * @param className class名称
 * @param properties 属性
 * @param isGenericsType 是否是泛型接口
 */

export function createDefinitionClass(
  className: string,
  properties: IDefinitionProperties
) {
  /** 枚举值 */
  let enums = []
  let model: IClassDef = { name: className, props: [], imports: [] }
  const propertiesEntities = Object.entries(properties)
  for (const [k, v] of propertiesEntities) {
    // console.log('props name', k)
    let { propType, isEnum, isArray, ref } = propTrueType(v);
    if (isEnum) {
      let enumName = `Enum${className}${pascalcase(k)}`
      enums.push({
        name: enumName, text: `export enum ${enumName}{
        ${propType}
      }`})
      propType = isArray ? enumName + '[]' : enumName
      ref = enumName
    }
    if (!!ref) {
      model.imports.push(ref)
    }
    // propsStr += classPropsTemplate(k, propType, v.description)
    model.props.push({ name: k, type: propType, desc: v.description })
  }
  // : classTemplate(className, propsStr, constructorStr)
  return { enums, model }
}