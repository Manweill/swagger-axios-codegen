const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'path',
  remoteUrl: 'https://api.popo-fish.com/swagger/v1/swagger.json'
})

