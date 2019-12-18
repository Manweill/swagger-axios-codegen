import { ISwaggerOptions } from "../baseInterfaces";
import { abpGenericTypeDefinition, universalGenericTypeDefinition } from './genericTypeDefinitionTemplate';

export function serviceHeader(options: ISwaggerOptions) {
  const classTransformerImport = options.useClassTransformer
    ? `import { Expose, Transform, Type, plainToClass } from 'class-transformer';
  ` : '';
  return `/** Generate by swagger-axios-codegen */
  // tslint:disable
  /* eslint-disable */
  import axiosStatic, { AxiosInstance } from 'axios';

  ${classTransformerImport}

  export interface IRequestOptions {
    headers?: any;
    baseURL?: string;
    responseType?: string;
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

  function getConfigs(method: string, contentType: string, url: string,options: any):IRequestConfig {
    const configs: IRequestConfig = { ...options, method, url };
    configs.headers = {
      ...options.headers,
      'Content-Type': contentType,
    };
    return configs
  }

  ${universalGenericTypeDefinition()}
  ${abpGenericTypeDefinition()}
  `;
}



export function customerServiceHeader(options: ISwaggerOptions) {

  return `/** Generate by swagger-axios-codegen */
  // tslint:disable
  /* eslint-disable */
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
  function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
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
  
  function getConfigs(method: string, contentType: string, url: string,options: any):IRequestConfig {
    const configs: IRequestConfig = { ...options, method, url };
    configs.headers = {
      ...options.headers,
      'Content-Type': contentType,
    };
    return configs
  }
  `
}