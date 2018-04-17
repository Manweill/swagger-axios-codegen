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
  let requestParameters = ''
  let requestFormData = ''
  let requestPathReplace = ''
  let queryParameters: string[] = []
  let bodyParameters: string[] = []
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
    requestParameters += `${paramName}${p.required ? '' : '?'}:${propType},`
    // 如果参数是从formData 提交
    if (p.in === 'formData') {
      requestFormData += `
      if(parameters['${paramName}']){
        data.append('${paramName}',parameters['${paramName}'],'${paramName}')
      }\n
      `
    }
    else if (p.in === 'path') {
      requestPathReplace += `url = url.replace('{${paramName}}',parameters['${paramName}']+'')\n`
    }
    else if (p.in === 'query') {
      queryParameters.push(`'${paramName}':parameters['${paramName}']`)
    }
    else if (p.in === 'body') {
      var body = p.schema ? `...parameters['${paramName}']` : `'${paramName}':parameters['${paramName}']`
      bodyParameters.push(body)
    }
  })
  return { requestParameters, requestFormData, requestPathReplace, queryParameters, bodyParameters }
}

export function requestCodeGen(paths: IPaths, options: ISwaggerOptions): string {
  const RequestMethods: IRequestMethods = {}

  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, v] of Object.entries(request)) {
      methodName = options.methodNameMode === 'operationId' ? v.operationId : methodName
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
      let parsedParameters
      if (v.parameters) {
        parsedParameters = getRequestParameters(v.parameters)
        parameters = `parameters: {${parsedParameters.requestParameters}},`
        formData = parsedParameters.requestFormData ? 'let data = new FormData();\n' + parsedParameters.requestFormData : ''
        pathReplace = parsedParameters.requestPathReplace;
      }

      let responseType =
        v.responses['200'] &&
          v.responses['200'].schema &&
          v.responses['200'].schema.$ref ?
          refClassName(v.responses['200'].schema.$ref) : 'any'

      RequestMethods[className] += `
      /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
      ${options.useStaticMethod ? 'static' : ''} ${camelcase(methodName)}(${parameters}options:IRequestOptions={}):AxiosPromise<${responseType}> {

        let headers = {
          'Content-Type': '${contentType}',
          ...options.headers
        }

        let url = '${path}'
        ${pathReplace}

        let search = ${parsedParameters && parsedParameters.queryParameters.length > 0 ? "{" + parsedParameters.queryParameters.join(',') + "}" : null}
        let body = ${parsedParameters && parsedParameters.bodyParameters.length > 0 ? "{" + parsedParameters.bodyParameters.join(',') + "}" : null}

        ${contentType === 'multipart/form-data' ? formData : ''}

        return axios({
          ...options,
          method: '${method}',
          url,
          search:search,
          headers:headers,
          ${parameters ? contentType === 'multipart/form-data' ? 'data:data'
          : 'data:body' : ''
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
