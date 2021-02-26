import { IDefinitionEnumSpec, IDictionary, IEnumDefSpec, INameValue } from '@/types/CodegenInterfaces'

type IEnumArray = 'int' | 'string' | 'any'

/**
 * 获取枚举类定义
 * @param className class名称
 * @param enum 枚举列表
 * @param type 枚举的值的类型
 */
export function getEnumDefSpec(className: string, enumArray: IEnumArray[], type: string): IEnumDefSpec {
  let enumProps: INameValue[] = []
  if (type === 'string') {
    enumProps = enumArray.map((item) => ({ name: item, value: item }))
  } else {
    enumProps = enumArray.map((item) => {
      const obj = isNaN(item as any) ? { name: item, value: item } : { name: 'key' + item, value: item }
      return obj
    })
  }

  return { name: className, props: enumProps, type: type }
}
/** 转为字符串 */
export function toEnumContent(defineEnumSpec: IDefinitionEnumSpec) {
  if (defineEnumSpec.value.type == 'string') {
    return defineEnumSpec.value.props.map(({ name, value }) => `'${name}'='${value}'`).join(',')
  } else {
    return defineEnumSpec.value.props.map((item) => item.value).join('|')
  }
}
