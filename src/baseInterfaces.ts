import { format } from 'url'

export interface ISwaggerOptions {
  className: string
  methodMode: 'operationId' | 'path',
  outputFile: string
}

export interface ISwaggerSource {
  swagger: string
  info: string
  paths: IPaths
  securityDefinitions: string
  definitions: IDefinitions
  externalDocs: string
}

export interface IPaths {
  [url: string]: IRequestUrl
}

export interface IRequestUrl {
  [method: string]: IRequestMethod
}

export interface IRequestMethod {
  tags: string[]
  summary: string
  description: string
  operationId: string
  consumes: string[]
  produces: string[]
  parameters: IParameter[]
}

export type IParameterIn = 'path' | 'formData' | 'query' | 'body'

export interface IParameter {
  in: IParameterIn
  name: string
  description: string
  required: string
  schema: {
    $ref: string
    items: {
      type: string
      $ref: string
    }
  }
  items: {
    type: string
    $ref: string
  }
  type: string
  format: string
}

export interface IDefinitions {
  [key: string]: IDefinition
}

export interface IDefinition {
  required: string[]
  type: string
  properties: IDefinitionProperties
}

export interface IDefinitionProperties {
  [key: string]: IDefinitionProperty
}
export interface IDefinitionProperty {
  type: string
  enum: any[]
  format: string
  maxLength: number
  $ref: string
  items: {
    type: string
    $ref: string
  }
}
