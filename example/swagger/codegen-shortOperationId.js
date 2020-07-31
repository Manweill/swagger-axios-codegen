const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'shortOperationId',
  source: require('../swagger-operationId.json'),
  outputDir: './swagger/services',
  strictNullChecks: false,
  modelMode: 'interface',
  extendDefinitionFile: './swagger/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true
})
