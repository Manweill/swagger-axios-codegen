export function trimString(str: string, char: string, type: string) {
  str = str ?? ''
  if (char) {
    if (type == 'left') {
      return str.replace(new RegExp('^\\' + char + '+', 'g'), '')
    } else if (type == 'right') {
      return str.replace(new RegExp('\\' + char + '+$', 'g'), '')
    }
    return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
  }
  return str.replace(/^\s+|\s+$/g, '')
}


/** 移除特殊字符 */
export function removeSpecialCharacters(str: string) {
  return str?.replace(/[`~!@#$%^&*()_+<>«»?:"{},.\/;'[\]]/g, '_')
}