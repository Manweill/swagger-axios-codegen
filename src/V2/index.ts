import Axios from "axios";
import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerSource } from "./types/baseInterfaces";
import { defaultOptions, config, ICodegenOptions } from "./envConfig";

/**
 * main
 */
export async function codegen(params: ICodegenOptions) {
  console.time('codegen')
  let err
  let swaggerSource: ISwaggerSource

  config.options = {
    ...defaultOptions,
    ...params
  }

  // 获取接口定义文件
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

  console.timeEnd('codegen')
}