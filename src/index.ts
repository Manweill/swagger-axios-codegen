require('module-alias/register')
import Axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerSource } from '@/types/CodegenInterfaces'
import { defaultOptions, envConfig, ICodegenOptions } from './envConfig'
import message from '@/utils/logTipsUtils'
import { customerReqClientServiceHeader, defaultServiceHeader } from '@/templates/serviceHeaderTemplate'
import { FileFormat, writeFile } from '@/utils/fileUtils'
import { codegenMultipleFile } from '@/codegen/codegen.multiple'
import { codegenAll } from '@/codegen/codegen.default'
import { codegenFilter } from '@/codegen/codegen.filter'

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
      fs.writeFileSync('./__cache_swagger.json', swaggerJson)
      swaggerSource = require(path.resolve('./__cache_swagger.json'))
    } else {
      swaggerSource = <ISwaggerSource>swaggerJson
    }
  } else if (params.source) {
    swaggerSource = <ISwaggerSource>params.source
  } else {
    console.log(message.error('remoteUrl or source is undefined'))
    return
  }
  console.timeEnd(message.success('request and format spec'))

  // API文件字符串
  let apiSource = ''

  //生成服务文件头
  const serviceHeaderSource = envConfig.options.useCustomerRequestInstance
    ? customerReqClientServiceHeader(swaggerSource.basePath)
    : defaultServiceHeader(swaggerSource.basePath)
  if (envConfig.options.serviceOptionsMode === 'shared') {
    writeFile(
      envConfig.options.outputDir || '',
      'serviceOptions.ts' || '',
      FileFormat(serviceHeaderSource, envConfig.options)
    )
    apiSource += `import { IRequestOptions, IRequestConfig, getConfigs, axios } from "./serviceOptions";`
  } else {
    apiSource += serviceHeaderSource
  }

  // 获取所有的class定义

  // 获取所有的request定义

  // 过滤请求方法已经class
  if (envConfig.options.include) {
    codegenFilter()
  }

  // 判断是否是多文件模式，默认单文件模式
  if (envConfig.options.multipleFileMode) {
    codegenMultipleFile()
  } else {
    codegenAll()
  }

  if (fs.existsSync('./__cache_swagger.json')) {
    fs.unlinkSync('./__cache_swagger.json')
  }
  console.timeEnd('codegen')
}
