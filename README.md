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
  methodNameMode: 'operationId' | 'path'
  type: 'ts' | 'js'  // just create to ts
  outputDir: string
  fileName: string
  useStaticMethod: boolean
}


const defaultOptions = {
  className: 'Service',
  methodNameMode: 'operationId',
  type: 'ts',
  outputDir: './service',
  fileName: 'index.ts'
}
```

## Example

#### use local swagger api json
```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  source:require('./swagger.json')
})


```

#### use remote swagger api json
```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  remoteUrl:'You remote Url'
})


```

#### use static method

```
codegen({
    methodNameMode: 'path',
    remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
    outputDir: '.',
    useStaticMethod:true
});

```

and then use like this

```

import { UserService } from './service'

await UserService.GetAll();

```