
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
export function enumTemplate(name: string, result: string) {
  return `
  export enum ${name}{
    ${result}
  }
  `
}