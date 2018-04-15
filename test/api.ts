import axios from 'axios'
export interface IRequestOptions {
  headers?: any;
}

export class AccountService {
  isTenantAvailable(parameters: { input?: IsTenantAvailableInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/IsTenantAvailable'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  register(parameters: { input?: RegisterInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/Register'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendPasswordResetCode(parameters: { input?: SendPasswordResetCodeInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SendPasswordResetCode'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  resetPassword(parameters: { input?: ResetPasswordInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/ResetPassword'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendEmailActivationLink(parameters: { input?: SendEmailActivationLinkInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SendEmailActivationLink'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  activateEmail(parameters: { input?: ActivateEmailInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/ActivateEmail'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  impersonate(parameters: { input?: ImpersonateInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/Impersonate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  backToImpersonator(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/BackToImpersonator'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }

  switchToLinkedAccount(parameters: { input?: SwitchToLinkedAccountInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Account/SwitchToLinkedAccount'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class AuditLogService {
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
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/AuditLog/GetAuditLogs'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

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
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/AuditLog/GetAuditLogsToExcel'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class CachingService {
  getAllCaches(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/GetAllCaches'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  clearCache(parameters: { input?: EntityDto<string> }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/ClearCache'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  clearAllCaches(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Caching/ClearAllCaches'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class ChatService {
  getUserChatFriendsWithSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/GetUserChatFriendsWithSettings'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getUserChatMessages(
    parameters: { tenantId?: number, userId: number, minMessageId?: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/GetUserChatMessages'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  markAllUnreadMessagesOfUserAsRead(
    parameters: { input?: MarkAllUnreadMessagesOfUserAsReadInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class CommonLookupService {
  getEditionsForCombobox(parameters: { onlyFreeItems: boolean }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetEditionsForCombobox'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  findUsers(parameters: { input?: FindUsersInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/FindUsers'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getDefaultEditionName(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDefaultEditionName'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getDeviceTypesForCombobox(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getStationsForCombobox(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetStationsForCombobox'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getVoltageLevelsForCombobox(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getDeviceStateForCombox(parameters: { deviceTypeId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/CommonLookup/GetDeviceStateForCombox'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DemoUiComponentsService {
  sendAndGetDate(parameters: { date?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendAndGetDateTime(parameters: { date?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDateTime'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendAndGetDateRange(parameters: { startDate?: string, endDate?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetDateRange'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getCountries(parameters: { searchTerm?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/GetCountries'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendAndGetSelectedCountries(parameters: { selectedCountries?: NameValue<string> }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendAndGetValue(parameters: { input?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DemoUiComponents/SendAndGetValue'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceService {
  getDevices(
    parameters: { name?: string, deviceAreaId: number, skipCount: number, maxResultCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/GetDevices'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getDeviceForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/GetDeviceForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateDevice(parameters: { input?: CreateOrUpdateDeviceInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/CreateOrUpdateDevice'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteDevice(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/DeleteDevice'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  queryDeviceStates(parameters: { input?: QueryDevicesStateInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/QueryDeviceStates'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateDeviceState(parameters: { input?: UpdateDeviceStateInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/UpdateDeviceState'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  checkDeviceNameIsExist(parameters: { input?: CheckDeviceNameIsExistInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Device/CheckDeviceNameIsExist'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceAreaService {
  getDeviceAreas(parameters: { stationId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/GetDeviceAreas'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getDeviceAreaForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/GetDeviceAreaForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateDeviceArea(parameters: { input?: CreateOrUpdateDeviceAreaInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteDeviceArea(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceArea/DeleteDeviceArea'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceLockCodeService {
  getLockCodeProperties(parameters: { maxResultCount: number, skipCount: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodeProperties'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getLockCodePropertySelected(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getLockCodePropertyForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateLockCodeProperty(
    parameters: { input?: CreateOrUpdateLockCodePropertyInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteLockCodeProperty(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceTermService {
  getDeviceTerms(parameters: { stationName: string, pointName: string, state: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/GetDeviceTerms'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getTerms(parameters: { deviceType: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/GetTerms'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateDeviceOperation(
    parameters: { input?: CreateOrUpdateDeviceOperationInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteDeviceOperation(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceTerm/DeleteDeviceOperation'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class DeviceTypeService {
  getDeviceTypes(parameters: { name?: string, isEst?: boolean }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/GetDeviceTypes'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getDeviceTypeForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/GetDeviceTypeForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateDeviceType(parameters: { input?: CreateOrUpdateDeviceTypeInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/CreateOrUpdateDeviceType'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteDeviceType(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/DeviceType/DeleteDeviceType'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class EditionService {
  getEditions(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditions'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getEditionForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditionForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateEdition(parameters: { input?: CreateOrUpdateEditionDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/CreateOrUpdateEdition'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteEdition(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/DeleteEdition'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEditionComboboxItems(
    parameters: { selectedEditionId?: number, addAllItem: boolean, onlyFreeItems: boolean },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Edition/GetEditionComboboxItems'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class EquipmentService {
  getEquipments(
    parameters: { productId?: number, name?: string, terminalId?: number, stationId?: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipments'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEquipmentForEdit(parameters: { productId: number, id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateEquipment(parameters: { input?: CreateOrUpdateEquipmentInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/CreateOrUpdateEquipment'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteEquipment(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/DeleteEquipment'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEquipmentNotBinded(
    parameters: { stationId?: number, name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentNotBinded'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getAllStationBindEquipments(parameters: { stationId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetAllStationBindEquipments'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getStationBindEquipments(
    parameters: { stationId?: number, name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetStationBindEquipments'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEquipmentWithProperty(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/GetEquipmentWithProperty'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  controlEquipment(parameters: { input?: ControlEquipmentInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Equipment/ControlEquipment'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class FileService {
  download(parameters: { id: string, name: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/File/download/{id}/{name}'
    path = path.replace('{id}', parameters['id'] + '')
    path = path.replace('{name}', parameters['name'] + '')

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  file(parameters: { id: string, name: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/File/{id}/{name}'
    path = path.replace('{id}', parameters['id'] + '')
    path = path.replace('{name}', parameters['name'] + '')

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class FriendshipService {
  createFriendshipRequest(parameters: { input?: CreateFriendshipRequestInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/CreateFriendshipRequest'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createFriendshipRequestByUserName(
    parameters: { input?: CreateFriendshipRequestByUserNameInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/CreateFriendshipRequestByUserName'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  blockUser(parameters: { input?: BlockUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/BlockUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  unblockUser(parameters: { input?: UnblockUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/UnblockUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  acceptFriendshipRequest(parameters: { input?: AcceptFriendshipRequestInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Friendship/AcceptFriendshipRequest'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class GraphService {
  getGraphs(parameters: { name?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/GetGraphs'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getGraphForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/GetGraphForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateGraph(parameters: { input?: CreateOrUpdateGraphInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/CreateOrUpdateGraph'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteGraph(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Graph/DeleteGraph'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  uploadGraph(parameters: { file?: any }, options: IRequestOptions = {}) {
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
      method: 'post',
      url: path,
      headers: headers,
      data: data
    })
  }
}
export class HostDashboardService {
  getDashboardStatisticsData(
    parameters: { incomeStatisticsDateInterval: string, startDate: string, endDate: string },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetDashboardStatisticsData'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getIncomeStatistics(
    parameters: { incomeStatisticsDateInterval: string, startDate: string, endDate: string },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetIncomeStatistics'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEditionTenantStatistics(parameters: { startDate: string, endDate: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostDashboard/GetEditionTenantStatistics'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class HostSettingsService {
  getAllSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/GetAllSettings'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateAllSettings(parameters: { input?: HostSettingsEditDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/UpdateAllSettings'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendTestEmail(parameters: { input?: SendTestEmailInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/HostSettings/SendTestEmail'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class InstallService {
  setup(parameters: { input?: InstallDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/Setup'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getAppSettingsJson(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/GetAppSettingsJson'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  checkDatabase(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Install/CheckDatabase'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class IntelligentLockServiceService {
  addIntelligentLocks(parameters: { roleId: number, inputs?: IntelligentLockInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/AddIntelligentLocks'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeIntelligentLocks(parameters: { roleId: number, ids?: number[] }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getIntelligentLockList(parameters: { roleId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/GetIntelligentLockList'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getIntelligentLocksInDeviceAreaTree(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class InvoiceService {
  getInvoiceInfo(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Invoice/GetInvoiceInfo'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createInvoice(parameters: { input?: CreateInvoiceDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Invoice/CreateInvoice'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class KeyCabinetService {
  keyCabinetApply(parameters: { input?: KeyCabinetApplyInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetApply'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  keyCabinetApprove(parameters: { input?: KeyCabinetApproveInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetApprove'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  keyCabinetUnlock(parameters: { input?: KeyCabinetUnlockInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetUnlock'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  keyCabinetOpenDoor(parameters: { input?: KeyCabinetOpenDoorInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getApplyReasonEnums(parameters: { approverType?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplyReasonEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getApplyReasonList(parameters: { approverType?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplyReasonList'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getBuckleTypeEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetBuckleTypeEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getLockModeEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetLockModeEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getApproverTypeEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApproverTypeEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getTask(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetTask'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  endTask(parameters: { input?: KeyCabinetEndTaskInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/EndTask'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getApplicants(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApplicants'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getApprovers(parameters: { roles?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetApprovers'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  isTaskExpired(parameters: { input?: EntityDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/IsTaskExpired'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getKeyCarbinetLogs(
    parameters: { stationId: number, startDate: string, endDate: string, applicantId?: number, approverId?: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateKeyCarbinetLog(parameters: { input?: KeyCarbinetLogInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class LanguageService {
  getLanguages(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguages'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getLanguageForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguageForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateLanguage(parameters: { input?: CreateOrUpdateLanguageInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/CreateOrUpdateLanguage'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteLanguage(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/DeleteLanguage'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  setDefaultLanguage(parameters: { input?: SetDefaultLanguageInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/SetDefaultLanguage'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

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
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/GetLanguageTexts'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateLanguageText(parameters: { input?: UpdateLanguageTextInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Language/UpdateLanguageText'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class NotificationService {
  getUserNotifications(
    parameters: { state?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/GetUserNotifications'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  setAllNotificationsAsRead(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/SetAllNotificationsAsRead'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }

  setNotificationAsRead(parameters: { input?: EntityDto<string> }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/SetNotificationAsRead'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getNotificationSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/GetNotificationSettings'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateNotificationSettings(parameters: { input?: UpdateNotificationSettingsInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Notification/UpdateNotificationSettings'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class OperationRecordService {
  getOperationRecord(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OperationRecord/GetOperationRecord'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getOperationRecords(
    parameters: {
      applicantId?: number,
      approverId?: number,
      startTime?: string,
      endTime?: string,
      productTypes?: string[],
      maxResultCount: number,
      skipCount: number
    },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OperationRecord/GetOperationRecords'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class OrganizationUnitService {
  getOrganizationUnits(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/GetOrganizationUnits'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getOrganizationUnitUsers(
    parameters: { id: number, sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrganizationUnit(parameters: { input?: CreateOrganizationUnitInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/CreateOrganizationUnit'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateOrganizationUnit(parameters: { input?: UpdateOrganizationUnitInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  moveOrganizationUnit(parameters: { input?: MoveOrganizationUnitInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/MoveOrganizationUnit'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteOrganizationUnit(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeUserFromOrganizationUnit(
    parameters: { userId: number, organizationUnitId: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  addUsersToOrganizationUnit(parameters: { input?: UsersToOrganizationUnitInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  findUsers(parameters: { input?: FindOrganizationUnitUsersInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/OrganizationUnit/FindUsers'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class PaymentService {
  getPaymentInfo(parameters: { upgradeEditionId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/GetPaymentInfo'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createPayment(parameters: { input?: CreatePaymentDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/CreatePayment'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  executePayment(parameters: { input?: ExecutePaymentDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/ExecutePayment'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getPaymentHistory(
    parameters: { sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Payment/GetPaymentHistory'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class PendingService {
  getPendingList(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Pending/GetPendingList'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class PermissionService {
  getAllPermissions(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Permission/GetAllPermissions'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }
}
export class ProductService {
  getProducts(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/GetProducts'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getProductForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/GetProductForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateProduct(parameters: { input?: CreateOrUpdateProductInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/CreateOrUpdateProduct'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteProduct(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Product/DeleteProduct'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class ProductPropertyService {
  getProductProperties(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/GetProductProperties'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getProductPropertyForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/GetProductPropertyForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateProductProperty(
    parameters: { input?: CreateOrUpdateProductPropertyInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteProductProperty(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/ProductProperty/DeleteProductProperty'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class ProfileService {
  getCurrentUserProfileForEdit(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetCurrentUserProfileForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateGoogleAuthenticatorKey(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey'

    return axios({
      method: 'put',
      url: path,
      headers: headers
    })
  }

  sendVerificationSms(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/SendVerificationSms'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }

  verifySmsCode(parameters: { input?: VerifySmsCodeInputDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/VerifySmsCode'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateCurrentUserProfile(parameters: { input?: CurrentUserProfileEditDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateCurrentUserProfile'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  changePassword(parameters: { input?: ChangePasswordInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/ChangePassword'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateProfilePicture(parameters: { input?: UpdateProfilePictureInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/UpdateProfilePicture'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getPasswordComplexitySetting(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetPasswordComplexitySetting'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getProfilePicture(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetProfilePicture'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getFriendProfilePictureById(
    parameters: { profilePictureId?: string, userId: number, tenantId?: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetFriendProfilePictureById'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getProfilePictureById(parameters: { profilePictureId: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/GetProfilePictureById'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  changeLanguage(parameters: { input?: ChangeUserLanguageDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Profile/ChangeLanguage'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class RoleService {
  getRoles(parameters: { permission?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/GetRoles'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getRoleForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/GetRoleForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateRole(parameters: { input?: CreateOrUpdateRoleInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/CreateOrUpdateRole'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteRole(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Role/DeleteRole'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SafetyWearService {
  addOrUpdateSafetyWearMonitoring(parameters: { input?: SafetyWearMonitoringInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getOne(parameters: { userId: number, equipmentNo: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetOne'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getList(parameters: { stationId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetList'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getSafetyWearEquipmentByMacAddress(parameters: { macAddress?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getSafetyWearEquipments(parameters: { stationId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetSafetyWearEquipments'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getUserListForSafetyWearLogin(parameters: { userName?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SessionService {
  getCurrentLoginInformations(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Session/GetCurrentLoginInformations'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateUserSignInToken(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Session/UpdateUserSignInToken'

    return axios({
      method: 'put',
      url: path,
      headers: headers
    })
  }
}
export class StationService {
  getStations(parameters: { name?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStations'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getStationForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStationForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateStation(parameters: { input?: CreateOrUpdateStationInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/CreateOrUpdateStation'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteStation(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/DeleteStation'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getStationNotBind(
    parameters: { name?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/GetStationNotBind'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  bindEquipmentStation(parameters: { input?: BindEquipmentStationInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/BindEquipmentStation'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeEquipmentStation(parameters: { equipmentId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/RemoveEquipmentStation'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createStationUsers(parameters: { input?: CreateStationUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/CreateStationUsers'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeUserFromStation(
    parameters: { stationUserDtoStationId: number, stationUserDtoUserId: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Station/RemoveUserFromStation'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class StationAreaService {
  createStationArea(parameters: { input?: CreateStationAreaInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/CreateStationArea'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateStationArea(parameters: { input?: UpdateStationAreaInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/UpdateStationArea'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  moveStationArea(parameters: { input?: MoveStationAreaInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/MoveStationArea'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteStationArea(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/DeleteStationArea'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getStationArea(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetStationArea'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getStationAreaWithEquipments(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/GetStationAreaWithEquipments'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  stationAreaBindStation(parameters: { input?: StationAreaBindStationInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/StationAreaBindStation'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeStationAreaStation(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationArea/RemoveStationAreaStation'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class StationUserService {
  getRelatedUserListByStationId(
    parameters: { id: number, sorting?: string, maxResultCount: number, skipCount: number },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationUser/GetRelatedUserListByStationId'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getNotRelatedUserListByStationId(parameters: { stationId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/StationUser/GetNotRelatedUserListByStationId'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class SubscriptionService {
  upgradeTenantToEquivalentEdition(parameters: { upgradeEditionId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantService {
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
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenants'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createTenant(parameters: { input?: CreateTenantInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/CreateTenant'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getTenantForEdit(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenantForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateTenant(parameters: { input?: TenantEditDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UpdateTenant'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteTenant(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/DeleteTenant'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getTenantFeaturesForEdit(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/GetTenantFeaturesForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateTenantFeatures(parameters: { input?: UpdateTenantFeaturesInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UpdateTenantFeatures'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  resetTenantSpecificFeatures(parameters: { input?: EntityDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/ResetTenantSpecificFeatures'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  unlockTenantAdmin(parameters: { input?: EntityDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Tenant/UnlockTenantAdmin'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantDashboardService {
  getMemberActivity(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetMemberActivity'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getDashboardData(parameters: { salesSummaryDatePeriod: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetDashboardData'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getSalesSummary(parameters: { salesSummaryDatePeriod: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetSalesSummary'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getWorldMap(parameters: { input?: undefined }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetWorldMap'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getGeneralStats(parameters: { input?: undefined }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantDashboard/GetGeneralStats'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantRegistrationService {
  registerTenant(parameters: { input?: RegisterTenantInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/RegisterTenant'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getEditionsForSelect(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/GetEditionsForSelect'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getEdition(parameters: { editionId: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantRegistration/GetEdition'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TenantSettingsService {
  getAllSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/GetAllSettings'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateAllSettings(parameters: { input?: TenantSettingsEditDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/UpdateAllSettings'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  clearLogo(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/ClearLogo'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }

  clearCustomCss(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/ClearCustomCss'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }

  sendTestEmail(parameters: { input?: SendTestEmailInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TenantSettings/SendTestEmail'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TerimalPortConfigService {
  getTerminalPortConfigs(parameters: { terminalId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getTerminalPortConfigForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateTerminalPortConfig(
    parameters: { input?: CreateOrUpdateTerminalPortConfigInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteTerminalPortConfig(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TerminalService {
  getTerminals(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/GetTerminals'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getTerminalForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/GetTerminalForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateTerminal(parameters: { input?: CreateOrUpdateTerminalInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/CreateOrUpdateTerminal'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteTerminal(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/DeleteTerminal'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  resetTerminal(parameters: { input?: ResetTerminalInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Terminal/ResetTerminal'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TimingService {
  getTimezones(parameters: { defaultTimezoneScope: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Timing/GetTimezones'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getTimezoneComboboxItems(parameters: { selectedTimezoneId?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/Timing/GetTimezoneComboboxItems'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class TokenAuthService {
  authenticate(parameters: { model?: AuthenticateModel }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/Authenticate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  sendTwoFactorAuthCode(parameters: { model?: SendTwoFactorAuthCodeModel }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/SendTwoFactorAuthCode'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  impersonatedAuthenticate(parameters: { impersonationToken?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/ImpersonatedAuthenticate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  linkedAccountAuthenticate(parameters: { switchAccountToken?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/LinkedAccountAuthenticate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getExternalAuthenticationProviders(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/GetExternalAuthenticationProviders'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  externalAuthenticate(parameters: { model?: ExternalAuthenticateModel }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/ExternalAuthenticate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  securityAuthenticate(parameters: { model?: SecurityAuthenticateModel }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/SecurityAuthenticate'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  testNotification(parameters: { message?: string, severity?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/TokenAuth/TestNotification'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UiCustomizationSettingsService {
  getUiManagementSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  updateUiManagementSettings(parameters: { settings?: UiCustomizationSettingsEditDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateDefaultUiManagementSettings(
    parameters: { settings?: UiCustomizationSettingsEditDto },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  useSystemDefaultSettings(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class UserService {
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
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsers'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getUsersToExcel(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsersToExcel'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getUserForEdit(parameters: { id?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUserForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getUserPermissionsForEdit(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUserPermissionsForEdit'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  resetUserSpecificPermissions(parameters: { input?: EntityDto<number> }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/ResetUserSpecificPermissions'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateUserPermissions(parameters: { input?: UpdateUserPermissionsInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/UpdateUserPermissions'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateUser(parameters: { input?: CreateOrUpdateUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/CreateOrUpdateUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  deleteUser(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/DeleteUser'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  unlockUser(parameters: { input?: EntityDto<number> }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/UnlockUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getUsersForLogin(parameters: { name?: string, surname?: string, userName?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/User/GetUsersForLogin'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UserLinkService {
  linkToUser(parameters: { input?: LinkToUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/LinkToUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getLinkedUsers(
    parameters: { maxResultCount: number, skipCount: number, sorting?: string },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/GetLinkedUsers'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getRecentlyUsedLinkedUsers(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  unlinkUser(parameters: { input?: UnlinkUserInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLink/UnlinkUser'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class UserLoginService {
  getRecentUserLoginAttempts(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/GetRecentUserLoginAttempts'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getNfcCurrentUserLogin(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/GetNfcCurrentUserLogin'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  createOrUpdateNfcUserLogin(parameters: { input?: CreateOrUpdateNfcUserLoginInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  bindNfcCurrentUserLogin(parameters: { input?: UserLoginDto }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/BindNfcCurrentUserLogin'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeNfcUserLogin(parameters: { userId: number, key: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/RemoveNfcUserLogin'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  removeNfcCurrentUserLogin(parameters: { key: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin'

    return axios({
      method: 'delete',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
export class WebLogService {
  getLatestWebLogs(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WebLog/GetLatestWebLogs'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  downloadWebLogs(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WebLog/DownloadWebLogs'

    return axios({
      method: 'post',
      url: path,
      headers: headers
    })
  }
}
export class WireCabinetService {
  wireCabinetApply(parameters: { input?: WireCabinetApplyInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetApply'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetApprove(parameters: { input?: WireCabinetApproveInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetApprove'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetUnlock(parameters: { input?: WireCabinetUnlockInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUnlock'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetHook(parameters: { input?: WireCabinetHookInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetHook'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetDeviceHook(parameters: { input?: WireCabinetHook2Input }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetDeviceHook'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetUnHook(parameters: { input?: WireCabinetUnHookInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUnHook'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  wireCabinetUpdateTask(parameters: { input?: WireCabinetUpdateTaskInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/WireCabinetUpdateTask'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getApplyReasonEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplyReasonEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getApplyReasonList(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplyReasonList'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getBuckleTypeEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetBuckleTypeEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getLockModeEnums(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetLockModeEnums'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getTask(parameters: { id: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetTask'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getApplicants(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApplicants'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getApprovers(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetApprovers'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  getRecentlyTimeForSelectOperation(
    parameters: { equipmentId?: number, bluetooth?: string },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  updateOperateTime(parameters: { input?: UpdateOperateTimeInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/UpdateOperateTime'

    return axios({
      method: 'put',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getWireDetail(parameters: { value: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireDetail'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  uploadFile(parameters: { file?: any }, options: IRequestOptions = {}) {
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
      method: 'post',
      url: path,
      headers: headers,
      data: data
    })
  }

  getWireCabinet(parameters: { equipmentId?: number, bluetooth?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireCabinet'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  createOrUpdateEquipmentPropertyConfig(
    parameters: { input?: EquipmentPropertyConfigInput },
    options: IRequestOptions = {}
  ) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getWirePile(parameters: { value?: string }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWirePile'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getWiresBeTaken(parameters: { stationId?: number }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWiresBeTaken'

    return axios({
      method: 'get',
      url: path,
      headers: headers,
      data: parameters
    })
  }

  getWireCabinetBluetooths(options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/GetWireCabinetBluetooths'

    return axios({
      method: 'get',
      url: path,
      headers: headers
    })
  }

  checkWireConfigIsExsit(parameters: { input?: CheckWireConfigInput }, options: IRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    let path = '/api/services/app/WireCabinet/CheckWireConfigIsExsit'

    return axios({
      method: 'post',
      url: path,
      headers: headers,
      data: parameters
    })
  }
}
class IsTenantAvailableInput {
  tenancyName: string

  constructor(data) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
    }
  }
}

class IsTenantAvailableOutput {
  state: 'Available' | 'InActive' | 'NotFound'
  tenantId: number
  serverRootAddress: string

  constructor(data) {
    if (data) {
      this['state'] = data['state']
      this['tenantId'] = data['tenantId']
      this['serverRootAddress'] = data['serverRootAddress']
    }
  }
}

class RegisterInput {
  name: string
  surname: string
  userName: string
  emailAddress: string
  password: string
  captchaResponse: string

  constructor(data) {
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

class RegisterOutput {
  canLogin: boolean

  constructor(data) {
    if (data) {
      this['canLogin'] = data['canLogin']
    }
  }
}

class SendPasswordResetCodeInput {
  emailAddress: string

  constructor(data) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

class ResetPasswordInput {
  userId: number
  resetCode: string
  password: string
  returnUrl: string
  singleSignIn: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['resetCode'] = data['resetCode']
      this['password'] = data['password']
      this['returnUrl'] = data['returnUrl']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

class ResetPasswordOutput {
  canLogin: boolean
  userName: string

  constructor(data) {
    if (data) {
      this['canLogin'] = data['canLogin']
      this['userName'] = data['userName']
    }
  }
}

class SendEmailActivationLinkInput {
  emailAddress: string

  constructor(data) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

class ActivateEmailInput {
  userId: number
  confirmationCode: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['confirmationCode'] = data['confirmationCode']
    }
  }
}

class ImpersonateInput {
  tenantId: number
  userId: number

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

class ImpersonateOutput {
  impersonationToken: string
  tenancyName: string

  constructor(data) {
    if (data) {
      this['impersonationToken'] = data['impersonationToken']
      this['tenancyName'] = data['tenancyName']
    }
  }
}

class SwitchToLinkedAccountInput {
  targetTenantId: number
  targetUserId: number

  constructor(data) {
    if (data) {
      this['targetTenantId'] = data['targetTenantId']
      this['targetUserId'] = data['targetUserId']
    }
  }
}

class SwitchToLinkedAccountOutput {
  switchAccountToken: string
  tenancyName: string

  constructor(data) {
    if (data) {
      this['switchAccountToken'] = data['switchAccountToken']
      this['tenancyName'] = data['tenancyName']
    }
  }
}

class PagedResultDto<T> {
  totalCount: number
  items: T[]

  constructor(data) {
    if (data) {
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

class AuditLogListDto {
  userId: number
  userName: string
  impersonatorTenantId: number
  impersonatorUserId: number
  serviceName: string
  methodName: string
  parameters: string
  executionTime: string
  executionDuration: number
  clientIpAddress: string
  clientName: string
  browserInfo: string
  exception: string
  customData: string
  id: number

  constructor(data) {
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

class FileDto {
  fileName: string
  fileType: string
  fileToken: string

  constructor(data) {
    if (data) {
      this['fileName'] = data['fileName']
      this['fileType'] = data['fileType']
      this['fileToken'] = data['fileToken']
    }
  }
}

class ListResultDto<T> {
  items: T[]

  constructor(data) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

class CacheDto {
  name: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

class EntityDto<T = number> {
  id: T

  constructor(data) {
    if (data) {
      this['id'] = data['id']
    }
  }
}

class GetUserChatFriendsWithSettingsOutput {
  serverTime: string
  friends: FriendDto[]

  constructor(data) {
    if (data) {
      this['serverTime'] = data['serverTime']
      this['friends'] = data['friends']
    }
  }
}

class FriendDto {
  friendUserId: number
  friendTenantId: number
  friendUserName: string
  friendTenancyName: string
  friendProfilePictureId: string
  unreadMessageCount: number
  isOnline: boolean
  state: 'Accepted' | 'Blocked'

  constructor(data) {
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

class ChatMessageDto {
  userId: number
  tenantId: number
  targetUserId: number
  targetTenantId: number
  side: 'Sender' | 'Receiver'
  readState: 'Unread' | 'Read'
  receiverReadState: 'Unread' | 'Read'
  message: string
  creationTime: string
  sharedMessageId: string
  id: number

  constructor(data) {
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

class MarkAllUnreadMessagesOfUserAsReadInput {
  tenantId: number
  userId: number

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

class SubscribableEditionComboboxItemDto {
  isFree: boolean
  value: string
  displayText: string
  isSelected: boolean

  constructor(data) {
    if (data) {
      this['isFree'] = data['isFree']
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

class FindUsersInput {
  tenantId: number
  maxResultCount: number
  skipCount: number
  filter: string

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['maxResultCount'] = data['maxResultCount']
      this['skipCount'] = data['skipCount']
      this['filter'] = data['filter']
    }
  }
}

class NameValueDto {
  name: string
  value: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
    }
  }
}

class GetDefaultEditionNameOutput {
  name: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

class DeviceTypeComboboxItemDto {
  value: string
  displayText: string
  isSelected: boolean

  constructor(data) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

class ComboboxItemDto {
  value: string
  displayText: string
  isSelected: boolean

  constructor(data) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
      this['isSelected'] = data['isSelected']
    }
  }
}

class DateToStringOutput {
  dateString: string

  constructor(data) {
    if (data) {
      this['dateString'] = data['dateString']
    }
  }
}

class NameValue<T = string> {
  name: string
  value: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['value'] = data['value']
    }
  }
}

class StringOutput {
  output: string

  constructor(data) {
    if (data) {
      this['output'] = data['output']
    }
  }
}

class DeviceListDto {
  name: string
  description: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['id'] = data['id']
    }
  }
}

class GetDeviceEditOutput {
  device: DeviceEditDto
  configListDtos: DeviceCodeInfoDto[]

  constructor(data) {
    if (data) {
      this['device'] = data['device']
      this['configListDtos'] = data['configListDtos']
    }
  }
}

class DeviceEditDto {
  stationId: number
  deviceAreaId: number
  name: string
  description: string
  voltage: string
  type: string
  lockCodePropertyId: number
  id: number

  constructor(data) {
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

class DeviceCodeInfoDto {
  lockCodeNumber: string
  code: string
  stateFrom1To0: string
  stateFrom0To1: string

  constructor(data) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['code'] = data['code']
      this['stateFrom1To0'] = data['stateFrom1To0']
      this['stateFrom0To1'] = data['stateFrom0To1']
    }
  }
}

class CreateOrUpdateDeviceInput {
  device: CreateOrUpdateDeviceDto
  codeInfoDtos: DeviceCodeInfoEditDto[]

  constructor(data) {
    if (data) {
      this['device'] = data['device']
      this['codeInfoDtos'] = data['codeInfoDtos']
    }
  }
}

class CreateOrUpdateDeviceDto {
  stationId: number
  deviceAreaId: number
  name: string
  description: string
  voltage: number
  type: number
  lockCodePropertyId: number
  id: number

  constructor(data) {
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

class DeviceCodeInfoEditDto {
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
  code: string

  constructor(data) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['code'] = data['code']
    }
  }
}

class QueryDevicesStateInput {
  stationDevices: StationDeviceDto[]

  constructor(data) {
    if (data) {
      this['stationDevices'] = data['stationDevices']
    }
  }
}

class StationDeviceDto {
  stationName: string
  pointName: string
  id: number

  constructor(data) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['id'] = data['id']
    }
  }
}

class DeviceStateDto {
  stationName: string
  pointName: string
  state: number
  id: number

  constructor(data) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['state'] = data['state']
      this['id'] = data['id']
    }
  }
}

class UpdateDeviceStateInput {
  deviceState: DeviceStateDto

  constructor(data) {
    if (data) {
      this['deviceState'] = data['deviceState']
    }
  }
}

class UpdateDeviceStateOutput {
  deviceState: DeviceStateDto

  constructor(data) {
    if (data) {
      this['deviceState'] = data['deviceState']
    }
  }
}

class CheckDeviceNameIsExistInput {
  stationId: number
  name: string
  id: number

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['name'] = data['name']
      this['id'] = data['id']
    }
  }
}

class DeviceAreaListDto {
  stationId: number
  parentId: number
  name: string
  sortId: number
  id: number

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

class GetDeviceAreaEditOutput {
  deviceArea: GetDeviceAreaEditDto

  constructor(data) {
    if (data) {
      this['deviceArea'] = data['deviceArea']
    }
  }
}

class GetDeviceAreaEditDto {
  stationId: number
  parentId: number
  name: string
  sortId: number
  id: number

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateDeviceAreaInput {
  deviceArea: CreateOrUpdateDeviceAreaDto
  children: number[]

  constructor(data) {
    if (data) {
      this['deviceArea'] = data['deviceArea']
      this['children'] = data['children']
    }
  }
}

class CreateOrUpdateDeviceAreaDto {
  stationId: number
  parentId: number
  name: string
  sortId: number
  id: number

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['parentId'] = data['parentId']
      this['name'] = data['name']
      this['sortId'] = data['sortId']
      this['id'] = data['id']
    }
  }
}

class LockCodePropertyListDto {
  code: string
  keyCode: string
  codeName: string
  opHint1_0: string
  opHint1_1: string
  toKey: boolean
  stateChange: boolean
  id: number

  constructor(data) {
    if (data) {
      this['code'] = data['code']
      this['keyCode'] = data['keyCode']
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['id'] = data['id']
    }
  }
}

class LockCodePropertySelectDto {
  code: string
  codeName: string
  id: number

  constructor(data) {
    if (data) {
      this['code'] = data['code']
      this['codeName'] = data['codeName']
      this['id'] = data['id']
    }
  }
}

class LockCodePropertyEditDto {
  code: string
  keyCode: string
  codeName: string
  opHint1_0: string
  opHint1_1: string
  toKey: boolean
  stateChange: boolean
  configDtos: LockCodeConfigListDto[]
  id: number

  constructor(data) {
    if (data) {
      this['code'] = data['code']
      this['keyCode'] = data['keyCode']
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

class LockCodeConfigListDto {
  stateFrom1To0: string
  stateFrom0To1: string
  lockCodeNumber: string
  id: number

  constructor(data) {
    if (data) {
      this['stateFrom1To0'] = data['stateFrom1To0']
      this['stateFrom0To1'] = data['stateFrom0To1']
      this['lockCodeNumber'] = data['lockCodeNumber']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateLockCodePropertyInput {
  codePropertyDto: CreateOrUpdateLockCodePropertyDto
  lockCodeConfigs: LockCodeConfigEditDto[]

  constructor(data) {
    if (data) {
      this['codePropertyDto'] = data['codePropertyDto']
      this['lockCodeConfigs'] = data['lockCodeConfigs']
    }
  }
}

class CreateOrUpdateLockCodePropertyDto {
  code: string
  keyCode: string
  codeName: string
  opHint1_0: string
  opHint1_1: string
  toKey: boolean
  stateChange: boolean
  id: number

  constructor(data) {
    if (data) {
      this['code'] = data['code']
      this['keyCode'] = data['keyCode']
      this['codeName'] = data['codeName']
      this['opHint1_0'] = data['opHint1_0']
      this['opHint1_1'] = data['opHint1_1']
      this['toKey'] = data['toKey']
      this['stateChange'] = data['stateChange']
      this['id'] = data['id']
    }
  }
}

class LockCodeConfigEditDto {
  stateFrom1To0:
    | 'MainCodeLock'
    | 'YDQ'
    | 'OnZTJC'
    | 'OffZTJC'
    | 'TSXCZ'
    | 'DWZJC'
    | 'JXLock'
    | 'DBMLock'
    | 'CJFKLock'
    | 'DXDKLock'
    | 'DKLock'
    | 'OnJXLock'
    | 'OffJXLock'
    | 'OnDBMLock'
    | 'OffDBMLock'
    | 'DBMLock_2H'
    | 'OnDBMLock_2H'
    | 'OffDBMLock_2H'
    | 'OnCJFKLock'
    | 'OffCJFKLock'
    | 'OnDQZTJC'
    | 'OffDQZTJC'
    | 'DXZLockCode'
    | 'PPFDBMLock_3H'
    | 'PNFDBMLock_3H'
    | 'APFDBMLock_3H'
    | 'ANFDBMLock_3H'
    | 'Wire'
    | 'Code29'
    | 'Code30'
    | 'Code31'
    | 'ZNLock'
    | 'ZNCell'
    | 'OnGDCXJSCode'
    | 'OnGDCXBSCode'
    | 'OffGDCXJSCode'
    | 'OffGDCXBSCode'
    | 'OnDBMCXLock'
    | 'OffDBMCXLock'
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
    | 'WX_GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'WX_SKJXLock'
    | 'GSNYD'
    | 'XJ'
    | 'WX_OnJXLock'
    | 'WX_OffJXLock'
    | 'WX_OnDBMLock'
    | 'WX_OffDBMLock'
    | 'GSN2YD'
    | 'GLDDW'
    | 'GLDJBLock'
    | 'LSGLDGLock'
    | 'WX_WZSZNMLock'
    | 'LKBDJXLock'
    | 'OnCZDXLock'
    | 'OffCZDXLock'
    | 'OnJDZLock'
    | 'OffJDZLock'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'SHYSXDZLock'
    | 'NoKey'
  stateFrom0To1:
    | 'MainCodeLock'
    | 'YDQ'
    | 'OnZTJC'
    | 'OffZTJC'
    | 'TSXCZ'
    | 'DWZJC'
    | 'JXLock'
    | 'DBMLock'
    | 'CJFKLock'
    | 'DXDKLock'
    | 'DKLock'
    | 'OnJXLock'
    | 'OffJXLock'
    | 'OnDBMLock'
    | 'OffDBMLock'
    | 'DBMLock_2H'
    | 'OnDBMLock_2H'
    | 'OffDBMLock_2H'
    | 'OnCJFKLock'
    | 'OffCJFKLock'
    | 'OnDQZTJC'
    | 'OffDQZTJC'
    | 'DXZLockCode'
    | 'PPFDBMLock_3H'
    | 'PNFDBMLock_3H'
    | 'APFDBMLock_3H'
    | 'ANFDBMLock_3H'
    | 'Wire'
    | 'Code29'
    | 'Code30'
    | 'Code31'
    | 'ZNLock'
    | 'ZNCell'
    | 'OnGDCXJSCode'
    | 'OnGDCXBSCode'
    | 'OffGDCXJSCode'
    | 'OffGDCXBSCode'
    | 'OnDBMCXLock'
    | 'OffDBMCXLock'
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
    | 'WX_GSN2L'
    | 'WX_ZNMBLock'
    | 'WX_ZNFHMLock'
    | 'WX_SKJXLock'
    | 'GSNYD'
    | 'XJ'
    | 'WX_OnJXLock'
    | 'WX_OffJXLock'
    | 'WX_OnDBMLock'
    | 'WX_OffDBMLock'
    | 'GSN2YD'
    | 'GLDDW'
    | 'GLDJBLock'
    | 'LSGLDGLock'
    | 'WX_WZSZNMLock'
    | 'LKBDJXLock'
    | 'OnCZDXLock'
    | 'OffCZDXLock'
    | 'OnJDZLock'
    | 'OffJDZLock'
    | 'LGLock_6A'
    | 'WTJGLock'
    | 'DKHLock'
    | 'SHYSXDZLock'
    | 'NoKey'
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

  constructor(data) {
    if (data) {
      this['stateFrom1To0'] = data['stateFrom1To0']
      this['stateFrom0To1'] = data['stateFrom0To1']
      this['lockCodeNumber'] = data['lockCodeNumber']
    }
  }
}

class GetDeviceTermsOutput {
  stationName: string
  pointName: string
  deviceStateTerms: DeviceStateTermDto[]

  constructor(data) {
    if (data) {
      this['stationName'] = data['stationName']
      this['pointName'] = data['pointName']
      this['deviceStateTerms'] = data['deviceStateTerms']
    }
  }
}

class DeviceStateTermDto {
  fromState: number
  toState: number
  operationName: string
  boardDesc: string
  terms: string[]

  constructor(data) {
    if (data) {
      this['fromState'] = data['fromState']
      this['toState'] = data['toState']
      this['operationName'] = data['operationName']
      this['boardDesc'] = data['boardDesc']
      this['terms'] = data['terms']
    }
  }
}

class DeviceOperationListDto {
  stationId: number
  stationName: string
  voltageLevelId: number
  voltageLevelName: string
  fromDeviceStateId: number
  toDeviceStateId: number
  name: string
  boardDesc: string
  deviceTypeId: number
  fromDeviceState: string
  toDeviceState: string
  terms: TermListDto[]
  id: number

  constructor(data) {
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

class TermListDto {
  type: string
  value: string
  id: number

  constructor(data) {
    if (data) {
      this['type'] = data['type']
      this['value'] = data['value']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateDeviceOperationInput {
  deviceOperation: DeviceOperationEditDto

  constructor(data) {
    if (data) {
      this['deviceOperation'] = data['deviceOperation']
    }
  }
}

class DeviceOperationEditDto {
  stationId: number
  voltageLevelId: number
  fromDeviceStateId: number
  toDeviceStateId: number
  name: string
  boardDesc: string
  deviceTypeId: number
  terms: TermEditDto[]
  id: number

  constructor(data) {
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

class TermEditDto {
  type: 'Default' | 'ByLinkage' | 'AddBefault' | 'AddAfter' | 'Selectable'
  value: string
  id: number

  constructor(data) {
    if (data) {
      this['type'] = data['type']
      this['value'] = data['value']
      this['id'] = data['id']
    }
  }
}

class DeviceTypeListDto {
  name: string
  dnbsCode: string
  toPrinter: boolean
  toKey: boolean
  graphName: string
  codeName: string
  showMode: string
  isEst: boolean
  isPprimary: boolean
  isSecondary: boolean
  isOperable: boolean
  id: number

  constructor(data) {
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

class GetDeviceTypeEditOutput {
  deviceType: DeviceTypeEditDto
  deviceStates: DeviceStateListDto[]

  constructor(data) {
    if (data) {
      this['deviceType'] = data['deviceType']
      this['deviceStates'] = data['deviceStates']
    }
  }
}

class DeviceTypeEditDto {
  name: string
  toPrinter: boolean
  toKey: boolean
  dnbsCode: string
  graphName: string
  codeName: string
  showMode: string
  isEst: boolean
  isPprimary: boolean
  isSecondary: boolean
  isOperable: boolean
  id: number

  constructor(data) {
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

class DeviceStateListDto {
  name: string
  state: number
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['state'] = data['state']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateDeviceTypeInput {
  deviceType: DeviceTypeEditDto
  deviceStates: DeviceStateListDto[]

  constructor(data) {
    if (data) {
      this['deviceType'] = data['deviceType']
      this['deviceStates'] = data['deviceStates']
    }
  }
}

class EditionListDto {
  name: string
  displayName: string
  creationTime: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

class GetEditionEditOutput {
  edition: EditionEditDto
  featureValues: NameValueDto[]
  features: FlatFeatureDto[]

  constructor(data) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
      this['features'] = data['features']
    }
  }
}

class EditionEditDto {
  id: number
  displayName: string
  monthlyPrice: number
  annualPrice: number
  trialDayCount: number
  waitingDayAfterExpire: number
  expiringEditionId: number

  constructor(data) {
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

class FlatFeatureDto {
  parentName: string
  name: string
  displayName: string
  description: string
  defaultValue: string
  inputType: FeatureInputTypeDto

  constructor(data) {
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

class FeatureInputTypeDto {
  name: string
  attributes: object
  validator: IValueValidator
  itemSource: LocalizableComboboxItemSourceDto

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
      this['validator'] = data['validator']
      this['itemSource'] = data['itemSource']
    }
  }
}

class IValueValidator {
  name: string
  attributes: object

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
    }
  }
}

class LocalizableComboboxItemSourceDto {
  items: LocalizableComboboxItemDto[]

  constructor(data) {
    if (data) {
      this['items'] = data['items']
    }
  }
}

class LocalizableComboboxItemDto {
  value: string
  displayText: string

  constructor(data) {
    if (data) {
      this['value'] = data['value']
      this['displayText'] = data['displayText']
    }
  }
}

class CreateOrUpdateEditionDto {
  edition: EditionEditDto
  featureValues: NameValueDto[]

  constructor(data) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
    }
  }
}

class EquipmentListDto {
  name: string
  description: string
  productType: string
  creationTime: string
  accessKey: string
  accessSecret: string
  productId: number
  id: number

  constructor(data) {
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

class GetEquipmentEditOutput {
  equipment: EquipmentEditDto
  equipmentProperties: EquipmentPropertyListDto[]
  equipmentBindPort: EquipmentBindPortDto

  constructor(data) {
    if (data) {
      this['equipment'] = data['equipment']
      this['equipmentProperties'] = data['equipmentProperties']
      this['equipmentBindPort'] = data['equipmentBindPort']
    }
  }
}

class EquipmentEditDto {
  name: string
  description: string
  accessKey: string
  accessSecret: string
  productType: string
  isEquipmentOnline: boolean
  isEquipmentFault: boolean
  id: number

  constructor(data) {
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

class EquipmentPropertyListDto {
  name: string
  description: string
  displayName: string
  value: string
  type: string
  bitType: string
  creationTime: string
  productPropertyId: number
  state: number
  config: string
  operation: string
  sortIndex: number
  id: number

  constructor(data) {
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
      this['id'] = data['id']
    }
  }
}

class EquipmentBindPortDto {
  terminalId: number
  terminalPortConfigId: number

  constructor(data) {
    if (data) {
      this['terminalId'] = data['terminalId']
      this['terminalPortConfigId'] = data['terminalPortConfigId']
    }
  }
}

class CreateOrUpdateEquipmentInput {
  equipment: CreateOrUpdateEquipmentDto
  equipmentProperties: EquipmentPropertyEditDto[]
  bindPorts: CreateOrUpdateBindPortDto[]

  constructor(data) {
    if (data) {
      this['equipment'] = data['equipment']
      this['equipmentProperties'] = data['equipmentProperties']
      this['bindPorts'] = data['bindPorts']
    }
  }
}

class CreateOrUpdateEquipmentDto {
  name: string
  description: string
  productId: number
  bluetooth: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['productId'] = data['productId']
      this['bluetooth'] = data['bluetooth']
      this['id'] = data['id']
    }
  }
}

class EquipmentPropertyEditDto {
  name: string
  value: string
  productPropertyId: number
  displayName: string
  description: string
  type: 'BaseProperty' | 'CommunicationProperty'
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'
  config: string
  operation: string
  sortIndex: number
  id: number

  constructor(data) {
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
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateBindPortDto {
  terminalPortConfigId: number

  constructor(data) {
    if (data) {
      this['terminalPortConfigId'] = data['terminalPortConfigId']
    }
  }
}

class EquipmentWithPropertyDto {
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  id: number
  name: string
  description: string
  productId: number
  productName: string
  stationId: number
  stationName: string
  isOnline: boolean
  equipmentBaseProperties: EquipmentPropertyForSingleEquipment[]
  equipmentCommunicationProperties: EquipmentPropertyForSingleEquipment[]

  constructor(data) {
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

class EquipmentPropertyForSingleEquipment {
  id: number
  name: string
  displayName: string
  photoIds: string[]
  description: string
  value: string
  state: number
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'
  config: string
  operation: string
  sortIndex: number

  constructor(data) {
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

class EquipmentInpageDto {
  name: string
  lastModificationTime: string
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  description: string
  stationId: number
  stationName: string
  isOnline: boolean
  productId: number
  equipmentBaseProperties: EquipmentBasePropertyInpageDto[]
  id: number

  constructor(data) {
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

class EquipmentBasePropertyInpageDto {
  name: string
  displayName: string
  description: string
  value: string
  config: string
  operation: string
  id: number

  constructor(data) {
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

class EquipmentWithPropertyOutput {
  equipmentWithProperty: EquipmentWithPropertyDto

  constructor(data) {
    if (data) {
      this['equipmentWithProperty'] = data['equipmentWithProperty']
    }
  }
}

class ControlEquipmentInput {
  equipmentId: number
  index: number
  value: number

  constructor(data) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['index'] = data['index']
      this['value'] = data['value']
    }
  }
}

class CreateFriendshipRequestInput {
  userId: number
  tenantId: number

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

class CreateFriendshipRequestByUserNameInput {
  tenancyName: string
  userName: string

  constructor(data) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['userName'] = data['userName']
    }
  }
}

class BlockUserInput {
  userId: number
  tenantId: number

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

class UnblockUserInput {
  userId: number
  tenantId: number

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

class AcceptFriendshipRequestInput {
  userId: number
  tenantId: number

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['tenantId'] = data['tenantId']
    }
  }
}

class GraphListDto {
  name: string
  contentStorageId: string
  creationTime: string
  parentId: number
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['contentStorageId'] = data['contentStorageId']
      this['creationTime'] = data['creationTime']
      this['parentId'] = data['parentId']
      this['id'] = data['id']
    }
  }
}

class GraphEditDto {
  name: string
  contentStorageId: string
  parentId: number
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['contentStorageId'] = data['contentStorageId']
      this['parentId'] = data['parentId']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateGraphInput {
  graph: GraphEditDto

  constructor(data) {
    if (data) {
      this['graph'] = data['graph']
    }
  }
}

class IFormFile {
  contentType: string
  contentDisposition: string
  headers: object
  length: number
  name: string
  fileName: string

  constructor(data) {
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

class UploadFileOutput {
  id: string
  fileName: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['fileName'] = data['fileName']
    }
  }
}

class HostDashboardData {
  newTenantsCount: number
  newSubscriptionAmount: number
  dashboardPlaceholder1: number
  dashboardPlaceholder2: number
  incomeStatistics: IncomeStastistic[]
  editionStatistics: TenantEdition[]
  expiringTenants: ExpiringTenant[]
  recentTenants: RecentTenant[]
  maxExpiringTenantsShownCount: number
  maxRecentTenantsShownCount: number
  subscriptionEndAlertDayCount: number
  recentTenantsDayCount: number
  subscriptionEndDateStart: string
  subscriptionEndDateEnd: string
  tenantCreationStartDate: string

  constructor(data) {
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

class IncomeStastistic {
  label: string
  date: string
  amount: number

  constructor(data) {
    if (data) {
      this['label'] = data['label']
      this['date'] = data['date']
      this['amount'] = data['amount']
    }
  }
}

class TenantEdition {
  label: string
  value: number

  constructor(data) {
    if (data) {
      this['label'] = data['label']
      this['value'] = data['value']
    }
  }
}

class ExpiringTenant {
  tenantName: string
  remainingDayCount: number

  constructor(data) {
    if (data) {
      this['tenantName'] = data['tenantName']
      this['remainingDayCount'] = data['remainingDayCount']
    }
  }
}

class RecentTenant {
  id: number
  name: string
  creationTime: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['creationTime'] = data['creationTime']
    }
  }
}

class GetIncomeStatisticsDataOutput {
  incomeStatistics: IncomeStastistic[]

  constructor(data) {
    if (data) {
      this['incomeStatistics'] = data['incomeStatistics']
    }
  }
}

class GetEditionTenantStatisticsOutput {
  editionStatistics: TenantEdition[]

  constructor(data) {
    if (data) {
      this['editionStatistics'] = data['editionStatistics']
    }
  }
}

class HostSettingsEditDto {
  general: GeneralSettingsEditDto
  userManagement: HostUserManagementSettingsEditDto
  email: EmailSettingsEditDto
  tenantManagement: TenantManagementSettingsEditDto
  security: SecuritySettingsEditDto
  billing: HostBillingSettingsEditDto
  push: PushSettingEditDto

  constructor(data) {
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

class GeneralSettingsEditDto {
  timezone: string
  timezoneForComparison: string

  constructor(data) {
    if (data) {
      this['timezone'] = data['timezone']
      this['timezoneForComparison'] = data['timezoneForComparison']
    }
  }
}

class HostUserManagementSettingsEditDto {
  isEmailConfirmationRequiredForLogin: boolean
  smsVerificationEnabled: boolean

  constructor(data) {
    if (data) {
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin']
      this['smsVerificationEnabled'] = data['smsVerificationEnabled']
    }
  }
}

class EmailSettingsEditDto {
  defaultFromAddress: string
  defaultFromDisplayName: string
  smtpHost: string
  smtpPort: number
  smtpUserName: string
  smtpPassword: string
  smtpDomain: string
  smtpEnableSsl: boolean
  smtpUseDefaultCredentials: boolean

  constructor(data) {
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

class TenantManagementSettingsEditDto {
  allowSelfRegistration: boolean
  isNewRegisteredTenantActiveByDefault: boolean
  useCaptchaOnRegistration: boolean
  defaultEditionId: number

  constructor(data) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration']
      this['isNewRegisteredTenantActiveByDefault'] = data['isNewRegisteredTenantActiveByDefault']
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration']
      this['defaultEditionId'] = data['defaultEditionId']
    }
  }
}

class SecuritySettingsEditDto {
  useDefaultPasswordComplexitySettings: boolean
  passwordComplexity: PasswordComplexitySetting
  defaultPasswordComplexity: PasswordComplexitySetting
  userLockOut: UserLockOutSettingsEditDto
  twoFactorLogin: TwoFactorLoginSettingsEditDto

  constructor(data) {
    if (data) {
      this['useDefaultPasswordComplexitySettings'] = data['useDefaultPasswordComplexitySettings']
      this['passwordComplexity'] = data['passwordComplexity']
      this['defaultPasswordComplexity'] = data['defaultPasswordComplexity']
      this['userLockOut'] = data['userLockOut']
      this['twoFactorLogin'] = data['twoFactorLogin']
    }
  }
}

class HostBillingSettingsEditDto {
  legalName: string
  address: string

  constructor(data) {
    if (data) {
      this['legalName'] = data['legalName']
      this['address'] = data['address']
    }
  }
}

class PushSettingEditDto {
  iOSAppKey: string
  androidAppKey: string
  pages: PushMobilePagesSettingEditDto

  constructor(data) {
    if (data) {
      this['iOSAppKey'] = data['iOSAppKey']
      this['androidAppKey'] = data['androidAppKey']
      this['pages'] = data['pages']
    }
  }
}

class PasswordComplexitySetting {
  requireDigit: boolean
  requireLowercase: boolean
  requireNonAlphanumeric: boolean
  requireUppercase: boolean
  requiredLength: number

  constructor(data) {
    if (data) {
      this['requireDigit'] = data['requireDigit']
      this['requireLowercase'] = data['requireLowercase']
      this['requireNonAlphanumeric'] = data['requireNonAlphanumeric']
      this['requireUppercase'] = data['requireUppercase']
      this['requiredLength'] = data['requiredLength']
    }
  }
}

class UserLockOutSettingsEditDto {
  isEnabled: boolean
  maxFailedAccessAttemptsBeforeLockout: number
  defaultAccountLockoutSeconds: number

  constructor(data) {
    if (data) {
      this['isEnabled'] = data['isEnabled']
      this['maxFailedAccessAttemptsBeforeLockout'] = data['maxFailedAccessAttemptsBeforeLockout']
      this['defaultAccountLockoutSeconds'] = data['defaultAccountLockoutSeconds']
    }
  }
}

class TwoFactorLoginSettingsEditDto {
  isEnabledForApplication: boolean
  isEnabled: boolean
  isEmailProviderEnabled: boolean
  isSmsProviderEnabled: boolean
  isRememberBrowserEnabled: boolean
  isGoogleAuthenticatorEnabled: boolean

  constructor(data) {
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

class PushMobilePagesSettingEditDto {
  keyCabinetDetailPage: string
  wireCabinetDetailPage: string
  safetyWearDetailPage: string

  constructor(data) {
    if (data) {
      this['keyCabinetDetailPage'] = data['keyCabinetDetailPage']
      this['wireCabinetDetailPage'] = data['wireCabinetDetailPage']
      this['safetyWearDetailPage'] = data['safetyWearDetailPage']
    }
  }
}

class SendTestEmailInput {
  emailAddress: string

  constructor(data) {
    if (data) {
      this['emailAddress'] = data['emailAddress']
    }
  }
}

class InstallDto {
  connectionString: string
  adminPassword: string
  webSiteUrl: string
  serverUrl: string
  defaultLanguage: string
  smtpSettings: EmailSettingsEditDto
  billInfo: HostBillingSettingsEditDto

  constructor(data) {
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

class AppSettingsJsonDto {
  webSiteUrl: string
  serverSiteUrl: string
  languages: NameValue[]

  constructor(data) {
    if (data) {
      this['webSiteUrl'] = data['webSiteUrl']
      this['serverSiteUrl'] = data['serverSiteUrl']
      this['languages'] = data['languages']
    }
  }
}

class CheckDatabaseOutput {
  isDatabaseExist: boolean

  constructor(data) {
    if (data) {
      this['isDatabaseExist'] = data['isDatabaseExist']
    }
  }
}

class IntelligentLockInput {
  deviceId: number
  roleId: number
  isEst: boolean
  tenantId: number
  stationId: number

  constructor(data) {
    if (data) {
      this['deviceId'] = data['deviceId']
      this['roleId'] = data['roleId']
      this['isEst'] = data['isEst']
      this['tenantId'] = data['tenantId']
      this['stationId'] = data['stationId']
    }
  }
}

class IntelligentLockOutput {
  id: number
  deviceId: number
  isEst: boolean

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['deviceId'] = data['deviceId']
      this['isEst'] = data['isEst']
    }
  }
}

class IntelligentLockDetailOutput {
  deviceAreaId: number
  deviceAreaName: string
  stationId: number
  sortId: number
  childrens: IntelligentLockDetailOutput[]
  devices: DeviceDetailOutput[]

  constructor(data) {
    if (data) {
      this['deviceAreaId'] = data['deviceAreaId']
      this['deviceAreaName'] = data['deviceAreaName']
      this['stationId'] = data['stationId']
      this['sortId'] = data['sortId']
      this['childrens'] = data['childrens']
      this['devices'] = data['devices']
    }
  }
}

class DeviceDetailOutput {
  id: number
  deviceId: number
  deviceName: string
  deviceDescription: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['deviceId'] = data['deviceId']
      this['deviceName'] = data['deviceName']
      this['deviceDescription'] = data['deviceDescription']
    }
  }
}

class InvoiceDto {
  amount: number
  editionDisplayName: string
  invoiceNo: string
  invoiceDate: string
  tenantLegalName: string
  tenantAddress: string[]
  tenantTaxNo: string
  hostLegalName: string
  hostAddress: string[]

  constructor(data) {
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

class CreateInvoiceDto {
  subscriptionPaymentId: number

  constructor(data) {
    if (data) {
      this['subscriptionPaymentId'] = data['subscriptionPaymentId']
    }
  }
}

class KeyCabinetApplyInput {
  taskName: string
  equipmentPropertyId: number
  applicantId: number
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
  applyReasonNote: string
  approverIdArray: string
  expiredDate: string
  isAllowToSelectApproverType: boolean
  approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover'

  constructor(data) {
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

class ApiResultOutput {
  result: boolean
  code: number
  data: string
  message: string

  constructor(data) {
    if (data) {
      this['result'] = data['result']
      this['code'] = data['code']
      this['data'] = data['data']
      this['message'] = data['message']
    }
  }
}

class KeyCabinetApproveInput {
  equipmentPropertyId: number
  approverId: number
  isApprovePass: boolean
  approveNote: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['approverId'] = data['approverId']
      this['isApprovePass'] = data['isApprovePass']
      this['approveNote'] = data['approveNote']
    }
  }
}

class KeyCabinetUnlockInput {
  equipmentPropertyId: number
  operatorId: number
  unLockReason: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['operatorId'] = data['operatorId']
      this['unLockReason'] = data['unLockReason']
    }
  }
}

class KeyCabinetUnlockOutput {
  unlockCode: string

  constructor(data) {
    if (data) {
      this['unlockCode'] = data['unlockCode']
    }
  }
}

class KeyCabinetOpenDoorInput {
  operatorId: number
  equipmentPropertyId: number

  constructor(data) {
    if (data) {
      this['operatorId'] = data['operatorId']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

class KeyCabinetValueTextDto {
  value: number
  text: string

  constructor(data) {
    if (data) {
      this['value'] = data['value']
      this['text'] = data['text']
    }
  }
}

class KeyCabinetTaskOutput {
  equipmentPropertyId: number
  isNeedApprove: boolean
  isApproverCanUnlockDirectly: boolean
  isApplicantCanEndTask: boolean
  unlockMode: 'Online' | 'Bluetooth' | 'Password'
  lockMode: 'LockerDoor' | 'LockerBuckle'
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
  applicantId: number
  applyTime: string
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
  applyReasonNote: string
  applyReasonPhotoId: string
  applyReasonVoiceId: string
  approveFlowItems: KeyCabinetApproveFlowItemDto[]
  currentApproveFlowItem: KeyCabinetApproveFlowItemDto
  unlockTime: string
  unlockCode: string
  unlockTimeoutTime: string
  takenTime: string
  returnTime: string
  expiredDate: string
  equipmentId: number
  equipmentName: string
  equipmentPropertyName: string
  equipmentPropertyDisplayName: string
  equipmentPropertyValue: string
  stationId: number
  stationName: string
  applicantName: string
  applyReasonEnumName: string
  isExpired: boolean
  taskName: string
  equipmentPropertyNameForLog: string
  applyReasonNameForLog: string
  unlockReasonForLog: string
  operatorId: number
  operatorName: string
  guardianId: number
  guardianName: string
  isAllowToSelectApproverType: boolean
  approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover'
  endTaskTime: string

  constructor(data) {
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

class KeyCabinetApproveFlowItemDto {
  roles: string
  rolesNames: string
  approverId: number
  approverName: string
  isApprovePassed: boolean
  approveTime: string
  approveNote: string
  sortIndex: number

  constructor(data) {
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

class KeyCabinetEndTaskInput {
  applicantId: number
  equipmentPropertyId: number

  constructor(data) {
    if (data) {
      this['applicantId'] = data['applicantId']
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

class KeyCabinetOperatorDto {
  id: number
  name: string
  surname: string
  userName: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
    }
  }
}

class KeyCarbinetLogListOutput {
  logId: number
  log: KeyCabinetTaskOutput

  constructor(data) {
    if (data) {
      this['logId'] = data['logId']
      this['log'] = data['log']
    }
  }
}

class KeyCarbinetLogInput {
  logId: number
  taskName: string
  equipmentPropertyNameForLog: string
  applyReasonNameForLog: string

  constructor(data) {
    if (data) {
      this['logId'] = data['logId']
      this['taskName'] = data['taskName']
      this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog']
      this['applyReasonNameForLog'] = data['applyReasonNameForLog']
    }
  }
}

class GetLanguagesOutput {
  defaultLanguageName: string
  items: ApplicationLanguageListDto[]

  constructor(data) {
    if (data) {
      this['defaultLanguageName'] = data['defaultLanguageName']
      this['items'] = data['items']
    }
  }
}

class ApplicationLanguageListDto {
  tenantId: number
  name: string
  displayName: string
  icon: string
  isDisabled: boolean
  isDeleted: boolean
  deleterUserId: number
  deletionTime: string
  lastModificationTime: string
  lastModifierUserId: number
  creationTime: string
  creatorUserId: number
  id: number

  constructor(data) {
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

class GetLanguageForEditOutput {
  language: ApplicationLanguageEditDto
  languageNames: ComboboxItemDto[]
  flags: ComboboxItemDto[]

  constructor(data) {
    if (data) {
      this['language'] = data['language']
      this['languageNames'] = data['languageNames']
      this['flags'] = data['flags']
    }
  }
}

class ApplicationLanguageEditDto {
  id: number
  name: string
  icon: string
  isEnabled: boolean

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['icon'] = data['icon']
      this['isEnabled'] = data['isEnabled']
    }
  }
}

class CreateOrUpdateLanguageInput {
  language: ApplicationLanguageEditDto

  constructor(data) {
    if (data) {
      this['language'] = data['language']
    }
  }
}

class SetDefaultLanguageInput {
  name: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
    }
  }
}

class LanguageTextListDto {
  key: string
  baseValue: string
  targetValue: string

  constructor(data) {
    if (data) {
      this['key'] = data['key']
      this['baseValue'] = data['baseValue']
      this['targetValue'] = data['targetValue']
    }
  }
}

class UpdateLanguageTextInput {
  languageName: string
  sourceName: string
  key: string
  value: string

  constructor(data) {
    if (data) {
      this['languageName'] = data['languageName']
      this['sourceName'] = data['sourceName']
      this['key'] = data['key']
      this['value'] = data['value']
    }
  }
}

class GetNotificationsOutput {
  unreadCount: number
  totalCount: number
  items: UserNotification[]

  constructor(data) {
    if (data) {
      this['unreadCount'] = data['unreadCount']
      this['totalCount'] = data['totalCount']
      this['items'] = data['items']
    }
  }
}

class UserNotification {
  tenantId: number
  userId: number
  state: 'Unread' | 'Read'
  notification: TenantNotification
  id: string

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
      this['state'] = data['state']
      this['notification'] = data['notification']
      this['id'] = data['id']
    }
  }
}

class TenantNotification {
  tenantId: number
  notificationName: string
  data: NotificationData
  entityType: string
  entityTypeName: string
  entityId: object
  severity: 'Info' | 'Success' | 'Warn' | 'Error' | 'Fatal'
  creationTime: string
  id: string

  constructor(data) {
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

class NotificationData {
  type: string
  properties: object

  constructor(data) {
    if (data) {
      this['type'] = data['type']
      this['properties'] = data['properties']
    }
  }
}

class GetNotificationSettingsOutput {
  receiveNotifications: boolean
  notifications: NotificationSubscriptionWithDisplayNameDto[]

  constructor(data) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications']
      this['notifications'] = data['notifications']
    }
  }
}

class NotificationSubscriptionWithDisplayNameDto {
  displayName: string
  description: string
  name: string
  isSubscribed: boolean

  constructor(data) {
    if (data) {
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['name'] = data['name']
      this['isSubscribed'] = data['isSubscribed']
    }
  }
}

class UpdateNotificationSettingsInput {
  receiveNotifications: boolean
  notifications: NotificationSubscriptionDto[]

  constructor(data) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications']
      this['notifications'] = data['notifications']
    }
  }
}

class NotificationSubscriptionDto {
  name: string
  isSubscribed: boolean

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['isSubscribed'] = data['isSubscribed']
    }
  }
}

class GetOperationRecordOutput {
  infoDto: OperationRecordInfoDto
  itemDtos: OperationRecordItemListDto[]

  constructor(data) {
    if (data) {
      this['infoDto'] = data['infoDto']
      this['itemDtos'] = data['itemDtos']
    }
  }
}

class OperationRecordInfoDto {
  title: string
  applicant: string
  approver: string
  equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  startTime: string
  status: string
  recordLevel: 'Gray' | 'Green' | 'Red'
  photoIds: string[]

  constructor(data) {
    if (data) {
      this['title'] = data['title']
      this['applicant'] = data['applicant']
      this['approver'] = data['approver']
      this['equipmentType'] = data['equipmentType']
      this['startTime'] = data['startTime']
      this['status'] = data['status']
      this['recordLevel'] = data['recordLevel']
      this['photoIds'] = data['photoIds']
    }
  }
}

class OperationRecordItemListDto {
  operationTime: string
  operationDescription: string

  constructor(data) {
    if (data) {
      this['operationTime'] = data['operationTime']
      this['operationDescription'] = data['operationDescription']
    }
  }
}

class OperationRecordListDto {
  title: string
  applicant: string
  approver: string
  equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  startTime: string
  status: string
  recordLevel: 'Gray' | 'Green' | 'Red'
  id: number

  constructor(data) {
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

class OrganizationUnitDto {
  parentId: number
  code: string
  displayName: string
  memberCount: number
  lastModificationTime: string
  lastModifierUserId: number
  creationTime: string
  creatorUserId: number
  id: number

  constructor(data) {
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

class OrganizationUnitUserListDto {
  name: string
  surname: string
  userName: string
  emailAddress: string
  profilePictureId: string
  addedTime: string
  id: number

  constructor(data) {
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

class CreateOrganizationUnitInput {
  parentId: number
  displayName: string

  constructor(data) {
    if (data) {
      this['parentId'] = data['parentId']
      this['displayName'] = data['displayName']
    }
  }
}

class UpdateOrganizationUnitInput {
  id: number
  displayName: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['displayName'] = data['displayName']
    }
  }
}

class MoveOrganizationUnitInput {
  id: number
  newParentId: number

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['newParentId'] = data['newParentId']
    }
  }
}

class UsersToOrganizationUnitInput {
  userIds: number[]
  organizationUnitId: number

  constructor(data) {
    if (data) {
      this['userIds'] = data['userIds']
      this['organizationUnitId'] = data['organizationUnitId']
    }
  }
}

class FindOrganizationUnitUsersInput {
  organizationUnitId: number
  maxResultCount: number
  skipCount: number
  filter: string

  constructor(data) {
    if (data) {
      this['organizationUnitId'] = data['organizationUnitId']
      this['maxResultCount'] = data['maxResultCount']
      this['skipCount'] = data['skipCount']
      this['filter'] = data['filter']
    }
  }
}

class PaymentInfoDto {
  edition: EditionSelectDto
  additionalPrice: number

  constructor(data) {
    if (data) {
      this['edition'] = data['edition']
      this['additionalPrice'] = data['additionalPrice']
    }
  }
}

class EditionSelectDto {
  id: number
  name: string
  displayName: string
  expiringEditionId: number
  monthlyPrice: number
  annualPrice: number
  trialDayCount: number
  waitingDayAfterExpire: number
  isFree: boolean
  additionalData: object

  constructor(data) {
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

class CreatePaymentDto {
  editionId: number
  editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend'
  paymentPeriodType: 'Monthly' | 'Annual'
  subscriptionPaymentGatewayType: 'Paypal'

  constructor(data) {
    if (data) {
      this['editionId'] = data['editionId']
      this['editionPaymentType'] = data['editionPaymentType']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['subscriptionPaymentGatewayType'] = data['subscriptionPaymentGatewayType']
    }
  }
}

class CreatePaymentResponse {
  constructor(data) {
    if (data) {
    }
  }
}

class ExecutePaymentDto {
  gateway: 'Paypal'
  editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend'
  editionId: number
  paymentPeriodType: 'Monthly' | 'Annual'
  additionalData: object

  constructor(data) {
    if (data) {
      this['gateway'] = data['gateway']
      this['editionPaymentType'] = data['editionPaymentType']
      this['editionId'] = data['editionId']
      this['paymentPeriodType'] = data['paymentPeriodType']
      this['additionalData'] = data['additionalData']
    }
  }
}

class ExecutePaymentResponse {
  constructor(data) {
    if (data) {
    }
  }
}

class SubscriptionPaymentListDto {
  gateway: string
  amount: number
  editionId: number
  dayCount: number
  paymentPeriodType: string
  paymentId: string
  payerId: string
  status: string
  editionDisplayName: string
  tenantId: number
  invoiceNo: string
  lastModificationTime: string
  lastModifierUserId: number
  creationTime: string
  creatorUserId: number
  id: number

  constructor(data) {
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

class PendingDto {
  id: number
  pendingType: 'KeyCabinet' | 'WireCabinet'
  applicantId: number
  applyTime: string
  title: string
  subTitle: string
  expiredDate: string
  isExpired: boolean
  taskStep: number

  constructor(data) {
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

class FlatPermissionWithLevelDto {
  level: number
  parentName: string
  name: string
  displayName: string
  description: string
  isGrantedByDefault: boolean

  constructor(data) {
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

class ProductListDto {
  name: string
  description: string
  creationTime: string
  type: string
  model: string
  id: number

  constructor(data) {
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

class GetProductEditOutput {
  product: ProductEditDto
  productProperties: ProductPropertyListDto[]

  constructor(data) {
    if (data) {
      this['product'] = data['product']
      this['productProperties'] = data['productProperties']
    }
  }
}

class ProductEditDto {
  name: string
  description: string
  type: string
  model: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['type'] = data['type']
      this['model'] = data['model']
      this['id'] = data['id']
    }
  }
}

class ProductPropertyListDto {
  name: string
  description: string
  displayName: string
  value: string
  type: string
  bitType: string
  creationTime: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['creationTime'] = data['creationTime']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateProductInput {
  product: CreateOrUpdateProductDto
  productProperties: ProductPropertyEditDto[]

  constructor(data) {
    if (data) {
      this['product'] = data['product']
      this['productProperties'] = data['productProperties']
    }
  }
}

class CreateOrUpdateProductDto {
  name: string
  description: string
  type: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  model: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['type'] = data['type']
      this['model'] = data['model']
      this['id'] = data['id']
    }
  }
}

class ProductPropertyEditDto {
  name: string
  displayName: string
  value: string
  description: string
  type: 'BaseProperty' | 'CommunicationProperty'
  bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite'
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['value'] = data['value']
      this['description'] = data['description']
      this['type'] = data['type']
      this['bitType'] = data['bitType']
      this['id'] = data['id']
    }
  }
}

class GetProductPropertyEditOutput {
  productProperty: ProductPropertyEditDto

  constructor(data) {
    if (data) {
      this['productProperty'] = data['productProperty']
    }
  }
}

class CreateOrUpdateProductPropertyInput {
  productProperty: ProductPropertyEditDto

  constructor(data) {
    if (data) {
      this['productProperty'] = data['productProperty']
    }
  }
}

class CurrentUserProfileEditDto {
  name: string
  surname: string
  userName: string
  emailAddress: string
  phoneNumber: string
  isPhoneNumberConfirmed: boolean
  timezone: string
  qrCodeSetupImageUrl: string
  isGoogleAuthenticatorEnabled: boolean

  constructor(data) {
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

class UpdateGoogleAuthenticatorKeyOutput {
  qrCodeSetupImageUrl: string

  constructor(data) {
    if (data) {
      this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl']
    }
  }
}

class VerifySmsCodeInputDto {
  code: string

  constructor(data) {
    if (data) {
      this['code'] = data['code']
    }
  }
}

class ChangePasswordInput {
  currentPassword: string
  newPassword: string

  constructor(data) {
    if (data) {
      this['currentPassword'] = data['currentPassword']
      this['newPassword'] = data['newPassword']
    }
  }
}

class UpdateProfilePictureInput {
  fileName: string
  x: number
  y: number
  width: number
  height: number

  constructor(data) {
    if (data) {
      this['fileName'] = data['fileName']
      this['x'] = data['x']
      this['y'] = data['y']
      this['width'] = data['width']
      this['height'] = data['height']
    }
  }
}

class GetPasswordComplexitySettingOutput {
  setting: PasswordComplexitySetting

  constructor(data) {
    if (data) {
      this['setting'] = data['setting']
    }
  }
}

class GetProfilePictureOutput {
  profilePicture: string

  constructor(data) {
    if (data) {
      this['profilePicture'] = data['profilePicture']
    }
  }
}

class ChangeUserLanguageDto {
  languageName: string

  constructor(data) {
    if (data) {
      this['languageName'] = data['languageName']
    }
  }
}

class RoleListDto {
  name: string
  displayName: string
  isStatic: boolean
  isDefault: boolean
  creationTime: string
  id: number

  constructor(data) {
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

class GetRoleForEditOutput {
  role: RoleEditDto
  permissions: FlatPermissionDto[]
  grantedPermissionNames: string[]

  constructor(data) {
    if (data) {
      this['role'] = data['role']
      this['permissions'] = data['permissions']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

class RoleEditDto {
  id: number
  displayName: string
  isDefault: boolean

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['displayName'] = data['displayName']
      this['isDefault'] = data['isDefault']
    }
  }
}

class FlatPermissionDto {
  parentName: string
  name: string
  displayName: string
  description: string
  isGrantedByDefault: boolean

  constructor(data) {
    if (data) {
      this['parentName'] = data['parentName']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['isGrantedByDefault'] = data['isGrantedByDefault']
    }
  }
}

class CreateOrUpdateRoleInput {
  role: RoleEditDto
  grantedPermissionNames: string[]

  constructor(data) {
    if (data) {
      this['role'] = data['role']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

class SafetyWearMonitoringInput {
  userId: number
  macAddress: string
  equipmentNo: number
  workState: boolean
  usingState: boolean
  heartRate: number
  systolicPressure: number
  diastolicPressure: number
  longitude: number
  latitude: number

  constructor(data) {
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

class SafetyWearMonitoringOutput {
  userName: string
  createTime: string
  userId: number
  stationId: number
  equipmentId: number
  macAddress: string
  equipmentNo: number
  workState: boolean
  usingState: boolean
  heartRate: number
  systolicPressure: number
  diastolicPressure: number
  longitude: number
  latitude: number
  updateTime: string

  constructor(data) {
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

class EquipmentInfoOutput {
  equipmentId: number
  macAddress: string
  name: string
  description: string
  tenantId: number
  stationId: number

  constructor(data) {
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

class SafetyWearUserOutput {
  userId: number
  userName: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['userName'] = data['userName']
    }
  }
}

class GetCurrentLoginInformationsOutput {
  user: UserLoginInfoDto
  tenant: TenantLoginInfoDto
  application: ApplicationInfoDto

  constructor(data) {
    if (data) {
      this['user'] = data['user']
      this['tenant'] = data['tenant']
      this['application'] = data['application']
    }
  }
}

class UserLoginInfoDto {
  name: string
  surname: string
  userName: string
  emailAddress: string
  profilePictureId: string
  id: number

  constructor(data) {
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

class TenantLoginInfoDto {
  tenancyName: string
  name: string
  logoId: string
  logoFileType: string
  customCssId: string
  subscriptionEndDateUtc: string
  isInTrialPeriod: boolean
  edition: EditionInfoDto
  creationTime: string
  paymentPeriodType: 'Monthly' | 'Annual'
  subscriptionDateString: string
  creationTimeString: string
  id: number

  constructor(data) {
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

class ApplicationInfoDto {
  version: string
  releaseDate: string
  features: object

  constructor(data) {
    if (data) {
      this['version'] = data['version']
      this['releaseDate'] = data['releaseDate']
      this['features'] = data['features']
    }
  }
}

class EditionInfoDto {
  displayName: string
  trialDayCount: number
  monthlyPrice: number
  annualPrice: number
  isHighestEdition: boolean
  isFree: boolean
  id: number

  constructor(data) {
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

class UpdateUserSignInTokenOutput {
  signInToken: string
  encodedUserId: string
  encodedTenantId: string

  constructor(data) {
    if (data) {
      this['signInToken'] = data['signInToken']
      this['encodedUserId'] = data['encodedUserId']
      this['encodedTenantId'] = data['encodedTenantId']
    }
  }
}

class StationListDto {
  name: string
  description: string
  no: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

class GetStationEditOutput {
  station: GetStationEditDto

  constructor(data) {
    if (data) {
      this['station'] = data['station']
    }
  }
}

class GetStationEditDto {
  name: string
  description: string
  sortId: number
  no: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['sortId'] = data['sortId']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateStationInput {
  station: CreateOrUpdateStationDto

  constructor(data) {
    if (data) {
      this['station'] = data['station']
    }
  }
}

class CreateOrUpdateStationDto {
  name: string
  description: string
  sortId: number
  no: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['sortId'] = data['sortId']
      this['no'] = data['no']
      this['id'] = data['id']
    }
  }
}

class BindEquipmentStationInput {
  stationId: number
  equipmentIds: number[]

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['equipmentIds'] = data['equipmentIds']
    }
  }
}

class CreateStationUserInput {
  stationUserDtos: StationUserDto[]

  constructor(data) {
    if (data) {
      this['stationUserDtos'] = data['stationUserDtos']
    }
  }
}

class StationUserDto {
  stationId: number
  userId: number

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['userId'] = data['userId']
    }
  }
}

class CreateStationAreaInput {
  name: string
  parentId: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['parentId'] = data['parentId']
    }
  }
}

class StationAreaDto {
  stationAreaId: number
  stationAreaName: string
  stationAreaParentId: number
  stationDtos: StationDto[]

  constructor(data) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId']
      this['stationAreaName'] = data['stationAreaName']
      this['stationAreaParentId'] = data['stationAreaParentId']
      this['stationDtos'] = data['stationDtos']
    }
  }
}

class StationDto {
  stationName: string
  stationId: number

  constructor(data) {
    if (data) {
      this['stationName'] = data['stationName']
      this['stationId'] = data['stationId']
    }
  }
}

class UpdateStationAreaInput {
  name: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['id'] = data['id']
    }
  }
}

class MoveStationAreaInput {
  id: number
  parentId: number

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['parentId'] = data['parentId']
    }
  }
}

class StationAreaWithEquipment {
  stationAreaId: number
  stationAreaName: string
  stationAreaParentId: number
  childrenCount: number
  stations: StationInArea[]

  constructor(data) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId']
      this['stationAreaName'] = data['stationAreaName']
      this['stationAreaParentId'] = data['stationAreaParentId']
      this['childrenCount'] = data['childrenCount']
      this['stations'] = data['stations']
    }
  }
}

class StationInArea {
  stationId: number
  stationName: string
  equipments: EquipmentInStation[]

  constructor(data) {
    if (data) {
      this['stationId'] = data['stationId']
      this['stationName'] = data['stationName']
      this['equipments'] = data['equipments']
    }
  }
}

class EquipmentInStation {
  id: number
  name: string
  lastModificationTime: string
  productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear'
  description: string
  stationId: number
  stationName: string
  isOnline: boolean
  equipmentBaseProperties: BasePropertyInEquipment[]

  constructor(data) {
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

class BasePropertyInEquipment {
  name: string
  displayName: string
  description: string
  value: string
  config: string
  operation: string
  id: number

  constructor(data) {
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

class StationAreaBindStationInput {
  stationIds: number[]
  id: number

  constructor(data) {
    if (data) {
      this['stationIds'] = data['stationIds']
      this['id'] = data['id']
    }
  }
}

class UserListByStationIdDto {
  userName: string
  lastModificationTime: string
  id: number

  constructor(data) {
    if (data) {
      this['userName'] = data['userName']
      this['lastModificationTime'] = data['lastModificationTime']
      this['id'] = data['id']
    }
  }
}

class StationOrganizationUserDto {
  displayName: string
  parentId: number
  userListDtos: StationUserListDto[]
  id: number

  constructor(data) {
    if (data) {
      this['displayName'] = data['displayName']
      this['parentId'] = data['parentId']
      this['userListDtos'] = data['userListDtos']
      this['id'] = data['id']
    }
  }
}

class StationUserListDto {
  userId: number
  userName: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['userName'] = data['userName']
    }
  }
}

class TenantListDto {
  tenancyName: string
  name: string
  editionDisplayName: string
  connectionString: string
  isActive: boolean
  creationTime: string
  subscriptionEndDateUtc: string
  editionId: number
  isInTrialPeriod: boolean
  id: number

  constructor(data) {
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

class CreateTenantInput {
  tenancyName: string
  name: string
  adminEmailAddress: string
  adminPassword: string
  connectionString: string
  shouldChangePasswordOnNextLogin: boolean
  sendActivationEmail: boolean
  editionId: number
  isActive: boolean
  subscriptionEndDateUtc: string
  isInTrialPeriod: boolean

  constructor(data) {
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

class TenantEditDto {
  tenancyName: string
  name: string
  connectionString: string
  editionId: number
  isActive: boolean
  subscriptionEndDateUtc: string
  isInTrialPeriod: boolean
  id: number

  constructor(data) {
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

class GetTenantFeaturesEditOutput {
  featureValues: NameValueDto[]
  features: FlatFeatureDto[]

  constructor(data) {
    if (data) {
      this['featureValues'] = data['featureValues']
      this['features'] = data['features']
    }
  }
}

class UpdateTenantFeaturesInput {
  id: number
  featureValues: NameValueDto[]

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['featureValues'] = data['featureValues']
    }
  }
}

class GetMemberActivityOutput {
  memberActivities: MemberActivity[]

  constructor(data) {
    if (data) {
      this['memberActivities'] = data['memberActivities']
    }
  }
}

class MemberActivity {
  name: string
  earnings: string
  cases: number
  closed: number
  rate: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['earnings'] = data['earnings']
      this['cases'] = data['cases']
      this['closed'] = data['closed']
      this['rate'] = data['rate']
    }
  }
}

class GetDashboardDataOutput {
  totalProfit: number
  newFeedbacks: number
  newOrders: number
  newUsers: number
  salesSummary: SalesSummaryData[]
  totalSales: number
  revenue: number
  expenses: number
  growth: number
  transactionPercent: number
  newVisitPercent: number
  bouncePercent: number
  dailySales: number[]
  profitShares: number[]

  constructor(data) {
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

class SalesSummaryData {
  period: string
  sales: number
  profit: number

  constructor(data) {
    if (data) {
      this['period'] = data['period']
      this['sales'] = data['sales']
      this['profit'] = data['profit']
    }
  }
}

class GetSalesSummaryOutput {
  salesSummary: SalesSummaryData[]

  constructor(data) {
    if (data) {
      this['salesSummary'] = data['salesSummary']
    }
  }
}

class GetWorldMapInput {
  constructor(data) {
    if (data) {
    }
  }
}

class GetWorldMapOutput {
  countries: WorldMapCountry[]

  constructor(data) {
    if (data) {
      this['countries'] = data['countries']
    }
  }
}

class WorldMapCountry {
  countryName: string
  color: number

  constructor(data) {
    if (data) {
      this['countryName'] = data['countryName']
      this['color'] = data['color']
    }
  }
}

class GetGeneralStatsInput {
  constructor(data) {
    if (data) {
    }
  }
}

class GetGeneralStatsOutput {
  transactionPercent: number
  newVisitPercent: number
  bouncePercent: number

  constructor(data) {
    if (data) {
      this['transactionPercent'] = data['transactionPercent']
      this['newVisitPercent'] = data['newVisitPercent']
      this['bouncePercent'] = data['bouncePercent']
    }
  }
}

class RegisterTenantInput {
  tenancyName: string
  name: string
  adminEmailAddress: string
  adminPassword: string
  captchaResponse: string
  subscriptionStartType: 'Free' | 'Trial' | 'Paid'
  gateway: 'Paypal'
  editionId: number
  paymentId: string

  constructor(data) {
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

class RegisterTenantOutput {
  tenantId: number
  tenancyName: string
  name: string
  userName: string
  emailAddress: string
  isTenantActive: boolean
  isActive: boolean
  isEmailConfirmationRequired: boolean

  constructor(data) {
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

class EditionsSelectOutput {
  allFeatures: FlatFeatureSelectDto[]
  editionsWithFeatures: EditionWithFeaturesDto[]
  tenantEditionId: number

  constructor(data) {
    if (data) {
      this['allFeatures'] = data['allFeatures']
      this['editionsWithFeatures'] = data['editionsWithFeatures']
      this['tenantEditionId'] = data['tenantEditionId']
    }
  }
}

class FlatFeatureSelectDto {
  parentName: string
  name: string
  displayName: string
  description: string
  defaultValue: string
  inputType: IInputType
  textHtmlColor: string

  constructor(data) {
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

class EditionWithFeaturesDto {
  edition: EditionSelectDto
  featureValues: NameValueDto[]

  constructor(data) {
    if (data) {
      this['edition'] = data['edition']
      this['featureValues'] = data['featureValues']
    }
  }
}

class IInputType {
  name: string
  attributes: object
  validator: IValueValidator

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['attributes'] = data['attributes']
      this['validator'] = data['validator']
    }
  }
}

class TenantSettingsEditDto {
  general: GeneralSettingsEditDto
  userManagement: TenantUserManagementSettingsEditDto
  email: EmailSettingsEditDto
  ldap: LdapSettingsEditDto
  security: SecuritySettingsEditDto
  billing: TenantBillingSettingsEditDto

  constructor(data) {
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

class TenantUserManagementSettingsEditDto {
  allowSelfRegistration: boolean
  isNewRegisteredUserActiveByDefault: boolean
  isEmailConfirmationRequiredForLogin: boolean
  useCaptchaOnRegistration: boolean

  constructor(data) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration']
      this['isNewRegisteredUserActiveByDefault'] = data['isNewRegisteredUserActiveByDefault']
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin']
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration']
    }
  }
}

class LdapSettingsEditDto {
  isModuleEnabled: boolean
  isEnabled: boolean
  domain: string
  userName: string
  password: string

  constructor(data) {
    if (data) {
      this['isModuleEnabled'] = data['isModuleEnabled']
      this['isEnabled'] = data['isEnabled']
      this['domain'] = data['domain']
      this['userName'] = data['userName']
      this['password'] = data['password']
    }
  }
}

class TenantBillingSettingsEditDto {
  legalName: string
  address: string
  taxVatNo: string

  constructor(data) {
    if (data) {
      this['legalName'] = data['legalName']
      this['address'] = data['address']
      this['taxVatNo'] = data['taxVatNo']
    }
  }
}

class TerminalPortConfigListDto {
  lastModificationTime: string
  creationTime: string
  creatorUserId: number
  name: string
  portType: number
  terminalId: number
  protocolType: number
  id: number

  constructor(data) {
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

class GetTerminalPortConfigOutput {
  terminalPortConfig: TerminalPortConfigEditDto
  terminalPortBindEquipments: TerminalPortBindEquipmentDto[]

  constructor(data) {
    if (data) {
      this['terminalPortConfig'] = data['terminalPortConfig']
      this['terminalPortBindEquipments'] = data['terminalPortBindEquipments']
    }
  }
}

class TerminalPortConfigEditDto {
  lastModificationTime: string
  creationTime: string
  creatorUserId: number
  name: string
  portType: number
  terminalId: number
  protocolType: number
  config: string
  id: number

  constructor(data) {
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

class TerminalPortBindEquipmentDto {
  equipmentId: number
  productId: number
  terminalPortConfigId: number
  terminalId: number
  canChanged: boolean

  constructor(data) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['productId'] = data['productId']
      this['terminalPortConfigId'] = data['terminalPortConfigId']
      this['terminalId'] = data['terminalId']
      this['canChanged'] = data['canChanged']
    }
  }
}

class CreateOrUpdateTerminalPortConfigInput {
  configDto: CreateOrUpdateTerminalPortConfigDto

  constructor(data) {
    if (data) {
      this['configDto'] = data['configDto']
    }
  }
}

class CreateOrUpdateTerminalPortConfigDto {
  name: string
  portType: number
  config: string
  terminalId: number
  protocolType: number
  equipmentIds: number[]
  id: number

  constructor(data) {
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

class TerminalListDto {
  name: string
  description: string
  creationTime: string
  accessKey: string
  accessSecret: string
  id: number

  constructor(data) {
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

class GetTerminalEditOutput {
  terminal: TerminalEditDto

  constructor(data) {
    if (data) {
      this['terminal'] = data['terminal']
    }
  }
}

class TerminalEditDto {
  name: string
  description: string
  accessKey: string
  accessSecret: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['accessKey'] = data['accessKey']
      this['accessSecret'] = data['accessSecret']
      this['id'] = data['id']
    }
  }
}

class CreateOrUpdateTerminalInput {
  terminal: CreateOrUpdateTerminalDto

  constructor(data) {
    if (data) {
      this['terminal'] = data['terminal']
    }
  }
}

class CreateOrUpdateTerminalDto {
  name: string
  description: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['description'] = data['description']
      this['id'] = data['id']
    }
  }
}

class ResetTerminalInput {
  terminalId: number

  constructor(data) {
    if (data) {
      this['terminalId'] = data['terminalId']
    }
  }
}

class AuthenticateModel {
  userNameOrEmailAddress: string
  password: string
  twoFactorVerificationCode: string
  rememberClient: boolean
  twoFactorRememberClientToken: string
  singleSignIn: boolean
  returnUrl: string

  constructor(data) {
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

class AuthenticateResultModel {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number
  shouldResetPassword: boolean
  passwordResetCode: string
  userId: number
  requiresTwoFactorVerification: boolean
  twoFactorAuthProviders: string[]
  twoFactorRememberClientToken: string
  returnUrl: string

  constructor(data) {
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

class SendTwoFactorAuthCodeModel {
  userId: number
  provider: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['provider'] = data['provider']
    }
  }
}

class ImpersonatedAuthenticateResultModel {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number

  constructor(data) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
    }
  }
}

class SwitchedAccountAuthenticateResultModel {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number

  constructor(data) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
    }
  }
}

class ExternalLoginProviderInfoModel {
  name: string
  clientId: string

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['clientId'] = data['clientId']
    }
  }
}

class ExternalAuthenticateModel {
  authProvider: string
  providerKey: string
  providerAccessCode: string
  returnUrl: string
  singleSignIn: boolean

  constructor(data) {
    if (data) {
      this['authProvider'] = data['authProvider']
      this['providerKey'] = data['providerKey']
      this['providerAccessCode'] = data['providerAccessCode']
      this['returnUrl'] = data['returnUrl']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

class ExternalAuthenticateResultModel {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number
  waitingForActivation: boolean
  returnUrl: string

  constructor(data) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
      this['waitingForActivation'] = data['waitingForActivation']
      this['returnUrl'] = data['returnUrl']
    }
  }
}

class SecurityAuthenticateModel {
  authProvider: string
  providerKey: string
  singleSignIn: boolean

  constructor(data) {
    if (data) {
      this['authProvider'] = data['authProvider']
      this['providerKey'] = data['providerKey']
      this['singleSignIn'] = data['singleSignIn']
    }
  }
}

class SecurityAuthenticateResultModel {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number
  waitingForActivation: boolean
  userId: number

  constructor(data) {
    if (data) {
      this['accessToken'] = data['accessToken']
      this['encryptedAccessToken'] = data['encryptedAccessToken']
      this['expireInSeconds'] = data['expireInSeconds']
      this['waitingForActivation'] = data['waitingForActivation']
      this['userId'] = data['userId']
    }
  }
}

class UiCustomizationSettingsEditDto {
  layout: UiCustomizationLayoutSettingsEditDto
  header: UiCustomizationHeaderSettingsEditDto
  menu: UiCustomizationMenuSettingsEditDto
  footer: UiCustomizationFooterSettingsEditDto

  constructor(data) {
    if (data) {
      this['layout'] = data['layout']
      this['header'] = data['header']
      this['menu'] = data['menu']
      this['footer'] = data['footer']
    }
  }
}

class UiCustomizationLayoutSettingsEditDto {
  layoutType: string
  contentSkin: string

  constructor(data) {
    if (data) {
      this['layoutType'] = data['layoutType']
      this['contentSkin'] = data['contentSkin']
    }
  }
}

class UiCustomizationHeaderSettingsEditDto {
  desktopFixedHeader: boolean
  desktopMinimizeMode: string
  mobileFixedHeader: boolean
  dropdownSkinDesktop: string
  displaySubmenuArrowDesktop: boolean
  dropdownSkin: string

  constructor(data) {
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

class UiCustomizationMenuSettingsEditDto {
  position: string
  asideSkin: string
  fixedAside: boolean
  allowAsideMinimizing: boolean
  defaultMinimizedAside: boolean
  allowAsideHiding: boolean
  defaultHiddenAside: boolean
  submenuToggle: string
  dropdownSubmenuSkin: string
  dropdownSubmenuArrow: boolean

  constructor(data) {
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

class UiCustomizationFooterSettingsEditDto {
  fixedFooter: boolean

  constructor(data) {
    if (data) {
      this['fixedFooter'] = data['fixedFooter']
    }
  }
}

class UserListDto {
  name: string
  surname: string
  userName: string
  emailAddress: string
  phoneNumber: string
  profilePictureId: string
  isEmailConfirmed: boolean
  roles: UserListRoleDto[]
  lastLoginTime: string
  isActive: boolean
  creationTime: string
  id: number

  constructor(data) {
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

class UserListRoleDto {
  roleId: number
  roleName: string

  constructor(data) {
    if (data) {
      this['roleId'] = data['roleId']
      this['roleName'] = data['roleName']
    }
  }
}

class GetUserForEditOutput {
  profilePictureId: string
  user: UserEditDto
  roles: UserRoleDto[]
  allOrganizationUnits: OrganizationUnitDto[]
  memberedOrganizationUnits: string[]

  constructor(data) {
    if (data) {
      this['profilePictureId'] = data['profilePictureId']
      this['user'] = data['user']
      this['roles'] = data['roles']
      this['allOrganizationUnits'] = data['allOrganizationUnits']
      this['memberedOrganizationUnits'] = data['memberedOrganizationUnits']
    }
  }
}

class UserEditDto {
  id: number
  name: string
  surname: string
  userName: string
  emailAddress: string
  phoneNumber: string
  password: string
  isActive: boolean
  shouldChangePasswordOnNextLogin: boolean
  isTwoFactorEnabled: boolean
  isLockoutEnabled: boolean

  constructor(data) {
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

class UserRoleDto {
  roleId: number
  roleName: string
  roleDisplayName: string
  isAssigned: boolean

  constructor(data) {
    if (data) {
      this['roleId'] = data['roleId']
      this['roleName'] = data['roleName']
      this['roleDisplayName'] = data['roleDisplayName']
      this['isAssigned'] = data['isAssigned']
    }
  }
}

class GetUserPermissionsForEditOutput {
  permissions: FlatPermissionDto[]
  grantedPermissionNames: string[]

  constructor(data) {
    if (data) {
      this['permissions'] = data['permissions']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

class UpdateUserPermissionsInput {
  id: number
  grantedPermissionNames: string[]

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['grantedPermissionNames'] = data['grantedPermissionNames']
    }
  }
}

class CreateOrUpdateUserInput {
  user: UserEditDto
  assignedRoleNames: string[]
  sendActivationEmail: boolean
  setRandomPassword: boolean
  organizationUnits: number[]

  constructor(data) {
    if (data) {
      this['user'] = data['user']
      this['assignedRoleNames'] = data['assignedRoleNames']
      this['sendActivationEmail'] = data['sendActivationEmail']
      this['setRandomPassword'] = data['setRandomPassword']
      this['organizationUnits'] = data['organizationUnits']
    }
  }
}

class UserListForLoginDto {
  name: string
  surname: string
  userName: string
  id: number

  constructor(data) {
    if (data) {
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
      this['id'] = data['id']
    }
  }
}

class LinkToUserInput {
  tenancyName: string
  usernameOrEmailAddress: string
  password: string

  constructor(data) {
    if (data) {
      this['tenancyName'] = data['tenancyName']
      this['usernameOrEmailAddress'] = data['usernameOrEmailAddress']
      this['password'] = data['password']
    }
  }
}

class LinkedUserDto {
  tenantId: number
  tenancyName: string
  username: string
  lastLoginTime: string
  id: number

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['tenancyName'] = data['tenancyName']
      this['username'] = data['username']
      this['lastLoginTime'] = data['lastLoginTime']
      this['id'] = data['id']
    }
  }
}

class UnlinkUserInput {
  tenantId: number
  userId: number

  constructor(data) {
    if (data) {
      this['tenantId'] = data['tenantId']
      this['userId'] = data['userId']
    }
  }
}

class UserLoginAttemptDto {
  tenancyName: string
  userNameOrEmail: string
  clientIpAddress: string
  clientName: string
  browserInfo: string
  result: string
  creationTime: string

  constructor(data) {
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

class GetNfcCurrentUserLoginOutput {
  userLogin: UserLoginDto

  constructor(data) {
    if (data) {
      this['userLogin'] = data['userLogin']
    }
  }
}

class UserLoginDto {
  key: string

  constructor(data) {
    if (data) {
      this['key'] = data['key']
    }
  }
}

class CreateOrUpdateNfcUserLoginInput {
  userId: number
  key: string

  constructor(data) {
    if (data) {
      this['userId'] = data['userId']
      this['key'] = data['key']
    }
  }
}

class GetLatestWebLogsOutput {
  latestWebLogLines: string[]

  constructor(data) {
    if (data) {
      this['latestWebLogLines'] = data['latestWebLogLines']
    }
  }
}

class WireCabinetApplyInput {
  equipmentPropertyId: number
  applicantId: number
  applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason'
  applyReasonNote: string
  approverId: number

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['applicantId'] = data['applicantId']
      this['applyReason'] = data['applyReason']
      this['applyReasonNote'] = data['applyReasonNote']
      this['approverId'] = data['approverId']
    }
  }
}

class WireCabinetApproveInput {
  equipmentPropertyId: number
  approverId: number
  isApprovePass: boolean
  approveNote: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['approverId'] = data['approverId']
      this['isApprovePass'] = data['isApprovePass']
      this['approveNote'] = data['approveNote']
    }
  }
}

class WireCabinetUnlockInput {
  equipmentPropertyId: number

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

class WireCabinetUnlockOutput {
  unlockCode: string

  constructor(data) {
    if (data) {
      this['unlockCode'] = data['unlockCode']
    }
  }
}

class WireCabinetHookInput {
  equipmentPropertyId: number
  hookPosition: string
  photoIds: string[]

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['hookPosition'] = data['hookPosition']
      this['photoIds'] = data['photoIds']
    }
  }
}

class WireCabinetHook2Input {
  equipmentPropertyId: number
  photoIds: string[]
  deviceId: number

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['photoIds'] = data['photoIds']
      this['deviceId'] = data['deviceId']
    }
  }
}

class WireCabinetUnHookInput {
  equipmentPropertyId: number

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
    }
  }
}

class WireCabinetUpdateTaskInput {
  equipmentId: number
  status: WireCabinetStatusDto[]
  bluetooth: string

  constructor(data) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['status'] = data['status']
      this['bluetooth'] = data['bluetooth']
    }
  }
}

class WireCabinetStatusDto {
  buckleNo: number
  buckleStatus: 'Unkown' | 'Lock' | 'UnlockAndTake' | 'UnlockNotTake'

  constructor(data) {
    if (data) {
      this['buckleNo'] = data['buckleNo']
      this['buckleStatus'] = data['buckleStatus']
    }
  }
}

class WireCabinetValueTextDto {
  value: number
  text: string

  constructor(data) {
    if (data) {
      this['value'] = data['value']
      this['text'] = data['text']
    }
  }
}

class WireCabinetTaskOutput {
  equipmentId: number
  equipmentName: string
  equipmentPropertyName: string
  equipmentPropertyDisplayName: string
  equipmentPropertyValue: string
  stationId: number
  stationName: string
  applicantName: string
  approverName: string
  applyReasonEnumName: string
  equipmentPropertyId: number
  isNeedApprove: boolean
  isApproverCanUnlockDirectly: boolean
  unlockMode: 'Online' | 'Bluetooth' | 'Password'
  lockMode: 'LockerDoor' | 'LockerBuckle'
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
  applicantId: number
  applyTime: string
  applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason'
  applyReasonNote: string
  applyReasonPhotoId: string
  applyReasonVoiceId: string
  approverId: number
  approveTime: string
  isApprovePass: boolean
  approveNote: string
  unlockTime: string
  unlockCode: string
  unlockTimeoutTime: string
  takenTime: string
  hookTime: string
  hookPosition: string
  hookPhotoId: string
  unhookTime: string
  unhookPhotoId: string
  returnTime: string
  returnPhotoId: string
  takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow'

  constructor(data) {
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

class WireCabinetOperatorDto {
  id: number
  name: string
  surname: string
  userName: string

  constructor(data) {
    if (data) {
      this['id'] = data['id']
      this['name'] = data['name']
      this['surname'] = data['surname']
      this['userName'] = data['userName']
    }
  }
}

class UpdateOperateTimeInput {
  bluetooth: string
  wireOperateTimeDtos: WireOperateRecordDto[]

  constructor(data) {
    if (data) {
      this['bluetooth'] = data['bluetooth']
      this['wireOperateTimeDtos'] = data['wireOperateTimeDtos']
    }
  }
}

class WireOperateRecordDto {
  buckleNo: string
  operationTime: string
  takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow'
  markBit: 'TakeOut' | 'Return'

  constructor(data) {
    if (data) {
      this['buckleNo'] = data['buckleNo']
      this['operationTime'] = data['operationTime']
      this['takeReason'] = data['takeReason']
      this['markBit'] = data['markBit']
    }
  }
}

class WireDetailOutput {
  id: number
  createTime: string
  lastModificationTime: string
  equipmentId: number
  equipmentName: string
  buckleNumber: number
  name: string
  description: string
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
  isExternal: boolean

  constructor(data) {
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

class WireCabinetOutput {
  wireCabinetId: number
  name: string
  stationId: number
  stationName: string
  description: string
  wireDetailDtos: WireDetailDto[]

  constructor(data) {
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

class WireDetailDto {
  wireId: number
  buckleNumber: number
  name: string
  description: string
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
  isExternal: boolean
  photoIds: string[]
  wireConfigs: WireConfigDto[]

  constructor(data) {
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

class WireConfigDto {
  wireConfigId: number
  name: string
  displayName: string
  description: string
  value: string

  constructor(data) {
    if (data) {
      this['wireConfigId'] = data['wireConfigId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}

class EquipmentPropertyConfigInput {
  equipmentPropertyId: number
  name: string
  displayName: string
  description: string
  value: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}

class WirePileOutput {
  name: string
  hasBind: boolean
  equipmentPropertyId: number
  equipmentPropertyName: string
  stationId: number
  id: number

  constructor(data) {
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

class WireBeTakenDto {
  equipmentPropertyId: number
  displayName: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['displayName'] = data['displayName']
    }
  }
}

class WireCabinetBluetoothDto {
  equipmentId: number
  bluetooth: string

  constructor(data) {
    if (data) {
      this['equipmentId'] = data['equipmentId']
      this['bluetooth'] = data['bluetooth']
    }
  }
}

class CheckWireConfigInput {
  equipmentPropertyId: number
  name: string
  displayName: string
  description: string
  value: string

  constructor(data) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId']
      this['name'] = data['name']
      this['displayName'] = data['displayName']
      this['description'] = data['description']
      this['value'] = data['value']
    }
  }
}
