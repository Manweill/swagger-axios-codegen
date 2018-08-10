# swagger-axios-codegen

require node > v8.0.0

swagger client to use axios and typescript

it will always resolve `axios.response.data` or reject `axios.error` with Promise

## Get Started

[Example](./example)

```
  yarn add swagger-axios-codegen
```

```js

export interface ISwaggerOptions {
  className: string
  methodNameMode: 'operationId' | 'path'
  type: 'ts' | 'js'  // only implement ts
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

### use local swagger api json

```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  source:require('./swagger.json')
})


```

### use remote swagger api json
```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  remoteUrl:'You remote Url'
})


```

### use static method

```
codegen({
    methodNameMode: 'operationId',
    remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
    outputDir: '.',
    useStaticMethod:true
});

```

before


```

import { UserService } from './service'
const userService = new UserService()
await userService.GetAll();

```

after

```

import { UserService } from './service'

await UserService.GetAll();

```

Welcome PR and commit issue