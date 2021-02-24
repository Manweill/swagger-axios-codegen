import * as fs from 'fs'
import * as path from 'path'
import prettier from 'prettier'
import { ICodegenOptions } from '@/envConfig'

/** 把内容写到文件 */
export function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir)
  }
  const filename = path.join(fileDir, name)
  // console.log('filename', filename)
  fs.writeFileSync(filename, data)
}

export function FileFormat(text: string, options: ICodegenOptions) {
  if (options.format) {
    // console.log('use custom formatter')
    return options.format(text)
  }
  // console.log('use default formatter')
  return prettier.format(text, {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    parser: 'typescript',
    trailingComma: 'none',
    jsxBracketSameLine: false,
    semi: true,
    singleQuote: true
  })
  // return text
}
