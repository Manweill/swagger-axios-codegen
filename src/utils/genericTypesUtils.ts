import { envConfig } from '@/envConfig'

const UniversalGenericTypes = ['IList', 'List']
const AbpGenericTypes = ['IListResult', 'ListResultDto', 'IPagedResult', 'PagedResultDto', 'Dictionary', 'IDictionary']

// 是否是泛型类型
export const isOpenApiGenerics = (s: string) => /^.+\[.+\]$/.test(s) || /^.+\«.+\»$/.test(s) || /^.+\<.+\>$/.test(s)

export const isGenerics = (s: string) => {
  return /^.+\<.+\>$/.test(s)
}
export const isDefinedGenericTypes = (x: string) => envConfig.definedGenericTypes.some((i) => i === x)

export function setDefinedGenericTypes(types: string[] = []) {
  envConfig.definedGenericTypes.push(...UniversalGenericTypes, ...AbpGenericTypes, ...types)
}

/**
 * 泛型类名提取数组
 * A<B<C>> => [A,B,C]
 **/
export function genericsToClassNames(modelName: string) {
  if (isGenerics(modelName)) {
    const names = modelName.split(/[<>]+/)
    names.pop()
    return names
  } else if (modelName.endsWith('[]')) return [modelName.replace('[]', '')]
  else {
    return [modelName]
  }
}


/**
 * 分解泛型接口
 * @param className
 */
export function splitGenericsClassName(className: string): string[] {
  if (/^.+\[.+\]$/.test(className)) {
    return className.split(/[\[\]]+/)
  } else if (/^.+\«.+\»$/.test(className)) {
    return className.split(/[«»]+/)
  } else if (/^.+\<.+\>$/.test(className)) {
    return className.split(/[<>]+/)
  }
  return []
}

/** 使类型数组转换成泛型名称 */
export function combineGenericsType(classNameArray: string[]): string {
  const [interfaceClassName, ...TClassName] = classNameArray
  return `${interfaceClassName}<${combineGenericsType(TClassName)}>`
}