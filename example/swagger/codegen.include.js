// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js');

let include = [
  // "products-test",
  // 'Products', // tagName
  // 'Estimates',//tagName
  // { 'User': ['history'] }

  '*',
  // 'Products*',
  '!Products',
  { 'User': ['*', '!history'] },
];
codegen({
  methodNameMode: 'path',
  strictRequiredChecks: false,
  strictNullChecks: false,
  modelMode: 'interface',
  source: require('../swagger.json'),
  outputDir: './swagger/services',
  include
});
