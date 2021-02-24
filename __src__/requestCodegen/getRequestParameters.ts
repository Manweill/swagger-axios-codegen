import { IParameter } from '../swaggerInterfaces'

import { refClassName, toBaseType, RemoveSpecialCharacters } from '../utils'

import camelcase from 'camelcase'

/**
 * 参数去重
 * 后台书写不规范,存在参数重名的情况
 * @param params 
 */
function getUniqParams(params: IParameter[]): IParameter[] {
  const uniqParams: Record<string, IParameter> = {}
  params.forEach(v => {
    // _${v.in}
    // TODO:同名但是v.in= query |path |body 的情况同时出现如何处理？分出不同的request参数？
    if (!v.name.includes('[0]')) { //DTO class中存在List<T>时会出现这种参数 (list[0].prop)
      uniqParams[`${v.name}`] = v;
    }
  })
  return Object.values(uniqParams)
}

/**
 * 生成参数
 * @param params
 */
export function getRequestParameters(params: IParameter[]) {
  params = getUniqParams(params)
  let requestParameters = ''
  let requestFormData = ''
  let requestPathReplace = ''
  let queryParameters: string[] = []
  let bodyParameters: string[] = []
  let imports: string[] = []
  let moreBodyParams = params.filter(item => item.in === 'body').length > 1
  params.forEach(p => {
    let propType = ''
    // 引用类型定义
    if (p.schema) {
      if (p.schema.items) {
        propType = refClassName(p.schema.items.$ref)
        if (p.schema.type && p.schema.type === 'array') {
          propType += '[]'
        }
      } else if (p.schema.$ref) {
        propType = refClassName(p.schema.$ref)
        // console.log('propType', refClassName(p.schema.$ref))
      } else if (p.schema.type) {
        propType = toBaseType(p.schema.type)
      } else {
        throw new Error('Could not find property type on schema')
      }
      imports.push(propType)
    } else if (p.items) {
      propType = p.items.$ref ? refClassName(p.items.$ref) + '[]' : toBaseType(p.items.type) + '[]'
      imports.push(propType)
    }
    // 基本类型
    else {
      propType = toBaseType(p.type)
    }

    const paramName = camelcase(p.name)
    requestParameters += `
    /** ${p.description || ''} */
    ${paramName}${p.required ? '' : '?'}:${propType},`

    // 如果参数是从formData 提交
    if (p.in === 'formData') {
      requestFormData += `if(params['${paramName}']){
        data.append('${p.name}',params['${paramName}'] as any)
      }\n
      `
    } else if (p.in === 'path') {
      requestPathReplace += `url = url.replace('{${p.name}}',params['${paramName}']+'')\n`
    } else if (p.in === 'query') {
      queryParameters.push(`'${p.name}':params['${paramName}']`)
    } else if (p.in === 'body') {
      const body = moreBodyParams ? `'${p.name}':params['${paramName}']` : `params['${paramName}']`

      // var body = p.schema
      //   ? p.schema.type === 'array'
      //     ? `[...params['${paramName}']]`
      //     : `...params['${paramName}']`
      //   : `'${p.name}':params['${paramName}']`
      bodyParameters.push(body)
    }
  })
  const bodyParameter = moreBodyParams ? `{${bodyParameters.join(',')}}` : bodyParameters.join(',')
  return { requestParameters, requestFormData, requestPathReplace, queryParameters, bodyParameter, imports }
}
