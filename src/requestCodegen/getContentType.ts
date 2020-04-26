import { IRequestMethod } from '../swaggerInterfaces'

export function getContentType(reqProps: IRequestMethod, isV3: boolean) {
  if (isV3) {
    return reqProps?.requestBody?.content['multipart/form-data'] ? 'multipart/form-data' : 'application/json'
  }

  return reqProps.consumes && reqProps.consumes.includes('multipart/form-data')
    ? 'multipart/form-data'
    : 'application/json'
}
