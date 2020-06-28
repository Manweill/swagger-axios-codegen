import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier'
import axios from 'axios'
import pascalcase from 'pascalcase'
import multimatch from 'multimatch';
import { ISwaggerOptions, IInclude, IDefinitionClasses, IDefinitionEnums } from './baseInterfaces'
import { ISwaggerSource } from './swaggerInterfaces'
import {
  requestTemplate,
  serviceTemplate,
  enumTemplate,
  interfaceTemplate,
  classTemplate,
  typeTemplate
} from './templates/template'
import { customerServiceHeader, serviceHeader, definitionHeader } from './templates/serviceHeader'
import { isOpenApi3, findDeepRefs, setDefinedGenericTypes, getDefinedGenericTypes } from './utils'
import { requestCodegen, IRequestClass, IRequestMethods } from './requestCodegen'
import { componentsCodegen } from './componentsCodegen'
import { definitionsCodeGen } from './definitionCodegen'

const defaultOptions: ISwaggerOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  modelMode: 'interface',
  include: [],
  strictNullChecks: true,
  useClassTransformer: false,
  extendGenericType: [],
  multipleFileMode: false,
  sharedServiceOptions: false
}

/** main */
export async function codegen(params: ISwaggerOptions) {
  console.time('finish')
  let err
  let swaggerSource: ISwaggerSource
  setDefinedGenericTypes(params.extendGenericType)
  // 获取接口定义文件
  if (params.remoteUrl) {
    const { data: swaggerJson } = await axios({ url: params.remoteUrl, responseType: 'text' })
    if (Object.prototype.toString.call(swaggerJson) === '[object String]') {
      fs.writeFileSync('./cache_swagger.json', swaggerJson)
      swaggerSource = require(path.resolve('./cache_swagger.json'))
    } else {
      swaggerSource = <ISwaggerSource>swaggerJson
    }
  } else if (params.source) {
    swaggerSource = <ISwaggerSource>params.source
  } else {
    throw new Error('remoteUrl or source must have a value')
  }

  const options: ISwaggerOptions = {
    ...defaultOptions,
    ...params
  }
  let apiSource = ''

  let serviceHeaderSource = options.useCustomerRequestInstance ? customerServiceHeader(options, swaggerSource.basePath) : serviceHeader(options, swaggerSource.basePath)
  if (options.sharedServiceOptions) {
    writeFile(options.outputDir || '', 'serviceOptions.ts' || '', format(serviceHeaderSource, options))
    apiSource += `import { IRequestOptions, IRequestConfig, getConfigs, axios } from "./serviceOptions";`
  }
  else {
    apiSource += serviceHeader
  }

  apiSource += definitionHeader(options.extendDefinitionFile)

  // 判断是否是openApi3.0或者swagger3.0
  const isV3 = isOpenApi3(params.openApi || swaggerSource.openapi || swaggerSource.swagger)

  // TODO: use filter plugin
  // 根据url过滤
  let paths = swaggerSource.paths
  if (options.urlFilters?.length > 0) {
    paths = {}
    Object.keys(swaggerSource.paths).forEach(path => {
      if (options.urlFilters.some(urlFilter => urlFilter.indexOf(path) > -1)) {
        paths[path] = swaggerSource.paths[path]
      }
    })
  }

  let requestClass = requestCodegen(paths, isV3, options)
  // let requestClasses = Object.entries(requestCodegen(swaggerSource.paths, isV3, options))

  const { models, enums } = isV3
    ? componentsCodegen(swaggerSource.components)
    : definitionsCodeGen(swaggerSource.definitions)

  let _allModel = Object.values(models)
  let _allEnum = Object.values(enums)
  // TODO: next next next time
  if (options.multipleFileMode) {
    // if (true) {
    Object.entries(requestCodegen(swaggerSource.paths, isV3, options)).forEach(([className, requests]) => {
      let text = ''
      let allImport: string[] = []
      requests.forEach(req => {
        const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
        if ('register' === reqName) {
          console.log('req.requestSchema.parsedParameters.imports', JSON.stringify(req.requestSchema.parsedParameters.imports));

        }
        text += requestTemplate(reqName, req.requestSchema, options)
        let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, _allModel, _allEnum)
        allImport = allImport.concat(imports)
      })

      // unique import
      const uniqueImports: string[] = []
      allImport.push(...getDefinedGenericTypes(), 'IRequestOptions', 'IRequestConfig', 'getConfigs', 'axios')
      for (const item of allImport) {
        if (!uniqueImports.includes(item)) uniqueImports.push(item)
      }

      text = serviceTemplate(className + options.serviceNameSuffix, text, uniqueImports)
      writeFile(options.outputDir || '', className + 'Service.ts', format(text, options))
    })

    let defsString = ''



    Object.values(models).forEach(item => {
      const text =
        params.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], params.strictNullChecks)
          : classTemplate(
            item.value.name,
            item.value.props,
            [],
            params.strictNullChecks,
            options.useClassTransformer,
            options.generateValidationModel
          )
      // const fileDir = path.join(options.outputDir || '', 'definitions')
      // writeFile(fileDir, item.name + '.ts', format(text, options))
      defsString += text
    })

    Object.values(enums).forEach(item => {
      // const text = item.value ? enumTemplate(item.value.name, item.value.enumProps, 'Enum') : item.content || ''

      let text = ''
      if (item.value) {
        if (item.value.type == 'string') {
          text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        } else {
          text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        }
      } else {
        text = item.content || ''
      }
      defsString += text

    })


    defsString = apiSource + defsString
    writeFile(options.outputDir || '', 'index.defs.ts', format(defsString, options))

  } else if (options.include && options.include.length > 0) {
    // TODO: use filter plugin
    // codegenInclude(apiSource, options, requestClass, models, enums)
    codegenMultimatchInclude(apiSource, options, requestClass, models, enums)
  }
  else {
    codegenAll(apiSource, options, requestClass, models, enums)
  }
  if (fs.existsSync('./cache_swagger.json')) {
    fs.unlinkSync('./cache_swagger.json')
  }
  console.timeEnd('finish')
  if (err) {
    throw err
  }
}


/** codegenAll */
function codegenAll(
  apiSource: string,
  options: ISwaggerOptions,
  requestClass: IRequestClass,
  models: IDefinitionClasses,
  enums: IDefinitionEnums
) {
  let requestClasses = Object.entries(requestClass)
  // 常规入口
  try {
    // 处理接口
    requestClasses.forEach(([className, requests]) => {
      let text = ''
      requests.forEach(req => {
        const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
        text += requestTemplate(reqName, req.requestSchema, options)
      })
      text = serviceTemplate(className + options.serviceNameSuffix, text)
      apiSource += text
    })

    // 处理类和枚举

    Object.values(models).forEach(item => {
      const text =
        options.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], options.strictNullChecks)
          : classTemplate(
            item.value.name,
            item.value.props,
            [],
            options.strictNullChecks,
            options.useClassTransformer,
            options.generateValidationModel
          )
      apiSource += text
    })

    Object.values(enums).forEach(item => {
      let text = ''
      if (item.value) {
        if (item.value.type == 'string') {
          text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        } else {
          text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        }
      } else {
        text = item.content || ''
      }
      apiSource += text
    })

    writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
  } catch (error) {
    console.log('error', error)
    throw error
  }
}
// last include codegen
function codegenInclude(
  apiSource: string,
  options: ISwaggerOptions,
  requestClass: IRequestClass,
  models: IDefinitionClasses,
  enums: IDefinitionEnums) {

  let requestClasses = Object.entries(requestClass)
  // 接口过滤入口
  let reqSource = ''
  let defSource = ''

  let allModel = Object.values(models)
  // console.log(allModel)
  let allEnum = Object.values(enums)
  let allImport: string[] = []

  // 处理接口
  options.include.forEach(item => {
    let includeClassName = ''
    let includeRequests: string[] = null
    if (Object.prototype.toString.call(item) === '[object String]') {
      includeClassName = <string>item
    } else {
      for (let k of Object.keys(item)) {
        includeClassName = k
        includeRequests = (<IInclude>item)[k]
      }
    }
    for (let [className, requests] of requestClasses) {
      if (pascalcase(includeClassName) !== className) continue
      let text = ''
      for (let req of requests) {
        const reqName = options.methodNameMode == 'operationId' ? req.operationId : req.name
        if (includeRequests) {
          if (includeRequests.includes(reqName)) {
            text += requestTemplate(reqName, req.requestSchema, options)
            // generate ref definition model
            let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, allModel, allEnum)
            allImport = allImport.concat(imports)
          }
        } else {
          text += requestTemplate(reqName, req.requestSchema, options)
          let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, allModel, allEnum)
          allImport = allImport.concat(imports)
        }
      }

      text = serviceTemplate(className + options.serviceNameSuffix, text)
      reqSource += text
    }
  })

  // 处理类和枚举

  allModel.forEach(item => {
    if (allImport.includes(item.name)) {
      const text =
        options.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], options.strictNullChecks)
          : classTemplate(
            item.value.name,
            item.value.props,
            [],
            options.strictNullChecks,
            options.useClassTransformer,
            options.generateValidationModel
          )
      defSource += text
    }
  })

  allEnum.forEach(item => {
    if (allImport.includes(item.name)) {
      let text = ''
      if (item.value) {
        if (item.value.type == 'string') {
          text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        } else {
          text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        }
      } else {
        text = item.content || ''
      }

      defSource += text
    }
  })

  apiSource += reqSource + defSource
  writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
}
/** current multimatch codegen */
function codegenMultimatchInclude(
  apiSource: string,
  options: ISwaggerOptions,
  requestClass: IRequestClass,
  models: IDefinitionClasses,
  enums: IDefinitionEnums
) {

  let requestClasses = Object.entries(requestClass)
  // 接口过滤入口
  let reqSource = ''
  let defSource = ''

  let allModel = Object.values(models)
  // console.log(allModel)
  let allEnum = Object.values(enums)
  let allImport: string[] = []

  // #region 处理匹配集合
  const sourceClassNames = requestClasses.map(v => {
    const className = v[0]
    return className
  })

  const includeRules: Record<string, Set<string>> = {}
  options.include.forEach(classNameFilter => {
    // *,?,**,{},!, 
    // NOTICE: 目前要求 className 严格按照pascalcase书写
    if (typeof classNameFilter === 'string') {
      if (includeRules[classNameFilter] === undefined) {
        includeRules[classNameFilter] = new Set()
      }
      includeRules[classNameFilter].add('*')
    } else {
      Object.keys(classNameFilter).forEach(key => {
        if (includeRules[key] === undefined) {
          includeRules[key] = new Set()
        }
        classNameFilter[key].forEach(requestFilter =>
          includeRules[key].add(requestFilter)
        )
      })
    }
  })
  // console.log('rules', includeRules)
  const matchedClassNames = multimatch(sourceClassNames, Object.keys(includeRules))
  // console.log('sourceClassNames', sourceClassNames)
  // console.log('matchedClassNames', matchedClassNames)

  // {tagNames:[...requestFilters]}
  const requiredClassNameMap: Record<string, Set<string>> = {}
  Object.keys(includeRules).forEach(classNameFilter => {
    // matched tagnames
    const requiredClassNames = multimatch(matchedClassNames, classNameFilter)
    requiredClassNames.forEach(className => {
      if (requiredClassNameMap[className] === undefined) {
        requiredClassNameMap[className] = new Set()
      }
      includeRules[classNameFilter].forEach(requestFilter =>
        requiredClassNameMap[className].add(requestFilter)
      )
    })
  })
  // console.log('className->requestRules', requiredClassNameMap)

  // #endregion

  // 处理接口
  requestClasses.forEach(([className, requests]) => {
    const includeRequestsFilters = requiredClassNameMap[className]

    if (includeRequestsFilters) {
      let text = ''
      const requestKeyMap: Record<string, IRequestMethods> = {}
      const requestKeys = requests.map(v => {
        const reqName = options.methodNameMode == 'operationId' ? v.operationId : v.name
        requestKeyMap[reqName] = v
        return reqName
      })

      const requsetRules = Array.from(includeRequestsFilters)
      const requiredRequestKeys = multimatch(requestKeys, Array.from(requsetRules))

      // console.log(`${className}-methods-requsetRules`, requsetRules)
      // console.log(`${className}-methods-all`, requestKeys)
      // console.log(`${className}-methods-matched`, requiredRequestKeys)

      requiredRequestKeys.forEach(reqName => {
        const req = requestKeyMap[reqName]
        text += requestTemplate(reqName, req.requestSchema, options)
        // generate ref definition model
        // console.log(`${reqName}-imports`, req.requestSchema.parsedParameters.imports)
        let imports = findDeepRefs(req.requestSchema.parsedParameters.imports, allModel, allEnum)
        allImport = allImport.concat(imports)
      })

      text = serviceTemplate(className + options.serviceNameSuffix, text)
      apiSource += text

    }
  })

  // console.log(`allModel`, Object.keys(models))
  // console.log(`allImport`, allImport)
  // console.log(`allEnum`, Object.keys(enums))

  // 处理类和枚举

  allModel.forEach(item => {
    if (allImport.includes(item.name)) {
      const text =
        options.modelMode === 'interface'
          ? interfaceTemplate(item.value.name, item.value.props, [], options.strictNullChecks)
          : classTemplate(
            item.value.name,
            item.value.props,
            [],
            options.strictNullChecks,
            options.useClassTransformer,
            options.generateValidationModel
          )
      defSource += text
    }
  })

  allEnum.forEach(item => {
    if (allImport.includes(item.name)) {
      let text = ''
      if (item.value) {
        if (item.value.type == 'string') {
          text = enumTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        } else {
          text = typeTemplate(item.value.name, item.value.enumProps, options.enumNamePrefix)
        }
      } else {
        text = item.content || ''
      }

      defSource += text
    }
  })

  apiSource += reqSource + defSource
  writeFile(options.outputDir || '', options.fileName || '', format(apiSource, options))
}


function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir)
  }
  const filename = path.join(fileDir, name)
  // console.log('filename', filename)
  fs.writeFileSync(filename, data)
}

function format(text: string, options: ISwaggerOptions) {
  if (options.format) {
    // console.log('use custom formatter')
    return options.format(text)
  }
  // console.log('use default formatter')
  return prettier.format(text, {
    printWidth: 120,
    tabWidth: 2,
    parser: 'typescript',
    trailingComma: 'none',
    jsxBracketSameLine: false,
    semi: true,
    singleQuote: true
  })
  // return text
}
