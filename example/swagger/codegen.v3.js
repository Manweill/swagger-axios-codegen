// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'path',
  source: require('../swagger3.json'),
  // remoteUrl: 'http://localhost:44307/swagger/v1/swagger.json',
  outputDir: './swagger/services',
  fileName: 'indexv3.ts',
  strictNullChecks: false,
  modelMode: 'interface'
})
