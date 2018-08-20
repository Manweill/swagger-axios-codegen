## 0.2.11
- Fix: Enumeration case conversion

## 0.2.9
- Fix: A non-file parameter can be submitted correctly using  'FormData'

## 0.2.7

- Optimization: Optimize generation rules when an property of the entity is an enumerated array [example](./example/swagger.enumArray.json)
- Fix: Skip the current method when the tags are empty

## 0.2.6
 - Adjust the generated class name

 ## 0.2.5
 - Use ‘Promise’ instead of ‘AxiosPromise’. If the interface is called successfully, the response.data is returned by default. 
 - Modify REANDME.md