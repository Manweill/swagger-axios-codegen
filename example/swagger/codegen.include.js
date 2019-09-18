// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

let include = [
  'Products', // tagName
  'Estimates',//tagName
  { 'User': ['history'] }
]
codegen({
  methodNameMode: 'path',
  strictNullChecks: false,
  modelMode: 'interface',
  source: require('../swagger.json'),
  outputDir: './swagger/services',
  include
})
