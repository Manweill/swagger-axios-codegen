import axios, { AxiosPromise } from 'axios'
export interface IRequestOptions {
  headers?: any;
}

export class AccountService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAccountTypeList(options: IRequestOptions = {}): AxiosPromise<ApiResultValueText1> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/GetAccountTypeList'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  login(parameters: { param?: AppLoginDto }, options: IRequestOptions = {}): AxiosPromise<ApiResultString> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/Login'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  logout(options: IRequestOptions = {}): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/Logout'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCurrentAccount(options: IRequestOptions = {}): AxiosPromise<ApiResultAccountDetailDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/GetCurrentAccount'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  register(parameters: { param?: RegisterDto }, options: IRequestOptions = {}): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/Register'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  activate(parameters: { param?: ActivateDto }, options: IRequestOptions = {}): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/Activate'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  sendRegisterCode(
    parameters: { param?: SendRegisterCodeDto },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/SendRegisterCode'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  sendResetPasswordCode(
    parameters: { param?: SendResetPasswordCodeDto },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/SendResetPasswordCode'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  resetPassword(parameters: { param?: ResetPasswordCodeDto }, options: IRequestOptions = {}): AxiosPromise<ApiResult> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/Account/ResetPassword'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class AppMenuService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAuthorizedMenuList(options: IRequestOptions = {}): AxiosPromise<ApiResultAppMenu> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/AppMenu/GetAuthorizedMenuList'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class ApiResultValueText1 {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultValueText1
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultValueText1
   */
  code: number

  /**
   *
   * @type {ValueTextInt32[]}
   * @memberof ApiResultValueText1
   */
  data: ValueTextInt32[]

  /**
   *
   * @type {string}
   * @memberof ApiResultValueText1
   */
  message: string

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

export class ValueTextInt32 {
  /**
   *
   * @type {number}
   * @memberof ValueTextInt32
   */
  value: number

  /**
   *
   * @type {string}
   * @memberof ValueTextInt32
   */
  text: string

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['text'] = data['text']
    }
  }
}

export class AppLoginDto {
  /**
   *
   * @type {1|2|3|4|5}
   * @memberof AppLoginDto
   */
  accountType: 1 | 2 | 3 | 4 | 5

  /**
   *
   * @type {string}
   * @memberof AppLoginDto
   */
  loginName: string

  /**
   *
   * @type {string}
   * @memberof AppLoginDto
   */
  password: string

  constructor(data?: any) {
    if (data) {
      this['accountType'] = data['accountType']
      this['loginName'] = data['loginName']
      this['password'] = data['password']
    }
  }
}

export class ApiResultString {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultString
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultString
   */
  code: number

  /**
   *
   * @type {string}
   * @memberof ApiResultString
   */
  data: string

  /**
   *
   * @type {string}
   * @memberof ApiResultString
   */
  message: string

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

export class ApiResult {
  /**
   *
   * @type {boolean}
   * @memberof ApiResult
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResult
   */
  code: number

  /**
   *
   * @type {string}
   * @memberof ApiResult
   */
  data: string

  /**
   *
   * @type {string}
   * @memberof ApiResult
   */
  message: string

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

export class ApiResultAccountDetailDto {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultAccountDetailDto
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultAccountDetailDto
   */
  code: number

  /**
   *
   * @type {AccountDetailDto}
   * @memberof ApiResultAccountDetailDto
   */
  data: AccountDetailDto

  /**
   *
   * @type {string}
   * @memberof ApiResultAccountDetailDto
   */
  message: string

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

export class AccountDetailDto {
  /**
   *
   * @type {1|2|3|4|5}
   * @memberof AccountDetailDto
   */
  accountType: 1 | 2 | 3 | 4 | 5

  /**
   *
   * @type {string}
   * @memberof AccountDetailDto
   */
  accountTypeName: string

  /**
   *
   * @type {string}
   * @memberof AccountDetailDto
   */
  loginId: string

  /**
   *
   * @type {string}
   * @memberof AccountDetailDto
   */
  accountName: string

  /**
   *
   * @type {string}
   * @memberof AccountDetailDto
   */
  mobile: string

  /**
   *
   * @type {string}
   * @memberof AccountDetailDto
   */
  displayName: string

  constructor(data?: any) {
    if (data) {
      this['accountType'] = data['accountType']
      this['accountTypeName'] = data['accountTypeName']
      this['loginId'] = data['loginId']
      this['accountName'] = data['accountName']
      this['mobile'] = data['mobile']
      this['displayName'] = data['displayName']
    }
  }
}

export class RegisterDto {
  /**
   *
   * @type {1|2|3|4|5}
   * @memberof RegisterDto
   */
  accountType: 1 | 2 | 3 | 4 | 5

  /**
   *
   * @type {string}
   * @memberof RegisterDto
   */
  mobile: string

  /**
   *
   * @type {string}
   * @memberof RegisterDto
   */
  password: string

  /**
   *
   * @type {string}
   * @memberof RegisterDto
   */
  verificationCode: string

  constructor(data?: any) {
    if (data) {
      this['accountType'] = data['accountType']
      this['mobile'] = data['mobile']
      this['password'] = data['password']
      this['verificationCode'] = data['verificationCode']
    }
  }
}

export class ActivateDto {
  /**
   *
   * @type {1|2|3|4|5}
   * @memberof ActivateDto
   */
  accountType: 1 | 2 | 3 | 4 | 5

  /**
   *
   * @type {string}
   * @memberof ActivateDto
   */
  mobile: string

  /**
   *
   * @type {string}
   * @memberof ActivateDto
   */
  password: string

  constructor(data?: any) {
    if (data) {
      this['accountType'] = data['accountType']
      this['mobile'] = data['mobile']
      this['password'] = data['password']
    }
  }
}

export class SendRegisterCodeDto {
  /**
   *
   * @type {1|2|3|4|5}
   * @memberof SendRegisterCodeDto
   */
  accountType: 1 | 2 | 3 | 4 | 5

  /**
   *
   * @type {string}
   * @memberof SendRegisterCodeDto
   */
  mobile: string

  constructor(data?: any) {
    if (data) {
      this['accountType'] = data['accountType']
      this['mobile'] = data['mobile']
    }
  }
}

export class SendResetPasswordCodeDto {
  /**
   *
   * @type {string}
   * @memberof SendResetPasswordCodeDto
   */
  mobile: string

  constructor(data?: any) {
    if (data) {
      this['mobile'] = data['mobile']
    }
  }
}

export class ResetPasswordCodeDto {
  /**
   *
   * @type {string}
   * @memberof ResetPasswordCodeDto
   */
  mobile: string

  /**
   *
   * @type {string}
   * @memberof ResetPasswordCodeDto
   */
  password: string

  /**
   *
   * @type {string}
   * @memberof ResetPasswordCodeDto
   */
  verificationCode: string

  constructor(data?: any) {
    if (data) {
      this['mobile'] = data['mobile']
      this['password'] = data['password']
      this['verificationCode'] = data['verificationCode']
    }
  }
}

export class ApiResultAppMenu {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultAppMenu
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultAppMenu
   */
  code: number

  /**
   *
   * @type {AppMenu[]}
   * @memberof ApiResultAppMenu
   */
  data: AppMenu[]

  /**
   *
   * @type {string}
   * @memberof ApiResultAppMenu
   */
  message: string

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

export class AppMenu {
  /**
   *
   * @type {string}
   * @memberof AppMenu
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof AppMenu
   */
  code: string

  /**
   *
   * @type {number}
   * @memberof AppMenu
   */
  sortIndex: number

  /**
   *
   * @type {AppMenu[]}
   * @memberof AppMenu
   */
  children: AppMenu[]

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['code'] = data['code']
      this['sortIndex'] = data['sortIndex']
      this['children'] = data['children']
    }
  }
}
