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