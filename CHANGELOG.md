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