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
  isTenantAvailable(
    parameters: { input?: IsTenantAvailableInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IsTenantAvailableOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/IsTenantAvailable'

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
  register(parameters: { input?: RegisterInput }, options: IRequestOptions = {}): AxiosPromise<RegisterOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/Register'

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
  sendPasswordResetCode(
    parameters: { input?: SendPasswordResetCodeInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SendPasswordResetCode'

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
  resetPassword(
    parameters: { input?: ResetPasswordInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResetPasswordOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/ResetPassword'

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
  sendEmailActivationLink(
    parameters: { input?: SendEmailActivationLinkInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SendEmailActivationLink'

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
  activateEmail(parameters: { input?: ActivateEmailInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/ActivateEmail'

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
  impersonate(
    parameters: { input?: ImpersonateInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ImpersonateOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/Impersonate'

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
  backToImpersonator(options: IRequestOptions = {}): AxiosPromise<ImpersonateOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/BackToImpersonator'

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
  switchToLinkedAccount(
    parameters: { input?: SwitchToLinkedAccountInput },
    options: IRequestOptions = {}
  ): AxiosPromise<SwitchToLinkedAccountOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SwitchToLinkedAccount'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class AuditLogService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAuditLogs(
    parameters: {
      startDate: string,
      endDate: string,
      userName?: string,
      serviceName?: string,
      methodName?: string,
      browserInfo?: string,
      hasException?: boolean,
      minExecutionDuration?: number,
      maxExecutionDuration?: number,
      sorting?: string,
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoAuditLogListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/AuditLog/GetAuditLogs'

    return axios({
      ...options,
      method: 'get',
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
  getAuditLogsToExcel(
    parameters: {
      startDate: string,
      endDate: string,
      userName?: string,
      serviceName?: string,
      methodName?: string,
      browserInfo?: string,
      hasException?: boolean,
      minExecutionDuration?: number,
      maxExecutionDuration?: number,
      sorting?: string,
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<FileDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/AuditLog/GetAuditLogsToExcel'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class CachingService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAllCaches(options: IRequestOptions = {}): AxiosPromise<ListResultDtoCacheDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/GetAllCaches'

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
  clearCache(parameters: { input?: EntityDtoString }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/ClearCache'

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
  clearAllCaches(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/ClearAllCaches'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class ChatService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getUserChatFriendsWithSettings(options: IRequestOptions = {}): AxiosPromise<GetUserChatFriendsWithSettingsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/GetUserChatFriendsWithSettings'

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
  getUserChatMessages(
    parameters: { tenantId?: number, userId: number, minMessageId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoChatMessageDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/GetUserChatMessages'

    return axios({
      ...options,
      method: 'get',
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
  markAllUnreadMessagesOfUserAsRead(
    parameters: { input?: MarkAllUnreadMessagesOfUserAsReadInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class CommonLookupService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEditionsForCombobox(
    parameters: { onlyFreeItems: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoSubscribableEditionComboboxItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetEditionsForCombobox'

    return axios({
      ...options,
      method: 'get',
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
  findUsers(
    parameters: { input?: FindUsersInput },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoNameValueDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/FindUsers'

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
  getDefaultEditionName(options: IRequestOptions = {}): AxiosPromise<GetDefaultEditionNameOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDefaultEditionName'

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
  getDeviceTypesForCombobox(options: IRequestOptions = {}): AxiosPromise<ListResultDtoDeviceTypeComboboxItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox'

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
  getStationsForCombobox(options: IRequestOptions = {}): AxiosPromise<ListResultDtoComboboxItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetStationsForCombobox'

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
  getVoltageLevelsForCombobox(options: IRequestOptions = {}): AxiosPromise<ListResultDtoComboboxItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox'

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
  getDeviceStateForCombox(
    parameters: { deviceTypeId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoComboboxItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDeviceStateForCombox'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DemoUiComponentsService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  sendAndGetDate(parameters: { date?: string }, options: IRequestOptions = {}): AxiosPromise<DateToStringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDate'

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
  sendAndGetDateTime(parameters: { date?: string }, options: IRequestOptions = {}): AxiosPromise<DateToStringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDateTime'

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
  sendAndGetDateRange(
    parameters: { startDate?: string, endDate?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<DateToStringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDateRange'

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
  getCountries(parameters: { searchTerm?: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/GetCountries'

    return axios({
      ...options,
      method: 'get',
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
  sendAndGetSelectedCountries(
    parameters: { selectedCountries?: NameValueString },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries'

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
  sendAndGetValue(parameters: { input?: string }, options: IRequestOptions = {}): AxiosPromise<StringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetValue'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDevices(
    parameters: { name?: string, deviceAreaId: number, skipCount: number, maxResultCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoDeviceListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/GetDevices'

    return axios({
      ...options,
      method: 'get',
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
  getDeviceForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetDeviceEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/GetDeviceForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateDevice(
    parameters: { input?: CreateOrUpdateDeviceInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/CreateOrUpdateDevice'

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
  deleteDevice(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/DeleteDevice'

    return axios({
      ...options,
      method: 'delete',
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
  queryDeviceStates(
    parameters: { input?: QueryDevicesStateInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoDeviceStateDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/QueryDeviceStates'

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
  updateDeviceState(
    parameters: { input?: UpdateDeviceStateInput },
    options: IRequestOptions = {}
  ): AxiosPromise<UpdateDeviceStateOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/UpdateDeviceState'

    return axios({
      ...options,
      method: 'put',
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
  checkDeviceNameIsExist(
    parameters: { input?: CheckDeviceNameIsExistInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/CheckDeviceNameIsExist'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceAreaService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDeviceAreas(
    parameters: { stationId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoDeviceAreaListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/GetDeviceAreas'

    return axios({
      ...options,
      method: 'get',
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
  getDeviceAreaForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetDeviceAreaEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/GetDeviceAreaForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateDeviceArea(
    parameters: { input?: CreateOrUpdateDeviceAreaInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea'

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
  deleteDeviceArea(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/DeleteDeviceArea'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceLockCodeService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getLockCodeProperties(
    parameters: { maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoLockCodePropertyListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodeProperties'

    return axios({
      ...options,
      method: 'get',
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
  getLockCodePropertySelected(options: IRequestOptions = {}): AxiosPromise<ListResultDtoLockCodePropertySelectDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected'

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
  getLockCodePropertyForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<LockCodePropertyEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateLockCodeProperty(
    parameters: { input?: CreateOrUpdateLockCodePropertyInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty'

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
  deleteLockCodeProperty(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceTermService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDeviceTerms(
    parameters: { stationName: string, pointName: string, state: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetDeviceTermsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/GetDeviceTerms'

    return axios({
      ...options,
      method: 'get',
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
  getTerms(
    parameters: { deviceType: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoDeviceOperationListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/GetTerms'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateDeviceOperation(
    parameters: { input?: CreateOrUpdateDeviceOperationInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation'

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
  deleteDeviceOperation(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/DeleteDeviceOperation'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceTypeService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDeviceTypes(
    parameters: { name?: string, isEst?: boolean, skipCount?: number, maxResultCount?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoDeviceTypeListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/GetDeviceTypes'

    return axios({
      ...options,
      method: 'get',
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
  getDeviceTypeForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetDeviceTypeEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/GetDeviceTypeForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateDeviceType(
    parameters: { input?: CreateOrUpdateDeviceTypeInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/CreateOrUpdateDeviceType'

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
  deleteDeviceType(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/DeleteDeviceType'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class EditionService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEditions(options: IRequestOptions = {}): AxiosPromise<ListResultDtoEditionListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditions'

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
  getEditionForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetEditionEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditionForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateEdition(
    parameters: { input?: CreateOrUpdateEditionDto },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/CreateOrUpdateEdition'

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
  deleteEdition(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/DeleteEdition'

    return axios({
      ...options,
      method: 'delete',
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
  getEditionComboboxItems(
    parameters: { selectedEditionId?: number, addAllItem: boolean, onlyFreeItems: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditionComboboxItems'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class EquipmentService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEquipments(
    parameters: { productId?: number, name?: string, terminalId?: number, stationId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoEquipmentListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipments'

    return axios({
      ...options,
      method: 'get',
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
  getEquipmentForEdit(
    parameters: { productId: number, id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetEquipmentEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateEquipment(
    parameters: { input?: CreateOrUpdateEquipmentInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/CreateOrUpdateEquipment'

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
  deleteEquipment(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/DeleteEquipment'

    return axios({
      ...options,
      method: 'delete',
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
  getEquipmentNotBinded(
    parameters: { stationId?: number, name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoEquipmentListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentNotBinded'

    return axios({
      ...options,
      method: 'get',
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
  getAllStationBindEquipments(
    parameters: { stationId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoEquipmentWithPropertyDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetAllStationBindEquipments'

    return axios({
      ...options,
      method: 'get',
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
  getStationBindEquipments(
    parameters: { stationId?: number, name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoEquipmentInpageDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetStationBindEquipments'

    return axios({
      ...options,
      method: 'get',
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
  getEquipmentWithProperty(
    parameters: { id: number },
    options: IRequestOptions = {}
  ): AxiosPromise<EquipmentWithPropertyOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentWithProperty'

    return axios({
      ...options,
      method: 'get',
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
  controlEquipment(parameters: { input?: ControlEquipmentInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/ControlEquipment'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class FileService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  download(parameters: { id: string, name: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/File/download/{id}/{name}'
    path = path.replace('{id}', parameters['id'] + '')
    path = path.replace('{name}', parameters['name'] + '')

    return axios({
      ...options,
      method: 'get',
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
  file(parameters: { id: string, name: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/File/{id}/{name}'
    path = path.replace('{id}', parameters['id'] + '')
    path = path.replace('{name}', parameters['name'] + '')

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class FriendshipService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  createFriendshipRequest(
    parameters: { input?: CreateFriendshipRequestInput },
    options: IRequestOptions = {}
  ): AxiosPromise<FriendDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/CreateFriendshipRequest'

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
  createFriendshipRequestByUserName(
    parameters: { input?: CreateFriendshipRequestByUserNameInput },
    options: IRequestOptions = {}
  ): AxiosPromise<FriendDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/CreateFriendshipRequestByUserName'

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
  blockUser(parameters: { input?: BlockUserInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/BlockUser'

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
  unblockUser(parameters: { input?: UnblockUserInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/UnblockUser'

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
  acceptFriendshipRequest(
    parameters: { input?: AcceptFriendshipRequestInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/AcceptFriendshipRequest'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class GraphService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getGraphs(parameters: { name?: string }, options: IRequestOptions = {}): AxiosPromise<ListResultDtoGraphListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/GetGraphs'

    return axios({
      ...options,
      method: 'get',
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
  getGraphForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GraphEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/GetGraphForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateGraph(
    parameters: { input?: CreateOrUpdateGraphInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/CreateOrUpdateGraph'

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
  deleteGraph(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/DeleteGraph'

    return axios({
      ...options,
      method: 'delete',
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
  uploadGraph(parameters: { file?: any }, options: IRequestOptions = {}): AxiosPromise<UploadFileOutput> {
    let headers = {
      'Content-Type': 'multipart/form-data',
      ...options.headers
    }

    let path = '/api/services/app/Graph/UploadGraph'

    let data = new FormData()

    if (parameters['file']) {
      data.append('file', parameters['file'], 'file')
    }

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: data
    })
  }
}
export class HostDashboardService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDashboardStatisticsData(
    parameters: { incomeStatisticsDateInterval: string, startDate: string, endDate: string },
    options: IRequestOptions = {}
  ): AxiosPromise<HostDashboardData> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetDashboardStatisticsData'

    return axios({
      ...options,
      method: 'get',
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
  getIncomeStatistics(
    parameters: { incomeStatisticsDateInterval: string, startDate: string, endDate: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetIncomeStatisticsDataOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetIncomeStatistics'

    return axios({
      ...options,
      method: 'get',
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
  getEditionTenantStatistics(
    parameters: { startDate: string, endDate: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetEditionTenantStatisticsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetEditionTenantStatistics'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class HostSettingsService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAllSettings(options: IRequestOptions = {}): AxiosPromise<HostSettingsEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/GetAllSettings'

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
  updateAllSettings(parameters: { input?: HostSettingsEditDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/UpdateAllSettings'

    return axios({
      ...options,
      method: 'put',
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
  sendTestEmail(parameters: { input?: SendTestEmailInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/SendTestEmail'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class InstallService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  setup(parameters: { input?: InstallDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/Setup'

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
  getAppSettingsJson(options: IRequestOptions = {}): AxiosPromise<AppSettingsJsonDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/GetAppSettingsJson'

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
  checkDatabase(options: IRequestOptions = {}): AxiosPromise<CheckDatabaseOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/CheckDatabase'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class IntelligentLockServiceService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  addIntelligentLocks(
    parameters: { input?: AddIntelligentLocksInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/AddIntelligentLocks'

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
  removeIntelligentLocks(
    parameters: { roleId: number, intelligentLockIds?: number[] },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks'

    return axios({
      ...options,
      method: 'delete',
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
  updateIntelligentLocks(
    parameters: { input?: UpdateIntelligentLocksInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/UpdateIntelligentLocks'

    return axios({
      ...options,
      method: 'put',
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
  getIntelligentLockList(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoIntelligentLockOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/GetIntelligentLockList'

    return axios({
      ...options,
      method: 'get',
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
  getIntelligentLocksInDeviceAreaTree(
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoIntelligentLockDetailOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class InvoiceService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getInvoiceInfo(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<InvoiceDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Invoice/GetInvoiceInfo'

    return axios({
      ...options,
      method: 'get',
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
  createInvoice(parameters: { input?: CreateInvoiceDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Invoice/CreateInvoice'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class KeyCabinetService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  keyCabinetApply(
    parameters: { input?: KeyCabinetApplyInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetApply'

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
  keyCabinetApprove(
    parameters: { input?: KeyCabinetApproveInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetApprove'

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
  keyCabinetUnlock(
    parameters: { input?: KeyCabinetUnlockInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputKeyCabinetUnlockOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetUnlock'

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
  keyCabinetOpenDoor(
    parameters: { input?: KeyCabinetOpenDoorInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor'

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
  getApplyReasonEnums(
    parameters: { approverType?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputDictionaryInt32String> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplyReasonEnums'

    return axios({
      ...options,
      method: 'get',
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
  getApplyReasonList(
    parameters: { approverType?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputListKeyCabinetValueTextDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplyReasonList'

    return axios({
      ...options,
      method: 'get',
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
  getBuckleTypeEnums(options: IRequestOptions = {}): AxiosPromise<ApiResultOutputDictionaryInt32String> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetBuckleTypeEnums'

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
  getLockModeEnums(options: IRequestOptions = {}): AxiosPromise<ApiResultOutputDictionaryInt32String> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetLockModeEnums'

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
  getApproverTypeEnums(options: IRequestOptions = {}): AxiosPromise<ApiResultOutputDictionaryInt32String> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApproverTypeEnums'

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
  getTask(
    parameters: { id: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputKeyCabinetTaskOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetTask'

    return axios({
      ...options,
      method: 'get',
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
  endTask(
    parameters: { input?: KeyCabinetEndTaskInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/EndTask'

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
  getApplicants(options: IRequestOptions = {}): AxiosPromise<ApiResultOutputListResultDtoKeyCabinetOperatorDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplicants'

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
  getApprovers(
    parameters: { roles?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputListResultDtoKeyCabinetOperatorDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApprovers'

    return axios({
      ...options,
      method: 'get',
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
  getIsTaskExpired(
    parameters: { equipmentPropertyId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetIsTaskExpired'

    return axios({
      ...options,
      method: 'get',
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
  getIsApplicant(
    parameters: { operatorId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetIsApplicant'

    return axios({
      ...options,
      method: 'get',
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
  getKeyCarbinetLogs(
    parameters: { stationId: number, startDate: string, endDate: string, applicantId?: number, approverId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputListResultDtoKeyCarbinetLogListOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs'

    return axios({
      ...options,
      method: 'get',
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
  updateKeyCarbinetLog(
    parameters: { input?: KeyCarbinetLogInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ApiResultOutputBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class LanguageService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getLanguages(options: IRequestOptions = {}): AxiosPromise<GetLanguagesOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguages'

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
  getLanguageForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetLanguageForEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguageForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateLanguage(
    parameters: { input?: CreateOrUpdateLanguageInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/CreateOrUpdateLanguage'

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
  deleteLanguage(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/DeleteLanguage'

    return axios({
      ...options,
      method: 'delete',
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
  setDefaultLanguage(
    parameters: { input?: SetDefaultLanguageInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/SetDefaultLanguage'

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
  getLanguageTexts(
    parameters: {
      maxResultCount: number,
      skipCount: number,
      sorting?: string,
      sourceName: string,
      baseLanguageName?: string,
      targetLanguageName: string,
      targetValueFilter?: string,
      filterText?: string
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoLanguageTextListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguageTexts'

    return axios({
      ...options,
      method: 'get',
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
  updateLanguageText(
    parameters: { input?: UpdateLanguageTextInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/UpdateLanguageText'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class NotificationService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getUserNotifications(
    parameters: { state?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetNotificationsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/GetUserNotifications'

    return axios({
      ...options,
      method: 'get',
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
  setAllNotificationsAsRead(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/SetAllNotificationsAsRead'

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
  setNotificationAsRead(parameters: { input?: EntityDtoGuid }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/SetNotificationAsRead'

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
  getNotificationSettings(options: IRequestOptions = {}): AxiosPromise<GetNotificationSettingsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/GetNotificationSettings'

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
  updateNotificationSettings(
    parameters: { input?: UpdateNotificationSettingsInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/UpdateNotificationSettings'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class OperationRecordService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getOperationRecord(
    parameters: { id: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetOperationRecordOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OperationRecord/GetOperationRecord'

    return axios({
      ...options,
      method: 'get',
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
  getOperationRecords(
    parameters: {
      applicantId?: number,
      approverId?: number,
      startTime?: string,
      endTime?: string,
      stationId?: number,
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoOperationRecordListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OperationRecord/GetOperationRecords'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class OrganizationUnitService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getOrganizationUnits(options: IRequestOptions = {}): AxiosPromise<ListResultDtoOrganizationUnitDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/GetOrganizationUnits'

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
  getOrganizationUnitUsers(
    parameters: { id: number, sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoOrganizationUnitUserListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers'

    return axios({
      ...options,
      method: 'get',
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
  createOrganizationUnit(
    parameters: { input?: CreateOrganizationUnitInput },
    options: IRequestOptions = {}
  ): AxiosPromise<OrganizationUnitDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/CreateOrganizationUnit'

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
  updateOrganizationUnit(
    parameters: { input?: UpdateOrganizationUnitInput },
    options: IRequestOptions = {}
  ): AxiosPromise<OrganizationUnitDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit'

    return axios({
      ...options,
      method: 'put',
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
  moveOrganizationUnit(
    parameters: { input?: MoveOrganizationUnitInput },
    options: IRequestOptions = {}
  ): AxiosPromise<OrganizationUnitDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/MoveOrganizationUnit'

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
  deleteOrganizationUnit(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit'

    return axios({
      ...options,
      method: 'delete',
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
  removeUserFromOrganizationUnit(
    parameters: { userId: number, organizationUnitId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit'

    return axios({
      ...options,
      method: 'delete',
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
  addUsersToOrganizationUnit(
    parameters: { input?: UsersToOrganizationUnitInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit'

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
  findUsers(
    parameters: { input?: FindOrganizationUnitUsersInput },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoNameValueDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/FindUsers'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class PaymentService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getPaymentInfo(
    parameters: { upgradeEditionId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PaymentInfoDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/GetPaymentInfo'

    return axios({
      ...options,
      method: 'get',
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
  createPayment(
    parameters: { input?: CreatePaymentDto },
    options: IRequestOptions = {}
  ): AxiosPromise<CreatePaymentResponse> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/CreatePayment'

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
  executePayment(
    parameters: { input?: ExecutePaymentDto },
    options: IRequestOptions = {}
  ): AxiosPromise<ExecutePaymentResponse> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/ExecutePayment'

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
  getPaymentHistory(
    parameters: { sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoSubscriptionPaymentListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/GetPaymentHistory'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class PendingService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getPendingList(options: IRequestOptions = {}): AxiosPromise<ApiResultOutputListResultDtoPendingDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Pending/GetPendingList'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class PermissionService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAllPermissions(options: IRequestOptions = {}): AxiosPromise<ListResultDtoFlatPermissionWithLevelDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Permission/GetAllPermissions'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class ProductService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getProducts(options: IRequestOptions = {}): AxiosPromise<ListResultDtoProductListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/GetProducts'

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
  getProductForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetProductEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/GetProductForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateProduct(
    parameters: { input?: CreateOrUpdateProductInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/CreateOrUpdateProduct'

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
  deleteProduct(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/DeleteProduct'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class ProductPropertyService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getProductProperties(options: IRequestOptions = {}): AxiosPromise<ListResultDtoProductPropertyListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/GetProductProperties'

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
  getProductPropertyForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetProductPropertyEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/GetProductPropertyForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateProductProperty(
    parameters: { input?: CreateOrUpdateProductPropertyInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty'

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
  deleteProductProperty(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/DeleteProductProperty'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class ProfileService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCurrentUserProfileForEdit(options: IRequestOptions = {}): AxiosPromise<CurrentUserProfileEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetCurrentUserProfileForEdit'

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
  updateGoogleAuthenticatorKey(options: IRequestOptions = {}): AxiosPromise<UpdateGoogleAuthenticatorKeyOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  sendVerificationSms(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/SendVerificationSms'

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
  verifySmsCode(parameters: { input?: VerifySmsCodeInputDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/VerifySmsCode'

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
  updateCurrentUserProfile(
    parameters: { input?: CurrentUserProfileEditDto },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateCurrentUserProfile'

    return axios({
      ...options,
      method: 'put',
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
  changePassword(parameters: { input?: ChangePasswordInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/ChangePassword'

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
  updateProfilePicture(
    parameters: { input?: UpdateProfilePictureInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateProfilePicture'

    return axios({
      ...options,
      method: 'put',
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
  getPasswordComplexitySetting(options: IRequestOptions = {}): AxiosPromise<GetPasswordComplexitySettingOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetPasswordComplexitySetting'

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
  getProfilePicture(options: IRequestOptions = {}): AxiosPromise<GetProfilePictureOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetProfilePicture'

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
  getFriendProfilePictureById(
    parameters: { profilePictureId?: string, userId: number, tenantId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetProfilePictureOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetFriendProfilePictureById'

    return axios({
      ...options,
      method: 'get',
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
  getProfilePictureById(
    parameters: { profilePictureId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetProfilePictureOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetProfilePictureById'

    return axios({
      ...options,
      method: 'get',
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
  changeLanguage(parameters: { input?: ChangeUserLanguageDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/ChangeLanguage'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class RiskTicketItemService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  addOrUpdateRiskTicket(
    parameters: { input?: AddOrUpdateRiskTicketInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicket'

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
  deleteTicket(parameters: { riskTicketId: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/DeleteTicket'

    return axios({
      ...options,
      method: 'delete',
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
  addOrUpdateRiskTicketItems(
    parameters: { input?: AddOrUpdateRiskTicketItemsInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicketItems'

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
  deleteRiskTicketItems(parameters: { riskTicketId: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/DeleteRiskTicketItems'

    return axios({
      ...options,
      method: 'delete',
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
  addOrUpdateRiskItemTemplate(
    parameters: { input?: AddOrUpdateRiskItemTemplateInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTemplate'

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
  deleteRiskItemTemplate(parameters: { riskPublicItemId: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/DeleteRiskItemTemplate'

    return axios({
      ...options,
      method: 'delete',
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
  getAllRiskItemTemplate(options: IRequestOptions = {}): AxiosPromise<ListResultDtoRiskItemTemplate> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/GetAllRiskItemTemplate'

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
  addOrUpdateRiskItemTermMap(
    parameters: { input?: AddOrUpdateRiskItemTermMapInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTermMap'

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
  deleteRiskItemTermMap(parameters: { riskItemTermMapId: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/DeleteRiskItemTermMap'

    return axios({
      ...options,
      method: 'delete',
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
  mappingRiskItemByTerm(
    parameters: { input?: MappingRiskItemByTermInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoRiskItemTermMap> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/MappingRiskItemByTerm'

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
  getRiskItemSingle(parameters: { riskItemId: string }, options: IRequestOptions = {}): AxiosPromise<RiskItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/GetRiskItemSingle'

    return axios({
      ...options,
      method: 'get',
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
  getRiskItemArrayByTicketId(
    parameters: { ticketId: string, ticketType: string, isContainsTicketItemRisk: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoRiskItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketId'

    return axios({
      ...options,
      method: 'get',
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
  getRiskItemArrayFromTemplate(options: IRequestOptions = {}): AxiosPromise<ListResultDtoRiskItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/GetRiskItemArrayFromTemplate'

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
  getRiskItemArrayByTicketFolderId(
    parameters: { ticketFolderId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoRiskItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketFolderId'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class RoleService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getRoles(parameters: { permission?: string }, options: IRequestOptions = {}): AxiosPromise<ListResultDtoRoleListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/GetRoles'

    return axios({
      ...options,
      method: 'get',
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
  getRoleForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetRoleForEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/GetRoleForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateRole(
    parameters: { input?: CreateOrUpdateRoleInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/CreateOrUpdateRole'

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
  deleteRole(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/DeleteRole'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SafetyWearService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  addOrUpdateSafetyWearMonitoring(
    parameters: { input?: SafetyWearMonitoringInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring'

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
  getOne(
    parameters: { userId: number, equipmentNo: number },
    options: IRequestOptions = {}
  ): AxiosPromise<SafetyWearMonitoringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetOne'

    return axios({
      ...options,
      method: 'get',
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
  getList(
    parameters: { stationId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoSafetyWearMonitoringOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetList'

    return axios({
      ...options,
      method: 'get',
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
  getSafetyWearEquipmentByMacAddress(
    parameters: { macAddress?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<EquipmentInfoOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress'

    return axios({
      ...options,
      method: 'get',
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
  getSafetyWearEquipments(
    parameters: { stationId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoEquipmentInfoOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetSafetyWearEquipments'

    return axios({
      ...options,
      method: 'get',
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
  getUserListForSafetyWearLogin(
    parameters: { userName?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoSafetyWearUserOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SessionService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCurrentLoginInformations(options: IRequestOptions = {}): AxiosPromise<GetCurrentLoginInformationsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Session/GetCurrentLoginInformations'

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
  updateUserSignInToken(options: IRequestOptions = {}): AxiosPromise<UpdateUserSignInTokenOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Session/UpdateUserSignInToken'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers
    })
  }
}
export class StationService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getStations(parameters: { name?: string }, options: IRequestOptions = {}): AxiosPromise<ListResultDtoStationListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStations'

    return axios({
      ...options,
      method: 'get',
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
  getStationForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetStationEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStationForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateStation(
    parameters: { input?: CreateOrUpdateStationInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/CreateOrUpdateStation'

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
  deleteStation(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/DeleteStation'

    return axios({
      ...options,
      method: 'delete',
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
  getStationNotBind(
    parameters: { name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoStationListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStationNotBind'

    return axios({
      ...options,
      method: 'get',
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
  bindEquipmentStation(
    parameters: { input?: BindEquipmentStationInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/BindEquipmentStation'

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
  removeEquipmentStation(parameters: { equipmentId: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/RemoveEquipmentStation'

    return axios({
      ...options,
      method: 'delete',
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
  createStationUsers(parameters: { input?: CreateStationUserInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/CreateStationUsers'

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
  removeUserFromStation(
    parameters: { stationUserDtoStationId: number, stationUserDtoUserId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/RemoveUserFromStation'

    return axios({
      ...options,
      method: 'delete',
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
  updateDefaultUserStation(
    parameters: { input?: UpdateDefaultUserStationInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/UpdateDefaultUserStation'

    return axios({
      ...options,
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class StationAreaService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  createStationArea(
    parameters: { input?: CreateStationAreaInput },
    options: IRequestOptions = {}
  ): AxiosPromise<StationAreaDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/CreateStationArea'

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
  updateStationArea(
    parameters: { input?: UpdateStationAreaInput },
    options: IRequestOptions = {}
  ): AxiosPromise<StationAreaDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/UpdateStationArea'

    return axios({
      ...options,
      method: 'put',
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
  moveStationArea(parameters: { input?: MoveStationAreaInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/MoveStationArea'

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
  deleteStationArea(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/DeleteStationArea'

    return axios({
      ...options,
      method: 'delete',
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
  getStationArea(options: IRequestOptions = {}): AxiosPromise<ListResultDtoStationAreaDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetStationArea'

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
  getCurrentUserStationArea(options: IRequestOptions = {}): AxiosPromise<ListResultDtoStationAreaDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetCurrentUserStationArea'

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
  getUserStationArea(
    parameters: { userId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoStationAreaDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetUserStationArea'

    return axios({
      ...options,
      method: 'get',
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
  getStationAreaWithEquipments(options: IRequestOptions = {}): AxiosPromise<ListResultDtoStationAreaWithEquipment> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetStationAreaWithEquipments'

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
  stationAreaBindStation(
    parameters: { input?: StationAreaBindStationInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/StationAreaBindStation'

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
  removeStationAreaStation(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/RemoveStationAreaStation'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class StationUserService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getRelatedUserListByStationId(
    parameters: { id: number, sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoUserListByStationIdDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationUser/GetRelatedUserListByStationId'

    return axios({
      ...options,
      method: 'get',
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
  getNotRelatedUserListByStationId(
    parameters: { stationId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoStationOrganizationUserDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationUser/GetNotRelatedUserListByStationId'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SubscriptionService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  upgradeTenantToEquivalentEdition(
    parameters: { upgradeEditionId: number },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTenants(
    parameters: {
      filter?: string,
      subscriptionEndDateStart?: string,
      subscriptionEndDateEnd?: string,
      creationDateStart?: string,
      creationDateEnd?: string,
      editionId?: number,
      editionIdSpecified: boolean,
      sorting?: string,
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoTenantListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenants'

    return axios({
      ...options,
      method: 'get',
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
  createTenant(parameters: { input?: CreateTenantInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/CreateTenant'

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
  getTenantForEdit(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<TenantEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenantForEdit'

    return axios({
      ...options,
      method: 'get',
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
  updateTenant(parameters: { input?: TenantEditDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UpdateTenant'

    return axios({
      ...options,
      method: 'put',
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
  deleteTenant(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/DeleteTenant'

    return axios({
      ...options,
      method: 'delete',
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
  getTenantFeaturesForEdit(
    parameters: { id: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetTenantFeaturesEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenantFeaturesForEdit'

    return axios({
      ...options,
      method: 'get',
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
  updateTenantFeatures(
    parameters: { input?: UpdateTenantFeaturesInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UpdateTenantFeatures'

    return axios({
      ...options,
      method: 'put',
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
  resetTenantSpecificFeatures(parameters: { input?: EntityDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/ResetTenantSpecificFeatures'

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
  unlockTenantAdmin(parameters: { input?: EntityDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UnlockTenantAdmin'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantDashboardService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMemberActivity(options: IRequestOptions = {}): AxiosPromise<GetMemberActivityOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetMemberActivity'

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
  getDashboardData(
    parameters: { salesSummaryDatePeriod: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetDashboardDataOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetDashboardData'

    return axios({
      ...options,
      method: 'get',
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
  getSalesSummary(
    parameters: { salesSummaryDatePeriod: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetSalesSummaryOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetSalesSummary'

    return axios({
      ...options,
      method: 'get',
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
  getWorldMap(parameters: { input?: undefined }, options: IRequestOptions = {}): AxiosPromise<GetWorldMapOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetWorldMap'

    return axios({
      ...options,
      method: 'get',
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
  getGeneralStats(
    parameters: { input?: undefined },
    options: IRequestOptions = {}
  ): AxiosPromise<GetGeneralStatsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetGeneralStats'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantRegistrationService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  registerTenant(
    parameters: { input?: RegisterTenantInput },
    options: IRequestOptions = {}
  ): AxiosPromise<RegisterTenantOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/RegisterTenant'

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
  getEditionsForSelect(options: IRequestOptions = {}): AxiosPromise<EditionsSelectOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/GetEditionsForSelect'

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
  getEdition(parameters: { editionId: number }, options: IRequestOptions = {}): AxiosPromise<EditionSelectDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/GetEdition'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantSettingsService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAllSettings(options: IRequestOptions = {}): AxiosPromise<TenantSettingsEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/GetAllSettings'

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
  updateAllSettings(parameters: { input?: TenantSettingsEditDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/UpdateAllSettings'

    return axios({
      ...options,
      method: 'put',
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
  clearLogo(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/ClearLogo'

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
  clearCustomCss(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/ClearCustomCss'

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
  sendTestEmail(parameters: { input?: SendTestEmailInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/SendTestEmail'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TerimalPortConfigService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTerminalPortConfigs(
    parameters: { terminalId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoTerminalPortConfigListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs'

    return axios({
      ...options,
      method: 'get',
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
  getTerminalPortConfigForEdit(
    parameters: { id?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetTerminalPortConfigOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateTerminalPortConfig(
    parameters: { input?: CreateOrUpdateTerminalPortConfigInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig'

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
  deleteTerminalPortConfig(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TerminalService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTerminals(options: IRequestOptions = {}): AxiosPromise<ListResultDtoTerminalListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/GetTerminals'

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
  getTerminalForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetTerminalEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/GetTerminalForEdit'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateTerminal(
    parameters: { input?: CreateOrUpdateTerminalInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/CreateOrUpdateTerminal'

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
  deleteTerminal(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/DeleteTerminal'

    return axios({
      ...options,
      method: 'delete',
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
  resetTerminal(parameters: { input?: ResetTerminalInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/ResetTerminal'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TicketFolderService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  addOrUpdateTicketFolder(
    parameters: { input?: AddOrUpdateTicketFolderInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/AddOrUpdateTicketFolder'

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
  deleteStationTicketFolder(
    parameters: { stationId?: number, isForce: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/DeleteStationTicketFolder'

    return axios({
      ...options,
      method: 'delete',
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
  deleteTicketFolder(
    parameters: { ticketFolderId: string, isForce: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/DeleteTicketFolder'

    return axios({
      ...options,
      method: 'delete',
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
  addOrUpdateTicketFolderRiskInfo(
    parameters: { input?: AddOrUpdateTicketFolderRiskInfoInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/AddOrUpdateTicketFolderRiskInfo'

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
  getStationTicketFolderChildrens(
    parameters: { stationId?: number, depth: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoIdNameTree> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetStationTicketFolderChildrens'

    return axios({
      ...options,
      method: 'get',
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
  getTicketFolderChildrens(
    parameters: { ticketFolderId?: string, depth: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoIdNameTree> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetTicketFolderChildrens'

    return axios({
      ...options,
      method: 'get',
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
  getStationTicketFolderChildrenWithTicket(
    parameters: { stationId?: number, depth: number, ticketFolderId?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetStationTicketFolderChildrenWithTicket'

    return axios({
      ...options,
      method: 'get',
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
  getTicketFoldersByName(
    parameters: { partName?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoIdName> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetTicketFoldersByName'

    return axios({
      ...options,
      method: 'get',
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
  getTicketFolderById(
    parameters: { ticketFolderId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<GetTicketFolderOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetTicketFolderById'

    return axios({
      ...options,
      method: 'get',
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
  assignFolderTickets(
    parameters: { input?: AssignFolderTicketsInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/AssignFolderTickets'

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
  getFolderTicketsById(
    parameters: { ticketFolderId: string, isRecursive: boolean },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoTicketListItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetFolderTicketsById'

    return axios({
      ...options,
      method: 'get',
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
  getTicketFoldersWithTicketsByParentId(
    parameters: { ticktFolderId?: string, depth: number, isNeedSearchByUserProfessional: boolean, stationId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetTicketFoldersWithTicketsByParentId'

    return axios({
      ...options,
      method: 'get',
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
  getStationTicketFoldersWithTickets(
    parameters: { stationId?: number, depth: number, ticketFolderId?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketFolder/GetStationTicketFoldersWithTickets'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TicketTypicalService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  addOrUpdateTicketTypical(
    parameters: { input?: AddOrUpdateTicketTypicalInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/AddOrUpdateTicketTypical'

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
  deleteTicketTypical(
    parameters: { ticketTypicalId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/DeleteTicketTypical'

    return axios({
      ...options,
      method: 'delete',
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
  getTicketsByTaskName(
    parameters: {
      partTitle?: string,
      stationId?: number,
      ticketFolderId?: string,
      isRecursive: boolean,
      skipCount: number,
      maxResultCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoTicketListItemDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicketsByTaskName'

    return axios({
      ...options,
      method: 'get',
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
  getTicketItems(
    parameters: { ticketId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoTicketItemTypicalDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicketItems'

    return axios({
      ...options,
      method: 'get',
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
  addOrUpdateCommit(
    parameters: { input?: AddOrUpdateCommitInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/AddOrUpdateCommit'

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
  addOrUpdateApprove(
    parameters: { input?: AddOrUpdateApproveInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/AddOrUpdateApprove'

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
  deleteTicketTypicalInvalid(
    parameters: { ticketTypicalInvalidId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/DeleteTicketTypicalInvalid'

    return axios({
      ...options,
      method: 'delete',
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
  getTicketTypicalInvalids(
    parameters: { stationId: number, ticketRunStates?: string[] },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoGetTicketTypicalInvalidsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicketTypicalInvalids'

    return axios({
      ...options,
      method: 'get',
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
  getTicketTypicalInvalid(
    parameters: { ticketTypicalInvalidId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<TicketTypicalInvalid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicketTypicalInvalid'

    return axios({
      ...options,
      method: 'get',
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
  getTicketItemTypicalInvalids(
    parameters: { ticketTypicalInvalidId: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoTicketItemTypicalInvalid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicketItemTypicalInvalids'

    return axios({
      ...options,
      method: 'get',
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
  getTicket(parameters: { ticketTypicalId: string }, options: IRequestOptions = {}): AxiosPromise<TicketTypical> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/GetTicket'

    return axios({
      ...options,
      method: 'get',
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
  assignTicketItem(
    parameters: { input?: AssignTicketItemInput },
    options: IRequestOptions = {}
  ): AxiosPromise<ResultBoolean> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/AssignTicketItem'

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
  createTicketCurrent(
    parameters: { input?: CreateTicketCurrentInput },
    options: IRequestOptions = {}
  ): AxiosPromise<IdGuid> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TicketTypical/CreateTicketCurrent'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TimingService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTimezones(
    parameters: { defaultTimezoneScope: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoNameValueDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Timing/GetTimezones'

    return axios({
      ...options,
      method: 'get',
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
  getTimezoneComboboxItems(
    parameters: { selectedTimezoneId?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Timing/GetTimezoneComboboxItems'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TokenAuthService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  authenticate(
    parameters: { model?: AuthenticateModel },
    options: IRequestOptions = {}
  ): AxiosPromise<AuthenticateResultModel> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/Authenticate'

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
  sendTwoFactorAuthCode(
    parameters: { model?: SendTwoFactorAuthCodeModel },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/SendTwoFactorAuthCode'

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
  impersonatedAuthenticate(
    parameters: { impersonationToken?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<ImpersonatedAuthenticateResultModel> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/ImpersonatedAuthenticate'

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
  linkedAccountAuthenticate(
    parameters: { switchAccountToken?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<SwitchedAccountAuthenticateResultModel> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/LinkedAccountAuthenticate'

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
  getExternalAuthenticationProviders(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/GetExternalAuthenticationProviders'

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
  externalAuthenticate(
    parameters: { model?: ExternalAuthenticateModel },
    options: IRequestOptions = {}
  ): AxiosPromise<ExternalAuthenticateResultModel> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/ExternalAuthenticate'

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
  securityAuthenticate(
    parameters: { model?: SecurityAuthenticateModel },
    options: IRequestOptions = {}
  ): AxiosPromise<SecurityAuthenticateResultModel> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/SecurityAuthenticate'

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
  testNotification(
    parameters: { message?: string, severity?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/TestNotification'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UiCustomizationSettingsService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getUiManagementSettings(options: IRequestOptions = {}): AxiosPromise<UiCustomizationSettingsEditDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings'

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
  updateUiManagementSettings(
    parameters: { settings?: UiCustomizationSettingsEditDto },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings'

    return axios({
      ...options,
      method: 'put',
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
  updateDefaultUiManagementSettings(
    parameters: { settings?: UiCustomizationSettingsEditDto },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings'

    return axios({
      ...options,
      method: 'put',
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
  useSystemDefaultSettings(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class UserService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getUsers(
    parameters: {
      filter?: string,
      permission?: string,
      role?: number,
      sorting?: string,
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoUserListDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsers'

    return axios({
      ...options,
      method: 'get',
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
  getUsersToExcel(options: IRequestOptions = {}): AxiosPromise<FileDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsersToExcel'

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
  getUserForEdit(parameters: { id?: number }, options: IRequestOptions = {}): AxiosPromise<GetUserForEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUserForEdit'

    return axios({
      ...options,
      method: 'get',
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
  getUserPermissionsForEdit(
    parameters: { id: number },
    options: IRequestOptions = {}
  ): AxiosPromise<GetUserPermissionsForEditOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUserPermissionsForEdit'

    return axios({
      ...options,
      method: 'get',
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
  resetUserSpecificPermissions(
    parameters: { input?: EntityDtoInt64 },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/ResetUserSpecificPermissions'

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
  updateUserPermissions(
    parameters: { input?: UpdateUserPermissionsInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/UpdateUserPermissions'

    return axios({
      ...options,
      method: 'put',
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
  createOrUpdateUser(
    parameters: { input?: CreateOrUpdateUserInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/CreateOrUpdateUser'

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
  deleteUser(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/DeleteUser'

    return axios({
      ...options,
      method: 'delete',
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
  unlockUser(parameters: { input?: EntityDtoInt64 }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/UnlockUser'

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
  getUsersForLogin(
    parameters: { name?: string, surname?: string, userName?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsersForLogin'

    return axios({
      ...options,
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UserLinkService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  linkToUser(parameters: { input?: LinkToUserInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/LinkToUser'

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
  getLinkedUsers(
    parameters: { maxResultCount: number, skipCount: number, sorting?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<PagedResultDtoLinkedUserDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/GetLinkedUsers'

    return axios({
      ...options,
      method: 'get',
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
  getRecentlyUsedLinkedUsers(options: IRequestOptions = {}): AxiosPromise<ListResultDtoLinkedUserDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers'

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
  unlinkUser(parameters: { input?: UnlinkUserInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/UnlinkUser'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UserLoginService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getRecentUserLoginAttempts(options: IRequestOptions = {}): AxiosPromise<ListResultDtoUserLoginAttemptDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/GetRecentUserLoginAttempts'

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
  getNfcCurrentUserLogin(options: IRequestOptions = {}): AxiosPromise<GetNfcCurrentUserLoginOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/GetNfcCurrentUserLogin'

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
  createOrUpdateNfcUserLogin(
    parameters: { input?: CreateOrUpdateNfcUserLoginInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin'

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
  bindNfcCurrentUserLogin(parameters: { input?: UserLoginDto }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/BindNfcCurrentUserLogin'

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
  removeNfcUserLogin(parameters: { userId: number, key: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/RemoveNfcUserLogin'

    return axios({
      ...options,
      method: 'delete',
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
  removeNfcCurrentUserLogin(parameters: { key: string }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin'

    return axios({
      ...options,
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class WebLogService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getLatestWebLogs(options: IRequestOptions = {}): AxiosPromise<GetLatestWebLogsOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WebLog/GetLatestWebLogs'

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
  downloadWebLogs(options: IRequestOptions = {}): AxiosPromise<FileDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WebLog/DownloadWebLogs'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class WireCabinetService {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  wireCabinetApply(parameters: { input?: WireCabinetApplyInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetApply'

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
  wireCabinetApprove(
    parameters: { input?: WireCabinetApproveInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetApprove'

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
  wireCabinetUnlock(
    parameters: { input?: WireCabinetUnlockInput },
    options: IRequestOptions = {}
  ): AxiosPromise<WireCabinetUnlockOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUnlock'

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
  wireCabinetHook(parameters: { input?: WireCabinetHookInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetHook'

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
  wireCabinetDeviceHook(
    parameters: { input?: WireCabinetHook2Input },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetDeviceHook'

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
  wireCabinetUnHook(parameters: { input?: WireCabinetUnHookInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUnHook'

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
  wireCabinetUpdateTask(
    parameters: { input?: WireCabinetUpdateTaskInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUpdateTask'

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
  getApplyReasonEnums(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplyReasonEnums'

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
  getApplyReasonList(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplyReasonList'

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
  getBuckleTypeEnums(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetBuckleTypeEnums'

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
  getLockModeEnums(options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetLockModeEnums'

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
  getTask(parameters: { id: number }, options: IRequestOptions = {}): AxiosPromise<WireCabinetTaskOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetTask'

    return axios({
      ...options,
      method: 'get',
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
  getApplicants(options: IRequestOptions = {}): AxiosPromise<ListResultDtoWireCabinetOperatorDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplicants'

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
  getApprovers(options: IRequestOptions = {}): AxiosPromise<ListResultDtoWireCabinetOperatorDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApprovers'

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
  getRecentlyTimeForSelectOperation(
    parameters: { equipmentId?: number, bluetooth?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation'

    return axios({
      ...options,
      method: 'get',
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
  updateOperateTime(parameters: { input?: UpdateOperateTimeInput }, options: IRequestOptions = {}): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/UpdateOperateTime'

    return axios({
      ...options,
      method: 'put',
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
  getWireDetail(parameters: { value: string }, options: IRequestOptions = {}): AxiosPromise<WireDetailOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireDetail'

    return axios({
      ...options,
      method: 'get',
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
  uploadFile(parameters: { file?: any }, options: IRequestOptions = {}): AxiosPromise<ListResultDtoUploadFileOutput> {
    let headers = {
      'Content-Type': 'multipart/form-data',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/UploadFile'

    let data = new FormData()

    if (parameters['file']) {
      data.append('file', parameters['file'], 'file')
    }

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: data
    })
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getWireCabinet(
    parameters: { equipmentId?: number, bluetooth?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<WireCabinetOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireCabinet'

    return axios({
      ...options,
      method: 'get',
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
  createOrUpdateEquipmentPropertyConfig(
    parameters: { input?: EquipmentPropertyConfigInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig'

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
  getWirePile(parameters: { value?: string }, options: IRequestOptions = {}): AxiosPromise<WirePileOutput> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWirePile'

    return axios({
      ...options,
      method: 'get',
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
  getWiresBeTaken(
    parameters: { stationId?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<ListResultDtoWireBeTakenDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWiresBeTaken'

    return axios({
      ...options,
      method: 'get',
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
  getWireCabinetBluetooths(options: IRequestOptions = {}): AxiosPromise<ListResultDtoWireCabinetBluetoothDto> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireCabinetBluetooths'

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
  checkWireConfigIsExsit(
    parameters: { input?: CheckWireConfigInput },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/CheckWireConfigIsExsit'

    return axios({
      ...options,
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class IsTenantAvailableInput {
  /**
   *
   * @type {string}
   * @memberof IsTenantAvailableInput
   */
  tenancyName: string

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
    }
  }
}

export class IsTenantAvailableOutput {
  /**
   *
   * @type {'Available'|'InActive'|'NotFound'}
   * @memberof IsTenantAvailableOutput
   */
  state: 'Available' | 'InActive' | 'NotFound'

  /**
   *
   * @type {number}
   * @memberof IsTenantAvailableOutput
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof IsTenantAvailableOutput
   */
  serverRootAddress: string

  constructor(data?: any) {
    if (data) {
      this['state'] = data['state']
      this['tenantId'] = data['tenantId']
      this['serverRootAddress'] = data['serverRootAddress']
    }
  }
}

export class RegisterInput {
  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  password: string

  /**
   *
   * @type {string}
   * @memberof RegisterInput
   */
  captchaResponse: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['password'] = data['password']
      this['captchaResponse'] = data['captchaResponse']
    }
  }
}

export class RegisterOutput {
  /**
   *
   * @type {boolean}
   * @memberof RegisterOutput
   */
  canLogin: boolean

  constructor(data?: any) {
    if (data) {
      this['canLogin'] = data['canLogin']
    }
  }
}

export class SendPasswordResetCodeInput {
  /**
   *
   * @type {string}
   * @memberof SendPasswordResetCodeInput
   */
  emailAddress: string

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

export class ResetPasswordInput {
  /**
   *
   * @type {number}
   * @memberof ResetPasswordInput
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof ResetPasswordInput
   */
  resetCode: string

  /**
   *
   * @type {string}
   * @memberof ResetPasswordInput
   */
  password: string

  /**
   *
   * @type {string}
   * @memberof ResetPasswordInput
   */
  returnUrl: string

  /**
   *
   * @type {string}
   * @memberof ResetPasswordInput
   */
  singleSignIn: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['resetCode'] = data['resetCode']
      this['password'] = data['password']
      this['returnUrl'] = data['returnUrl']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

export class ResetPasswordOutput {
  /**
   *
   * @type {boolean}
   * @memberof ResetPasswordOutput
   */
  canLogin: boolean

  /**
   *
   * @type {string}
   * @memberof ResetPasswordOutput
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['canLogin'] = data['canLogin']
      this['userName'] = data['userName']
    }
  }
}

export class SendEmailActivationLinkInput {
  /**
   *
   * @type {string}
   * @memberof SendEmailActivationLinkInput
   */
  emailAddress: string

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

export class ActivateEmailInput {
  /**
   *
   * @type {number}
   * @memberof ActivateEmailInput
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof ActivateEmailInput
   */
  confirmationCode: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['confirmationCode'] = data['confirmationCode']
    }
  }
}

export class ImpersonateInput {
  /**
   *
   * @type {number}
   * @memberof ImpersonateInput
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof ImpersonateInput
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

export class ImpersonateOutput {
  /**
   *
   * @type {string}
   * @memberof ImpersonateOutput
   */
  impersonationToken: string

  /**
   *
   * @type {string}
   * @memberof ImpersonateOutput
   */
  tenancyName: string

  constructor(data?: any) {
    if (data) {
      this['impersonationToken'] = data['impersonationToken']
      this['tenancyName'] = data['tenancyName']
    }
  }
}

export class SwitchToLinkedAccountInput {
  /**
   *
   * @type {number}
   * @memberof SwitchToLinkedAccountInput
   */
  targetTenantId: number

  /**
   *
   * @type {number}
   * @memberof SwitchToLinkedAccountInput
   */
  targetUserId: number

  constructor(data?: any) {
    if (data) {
      this['targetTenantId'] = data['targetTenantId']
      this['targetUserId'] = data['targetUserId']
    }
  }
}

export class SwitchToLinkedAccountOutput {
  /**
   *
   * @type {string}
   * @memberof SwitchToLinkedAccountOutput
   */
  switchAccountToken: string

  /**
   *
   * @type {string}
   * @memberof SwitchToLinkedAccountOutput
   */
  tenancyName: string

  constructor(data?: any) {
    if (data) {
      this['switchAccountToken'] = data['switchAccountToken']
      this['tenancyName'] = data['tenancyName']
    }
  }
}

export class PagedResultDtoAuditLogListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoAuditLogListDto
   */
  totalCount: number

  /**
   *
   * @type {AuditLogListDto[]}
   * @memberof PagedResultDtoAuditLogListDto
   */
  items: AuditLogListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class AuditLogListDto {
  /**
   *
   * @type {number}
   * @memberof AuditLogListDto
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  userName: string

  /**
   *
   * @type {number}
   * @memberof AuditLogListDto
   */
  impersonatorTenantId: number

  /**
   *
   * @type {number}
   * @memberof AuditLogListDto
   */
  impersonatorUserId: number

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  serviceName: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  methodName: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  parameters: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  executionTime: string

  /**
   *
   * @type {number}
   * @memberof AuditLogListDto
   */
  executionDuration: number

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  clientIpAddress: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  clientName: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  browserInfo: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  exception: string

  /**
   *
   * @type {string}
   * @memberof AuditLogListDto
   */
  customData: string

  /**
   *
   * @type {number}
   * @memberof AuditLogListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['userName'] = data['userName']
      this['impersonatorTenantId'] = data['impersonatorTenantId']
      this['impersonatorUserId'] = data['impersonatorUserId']
      this['serviceName'] = data['serviceName']
      this['methodName'] = data['methodName']
      this['parameters'] = data['parameters']
      this['executionTime'] = data['executionTime']
      this['executionDuration'] = data['executionDuration']
      this['clientIpAddress'] = data['clientIpAddress']
      this['clientName'] = data['clientName']
      this['browserInfo'] = data['browserInfo']
      this['exception'] = data['exception']
      this['customData'] = data['customData']
      this['id'] = data['id']
    }
  }
}

export class FileDto {
  /**
   *
   * @type {string}
   * @memberof FileDto
   */
  fileName: string

  /**
   *
   * @type {string}
   * @memberof FileDto
   */
  fileType: string

  /**
   *
   * @type {string}
   * @memberof FileDto
   */
  fileToken: string

  constructor(data?: any) {
    if (data) {
      this['fileName'] = data['fileName']
      this['fileType'] = data['fileType']
      this['fileToken'] = data['fileToken']
    }
  }
}

export class ListResultDtoCacheDto {
  /**
   *
   * @type {CacheDto[]}
   * @memberof ListResultDtoCacheDto
   */
  items: CacheDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class CacheDto {
  /**
   *
   * @type {string}
   * @memberof CacheDto
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

export class EntityDtoString {
  /**
   *
   * @type {string}
   * @memberof EntityDtoString
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

export class GetUserChatFriendsWithSettingsOutput {
  /**
   *
   * @type {string}
   * @memberof GetUserChatFriendsWithSettingsOutput
   */
  serverTime: string

  /**
   *
   * @type {FriendDto[]}
   * @memberof GetUserChatFriendsWithSettingsOutput
   */
  friends: FriendDto[]

  constructor(data?: any) {
    if (data) {
      this['serverTime'] = data['serverTime']
      this['friends'] = data['friends']
    }
  }
}

export class FriendDto {
  /**
   *
   * @type {number}
   * @memberof FriendDto
   */
  friendUserId: number

  /**
   *
   * @type {number}
   * @memberof FriendDto
   */
  friendTenantId: number

  /**
   *
   * @type {string}
   * @memberof FriendDto
   */
  friendUserName: string

  /**
   *
   * @type {string}
   * @memberof FriendDto
   */
  friendTenancyName: string

  /**
   *
   * @type {string}
   * @memberof FriendDto
   */
  friendProfilePictureId: string

  /**
   *
   * @type {number}
   * @memberof FriendDto
   */
  unreadMessageCount: number

  /**
   *
   * @type {boolean}
   * @memberof FriendDto
   */
  isOnline: boolean

  /**
   *
   * @type {'Accepted'|'Blocked'}
   * @memberof FriendDto
   */
  state: 'Accepted' | 'Blocked'

  constructor(data?: any) {
    if (data) {
      this['friendUserId'] = data['friendUserId']
      this['friendTenantId'] = data['friendTenantId']
      this['friendUserName'] = data['friendUserName']
      this['friendTenancyName'] = data['friendTenancyName']
      this['friendProfilePictureId'] = data['friendProfilePictureId']
      this['unreadMessageCount'] = data['unreadMessageCount']
      this['isOnline'] = data['isOnline']
      this['state'] = data['state']
    }
  }
}

export class ListResultDtoChatMessageDto {
  /**
   *
   * @type {ChatMessageDto[]}
   * @memberof ListResultDtoChatMessageDto
   */
  items: ChatMessageDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ChatMessageDto {
  /**
   *
   * @type {number}
   * @memberof ChatMessageDto
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof ChatMessageDto
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof ChatMessageDto
   */
  targetUserId: number

  /**
   *
   * @type {number}
   * @memberof ChatMessageDto
   */
  targetTenantId: number

  /**
   *
   * @type {'Sender'|'Receiver'}
   * @memberof ChatMessageDto
   */
  side: 'Sender' | 'Receiver'

  /**
   *
   * @type {'Unread'|'Read'}
   * @memberof ChatMessageDto
   */
  readState: 'Unread' | 'Read'

  /**
   *
   * @type {'Unread'|'Read'}
   * @memberof ChatMessageDto
   */
  receiverReadState: 'Unread' | 'Read'

  /**
   *
   * @type {string}
   * @memberof ChatMessageDto
   */
  message: string

  /**
   *
   * @type {string}
   * @memberof ChatMessageDto
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof ChatMessageDto
   */
  sharedMessageId: string

  /**
   *
   * @type {number}
   * @memberof ChatMessageDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
      this['targetUserId'] = data['targetUserId']
      this['targetTenantId'] = data['targetTenantId']
      this['side'] = data['side']
      this['readState'] = data['readState']
      this['receiverReadState'] = data['receiverReadState']
      this['message'] = data['message']
      this['creationTime'] = data['creationTime']
      this['sharedMessageId'] = data['sharedMessageId']
      this['id'] = data['id']
    }
  }
}

export class MarkAllUnreadMessagesOfUserAsReadInput {
  /**
   *
   * @type {number}
   * @memberof MarkAllUnreadMessagesOfUserAsReadInput
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof MarkAllUnreadMessagesOfUserAsReadInput
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

export class ListResultDtoSubscribableEditionComboboxItemDto {
  /**
   *
   * @type {SubscribableEditionComboboxItemDto[]}
   * @memberof ListResultDtoSubscribableEditionComboboxItemDto
   */
  items: SubscribableEditionComboboxItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class SubscribableEditionComboboxItemDto {
  /**
   *
   * @type {boolean}
   * @memberof SubscribableEditionComboboxItemDto
   */
  isFree: boolean

  /**
   *
   * @type {string}
   * @memberof SubscribableEditionComboboxItemDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof SubscribableEditionComboboxItemDto
   */
  displayText: string

  /**
   *
   * @type {boolean}
   * @memberof SubscribableEditionComboboxItemDto
   */
  isSelected: boolean

  constructor(data?: any) {
    if (data) {
      this['isFree'] = data['isFree']
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

export class FindUsersInput {
  /**
   *
   * @type {number}
   * @memberof FindUsersInput
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof FindUsersInput
   */
  maxResultCount: number

  /**
   *
   * @type {number}
   * @memberof FindUsersInput
   */
  skipCount: number

  /**
   *
   * @type {string}
   * @memberof FindUsersInput
   */
  filter: string

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['maxResultCount'] = data['maxResultCount']
      this['skipCount'] = data['skipCount']
      this['filter'] = data['filter']
    }
  }
}

export class PagedResultDtoNameValueDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoNameValueDto
   */
  totalCount: number

  /**
   *
   * @type {NameValueDto[]}
   * @memberof PagedResultDtoNameValueDto
   */
  items: NameValueDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class NameValueDto {
  /**
   *
   * @type {string}
   * @memberof NameValueDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof NameValueDto
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
    }
  }
}

export class GetDefaultEditionNameOutput {
  /**
   *
   * @type {string}
   * @memberof GetDefaultEditionNameOutput
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

export class ListResultDtoDeviceTypeComboboxItemDto {
  /**
   *
   * @type {DeviceTypeComboboxItemDto[]}
   * @memberof ListResultDtoDeviceTypeComboboxItemDto
   */
  items: DeviceTypeComboboxItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class DeviceTypeComboboxItemDto {
  /**
   *
   * @type {string}
   * @memberof DeviceTypeComboboxItemDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeComboboxItemDto
   */
  displayText: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeComboboxItemDto
   */
  isSelected: boolean

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

export class ListResultDtoComboboxItemDto {
  /**
   *
   * @type {ComboboxItemDto[]}
   * @memberof ListResultDtoComboboxItemDto
   */
  items: ComboboxItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ComboboxItemDto {
  /**
   *
   * @type {string}
   * @memberof ComboboxItemDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof ComboboxItemDto
   */
  displayText: string

  /**
   *
   * @type {boolean}
   * @memberof ComboboxItemDto
   */
  isSelected: boolean

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

export class DateToStringOutput {
  /**
   *
   * @type {string}
   * @memberof DateToStringOutput
   */
  dateString: string

  constructor(data?: any) {
    if (data) {
      this['dateString'] = data['dateString']
    }
  }
}

export class NameValueString {
  /**
   *
   * @type {string}
   * @memberof NameValueString
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof NameValueString
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
    }
  }
}

export class StringOutput {
  /**
   *
   * @type {string}
   * @memberof StringOutput
   */
  output: string

  constructor(data?: any) {
    if (data) {
      this['output'] = data['output']
    }
  }
}

export class PagedResultDtoDeviceListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoDeviceListDto
   */
  totalCount: number

  /**
   *
   * @type {DeviceListDto[]}
   * @memberof PagedResultDtoDeviceListDto
   */
  items: DeviceListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class DeviceListDto {
  /**
   *
   * @type {string}
   * @memberof DeviceListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceListDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof DeviceListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['id'] = data['id']
    }
  }
}

export class GetDeviceEditOutput {
  /**
   *
   * @type {DeviceEditDto}
   * @memberof GetDeviceEditOutput
   */
  device: DeviceEditDto

  /**
   *
   * @type {DeviceCodeInfoDto[]}
   * @memberof GetDeviceEditOutput
   */
  configListDtos: DeviceCodeInfoDto[]

  constructor(data?: any) {
    if (data) {
      this['device'] = data['device']
      this['configListDtos'] = data['configListDtos']
    }
  }
}

export class DeviceEditDto {
  /**
   *
   * @type {number}
   * @memberof DeviceEditDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof DeviceEditDto
   */
  deviceAreaId: number

  /**
   *
   * @type {string}
   * @memberof DeviceEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceEditDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof DeviceEditDto
   */
  voltage: string

  /**
   *
   * @type {string}
   * @memberof DeviceEditDto
   */
  type: string

  /**
   *
   * @type {number}
   * @memberof DeviceEditDto
   */
  lockCodePropertyId: number

  /**
   *
   * @type {number}
   * @memberof DeviceEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['deviceAreaId'] = data['deviceAreaId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['voltage'] = data['voltage']
      this['type'] = data['type']
      this['lockCodePropertyId'] = data['lockCodePropertyId']
      this['id'] = data['id']
    }
  }
}

export class DeviceCodeInfoDto {
  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoDto
   */
  lockCodeNumber: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoDto
   */
  code: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoDto
   */
  lockType: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoDto
   */
  lockPropertyType: string

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfoDto
   */
  lockCodeConfigId: number

  constructor(data?: any) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['code'] = data['code']
      this['lockType'] = data['lockType']
      this['lockPropertyType'] = data['lockPropertyType']
      this['lockCodeConfigId'] = data['lockCodeConfigId']
    }
  }
}

export class CreateOrUpdateDeviceInput {
  /**
   *
   * @type {CreateOrUpdateDeviceDto}
   * @memberof CreateOrUpdateDeviceInput
   */
  device: CreateOrUpdateDeviceDto

  /**
   *
   * @type {DeviceCodeInfoEditDto[]}
   * @memberof CreateOrUpdateDeviceInput
   */
  codeInfoDtos: DeviceCodeInfoEditDto[]

  constructor(data?: any) {
    if (data) {
      this['device'] = data['device']
      this['codeInfoDtos'] = data['codeInfoDtos']
    }
  }
}

export class CreateOrUpdateDeviceDto {
  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  deviceAreaId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateDeviceDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateDeviceDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  voltage: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  type: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  lockCodePropertyId: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['deviceAreaId'] = data['deviceAreaId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['voltage'] = data['voltage']
      this['type'] = data['type']
      this['lockCodePropertyId'] = data['lockCodePropertyId']
      this['id'] = data['id']
    }
  }
}

export class DeviceCodeInfoEditDto {
  /**
   *
   * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
   * @memberof DeviceCodeInfoEditDto
   */
  lockCodeNumber:
    | 'Um1'
    | 'Um2'
    | 'Um3'
    | 'Um4'
    | 'Um5'
    | 'Um6'
    | 'Um7'
    | 'Um8'
    | 'Um9'
    | 'Um10'
    | 'Um11'
    | 'Um12'
    | 'Um13'
    | 'Um14'
    | 'Um15'
    | 'Um16'
    | 'Um17'
    | 'Um18'

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoEditDto
   */
  code: string

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfoEditDto
   */
  lockCodeConfigId: number

  constructor(data?: any) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['code'] = data['code']
      this['lockCodeConfigId'] = data['lockCodeConfigId']
    }
  }
}

export class QueryDevicesStateInput {
  /**
   *
   * @type {StationDeviceDto[]}
   * @memberof QueryDevicesStateInput
   */
  stationDevices: StationDeviceDto[]

  constructor(data?: any) {
    if (data) {
      this['stationDevices'] = data['stationDevices']
    }
  }
}

export class StationDeviceDto {
  /**
   *
   * @type {string}
   * @memberof StationDeviceDto
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof StationDeviceDto
   */
  pointName: string

  /**
   *
   * @type {number}
   * @memberof StationDeviceDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoDeviceStateDto {
  /**
   *
   * @type {DeviceStateDto[]}
   * @memberof ListResultDtoDeviceStateDto
   */
  items: DeviceStateDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class DeviceStateDto {
  /**
   *
   * @type {string}
   * @memberof DeviceStateDto
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof DeviceStateDto
   */
  pointName: string

  /**
   *
   * @type {number}
   * @memberof DeviceStateDto
   */
  state: number

  /**
   *
   * @type {number}
   * @memberof DeviceStateDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['state'] = data['state']
      this['id'] = data['id']
    }
  }
}

export class UpdateDeviceStateInput {
  /**
   *
   * @type {DeviceStateDto}
   * @memberof UpdateDeviceStateInput
   */
  deviceState: DeviceStateDto

  constructor(data?: any) {
    if (data) {
      this['deviceState'] = data['deviceState']
    }
  }
}

export class UpdateDeviceStateOutput {
  /**
   *
   * @type {DeviceStateDto}
   * @memberof UpdateDeviceStateOutput
   */
  deviceState: DeviceStateDto

  constructor(data?: any) {
    if (data) {
      this['deviceState'] = data['deviceState']
    }
  }
}

export class CheckDeviceNameIsExistInput {
  /**
   *
   * @type {number}
   * @memberof CheckDeviceNameIsExistInput
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof CheckDeviceNameIsExistInput
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof CheckDeviceNameIsExistInput
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['name'] = data['name']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoDeviceAreaListDto {
  /**
   *
   * @type {DeviceAreaListDto[]}
   * @memberof ListResultDtoDeviceAreaListDto
   */
  items: DeviceAreaListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class DeviceAreaListDto {
  /**
   *
   * @type {number}
   * @memberof DeviceAreaListDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof DeviceAreaListDto
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof DeviceAreaListDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof DeviceAreaListDto
   */
  sortId: number

  /**
   *
   * @type {number}
   * @memberof DeviceAreaListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

export class GetDeviceAreaEditOutput {
  /**
   *
   * @type {GetDeviceAreaEditDto}
   * @memberof GetDeviceAreaEditOutput
   */
  deviceArea: GetDeviceAreaEditDto

  constructor(data?: any) {
    if (data) {
      this['deviceArea'] = data['deviceArea']
    }
  }
}

export class GetDeviceAreaEditDto {
  /**
   *
   * @type {number}
   * @memberof GetDeviceAreaEditDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof GetDeviceAreaEditDto
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof GetDeviceAreaEditDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof GetDeviceAreaEditDto
   */
  sortId: number

  /**
   *
   * @type {number}
   * @memberof GetDeviceAreaEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateDeviceAreaInput {
  /**
   *
   * @type {CreateOrUpdateDeviceAreaDto}
   * @memberof CreateOrUpdateDeviceAreaInput
   */
  deviceArea: CreateOrUpdateDeviceAreaDto

  /**
   *
   * @type {number[]}
   * @memberof CreateOrUpdateDeviceAreaInput
   */
  children: number[]

  constructor(data?: any) {
    if (data) {
      this['deviceArea'] = data['deviceArea']
      this['children'] = data['children']
    }
  }
}

export class CreateOrUpdateDeviceAreaDto {
  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceAreaDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceAreaDto
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateDeviceAreaDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceAreaDto
   */
  sortId: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateDeviceAreaDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoLockCodePropertyListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoLockCodePropertyListDto
   */
  totalCount: number

  /**
   *
   * @type {LockCodePropertyListDto[]}
   * @memberof PagedResultDtoLockCodePropertyListDto
   */
  items: LockCodePropertyListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class LockCodePropertyListDto {
  /**
   *
   * @type {string}
   * @memberof LockCodePropertyListDto
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof LockCodePropertyListDto
   */
  opHint1_0: string

  /**
   *
   * @type {string}
   * @memberof LockCodePropertyListDto
   */
  opHint1_1: string

  /**
   *
   * @type {boolean}
   * @memberof LockCodePropertyListDto
   */
  toKey: boolean

  /**
   *
   * @type {boolean}
   * @memberof LockCodePropertyListDto
   */
  stateChange: boolean

  /**
   *
   * @type {number}
   * @memberof LockCodePropertyListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoLockCodePropertySelectDto {
  /**
   *
   * @type {LockCodePropertySelectDto[]}
   * @memberof ListResultDtoLockCodePropertySelectDto
   */
  items: LockCodePropertySelectDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class LockCodePropertySelectDto {
  /**
   *
   * @type {string}
   * @memberof LockCodePropertySelectDto
   */
  codeName: string

  /**
   *
   * @type {number}
   * @memberof LockCodePropertySelectDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName']
      this['id'] = data['id']
    }
  }
}

export class LockCodePropertyEditDto {
  /**
   *
   * @type {string}
   * @memberof LockCodePropertyEditDto
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof LockCodePropertyEditDto
   */
  opHint1_0: string

  /**
   *
   * @type {string}
   * @memberof LockCodePropertyEditDto
   */
  opHint1_1: string

  /**
   *
   * @type {boolean}
   * @memberof LockCodePropertyEditDto
   */
  toKey: boolean

  /**
   *
   * @type {boolean}
   * @memberof LockCodePropertyEditDto
   */
  stateChange: boolean

  /**
   *
   * @type {LockCodeConfigListDto[]}
   * @memberof LockCodePropertyEditDto
   */
  configDtos: LockCodeConfigListDto[]

  /**
   *
   * @type {number}
   * @memberof LockCodePropertyEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['configDtos'] = data['configDtos']
      this['id'] = data['id']
    }
  }
}

export class LockCodeConfigListDto {
  /**
   *
   * @type {string}
   * @memberof LockCodeConfigListDto
   */
  lockType: string

  /**
   *
   * @type {string}
   * @memberof LockCodeConfigListDto
   */
  lockPropertyType: string

  /**
   *
   * @type {string}
   * @memberof LockCodeConfigListDto
   */
  lockCodeNumber: string

  /**
   *
   * @type {number}
   * @memberof LockCodeConfigListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType']
      this['lockPropertyType'] = data['lockPropertyType']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateLockCodePropertyInput {
  /**
   *
   * @type {CreateOrUpdateLockCodePropertyDto}
   * @memberof CreateOrUpdateLockCodePropertyInput
   */
  codePropertyDto: CreateOrUpdateLockCodePropertyDto

  /**
   *
   * @type {LockCodeConfigEditDto[]}
   * @memberof CreateOrUpdateLockCodePropertyInput
   */
  lockCodeConfigs: LockCodeConfigEditDto[]

  constructor(data?: any) {
    if (data) {
      this['codePropertyDto'] = data['codePropertyDto']
      this['lockCodeConfigs'] = data['lockCodeConfigs']
    }
  }
}

export class CreateOrUpdateLockCodePropertyDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  opHint1_0: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  opHint1_1: string

  /**
   *
   * @type {boolean}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  toKey: boolean

  /**
   *
   * @type {boolean}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  stateChange: boolean

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateLockCodePropertyDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['id'] = data['id']
    }
  }
}

export class LockCodeConfigEditDto {
  /**
   *
   * @type {'JXLock'|'DBMLock'|'DKLock'|'DXDKLock'|'GSNYD'|'WYYD'|'YYYD'|'CJFKLock'|'FKSDBMLock'|'ZNLock'|'ZNYB'|'YYDWZJC'|'WYDWZJC'|'JXDBMLock'|'DBMLock_2H'|'DBMLock_3H'|'XJLock'|'WX_DBMLock'|'WX_JXLock'|'WX_GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'ZNHWMLock'|'GSN2E'|'GSN2YD'|'WX_WZSZNMLock'|'WX_DZBQ'|'WX_BSJXLock'|'TBLock'|'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'ZNSXLock'|'GYJLYDQ'|'LGLock_6A'|'WTJGLock'|'DKHLock'|'NoKey'}
   * @memberof LockCodeConfigEditDto
   */
  lockType:
    | 'JXLock'
    | 'DBMLock'
    | 'DKLock'
    | 'DXDKLock'
    | 'GSNYD'
    | 'WYYD'
    | 'YYYD'
    | 'CJFKLock'
    | 'FKSDBMLock'
    | 'ZNLock'
    | 'ZNYB'
    | 'YYDWZJC'
    | 'WYDWZJC'
    | 'JXDBMLock'
    | 'DBMLock_2H'
    | 'DBMLock_3H'
    | 'XJLock'
    | 'WX_DBMLock'
    | 'WX_JXLock'
    | 'WX_GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'ZNHWMLock'
    | 'GSN2E'
    | 'GSN2YD'
    | 'WX_WZSZNMLock'
    | 'WX_DZBQ'
    | 'WX_BSJXLock'
    | 'TBLock'
    | 'XHJGLock'
    | 'SLGLock'
    | 'LTLock'
    | 'BSQLock'
    | 'BSLock'
    | 'CXLock'
    | 'FDHLock'
    | 'PMLock'
    | 'LGLock'
    | 'FHMLock'
    | 'YKLock'
    | 'ZNSXLock'
    | 'GYJLYDQ'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'NoKey'

  /**
   *
   * @type {'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'HWGMLock'|'WX_JXLock'|'WX_DBMLock'|'GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'WX_SKJXLock'|'GSN2YD'|'XJLock'|'JM_GSN2YD'|'GLDBP'|'GLWYBS'|'LSGLGLock'|'WX_WZSZNMLock'|'LGLock_6A'|'WTJGLock'|'DKHLock'|'NoKey'}
   * @memberof LockCodeConfigEditDto
   */
  lockPropertyType:
    | 'XHJGLock'
    | 'SLGLock'
    | 'LTLock'
    | 'BSQLock'
    | 'BSLock'
    | 'CXLock'
    | 'FDHLock'
    | 'PMLock'
    | 'LGLock'
    | 'FHMLock'
    | 'YKLock'
    | 'HWGMLock'
    | 'WX_JXLock'
    | 'WX_DBMLock'
    | 'GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'WX_SKJXLock'
    | 'GSN2YD'
    | 'XJLock'
    | 'JM_GSN2YD'
    | 'GLDBP'
    | 'GLWYBS'
    | 'LSGLGLock'
    | 'WX_WZSZNMLock'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'NoKey'

  /**
   *
   * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
   * @memberof LockCodeConfigEditDto
   */
  lockCodeNumber:
    | 'Um1'
    | 'Um2'
    | 'Um3'
    | 'Um4'
    | 'Um5'
    | 'Um6'
    | 'Um7'
    | 'Um8'
    | 'Um9'
    | 'Um10'
    | 'Um11'
    | 'Um12'
    | 'Um13'
    | 'Um14'
    | 'Um15'
    | 'Um16'
    | 'Um17'
    | 'Um18'

  /**
   *
   * @type {number}
   * @memberof LockCodeConfigEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType']
      this['lockPropertyType'] = data['lockPropertyType']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['id'] = data['id']
    }
  }
}

export class GetDeviceTermsOutput {
  /**
   *
   * @type {string}
   * @memberof GetDeviceTermsOutput
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof GetDeviceTermsOutput
   */
  pointName: string

  /**
   *
   * @type {DeviceStateTermDto[]}
   * @memberof GetDeviceTermsOutput
   */
  deviceStateTerms: DeviceStateTermDto[]

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['deviceStateTerms'] = data['deviceStateTerms']
    }
  }
}

export class DeviceStateTermDto {
  /**
   *
   * @type {number}
   * @memberof DeviceStateTermDto
   */
  fromState: number

  /**
   *
   * @type {number}
   * @memberof DeviceStateTermDto
   */
  toState: number

  /**
   *
   * @type {string}
   * @memberof DeviceStateTermDto
   */
  operationName: string

  /**
   *
   * @type {string}
   * @memberof DeviceStateTermDto
   */
  boardDesc: string

  /**
   *
   * @type {string[]}
   * @memberof DeviceStateTermDto
   */
  terms: string[]

  constructor(data?: any) {
    if (data) {
      this['fromState'] = data['fromState']
      this['toState'] = data['toState']
      this['operationName'] = data['operationName']
      this['boardDesc'] = data['boardDesc']
      this['terms'] = data['terms']
    }
  }
}

export class ListResultDtoDeviceOperationListDto {
  /**
   *
   * @type {DeviceOperationListDto[]}
   * @memberof ListResultDtoDeviceOperationListDto
   */
  items: DeviceOperationListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class DeviceOperationListDto {
  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  stationName: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  voltageLevelId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  voltageLevelName: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  fromDeviceStateId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  toDeviceStateId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  boardDesc: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  deviceTypeId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  fromDeviceState: string

  /**
   *
   * @type {string}
   * @memberof DeviceOperationListDto
   */
  toDeviceState: string

  /**
   *
   * @type {TermListDto[]}
   * @memberof DeviceOperationListDto
   */
  terms: TermListDto[]

  /**
   *
   * @type {number}
   * @memberof DeviceOperationListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['voltageLevelId'] = data['voltageLevelId']
      this['voltageLevelName'] = data['voltageLevelName']
      this['fromDeviceStateId'] = data['fromDeviceStateId']
      this['toDeviceStateId'] = data['toDeviceStateId']
      this['name'] = data['name']
      this['boardDesc'] = data['boardDesc']
      this['deviceTypeId'] = data['deviceTypeId']
      this['fromDeviceState'] = data['fromDeviceState']
      this['toDeviceState'] = data['toDeviceState']
      this['terms'] = data['terms']
      this['id'] = data['id']
    }
  }
}

export class TermListDto {
  /**
   *
   * @type {string}
   * @memberof TermListDto
   */
  type: string

  /**
   *
   * @type {string}
   * @memberof TermListDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof TermListDto
   */
  lockType: string

  /**
   *
   * @type {string[]}
   * @memberof TermListDto
   */
  lockTypes: string[]

  /**
   *
   * @type {number}
   * @memberof TermListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type']
      this['value'] = data['value']
      this['lockType'] = data['lockType']
      this['lockTypes'] = data['lockTypes']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateDeviceOperationInput {
  /**
   *
   * @type {DeviceOperationEditDto}
   * @memberof CreateOrUpdateDeviceOperationInput
   */
  deviceOperation: DeviceOperationEditDto

  constructor(data?: any) {
    if (data) {
      this['deviceOperation'] = data['deviceOperation']
    }
  }
}

export class DeviceOperationEditDto {
  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  voltageLevelId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  fromDeviceStateId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  toDeviceStateId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperationEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceOperationEditDto
   */
  boardDesc: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  deviceTypeId: number

  /**
   *
   * @type {TermEditDto[]}
   * @memberof DeviceOperationEditDto
   */
  terms: TermEditDto[]

  /**
   *
   * @type {number}
   * @memberof DeviceOperationEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['voltageLevelId'] = data['voltageLevelId']
      this['fromDeviceStateId'] = data['fromDeviceStateId']
      this['toDeviceStateId'] = data['toDeviceStateId']
      this['name'] = data['name']
      this['boardDesc'] = data['boardDesc']
      this['deviceTypeId'] = data['deviceTypeId']
      this['terms'] = data['terms']
      this['id'] = data['id']
    }
  }
}

export class TermEditDto {
  /**
   *
   * @type {'Default'|'ByLinkage'|'AddBefault'|'AddAfter'|'Selectable'}
   * @memberof TermEditDto
   */
  type: 'Default' | 'ByLinkage' | 'AddBefault' | 'AddAfter' | 'Selectable'

  /**
   *
   * @type {string}
   * @memberof TermEditDto
   */
  value: string

  /**
   *
   * @type {string[]}
   * @memberof TermEditDto
   */
  lockTypes: string[]

  /**
   *
   * @type {string}
   * @memberof TermEditDto
   */
  lockType: string

  /**
   *
   * @type {number}
   * @memberof TermEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type']
      this['value'] = data['value']
      this['lockTypes'] = data['lockTypes']
      this['lockType'] = data['lockType']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoDeviceTypeListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoDeviceTypeListDto
   */
  totalCount: number

  /**
   *
   * @type {DeviceTypeListDto[]}
   * @memberof PagedResultDtoDeviceTypeListDto
   */
  items: DeviceTypeListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class DeviceTypeListDto {
  /**
   *
   * @type {string}
   * @memberof DeviceTypeListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeListDto
   */
  dnbsCode: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  toPrinter: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  toKey: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceTypeListDto
   */
  graphName: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeListDto
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeListDto
   */
  showMode: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  isEst: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  isPprimary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  isSecondary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeListDto
   */
  isOperable: boolean

  /**
   *
   * @type {number}
   * @memberof DeviceTypeListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['dnbsCode'] = data['dnbsCode']
      this['toPrinter'] = data['toPrinter']
      this['toKey'] = data['toKey']
      this['graphName'] = data['graphName']
      this['codeName'] = data['codeName']
      this['showMode'] = data['showMode']
      this['isEst'] = data['isEst']
      this['isPprimary'] = data['isPprimary']
      this['isSecondary'] = data['isSecondary']
      this['isOperable'] = data['isOperable']
      this['id'] = data['id']
    }
  }
}

export class GetDeviceTypeEditOutput {
  /**
   *
   * @type {DeviceTypeEditDto}
   * @memberof GetDeviceTypeEditOutput
   */
  deviceType: DeviceTypeEditDto

  /**
   *
   * @type {DeviceStateListDto[]}
   * @memberof GetDeviceTypeEditOutput
   */
  deviceStates: DeviceStateListDto[]

  constructor(data?: any) {
    if (data) {
      this['deviceType'] = data['deviceType']
      this['deviceStates'] = data['deviceStates']
    }
  }
}

export class DeviceTypeEditDto {
  /**
   *
   * @type {string}
   * @memberof DeviceTypeEditDto
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  toPrinter: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  toKey: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceTypeEditDto
   */
  dnbsCode: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeEditDto
   */
  graphName: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeEditDto
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof DeviceTypeEditDto
   */
  showMode: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  isEst: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  isPprimary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  isSecondary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceTypeEditDto
   */
  isOperable: boolean

  /**
   *
   * @type {number}
   * @memberof DeviceTypeEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['toPrinter'] = data['toPrinter']
      this['toKey'] = data['toKey']
      this['dnbsCode'] = data['dnbsCode']
      this['graphName'] = data['graphName']
      this['codeName'] = data['codeName']
      this['showMode'] = data['showMode']
      this['isEst'] = data['isEst']
      this['isPprimary'] = data['isPprimary']
      this['isSecondary'] = data['isSecondary']
      this['isOperable'] = data['isOperable']
      this['id'] = data['id']
    }
  }
}

export class DeviceStateListDto {
  /**
   *
   * @type {string}
   * @memberof DeviceStateListDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof DeviceStateListDto
   */
  state: number

  /**
   *
   * @type {number}
   * @memberof DeviceStateListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['state'] = data['state']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateDeviceTypeInput {
  /**
   *
   * @type {DeviceTypeEditDto}
   * @memberof CreateOrUpdateDeviceTypeInput
   */
  deviceType: DeviceTypeEditDto

  /**
   *
   * @type {DeviceStateListDto[]}
   * @memberof CreateOrUpdateDeviceTypeInput
   */
  deviceStates: DeviceStateListDto[]

  constructor(data?: any) {
    if (data) {
      this['deviceType'] = data['deviceType']
      this['deviceStates'] = data['deviceStates']
    }
  }
}

export class ListResultDtoEditionListDto {
  /**
   *
   * @type {EditionListDto[]}
   * @memberof ListResultDtoEditionListDto
   */
  items: EditionListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class EditionListDto {
  /**
   *
   * @type {string}
   * @memberof EditionListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EditionListDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EditionListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof EditionListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

export class GetEditionEditOutput {
  /**
   *
   * @type {EditionEditDto}
   * @memberof GetEditionEditOutput
   */
  edition: EditionEditDto

  /**
   *
   * @type {NameValueDto[]}
   * @memberof GetEditionEditOutput
   */
  featureValues: NameValueDto[]

  /**
   *
   * @type {FlatFeatureDto[]}
   * @memberof GetEditionEditOutput
   */
  features: FlatFeatureDto[]

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
      this['features'] = data['features']
    }
  }
}

export class EditionEditDto {
  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof EditionEditDto
   */
  displayName: string

  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  monthlyPrice: number

  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  annualPrice: number

  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  trialDayCount: number

  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  waitingDayAfterExpire: number

  /**
   *
   * @type {number}
   * @memberof EditionEditDto
   */
  expiringEditionId: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['displayName'] = data['displayName']
      this['monthlyPrice'] = data['monthlyPrice']
      this['annualPrice'] = data['annualPrice']
      this['trialDayCount'] = data['trialDayCount']
      this['waitingDayAfterExpire'] = data['waitingDayAfterExpire']
      this['expiringEditionId'] = data['expiringEditionId']
    }
  }
}

export class FlatFeatureDto {
  /**
   *
   * @type {string}
   * @memberof FlatFeatureDto
   */
  parentName: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureDto
   */
  defaultValue: string

  /**
   *
   * @type {FeatureInputTypeDto}
   * @memberof FlatFeatureDto
   */
  inputType: FeatureInputTypeDto

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['defaultValue'] = data['defaultValue']
      this['inputType'] = data['inputType']
    }
  }
}

export class FeatureInputTypeDto {
  /**
   *
   * @type {string}
   * @memberof FeatureInputTypeDto
   */
  name: string

  /**
   *
   * @type {object}
   * @memberof FeatureInputTypeDto
   */
  attributes: object

  /**
   *
   * @type {IValueValidator}
   * @memberof FeatureInputTypeDto
   */
  validator: IValueValidator

  /**
   *
   * @type {LocalizableComboboxItemSourceDto}
   * @memberof FeatureInputTypeDto
   */
  itemSource: LocalizableComboboxItemSourceDto

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
      this['validator'] = data['validator']
      this['itemSource'] = data['itemSource']
    }
  }
}

export class IValueValidator {
  /**
   *
   * @type {string}
   * @memberof IValueValidator
   */
  name: string

  /**
   *
   * @type {object}
   * @memberof IValueValidator
   */
  attributes: object

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
    }
  }
}

export class LocalizableComboboxItemSourceDto {
  /**
   *
   * @type {LocalizableComboboxItemDto[]}
   * @memberof LocalizableComboboxItemSourceDto
   */
  items: LocalizableComboboxItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class LocalizableComboboxItemDto {
  /**
   *
   * @type {string}
   * @memberof LocalizableComboboxItemDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof LocalizableComboboxItemDto
   */
  displayText: string

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
    }
  }
}

export class CreateOrUpdateEditionDto {
  /**
   *
   * @type {EditionEditDto}
   * @memberof CreateOrUpdateEditionDto
   */
  edition: EditionEditDto

  /**
   *
   * @type {NameValueDto[]}
   * @memberof CreateOrUpdateEditionDto
   */
  featureValues: NameValueDto[]

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
    }
  }
}

export class ListResultDtoEquipmentListDto {
  /**
   *
   * @type {EquipmentListDto[]}
   * @memberof ListResultDtoEquipmentListDto
   */
  items: EquipmentListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class EquipmentListDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  productType: string

  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof EquipmentListDto
   */
  accessSecret: string

  /**
   *
   * @type {number}
   * @memberof EquipmentListDto
   */
  productId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['productType'] = data['productType']
      this['creationTime'] = data['creationTime']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['productId'] = data['productId']
      this['id'] = data['id']
    }
  }
}

export class GetEquipmentEditOutput {
  /**
   *
   * @type {EquipmentEditDto}
   * @memberof GetEquipmentEditOutput
   */
  equipment: EquipmentEditDto

  /**
   *
   * @type {EquipmentPropertyListDto[]}
   * @memberof GetEquipmentEditOutput
   */
  equipmentProperties: EquipmentPropertyListDto[]

  /**
   *
   * @type {EquipmentBindPortDto}
   * @memberof GetEquipmentEditOutput
   */
  equipmentBindPort: EquipmentBindPortDto

  constructor(data?: any) {
    if (data) {
      this['equipment'] = data['equipment']
      this['equipmentProperties'] = data['equipmentProperties']
      this['equipmentBindPort'] = data['equipmentBindPort']
    }
  }
}

export class EquipmentEditDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentEditDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentEditDto
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof EquipmentEditDto
   */
  accessSecret: string

  /**
   *
   * @type {string}
   * @memberof EquipmentEditDto
   */
  productType: string

  /**
   *
   * @type {boolean}
   * @memberof EquipmentEditDto
   */
  isEquipmentOnline: boolean

  /**
   *
   * @type {boolean}
   * @memberof EquipmentEditDto
   */
  isEquipmentFault: boolean

  /**
   *
   * @type {number}
   * @memberof EquipmentEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['productType'] = data['productType']
      this['isEquipmentOnline'] = data['isEquipmentOnline']
      this['isEquipmentFault'] = data['isEquipmentFault']
      this['id'] = data['id']
    }
  }
}

export class EquipmentPropertyListDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  type: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  bitType: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyListDto
   */
  productPropertyId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyListDto
   */
  state: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyListDto
   */
  sortIndex: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyListDto
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyListDto
   */
  unit: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['creationTime'] = data['creationTime']
      this['productPropertyId'] = data['productPropertyId']
      this['state'] = data['state']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['sortIndex'] = data['sortIndex']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['id'] = data['id']
    }
  }
}

export class EquipmentBindPortDto {
  /**
   *
   * @type {number}
   * @memberof EquipmentBindPortDto
   */
  terminalId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentBindPortDto
   */
  terminalName: string

  /**
   *
   * @type {number}
   * @memberof EquipmentBindPortDto
   */
  terminalPortConfigId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentBindPortDto
   */
  terminalPortConfigName: string

  constructor(data?: any) {
    if (data) {
      this['terminalId'] = data['terminalId']
      this['terminalName'] = data['terminalName']
      this['terminalPortConfigId'] = data['terminalPortConfigId']
      this['terminalPortConfigName'] = data['terminalPortConfigName']
    }
  }
}

export class CreateOrUpdateEquipmentInput {
  /**
   *
   * @type {CreateOrUpdateEquipmentDto}
   * @memberof CreateOrUpdateEquipmentInput
   */
  equipment: CreateOrUpdateEquipmentDto

  /**
   *
   * @type {EquipmentPropertyEditDto[]}
   * @memberof CreateOrUpdateEquipmentInput
   */
  equipmentProperties: EquipmentPropertyEditDto[]

  /**
   *
   * @type {CreateOrUpdateBindPortDto[]}
   * @memberof CreateOrUpdateEquipmentInput
   */
  bindPorts: CreateOrUpdateBindPortDto[]

  constructor(data?: any) {
    if (data) {
      this['equipment'] = data['equipment']
      this['equipmentProperties'] = data['equipmentProperties']
      this['bindPorts'] = data['bindPorts']
    }
  }
}

export class CreateOrUpdateEquipmentDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateEquipmentDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateEquipmentDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateEquipmentDto
   */
  productId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateEquipmentDto
   */
  bluetooth: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateEquipmentDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['productId'] = data['productId']
      this['bluetooth'] = data['bluetooth']
      this['id'] = data['id']
    }
  }
}

export class EquipmentPropertyEditDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  value: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyEditDto
   */
  productPropertyId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  description: string

  /**
   *
   * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
   * @memberof EquipmentPropertyEditDto
   */
  type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment'

  /**
   *
   * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
   * @memberof EquipmentPropertyEditDto
   */
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyEditDto
   */
  sortIndex: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyEditDto
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyEditDto
   */
  unit: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
      this['productPropertyId'] = data['productPropertyId']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['sortIndex'] = data['sortIndex']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateBindPortDto {
  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateBindPortDto
   */
  terminalPortConfigId: number

  constructor(data?: any) {
    if (data) {
      this['terminalPortConfigId'] = data['terminalPortConfigId']
    }
  }
}

export class PagedResultDtoEquipmentListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoEquipmentListDto
   */
  totalCount: number

  /**
   *
   * @type {EquipmentListDto[]}
   * @memberof PagedResultDtoEquipmentListDto
   */
  items: EquipmentListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class ListResultDtoEquipmentWithPropertyDto {
  /**
   *
   * @type {EquipmentWithPropertyDto[]}
   * @memberof ListResultDtoEquipmentWithPropertyDto
   */
  items: EquipmentWithPropertyDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class EquipmentWithPropertyDto {
  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof EquipmentWithPropertyDto
   */
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {number}
   * @memberof EquipmentWithPropertyDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof EquipmentWithPropertyDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentWithPropertyDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof EquipmentWithPropertyDto
   */
  productId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentWithPropertyDto
   */
  productName: string

  /**
   *
   * @type {number}
   * @memberof EquipmentWithPropertyDto
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentWithPropertyDto
   */
  stationName: string

  /**
   *
   * @type {boolean}
   * @memberof EquipmentWithPropertyDto
   */
  isOnline: boolean

  /**
   *
   * @type {EquipmentPropertyForSingleEquipment[]}
   * @memberof EquipmentWithPropertyDto
   */
  equipmentBaseProperties: EquipmentPropertyForSingleEquipment[]

  /**
   *
   * @type {EquipmentPropertyForSingleEquipment[]}
   * @memberof EquipmentWithPropertyDto
   */
  equipmentCommunicationProperties: EquipmentPropertyForSingleEquipment[]

  constructor(data?: any) {
    if (data) {
      this['productType'] = data['productType']
      this['id'] = data['id']
      this['name'] = data['name']
      this['description'] = data['description']
      this['productId'] = data['productId']
      this['productName'] = data['productName']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['isOnline'] = data['isOnline']
      this['equipmentBaseProperties'] = data['equipmentBaseProperties']
      this['equipmentCommunicationProperties'] = data['equipmentCommunicationProperties']
    }
  }
}

export class EquipmentPropertyForSingleEquipment {
  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  displayName: string

  /**
   *
   * @type {string[]}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  photoIds: string[]

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  value: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  state: number

  /**
   *
   * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyForSingleEquipment
   */
  sortIndex: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['photoIds'] = data['photoIds']
      this['description'] = data['description']
      this['value'] = data['value']
      this['state'] = data['state']
      this['bitType'] = data['bitType']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['sortIndex'] = data['sortIndex']
    }
  }
}

export class PagedResultDtoEquipmentInpageDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoEquipmentInpageDto
   */
  totalCount: number

  /**
   *
   * @type {EquipmentInpageDto[]}
   * @memberof PagedResultDtoEquipmentInpageDto
   */
  items: EquipmentInpageDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class EquipmentInpageDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentInpageDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentInpageDto
   */
  lastModificationTime: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof EquipmentInpageDto
   */
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {string}
   * @memberof EquipmentInpageDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof EquipmentInpageDto
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentInpageDto
   */
  stationName: string

  /**
   *
   * @type {boolean}
   * @memberof EquipmentInpageDto
   */
  isOnline: boolean

  /**
   *
   * @type {number}
   * @memberof EquipmentInpageDto
   */
  productId: number

  /**
   *
   * @type {EquipmentBasePropertyInpageDto[]}
   * @memberof EquipmentInpageDto
   */
  equipmentBaseProperties: EquipmentBasePropertyInpageDto[]

  /**
   *
   * @type {number}
   * @memberof EquipmentInpageDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['lastModificationTime'] = data['lastModificationTime']
      this['productType'] = data['productType']
      this['description'] = data['description']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['isOnline'] = data['isOnline']
      this['productId'] = data['productId']
      this['equipmentBaseProperties'] = data['equipmentBaseProperties']
      this['id'] = data['id']
    }
  }
}

export class EquipmentBasePropertyInpageDto {
  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof EquipmentBasePropertyInpageDto
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof EquipmentBasePropertyInpageDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['id'] = data['id']
    }
  }
}

export class EquipmentWithPropertyOutput {
  /**
   *
   * @type {EquipmentWithPropertyDto}
   * @memberof EquipmentWithPropertyOutput
   */
  equipmentWithProperty: EquipmentWithPropertyDto

  constructor(data?: any) {
    if (data) {
      this['equipmentWithProperty'] = data['equipmentWithProperty']
    }
  }
}

export class ControlEquipmentInput {
  /**
   *
   * @type {number}
   * @memberof ControlEquipmentInput
   */
  equipmentId: number

  /**
   *
   * @type {number}
   * @memberof ControlEquipmentInput
   */
  index: number

  /**
   *
   * @type {number}
   * @memberof ControlEquipmentInput
   */
  value: number

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['index'] = data['index']
      this['value'] = data['value']
    }
  }
}

export class CreateFriendshipRequestInput {
  /**
   *
   * @type {number}
   * @memberof CreateFriendshipRequestInput
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof CreateFriendshipRequestInput
   */
  tenantId: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

export class CreateFriendshipRequestByUserNameInput {
  /**
   *
   * @type {string}
   * @memberof CreateFriendshipRequestByUserNameInput
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof CreateFriendshipRequestByUserNameInput
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['userName'] = data['userName']
    }
  }
}

export class BlockUserInput {
  /**
   *
   * @type {number}
   * @memberof BlockUserInput
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof BlockUserInput
   */
  tenantId: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

export class UnblockUserInput {
  /**
   *
   * @type {number}
   * @memberof UnblockUserInput
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof UnblockUserInput
   */
  tenantId: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

export class AcceptFriendshipRequestInput {
  /**
   *
   * @type {number}
   * @memberof AcceptFriendshipRequestInput
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof AcceptFriendshipRequestInput
   */
  tenantId: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

export class ListResultDtoGraphListDto {
  /**
   *
   * @type {GraphListDto[]}
   * @memberof ListResultDtoGraphListDto
   */
  items: GraphListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class GraphListDto {
  /**
   *
   * @type {string}
   * @memberof GraphListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof GraphListDto
   */
  contentStorageId: string

  /**
   *
   * @type {string}
   * @memberof GraphListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof GraphListDto
   */
  parentId: number

  /**
   *
   * @type {number}
   * @memberof GraphListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['contentStorageId'] = data['contentStorageId']
      this['creationTime'] = data['creationTime']
      this['parentId'] = data['parentId']
      this['id'] = data['id']
    }
  }
}

export class GraphEditDto {
  /**
   *
   * @type {string}
   * @memberof GraphEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof GraphEditDto
   */
  contentStorageId: string

  /**
   *
   * @type {number}
   * @memberof GraphEditDto
   */
  parentId: number

  /**
   *
   * @type {number}
   * @memberof GraphEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['contentStorageId'] = data['contentStorageId']
      this['parentId'] = data['parentId']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateGraphInput {
  /**
   *
   * @type {GraphEditDto}
   * @memberof CreateOrUpdateGraphInput
   */
  graph: GraphEditDto

  constructor(data?: any) {
    if (data) {
      this['graph'] = data['graph']
    }
  }
}

export class IFormFile {
  /**
   *
   * @type {string}
   * @memberof IFormFile
   */
  contentType: string

  /**
   *
   * @type {string}
   * @memberof IFormFile
   */
  contentDisposition: string

  /**
   *
   * @type {object}
   * @memberof IFormFile
   */
  headers: object

  /**
   *
   * @type {number}
   * @memberof IFormFile
   */
  length: number

  /**
   *
   * @type {string}
   * @memberof IFormFile
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof IFormFile
   */
  fileName: string

  constructor(data?: any) {
    if (data) {
      this['contentType'] = data['contentType']
      this['contentDisposition'] = data['contentDisposition']
      this['headers'] = data['headers']
      this['length'] = data['length']
      this['name'] = data['name']
      this['fileName'] = data['fileName']
    }
  }
}

export class UploadFileOutput {
  /**
   *
   * @type {string}
   * @memberof UploadFileOutput
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof UploadFileOutput
   */
  fileName: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['fileName'] = data['fileName']
    }
  }
}

export class HostDashboardData {
  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  newTenantsCount: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  newSubscriptionAmount: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  dashboardPlaceholder1: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  dashboardPlaceholder2: number

  /**
   *
   * @type {IncomeStastistic[]}
   * @memberof HostDashboardData
   */
  incomeStatistics: IncomeStastistic[]

  /**
   *
   * @type {TenantEdition[]}
   * @memberof HostDashboardData
   */
  editionStatistics: TenantEdition[]

  /**
   *
   * @type {ExpiringTenant[]}
   * @memberof HostDashboardData
   */
  expiringTenants: ExpiringTenant[]

  /**
   *
   * @type {RecentTenant[]}
   * @memberof HostDashboardData
   */
  recentTenants: RecentTenant[]

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  maxExpiringTenantsShownCount: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  maxRecentTenantsShownCount: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  subscriptionEndAlertDayCount: number

  /**
   *
   * @type {number}
   * @memberof HostDashboardData
   */
  recentTenantsDayCount: number

  /**
   *
   * @type {string}
   * @memberof HostDashboardData
   */
  subscriptionEndDateStart: string

  /**
   *
   * @type {string}
   * @memberof HostDashboardData
   */
  subscriptionEndDateEnd: string

  /**
   *
   * @type {string}
   * @memberof HostDashboardData
   */
  tenantCreationStartDate: string

  constructor(data?: any) {
    if (data) {
      this['newTenantsCount'] = data['newTenantsCount']
      this['newSubscriptionAmount'] = data['newSubscriptionAmount']
      this['dashboardPlaceholder1'] = data['dashboardPlaceholder1']
      this['dashboardPlaceholder2'] = data['dashboardPlaceholder2']
      this['incomeStatistics'] = data['incomeStatistics']
      this['editionStatistics'] = data['editionStatistics']
      this['expiringTenants'] = data['expiringTenants']
      this['recentTenants'] = data['recentTenants']
      this['maxExpiringTenantsShownCount'] = data['maxExpiringTenantsShownCount']
      this['maxRecentTenantsShownCount'] = data['maxRecentTenantsShownCount']
      this['subscriptionEndAlertDayCount'] = data['subscriptionEndAlertDayCount']
      this['recentTenantsDayCount'] = data['recentTenantsDayCount']
      this['subscriptionEndDateStart'] = data['subscriptionEndDateStart']
      this['subscriptionEndDateEnd'] = data['subscriptionEndDateEnd']
      this['tenantCreationStartDate'] = data['tenantCreationStartDate']
    }
  }
}

export class IncomeStastistic {
  /**
   *
   * @type {string}
   * @memberof IncomeStastistic
   */
  label: string

  /**
   *
   * @type {string}
   * @memberof IncomeStastistic
   */
  date: string

  /**
   *
   * @type {number}
   * @memberof IncomeStastistic
   */
  amount: number

  constructor(data?: any) {
    if (data) {
      this['label'] = data['label']
      this['date'] = data['date']
      this['amount'] = data['amount']
    }
  }
}

export class TenantEdition {
  /**
   *
   * @type {string}
   * @memberof TenantEdition
   */
  label: string

  /**
   *
   * @type {number}
   * @memberof TenantEdition
   */
  value: number

  constructor(data?: any) {
    if (data) {
      this['label'] = data['label']
      this['value'] = data['value']
    }
  }
}

export class ExpiringTenant {
  /**
   *
   * @type {string}
   * @memberof ExpiringTenant
   */
  tenantName: string

  /**
   *
   * @type {number}
   * @memberof ExpiringTenant
   */
  remainingDayCount: number

  constructor(data?: any) {
    if (data) {
      this['tenantName'] = data['tenantName']
      this['remainingDayCount'] = data['remainingDayCount']
    }
  }
}

export class RecentTenant {
  /**
   *
   * @type {number}
   * @memberof RecentTenant
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof RecentTenant
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof RecentTenant
   */
  creationTime: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['creationTime'] = data['creationTime']
    }
  }
}

export class GetIncomeStatisticsDataOutput {
  /**
   *
   * @type {IncomeStastistic[]}
   * @memberof GetIncomeStatisticsDataOutput
   */
  incomeStatistics: IncomeStastistic[]

  constructor(data?: any) {
    if (data) {
      this['incomeStatistics'] = data['incomeStatistics']
    }
  }
}

export class GetEditionTenantStatisticsOutput {
  /**
   *
   * @type {TenantEdition[]}
   * @memberof GetEditionTenantStatisticsOutput
   */
  editionStatistics: TenantEdition[]

  constructor(data?: any) {
    if (data) {
      this['editionStatistics'] = data['editionStatistics']
    }
  }
}

export class HostSettingsEditDto {
  /**
   *
   * @type {GeneralSettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  general: GeneralSettingsEditDto

  /**
   *
   * @type {HostUserManagementSettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  userManagement: HostUserManagementSettingsEditDto

  /**
   *
   * @type {EmailSettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  email: EmailSettingsEditDto

  /**
   *
   * @type {TenantManagementSettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  tenantManagement: TenantManagementSettingsEditDto

  /**
   *
   * @type {SecuritySettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  security: SecuritySettingsEditDto

  /**
   *
   * @type {HostBillingSettingsEditDto}
   * @memberof HostSettingsEditDto
   */
  billing: HostBillingSettingsEditDto

  /**
   *
   * @type {PushSettingEditDto}
   * @memberof HostSettingsEditDto
   */
  push: PushSettingEditDto

  constructor(data?: any) {
    if (data) {
      this['general'] = data['general']
      this['userManagement'] = data['userManagement']
      this['email'] = data['email']
      this['tenantManagement'] = data['tenantManagement']
      this['security'] = data['security']
      this['billing'] = data['billing']
      this['push'] = data['push']
    }
  }
}

export class GeneralSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof GeneralSettingsEditDto
   */
  timezone: string

  /**
   *
   * @type {string}
   * @memberof GeneralSettingsEditDto
   */
  timezoneForComparison: string

  constructor(data?: any) {
    if (data) {
      this['timezone'] = data['timezone']
      this['timezoneForComparison'] = data['timezoneForComparison']
    }
  }
}

export class HostUserManagementSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof HostUserManagementSettingsEditDto
   */
  isEmailConfirmationRequiredForLogin: boolean

  /**
   *
   * @type {boolean}
   * @memberof HostUserManagementSettingsEditDto
   */
  smsVerificationEnabled: boolean

  constructor(data?: any) {
    if (data) {
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin']
      this['smsVerificationEnabled'] = data['smsVerificationEnabled']
    }
  }
}

export class EmailSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  defaultFromAddress: string

  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  defaultFromDisplayName: string

  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  smtpHost: string

  /**
   *
   * @type {number}
   * @memberof EmailSettingsEditDto
   */
  smtpPort: number

  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  smtpUserName: string

  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  smtpPassword: string

  /**
   *
   * @type {string}
   * @memberof EmailSettingsEditDto
   */
  smtpDomain: string

  /**
   *
   * @type {boolean}
   * @memberof EmailSettingsEditDto
   */
  smtpEnableSsl: boolean

  /**
   *
   * @type {boolean}
   * @memberof EmailSettingsEditDto
   */
  smtpUseDefaultCredentials: boolean

  constructor(data?: any) {
    if (data) {
      this['defaultFromAddress'] = data['defaultFromAddress']
      this['defaultFromDisplayName'] = data['defaultFromDisplayName']
      this['smtpHost'] = data['smtpHost']
      this['smtpPort'] = data['smtpPort']
      this['smtpUserName'] = data['smtpUserName']
      this['smtpPassword'] = data['smtpPassword']
      this['smtpDomain'] = data['smtpDomain']
      this['smtpEnableSsl'] = data['smtpEnableSsl']
      this['smtpUseDefaultCredentials'] = data['smtpUseDefaultCredentials']
    }
  }
}

export class TenantManagementSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof TenantManagementSettingsEditDto
   */
  allowSelfRegistration: boolean

  /**
   *
   * @type {boolean}
   * @memberof TenantManagementSettingsEditDto
   */
  isNewRegisteredTenantActiveByDefault: boolean

  /**
   *
   * @type {boolean}
   * @memberof TenantManagementSettingsEditDto
   */
  useCaptchaOnRegistration: boolean

  /**
   *
   * @type {number}
   * @memberof TenantManagementSettingsEditDto
   */
  defaultEditionId: number

  constructor(data?: any) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration']
      this['isNewRegisteredTenantActiveByDefault'] = data['isNewRegisteredTenantActiveByDefault']
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration']
      this['defaultEditionId'] = data['defaultEditionId']
    }
  }
}

export class SecuritySettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof SecuritySettingsEditDto
   */
  useDefaultPasswordComplexitySettings: boolean

  /**
   *
   * @type {PasswordComplexitySetting}
   * @memberof SecuritySettingsEditDto
   */
  passwordComplexity: PasswordComplexitySetting

  /**
   *
   * @type {PasswordComplexitySetting}
   * @memberof SecuritySettingsEditDto
   */
  defaultPasswordComplexity: PasswordComplexitySetting

  /**
   *
   * @type {UserLockOutSettingsEditDto}
   * @memberof SecuritySettingsEditDto
   */
  userLockOut: UserLockOutSettingsEditDto

  /**
   *
   * @type {TwoFactorLoginSettingsEditDto}
   * @memberof SecuritySettingsEditDto
   */
  twoFactorLogin: TwoFactorLoginSettingsEditDto

  constructor(data?: any) {
    if (data) {
      this['useDefaultPasswordComplexitySettings'] = data['useDefaultPasswordComplexitySettings']
      this['passwordComplexity'] = data['passwordComplexity']
      this['defaultPasswordComplexity'] = data['defaultPasswordComplexity']
      this['userLockOut'] = data['userLockOut']
      this['twoFactorLogin'] = data['twoFactorLogin']
    }
  }
}

export class HostBillingSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof HostBillingSettingsEditDto
   */
  legalName: string

  /**
   *
   * @type {string}
   * @memberof HostBillingSettingsEditDto
   */
  address: string

  constructor(data?: any) {
    if (data) {
      this['legalName'] = data['legalName']
      this['address'] = data['address']
    }
  }
}

export class PushSettingEditDto {
  /**
   *
   * @type {string}
   * @memberof PushSettingEditDto
   */
  iOSAppKey: string

  /**
   *
   * @type {string}
   * @memberof PushSettingEditDto
   */
  androidAppKey: string

  /**
   *
   * @type {PushMobilePagesSettingEditDto}
   * @memberof PushSettingEditDto
   */
  pages: PushMobilePagesSettingEditDto

  constructor(data?: any) {
    if (data) {
      this['iOSAppKey'] = data['iOSAppKey']
      this['androidAppKey'] = data['androidAppKey']
      this['pages'] = data['pages']
    }
  }
}

export class PasswordComplexitySetting {
  /**
   *
   * @type {boolean}
   * @memberof PasswordComplexitySetting
   */
  requireDigit: boolean

  /**
   *
   * @type {boolean}
   * @memberof PasswordComplexitySetting
   */
  requireLowercase: boolean

  /**
   *
   * @type {boolean}
   * @memberof PasswordComplexitySetting
   */
  requireNonAlphanumeric: boolean

  /**
   *
   * @type {boolean}
   * @memberof PasswordComplexitySetting
   */
  requireUppercase: boolean

  /**
   *
   * @type {number}
   * @memberof PasswordComplexitySetting
   */
  requiredLength: number

  constructor(data?: any) {
    if (data) {
      this['requireDigit'] = data['requireDigit']
      this['requireLowercase'] = data['requireLowercase']
      this['requireNonAlphanumeric'] = data['requireNonAlphanumeric']
      this['requireUppercase'] = data['requireUppercase']
      this['requiredLength'] = data['requiredLength']
    }
  }
}

export class UserLockOutSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof UserLockOutSettingsEditDto
   */
  isEnabled: boolean

  /**
   *
   * @type {number}
   * @memberof UserLockOutSettingsEditDto
   */
  maxFailedAccessAttemptsBeforeLockout: number

  /**
   *
   * @type {number}
   * @memberof UserLockOutSettingsEditDto
   */
  defaultAccountLockoutSeconds: number

  constructor(data?: any) {
    if (data) {
      this['isEnabled'] = data['isEnabled']
      this['maxFailedAccessAttemptsBeforeLockout'] = data['maxFailedAccessAttemptsBeforeLockout']
      this['defaultAccountLockoutSeconds'] = data['defaultAccountLockoutSeconds']
    }
  }
}

export class TwoFactorLoginSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isEnabledForApplication: boolean

  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isEmailProviderEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isSmsProviderEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isRememberBrowserEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof TwoFactorLoginSettingsEditDto
   */
  isGoogleAuthenticatorEnabled: boolean

  constructor(data?: any) {
    if (data) {
      this['isEnabledForApplication'] = data['isEnabledForApplication']
      this['isEnabled'] = data['isEnabled']
      this['isEmailProviderEnabled'] = data['isEmailProviderEnabled']
      this['isSmsProviderEnabled'] = data['isSmsProviderEnabled']
      this['isRememberBrowserEnabled'] = data['isRememberBrowserEnabled']
      this['isGoogleAuthenticatorEnabled'] = data['isGoogleAuthenticatorEnabled']
    }
  }
}

export class PushMobilePagesSettingEditDto {
  /**
   *
   * @type {string}
   * @memberof PushMobilePagesSettingEditDto
   */
  keyCabinetDetailPage: string

  /**
   *
   * @type {string}
   * @memberof PushMobilePagesSettingEditDto
   */
  wireCabinetDetailPage: string

  /**
   *
   * @type {string}
   * @memberof PushMobilePagesSettingEditDto
   */
  safetyWearDetailPage: string

  constructor(data?: any) {
    if (data) {
      this['keyCabinetDetailPage'] = data['keyCabinetDetailPage']
      this['wireCabinetDetailPage'] = data['wireCabinetDetailPage']
      this['safetyWearDetailPage'] = data['safetyWearDetailPage']
    }
  }
}

export class SendTestEmailInput {
  /**
   *
   * @type {string}
   * @memberof SendTestEmailInput
   */
  emailAddress: string

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

export class InstallDto {
  /**
   *
   * @type {string}
   * @memberof InstallDto
   */
  connectionString: string

  /**
   *
   * @type {string}
   * @memberof InstallDto
   */
  adminPassword: string

  /**
   *
   * @type {string}
   * @memberof InstallDto
   */
  webSiteUrl: string

  /**
   *
   * @type {string}
   * @memberof InstallDto
   */
  serverUrl: string

  /**
   *
   * @type {string}
   * @memberof InstallDto
   */
  defaultLanguage: string

  /**
   *
   * @type {EmailSettingsEditDto}
   * @memberof InstallDto
   */
  smtpSettings: EmailSettingsEditDto

  /**
   *
   * @type {HostBillingSettingsEditDto}
   * @memberof InstallDto
   */
  billInfo: HostBillingSettingsEditDto

  constructor(data?: any) {
    if (data) {
      this['connectionString'] = data['connectionString']
      this['adminPassword'] = data['adminPassword']
      this['webSiteUrl'] = data['webSiteUrl']
      this['serverUrl'] = data['serverUrl']
      this['defaultLanguage'] = data['defaultLanguage']
      this['smtpSettings'] = data['smtpSettings']
      this['billInfo'] = data['billInfo']
    }
  }
}

export class AppSettingsJsonDto {
  /**
   *
   * @type {string}
   * @memberof AppSettingsJsonDto
   */
  webSiteUrl: string

  /**
   *
   * @type {string}
   * @memberof AppSettingsJsonDto
   */
  serverSiteUrl: string

  /**
   *
   * @type {NameValue[]}
   * @memberof AppSettingsJsonDto
   */
  languages: NameValue[]

  constructor(data?: any) {
    if (data) {
      this['webSiteUrl'] = data['webSiteUrl']
      this['serverSiteUrl'] = data['serverSiteUrl']
      this['languages'] = data['languages']
    }
  }
}

export class NameValue {
  /**
   *
   * @type {string}
   * @memberof NameValue
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof NameValue
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
    }
  }
}

export class CheckDatabaseOutput {
  /**
   *
   * @type {boolean}
   * @memberof CheckDatabaseOutput
   */
  isDatabaseExist: boolean

  constructor(data?: any) {
    if (data) {
      this['isDatabaseExist'] = data['isDatabaseExist']
    }
  }
}

export class AddIntelligentLocksInput {
  /**
   *
   * @type {number}
   * @memberof AddIntelligentLocksInput
   */
  roleId: number

  /**
   *
   * @type {AddIntelligentLockDto[]}
   * @memberof AddIntelligentLocksInput
   */
  intelligentLockDtos: AddIntelligentLockDto[]

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId']
      this['intelligentLockDtos'] = data['intelligentLockDtos']
    }
  }
}

export class AddIntelligentLockDto {
  /**
   *
   * @type {number}
   * @memberof AddIntelligentLockDto
   */
  deviceId: number

  /**
   *
   * @type {number}
   * @memberof AddIntelligentLockDto
   */
  roleId: number

  /**
   *
   * @type {boolean}
   * @memberof AddIntelligentLockDto
   */
  isEst: boolean

  /**
   *
   * @type {number}
   * @memberof AddIntelligentLockDto
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof AddIntelligentLockDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof AddIntelligentLockDto
   */
  deviceAreaId: number

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId']
      this['roleId'] = data['roleId']
      this['isEst'] = data['isEst']
      this['tenantId'] = data['tenantId']
      this['stationId'] = data['stationId']
      this['deviceAreaId'] = data['deviceAreaId']
    }
  }
}

export class UpdateIntelligentLocksInput {
  /**
   *
   * @type {number}
   * @memberof UpdateIntelligentLocksInput
   */
  roleId: number

  /**
   *
   * @type {UpdateIntelligentLockDto[]}
   * @memberof UpdateIntelligentLocksInput
   */
  intelligentLockDtos: UpdateIntelligentLockDto[]

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId']
      this['intelligentLockDtos'] = data['intelligentLockDtos']
    }
  }
}

export class UpdateIntelligentLockDto {
  /**
   *
   * @type {number}
   * @memberof UpdateIntelligentLockDto
   */
  deviceId: number

  /**
   *
   * @type {number}
   * @memberof UpdateIntelligentLockDto
   */
  deviceAreaId: number

  /**
   *
   * @type {boolean}
   * @memberof UpdateIntelligentLockDto
   */
  isEst: boolean

  /**
   *
   * @type {number}
   * @memberof UpdateIntelligentLockDto
   */
  stationId: number

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId']
      this['deviceAreaId'] = data['deviceAreaId']
      this['isEst'] = data['isEst']
      this['stationId'] = data['stationId']
    }
  }
}

export class ListResultDtoIntelligentLockOutput {
  /**
   *
   * @type {IntelligentLockOutput[]}
   * @memberof ListResultDtoIntelligentLockOutput
   */
  items: IntelligentLockOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class IntelligentLockOutput {
  /**
   *
   * @type {number}
   * @memberof IntelligentLockOutput
   */
  id: number

  /**
   *
   * @type {number}
   * @memberof IntelligentLockOutput
   */
  deviceId: number

  /**
   *
   * @type {boolean}
   * @memberof IntelligentLockOutput
   */
  isEst: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['deviceId'] = data['deviceId']
      this['isEst'] = data['isEst']
    }
  }
}

export class ListResultDtoIntelligentLockDetailOutput {
  /**
   *
   * @type {IntelligentLockDetailOutput[]}
   * @memberof ListResultDtoIntelligentLockDetailOutput
   */
  items: IntelligentLockDetailOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class IntelligentLockDetailOutput {
  /**
   *
   * @type {number}
   * @memberof IntelligentLockDetailOutput
   */
  deviceAreaId: number

  /**
   *
   * @type {string}
   * @memberof IntelligentLockDetailOutput
   */
  deviceAreaName: string

  /**
   *
   * @type {number}
   * @memberof IntelligentLockDetailOutput
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof IntelligentLockDetailOutput
   */
  sortId: number

  /**
   *
   * @type {DeviceDetailOutput[]}
   * @memberof IntelligentLockDetailOutput
   */
  devices: DeviceDetailOutput[]

  constructor(data?: any) {
    if (data) {
      this['deviceAreaId'] = data['deviceAreaId']
      this['deviceAreaName'] = data['deviceAreaName']
      this['stationId'] = data['stationId']
      this['sortId'] = data['sortId']
      this['devices'] = data['devices']
    }
  }
}

export class DeviceDetailOutput {
  /**
   *
   * @type {number}
   * @memberof DeviceDetailOutput
   */
  id: number

  /**
   *
   * @type {number}
   * @memberof DeviceDetailOutput
   */
  deviceId: number

  /**
   *
   * @type {string}
   * @memberof DeviceDetailOutput
   */
  deviceName: string

  /**
   *
   * @type {string}
   * @memberof DeviceDetailOutput
   */
  deviceDescription: string

  /**
   *
   * @type {DeviceCodeInfoOutput[]}
   * @memberof DeviceDetailOutput
   */
  codeInfoDtos: DeviceCodeInfoOutput[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['deviceId'] = data['deviceId']
      this['deviceName'] = data['deviceName']
      this['deviceDescription'] = data['deviceDescription']
      this['codeInfoDtos'] = data['codeInfoDtos']
    }
  }
}

export class DeviceCodeInfoOutput {
  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoOutput
   */
  code: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoOutput
   */
  lockCodeNumber: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoOutput
   */
  lockType: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfoOutput
   */
  lockPropertyType: string

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfoOutput
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['lockType'] = data['lockType']
      this['lockPropertyType'] = data['lockPropertyType']
      this['id'] = data['id']
    }
  }
}

export class InvoiceDto {
  /**
   *
   * @type {number}
   * @memberof InvoiceDto
   */
  amount: number

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  editionDisplayName: string

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  invoiceNo: string

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  invoiceDate: string

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  tenantLegalName: string

  /**
   *
   * @type {string[]}
   * @memberof InvoiceDto
   */
  tenantAddress: string[]

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  tenantTaxNo: string

  /**
   *
   * @type {string}
   * @memberof InvoiceDto
   */
  hostLegalName: string

  /**
   *
   * @type {string[]}
   * @memberof InvoiceDto
   */
  hostAddress: string[]

  constructor(data?: any) {
    if (data) {
      this['amount'] = data['amount']
      this['editionDisplayName'] = data['editionDisplayName']
      this['invoiceNo'] = data['invoiceNo']
      this['invoiceDate'] = data['invoiceDate']
      this['tenantLegalName'] = data['tenantLegalName']
      this['tenantAddress'] = data['tenantAddress']
      this['tenantTaxNo'] = data['tenantTaxNo']
      this['hostLegalName'] = data['hostLegalName']
      this['hostAddress'] = data['hostAddress']
    }
  }
}

export class CreateInvoiceDto {
  /**
   *
   * @type {number}
   * @memberof CreateInvoiceDto
   */
  subscriptionPaymentId: number

  constructor(data?: any) {
    if (data) {
      this['subscriptionPaymentId'] = data['subscriptionPaymentId']
    }
  }
}

export class KeyCabinetApplyInput {
  /**
   *
   * @type {string}
   * @memberof KeyCabinetApplyInput
   */
  taskName: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetApplyInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof KeyCabinetApplyInput
   */
  applicantId: number

  /**
   *
   * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'|'UnLockNormalOperation'|'OpenLockDeviceSetupDebug'|'OpenLockWfDeviceDailyMaintenance'|'OpenLockWfDeviceFaultHandling'|'OpenLockNormalDeviceDailyMaintenance'}
   * @memberof KeyCabinetApplyInput
   */
  applyReason:
    | 'EquipmentFailure'
    | 'EquipmentOverhaul'
    | 'UrgentUnlock'
    | 'OtherReason'
    | 'UnLockNormalOperation'
    | 'OpenLockDeviceSetupDebug'
    | 'OpenLockWfDeviceDailyMaintenance'
    | 'OpenLockWfDeviceFaultHandling'
    | 'OpenLockNormalDeviceDailyMaintenance'

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApplyInput
   */
  applyReasonNote: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApplyInput
   */
  approverIdArray: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApplyInput
   */
  expiredDate: string

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetApplyInput
   */
  isAllowToSelectApproverType: boolean

  /**
   *
   * @type {'BaseApprover'|'OpenLockApprover'|'UnLockApprover'}
   * @memberof KeyCabinetApplyInput
   */
  approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover'

  constructor(data?: any) {
    if (data) {
      this['taskName'] = data['taskName']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['applicantId'] = data['applicantId']
      this['applyReason'] = data['applyReason']
      this['applyReasonNote'] = data['applyReasonNote']
      this['approverIdArray'] = data['approverIdArray']
      this['expiredDate'] = data['expiredDate']
      this['isAllowToSelectApproverType'] = data['isAllowToSelectApproverType']
      this['approverType'] = data['approverType']
    }
  }
}

export class ApiResultOutput {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutput
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutput
   */
  code: number

  /**
   *
   * @type {string}
   * @memberof ApiResultOutput
   */
  data: string

  /**
   *
   * @type {string}
   * @memberof ApiResultOutput
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

export class KeyCabinetApproveInput {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetApproveInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof KeyCabinetApproveInput
   */
  approverId: number

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetApproveInput
   */
  isApprovePass: boolean

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveInput
   */
  approveNote: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['approverId'] = data['approverId']
      this['isApprovePass'] = data['isApprovePass']
      this['approveNote'] = data['approveNote']
    }
  }
}

export class KeyCabinetUnlockInput {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetUnlockInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof KeyCabinetUnlockInput
   */
  operatorId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetUnlockInput
   */
  unLockReason: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['operatorId'] = data['operatorId']
      this['unLockReason'] = data['unLockReason']
    }
  }
}

export class ApiResultOutputKeyCabinetUnlockOutput {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputKeyCabinetUnlockOutput
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputKeyCabinetUnlockOutput
   */
  code: number

  /**
   *
   * @type {KeyCabinetUnlockOutput}
   * @memberof ApiResultOutputKeyCabinetUnlockOutput
   */
  data: KeyCabinetUnlockOutput

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputKeyCabinetUnlockOutput
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

export class KeyCabinetUnlockOutput {
  /**
   *
   * @type {string}
   * @memberof KeyCabinetUnlockOutput
   */
  unlockCode: string

  constructor(data?: any) {
    if (data) {
      this['unlockCode'] = data['unlockCode']
    }
  }
}

export class KeyCabinetOpenDoorInput {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetOpenDoorInput
   */
  operatorId: number

  /**
   *
   * @type {number}
   * @memberof KeyCabinetOpenDoorInput
   */
  equipmentPropertyId: number

  constructor(data?: any) {
    if (data) {
      this['operatorId'] = data['operatorId']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

export class ApiResultOutputDictionaryInt32String {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputDictionaryInt32String
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputDictionaryInt32String
   */
  code: number

  /**
   *
   * @type {object}
   * @memberof ApiResultOutputDictionaryInt32String
   */
  data: object

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputDictionaryInt32String
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

export class ApiResultOutputListKeyCabinetValueTextDto {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputListKeyCabinetValueTextDto
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputListKeyCabinetValueTextDto
   */
  code: number

  /**
   *
   * @type {KeyCabinetValueTextDto[]}
   * @memberof ApiResultOutputListKeyCabinetValueTextDto
   */
  data: KeyCabinetValueTextDto[]

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputListKeyCabinetValueTextDto
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

export class KeyCabinetValueTextDto {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetValueTextDto
   */
  value: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetValueTextDto
   */
  text: string

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['text'] = data['text']
    }
  }
}

export class ApiResultOutputKeyCabinetTaskOutput {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputKeyCabinetTaskOutput
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputKeyCabinetTaskOutput
   */
  code: number

  /**
   *
   * @type {KeyCabinetTaskOutput}
   * @memberof ApiResultOutputKeyCabinetTaskOutput
   */
  data: KeyCabinetTaskOutput

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputKeyCabinetTaskOutput
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

export class KeyCabinetTaskOutput {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetTaskOutput
   */
  isNeedApprove: boolean

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetTaskOutput
   */
  isApproverCanUnlockDirectly: boolean

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetTaskOutput
   */
  isApplicantCanEndTask: boolean

  /**
   *
   * @type {'Online'|'Bluetooth'|'Password'}
   * @memberof KeyCabinetTaskOutput
   */
  unlockMode: 'Online' | 'Bluetooth' | 'Password'

  /**
   *
   * @type {'LockerDoor'|'LockerBuckle'}
   * @memberof KeyCabinetTaskOutput
   */
  lockMode: 'LockerDoor' | 'LockerBuckle'

  /**
   *
   * @type {'None'|'ErrorCode'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Returned'|'Ended'|'Expired'}
   * @memberof KeyCabinetTaskOutput
   */
  taskStep:
    | 'None'
    | 'ErrorCode'
    | 'Applying'
    | 'ApprovalPassed'
    | 'ApprovalNotPassed'
    | 'Unlocked'
    | 'TimeOut'
    | 'TakenOut'
    | 'Returned'
    | 'Ended'
    | 'Expired'

  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  applicantId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyTime: string

  /**
   *
   * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'|'UnLockNormalOperation'|'OpenLockDeviceSetupDebug'|'OpenLockWfDeviceDailyMaintenance'|'OpenLockWfDeviceFaultHandling'|'OpenLockNormalDeviceDailyMaintenance'}
   * @memberof KeyCabinetTaskOutput
   */
  applyReason:
    | 'EquipmentFailure'
    | 'EquipmentOverhaul'
    | 'UrgentUnlock'
    | 'OtherReason'
    | 'UnLockNormalOperation'
    | 'OpenLockDeviceSetupDebug'
    | 'OpenLockWfDeviceDailyMaintenance'
    | 'OpenLockWfDeviceFaultHandling'
    | 'OpenLockNormalDeviceDailyMaintenance'

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyReasonNote: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyReasonPhotoId: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyReasonVoiceId: string

  /**
   *
   * @type {KeyCabinetApproveFlowItemDto[]}
   * @memberof KeyCabinetTaskOutput
   */
  approveFlowItems: KeyCabinetApproveFlowItemDto[]

  /**
   *
   * @type {KeyCabinetApproveFlowItemDto}
   * @memberof KeyCabinetTaskOutput
   */
  currentApproveFlowItem: KeyCabinetApproveFlowItemDto

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  unlockTime: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  unlockCode: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  unlockTimeoutTime: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  takenTime: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  returnTime: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  expiredDate: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentPropertyName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentPropertyDisplayName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentPropertyValue: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applicantName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyReasonEnumName: string

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetTaskOutput
   */
  isExpired: boolean

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  taskName: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  equipmentPropertyNameForLog: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  applyReasonNameForLog: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  unlockReasonForLog: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  operatorId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  operatorName: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetTaskOutput
   */
  guardianId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  guardianName: string

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetTaskOutput
   */
  isAllowToSelectApproverType: boolean

  /**
   *
   * @type {'BaseApprover'|'OpenLockApprover'|'UnLockApprover'}
   * @memberof KeyCabinetTaskOutput
   */
  approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover'

  /**
   *
   * @type {string}
   * @memberof KeyCabinetTaskOutput
   */
  endTaskTime: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['isNeedApprove'] = data['isNeedApprove']
      this['isApproverCanUnlockDirectly'] = data['isApproverCanUnlockDirectly']
      this['isApplicantCanEndTask'] = data['isApplicantCanEndTask']
      this['unlockMode'] = data['unlockMode']
      this['lockMode'] = data['lockMode']
      this['taskStep'] = data['taskStep']
      this['applicantId'] = data['applicantId']
      this['applyTime'] = data['applyTime']
      this['applyReason'] = data['applyReason']
      this['applyReasonNote'] = data['applyReasonNote']
      this['applyReasonPhotoId'] = data['applyReasonPhotoId']
      this['applyReasonVoiceId'] = data['applyReasonVoiceId']
      this['approveFlowItems'] = data['approveFlowItems']
      this['currentApproveFlowItem'] = data['currentApproveFlowItem']
      this['unlockTime'] = data['unlockTime']
      this['unlockCode'] = data['unlockCode']
      this['unlockTimeoutTime'] = data['unlockTimeoutTime']
      this['takenTime'] = data['takenTime']
      this['returnTime'] = data['returnTime']
      this['expiredDate'] = data['expiredDate']
      this['equipmentId'] = data['equipmentId']
      this['equipmentName'] = data['equipmentName']
      this['equipmentPropertyName'] = data['equipmentPropertyName']
      this['equipmentPropertyDisplayName'] = data['equipmentPropertyDisplayName']
      this['equipmentPropertyValue'] = data['equipmentPropertyValue']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['applicantName'] = data['applicantName']
      this['applyReasonEnumName'] = data['applyReasonEnumName']
      this['isExpired'] = data['isExpired']
      this['taskName'] = data['taskName']
      this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog']
      this['applyReasonNameForLog'] = data['applyReasonNameForLog']
      this['unlockReasonForLog'] = data['unlockReasonForLog']
      this['operatorId'] = data['operatorId']
      this['operatorName'] = data['operatorName']
      this['guardianId'] = data['guardianId']
      this['guardianName'] = data['guardianName']
      this['isAllowToSelectApproverType'] = data['isAllowToSelectApproverType']
      this['approverType'] = data['approverType']
      this['endTaskTime'] = data['endTaskTime']
    }
  }
}

export class KeyCabinetApproveFlowItemDto {
  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  roles: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  rolesNames: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  approverId: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  approverName: string

  /**
   *
   * @type {boolean}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  isApprovePassed: boolean

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  approveTime: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  approveNote: string

  /**
   *
   * @type {number}
   * @memberof KeyCabinetApproveFlowItemDto
   */
  sortIndex: number

  constructor(data?: any) {
    if (data) {
      this['roles'] = data['roles']
      this['rolesNames'] = data['rolesNames']
      this['approverId'] = data['approverId']
      this['approverName'] = data['approverName']
      this['isApprovePassed'] = data['isApprovePassed']
      this['approveTime'] = data['approveTime']
      this['approveNote'] = data['approveNote']
      this['sortIndex'] = data['sortIndex']
    }
  }
}

export class KeyCabinetEndTaskInput {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetEndTaskInput
   */
  applicantId: number

  /**
   *
   * @type {number}
   * @memberof KeyCabinetEndTaskInput
   */
  equipmentPropertyId: number

  constructor(data?: any) {
    if (data) {
      this['applicantId'] = data['applicantId']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

export class ApiResultOutputListResultDtoKeyCabinetOperatorDto {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
   */
  code: number

  /**
   *
   * @type {ListResultDtoKeyCabinetOperatorDto}
   * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
   */
  data: ListResultDtoKeyCabinetOperatorDto

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
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

export class ListResultDtoKeyCabinetOperatorDto {
  /**
   *
   * @type {KeyCabinetOperatorDto[]}
   * @memberof ListResultDtoKeyCabinetOperatorDto
   */
  items: KeyCabinetOperatorDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class KeyCabinetOperatorDto {
  /**
   *
   * @type {number}
   * @memberof KeyCabinetOperatorDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof KeyCabinetOperatorDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetOperatorDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof KeyCabinetOperatorDto
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
    }
  }
}

export class ApiResultOutputBoolean {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputBoolean
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputBoolean
   */
  code: number

  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputBoolean
   */
  data: boolean

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputBoolean
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

export class ApiResultOutputListResultDtoKeyCarbinetLogListOutput {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
   */
  code: number

  /**
   *
   * @type {ListResultDtoKeyCarbinetLogListOutput}
   * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
   */
  data: ListResultDtoKeyCarbinetLogListOutput

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
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

export class ListResultDtoKeyCarbinetLogListOutput {
  /**
   *
   * @type {KeyCarbinetLogListOutput[]}
   * @memberof ListResultDtoKeyCarbinetLogListOutput
   */
  items: KeyCarbinetLogListOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class KeyCarbinetLogListOutput {
  /**
   *
   * @type {number}
   * @memberof KeyCarbinetLogListOutput
   */
  logId: number

  /**
   *
   * @type {KeyCabinetTaskOutput}
   * @memberof KeyCarbinetLogListOutput
   */
  log: KeyCabinetTaskOutput

  constructor(data?: any) {
    if (data) {
      this['logId'] = data['logId']
      this['log'] = data['log']
    }
  }
}

export class KeyCarbinetLogInput {
  /**
   *
   * @type {number}
   * @memberof KeyCarbinetLogInput
   */
  logId: number

  /**
   *
   * @type {string}
   * @memberof KeyCarbinetLogInput
   */
  taskName: string

  /**
   *
   * @type {string}
   * @memberof KeyCarbinetLogInput
   */
  equipmentPropertyNameForLog: string

  /**
   *
   * @type {string}
   * @memberof KeyCarbinetLogInput
   */
  applyReasonNameForLog: string

  constructor(data?: any) {
    if (data) {
      this['logId'] = data['logId']
      this['taskName'] = data['taskName']
      this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog']
      this['applyReasonNameForLog'] = data['applyReasonNameForLog']
    }
  }
}

export class GetLanguagesOutput {
  /**
   *
   * @type {string}
   * @memberof GetLanguagesOutput
   */
  defaultLanguageName: string

  /**
   *
   * @type {ApplicationLanguageListDto[]}
   * @memberof GetLanguagesOutput
   */
  items: ApplicationLanguageListDto[]

  constructor(data?: any) {
    if (data) {
      this['defaultLanguageName'] = data['defaultLanguageName']
      this['items'] = data['items']
    }
  }
}

export class ApplicationLanguageListDto {
  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageListDto
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  icon: string

  /**
   *
   * @type {boolean}
   * @memberof ApplicationLanguageListDto
   */
  isDisabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof ApplicationLanguageListDto
   */
  isDeleted: boolean

  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageListDto
   */
  deleterUserId: number

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  deletionTime: string

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageListDto
   */
  lastModifierUserId: number

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageListDto
   */
  creatorUserId: number

  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['icon'] = data['icon']
      this['isDisabled'] = data['isDisabled']
      this['isDeleted'] = data['isDeleted']
      this['deleterUserId'] = data['deleterUserId']
      this['deletionTime'] = data['deletionTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['id'] = data['id']
    }
  }
}

export class GetLanguageForEditOutput {
  /**
   *
   * @type {ApplicationLanguageEditDto}
   * @memberof GetLanguageForEditOutput
   */
  language: ApplicationLanguageEditDto

  /**
   *
   * @type {ComboboxItemDto[]}
   * @memberof GetLanguageForEditOutput
   */
  languageNames: ComboboxItemDto[]

  /**
   *
   * @type {ComboboxItemDto[]}
   * @memberof GetLanguageForEditOutput
   */
  flags: ComboboxItemDto[]

  constructor(data?: any) {
    if (data) {
      this['language'] = data['language']
      this['languageNames'] = data['languageNames']
      this['flags'] = data['flags']
    }
  }
}

export class ApplicationLanguageEditDto {
  /**
   *
   * @type {number}
   * @memberof ApplicationLanguageEditDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ApplicationLanguageEditDto
   */
  icon: string

  /**
   *
   * @type {boolean}
   * @memberof ApplicationLanguageEditDto
   */
  isEnabled: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['icon'] = data['icon']
      this['isEnabled'] = data['isEnabled']
    }
  }
}

export class CreateOrUpdateLanguageInput {
  /**
   *
   * @type {ApplicationLanguageEditDto}
   * @memberof CreateOrUpdateLanguageInput
   */
  language: ApplicationLanguageEditDto

  constructor(data?: any) {
    if (data) {
      this['language'] = data['language']
    }
  }
}

export class SetDefaultLanguageInput {
  /**
   *
   * @type {string}
   * @memberof SetDefaultLanguageInput
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

export class PagedResultDtoLanguageTextListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoLanguageTextListDto
   */
  totalCount: number

  /**
   *
   * @type {LanguageTextListDto[]}
   * @memberof PagedResultDtoLanguageTextListDto
   */
  items: LanguageTextListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class LanguageTextListDto {
  /**
   *
   * @type {string}
   * @memberof LanguageTextListDto
   */
  key: string

  /**
   *
   * @type {string}
   * @memberof LanguageTextListDto
   */
  baseValue: string

  /**
   *
   * @type {string}
   * @memberof LanguageTextListDto
   */
  targetValue: string

  constructor(data?: any) {
    if (data) {
      this['key'] = data['key']
      this['baseValue'] = data['baseValue']
      this['targetValue'] = data['targetValue']
    }
  }
}

export class UpdateLanguageTextInput {
  /**
   *
   * @type {string}
   * @memberof UpdateLanguageTextInput
   */
  languageName: string

  /**
   *
   * @type {string}
   * @memberof UpdateLanguageTextInput
   */
  sourceName: string

  /**
   *
   * @type {string}
   * @memberof UpdateLanguageTextInput
   */
  key: string

  /**
   *
   * @type {string}
   * @memberof UpdateLanguageTextInput
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['languageName'] = data['languageName']
      this['sourceName'] = data['sourceName']
      this['key'] = data['key']
      this['value'] = data['value']
    }
  }
}

export class GetNotificationsOutput {
  /**
   *
   * @type {number}
   * @memberof GetNotificationsOutput
   */
  unreadCount: number

  /**
   *
   * @type {number}
   * @memberof GetNotificationsOutput
   */
  totalCount: number

  /**
   *
   * @type {UserNotification[]}
   * @memberof GetNotificationsOutput
   */
  items: UserNotification[]

  constructor(data?: any) {
    if (data) {
      this['unreadCount'] = data['unreadCount']
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class UserNotification {
  /**
   *
   * @type {number}
   * @memberof UserNotification
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof UserNotification
   */
  userId: number

  /**
   *
   * @type {'Unread'|'Read'}
   * @memberof UserNotification
   */
  state: 'Unread' | 'Read'

  /**
   *
   * @type {TenantNotification}
   * @memberof UserNotification
   */
  notification: TenantNotification

  /**
   *
   * @type {string}
   * @memberof UserNotification
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
      this['state'] = data['state']
      this['notification'] = data['notification']
      this['id'] = data['id']
    }
  }
}

export class TenantNotification {
  /**
   *
   * @type {number}
   * @memberof TenantNotification
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof TenantNotification
   */
  notificationName: string

  /**
   *
   * @type {NotificationData}
   * @memberof TenantNotification
   */
  data: NotificationData

  /**
   *
   * @type {string}
   * @memberof TenantNotification
   */
  entityType: string

  /**
   *
   * @type {string}
   * @memberof TenantNotification
   */
  entityTypeName: string

  /**
   *
   * @type {object}
   * @memberof TenantNotification
   */
  entityId: object

  /**
   *
   * @type {'Info'|'Success'|'Warn'|'Error'|'Fatal'}
   * @memberof TenantNotification
   */
  severity: 'Info' | 'Success' | 'Warn' | 'Error' | 'Fatal'

  /**
   *
   * @type {string}
   * @memberof TenantNotification
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof TenantNotification
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['notificationName'] = data['notificationName']
      this['data'] = data['data']
      this['entityType'] = data['entityType']
      this['entityTypeName'] = data['entityTypeName']
      this['entityId'] = data['entityId']
      this['severity'] = data['severity']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

export class NotificationData {
  /**
   *
   * @type {string}
   * @memberof NotificationData
   */
  type: string

  /**
   *
   * @type {object}
   * @memberof NotificationData
   */
  properties: object

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type']
      this['properties'] = data['properties']
    }
  }
}

export class EntityDtoGuid {
  /**
   *
   * @type {string}
   * @memberof EntityDtoGuid
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

export class GetNotificationSettingsOutput {
  /**
   *
   * @type {boolean}
   * @memberof GetNotificationSettingsOutput
   */
  receiveNotifications: boolean

  /**
   *
   * @type {NotificationSubscriptionWithDisplayNameDto[]}
   * @memberof GetNotificationSettingsOutput
   */
  notifications: NotificationSubscriptionWithDisplayNameDto[]

  constructor(data?: any) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications']
      this['notifications'] = data['notifications']
    }
  }
}

export class NotificationSubscriptionWithDisplayNameDto {
  /**
   *
   * @type {string}
   * @memberof NotificationSubscriptionWithDisplayNameDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof NotificationSubscriptionWithDisplayNameDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof NotificationSubscriptionWithDisplayNameDto
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof NotificationSubscriptionWithDisplayNameDto
   */
  isSubscribed: boolean

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['name'] = data['name']
      this['isSubscribed'] = data['isSubscribed']
    }
  }
}

export class UpdateNotificationSettingsInput {
  /**
   *
   * @type {boolean}
   * @memberof UpdateNotificationSettingsInput
   */
  receiveNotifications: boolean

  /**
   *
   * @type {NotificationSubscriptionDto[]}
   * @memberof UpdateNotificationSettingsInput
   */
  notifications: NotificationSubscriptionDto[]

  constructor(data?: any) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications']
      this['notifications'] = data['notifications']
    }
  }
}

export class NotificationSubscriptionDto {
  /**
   *
   * @type {string}
   * @memberof NotificationSubscriptionDto
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof NotificationSubscriptionDto
   */
  isSubscribed: boolean

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['isSubscribed'] = data['isSubscribed']
    }
  }
}

export class GetOperationRecordOutput {
  /**
   *
   * @type {OperationRecordInfoDto}
   * @memberof GetOperationRecordOutput
   */
  infoDto: OperationRecordInfoDto

  /**
   *
   * @type {OperationRecordItemListDto[]}
   * @memberof GetOperationRecordOutput
   */
  itemDtos: OperationRecordItemListDto[]

  constructor(data?: any) {
    if (data) {
      this['infoDto'] = data['infoDto']
      this['itemDtos'] = data['itemDtos']
    }
  }
}

export class OperationRecordInfoDto {
  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  title: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  applicant: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  approver: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof OperationRecordInfoDto
   */
  equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  startTime: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  status: string

  /**
   *
   * @type {'Gray'|'Green'|'Red'}
   * @memberof OperationRecordInfoDto
   */
  recordLevel: 'Gray' | 'Green' | 'Red'

  /**
   *
   * @type {string[]}
   * @memberof OperationRecordInfoDto
   */
  photoIds: string[]

  /**
   *
   * @type {string}
   * @memberof OperationRecordInfoDto
   */
  stationName: string

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title']
      this['applicant'] = data['applicant']
      this['approver'] = data['approver']
      this['equipmentType'] = data['equipmentType']
      this['startTime'] = data['startTime']
      this['status'] = data['status']
      this['recordLevel'] = data['recordLevel']
      this['photoIds'] = data['photoIds']
      this['stationName'] = data['stationName']
    }
  }
}

export class OperationRecordItemListDto {
  /**
   *
   * @type {string}
   * @memberof OperationRecordItemListDto
   */
  operationTime: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordItemListDto
   */
  operationDescription: string

  constructor(data?: any) {
    if (data) {
      this['operationTime'] = data['operationTime']
      this['operationDescription'] = data['operationDescription']
    }
  }
}

export class PagedResultDtoOperationRecordListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoOperationRecordListDto
   */
  totalCount: number

  /**
   *
   * @type {OperationRecordListDto[]}
   * @memberof PagedResultDtoOperationRecordListDto
   */
  items: OperationRecordListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class OperationRecordListDto {
  /**
   *
   * @type {string}
   * @memberof OperationRecordListDto
   */
  title: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordListDto
   */
  applicant: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordListDto
   */
  approver: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof OperationRecordListDto
   */
  equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {string}
   * @memberof OperationRecordListDto
   */
  startTime: string

  /**
   *
   * @type {string}
   * @memberof OperationRecordListDto
   */
  status: string

  /**
   *
   * @type {'Gray'|'Green'|'Red'}
   * @memberof OperationRecordListDto
   */
  recordLevel: 'Gray' | 'Green' | 'Red'

  /**
   *
   * @type {number}
   * @memberof OperationRecordListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title']
      this['applicant'] = data['applicant']
      this['approver'] = data['approver']
      this['equipmentType'] = data['equipmentType']
      this['startTime'] = data['startTime']
      this['status'] = data['status']
      this['recordLevel'] = data['recordLevel']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoOrganizationUnitDto {
  /**
   *
   * @type {OrganizationUnitDto[]}
   * @memberof ListResultDtoOrganizationUnitDto
   */
  items: OrganizationUnitDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class OrganizationUnitDto {
  /**
   *
   * @type {number}
   * @memberof OrganizationUnitDto
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitDto
   */
  code: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitDto
   */
  displayName: string

  /**
   *
   * @type {number}
   * @memberof OrganizationUnitDto
   */
  memberCount: number

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitDto
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof OrganizationUnitDto
   */
  lastModifierUserId: number

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof OrganizationUnitDto
   */
  creatorUserId: number

  /**
   *
   * @type {number}
   * @memberof OrganizationUnitDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId']
      this['code'] = data['code']
      this['displayName'] = data['displayName']
      this['memberCount'] = data['memberCount']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoOrganizationUnitUserListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoOrganizationUnitUserListDto
   */
  totalCount: number

  /**
   *
   * @type {OrganizationUnitUserListDto[]}
   * @memberof PagedResultDtoOrganizationUnitUserListDto
   */
  items: OrganizationUnitUserListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class OrganizationUnitUserListDto {
  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  profilePictureId: string

  /**
   *
   * @type {string}
   * @memberof OrganizationUnitUserListDto
   */
  addedTime: string

  /**
   *
   * @type {number}
   * @memberof OrganizationUnitUserListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['profilePictureId'] = data['profilePictureId']
      this['addedTime'] = data['addedTime']
      this['id'] = data['id']
    }
  }
}

export class CreateOrganizationUnitInput {
  /**
   *
   * @type {number}
   * @memberof CreateOrganizationUnitInput
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrganizationUnitInput
   */
  displayName: string

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId']
      this['displayName'] = data['displayName']
    }
  }
}

export class UpdateOrganizationUnitInput {
  /**
   *
   * @type {number}
   * @memberof UpdateOrganizationUnitInput
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof UpdateOrganizationUnitInput
   */
  displayName: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['displayName'] = data['displayName']
    }
  }
}

export class MoveOrganizationUnitInput {
  /**
   *
   * @type {number}
   * @memberof MoveOrganizationUnitInput
   */
  id: number

  /**
   *
   * @type {number}
   * @memberof MoveOrganizationUnitInput
   */
  newParentId: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['newParentId'] = data['newParentId']
    }
  }
}

export class UsersToOrganizationUnitInput {
  /**
   *
   * @type {number[]}
   * @memberof UsersToOrganizationUnitInput
   */
  userIds: number[]

  /**
   *
   * @type {number}
   * @memberof UsersToOrganizationUnitInput
   */
  organizationUnitId: number

  constructor(data?: any) {
    if (data) {
      this['userIds'] = data['userIds']
      this['organizationUnitId'] = data['organizationUnitId']
    }
  }
}

export class FindOrganizationUnitUsersInput {
  /**
   *
   * @type {number}
   * @memberof FindOrganizationUnitUsersInput
   */
  organizationUnitId: number

  /**
   *
   * @type {number}
   * @memberof FindOrganizationUnitUsersInput
   */
  maxResultCount: number

  /**
   *
   * @type {number}
   * @memberof FindOrganizationUnitUsersInput
   */
  skipCount: number

  /**
   *
   * @type {string}
   * @memberof FindOrganizationUnitUsersInput
   */
  filter: string

  constructor(data?: any) {
    if (data) {
      this['organizationUnitId'] = data['organizationUnitId']
      this['maxResultCount'] = data['maxResultCount']
      this['skipCount'] = data['skipCount']
      this['filter'] = data['filter']
    }
  }
}

export class PaymentInfoDto {
  /**
   *
   * @type {EditionSelectDto}
   * @memberof PaymentInfoDto
   */
  edition: EditionSelectDto

  /**
   *
   * @type {number}
   * @memberof PaymentInfoDto
   */
  additionalPrice: number

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition']
      this['additionalPrice'] = data['additionalPrice']
    }
  }
}

export class EditionSelectDto {
  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof EditionSelectDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EditionSelectDto
   */
  displayName: string

  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  expiringEditionId: number

  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  monthlyPrice: number

  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  annualPrice: number

  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  trialDayCount: number

  /**
   *
   * @type {number}
   * @memberof EditionSelectDto
   */
  waitingDayAfterExpire: number

  /**
   *
   * @type {boolean}
   * @memberof EditionSelectDto
   */
  isFree: boolean

  /**
   *
   * @type {object}
   * @memberof EditionSelectDto
   */
  additionalData: object

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['expiringEditionId'] = data['expiringEditionId']
      this['monthlyPrice'] = data['monthlyPrice']
      this['annualPrice'] = data['annualPrice']
      this['trialDayCount'] = data['trialDayCount']
      this['waitingDayAfterExpire'] = data['waitingDayAfterExpire']
      this['isFree'] = data['isFree']
      this['additionalData'] = data['additionalData']
    }
  }
}

export class CreatePaymentDto {
  /**
   *
   * @type {number}
   * @memberof CreatePaymentDto
   */
  editionId: number

  /**
   *
   * @type {'NewRegistration'|'BuyNow'|'Upgrade'|'Extend'}
   * @memberof CreatePaymentDto
   */
  editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend'

  /**
   *
   * @type {'Monthly'|'Annual'}
   * @memberof CreatePaymentDto
   */
  paymentPeriodType: 'Monthly' | 'Annual'

  /**
   *
   * @type {'Paypal'}
   * @memberof CreatePaymentDto
   */
  subscriptionPaymentGatewayType: 'Paypal'

  constructor(data?: any) {
    if (data) {
      this['editionId'] = data['editionId']
      this['editionPaymentType'] = data['editionPaymentType']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['subscriptionPaymentGatewayType'] = data['subscriptionPaymentGatewayType']
    }
  }
}

export class CreatePaymentResponse {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class ExecutePaymentDto {
  /**
   *
   * @type {'Paypal'}
   * @memberof ExecutePaymentDto
   */
  gateway: 'Paypal'

  /**
   *
   * @type {'NewRegistration'|'BuyNow'|'Upgrade'|'Extend'}
   * @memberof ExecutePaymentDto
   */
  editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend'

  /**
   *
   * @type {number}
   * @memberof ExecutePaymentDto
   */
  editionId: number

  /**
   *
   * @type {'Monthly'|'Annual'}
   * @memberof ExecutePaymentDto
   */
  paymentPeriodType: 'Monthly' | 'Annual'

  /**
   *
   * @type {object}
   * @memberof ExecutePaymentDto
   */
  additionalData: object

  constructor(data?: any) {
    if (data) {
      this['gateway'] = data['gateway']
      this['editionPaymentType'] = data['editionPaymentType']
      this['editionId'] = data['editionId']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['additionalData'] = data['additionalData']
    }
  }
}

export class ExecutePaymentResponse {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class PagedResultDtoSubscriptionPaymentListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoSubscriptionPaymentListDto
   */
  totalCount: number

  /**
   *
   * @type {SubscriptionPaymentListDto[]}
   * @memberof PagedResultDtoSubscriptionPaymentListDto
   */
  items: SubscriptionPaymentListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class SubscriptionPaymentListDto {
  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  gateway: string

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  amount: number

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  editionId: number

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  dayCount: number

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  paymentPeriodType: string

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  paymentId: string

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  payerId: string

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  status: string

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  editionDisplayName: string

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  invoiceNo: string

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  lastModifierUserId: number

  /**
   *
   * @type {string}
   * @memberof SubscriptionPaymentListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  creatorUserId: number

  /**
   *
   * @type {number}
   * @memberof SubscriptionPaymentListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['gateway'] = data['gateway']
      this['amount'] = data['amount']
      this['editionId'] = data['editionId']
      this['dayCount'] = data['dayCount']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['paymentId'] = data['paymentId']
      this['payerId'] = data['payerId']
      this['status'] = data['status']
      this['editionDisplayName'] = data['editionDisplayName']
      this['tenantId'] = data['tenantId']
      this['invoiceNo'] = data['invoiceNo']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['id'] = data['id']
    }
  }
}

export class ApiResultOutputListResultDtoPendingDto {
  /**
   *
   * @type {boolean}
   * @memberof ApiResultOutputListResultDtoPendingDto
   */
  result: boolean

  /**
   *
   * @type {number}
   * @memberof ApiResultOutputListResultDtoPendingDto
   */
  code: number

  /**
   *
   * @type {ListResultDtoPendingDto}
   * @memberof ApiResultOutputListResultDtoPendingDto
   */
  data: ListResultDtoPendingDto

  /**
   *
   * @type {string}
   * @memberof ApiResultOutputListResultDtoPendingDto
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

export class ListResultDtoPendingDto {
  /**
   *
   * @type {PendingDto[]}
   * @memberof ListResultDtoPendingDto
   */
  items: PendingDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class PendingDto {
  /**
   *
   * @type {number}
   * @memberof PendingDto
   */
  id: number

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'}
   * @memberof PendingDto
   */
  pendingType: 'KeyCabinet' | 'WireCabinet'

  /**
   *
   * @type {number}
   * @memberof PendingDto
   */
  applicantId: number

  /**
   *
   * @type {string}
   * @memberof PendingDto
   */
  applyTime: string

  /**
   *
   * @type {string}
   * @memberof PendingDto
   */
  title: string

  /**
   *
   * @type {string}
   * @memberof PendingDto
   */
  subTitle: string

  /**
   *
   * @type {string}
   * @memberof PendingDto
   */
  expiredDate: string

  /**
   *
   * @type {boolean}
   * @memberof PendingDto
   */
  isExpired: boolean

  /**
   *
   * @type {number}
   * @memberof PendingDto
   */
  taskStep: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['pendingType'] = data['pendingType']
      this['applicantId'] = data['applicantId']
      this['applyTime'] = data['applyTime']
      this['title'] = data['title']
      this['subTitle'] = data['subTitle']
      this['expiredDate'] = data['expiredDate']
      this['isExpired'] = data['isExpired']
      this['taskStep'] = data['taskStep']
    }
  }
}

export class ListResultDtoFlatPermissionWithLevelDto {
  /**
   *
   * @type {FlatPermissionWithLevelDto[]}
   * @memberof ListResultDtoFlatPermissionWithLevelDto
   */
  items: FlatPermissionWithLevelDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class FlatPermissionWithLevelDto {
  /**
   *
   * @type {number}
   * @memberof FlatPermissionWithLevelDto
   */
  level: number

  /**
   *
   * @type {string}
   * @memberof FlatPermissionWithLevelDto
   */
  parentName: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionWithLevelDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionWithLevelDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionWithLevelDto
   */
  description: string

  /**
   *
   * @type {boolean}
   * @memberof FlatPermissionWithLevelDto
   */
  isGrantedByDefault: boolean

  constructor(data?: any) {
    if (data) {
      this['level'] = data['level']
      this['parentName'] = data['parentName']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['isGrantedByDefault'] = data['isGrantedByDefault']
    }
  }
}

export class ListResultDtoProductListDto {
  /**
   *
   * @type {ProductListDto[]}
   * @memberof ListResultDtoProductListDto
   */
  items: ProductListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ProductListDto {
  /**
   *
   * @type {string}
   * @memberof ProductListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ProductListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof ProductListDto
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof ProductListDto
   */
  type: string

  /**
   *
   * @type {string}
   * @memberof ProductListDto
   */
  model: string

  /**
   *
   * @type {number}
   * @memberof ProductListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['creationTime'] = data['creationTime']
      this['type'] = data['type']
      this['model'] = data['model']
      this['id'] = data['id']
    }
  }
}

export class GetProductEditOutput {
  /**
   *
   * @type {ProductEditDto}
   * @memberof GetProductEditOutput
   */
  product: ProductEditDto

  /**
   *
   * @type {ProductPropertyListDto[]}
   * @memberof GetProductEditOutput
   */
  productProperties: ProductPropertyListDto[]

  constructor(data?: any) {
    if (data) {
      this['product'] = data['product']
      this['productProperties'] = data['productProperties']
    }
  }
}

export class ProductEditDto {
  /**
   *
   * @type {string}
   * @memberof ProductEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ProductEditDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof ProductEditDto
   */
  type: string

  /**
   *
   * @type {string}
   * @memberof ProductEditDto
   */
  model: string

  /**
   *
   * @type {number}
   * @memberof ProductEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['type'] = data['type']
      this['model'] = data['model']
      this['id'] = data['id']
    }
  }
}

export class ProductPropertyListDto {
  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  value: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyListDto
   */
  sortIndex: number

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  type: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  bitType: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyListDto
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof ProductPropertyListDto
   */
  unit: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['sortIndex'] = data['sortIndex']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['creationTime'] = data['creationTime']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateProductInput {
  /**
   *
   * @type {CreateOrUpdateProductDto}
   * @memberof CreateOrUpdateProductInput
   */
  product: CreateOrUpdateProductDto

  /**
   *
   * @type {ProductPropertyEditDto[]}
   * @memberof CreateOrUpdateProductInput
   */
  productProperties: ProductPropertyEditDto[]

  constructor(data?: any) {
    if (data) {
      this['product'] = data['product']
      this['productProperties'] = data['productProperties']
    }
  }
}

export class CreateOrUpdateProductDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateProductDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateProductDto
   */
  description: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof CreateOrUpdateProductDto
   */
  type: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateProductDto
   */
  model: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateProductDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['type'] = data['type']
      this['model'] = data['model']
      this['id'] = data['id']
    }
  }
}

export class ProductPropertyEditDto {
  /**
   *
   * @type {string}
   * @memberof ProductPropertyEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyEditDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyEditDto
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyEditDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyEditDto
   */
  sortIndex: number

  /**
   *
   * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
   * @memberof ProductPropertyEditDto
   */
  type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment'

  /**
   *
   * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
   * @memberof ProductPropertyEditDto
   */
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'

  /**
   *
   * @type {number}
   * @memberof ProductPropertyEditDto
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof ProductPropertyEditDto
   */
  unit: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['description'] = data['description']
      this['sortIndex'] = data['sortIndex']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoProductPropertyListDto {
  /**
   *
   * @type {ProductPropertyListDto[]}
   * @memberof ListResultDtoProductPropertyListDto
   */
  items: ProductPropertyListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class GetProductPropertyEditOutput {
  /**
   *
   * @type {ProductPropertyEditDto}
   * @memberof GetProductPropertyEditOutput
   */
  productProperty: ProductPropertyEditDto

  constructor(data?: any) {
    if (data) {
      this['productProperty'] = data['productProperty']
    }
  }
}

export class CreateOrUpdateProductPropertyInput {
  /**
   *
   * @type {ProductPropertyEditDto}
   * @memberof CreateOrUpdateProductPropertyInput
   */
  productProperty: ProductPropertyEditDto

  constructor(data?: any) {
    if (data) {
      this['productProperty'] = data['productProperty']
    }
  }
}

export class CurrentUserProfileEditDto {
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  phoneNumber: string

  /**
   *
   * @type {boolean}
   * @memberof CurrentUserProfileEditDto
   */
  isPhoneNumberConfirmed: boolean

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  timezone: string

  /**
   *
   * @type {string}
   * @memberof CurrentUserProfileEditDto
   */
  qrCodeSetupImageUrl: string

  /**
   *
   * @type {boolean}
   * @memberof CurrentUserProfileEditDto
   */
  isGoogleAuthenticatorEnabled: boolean

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['phoneNumber'] = data['phoneNumber']
      this['isPhoneNumberConfirmed'] = data['isPhoneNumberConfirmed']
      this['timezone'] = data['timezone']
      this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl']
      this['isGoogleAuthenticatorEnabled'] = data['isGoogleAuthenticatorEnabled']
    }
  }
}

export class UpdateGoogleAuthenticatorKeyOutput {
  /**
   *
   * @type {string}
   * @memberof UpdateGoogleAuthenticatorKeyOutput
   */
  qrCodeSetupImageUrl: string

  constructor(data?: any) {
    if (data) {
      this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl']
    }
  }
}

export class VerifySmsCodeInputDto {
  /**
   *
   * @type {string}
   * @memberof VerifySmsCodeInputDto
   */
  code: string

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code']
    }
  }
}

export class ChangePasswordInput {
  /**
   *
   * @type {string}
   * @memberof ChangePasswordInput
   */
  currentPassword: string

  /**
   *
   * @type {string}
   * @memberof ChangePasswordInput
   */
  newPassword: string

  constructor(data?: any) {
    if (data) {
      this['currentPassword'] = data['currentPassword']
      this['newPassword'] = data['newPassword']
    }
  }
}

export class UpdateProfilePictureInput {
  /**
   *
   * @type {string}
   * @memberof UpdateProfilePictureInput
   */
  fileName: string

  /**
   *
   * @type {number}
   * @memberof UpdateProfilePictureInput
   */
  x: number

  /**
   *
   * @type {number}
   * @memberof UpdateProfilePictureInput
   */
  y: number

  /**
   *
   * @type {number}
   * @memberof UpdateProfilePictureInput
   */
  width: number

  /**
   *
   * @type {number}
   * @memberof UpdateProfilePictureInput
   */
  height: number

  constructor(data?: any) {
    if (data) {
      this['fileName'] = data['fileName']
      this['x'] = data['x']
      this['y'] = data['y']
      this['width'] = data['width']
      this['height'] = data['height']
    }
  }
}

export class GetPasswordComplexitySettingOutput {
  /**
   *
   * @type {PasswordComplexitySetting}
   * @memberof GetPasswordComplexitySettingOutput
   */
  setting: PasswordComplexitySetting

  constructor(data?: any) {
    if (data) {
      this['setting'] = data['setting']
    }
  }
}

export class GetProfilePictureOutput {
  /**
   *
   * @type {string}
   * @memberof GetProfilePictureOutput
   */
  profilePicture: string

  constructor(data?: any) {
    if (data) {
      this['profilePicture'] = data['profilePicture']
    }
  }
}

export class ChangeUserLanguageDto {
  /**
   *
   * @type {string}
   * @memberof ChangeUserLanguageDto
   */
  languageName: string

  constructor(data?: any) {
    if (data) {
      this['languageName'] = data['languageName']
    }
  }
}

export class AddOrUpdateRiskTicketInput {
  /**
   *
   * @type {RiskPrecontrolTicket}
   * @memberof AddOrUpdateRiskTicketInput
   */
  riskTicket: RiskPrecontrolTicket

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof AddOrUpdateRiskTicketInput
   */
  riskItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['riskTicket'] = data['riskTicket']
      this['riskItems'] = data['riskItems']
    }
  }
}

export class RiskPrecontrolTicket {
  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolTicket
   */
  title: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolTicket
   */
  footTitle: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolTicket
   */
  personnalProtectTools: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolTicket
   */
  note: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolTicket
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title']
      this['footTitle'] = data['footTitle']
      this['personnalProtectTools'] = data['personnalProtectTools']
      this['note'] = data['note']
      this['id'] = data['id']
    }
  }
}

export class RiskPrecontrolItem {
  /**
   *
   * @type {number}
   * @memberof RiskPrecontrolItem
   */
  sequence: number

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  riskTicketId: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  workSequence: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  dangerSource: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  dangerFactor: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  dangerResult: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  riskLevel: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  workStandard: string

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  ticketItemId: string

  /**
   *
   * @type {boolean}
   * @memberof RiskPrecontrolItem
   */
  isTemplateItem: boolean

  /**
   *
   * @type {boolean}
   * @memberof RiskPrecontrolItem
   */
  isFinished: boolean

  /**
   *
   * @type {RiskPrecontrolTicket}
   * @memberof RiskPrecontrolItem
   */
  riskPrecontrolTicket: RiskPrecontrolTicket

  /**
   *
   * @type {string}
   * @memberof RiskPrecontrolItem
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['sequence'] = data['sequence']
      this['riskTicketId'] = data['riskTicketId']
      this['workSequence'] = data['workSequence']
      this['dangerSource'] = data['dangerSource']
      this['dangerFactor'] = data['dangerFactor']
      this['dangerResult'] = data['dangerResult']
      this['riskLevel'] = data['riskLevel']
      this['workStandard'] = data['workStandard']
      this['ticketItemId'] = data['ticketItemId']
      this['isTemplateItem'] = data['isTemplateItem']
      this['isFinished'] = data['isFinished']
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket']
      this['id'] = data['id']
    }
  }
}

export class IdGuid {
  /**
   *
   * @type {string}
   * @memberof IdGuid
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

export class AddOrUpdateRiskTicketItemsInput {
  /**
   *
   * @type {string}
   * @memberof AddOrUpdateRiskTicketItemsInput
   */
  riskTicketId: string

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof AddOrUpdateRiskTicketItemsInput
   */
  riskItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['riskTicketId'] = data['riskTicketId']
      this['riskItems'] = data['riskItems']
    }
  }
}

export class AddOrUpdateRiskItemTemplateInput {
  /**
   *
   * @type {RiskItemTemplate}
   * @memberof AddOrUpdateRiskItemTemplateInput
   */
  riskItemTemplate: RiskItemTemplate

  constructor(data?: any) {
    if (data) {
      this['riskItemTemplate'] = data['riskItemTemplate']
    }
  }
}

export class RiskItemTemplate {
  /**
   *
   * @type {number}
   * @memberof RiskItemTemplate
   */
  no: number

  /**
   *
   * @type {string}
   * @memberof RiskItemTemplate
   */
  dangerSource: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTemplate
   */
  workStandard: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTemplate
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['no'] = data['no']
      this['dangerSource'] = data['dangerSource']
      this['workStandard'] = data['workStandard']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoRiskItemTemplate {
  /**
   *
   * @type {RiskItemTemplate[]}
   * @memberof ListResultDtoRiskItemTemplate
   */
  items: RiskItemTemplate[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class AddOrUpdateRiskItemTermMapInput {
  /**
   *
   * @type {RiskItemTermMap}
   * @memberof AddOrUpdateRiskItemTermMapInput
   */
  riskItemTermMap: RiskItemTermMap

  constructor(data?: any) {
    if (data) {
      this['riskItemTermMap'] = data['riskItemTermMap']
    }
  }
}

export class RiskItemTermMap {
  /**
   *
   * @type {string}
   * @memberof RiskItemTermMap
   */
  dangerSource: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTermMap
   */
  workStandard: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTermMap
   */
  firstKey: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTermMap
   */
  secondKey: string

  /**
   *
   * @type {string}
   * @memberof RiskItemTermMap
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['dangerSource'] = data['dangerSource']
      this['workStandard'] = data['workStandard']
      this['firstKey'] = data['firstKey']
      this['secondKey'] = data['secondKey']
      this['id'] = data['id']
    }
  }
}

export class MappingRiskItemByTermInput {
  /**
   *
   * @type {string}
   * @memberof MappingRiskItemByTermInput
   */
  keyWord: string

  constructor(data?: any) {
    if (data) {
      this['keyWord'] = data['keyWord']
    }
  }
}

export class ListResultDtoRiskItemTermMap {
  /**
   *
   * @type {RiskItemTermMap[]}
   * @memberof ListResultDtoRiskItemTermMap
   */
  items: RiskItemTermMap[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class RiskItemDto {
  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  riskTicketId: string

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  dangerSource: string

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  workStandard: string

  /**
   *
   * @type {number}
   * @memberof RiskItemDto
   */
  sequence: number

  /**
   *
   * @type {boolean}
   * @memberof RiskItemDto
   */
  isTemplateItem: boolean

  /**
   *
   * @type {boolean}
   * @memberof RiskItemDto
   */
  isFinished: boolean

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  ticketItemId: string

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  ticketId: string

  /**
   *
   * @type {string}
   * @memberof RiskItemDto
   */
  riskItemTemplateId: string

  /**
   *
   * @type {boolean}
   * @memberof RiskItemDto
   */
  isTicketRiskItem: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['riskTicketId'] = data['riskTicketId']
      this['dangerSource'] = data['dangerSource']
      this['workStandard'] = data['workStandard']
      this['sequence'] = data['sequence']
      this['isTemplateItem'] = data['isTemplateItem']
      this['isFinished'] = data['isFinished']
      this['ticketItemId'] = data['ticketItemId']
      this['ticketId'] = data['ticketId']
      this['riskItemTemplateId'] = data['riskItemTemplateId']
      this['isTicketRiskItem'] = data['isTicketRiskItem']
    }
  }
}

export class ListResultDtoRiskItemDto {
  /**
   *
   * @type {RiskItemDto[]}
   * @memberof ListResultDtoRiskItemDto
   */
  items: RiskItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ListResultDtoRoleListDto {
  /**
   *
   * @type {RoleListDto[]}
   * @memberof ListResultDtoRoleListDto
   */
  items: RoleListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class RoleListDto {
  /**
   *
   * @type {string}
   * @memberof RoleListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof RoleListDto
   */
  displayName: string

  /**
   *
   * @type {boolean}
   * @memberof RoleListDto
   */
  isStatic: boolean

  /**
   *
   * @type {boolean}
   * @memberof RoleListDto
   */
  isDefault: boolean

  /**
   *
   * @type {string}
   * @memberof RoleListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof RoleListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['isStatic'] = data['isStatic']
      this['isDefault'] = data['isDefault']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

export class GetRoleForEditOutput {
  /**
   *
   * @type {RoleEditDto}
   * @memberof GetRoleForEditOutput
   */
  role: RoleEditDto

  /**
   *
   * @type {FlatPermissionDto[]}
   * @memberof GetRoleForEditOutput
   */
  permissions: FlatPermissionDto[]

  /**
   *
   * @type {string[]}
   * @memberof GetRoleForEditOutput
   */
  grantedPermissionNames: string[]

  constructor(data?: any) {
    if (data) {
      this['role'] = data['role']
      this['permissions'] = data['permissions']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

export class RoleEditDto {
  /**
   *
   * @type {number}
   * @memberof RoleEditDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof RoleEditDto
   */
  displayName: string

  /**
   *
   * @type {boolean}
   * @memberof RoleEditDto
   */
  isDefault: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['displayName'] = data['displayName']
      this['isDefault'] = data['isDefault']
    }
  }
}

export class FlatPermissionDto {
  /**
   *
   * @type {string}
   * @memberof FlatPermissionDto
   */
  parentName: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof FlatPermissionDto
   */
  description: string

  /**
   *
   * @type {boolean}
   * @memberof FlatPermissionDto
   */
  isGrantedByDefault: boolean

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['isGrantedByDefault'] = data['isGrantedByDefault']
    }
  }
}

export class CreateOrUpdateRoleInput {
  /**
   *
   * @type {RoleEditDto}
   * @memberof CreateOrUpdateRoleInput
   */
  role: RoleEditDto

  /**
   *
   * @type {string[]}
   * @memberof CreateOrUpdateRoleInput
   */
  grantedPermissionNames: string[]

  constructor(data?: any) {
    if (data) {
      this['role'] = data['role']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

export class SafetyWearMonitoringInput {
  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof SafetyWearMonitoringInput
   */
  macAddress: string

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  equipmentNo: number

  /**
   *
   * @type {boolean}
   * @memberof SafetyWearMonitoringInput
   */
  workState: boolean

  /**
   *
   * @type {boolean}
   * @memberof SafetyWearMonitoringInput
   */
  usingState: boolean

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  heartRate: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  systolicPressure: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  diastolicPressure: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  longitude: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringInput
   */
  latitude: number

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['macAddress'] = data['macAddress']
      this['equipmentNo'] = data['equipmentNo']
      this['workState'] = data['workState']
      this['usingState'] = data['usingState']
      this['heartRate'] = data['heartRate']
      this['systolicPressure'] = data['systolicPressure']
      this['diastolicPressure'] = data['diastolicPressure']
      this['longitude'] = data['longitude']
      this['latitude'] = data['latitude']
    }
  }
}

export class SafetyWearMonitoringOutput {
  /**
   *
   * @type {string}
   * @memberof SafetyWearMonitoringOutput
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof SafetyWearMonitoringOutput
   */
  createTime: string

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  userId: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof SafetyWearMonitoringOutput
   */
  macAddress: string

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  equipmentNo: number

  /**
   *
   * @type {boolean}
   * @memberof SafetyWearMonitoringOutput
   */
  workState: boolean

  /**
   *
   * @type {boolean}
   * @memberof SafetyWearMonitoringOutput
   */
  usingState: boolean

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  heartRate: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  systolicPressure: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  diastolicPressure: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  longitude: number

  /**
   *
   * @type {number}
   * @memberof SafetyWearMonitoringOutput
   */
  latitude: number

  /**
   *
   * @type {string}
   * @memberof SafetyWearMonitoringOutput
   */
  updateTime: string

  constructor(data?: any) {
    if (data) {
      this['userName'] = data['userName']
      this['createTime'] = data['createTime']
      this['userId'] = data['userId']
      this['stationId'] = data['stationId']
      this['equipmentId'] = data['equipmentId']
      this['macAddress'] = data['macAddress']
      this['equipmentNo'] = data['equipmentNo']
      this['workState'] = data['workState']
      this['usingState'] = data['usingState']
      this['heartRate'] = data['heartRate']
      this['systolicPressure'] = data['systolicPressure']
      this['diastolicPressure'] = data['diastolicPressure']
      this['longitude'] = data['longitude']
      this['latitude'] = data['latitude']
      this['updateTime'] = data['updateTime']
    }
  }
}

export class ListResultDtoSafetyWearMonitoringOutput {
  /**
   *
   * @type {SafetyWearMonitoringOutput[]}
   * @memberof ListResultDtoSafetyWearMonitoringOutput
   */
  items: SafetyWearMonitoringOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class EquipmentInfoOutput {
  /**
   *
   * @type {number}
   * @memberof EquipmentInfoOutput
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentInfoOutput
   */
  macAddress: string

  /**
   *
   * @type {string}
   * @memberof EquipmentInfoOutput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentInfoOutput
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof EquipmentInfoOutput
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentInfoOutput
   */
  stationId: number

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['macAddress'] = data['macAddress']
      this['name'] = data['name']
      this['description'] = data['description']
      this['tenantId'] = data['tenantId']
      this['stationId'] = data['stationId']
    }
  }
}

export class ListResultDtoEquipmentInfoOutput {
  /**
   *
   * @type {EquipmentInfoOutput[]}
   * @memberof ListResultDtoEquipmentInfoOutput
   */
  items: EquipmentInfoOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ListResultDtoSafetyWearUserOutput {
  /**
   *
   * @type {SafetyWearUserOutput[]}
   * @memberof ListResultDtoSafetyWearUserOutput
   */
  items: SafetyWearUserOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class SafetyWearUserOutput {
  /**
   *
   * @type {number}
   * @memberof SafetyWearUserOutput
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof SafetyWearUserOutput
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['userName'] = data['userName']
    }
  }
}

export class GetCurrentLoginInformationsOutput {
  /**
   *
   * @type {UserLoginInfoDto}
   * @memberof GetCurrentLoginInformationsOutput
   */
  user: UserLoginInfoDto

  /**
   *
   * @type {TenantLoginInfoDto}
   * @memberof GetCurrentLoginInformationsOutput
   */
  tenant: TenantLoginInfoDto

  /**
   *
   * @type {ApplicationInfoDto}
   * @memberof GetCurrentLoginInformationsOutput
   */
  application: ApplicationInfoDto

  /**
   *
   * @type {StationLoginInfoDto}
   * @memberof GetCurrentLoginInformationsOutput
   */
  station: StationLoginInfoDto

  constructor(data?: any) {
    if (data) {
      this['user'] = data['user']
      this['tenant'] = data['tenant']
      this['application'] = data['application']
      this['station'] = data['station']
    }
  }
}

export class UserLoginInfoDto {
  /**
   *
   * @type {string}
   * @memberof UserLoginInfoDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof UserLoginInfoDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof UserLoginInfoDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof UserLoginInfoDto
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof UserLoginInfoDto
   */
  profilePictureId: string

  /**
   *
   * @type {number}
   * @memberof UserLoginInfoDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['profilePictureId'] = data['profilePictureId']
      this['id'] = data['id']
    }
  }
}

export class TenantLoginInfoDto {
  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  logoId: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  logoFileType: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  customCssId: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  subscriptionEndDateUtc: string

  /**
   *
   * @type {boolean}
   * @memberof TenantLoginInfoDto
   */
  isInTrialPeriod: boolean

  /**
   *
   * @type {EditionInfoDto}
   * @memberof TenantLoginInfoDto
   */
  edition: EditionInfoDto

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  creationTime: string

  /**
   *
   * @type {'Monthly'|'Annual'}
   * @memberof TenantLoginInfoDto
   */
  paymentPeriodType: 'Monthly' | 'Annual'

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  subscriptionDateString: string

  /**
   *
   * @type {string}
   * @memberof TenantLoginInfoDto
   */
  creationTimeString: string

  /**
   *
   * @type {number}
   * @memberof TenantLoginInfoDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['logoId'] = data['logoId']
      this['logoFileType'] = data['logoFileType']
      this['customCssId'] = data['customCssId']
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc']
      this['isInTrialPeriod'] = data['isInTrialPeriod']
      this['edition'] = data['edition']
      this['creationTime'] = data['creationTime']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['subscriptionDateString'] = data['subscriptionDateString']
      this['creationTimeString'] = data['creationTimeString']
      this['id'] = data['id']
    }
  }
}

export class ApplicationInfoDto {
  /**
   *
   * @type {string}
   * @memberof ApplicationInfoDto
   */
  version: string

  /**
   *
   * @type {string}
   * @memberof ApplicationInfoDto
   */
  releaseDate: string

  /**
   *
   * @type {object}
   * @memberof ApplicationInfoDto
   */
  features: object

  constructor(data?: any) {
    if (data) {
      this['version'] = data['version']
      this['releaseDate'] = data['releaseDate']
      this['features'] = data['features']
    }
  }
}

export class StationLoginInfoDto {
  /**
   *
   * @type {number}
   * @memberof StationLoginInfoDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof StationLoginInfoDto
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
    }
  }
}

export class EditionInfoDto {
  /**
   *
   * @type {string}
   * @memberof EditionInfoDto
   */
  displayName: string

  /**
   *
   * @type {number}
   * @memberof EditionInfoDto
   */
  trialDayCount: number

  /**
   *
   * @type {number}
   * @memberof EditionInfoDto
   */
  monthlyPrice: number

  /**
   *
   * @type {number}
   * @memberof EditionInfoDto
   */
  annualPrice: number

  /**
   *
   * @type {boolean}
   * @memberof EditionInfoDto
   */
  isHighestEdition: boolean

  /**
   *
   * @type {boolean}
   * @memberof EditionInfoDto
   */
  isFree: boolean

  /**
   *
   * @type {number}
   * @memberof EditionInfoDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName']
      this['trialDayCount'] = data['trialDayCount']
      this['monthlyPrice'] = data['monthlyPrice']
      this['annualPrice'] = data['annualPrice']
      this['isHighestEdition'] = data['isHighestEdition']
      this['isFree'] = data['isFree']
      this['id'] = data['id']
    }
  }
}

export class UpdateUserSignInTokenOutput {
  /**
   *
   * @type {string}
   * @memberof UpdateUserSignInTokenOutput
   */
  signInToken: string

  /**
   *
   * @type {string}
   * @memberof UpdateUserSignInTokenOutput
   */
  encodedUserId: string

  /**
   *
   * @type {string}
   * @memberof UpdateUserSignInTokenOutput
   */
  encodedTenantId: string

  constructor(data?: any) {
    if (data) {
      this['signInToken'] = data['signInToken']
      this['encodedUserId'] = data['encodedUserId']
      this['encodedTenantId'] = data['encodedTenantId']
    }
  }
}

export class ListResultDtoStationListDto {
  /**
   *
   * @type {StationListDto[]}
   * @memberof ListResultDtoStationListDto
   */
  items: StationListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class StationListDto {
  /**
   *
   * @type {string}
   * @memberof StationListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof StationListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof StationListDto
   */
  no: string

  /**
   *
   * @type {number}
   * @memberof StationListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

export class GetStationEditOutput {
  /**
   *
   * @type {GetStationEditDto}
   * @memberof GetStationEditOutput
   */
  station: GetStationEditDto

  constructor(data?: any) {
    if (data) {
      this['station'] = data['station']
    }
  }
}

export class GetStationEditDto {
  /**
   *
   * @type {string}
   * @memberof GetStationEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof GetStationEditDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof GetStationEditDto
   */
  sortId: number

  /**
   *
   * @type {string}
   * @memberof GetStationEditDto
   */
  no: string

  /**
   *
   * @type {number}
   * @memberof GetStationEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['sortId'] = data['sortId']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateStationInput {
  /**
   *
   * @type {CreateOrUpdateStationDto}
   * @memberof CreateOrUpdateStationInput
   */
  station: CreateOrUpdateStationDto

  constructor(data?: any) {
    if (data) {
      this['station'] = data['station']
    }
  }
}

export class CreateOrUpdateStationDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateStationDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateStationDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateStationDto
   */
  sortId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateStationDto
   */
  no: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateStationDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['sortId'] = data['sortId']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoStationListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoStationListDto
   */
  totalCount: number

  /**
   *
   * @type {StationListDto[]}
   * @memberof PagedResultDtoStationListDto
   */
  items: StationListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class BindEquipmentStationInput {
  /**
   *
   * @type {number}
   * @memberof BindEquipmentStationInput
   */
  stationId: number

  /**
   *
   * @type {number[]}
   * @memberof BindEquipmentStationInput
   */
  equipmentIds: number[]

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['equipmentIds'] = data['equipmentIds']
    }
  }
}

export class CreateStationUserInput {
  /**
   *
   * @type {StationUserDto[]}
   * @memberof CreateStationUserInput
   */
  stationUserDtos: StationUserDto[]

  constructor(data?: any) {
    if (data) {
      this['stationUserDtos'] = data['stationUserDtos']
    }
  }
}

export class StationUserDto {
  /**
   *
   * @type {number}
   * @memberof StationUserDto
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof StationUserDto
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['userId'] = data['userId']
    }
  }
}

export class UpdateDefaultUserStationInput {
  /**
   *
   * @type {number}
   * @memberof UpdateDefaultUserStationInput
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof UpdateDefaultUserStationInput
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['userId'] = data['userId']
    }
  }
}

export class CreateStationAreaInput {
  /**
   *
   * @type {string}
   * @memberof CreateStationAreaInput
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof CreateStationAreaInput
   */
  parentId: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['parentId'] = data['parentId']
    }
  }
}

export class StationAreaDto {
  /**
   *
   * @type {number}
   * @memberof StationAreaDto
   */
  stationAreaId: number

  /**
   *
   * @type {string}
   * @memberof StationAreaDto
   */
  stationAreaName: string

  /**
   *
   * @type {number}
   * @memberof StationAreaDto
   */
  stationAreaParentId: number

  /**
   *
   * @type {StationDto[]}
   * @memberof StationAreaDto
   */
  stationDtos: StationDto[]

  constructor(data?: any) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId']
      this['stationAreaName'] = data['stationAreaName']
      this['stationAreaParentId'] = data['stationAreaParentId']
      this['stationDtos'] = data['stationDtos']
    }
  }
}

export class StationDto {
  /**
   *
   * @type {string}
   * @memberof StationDto
   */
  stationName: string

  /**
   *
   * @type {number}
   * @memberof StationDto
   */
  stationId: number

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName']
      this['stationId'] = data['stationId']
    }
  }
}

export class UpdateStationAreaInput {
  /**
   *
   * @type {string}
   * @memberof UpdateStationAreaInput
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof UpdateStationAreaInput
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['id'] = data['id']
    }
  }
}

export class MoveStationAreaInput {
  /**
   *
   * @type {number}
   * @memberof MoveStationAreaInput
   */
  id: number

  /**
   *
   * @type {number}
   * @memberof MoveStationAreaInput
   */
  parentId: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['parentId'] = data['parentId']
    }
  }
}

export class ListResultDtoStationAreaDto {
  /**
   *
   * @type {StationAreaDto[]}
   * @memberof ListResultDtoStationAreaDto
   */
  items: StationAreaDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class ListResultDtoStationAreaWithEquipment {
  /**
   *
   * @type {StationAreaWithEquipment[]}
   * @memberof ListResultDtoStationAreaWithEquipment
   */
  items: StationAreaWithEquipment[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class StationAreaWithEquipment {
  /**
   *
   * @type {number}
   * @memberof StationAreaWithEquipment
   */
  stationAreaId: number

  /**
   *
   * @type {string}
   * @memberof StationAreaWithEquipment
   */
  stationAreaName: string

  /**
   *
   * @type {number}
   * @memberof StationAreaWithEquipment
   */
  stationAreaParentId: number

  /**
   *
   * @type {number}
   * @memberof StationAreaWithEquipment
   */
  childrenCount: number

  /**
   *
   * @type {StationInArea[]}
   * @memberof StationAreaWithEquipment
   */
  stations: StationInArea[]

  constructor(data?: any) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId']
      this['stationAreaName'] = data['stationAreaName']
      this['stationAreaParentId'] = data['stationAreaParentId']
      this['childrenCount'] = data['childrenCount']
      this['stations'] = data['stations']
    }
  }
}

export class StationInArea {
  /**
   *
   * @type {number}
   * @memberof StationInArea
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof StationInArea
   */
  stationName: string

  /**
   *
   * @type {EquipmentInStation[]}
   * @memberof StationInArea
   */
  equipments: EquipmentInStation[]

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['equipments'] = data['equipments']
    }
  }
}

export class EquipmentInStation {
  /**
   *
   * @type {number}
   * @memberof EquipmentInStation
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof EquipmentInStation
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentInStation
   */
  lastModificationTime: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof EquipmentInStation
   */
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {string}
   * @memberof EquipmentInStation
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof EquipmentInStation
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentInStation
   */
  stationName: string

  /**
   *
   * @type {boolean}
   * @memberof EquipmentInStation
   */
  isOnline: boolean

  /**
   *
   * @type {BasePropertyInEquipment[]}
   * @memberof EquipmentInStation
   */
  equipmentBaseProperties: BasePropertyInEquipment[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['lastModificationTime'] = data['lastModificationTime']
      this['productType'] = data['productType']
      this['description'] = data['description']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['isOnline'] = data['isOnline']
      this['equipmentBaseProperties'] = data['equipmentBaseProperties']
    }
  }
}

export class BasePropertyInEquipment {
  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof BasePropertyInEquipment
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof BasePropertyInEquipment
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['id'] = data['id']
    }
  }
}

export class StationAreaBindStationInput {
  /**
   *
   * @type {number[]}
   * @memberof StationAreaBindStationInput
   */
  stationIds: number[]

  /**
   *
   * @type {number}
   * @memberof StationAreaBindStationInput
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['stationIds'] = data['stationIds']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoUserListByStationIdDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoUserListByStationIdDto
   */
  totalCount: number

  /**
   *
   * @type {UserListByStationIdDto[]}
   * @memberof PagedResultDtoUserListByStationIdDto
   */
  items: UserListByStationIdDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class UserListByStationIdDto {
  /**
   *
   * @type {string}
   * @memberof UserListByStationIdDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof UserListByStationIdDto
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof UserListByStationIdDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['userName'] = data['userName']
      this['lastModificationTime'] = data['lastModificationTime']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoStationOrganizationUserDto {
  /**
   *
   * @type {StationOrganizationUserDto[]}
   * @memberof ListResultDtoStationOrganizationUserDto
   */
  items: StationOrganizationUserDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class StationOrganizationUserDto {
  /**
   *
   * @type {string}
   * @memberof StationOrganizationUserDto
   */
  displayName: string

  /**
   *
   * @type {number}
   * @memberof StationOrganizationUserDto
   */
  parentId: number

  /**
   *
   * @type {StationUserListDto[]}
   * @memberof StationOrganizationUserDto
   */
  userListDtos: StationUserListDto[]

  /**
   *
   * @type {number}
   * @memberof StationOrganizationUserDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName']
      this['parentId'] = data['parentId']
      this['userListDtos'] = data['userListDtos']
      this['id'] = data['id']
    }
  }
}

export class StationUserListDto {
  /**
   *
   * @type {number}
   * @memberof StationUserListDto
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof StationUserListDto
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['userName'] = data['userName']
    }
  }
}

export class PagedResultDtoTenantListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoTenantListDto
   */
  totalCount: number

  /**
   *
   * @type {TenantListDto[]}
   * @memberof PagedResultDtoTenantListDto
   */
  items: TenantListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class TenantListDto {
  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  editionDisplayName: string

  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  connectionString: string

  /**
   *
   * @type {boolean}
   * @memberof TenantListDto
   */
  isActive: boolean

  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof TenantListDto
   */
  subscriptionEndDateUtc: string

  /**
   *
   * @type {number}
   * @memberof TenantListDto
   */
  editionId: number

  /**
   *
   * @type {boolean}
   * @memberof TenantListDto
   */
  isInTrialPeriod: boolean

  /**
   *
   * @type {number}
   * @memberof TenantListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['editionDisplayName'] = data['editionDisplayName']
      this['connectionString'] = data['connectionString']
      this['isActive'] = data['isActive']
      this['creationTime'] = data['creationTime']
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc']
      this['editionId'] = data['editionId']
      this['isInTrialPeriod'] = data['isInTrialPeriod']
      this['id'] = data['id']
    }
  }
}

export class CreateTenantInput {
  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  adminEmailAddress: string

  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  adminPassword: string

  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  connectionString: string

  /**
   *
   * @type {boolean}
   * @memberof CreateTenantInput
   */
  shouldChangePasswordOnNextLogin: boolean

  /**
   *
   * @type {boolean}
   * @memberof CreateTenantInput
   */
  sendActivationEmail: boolean

  /**
   *
   * @type {number}
   * @memberof CreateTenantInput
   */
  editionId: number

  /**
   *
   * @type {boolean}
   * @memberof CreateTenantInput
   */
  isActive: boolean

  /**
   *
   * @type {string}
   * @memberof CreateTenantInput
   */
  subscriptionEndDateUtc: string

  /**
   *
   * @type {boolean}
   * @memberof CreateTenantInput
   */
  isInTrialPeriod: boolean

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['adminEmailAddress'] = data['adminEmailAddress']
      this['adminPassword'] = data['adminPassword']
      this['connectionString'] = data['connectionString']
      this['shouldChangePasswordOnNextLogin'] = data['shouldChangePasswordOnNextLogin']
      this['sendActivationEmail'] = data['sendActivationEmail']
      this['editionId'] = data['editionId']
      this['isActive'] = data['isActive']
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc']
      this['isInTrialPeriod'] = data['isInTrialPeriod']
    }
  }
}

export class TenantEditDto {
  /**
   *
   * @type {string}
   * @memberof TenantEditDto
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof TenantEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TenantEditDto
   */
  connectionString: string

  /**
   *
   * @type {number}
   * @memberof TenantEditDto
   */
  editionId: number

  /**
   *
   * @type {boolean}
   * @memberof TenantEditDto
   */
  isActive: boolean

  /**
   *
   * @type {string}
   * @memberof TenantEditDto
   */
  subscriptionEndDateUtc: string

  /**
   *
   * @type {boolean}
   * @memberof TenantEditDto
   */
  isInTrialPeriod: boolean

  /**
   *
   * @type {number}
   * @memberof TenantEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['connectionString'] = data['connectionString']
      this['editionId'] = data['editionId']
      this['isActive'] = data['isActive']
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc']
      this['isInTrialPeriod'] = data['isInTrialPeriod']
      this['id'] = data['id']
    }
  }
}

export class GetTenantFeaturesEditOutput {
  /**
   *
   * @type {NameValueDto[]}
   * @memberof GetTenantFeaturesEditOutput
   */
  featureValues: NameValueDto[]

  /**
   *
   * @type {FlatFeatureDto[]}
   * @memberof GetTenantFeaturesEditOutput
   */
  features: FlatFeatureDto[]

  constructor(data?: any) {
    if (data) {
      this['featureValues'] = data['featureValues']
      this['features'] = data['features']
    }
  }
}

export class UpdateTenantFeaturesInput {
  /**
   *
   * @type {number}
   * @memberof UpdateTenantFeaturesInput
   */
  id: number

  /**
   *
   * @type {NameValueDto[]}
   * @memberof UpdateTenantFeaturesInput
   */
  featureValues: NameValueDto[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['featureValues'] = data['featureValues']
    }
  }
}

export class EntityDto {
  /**
   *
   * @type {number}
   * @memberof EntityDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

export class GetMemberActivityOutput {
  /**
   *
   * @type {MemberActivity[]}
   * @memberof GetMemberActivityOutput
   */
  memberActivities: MemberActivity[]

  constructor(data?: any) {
    if (data) {
      this['memberActivities'] = data['memberActivities']
    }
  }
}

export class MemberActivity {
  /**
   *
   * @type {string}
   * @memberof MemberActivity
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof MemberActivity
   */
  earnings: string

  /**
   *
   * @type {number}
   * @memberof MemberActivity
   */
  cases: number

  /**
   *
   * @type {number}
   * @memberof MemberActivity
   */
  closed: number

  /**
   *
   * @type {string}
   * @memberof MemberActivity
   */
  rate: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['earnings'] = data['earnings']
      this['cases'] = data['cases']
      this['closed'] = data['closed']
      this['rate'] = data['rate']
    }
  }
}

export class GetDashboardDataOutput {
  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  totalProfit: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  newFeedbacks: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  newOrders: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  newUsers: number

  /**
   *
   * @type {SalesSummaryData[]}
   * @memberof GetDashboardDataOutput
   */
  salesSummary: SalesSummaryData[]

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  totalSales: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  revenue: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  expenses: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  growth: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  transactionPercent: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  newVisitPercent: number

  /**
   *
   * @type {number}
   * @memberof GetDashboardDataOutput
   */
  bouncePercent: number

  /**
   *
   * @type {number[]}
   * @memberof GetDashboardDataOutput
   */
  dailySales: number[]

  /**
   *
   * @type {number[]}
   * @memberof GetDashboardDataOutput
   */
  profitShares: number[]

  constructor(data?: any) {
    if (data) {
      this['totalProfit'] = data['totalProfit']
      this['newFeedbacks'] = data['newFeedbacks']
      this['newOrders'] = data['newOrders']
      this['newUsers'] = data['newUsers']
      this['salesSummary'] = data['salesSummary']
      this['totalSales'] = data['totalSales']
      this['revenue'] = data['revenue']
      this['expenses'] = data['expenses']
      this['growth'] = data['growth']
      this['transactionPercent'] = data['transactionPercent']
      this['newVisitPercent'] = data['newVisitPercent']
      this['bouncePercent'] = data['bouncePercent']
      this['dailySales'] = data['dailySales']
      this['profitShares'] = data['profitShares']
    }
  }
}

export class SalesSummaryData {
  /**
   *
   * @type {string}
   * @memberof SalesSummaryData
   */
  period: string

  /**
   *
   * @type {number}
   * @memberof SalesSummaryData
   */
  sales: number

  /**
   *
   * @type {number}
   * @memberof SalesSummaryData
   */
  profit: number

  constructor(data?: any) {
    if (data) {
      this['period'] = data['period']
      this['sales'] = data['sales']
      this['profit'] = data['profit']
    }
  }
}

export class GetSalesSummaryOutput {
  /**
   *
   * @type {SalesSummaryData[]}
   * @memberof GetSalesSummaryOutput
   */
  salesSummary: SalesSummaryData[]

  constructor(data?: any) {
    if (data) {
      this['salesSummary'] = data['salesSummary']
    }
  }
}

export class GetWorldMapInput {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class GetWorldMapOutput {
  /**
   *
   * @type {WorldMapCountry[]}
   * @memberof GetWorldMapOutput
   */
  countries: WorldMapCountry[]

  constructor(data?: any) {
    if (data) {
      this['countries'] = data['countries']
    }
  }
}

export class WorldMapCountry {
  /**
   *
   * @type {string}
   * @memberof WorldMapCountry
   */
  countryName: string

  /**
   *
   * @type {number}
   * @memberof WorldMapCountry
   */
  color: number

  constructor(data?: any) {
    if (data) {
      this['countryName'] = data['countryName']
      this['color'] = data['color']
    }
  }
}

export class GetGeneralStatsInput {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class GetGeneralStatsOutput {
  /**
   *
   * @type {number}
   * @memberof GetGeneralStatsOutput
   */
  transactionPercent: number

  /**
   *
   * @type {number}
   * @memberof GetGeneralStatsOutput
   */
  newVisitPercent: number

  /**
   *
   * @type {number}
   * @memberof GetGeneralStatsOutput
   */
  bouncePercent: number

  constructor(data?: any) {
    if (data) {
      this['transactionPercent'] = data['transactionPercent']
      this['newVisitPercent'] = data['newVisitPercent']
      this['bouncePercent'] = data['bouncePercent']
    }
  }
}

export class RegisterTenantInput {
  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  adminEmailAddress: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  adminPassword: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  captchaResponse: string

  /**
   *
   * @type {'Free'|'Trial'|'Paid'}
   * @memberof RegisterTenantInput
   */
  subscriptionStartType: 'Free' | 'Trial' | 'Paid'

  /**
   *
   * @type {'Paypal'}
   * @memberof RegisterTenantInput
   */
  gateway: 'Paypal'

  /**
   *
   * @type {number}
   * @memberof RegisterTenantInput
   */
  editionId: number

  /**
   *
   * @type {string}
   * @memberof RegisterTenantInput
   */
  paymentId: string

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['adminEmailAddress'] = data['adminEmailAddress']
      this['adminPassword'] = data['adminPassword']
      this['captchaResponse'] = data['captchaResponse']
      this['subscriptionStartType'] = data['subscriptionStartType']
      this['gateway'] = data['gateway']
      this['editionId'] = data['editionId']
      this['paymentId'] = data['paymentId']
    }
  }
}

export class RegisterTenantOutput {
  /**
   *
   * @type {number}
   * @memberof RegisterTenantOutput
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof RegisterTenantOutput
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantOutput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantOutput
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof RegisterTenantOutput
   */
  emailAddress: string

  /**
   *
   * @type {boolean}
   * @memberof RegisterTenantOutput
   */
  isTenantActive: boolean

  /**
   *
   * @type {boolean}
   * @memberof RegisterTenantOutput
   */
  isActive: boolean

  /**
   *
   * @type {boolean}
   * @memberof RegisterTenantOutput
   */
  isEmailConfirmationRequired: boolean

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['tenancyName'] = data['tenancyName']
      this['name'] = data['name']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['isTenantActive'] = data['isTenantActive']
      this['isActive'] = data['isActive']
      this['isEmailConfirmationRequired'] = data['isEmailConfirmationRequired']
    }
  }
}

export class EditionsSelectOutput {
  /**
   *
   * @type {FlatFeatureSelectDto[]}
   * @memberof EditionsSelectOutput
   */
  allFeatures: FlatFeatureSelectDto[]

  /**
   *
   * @type {EditionWithFeaturesDto[]}
   * @memberof EditionsSelectOutput
   */
  editionsWithFeatures: EditionWithFeaturesDto[]

  /**
   *
   * @type {number}
   * @memberof EditionsSelectOutput
   */
  tenantEditionId: number

  constructor(data?: any) {
    if (data) {
      this['allFeatures'] = data['allFeatures']
      this['editionsWithFeatures'] = data['editionsWithFeatures']
      this['tenantEditionId'] = data['tenantEditionId']
    }
  }
}

export class FlatFeatureSelectDto {
  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  parentName: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  defaultValue: string

  /**
   *
   * @type {IInputType}
   * @memberof FlatFeatureSelectDto
   */
  inputType: IInputType

  /**
   *
   * @type {string}
   * @memberof FlatFeatureSelectDto
   */
  textHtmlColor: string

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['defaultValue'] = data['defaultValue']
      this['inputType'] = data['inputType']
      this['textHtmlColor'] = data['textHtmlColor']
    }
  }
}

export class EditionWithFeaturesDto {
  /**
   *
   * @type {EditionSelectDto}
   * @memberof EditionWithFeaturesDto
   */
  edition: EditionSelectDto

  /**
   *
   * @type {NameValueDto[]}
   * @memberof EditionWithFeaturesDto
   */
  featureValues: NameValueDto[]

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
    }
  }
}

export class IInputType {
  /**
   *
   * @type {string}
   * @memberof IInputType
   */
  name: string

  /**
   *
   * @type {object}
   * @memberof IInputType
   */
  attributes: object

  /**
   *
   * @type {IValueValidator}
   * @memberof IInputType
   */
  validator: IValueValidator

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
      this['validator'] = data['validator']
    }
  }
}

export class TenantSettingsEditDto {
  /**
   *
   * @type {GeneralSettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  general: GeneralSettingsEditDto

  /**
   *
   * @type {TenantUserManagementSettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  userManagement: TenantUserManagementSettingsEditDto

  /**
   *
   * @type {EmailSettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  email: EmailSettingsEditDto

  /**
   *
   * @type {LdapSettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  ldap: LdapSettingsEditDto

  /**
   *
   * @type {SecuritySettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  security: SecuritySettingsEditDto

  /**
   *
   * @type {TenantBillingSettingsEditDto}
   * @memberof TenantSettingsEditDto
   */
  billing: TenantBillingSettingsEditDto

  constructor(data?: any) {
    if (data) {
      this['general'] = data['general']
      this['userManagement'] = data['userManagement']
      this['email'] = data['email']
      this['ldap'] = data['ldap']
      this['security'] = data['security']
      this['billing'] = data['billing']
    }
  }
}

export class TenantUserManagementSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof TenantUserManagementSettingsEditDto
   */
  allowSelfRegistration: boolean

  /**
   *
   * @type {boolean}
   * @memberof TenantUserManagementSettingsEditDto
   */
  isNewRegisteredUserActiveByDefault: boolean

  /**
   *
   * @type {boolean}
   * @memberof TenantUserManagementSettingsEditDto
   */
  isEmailConfirmationRequiredForLogin: boolean

  /**
   *
   * @type {boolean}
   * @memberof TenantUserManagementSettingsEditDto
   */
  useCaptchaOnRegistration: boolean

  constructor(data?: any) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration']
      this['isNewRegisteredUserActiveByDefault'] = data['isNewRegisteredUserActiveByDefault']
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin']
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration']
    }
  }
}

export class LdapSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof LdapSettingsEditDto
   */
  isModuleEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof LdapSettingsEditDto
   */
  isEnabled: boolean

  /**
   *
   * @type {string}
   * @memberof LdapSettingsEditDto
   */
  domain: string

  /**
   *
   * @type {string}
   * @memberof LdapSettingsEditDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof LdapSettingsEditDto
   */
  password: string

  constructor(data?: any) {
    if (data) {
      this['isModuleEnabled'] = data['isModuleEnabled']
      this['isEnabled'] = data['isEnabled']
      this['domain'] = data['domain']
      this['userName'] = data['userName']
      this['password'] = data['password']
    }
  }
}

export class TenantBillingSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof TenantBillingSettingsEditDto
   */
  legalName: string

  /**
   *
   * @type {string}
   * @memberof TenantBillingSettingsEditDto
   */
  address: string

  /**
   *
   * @type {string}
   * @memberof TenantBillingSettingsEditDto
   */
  taxVatNo: string

  constructor(data?: any) {
    if (data) {
      this['legalName'] = data['legalName']
      this['address'] = data['address']
      this['taxVatNo'] = data['taxVatNo']
    }
  }
}

export class ListResultDtoTerminalPortConfigListDto {
  /**
   *
   * @type {TerminalPortConfigListDto[]}
   * @memberof ListResultDtoTerminalPortConfigListDto
   */
  items: TerminalPortConfigListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class TerminalPortConfigListDto {
  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigListDto
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigListDto
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigListDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigListDto
   */
  portType: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigListDto
   */
  terminalId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigListDto
   */
  protocolType: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['name'] = data['name']
      this['portType'] = data['portType']
      this['terminalId'] = data['terminalId']
      this['protocolType'] = data['protocolType']
      this['id'] = data['id']
    }
  }
}

export class GetTerminalPortConfigOutput {
  /**
   *
   * @type {TerminalPortConfigEditDto}
   * @memberof GetTerminalPortConfigOutput
   */
  terminalPortConfig: TerminalPortConfigEditDto

  /**
   *
   * @type {TerminalPortBindEquipmentDto[]}
   * @memberof GetTerminalPortConfigOutput
   */
  terminalPortBindEquipments: TerminalPortBindEquipmentDto[]

  constructor(data?: any) {
    if (data) {
      this['terminalPortConfig'] = data['terminalPortConfig']
      this['terminalPortBindEquipments'] = data['terminalPortBindEquipments']
    }
  }
}

export class TerminalPortConfigEditDto {
  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigEditDto
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigEditDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigEditDto
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigEditDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigEditDto
   */
  portType: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigEditDto
   */
  terminalId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigEditDto
   */
  protocolType: number

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfigEditDto
   */
  config: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfigEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['name'] = data['name']
      this['portType'] = data['portType']
      this['terminalId'] = data['terminalId']
      this['protocolType'] = data['protocolType']
      this['config'] = data['config']
      this['id'] = data['id']
    }
  }
}

export class TerminalPortBindEquipmentDto {
  /**
   *
   * @type {number}
   * @memberof TerminalPortBindEquipmentDto
   */
  equipmentId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortBindEquipmentDto
   */
  productId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortBindEquipmentDto
   */
  terminalPortConfigId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortBindEquipmentDto
   */
  terminalId: number

  /**
   *
   * @type {boolean}
   * @memberof TerminalPortBindEquipmentDto
   */
  canChanged: boolean

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['productId'] = data['productId']
      this['terminalPortConfigId'] = data['terminalPortConfigId']
      this['terminalId'] = data['terminalId']
      this['canChanged'] = data['canChanged']
    }
  }
}

export class CreateOrUpdateTerminalPortConfigInput {
  /**
   *
   * @type {CreateOrUpdateTerminalPortConfigDto}
   * @memberof CreateOrUpdateTerminalPortConfigInput
   */
  configDto: CreateOrUpdateTerminalPortConfigDto

  constructor(data?: any) {
    if (data) {
      this['configDto'] = data['configDto']
    }
  }
}

export class CreateOrUpdateTerminalPortConfigDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  portType: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  config: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  terminalId: number

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  protocolType: number

  /**
   *
   * @type {number[]}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  equipmentIds: number[]

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateTerminalPortConfigDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['portType'] = data['portType']
      this['config'] = data['config']
      this['terminalId'] = data['terminalId']
      this['protocolType'] = data['protocolType']
      this['equipmentIds'] = data['equipmentIds']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoTerminalListDto {
  /**
   *
   * @type {TerminalListDto[]}
   * @memberof ListResultDtoTerminalListDto
   */
  items: TerminalListDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class TerminalListDto {
  /**
   *
   * @type {string}
   * @memberof TerminalListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TerminalListDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof TerminalListDto
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof TerminalListDto
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof TerminalListDto
   */
  accessSecret: string

  /**
   *
   * @type {number}
   * @memberof TerminalListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['creationTime'] = data['creationTime']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['id'] = data['id']
    }
  }
}

export class GetTerminalEditOutput {
  /**
   *
   * @type {TerminalEditDto}
   * @memberof GetTerminalEditOutput
   */
  terminal: TerminalEditDto

  constructor(data?: any) {
    if (data) {
      this['terminal'] = data['terminal']
    }
  }
}

export class TerminalEditDto {
  /**
   *
   * @type {string}
   * @memberof TerminalEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TerminalEditDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof TerminalEditDto
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof TerminalEditDto
   */
  accessSecret: string

  /**
   *
   * @type {number}
   * @memberof TerminalEditDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['id'] = data['id']
    }
  }
}

export class CreateOrUpdateTerminalInput {
  /**
   *
   * @type {CreateOrUpdateTerminalDto}
   * @memberof CreateOrUpdateTerminalInput
   */
  terminal: CreateOrUpdateTerminalDto

  constructor(data?: any) {
    if (data) {
      this['terminal'] = data['terminal']
    }
  }
}

export class CreateOrUpdateTerminalDto {
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateTerminalDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateTerminalDto
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateTerminalDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['id'] = data['id']
    }
  }
}

export class ResetTerminalInput {
  /**
   *
   * @type {number}
   * @memberof ResetTerminalInput
   */
  terminalId: number

  constructor(data?: any) {
    if (data) {
      this['terminalId'] = data['terminalId']
    }
  }
}

export class AddOrUpdateTicketFolderInput {
  /**
   *
   * @type {TicketFolderDto}
   * @memberof AddOrUpdateTicketFolderInput
   */
  ticketFolder: TicketFolderDto

  constructor(data?: any) {
    if (data) {
      this['ticketFolder'] = data['ticketFolder']
    }
  }
}

export class TicketFolderDto {
  /**
   *
   * @type {string}
   * @memberof TicketFolderDto
   */
  id: string

  /**
   *
   * @type {number}
   * @memberof TicketFolderDto
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof TicketFolderDto
   */
  parentId: string

  /**
   *
   * @type {string}
   * @memberof TicketFolderDto
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof TicketFolderDto
   */
  isUpdateRiskItem: boolean

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof TicketFolderDto
   */
  riskItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['isUpdateRiskItem'] = data['isUpdateRiskItem']
      this['riskItems'] = data['riskItems']
    }
  }
}

export class ResultBoolean {
  /**
   *
   * @type {boolean}
   * @memberof ResultBoolean
   */
  value: boolean

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
    }
  }
}

export class AddOrUpdateTicketFolderRiskInfoInput {
  /**
   *
   * @type {string[]}
   * @memberof AddOrUpdateTicketFolderRiskInfoInput
   */
  ticketFolderIds: string[]

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof AddOrUpdateTicketFolderRiskInfoInput
   */
  riskItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['ticketFolderIds'] = data['ticketFolderIds']
      this['riskItems'] = data['riskItems']
    }
  }
}

export class ListResultDtoIdNameTree {
  /**
   *
   * @type {IdNameTree[]}
   * @memberof ListResultDtoIdNameTree
   */
  items: IdNameTree[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class IdNameTree {
  /**
   *
   * @type {string}
   * @memberof IdNameTree
   */
  parentId: string

  /**
   *
   * @type {number}
   * @memberof IdNameTree
   */
  stationId: number

  /**
   *
   * @type {IdNameTree[]}
   * @memberof IdNameTree
   */
  childrens: IdNameTree[]

  /**
   *
   * @type {string}
   * @memberof IdNameTree
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof IdNameTree
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId']
      this['stationId'] = data['stationId']
      this['childrens'] = data['childrens']
      this['id'] = data['id']
      this['name'] = data['name']
    }
  }
}

export class ListResultDtoGetStationTicketFolderChildrenWithTicketOutput {
  /**
   *
   * @type {GetStationTicketFolderChildrenWithTicketOutput[]}
   * @memberof ListResultDtoGetStationTicketFolderChildrenWithTicketOutput
   */
  items: GetStationTicketFolderChildrenWithTicketOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class GetStationTicketFolderChildrenWithTicketOutput {
  /**
   *
   * @type {string}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  parentId: string

  /**
   *
   * @type {number}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  stationId: number

  /**
   *
   * @type {GetStationTicketFolderChildrenWithTicketOutput[]}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  childrens: GetStationTicketFolderChildrenWithTicketOutput[]

  /**
   *
   * @type {TicketListItemDto[]}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  items: TicketListItemDto[]

  /**
   *
   * @type {string}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof GetStationTicketFolderChildrenWithTicketOutput
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId']
      this['stationId'] = data['stationId']
      this['childrens'] = data['childrens']
      this['items'] = data['items']
      this['id'] = data['id']
      this['name'] = data['name']
    }
  }
}

export class TicketListItemDto {
  /**
   *
   * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
   * @memberof TicketListItemDto
   */
  ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec'

  /**
   *
   * @type {string}
   * @memberof TicketListItemDto
   */
  writeTime: string

  /**
   *
   * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
   * @memberof TicketListItemDto
   */
  state:
    | 'None'
    | 'WaitCommit'
    | 'WaitConfirm'
    | 'ConfirmNotPassed'
    | 'WaitApprove'
    | 'ApproveNotPassed'
    | 'ReadyGo'
    | 'Executing'
    | 'Pause'
    | 'WaitApproveToCancel'
    | 'WaitApproveToBreak'
    | 'WaitApproveExtension'
    | 'ExtensionReject'
    | 'Finished'
    | 'Break'
    | 'Cancel'
    | 'WaitReadOver'
    | 'ReadOver'
    | 'Archived'

  /**
   *
   * @type {string}
   * @memberof TicketListItemDto
   */
  note: string

  /**
   *
   * @type {boolean}
   * @memberof TicketListItemDto
   */
  isLoading: boolean

  /**
   *
   * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'None'}
   * @memberof TicketListItemDto
   */
  ticketType:
    | 'Task'
    | 'CentralizedControl'
    | 'Common'
    | 'Chemistry'
    | 'SteamEnginePro'
    | 'AshSulfur'
    | 'Overhual'
    | 'Furnace'
    | 'Lockset'
    | 'History'
    | 'Typical'
    | 'RiskTicket'
    | 'None'

  /**
   *
   * @type {number}
   * @memberof TicketListItemDto
   */
  stationId: number

  /**
   *
   * @type {TicketOperatePropertyDto}
   * @memberof TicketListItemDto
   */
  ticketOperateProperty: TicketOperatePropertyDto

  /**
   *
   * @type {string}
   * @memberof TicketListItemDto
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof TicketListItemDto
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['ticketExecOrder'] = data['ticketExecOrder']
      this['writeTime'] = data['writeTime']
      this['state'] = data['state']
      this['note'] = data['note']
      this['isLoading'] = data['isLoading']
      this['ticketType'] = data['ticketType']
      this['stationId'] = data['stationId']
      this['ticketOperateProperty'] = data['ticketOperateProperty']
      this['id'] = data['id']
      this['name'] = data['name']
    }
  }
}

export class TicketOperatePropertyDto {
  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canCancel: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canEdit: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canDelete: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canView: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canExecute: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApproveToExecute: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApproveCancel: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApproveBreak: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canFinish: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApplyForBreak: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApplyForCancel: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canCommit: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketOperatePropertyDto
   */
  canApprove: boolean

  constructor(data?: any) {
    if (data) {
      this['canCancel'] = data['canCancel']
      this['canEdit'] = data['canEdit']
      this['canDelete'] = data['canDelete']
      this['canView'] = data['canView']
      this['canExecute'] = data['canExecute']
      this['canApproveToExecute'] = data['canApproveToExecute']
      this['canApproveCancel'] = data['canApproveCancel']
      this['canApproveBreak'] = data['canApproveBreak']
      this['canFinish'] = data['canFinish']
      this['canApplyForBreak'] = data['canApplyForBreak']
      this['canApplyForCancel'] = data['canApplyForCancel']
      this['canCommit'] = data['canCommit']
      this['canApprove'] = data['canApprove']
    }
  }
}

export class ListResultDtoIdName {
  /**
   *
   * @type {IdName[]}
   * @memberof ListResultDtoIdName
   */
  items: IdName[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class IdName {
  /**
   *
   * @type {string}
   * @memberof IdName
   */
  id: string

  /**
   *
   * @type {string}
   * @memberof IdName
   */
  name: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
    }
  }
}

export class GetTicketFolderOutput {
  /**
   *
   * @type {string}
   * @memberof GetTicketFolderOutput
   */
  id: string

  /**
   *
   * @type {number}
   * @memberof GetTicketFolderOutput
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof GetTicketFolderOutput
   */
  parentId: string

  /**
   *
   * @type {string}
   * @memberof GetTicketFolderOutput
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof GetTicketFolderOutput
   */
  isUpdateRiskItem: boolean

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof GetTicketFolderOutput
   */
  riskItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['isUpdateRiskItem'] = data['isUpdateRiskItem']
      this['riskItems'] = data['riskItems']
    }
  }
}

export class AssignFolderTicketsInput {
  /**
   *
   * @type {string}
   * @memberof AssignFolderTicketsInput
   */
  ticketFolderId: string

  /**
   *
   * @type {string[]}
   * @memberof AssignFolderTicketsInput
   */
  ticketTypicalIds: string[]

  constructor(data?: any) {
    if (data) {
      this['ticketFolderId'] = data['ticketFolderId']
      this['ticketTypicalIds'] = data['ticketTypicalIds']
    }
  }
}

export class ListResultDtoTicketListItemDto {
  /**
   *
   * @type {TicketListItemDto[]}
   * @memberof ListResultDtoTicketListItemDto
   */
  items: TicketListItemDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class AddOrUpdateTicketTypicalInput {
  /**
   *
   * @type {TicketTypical}
   * @memberof AddOrUpdateTicketTypicalInput
   */
  ticketTypical: TicketTypical

  /**
   *
   * @type {TicketItemTypical[]}
   * @memberof AddOrUpdateTicketTypicalInput
   */
  ticketItems: TicketItemTypical[]

  /**
   *
   * @type {RiskPrecontrolItem[]}
   * @memberof AddOrUpdateTicketTypicalInput
   */
  riskPrecontrolItems: RiskPrecontrolItem[]

  constructor(data?: any) {
    if (data) {
      this['ticketTypical'] = data['ticketTypical']
      this['ticketItems'] = data['ticketItems']
      this['riskPrecontrolItems'] = data['riskPrecontrolItems']
    }
  }
}

export class TicketTypical {
  /**
   *
   * @type {boolean}
   * @memberof TicketTypical
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  deleterUserId: number

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  ticketTaskId: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  lastModifierUserId: number

  /**
   *
   * @type {'MonitoringOperation'|'OnePersonOperation'}
   * @memberof TicketTypical
   */
  ticketOperateType: 'MonitoringOperation' | 'OnePersonOperation'

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  ticketFolderId: string

  /**
   *
   * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
   * @memberof TicketTypical
   */
  ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec'

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  taskNo: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  title: string

  /**
   *
   * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
   * @memberof TicketTypical
   */
  state:
    | 'None'
    | 'WaitCommit'
    | 'WaitConfirm'
    | 'ConfirmNotPassed'
    | 'WaitApprove'
    | 'ApproveNotPassed'
    | 'ReadyGo'
    | 'Executing'
    | 'Pause'
    | 'WaitApproveToCancel'
    | 'WaitApproveToBreak'
    | 'WaitApproveExtension'
    | 'ExtensionReject'
    | 'Finished'
    | 'Break'
    | 'Cancel'
    | 'WaitReadOver'
    | 'ReadOver'
    | 'Archived'

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  writeTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  taskBeginTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  taskEndTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  taskDeleteTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  taskName: string

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  writer: number

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  executor: number

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  committer: number

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  authenticationType: number

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  note: string

  /**
   *
   * @type {boolean}
   * @memberof TicketTypical
   */
  isNeedApprover: boolean

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  riskTicketId: string

  /**
   *
   * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'None'}
   * @memberof TicketTypical
   */
  ticketType:
    | 'Task'
    | 'CentralizedControl'
    | 'Common'
    | 'Chemistry'
    | 'SteamEnginePro'
    | 'AshSulfur'
    | 'Overhual'
    | 'Furnace'
    | 'Lockset'
    | 'History'
    | 'Typical'
    | 'RiskTicket'
    | 'None'

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  docFilePath: string

  /**
   *
   * @type {number}
   * @memberof TicketTypical
   */
  approver: number

  /**
   *
   * @type {Station}
   * @memberof TicketTypical
   */
  station: Station

  /**
   *
   * @type {TicketFolder}
   * @memberof TicketTypical
   */
  ticketFolder: TicketFolder

  /**
   *
   * @type {RiskPrecontrolTicket}
   * @memberof TicketTypical
   */
  riskPrecontrolTicket: RiskPrecontrolTicket

  /**
   *
   * @type {string}
   * @memberof TicketTypical
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['ticketTaskId'] = data['ticketTaskId']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['ticketOperateType'] = data['ticketOperateType']
      this['ticketFolderId'] = data['ticketFolderId']
      this['ticketExecOrder'] = data['ticketExecOrder']
      this['taskNo'] = data['taskNo']
      this['title'] = data['title']
      this['state'] = data['state']
      this['writeTime'] = data['writeTime']
      this['taskBeginTime'] = data['taskBeginTime']
      this['taskEndTime'] = data['taskEndTime']
      this['taskDeleteTime'] = data['taskDeleteTime']
      this['taskName'] = data['taskName']
      this['stationId'] = data['stationId']
      this['writer'] = data['writer']
      this['executor'] = data['executor']
      this['committer'] = data['committer']
      this['authenticationType'] = data['authenticationType']
      this['note'] = data['note']
      this['isNeedApprover'] = data['isNeedApprover']
      this['riskTicketId'] = data['riskTicketId']
      this['ticketType'] = data['ticketType']
      this['docFilePath'] = data['docFilePath']
      this['approver'] = data['approver']
      this['station'] = data['station']
      this['ticketFolder'] = data['ticketFolder']
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket']
      this['id'] = data['id']
    }
  }
}

export class TicketItemTypical {
  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  ticketId: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  prevFinishedItemNos: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  no: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  displayNo: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  text: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  operationTime: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  ydTime: string

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypical
   */
  finished: boolean

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypical
   */
  operateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypical
   */
  realOperateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  operateResult: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  curRfid: number

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypical
   */
  isHintItem: boolean

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  operationalTermId: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  fromState: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  toState: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypical
   */
  deviceId: number

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypical
   */
  isNeedGuardChecked: boolean

  /**
   *
   * @type {Device}
   * @memberof TicketItemTypical
   */
  device: Device

  /**
   *
   * @type {DeviceTerm}
   * @memberof TicketItemTypical
   */
  deviceTerm: DeviceTerm

  /**
   *
   * @type {string}
   * @memberof TicketItemTypical
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId']
      this['prevFinishedItemNos'] = data['prevFinishedItemNos']
      this['no'] = data['no']
      this['displayNo'] = data['displayNo']
      this['text'] = data['text']
      this['operationTime'] = data['operationTime']
      this['ydTime'] = data['ydTime']
      this['finished'] = data['finished']
      this['operateMode'] = data['operateMode']
      this['realOperateMode'] = data['realOperateMode']
      this['operateResult'] = data['operateResult']
      this['curRfid'] = data['curRfid']
      this['isHintItem'] = data['isHintItem']
      this['operationalTermId'] = data['operationalTermId']
      this['fromState'] = data['fromState']
      this['toState'] = data['toState']
      this['deviceId'] = data['deviceId']
      this['isNeedGuardChecked'] = data['isNeedGuardChecked']
      this['device'] = data['device']
      this['deviceTerm'] = data['deviceTerm']
      this['id'] = data['id']
    }
  }
}

export class Station {
  /**
   *
   * @type {string}
   * @memberof Station
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof Station
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof Station
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof Station
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof Station
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof Station
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof Station
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof Station
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof Station
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof Station
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof Station
   */
  sortId: number

  /**
   *
   * @type {number}
   * @memberof Station
   */
  stationAreaId: number

  /**
   *
   * @type {string}
   * @memberof Station
   */
  no: string

  /**
   *
   * @type {DeviceArea[]}
   * @memberof Station
   */
  deviceAreas: DeviceArea[]

  /**
   *
   * @type {Device[]}
   * @memberof Station
   */
  devices: Device[]

  /**
   *
   * @type {Equipment[]}
   * @memberof Station
   */
  equipments: Equipment[]

  /**
   *
   * @type {StationArea}
   * @memberof Station
   */
  stationArea: StationArea

  /**
   *
   * @type {number}
   * @memberof Station
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['sortId'] = data['sortId']
      this['stationAreaId'] = data['stationAreaId']
      this['no'] = data['no']
      this['deviceAreas'] = data['deviceAreas']
      this['devices'] = data['devices']
      this['equipments'] = data['equipments']
      this['stationArea'] = data['stationArea']
      this['id'] = data['id']
    }
  }
}

export class TicketFolder {
  /**
   *
   * @type {number}
   * @memberof TicketFolder
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof TicketFolder
   */
  parentId: string

  /**
   *
   * @type {string}
   * @memberof TicketFolder
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof TicketFolder
   */
  riskTicketId: string

  /**
   *
   * @type {Station}
   * @memberof TicketFolder
   */
  station: Station

  /**
   *
   * @type {RiskPrecontrolTicket}
   * @memberof TicketFolder
   */
  riskPrecontrolTicket: RiskPrecontrolTicket

  /**
   *
   * @type {TicketFolder}
   * @memberof TicketFolder
   */
  ticketFolderParent: TicketFolder

  /**
   *
   * @type {string}
   * @memberof TicketFolder
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['riskTicketId'] = data['riskTicketId']
      this['station'] = data['station']
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket']
      this['ticketFolderParent'] = data['ticketFolderParent']
      this['id'] = data['id']
    }
  }
}

export class Device {
  /**
   *
   * @type {string}
   * @memberof Device
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof Device
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof Device
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof Device
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof Device
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof Device
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof Device
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  deviceAreaId: number

  /**
   *
   * @type {string}
   * @memberof Device
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof Device
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof Device
   */
  voltage: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  type: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  sortId: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  state: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  toState: number

  /**
   *
   * @type {string}
   * @memberof Device
   */
  noWorking: string

  /**
   *
   * @type {string}
   * @memberof Device
   */
  bsLogic: string

  /**
   *
   * @type {number}
   * @memberof Device
   */
  m1: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  lockCodePropertyId: number

  /**
   *
   * @type {number}
   * @memberof Device
   */
  shapeType: number

  /**
   *
   * @type {string}
   * @memberof Device
   */
  videoUrl: string

  /**
   *
   * @type {'ImmovableLock'|'CommonLock'|'ImmovableAndCommonLock'}
   * @memberof Device
   */
  installLockType: 'ImmovableLock' | 'CommonLock' | 'ImmovableAndCommonLock'

  /**
   *
   * @type {string}
   * @memberof Device
   */
  locksetJson: string

  /**
   *
   * @type {Station}
   * @memberof Device
   */
  station: Station

  /**
   *
   * @type {LockCodeProperty}
   * @memberof Device
   */
  lockCodeProperty: LockCodeProperty

  /**
   *
   * @type {DeviceArea}
   * @memberof Device
   */
  deviceArea: DeviceArea

  /**
   *
   * @type {DeviceType}
   * @memberof Device
   */
  deviceType: DeviceType

  /**
   *
   * @type {VoltageLevel}
   * @memberof Device
   */
  voltageLevel: VoltageLevel

  /**
   *
   * @type {DeviceCodeInfo[]}
   * @memberof Device
   */
  deviceCodeInfos: DeviceCodeInfo[]

  /**
   *
   * @type {DeviceConfig[]}
   * @memberof Device
   */
  deviceConfigs: DeviceConfig[]

  /**
   *
   * @type {number}
   * @memberof Device
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['stationId'] = data['stationId']
      this['deviceAreaId'] = data['deviceAreaId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['voltage'] = data['voltage']
      this['type'] = data['type']
      this['sortId'] = data['sortId']
      this['state'] = data['state']
      this['toState'] = data['toState']
      this['noWorking'] = data['noWorking']
      this['bsLogic'] = data['bsLogic']
      this['m1'] = data['m1']
      this['lockCodePropertyId'] = data['lockCodePropertyId']
      this['shapeType'] = data['shapeType']
      this['videoUrl'] = data['videoUrl']
      this['installLockType'] = data['installLockType']
      this['locksetJson'] = data['locksetJson']
      this['station'] = data['station']
      this['lockCodeProperty'] = data['lockCodeProperty']
      this['deviceArea'] = data['deviceArea']
      this['deviceType'] = data['deviceType']
      this['voltageLevel'] = data['voltageLevel']
      this['deviceCodeInfos'] = data['deviceCodeInfos']
      this['deviceConfigs'] = data['deviceConfigs']
      this['id'] = data['id']
    }
  }
}

export class DeviceTerm {
  /**
   *
   * @type {string}
   * @memberof DeviceTerm
   */
  value: string

  /**
   *
   * @type {'Default'|'ByLinkage'|'AddBefault'|'AddAfter'|'Selectable'}
   * @memberof DeviceTerm
   */
  type: 'Default' | 'ByLinkage' | 'AddBefault' | 'AddAfter' | 'Selectable'

  /**
   *
   * @type {number}
   * @memberof DeviceTerm
   */
  deviceOperationId: number

  /**
   *
   * @type {string}
   * @memberof DeviceTerm
   */
  lockType: string

  /**
   *
   * @type {DeviceOperation}
   * @memberof DeviceTerm
   */
  deviceOperation: DeviceOperation

  /**
   *
   * @type {number}
   * @memberof DeviceTerm
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['type'] = data['type']
      this['deviceOperationId'] = data['deviceOperationId']
      this['lockType'] = data['lockType']
      this['deviceOperation'] = data['deviceOperation']
      this['id'] = data['id']
    }
  }
}

export class DeviceArea {
  /**
   *
   * @type {string}
   * @memberof DeviceArea
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof DeviceArea
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof DeviceArea
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceArea
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  parentId: number

  /**
   *
   * @type {string}
   * @memberof DeviceArea
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  sortId: number

  /**
   *
   * @type {Station}
   * @memberof DeviceArea
   */
  station: Station

  /**
   *
   * @type {DeviceArea}
   * @memberof DeviceArea
   */
  parent: DeviceArea

  /**
   *
   * @type {DeviceArea[]}
   * @memberof DeviceArea
   */
  children: DeviceArea[]

  /**
   *
   * @type {Device[]}
   * @memberof DeviceArea
   */
  devices: Device[]

  /**
   *
   * @type {number}
   * @memberof DeviceArea
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['station'] = data['station']
      this['parent'] = data['parent']
      this['children'] = data['children']
      this['devices'] = data['devices']
      this['id'] = data['id']
    }
  }
}

export class Equipment {
  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  lastModifierUserId: number

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof Equipment
   */
  accessSecret: string

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  productId: number

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  terminalId: number

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  masterEquipmentId: number

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  stationId: number

  /**
   *
   * @type {Station}
   * @memberof Equipment
   */
  station: Station

  /**
   *
   * @type {Terminal}
   * @memberof Equipment
   */
  terminal: Terminal

  /**
   *
   * @type {Product}
   * @memberof Equipment
   */
  product: Product

  /**
   *
   * @type {EquipmentProperty[]}
   * @memberof Equipment
   */
  equipmentProperties: EquipmentProperty[]

  /**
   *
   * @type {TerminalPortEquipment[]}
   * @memberof Equipment
   */
  terminalPortEquipments: TerminalPortEquipment[]

  /**
   *
   * @type {Equipment[]}
   * @memberof Equipment
   */
  subEquipments: Equipment[]

  /**
   *
   * @type {Equipment}
   * @memberof Equipment
   */
  masterEquipment: Equipment

  /**
   *
   * @type {number}
   * @memberof Equipment
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['productId'] = data['productId']
      this['terminalId'] = data['terminalId']
      this['masterEquipmentId'] = data['masterEquipmentId']
      this['stationId'] = data['stationId']
      this['station'] = data['station']
      this['terminal'] = data['terminal']
      this['product'] = data['product']
      this['equipmentProperties'] = data['equipmentProperties']
      this['terminalPortEquipments'] = data['terminalPortEquipments']
      this['subEquipments'] = data['subEquipments']
      this['masterEquipment'] = data['masterEquipment']
      this['id'] = data['id']
    }
  }
}

export class StationArea {
  /**
   *
   * @type {string}
   * @memberof StationArea
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof StationArea
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof StationArea
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof StationArea
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof StationArea
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  parentId: number

  /**
   *
   * @type {StationArea}
   * @memberof StationArea
   */
  parent: StationArea

  /**
   *
   * @type {StationArea[]}
   * @memberof StationArea
   */
  stationAreas: StationArea[]

  /**
   *
   * @type {Station[]}
   * @memberof StationArea
   */
  stations: Station[]

  /**
   *
   * @type {number}
   * @memberof StationArea
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['parentId'] = data['parentId']
      this['parent'] = data['parent']
      this['stationAreas'] = data['stationAreas']
      this['stations'] = data['stations']
      this['id'] = data['id']
    }
  }
}

export class LockCodeProperty {
  /**
   *
   * @type {string}
   * @memberof LockCodeProperty
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof LockCodeProperty
   */
  opHint1_0: string

  /**
   *
   * @type {string}
   * @memberof LockCodeProperty
   */
  opHint1_1: string

  /**
   *
   * @type {boolean}
   * @memberof LockCodeProperty
   */
  toKey: boolean

  /**
   *
   * @type {boolean}
   * @memberof LockCodeProperty
   */
  stateChange: boolean

  /**
   *
   * @type {LockCodeConfig[]}
   * @memberof LockCodeProperty
   */
  lockCodeConfigs: LockCodeConfig[]

  /**
   *
   * @type {boolean}
   * @memberof LockCodeProperty
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof LockCodeProperty
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof LockCodeProperty
   */
  deleterUserId: number

  /**
   *
   * @type {Device[]}
   * @memberof LockCodeProperty
   */
  devices: Device[]

  /**
   *
   * @type {number}
   * @memberof LockCodeProperty
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['lockCodeConfigs'] = data['lockCodeConfigs']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['devices'] = data['devices']
      this['id'] = data['id']
    }
  }
}

export class DeviceType {
  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  toPrinter: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  toKey: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  dnbsCode: string

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  graphName: string

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  codeName: string

  /**
   *
   * @type {string}
   * @memberof DeviceType
   */
  showMode: string

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  stressShow: number

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isEst: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isThermal: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isInspect: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isPprimary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isSecondary: boolean

  /**
   *
   * @type {boolean}
   * @memberof DeviceType
   */
  isOperable: boolean

  /**
   *
   * @type {DeviceState[]}
   * @memberof DeviceType
   */
  deviceStates: DeviceState[]

  /**
   *
   * @type {number}
   * @memberof DeviceType
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['toPrinter'] = data['toPrinter']
      this['toKey'] = data['toKey']
      this['dnbsCode'] = data['dnbsCode']
      this['graphName'] = data['graphName']
      this['codeName'] = data['codeName']
      this['showMode'] = data['showMode']
      this['stressShow'] = data['stressShow']
      this['isEst'] = data['isEst']
      this['isThermal'] = data['isThermal']
      this['isInspect'] = data['isInspect']
      this['isPprimary'] = data['isPprimary']
      this['isSecondary'] = data['isSecondary']
      this['isOperable'] = data['isOperable']
      this['deviceStates'] = data['deviceStates']
      this['id'] = data['id']
    }
  }
}

export class VoltageLevel {
  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof VoltageLevel
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  no: number

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  voltage: string

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  color: string

  /**
   *
   * @type {string}
   * @memberof VoltageLevel
   */
  desPronounce: string

  /**
   *
   * @type {number}
   * @memberof VoltageLevel
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['no'] = data['no']
      this['name'] = data['name']
      this['voltage'] = data['voltage']
      this['color'] = data['color']
      this['desPronounce'] = data['desPronounce']
      this['id'] = data['id']
    }
  }
}

export class DeviceCodeInfo {
  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfo
   */
  deviceId: number

  /**
   *
   * @type {Device}
   * @memberof DeviceCodeInfo
   */
  device: Device

  /**
   *
   * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
   * @memberof DeviceCodeInfo
   */
  lockCodeNumber:
    | 'Um1'
    | 'Um2'
    | 'Um3'
    | 'Um4'
    | 'Um5'
    | 'Um6'
    | 'Um7'
    | 'Um8'
    | 'Um9'
    | 'Um10'
    | 'Um11'
    | 'Um12'
    | 'Um13'
    | 'Um14'
    | 'Um15'
    | 'Um16'
    | 'Um17'
    | 'Um18'

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfo
   */
  code: string

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfo
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfo
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof DeviceCodeInfo
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfo
   */
  lastModifierUserId: number

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfo
   */
  lockCodeConfigId: number

  /**
   *
   * @type {LockCodeConfig}
   * @memberof DeviceCodeInfo
   */
  lockCodeConfig: LockCodeConfig

  /**
   *
   * @type {number}
   * @memberof DeviceCodeInfo
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId']
      this['device'] = data['device']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['code'] = data['code']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['lockCodeConfigId'] = data['lockCodeConfigId']
      this['lockCodeConfig'] = data['lockCodeConfig']
      this['id'] = data['id']
    }
  }
}

export class DeviceConfig {
  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof DeviceConfig
   */
  value: string

  /**
   *
   * @type {number}
   * @memberof DeviceConfig
   */
  deviceId: number

  /**
   *
   * @type {Device}
   * @memberof DeviceConfig
   */
  device: Device

  /**
   *
   * @type {number}
   * @memberof DeviceConfig
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
      this['deviceId'] = data['deviceId']
      this['device'] = data['device']
      this['id'] = data['id']
    }
  }
}

export class DeviceOperation {
  /**
   *
   * @type {string}
   * @memberof DeviceOperation
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperation
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof DeviceOperation
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceOperation
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperation
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  voltageLevelId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  deviceTypeId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  fromDeviceStateId: number

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  toDeviceStateId: number

  /**
   *
   * @type {string}
   * @memberof DeviceOperation
   */
  boardDesc: string

  /**
   *
   * @type {DeviceType}
   * @memberof DeviceOperation
   */
  deviceType: DeviceType

  /**
   *
   * @type {VoltageLevel}
   * @memberof DeviceOperation
   */
  voltageLevel: VoltageLevel

  /**
   *
   * @type {Station}
   * @memberof DeviceOperation
   */
  station: Station

  /**
   *
   * @type {DeviceTerm[]}
   * @memberof DeviceOperation
   */
  deviceTerms: DeviceTerm[]

  /**
   *
   * @type {DeviceState}
   * @memberof DeviceOperation
   */
  fromDeviceState: DeviceState

  /**
   *
   * @type {DeviceState}
   * @memberof DeviceOperation
   */
  toDeviceState: DeviceState

  /**
   *
   * @type {number}
   * @memberof DeviceOperation
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['stationId'] = data['stationId']
      this['voltageLevelId'] = data['voltageLevelId']
      this['deviceTypeId'] = data['deviceTypeId']
      this['fromDeviceStateId'] = data['fromDeviceStateId']
      this['toDeviceStateId'] = data['toDeviceStateId']
      this['boardDesc'] = data['boardDesc']
      this['deviceType'] = data['deviceType']
      this['voltageLevel'] = data['voltageLevel']
      this['station'] = data['station']
      this['deviceTerms'] = data['deviceTerms']
      this['fromDeviceState'] = data['fromDeviceState']
      this['toDeviceState'] = data['toDeviceState']
      this['id'] = data['id']
    }
  }
}

export class Terminal {
  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof Terminal
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof Terminal
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof Terminal
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof Terminal
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof Terminal
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  accessKey: string

  /**
   *
   * @type {string}
   * @memberof Terminal
   */
  accessSecret: string

  /**
   *
   * @type {Equipment[]}
   * @memberof Terminal
   */
  equipments: Equipment[]

  /**
   *
   * @type {number}
   * @memberof Terminal
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['equipments'] = data['equipments']
      this['id'] = data['id']
    }
  }
}

export class Product {
  /**
   *
   * @type {string}
   * @memberof Product
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof Product
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof Product
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof Product
   */
  lastModifierUserId: number

  /**
   *
   * @type {boolean}
   * @memberof Product
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof Product
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof Product
   */
  deleterUserId: number

  /**
   *
   * @type {string}
   * @memberof Product
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof Product
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof Product
   */
  model: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof Product
   */
  type: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {ProductProperty[]}
   * @memberof Product
   */
  productProperties: ProductProperty[]

  /**
   *
   * @type {Equipment[]}
   * @memberof Product
   */
  equipments: Equipment[]

  /**
   *
   * @type {number}
   * @memberof Product
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['name'] = data['name']
      this['description'] = data['description']
      this['model'] = data['model']
      this['type'] = data['type']
      this['productProperties'] = data['productProperties']
      this['equipments'] = data['equipments']
      this['id'] = data['id']
    }
  }
}

export class EquipmentProperty {
  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  description: string

  /**
   *
   * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
   * @memberof EquipmentProperty
   */
  type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment'

  /**
   *
   * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
   * @memberof EquipmentProperty
   */
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  equipmentId: number

  /**
   *
   * @type {Equipment}
   * @memberof EquipmentProperty
   */
  equipment: Equipment

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  state: number

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  productPropertyId: number

  /**
   *
   * @type {ProductProperty}
   * @memberof EquipmentProperty
   */
  productProperty: ProductProperty

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  deviceId: number

  /**
   *
   * @type {Device}
   * @memberof EquipmentProperty
   */
  device: Device

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  config: string

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  operation: string

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  sortIndex: number

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof EquipmentProperty
   */
  unit: string

  /**
   *
   * @type {EquipmentPropertyLog[]}
   * @memberof EquipmentProperty
   */
  equipmentPropertyLogs: EquipmentPropertyLog[]

  /**
   *
   * @type {EquipmentPropertyConfig[]}
   * @memberof EquipmentProperty
   */
  equipmentPropertyConfigs: EquipmentPropertyConfig[]

  /**
   *
   * @type {number}
   * @memberof EquipmentProperty
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['description'] = data['description']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['equipmentId'] = data['equipmentId']
      this['equipment'] = data['equipment']
      this['state'] = data['state']
      this['productPropertyId'] = data['productPropertyId']
      this['productProperty'] = data['productProperty']
      this['deviceId'] = data['deviceId']
      this['device'] = data['device']
      this['config'] = data['config']
      this['operation'] = data['operation']
      this['sortIndex'] = data['sortIndex']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['equipmentPropertyLogs'] = data['equipmentPropertyLogs']
      this['equipmentPropertyConfigs'] = data['equipmentPropertyConfigs']
      this['id'] = data['id']
    }
  }
}

export class TerminalPortEquipment {
  /**
   *
   * @type {string}
   * @memberof TerminalPortEquipment
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof TerminalPortEquipment
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortEquipment
   */
  terminalPortConfigId: number

  /**
   *
   * @type {number}
   * @memberof TerminalPortEquipment
   */
  equipmentId: number

  /**
   *
   * @type {Equipment}
   * @memberof TerminalPortEquipment
   */
  equipment: Equipment

  /**
   *
   * @type {TerminalPortConfig}
   * @memberof TerminalPortEquipment
   */
  terminalPortConfig: TerminalPortConfig

  /**
   *
   * @type {number}
   * @memberof TerminalPortEquipment
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime']
      this['creationTime'] = data['creationTime']
      this['terminalPortConfigId'] = data['terminalPortConfigId']
      this['equipmentId'] = data['equipmentId']
      this['equipment'] = data['equipment']
      this['terminalPortConfig'] = data['terminalPortConfig']
      this['id'] = data['id']
    }
  }
}

export class LockCodeConfig {
  /**
   *
   * @type {'JXLock'|'DBMLock'|'DKLock'|'DXDKLock'|'GSNYD'|'WYYD'|'YYYD'|'CJFKLock'|'FKSDBMLock'|'ZNLock'|'ZNYB'|'YYDWZJC'|'WYDWZJC'|'JXDBMLock'|'DBMLock_2H'|'DBMLock_3H'|'XJLock'|'WX_DBMLock'|'WX_JXLock'|'WX_GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'ZNHWMLock'|'GSN2E'|'GSN2YD'|'WX_WZSZNMLock'|'WX_DZBQ'|'WX_BSJXLock'|'TBLock'|'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'ZNSXLock'|'GYJLYDQ'|'LGLock_6A'|'WTJGLock'|'DKHLock'|'NoKey'}
   * @memberof LockCodeConfig
   */
  lockType:
    | 'JXLock'
    | 'DBMLock'
    | 'DKLock'
    | 'DXDKLock'
    | 'GSNYD'
    | 'WYYD'
    | 'YYYD'
    | 'CJFKLock'
    | 'FKSDBMLock'
    | 'ZNLock'
    | 'ZNYB'
    | 'YYDWZJC'
    | 'WYDWZJC'
    | 'JXDBMLock'
    | 'DBMLock_2H'
    | 'DBMLock_3H'
    | 'XJLock'
    | 'WX_DBMLock'
    | 'WX_JXLock'
    | 'WX_GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'ZNHWMLock'
    | 'GSN2E'
    | 'GSN2YD'
    | 'WX_WZSZNMLock'
    | 'WX_DZBQ'
    | 'WX_BSJXLock'
    | 'TBLock'
    | 'XHJGLock'
    | 'SLGLock'
    | 'LTLock'
    | 'BSQLock'
    | 'BSLock'
    | 'CXLock'
    | 'FDHLock'
    | 'PMLock'
    | 'LGLock'
    | 'FHMLock'
    | 'YKLock'
    | 'ZNSXLock'
    | 'GYJLYDQ'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'NoKey'

  /**
   *
   * @type {'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'HWGMLock'|'WX_JXLock'|'WX_DBMLock'|'GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'WX_SKJXLock'|'GSN2YD'|'XJLock'|'JM_GSN2YD'|'GLDBP'|'GLWYBS'|'LSGLGLock'|'WX_WZSZNMLock'|'LGLock_6A'|'WTJGLock'|'DKHLock'|'NoKey'}
   * @memberof LockCodeConfig
   */
  lockPropertyType:
    | 'XHJGLock'
    | 'SLGLock'
    | 'LTLock'
    | 'BSQLock'
    | 'BSLock'
    | 'CXLock'
    | 'FDHLock'
    | 'PMLock'
    | 'LGLock'
    | 'FHMLock'
    | 'YKLock'
    | 'HWGMLock'
    | 'WX_JXLock'
    | 'WX_DBMLock'
    | 'GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'WX_SKJXLock'
    | 'GSN2YD'
    | 'XJLock'
    | 'JM_GSN2YD'
    | 'GLDBP'
    | 'GLWYBS'
    | 'LSGLGLock'
    | 'WX_WZSZNMLock'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'NoKey'

  /**
   *
   * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
   * @memberof LockCodeConfig
   */
  lockCodeNumber:
    | 'Um1'
    | 'Um2'
    | 'Um3'
    | 'Um4'
    | 'Um5'
    | 'Um6'
    | 'Um7'
    | 'Um8'
    | 'Um9'
    | 'Um10'
    | 'Um11'
    | 'Um12'
    | 'Um13'
    | 'Um14'
    | 'Um15'
    | 'Um16'
    | 'Um17'
    | 'Um18'

  /**
   *
   * @type {number}
   * @memberof LockCodeConfig
   */
  lockCodePropertyId: number

  /**
   *
   * @type {LockCodeProperty}
   * @memberof LockCodeConfig
   */
  lockCodeProperty: LockCodeProperty

  /**
   *
   * @type {DeviceCodeInfo[]}
   * @memberof LockCodeConfig
   */
  deviceCodeInfos: DeviceCodeInfo[]

  /**
   *
   * @type {number}
   * @memberof LockCodeConfig
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType']
      this['lockPropertyType'] = data['lockPropertyType']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['lockCodePropertyId'] = data['lockCodePropertyId']
      this['lockCodeProperty'] = data['lockCodeProperty']
      this['deviceCodeInfos'] = data['deviceCodeInfos']
      this['id'] = data['id']
    }
  }
}

export class DeviceState {
  /**
   *
   * @type {boolean}
   * @memberof DeviceState
   */
  isDeleted: boolean

  /**
   *
   * @type {string}
   * @memberof DeviceState
   */
  deletionTime: string

  /**
   *
   * @type {number}
   * @memberof DeviceState
   */
  deleterUserId: number

  /**
   *
   * @type {number}
   * @memberof DeviceState
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof DeviceState
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof DeviceState
   */
  state: number

  /**
   *
   * @type {number}
   * @memberof DeviceState
   */
  deviceTypeId: number

  /**
   *
   * @type {DeviceType}
   * @memberof DeviceState
   */
  deviceType: DeviceType

  /**
   *
   * @type {number}
   * @memberof DeviceState
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['isDeleted'] = data['isDeleted']
      this['deletionTime'] = data['deletionTime']
      this['deleterUserId'] = data['deleterUserId']
      this['tenantId'] = data['tenantId']
      this['name'] = data['name']
      this['state'] = data['state']
      this['deviceTypeId'] = data['deviceTypeId']
      this['deviceType'] = data['deviceType']
      this['id'] = data['id']
    }
  }
}

export class ProductProperty {
  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  value: string

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  description: string

  /**
   *
   * @type {number}
   * @memberof ProductProperty
   */
  productId: number

  /**
   *
   * @type {number}
   * @memberof ProductProperty
   */
  sortIndex: number

  /**
   *
   * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
   * @memberof ProductProperty
   */
  type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment'

  /**
   *
   * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
   * @memberof ProductProperty
   */
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'

  /**
   *
   * @type {number}
   * @memberof ProductProperty
   */
  factor: number

  /**
   *
   * @type {string}
   * @memberof ProductProperty
   */
  unit: string

  /**
   *
   * @type {Product}
   * @memberof ProductProperty
   */
  product: Product

  /**
   *
   * @type {ProductPropertyBatch}
   * @memberof ProductProperty
   */
  productPropertyBatch: ProductPropertyBatch

  /**
   *
   * @type {EquipmentProperty[]}
   * @memberof ProductProperty
   */
  equipmentProperties: EquipmentProperty[]

  /**
   *
   * @type {number}
   * @memberof ProductProperty
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['description'] = data['description']
      this['productId'] = data['productId']
      this['sortIndex'] = data['sortIndex']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['factor'] = data['factor']
      this['unit'] = data['unit']
      this['product'] = data['product']
      this['productPropertyBatch'] = data['productPropertyBatch']
      this['equipmentProperties'] = data['equipmentProperties']
      this['id'] = data['id']
    }
  }
}

export class EquipmentPropertyLog {
  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  creatorUserId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  operatorId1: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  operatorId2: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  operation: string

  /**
   *
   * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'}
   * @memberof EquipmentPropertyLog
   */
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  operatorId3: number

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  operatorId4: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  logDate1: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  logDate2: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  logDate3: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  logDate4: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyLog
   */
  approvers: string

  /**
   *
   * @type {EquipmentProperty}
   * @memberof EquipmentPropertyLog
   */
  equipmentProperty: EquipmentProperty

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyLog
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['tenantId'] = data['tenantId']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['operatorId1'] = data['operatorId1']
      this['operatorId2'] = data['operatorId2']
      this['operation'] = data['operation']
      this['productType'] = data['productType']
      this['stationId'] = data['stationId']
      this['operatorId3'] = data['operatorId3']
      this['operatorId4'] = data['operatorId4']
      this['logDate1'] = data['logDate1']
      this['logDate2'] = data['logDate2']
      this['logDate3'] = data['logDate3']
      this['logDate4'] = data['logDate4']
      this['approvers'] = data['approvers']
      this['equipmentProperty'] = data['equipmentProperty']
      this['id'] = data['id']
    }
  }
}

export class EquipmentPropertyConfig {
  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  lastModificationTime: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfig
   */
  value: string

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyConfig
   */
  equipmentPropertyId: number

  /**
   *
   * @type {EquipmentProperty}
   * @memberof EquipmentPropertyConfig
   */
  equipmentProperty: EquipmentProperty

  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyConfig
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['equipmentProperty'] = data['equipmentProperty']
      this['id'] = data['id']
    }
  }
}

export class TerminalPortConfig {
  /**
   *
   * @type {string}
   * @memberof TerminalPortConfig
   */
  creationTime: string

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfig
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfig
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfig
   */
  name: string

  /**
   *
   * @type {'TcpClient'|'TcpServer'|'ComPort'}
   * @memberof TerminalPortConfig
   */
  portType: 'TcpClient' | 'TcpServer' | 'ComPort'

  /**
   *
   * @type {string}
   * @memberof TerminalPortConfig
   */
  config: string

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfig
   */
  terminalId: number

  /**
   *
   * @type {'WireCabinetProtocol'|'KeySurpervisorProtocol'|'Iec104Protocol'|'JsqProtocol'}
   * @memberof TerminalPortConfig
   */
  protocolType: 'WireCabinetProtocol' | 'KeySurpervisorProtocol' | 'Iec104Protocol' | 'JsqProtocol'

  /**
   *
   * @type {Terminal}
   * @memberof TerminalPortConfig
   */
  terminal: Terminal

  /**
   *
   * @type {TerminalPortEquipment[]}
   * @memberof TerminalPortConfig
   */
  terminalPortEquipments: TerminalPortEquipment[]

  /**
   *
   * @type {number}
   * @memberof TerminalPortConfig
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['name'] = data['name']
      this['portType'] = data['portType']
      this['config'] = data['config']
      this['terminalId'] = data['terminalId']
      this['protocolType'] = data['protocolType']
      this['terminal'] = data['terminal']
      this['terminalPortEquipments'] = data['terminalPortEquipments']
      this['id'] = data['id']
    }
  }
}

export class ProductPropertyBatch {
  /**
   *
   * @type {string}
   * @memberof ProductPropertyBatch
   */
  prefix: string

  /**
   *
   * @type {string}
   * @memberof ProductPropertyBatch
   */
  suffix: string

  /**
   *
   * @type {number}
   * @memberof ProductPropertyBatch
   */
  startNum: number

  /**
   *
   * @type {number}
   * @memberof ProductPropertyBatch
   */
  step: number

  /**
   *
   * @type {ProductProperty}
   * @memberof ProductPropertyBatch
   */
  productProperty: ProductProperty

  /**
   *
   * @type {number}
   * @memberof ProductPropertyBatch
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['prefix'] = data['prefix']
      this['suffix'] = data['suffix']
      this['startNum'] = data['startNum']
      this['step'] = data['step']
      this['productProperty'] = data['productProperty']
      this['id'] = data['id']
    }
  }
}

export class PagedResultDtoTicketListItemDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoTicketListItemDto
   */
  totalCount: number

  /**
   *
   * @type {TicketListItemDto[]}
   * @memberof PagedResultDtoTicketListItemDto
   */
  items: TicketListItemDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class ListResultDtoTicketItemTypicalDto {
  /**
   *
   * @type {TicketItemTypicalDto[]}
   * @memberof ListResultDtoTicketItemTypicalDto
   */
  items: TicketItemTypicalDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class TicketItemTypicalDto {
  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  deviceName: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  deviceDescription: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  curRfid: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  deviceId: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  displayNo: string

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalDto
   */
  finished: boolean

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  fromState: number

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalDto
   */
  isHintItem: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalDto
   */
  isNeedGuardChecked: boolean

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  no: number

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypicalDto
   */
  operateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  operateResult: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  operationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  operationalTermId: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  prevFinishedItemNos: string

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypicalDto
   */
  realOperateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  text: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  ticketId: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalDto
   */
  toState: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  ydTime: string

  /**
   *
   * @type {Device}
   * @memberof TicketItemTypicalDto
   */
  device: Device

  /**
   *
   * @type {DeviceTerm}
   * @memberof TicketItemTypicalDto
   */
  deviceTerm: DeviceTerm

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalDto
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['deviceName'] = data['deviceName']
      this['deviceDescription'] = data['deviceDescription']
      this['curRfid'] = data['curRfid']
      this['deviceId'] = data['deviceId']
      this['displayNo'] = data['displayNo']
      this['finished'] = data['finished']
      this['fromState'] = data['fromState']
      this['isHintItem'] = data['isHintItem']
      this['isNeedGuardChecked'] = data['isNeedGuardChecked']
      this['no'] = data['no']
      this['operateMode'] = data['operateMode']
      this['operateResult'] = data['operateResult']
      this['operationTime'] = data['operationTime']
      this['operationalTermId'] = data['operationalTermId']
      this['prevFinishedItemNos'] = data['prevFinishedItemNos']
      this['realOperateMode'] = data['realOperateMode']
      this['text'] = data['text']
      this['ticketId'] = data['ticketId']
      this['toState'] = data['toState']
      this['ydTime'] = data['ydTime']
      this['device'] = data['device']
      this['deviceTerm'] = data['deviceTerm']
      this['id'] = data['id']
    }
  }
}

export class AddOrUpdateCommitInput {
  /**
   *
   * @type {string}
   * @memberof AddOrUpdateCommitInput
   */
  ticketTypicalInvlidId: string

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalInvlidId'] = data['ticketTypicalInvlidId']
    }
  }
}

export class AddOrUpdateApproveInput {
  /**
   *
   * @type {string}
   * @memberof AddOrUpdateApproveInput
   */
  ticketTypicalInvalidId: string

  /**
   *
   * @type {boolean}
   * @memberof AddOrUpdateApproveInput
   */
  isPass: boolean

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalInvalidId'] = data['ticketTypicalInvalidId']
      this['isPass'] = data['isPass']
    }
  }
}

export class ListResultDtoGetTicketTypicalInvalidsOutput {
  /**
   *
   * @type {GetTicketTypicalInvalidsOutput[]}
   * @memberof ListResultDtoGetTicketTypicalInvalidsOutput
   */
  items: GetTicketTypicalInvalidsOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class GetTicketTypicalInvalidsOutput {
  /**
   *
   * @type {string}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  ticketId: string

  /**
   *
   * @type {string}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  taskName: string

  /**
   *
   * @type {string}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  stateName: string

  /**
   *
   * @type {string}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  ticketForderName: string

  /**
   *
   * @type {string}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  ticketTypicalId: string

  /**
   *
   * @type {boolean}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  canEdit: boolean

  /**
   *
   * @type {boolean}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  canCommit: boolean

  /**
   *
   * @type {boolean}
   * @memberof GetTicketTypicalInvalidsOutput
   */
  canApprove: boolean

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId']
      this['taskName'] = data['taskName']
      this['stateName'] = data['stateName']
      this['ticketForderName'] = data['ticketForderName']
      this['ticketTypicalId'] = data['ticketTypicalId']
      this['canEdit'] = data['canEdit']
      this['canCommit'] = data['canCommit']
      this['canApprove'] = data['canApprove']
    }
  }
}

export class TicketTypicalInvalid {
  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  ticketTypicalId: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  ticketTaskId: string

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  approver: number

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  authenticationType: number

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  committer: number

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  creatorUserId: number

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  docFilePath: string

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  executor: number

  /**
   *
   * @type {boolean}
   * @memberof TicketTypicalInvalid
   */
  isNeedApprover: boolean

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  lastModifierUserId: number

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  note: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  riskTicketId: string

  /**
   *
   * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
   * @memberof TicketTypicalInvalid
   */
  state:
    | 'None'
    | 'WaitCommit'
    | 'WaitConfirm'
    | 'ConfirmNotPassed'
    | 'WaitApprove'
    | 'ApproveNotPassed'
    | 'ReadyGo'
    | 'Executing'
    | 'Pause'
    | 'WaitApproveToCancel'
    | 'WaitApproveToBreak'
    | 'WaitApproveExtension'
    | 'ExtensionReject'
    | 'Finished'
    | 'Break'
    | 'Cancel'
    | 'WaitReadOver'
    | 'ReadOver'
    | 'Archived'

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  taskBeginTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  taskDeleteTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  taskEndTime: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  taskName: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  taskNo: string

  /**
   *
   * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
   * @memberof TicketTypicalInvalid
   */
  ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec'

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  ticketFolderId: string

  /**
   *
   * @type {'MonitoringOperation'|'OnePersonOperation'}
   * @memberof TicketTypicalInvalid
   */
  ticketOperateType: 'MonitoringOperation' | 'OnePersonOperation'

  /**
   *
   * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'None'}
   * @memberof TicketTypicalInvalid
   */
  ticketType:
    | 'Task'
    | 'CentralizedControl'
    | 'Common'
    | 'Chemistry'
    | 'SteamEnginePro'
    | 'AshSulfur'
    | 'Overhual'
    | 'Furnace'
    | 'Lockset'
    | 'History'
    | 'Typical'
    | 'RiskTicket'
    | 'None'

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  title: string

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  writeTime: string

  /**
   *
   * @type {number}
   * @memberof TicketTypicalInvalid
   */
  writer: number

  /**
   *
   * @type {RiskPrecontrolTicket}
   * @memberof TicketTypicalInvalid
   */
  riskPrecontrolTicket: RiskPrecontrolTicket

  /**
   *
   * @type {Station}
   * @memberof TicketTypicalInvalid
   */
  station: Station

  /**
   *
   * @type {TicketFolder}
   * @memberof TicketTypicalInvalid
   */
  ticketFolder: TicketFolder

  /**
   *
   * @type {string}
   * @memberof TicketTypicalInvalid
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalId'] = data['ticketTypicalId']
      this['ticketTaskId'] = data['ticketTaskId']
      this['approver'] = data['approver']
      this['authenticationType'] = data['authenticationType']
      this['committer'] = data['committer']
      this['creationTime'] = data['creationTime']
      this['creatorUserId'] = data['creatorUserId']
      this['docFilePath'] = data['docFilePath']
      this['executor'] = data['executor']
      this['isNeedApprover'] = data['isNeedApprover']
      this['lastModificationTime'] = data['lastModificationTime']
      this['lastModifierUserId'] = data['lastModifierUserId']
      this['note'] = data['note']
      this['riskTicketId'] = data['riskTicketId']
      this['state'] = data['state']
      this['stationId'] = data['stationId']
      this['taskBeginTime'] = data['taskBeginTime']
      this['taskDeleteTime'] = data['taskDeleteTime']
      this['taskEndTime'] = data['taskEndTime']
      this['taskName'] = data['taskName']
      this['taskNo'] = data['taskNo']
      this['ticketExecOrder'] = data['ticketExecOrder']
      this['ticketFolderId'] = data['ticketFolderId']
      this['ticketOperateType'] = data['ticketOperateType']
      this['ticketType'] = data['ticketType']
      this['title'] = data['title']
      this['writeTime'] = data['writeTime']
      this['writer'] = data['writer']
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket']
      this['station'] = data['station']
      this['ticketFolder'] = data['ticketFolder']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoTicketItemTypicalInvalid {
  /**
   *
   * @type {TicketItemTypicalInvalid[]}
   * @memberof ListResultDtoTicketItemTypicalInvalid
   */
  items: TicketItemTypicalInvalid[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class TicketItemTypicalInvalid {
  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  curRfid: number

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  deviceId: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  displayNo: string

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalInvalid
   */
  finished: boolean

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  fromState: number

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalInvalid
   */
  isHintItem: boolean

  /**
   *
   * @type {boolean}
   * @memberof TicketItemTypicalInvalid
   */
  isNeedGuardChecked: boolean

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  no: number

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypicalInvalid
   */
  operateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  operateResult: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  operationTime: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  operationalTermId: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  prevFinishedItemNos: string

  /**
   *
   * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
   * @memberof TicketItemTypicalInvalid
   */
  realOperateMode:
    | 'Normal'
    | 'HintTip'
    | 'NoOperate'
    | 'FinishedAfterConfirmed'
    | 'FinishedAfterBreak'
    | 'HandOnPlacard'
    | 'DismantlePlacard'
    | 'TemporaryDismantle'
    | 'Remote'
    | 'Repeat'
    | 'Skip'
    | 'Delete'
    | 'Reset'
    | 'Error'

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  text: string

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  ticketId: string

  /**
   *
   * @type {number}
   * @memberof TicketItemTypicalInvalid
   */
  toState: number

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  ydTime: string

  /**
   *
   * @type {Device}
   * @memberof TicketItemTypicalInvalid
   */
  device: Device

  /**
   *
   * @type {DeviceTerm}
   * @memberof TicketItemTypicalInvalid
   */
  deviceTerm: DeviceTerm

  /**
   *
   * @type {string}
   * @memberof TicketItemTypicalInvalid
   */
  id: string

  constructor(data?: any) {
    if (data) {
      this['curRfid'] = data['curRfid']
      this['deviceId'] = data['deviceId']
      this['displayNo'] = data['displayNo']
      this['finished'] = data['finished']
      this['fromState'] = data['fromState']
      this['isHintItem'] = data['isHintItem']
      this['isNeedGuardChecked'] = data['isNeedGuardChecked']
      this['no'] = data['no']
      this['operateMode'] = data['operateMode']
      this['operateResult'] = data['operateResult']
      this['operationTime'] = data['operationTime']
      this['operationalTermId'] = data['operationalTermId']
      this['prevFinishedItemNos'] = data['prevFinishedItemNos']
      this['realOperateMode'] = data['realOperateMode']
      this['text'] = data['text']
      this['ticketId'] = data['ticketId']
      this['toState'] = data['toState']
      this['ydTime'] = data['ydTime']
      this['device'] = data['device']
      this['deviceTerm'] = data['deviceTerm']
      this['id'] = data['id']
    }
  }
}

export class AssignTicketItemInput {
  /**
   *
   * @type {string}
   * @memberof AssignTicketItemInput
   */
  ticketTypicalId: string

  /**
   *
   * @type {TicketItemTypical[]}
   * @memberof AssignTicketItemInput
   */
  ticketItemTypicals: TicketItemTypical[]

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalId'] = data['ticketTypicalId']
      this['ticketItemTypicals'] = data['ticketItemTypicals']
    }
  }
}

export class CreateTicketCurrentInput {
  /**
   *
   * @type {string}
   * @memberof CreateTicketCurrentInput
   */
  ticketTemplateId: string

  /**
   *
   * @type {boolean}
   * @memberof CreateTicketCurrentInput
   */
  isAnalyseDeviceName: boolean

  constructor(data?: any) {
    if (data) {
      this['ticketTemplateId'] = data['ticketTemplateId']
      this['isAnalyseDeviceName'] = data['isAnalyseDeviceName']
    }
  }
}

export class ListResultDtoNameValueDto {
  /**
   *
   * @type {NameValueDto[]}
   * @memberof ListResultDtoNameValueDto
   */
  items: NameValueDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class AuthenticateModel {
  /**
   *
   * @type {string}
   * @memberof AuthenticateModel
   */
  userNameOrEmailAddress: string

  /**
   *
   * @type {string}
   * @memberof AuthenticateModel
   */
  password: string

  /**
   *
   * @type {string}
   * @memberof AuthenticateModel
   */
  twoFactorVerificationCode: string

  /**
   *
   * @type {boolean}
   * @memberof AuthenticateModel
   */
  rememberClient: boolean

  /**
   *
   * @type {string}
   * @memberof AuthenticateModel
   */
  twoFactorRememberClientToken: string

  /**
   *
   * @type {boolean}
   * @memberof AuthenticateModel
   */
  singleSignIn: boolean

  /**
   *
   * @type {string}
   * @memberof AuthenticateModel
   */
  returnUrl: string

  constructor(data?: any) {
    if (data) {
      this['userNameOrEmailAddress'] = data['userNameOrEmailAddress']
      this['password'] = data['password']
      this['twoFactorVerificationCode'] = data['twoFactorVerificationCode']
      this['rememberClient'] = data['rememberClient']
      this['twoFactorRememberClientToken'] = data['twoFactorRememberClientToken']
      this['singleSignIn'] = data['singleSignIn']
      this['returnUrl'] = data['returnUrl']
    }
  }
}

export class AuthenticateResultModel {
  /**
   *
   * @type {string}
   * @memberof AuthenticateResultModel
   */
  accessToken: string

  /**
   *
   * @type {string}
   * @memberof AuthenticateResultModel
   */
  encryptedAccessToken: string

  /**
   *
   * @type {number}
   * @memberof AuthenticateResultModel
   */
  expireInSeconds: number

  /**
   *
   * @type {boolean}
   * @memberof AuthenticateResultModel
   */
  shouldResetPassword: boolean

  /**
   *
   * @type {string}
   * @memberof AuthenticateResultModel
   */
  passwordResetCode: string

  /**
   *
   * @type {number}
   * @memberof AuthenticateResultModel
   */
  userId: number

  /**
   *
   * @type {boolean}
   * @memberof AuthenticateResultModel
   */
  requiresTwoFactorVerification: boolean

  /**
   *
   * @type {string[]}
   * @memberof AuthenticateResultModel
   */
  twoFactorAuthProviders: string[]

  /**
   *
   * @type {string}
   * @memberof AuthenticateResultModel
   */
  twoFactorRememberClientToken: string

  /**
   *
   * @type {string}
   * @memberof AuthenticateResultModel
   */
  returnUrl: string

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
      this['shouldResetPassword'] = data['shouldResetPassword']
      this['passwordResetCode'] = data['passwordResetCode']
      this['userId'] = data['userId']
      this['requiresTwoFactorVerification'] = data['requiresTwoFactorVerification']
      this['twoFactorAuthProviders'] = data['twoFactorAuthProviders']
      this['twoFactorRememberClientToken'] = data['twoFactorRememberClientToken']
      this['returnUrl'] = data['returnUrl']
    }
  }
}

export class SendTwoFactorAuthCodeModel {
  /**
   *
   * @type {number}
   * @memberof SendTwoFactorAuthCodeModel
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof SendTwoFactorAuthCodeModel
   */
  provider: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['provider'] = data['provider']
    }
  }
}

export class ImpersonatedAuthenticateResultModel {
  /**
   *
   * @type {string}
   * @memberof ImpersonatedAuthenticateResultModel
   */
  accessToken: string

  /**
   *
   * @type {string}
   * @memberof ImpersonatedAuthenticateResultModel
   */
  encryptedAccessToken: string

  /**
   *
   * @type {number}
   * @memberof ImpersonatedAuthenticateResultModel
   */
  expireInSeconds: number

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
    }
  }
}

export class SwitchedAccountAuthenticateResultModel {
  /**
   *
   * @type {string}
   * @memberof SwitchedAccountAuthenticateResultModel
   */
  accessToken: string

  /**
   *
   * @type {string}
   * @memberof SwitchedAccountAuthenticateResultModel
   */
  encryptedAccessToken: string

  /**
   *
   * @type {number}
   * @memberof SwitchedAccountAuthenticateResultModel
   */
  expireInSeconds: number

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
    }
  }
}

export class ExternalLoginProviderInfoModel {
  /**
   *
   * @type {string}
   * @memberof ExternalLoginProviderInfoModel
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof ExternalLoginProviderInfoModel
   */
  clientId: string

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['clientId'] = data['clientId']
    }
  }
}

export class ExternalAuthenticateModel {
  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateModel
   */
  authProvider: string

  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateModel
   */
  providerKey: string

  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateModel
   */
  providerAccessCode: string

  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateModel
   */
  returnUrl: string

  /**
   *
   * @type {boolean}
   * @memberof ExternalAuthenticateModel
   */
  singleSignIn: boolean

  constructor(data?: any) {
    if (data) {
      this['authProvider'] = data['authProvider']
      this['providerKey'] = data['providerKey']
      this['providerAccessCode'] = data['providerAccessCode']
      this['returnUrl'] = data['returnUrl']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

export class ExternalAuthenticateResultModel {
  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateResultModel
   */
  accessToken: string

  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateResultModel
   */
  encryptedAccessToken: string

  /**
   *
   * @type {number}
   * @memberof ExternalAuthenticateResultModel
   */
  expireInSeconds: number

  /**
   *
   * @type {boolean}
   * @memberof ExternalAuthenticateResultModel
   */
  waitingForActivation: boolean

  /**
   *
   * @type {string}
   * @memberof ExternalAuthenticateResultModel
   */
  returnUrl: string

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
      this['waitingForActivation'] = data['waitingForActivation']
      this['returnUrl'] = data['returnUrl']
    }
  }
}

export class SecurityAuthenticateModel {
  /**
   *
   * @type {string}
   * @memberof SecurityAuthenticateModel
   */
  authProvider: string

  /**
   *
   * @type {string}
   * @memberof SecurityAuthenticateModel
   */
  providerKey: string

  /**
   *
   * @type {boolean}
   * @memberof SecurityAuthenticateModel
   */
  singleSignIn: boolean

  constructor(data?: any) {
    if (data) {
      this['authProvider'] = data['authProvider']
      this['providerKey'] = data['providerKey']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

export class SecurityAuthenticateResultModel {
  /**
   *
   * @type {string}
   * @memberof SecurityAuthenticateResultModel
   */
  accessToken: string

  /**
   *
   * @type {string}
   * @memberof SecurityAuthenticateResultModel
   */
  encryptedAccessToken: string

  /**
   *
   * @type {number}
   * @memberof SecurityAuthenticateResultModel
   */
  expireInSeconds: number

  /**
   *
   * @type {boolean}
   * @memberof SecurityAuthenticateResultModel
   */
  waitingForActivation: boolean

  /**
   *
   * @type {number}
   * @memberof SecurityAuthenticateResultModel
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
      this['waitingForActivation'] = data['waitingForActivation']
      this['userId'] = data['userId']
    }
  }
}

export class UiCustomizationSettingsEditDto {
  /**
   *
   * @type {UiCustomizationLayoutSettingsEditDto}
   * @memberof UiCustomizationSettingsEditDto
   */
  layout: UiCustomizationLayoutSettingsEditDto

  /**
   *
   * @type {UiCustomizationHeaderSettingsEditDto}
   * @memberof UiCustomizationSettingsEditDto
   */
  header: UiCustomizationHeaderSettingsEditDto

  /**
   *
   * @type {UiCustomizationMenuSettingsEditDto}
   * @memberof UiCustomizationSettingsEditDto
   */
  menu: UiCustomizationMenuSettingsEditDto

  /**
   *
   * @type {UiCustomizationFooterSettingsEditDto}
   * @memberof UiCustomizationSettingsEditDto
   */
  footer: UiCustomizationFooterSettingsEditDto

  constructor(data?: any) {
    if (data) {
      this['layout'] = data['layout']
      this['header'] = data['header']
      this['menu'] = data['menu']
      this['footer'] = data['footer']
    }
  }
}

export class UiCustomizationLayoutSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof UiCustomizationLayoutSettingsEditDto
   */
  layoutType: string

  /**
   *
   * @type {string}
   * @memberof UiCustomizationLayoutSettingsEditDto
   */
  contentSkin: string

  constructor(data?: any) {
    if (data) {
      this['layoutType'] = data['layoutType']
      this['contentSkin'] = data['contentSkin']
    }
  }
}

export class UiCustomizationHeaderSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  desktopFixedHeader: boolean

  /**
   *
   * @type {string}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  desktopMinimizeMode: string

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  mobileFixedHeader: boolean

  /**
   *
   * @type {string}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  dropdownSkinDesktop: string

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  displaySubmenuArrowDesktop: boolean

  /**
   *
   * @type {string}
   * @memberof UiCustomizationHeaderSettingsEditDto
   */
  dropdownSkin: string

  constructor(data?: any) {
    if (data) {
      this['desktopFixedHeader'] = data['desktopFixedHeader']
      this['desktopMinimizeMode'] = data['desktopMinimizeMode']
      this['mobileFixedHeader'] = data['mobileFixedHeader']
      this['dropdownSkinDesktop'] = data['dropdownSkinDesktop']
      this['displaySubmenuArrowDesktop'] = data['displaySubmenuArrowDesktop']
      this['dropdownSkin'] = data['dropdownSkin']
    }
  }
}

export class UiCustomizationMenuSettingsEditDto {
  /**
   *
   * @type {string}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  position: string

  /**
   *
   * @type {string}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  asideSkin: string

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  fixedAside: boolean

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  allowAsideMinimizing: boolean

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  defaultMinimizedAside: boolean

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  allowAsideHiding: boolean

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  defaultHiddenAside: boolean

  /**
   *
   * @type {string}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  submenuToggle: string

  /**
   *
   * @type {string}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  dropdownSubmenuSkin: string

  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationMenuSettingsEditDto
   */
  dropdownSubmenuArrow: boolean

  constructor(data?: any) {
    if (data) {
      this['position'] = data['position']
      this['asideSkin'] = data['asideSkin']
      this['fixedAside'] = data['fixedAside']
      this['allowAsideMinimizing'] = data['allowAsideMinimizing']
      this['defaultMinimizedAside'] = data['defaultMinimizedAside']
      this['allowAsideHiding'] = data['allowAsideHiding']
      this['defaultHiddenAside'] = data['defaultHiddenAside']
      this['submenuToggle'] = data['submenuToggle']
      this['dropdownSubmenuSkin'] = data['dropdownSubmenuSkin']
      this['dropdownSubmenuArrow'] = data['dropdownSubmenuArrow']
    }
  }
}

export class UiCustomizationFooterSettingsEditDto {
  /**
   *
   * @type {boolean}
   * @memberof UiCustomizationFooterSettingsEditDto
   */
  fixedFooter: boolean

  constructor(data?: any) {
    if (data) {
      this['fixedFooter'] = data['fixedFooter']
    }
  }
}

export class PagedResultDtoUserListDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoUserListDto
   */
  totalCount: number

  /**
   *
   * @type {UserListDto[]}
   * @memberof PagedResultDtoUserListDto
   */
  items: UserListDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class UserListDto {
  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  phoneNumber: string

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  profilePictureId: string

  /**
   *
   * @type {boolean}
   * @memberof UserListDto
   */
  isEmailConfirmed: boolean

  /**
   *
   * @type {UserListRoleDto[]}
   * @memberof UserListDto
   */
  roles: UserListRoleDto[]

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  lastLoginTime: string

  /**
   *
   * @type {boolean}
   * @memberof UserListDto
   */
  isActive: boolean

  /**
   *
   * @type {string}
   * @memberof UserListDto
   */
  creationTime: string

  /**
   *
   * @type {number}
   * @memberof UserListDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['phoneNumber'] = data['phoneNumber']
      this['profilePictureId'] = data['profilePictureId']
      this['isEmailConfirmed'] = data['isEmailConfirmed']
      this['roles'] = data['roles']
      this['lastLoginTime'] = data['lastLoginTime']
      this['isActive'] = data['isActive']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

export class UserListRoleDto {
  /**
   *
   * @type {number}
   * @memberof UserListRoleDto
   */
  roleId: number

  /**
   *
   * @type {string}
   * @memberof UserListRoleDto
   */
  roleName: string

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId']
      this['roleName'] = data['roleName']
    }
  }
}

export class GetUserForEditOutput {
  /**
   *
   * @type {string}
   * @memberof GetUserForEditOutput
   */
  profilePictureId: string

  /**
   *
   * @type {UserEditDto}
   * @memberof GetUserForEditOutput
   */
  user: UserEditDto

  /**
   *
   * @type {UserRoleDto[]}
   * @memberof GetUserForEditOutput
   */
  roles: UserRoleDto[]

  /**
   *
   * @type {OrganizationUnitDto[]}
   * @memberof GetUserForEditOutput
   */
  allOrganizationUnits: OrganizationUnitDto[]

  /**
   *
   * @type {string[]}
   * @memberof GetUserForEditOutput
   */
  memberedOrganizationUnits: string[]

  constructor(data?: any) {
    if (data) {
      this['profilePictureId'] = data['profilePictureId']
      this['user'] = data['user']
      this['roles'] = data['roles']
      this['allOrganizationUnits'] = data['allOrganizationUnits']
      this['memberedOrganizationUnits'] = data['memberedOrganizationUnits']
    }
  }
}

export class UserEditDto {
  /**
   *
   * @type {number}
   * @memberof UserEditDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  userName: string

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  emailAddress: string

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  phoneNumber: string

  /**
   *
   * @type {string}
   * @memberof UserEditDto
   */
  password: string

  /**
   *
   * @type {boolean}
   * @memberof UserEditDto
   */
  isActive: boolean

  /**
   *
   * @type {boolean}
   * @memberof UserEditDto
   */
  shouldChangePasswordOnNextLogin: boolean

  /**
   *
   * @type {boolean}
   * @memberof UserEditDto
   */
  isTwoFactorEnabled: boolean

  /**
   *
   * @type {boolean}
   * @memberof UserEditDto
   */
  isLockoutEnabled: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['emailAddress'] = data['emailAddress']
      this['phoneNumber'] = data['phoneNumber']
      this['password'] = data['password']
      this['isActive'] = data['isActive']
      this['shouldChangePasswordOnNextLogin'] = data['shouldChangePasswordOnNextLogin']
      this['isTwoFactorEnabled'] = data['isTwoFactorEnabled']
      this['isLockoutEnabled'] = data['isLockoutEnabled']
    }
  }
}

export class UserRoleDto {
  /**
   *
   * @type {number}
   * @memberof UserRoleDto
   */
  roleId: number

  /**
   *
   * @type {string}
   * @memberof UserRoleDto
   */
  roleName: string

  /**
   *
   * @type {string}
   * @memberof UserRoleDto
   */
  roleDisplayName: string

  /**
   *
   * @type {boolean}
   * @memberof UserRoleDto
   */
  isAssigned: boolean

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId']
      this['roleName'] = data['roleName']
      this['roleDisplayName'] = data['roleDisplayName']
      this['isAssigned'] = data['isAssigned']
    }
  }
}

export class GetUserPermissionsForEditOutput {
  /**
   *
   * @type {FlatPermissionDto[]}
   * @memberof GetUserPermissionsForEditOutput
   */
  permissions: FlatPermissionDto[]

  /**
   *
   * @type {string[]}
   * @memberof GetUserPermissionsForEditOutput
   */
  grantedPermissionNames: string[]

  constructor(data?: any) {
    if (data) {
      this['permissions'] = data['permissions']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

export class EntityDtoInt64 {
  /**
   *
   * @type {number}
   * @memberof EntityDtoInt64
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

export class UpdateUserPermissionsInput {
  /**
   *
   * @type {number}
   * @memberof UpdateUserPermissionsInput
   */
  id: number

  /**
   *
   * @type {string[]}
   * @memberof UpdateUserPermissionsInput
   */
  grantedPermissionNames: string[]

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

export class CreateOrUpdateUserInput {
  /**
   *
   * @type {UserEditDto}
   * @memberof CreateOrUpdateUserInput
   */
  user: UserEditDto

  /**
   *
   * @type {string[]}
   * @memberof CreateOrUpdateUserInput
   */
  assignedRoleNames: string[]

  /**
   *
   * @type {boolean}
   * @memberof CreateOrUpdateUserInput
   */
  sendActivationEmail: boolean

  /**
   *
   * @type {boolean}
   * @memberof CreateOrUpdateUserInput
   */
  setRandomPassword: boolean

  /**
   *
   * @type {number[]}
   * @memberof CreateOrUpdateUserInput
   */
  organizationUnits: number[]

  constructor(data?: any) {
    if (data) {
      this['user'] = data['user']
      this['assignedRoleNames'] = data['assignedRoleNames']
      this['sendActivationEmail'] = data['sendActivationEmail']
      this['setRandomPassword'] = data['setRandomPassword']
      this['organizationUnits'] = data['organizationUnits']
    }
  }
}

export class UserListForLoginDto {
  /**
   *
   * @type {string}
   * @memberof UserListForLoginDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof UserListForLoginDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof UserListForLoginDto
   */
  userName: string

  /**
   *
   * @type {number}
   * @memberof UserListForLoginDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['id'] = data['id']
    }
  }
}

export class LinkToUserInput {
  /**
   *
   * @type {string}
   * @memberof LinkToUserInput
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof LinkToUserInput
   */
  usernameOrEmailAddress: string

  /**
   *
   * @type {string}
   * @memberof LinkToUserInput
   */
  password: string

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['usernameOrEmailAddress'] = data['usernameOrEmailAddress']
      this['password'] = data['password']
    }
  }
}

export class PagedResultDtoLinkedUserDto {
  /**
   *
   * @type {number}
   * @memberof PagedResultDtoLinkedUserDto
   */
  totalCount: number

  /**
   *
   * @type {LinkedUserDto[]}
   * @memberof PagedResultDtoLinkedUserDto
   */
  items: LinkedUserDto[]

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

export class LinkedUserDto {
  /**
   *
   * @type {number}
   * @memberof LinkedUserDto
   */
  tenantId: number

  /**
   *
   * @type {string}
   * @memberof LinkedUserDto
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof LinkedUserDto
   */
  username: string

  /**
   *
   * @type {string}
   * @memberof LinkedUserDto
   */
  lastLoginTime: string

  /**
   *
   * @type {number}
   * @memberof LinkedUserDto
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['tenancyName'] = data['tenancyName']
      this['username'] = data['username']
      this['lastLoginTime'] = data['lastLoginTime']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoLinkedUserDto {
  /**
   *
   * @type {LinkedUserDto[]}
   * @memberof ListResultDtoLinkedUserDto
   */
  items: LinkedUserDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class UnlinkUserInput {
  /**
   *
   * @type {number}
   * @memberof UnlinkUserInput
   */
  tenantId: number

  /**
   *
   * @type {number}
   * @memberof UnlinkUserInput
   */
  userId: number

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

export class ListResultDtoUserLoginAttemptDto {
  /**
   *
   * @type {UserLoginAttemptDto[]}
   * @memberof ListResultDtoUserLoginAttemptDto
   */
  items: UserLoginAttemptDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class UserLoginAttemptDto {
  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  tenancyName: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  userNameOrEmail: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  clientIpAddress: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  clientName: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  browserInfo: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  result: string

  /**
   *
   * @type {string}
   * @memberof UserLoginAttemptDto
   */
  creationTime: string

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['userNameOrEmail'] = data['userNameOrEmail']
      this['clientIpAddress'] = data['clientIpAddress']
      this['clientName'] = data['clientName']
      this['browserInfo'] = data['browserInfo']
      this['result'] = data['result']
      this['creationTime'] = data['creationTime']
    }
  }
}

export class GetNfcCurrentUserLoginOutput {
  /**
   *
   * @type {UserLoginDto}
   * @memberof GetNfcCurrentUserLoginOutput
   */
  userLogin: UserLoginDto

  constructor(data?: any) {
    if (data) {
      this['userLogin'] = data['userLogin']
    }
  }
}

export class UserLoginDto {
  /**
   *
   * @type {string}
   * @memberof UserLoginDto
   */
  key: string

  constructor(data?: any) {
    if (data) {
      this['key'] = data['key']
    }
  }
}

export class CreateOrUpdateNfcUserLoginInput {
  /**
   *
   * @type {number}
   * @memberof CreateOrUpdateNfcUserLoginInput
   */
  userId: number

  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateNfcUserLoginInput
   */
  key: string

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId']
      this['key'] = data['key']
    }
  }
}

export class GetLatestWebLogsOutput {
  /**
   *
   * @type {string[]}
   * @memberof GetLatestWebLogsOutput
   */
  latestWebLogLines: string[]

  constructor(data?: any) {
    if (data) {
      this['latestWebLogLines'] = data['latestWebLogLines']
    }
  }
}

export class WireCabinetApplyInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetApplyInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof WireCabinetApplyInput
   */
  applicantId: number

  /**
   *
   * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'}
   * @memberof WireCabinetApplyInput
   */
  applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason'

  /**
   *
   * @type {string}
   * @memberof WireCabinetApplyInput
   */
  applyReasonNote: string

  /**
   *
   * @type {number}
   * @memberof WireCabinetApplyInput
   */
  approverId: number

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['applicantId'] = data['applicantId']
      this['applyReason'] = data['applyReason']
      this['applyReasonNote'] = data['applyReasonNote']
      this['approverId'] = data['approverId']
    }
  }
}

export class WireCabinetApproveInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetApproveInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {number}
   * @memberof WireCabinetApproveInput
   */
  approverId: number

  /**
   *
   * @type {boolean}
   * @memberof WireCabinetApproveInput
   */
  isApprovePass: boolean

  /**
   *
   * @type {string}
   * @memberof WireCabinetApproveInput
   */
  approveNote: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['approverId'] = data['approverId']
      this['isApprovePass'] = data['isApprovePass']
      this['approveNote'] = data['approveNote']
    }
  }
}

export class WireCabinetUnlockInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetUnlockInput
   */
  equipmentPropertyId: number

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

export class WireCabinetUnlockOutput {
  /**
   *
   * @type {string}
   * @memberof WireCabinetUnlockOutput
   */
  unlockCode: string

  constructor(data?: any) {
    if (data) {
      this['unlockCode'] = data['unlockCode']
    }
  }
}

export class WireCabinetHookInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetHookInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetHookInput
   */
  hookPosition: string

  /**
   *
   * @type {string[]}
   * @memberof WireCabinetHookInput
   */
  photoIds: string[]

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['hookPosition'] = data['hookPosition']
      this['photoIds'] = data['photoIds']
    }
  }
}

export class WireCabinetHook2Input {
  /**
   *
   * @type {number}
   * @memberof WireCabinetHook2Input
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string[]}
   * @memberof WireCabinetHook2Input
   */
  photoIds: string[]

  /**
   *
   * @type {number}
   * @memberof WireCabinetHook2Input
   */
  deviceId: number

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['photoIds'] = data['photoIds']
      this['deviceId'] = data['deviceId']
    }
  }
}

export class WireCabinetUnHookInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetUnHookInput
   */
  equipmentPropertyId: number

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

export class WireCabinetUpdateTaskInput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetUpdateTaskInput
   */
  equipmentId: number

  /**
   *
   * @type {WireCabinetStatusDto[]}
   * @memberof WireCabinetUpdateTaskInput
   */
  status: WireCabinetStatusDto[]

  /**
   *
   * @type {string}
   * @memberof WireCabinetUpdateTaskInput
   */
  bluetooth: string

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['status'] = data['status']
      this['bluetooth'] = data['bluetooth']
    }
  }
}

export class WireCabinetStatusDto {
  /**
   *
   * @type {number}
   * @memberof WireCabinetStatusDto
   */
  buckleNo: number

  /**
   *
   * @type {'Unkown'|'Lock'|'UnlockAndTake'|'UnlockNotTake'}
   * @memberof WireCabinetStatusDto
   */
  buckleStatus: 'Unkown' | 'Lock' | 'UnlockAndTake' | 'UnlockNotTake'

  constructor(data?: any) {
    if (data) {
      this['buckleNo'] = data['buckleNo']
      this['buckleStatus'] = data['buckleStatus']
    }
  }
}

export class WireCabinetValueTextDto {
  /**
   *
   * @type {number}
   * @memberof WireCabinetValueTextDto
   */
  value: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetValueTextDto
   */
  text: string

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value']
      this['text'] = data['text']
    }
  }
}

export class WireCabinetTaskOutput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetTaskOutput
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  equipmentName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  equipmentPropertyName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  equipmentPropertyDisplayName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  equipmentPropertyValue: string

  /**
   *
   * @type {number}
   * @memberof WireCabinetTaskOutput
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applicantName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  approverName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applyReasonEnumName: string

  /**
   *
   * @type {number}
   * @memberof WireCabinetTaskOutput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {boolean}
   * @memberof WireCabinetTaskOutput
   */
  isNeedApprove: boolean

  /**
   *
   * @type {boolean}
   * @memberof WireCabinetTaskOutput
   */
  isApproverCanUnlockDirectly: boolean

  /**
   *
   * @type {'Online'|'Bluetooth'|'Password'}
   * @memberof WireCabinetTaskOutput
   */
  unlockMode: 'Online' | 'Bluetooth' | 'Password'

  /**
   *
   * @type {'LockerDoor'|'LockerBuckle'}
   * @memberof WireCabinetTaskOutput
   */
  lockMode: 'LockerDoor' | 'LockerBuckle'

  /**
   *
   * @type {'None'|'ErrorCode'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'}
   * @memberof WireCabinetTaskOutput
   */
  taskStep:
    | 'None'
    | 'ErrorCode'
    | 'Applying'
    | 'ApprovalPassed'
    | 'ApprovalNotPassed'
    | 'Unlocked'
    | 'TimeOut'
    | 'TakenOut'
    | 'Hooked'
    | 'Unhooked'
    | 'Returned'
    | 'Ended'

  /**
   *
   * @type {number}
   * @memberof WireCabinetTaskOutput
   */
  applicantId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applyTime: string

  /**
   *
   * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'}
   * @memberof WireCabinetTaskOutput
   */
  applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason'

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applyReasonNote: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applyReasonPhotoId: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  applyReasonVoiceId: string

  /**
   *
   * @type {number}
   * @memberof WireCabinetTaskOutput
   */
  approverId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  approveTime: string

  /**
   *
   * @type {boolean}
   * @memberof WireCabinetTaskOutput
   */
  isApprovePass: boolean

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  approveNote: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  unlockTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  unlockCode: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  unlockTimeoutTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  takenTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  hookTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  hookPosition: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  hookPhotoId: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  unhookTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  unhookPhotoId: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  returnTime: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetTaskOutput
   */
  returnPhotoId: string

  /**
   *
   * @type {'UnlockByTicket'|'UnlockByCard'|'UnlockByKey'|'UnlockByTest'|'UnlockByBorrow'}
   * @memberof WireCabinetTaskOutput
   */
  takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow'

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['equipmentName'] = data['equipmentName']
      this['equipmentPropertyName'] = data['equipmentPropertyName']
      this['equipmentPropertyDisplayName'] = data['equipmentPropertyDisplayName']
      this['equipmentPropertyValue'] = data['equipmentPropertyValue']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['applicantName'] = data['applicantName']
      this['approverName'] = data['approverName']
      this['applyReasonEnumName'] = data['applyReasonEnumName']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['isNeedApprove'] = data['isNeedApprove']
      this['isApproverCanUnlockDirectly'] = data['isApproverCanUnlockDirectly']
      this['unlockMode'] = data['unlockMode']
      this['lockMode'] = data['lockMode']
      this['taskStep'] = data['taskStep']
      this['applicantId'] = data['applicantId']
      this['applyTime'] = data['applyTime']
      this['applyReason'] = data['applyReason']
      this['applyReasonNote'] = data['applyReasonNote']
      this['applyReasonPhotoId'] = data['applyReasonPhotoId']
      this['applyReasonVoiceId'] = data['applyReasonVoiceId']
      this['approverId'] = data['approverId']
      this['approveTime'] = data['approveTime']
      this['isApprovePass'] = data['isApprovePass']
      this['approveNote'] = data['approveNote']
      this['unlockTime'] = data['unlockTime']
      this['unlockCode'] = data['unlockCode']
      this['unlockTimeoutTime'] = data['unlockTimeoutTime']
      this['takenTime'] = data['takenTime']
      this['hookTime'] = data['hookTime']
      this['hookPosition'] = data['hookPosition']
      this['hookPhotoId'] = data['hookPhotoId']
      this['unhookTime'] = data['unhookTime']
      this['unhookPhotoId'] = data['unhookPhotoId']
      this['returnTime'] = data['returnTime']
      this['returnPhotoId'] = data['returnPhotoId']
      this['takeReason'] = data['takeReason']
    }
  }
}

export class ListResultDtoWireCabinetOperatorDto {
  /**
   *
   * @type {WireCabinetOperatorDto[]}
   * @memberof ListResultDtoWireCabinetOperatorDto
   */
  items: WireCabinetOperatorDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class WireCabinetOperatorDto {
  /**
   *
   * @type {number}
   * @memberof WireCabinetOperatorDto
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetOperatorDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetOperatorDto
   */
  surname: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetOperatorDto
   */
  userName: string

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
    }
  }
}

export class UpdateOperateTimeInput {
  /**
   *
   * @type {string}
   * @memberof UpdateOperateTimeInput
   */
  bluetooth: string

  /**
   *
   * @type {WireOperateRecordDto[]}
   * @memberof UpdateOperateTimeInput
   */
  wireOperateTimeDtos: WireOperateRecordDto[]

  constructor(data?: any) {
    if (data) {
      this['bluetooth'] = data['bluetooth']
      this['wireOperateTimeDtos'] = data['wireOperateTimeDtos']
    }
  }
}

export class WireOperateRecordDto {
  /**
   *
   * @type {string}
   * @memberof WireOperateRecordDto
   */
  buckleNo: string

  /**
   *
   * @type {string}
   * @memberof WireOperateRecordDto
   */
  operationTime: string

  /**
   *
   * @type {'UnlockByTicket'|'UnlockByCard'|'UnlockByKey'|'UnlockByTest'|'UnlockByBorrow'}
   * @memberof WireOperateRecordDto
   */
  takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow'

  /**
   *
   * @type {'TakeOut'|'Return'}
   * @memberof WireOperateRecordDto
   */
  markBit: 'TakeOut' | 'Return'

  constructor(data?: any) {
    if (data) {
      this['buckleNo'] = data['buckleNo']
      this['operationTime'] = data['operationTime']
      this['takeReason'] = data['takeReason']
      this['markBit'] = data['markBit']
    }
  }
}

export class WireDetailOutput {
  /**
   *
   * @type {number}
   * @memberof WireDetailOutput
   */
  id: number

  /**
   *
   * @type {string}
   * @memberof WireDetailOutput
   */
  createTime: string

  /**
   *
   * @type {string}
   * @memberof WireDetailOutput
   */
  lastModificationTime: string

  /**
   *
   * @type {number}
   * @memberof WireDetailOutput
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof WireDetailOutput
   */
  equipmentName: string

  /**
   *
   * @type {number}
   * @memberof WireDetailOutput
   */
  buckleNumber: number

  /**
   *
   * @type {string}
   * @memberof WireDetailOutput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof WireDetailOutput
   */
  description: string

  /**
   *
   * @type {'None'|'ErrorCode'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'}
   * @memberof WireDetailOutput
   */
  taskStep:
    | 'None'
    | 'ErrorCode'
    | 'Applying'
    | 'ApprovalPassed'
    | 'ApprovalNotPassed'
    | 'Unlocked'
    | 'TimeOut'
    | 'TakenOut'
    | 'Hooked'
    | 'Unhooked'
    | 'Returned'
    | 'Ended'

  /**
   *
   * @type {boolean}
   * @memberof WireDetailOutput
   */
  isExternal: boolean

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id']
      this['createTime'] = data['createTime']
      this['lastModificationTime'] = data['lastModificationTime']
      this['equipmentId'] = data['equipmentId']
      this['equipmentName'] = data['equipmentName']
      this['buckleNumber'] = data['buckleNumber']
      this['name'] = data['name']
      this['description'] = data['description']
      this['taskStep'] = data['taskStep']
      this['isExternal'] = data['isExternal']
    }
  }
}

export class ListResultDtoUploadFileOutput {
  /**
   *
   * @type {UploadFileOutput[]}
   * @memberof ListResultDtoUploadFileOutput
   */
  items: UploadFileOutput[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class WireCabinetOutput {
  /**
   *
   * @type {number}
   * @memberof WireCabinetOutput
   */
  wireCabinetId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetOutput
   */
  name: string

  /**
   *
   * @type {number}
   * @memberof WireCabinetOutput
   */
  stationId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetOutput
   */
  stationName: string

  /**
   *
   * @type {string}
   * @memberof WireCabinetOutput
   */
  description: string

  /**
   *
   * @type {WireDetailDto[]}
   * @memberof WireCabinetOutput
   */
  wireDetailDtos: WireDetailDto[]

  constructor(data?: any) {
    if (data) {
      this['wireCabinetId'] = data['wireCabinetId']
      this['name'] = data['name']
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['description'] = data['description']
      this['wireDetailDtos'] = data['wireDetailDtos']
    }
  }
}

export class WireDetailDto {
  /**
   *
   * @type {number}
   * @memberof WireDetailDto
   */
  wireId: number

  /**
   *
   * @type {number}
   * @memberof WireDetailDto
   */
  buckleNumber: number

  /**
   *
   * @type {string}
   * @memberof WireDetailDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof WireDetailDto
   */
  description: string

  /**
   *
   * @type {'None'|'ErrorCode'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'}
   * @memberof WireDetailDto
   */
  taskStep:
    | 'None'
    | 'ErrorCode'
    | 'Applying'
    | 'ApprovalPassed'
    | 'ApprovalNotPassed'
    | 'Unlocked'
    | 'TimeOut'
    | 'TakenOut'
    | 'Hooked'
    | 'Unhooked'
    | 'Returned'
    | 'Ended'

  /**
   *
   * @type {boolean}
   * @memberof WireDetailDto
   */
  isExternal: boolean

  /**
   *
   * @type {string[]}
   * @memberof WireDetailDto
   */
  photoIds: string[]

  /**
   *
   * @type {WireConfigDto[]}
   * @memberof WireDetailDto
   */
  wireConfigs: WireConfigDto[]

  constructor(data?: any) {
    if (data) {
      this['wireId'] = data['wireId']
      this['buckleNumber'] = data['buckleNumber']
      this['name'] = data['name']
      this['description'] = data['description']
      this['taskStep'] = data['taskStep']
      this['isExternal'] = data['isExternal']
      this['photoIds'] = data['photoIds']
      this['wireConfigs'] = data['wireConfigs']
    }
  }
}

export class WireConfigDto {
  /**
   *
   * @type {number}
   * @memberof WireConfigDto
   */
  wireConfigId: number

  /**
   *
   * @type {string}
   * @memberof WireConfigDto
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof WireConfigDto
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof WireConfigDto
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof WireConfigDto
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['wireConfigId'] = data['wireConfigId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}

export class EquipmentPropertyConfigInput {
  /**
   *
   * @type {number}
   * @memberof EquipmentPropertyConfigInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfigInput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfigInput
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfigInput
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof EquipmentPropertyConfigInput
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}

export class WirePileOutput {
  /**
   *
   * @type {string}
   * @memberof WirePileOutput
   */
  name: string

  /**
   *
   * @type {boolean}
   * @memberof WirePileOutput
   */
  hasBind: boolean

  /**
   *
   * @type {number}
   * @memberof WirePileOutput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string}
   * @memberof WirePileOutput
   */
  equipmentPropertyName: string

  /**
   *
   * @type {number}
   * @memberof WirePileOutput
   */
  stationId: number

  /**
   *
   * @type {number}
   * @memberof WirePileOutput
   */
  id: number

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name']
      this['hasBind'] = data['hasBind']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['equipmentPropertyName'] = data['equipmentPropertyName']
      this['stationId'] = data['stationId']
      this['id'] = data['id']
    }
  }
}

export class ListResultDtoWireBeTakenDto {
  /**
   *
   * @type {WireBeTakenDto[]}
   * @memberof ListResultDtoWireBeTakenDto
   */
  items: WireBeTakenDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class WireBeTakenDto {
  /**
   *
   * @type {number}
   * @memberof WireBeTakenDto
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string}
   * @memberof WireBeTakenDto
   */
  displayName: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['displayName'] = data['displayName']
    }
  }
}

export class ListResultDtoWireCabinetBluetoothDto {
  /**
   *
   * @type {WireCabinetBluetoothDto[]}
   * @memberof ListResultDtoWireCabinetBluetoothDto
   */
  items: WireCabinetBluetoothDto[]

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

export class WireCabinetBluetoothDto {
  /**
   *
   * @type {number}
   * @memberof WireCabinetBluetoothDto
   */
  equipmentId: number

  /**
   *
   * @type {string}
   * @memberof WireCabinetBluetoothDto
   */
  bluetooth: string

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['bluetooth'] = data['bluetooth']
    }
  }
}

export class CheckWireConfigInput {
  /**
   *
   * @type {number}
   * @memberof CheckWireConfigInput
   */
  equipmentPropertyId: number

  /**
   *
   * @type {string}
   * @memberof CheckWireConfigInput
   */
  name: string

  /**
   *
   * @type {string}
   * @memberof CheckWireConfigInput
   */
  displayName: string

  /**
   *
   * @type {string}
   * @memberof CheckWireConfigInput
   */
  description: string

  /**
   *
   * @type {string}
   * @memberof CheckWireConfigInput
   */
  value: string

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}
