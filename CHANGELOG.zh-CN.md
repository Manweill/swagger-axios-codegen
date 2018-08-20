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