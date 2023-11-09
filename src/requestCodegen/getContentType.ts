import { IRequestMethod } from '../swaggerInterfaces'

export function getContentType(reqProps: IRequestMethod, isV3: boolean) {
  if (isV3) {
    // Prefer Json over other content types
    if (reqProps?.requestBody?.content['application/json']) {
      return 'application/json'
    }
    if (reqProps?.requestBody?.content['multipart/form-data']) {
      return 'multipart/form-data'
    }
    if (reqProps?.requestBody?.content['application/x-www-form-urlencoded']) {
      return 'application/x-www-form-urlencoded'
    }
    return 'application/json'
  } else {
    // Prefer Json over other content types
    if (reqProps?.consumes?.includes('application/json')) {
      return 'application/json'
    }
    if (reqProps?.consumes?.includes('multipart/form-data')) {
      return 'multipart/form-data'
    }
    if (reqProps?.consumes?.includes('application/x-www-form-urlencoded')) {
      return 'application/x-www-form-urlencoded'
    }
    return 'application/json'
  }
}
