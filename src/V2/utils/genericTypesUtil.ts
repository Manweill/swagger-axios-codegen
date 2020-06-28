import { config } from "../envConfig"

const UniversalGenericTypes = ['IList', 'List']
const AbpGenericTypes = ['IListResult', 'ListResultDto', 'IPagedResult', 'PagedResultDto', 'Dictionary', 'IDictionary']

// 是否是接口类型
export const isOpenApiGenerics = (s: string) => /^.+\[.+\]$/.test(s) || /^.+\«.+\»$/.test(s) || /^.+\<.+\>$/.test(s)

export const isGenerics = (s: string) => {
  return /^.+\<.+\>$/.test(s)
};
export const isDefinedGenericTypes = (x: string) => config.definedGenericTypes.some(i => i === x)

export function setDefinedGenericTypes(types: string[] = []) {
  config.definedGenericTypes.push(...UniversalGenericTypes, ...AbpGenericTypes, ...types)
}