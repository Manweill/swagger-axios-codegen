import { IEnumDef } from "../baseInterfaces";

/**
 * 生成类定义
 * @param className class名称
 * @param enum 枚举列表
 * @param type 枚举的类型
 */
export function createDefinitionEnum(className: string, enumArray: any[], type: string): IEnumDef {
  const result = type === 'string'
    ? enumArray
      .map(item => isNaN(item)
        ? `'${item}'='${item}'`
        : `'KEY_${item}'='${item}'`)
      .join(',')
    : enumArray.join('|')
  return { name: className, enumProps: result, type: type }
}
