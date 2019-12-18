import { IDefinitionClass, IDefinitionEnum } from './baseInterfaces'

export const GENERIC_SPLIT_KEY = '['

// 是否是接口类型
export const isOpenApiGenerics = (s: string) => (/^.+\[.+\]$/.test(s) || /^.+\«.+\»$/.test(s) || /^.+\<.+\>$/.test(s))
export const isGenerics = (s: string) => /^.+\<.+\>$/.test(s)

export const isUniversalGenericTypeDefinition = (x: string) => ['IList', 'List'].some(i => i === x)
export const isAbpGenericTypes = (x: string) => ['IListResult', 'ListResultDto', 'IPagedResult', 'PagedResultDto'].some(i => i === x)
/**
 * 分解泛型接口
 * @param definitionClassName
 */
export function getGenericsClassNames(definitionClassName: string) {
  const splitIndex = definitionClassName.indexOf(GENERIC_SPLIT_KEY)
  // 泛型基类 PagedResultDto
  const interfaceClassName = definitionClassName.slice(0, splitIndex)
  // 泛型类型 T 的类型名称
  const TClassName = definitionClassName.slice(splitIndex + 1, -1)
  return { interfaceClassName, TClassName }
}

/**
 * 获取引用类型
 * @param s
 */
export function refClassName(s: string, ) {
  let propType = s?.slice(s.lastIndexOf('/') + 1)
  // console.log('refClassName', propType, isGenerics(propType))
  if (isOpenApiGenerics(propType)) {
    let str = ''
    const { interfaceClassName, TClassName } = getGenericsClassNames(propType)
    if (isUniversalGenericTypeDefinition(interfaceClassName) || isAbpGenericTypes(interfaceClassName)) {
      // console.log('isOpenApiGenerics', propType)
      str = `${interfaceClassName}<${refClassName(TClassName)}>`
    } else {
      str = trimString(RemoveSpecialCharacters(propType), '_', 'right')
    }
    // str = trimString(RemoveSpecialCharacters(propType), '_', 'right')
    return str
  } else {
    return propType
  }
}

/** 移除特殊字符 */
export function RemoveSpecialCharacters(str: string) {
  return str?.replace(/[`~!@#$%^&*()_+<>«»?:"{},.\/;'[\]]/g, '_')
}

export function isBaseType(s: string) {
  return ['boolean', 'number', 'string', 'string', 'Date', 'any'].includes(s)
}

export function toBaseType(s: string, format?: string) {
  if (s === undefined || s === null || s.length === 0) {
    return 'any | null'
  }
  let result = ''
  switch (s) {
    case 'boolean':
    case 'bool':
    case 'Boolean':
      result = 'boolean'
      break
    case 'array':
      result = '[]'
      break
    case 'Int64':
    case 'integer':
    case 'number':
      result = 'number'
      break
    case 'Guid':
    case 'String':
    case 'string':
    case 'uuid':
      switch (format) {
        case 'date':
        case 'date-time':
          result = 'Date';
          break
        default:
          result = 'string';
      }
      break
    case 'file':
      result = 'any'
      break
    default:
      result = s
      break
  }
  return result
}

export function getMethodName(path: string) {
  const paths = path.split('/')
  for (let i = paths.length - 1; i >= 0; i--) {
    if (/\{.+\}/.test(paths[i]) === false) {
      return paths[i]
    }
  }
  return ''
}


export function trimString(str: string, char: string, type: string) {
  if (char) {
    if (type == 'left') {
      return str.replace(new RegExp('^\\' + char + '+', 'g'), '')
    } else if (type == 'right') {
      return str.replace(new RegExp('\\' + char + '+$', 'g'), '')
    }
    return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
  }
  return str.replace(/^\s+|\s+$/g, '')
}

export function findDeepRefs(imports: string[], allDefinition: IDefinitionClass[], allEnums: IDefinitionEnum[]) {
  let result: string[] = []
  imports.forEach(model => {
    let ref = null

    ref = allDefinition.find(item => model.startsWith(item.name))

    if (ref) {
      result.push(ref.name)
      if (ref.value.imports.length > 0) {
        result = result.concat(findDeepRefs(ref.value.imports, allDefinition, allEnums))
      }
    } else {
      ref = allEnums.find(item => model.startsWith(item.name))
      if (ref) {
        result.push(ref.name)
      }
    }
  })
  return result;
}

export function isOpenApi3(version: string) {
  console.log('openApi version：', version)
  return version.startsWith("3.", 0);
}