const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'path',
  remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
  useStaticMethod:true,
  outputDir:'../ASwag'
})

