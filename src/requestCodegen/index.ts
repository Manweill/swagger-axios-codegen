import { getMethodName } from '../utils'
import { IPaths } from '../swaggerInterfaces'
import { getRequestParameters } from './getRequestParameters'
import { getResponseType } from './getResponseType'
import camelcase from 'camelcase'

export interface IRequestClass {
  [key: string]: IRequestMethods[];
}

interface IRequestMethods {
  name: string;
  operationId: string;
  requestSchema: any;
}

export function requestCodegen(paths: IPaths): IRequestClass {
  const requestClasses: IRequestClass = {}

  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, reqProps] of Object.entries(request)) {
      // methodName = options.methodNameMode === 'operationId' ? reqProps.operationId : methodName
      const contentType =
        reqProps.consumes && reqProps.consumes.includes('multipart/form-data')
          ? 'multipart/form-data'
          : 'application/json'
      let formData = ''
      let pathReplace = ''
      // 获取类名
      if (!reqProps.tags) continue
      const className = camelcase(reqProps.tags[0], { pascalCase: true })
      if (className === '') continue
      // 是否存在
      if (!requestClasses[className]) {
        requestClasses[className] = []
      }
      let parameters = ''
      let handleNullParameters = ''
      let parsedParameters: any = {}
      if (reqProps.parameters) {
        // 获取到接口的参数
        parsedParameters = getRequestParameters(reqProps.parameters)

        parameters =
          parsedParameters.requestParameters.length > 0
            ? `params: {
              ${parsedParameters.requestParameters}
          } = {} as any,`
            : ''

        formData = parsedParameters.requestFormData ? 'data = new FormData();\n' + parsedParameters.requestFormData : ''
        pathReplace = parsedParameters.requestPathReplace
      }
      const { responseType, isRef: refResponseType } = getResponseType(reqProps)
      // 如果返回值也是引用类型，则加入到类的引用里面
      // console.log('refResponseType', responseType, refResponseType)
      if (refResponseType) {
        let imports = parsedParameters.imports || []
        imports.push(responseType)
        parsedParameters.imports = imports
      }
      // TODO 待优化，目前简单处理同名方法
      let uniqueMethodName = camelcase(methodName)
      var uniqueMethodNameReg = new RegExp(`${uniqueMethodName}\\d`)

      const methodCount = requestClasses[className].filter(item =>
        uniqueMethodName === item.name || uniqueMethodNameReg.test(item.name)
      ).length

      // console.log(uniqueMethodName, methodCount)
      if (methodCount >= 1) {
        uniqueMethodName = uniqueMethodName + (methodCount)
        // console.log(uniqueMethodName)
      }
      requestClasses[className].push({
        name: uniqueMethodName,
        operationId: reqProps.operationId,
        requestSchema: {
          summary: reqProps.summary,
          path,
          pathReplace,
          parameters,
          parsedParameters,
          method,
          contentType,
          responseType,
          formData
        }
      })
    }
  }
  return requestClasses
}
