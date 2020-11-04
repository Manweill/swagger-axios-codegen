const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: (reqProps) => {
    let camelCaseSplit = reqProps.operationId
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ");
    return camelCaseSplit.slice(0, -1).join("");
  },
  source: require('../swagger-operationId.json'),
  outputDir: './swagger/services',
  strictNullChecks: false,
  modelMode: 'interface',
  extendDefinitionFile: './swagger/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true
})
