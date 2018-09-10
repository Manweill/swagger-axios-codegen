## 0.2.13

- 更新[example](./example/swagger.operationId.json)，增加使用operationId作为方法名字的例子
- 修复使用Typescript3.0.0，在请求方法中的 `let data = null；` 的定义会报异常 ([b0dad90](https://github.com/Manweill/swagger-axios-codegen/commit/b0dad90d96e3c9d6c4f033c6ad8adcf4c1bf0b2d) by [kt81](https://github.com/Manweill/swagger-axios-codegen/commits?author=kt81))

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