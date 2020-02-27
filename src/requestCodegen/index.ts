import { getMethodName, RemoveSpecialCharacters } from '../utils'
import { IPaths } from '../swaggerInterfaces'
import { getRequestParameters } from './getRequestParameters'
import { getResponseType } from './getResponseType'
import camelcase from 'camelcase'
import { isNullOrUndefined } from 'util'
import { getRequestBody } from './getRequestBody'
import { ISwaggerOptions } from '../baseInterfaces'

export interface IRequestClass {
  [key: string]: IRequestMethods[];
}

interface IRequestMethods {
  name: string;
  operationId: string;
  requestSchema: any;
}

export function requestCodegen(paths: IPaths, isV3: boolean, options: ISwaggerOptions): IRequestClass {
  const requestClasses: IRequestClass = {}

  for (const [path, request] of Object.entries(paths)) {
    let methodName = getMethodName(path)
    for (const [method, reqProps] of Object.entries(request)) {
      methodName = options.methodNameMode === 'operationId' ? reqProps.operationId : methodName
      const contentType =
        reqProps.consumes && reqProps.consumes.includes('multipart/form-data')
          ? 'multipart/form-data'
          : 'application/json'
      let formData = ''
      let pathReplace = ''
      // 获取类名
      if (!reqProps.tags) continue
      const className = camelcase(RemoveSpecialCharacters(reqProps.tags[0]), { pascalCase: true })
      if (className === '') continue
      // 是否存在
      if (!requestClasses[className]) {
        requestClasses[className] = []
      }
      let parameters = ''
      let handleNullParameters = ''
      let parsedParameters: any = {
        requestParameters: ''
      }
      if (reqProps.parameters) {
        // 获取到接口的参数
        parsedParameters = getRequestParameters(reqProps.parameters)

        formData = parsedParameters.requestFormData ? 'data = new FormData();\n' + parsedParameters.requestFormData : ''
        pathReplace = parsedParameters.requestPathReplace
      }

      let imports = parsedParameters.imports || []

      let parsedRequestBody: any = {}
      if (reqProps.requestBody) {
        parsedRequestBody = getRequestBody(reqProps.requestBody)

        // 合并imports
        if (parsedParameters.imports) {
          imports.push(parsedRequestBody.imports)
        }

        parsedParameters.requestParameters = parsedParameters.requestParameters
          ? parsedParameters.requestParameters + parsedRequestBody.bodyType
          : parsedRequestBody.bodyType
      }

      parameters =
        parsedParameters.requestParameters?.length > 0
          ? `params: {
              ${parsedParameters.requestParameters}
          } = {} as any,`
          : ''

      const { responseType, isRef: refResponseType } = getResponseType(reqProps, isV3)
      // 如果返回值也是引用类型，则加入到类的引用里面
      // console.log('refResponseType', responseType, refResponseType)

      if (refResponseType) {
        imports.push(responseType)
      }

      parsedParameters.imports = imports

      // TODO 待优化，目前简单处理同名方法
      let uniqueMethodName = camelcase(methodName)

      var uniqueMethodNameReg = new RegExp(`^${uniqueMethodName}[0-9]*$`)

      const methodCount = requestClasses[className].filter(
        item => uniqueMethodName === item.name || uniqueMethodNameReg.test(item.name)
      ).length

      // console.log(uniqueMethodName, methodCount)
      if (methodCount >= 1) {
        uniqueMethodName = uniqueMethodName + methodCount
        // console.log(uniqueMethodName)
      }
      requestClasses[className].push({
        name: uniqueMethodName,
        operationId: uniqueMethodName,
        requestSchema: {
          summary: reqProps.summary,
          path,
          pathReplace,
          parameters,
          parsedParameters,
          method,
          contentType,
          responseType,
          formData,
          requestBody: parsedRequestBody.bodyType
        }
      })
    }
  }
  return requestClasses
}
