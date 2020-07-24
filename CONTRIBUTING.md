## Fork & Clone & Build

1. Fork & Git clone `swagger-axios-codegen`
2. bash on `{path-to-swagger-axios-codegn}`
3. `yarn && yarn watch`



## Test with default example

`cd example` and `yarn build:api`

also, you can see script in `example/package.json`



## Test with your project

1. new bash on `{path-to-swawgger-axios-codegen}` and run `yarn link`
2. bash on {path-to-your-project}, and `yarn link swagger-axios-codegen`
3. run codegen script