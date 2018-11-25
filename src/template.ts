import camelcase = require("camelcase");

export interface IPropDef {
  name: string
  type: string
  desc: string
}

/** 类模板 */
export function classTemplate(name: string, props: IPropDef[], imports: string[]) {
  return `
  ${imports.map(imp => {
      return `import { ${imp} } from '../definitions/${imp}'\n`
    }).join('')}

  export class ${name} {

    ${props.map(p => classPropsTemplate(p.name, p.type, p.desc)).join('')}

    constructor(data?:any){
      if(data){
        ${props.map(p => classConstructorTemplate(p.name)).join('')}
      }
    }
  }
  `
}
/** 类属性模板 */
export function classPropsTemplate(name: string, type: string, description: string) {
  return `
  /** ${description || ''} */
  ${name}:${type};
  `
}

/** 类属性模板 */
export function classConstructorTemplate(name: string) {
  return `this['${name}'] = data['${name}'];\n`
}

/** 枚举 */
export function enumTemplate(name: string, enumString: string) {
  return `
  export enum ${name}{
    ${enumString}
  }
  `
}

/** request */
export function requestTemplate(name: string, result: string, options: any) {
  const summary = '',
    parameters = '',
    responseType = '',
    handleNullParameters = '',
    method = '',
    contentType = 'multipart/form-data',
    path = '',
    pathReplace = '',
    parsedParameters = {
      queryParameters: [],
      bodyParameters: []
    },
    formData = ''

  return `
  /**
   * ${summary || ''}
   */
  ${options.useStaticMethod ? 'static' : ''} ${camelcase(name)}(${parameters}options:IRequestOptions={}):Promise<${responseType}> {
    return new Promise((resolve, reject) => {
      ${handleNullParameters}
      const configs:AxiosRequestConfig = {...options, method: "${method}" };
      configs.headers = {
        ...options.headers,
        'Content-Type':'${contentType}'
      }
      let url = '${path}'
      ${pathReplace}
      configs.url = url;
      ${
    parsedParameters && parsedParameters.queryParameters.length > 0
      ? 'configs.params = {' + parsedParameters.queryParameters.join(',') + '}'
      : ''
    };
        let data = ${
    parsedParameters && parsedParameters.bodyParameters.length > 0
      ? '{' + parsedParameters.bodyParameters.join(',') + '}'
      : 'null'
    };
        ${contentType === 'multipart/form-data' ? formData : ''}
        configs.data = data;
      
        axios(configs).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        });
    });
  }
  `
}

/** request */
export function serviceTemplate(name: string, result: string) {
  return `
  export class ${name} {
    
  }
  `
}

export const serviceHeader = `/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosPromise, AxiosRequestConfig, AxiosInstance } from 'axios';
export interface IRequestOptions {
  headers?: any;
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
function axios(configs: IRequestConfig): AxiosPromise {
  return serviceOptions.axios? serviceOptions.axios.request(configs) : axiosStatic(configs);
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