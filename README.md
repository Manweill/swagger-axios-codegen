# swagger-axios-codegen
A swagger client uses axios and typescript

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/manweill/swagger-axios-codegen/NodeCI)](https://img.shields.io/github/workflow/status/manweill/swagger-axios-codegen/NodeCI)
￼[![NpmVersion](https://img.shields.io/npm/v/swagger-axios-codegen.svg)](https://www.npmjs.com/package/swagger-axios-codegen)
￼[![npm](https://img.shields.io/npm/dm/swagger-axios-codegen.svg)](https://www.npmjs.com/package/swagger-axios-codegen)
[![open issues](https://img.shields.io/github/issues-raw/manweill/swagger-axios-codegen.svg)](https://img.shields.io/github/issues-raw/manweill/swagger-axios-codegen.svg)


require node > v8.0.0

it will always resolve `axios.response.data` or reject `axios.error` with Promise

support other similar to `axios` library, for example [Fly.js](https://github.com/wendux/fly), required setting `ISwaggerOptions.useCustomerRequestInstance = true`

the es6 version is generated by calling typescript

Welcome PRs and commit issue

By the way. you can support this repo via Star star sta st s... ⭐️ ⭐️ ⭐️ ⭐️ ⭐️


## [Example](./example)

## [ChangeLog](./CHANGELOG.md)

## Get Started

```
  yarn add swagger-axios-codegen
```

```js

export interface ISwaggerOptions {
  serviceNameSuffix?: string
  enumNamePrefix?: string
  methodNameMode?: 'operationId' | 'path'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  useStaticMethod?: boolean | undefined
  useCustomerRequestInstance?: boolean | undefined
  include?: Array<string | IInclude>
  format?: (s: string) => string
  /** match with tsconfig */
  strictNullChecks?: boolean | undefined
  /** definition Class mode */
  modelMode?: 'class' | 'interface'
  /** use class-transformer to transform the results */
  useClassTransformer?: boolean,
  // force the specified swagger or openAPI version,
  openApi?: string | undefined,
  // extend file url. It will be inserted in front of the service method
  extendDefinitionFile?: string | undefined
  // mark generic type
  extendGenericType?: string[] | undefined
  // generate validation model (class model mode only)
  generateValidationModel?: boolean
}

const defaultOptions: ISwaggerOptions = {
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  include: [],
  strictNullChecks: true,
  /** definition Class mode ,auto use interface mode to streamlined code*/
  modelMode?: 'interface'
  useClassTransformer: false
}

```

### use local swagger api json

```js 

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  source: require('./swagger.json')
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
    useStaticMethod: true
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


### use custom axios.instance

```js
import axios from 'axios'
import { serviceOptions } from './service'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

serviceOptions.axios = instance

```

### use other library

```js
import YourLib from '<Your lib>'
import { serviceOptions } from './service'

serviceOptions.axios = YourLib

```

### filter service and method 

```js

let include = [
  'Products', // tagName
  'Estimates',//tagName
  { 'User': ['history'] }
]
codegen({
  methodNameMode: 'path',
  source: require('../swagger.json'),
  outputDir: './swagger/services',
  include
})

```

### use class transformer to transform results

This is helpful if you want to transform dates to real date 
objects. Swagger can define string formats for different types. Two if these formats are `date` and `date-time`

If a `class-transformer` is enabled and a format is set on a string, the result string will be transformed to a `Date` instance


// swagger.json
```json
{
  "ObjectWithDate": {
    "type": "object",
    "properties": {
      "date": {
        "type": "string",
        "format": "date-time"
      }
    }
  }
}
```

```js

const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  source:require('./swagger.json'),
  useClassTransformer: true,
})
```

Resulting class:
```ts
export class ObjectWithDate {
  @Expose()
  @Type(() => Date)
  public date: Date;
}
```

The service method will transform the json response and return an instance of this class

