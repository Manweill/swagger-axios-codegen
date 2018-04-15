import * as fs from 'fs'
import prettier from 'prettier';
import camelcase from 'camelcase'
import { ISwaggerSource, IDefinition, IDefinitionProperties, IParameter, ISwaggerOptions } from './baseInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { requestCodeGen } from './requestCodeGen'


const defaultOptions: ISwaggerOptions = {
  className: 'Service',
  methodMode: 'path',
  outputFile: './output/api.ts'
}

export function codegen(swaggerSource: ISwaggerSource, params: ISwaggerOptions) {

  const options: ISwaggerOptions = {
    ...defaultOptions,
    ...params
  }

  let apiSource = `
  import axios from "axios"
  export interface IRequestOptions{
    headers?:any
  }
`



  apiSource += requestCodeGen(swaggerSource.paths, options)
  apiSource += definitionsCodeGen(swaggerSource.definitions)
  apiSource = prettier.format(apiSource, {
    "printWidth": 120,
    "tabWidth": 2,
    "parser": "babylon",
    "trailingComma": "none",
    "jsxBracketSameLine": false,
    "semi": false,
    "singleQuote": true
  })
  fs.writeFileSync(options.outputFile, apiSource)

}


