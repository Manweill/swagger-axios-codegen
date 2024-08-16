// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'path',
  source: require('../swagger.json'),
  // remoteUrl: 'http://localhost:44307/swagger/v1/swagger.json',
  outputDir: './swagger/services',
  strictNullChecks: false,
  // useCustomerRequestInstance: true,
  modelMode: 'interface',
  extendDefinitionFile: './swagger/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true,
  classNameMode: 'parentPath',
  customDefinition: `type SecurityTye = 'md5' | 'sha1' | 'aes' | 'des'`,
  requestOptionsWrapper: (str) => {
    return str + `    retryCount?: number
    security?: Record<string, SecurityTye>`
  }
})
