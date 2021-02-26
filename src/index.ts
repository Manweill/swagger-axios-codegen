require('module-alias/register')
import Axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerSource } from '@/types/SwaggerInterfaces.v3'
import { defaultOptions, envConfig, ICodegenOptions } from './envConfig'
import message from '@/utils/logTipsUtils'
import { customerReqClientServiceHeader, defaultServiceHeader } from '@/templates/serviceHeaderTemplate'
import { FileFormat, writeFile } from '@/utils/fileUtils'
import { codegenMultipleFile } from '@/codegen/codegen.multiple'
import { codegenAll } from '@/codegen/codegen.default'
import { codegenFilter } from '@/codegen/codegen.filter'
import { getComponentsSpec } from '@/components'
import { enumTemplate, typeTemplate } from '@/templates/enumTemplate'
import { classTemplate, interfaceTemplate } from '@/templates/classTemplate'

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

  /**API文件字符串 */
  let apiSourceString = ''

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
    apiSourceString += `import { IRequestOptions, IRequestConfig, getConfigs, axios } from "./serviceOptions";`
  } else {
    apiSourceString += serviceHeaderSource
  }

  // 获取所有的class定义
  const { enums, models } = getComponentsSpec(swaggerSource.components)
  const _allModel = Object.values(models)
  const _allEnum = Object.values(enums)

  // 处理类和枚举

  _allModel.forEach((item) => {
    const text =
      envConfig.options.modelMode === 'interface'
        ? interfaceTemplate(item.value.name, item.value.props, [], envConfig.options.strictNullChecks)
        : classTemplate(
            item.value.name,
            item.value.props,
            [],
            envConfig.options.strictNullChecks,
            envConfig.options.useClassTransformer,
            envConfig.options.generateValidationModel
          )
    apiSourceString += text
  })

  _allEnum.forEach((item) => {
    let text = ''
    if (item.value) {
      if (item.value.type == 'string') {
        const enumString = item.value.props.map(({ name, value }) => `'${name}'='${value}'`).join(',')
        text = enumTemplate(item.value.name, enumString, envConfig.options.enumNamePrefix)
      } else {
        const enumString = item.value.props.map((item) => item.value).join('|')
        text = typeTemplate(item.value.name, enumString, envConfig.options.enumNamePrefix)
      }
    } else {
      text = item.content || ''
    }
    apiSourceString += text
  })

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
  // 生成文件
  writeFile(envConfig.options.outputDir, envConfig.options.fileName, apiSourceString)
  if (fs.existsSync('./__cache_swagger.json')) {
    fs.unlinkSync('./__cache_swagger.json')
  }
  console.timeEnd('codegen')
}
