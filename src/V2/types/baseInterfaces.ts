export interface ISwaggerSource {
  swagger?: string | undefined,
  openapi?: string | undefined,
  info: string
  securityDefinitions: string
  externalDocs: string
  basePath?: string | undefined
}