import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier';
import axios from 'axios';
import { ISwaggerSource } from './saggerInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { enumTemplate, classTemplate, serviceHeader, customerServiceHeader, serviceTemplate, requestTemplate } from './template';
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
  include: []
}


export async function codegen(params: ISwaggerOptions) {
  console.time('finish')
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
    ? customerServiceHeader
    : serviceHeader
  // TODO: next next next time
  // if (options.multipleFileMode) {
  if (false) {
    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)
    // enums
    Object.values(enums).forEach(item => {
      const text = item.value
        ? enumTemplate(item.value.name, item.value.enumProps, 'Enum')
        : item.content || ''

      const fileDir = path.join(options.outputDir || '', 'definitions')
      writeFile(fileDir, item.name + '.ts', format(text))
    })

    Object.values(models).forEach(item => {
      const text = classTemplate(item.value.name, item.value.props, item.value.imports)
      const fileDir = path.join(options.outputDir || '', 'definitions')
      writeFile(fileDir, item.name, format(text))
    })

  }
  else if (options.include && options.include.length > 0) {
    let reqSource = ''
    let defSource = ''
    let requestClasses = Object.entries(requestCodegen(swaggerSource.paths))
    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)

    let allModel = Object.values(models)
    let allEnum = Object.values(enums)

    options.include.forEach(item => {
      let allImport: string[] = []
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
        if (includeClassName !== className) continue
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


      allModel.forEach(item => {
        if (allImport.includes(item.name)) {
          const text = classTemplate(item.value.name, item.value.props, [])
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

    })

    apiSource += reqSource + defSource
    writeFile(options.outputDir || '', options.fileName || '', format(apiSource))
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
        const text = classTemplate(item.value.name, item.value.props, [])
        apiSource += text
      })

      Object.values(enums).forEach(item => {
        const text = item.value
          ? enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
          : item.content || ''
        apiSource += text
      })


      writeFile(options.outputDir || '', options.fileName || '', format(apiSource))
    } catch (error) {
      console.log('error', error)
    }
  }
  if (fs.existsSync('./cache_swagger.json')) {
    fs.unlinkSync('./cache_swagger.json');
  }
  console.timeEnd('finish')
}


function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir);
  }
  const filename = path.join(fileDir, name)
  console.log('filename', filename);
  fs.writeFileSync(filename, data)
}

function format(text: string) {
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
