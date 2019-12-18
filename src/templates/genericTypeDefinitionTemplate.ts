export function universalGenericTypeDefinition() {
  return `
    export class IList<T> extends Array<T>{}
    export class List<T> extends Array<T>{}
  `;
}

export function abpGenericTypeDefinition() {
  return `
export interface IListResult<T> {
  items?: T[]
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[]
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number
}
  `
}



