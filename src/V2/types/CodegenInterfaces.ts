export interface ISwaggerSource {
  swagger?: string | undefined,
  openapi?: string | undefined,
  info: string
  securityDefinitions: string
  externalDocs: string
  basePath?: string | undefined
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