import * as fs from 'fs'
import * as path from 'path'
import { ISwaggerOptions } from '../baseInterfaces'
import { abpGenericTypeDefinition, universalGenericTypeDefinition } from './genericTypeDefinitionTemplate'

export function serviceHeader(options: ISwaggerOptions) {
  const customDefinition = options.customDefinition || ''
  const requestOptionsWrapper = options.requestOptionsWrapper || ((str)=> str)
  const classTransformerImport = options.useClassTransformer
    ? `import { Expose, Transform, Type, plainToClass } from 'class-transformer';
  `
    : ''
  
  return `/** Generate by swagger-axios-codegen */
  /* eslint-disable */
  // @ts-nocheck
  import axiosStatic, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

  ${classTransformerImport}
  ${customDefinition}

  export interface IRequestOptions extends AxiosRequestConfig {
  ${
requestOptionsWrapper(`
    /**
     * show loading status
     */
    loading?: boolean;
    /**
     * display error message
     */
    showError?: boolean;
    /**
     * indicates whether Authorization credentials are required for the request
     * @default true
     */
    withAuthorization?: boolean;`
  )}
  }

  export interface IRequestConfig {
    method?: any;
    headers?: any;
    url?: any;
    data?: any;
    params?: any;
  }

  // Add options interface
  export interface ServiceOptions {
    axios?: AxiosInstance;
    /** only in axios interceptor config*/
    loading:boolean;
    showError:boolean;
  }

  ${requestHeader()}
  `
}

export function disableLint() {
  return `/** Generate by swagger-axios-codegen */
  // @ts-nocheck
/* eslint-disable */
  
`
}

export function customerServiceHeader(options: ISwaggerOptions) {
  const customDefinition = options.customDefinition || ''
  const requestOptionsWrapper = options.requestOptionsWrapper || ((str)=> str)
  return `/** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */
  import axiosStatic, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

  ${customDefinition}
  export interface IRequestOptions extends AxiosRequestConfig {
  ${
requestOptionsWrapper(`
    /**
     * show loading status
     */
    loading?: boolean;
    /**
     * display error message
     */
    showError?: boolean;
    /**
     * indicates whether Authorization credentials are required for the request
     * @default true
     */
    withAuthorization?: boolean;`
  )}
  }

  export interface IRequestPromise<T=any> extends Promise<IRequestResponse<T>> {}

  export interface IRequestResponse<T=any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

  export interface IRequestInstance {
    (config: any): IRequestPromise;
    (url: string, config?: any): IRequestPromise;
    request<T = any>(config: any): IRequestPromise<T>;
  }

  export interface IRequestConfig {
    method?: any;
    headers?: any;
    url?: any;
    data?: any;
    params?: any;
  }

  // Add options interface
  export interface ServiceOptions {
    axios?: IRequestInstance;
    /** only in axios interceptor config*/
    loading:boolean;
    showError:boolean;
  }

  ${requestHeader()}
  
  `
}

function requestHeader() {
  return `

  // Add default options
  export const serviceOptions: ServiceOptions = {
  };

  // Instance selector
  export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
    if (serviceOptions.axios) {
      return serviceOptions.axios.request(configs).then(res => {
        resolve(res.data);
      })
        .catch(err => {
          reject(err);
        });
    } else {
      throw new Error('please inject yourself instance like axios  ')
    }
  }
  
  export function getConfigs(method: string, contentType: string, url: string,options: any):IRequestConfig {
    const configs: IRequestConfig = { loading:serviceOptions.loading, showError:serviceOptions.showError, ...options, method, url };
    configs.headers = {
      ...options.headers,
      'Content-Type': contentType,
    };
    return configs
  }
  `
}

export function definitionHeader(fileDir: string | undefined) {
  let fileStr = '// empty '
  if (!!fileDir) {
    console.log('extendDefinitionFile url : ', path.resolve(fileDir))
    if (fs.existsSync(path.resolve(fileDir))) {
      const buffs = fs.readFileSync(path.resolve(fileDir))
      fileStr = buffs.toString('utf8')
    }
  }

  return `
  ${universalGenericTypeDefinition()}
  ${abpGenericTypeDefinition()}
  // customer definition
  ${fileStr}
  `
}
