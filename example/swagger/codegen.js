const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'path',
  // source: require('../swagger.json'),
  remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
  outputDir: './swagger/services',
  strictNullChecks: false,
  modelMode: 'interface'
})
