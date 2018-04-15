import * as fs from 'fs'
import camelcase from 'camelcase'
import { ISwaggerSource, IDefinition, IDefinitionProperties, IParameter, ISwaggerOptions } from './baseInterfaces'
import { definitionsCodeGen } from './definitionCodegen'
import { requestCodeGen } from './requestCodeGen'


const defaultOptions: ISwaggerOptions = {
  className: 'Service',
  methodMode: 'path',
  outputFile: './output/api.ts'
}

export function codegen(params: ISwaggerOptions) {

  const options: ISwaggerOptions = {
    ...defaultOptions,
    ...params
  }

  const swaggerSource: ISwaggerSource = require('../api/orionapi.json')

  let apiSource = `
  import axios from "axios"
  export interface IRequestOptions{
    headers?:any
  }
`



  apiSource += requestCodeGen(swaggerSource.paths, options)
  apiSource += definitionsCodeGen(swaggerSource.definitions)

  fs.writeFileSync(options.outputFile, apiSource)

}