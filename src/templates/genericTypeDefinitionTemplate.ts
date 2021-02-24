// 通用的泛型定义
export function universalGenericTypeDefinition() {
  return `
    export interface IList<T> extends Array<T>{}
    export interface List<T> extends Array<T>{}
    export interface IDictionary<TValue>{
      [key: string]: TValue
    }
    export interface Dictionary<TValue> extends IDictionary<TValue>{
    
    }
  `
}

// abp 项目的泛型定义
export function abpGenericTypeDefinition() {
  return `
  export interface IListResult<T> {
    items?: T[]
  }
  
  export class ListResultDto<T> implements IListResult<T> {
    items?: T[]
  }
  
  export interface IPagedResult<T> extends IListResult<T> {
    totalCount?: number;
    items?: T[];
  }
  
  export class PagedResultDto<T> implements IPagedResult<T> {
    totalCount?: number;
    items?: T[];
  }
    `
}
