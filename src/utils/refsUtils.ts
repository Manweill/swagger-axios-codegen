import { IDefinitionClass, IDefinitionEnum } from '@/types/CodegenInterfaces'
import { combineGenericsType, genericsToClassNames, isOpenApiGenerics, splitGenericsClassName } from '@/utils/genericTypesUtils'
import { toBaseType } from './baseTypeUtils'
import { removeSpecialCharacters } from './stringUtils'
import _ from "lodash";

/**
 * 获取引用类型
 * @param s
 */
export function refClassName(s: string): string {
  let propType = s?.slice(s.lastIndexOf('/') + 1)
  return isOpenApiGenerics(propType)
    ? getGenericsClassName(propType)
    : toBaseType(_.trimEnd(removeSpecialCharacters(propType), '_'))
}

/**
 * 获取泛型类名
 * A[B[C]] => A<B<C>>,* A<<B<<C>>>> => A<B<C>>
 */
function getGenericsClassName(className: string) {
  const genericNames = splitGenericsClassName(className)
  if (genericNames.length < 0) return ''

  genericNames.filter(Boolean).map(item => toBaseType(_.trimEnd(removeSpecialCharacters(item), '_')))

  return combineGenericsType(genericNames);
}

/**
 * 查找深层引用
 * @param imports 所有的应用
 * @param allDefinition
 * @param allEnums
 * @param currentImports
 */
export function findDeepRefs(
  imports: string[],
  allDefinition: IDefinitionClass[],
  allEnums: IDefinitionEnum[],
  currentImports: string[] = []
) {
  let result: string[] = currentImports ?? []
  // if (imports.includes('AuthUserStationDto[]')) {
  //   console.log('result init', imports, currentImports);
  // }

  for (const model of imports) {
    const modelNames = genericsToClassNames(model)
    for (const modelName of modelNames) {
      // if (modelNames.includes('AuthUserStationDto[]')) {
      //   console.log('modelNames', modelNames);
      // }
      let ref = null
      ref = allDefinition.find((item) => modelName === item.name)
      if (ref == null) ref = allDefinition.find((item) => modelName.startsWith(item.name))
      // if (modelNames.includes('AuthUserStationDto[]')) {
      //   console.log('ref', JSON.stringify(ref));
      //   // return []
      // }
      if (ref && !result.includes(ref.name)) {
        // if (ref.value.imports.includes('AuthUserStationDto[]') || ref.value.imports.includes('AuthUserStationDto[]')) {
        //   console.log('findDeepRefs', result);
        //   console.log('AuthUserStationDto', ref.value.imports);
        //   // return []
        // }

        result.push(ref.name)

        if (ref.value.imports.length > 0) {
          const uniqueImports: string[] = []
          for (const importItem of ref.value.imports) {
            if (result.includes(importItem) || uniqueImports.includes(importItem)) continue
            uniqueImports.push(importItem)
          }

          const deepRefs = findDeepRefs(uniqueImports, allDefinition, allEnums, result)
          // if (ref.value.imports.includes('MotorMonthlyCurrentItem') || ref.value.imports.includes('MotorMonthlyDto')) {
          //   console.log('uniqueImports', deepRefs);
          // }
          if (deepRefs) {
            result = deepRefs
          }
        }
      } else {
        ref = allEnums.find((item) => modelNames.some((modelName) => modelName.startsWith(item.name)))
        if (ref) {
          result.push(ref.name)
        }
      }
    }
  }

  return result
}
