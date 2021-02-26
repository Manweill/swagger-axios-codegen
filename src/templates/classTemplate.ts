import { IPropDef } from "@/types/CodegenInterfaces"
import { toBaseType } from "@/utils/baseTypeUtils"
import { isDefinedGenericTypes } from "@/utils/genericTypesUtils"

const baseTypes = ['string', 'number', 'object', 'boolean', 'any']

/** 类模板 */
export function interfaceTemplate(
  name: string,
  props: IPropDef[],
  imports: string[],
  strictNullChecks: boolean = true
) {
  if (isDefinedGenericTypes(name)) {
    // 已经定义过的interface不再生成
    return ''
  }
  // 所有的引用
  const importString = imports
    .map(imp => {
      return `import { ${imp} } from '../definitions/${imp}'\n`
    })
    .join('')

  return `
  ${importString}

  export interface ${name} {

    ${props.map(p => classPropsTemplate(
      p.name,
      p.type,
      p.format,
      p.desc,
      !strictNullChecks || !(p.validationModel as any)?.required,
      false,
      false
    )).join('')}
  }
  `
}

/** 类模板 */
export function classTemplate(
  name: string,
  props: IPropDef[],
  imports: string[],
  strictNullChecks: boolean = true,
  useClassTransformer: boolean,
  generateValidationModel: boolean
) {
  // 所有的引用
  const mappedImports = imports.map(imp => {
    return `import { ${imp} } from '../definitions/${imp}'\n`
  })

  if (useClassTransformer && imports.length > 0) {
    mappedImports.push(`import { Type, Transform, Expose } from 'class-transformer'\n`)
  }
  const importString = mappedImports.join('')

  return `
  ${importString}

  export class ${name} {

    ${props
    .map(p =>
      classPropsTemplate(
          p.name,
          p.type,
          p.format,
          p.desc,
          !strictNullChecks || !(p.validationModel as any)?.required,
          useClassTransformer,
          p.isEnum || p.isType
        )
      )
      .join('')}

    constructor(data: (undefined | any) = {}){
        ${props.map(p => classConstructorTemplate(p.name)).join('')}
    }
    ${generateValidationModel ? classValidationModelTemplate(props) : ''}
  }
  `
}

/** 类属性模板 */
export function classPropsTemplate(
  filedName: string,
  type: string,
  format: string,
  description: string,
  canNull: boolean,
  useClassTransformer: boolean,
  isType: boolean
) {
  /**
   * eg:
   *   //description
   *   fieldName: type
   */
  type = toBaseType(type)
  if (useClassTransformer) {
    const decorators = classTransformTemplate(type, format, isType)

    return `
  /** ${description || ''} */
  ${decorators}
  '${filedName}'${canNull ? '?' : ''}:${type};
  `
  } else {
    return `
  /** ${description || ''} */
  '${filedName}'${canNull ? '?' : ''}:${type};
  `
  }
}

export function propValidationModelTemplate(filedName: string, validationModel: object) {
  /**
   * eg:
   *   fieldName: { required: true, maxLength: 50 }
   */
  return `'${filedName}':${JSON.stringify(validationModel)}`
}

export function classValidationModelTemplate(props: IPropDef[]) {
  /**
   * eg:
   *   public static validationModel = { .. }
   */
  return `
    public static validationModel = {
      ${props
      .filter(p => p.validationModel !== null)
      .map(p => propValidationModelTemplate(p.name, p.validationModel))
      .join(',\n')}
    }
  `
}

export function classTransformTemplate(type: string, format: string, isType: boolean) {
  const decorators: string[] = [`@Expose()`]
  const nonArrayType = type.replace('[', '').replace(']', '')
  /* ignore interfaces */
  if (baseTypes.indexOf(nonArrayType) < 0 && !isType) {
    decorators.push(`@Type(() => ${nonArrayType})`)
  }
  return decorators.join('\n')
}

/** 类属性模板 */
export function classConstructorTemplate(name: string) {
  return `this['${name}'] = data['${name}'];\n`
}