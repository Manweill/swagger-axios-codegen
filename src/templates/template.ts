import camelcase from 'camelcase'
import { IPropDef } from '../baseInterfaces'
import { isDefinedGenericTypes, toBaseType } from '../utils'

const baseTypes = ['string', 'number', 'object', 'boolean', 'any']
const isAdditionalProperties = (x: string) => x === "[additionalProperties: string]"
const isNotAdditionalProperties = (x: string) => !isAdditionalProperties(x)

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
    (!strictNullChecks || !(p.validationModel as any)?.required) && !isAdditionalProperties(p.name),
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
          p.isEnum || p.isType,
        )
      )
      .join('')}

    constructor(data: ${name} = {}){
      Object.assign(this, data);
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
  type = toBaseType(type, format)
  if (isNotAdditionalProperties(filedName)) {
    filedName = `'${filedName}'`
  }
  if (useClassTransformer) {
    const decorators = classTransformTemplate(type, format, isType)

    return `
  /** ${description || ''} */
  ${decorators}
  ${filedName}${canNull ? '?' : ''}:${type};
  `
  } else {
    return `
  /** ${description || ''} */
  ${filedName}${canNull ? '?' : ''}:${type};
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
  export type ${name} = ${typeString || '""'};
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
  requestBody: any
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
    formData = '',
    requestBody = null,
  } = requestSchema
  const { useClassTransformer, responseTypeWrapper } = options
  const { queryParameters = [], bodyParameter = [], headerParameters } = parsedParameters
  const nonArrayType = responseType.replace('[', '').replace(']', '')
  const isArrayType = responseType.indexOf('[') > 0
  const transform = useClassTransformer && baseTypes.indexOf(nonArrayType) < 0
  const resolveString = transform
    ? `(response: any${isArrayType ? '[]' : ''
    }) => resolve(plainToClass(${nonArrayType}, response))`
    : 'resolve'

  return `
/**
 * ${summary || ''}
 */
${options.useStaticMethod ? 'static' : ''} ${camelcase(
    name
  )}(${parameters}options:IRequestOptions={}):Promise<${responseTypeWrapper ? responseTypeWrapper(responseType) : responseType}> {
  return new Promise((resolve, reject) => {
    let url = basePath+'${path}'
    ${pathReplace}
    ${parsedParameters && headerParameters && headerParameters.length > 0
      ? `options.headers = {${headerParameters}, ...options.headers }`
      : ''}
    const configs:IRequestConfig = getConfigs('${method}', '${contentType}', url, options)
    ${parsedParameters && queryParameters.length > 0 ? 'configs.params = {' + queryParameters.join(',') + '}' : ''}
    
    
    ${requestBodyString(method, parsedParameters, bodyParameter, requestBody, contentType, formData)}
    
    axios(configs, ${resolveString}, reject);
  });
}`
}

function requestBodyString(method: string, parsedParameters: [], bodyParameter: [], requestBody: string, contentType: string, formData: string) {
  if (parsedParameters && bodyParameter && bodyParameter.length > 0 || !!requestBody) {
    if (method === 'post' || method === 'put') {
      return `
    let data = ${parsedParameters && bodyParameter && bodyParameter.length > 0
          ?
          bodyParameter
          : !!requestBody
            ? 'params.body'
            : 'null'
        }
    ${contentType === 'multipart/form-data' ? formData : ''}
    configs.data = data;`
    }
    else {
      return `/** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */ \n 
    console.warn('适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body')
    `
    }
  }
  return ''
}

/** serviceTemplate */
export function serviceTemplate(name: string, body: string, imports: string[] = null) {
  // add base imports
  let mappedImports = !imports ? '' : `import { ${imports.join(',')}, } from './index.defs'\n`

  // }


  return `

  ${mappedImports}
  export class ${name} {
    ${body}
  }
  `
}
