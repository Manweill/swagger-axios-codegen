const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'path',
  remoteUrl: 'https://orion.beta.utapp.cn/swagger/v1/swagger.json',
  outputDir: './swagger/services',
  strictNullChecks: false
})
