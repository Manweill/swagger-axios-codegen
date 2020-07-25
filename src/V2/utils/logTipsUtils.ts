const msgColor = {
  'success': '\x1b[32m',
  'error': '\x1b[91m'
}

const message = {
  success: (msg: any) => msgColor.success + msg,
  error: (msg: any) => msgColor.error + msg
}

export default message