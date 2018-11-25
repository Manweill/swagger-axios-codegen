# swagger-axios-codegen

￼[![NpmVersion](https://img.shields.io/npm/v/swagger-axios-codegen.svg)](https://www.npmjs.com/package/swagger-axios-codegen)
￼[![npm](https://img.shields.io/npm/dt/swagger-axios-codegen.svg)](https://www.npmjs.com/package/swagger-axios-codegen)

require node > v8.0.0

swagger client to use axios and typescript

it will always resolve `axios.response.data` or reject `axios.error` with Promise

## Get Started

```
  yarn add swagger-axios-codegen
```

```js

export interface ISwaggerOptions {
  classNameSuffix?: string
  methodNameMode?: 'operationId' | 'path'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  useStaticMethod?: boolean 
  useCustomerRequestInstance?: boolean
}

const defaultOptions: ISwaggerOptions = {
  classNameSuffix: 'Service',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: true
}
```

## [Example](./example)

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

```js
codegen({
    methodNameMode: 'operationId',
    remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
    outputDir: '.',
    useStaticMethod:true
});

```

before


```js

import { UserService } from './service'
const userService = new UserService()
await userService.GetAll();

```

after

```js

import { UserService } from './service'

await UserService.GetAll();

```

Welcome PR and commit issue
