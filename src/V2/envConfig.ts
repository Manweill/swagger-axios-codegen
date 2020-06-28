export interface ICodegenOptions {
  serviceNameSuffix?: string
  enumNamePrefix?: string
  methodNameMode?: 'operationId' | 'path'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  useStaticMethod?: boolean | undefined
  useCustomerRequestInstance?: boolean | undefined
  /** match with tsconfig */
  strictNullChecks?: boolean | undefined
  /** definition Class mode */
  modelMode?: 'class' | 'interface'
  /** use class-transformer to transform the results */
  useClassTransformer?: boolean
  /** force the specified swagger or openAPI version, */
  openApiVersion?: string | undefined
  /** extend file url. It will be inserted in front of the service method */
  extendDefinitionFile?: string | undefined
  /** mark generic type */
  extendGenericType?: string[] | undefined
  /** generate validation model (class model mode only) */
  generateValidationModel?: boolean
  /** split request service */
  multipleFileMode?: boolean | undefined
  format?: (s: string) => string
}

export const defaultOptions: ICodegenOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  modelMode: 'interface',
  strictNullChecks: true,
  useClassTransformer: false,
  extendGenericType: [],
  multipleFileMode: false,
}

type IEnvConfig = {
  options: ICodegenOptions
  definedGenericTypes: string[]
}

export const config: IEnvConfig = {
  options: {},
  definedGenericTypes: []
}