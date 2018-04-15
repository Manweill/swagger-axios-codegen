const { codegen } = require('swagger-axios-codegen')
codegen({
  methodMode: 'path',
  remoteUrl:'https://api.popo-fish.com/swagger/v1/swagger.json'
})

