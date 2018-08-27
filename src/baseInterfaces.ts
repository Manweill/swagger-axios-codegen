export interface ISwaggerOptions {
  className?: string
  methodNameMode?: 'operationId' | 'path'
  type?: 'ts' | 'js'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  useStaticMethod: boolean
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
  responses: {
    [key: string]: {
      description: string
      schema: {
        '$ref': string
      }
    }
  }
}

export type IParameterIn = 'path' | 'formData' | 'query' | 'body'

export interface IParameter {
  in: IParameterIn
  name: string
  description: string
  required: string
  schema: IParameterSchema
  items: {
    type: string
    $ref: string
  }
  type: string
  format: string
}

export interface IParameterSchema {
  $ref: string
  items?: IParameterItems
  type: string
}


export interface IParameterItems {
  type?: string
  $ref: string
  item?: IParameterItems
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
  items: IDefinitionProperty
  description: string
}
