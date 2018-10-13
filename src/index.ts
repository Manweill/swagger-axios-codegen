import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier';
import axios from 'axios';
import { ISwaggerSource, ISwaggerOptions } from './baseInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { enumTemplate, classTemplate } from './template';


const defaultOptions: ISwaggerOptions = {
  classNameSuffix: 'Service',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: false,
  multipleFileMode: false
}


function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir);
  }
  const filepath = path.join(fileDir, name + '.ts')
  fs.writeFileSync(filepath, data)
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
  console.time('codegen')
  let swaggerSource

  if (params.remoteUrl) {
    const { data: swaggerJson } = await axios({ url: params.remoteUrl, responseType: 'text' })
    if (Object.prototype.toString.call(swaggerJson) === '[object String]') {
      fs.writeFileSync('./tempswagger.json', swaggerJson);
      swaggerSource = require(path.resolve('./tempswagger.json'));
    } else {
      swaggerSource = <ISwaggerSource>swaggerJson
    }

  } else if (params.source) {
    swaggerSource = <ISwaggerSource>params.source
  } else {
    throw new Error('必须要给一个地址')
  }



  const options: ISwaggerOptions = {
    ...defaultOptions,
    ...params
  }

  if (options.multipleFileMode) {
    const { models, enums } = definitionsCodeGen(swaggerSource.definitions)
    // enums
    Object.values(enums).forEach(item => {
      const text = item.value
        ? enumTemplate(item.value.name, item.value.enumProps)
        : item.content || ''

      const fileDir = path.join(options.outputDir || '', 'definitions')
      writeFile(fileDir, item.name, format(text))
    })

    Object.values(models).forEach(item => {
      const text = classTemplate(item.value.name, item.value.props, item.value.imports)
      const fileDir = path.join(options.outputDir || '', 'definitions')
      writeFile(fileDir, item.name, format(text))
    })

  } else {
    let apiSource = `
  import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
  export interface IRequestOptions{
    headers?:any
  }
`
    // apiSource += requestCodeGen(swaggerSource.paths, options)
    apiSource += definitionsCodeGen(swaggerSource.definitions)
    apiSource = prettier.format(apiSource, {
      "printWidth": 120,
      "tabWidth": 2,
      "parser": "typescript",
      "trailingComma": "none",
      "jsxBracketSameLine": false,
      "semi": true,
      "singleQuote": true
    })
    console.log('filepath', path.join(options.outputDir || '', options.fileName || ''));

    if (!fs.existsSync(options.outputDir || '')) {
      fs.mkdirSync(options.outputDir || '');
    }
    fs.writeFileSync(path.join(options.outputDir || '', options.fileName || ''), apiSource)

  }
  if (fs.existsSync('./tempswagger.json')) {
    fs.unlinkSync('./tempswagger.json');
  }
  console.timeEnd('codegen')
}
