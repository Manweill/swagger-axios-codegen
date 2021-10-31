const msgColor = {
  success: '\x1b[32m',
  error: '\x1b[91m'
}

const message = {
  success: (msg: any) => msgColor.success + msg,
  error: (msg: any) => msgColor.error + msg
}

export const LogMsg = {
  success: (msg: string | any) => console.log(msgColor.success + msg),
  error: (msg: any) => console.log(msgColor.error + msg),
  time:(msg:any) => console.time(msg),
  timeEnd:(msg:any)=> console.timeEnd(msg)
}

export default message
