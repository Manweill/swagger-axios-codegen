import { IDictionary, IEnumDefSpec } from "../types/CodegenInterfaces"

/**
 * 获取枚举类定义
 * @param className class名称
 * @param enum 枚举列表
 * @param type 枚举的类型
 */
export function getEnumDefSpec(className: string, enumArray: any[], type: string): IEnumDefSpec {
  let enumProps: IDictionary<string, any>[] = []
  if (type === 'string') {
    enumProps = enumArray.map(item => ({ [item]: item }))
  }
  else {
    enumProps = enumArray.map(item => {
      const obj = isNaN(item) ? { [item]: item } : { ['key' + item]: item }
      return obj
    })
  }

  return { name: className, props: enumProps, type: type }
}
