import camelcase from 'camelcase'
import { toBaseType, refClassName, getMethodName } from './utils'
import { IParameter, IPaths, ISwaggerOptions } from './baseInterfaces'

export interface IRequestMethods {
  [key: string]: string
}
/**
 * 生成参数
 * @param params
 */
function getRequestParameters(params: IParameter[]) {
  let requesetParameters = ''
  let requestFormData = ''
  let requestPathReplace = ''
  params.forEach(p => {
    let propType = ''
    // 引用类型定义
    if (p.schema) {
      propType = p.schema.items ? refClassName(p.schema.items.$ref) : refClassName(p.schema.$ref)
    } else if (p.items) {
      propType = p.items.$ref ? refClassName(p.items.$ref) + '[]' : toBaseType(p.items.type) + '[]'
    }
    // 基本类型
    else {
      propType = toBaseType(p.type)
    }
    const paramName = camelcase(p.name)
    requesetParameters += `${paramName}${p.required ? '' : '?'}:${propType},`
    // 如果参数是从formData 提交
    if (p.in === 'formData') {
      requestFormData += `
      if(parameters['${paramName}']){
        data.append('${paramName}',parameters['${paramName}'],'${paramName}')
      }\n
      `
    }
    else if (p.in === 'path') {
      requestPathReplace += `path = path.replace('{${paramName}}',parameters['${paramName}']+'')\n`
    }
  })
  return { requesetParameters, requestFormData, requestPathReplace }
}

export function requestCodeGen(paths: IPaths, options: ISwaggerOptions): string {
  const RequestMethods: IRequestMethods = {}

  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, v] of Object.entries(request)) {
      methodName = options.methodMode === 'operationId' ? v.operationId : methodName
      const contentType = v.consumes && v.consumes.includes('multipart/form-data') ? 'multipart/form-data' : 'application/json'
      let formData = ''
      let pathReplace = ''
      // 获取类名
      const className = v.tags[0]
      // 是否存在
      if (!RequestMethods[className]) {
        RequestMethods[className] = ''
      }
      let parameters = ''
      if (v.parameters) {
        const { requesetParameters, requestFormData, requestPathReplace } = getRequestParameters(v.parameters)
        parameters = `parameters: {${requesetParameters}},`
        formData = requestFormData ? 'let data = new FormData();\n' + requestFormData : ''
        pathReplace = requestPathReplace;
      }

      RequestMethods[className] += `
      ${camelcase(methodName)}(${parameters}options:IRequestOptions={}) {

        let headers = {
          'Content-Type': '${contentType}',
          ...options.headers
        }

        let path = '${path}'
        ${pathReplace}

        ${contentType === 'multipart/form-data' ? formData : ''}

        return axios({
          method: '${method}',
          url: path,
          headers:headers,
          ${parameters ? contentType === 'multipart/form-data' ? 'data:data'
          : 'data:parameters' : ''
        }
        })
      }
      `
    }
  }

  let RequestClasses = ''

  for (const [k, v] of Object.entries(RequestMethods)) {
    RequestClasses += `
    export class ${k}Service {
      ${v}
    }`
  }
  return RequestClasses
}
