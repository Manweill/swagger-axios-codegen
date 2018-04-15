const { codegen } = require('swagger-axios-codegen')
const apisource = require('./orionapi.json')

codegen(apisource,{
  outputFile:'./api.ts',
  methodMode:'path'
})