
## 0.12.4

- feat:
  - IRequestOptions extends AxiosRequestConfig when httpClient was axios

## 0.12.3

- bugfix:
  - fix multipleFileMode basePath

## 0.12.2

- feat:support additionalProperties for top level entities
- feat:axios options for RequestOptions

## 0.12.1

- fix: ignore unused import

## 0.11.16

- fix: don't exclude props of untransformed props (#129)

## 0.11.15

- fix classTransform feature

## 0.11.14

- Bump axios from 0.19.0 to 0.21.1 (#125)

## 0.11.13

- fix: formdata upload multi-files

## 0.11.11

- feat: add support for custom method name mode (#122)

## 0.11.9

- feat: Include extra types (#118)
- fix: String Enums have prefix KEY (#120)

## 0.11.9

- fix: numeric enum keys are always prefixed with `KEY_`; relates to https://github.com/Manweill/swagger-axios-codegen/pull/65 (#114)

## 0.11.8

- fix basePath

### 0.11.7

- feat: support header parameter in request (#111)

### 0.11.6

- feat: support for "shortOperationId", with tag suffix removed (#108)

### 0.11.4

- feat; `options.sharedServiceOptions`

### 0.11.3

- fix multipart request when no query params (#103)

### 0.11.2

- feat: make the basePath of swagger2.0 take effect 

### 0.11.0

- feat: add url filter
- fix openapi v3 formdata (#100)

### 0.10.5

- feat: anyOf, allOf (#96)

### 0.10.3

- fix multipart/form-data generation V3 

### 0.10.2

- fix multiple files mode in openApi v3

### 0.10.0

- feature: Implementing multiple files mode when `options.multipleFileMode=true`

### 0.9.17

- fix: mergining imports (#88)
- fix: null check of swagger.json nodes

### 0.9.15

- fix: requestParams does not generated isDefinedGenericTypes interfaceTemplate by xxbb #PR86
- feature: use multimatch filter service and method by xxbb #56


### 0.9.14

- fix uniqueMethodName
- fix: pass format value for modeMode: "interface", which was null #80

### 0.9.12

- fix OpenApi3_Missing_Property_Types [#77](https://github.com/Manweill/swagger-axios-codegen/pulls/77)
- fix Error: The "path" argument must be of type string. Received type undefined [#76](https://github.com/Manweill/swagger-axios-codegen/pulls/76)

### 0.9.11

- fix openApi 3.0 Response Type.
- add `option.validationModel` description.

### 0.9.10

- add `options.generateValidationModel` [issue 50](https://github.com/Manweill/swagger-axios-codegen/issues/50) by [denis-pujdak-adm-it](https://github.com/denis-pujdak-adm-it)
- fix [issue 68](https://github.com/Manweill/swagger-axios-codegen/issues/68)


## 0.9.9

- add Universal Generic TypeDefinition
- add 
  `options.extendDefinitionFile`
  `options.extendGenericType`
  [example](./example/swagger/codegen.js)

## 0.9.7

- fix: enum member cannot have numeric value

## 0.9.6

- fix issue #63. remove special characters of serviceName and fieldName

## 0.9.5

- fix requestBody in openApi3

## 0.9.4

- fix #59 empty components in openApi v3.0

## 0.9.3

- fix request name

## 0.9.2

- Support OpenApi3.0

## 0.8.3

- add docs for the `useClassTransformer` option by arkraft

- fix: useCustomerRequestInstance template by xxbld

- fix #48 by nbytes


## 0.8.1

- Improve request params

- Ignore generated file with tslint and eslint

- Improve generic key [issue45](https://github.com/Manweill/swagger-axios-codegen/issues/45)

- Remove unused import [PR44](https://github.com/Manweill/swagger-axios-codegen/pull/44)

## 0.8.0

- Add class-transformer to transform results and support dates [issue 37](https://github.com/Manweill/swagger-axios-codegen/issues/40) by [arkraft](https://github.com/arkraft)

- Fix array in response bodys [issue 32](https://github.com/Manweill/swagger-axios-codegen/issues/32) with [LucaDe](https://github.com/LucaDe)

## 0.7.4

- Make responseType、baseURL configurable [issue 41](https://github.com/Manweill/swagger-axios-codegen/issues/40) with [LucaDe](https://github.com/LucaDe)

## 0.7.3 

- Extend request options [issue 35](https://github.com/Manweill/swagger-axios-codegen/issues/35) with [LucaDe](https://github.com/LucaDe)

## 0.7.2

- Fix 20X status code response types  [issue 33](https://github.com/Manweill/swagger-axios-codegen/issues/33) with [LucaDe](https://github.com/LucaDe)

## 0.7.0

- Add `ISwaggerOptions.modelMode`, default is `interface`, it can help us streamline the code generate
- Improve code generate size(40%)

## 0.6.0

- Add `ISwaggerOptions.strictNullChecks`, default is `true`, it's match with tsconfig.json

- Fix [issue 29](https://github.com/Manweill/swagger-axios-codegen/issues/29)

## 0.5.7

- Fix Response type [issue 26](https://github.com/Manweill/swagger-axios-codegen/issues/26)

## 0.5.5

- Support typescript strict mode [issue 23](https://github.com/Manweill/swagger-axios-codegen/issues/23)

## 0.5.3

- Fix enum.map is not a function [issue 20](https://github.com/Manweill/swagger-axios-codegen/issues/17)
- Fix class properties was empty [issue 20](https://github.com/Manweill/swagger-axios-codegen/issues/20)

## 0.5.2

- Fix [issue 17](https://github.com/Manweill/swagger-axios-codegen/issues/17)
- Fix [issue 13](https://github.com/Manweill/swagger-axios-codegen/issues/13)

## 0.5.0

- add custom formatter

## 0.4.2

- Fix include filter

## 0.4.0

- Support `Service` filter and `Service[method]` filter. for example like this, or use `cd example && yarn build:api-include`
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


## 0.3.4

- Fix array of number enums [issue 9](https://github.com/Manweill/swagger-axios-codegen/issues/9)

## 0.3.3

- Support custom `axios.instance` ([issue 6](https://github.com/Manweill/swagger-axios-codegen/issues/6) with [kt81](https://github.com/kt81))
- Support other support similar to the `axios` library, for example [Fly.js](https://github.com/wendux/fly), required setting `ISwaggerOptions.useCustomerRequestInstance = true`
- Add `ISwaggerOptions.serviceNameSuffix` ,use for customize `Service` class suffix
- `ISwaggerOptions.useStaticMethod = true` is default
- Optimize overall code implementation and logic
- Fixes [issue 2](https://github.com/Manweill/swagger-axios-codegen/issues/2) [issue 3](https://github.com/Manweill/swagger-axios-codegen/issues/3)
- Please refer to [example](./example/swagger.operationId.json)（e.g. `tsconfig.json` 、 `npm script`）


## 0.2.14

- Adds support of primitive response types ([bbc907](https://github.com/Manweill/swagger-axios-codegen/commit/bbc9072a634a996beab19e1a8fd58ea52b8d09d7) by [kt81](https://github.com/Manweill/swagger-axios-codegen/commits?author=kt81))

## 0.2.13

- Upgrade [example](./example)，adding an [demo](./example/swagger.operationId.json) of using 'operationId' as the method name
- Fix the exception of definition "let data = null" in the request mothod when using Typescript3.0.0 ([b0dad90](https://github.com/Manweill/swagger-axios-codegen/commit/b0dad90d96e3c9d6c4f033c6ad8adcf4c1bf0b2d) by [kt81](https://github.com/Manweill/swagger-axios-codegen/commits?author=kt81))

## 0.2.12

- Fixed bug where schema.type would not be recognized ([2964ff0](https://github.com/Manweill/swagger-axios-codegen/pull/1) by [@mingoes](https://github.com/mingoes))

## 0.2.11

- Fixed Enumeration case conversion

## 0.2.9

- Fixed A non-file parameter can be submitted correctly using  'FormData'

## 0.2.7

- Optimization: Optimize generation rules when an property of the entity is an enumerated array [example](./example/swagger.enumArray.json)
- Fixed Skip the current method when the tags are empty

## 0.2.6

- Adjust the generated class name

## 0.2.5

- Use ‘Promise’ instead of ‘AxiosPromise’. If the interface is called successfully, the response.data is returned by default. 
- Modify REANDME.md
