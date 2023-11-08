import { IRequestMethod } from '../swaggerInterfaces'

export function getContentType(reqProps: IRequestMethod, isV3: boolean) {
  if (isV3) {
    if (reqProps?.requestBody?.content['multipart/form-data']) {
      return 'multipart/form-data'
    } else if (reqProps?.requestBody?.content['application/x-www-form-urlencoded']) {
      return 'application/x-www-form-urlencoded'
    } else {
      return 'application/json'
    }
  }

  return reqProps.consumes && reqProps.consumes.includes('multipart/form-data')
    ? 'multipart/form-data'
    : 'application/json'
}
