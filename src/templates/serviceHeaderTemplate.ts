import * as fs from 'fs'
import * as path from 'path'
import { trimString } from '@/utils/stringUtils'
import { envConfig } from '@/envConfig'
import { universalGenericTypeDefinition } from './genericTypeDefinitionTemplate'

/**默认的服务头文件 */
export function defaultServiceHeader(basePath: string) {
  // TODO: move to class template
  const classTransformerImport = envConfig.options.useClassTransformer
    ? `import { Expose, Transform, Type, plainToClass } from 'class-transformer';
  `
    : ''
  return `/* eslint-disable */
  /** Generate by swagger-axios-codegen */
  import axiosStatic, { AxiosInstance } from 'axios';

  const basePath = '${trimString(basePath, '/', 'right')}'
  // TODO: move to class template
  ${classTransformerImport}

  export interface IRequestOptions {
    headers?: any;
    baseURL?: string;
    responseType?: string;
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
    axios?: AxiosInstance,
  }

  ${requestHeader()}
  `
}
/** 自定义请求客户端的服务头文件 */
export function customerReqClientServiceHeader(basePath: string) {
  return `/* eslint-disable */
  /** Generate by swagger-axios-codegen */
  export interface IRequestOptions {
    headers?: any;
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

  const basePath = '${basePath}'

  // Add options interface
  export interface ServiceOptions {
    axios?: IRequestInstance,
  }
  ${requestHeader()}
  
  `
}

function requestHeader() {
  return `

  export const serviceOptions: ServiceOptions = {
  };

  // Instance selector
  export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void,customInstance:any): Promise<any> {
    if(customInstance){
      return customInstance.request(configs).then(res => {
        resolve(res.data);
      })
        .catch(err => {
          reject(err);
        });
    }
    else if (serviceOptions.axios) {
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
    url = basePath + url
    const configs: IRequestConfig = { ...options, method, url };
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
  if (fileDir) {
    console.log('extendDefinitionFile url : ', path.resolve(fileDir))
    if (fs.existsSync(path.resolve(fileDir))) {
      const buffs = fs.readFileSync(path.resolve(fileDir))
      fileStr = buffs.toString('utf8')
    }
  }

  return `
  ${universalGenericTypeDefinition()}
  // customer definition
  ${fileStr}
  `
}
