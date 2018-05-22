import camelcase from 'camelcase'
import { toBaseType, refClassName, getMethodName } from './utils'
import { IParameter, IPaths, ISwaggerOptions } from './baseInterfaces'

declare class FormData {
  append: Function;
}

export interface IRequestMethods {
  [key: string]: string;
}
export interface IRequestMethodInput {
  [key: string]: string[];
}
const methodNameChange = { get: 'GET', post: 'POST', put: 'PUT', delete: 'DELETE' }
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
    requestParameters += `
    /** ${p.description || ''} */
    ${paramName}${p.required ? '' : '?'}:${propType},
    `

    // 如果参数是从formData 提交
    if (p.in === 'formData') {
      requestFormData += `
      if(params['${paramName}']){
        data.append('${paramName}',params['${paramName}'],'${paramName}')
      }\n
      `
    } else if (p.in === 'path') {
      requestPathReplace += `url = url.replace('{${paramName}}',params['${paramName}']+'')\n`
    } else if (p.in === 'query') {
      queryParameters.push(`'${paramName}':params['${paramName}']`)
    } else if (p.in === 'body') {
      var body = p.schema ? `...params['${paramName}']` : `'${paramName}':params['${paramName}']`
      bodyParameters.push(body)
    }
  })
  return { requestParameters, requestFormData, requestPathReplace, queryParameters, bodyParameters }
}

export function requestCodeGen(paths: IPaths, options: ISwaggerOptions): string {
  const RequestMethods: IRequestMethods = {}
  const RequestMethodInputs: IRequestMethodInput = {}
  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, v] of Object.entries(request)) {
      methodName = options.methodNameMode === 'operationId' ? v.operationId : methodName
      const contentType =
        v.consumes && v.consumes.includes('multipart/form-data') ? 'multipart/form-data' : 'application/json'
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
        let methodParamsName = `I${methodName}Params`

        if (RequestMethodInputs[methodParamsName]) {
          methodParamsName = `I${methodName}Params` + RequestMethodInputs[methodParamsName].length
        } else {
          RequestMethodInputs[methodParamsName] = []
        }

        RequestMethodInputs[`I${methodName}Params`].push(`
        export interface ${methodParamsName}{
          ${parsedParameters.requestParameters}
        }`)

        parameters = `params: ${methodParamsName}={},`
        formData = parsedParameters.requestFormData ? 'data = new FormData();\n' + parsedParameters.requestFormData : ''
        pathReplace = parsedParameters.requestPathReplace
      }

      let responseType =
        v.responses['200'] && v.responses['200'].schema && v.responses['200'].schema.$ref
          ? refClassName(v.responses['200'].schema.$ref)
          : 'any'

      // 模版
      RequestMethods[className] += `
      /**
         * ${v.summary || ''}
         * @param {IRequestOptions} [options] Override http request option.
         * @throws {RequiredError}
         */
      ${options.useStaticMethod ? 'static' : ''} ${camelcase(
        methodName
      )}(${parameters}options:IRequestOptions={}):AxiosPromise<${responseType}> {

        const configs = <AxiosRequestConfig>{ ...options,method:'${method}' };
        configs.headers = {
          ...options.headers,
          'Content-Type':'${contentType}'
        }

        let url = '${path}'
        ${pathReplace}
        configs.url = url;

        ${
          parsedParameters && parsedParameters.queryParameters.length > 0
            ? 'configs.params = {' + parsedParameters.queryParameters.join(',') + '}'
            : ''
        };

        let data = null;
        ${
          parsedParameters && parsedParameters.bodyParameters.length > 0
            ? 'data = {' + parsedParameters.bodyParameters.join(',') + '}'
            : ''
        };

        ${contentType === 'multipart/form-data' ? formData : ''}

        configs.data = data;

        return axios(configs);
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
  Object.values(RequestMethodInputs).forEach(item => {
    item.forEach(text => {
      RequestClasses += text
    })
  })
  return RequestClasses
}
