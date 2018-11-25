import camelcase from 'camelcase';
import pascalcase from 'pascalcase';
import { refClassName, getMethodName } from '../utils'
import { IPaths, ISwaggerOptions } from '../baseInterfaces'
import { getRequestParameters } from './getRequestParameters';
import { getResponseType } from './getResponseType';

export interface IRequestMethods {
  [key: string]: string;
}
export interface IRequestMethodInput {
  [key: string]: string[];
}
const methodNameChange = { get: 'GET', post: 'POST', put: 'PUT', delete: 'DELETE' }


export function requestCodegen(paths: IPaths, options: ISwaggerOptions): string {
  const RequestMethods: IRequestMethods = {}
  const RequestMethodInputs: IRequestMethodInput = {}

  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, reqProps] of Object.entries(request)) {

      methodName = options.methodNameMode === 'operationId' ? reqProps.operationId : methodName
      const contentType =
        reqProps.consumes && reqProps.consumes.includes('multipart/form-data') ? 'multipart/form-data' : 'application/json'
      let formData = ''
      let pathReplace = ''
      // 获取类名
      if (!reqProps.tags) continue;
      const className = reqProps.tags[0]
      // 是否存在
      if (!RequestMethods[className]) {
        RequestMethods[className] = ''
      }
      let parameters = ''
      let handleNullParameters = ''
      let parsedParameters
      if (reqProps.parameters) {
        // 获取到接口的参数
        parsedParameters = getRequestParameters(reqProps.parameters)
        // //参数类型的名字
        // let methodParamsName = `I${pascalcase(methodName)}Params`

        // // 如果存在该参数类型的名字，则在参数类型的名字后面+1
        // if (RequestMethodInputs[methodParamsName]) {
        //   methodParamsName = `I${pascalcase(methodName)}Params` + RequestMethodInputs[methodParamsName].length
        // } else {
        //   RequestMethodInputs[methodParamsName] = []
        // }

        // RequestMethodInputs[`I${pascalcase(methodName)}Params`].push(`export interface ${methodParamsName}{
        //     ${parsedParameters.requestParameters}
        //   }`)

        parameters = parsedParameters.requestParameters.length > 0
          ? `params: {
              ${parsedParameters.requestParameters}
          } = <any>{},`
          : ''
        // handleNullParameters = parsedParameters.requestParameters.length > 0
        //   ? `params  = params || <any>{}`
        //   : ''
        formData = parsedParameters.requestFormData ? 'data = new FormData();\n' + parsedParameters.requestFormData : ''
        pathReplace = parsedParameters.requestPathReplace
      }

      // 确定响应的类型
      let responseType = getResponseType(reqProps)

      // 模版
      RequestMethods[className] += `
      /**
         * ${reqProps.summary || ''}
         */
      ${options.useStaticMethod ? 'static' : ''} ${camelcase(methodName)}(${parameters}options:IRequestOptions={}):Promise<${responseType}> {
      return new Promise((resolve, reject) => {
        const configs:IRequestConfig = {...options, method: "${method}" };
        configs.headers = {
          ...options.headers,
          'Content-Type':'${contentType}'
        }
        let url = '${path}'
        ${pathReplace}
        configs.url = url
        ${parsedParameters && parsedParameters.queryParameters.length > 0
          ? 'configs.params = {' + parsedParameters.queryParameters.join(',') + '}'
          : ''
        }
        let data = ${parsedParameters && parsedParameters.bodyParameters.length > 0
          ? '{' + parsedParameters.bodyParameters.join(',') + '}'
          : 'null'
        }
        ${contentType === 'multipart/form-data' ? formData : ''}
        configs.data = data;
        axios(configs).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        });
      });
    }`;
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
