import Axios from "axios";
import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerSource } from "./types/CodegenInterfaces";
import { defaultOptions, envConfig, ICodegenOptions } from "./envConfig";
import message from "./utils/logTipsUtils";
import { customerReqClientServiceHeader, defaultServiceHeader } from "./templates/serviceHeaderTemplate";
import { FileFormat, writeFile } from "./utils/fileUtils";

/**
 * main
 */
export async function codegen(params: ICodegenOptions) {
  console.time('codegen')
  let err
  let swaggerSource: ISwaggerSource

  // 合并参数
  envConfig.options = {
    ...defaultOptions,
    ...params
  }

  // 获取接口定义文件
  console.time(message.success('request and format spec'))
  if (params.remoteUrl) {
    const { data: swaggerJson } = await Axios({ url: params.remoteUrl, responseType: 'text' })
    if (Object.prototype.toString.call(swaggerJson) === '[object String]') {
      fs.writeFileSync('./cache_swagger.json', swaggerJson)
      swaggerSource = require(path.resolve('./cache_swagger.json'))
    } else {
      swaggerSource = <ISwaggerSource>swaggerJson
    }
  } else if (params.source) {
    swaggerSource = <ISwaggerSource>params.source
  } else {
    throw new Error('remoteUrl or source must have a value')
  }
  console.timeEnd(message.success('request and format spec'))

  // API文件字符串
  let apiSource = ''

  //生成服务文件头
  let serviceHeaderSource = envConfig.options.useCustomerRequestInstance ? customerReqClientServiceHeader(swaggerSource.basePath) : defaultServiceHeader(swaggerSource.basePath)
  if (envConfig.options.serviceOptionsMode === 'shared') {
    writeFile(envConfig.options.outputDir || '', 'serviceOptions.ts' || '', FileFormat(serviceHeaderSource, envConfig.options))
    apiSource += `import { IRequestOptions, IRequestConfig, getConfigs, axios } from "./serviceOptions";`
  }
  else {
    apiSource += serviceHeaderSource
  }

  console.timeEnd('codegen')
}