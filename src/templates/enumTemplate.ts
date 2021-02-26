/** 枚举 */
export function enumTemplate(name: string, enumString: string, prefix?: string) {
  return `
  export enum ${name}{
    ${enumString}
  }
  `
}

export function typeTemplate(name: string, typeString: string, prefix?: string) {
  return `
  export type ${name} = ${typeString};
  `
}
