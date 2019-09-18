import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier';
import axios from 'axios';
import pascalcase from 'pascalcase'
import { ISwaggerSource } from './swaggerInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { enumTemplate, classTemplate, serviceHeader, customerServiceHeader, serviceTemplate, requestTemplate, interfaceTemplate } from './template';
import { requestCodegen } from './requestCodegen';
import { ISwaggerOptions, IInclude } from './baseInterfaces';
import { findDeepRefs } from './utils';

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
}


export async function codegen(params: ISwaggerOptions) {
  console.time('finish')
  let err
  let swaggerSource

  if (params.remoteUrl) {
    const { data: swaggerJson } = await axios({ url: params.remoteUrl, responseType: 'text' })
    if (Object.prototype.toString.call(swaggerJson) === '[object String]') {
      fs.writeFileSync('./cache_swagger.json', swaggerJson);
      swaggerSource = require(path.resolve('./cache_swagger.json'));
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
  let apiSource = options.useCustomerRequestInstance
    ? customerServiceHeader(options)
    : serviceHeader(options)
  // TODO: next next next time
  // if (options.multipleFileMode) {
  if (false) {

    Object.entries(requestCodegen(swaggerSource.paths)).forEach(([className, requests]) => {
      let text = ''
      requests.forEach(req => {

        const reqName = options.methodNameMode == "operationId"
          ? req.operationId
          : req.name
        text += requestTemplate(reqName, req.requestSchema, options)
      })
      text = serviceTemplate(className + options.serviceNameSuffix, text)
      apiSource += text
    })
    writeFile(options.outputDir || '', 'index.service.ts', format(apiSource, options))

    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)
    let defsString = ''
    Object.values(enums).forEach(item => {
      const text = item.value
        ? enumTemplate(item.value.name, item.value.enumProps, 'Enum')
        : item.content || ''

      // const fileDir = path.join(options.outputDir || '', 'definitions')
      // writeFile(fileDir, item.name + '.ts', format(text, options))
      defsString += text
    })

    Object.values(models).forEach(item => {
      const text = params.modelMode === 'interface'
        ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
        : classTemplate(item.value.name, item.value.props, [], params.strictNullChecks, options.useClassTransformer)
      // const fileDir = path.join(options.outputDir || '', 'definitions')
      // writeFile(fileDir, item.name + '.ts', format(text, options))
      defsString += text
    })
    writeFile(options.outputDir || '', 'index.defs.ts', format(defsString, options))
  }
  else if (options.include && options.include.length > 0) {
    let reqSource = ''
    let defSource = ''
    let requestClasses = Object.entries(requestCodegen(swaggerSource.paths))
    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)

    let allModel = Object.values(models)
    // console.log(allModel)
    let allEnum = Object.values(enums)
    let allImport: string[] = []

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
          const reqName = options.methodNameMode == "operationId"
            ? req.operationId
            : req.name
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

    allModel.forEach(item => {
      if (allImport.includes(item.name)) {
        const text = params.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
          : classTemplate(item.value.name, item.value.props, [], params.strictNullChecks, options.useClassTransformer)
        defSource += text
      }
    })

    allEnum.forEach(item => {
      if (allImport.includes(item.name)) {
        const text = item.value
          ? enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          : item.content || ''
        defSource += text
      }
    })

    apiSource += reqSource + defSource
    writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
  }
  else {
    try {

      Object.entries(requestCodegen(swaggerSource.paths)).forEach(([className, requests]) => {
        let text = ''
        requests.forEach(req => {

          const reqName = options.methodNameMode == "operationId"
            ? req.operationId
            : req.name
          text += requestTemplate(reqName, req.requestSchema, options)
        })
        text = serviceTemplate(className + options.serviceNameSuffix, text)
        apiSource += text
      })

      const { models, enums } = definitionsCodeGen(swaggerSource.definitions)

      Object.values(models).forEach(item => {
        const text = params.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
          : classTemplate(item.value.name, item.value.props, [], params.strictNullChecks, options.useClassTransformer)
        apiSource += text
      })

      Object.values(enums).forEach(item => {
        const text = item.value
          ? enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          : item.content || ''
        apiSource += text
      })


      writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
    } catch (error) {
      console.log('error', error)
      err = error
    }
  }
  if (fs.existsSync('./cache_swagger.json')) {
    fs.unlinkSync('./cache_swagger.json');
  }
  console.timeEnd('finish')
  if (err) {
    throw err;
  }
}


function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir);
  }
  const filename = path.join(fileDir, name)
  console.log('filename', filename);
  fs.writeFileSync(filename, data)
}

function format(text: string, options: ISwaggerOptions) {
  if (options.format) {
    console.log('use custom formatter')
    return options.format(text)
  }
  console.log('use default formatter')
  return prettier.format(text, {
    "printWidth": 120,
    "tabWidth": 2,
    "parser": "typescript",
    "trailingComma": "none",
    "jsxBracketSameLine": false,
    "semi": true,
    "singleQuote": true
  })
}
