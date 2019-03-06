## 0.3.4

- 修复数字枚举

## 0.3.3

- 增加 `axios` 自定义实例的支持 ([issue 6](https://github.com/Manweill/swagger-axios-codegen/issues/6) with [kt81](https://github.com/kt81))
- 增加第三方类 `axios` 库的支持，如 [Fly.js](https://github.com/wendux/fly) ，需要设置 `useCustomerRequestInstance = true`
- 增加 `serviceNameSuffix` 配置，以支持自定义服务的后缀
- `useStaticMethod = true` 现在为默认配置
- 优化整体的代码实现和代码逻辑
- 修复 [issue 2](https://github.com/Manweill/swagger-axios-codegen/issues/2) [issue 3](https://github.com/Manweill/swagger-axios-codegen/issues/3)
- 配置（如 `tsconfig.json` 、 `npm script`）请参考 [example](./example/swagger.operationId.json)

## 0.2.14

- 添加对请求的原始响应类型的支持 ([bbc907](https://github.com/Manweill/swagger-axios-codegen/commit/bbc9072a634a996beab19e1a8fd58ea52b8d09d7) by [kt81](https://github.com/kt81))

## 0.2.13

- 更新[example](./example/swagger.operationId.json)，增加使用operationId作为方法名字的例子
- 修复使用Typescript3.0.0，在请求方法中的 `let data = null；` 的定义会报异常 ([b0dad90](https://github.com/Manweill/swagger-axios-codegen/commit/b0dad90d96e3c9d6c4f033c6ad8adcf4c1bf0b2d) by [kt81](https://github.com/kt81))

## 0.2.12

- 修复了请求参数拥有 schema 并且schema属性只有 type 时候产生的bug（[2964ff0](https://github.com/Manweill/swagger-axios-codegen/pull/1) by [@mingoes](https://github.com/mingoes) ） 


## 0.2.11
- 修复: 枚举名字大小写转换的问题

## 0.2.9

- 修复：使用 FormData 提交 非 file 类型的参数的bug

## 0.2.7

- 优化：当实体的属性为枚举数组时，优化他的生成规则 , [example](./example/swagger.enumArray.json)
- 修复：当tags为空时，跳过生成当前方法


## 0.2.6

- 调整生成的class name的名称

## 0.2.5

- 使用 `Promise` 代替 `AxiosPromise`。如果接口调用成功，默认返回response.data
- 修改README.md