import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier';
import axios from 'axios';
import { ISwaggerSource, IDefinition, IDefinitionProperties, IParameter, ISwaggerOptions } from './baseInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { requestCodeGen } from './requestCodeGen'


const defaultOptions: ISwaggerOptions = {
  className: 'Service',
  methodNameMode: 'operationId',
  type: 'ts',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: false
}

export async function codegen(params: ISwaggerOptions) {

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

  let apiSource = `
  import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
  export interface IRequestOptions{
    headers?:any
  }
`



  apiSource += requestCodeGen(swaggerSource.paths, options)
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
  if (fs.existsSync('./tempswagger.json')) {
    fs.unlinkSync('./tempswagger.json');
  }
}
