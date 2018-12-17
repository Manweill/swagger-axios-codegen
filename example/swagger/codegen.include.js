const { codegen } = require('swagger-axios-codegen')

let include = [
  'Products', // tagName
  'EstimatesService',//tagName
  { 'User': ['history'] }
]
codegen({
  methodNameMode: 'path',
  source: require('../swagger.json'),
  outputDir: './swagger/services',
  include
})
