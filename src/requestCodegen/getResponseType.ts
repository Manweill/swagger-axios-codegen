import { refClassName, toBaseType } from "../utils";
import { IRequestMethod } from "../swaggerInterfaces";

/**
 * 获取请求的返回类型
 */
export function getResponseType(reqProps: IRequestMethod): { responseType: string, isRef: boolean } {
  // It does not allow the schema defined directly, but only the primitive type is allowed. 
  let result: string;
  let isRef = false
  if (!reqProps.responses['200'] || !reqProps.responses['200'].schema) {
    result = 'any';
  } else if (reqProps.responses['200'].schema.$ref) {
    result = refClassName(reqProps.responses['200'].schema.$ref)
    isRef = true
  } else {
    let checkType = reqProps.responses[200].schema.type;
    if (!checkType) {
      // implicit types
      if (reqProps.responses[200].schema.items) {
        result = 'array';
      } else { // if (reqProps.responses[200].schema.properties) // actual check
        result = 'object';
      }
    } else {
      result = checkType; // string? -> string
    }
    if (result == 'object') {
      result = 'any';
    } else if (result == 'array') {
      result = 'any[]';
    }
    result = toBaseType(result)
    // else ... JSON primitive types (string, boolean, number)
  }
  return { responseType: result, isRef }
}