import camelcase from 'camelcase'
import { IPropDef } from "./baseInterfaces";

/** 类模板 */
export function interfaceTemplate(name: string, props: IPropDef[], imports: string[], strictNullChecks: boolean = true) {
  // 所有的引用
  const importString = imports.map(imp => {
    return `import { ${imp} } from '../definitions/${imp}'\n`
  }).join('')

  return `
  ${importString}

  export interface ${name} {

    ${props.map(p => classPropsTemplate(p.name, p.type, p.desc, !strictNullChecks)).join('')}
  }
  `
}

/** 类模板 */
export function classTemplate(name: string, props: IPropDef[], imports: string[], strictNullChecks: boolean = true) {
  // 所有的引用
  const importString = imports.map(imp => {
    return `import { ${imp} } from '../definitions/${imp}'\n`
  }).join('')

  return `
  ${importString}

  export class ${name} {

    ${props.map(p => classPropsTemplate(p.name, p.type, p.desc, !strictNullChecks)).join('')}

    constructor(data: (undefined | any) = {}){
        ${props.map(p => classConstructorTemplate(p.name)).join('')}
    }
  }
  `
}

/** 类属性模板 */
export function classPropsTemplate(filedName: string, type: string, description: string, canNull: boolean) {
  /**
   * eg: 
   *   //description 
   *   fieldName: type
   */

  return `
  /** ${description || ''} */
  ${filedName}${canNull ? '?' : ''}:${type};
  `
}

/** 类属性模板 */
export function classConstructorTemplate(name: string) {
  return `this['${name}'] = data['${name}'];\n`
}

/** 枚举 */
export function enumTemplate(name: string, enumString: string, prefix?: string) {
  return `
  export enum ${name}{
    ${enumString}
  }
  `
}

interface IRequestSchema {
  summary: string
  parameters: string
  responseType: string
  method: string
  contentType: string
  path: string
  pathReplace: string
  parsedParameters: any
  formData: string
}

/** requestTemplate */
export function requestTemplate(name: string, requestSchema: IRequestSchema, options: any) {
  let {
    summary = '',
    parameters = '',
    responseType = '',
    method = '',
    contentType = 'multipart/form-data',
    path = '',
    pathReplace = '',
    parsedParameters = <any>{},
    formData = ''
  } = requestSchema

  const { queryParameters = [], bodyParameters = [] } = parsedParameters

  return `
/**
 * ${summary || ''}
 */
${options.useStaticMethod ? 'static' : ''} ${camelcase(name)}(${parameters}options:IRequestOptions={}):Promise<${responseType}> {
  return new Promise((resolve, reject) => {
    let url = '${path}'
    ${pathReplace}
    const configs:IRequestConfig = getConfigs('${method}', '${contentType}', url, options)
    ${parsedParameters && queryParameters.length > 0
      ? 'configs.params = {' + queryParameters.join(',') + '}'
      : ''
    }
    let data = ${parsedParameters && bodyParameters.length > 0
      ? '{' + bodyParameters.join(',') + '}'
      : 'null'
    }
    ${contentType === 'multipart/form-data' ? formData : ''}
    configs.data = data;
    axios(configs, resolve, reject)
  });
}`;
}

/** serviceTemplate */
export function serviceTemplate(name: string, body: string) {
  return `
  export class ${name} {
    ${body}
  }
  `
}

export const serviceHeader = `/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosPromise, AxiosInstance } from 'axios';
export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
}

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance,
}

// Add default options
export const serviceOptions: ServiceOptions = {
};

// Instance selector
function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void) {
  const req = serviceOptions.axios ? serviceOptions.axios.request(configs) : axiosStatic(configs);

  return req.then((res) => { resolve(res.data); }).catch(err => { reject(err); });
}

function getConfigs(method: string = 'post', contentType: string = 'application/json', url: string,options: any):IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType,
  };
  return configs
}
`

export const customerServiceHeader = `/** Generate by swagger-axios-codegen */

export interface IRequestOptions {
  headers?: any;
}

interface IRequestPromise<T=any> extends Promise<IRequestResponse<T>> {}

interface IRequestResponse<T=any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface IRequestInstance {
  (config: any): IRequestPromise;
  (url: string, config?: any): IRequestPromise;
  request<T = any>(config: any): IRequestPromise<T>;
}

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: IRequestInstance,
}

// Add default options
export const serviceOptions: ServiceOptions = {
};

// Instance selector
function axios(configs: IRequestConfig): IRequestPromise {
  return serviceOptions.axios && serviceOptions.axios.request(configs);
}
`