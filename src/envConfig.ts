/** 生成器参数 */
export interface ICodegenOptions {
  serviceNameSuffix?: string
  enumNamePrefix?: string
  methodNameMode?: 'operationId' | 'path'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: unknown
  useCustomerRequestInstance?: boolean | undefined
  serviceOptionsMode?: 'inFile' | 'shared'
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
  include?: Array<string | IInclude>
}

export interface IInclude {
  [key: string]: string[]
}

export const defaultOptions: ICodegenOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useCustomerRequestInstance: false,
  modelMode: 'interface',
  strictNullChecks: true,
  useClassTransformer: false,
  extendGenericType: [],
  multipleFileMode: false,
  serviceOptionsMode: 'inFile'
}

type IEnvConfig = {
  options: ICodegenOptions
  definedGenericTypes: string[]
}

export const EnvConfig: IEnvConfig = {
  options: {},
  definedGenericTypes: []
}
