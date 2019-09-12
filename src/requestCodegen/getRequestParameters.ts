import { IParameter } from '../swaggerInterfaces'

import { refClassName, toBaseType } from '../utils'

import camelcase from 'camelcase'

/**
 * 生成参数
 * @param params
 */
export function getRequestParameters(params: IParameter[]) {
  let requestParameters = ''
  let requestFormData = ''
  let requestPathReplace = ''
  let queryParameters: string[] = []
  let bodyParameters: string[] = []
  let imports: string[] = []
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
        propType = p.schema.type
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
      var body = p.schema
        ? p.schema.type === 'array'
          ? `[...params['${paramName}']]`
          : `...params['${paramName}']`
        : `'${p.name}':params['${paramName}']`
      bodyParameters.push(body)
    }
  })
  return { requestParameters, requestFormData, requestPathReplace, queryParameters, bodyParameters, imports }
}
