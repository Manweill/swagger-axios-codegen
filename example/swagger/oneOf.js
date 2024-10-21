// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'operationId',
  source: require('../oneOf.json'),
  outputDir: '.',
  fileName: 'oneOf.ts',
  strictNullChecks: false,
  modelMode: 'interface'
})
