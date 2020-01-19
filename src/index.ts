import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier'
import axios from 'axios'
import pascalcase from 'pascalcase'
import { ISwaggerOptions, IInclude } from './baseInterfaces'
import { ISwaggerSource } from './swaggerInterfaces'
import {
  requestTemplate,
  serviceTemplate,
  enumTemplate,
  interfaceTemplate,
  classTemplate,
  typeTemplate
} from './templates/template'
import { customerServiceHeader, serviceHeader } from './templates/serviceHeader'
import { isOpenApi3, findDeepRefs, setDefinedGenericTypes } from './utils'
import { requestCodegen } from './requestCodegen'
import { componentsCodegen } from './componentsCodegen'
import { definitionsCodeGen } from './definitionCodegen'

const defaultOptions: ISwaggerOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  modelMode: 'interface',
  include: [],
  strictNullChecks: true,
  useClassTransformer: false,
  extendGenericType: []
}

export async function codegen(params: ISwaggerOptions) {
  console.time('finish')
  let err
  let swaggerSource: ISwaggerSource
  setDefinedGenericTypes(params.extendGenericType)
  // 获取接口定义文件
  if (params.remoteUrl) {
    const { data: swaggerJson } = await axios({ url: params.remoteUrl, responseType: 'text' })
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

  const options: ISwaggerOptions = {
    ...defaultOptions,
    ...params
  }
  let apiSource = options.useCustomerRequestInstance ? customerServiceHeader(options) : serviceHeader(options)
  // 判断是否是openApi3.0或者swagger3.0
  const isV3 = isOpenApi3(params.openApi || swaggerSource.openapi || swaggerSource.swagger)
  let requestClasses = Object.entries(requestCodegen(swaggerSource.paths))

  const { models, enums } = isV3
    ? componentsCodegen(swaggerSource.components)
    : definitionsCodeGen(swaggerSource.definitions)

  // TODO: next next next time
  // if (options.multipleFileMode) {
  if (false) {
    Object.entries(requestCodegen(swaggerSource.paths)).forEach(([className, requests]) => {
      let text = ''
      requests.forEach(req => {
        const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
        text += requestTemplate(reqName, req.requestSchema, options)
      })
      text = serviceTemplate(className + options.serviceNameSuffix, text)
      apiSource += text
    })
    writeFile(options.outputDir || '', 'index.service.ts', format(apiSource, options))

    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)
    let defsString = ''
    Object.values(enums).forEach(item => {
      const text = item.value ? enumTemplate(item.value.name, item.value.enumProps, 'Enum') : item.content || ''

      // const fileDir = path.join(options.outputDir || '', 'definitions')
      // writeFile(fileDir, item.name + '.ts', format(text, options))
      defsString += text
    })

    Object.values(models).forEach(item => {
      const text =
        params.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
          : classTemplate(
              item.value.name,
              item.value.props,
              [],
              params.strictNullChecks,
              options.useClassTransformer,
              options.generateValidationModel
            )
      // const fileDir = path.join(options.outputDir || '', 'definitions')
      // writeFile(fileDir, item.name + '.ts', format(text, options))
      defsString += text
    })
    writeFile(options.outputDir || '', 'index.defs.ts', format(defsString, options))
  } else if (options.include && options.include.length > 0) {
    // 接口过滤入口
    let reqSource = ''
    let defSource = ''

    let allModel = Object.values(models)
    // console.log(allModel)
    let allEnum = Object.values(enums)
    let allImport: string[] = []

    // 处理接口

    options.include.forEach(item => {
      let includeClassName = ''
      let includeRequests: string[] = null
      if (Object.prototype.toString.call(item) === '[object String]') {
        includeClassName = <string>item
      } else {
        for (let k of Object.keys(item)) {
          includeClassName = k
          includeRequests = (<IInclude>item)[k]
        }
      }
      for (let [className, requests] of requestClasses) {
        if (pascalcase(includeClassName) !== className) continue
        let text = ''
        for (let req of requests) {
          const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
          if (includeRequests) {
            if (includeRequests.includes(reqName)) {
              text += requestTemplate(reqName, req.requestSchema, options)
              // generate ref definition model
              let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, allModel, allEnum)
              allImport = allImport.concat(imports)
            }
          } else {
            text += requestTemplate(reqName, req.requestSchema, options)
            let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, allModel, allEnum)
            allImport = allImport.concat(imports)
          }
        }

        text = serviceTemplate(className + options.serviceNameSuffix, text)
        reqSource += text
      }
    })

    // 处理类和枚举

    allModel.forEach(item => {
      if (allImport.includes(item.name)) {
        const text =
          params.modelMode === 'interface'
            ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
            : classTemplate(
                item.value.name,
                item.value.props,
                [],
                params.strictNullChecks,
                options.useClassTransformer,
                options.generateValidationModel
              )
        defSource += text
      }
    })

    allEnum.forEach(item => {
      if (allImport.includes(item.name)) {
        let text = ''
        if (item.value) {
          if (item.value.type == 'string') {
            text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          } else {
            text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          }
        } else {
          text = item.content || ''
        }

        defSource += text
      }
    })

    apiSource += reqSource + defSource
    writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
  } else {
    // 常规入口
    try {
      // 处理接口
      requestClasses.forEach(([className, requests]) => {
        let text = ''
        requests.forEach(req => {
          const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
          text += requestTemplate(reqName, req.requestSchema, options)
        })
        text = serviceTemplate(className + options.serviceNameSuffix, text)
        apiSource += text
      })

      // 处理类和枚举

      Object.values(models).forEach(item => {
        const text =
          params.modelMode === 'interface'
            ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
            : classTemplate(
                item.value.name,
                item.value.props,
                [],
                params.strictNullChecks,
                options.useClassTransformer,
                options.generateValidationModel
              )
        apiSource += text
      })

      Object.values(enums).forEach(item => {
        let text = ''
        if (item.value) {
          if (item.value.type == 'string') {
            text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          } else {
            text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          }
        } else {
          text = item.content || ''
        }
        apiSource += text
      })

      writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
    } catch (error) {
      console.log('error', error)
      err = error
    }
  }
  if (fs.existsSync('./cache_swagger.json')) {
    fs.unlinkSync('./cache_swagger.json')
  }
  console.timeEnd('finish')
  if (err) {
    throw err
  }
}

function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir)
  }
  const filename = path.join(fileDir, name)
  console.log('filename', filename)
  fs.writeFileSync(filename, data)
}

function format(text: string, options: ISwaggerOptions) {
  if (options.format) {
    console.log('use custom formatter')
    return options.format(text)
  }
  console.log('use default formatter')
  return prettier.format(text, {
    printWidth: 120,
    tabWidth: 2,
    parser: 'typescript',
    trailingComma: 'none',
    jsxBracketSameLine: false,
    semi: true,
    singleQuote: true
  })
  // return text
}
