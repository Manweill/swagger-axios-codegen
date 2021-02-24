export interface ISwaggerSource {
  swagger?: string | undefined
  openapi?: string | undefined
  info: string
  securityDefinitions: string
  externalDocs: string
  basePath?: string | undefined
}

/**Deprecated */
export interface IEnumDef {
  name: string
  enumProps: string
  type: string
}
/**Deprecated */
export interface IDefinitionEnum {
  name: string
  value?: IEnumDef | null | undefined
  content?: string | null | undefined
}
/**Deprecated */
export interface IDefinitionEnums {
  [key: string]: IDefinitionEnum
}

/**
 * Enum描述定义
 */
export interface IEnumDefSpec {
  /**枚举的名字，不包括前缀 */
  name: string
  /**枚举的枚举项 */
  props: IDictionary<string, any>[]
  /**枚举的类型，int或者字符串等 */
  type: string
}
/**
 * Enum描述定义，有可能与IEnumDefSpec合并
 */
export interface IDefinitionEnumSpec {
  name: string
  value?: IEnumDefSpec | null | undefined
  content?: string | null | undefined
}
/**枚举定义集合 */
export interface IDefinitionEnumSpecs {
  [key: string]: IDefinitionEnumSpec
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

// 字典类型，对应java map或者.NET Dictionary

export interface IDictionary<TKey, TValue = any> {
  [key: string]: TValue
}

export interface IDictionary<TKey, TValue = any> {
  [key: number]: TValue
}

export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
  [key: string]: TValue
}

export class Map<TKey, TValue> implements IDictionary<TKey, TValue> {
  [key: string]: TValue
}
