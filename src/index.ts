import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier';
import axios from 'axios';
import { ISwaggerSource, ISwaggerOptions } from './baseInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { enumTemplate, classTemplate, serviceHeader, customerServiceHeader, serviceTemplate, requestTemplate } from './template';
import { requestCodegen } from './requestCodegen';

const defaultOptions: ISwaggerOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false
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

  } else {
    let apiSource = options.useCustomerRequestInstance
      ? customerServiceHeader
      : serviceHeader
    const requestClasses = requestCodegen(swaggerSource.paths)

    Object.entries(requestClasses).forEach(([className, requests]) => {
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

    Object.values(enums).forEach(item => {
      const text = item.value
        ? enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        : item.content || ''

      apiSource += text
    })

    Object.values(models).forEach(item => {
      const text = classTemplate(item.value.name, item.value.props, [])
      apiSource += text
    })

    writeFile(options.outputDir || '', options.fileName || '', format(apiSource))
  }
  if (fs.existsSync('./cache_swagger.json')) {
    fs.unlinkSync('./cache_swagger.json');
  }
  console.timeEnd('finish')
}