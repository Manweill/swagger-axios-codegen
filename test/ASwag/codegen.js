const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'path',
  source: require('../swagger.json'),
  useStaticMethod: true,
  outputDir: '.'
})

