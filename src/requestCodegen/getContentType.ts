import { IRequestMethod } from '../swaggerInterfaces'

export function getContentType(reqProps: IRequestMethod, isV3: boolean) {
  if (isV3) {
    if (reqProps?.requestBody?.content) {
      const ct_keys = Object.keys(reqProps?.requestBody?.content)
      if (ct_keys.length > 0) {
        return ct_keys.includes('multipart/form-data') ? 'multipart/form-data' : ct_keys[0]
      }
    }
    return 'application/json'
  } else {
    if (reqProps?.consumes && reqProps?.consumes.length > 0) {
      return reqProps.consumes.includes('multipart/form-data') ? 'multipart/form-data' : reqProps.consumes[0]
    }
    return 'application/json'
  }
}
