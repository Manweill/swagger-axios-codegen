export interface ISwaggerSource {
  swagger?: string | undefined,
  openapi?: string | undefined,
  info: string
  paths: IPaths
  securityDefinitions: string
  definitions: IDefinitions
  components: IComponents
  externalDocs: string
  basePath?: string | undefined
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
  requestBody: IRequestBody,
  responses: {
    [key: string]: {
      description: string
      // v2
      schema: {
        '$ref': string,
        'type'?: string,
        'items'?: IParameterItems,
        'format'?: string,
      },
      // v3
      content: {
        [key: string]: {
          schema: {
            '$ref': string,
            'type'?: string,
            'items'?: IParameterItems,
            'format'?: string,
          }
        }
      }
    }
  }
}

export interface IRequestBody {
  content: {
    [key: string]: {
      schema: ISchema
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
  items: IParameterItems
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
  format?: string
  $ref: string
  items?: IParameterItems
}

export interface IDefinitions {
  [key: string]: IDefinition
}

export interface IDefinition {
  required: string[]
  type: 'object' | 'array'
  properties: IDefinitionProperties
  enum: any[],
  items: IDefinitionProperty
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
  allOf: IDefinitionProperty[]
  oneOf: IDefinitionProperty[]
  items: IDefinitionProperty
  description: string
}

export interface IComponents {
  schemas: {
    [key: string]: IDefinition
  }
}

export interface ISchema {
  '$ref': string
  'type'?: string
  'items'?: IParameterItems
  'format'?: string,
  'properties'?: { [key: string]: IParameterItems }
}

// 字典类型，对应java map或者.NET Dictionary

export interface IDictionary<TKey, TValue = any> {
  [key: string]: TValue;
}

export interface IDictionary<TKey, TValue = any> {
  [key: number]: TValue;
}

export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
  [key: string]: TValue;
}

export class Map<TKey, TValue> implements IDictionary<TKey, TValue> {
  [key: string]: TValue;
}