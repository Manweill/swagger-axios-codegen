export interface ISwaggerOptions {
  serviceNameSuffix?: string
  enumNamePrefix?: string
  methodNameMode?: 'operationId' | 'path'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  useStaticMethod?: boolean | undefined
  useCustomerRequestInstance?: boolean | undefined
  include?: Array<string | IInclude>
  format?: (s: string) => string
  /** match with tsconfig */
  strictNullChecks?: boolean | undefined
  /** definition Class mode */
  modelMode?: 'class' | 'interface'
  /** use class-transformer to transform the results */
  useClassTransformer?: boolean
  /** force the specified swagger or openAPI version, */
  openApi?: string | undefined
  /** extend file url. It will be inserted in front of the service method */
  extendDefinitionFile?: string | undefined
  /** mark generic type */
  extendGenericType?: string[] | undefined
  /** generate validation model (class model mode only) */
  generateValidationModel?: boolean
  /** split request service */
  multipleFileMode?: boolean | undefined
  /** url prefix filter*/
  urlFilters?: string[] | null | undefined
  /** shared service options to multiple service*/
  sharedServiceOptions?: boolean | undefined
}

export interface IPropDef {
  name: string
  type: string
  format?: string
  desc: string
  isType: boolean
  isEnum: boolean
  validationModel: object
}

export interface IInclude {
  [key: string]: string[]
}
export interface IClassDef {
  name: string
  props: IPropDef[]
  imports: string[]
}

export interface IDefinitionClass {
  value: IClassDef
  name: string
}

export interface IDefinitionClasses {
  [key: string]: IDefinitionClass
}

export interface IEnumDef {
  name: string
  enumProps: string
  type: string
}

export interface IDefinitionEnum {
  name: string
  value?: IEnumDef | null | undefined
  content?: string | null | undefined
}
export interface IDefinitionEnums {
  [key: string]: IDefinitionEnum
}
