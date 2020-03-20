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
import { customerServiceHeader, serviceHeader } from './templates/serviceHeader'
import { isOpenApi3, findDeepRefs, setDefinedGenericTypes } from './utils'
import { requestCodegen, IRequestClass, IRequestMethods } from './requestCodegen'


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
  console.log('filename', filename)
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
