export interface ISwaggerSource {
  swagger?: string | undefined
  openapi?: string | undefined
  info: string
  /* 对所提供的 API 有效的路径和操作 */
  paths: IPaths
  securityDefinitions: string
  /**一个包含多种纲要的元素，可重复使用组件 */
  definitions: IDefinitions
  /**一个包含多种纲要的元素，可重复使用组件 */
  components: IComponents
  externalDocs: string
  /** 基本路径 */
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
  /**简要总结，描述此路径内包含的所有操作。 */
  summary: string
  description: string
  operationId: string
  consumes: string[]
  produces: string[]
  /** 请求参数 */
  parameters: IParameter[]
  /** 请求 */
  requestBody: IRequestBody
  responses: {
    [key: string]: {
      description: string
      // v3
      content: {
        [key: string]: {
          schema: {
            $ref: string
            type?: string
            items?: IParameterItems
            format?: string
          }
        }
      }
    }
  }
}

export interface IRequestBody {
  content: {
    [key: string]: {
      schema: IRequestBodySchema
    }
  }
}

export type IParameterIn = 'path' | 'formData' | 'query' | 'body'

export type IParameterRef = {
  $ref: string
}

export interface IParameter {
  in: IParameterIn
  name: string
  description: string
  required: string
  schema: IParameterSchema
  items: IParameterItems
  type: string
  format: string
  $ref: string
}

export interface IParameterSchema {
  $ref: string
  items?: IParameterItems
  type: string
}
/**参数项 */
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
  enum: any[]
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
  schemas: IComponentsSchemas
  requestBodies: {
    [key: string]: IDefinition
  }
  responses: {
    [key: string]: IDefinition
  }
  parameters: IParameter[]
}

export interface IComponentsSchemas {
  [key: string]: IDefinition
}

export interface IRequestBodySchema {
  $ref: string
  type?: string
  items?: IParameterItems
  format?: string
  properties?: { [key: string]: IParameterItems }
}
