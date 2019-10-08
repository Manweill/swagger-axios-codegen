import { IEnumDef } from "../baseInterfaces";

/**
 * 生成类定义
 * @param className class名称
 * @param enum 枚举列表
 * @param type 枚举的类型
 */
export function createDefinitionEnum(className: string, enumArray: any[], type: string): IEnumDef {
  let result = ''
  if (type === 'string') {
    result = enumArray.map(item => `'${item}'='${item}'`).join(',')
  }
  else {
    result = type === 'string' ?
      enumArray.map(item => `'${item}'`).join('|') :
      enumArray.join('|')
  }

  return { name: className, enumProps: result, type: type }
}
