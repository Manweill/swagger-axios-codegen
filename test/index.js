const { codegen } = require('swagger-axios-codegen')
codegen({
  methodMode: 'path',
  source:require('./swagger.json')
})

