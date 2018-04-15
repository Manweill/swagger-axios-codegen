# swagger-axios-codegen

require node > v8.0.0

swagger client to use axios and typescript

## Get Started

```
  yarn add swagger-axios-codegen
```

```js

export interface ISwaggerOptions {
  className: string
  methodMode: 'operationId' | 'path',
  type: 'ts' | 'js',  // just create to ts
  outputDir: string,
  fileName: string
}


const defaultOptions = {
  className: 'Service',
  methodMode: 'path',
  type: 'ts',
  outputDir: './service',
  fileName: 'api.ts'
}
```

## Example

#### use local swagger api json
```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodMode: 'path',
  source:require('./swagger.json')
})


```

#### use remote swagger api json
```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodMode: 'path',
  remoteUrl:'You remote Url'
})


```