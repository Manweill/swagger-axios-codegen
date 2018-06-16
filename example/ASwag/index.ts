import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

export class AccountService {
  /**
   *
   */
  static isTenantAvailable(
    params: IIsTenantAvailableParams,
    options: IRequestOptions = {}
  ): Promise<IsTenantAvailableOutput> {
    params = params || <IIsTenantAvailableParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/IsTenantAvailable';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static register(params: IRegisterParams, options: IRequestOptions = {}): Promise<RegisterOutput> {
    params = params || <IRegisterParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/Register';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendPasswordResetCode(params: ISendPasswordResetCodeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendPasswordResetCodeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/SendPasswordResetCode';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static resetPassword(params: IResetPasswordParams, options: IRequestOptions = {}): Promise<ResetPasswordOutput> {
    params = params || <IResetPasswordParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/ResetPassword';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendEmailActivationLink(params: ISendEmailActivationLinkParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendEmailActivationLinkParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/SendEmailActivationLink';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static activateEmail(params: IActivateEmailParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IActivateEmailParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/ActivateEmail';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static impersonate(params: IImpersonateParams, options: IRequestOptions = {}): Promise<ImpersonateOutput> {
    params = params || <IImpersonateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/Impersonate';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static backToImpersonator(options: IRequestOptions = {}): Promise<ImpersonateOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/BackToImpersonator';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static switchToLinkedAccount(
    params: ISwitchToLinkedAccountParams,
    options: IRequestOptions = {}
  ): Promise<SwitchToLinkedAccountOutput> {
    params = params || <ISwitchToLinkedAccountParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/SwitchToLinkedAccount';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class AuditLogService {
  /**
   *
   */
  static getAuditLogs(
    params: IGetAuditLogsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_AuditLogListDto> {
    params = params || <IGetAuditLogsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/AuditLog/GetAuditLogs';

    configs.url = url;

    configs.params = {
      startDate: params['startDate'],
      endDate: params['endDate'],
      userName: params['userName'],
      serviceName: params['serviceName'],
      methodName: params['methodName'],
      browserInfo: params['browserInfo'],
      hasException: params['hasException'],
      minExecutionDuration: params['minExecutionDuration'],
      maxExecutionDuration: params['maxExecutionDuration'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAuditLogsToExcel(params: IGetAuditLogsToExcelParams, options: IRequestOptions = {}): Promise<FileDto> {
    params = params || <IGetAuditLogsToExcelParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/AuditLog/GetAuditLogsToExcel';

    configs.url = url;

    configs.params = {
      startDate: params['startDate'],
      endDate: params['endDate'],
      userName: params['userName'],
      serviceName: params['serviceName'],
      methodName: params['methodName'],
      browserInfo: params['browserInfo'],
      hasException: params['hasException'],
      minExecutionDuration: params['minExecutionDuration'],
      maxExecutionDuration: params['maxExecutionDuration'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class CachingService {
  /**
   *
   */
  static getAllCaches(options: IRequestOptions = {}): Promise<ListResultDto_CacheDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Caching/GetAllCaches';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static clearCache(params: IClearCacheParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IClearCacheParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Caching/ClearCache';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static clearAllCaches(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Caching/ClearAllCaches';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class ChatService {
  /**
   *
   */
  static getUserChatFriendsWithSettings(options: IRequestOptions = {}): Promise<GetUserChatFriendsWithSettingsOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Chat/GetUserChatFriendsWithSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserChatMessages(
    params: IGetUserChatMessagesParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_ChatMessageDto> {
    params = params || <IGetUserChatMessagesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Chat/GetUserChatMessages';

    configs.url = url;

    configs.params = { tenantId: params['tenantId'], userId: params['userId'], minMessageId: params['minMessageId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static markAllUnreadMessagesOfUserAsRead(
    params: IMarkAllUnreadMessagesOfUserAsReadParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IMarkAllUnreadMessagesOfUserAsReadParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class CommonLookupService {
  /**
   *
   */
  static getEditionsForCombobox(
    params: IGetEditionsForComboboxParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_SubscribableEditionComboboxItemDto> {
    params = params || <IGetEditionsForComboboxParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetEditionsForCombobox';

    configs.url = url;

    configs.params = { onlyFreeItems: params['onlyFreeItems'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static findUsers(params: IFindUsersParams, options: IRequestOptions = {}): Promise<PagedResultDto_NameValueDto> {
    params = params || <IFindUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/FindUsers';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDefaultEditionName(options: IRequestOptions = {}): Promise<GetDefaultEditionNameOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetDefaultEditionName';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceTypesForCombobox(options: IRequestOptions = {}): Promise<ListResultDto_DeviceTypeComboboxItemDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationsForCombobox(options: IRequestOptions = {}): Promise<ListResultDto_ComboboxItemDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetStationsForCombobox';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getVoltageLevelsForCombobox(options: IRequestOptions = {}): Promise<ListResultDto_ComboboxItemDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceStateForCombox(
    params: IGetDeviceStateForComboxParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_ComboboxItemDto> {
    params = params || <IGetDeviceStateForComboxParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/CommonLookup/GetDeviceStateForCombox';

    configs.url = url;

    configs.params = { deviceTypeId: params['deviceTypeId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DemoUiComponentsService {
  /**
   *
   */
  static sendAndGetDate(params: ISendAndGetDateParams, options: IRequestOptions = {}): Promise<DateToStringOutput> {
    params = params || <ISendAndGetDateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/SendAndGetDate';

    configs.url = url;

    configs.params = { date: params['date'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendAndGetDateTime(
    params: ISendAndGetDateTimeParams,
    options: IRequestOptions = {}
  ): Promise<DateToStringOutput> {
    params = params || <ISendAndGetDateTimeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/SendAndGetDateTime';

    configs.url = url;

    configs.params = { date: params['date'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendAndGetDateRange(
    params: ISendAndGetDateRangeParams,
    options: IRequestOptions = {}
  ): Promise<DateToStringOutput> {
    params = params || <ISendAndGetDateRangeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/SendAndGetDateRange';

    configs.url = url;

    configs.params = { startDate: params['startDate'], endDate: params['endDate'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getCountries(params: IGetCountriesParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IGetCountriesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/GetCountries';

    configs.url = url;

    configs.params = { searchTerm: params['searchTerm'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendAndGetSelectedCountries(
    params: ISendAndGetSelectedCountriesParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ISendAndGetSelectedCountriesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries';

    configs.url = url;

    let data = null;
    data = { ...params['selectedCountries'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendAndGetValue(params: ISendAndGetValueParams, options: IRequestOptions = {}): Promise<StringOutput> {
    params = params || <ISendAndGetValueParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DemoUiComponents/SendAndGetValue';

    configs.url = url;

    configs.params = { input: params['input'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceService {
  /**
   *
   */
  static getDevices(params: IGetDevicesParams, options: IRequestOptions = {}): Promise<PagedResultDto_DeviceListDto> {
    params = params || <IGetDevicesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/GetDevices';

    configs.url = url;

    configs.params = {
      name: params['name'],
      deviceAreaId: params['deviceAreaId'],
      stationId: params['stationId'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockControlDevices(
    params: IGetLockControlDevicesParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_DeviceListDto> {
    params = params || <IGetLockControlDevicesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/GetLockControlDevices';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      deviceAreaId: params['deviceAreaId'],
      deviceName: params['deviceName'],
      isEst: params['isEst'],
      isPprimary: params['isPprimary'],
      isSecondary: params['isSecondary'],
      unPage: params['unPage'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceForEdit(
    params: IGetDeviceForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetDeviceEditOutput> {
    params = params || <IGetDeviceForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/GetDeviceForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateDevice(params: ICreateOrUpdateDeviceParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateDeviceParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/CreateOrUpdateDevice';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteDevice(params: IDeleteDeviceParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteDeviceParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/DeleteDevice';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static queryDeviceStates(
    params: IQueryDeviceStatesParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_DeviceStateDto> {
    params = params || <IQueryDeviceStatesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/QueryDeviceStates';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateDeviceState(
    params: IUpdateDeviceStateParams,
    options: IRequestOptions = {}
  ): Promise<UpdateDeviceStateOutput> {
    params = params || <IUpdateDeviceStateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/UpdateDeviceState';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static checkDeviceNameIsExist(params: ICheckDeviceNameIsExistParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICheckDeviceNameIsExistParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Device/CheckDeviceNameIsExist';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceAreaService {
  /**
   *
   */
  static getDeviceAreas(
    params: IGetDeviceAreasParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_DeviceAreaListDto> {
    params = params || <IGetDeviceAreasParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceArea/GetDeviceAreas';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceAreaForEdit(
    params: IGetDeviceAreaForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetDeviceAreaEditOutput> {
    params = params || <IGetDeviceAreaForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceArea/GetDeviceAreaForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateDeviceArea(
    params: ICreateOrUpdateDeviceAreaParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateDeviceAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteDeviceArea(params: IDeleteDeviceAreaParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteDeviceAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceArea/DeleteDeviceArea';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceBoardService {
  /**
   *
   */
  static getDeviceBoards(
    params: IGetDeviceBoardsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_DeviceBoardDto> {
    params = params || <IGetDeviceBoardsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceBoard/GetDeviceBoards';

    configs.url = url;

    configs.params = { name: params['name'], maxResultCount: params['maxResultCount'], skipCount: params['skipCount'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceBoardForEdit(
    params: IGetDeviceBoardForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetDeviceBoardEditOutput> {
    params = params || <IGetDeviceBoardForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceBoard/GetDeviceBoardForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateDeviceBoard(
    params: ICreateOrUpdateDeviceBoardParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateDeviceBoardParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceBoard/CreateOrUpdateDeviceBoard';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteDeviceBoard(params: IDeleteDeviceBoardParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteDeviceBoardParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceBoard/DeleteDeviceBoard';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static uploadDeviceBoard(params: IUploadDeviceBoardParams, options: IRequestOptions = {}): Promise<UploadFileOutput> {
    params = params || <IUploadDeviceBoardParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceBoard/UploadDeviceBoard';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceLockCodeService {
  /**
   *
   */
  static getLockCodeProperties(
    params: IGetLockCodePropertiesParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_LockCodePropertyListDto> {
    params = params || <IGetLockCodePropertiesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceLockCode/GetLockCodeProperties';

    configs.url = url;

    configs.params = { maxResultCount: params['maxResultCount'], skipCount: params['skipCount'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockCodePropertySelected(options: IRequestOptions = {}): Promise<ListResultDto_LockCodePropertySelectDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockCodePropertyForEdit(
    params: IGetLockCodePropertyForEditParams,
    options: IRequestOptions = {}
  ): Promise<LockCodePropertyEditDto> {
    params = params || <IGetLockCodePropertyForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateLockCodeProperty(
    params: ICreateOrUpdateLockCodePropertyParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateLockCodePropertyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteLockCodeProperty(params: IDeleteLockCodePropertyParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteLockCodePropertyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceTermService {
  /**
   *
   */
  static getDeviceTerms(params: IGetDeviceTermsParams, options: IRequestOptions = {}): Promise<GetDeviceTermsOutput> {
    params = params || <IGetDeviceTermsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceTerm/GetDeviceTerms';

    configs.url = url;

    configs.params = { stationName: params['stationName'], pointName: params['pointName'], state: params['state'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTerms(
    params: IGetTermsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_DeviceOperationListDto> {
    params = params || <IGetTermsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceTerm/GetTerms';

    configs.url = url;

    configs.params = { deviceType: params['deviceType'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateDeviceOperation(
    params: ICreateOrUpdateDeviceOperationParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateDeviceOperationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteDeviceOperation(params: IDeleteDeviceOperationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteDeviceOperationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceTerm/DeleteDeviceOperation';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class DeviceTypeService {
  /**
   *
   */
  static getDeviceTypes(
    params: IGetDeviceTypesParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_DeviceTypeListDto> {
    params = params || <IGetDeviceTypesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceType/GetDeviceTypes';

    configs.url = url;

    configs.params = {
      name: params['name'],
      isEst: params['isEst'],
      unPaged: params['unPaged'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDeviceTypeForEdit(
    params: IGetDeviceTypeForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetDeviceTypeEditOutput> {
    params = params || <IGetDeviceTypeForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceType/GetDeviceTypeForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateDeviceType(
    params: ICreateOrUpdateDeviceTypeParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateDeviceTypeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceType/CreateOrUpdateDeviceType';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteDeviceType(params: IDeleteDeviceTypeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteDeviceTypeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/DeviceType/DeleteDeviceType';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class EditionService {
  /**
   *
   */
  static getEditions(options: IRequestOptions = {}): Promise<ListResultDto_EditionListDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Edition/GetEditions';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEditionForEdit(
    params: IGetEditionForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetEditionEditOutput> {
    params = params || <IGetEditionForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Edition/GetEditionForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateEdition(params: ICreateOrUpdateEditionParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateEditionParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Edition/CreateOrUpdateEdition';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteEdition(params: IDeleteEditionParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteEditionParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Edition/DeleteEdition';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEditionComboboxItems(params: IGetEditionComboboxItemsParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IGetEditionComboboxItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Edition/GetEditionComboboxItems';

    configs.url = url;

    configs.params = {
      selectedEditionId: params['selectedEditionId'],
      addAllItem: params['addAllItem'],
      onlyFreeItems: params['onlyFreeItems']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class EquipmentService {
  /**
   *
   */
  static getEquipments(
    params: IGetEquipmentsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_EquipmentListDto> {
    params = params || <IGetEquipmentsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetEquipments';

    configs.url = url;

    configs.params = {
      productId: params['productId'],
      name: params['name'],
      terminalId: params['terminalId'],
      stationId: params['stationId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEquipmentForEdit(
    params: IGetEquipmentForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetEquipmentEditOutput> {
    params = params || <IGetEquipmentForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetEquipmentForEdit';

    configs.url = url;

    configs.params = { productId: params['productId'], id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateEquipment(params: ICreateOrUpdateEquipmentParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateEquipmentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/CreateOrUpdateEquipment';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteEquipment(params: IDeleteEquipmentParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteEquipmentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/DeleteEquipment';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEquipmentNotBinded(
    params: IGetEquipmentNotBindedParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_EquipmentListDto> {
    params = params || <IGetEquipmentNotBindedParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetEquipmentNotBinded';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      name: params['name'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAllStationBindEquipments(
    params: IGetAllStationBindEquipmentsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_EquipmentWithPropertyDto> {
    params = params || <IGetAllStationBindEquipmentsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetAllStationBindEquipments';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationBindEquipments(
    params: IGetStationBindEquipmentsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_EquipmentInpageDto> {
    params = params || <IGetStationBindEquipmentsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetStationBindEquipments';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      name: params['name'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEquipmentWithProperty(
    params: IGetEquipmentWithPropertyParams,
    options: IRequestOptions = {}
  ): Promise<EquipmentWithPropertyOutput> {
    params = params || <IGetEquipmentWithPropertyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetEquipmentWithProperty';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static controlEquipment(params: IControlEquipmentParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IControlEquipmentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/ControlEquipment';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEquipmentsCombineProperties(
    params: IGetEquipmentsCombinePropertiesParams,
    options: IRequestOptions = {}
  ): Promise<IListResult_EquipmentCombineProperties> {
    params = params || <IGetEquipmentsCombinePropertiesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Equipment/GetEquipmentsCombineProperties';

    configs.url = url;

    configs.params = { type: params['type'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class FileService {
  /**
   *
   */
  static download(params: IDownloadParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDownloadParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/File/download/{id}/{name}';
    url = url.replace('{id}', params['id'] + '');
    url = url.replace('{name}', params['name'] + '');

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static file(params: IFileParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IFileParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/File/{id}/{name}';
    url = url.replace('{id}', params['id'] + '');
    url = url.replace('{name}', params['name'] + '');

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class FriendshipService {
  /**
   *
   */
  static createFriendshipRequest(
    params: ICreateFriendshipRequestParams,
    options: IRequestOptions = {}
  ): Promise<FriendDto> {
    params = params || <ICreateFriendshipRequestParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Friendship/CreateFriendshipRequest';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createFriendshipRequestByUserName(
    params: ICreateFriendshipRequestByUserNameParams,
    options: IRequestOptions = {}
  ): Promise<FriendDto> {
    params = params || <ICreateFriendshipRequestByUserNameParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Friendship/CreateFriendshipRequestByUserName';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static blockUser(params: IBlockUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IBlockUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Friendship/BlockUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static unblockUser(params: IUnblockUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUnblockUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Friendship/UnblockUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static acceptFriendshipRequest(params: IAcceptFriendshipRequestParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IAcceptFriendshipRequestParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Friendship/AcceptFriendshipRequest';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class GraphService {
  /**
   *
   */
  static getGraphs(params: IGetGraphsParams, options: IRequestOptions = {}): Promise<ListResultDto_GraphListDto> {
    params = params || <IGetGraphsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Graph/GetGraphs';

    configs.url = url;

    configs.params = { name: params['name'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getGraphForEdit(params: IGetGraphForEditParams, options: IRequestOptions = {}): Promise<GraphEditDto> {
    params = params || <IGetGraphForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Graph/GetGraphForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateGraph(params: ICreateOrUpdateGraphParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateGraphParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Graph/CreateOrUpdateGraph';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteGraph(params: IDeleteGraphParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteGraphParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Graph/DeleteGraph';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static uploadGraph(params: IUploadGraphParams, options: IRequestOptions = {}): Promise<UploadFileOutput> {
    params = params || <IUploadGraphParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'multipart/form-data'
    };

    let url = '/api/services/app/Graph/UploadGraph';

    configs.url = url;

    let data = null;
    data = new FormData();
    if (params['file']) {
      data.append('file', params['file'], 'file');
    }

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class HostDashboardService {
  /**
   *
   */
  static getDashboardStatisticsData(
    params: IGetDashboardStatisticsDataParams,
    options: IRequestOptions = {}
  ): Promise<HostDashboardData> {
    params = params || <IGetDashboardStatisticsDataParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostDashboard/GetDashboardStatisticsData';

    configs.url = url;

    configs.params = {
      incomeStatisticsDateInterval: params['incomeStatisticsDateInterval'],
      startDate: params['startDate'],
      endDate: params['endDate']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getIncomeStatistics(
    params: IGetIncomeStatisticsParams,
    options: IRequestOptions = {}
  ): Promise<GetIncomeStatisticsDataOutput> {
    params = params || <IGetIncomeStatisticsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostDashboard/GetIncomeStatistics';

    configs.url = url;

    configs.params = {
      incomeStatisticsDateInterval: params['incomeStatisticsDateInterval'],
      startDate: params['startDate'],
      endDate: params['endDate']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEditionTenantStatistics(
    params: IGetEditionTenantStatisticsParams,
    options: IRequestOptions = {}
  ): Promise<GetEditionTenantStatisticsOutput> {
    params = params || <IGetEditionTenantStatisticsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostDashboard/GetEditionTenantStatistics';

    configs.url = url;

    configs.params = { startDate: params['startDate'], endDate: params['endDate'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class HostSettingsService {
  /**
   *
   */
  static getAllSettings(options: IRequestOptions = {}): Promise<HostSettingsEditDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostSettings/GetAllSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateAllSettings(params: IUpdateAllSettingsParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateAllSettingsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostSettings/UpdateAllSettings';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendTestEmail(params: ISendTestEmailParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendTestEmailParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/HostSettings/SendTestEmail';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class InfluxDBService {
  /**
   *
   */
  static createDbBase(params: ICreateDbBaseParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateDbBaseParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/InfluxDB/CreateDbBase';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static writeDataToDb(params: IWriteDataToDbParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWriteDataToDbParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/InfluxDB/WriteDataToDb';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static readDataFromDb(params: IReadDataFromDbParams, options: IRequestOptions = {}): Promise<ReadDataFromDbOutput> {
    params = params || <IReadDataFromDbParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/InfluxDB/ReadDataFromDb';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class InstallService {
  /**
   *
   */
  static setup(params: ISetupParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISetupParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/Setup';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAppSettingsJson(options: IRequestOptions = {}): Promise<AppSettingsJsonDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/GetAppSettingsJson';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static checkDatabase(options: IRequestOptions = {}): Promise<CheckDatabaseOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/CheckDatabase';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class IntelligentLockServiceService {
  /**
   *
   */
  static addIntelligentLocks(params: IAddIntelligentLocksParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IAddIntelligentLocksParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/IntelligentLockService/AddIntelligentLocks';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeIntelligentLocks(params: IRemoveIntelligentLocksParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IRemoveIntelligentLocksParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks';

    configs.url = url;

    configs.params = { roleId: params['roleId'], intelligentLockIds: params['intelligentLockIds'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateIntelligentLocks(params: IUpdateIntelligentLocksParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateIntelligentLocksParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/IntelligentLockService/UpdateIntelligentLocks';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getIntelligentLockList(
    params: IGetIntelligentLockListParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_IntelligentLockOutput> {
    params = params || <IGetIntelligentLockListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/IntelligentLockService/GetIntelligentLockList';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getIntelligentLocksInDeviceAreaTree(
    options: IRequestOptions = {}
  ): Promise<ListResultDto_IntelligentLockDetailOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class InvoiceService {
  /**
   *
   */
  static getInvoiceInfo(params: IGetInvoiceInfoParams, options: IRequestOptions = {}): Promise<InvoiceDto> {
    params = params || <IGetInvoiceInfoParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Invoice/GetInvoiceInfo';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createInvoice(params: ICreateInvoiceParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateInvoiceParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Invoice/CreateInvoice';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class KeyCabinetService {
  /**
   *
   */
  static keyCabinetApply(params: IKeyCabinetApplyParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IKeyCabinetApplyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetApply';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static keyCabinetApprove(params: IKeyCabinetApproveParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IKeyCabinetApproveParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetApprove';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static keyCabinetUnlock(
    params: IKeyCabinetUnlockParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_KeyCabinetUnlockOutput> {
    params = params || <IKeyCabinetUnlockParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetUnlock';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static keyCabinetUpdateUnlockCode(
    params: IKeyCabinetUpdateUnlockCodeParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_KeyCabinetGenerateUnlockCodeOutput> {
    params = params || <IKeyCabinetUpdateUnlockCodeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetUpdateUnlockCode';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static keyCabinetOpenDoor(
    params: IKeyCabinetOpenDoorParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IKeyCabinetOpenDoorParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static keyCabinetReturn(params: IKeyCabinetReturnParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IKeyCabinetReturnParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/KeyCabinetReturn';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplyReasonEnums(
    params: IGetApplyReasonEnumsParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_Dictionary_Int32_String> {
    params = params || <IGetApplyReasonEnumsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetApplyReasonEnums';

    configs.url = url;

    configs.params = { approverType: params['approverType'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplyReasonList(
    params: IGetApplyReasonListParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_List_KeyCabinetValueTextDto> {
    params = params || <IGetApplyReasonListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetApplyReasonList';

    configs.url = url;

    configs.params = { approverType: params['approverType'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getBuckleTypeEnums(options: IRequestOptions = {}): Promise<ApiResultOutput_Dictionary_Int32_String> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetBuckleTypeEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockModeEnums(options: IRequestOptions = {}): Promise<ApiResultOutput_Dictionary_Int32_String> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetLockModeEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApproverTypeEnums(options: IRequestOptions = {}): Promise<ApiResultOutput_Dictionary_Int32_String> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetApproverTypeEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTask(params: IGetTaskParams, options: IRequestOptions = {}): Promise<ApiResultOutput_KeyCabinetTaskOutput> {
    params = params || <IGetTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetTask';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static endTask(params: IEndTaskParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IEndTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/EndTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplicants(options: IRequestOptions = {}): Promise<ApiResultOutput_ListResultDto_KeyCabinetOperatorDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetApplicants';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApprovers(
    params: IGetApproversParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_ListResultDto_KeyCabinetOperatorDto> {
    params = params || <IGetApproversParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetApprovers';

    configs.url = url;

    configs.params = { roles: params['roles'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getIsTaskExpired(
    params: IGetIsTaskExpiredParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_Boolean> {
    params = params || <IGetIsTaskExpiredParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetIsTaskExpired';

    configs.url = url;

    configs.params = { equipmentPropertyId: params['equipmentPropertyId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getIsApplicant(
    params: IGetIsApplicantParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_Boolean> {
    params = params || <IGetIsApplicantParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetIsApplicant';

    configs.url = url;

    configs.params = { operatorId: params['operatorId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getKeyCarbinetLogs(
    params: IGetKeyCarbinetLogsParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_ListResultDto_KeyCarbinetLogListOutput> {
    params = params || <IGetKeyCarbinetLogsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      startDate: params['startDate'],
      endDate: params['endDate'],
      applicantId: params['applicantId'],
      approverId: params['approverId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateKeyCarbinetLog(
    params: IUpdateKeyCarbinetLogParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_Boolean> {
    params = params || <IUpdateKeyCarbinetLogParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class LanguageService {
  /**
   *
   */
  static getLanguages(options: IRequestOptions = {}): Promise<GetLanguagesOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/GetLanguages';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLanguageForEdit(
    params: IGetLanguageForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetLanguageForEditOutput> {
    params = params || <IGetLanguageForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/GetLanguageForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateLanguage(params: ICreateOrUpdateLanguageParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateLanguageParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/CreateOrUpdateLanguage';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteLanguage(params: IDeleteLanguageParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteLanguageParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/DeleteLanguage';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static setDefaultLanguage(params: ISetDefaultLanguageParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISetDefaultLanguageParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/SetDefaultLanguage';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLanguageTexts(
    params: IGetLanguageTextsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_LanguageTextListDto> {
    params = params || <IGetLanguageTextsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/GetLanguageTexts';

    configs.url = url;

    configs.params = {
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount'],
      sorting: params['sorting'],
      sourceName: params['sourceName'],
      baseLanguageName: params['baseLanguageName'],
      targetLanguageName: params['targetLanguageName'],
      targetValueFilter: params['targetValueFilter'],
      filterText: params['filterText']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateLanguageText(params: IUpdateLanguageTextParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateLanguageTextParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Language/UpdateLanguageText';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class LockControlTaskServiceService {
  /**
   *
   */
  static addOrUpdateLockControlTask(
    params: IAddOrUpdateLockControlTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IAddOrUpdateLockControlTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/AddOrUpdateLockControlTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockControlTaskList(
    params: IGetLockControlTaskListParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_PagedResultDto_LockControlTaskDto> {
    params = params || <IGetLockControlTaskListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetLockControlTaskList';

    configs.url = url;

    configs.params = {
      taskName: params['taskName'],
      state: params['state'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockControlTaskItems(
    params: IGetLockControlTaskItemsParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_LockControlTaskDetailOutput> {
    params = params || <IGetLockControlTaskItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetLockControlTaskItems';

    configs.url = url;

    configs.params = { taskId: params['taskId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static commitLockControlTask(
    params: ICommitLockControlTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <ICommitLockControlTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/CommitLockControlTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteLockControlTask(
    params: IDeleteLockControlTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IDeleteLockControlTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/DeleteLockControlTask';

    configs.url = url;

    configs.params = { taskId: params['taskId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockControlTaskPendingDetail(
    params: IGetLockControlTaskPendingDetailParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_LockControlTaskPendingDetailOutput> {
    params = params || <IGetLockControlTaskPendingDetailParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetLockControlTaskPendingDetail';

    configs.url = url;

    configs.params = { taskId: params['taskId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static approvalLockControlTask(
    params: IApprovalLockControlTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IApprovalLockControlTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/ApprovalLockControlTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockControlTaskCodeInfos(
    params: IGetLockControlTaskCodeInfosParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_LockControlTaskOptOutput> {
    params = params || <IGetLockControlTaskCodeInfosParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetLockControlTaskCodeInfos';

    configs.url = url;

    configs.params = { taskId: params['taskId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static uploadJsqOperationLog(
    params: IUploadJsqOperationLogParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IUploadJsqOperationLogParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/UploadJsqOperationLog';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getJsqOperationLogList(
    params: IGetJsqOperationLogListParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_PagedResultDto_JsqOptLogDto> {
    params = params || <IGetJsqOperationLogListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetJsqOperationLogList';

    configs.url = url;

    configs.params = {
      taskId: params['taskId'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static finishLockControlTask(
    params: IFinishLockControlTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IFinishLockControlTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/FinishLockControlTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getHistoryLockControlTaskList(
    params: IGetHistoryLockControlTaskListParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_PagedResultDto_LockControlTaskDto> {
    params = params || <IGetHistoryLockControlTaskListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetHistoryLockControlTaskList';

    configs.url = url;

    configs.params = {
      taskName: params['taskName'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getHistoryLockControlTaskItems(
    params: IGetHistoryLockControlTaskItemsParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_LockControlTaskDetailOutput> {
    params = params || <IGetHistoryLockControlTaskItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/LockControlTaskService/GetHistoryLockControlTaskItems';

    configs.url = url;

    configs.params = { taskId: params['taskId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class NotificationService {
  /**
   *
   */
  static getUserNotifications(
    params: IGetUserNotificationsParams,
    options: IRequestOptions = {}
  ): Promise<GetNotificationsOutput> {
    params = params || <IGetUserNotificationsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Notification/GetUserNotifications';

    configs.url = url;

    configs.params = {
      state: params['state'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static setAllNotificationsAsRead(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Notification/SetAllNotificationsAsRead';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static setNotificationAsRead(params: ISetNotificationAsReadParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISetNotificationAsReadParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Notification/SetNotificationAsRead';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getNotificationSettings(options: IRequestOptions = {}): Promise<GetNotificationSettingsOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Notification/GetNotificationSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateNotificationSettings(
    params: IUpdateNotificationSettingsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpdateNotificationSettingsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Notification/UpdateNotificationSettings';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class OperationRecordService {
  /**
   *
   */
  static getOperationRecord(
    params: IGetOperationRecordParams,
    options: IRequestOptions = {}
  ): Promise<GetOperationRecordOutput> {
    params = params || <IGetOperationRecordParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OperationRecord/GetOperationRecord';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getOperationRecords(
    params: IGetOperationRecordsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_OperationRecordListDto> {
    params = params || <IGetOperationRecordsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OperationRecord/GetOperationRecords';

    configs.url = url;

    configs.params = {
      applicantId: params['applicantId'],
      approverId: params['approverId'],
      startTime: params['startTime'],
      endTime: params['endTime'],
      stationId: params['stationId'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getOperationRecordsByEquipmentPropertyId(
    params: IGetOperationRecordsByEquipmentPropertyIdParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_OperationRecordListDto> {
    params = params || <IGetOperationRecordsByEquipmentPropertyIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OperationRecord/GetOperationRecordsByEquipmentPropertyId';

    configs.url = url;

    configs.params = {
      equipmentPropertyId: params['equipmentPropertyId'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getOperationRecordsByEquipmentId(
    params: IGetOperationRecordsByEquipmentIdParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_OperationRecordListDto> {
    params = params || <IGetOperationRecordsByEquipmentIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OperationRecord/GetOperationRecordsByEquipmentId';

    configs.url = url;

    configs.params = {
      equipmentId: params['equipmentId'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class OrganizationUnitService {
  /**
   *
   */
  static getOrganizationUnits(options: IRequestOptions = {}): Promise<ListResultDto_OrganizationUnitDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/GetOrganizationUnits';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getOrganizationUnitUsers(
    params: IGetOrganizationUnitUsersParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_OrganizationUnitUserListDto> {
    params = params || <IGetOrganizationUnitUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers';

    configs.url = url;

    configs.params = {
      id: params['id'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrganizationUnit(
    params: ICreateOrganizationUnitParams,
    options: IRequestOptions = {}
  ): Promise<OrganizationUnitDto> {
    params = params || <ICreateOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/CreateOrganizationUnit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateOrganizationUnit(
    params: IUpdateOrganizationUnitParams,
    options: IRequestOptions = {}
  ): Promise<OrganizationUnitDto> {
    params = params || <IUpdateOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static moveOrganizationUnit(
    params: IMoveOrganizationUnitParams,
    options: IRequestOptions = {}
  ): Promise<OrganizationUnitDto> {
    params = params || <IMoveOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/MoveOrganizationUnit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteOrganizationUnit(params: IDeleteOrganizationUnitParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeUserFromOrganizationUnit(
    params: IRemoveUserFromOrganizationUnitParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IRemoveUserFromOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit';

    configs.url = url;

    configs.params = { userId: params['userId'], organizationUnitId: params['organizationUnitId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addUsersToOrganizationUnit(
    params: IAddUsersToOrganizationUnitParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IAddUsersToOrganizationUnitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static findUsers(params: IFindUsersParams1, options: IRequestOptions = {}): Promise<PagedResultDto_NameValueDto> {
    params = params || <IFindUsersParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/OrganizationUnit/FindUsers';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class PaymentService {
  /**
   *
   */
  static getPaymentInfo(params: IGetPaymentInfoParams, options: IRequestOptions = {}): Promise<PaymentInfoDto> {
    params = params || <IGetPaymentInfoParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Payment/GetPaymentInfo';

    configs.url = url;

    configs.params = { upgradeEditionId: params['upgradeEditionId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createPayment(params: ICreatePaymentParams, options: IRequestOptions = {}): Promise<CreatePaymentResponse> {
    params = params || <ICreatePaymentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Payment/CreatePayment';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static executePayment(params: IExecutePaymentParams, options: IRequestOptions = {}): Promise<ExecutePaymentResponse> {
    params = params || <IExecutePaymentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Payment/ExecutePayment';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getPaymentHistory(
    params: IGetPaymentHistoryParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_SubscriptionPaymentListDto> {
    params = params || <IGetPaymentHistoryParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Payment/GetPaymentHistory';

    configs.url = url;

    configs.params = {
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class PendingService {
  /**
   *
   */
  static getPendingList(options: IRequestOptions = {}): Promise<ApiResultOutput_ListResultDto_PendingDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Pending/GetPendingList';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class PermissionService {
  /**
   *
   */
  static getAllPermissions(options: IRequestOptions = {}): Promise<ListResultDto_FlatPermissionWithLevelDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Permission/GetAllPermissions';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class ProductService {
  /**
   *
   */
  static getProducts(options: IRequestOptions = {}): Promise<ListResultDto_ProductListDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Product/GetProducts';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getProductForEdit(
    params: IGetProductForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetProductEditOutput> {
    params = params || <IGetProductForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Product/GetProductForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateProduct(params: ICreateOrUpdateProductParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateProductParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Product/CreateOrUpdateProduct';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteProduct(params: IDeleteProductParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteProductParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Product/DeleteProduct';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class ProductPropertyService {
  /**
   *
   */
  static getProductProperties(options: IRequestOptions = {}): Promise<ListResultDto_ProductPropertyListDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/ProductProperty/GetProductProperties';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getProductPropertyForEdit(
    params: IGetProductPropertyForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetProductPropertyEditOutput> {
    params = params || <IGetProductPropertyForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/ProductProperty/GetProductPropertyForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateProductProperty(
    params: ICreateOrUpdateProductPropertyParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateProductPropertyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteProductProperty(params: IDeleteProductPropertyParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteProductPropertyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/ProductProperty/DeleteProductProperty';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class ProfileService {
  /**
   *
   */
  static getCurrentUserProfileForEdit(options: IRequestOptions = {}): Promise<CurrentUserProfileEditDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/GetCurrentUserProfileForEdit';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateGoogleAuthenticatorKey(options: IRequestOptions = {}): Promise<UpdateGoogleAuthenticatorKeyOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendVerificationSms(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/SendVerificationSms';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static verifySmsCode(params: IVerifySmsCodeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IVerifySmsCodeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/VerifySmsCode';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateCurrentUserProfile(
    params: IUpdateCurrentUserProfileParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpdateCurrentUserProfileParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/UpdateCurrentUserProfile';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static changePassword(params: IChangePasswordParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IChangePasswordParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/ChangePassword';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateProfilePicture(params: IUpdateProfilePictureParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateProfilePictureParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/UpdateProfilePicture';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getPasswordComplexitySetting(options: IRequestOptions = {}): Promise<GetPasswordComplexitySettingOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/GetPasswordComplexitySetting';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getProfilePicture(options: IRequestOptions = {}): Promise<GetProfilePictureOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/GetProfilePicture';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getFriendProfilePictureById(
    params: IGetFriendProfilePictureByIdParams,
    options: IRequestOptions = {}
  ): Promise<GetProfilePictureOutput> {
    params = params || <IGetFriendProfilePictureByIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/GetFriendProfilePictureById';

    configs.url = url;

    configs.params = {
      profilePictureId: params['profilePictureId'],
      userId: params['userId'],
      tenantId: params['tenantId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getProfilePictureById(
    params: IGetProfilePictureByIdParams,
    options: IRequestOptions = {}
  ): Promise<GetProfilePictureOutput> {
    params = params || <IGetProfilePictureByIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/GetProfilePictureById';

    configs.url = url;

    configs.params = { profilePictureId: params['profilePictureId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static changeLanguage(params: IChangeLanguageParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IChangeLanguageParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Profile/ChangeLanguage';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class RiskTicketItemService {
  /**
   *
   */
  static addOrUpdateRiskTicket(params: IAddOrUpdateRiskTicketParams, options: IRequestOptions = {}): Promise<IdGuid> {
    params = params || <IAddOrUpdateRiskTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTicket(params: IDeleteTicketParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/DeleteTicket';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateRiskTicketItems(
    params: IAddOrUpdateRiskTicketItemsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IAddOrUpdateRiskTicketItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicketItems';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteRiskTicketItems(params: IDeleteRiskTicketItemsParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteRiskTicketItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/DeleteRiskTicketItems';

    configs.url = url;

    configs.params = { riskTicketId: params['riskTicketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateRiskItemTemplate(
    params: IAddOrUpdateRiskItemTemplateParams,
    options: IRequestOptions = {}
  ): Promise<IdGuid> {
    params = params || <IAddOrUpdateRiskItemTemplateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTemplate';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteRiskItemTemplate(params: IDeleteRiskItemTemplateParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteRiskItemTemplateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/DeleteRiskItemTemplate';

    configs.url = url;

    configs.params = { riskPublicItemId: params['riskPublicItemId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAllRiskItemTemplate(options: IRequestOptions = {}): Promise<ListResultDto_RiskItemTemplate> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetAllRiskItemTemplate';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateRiskItemTermMap(
    params: IAddOrUpdateRiskItemTermMapParams,
    options: IRequestOptions = {}
  ): Promise<IdGuid> {
    params = params || <IAddOrUpdateRiskItemTermMapParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTermMap';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteRiskItemTermMap(params: IDeleteRiskItemTermMapParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteRiskItemTermMapParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/DeleteRiskItemTermMap';

    configs.url = url;

    configs.params = { riskItemTermMapId: params['riskItemTermMapId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static mappingRiskItemByTerm(
    params: IMappingRiskItemByTermParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_RiskItemTermMap> {
    params = params || <IMappingRiskItemByTermParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/MappingRiskItemByTerm';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRiskItemSingle(params: IGetRiskItemSingleParams, options: IRequestOptions = {}): Promise<RiskItemDto> {
    params = params || <IGetRiskItemSingleParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetRiskItemSingle';

    configs.url = url;

    configs.params = { riskItemId: params['riskItemId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRiskItemArrayByTicketId(
    params: IGetRiskItemArrayByTicketIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_RiskItemDto> {
    params = params || <IGetRiskItemArrayByTicketIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketId';

    configs.url = url;

    configs.params = {
      ticketId: params['ticketId'],
      ticketType: params['ticketType'],
      isContainsTicketItemRisk: params['isContainsTicketItemRisk']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRiskItemArrayByRiskTicketId(
    params: IGetRiskItemArrayByRiskTicketIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_RiskItemDto> {
    params = params || <IGetRiskItemArrayByRiskTicketIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByRiskTicketId';

    configs.url = url;

    configs.params = { riskTicketId: params['riskTicketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRiskItemArrayFromTemplate(options: IRequestOptions = {}): Promise<ListResultDto_RiskItemDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayFromTemplate';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRiskItemArrayByTicketFolderId(
    params: IGetRiskItemArrayByTicketFolderIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_RiskItemDto> {
    params = params || <IGetRiskItemArrayByTicketFolderIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketFolderId';

    configs.url = url;

    configs.params = { ticketFolderId: params['ticketFolderId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class RoleService {
  /**
   *
   */
  static getRoles(params: IGetRolesParams, options: IRequestOptions = {}): Promise<ListResultDto_RoleListDto> {
    params = params || <IGetRolesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/GetRoles';

    configs.url = url;

    configs.params = { permission: params['permission'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRoleForEdit(params: IGetRoleForEditParams, options: IRequestOptions = {}): Promise<GetRoleForEditOutput> {
    params = params || <IGetRoleForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/GetRoleForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateRole(params: ICreateOrUpdateRoleParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateRoleParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/CreateOrUpdateRole';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteRole(params: IDeleteRoleParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteRoleParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/DeleteRole';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class SafetyWearService {
  /**
   *
   */
  static addOrUpdateSafetyWearMonitoring(
    params: IAddOrUpdateSafetyWearMonitoringParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IAddOrUpdateSafetyWearMonitoringParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getOne(params: IGetOneParams, options: IRequestOptions = {}): Promise<SafetyWearMonitoringOutput> {
    params = params || <IGetOneParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/GetOne';

    configs.url = url;

    configs.params = { userId: params['userId'], equipmentNo: params['equipmentNo'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getList(
    params: IGetListParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_SafetyWearMonitoringOutput> {
    params = params || <IGetListParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/GetList';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getSafetyWearEquipmentByMacAddress(
    params: IGetSafetyWearEquipmentByMacAddressParams,
    options: IRequestOptions = {}
  ): Promise<EquipmentInfoOutput> {
    params = params || <IGetSafetyWearEquipmentByMacAddressParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress';

    configs.url = url;

    configs.params = { macAddress: params['macAddress'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getSafetyWearEquipments(
    params: IGetSafetyWearEquipmentsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_EquipmentInfoOutput> {
    params = params || <IGetSafetyWearEquipmentsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/GetSafetyWearEquipments';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserListForSafetyWearLogin(
    params: IGetUserListForSafetyWearLoginParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_SafetyWearUserOutput> {
    params = params || <IGetUserListForSafetyWearLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin';

    configs.url = url;

    configs.params = { userName: params['userName'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class SerialNumberService {
  /**
   *
   */
  static addOrUpdateSerialNumber(
    params: IAddOrUpdateSerialNumberParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IAddOrUpdateSerialNumberParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SerialNumber/AddOrUpdateSerialNumber';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getSerialNumber(
    params: IGetSerialNumberParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_String> {
    params = params || <IGetSerialNumberParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SerialNumber/GetSerialNumber';

    configs.url = url;

    configs.params = { stationId: params['stationId'], code: params['code'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static setSerialMaxNumber(
    params: ISetSerialMaxNumberParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <ISetSerialMaxNumberParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/SerialNumber/SetSerialMaxNumber';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class SessionService {
  /**
   *
   */
  static getCurrentLoginInformations(options: IRequestOptions = {}): Promise<GetCurrentLoginInformationsOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Session/GetCurrentLoginInformations';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateUserSignInToken(options: IRequestOptions = {}): Promise<UpdateUserSignInTokenOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Session/UpdateUserSignInToken';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class StationService {
  /**
   *
   */
  static getStations(params: IGetStationsParams, options: IRequestOptions = {}): Promise<ListResultDto_StationListDto> {
    params = params || <IGetStationsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/GetStations';

    configs.url = url;

    configs.params = { name: params['name'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationForEdit(
    params: IGetStationForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetStationEditOutput> {
    params = params || <IGetStationForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/GetStationForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateStation(params: ICreateOrUpdateStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/CreateOrUpdateStation';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteStation(params: IDeleteStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/DeleteStation';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationNotBind(
    params: IGetStationNotBindParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_StationListDto> {
    params = params || <IGetStationNotBindParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/GetStationNotBind';

    configs.url = url;

    configs.params = { name: params['name'], maxResultCount: params['maxResultCount'], skipCount: params['skipCount'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static bindEquipmentStation(params: IBindEquipmentStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IBindEquipmentStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/BindEquipmentStation';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeEquipmentStation(params: IRemoveEquipmentStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IRemoveEquipmentStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/RemoveEquipmentStation';

    configs.url = url;

    configs.params = { equipmentId: params['equipmentId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createStationUsers(params: ICreateStationUsersParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateStationUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/CreateStationUsers';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeUserFromStation(params: IRemoveUserFromStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IRemoveUserFromStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/RemoveUserFromStation';

    configs.url = url;

    configs.params = {
      stationUserDtoStationId: params['stationUserDtoStationId'],
      stationUserDtoUserId: params['stationUserDtoUserId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateDefaultUserStation(
    params: IUpdateDefaultUserStationParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpdateDefaultUserStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Station/UpdateDefaultUserStation';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class StationAreaService {
  /**
   *
   */
  static createStationArea(params: ICreateStationAreaParams, options: IRequestOptions = {}): Promise<StationAreaDto> {
    params = params || <ICreateStationAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/CreateStationArea';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateStationArea(params: IUpdateStationAreaParams, options: IRequestOptions = {}): Promise<StationAreaDto> {
    params = params || <IUpdateStationAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/UpdateStationArea';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static moveStationArea(params: IMoveStationAreaParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IMoveStationAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/MoveStationArea';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteStationArea(params: IDeleteStationAreaParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteStationAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/DeleteStationArea';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationArea(options: IRequestOptions = {}): Promise<ListResultDto_StationAreaDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/GetStationArea';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getCurrentUserStationArea(options: IRequestOptions = {}): Promise<ListResultDto_StationAreaDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/GetCurrentUserStationArea';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserStationArea(
    params: IGetUserStationAreaParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_StationAreaDto> {
    params = params || <IGetUserStationAreaParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/GetUserStationArea';

    configs.url = url;

    configs.params = { userId: params['userId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationAreaWithEquipments(options: IRequestOptions = {}): Promise<ListResultDto_StationAreaWithEquipment> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/GetStationAreaWithEquipments';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static stationAreaBindStation(params: IStationAreaBindStationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IStationAreaBindStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/StationAreaBindStation';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeStationAreaStation(
    params: IRemoveStationAreaStationParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IRemoveStationAreaStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationArea/RemoveStationAreaStation';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class StationUserService {
  /**
   *
   */
  static getRelatedUserListByStationId(
    params: IGetRelatedUserListByStationIdParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_UserListByStationIdDto> {
    params = params || <IGetRelatedUserListByStationIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationUser/GetRelatedUserListByStationId';

    configs.url = url;

    configs.params = {
      id: params['id'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getNotRelatedUserListByStationId(
    params: IGetNotRelatedUserListByStationIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_StationOrganizationUserDto> {
    params = params || <IGetNotRelatedUserListByStationIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationUser/GetNotRelatedUserListByStationId';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDefaultStation(params: IGetDefaultStationParams, options: IRequestOptions = {}): Promise<StationDto> {
    params = params || <IGetDefaultStationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationUser/GetDefaultStation';

    configs.url = url;

    configs.params = { userId: params['userId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserStations(
    params: IGetUserStationsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_StationDto> {
    params = params || <IGetUserStationsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/StationUser/GetUserStations';

    configs.url = url;

    configs.params = { userId: params['userId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class SubscriptionService {
  /**
   *
   */
  static upgradeTenantToEquivalentEdition(
    params: IUpgradeTenantToEquivalentEditionParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpgradeTenantToEquivalentEditionParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition';

    configs.url = url;

    configs.params = { upgradeEditionId: params['upgradeEditionId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TenantService {
  /**
   *
   */
  static getTenants(params: IGetTenantsParams, options: IRequestOptions = {}): Promise<PagedResultDto_TenantListDto> {
    params = params || <IGetTenantsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/GetTenants';

    configs.url = url;

    configs.params = {
      filter: params['filter'],
      subscriptionEndDateStart: params['subscriptionEndDateStart'],
      subscriptionEndDateEnd: params['subscriptionEndDateEnd'],
      creationDateStart: params['creationDateStart'],
      creationDateEnd: params['creationDateEnd'],
      editionId: params['editionId'],
      editionIdSpecified: params['editionIdSpecified'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createTenant(params: ICreateTenantParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateTenantParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/CreateTenant';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTenantForEdit(params: IGetTenantForEditParams, options: IRequestOptions = {}): Promise<TenantEditDto> {
    params = params || <IGetTenantForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/GetTenantForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateTenant(params: IUpdateTenantParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateTenantParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/UpdateTenant';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTenant(params: IDeleteTenantParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteTenantParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/DeleteTenant';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTenantFeaturesForEdit(
    params: IGetTenantFeaturesForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetTenantFeaturesEditOutput> {
    params = params || <IGetTenantFeaturesForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/GetTenantFeaturesForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateTenantFeatures(params: IUpdateTenantFeaturesParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateTenantFeaturesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/UpdateTenantFeatures';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static resetTenantSpecificFeatures(
    params: IResetTenantSpecificFeaturesParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IResetTenantSpecificFeaturesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/ResetTenantSpecificFeatures';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static unlockTenantAdmin(params: IUnlockTenantAdminParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUnlockTenantAdminParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/UnlockTenantAdmin';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TenantDashboardService {
  /**
   *
   */
  static getMemberActivity(options: IRequestOptions = {}): Promise<GetMemberActivityOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantDashboard/GetMemberActivity';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getDashboardData(
    params: IGetDashboardDataParams,
    options: IRequestOptions = {}
  ): Promise<GetDashboardDataOutput> {
    params = params || <IGetDashboardDataParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantDashboard/GetDashboardData';

    configs.url = url;

    configs.params = { salesSummaryDatePeriod: params['salesSummaryDatePeriod'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getSalesSummary(
    params: IGetSalesSummaryParams,
    options: IRequestOptions = {}
  ): Promise<GetSalesSummaryOutput> {
    params = params || <IGetSalesSummaryParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantDashboard/GetSalesSummary';

    configs.url = url;

    configs.params = { salesSummaryDatePeriod: params['salesSummaryDatePeriod'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRegionalStats(
    params: IGetRegionalStatsParams,
    options: IRequestOptions = {}
  ): Promise<GetRegionalStatsOutput> {
    params = params || <IGetRegionalStatsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantDashboard/GetRegionalStats';

    configs.url = url;

    configs.params = { input: params['input'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getGeneralStats(
    params: IGetGeneralStatsParams,
    options: IRequestOptions = {}
  ): Promise<GetGeneralStatsOutput> {
    params = params || <IGetGeneralStatsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantDashboard/GetGeneralStats';

    configs.url = url;

    configs.params = { input: params['input'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TenantRegistrationService {
  /**
   *
   */
  static registerTenant(params: IRegisterTenantParams, options: IRequestOptions = {}): Promise<RegisterTenantOutput> {
    params = params || <IRegisterTenantParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantRegistration/RegisterTenant';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEditionsForSelect(options: IRequestOptions = {}): Promise<EditionsSelectOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantRegistration/GetEditionsForSelect';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getEdition(params: IGetEditionParams, options: IRequestOptions = {}): Promise<EditionSelectDto> {
    params = params || <IGetEditionParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantRegistration/GetEdition';

    configs.url = url;

    configs.params = { editionId: params['editionId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TenantSettingsService {
  /**
   *
   */
  static getAllSettings(options: IRequestOptions = {}): Promise<TenantSettingsEditDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantSettings/GetAllSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateAllSettings(params: IUpdateAllSettingsParams1, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateAllSettingsParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantSettings/UpdateAllSettings';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static clearLogo(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantSettings/ClearLogo';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static clearCustomCss(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantSettings/ClearCustomCss';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendTestEmail(params: ISendTestEmailParams1, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendTestEmailParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TenantSettings/SendTestEmail';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TerimalPortConfigService {
  /**
   *
   */
  static getTerminalPortConfigs(
    params: IGetTerminalPortConfigsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_TerminalPortConfigListDto> {
    params = params || <IGetTerminalPortConfigsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs';

    configs.url = url;

    configs.params = { terminalId: params['terminalId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTerminalPortConfigForEdit(
    params: IGetTerminalPortConfigForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetTerminalPortConfigOutput> {
    params = params || <IGetTerminalPortConfigForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateTerminalPortConfig(
    params: ICreateOrUpdateTerminalPortConfigParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateTerminalPortConfigParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTerminalPortConfig(
    params: IDeleteTerminalPortConfigParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IDeleteTerminalPortConfigParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TerminalService {
  /**
   *
   */
  static getTerminals(options: IRequestOptions = {}): Promise<ListResultDto_TerminalListDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Terminal/GetTerminals';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTerminalForEdit(
    params: IGetTerminalForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetTerminalEditOutput> {
    params = params || <IGetTerminalForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Terminal/GetTerminalForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateTerminal(params: ICreateOrUpdateTerminalParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateTerminalParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Terminal/CreateOrUpdateTerminal';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTerminal(params: IDeleteTerminalParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteTerminalParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Terminal/DeleteTerminal';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static resetTerminal(params: IResetTerminalParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IResetTerminalParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Terminal/ResetTerminal';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TermperatureControlService {
  /**
   *
   */
  static sendControlOperating(params: ISendControlOperatingParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendControlOperatingParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TermperatureControl/SendControlOperating';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTermperaturePoints(params: IGetTermperaturePointsParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IGetTermperaturePointsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TermperatureControl/GetTermperaturePoints';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TicketFolderService {
  /**
   *
   */
  static addOrUpdateTicketFolder(
    params: IAddOrUpdateTicketFolderParams,
    options: IRequestOptions = {}
  ): Promise<IdGuid> {
    params = params || <IAddOrUpdateTicketFolderParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/AddOrUpdateTicketFolder';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteStationTicketFolder(
    params: IDeleteStationTicketFolderParams,
    options: IRequestOptions = {}
  ): Promise<ResultBoolean> {
    params = params || <IDeleteStationTicketFolderParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/DeleteStationTicketFolder';

    configs.url = url;

    configs.params = { stationId: params['stationId'], isForce: params['isForce'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTicketFolder(params: IDeleteTicketFolderParams, options: IRequestOptions = {}): Promise<ResultBoolean> {
    params = params || <IDeleteTicketFolderParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/DeleteTicketFolder';

    configs.url = url;

    configs.params = { ticketFolderId: params['ticketFolderId'], isForce: params['isForce'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateTicketFolderRiskInfo(
    params: IAddOrUpdateTicketFolderRiskInfoParams,
    options: IRequestOptions = {}
  ): Promise<ResultBoolean> {
    params = params || <IAddOrUpdateTicketFolderRiskInfoParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/AddOrUpdateTicketFolderRiskInfo';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationTicketFolderChildrens(
    params: IGetStationTicketFolderChildrensParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_IdNameTree> {
    params = params || <IGetStationTicketFolderChildrensParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetStationTicketFolderChildrens';

    configs.url = url;

    configs.params = { stationId: params['stationId'], depth: params['depth'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketFolderChildrens(
    params: IGetTicketFolderChildrensParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_IdNameTree> {
    params = params || <IGetTicketFolderChildrensParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetTicketFolderChildrens';

    configs.url = url;

    configs.params = { ticketFolderId: params['ticketFolderId'], depth: params['depth'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationTicketFolderChildrenWithTicket(
    params: IGetStationTicketFolderChildrenWithTicketParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput> {
    params = params || <IGetStationTicketFolderChildrenWithTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetStationTicketFolderChildrenWithTicket';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      depth: params['depth'],
      ticketFolderId: params['ticketFolderId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketFoldersByName(
    params: IGetTicketFoldersByNameParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_IdName> {
    params = params || <IGetTicketFoldersByNameParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetTicketFoldersByName';

    configs.url = url;

    configs.params = { partName: params['partName'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketFolderById(
    params: IGetTicketFolderByIdParams,
    options: IRequestOptions = {}
  ): Promise<GetTicketFolderOutput> {
    params = params || <IGetTicketFolderByIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetTicketFolderById';

    configs.url = url;

    configs.params = { ticketFolderId: params['ticketFolderId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static assignFolderTickets(
    params: IAssignFolderTicketsParams,
    options: IRequestOptions = {}
  ): Promise<ResultBoolean> {
    params = params || <IAssignFolderTicketsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/AssignFolderTickets';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getFolderTicketsById(
    params: IGetFolderTicketsByIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_TicketListItemDto> {
    params = params || <IGetFolderTicketsByIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetFolderTicketsById';

    configs.url = url;

    configs.params = { ticketFolderId: params['ticketFolderId'], isRecursive: params['isRecursive'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketFoldersWithTicketsByParentId(
    params: IGetTicketFoldersWithTicketsByParentIdParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput> {
    params = params || <IGetTicketFoldersWithTicketsByParentIdParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetTicketFoldersWithTicketsByParentId';

    configs.url = url;

    configs.params = {
      ticktFolderId: params['ticktFolderId'],
      depth: params['depth'],
      isNeedSearchByUserProfessional: params['isNeedSearchByUserProfessional'],
      stationId: params['stationId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getStationTicketFoldersWithTickets(
    params: IGetStationTicketFoldersWithTicketsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput> {
    params = params || <IGetStationTicketFoldersWithTicketsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketFolder/GetStationTicketFoldersWithTickets';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      depth: params['depth'],
      ticketFolderId: params['ticketFolderId']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TicketRoleService {
  /**
   *
   */
  static getTicketRoleUsers(
    params: IGetTicketRoleUsersParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_List_TicketRoleDto> {
    params = params || <IGetTicketRoleUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketRole/GetTicketRoleUsers';

    configs.url = url;

    configs.params = { stationId: params['stationId'], roleType: params['roleType'], key: params['key'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TicketTaskService {
  /**
   *
   */
  static addOrUpdateTicketTask(
    params: IAddOrUpdateTicketTaskParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IAddOrUpdateTicketTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/AddOrUpdateTicketTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTicketTask(params: IDeleteTicketTaskParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IDeleteTicketTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/DeleteTicketTask';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static assignTicketPersonas(
    params: IAssignTicketPersonasParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <IAssignTicketPersonasParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/AssignTicketPersonas';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static commitTicket(params: ICommitTicketParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <ICommitTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/CommitTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static confirmTicket(params: IConfirmTicketParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IConfirmTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/ConfirmTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static approveTicket(params: IApproveTicketParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IApproveTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/ApproveTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static executeTicket(params: IExecuteTicketParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IExecuteTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/ExecuteTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static finishTicket(params: IFinishTicketParams, options: IRequestOptions = {}): Promise<ApiResultOutput> {
    params = params || <IFinishTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/FinishTicket';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateTicketItemsStatus(
    params: IUpdateTicketItemsStatusParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_UpdateTicketItemsStatusOutput> {
    params = params || <IUpdateTicketItemsStatusParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/UpdateTicketItemsStatus';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateTicketRiskItemsStatus(
    params: IUpdateTicketRiskItemsStatusParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput_UpdateTicketRiskItemsStatusOutput> {
    params = params || <IUpdateTicketRiskItemsStatusParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/UpdateTicketRiskItemsStatus';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static currentTicketItemDeviceCanOperate(
    params: ICurrentTicketItemDeviceCanOperateParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <ICurrentTicketItemDeviceCanOperateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/CurrentTicketItemDeviceCanOperate';

    configs.url = url;

    configs.params = { deviceId: params['deviceId'], fromState: params['fromState'], toState: params['toState'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicket(params: IGetTicketParams, options: IRequestOptions = {}): Promise<TicketTaskOutput> {
    params = params || <IGetTicketParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/GetTicket';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'], isNeedOperateLockInfo: params['isNeedOperateLockInfo'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTickets(
    params: IGetTicketsParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_TicketTaskListDto> {
    params = params || <IGetTicketsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/GetTickets';

    configs.url = url;

    configs.params = {
      stationId: params['stationId'],
      unPage: params['unPage'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketItems(
    params: IGetTicketItemsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_TicketItemTaskDto> {
    params = params || <IGetTicketItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/GetTicketItems';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static checkDeviceStatusForTicketTaskExcuting(
    params: ICheckDeviceStatusForTicketTaskExcutingParams,
    options: IRequestOptions = {}
  ): Promise<ApiResultOutput> {
    params = params || <ICheckDeviceStatusForTicketTaskExcutingParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTask/CheckDeviceStatusForTicketTaskExcuting';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TicketTermService {
  /**
   *
   */
  static analyseSentence(
    params: IAnalyseSentenceParams,
    options: IRequestOptions = {}
  ): Promise<AnalyseSentenceOutput> {
    params = params || <IAnalyseSentenceParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTerm/AnalyseSentence';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketItemOperateLockInfo(
    params: IGetTicketItemOperateLockInfoParams,
    options: IRequestOptions = {}
  ): Promise<IListResult_TicketItemOperateLockInfoDto> {
    params = params || <IGetTicketItemOperateLockInfoParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTerm/GetTicketItemOperateLockInfo';

    configs.url = url;

    configs.params = { ticketItemIds: params['ticketItemIds'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static singleAnalyseSentenceOutput(
    params: ISingleAnalyseSentenceOutputParams,
    options: IRequestOptions = {}
  ): Promise<SingleAnalyseSentenceOutput> {
    params = params || <ISingleAnalyseSentenceOutputParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTerm/SingleAnalyseSentenceOutput';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TicketTypicalService {
  /**
   *
   */
  static addOrUpdateTicketTypical(
    params: IAddOrUpdateTicketTypicalParams,
    options: IRequestOptions = {}
  ): Promise<IdGuid> {
    params = params || <IAddOrUpdateTicketTypicalParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/AddOrUpdateTicketTypical';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTicketTypical(
    params: IDeleteTicketTypicalParams,
    options: IRequestOptions = {}
  ): Promise<ResultBoolean> {
    params = params || <IDeleteTicketTypicalParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/DeleteTicketTypical';

    configs.url = url;

    configs.params = { ticketTypicalId: params['ticketTypicalId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketsByTaskName(
    params: IGetTicketsByTaskNameParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_TicketListItemDto> {
    params = params || <IGetTicketsByTaskNameParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicketsByTaskName';

    configs.url = url;

    configs.params = {
      partTitle: params['partTitle'],
      stationId: params['stationId'],
      ticketFolderId: params['ticketFolderId'],
      isRecursive: params['isRecursive'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketItems(
    params: IGetTicketItemsParams1,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_TicketItemTypicalDto> {
    params = params || <IGetTicketItemsParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicketItems';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicket(params: IGetTicketParams1, options: IRequestOptions = {}): Promise<TicketTypicalDto> {
    params = params || <IGetTicketParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicket';

    configs.url = url;

    configs.params = { ticketId: params['ticketId'], isNeedOperateLockInfo: params['isNeedOperateLockInfo'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createTicketCurrent(params: ICreateTicketCurrentParams, options: IRequestOptions = {}): Promise<IdGuid> {
    params = params || <ICreateTicketCurrentParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/CreateTicketCurrent';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateCommit(params: IAddOrUpdateCommitParams, options: IRequestOptions = {}): Promise<ResultBoolean> {
    params = params || <IAddOrUpdateCommitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/AddOrUpdateCommit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static addOrUpdateApprove(params: IAddOrUpdateApproveParams, options: IRequestOptions = {}): Promise<ResultBoolean> {
    params = params || <IAddOrUpdateApproveParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/AddOrUpdateApprove';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteTicketTypicalInvalid(
    params: IDeleteTicketTypicalInvalidParams,
    options: IRequestOptions = {}
  ): Promise<ResultBoolean> {
    params = params || <IDeleteTicketTypicalInvalidParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/DeleteTicketTypicalInvalid';

    configs.url = url;

    configs.params = { ticketTypicalInvalidId: params['ticketTypicalInvalidId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketTypicalInvalids(
    params: IGetTicketTypicalInvalidsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_GetTicketTypicalInvalidsOutput> {
    params = params || <IGetTicketTypicalInvalidsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicketTypicalInvalids';

    configs.url = url;

    configs.params = { stationId: params['stationId'], ticketRunStates: params['ticketRunStates'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketTypicalInvalid(
    params: IGetTicketTypicalInvalidParams,
    options: IRequestOptions = {}
  ): Promise<TicketTypicalDto> {
    params = params || <IGetTicketTypicalInvalidParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicketTypicalInvalid';

    configs.url = url;

    configs.params = { ticketTypicalInvalidId: params['ticketTypicalInvalidId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTicketItemTypicalInvalids(
    params: IGetTicketItemTypicalInvalidsParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_TicketItemTypicalDto> {
    params = params || <IGetTicketItemTypicalInvalidsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/GetTicketItemTypicalInvalids';

    configs.url = url;

    configs.params = { ticketTypicalInvalidId: params['ticketTypicalInvalidId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static assignTicketItem(params: IAssignTicketItemParams, options: IRequestOptions = {}): Promise<ResultBoolean> {
    params = params || <IAssignTicketItemParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/TicketTypical/AssignTicketItem';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TimingService {
  /**
   *
   */
  static getTimezones(params: IGetTimezonesParams, options: IRequestOptions = {}): Promise<ListResultDto_NameValueDto> {
    params = params || <IGetTimezonesParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Timing/GetTimezones';

    configs.url = url;

    configs.params = { defaultTimezoneScope: params['defaultTimezoneScope'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTimezoneComboboxItems(
    params: IGetTimezoneComboboxItemsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IGetTimezoneComboboxItemsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Timing/GetTimezoneComboboxItems';

    configs.url = url;

    configs.params = { selectedTimezoneId: params['selectedTimezoneId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TokenAuthService {
  /**
   *
   */
  static authenticate(params: IAuthenticateParams, options: IRequestOptions = {}): Promise<AuthenticateResultModel> {
    params = params || <IAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/Authenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static sendTwoFactorAuthCode(params: ISendTwoFactorAuthCodeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISendTwoFactorAuthCodeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/SendTwoFactorAuthCode';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static impersonatedAuthenticate(
    params: IImpersonatedAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<ImpersonatedAuthenticateResultModel> {
    params = params || <IImpersonatedAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/ImpersonatedAuthenticate';

    configs.url = url;

    configs.params = { impersonationToken: params['impersonationToken'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static linkedAccountAuthenticate(
    params: ILinkedAccountAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<SwitchedAccountAuthenticateResultModel> {
    params = params || <ILinkedAccountAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/LinkedAccountAuthenticate';

    configs.url = url;

    configs.params = { switchAccountToken: params['switchAccountToken'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getExternalAuthenticationProviders(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/GetExternalAuthenticationProviders';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static externalAuthenticate(
    params: IExternalAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<ExternalAuthenticateResultModel> {
    params = params || <IExternalAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/ExternalAuthenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static securityAuthenticate(
    params: ISecurityAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<SecurityAuthenticateResultModel> {
    params = params || <ISecurityAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/SecurityAuthenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserLoginByProviderKey(
    params: IGetUserLoginByProviderKeyParams,
    options: IRequestOptions = {}
  ): Promise<UserLogin> {
    params = params || <IGetUserLoginByProviderKeyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/GetUserLoginByProviderKey';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static securityOtpAuthenticate(
    params: ISecurityOTPAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<SecurityAuthenticateResultModel> {
    params = params || <ISecurityOTPAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/SecurityOTPAuthenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static bindUserAccount(
    params: IBindUserAccountParams,
    options: IRequestOptions = {}
  ): Promise<AuthenticateResultModel> {
    params = params || <IBindUserAccountParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/BindUserAccount';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static testNotification(params: ITestNotificationParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ITestNotificationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/TestNotification';

    configs.url = url;

    configs.params = { message: params['message'], severity: params['severity'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UiCustomizationSettingsService {
  /**
   *
   */
  static getUiManagementSettings(options: IRequestOptions = {}): Promise<UiCustomizationSettingsEditDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateUiManagementSettings(
    params: IUpdateUiManagementSettingsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpdateUiManagementSettingsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings';

    configs.url = url;

    let data = null;
    data = { ...params['settings'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateDefaultUiManagementSettings(
    params: IUpdateDefaultUiManagementSettingsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IUpdateDefaultUiManagementSettingsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings';

    configs.url = url;

    let data = null;
    data = { ...params['settings'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static useSystemDefaultSettings(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UserService {
  /**
   *
   */
  static getUsers(params: IGetUsersParams, options: IRequestOptions = {}): Promise<PagedResultDto_UserListDto> {
    params = params || <IGetUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetUsers';

    configs.url = url;

    configs.params = {
      filter: params['filter'],
      permission: params['permission'],
      role: params['role'],
      sorting: params['sorting'],
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUsersToExcel(options: IRequestOptions = {}): Promise<FileDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetUsersToExcel';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserForEdit(params: IGetUserForEditParams, options: IRequestOptions = {}): Promise<GetUserForEditOutput> {
    params = params || <IGetUserForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetUserForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserPermissionsForEdit(
    params: IGetUserPermissionsForEditParams,
    options: IRequestOptions = {}
  ): Promise<GetUserPermissionsForEditOutput> {
    params = params || <IGetUserPermissionsForEditParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetUserPermissionsForEdit';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static resetUserSpecificPermissions(
    params: IResetUserSpecificPermissionsParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IResetUserSpecificPermissionsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/ResetUserSpecificPermissions';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateUserPermissions(params: IUpdateUserPermissionsParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateUserPermissionsParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/UpdateUserPermissions';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateUser(params: ICreateOrUpdateUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICreateOrUpdateUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/CreateOrUpdateUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static deleteUser(params: IDeleteUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/DeleteUser';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static unlockUser(params: IUnlockUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUnlockUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/UnlockUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUsersForLogin(params: IGetUsersForLoginParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IGetUsersForLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetUsersForLogin';

    configs.url = url;

    configs.params = { name: params['name'], surname: params['surname'], userName: params['userName'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UserLinkService {
  /**
   *
   */
  static linkToUser(params: ILinkToUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ILinkToUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLink/LinkToUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLinkedUsers(
    params: IGetLinkedUsersParams,
    options: IRequestOptions = {}
  ): Promise<PagedResultDto_LinkedUserDto> {
    params = params || <IGetLinkedUsersParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLink/GetLinkedUsers';

    configs.url = url;

    configs.params = {
      maxResultCount: params['maxResultCount'],
      skipCount: params['skipCount'],
      sorting: params['sorting']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRecentlyUsedLinkedUsers(options: IRequestOptions = {}): Promise<ListResultDto_LinkedUserDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static unlinkUser(params: IUnlinkUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUnlinkUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLink/UnlinkUser';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UserLoginService {
  /**
   *
   */
  static getRecentUserLoginAttempts(options: IRequestOptions = {}): Promise<ListResultDto_UserLoginAttemptDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/GetRecentUserLoginAttempts';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getNfcCurrentUserLogin(options: IRequestOptions = {}): Promise<GetNfcCurrentUserLoginOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/GetNfcCurrentUserLogin';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateNfcUserLogin(
    params: ICreateOrUpdateNfcUserLoginParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateNfcUserLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static bindNfcCurrentUserLogin(params: IBindNfcCurrentUserLoginParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IBindNfcCurrentUserLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/BindNfcCurrentUserLogin';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeNfcUserLogin(params: IRemoveNfcUserLoginParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IRemoveNfcUserLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/RemoveNfcUserLogin';

    configs.url = url;

    configs.params = { userId: params['userId'], key: params['key'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeNfcCurrentUserLogin(
    params: IRemoveNfcCurrentUserLoginParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IRemoveNfcCurrentUserLoginParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin';

    configs.url = url;

    configs.params = { key: params['key'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getUserLoginByProviderKey(
    params: IGetUserLoginByProviderKeyParams1,
    options: IRequestOptions = {}
  ): Promise<UserLogin> {
    params = params || <IGetUserLoginByProviderKeyParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/GetUserLoginByProviderKey';

    configs.url = url;

    configs.params = { providerKey: params['providerKey'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static bindUser(params: IBindUserParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IBindUserParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/BindUser';

    configs.url = url;

    configs.params = { userId: params['userId'], externalAccountPk: params['externalAccountPk'], type: params['type'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static removeUserBind(params: IRemoveUserBindParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IRemoveUserBindParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/UserLogin/RemoveUserBind';

    configs.url = url;

    configs.params = { provider: params['provider'], userId: params['userId'], key: params['key'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class WebLogService {
  /**
   *
   */
  static getLatestWebLogs(options: IRequestOptions = {}): Promise<GetLatestWebLogsOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WebLog/GetLatestWebLogs';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static downloadWebLogs(options: IRequestOptions = {}): Promise<FileDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WebLog/DownloadWebLogs';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class WireCabinetService {
  /**
   *
   */
  static wireCabinetApply(params: IWireCabinetApplyParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetApplyParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetApply';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetApprove(params: IWireCabinetApproveParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetApproveParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetApprove';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetUnlock(
    params: IWireCabinetUnlockParams,
    options: IRequestOptions = {}
  ): Promise<WireCabinetUnlockOutput> {
    params = params || <IWireCabinetUnlockParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetUnlock';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetHook(params: IWireCabinetHookParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetHookParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetHook';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetDeviceHook(params: IWireCabinetDeviceHookParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetDeviceHookParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetDeviceHook';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetUnHook(params: IWireCabinetUnHookParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetUnHookParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetUnHook';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static wireCabinetUpdateTask(params: IWireCabinetUpdateTaskParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IWireCabinetUpdateTaskParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/WireCabinetUpdateTask';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplyReasonEnums(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetApplyReasonEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplyReasonList(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetApplyReasonList';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getBuckleTypeEnums(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetBuckleTypeEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getLockModeEnums(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetLockModeEnums';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getTask(params: IGetTaskParams1, options: IRequestOptions = {}): Promise<WireCabinetTaskOutput> {
    params = params || <IGetTaskParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetTask';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApplicants(options: IRequestOptions = {}): Promise<ListResultDto_WireCabinetOperatorDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetApplicants';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getApprovers(options: IRequestOptions = {}): Promise<ListResultDto_WireCabinetOperatorDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetApprovers';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRecentlyTimeForSelectOperation(
    params: IGetRecentlyTimeForSelectOperationParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <IGetRecentlyTimeForSelectOperationParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation';

    configs.url = url;

    configs.params = { equipmentId: params['equipmentId'], bluetooth: params['bluetooth'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static updateOperateTime(params: IUpdateOperateTimeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IUpdateOperateTimeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/UpdateOperateTime';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getWireDetail(params: IGetWireDetailParams, options: IRequestOptions = {}): Promise<WireDetailOutput> {
    params = params || <IGetWireDetailParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetWireDetail';

    configs.url = url;

    configs.params = { value: params['value'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static uploadFile(params: IUploadFileParams, options: IRequestOptions = {}): Promise<ListResultDto_UploadFileOutput> {
    params = params || <IUploadFileParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'multipart/form-data'
    };

    let url = '/api/services/app/WireCabinet/UploadFile';

    configs.url = url;

    let data = null;
    data = new FormData();
    if (params['file']) {
      data.append('file', params['file'], 'file');
    }

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getWireCabinet(params: IGetWireCabinetParams, options: IRequestOptions = {}): Promise<WireCabinetOutput> {
    params = params || <IGetWireCabinetParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetWireCabinet';

    configs.url = url;

    configs.params = { equipmentId: params['equipmentId'], bluetooth: params['bluetooth'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static createOrUpdateEquipmentPropertyConfig(
    params: ICreateOrUpdateEquipmentPropertyConfigParams,
    options: IRequestOptions = {}
  ): Promise<any> {
    params = params || <ICreateOrUpdateEquipmentPropertyConfigParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getWirePile(params: IGetWirePileParams, options: IRequestOptions = {}): Promise<WirePileOutput> {
    params = params || <IGetWirePileParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetWirePile';

    configs.url = url;

    configs.params = { value: params['value'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getWiresBeTaken(
    params: IGetWiresBeTakenParams,
    options: IRequestOptions = {}
  ): Promise<ListResultDto_WireBeTakenDto> {
    params = params || <IGetWiresBeTakenParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetWiresBeTaken';

    configs.url = url;

    configs.params = { stationId: params['stationId'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getWireCabinetBluetooths(options: IRequestOptions = {}): Promise<ListResultDto_WireCabinetBluetoothDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/GetWireCabinetBluetooths';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static checkWireConfigIsExsit(params: ICheckWireConfigIsExsitParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ICheckWireConfigIsExsitParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/WireCabinet/CheckWireConfigIsExsit';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export interface IIsTenantAvailableParams {
  /**  */
  input?: IsTenantAvailableInput;
}
export interface IRegisterParams {
  /**  */
  input?: RegisterInput;
}
export interface ISendPasswordResetCodeParams {
  /**  */
  input?: SendPasswordResetCodeInput;
}
export interface IResetPasswordParams {
  /**  */
  input?: ResetPasswordInput;
}
export interface ISendEmailActivationLinkParams {
  /**  */
  input?: SendEmailActivationLinkInput;
}
export interface IActivateEmailParams {
  /**  */
  input?: ActivateEmailInput;
}
export interface IImpersonateParams {
  /**  */
  input?: ImpersonateInput;
}
export interface ISwitchToLinkedAccountParams {
  /**  */
  input?: SwitchToLinkedAccountInput;
}
export interface IGetAuditLogsParams {
  /**  */
  startDate: string;

  /**  */
  endDate: string;

  /**  */
  userName?: string;

  /**  */
  serviceName?: string;

  /**  */
  methodName?: string;

  /**  */
  browserInfo?: string;

  /**  */
  hasException?: boolean;

  /**  */
  minExecutionDuration?: number;

  /**  */
  maxExecutionDuration?: number;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetAuditLogsToExcelParams {
  /**  */
  startDate: string;

  /**  */
  endDate: string;

  /**  */
  userName?: string;

  /**  */
  serviceName?: string;

  /**  */
  methodName?: string;

  /**  */
  browserInfo?: string;

  /**  */
  hasException?: boolean;

  /**  */
  minExecutionDuration?: number;

  /**  */
  maxExecutionDuration?: number;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IClearCacheParams {
  /**  */
  input?: EntityDto_String;
}
export interface IGetUserChatMessagesParams {
  /**  */
  tenantId?: number;

  /**  */
  userId: number;

  /**  */
  minMessageId?: number;
}
export interface IMarkAllUnreadMessagesOfUserAsReadParams {
  /**  */
  input?: MarkAllUnreadMessagesOfUserAsReadInput;
}
export interface IGetEditionsForComboboxParams {
  /**  */
  onlyFreeItems: boolean;
}
export interface IFindUsersParams {
  /**  */
  input?: FindUsersInput;
}
export interface IFindUsersParams1 {
  /**  */
  input?: FindOrganizationUnitUsersInput;
}
export interface IGetDeviceStateForComboxParams {
  /**  */
  deviceTypeId: number;
}
export interface ISendAndGetDateParams {
  /**  */
  date?: string;
}
export interface ISendAndGetDateTimeParams {
  /**  */
  date?: string;
}
export interface ISendAndGetDateRangeParams {
  /**  */
  startDate?: string;

  /**  */
  endDate?: string;
}
export interface IGetCountriesParams {
  /**  */
  searchTerm?: string;
}
export interface ISendAndGetSelectedCountriesParams {
  /**  */
  selectedCountries?: NameValue_String;
}
export interface ISendAndGetValueParams {
  /**  */
  input?: string;
}
export interface IGetDevicesParams {
  /**  */
  name?: string;

  /**  */
  deviceAreaId?: number;

  /**  */
  stationId?: number;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface IGetLockControlDevicesParams {
  /**  */
  stationId: number;

  /**  */
  deviceAreaId?: number;

  /**  */
  deviceName?: string;

  /**  */
  isEst: boolean;

  /**  */
  isPprimary: boolean;

  /**  */
  isSecondary: boolean;

  /**  */
  unPage: boolean;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface IGetDeviceForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateDeviceParams {
  /**  */
  input?: CreateOrUpdateDeviceInput;
}
export interface IDeleteDeviceParams {
  /**  */
  id: number;
}
export interface IQueryDeviceStatesParams {
  /**  */
  input?: QueryDevicesStateInput;
}
export interface IUpdateDeviceStateParams {
  /**  */
  input?: UpdateDeviceStateInput;
}
export interface ICheckDeviceNameIsExistParams {
  /**  */
  input?: CheckDeviceNameIsExistInput;
}
export interface IGetDeviceAreasParams {
  /**  */
  stationId?: number;
}
export interface IGetDeviceAreaForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateDeviceAreaParams {
  /**  */
  input?: CreateOrUpdateDeviceAreaInput;
}
export interface IDeleteDeviceAreaParams {
  /**  */
  id: number;
}
export interface IGetDeviceBoardsParams {
  /**  */
  name?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetDeviceBoardForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateDeviceBoardParams {
  /**  */
  input?: CreateOrUpdateDeviceBoardInput;
}
export interface IDeleteDeviceBoardParams {
  /**  */
  id: number;
}
export interface IUploadDeviceBoardParams {
  /**  */
  file?: any | null[];
}
export interface IGetLockCodePropertiesParams {
  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetLockCodePropertyForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateLockCodePropertyParams {
  /**  */
  input?: CreateOrUpdateLockCodePropertyInput;
}
export interface IDeleteLockCodePropertyParams {
  /**  */
  id: number;
}
export interface IGetDeviceTermsParams {
  /**  */
  stationName: string;

  /**  */
  pointName: string;

  /**  */
  state: number;
}
export interface IGetTermsParams {
  /**  */
  deviceType: number;
}
export interface ICreateOrUpdateDeviceOperationParams {
  /**  */
  input?: CreateOrUpdateDeviceOperationInput;
}
export interface IDeleteDeviceOperationParams {
  /**  */
  id: number;
}
export interface IGetDeviceTypesParams {
  /**  */
  name?: string;

  /**  */
  isEst?: boolean;

  /**  */
  unPaged?: boolean;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetDeviceTypeForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateDeviceTypeParams {
  /**  */
  input?: CreateOrUpdateDeviceTypeInput;
}
export interface IDeleteDeviceTypeParams {
  /**  */
  id: number;
}
export interface IGetEditionForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateEditionParams {
  /**  */
  input?: CreateOrUpdateEditionDto;
}
export interface IDeleteEditionParams {
  /**  */
  id: number;
}
export interface IGetEditionComboboxItemsParams {
  /**  */
  selectedEditionId?: number;

  /**  */
  addAllItem: boolean;

  /**  */
  onlyFreeItems: boolean;
}
export interface IGetEquipmentsParams {
  /**  */
  productId?: number;

  /**  */
  name?: string;

  /**  */
  terminalId?: number;

  /**  */
  stationId?: number;
}
export interface IGetEquipmentForEditParams {
  /**  */
  productId: number;

  /**  */
  id?: number;
}
export interface ICreateOrUpdateEquipmentParams {
  /**  */
  input?: CreateOrUpdateEquipmentInput;
}
export interface IDeleteEquipmentParams {
  /**  */
  id: number;
}
export interface IGetEquipmentNotBindedParams {
  /**  */
  stationId?: number;

  /**  */
  name?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetAllStationBindEquipmentsParams {
  /**  */
  stationId?: number;
}
export interface IGetStationBindEquipmentsParams {
  /**  */
  stationId?: number;

  /**  */
  name?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetEquipmentWithPropertyParams {
  /**  */
  id: number;
}
export interface IControlEquipmentParams {
  /**  */
  input?: ControlEquipmentInput;
}
export interface IGetEquipmentsCombinePropertiesParams {
  /**  */
  type: string;
}
export interface IDownloadParams {
  /**  */
  id: string;

  /**  */
  name: string;
}
export interface IFileParams {
  /**  */
  id: string;

  /**  */
  name: string;
}
export interface ICreateFriendshipRequestParams {
  /**  */
  input?: CreateFriendshipRequestInput;
}
export interface ICreateFriendshipRequestByUserNameParams {
  /**  */
  input?: CreateFriendshipRequestByUserNameInput;
}
export interface IBlockUserParams {
  /**  */
  input?: BlockUserInput;
}
export interface IUnblockUserParams {
  /**  */
  input?: UnblockUserInput;
}
export interface IAcceptFriendshipRequestParams {
  /**  */
  input?: AcceptFriendshipRequestInput;
}
export interface IGetGraphsParams {
  /**  */
  name?: string;
}
export interface IGetGraphForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateGraphParams {
  /**  */
  input?: CreateOrUpdateGraphInput;
}
export interface IDeleteGraphParams {
  /**  */
  id: number;
}
export interface IUploadGraphParams {
  /**  */
  file?: any;
}
export interface IGetDashboardStatisticsDataParams {
  /**  */
  incomeStatisticsDateInterval: string;

  /**  */
  startDate: string;

  /**  */
  endDate: string;
}
export interface IGetIncomeStatisticsParams {
  /**  */
  incomeStatisticsDateInterval: string;

  /**  */
  startDate: string;

  /**  */
  endDate: string;
}
export interface IGetEditionTenantStatisticsParams {
  /**  */
  startDate: string;

  /**  */
  endDate: string;
}
export interface IUpdateAllSettingsParams {
  /**  */
  input?: HostSettingsEditDto;
}
export interface IUpdateAllSettingsParams1 {
  /**  */
  input?: TenantSettingsEditDto;
}
export interface ISendTestEmailParams {
  /**  */
  input?: SendTestEmailInput;
}
export interface ISendTestEmailParams1 {
  /**  */
  input?: SendTestEmailInput;
}
export interface ICreateDbBaseParams {
  /**  */
  input?: CreateDbBaseInput;
}
export interface IWriteDataToDbParams {
  /**  */
  input?: WriteDataToDbInput;
}
export interface IReadDataFromDbParams {
  /**  */
  input?: ReadDataFromDbInput;
}
export interface ISetupParams {
  /**  */
  input?: InstallDto;
}
export interface IAddIntelligentLocksParams {
  /**  */
  input?: AddIntelligentLocksInput;
}
export interface IRemoveIntelligentLocksParams {
  /**  */
  roleId: number;

  /**  */
  intelligentLockIds?: number[];
}
export interface IUpdateIntelligentLocksParams {
  /**  */
  input?: UpdateIntelligentLocksInput;
}
export interface IGetIntelligentLockListParams {
  /**  */
  id?: number;
}
export interface IGetInvoiceInfoParams {
  /**  */
  id: number;
}
export interface ICreateInvoiceParams {
  /**  */
  input?: CreateInvoiceDto;
}
export interface IKeyCabinetApplyParams {
  /**  */
  input?: KeyCabinetApplyInput;
}
export interface IKeyCabinetApproveParams {
  /**  */
  input?: KeyCabinetApproveInput;
}
export interface IKeyCabinetUnlockParams {
  /**  */
  input?: KeyCabinetUnlockInput;
}
export interface IKeyCabinetUpdateUnlockCodeParams {
  /**  */
  input?: KeyCabinetGenerateUnlockCodeInput;
}
export interface IKeyCabinetOpenDoorParams {
  /**  */
  input?: KeyCabinetOpenDoorInput;
}
export interface IKeyCabinetReturnParams {
  /**  */
  input?: KeyCabinetReturnInput;
}
export interface IGetApplyReasonEnumsParams {
  /**  */
  approverType?: string;
}
export interface IGetApplyReasonListParams {
  /**  */
  approverType?: string;
}
export interface IGetTaskParams {
  /**  */
  id: number;
}
export interface IGetTaskParams1 {
  /**  */
  id: number;
}
export interface IEndTaskParams {
  /**  */
  input?: KeyCabinetEndTaskInput;
}
export interface IGetApproversParams {
  /**  */
  roles?: string;
}
export interface IGetIsTaskExpiredParams {
  /**  */
  equipmentPropertyId: number;
}
export interface IGetIsApplicantParams {
  /**  */
  operatorId: number;
}
export interface IGetKeyCarbinetLogsParams {
  /**  */
  stationId: number;

  /**  */
  startDate: string;

  /**  */
  endDate: string;

  /**  */
  applicantId?: number;

  /**  */
  approverId?: number;
}
export interface IUpdateKeyCarbinetLogParams {
  /**  */
  input?: KeyCarbinetLogInput;
}
export interface IGetLanguageForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateLanguageParams {
  /**  */
  input?: CreateOrUpdateLanguageInput;
}
export interface IDeleteLanguageParams {
  /**  */
  id: number;
}
export interface ISetDefaultLanguageParams {
  /**  */
  input?: SetDefaultLanguageInput;
}
export interface IGetLanguageTextsParams {
  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;

  /**  */
  sorting?: string;

  /**  */
  sourceName: string;

  /**  */
  baseLanguageName?: string;

  /**  */
  targetLanguageName: string;

  /**  */
  targetValueFilter?: string;

  /**  */
  filterText?: string;
}
export interface IUpdateLanguageTextParams {
  /**  */
  input?: UpdateLanguageTextInput;
}
export interface IAddOrUpdateLockControlTaskParams {
  /**  */
  input?: AddOrUpdateLockControlTaskInput;
}
export interface IGetLockControlTaskListParams {
  /**  */
  taskName?: string;

  /**  */
  state: string;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface IGetLockControlTaskItemsParams {
  /**  */
  taskId: string;
}
export interface ICommitLockControlTaskParams {
  /**  */
  input?: LockControlTaskInput;
}
export interface IDeleteLockControlTaskParams {
  /**  */
  taskId: string;
}
export interface IGetLockControlTaskPendingDetailParams {
  /**  */
  taskId: string;
}
export interface IApprovalLockControlTaskParams {
  /**  */
  input?: AprroveLockControlPendingInput;
}
export interface IGetLockControlTaskCodeInfosParams {
  /**  */
  taskId: string;
}
export interface IUploadJsqOperationLogParams {
  /**  */
  input?: UploadJsqOperationLogInput;
}
export interface IGetJsqOperationLogListParams {
  /**  */
  taskId: string;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface IFinishLockControlTaskParams {
  /**  */
  input?: LockControlTaskInput;
}
export interface IGetHistoryLockControlTaskListParams {
  /**  */
  taskName?: string;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface IGetHistoryLockControlTaskItemsParams {
  /**  */
  taskId: string;
}
export interface IGetUserNotificationsParams {
  /**  */
  state?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface ISetNotificationAsReadParams {
  /**  */
  input?: EntityDto_Guid;
}
export interface IUpdateNotificationSettingsParams {
  /**  */
  input?: UpdateNotificationSettingsInput;
}
export interface IGetOperationRecordParams {
  /**  */
  id: number;
}
export interface IGetOperationRecordsParams {
  /**  */
  applicantId?: number;

  /**  */
  approverId?: number;

  /**  */
  startTime?: string;

  /**  */
  endTime?: string;

  /**  */
  stationId?: number;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetOperationRecordsByEquipmentPropertyIdParams {
  /**  */
  equipmentPropertyId: number;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetOperationRecordsByEquipmentIdParams {
  /**  */
  equipmentId: number;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetOrganizationUnitUsersParams {
  /**  */
  id: number;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface ICreateOrganizationUnitParams {
  /**  */
  input?: CreateOrganizationUnitInput;
}
export interface IUpdateOrganizationUnitParams {
  /**  */
  input?: UpdateOrganizationUnitInput;
}
export interface IMoveOrganizationUnitParams {
  /**  */
  input?: MoveOrganizationUnitInput;
}
export interface IDeleteOrganizationUnitParams {
  /**  */
  id: number;
}
export interface IRemoveUserFromOrganizationUnitParams {
  /**  */
  userId: number;

  /**  */
  organizationUnitId: number;
}
export interface IAddUsersToOrganizationUnitParams {
  /**  */
  input?: UsersToOrganizationUnitInput;
}
export interface IGetPaymentInfoParams {
  /**  */
  upgradeEditionId?: number;
}
export interface ICreatePaymentParams {
  /**  */
  input?: CreatePaymentDto;
}
export interface IExecutePaymentParams {
  /**  */
  input?: ExecutePaymentDto;
}
export interface IGetPaymentHistoryParams {
  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetProductForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateProductParams {
  /**  */
  input?: CreateOrUpdateProductInput;
}
export interface IDeleteProductParams {
  /**  */
  id: number;
}
export interface IGetProductPropertyForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateProductPropertyParams {
  /**  */
  input?: CreateOrUpdateProductPropertyInput;
}
export interface IDeleteProductPropertyParams {
  /**  */
  id: number;
}
export interface IVerifySmsCodeParams {
  /**  */
  input?: VerifySmsCodeInputDto;
}
export interface IUpdateCurrentUserProfileParams {
  /**  */
  input?: CurrentUserProfileEditDto;
}
export interface IChangePasswordParams {
  /**  */
  input?: ChangePasswordInput;
}
export interface IUpdateProfilePictureParams {
  /**  */
  input?: UpdateProfilePictureInput;
}
export interface IGetFriendProfilePictureByIdParams {
  /**  */
  profilePictureId?: string;

  /**  */
  userId: number;

  /**  */
  tenantId?: number;
}
export interface IGetProfilePictureByIdParams {
  /**  */
  profilePictureId: string;
}
export interface IChangeLanguageParams {
  /**  */
  input?: ChangeUserLanguageDto;
}
export interface IAddOrUpdateRiskTicketParams {
  /**  */
  input?: AddOrUpdateRiskTicketInput;
}
export interface IDeleteTicketParams {
  /**  */
  ticketId: string;
}
export interface IAddOrUpdateRiskTicketItemsParams {
  /**  */
  input?: AddOrUpdateRiskTicketItemsInput;
}
export interface IDeleteRiskTicketItemsParams {
  /**  */
  riskTicketId: string;
}
export interface IAddOrUpdateRiskItemTemplateParams {
  /**  */
  input?: AddOrUpdateRiskItemTemplateInput;
}
export interface IDeleteRiskItemTemplateParams {
  /**  */
  riskPublicItemId: string;
}
export interface IAddOrUpdateRiskItemTermMapParams {
  /**  */
  input?: AddOrUpdateRiskItemTermMapInput;
}
export interface IDeleteRiskItemTermMapParams {
  /**  */
  riskItemTermMapId: string;
}
export interface IMappingRiskItemByTermParams {
  /**  */
  input?: MappingRiskItemByTermInput;
}
export interface IGetRiskItemSingleParams {
  /**  */
  riskItemId: string;
}
export interface IGetRiskItemArrayByTicketIdParams {
  /**  */
  ticketId: string;

  /**  */
  ticketType: string;

  /**  */
  isContainsTicketItemRisk: boolean;
}
export interface IGetRiskItemArrayByRiskTicketIdParams {
  /**  */
  riskTicketId: string;
}
export interface IGetRiskItemArrayByTicketFolderIdParams {
  /**  */
  ticketFolderId: string;
}
export interface IGetRolesParams {
  /**  */
  permission?: string;
}
export interface IGetRoleForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateRoleParams {
  /**  */
  input?: CreateOrUpdateRoleInput;
}
export interface IDeleteRoleParams {
  /**  */
  id: number;
}
export interface IAddOrUpdateSafetyWearMonitoringParams {
  /**  */
  input?: SafetyWearMonitoringInput;
}
export interface IGetOneParams {
  /**  */
  userId: number;

  /**  */
  equipmentNo: number;
}
export interface IGetListParams {
  /**  */
  stationId: number;
}
export interface IGetSafetyWearEquipmentByMacAddressParams {
  /**  */
  macAddress?: string;
}
export interface IGetSafetyWearEquipmentsParams {
  /**  */
  stationId: number;
}
export interface IGetUserListForSafetyWearLoginParams {
  /**  */
  userName?: string;
}
export interface IAddOrUpdateSerialNumberParams {
  /**  */
  input?: AddSerialNumberInput;
}
export interface IGetSerialNumberParams {
  /**  */
  stationId: number;

  /**  */
  code?: string;
}
export interface ISetSerialMaxNumberParams {
  /**  */
  input?: SetSerialMaxNumberInput;
}
export interface IGetStationsParams {
  /**  */
  name?: string;
}
export interface IGetStationForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateStationParams {
  /**  */
  input?: CreateOrUpdateStationInput;
}
export interface IDeleteStationParams {
  /**  */
  id: number;
}
export interface IGetStationNotBindParams {
  /**  */
  name?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IBindEquipmentStationParams {
  /**  */
  input?: BindEquipmentStationInput;
}
export interface IRemoveEquipmentStationParams {
  /**  */
  equipmentId: number;
}
export interface ICreateStationUsersParams {
  /**  */
  input?: CreateStationUserInput;
}
export interface IRemoveUserFromStationParams {
  /**  */
  stationUserDtoStationId: number;

  /**  */
  stationUserDtoUserId: number;
}
export interface IUpdateDefaultUserStationParams {
  /**  */
  input?: UpdateDefaultUserStationInput;
}
export interface ICreateStationAreaParams {
  /**  */
  input?: CreateStationAreaInput;
}
export interface IUpdateStationAreaParams {
  /**  */
  input?: UpdateStationAreaInput;
}
export interface IMoveStationAreaParams {
  /**  */
  input?: MoveStationAreaInput;
}
export interface IDeleteStationAreaParams {
  /**  */
  id: number;
}
export interface IGetUserStationAreaParams {
  /**  */
  userId: number;
}
export interface IStationAreaBindStationParams {
  /**  */
  input?: StationAreaBindStationInput;
}
export interface IRemoveStationAreaStationParams {
  /**  */
  id: number;
}
export interface IGetRelatedUserListByStationIdParams {
  /**  */
  id: number;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetNotRelatedUserListByStationIdParams {
  /**  */
  stationId: number;
}
export interface IGetDefaultStationParams {
  /**  */
  userId: number;
}
export interface IGetUserStationsParams {
  /**  */
  userId: number;
}
export interface IUpgradeTenantToEquivalentEditionParams {
  /**  */
  upgradeEditionId: number;
}
export interface IGetTenantsParams {
  /**  */
  filter?: string;

  /**  */
  subscriptionEndDateStart?: string;

  /**  */
  subscriptionEndDateEnd?: string;

  /**  */
  creationDateStart?: string;

  /**  */
  creationDateEnd?: string;

  /**  */
  editionId?: number;

  /**  */
  editionIdSpecified: boolean;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface ICreateTenantParams {
  /**  */
  input?: CreateTenantInput;
}
export interface IGetTenantForEditParams {
  /**  */
  id: number;
}
export interface IUpdateTenantParams {
  /**  */
  input?: TenantEditDto;
}
export interface IDeleteTenantParams {
  /**  */
  id: number;
}
export interface IGetTenantFeaturesForEditParams {
  /**  */
  id: number;
}
export interface IUpdateTenantFeaturesParams {
  /**  */
  input?: UpdateTenantFeaturesInput;
}
export interface IResetTenantSpecificFeaturesParams {
  /**  */
  input?: EntityDto;
}
export interface IUnlockTenantAdminParams {
  /**  */
  input?: EntityDto;
}
export interface IGetDashboardDataParams {
  /**  */
  salesSummaryDatePeriod: string;
}
export interface IGetSalesSummaryParams {
  /**  */
  salesSummaryDatePeriod: string;
}
export interface IGetRegionalStatsParams {
  /**  */
  input?: any | null;
}
export interface IGetGeneralStatsParams {
  /**  */
  input?: any | null;
}
export interface IRegisterTenantParams {
  /**  */
  input?: RegisterTenantInput;
}
export interface IGetEditionParams {
  /**  */
  editionId: number;
}
export interface IGetTerminalPortConfigsParams {
  /**  */
  terminalId?: number;
}
export interface IGetTerminalPortConfigForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateTerminalPortConfigParams {
  /**  */
  input?: CreateOrUpdateTerminalPortConfigInput;
}
export interface IDeleteTerminalPortConfigParams {
  /**  */
  id: number;
}
export interface IGetTerminalForEditParams {
  /**  */
  id?: number;
}
export interface ICreateOrUpdateTerminalParams {
  /**  */
  input?: CreateOrUpdateTerminalInput;
}
export interface IDeleteTerminalParams {
  /**  */
  id: number;
}
export interface IResetTerminalParams {
  /**  */
  input?: ResetTerminalInput;
}
export interface ISendControlOperatingParams {
  /**  */
  input?: SendControlOperatingInput;
}
export interface IGetTermperaturePointsParams {
  /**  */
  id: number;
}
export interface IAddOrUpdateTicketFolderParams {
  /**  */
  input?: AddOrUpdateTicketFolderInput;
}
export interface IDeleteStationTicketFolderParams {
  /**  */
  stationId?: number;

  /**  */
  isForce: boolean;
}
export interface IDeleteTicketFolderParams {
  /**  */
  ticketFolderId: string;

  /**  */
  isForce: boolean;
}
export interface IAddOrUpdateTicketFolderRiskInfoParams {
  /**  */
  input?: AddOrUpdateTicketFolderRiskInfoInput;
}
export interface IGetStationTicketFolderChildrensParams {
  /**  */
  stationId?: number;

  /**  */
  depth: number;
}
export interface IGetTicketFolderChildrensParams {
  /**  */
  ticketFolderId?: string;

  /**  */
  depth: number;
}
export interface IGetStationTicketFolderChildrenWithTicketParams {
  /**  */
  stationId?: number;

  /**  */
  depth: number;

  /**  */
  ticketFolderId?: string;
}
export interface IGetTicketFoldersByNameParams {
  /**  */
  partName?: string;
}
export interface IGetTicketFolderByIdParams {
  /**  */
  ticketFolderId: string;
}
export interface IAssignFolderTicketsParams {
  /**  */
  input?: AssignFolderTicketsInput;
}
export interface IGetFolderTicketsByIdParams {
  /**  */
  ticketFolderId: string;

  /**  */
  isRecursive: boolean;
}
export interface IGetTicketFoldersWithTicketsByParentIdParams {
  /**  */
  ticktFolderId?: string;

  /**  */
  depth: number;

  /**  */
  isNeedSearchByUserProfessional: boolean;

  /**  */
  stationId?: number;
}
export interface IGetStationTicketFoldersWithTicketsParams {
  /**  */
  stationId?: number;

  /**  */
  depth: number;

  /**  */
  ticketFolderId?: string;
}
export interface IGetTicketRoleUsersParams {
  /**  */
  stationId: number;

  /**  */
  roleType?: string;

  /**  */
  key?: string;
}
export interface IAddOrUpdateTicketTaskParams {
  /**  */
  input?: AddOrUpdateTicketTaskInput;
}
export interface IDeleteTicketTaskParams {
  /**  */
  ticketId: string;
}
export interface IAssignTicketPersonasParams {
  /**  */
  input?: AssignTicketPersonaesInput;
}
export interface ICommitTicketParams {
  /**  */
  input?: CommitTicketInput;
}
export interface IConfirmTicketParams {
  /**  */
  input?: ConfirmTicketInput;
}
export interface IApproveTicketParams {
  /**  */
  input?: ApproveTicketInput;
}
export interface IExecuteTicketParams {
  /**  */
  input?: ExecuteTicketInput;
}
export interface IFinishTicketParams {
  /**  */
  input?: FinishTicketInput;
}
export interface IUpdateTicketItemsStatusParams {
  /**  */
  input?: UpdateTicketItemsStatusInput;
}
export interface IUpdateTicketRiskItemsStatusParams {
  /**  */
  input?: UpdateTicketRiskItemsStatusInput;
}
export interface ICurrentTicketItemDeviceCanOperateParams {
  /**  */
  deviceId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;
}
export interface IGetTicketParams {
  /**  */
  ticketId: string;

  /**  */
  isNeedOperateLockInfo: boolean;
}
export interface IGetTicketParams1 {
  /**  */
  ticketId: string;

  /**  */
  isNeedOperateLockInfo: boolean;
}
export interface IGetTicketsParams {
  /**  */
  stationId?: number;

  /**  */
  unPage: boolean;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetTicketItemsParams {
  /**  */
  ticketId: string;
}
export interface IGetTicketItemsParams1 {
  /**  */
  ticketId: string;
}
export interface ICheckDeviceStatusForTicketTaskExcutingParams {
  /**  */
  input?: CheckDeviceStatusForTicketTaskExcutingInput;
}
export interface IAnalyseSentenceParams {
  /**  */
  input?: AnalyseSentenceInput;
}
export interface IGetTicketItemOperateLockInfoParams {
  /**  */
  ticketItemIds?: string[];
}
export interface ISingleAnalyseSentenceOutputParams {
  /**  */
  input?: SingleAnalyseSentenceInput;
}
export interface IAddOrUpdateTicketTypicalParams {
  /**  */
  input?: AddOrUpdateTicketTypicalInput;
}
export interface IDeleteTicketTypicalParams {
  /**  */
  ticketTypicalId: string;
}
export interface IGetTicketsByTaskNameParams {
  /**  */
  partTitle?: string;

  /**  */
  stationId?: number;

  /**  */
  ticketFolderId?: string;

  /**  */
  isRecursive: boolean;

  /**  */
  skipCount: number;

  /**  */
  maxResultCount: number;
}
export interface ICreateTicketCurrentParams {
  /**  */
  input?: CreateTicketCurrentInput;
}
export interface IAddOrUpdateCommitParams {
  /**  */
  input?: AddOrUpdateCommitInput;
}
export interface IAddOrUpdateApproveParams {
  /**  */
  input?: AddOrUpdateApproveInput;
}
export interface IDeleteTicketTypicalInvalidParams {
  /**  */
  ticketTypicalInvalidId: string;
}
export interface IGetTicketTypicalInvalidsParams {
  /**  */
  stationId: number;

  /**  */
  ticketRunStates?: string[];
}
export interface IGetTicketTypicalInvalidParams {
  /**  */
  ticketTypicalInvalidId: string;
}
export interface IGetTicketItemTypicalInvalidsParams {
  /**  */
  ticketTypicalInvalidId: string;
}
export interface IAssignTicketItemParams {
  /**  */
  input?: AssignTicketItemInput;
}
export interface IGetTimezonesParams {
  /**  */
  defaultTimezoneScope: string;
}
export interface IGetTimezoneComboboxItemsParams {
  /**  */
  selectedTimezoneId?: string;
}
export interface IAuthenticateParams {
  /**  */
  model?: AuthenticateModel;
}
export interface ISendTwoFactorAuthCodeParams {
  /**  */
  model?: SendTwoFactorAuthCodeModel;
}
export interface IImpersonatedAuthenticateParams {
  /**  */
  impersonationToken?: string;
}
export interface ILinkedAccountAuthenticateParams {
  /**  */
  switchAccountToken?: string;
}
export interface IExternalAuthenticateParams {
  /**  */
  model?: ExternalAuthenticateModel;
}
export interface ISecurityAuthenticateParams {
  /**  */
  model?: SecurityAuthenticateModel;
}
export interface IGetUserLoginByProviderKeyParams {
  /**  */
  model?: SecurityAuthenticateOTPModel;
}
export interface IGetUserLoginByProviderKeyParams1 {
  /**  */
  providerKey?: string;
}
export interface ISecurityOTPAuthenticateParams {
  /**  */
  model?: SecurityAuthenticateOTPModel;
}
export interface IBindUserAccountParams {
  /**  */
  model?: AccountBindingModel;
}
export interface ITestNotificationParams {
  /**  */
  message?: string;

  /**  */
  severity?: string;
}
export interface IUpdateUiManagementSettingsParams {
  /**  */
  settings?: UiCustomizationSettingsEditDto;
}
export interface IUpdateDefaultUiManagementSettingsParams {
  /**  */
  settings?: UiCustomizationSettingsEditDto;
}
export interface IGetUsersParams {
  /**  */
  filter?: string;

  /**  */
  permission?: string;

  /**  */
  role?: number;

  /**  */
  sorting?: string;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;
}
export interface IGetUserForEditParams {
  /**  */
  id?: number;
}
export interface IGetUserPermissionsForEditParams {
  /**  */
  id: number;
}
export interface IResetUserSpecificPermissionsParams {
  /**  */
  input?: EntityDto_Int64;
}
export interface IUpdateUserPermissionsParams {
  /**  */
  input?: UpdateUserPermissionsInput;
}
export interface ICreateOrUpdateUserParams {
  /**  */
  input?: CreateOrUpdateUserInput;
}
export interface IDeleteUserParams {
  /**  */
  id: number;
}
export interface IUnlockUserParams {
  /**  */
  input?: EntityDto_Int64;
}
export interface IGetUsersForLoginParams {
  /**  */
  name?: string;

  /**  */
  surname?: string;

  /**  */
  userName?: string;
}
export interface ILinkToUserParams {
  /**  */
  input?: LinkToUserInput;
}
export interface IGetLinkedUsersParams {
  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;

  /**  */
  sorting?: string;
}
export interface IUnlinkUserParams {
  /**  */
  input?: UnlinkUserInput;
}
export interface ICreateOrUpdateNfcUserLoginParams {
  /**  */
  input?: CreateOrUpdateNfcUserLoginInput;
}
export interface IBindNfcCurrentUserLoginParams {
  /**  */
  input?: UserLoginDto;
}
export interface IRemoveNfcUserLoginParams {
  /**  */
  userId: number;

  /**  */
  key: string;
}
export interface IRemoveNfcCurrentUserLoginParams {
  /**  */
  key: string;
}
export interface IBindUserParams {
  /**  */
  userId: number;

  /**  */
  externalAccountPk?: string;

  /**  */
  type?: string;
}
export interface IRemoveUserBindParams {
  /**  */
  provider: string;

  /**  */
  userId: number;

  /**  */
  key: string;
}
export interface IWireCabinetApplyParams {
  /**  */
  input?: WireCabinetApplyInput;
}
export interface IWireCabinetApproveParams {
  /**  */
  input?: WireCabinetApproveInput;
}
export interface IWireCabinetUnlockParams {
  /**  */
  input?: WireCabinetUnlockInput;
}
export interface IWireCabinetHookParams {
  /**  */
  input?: WireCabinetHookInput;
}
export interface IWireCabinetDeviceHookParams {
  /**  */
  input?: WireCabinetHook2Input;
}
export interface IWireCabinetUnHookParams {
  /**  */
  input?: WireCabinetUnHookInput;
}
export interface IWireCabinetUpdateTaskParams {
  /**  */
  input?: WireCabinetUpdateTaskInput;
}
export interface IGetRecentlyTimeForSelectOperationParams {
  /**  */
  equipmentId?: number;

  /**  */
  bluetooth?: string;
}
export interface IUpdateOperateTimeParams {
  /**  */
  input?: UpdateOperateTimeInput;
}
export interface IGetWireDetailParams {
  /**  */
  value: string;
}
export interface IUploadFileParams {
  /**  */
  file?: any;
}
export interface IGetWireCabinetParams {
  /**  */
  equipmentId?: number;

  /**  */
  bluetooth?: string;
}
export interface ICreateOrUpdateEquipmentPropertyConfigParams {
  /**  */
  input?: EquipmentPropertyConfigInput;
}
export interface IGetWirePileParams {
  /**  */
  value?: string;
}
export interface IGetWiresBeTakenParams {
  /**  */
  stationId?: number;
}
export interface ICheckWireConfigIsExsitParams {
  /**  */
  input?: CheckWireConfigInput;
}
export class IsTenantAvailableInput {
  /**  */
  tenancyName: string;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
    }
  }
}
export enum EnumIsTenantAvailableOutputState {
  'Available' = 'Available',
  'InActive' = 'InActive',
  'NotFound' = 'NotFound'
}
export class IsTenantAvailableOutput {
  /**  */
  state: EnumIsTenantAvailableOutputState;

  /**  */
  tenantId: number;

  /**  */
  serverRootAddress: string;

  constructor(data?: any) {
    if (data) {
      this['state'] = data['state'];
      this['tenantId'] = data['tenantId'];
      this['serverRootAddress'] = data['serverRootAddress'];
    }
  }
}

export class RegisterInput {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  password: string;

  /**  */
  captchaResponse: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['password'] = data['password'];
      this['captchaResponse'] = data['captchaResponse'];
    }
  }
}

export class RegisterOutput {
  /**  */
  canLogin: boolean;

  constructor(data?: any) {
    if (data) {
      this['canLogin'] = data['canLogin'];
    }
  }
}

export class SendPasswordResetCodeInput {
  /**  */
  emailAddress: string;

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress'];
    }
  }
}

export class ResetPasswordInput {
  /**  */
  userId: number;

  /**  */
  resetCode: string;

  /**  */
  password: string;

  /**  */
  returnUrl: string;

  /**  */
  singleSignIn: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['resetCode'] = data['resetCode'];
      this['password'] = data['password'];
      this['returnUrl'] = data['returnUrl'];
      this['singleSignIn'] = data['singleSignIn'];
    }
  }
}

export class ResetPasswordOutput {
  /**  */
  canLogin: boolean;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['canLogin'] = data['canLogin'];
      this['userName'] = data['userName'];
    }
  }
}

export class SendEmailActivationLinkInput {
  /**  */
  emailAddress: string;

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress'];
    }
  }
}

export class ActivateEmailInput {
  /**  */
  userId: number;

  /**  */
  confirmationCode: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['confirmationCode'] = data['confirmationCode'];
    }
  }
}

export class ImpersonateInput {
  /**  */
  tenantId: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['userId'] = data['userId'];
    }
  }
}

export class ImpersonateOutput {
  /**  */
  impersonationToken: string;

  /**  */
  tenancyName: string;

  constructor(data?: any) {
    if (data) {
      this['impersonationToken'] = data['impersonationToken'];
      this['tenancyName'] = data['tenancyName'];
    }
  }
}

export class SwitchToLinkedAccountInput {
  /**  */
  targetTenantId: number;

  /**  */
  targetUserId: number;

  constructor(data?: any) {
    if (data) {
      this['targetTenantId'] = data['targetTenantId'];
      this['targetUserId'] = data['targetUserId'];
    }
  }
}

export class SwitchToLinkedAccountOutput {
  /**  */
  switchAccountToken: string;

  /**  */
  tenancyName: string;

  constructor(data?: any) {
    if (data) {
      this['switchAccountToken'] = data['switchAccountToken'];
      this['tenancyName'] = data['tenancyName'];
    }
  }
}

export class PagedResultDto_AuditLogListDto {
  /**  */
  totalCount: number;

  /**  */
  items: AuditLogListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class AuditLogListDto {
  /**  */
  userId: number;

  /**  */
  userName: string;

  /**  */
  impersonatorTenantId: number;

  /**  */
  impersonatorUserId: number;

  /**  */
  serviceName: string;

  /**  */
  methodName: string;

  /**  */
  parameters: string;

  /**  */
  executionTime: string;

  /**  */
  executionDuration: number;

  /**  */
  clientIpAddress: string;

  /**  */
  clientName: string;

  /**  */
  browserInfo: string;

  /**  */
  exception: string;

  /**  */
  customData: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['userName'] = data['userName'];
      this['impersonatorTenantId'] = data['impersonatorTenantId'];
      this['impersonatorUserId'] = data['impersonatorUserId'];
      this['serviceName'] = data['serviceName'];
      this['methodName'] = data['methodName'];
      this['parameters'] = data['parameters'];
      this['executionTime'] = data['executionTime'];
      this['executionDuration'] = data['executionDuration'];
      this['clientIpAddress'] = data['clientIpAddress'];
      this['clientName'] = data['clientName'];
      this['browserInfo'] = data['browserInfo'];
      this['exception'] = data['exception'];
      this['customData'] = data['customData'];
      this['id'] = data['id'];
    }
  }
}

export class FileDto {
  /**  */
  fileName: string;

  /**  */
  fileType: string;

  /**  */
  fileToken: string;

  constructor(data?: any) {
    if (data) {
      this['fileName'] = data['fileName'];
      this['fileType'] = data['fileType'];
      this['fileToken'] = data['fileToken'];
    }
  }
}

export class ListResultDto_CacheDto {
  /**  */
  items: CacheDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class CacheDto {
  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
    }
  }
}

export class EntityDto_String {
  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
    }
  }
}

export class GetUserChatFriendsWithSettingsOutput {
  /**  */
  serverTime: string;

  /**  */
  friends: FriendDto[];

  constructor(data?: any) {
    if (data) {
      this['serverTime'] = data['serverTime'];
      this['friends'] = data['friends'];
    }
  }
}
export enum EnumFriendDtoState {
  'Accepted' = 'Accepted',
  'Blocked' = 'Blocked'
}
export class FriendDto {
  /**  */
  friendUserId: number;

  /**  */
  friendTenantId: number;

  /**  */
  friendUserName: string;

  /**  */
  friendTenancyName: string;

  /**  */
  friendProfilePictureId: string;

  /**  */
  unreadMessageCount: number;

  /**  */
  isOnline: boolean;

  /**  */
  state: EnumFriendDtoState;

  constructor(data?: any) {
    if (data) {
      this['friendUserId'] = data['friendUserId'];
      this['friendTenantId'] = data['friendTenantId'];
      this['friendUserName'] = data['friendUserName'];
      this['friendTenancyName'] = data['friendTenancyName'];
      this['friendProfilePictureId'] = data['friendProfilePictureId'];
      this['unreadMessageCount'] = data['unreadMessageCount'];
      this['isOnline'] = data['isOnline'];
      this['state'] = data['state'];
    }
  }
}

export class ListResultDto_ChatMessageDto {
  /**  */
  items: ChatMessageDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}
export enum EnumChatMessageDtoSide {
  'Sender' = 'Sender',
  'Receiver' = 'Receiver'
}
export enum EnumChatMessageDtoReadState {
  'Unread' = 'Unread',
  'Read' = 'Read'
}
export enum EnumChatMessageDtoReceiverReadState {
  'Unread' = 'Unread',
  'Read' = 'Read'
}
export class ChatMessageDto {
  /**  */
  userId: number;

  /**  */
  tenantId: number;

  /**  */
  targetUserId: number;

  /**  */
  targetTenantId: number;

  /**  */
  side: EnumChatMessageDtoSide;

  /**  */
  readState: EnumChatMessageDtoReadState;

  /**  */
  receiverReadState: EnumChatMessageDtoReceiverReadState;

  /**  */
  message: string;

  /**  */
  creationTime: string;

  /**  */
  sharedMessageId: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['tenantId'] = data['tenantId'];
      this['targetUserId'] = data['targetUserId'];
      this['targetTenantId'] = data['targetTenantId'];
      this['side'] = data['side'];
      this['readState'] = data['readState'];
      this['receiverReadState'] = data['receiverReadState'];
      this['message'] = data['message'];
      this['creationTime'] = data['creationTime'];
      this['sharedMessageId'] = data['sharedMessageId'];
      this['id'] = data['id'];
    }
  }
}

export class MarkAllUnreadMessagesOfUserAsReadInput {
  /**  */
  tenantId: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['userId'] = data['userId'];
    }
  }
}

export class ListResultDto_SubscribableEditionComboboxItemDto {
  /**  */
  items: SubscribableEditionComboboxItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class SubscribableEditionComboboxItemDto {
  /**  */
  isFree: boolean;

  /**  */
  value: string;

  /**  */
  displayText: string;

  /**  */
  isSelected: boolean;

  constructor(data?: any) {
    if (data) {
      this['isFree'] = data['isFree'];
      this['value'] = data['value'];
      this['displayText'] = data['displayText'];
      this['isSelected'] = data['isSelected'];
    }
  }
}

export class FindUsersInput {
  /**  */
  tenantId: number;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;

  /**  */
  filter: string;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['maxResultCount'] = data['maxResultCount'];
      this['skipCount'] = data['skipCount'];
      this['filter'] = data['filter'];
    }
  }
}

export class PagedResultDto_NameValueDto {
  /**  */
  totalCount: number;

  /**  */
  items: NameValueDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class NameValueDto {
  /**  */
  name: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['value'] = data['value'];
    }
  }
}

export class GetDefaultEditionNameOutput {
  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
    }
  }
}

export class ListResultDto_DeviceTypeComboboxItemDto {
  /**  */
  items: DeviceTypeComboboxItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class DeviceTypeComboboxItemDto {
  /**  */
  value: string;

  /**  */
  displayText: string;

  /**  */
  isSelected: boolean;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['displayText'] = data['displayText'];
      this['isSelected'] = data['isSelected'];
    }
  }
}

export class ListResultDto_ComboboxItemDto {
  /**  */
  items: ComboboxItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ComboboxItemDto {
  /**  */
  value: string;

  /**  */
  displayText: string;

  /**  */
  isSelected: boolean;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['displayText'] = data['displayText'];
      this['isSelected'] = data['isSelected'];
    }
  }
}

export class DateToStringOutput {
  /**  */
  dateString: string;

  constructor(data?: any) {
    if (data) {
      this['dateString'] = data['dateString'];
    }
  }
}

export class NameValue_String {
  /**  */
  name: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['value'] = data['value'];
    }
  }
}

export class StringOutput {
  /**  */
  output: string;

  constructor(data?: any) {
    if (data) {
      this['output'] = data['output'];
    }
  }
}

export class PagedResultDto_DeviceListDto {
  /**  */
  totalCount: number;

  /**  */
  items: DeviceListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class DeviceListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['id'] = data['id'];
    }
  }
}

export class GetDeviceEditOutput {
  /**  */
  device: DeviceEditDto;

  /**  */
  configListDtos: DeviceCodeInfoDto[];

  constructor(data?: any) {
    if (data) {
      this['device'] = data['device'];
      this['configListDtos'] = data['configListDtos'];
    }
  }
}

export class DeviceEditDto {
  /**  */
  stationId: number;

  /**  */
  deviceAreaId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  voltage: string;

  /**  */
  type: string;

  /**  */
  lockCodePropertyId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['deviceAreaId'] = data['deviceAreaId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['voltage'] = data['voltage'];
      this['type'] = data['type'];
      this['lockCodePropertyId'] = data['lockCodePropertyId'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceCodeInfoDto {
  /**  */
  lockCodeNumber: string;

  /**  */
  code: string;

  /**  */
  lockType: string;

  /**  */
  lockPropertyType: string;

  /**  */
  lockCodeConfigId: number;

  constructor(data?: any) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['code'] = data['code'];
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['lockCodeConfigId'] = data['lockCodeConfigId'];
    }
  }
}

export class CreateOrUpdateDeviceInput {
  /**  */
  device: CreateOrUpdateDeviceDto;

  /**  */
  codeInfoDtos: DeviceCodeInfoEditDto[];

  constructor(data?: any) {
    if (data) {
      this['device'] = data['device'];
      this['codeInfoDtos'] = data['codeInfoDtos'];
    }
  }
}

export class CreateOrUpdateDeviceDto {
  /**  */
  stationId: number;

  /**  */
  deviceAreaId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  voltage: number;

  /**  */
  type: number;

  /**  */
  lockCodePropertyId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['deviceAreaId'] = data['deviceAreaId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['voltage'] = data['voltage'];
      this['type'] = data['type'];
      this['lockCodePropertyId'] = data['lockCodePropertyId'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumDeviceCodeInfoEditDtoLockCodeNumber {
  'Um1' = 'Um1',
  'Um2' = 'Um2',
  'Um3' = 'Um3',
  'Um4' = 'Um4',
  'Um5' = 'Um5',
  'Um6' = 'Um6',
  'Um7' = 'Um7',
  'Um8' = 'Um8',
  'Um9' = 'Um9',
  'Um10' = 'Um10',
  'Um11' = 'Um11',
  'Um12' = 'Um12',
  'Um13' = 'Um13',
  'Um14' = 'Um14',
  'Um15' = 'Um15',
  'Um16' = 'Um16',
  'Um17' = 'Um17',
  'Um18' = 'Um18'
}
export class DeviceCodeInfoEditDto {
  /**  */
  lockCodeNumber: EnumDeviceCodeInfoEditDtoLockCodeNumber;

  /**  */
  code: string;

  /**  */
  lockCodeConfigId: number;

  constructor(data?: any) {
    if (data) {
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['code'] = data['code'];
      this['lockCodeConfigId'] = data['lockCodeConfigId'];
    }
  }
}

export class QueryDevicesStateInput {
  /**  */
  stationDevices: StationDeviceDto[];

  constructor(data?: any) {
    if (data) {
      this['stationDevices'] = data['stationDevices'];
    }
  }
}

export class StationDeviceDto {
  /**  */
  stationName: string;

  /**  */
  pointName: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName'];
      this['pointName'] = data['pointName'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_DeviceStateDto {
  /**  */
  items: DeviceStateDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class DeviceStateDto {
  /**  */
  stationName: string;

  /**  */
  pointName: string;

  /**  */
  state: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName'];
      this['pointName'] = data['pointName'];
      this['state'] = data['state'];
      this['id'] = data['id'];
    }
  }
}

export class UpdateDeviceStateInput {
  /**  */
  deviceState: DeviceStateDto;

  constructor(data?: any) {
    if (data) {
      this['deviceState'] = data['deviceState'];
    }
  }
}

export class UpdateDeviceStateOutput {
  /**  */
  deviceState: DeviceStateDto;

  constructor(data?: any) {
    if (data) {
      this['deviceState'] = data['deviceState'];
    }
  }
}

export class CheckDeviceNameIsExistInput {
  /**  */
  stationId: number;

  /**  */
  name: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['name'] = data['name'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_DeviceAreaListDto {
  /**  */
  items: DeviceAreaListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class DeviceAreaListDto {
  /**  */
  stationId: number;

  /**  */
  parentId: number;

  /**  */
  name: string;

  /**  */
  sortId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['sortId'] = data['sortId'];
      this['id'] = data['id'];
    }
  }
}

export class GetDeviceAreaEditOutput {
  /**  */
  deviceArea: GetDeviceAreaEditDto;

  constructor(data?: any) {
    if (data) {
      this['deviceArea'] = data['deviceArea'];
    }
  }
}

export class GetDeviceAreaEditDto {
  /**  */
  stationId: number;

  /**  */
  parentId: number;

  /**  */
  name: string;

  /**  */
  sortId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['sortId'] = data['sortId'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateDeviceAreaInput {
  /**  */
  deviceArea: CreateOrUpdateDeviceAreaDto;

  /**  */
  children: number[];

  constructor(data?: any) {
    if (data) {
      this['deviceArea'] = data['deviceArea'];
      this['children'] = data['children'];
    }
  }
}

export class CreateOrUpdateDeviceAreaDto {
  /**  */
  stationId: number;

  /**  */
  parentId: number;

  /**  */
  name: string;

  /**  */
  sortId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['sortId'] = data['sortId'];
      this['id'] = data['id'];
    }
  }
}

export class PagedResultDto_DeviceBoardDto {
  /**  */
  totalCount: number;

  /**  */
  items: DeviceBoardDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class DeviceBoardDto {
  /**  */
  name: string;

  /**  */
  term: string;

  /**  */
  contentStorageId: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['term'] = data['term'];
      this['contentStorageId'] = data['contentStorageId'];
      this['id'] = data['id'];
    }
  }
}

export class GetDeviceBoardEditOutput {
  /**  */
  deviceBoard: DeviceBoardEditDto;

  constructor(data?: any) {
    if (data) {
      this['deviceBoard'] = data['deviceBoard'];
    }
  }
}

export class DeviceBoardEditDto {
  /**  */
  name: string;

  /**  */
  term: string;

  /**  */
  contentStorageId: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['term'] = data['term'];
      this['contentStorageId'] = data['contentStorageId'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateDeviceBoardInput {
  /**  */
  deviceBoard: CreateOrUpdateDeviceBoardDto;

  constructor(data?: any) {
    if (data) {
      this['deviceBoard'] = data['deviceBoard'];
    }
  }
}

export class CreateOrUpdateDeviceBoardDto {
  /**  */
  name: string;

  /**  */
  term: string;

  /**  */
  contentStorageId: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['term'] = data['term'];
      this['contentStorageId'] = data['contentStorageId'];
      this['id'] = data['id'];
    }
  }
}

export class IFormFile {
  /**  */
  contentType: string;

  /**  */
  contentDisposition: string;

  /**  */
  headers: object;

  /**  */
  length: number;

  /**  */
  name: string;

  /**  */
  fileName: string;

  constructor(data?: any) {
    if (data) {
      this['contentType'] = data['contentType'];
      this['contentDisposition'] = data['contentDisposition'];
      this['headers'] = data['headers'];
      this['length'] = data['length'];
      this['name'] = data['name'];
      this['fileName'] = data['fileName'];
    }
  }
}

export class UploadFileOutput {
  /**  */
  id: string;

  /**  */
  fileName: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['fileName'] = data['fileName'];
    }
  }
}

export class PagedResultDto_LockCodePropertyListDto {
  /**  */
  totalCount: number;

  /**  */
  items: LockCodePropertyListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class LockCodePropertyListDto {
  /**  */
  codeName: string;

  /**  */
  opHint1_0: string;

  /**  */
  opHint1_1: string;

  /**  */
  toKey: boolean;

  /**  */
  stateChange: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName'];
      this['opHint1_0'] = data['opHint1_0'];
      this['opHint1_1'] = data['opHint1_1'];
      this['toKey'] = data['toKey'];
      this['stateChange'] = data['stateChange'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_LockCodePropertySelectDto {
  /**  */
  items: LockCodePropertySelectDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class LockCodePropertySelectDto {
  /**  */
  codeName: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName'];
      this['id'] = data['id'];
    }
  }
}

export class LockCodePropertyEditDto {
  /**  */
  codeName: string;

  /**  */
  opHint1_0: string;

  /**  */
  opHint1_1: string;

  /**  */
  toKey: boolean;

  /**  */
  stateChange: boolean;

  /**  */
  configDtos: LockCodeConfigListDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName'];
      this['opHint1_0'] = data['opHint1_0'];
      this['opHint1_1'] = data['opHint1_1'];
      this['toKey'] = data['toKey'];
      this['stateChange'] = data['stateChange'];
      this['configDtos'] = data['configDtos'];
      this['id'] = data['id'];
    }
  }
}

export class LockCodeConfigListDto {
  /**  */
  lockType: string;

  /**  */
  lockPropertyType: string;

  /**  */
  lockCodeNumber: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateLockCodePropertyInput {
  /**  */
  codePropertyDto: CreateOrUpdateLockCodePropertyDto;

  /**  */
  lockCodeConfigs: LockCodeConfigEditDto[];

  constructor(data?: any) {
    if (data) {
      this['codePropertyDto'] = data['codePropertyDto'];
      this['lockCodeConfigs'] = data['lockCodeConfigs'];
    }
  }
}

export class CreateOrUpdateLockCodePropertyDto {
  /**  */
  codeName: string;

  /**  */
  opHint1_0: string;

  /**  */
  opHint1_1: string;

  /**  */
  toKey: boolean;

  /**  */
  stateChange: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName'];
      this['opHint1_0'] = data['opHint1_0'];
      this['opHint1_1'] = data['opHint1_1'];
      this['toKey'] = data['toKey'];
      this['stateChange'] = data['stateChange'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumLockCodeConfigEditDtoLockType {
  'NoKey' = 'NoKey',
  'JXLock' = 'JXLock',
  'DBMLock' = 'DBMLock',
  'DKLock' = 'DKLock',
  'DXDKLock' = 'DXDKLock',
  'GSNYD' = 'GSNYD',
  'WYYD' = 'WYYD',
  'YYYD' = 'YYYD',
  'CJFKLock' = 'CJFKLock',
  'FKSDBMLock' = 'FKSDBMLock',
  'ZNLock' = 'ZNLock',
  'ZNYB' = 'ZNYB',
  'YYDWZJC' = 'YYDWZJC',
  'WYDWZJC' = 'WYDWZJC',
  'JXDBMLock' = 'JXDBMLock',
  'DBMLock_2H' = 'DBMLock_2H',
  'DBMLock_3H' = 'DBMLock_3H',
  'XJLock' = 'XJLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_GSN2L' = 'WX_GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'ZNHWMLock' = 'ZNHWMLock',
  'GSN2E' = 'GSN2E',
  'GSN2YD' = 'GSN2YD',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'WX_DZBQ' = 'WX_DZBQ',
  'WX_BSJXLock' = 'WX_BSJXLock',
  'WX_SGWZSLock' = 'WX_SGWZSLock',
  'SGWZSLock' = 'SGWZSLock',
  'TBLock' = 'TBLock',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'ZNSXLock' = 'ZNSXLock',
  'GYJLYDQ' = 'GYJLYDQ',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export enum EnumLockCodeConfigEditDtoLockPropertyType {
  'NoKey' = 'NoKey',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'HWGMLock' = 'HWGMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'GSN2L' = 'GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'WX_SKJXLock' = 'WX_SKJXLock',
  'GSN2YD' = 'GSN2YD',
  'XJLock' = 'XJLock',
  'JM_GSN2YD' = 'JM_GSN2YD',
  'GLDBP' = 'GLDBP',
  'GLWYBS' = 'GLWYBS',
  'LSGLGLock' = 'LSGLGLock',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export enum EnumLockCodeConfigEditDtoLockCodeNumber {
  'Um1' = 'Um1',
  'Um2' = 'Um2',
  'Um3' = 'Um3',
  'Um4' = 'Um4',
  'Um5' = 'Um5',
  'Um6' = 'Um6',
  'Um7' = 'Um7',
  'Um8' = 'Um8',
  'Um9' = 'Um9',
  'Um10' = 'Um10',
  'Um11' = 'Um11',
  'Um12' = 'Um12',
  'Um13' = 'Um13',
  'Um14' = 'Um14',
  'Um15' = 'Um15',
  'Um16' = 'Um16',
  'Um17' = 'Um17',
  'Um18' = 'Um18'
}
export class LockCodeConfigEditDto {
  /**  */
  lockType: EnumLockCodeConfigEditDtoLockType;

  /**  */
  lockPropertyType: EnumLockCodeConfigEditDtoLockPropertyType;

  /**  */
  lockCodeNumber: EnumLockCodeConfigEditDtoLockCodeNumber;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['id'] = data['id'];
    }
  }
}

export class GetDeviceTermsOutput {
  /**  */
  stationName: string;

  /**  */
  pointName: string;

  /**  */
  deviceStateTerms: DeviceStateTermDto[];

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName'];
      this['pointName'] = data['pointName'];
      this['deviceStateTerms'] = data['deviceStateTerms'];
    }
  }
}

export class DeviceStateTermDto {
  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  operationName: string;

  /**  */
  boardDesc: string;

  /**  */
  terms: string[];

  constructor(data?: any) {
    if (data) {
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['operationName'] = data['operationName'];
      this['boardDesc'] = data['boardDesc'];
      this['terms'] = data['terms'];
    }
  }
}

export class ListResultDto_DeviceOperationListDto {
  /**  */
  items: DeviceOperationListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class DeviceOperationListDto {
  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  voltageLevelId: number;

  /**  */
  voltageLevelName: string;

  /**  */
  fromDeviceStateId: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  name: string;

  /**  */
  boardDesc: string;

  /**  */
  deviceTypeId: number;

  /**  */
  fromDeviceState: string;

  /**  */
  toDeviceState: string;

  /**  */
  terms: TermListDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['voltageLevelId'] = data['voltageLevelId'];
      this['voltageLevelName'] = data['voltageLevelName'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['name'] = data['name'];
      this['boardDesc'] = data['boardDesc'];
      this['deviceTypeId'] = data['deviceTypeId'];
      this['fromDeviceState'] = data['fromDeviceState'];
      this['toDeviceState'] = data['toDeviceState'];
      this['terms'] = data['terms'];
      this['id'] = data['id'];
    }
  }
}

export class TermListDto {
  /**  */
  type: string;

  /**  */
  value: string;

  /**  */
  lockType: string;

  /**  */
  lockTypes: string[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type'];
      this['value'] = data['value'];
      this['lockType'] = data['lockType'];
      this['lockTypes'] = data['lockTypes'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateDeviceOperationInput {
  /**  */
  deviceOperation: DeviceOperationEditDto;

  constructor(data?: any) {
    if (data) {
      this['deviceOperation'] = data['deviceOperation'];
    }
  }
}

export class DeviceOperationEditDto {
  /**  */
  stationId: number;

  /**  */
  voltageLevelId: number;

  /**  */
  fromDeviceStateId: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  name: string;

  /**  */
  boardDesc: string;

  /**  */
  deviceTypeId: number;

  /**  */
  terms: TermEditDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['voltageLevelId'] = data['voltageLevelId'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['name'] = data['name'];
      this['boardDesc'] = data['boardDesc'];
      this['deviceTypeId'] = data['deviceTypeId'];
      this['terms'] = data['terms'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTermEditDtoType {
  'Default' = 'Default',
  'ByLinkage' = 'ByLinkage',
  'AddBefault' = 'AddBefault',
  'AddAfter' = 'AddAfter',
  'Selectable' = 'Selectable'
}
export class TermEditDto {
  /**  */
  type: EnumTermEditDtoType;

  /**  */
  value: string;

  /**  */
  lockTypes: string[];

  /**  */
  lockType: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type'];
      this['value'] = data['value'];
      this['lockTypes'] = data['lockTypes'];
      this['lockType'] = data['lockType'];
      this['id'] = data['id'];
    }
  }
}

export class PagedResultDto_DeviceTypeListDto {
  /**  */
  totalCount: number;

  /**  */
  items: DeviceTypeListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class DeviceTypeListDto {
  /**  */
  name: string;

  /**  */
  dnbsCode: string;

  /**  */
  toPrinter: boolean;

  /**  */
  toKey: boolean;

  /**  */
  graphName: string;

  /**  */
  codeName: string;

  /**  */
  showMode: string;

  /**  */
  isEst: boolean;

  /**  */
  isPprimary: boolean;

  /**  */
  isSecondary: boolean;

  /**  */
  isOperable: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['dnbsCode'] = data['dnbsCode'];
      this['toPrinter'] = data['toPrinter'];
      this['toKey'] = data['toKey'];
      this['graphName'] = data['graphName'];
      this['codeName'] = data['codeName'];
      this['showMode'] = data['showMode'];
      this['isEst'] = data['isEst'];
      this['isPprimary'] = data['isPprimary'];
      this['isSecondary'] = data['isSecondary'];
      this['isOperable'] = data['isOperable'];
      this['id'] = data['id'];
    }
  }
}

export class GetDeviceTypeEditOutput {
  /**  */
  deviceType: DeviceTypeEditDto;

  /**  */
  deviceStates: DeviceStateListDto[];

  constructor(data?: any) {
    if (data) {
      this['deviceType'] = data['deviceType'];
      this['deviceStates'] = data['deviceStates'];
    }
  }
}

export class DeviceTypeEditDto {
  /**  */
  name: string;

  /**  */
  toPrinter: boolean;

  /**  */
  toKey: boolean;

  /**  */
  dnbsCode: string;

  /**  */
  graphName: string;

  /**  */
  codeName: string;

  /**  */
  showMode: string;

  /**  */
  isEst: boolean;

  /**  */
  isPprimary: boolean;

  /**  */
  isSecondary: boolean;

  /**  */
  isOperable: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['toPrinter'] = data['toPrinter'];
      this['toKey'] = data['toKey'];
      this['dnbsCode'] = data['dnbsCode'];
      this['graphName'] = data['graphName'];
      this['codeName'] = data['codeName'];
      this['showMode'] = data['showMode'];
      this['isEst'] = data['isEst'];
      this['isPprimary'] = data['isPprimary'];
      this['isSecondary'] = data['isSecondary'];
      this['isOperable'] = data['isOperable'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceStateListDto {
  /**  */
  name: string;

  /**  */
  state: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['state'] = data['state'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateDeviceTypeInput {
  /**  */
  deviceType: DeviceTypeEditDto;

  /**  */
  deviceStates: DeviceStateListDto[];

  constructor(data?: any) {
    if (data) {
      this['deviceType'] = data['deviceType'];
      this['deviceStates'] = data['deviceStates'];
    }
  }
}

export class ListResultDto_EditionListDto {
  /**  */
  items: EditionListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class EditionListDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  creationTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['creationTime'] = data['creationTime'];
      this['id'] = data['id'];
    }
  }
}

export class GetEditionEditOutput {
  /**  */
  edition: EditionEditDto;

  /**  */
  featureValues: NameValueDto[];

  /**  */
  features: FlatFeatureDto[];

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition'];
      this['featureValues'] = data['featureValues'];
      this['features'] = data['features'];
    }
  }
}

export class EditionEditDto {
  /**  */
  id: number;

  /**  */
  displayName: string;

  /**  */
  monthlyPrice: number;

  /**  */
  annualPrice: number;

  /**  */
  trialDayCount: number;

  /**  */
  waitingDayAfterExpire: number;

  /**  */
  expiringEditionId: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['displayName'] = data['displayName'];
      this['monthlyPrice'] = data['monthlyPrice'];
      this['annualPrice'] = data['annualPrice'];
      this['trialDayCount'] = data['trialDayCount'];
      this['waitingDayAfterExpire'] = data['waitingDayAfterExpire'];
      this['expiringEditionId'] = data['expiringEditionId'];
    }
  }
}

export class FlatFeatureDto {
  /**  */
  parentName: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  defaultValue: string;

  /**  */
  inputType: FeatureInputTypeDto;

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['defaultValue'] = data['defaultValue'];
      this['inputType'] = data['inputType'];
    }
  }
}

export class FeatureInputTypeDto {
  /**  */
  name: string;

  /**  */
  attributes: object;

  /**  */
  validator: IValueValidator;

  /**  */
  itemSource: LocalizableComboboxItemSourceDto;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['attributes'] = data['attributes'];
      this['validator'] = data['validator'];
      this['itemSource'] = data['itemSource'];
    }
  }
}

export class IValueValidator {
  /**  */
  name: string;

  /**  */
  attributes: object;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['attributes'] = data['attributes'];
    }
  }
}

export class LocalizableComboboxItemSourceDto {
  /**  */
  items: LocalizableComboboxItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class LocalizableComboboxItemDto {
  /**  */
  value: string;

  /**  */
  displayText: string;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['displayText'] = data['displayText'];
    }
  }
}

export class CreateOrUpdateEditionDto {
  /**  */
  edition: EditionEditDto;

  /**  */
  featureValues: NameValueDto[];

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition'];
      this['featureValues'] = data['featureValues'];
    }
  }
}

export class ListResultDto_EquipmentListDto {
  /**  */
  items: EquipmentListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class EquipmentListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  productType: string;

  /**  */
  creationTime: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  productId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['productType'] = data['productType'];
      this['creationTime'] = data['creationTime'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['productId'] = data['productId'];
      this['id'] = data['id'];
    }
  }
}

export class GetEquipmentEditOutput {
  /**  */
  equipment: EquipmentEditDto;

  /**  */
  equipmentProperties: EquipmentPropertyListDto[];

  /**  */
  equipmentBindPort: EquipmentBindPortDto;

  constructor(data?: any) {
    if (data) {
      this['equipment'] = data['equipment'];
      this['equipmentProperties'] = data['equipmentProperties'];
      this['equipmentBindPort'] = data['equipmentBindPort'];
    }
  }
}

export class EquipmentEditDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  productType: string;

  /**  */
  isEquipmentOnline: boolean;

  /**  */
  isEquipmentFault: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['productType'] = data['productType'];
      this['isEquipmentOnline'] = data['isEquipmentOnline'];
      this['isEquipmentFault'] = data['isEquipmentFault'];
      this['id'] = data['id'];
    }
  }
}

export class EquipmentPropertyListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  displayName: string;

  /**  */
  value: string;

  /**  */
  type: string;

  /**  */
  bitType: string;

  /**  */
  creationTime: string;

  /**  */
  productPropertyId: number;

  /**  */
  state: number;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  sortIndex: number;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['displayName'] = data['displayName'];
      this['value'] = data['value'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['creationTime'] = data['creationTime'];
      this['productPropertyId'] = data['productPropertyId'];
      this['state'] = data['state'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['sortIndex'] = data['sortIndex'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['id'] = data['id'];
    }
  }
}

export class EquipmentBindPortDto {
  /**  */
  terminalId: number;

  /**  */
  terminalName: string;

  /**  */
  terminalPortConfigId: number;

  /**  */
  terminalPortConfigName: string;

  constructor(data?: any) {
    if (data) {
      this['terminalId'] = data['terminalId'];
      this['terminalName'] = data['terminalName'];
      this['terminalPortConfigId'] = data['terminalPortConfigId'];
      this['terminalPortConfigName'] = data['terminalPortConfigName'];
    }
  }
}

export class CreateOrUpdateEquipmentInput {
  /**  */
  equipment: CreateOrUpdateEquipmentDto;

  /**  */
  equipmentProperties: EquipmentPropertyEditDto[];

  /**  */
  bindPorts: CreateOrUpdateBindPortDto[];

  constructor(data?: any) {
    if (data) {
      this['equipment'] = data['equipment'];
      this['equipmentProperties'] = data['equipmentProperties'];
      this['bindPorts'] = data['bindPorts'];
    }
  }
}

export class CreateOrUpdateEquipmentDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  productId: number;

  /**  */
  bluetooth: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['productId'] = data['productId'];
      this['bluetooth'] = data['bluetooth'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumEquipmentPropertyEditDtoType {
  'BaseProperty' = 'BaseProperty',
  'SignalingAndControl' = 'SignalingAndControl',
  'SensingAndAdjustment' = 'SensingAndAdjustment'
}
export enum EnumEquipmentPropertyEditDtoBitType {
  'ReadOnly' = 'ReadOnly',
  'WriteOnly' = 'WriteOnly',
  'ReadAndWrite' = 'ReadAndWrite'
}
export class EquipmentPropertyEditDto {
  /**  */
  name: string;

  /**  */
  value: string;

  /**  */
  productPropertyId: number;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  type: EnumEquipmentPropertyEditDtoType;

  /**  */
  bitType: EnumEquipmentPropertyEditDtoBitType;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  sortIndex: number;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['value'] = data['value'];
      this['productPropertyId'] = data['productPropertyId'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['sortIndex'] = data['sortIndex'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateBindPortDto {
  /**  */
  terminalPortConfigId: number;

  constructor(data?: any) {
    if (data) {
      this['terminalPortConfigId'] = data['terminalPortConfigId'];
    }
  }
}

export class PagedResultDto_EquipmentListDto {
  /**  */
  totalCount: number;

  /**  */
  items: EquipmentListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class ListResultDto_EquipmentWithPropertyDto {
  /**  */
  items: EquipmentWithPropertyDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}
export enum EnumEquipmentWithPropertyDtoProductType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class EquipmentWithPropertyDto {
  /**  */
  productType: EnumEquipmentWithPropertyDtoProductType;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  productId: number;

  /**  */
  productName: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  isOnline: boolean;

  /**  */
  equipmentBaseProperties: EquipmentPropertyForSingleEquipment[];

  /**  */
  equipmentCommunicationProperties: EquipmentPropertyForSingleEquipment[];

  constructor(data?: any) {
    if (data) {
      this['productType'] = data['productType'];
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['productId'] = data['productId'];
      this['productName'] = data['productName'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['isOnline'] = data['isOnline'];
      this['equipmentBaseProperties'] = data['equipmentBaseProperties'];
      this['equipmentCommunicationProperties'] = data['equipmentCommunicationProperties'];
    }
  }
}
export enum EnumEquipmentPropertyForSingleEquipmentBitType {
  'ReadOnly' = 'ReadOnly',
  'WriteOnly' = 'WriteOnly',
  'ReadAndWrite' = 'ReadAndWrite'
}
export class EquipmentPropertyForSingleEquipment {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  photoIds: string[];

  /**  */
  description: string;

  /**  */
  value: string;

  /**  */
  state: number;

  /**  */
  bitType: EnumEquipmentPropertyForSingleEquipmentBitType;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  sortIndex: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['photoIds'] = data['photoIds'];
      this['description'] = data['description'];
      this['value'] = data['value'];
      this['state'] = data['state'];
      this['bitType'] = data['bitType'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['sortIndex'] = data['sortIndex'];
    }
  }
}

export class PagedResultDto_EquipmentInpageDto {
  /**  */
  totalCount: number;

  /**  */
  items: EquipmentInpageDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}
export enum EnumEquipmentInpageDtoProductType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class EquipmentInpageDto {
  /**  */
  name: string;

  /**  */
  lastModificationTime: string;

  /**  */
  productType: EnumEquipmentInpageDtoProductType;

  /**  */
  description: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  isOnline: boolean;

  /**  */
  productId: number;

  /**  */
  equipmentBaseProperties: EquipmentBasePropertyInpageDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['productType'] = data['productType'];
      this['description'] = data['description'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['isOnline'] = data['isOnline'];
      this['productId'] = data['productId'];
      this['equipmentBaseProperties'] = data['equipmentBaseProperties'];
      this['id'] = data['id'];
    }
  }
}

export class EquipmentBasePropertyInpageDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['id'] = data['id'];
    }
  }
}

export class EquipmentWithPropertyOutput {
  /**  */
  equipmentWithProperty: EquipmentWithPropertyDto;

  constructor(data?: any) {
    if (data) {
      this['equipmentWithProperty'] = data['equipmentWithProperty'];
    }
  }
}

export class ControlEquipmentInput {
  /**  */
  equipmentId: number;

  /**  */
  index: number;

  /**  */
  value: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['index'] = data['index'];
      this['value'] = data['value'];
    }
  }
}

export class IListResult_EquipmentCombineProperties {
  /**  */
  items: EquipmentCombineProperties[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class EquipmentCombineProperties {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  equipmentProperties: EquipmentPropertyListDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['equipmentProperties'] = data['equipmentProperties'];
      this['id'] = data['id'];
    }
  }
}

export class CreateFriendshipRequestInput {
  /**  */
  userId: number;

  /**  */
  tenantId: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['tenantId'] = data['tenantId'];
    }
  }
}

export class CreateFriendshipRequestByUserNameInput {
  /**  */
  tenancyName: string;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['userName'] = data['userName'];
    }
  }
}

export class BlockUserInput {
  /**  */
  userId: number;

  /**  */
  tenantId: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['tenantId'] = data['tenantId'];
    }
  }
}

export class UnblockUserInput {
  /**  */
  userId: number;

  /**  */
  tenantId: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['tenantId'] = data['tenantId'];
    }
  }
}

export class AcceptFriendshipRequestInput {
  /**  */
  userId: number;

  /**  */
  tenantId: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['tenantId'] = data['tenantId'];
    }
  }
}

export class ListResultDto_GraphListDto {
  /**  */
  items: GraphListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class GraphListDto {
  /**  */
  name: string;

  /**  */
  contentStorageId: string;

  /**  */
  creationTime: string;

  /**  */
  parentId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['contentStorageId'] = data['contentStorageId'];
      this['creationTime'] = data['creationTime'];
      this['parentId'] = data['parentId'];
      this['id'] = data['id'];
    }
  }
}

export class GraphEditDto {
  /**  */
  name: string;

  /**  */
  contentStorageId: string;

  /**  */
  parentId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['contentStorageId'] = data['contentStorageId'];
      this['parentId'] = data['parentId'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateGraphInput {
  /**  */
  graph: GraphEditDto;

  constructor(data?: any) {
    if (data) {
      this['graph'] = data['graph'];
    }
  }
}

export class HostDashboardData {
  /**  */
  newTenantsCount: number;

  /**  */
  newSubscriptionAmount: number;

  /**  */
  dashboardPlaceholder1: number;

  /**  */
  dashboardPlaceholder2: number;

  /**  */
  incomeStatistics: IncomeStastistic[];

  /**  */
  editionStatistics: TenantEdition[];

  /**  */
  expiringTenants: ExpiringTenant[];

  /**  */
  recentTenants: RecentTenant[];

  /**  */
  maxExpiringTenantsShownCount: number;

  /**  */
  maxRecentTenantsShownCount: number;

  /**  */
  subscriptionEndAlertDayCount: number;

  /**  */
  recentTenantsDayCount: number;

  /**  */
  subscriptionEndDateStart: string;

  /**  */
  subscriptionEndDateEnd: string;

  /**  */
  tenantCreationStartDate: string;

  constructor(data?: any) {
    if (data) {
      this['newTenantsCount'] = data['newTenantsCount'];
      this['newSubscriptionAmount'] = data['newSubscriptionAmount'];
      this['dashboardPlaceholder1'] = data['dashboardPlaceholder1'];
      this['dashboardPlaceholder2'] = data['dashboardPlaceholder2'];
      this['incomeStatistics'] = data['incomeStatistics'];
      this['editionStatistics'] = data['editionStatistics'];
      this['expiringTenants'] = data['expiringTenants'];
      this['recentTenants'] = data['recentTenants'];
      this['maxExpiringTenantsShownCount'] = data['maxExpiringTenantsShownCount'];
      this['maxRecentTenantsShownCount'] = data['maxRecentTenantsShownCount'];
      this['subscriptionEndAlertDayCount'] = data['subscriptionEndAlertDayCount'];
      this['recentTenantsDayCount'] = data['recentTenantsDayCount'];
      this['subscriptionEndDateStart'] = data['subscriptionEndDateStart'];
      this['subscriptionEndDateEnd'] = data['subscriptionEndDateEnd'];
      this['tenantCreationStartDate'] = data['tenantCreationStartDate'];
    }
  }
}

export class IncomeStastistic {
  /**  */
  label: string;

  /**  */
  date: string;

  /**  */
  amount: number;

  constructor(data?: any) {
    if (data) {
      this['label'] = data['label'];
      this['date'] = data['date'];
      this['amount'] = data['amount'];
    }
  }
}

export class TenantEdition {
  /**  */
  label: string;

  /**  */
  value: number;

  constructor(data?: any) {
    if (data) {
      this['label'] = data['label'];
      this['value'] = data['value'];
    }
  }
}

export class ExpiringTenant {
  /**  */
  tenantName: string;

  /**  */
  remainingDayCount: number;

  constructor(data?: any) {
    if (data) {
      this['tenantName'] = data['tenantName'];
      this['remainingDayCount'] = data['remainingDayCount'];
    }
  }
}

export class RecentTenant {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  creationTime: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['creationTime'] = data['creationTime'];
    }
  }
}

export class GetIncomeStatisticsDataOutput {
  /**  */
  incomeStatistics: IncomeStastistic[];

  constructor(data?: any) {
    if (data) {
      this['incomeStatistics'] = data['incomeStatistics'];
    }
  }
}

export class GetEditionTenantStatisticsOutput {
  /**  */
  editionStatistics: TenantEdition[];

  constructor(data?: any) {
    if (data) {
      this['editionStatistics'] = data['editionStatistics'];
    }
  }
}

export class HostSettingsEditDto {
  /**  */
  general: GeneralSettingsEditDto;

  /**  */
  userManagement: HostUserManagementSettingsEditDto;

  /**  */
  email: EmailSettingsEditDto;

  /**  */
  tenantManagement: TenantManagementSettingsEditDto;

  /**  */
  security: SecuritySettingsEditDto;

  /**  */
  billing: HostBillingSettingsEditDto;

  /**  */
  push: PushSettingEditDto;

  constructor(data?: any) {
    if (data) {
      this['general'] = data['general'];
      this['userManagement'] = data['userManagement'];
      this['email'] = data['email'];
      this['tenantManagement'] = data['tenantManagement'];
      this['security'] = data['security'];
      this['billing'] = data['billing'];
      this['push'] = data['push'];
    }
  }
}

export class GeneralSettingsEditDto {
  /**  */
  timezone: string;

  /**  */
  timezoneForComparison: string;

  constructor(data?: any) {
    if (data) {
      this['timezone'] = data['timezone'];
      this['timezoneForComparison'] = data['timezoneForComparison'];
    }
  }
}

export class HostUserManagementSettingsEditDto {
  /**  */
  isEmailConfirmationRequiredForLogin: boolean;

  /**  */
  smsVerificationEnabled: boolean;

  constructor(data?: any) {
    if (data) {
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin'];
      this['smsVerificationEnabled'] = data['smsVerificationEnabled'];
    }
  }
}

export class EmailSettingsEditDto {
  /**  */
  defaultFromAddress: string;

  /**  */
  defaultFromDisplayName: string;

  /**  */
  smtpHost: string;

  /**  */
  smtpPort: number;

  /**  */
  smtpUserName: string;

  /**  */
  smtpPassword: string;

  /**  */
  smtpDomain: string;

  /**  */
  smtpEnableSsl: boolean;

  /**  */
  smtpUseDefaultCredentials: boolean;

  constructor(data?: any) {
    if (data) {
      this['defaultFromAddress'] = data['defaultFromAddress'];
      this['defaultFromDisplayName'] = data['defaultFromDisplayName'];
      this['smtpHost'] = data['smtpHost'];
      this['smtpPort'] = data['smtpPort'];
      this['smtpUserName'] = data['smtpUserName'];
      this['smtpPassword'] = data['smtpPassword'];
      this['smtpDomain'] = data['smtpDomain'];
      this['smtpEnableSsl'] = data['smtpEnableSsl'];
      this['smtpUseDefaultCredentials'] = data['smtpUseDefaultCredentials'];
    }
  }
}

export class TenantManagementSettingsEditDto {
  /**  */
  allowSelfRegistration: boolean;

  /**  */
  isNewRegisteredTenantActiveByDefault: boolean;

  /**  */
  useCaptchaOnRegistration: boolean;

  /**  */
  defaultEditionId: number;

  constructor(data?: any) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration'];
      this['isNewRegisteredTenantActiveByDefault'] = data['isNewRegisteredTenantActiveByDefault'];
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration'];
      this['defaultEditionId'] = data['defaultEditionId'];
    }
  }
}

export class SecuritySettingsEditDto {
  /**  */
  useDefaultPasswordComplexitySettings: boolean;

  /**  */
  passwordComplexity: PasswordComplexitySetting;

  /**  */
  defaultPasswordComplexity: PasswordComplexitySetting;

  /**  */
  userLockOut: UserLockOutSettingsEditDto;

  /**  */
  twoFactorLogin: TwoFactorLoginSettingsEditDto;

  constructor(data?: any) {
    if (data) {
      this['useDefaultPasswordComplexitySettings'] = data['useDefaultPasswordComplexitySettings'];
      this['passwordComplexity'] = data['passwordComplexity'];
      this['defaultPasswordComplexity'] = data['defaultPasswordComplexity'];
      this['userLockOut'] = data['userLockOut'];
      this['twoFactorLogin'] = data['twoFactorLogin'];
    }
  }
}

export class HostBillingSettingsEditDto {
  /**  */
  legalName: string;

  /**  */
  address: string;

  constructor(data?: any) {
    if (data) {
      this['legalName'] = data['legalName'];
      this['address'] = data['address'];
    }
  }
}

export class PushSettingEditDto {
  /**  */
  iOSAppKey: string;

  /**  */
  androidAppKey: string;

  /**  */
  pages: PushMobilePagesSettingEditDto;

  constructor(data?: any) {
    if (data) {
      this['iOSAppKey'] = data['iOSAppKey'];
      this['androidAppKey'] = data['androidAppKey'];
      this['pages'] = data['pages'];
    }
  }
}

export class PasswordComplexitySetting {
  /**  */
  requireDigit: boolean;

  /**  */
  requireLowercase: boolean;

  /**  */
  requireNonAlphanumeric: boolean;

  /**  */
  requireUppercase: boolean;

  /**  */
  requiredLength: number;

  constructor(data?: any) {
    if (data) {
      this['requireDigit'] = data['requireDigit'];
      this['requireLowercase'] = data['requireLowercase'];
      this['requireNonAlphanumeric'] = data['requireNonAlphanumeric'];
      this['requireUppercase'] = data['requireUppercase'];
      this['requiredLength'] = data['requiredLength'];
    }
  }
}

export class UserLockOutSettingsEditDto {
  /**  */
  isEnabled: boolean;

  /**  */
  maxFailedAccessAttemptsBeforeLockout: number;

  /**  */
  defaultAccountLockoutSeconds: number;

  constructor(data?: any) {
    if (data) {
      this['isEnabled'] = data['isEnabled'];
      this['maxFailedAccessAttemptsBeforeLockout'] = data['maxFailedAccessAttemptsBeforeLockout'];
      this['defaultAccountLockoutSeconds'] = data['defaultAccountLockoutSeconds'];
    }
  }
}

export class TwoFactorLoginSettingsEditDto {
  /**  */
  isEnabledForApplication: boolean;

  /**  */
  isEnabled: boolean;

  /**  */
  isEmailProviderEnabled: boolean;

  /**  */
  isSmsProviderEnabled: boolean;

  /**  */
  isRememberBrowserEnabled: boolean;

  /**  */
  isGoogleAuthenticatorEnabled: boolean;

  constructor(data?: any) {
    if (data) {
      this['isEnabledForApplication'] = data['isEnabledForApplication'];
      this['isEnabled'] = data['isEnabled'];
      this['isEmailProviderEnabled'] = data['isEmailProviderEnabled'];
      this['isSmsProviderEnabled'] = data['isSmsProviderEnabled'];
      this['isRememberBrowserEnabled'] = data['isRememberBrowserEnabled'];
      this['isGoogleAuthenticatorEnabled'] = data['isGoogleAuthenticatorEnabled'];
    }
  }
}

export class PushMobilePagesSettingEditDto {
  /**  */
  keyCabinetDetailPage: string;

  /**  */
  wireCabinetDetailPage: string;

  /**  */
  safetyWearDetailPage: string;

  constructor(data?: any) {
    if (data) {
      this['keyCabinetDetailPage'] = data['keyCabinetDetailPage'];
      this['wireCabinetDetailPage'] = data['wireCabinetDetailPage'];
      this['safetyWearDetailPage'] = data['safetyWearDetailPage'];
    }
  }
}

export class SendTestEmailInput {
  /**  */
  emailAddress: string;

  constructor(data?: any) {
    if (data) {
      this['emailAddress'] = data['emailAddress'];
    }
  }
}

export class CreateDbBaseInput {
  /**  */
  dbName: string;

  constructor(data?: any) {
    if (data) {
      this['dbName'] = data['dbName'];
    }
  }
}

export class WriteDataToDbInput {
  /**  */
  equipmentId: string;

  /**  */
  dataToDbDtos: WriteDataToDbDto[];

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['dataToDbDtos'] = data['dataToDbDtos'];
    }
  }
}
export enum EnumWriteDataToDbDtoDataType {
  'TemperatureBatteryLevelRssiLevel' = 'TemperatureBatteryLevelRssiLevel',
  'TemperatureHighByte' = 'TemperatureHighByte',
  'TemperatureHighByte00' = 'TemperatureHighByte00',
  'TemperatureMagnify10Times' = 'TemperatureMagnify10Times'
}
export class WriteDataToDbDto {
  /**  */
  address: string;

  /**  */
  dataType: EnumWriteDataToDbDtoDataType;

  /**  */
  rssiLevel: number;

  /**  */
  batteryLevel: number;

  /**  */
  temperature: number;

  /**  */
  dateTime: string;

  constructor(data?: any) {
    if (data) {
      this['address'] = data['address'];
      this['dataType'] = data['dataType'];
      this['rssiLevel'] = data['rssiLevel'];
      this['batteryLevel'] = data['batteryLevel'];
      this['temperature'] = data['temperature'];
      this['dateTime'] = data['dateTime'];
    }
  }
}
export enum EnumReadDataFromDbInputDataType {
  'TemperatureBatteryLevelRssiLevel' = 'TemperatureBatteryLevelRssiLevel',
  'TemperatureHighByte' = 'TemperatureHighByte',
  'TemperatureHighByte00' = 'TemperatureHighByte00',
  'TemperatureMagnify10Times' = 'TemperatureMagnify10Times'
}
export class ReadDataFromDbInput {
  /**  */
  startTime: string;

  /**  */
  endTime: string;

  /**  */
  equipmentId: string;

  /**  */
  address: string;

  /**  */
  dataType: EnumReadDataFromDbInputDataType;

  constructor(data?: any) {
    if (data) {
      this['startTime'] = data['startTime'];
      this['endTime'] = data['endTime'];
      this['equipmentId'] = data['equipmentId'];
      this['address'] = data['address'];
      this['dataType'] = data['dataType'];
    }
  }
}

export class ReadDataFromDbOutput {
  /**  */
  equipmentId: string;

  /**  */
  readDataFromDbDtos: ReadDataFromDbDto[];

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['readDataFromDbDtos'] = data['readDataFromDbDtos'];
    }
  }
}

export class ReadDataFromDbDto {
  /**  */
  rssiLevel: number;

  /**  */
  batteryLevel: number;

  /**  */
  temperature: number;

  /**  */
  dateTime: string;

  constructor(data?: any) {
    if (data) {
      this['rssiLevel'] = data['rssiLevel'];
      this['batteryLevel'] = data['batteryLevel'];
      this['temperature'] = data['temperature'];
      this['dateTime'] = data['dateTime'];
    }
  }
}

export class InstallDto {
  /**  */
  connectionString: string;

  /**  */
  adminPassword: string;

  /**  */
  webSiteUrl: string;

  /**  */
  serverUrl: string;

  /**  */
  defaultLanguage: string;

  /**  */
  smtpSettings: EmailSettingsEditDto;

  /**  */
  billInfo: HostBillingSettingsEditDto;

  constructor(data?: any) {
    if (data) {
      this['connectionString'] = data['connectionString'];
      this['adminPassword'] = data['adminPassword'];
      this['webSiteUrl'] = data['webSiteUrl'];
      this['serverUrl'] = data['serverUrl'];
      this['defaultLanguage'] = data['defaultLanguage'];
      this['smtpSettings'] = data['smtpSettings'];
      this['billInfo'] = data['billInfo'];
    }
  }
}

export class AppSettingsJsonDto {
  /**  */
  webSiteUrl: string;

  /**  */
  serverSiteUrl: string;

  /**  */
  languages: NameValue[];

  constructor(data?: any) {
    if (data) {
      this['webSiteUrl'] = data['webSiteUrl'];
      this['serverSiteUrl'] = data['serverSiteUrl'];
      this['languages'] = data['languages'];
    }
  }
}

export class NameValue {
  /**  */
  name: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['value'] = data['value'];
    }
  }
}

export class CheckDatabaseOutput {
  /**  */
  isDatabaseExist: boolean;

  constructor(data?: any) {
    if (data) {
      this['isDatabaseExist'] = data['isDatabaseExist'];
    }
  }
}

export class AddIntelligentLocksInput {
  /**  */
  roleId: number;

  /**  */
  intelligentLockDtos: AddIntelligentLockDto[];

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId'];
      this['intelligentLockDtos'] = data['intelligentLockDtos'];
    }
  }
}

export class AddIntelligentLockDto {
  /**  */
  deviceId: number;

  /**  */
  roleId: number;

  /**  */
  isEst: boolean;

  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  /**  */
  deviceAreaId: number;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['roleId'] = data['roleId'];
      this['isEst'] = data['isEst'];
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
      this['deviceAreaId'] = data['deviceAreaId'];
    }
  }
}

export class UpdateIntelligentLocksInput {
  /**  */
  roleId: number;

  /**  */
  intelligentLockDtos: UpdateIntelligentLockDto[];

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId'];
      this['intelligentLockDtos'] = data['intelligentLockDtos'];
    }
  }
}

export class UpdateIntelligentLockDto {
  /**  */
  deviceId: number;

  /**  */
  deviceAreaId: number;

  /**  */
  isEst: boolean;

  /**  */
  stationId: number;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['deviceAreaId'] = data['deviceAreaId'];
      this['isEst'] = data['isEst'];
      this['stationId'] = data['stationId'];
    }
  }
}

export class ListResultDto_IntelligentLockOutput {
  /**  */
  items: IntelligentLockOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class IntelligentLockOutput {
  /**  */
  id: number;

  /**  */
  deviceId: number;

  /**  */
  isEst: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['deviceId'] = data['deviceId'];
      this['isEst'] = data['isEst'];
    }
  }
}

export class ListResultDto_IntelligentLockDetailOutput {
  /**  */
  items: IntelligentLockDetailOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class IntelligentLockDetailOutput {
  /**  */
  deviceAreaId: number;

  /**  */
  deviceAreaName: string;

  /**  */
  stationId: number;

  /**  */
  sortId: number;

  /**  */
  devices: DeviceDetailOutput[];

  constructor(data?: any) {
    if (data) {
      this['deviceAreaId'] = data['deviceAreaId'];
      this['deviceAreaName'] = data['deviceAreaName'];
      this['stationId'] = data['stationId'];
      this['sortId'] = data['sortId'];
      this['devices'] = data['devices'];
    }
  }
}

export class DeviceDetailOutput {
  /**  */
  id: number;

  /**  */
  deviceId: number;

  /**  */
  deviceName: string;

  /**  */
  deviceDescription: string;

  /**  */
  codeInfoDtos: DeviceCodeInfoOutput[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['deviceId'] = data['deviceId'];
      this['deviceName'] = data['deviceName'];
      this['deviceDescription'] = data['deviceDescription'];
      this['codeInfoDtos'] = data['codeInfoDtos'];
    }
  }
}

export class DeviceCodeInfoOutput {
  /**  */
  code: string;

  /**  */
  lockCodeNumber: string;

  /**  */
  lockType: string;

  /**  */
  lockPropertyType: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['id'] = data['id'];
    }
  }
}

export class InvoiceDto {
  /**  */
  amount: number;

  /**  */
  editionDisplayName: string;

  /**  */
  invoiceNo: string;

  /**  */
  invoiceDate: string;

  /**  */
  tenantLegalName: string;

  /**  */
  tenantAddress: string[];

  /**  */
  tenantTaxNo: string;

  /**  */
  hostLegalName: string;

  /**  */
  hostAddress: string[];

  constructor(data?: any) {
    if (data) {
      this['amount'] = data['amount'];
      this['editionDisplayName'] = data['editionDisplayName'];
      this['invoiceNo'] = data['invoiceNo'];
      this['invoiceDate'] = data['invoiceDate'];
      this['tenantLegalName'] = data['tenantLegalName'];
      this['tenantAddress'] = data['tenantAddress'];
      this['tenantTaxNo'] = data['tenantTaxNo'];
      this['hostLegalName'] = data['hostLegalName'];
      this['hostAddress'] = data['hostAddress'];
    }
  }
}

export class CreateInvoiceDto {
  /**  */
  subscriptionPaymentId: number;

  constructor(data?: any) {
    if (data) {
      this['subscriptionPaymentId'] = data['subscriptionPaymentId'];
    }
  }
}
export enum EnumKeyCabinetApplyInputApplyReason {
  'EquipmentFailure' = 'EquipmentFailure',
  'EquipmentOverhaul' = 'EquipmentOverhaul',
  'UrgentUnlock' = 'UrgentUnlock',
  'OtherReason' = 'OtherReason',
  'UnLockNormalOperation' = 'UnLockNormalOperation',
  'OpenLockDeviceSetupDebug' = 'OpenLockDeviceSetupDebug',
  'OpenLockWfDeviceDailyMaintenance' = 'OpenLockWfDeviceDailyMaintenance',
  'OpenLockWfDeviceFaultHandling' = 'OpenLockWfDeviceFaultHandling',
  'OpenLockNormalDeviceDailyMaintenance' = 'OpenLockNormalDeviceDailyMaintenance'
}
export enum EnumKeyCabinetApplyInputApproverType {
  'BaseApprover' = 'BaseApprover',
  'OpenLockApprover' = 'OpenLockApprover',
  'UnLockApprover' = 'UnLockApprover'
}
export class KeyCabinetApplyInput {
  /**  */
  taskName: string;

  /**  */
  equipmentPropertyId: number;

  /**  */
  applicantId: number;

  /**  */
  applyReason: EnumKeyCabinetApplyInputApplyReason;

  /**  */
  applyReasonNote: string;

  /**  */
  approverIdArray: string;

  /**  */
  expiredDate: string;

  /**  */
  isAllowToSelectApproverType: boolean;

  /**  */
  approverType: EnumKeyCabinetApplyInputApproverType;

  constructor(data?: any) {
    if (data) {
      this['taskName'] = data['taskName'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['applicantId'] = data['applicantId'];
      this['applyReason'] = data['applyReason'];
      this['applyReasonNote'] = data['applyReasonNote'];
      this['approverIdArray'] = data['approverIdArray'];
      this['expiredDate'] = data['expiredDate'];
      this['isAllowToSelectApproverType'] = data['isAllowToSelectApproverType'];
      this['approverType'] = data['approverType'];
    }
  }
}

export class ApiResultOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: string;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class KeyCabinetApproveInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  approverId: number;

  /**  */
  isApprovePass: boolean;

  /**  */
  approveNote: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['approverId'] = data['approverId'];
      this['isApprovePass'] = data['isApprovePass'];
      this['approveNote'] = data['approveNote'];
    }
  }
}

export class KeyCabinetUnlockInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  operatorId: number;

  /**  */
  unLockReason: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['operatorId'] = data['operatorId'];
      this['unLockReason'] = data['unLockReason'];
    }
  }
}

export class ApiResultOutput_KeyCabinetUnlockOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: KeyCabinetUnlockOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class KeyCabinetUnlockOutput {
  /**  */
  unlockCode: string;

  /**  */
  openDoorCode: string;

  constructor(data?: any) {
    if (data) {
      this['unlockCode'] = data['unlockCode'];
      this['openDoorCode'] = data['openDoorCode'];
    }
  }
}

export class KeyCabinetGenerateUnlockCodeInput {
  /**  */
  equipmentPropertyId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
    }
  }
}

export class ApiResultOutput_KeyCabinetGenerateUnlockCodeOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: KeyCabinetGenerateUnlockCodeOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class KeyCabinetGenerateUnlockCodeOutput {
  /**  */
  unlockCode: string;

  /**  */
  openDoorCode: string;

  /**  */
  unlockCodeGenerateTime: string;

  constructor(data?: any) {
    if (data) {
      this['unlockCode'] = data['unlockCode'];
      this['openDoorCode'] = data['openDoorCode'];
      this['unlockCodeGenerateTime'] = data['unlockCodeGenerateTime'];
    }
  }
}

export class KeyCabinetOpenDoorInput {
  /**  */
  operatorId: number;

  /**  */
  equipmentPropertyId: number;

  constructor(data?: any) {
    if (data) {
      this['operatorId'] = data['operatorId'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
    }
  }
}

export class KeyCabinetReturnInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  operatorId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['operatorId'] = data['operatorId'];
    }
  }
}

export class ApiResultOutput_Dictionary_Int32_String {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: object;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class ApiResultOutput_List_KeyCabinetValueTextDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: KeyCabinetValueTextDto[];

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class KeyCabinetValueTextDto {
  /**  */
  value: number;

  /**  */
  text: string;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['text'] = data['text'];
    }
  }
}

export class ApiResultOutput_KeyCabinetTaskOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: KeyCabinetTaskOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}
export enum EnumKeyCabinetTaskOutputUnlockMode {
  'Online' = 'Online',
  'Bluetooth' = 'Bluetooth',
  'Password' = 'Password'
}
export enum EnumKeyCabinetTaskOutputLockMode {
  'LockerDoor' = 'LockerDoor',
  'LockerBuckle' = 'LockerBuckle'
}
export enum EnumKeyCabinetTaskOutputTaskStep {
  'None' = 'None',
  'Applying' = 'Applying',
  'ApprovalPassed' = 'ApprovalPassed',
  'ApprovalNotPassed' = 'ApprovalNotPassed',
  'Unlocked' = 'Unlocked',
  'TimeOut' = 'TimeOut',
  'TakenOut' = 'TakenOut',
  'Returned' = 'Returned',
  'Ended' = 'Ended',
  'Expired' = 'Expired',
  'ErrorCode' = 'ErrorCode'
}
export enum EnumKeyCabinetTaskOutputApplyReason {
  'EquipmentFailure' = 'EquipmentFailure',
  'EquipmentOverhaul' = 'EquipmentOverhaul',
  'UrgentUnlock' = 'UrgentUnlock',
  'OtherReason' = 'OtherReason',
  'UnLockNormalOperation' = 'UnLockNormalOperation',
  'OpenLockDeviceSetupDebug' = 'OpenLockDeviceSetupDebug',
  'OpenLockWfDeviceDailyMaintenance' = 'OpenLockWfDeviceDailyMaintenance',
  'OpenLockWfDeviceFaultHandling' = 'OpenLockWfDeviceFaultHandling',
  'OpenLockNormalDeviceDailyMaintenance' = 'OpenLockNormalDeviceDailyMaintenance'
}
export enum EnumKeyCabinetTaskOutputApproverType {
  'BaseApprover' = 'BaseApprover',
  'OpenLockApprover' = 'OpenLockApprover',
  'UnLockApprover' = 'UnLockApprover'
}
export class KeyCabinetTaskOutput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  isNeedApprove: boolean;

  /**  */
  isApproverCanUnlockDirectly: boolean;

  /**  */
  isApplicantCanEndTask: boolean;

  /**  */
  unlockMode: EnumKeyCabinetTaskOutputUnlockMode;

  /**  */
  lockMode: EnumKeyCabinetTaskOutputLockMode;

  /**  */
  taskStep: EnumKeyCabinetTaskOutputTaskStep;

  /**  */
  applicantId: number;

  /**  */
  applyTime: string;

  /**  */
  applyReason: EnumKeyCabinetTaskOutputApplyReason;

  /**  */
  applyReasonNote: string;

  /**  */
  applyReasonPhotoId: string;

  /**  */
  applyReasonVoiceId: string;

  /**  */
  approveFlowItems: KeyCabinetApproveFlowItemDto[];

  /**  */
  currentApproveFlowItem: KeyCabinetApproveFlowItemDto;

  /**  */
  unlockTime: string;

  /**  */
  unlockCode: string;

  /**  */
  unlockTimeoutTime: string;

  /**  */
  takenTime: string;

  /**  */
  returnTime: string;

  /**  */
  expiredDate: string;

  /**  */
  equipmentId: number;

  /**  */
  equipmentName: string;

  /**  */
  equipmentPropertyName: string;

  /**  */
  equipmentPropertyDisplayName: string;

  /**  */
  equipmentPropertyValue: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  applicantName: string;

  /**  */
  applyReasonEnumName: string;

  /**  */
  isExpired: boolean;

  /**  */
  taskName: string;

  /**  */
  equipmentPropertyNameForLog: string;

  /**  */
  applyReasonNameForLog: string;

  /**  */
  unlockReasonForLog: string;

  /**  */
  operatorId: number;

  /**  */
  operatorName: string;

  /**  */
  guardianId: number;

  /**  */
  guardianName: string;

  /**  */
  isAllowToSelectApproverType: boolean;

  /**  */
  approverType: EnumKeyCabinetTaskOutputApproverType;

  /**  */
  endTaskTime: string;

  /**  */
  unlockCodeGenerateTime: string;

  /**  */
  openDoorCode: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['isNeedApprove'] = data['isNeedApprove'];
      this['isApproverCanUnlockDirectly'] = data['isApproverCanUnlockDirectly'];
      this['isApplicantCanEndTask'] = data['isApplicantCanEndTask'];
      this['unlockMode'] = data['unlockMode'];
      this['lockMode'] = data['lockMode'];
      this['taskStep'] = data['taskStep'];
      this['applicantId'] = data['applicantId'];
      this['applyTime'] = data['applyTime'];
      this['applyReason'] = data['applyReason'];
      this['applyReasonNote'] = data['applyReasonNote'];
      this['applyReasonPhotoId'] = data['applyReasonPhotoId'];
      this['applyReasonVoiceId'] = data['applyReasonVoiceId'];
      this['approveFlowItems'] = data['approveFlowItems'];
      this['currentApproveFlowItem'] = data['currentApproveFlowItem'];
      this['unlockTime'] = data['unlockTime'];
      this['unlockCode'] = data['unlockCode'];
      this['unlockTimeoutTime'] = data['unlockTimeoutTime'];
      this['takenTime'] = data['takenTime'];
      this['returnTime'] = data['returnTime'];
      this['expiredDate'] = data['expiredDate'];
      this['equipmentId'] = data['equipmentId'];
      this['equipmentName'] = data['equipmentName'];
      this['equipmentPropertyName'] = data['equipmentPropertyName'];
      this['equipmentPropertyDisplayName'] = data['equipmentPropertyDisplayName'];
      this['equipmentPropertyValue'] = data['equipmentPropertyValue'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['applicantName'] = data['applicantName'];
      this['applyReasonEnumName'] = data['applyReasonEnumName'];
      this['isExpired'] = data['isExpired'];
      this['taskName'] = data['taskName'];
      this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog'];
      this['applyReasonNameForLog'] = data['applyReasonNameForLog'];
      this['unlockReasonForLog'] = data['unlockReasonForLog'];
      this['operatorId'] = data['operatorId'];
      this['operatorName'] = data['operatorName'];
      this['guardianId'] = data['guardianId'];
      this['guardianName'] = data['guardianName'];
      this['isAllowToSelectApproverType'] = data['isAllowToSelectApproverType'];
      this['approverType'] = data['approverType'];
      this['endTaskTime'] = data['endTaskTime'];
      this['unlockCodeGenerateTime'] = data['unlockCodeGenerateTime'];
      this['openDoorCode'] = data['openDoorCode'];
    }
  }
}

export class KeyCabinetApproveFlowItemDto {
  /**  */
  roles: string;

  /**  */
  rolesNames: string;

  /**  */
  approverId: number;

  /**  */
  approverName: string;

  /**  */
  isApprovePassed: boolean;

  /**  */
  approveTime: string;

  /**  */
  approveNote: string;

  /**  */
  sortIndex: number;

  constructor(data?: any) {
    if (data) {
      this['roles'] = data['roles'];
      this['rolesNames'] = data['rolesNames'];
      this['approverId'] = data['approverId'];
      this['approverName'] = data['approverName'];
      this['isApprovePassed'] = data['isApprovePassed'];
      this['approveTime'] = data['approveTime'];
      this['approveNote'] = data['approveNote'];
      this['sortIndex'] = data['sortIndex'];
    }
  }
}

export class KeyCabinetEndTaskInput {
  /**  */
  applicantId: number;

  /**  */
  equipmentPropertyId: number;

  constructor(data?: any) {
    if (data) {
      this['applicantId'] = data['applicantId'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
    }
  }
}

export class ApiResultOutput_ListResultDto_KeyCabinetOperatorDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: ListResultDto_KeyCabinetOperatorDto;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class ListResultDto_KeyCabinetOperatorDto {
  /**  */
  items: KeyCabinetOperatorDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class KeyCabinetOperatorDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
    }
  }
}

export class ApiResultOutput_Boolean {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: boolean;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class ApiResultOutput_ListResultDto_KeyCarbinetLogListOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: ListResultDto_KeyCarbinetLogListOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class ListResultDto_KeyCarbinetLogListOutput {
  /**  */
  items: KeyCarbinetLogListOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class KeyCarbinetLogListOutput {
  /**  */
  logId: number;

  /**  */
  log: KeyCabinetTaskOutput;

  constructor(data?: any) {
    if (data) {
      this['logId'] = data['logId'];
      this['log'] = data['log'];
    }
  }
}

export class KeyCarbinetLogInput {
  /**  */
  logId: number;

  /**  */
  taskName: string;

  /**  */
  equipmentPropertyNameForLog: string;

  /**  */
  applyReasonNameForLog: string;

  constructor(data?: any) {
    if (data) {
      this['logId'] = data['logId'];
      this['taskName'] = data['taskName'];
      this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog'];
      this['applyReasonNameForLog'] = data['applyReasonNameForLog'];
    }
  }
}

export class GetLanguagesOutput {
  /**  */
  defaultLanguageName: string;

  /**  */
  items: ApplicationLanguageListDto[];

  constructor(data?: any) {
    if (data) {
      this['defaultLanguageName'] = data['defaultLanguageName'];
      this['items'] = data['items'];
    }
  }
}

export class ApplicationLanguageListDto {
  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  icon: string;

  /**  */
  isDisabled: boolean;

  /**  */
  isDeleted: boolean;

  /**  */
  deleterUserId: number;

  /**  */
  deletionTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['icon'] = data['icon'];
      this['isDisabled'] = data['isDisabled'];
      this['isDeleted'] = data['isDeleted'];
      this['deleterUserId'] = data['deleterUserId'];
      this['deletionTime'] = data['deletionTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['id'] = data['id'];
    }
  }
}

export class GetLanguageForEditOutput {
  /**  */
  language: ApplicationLanguageEditDto;

  /**  */
  languageNames: ComboboxItemDto[];

  /**  */
  flags: ComboboxItemDto[];

  constructor(data?: any) {
    if (data) {
      this['language'] = data['language'];
      this['languageNames'] = data['languageNames'];
      this['flags'] = data['flags'];
    }
  }
}

export class ApplicationLanguageEditDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  icon: string;

  /**  */
  isEnabled: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['icon'] = data['icon'];
      this['isEnabled'] = data['isEnabled'];
    }
  }
}

export class CreateOrUpdateLanguageInput {
  /**  */
  language: ApplicationLanguageEditDto;

  constructor(data?: any) {
    if (data) {
      this['language'] = data['language'];
    }
  }
}

export class SetDefaultLanguageInput {
  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
    }
  }
}

export class PagedResultDto_LanguageTextListDto {
  /**  */
  totalCount: number;

  /**  */
  items: LanguageTextListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class LanguageTextListDto {
  /**  */
  key: string;

  /**  */
  baseValue: string;

  /**  */
  targetValue: string;

  constructor(data?: any) {
    if (data) {
      this['key'] = data['key'];
      this['baseValue'] = data['baseValue'];
      this['targetValue'] = data['targetValue'];
    }
  }
}

export class UpdateLanguageTextInput {
  /**  */
  languageName: string;

  /**  */
  sourceName: string;

  /**  */
  key: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['languageName'] = data['languageName'];
      this['sourceName'] = data['sourceName'];
      this['key'] = data['key'];
      this['value'] = data['value'];
    }
  }
}

export class AddOrUpdateLockControlTaskInput {
  /**  */
  lockControlTask: LockControlTaskDto;

  /**  */
  lockControlTaskItems: LockControlTaskItemDto[];

  constructor(data?: any) {
    if (data) {
      this['lockControlTask'] = data['lockControlTask'];
      this['lockControlTaskItems'] = data['lockControlTaskItems'];
    }
  }
}
export enum EnumLockControlTaskDtoState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export class LockControlTaskDto {
  /**  */
  id: string;

  /**  */
  writer: number;

  /**  */
  writerName: string;

  /**  */
  executor: number;

  /**  */
  executorName: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  approver: number;

  /**  */
  approverName: string;

  /**  */
  note: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  state: EnumLockControlTaskDtoState;

  /**  */
  taskName: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['writer'] = data['writer'];
      this['writerName'] = data['writerName'];
      this['executor'] = data['executor'];
      this['executorName'] = data['executorName'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['approver'] = data['approver'];
      this['approverName'] = data['approverName'];
      this['note'] = data['note'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['state'] = data['state'];
      this['taskName'] = data['taskName'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
    }
  }
}

export class LockControlTaskItemDto {
  /**  */
  deviceId: number;

  /**  */
  no: number;

  /**  */
  name: string;

  /**  */
  description: string;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['no'] = data['no'];
      this['name'] = data['name'];
      this['description'] = data['description'];
    }
  }
}

export class ApiResultOutput_PagedResultDto_LockControlTaskDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: PagedResultDto_LockControlTaskDto;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class PagedResultDto_LockControlTaskDto {
  /**  */
  totalCount: number;

  /**  */
  items: LockControlTaskDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class ApiResultOutput_LockControlTaskDetailOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: LockControlTaskDetailOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class LockControlTaskDetailOutput {
  /**  */
  lockControlTask: LockControlTaskDto;

  /**  */
  lockControlTaskItems: LockControlTaskItemDto[];

  constructor(data?: any) {
    if (data) {
      this['lockControlTask'] = data['lockControlTask'];
      this['lockControlTaskItems'] = data['lockControlTaskItems'];
    }
  }
}

export class LockControlTaskInput {
  /**  */
  taskId: string;

  constructor(data?: any) {
    if (data) {
      this['taskId'] = data['taskId'];
    }
  }
}

export class ApiResultOutput_LockControlTaskPendingDetailOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: LockControlTaskPendingDetailOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class LockControlTaskPendingDetailOutput {
  /**  */
  applyTime: string;

  /**  */
  needApprovalOperation: boolean;

  /**  */
  title: string;

  /**  */
  subTitle: string;

  /**  */
  lockControlTask: LockControlTaskDto;

  /**  */
  lockControlTaskItems: LockControlTaskItemDto[];

  constructor(data?: any) {
    if (data) {
      this['applyTime'] = data['applyTime'];
      this['needApprovalOperation'] = data['needApprovalOperation'];
      this['title'] = data['title'];
      this['subTitle'] = data['subTitle'];
      this['lockControlTask'] = data['lockControlTask'];
      this['lockControlTaskItems'] = data['lockControlTaskItems'];
    }
  }
}

export class AprroveLockControlPendingInput {
  /**  */
  taskId: string;

  /**  */
  approvalThrough: boolean;

  /**  */
  approvalReason: string;

  constructor(data?: any) {
    if (data) {
      this['taskId'] = data['taskId'];
      this['approvalThrough'] = data['approvalThrough'];
      this['approvalReason'] = data['approvalReason'];
    }
  }
}

export class ApiResultOutput_LockControlTaskOptOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: LockControlTaskOptOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class LockControlTaskOptOutput {
  /**  */
  taskNo: number;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  deviceLockInfoDtos: DeviceLockInfoDto[];

  constructor(data?: any) {
    if (data) {
      this['taskNo'] = data['taskNo'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['deviceLockInfoDtos'] = data['deviceLockInfoDtos'];
    }
  }
}

export class DeviceLockInfoDto {
  /**  */
  id: number;

  /**  */
  deviceId: number;

  /**  */
  deviceName: string;

  /**  */
  deviceDescription: string;

  /**  */
  lockList: LockInfoDto[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['deviceId'] = data['deviceId'];
      this['deviceName'] = data['deviceName'];
      this['deviceDescription'] = data['deviceDescription'];
      this['lockList'] = data['lockList'];
    }
  }
}

export class LockInfoDto {
  /**  */
  code: string;

  /**  */
  lockCodeNumber: number;

  /**  */
  lockType: number;

  /**  */
  lockPropertyType: number;

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
    }
  }
}

export class UploadJsqOperationLogInput {
  /**  */
  jsqOperationLogs: JsqOperationLogDto[];

  constructor(data?: any) {
    if (data) {
      this['jsqOperationLogs'] = data['jsqOperationLogs'];
    }
  }
}

export class JsqOperationLogDto {
  /**  */
  taskId: string;

  /**  */
  rfid: string;

  /**  */
  operationTime: string;

  /**  */
  operResultDesHigh: number;

  /**  */
  operResultDesLow: number;

  /**  */
  lockType: number;

  constructor(data?: any) {
    if (data) {
      this['taskId'] = data['taskId'];
      this['rfid'] = data['rfid'];
      this['operationTime'] = data['operationTime'];
      this['operResultDesHigh'] = data['operResultDesHigh'];
      this['operResultDesLow'] = data['operResultDesLow'];
      this['lockType'] = data['lockType'];
    }
  }
}

export class ApiResultOutput_PagedResultDto_JsqOptLogDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: PagedResultDto_JsqOptLogDto;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class PagedResultDto_JsqOptLogDto {
  /**  */
  totalCount: number;

  /**  */
  items: JsqOptLogDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class JsqOptLogDto {
  /**  */
  rfid: string;

  /**  */
  operationTime: string;

  /**  */
  deviceName: string;

  /**  */
  operationResultDesc: string;

  /**  */
  lockName: string;

  constructor(data?: any) {
    if (data) {
      this['rfid'] = data['rfid'];
      this['operationTime'] = data['operationTime'];
      this['deviceName'] = data['deviceName'];
      this['operationResultDesc'] = data['operationResultDesc'];
      this['lockName'] = data['lockName'];
    }
  }
}

export class GetNotificationsOutput {
  /**  */
  unreadCount: number;

  /**  */
  totalCount: number;

  /**  */
  items: UserNotification[];

  constructor(data?: any) {
    if (data) {
      this['unreadCount'] = data['unreadCount'];
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}
export enum EnumUserNotificationState {
  'Unread' = 'Unread',
  'Read' = 'Read'
}
export class UserNotification {
  /**  */
  tenantId: number;

  /**  */
  userId: number;

  /**  */
  state: EnumUserNotificationState;

  /**  */
  notification: TenantNotification;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['userId'] = data['userId'];
      this['state'] = data['state'];
      this['notification'] = data['notification'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTenantNotificationSeverity {
  'Info' = 'Info',
  'Success' = 'Success',
  'Warn' = 'Warn',
  'Error' = 'Error',
  'Fatal' = 'Fatal'
}
export class TenantNotification {
  /**  */
  tenantId: number;

  /**  */
  notificationName: string;

  /**  */
  data: NotificationData;

  /**  */
  entityType: string;

  /**  */
  entityTypeName: string;

  /**  */
  entityId: object;

  /**  */
  severity: EnumTenantNotificationSeverity;

  /**  */
  creationTime: string;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['notificationName'] = data['notificationName'];
      this['data'] = data['data'];
      this['entityType'] = data['entityType'];
      this['entityTypeName'] = data['entityTypeName'];
      this['entityId'] = data['entityId'];
      this['severity'] = data['severity'];
      this['creationTime'] = data['creationTime'];
      this['id'] = data['id'];
    }
  }
}

export class NotificationData {
  /**  */
  type: string;

  /**  */
  properties: object;

  constructor(data?: any) {
    if (data) {
      this['type'] = data['type'];
      this['properties'] = data['properties'];
    }
  }
}

export class EntityDto_Guid {
  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
    }
  }
}

export class GetNotificationSettingsOutput {
  /**  */
  receiveNotifications: boolean;

  /**  */
  notifications: NotificationSubscriptionWithDisplayNameDto[];

  constructor(data?: any) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications'];
      this['notifications'] = data['notifications'];
    }
  }
}

export class NotificationSubscriptionWithDisplayNameDto {
  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  name: string;

  /**  */
  isSubscribed: boolean;

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['name'] = data['name'];
      this['isSubscribed'] = data['isSubscribed'];
    }
  }
}

export class UpdateNotificationSettingsInput {
  /**  */
  receiveNotifications: boolean;

  /**  */
  notifications: NotificationSubscriptionDto[];

  constructor(data?: any) {
    if (data) {
      this['receiveNotifications'] = data['receiveNotifications'];
      this['notifications'] = data['notifications'];
    }
  }
}

export class NotificationSubscriptionDto {
  /**  */
  name: string;

  /**  */
  isSubscribed: boolean;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['isSubscribed'] = data['isSubscribed'];
    }
  }
}

export class GetOperationRecordOutput {
  /**  */
  infoDto: OperationRecordInfoDto;

  /**  */
  itemDtos: OperationRecordItemListDto[];

  constructor(data?: any) {
    if (data) {
      this['infoDto'] = data['infoDto'];
      this['itemDtos'] = data['itemDtos'];
    }
  }
}
export enum EnumOperationRecordInfoDtoEquipmentType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export enum EnumOperationRecordInfoDtoRecordLevel {
  'Red' = 'Red',
  'Gray' = 'Gray',
  'Green' = 'Green'
}
export class OperationRecordInfoDto {
  /**  */
  title: string;

  /**  */
  applicant: string;

  /**  */
  approver: string;

  /**  */
  equipmentType: EnumOperationRecordInfoDtoEquipmentType;

  /**  */
  startTime: string;

  /**  */
  status: string;

  /**  */
  recordLevel: EnumOperationRecordInfoDtoRecordLevel;

  /**  */
  photoIds: string[];

  /**  */
  stationName: string;

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title'];
      this['applicant'] = data['applicant'];
      this['approver'] = data['approver'];
      this['equipmentType'] = data['equipmentType'];
      this['startTime'] = data['startTime'];
      this['status'] = data['status'];
      this['recordLevel'] = data['recordLevel'];
      this['photoIds'] = data['photoIds'];
      this['stationName'] = data['stationName'];
    }
  }
}

export class OperationRecordItemListDto {
  /**  */
  operationTime: string;

  /**  */
  operationDescription: string;

  constructor(data?: any) {
    if (data) {
      this['operationTime'] = data['operationTime'];
      this['operationDescription'] = data['operationDescription'];
    }
  }
}

export class PagedResultDto_OperationRecordListDto {
  /**  */
  totalCount: number;

  /**  */
  items: OperationRecordListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}
export enum EnumOperationRecordListDtoEquipmentType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export enum EnumOperationRecordListDtoRecordLevel {
  'Red' = 'Red',
  'Gray' = 'Gray',
  'Green' = 'Green'
}
export class OperationRecordListDto {
  /**  */
  title: string;

  /**  */
  applicant: string;

  /**  */
  approver: string;

  /**  */
  equipmentType: EnumOperationRecordListDtoEquipmentType;

  /**  */
  startTime: string;

  /**  */
  status: string;

  /**  */
  recordLevel: EnumOperationRecordListDtoRecordLevel;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title'];
      this['applicant'] = data['applicant'];
      this['approver'] = data['approver'];
      this['equipmentType'] = data['equipmentType'];
      this['startTime'] = data['startTime'];
      this['status'] = data['status'];
      this['recordLevel'] = data['recordLevel'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_OrganizationUnitDto {
  /**  */
  items: OrganizationUnitDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class OrganizationUnitDto {
  /**  */
  parentId: number;

  /**  */
  code: string;

  /**  */
  displayName: string;

  /**  */
  memberCount: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId'];
      this['code'] = data['code'];
      this['displayName'] = data['displayName'];
      this['memberCount'] = data['memberCount'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['id'] = data['id'];
    }
  }
}

export class PagedResultDto_OrganizationUnitUserListDto {
  /**  */
  totalCount: number;

  /**  */
  items: OrganizationUnitUserListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class OrganizationUnitUserListDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  profilePictureId: string;

  /**  */
  addedTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['profilePictureId'] = data['profilePictureId'];
      this['addedTime'] = data['addedTime'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrganizationUnitInput {
  /**  */
  parentId: number;

  /**  */
  displayName: string;

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId'];
      this['displayName'] = data['displayName'];
    }
  }
}

export class UpdateOrganizationUnitInput {
  /**  */
  id: number;

  /**  */
  displayName: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['displayName'] = data['displayName'];
    }
  }
}

export class MoveOrganizationUnitInput {
  /**  */
  id: number;

  /**  */
  newParentId: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['newParentId'] = data['newParentId'];
    }
  }
}

export class UsersToOrganizationUnitInput {
  /**  */
  userIds: number[];

  /**  */
  organizationUnitId: number;

  constructor(data?: any) {
    if (data) {
      this['userIds'] = data['userIds'];
      this['organizationUnitId'] = data['organizationUnitId'];
    }
  }
}

export class FindOrganizationUnitUsersInput {
  /**  */
  organizationUnitId: number;

  /**  */
  maxResultCount: number;

  /**  */
  skipCount: number;

  /**  */
  filter: string;

  constructor(data?: any) {
    if (data) {
      this['organizationUnitId'] = data['organizationUnitId'];
      this['maxResultCount'] = data['maxResultCount'];
      this['skipCount'] = data['skipCount'];
      this['filter'] = data['filter'];
    }
  }
}

export class PaymentInfoDto {
  /**  */
  edition: EditionSelectDto;

  /**  */
  additionalPrice: number;

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition'];
      this['additionalPrice'] = data['additionalPrice'];
    }
  }
}

export class EditionSelectDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  expiringEditionId: number;

  /**  */
  monthlyPrice: number;

  /**  */
  annualPrice: number;

  /**  */
  trialDayCount: number;

  /**  */
  waitingDayAfterExpire: number;

  /**  */
  isFree: boolean;

  /**  */
  additionalData: object;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['expiringEditionId'] = data['expiringEditionId'];
      this['monthlyPrice'] = data['monthlyPrice'];
      this['annualPrice'] = data['annualPrice'];
      this['trialDayCount'] = data['trialDayCount'];
      this['waitingDayAfterExpire'] = data['waitingDayAfterExpire'];
      this['isFree'] = data['isFree'];
      this['additionalData'] = data['additionalData'];
    }
  }
}
export enum EnumCreatePaymentDtoEditionPaymentType {
  'NewRegistration' = 'NewRegistration',
  'BuyNow' = 'BuyNow',
  'Upgrade' = 'Upgrade',
  'Extend' = 'Extend'
}
export enum EnumCreatePaymentDtoPaymentPeriodType {
  'Monthly' = 'Monthly',
  'Annual' = 'Annual'
}
export enum EnumCreatePaymentDtoSubscriptionPaymentGatewayType {
  'Paypal' = 'Paypal'
}
export class CreatePaymentDto {
  /**  */
  editionId: number;

  /**  */
  editionPaymentType: EnumCreatePaymentDtoEditionPaymentType;

  /**  */
  paymentPeriodType: EnumCreatePaymentDtoPaymentPeriodType;

  /**  */
  subscriptionPaymentGatewayType: EnumCreatePaymentDtoSubscriptionPaymentGatewayType;

  constructor(data?: any) {
    if (data) {
      this['editionId'] = data['editionId'];
      this['editionPaymentType'] = data['editionPaymentType'];
      this['paymentPeriodType'] = data['paymentPeriodType'];
      this['subscriptionPaymentGatewayType'] = data['subscriptionPaymentGatewayType'];
    }
  }
}

export class CreatePaymentResponse {
  constructor(data?: any) {
    if (data) {
    }
  }
}
export enum EnumExecutePaymentDtoGateway {
  'Paypal' = 'Paypal'
}
export enum EnumExecutePaymentDtoEditionPaymentType {
  'NewRegistration' = 'NewRegistration',
  'BuyNow' = 'BuyNow',
  'Upgrade' = 'Upgrade',
  'Extend' = 'Extend'
}
export enum EnumExecutePaymentDtoPaymentPeriodType {
  'Monthly' = 'Monthly',
  'Annual' = 'Annual'
}
export class ExecutePaymentDto {
  /**  */
  gateway: EnumExecutePaymentDtoGateway;

  /**  */
  editionPaymentType: EnumExecutePaymentDtoEditionPaymentType;

  /**  */
  editionId: number;

  /**  */
  paymentPeriodType: EnumExecutePaymentDtoPaymentPeriodType;

  /**  */
  additionalData: object;

  constructor(data?: any) {
    if (data) {
      this['gateway'] = data['gateway'];
      this['editionPaymentType'] = data['editionPaymentType'];
      this['editionId'] = data['editionId'];
      this['paymentPeriodType'] = data['paymentPeriodType'];
      this['additionalData'] = data['additionalData'];
    }
  }
}

export class ExecutePaymentResponse {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class PagedResultDto_SubscriptionPaymentListDto {
  /**  */
  totalCount: number;

  /**  */
  items: SubscriptionPaymentListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class SubscriptionPaymentListDto {
  /**  */
  gateway: string;

  /**  */
  amount: number;

  /**  */
  editionId: number;

  /**  */
  dayCount: number;

  /**  */
  paymentPeriodType: string;

  /**  */
  paymentId: string;

  /**  */
  payerId: string;

  /**  */
  status: string;

  /**  */
  editionDisplayName: string;

  /**  */
  tenantId: number;

  /**  */
  invoiceNo: string;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['gateway'] = data['gateway'];
      this['amount'] = data['amount'];
      this['editionId'] = data['editionId'];
      this['dayCount'] = data['dayCount'];
      this['paymentPeriodType'] = data['paymentPeriodType'];
      this['paymentId'] = data['paymentId'];
      this['payerId'] = data['payerId'];
      this['status'] = data['status'];
      this['editionDisplayName'] = data['editionDisplayName'];
      this['tenantId'] = data['tenantId'];
      this['invoiceNo'] = data['invoiceNo'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['id'] = data['id'];
    }
  }
}

export class ApiResultOutput_ListResultDto_PendingDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: ListResultDto_PendingDto;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class ListResultDto_PendingDto {
  /**  */
  items: PendingDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}
export enum EnumPendingDtoPendingType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'LockControlTask' = 'LockControlTask'
}
export class PendingDto {
  /**  */
  id: number;

  /**  */
  taskId: string;

  /**  */
  pendingType: EnumPendingDtoPendingType;

  /**  */
  applicantId: number;

  /**  */
  applyTime: string;

  /**  */
  title: string;

  /**  */
  subTitle: string;

  /**  */
  expiredDate: string;

  /**  */
  isExpired: boolean;

  /**  */
  taskStep: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['taskId'] = data['taskId'];
      this['pendingType'] = data['pendingType'];
      this['applicantId'] = data['applicantId'];
      this['applyTime'] = data['applyTime'];
      this['title'] = data['title'];
      this['subTitle'] = data['subTitle'];
      this['expiredDate'] = data['expiredDate'];
      this['isExpired'] = data['isExpired'];
      this['taskStep'] = data['taskStep'];
    }
  }
}

export class ListResultDto_FlatPermissionWithLevelDto {
  /**  */
  items: FlatPermissionWithLevelDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class FlatPermissionWithLevelDto {
  /**  */
  level: number;

  /**  */
  parentName: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  isGrantedByDefault: boolean;

  constructor(data?: any) {
    if (data) {
      this['level'] = data['level'];
      this['parentName'] = data['parentName'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['isGrantedByDefault'] = data['isGrantedByDefault'];
    }
  }
}

export class ListResultDto_ProductListDto {
  /**  */
  items: ProductListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ProductListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  creationTime: string;

  /**  */
  type: string;

  /**  */
  model: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['creationTime'] = data['creationTime'];
      this['type'] = data['type'];
      this['model'] = data['model'];
      this['id'] = data['id'];
    }
  }
}

export class GetProductEditOutput {
  /**  */
  product: ProductEditDto;

  /**  */
  productProperties: ProductPropertyListDto[];

  constructor(data?: any) {
    if (data) {
      this['product'] = data['product'];
      this['productProperties'] = data['productProperties'];
    }
  }
}

export class ProductEditDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  type: string;

  /**  */
  model: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['type'] = data['type'];
      this['model'] = data['model'];
      this['id'] = data['id'];
    }
  }
}

export class ProductPropertyListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  displayName: string;

  /**  */
  value: string;

  /**  */
  sortIndex: number;

  /**  */
  type: string;

  /**  */
  bitType: string;

  /**  */
  creationTime: string;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['displayName'] = data['displayName'];
      this['value'] = data['value'];
      this['sortIndex'] = data['sortIndex'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['creationTime'] = data['creationTime'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateProductInput {
  /**  */
  product: CreateOrUpdateProductDto;

  /**  */
  productProperties: ProductPropertyEditDto[];

  constructor(data?: any) {
    if (data) {
      this['product'] = data['product'];
      this['productProperties'] = data['productProperties'];
    }
  }
}
export enum EnumCreateOrUpdateProductDtoType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class CreateOrUpdateProductDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  type: EnumCreateOrUpdateProductDtoType;

  /**  */
  model: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['type'] = data['type'];
      this['model'] = data['model'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumProductPropertyEditDtoType {
  'BaseProperty' = 'BaseProperty',
  'SignalingAndControl' = 'SignalingAndControl',
  'SensingAndAdjustment' = 'SensingAndAdjustment'
}
export enum EnumProductPropertyEditDtoBitType {
  'ReadOnly' = 'ReadOnly',
  'WriteOnly' = 'WriteOnly',
  'ReadAndWrite' = 'ReadAndWrite'
}
export class ProductPropertyEditDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  value: string;

  /**  */
  description: string;

  /**  */
  sortIndex: number;

  /**  */
  type: EnumProductPropertyEditDtoType;

  /**  */
  bitType: EnumProductPropertyEditDtoBitType;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['value'] = data['value'];
      this['description'] = data['description'];
      this['sortIndex'] = data['sortIndex'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_ProductPropertyListDto {
  /**  */
  items: ProductPropertyListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class GetProductPropertyEditOutput {
  /**  */
  productProperty: ProductPropertyEditDto;

  constructor(data?: any) {
    if (data) {
      this['productProperty'] = data['productProperty'];
    }
  }
}

export class CreateOrUpdateProductPropertyInput {
  /**  */
  productProperty: ProductPropertyEditDto;

  constructor(data?: any) {
    if (data) {
      this['productProperty'] = data['productProperty'];
    }
  }
}

export class CurrentUserProfileEditDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  phoneNumber: string;

  /**  */
  isPhoneNumberConfirmed: boolean;

  /**  */
  timezone: string;

  /**  */
  qrCodeSetupImageUrl: string;

  /**  */
  isGoogleAuthenticatorEnabled: boolean;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['phoneNumber'] = data['phoneNumber'];
      this['isPhoneNumberConfirmed'] = data['isPhoneNumberConfirmed'];
      this['timezone'] = data['timezone'];
      this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl'];
      this['isGoogleAuthenticatorEnabled'] = data['isGoogleAuthenticatorEnabled'];
    }
  }
}

export class UpdateGoogleAuthenticatorKeyOutput {
  /**  */
  qrCodeSetupImageUrl: string;

  constructor(data?: any) {
    if (data) {
      this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl'];
    }
  }
}

export class VerifySmsCodeInputDto {
  /**  */
  code: string;

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code'];
    }
  }
}

export class ChangePasswordInput {
  /**  */
  currentPassword: string;

  /**  */
  newPassword: string;

  constructor(data?: any) {
    if (data) {
      this['currentPassword'] = data['currentPassword'];
      this['newPassword'] = data['newPassword'];
    }
  }
}

export class UpdateProfilePictureInput {
  /**  */
  fileName: string;

  /**  */
  x: number;

  /**  */
  y: number;

  /**  */
  width: number;

  /**  */
  height: number;

  constructor(data?: any) {
    if (data) {
      this['fileName'] = data['fileName'];
      this['x'] = data['x'];
      this['y'] = data['y'];
      this['width'] = data['width'];
      this['height'] = data['height'];
    }
  }
}

export class GetPasswordComplexitySettingOutput {
  /**  */
  setting: PasswordComplexitySetting;

  constructor(data?: any) {
    if (data) {
      this['setting'] = data['setting'];
    }
  }
}

export class GetProfilePictureOutput {
  /**  */
  profilePicture: string;

  constructor(data?: any) {
    if (data) {
      this['profilePicture'] = data['profilePicture'];
    }
  }
}

export class ChangeUserLanguageDto {
  /**  */
  languageName: string;

  constructor(data?: any) {
    if (data) {
      this['languageName'] = data['languageName'];
    }
  }
}

export class AddOrUpdateRiskTicketInput {
  /**  */
  riskTicket: RiskPrecontrolTicketDto;

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['riskTicket'] = data['riskTicket'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class RiskPrecontrolTicketDto {
  /**  */
  id: string;

  /**  */
  title: string;

  /**  */
  footTitle: string;

  /**  */
  personnalProtectTools: string;

  /**  */
  note: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['title'] = data['title'];
      this['footTitle'] = data['footTitle'];
      this['personnalProtectTools'] = data['personnalProtectTools'];
      this['note'] = data['note'];
    }
  }
}

export class RiskPrecontrolItemDto {
  /**  */
  id: string;

  /**  */
  sequence: number;

  /**  */
  riskTicketId: string;

  /**  */
  workSequence: string;

  /**  */
  dangerSource: string;

  /**  */
  dangerFactor: string;

  /**  */
  dangerResult: string;

  /**  */
  riskLevel: string;

  /**  */
  workStandard: string;

  /**  */
  ticketItemId: string;

  /**  */
  isTemplateItem: boolean;

  /**  */
  isFinished: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['sequence'] = data['sequence'];
      this['riskTicketId'] = data['riskTicketId'];
      this['workSequence'] = data['workSequence'];
      this['dangerSource'] = data['dangerSource'];
      this['dangerFactor'] = data['dangerFactor'];
      this['dangerResult'] = data['dangerResult'];
      this['riskLevel'] = data['riskLevel'];
      this['workStandard'] = data['workStandard'];
      this['ticketItemId'] = data['ticketItemId'];
      this['isTemplateItem'] = data['isTemplateItem'];
      this['isFinished'] = data['isFinished'];
    }
  }
}

export class IdGuid {
  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
    }
  }
}

export class AddOrUpdateRiskTicketItemsInput {
  /**  */
  riskTicketId: string;

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['riskTicketId'] = data['riskTicketId'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class AddOrUpdateRiskItemTemplateInput {
  /**  */
  riskItemTemplate: RiskItemTemplate;

  constructor(data?: any) {
    if (data) {
      this['riskItemTemplate'] = data['riskItemTemplate'];
    }
  }
}

export class RiskItemTemplate {
  /**  */
  no: number;

  /**  */
  dangerSource: string;

  /**  */
  workStandard: string;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['no'] = data['no'];
      this['dangerSource'] = data['dangerSource'];
      this['workStandard'] = data['workStandard'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_RiskItemTemplate {
  /**  */
  items: RiskItemTemplate[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class AddOrUpdateRiskItemTermMapInput {
  /**  */
  riskItemTermMap: RiskItemTermMap;

  constructor(data?: any) {
    if (data) {
      this['riskItemTermMap'] = data['riskItemTermMap'];
    }
  }
}

export class RiskItemTermMap {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  dangerSource: string;

  /**  */
  workStandard: string;

  /**  */
  voltageLevels: string;

  /**  */
  deviceTypeId: number;

  /**  */
  fromDeviceStateId: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  deviceType: DeviceType;

  /**  */
  formDeviceState: DeviceState;

  /**  */
  toDeviceState: DeviceState;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['dangerSource'] = data['dangerSource'];
      this['workStandard'] = data['workStandard'];
      this['voltageLevels'] = data['voltageLevels'];
      this['deviceTypeId'] = data['deviceTypeId'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['deviceType'] = data['deviceType'];
      this['formDeviceState'] = data['formDeviceState'];
      this['toDeviceState'] = data['toDeviceState'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceType {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  toPrinter: boolean;

  /**  */
  toKey: boolean;

  /**  */
  dnbsCode: string;

  /**  */
  graphName: string;

  /**  */
  codeName: string;

  /**  */
  showMode: string;

  /**  */
  stressShow: number;

  /**  */
  isEst: boolean;

  /**  */
  isThermal: boolean;

  /**  */
  isInspect: boolean;

  /**  */
  isPprimary: boolean;

  /**  */
  isSecondary: boolean;

  /**  */
  isOperable: boolean;

  /**  */
  isScanCode: boolean;

  /**  */
  deviceStates: DeviceState[];

  /**  */
  deviceOperations: DeviceOperation[];

  /**  */
  riksRiskItemTermMaps: RiskItemTermMap[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['toPrinter'] = data['toPrinter'];
      this['toKey'] = data['toKey'];
      this['dnbsCode'] = data['dnbsCode'];
      this['graphName'] = data['graphName'];
      this['codeName'] = data['codeName'];
      this['showMode'] = data['showMode'];
      this['stressShow'] = data['stressShow'];
      this['isEst'] = data['isEst'];
      this['isThermal'] = data['isThermal'];
      this['isInspect'] = data['isInspect'];
      this['isPprimary'] = data['isPprimary'];
      this['isSecondary'] = data['isSecondary'];
      this['isOperable'] = data['isOperable'];
      this['isScanCode'] = data['isScanCode'];
      this['deviceStates'] = data['deviceStates'];
      this['deviceOperations'] = data['deviceOperations'];
      this['riksRiskItemTermMaps'] = data['riksRiskItemTermMaps'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceState {
  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  state: number;

  /**  */
  deviceTypeId: number;

  /**  */
  deviceType: DeviceType;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['state'] = data['state'];
      this['deviceTypeId'] = data['deviceTypeId'];
      this['deviceType'] = data['deviceType'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceOperation {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  stationId: number;

  /**  */
  voltageLevelId: number;

  /**  */
  deviceTypeId: number;

  /**  */
  fromDeviceStateId: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  boardDesc: string;

  /**  */
  deviceType: DeviceType;

  /**  */
  voltageLevel: VoltageLevel;

  /**  */
  station: Station;

  /**  */
  deviceTerms: DeviceTerm[];

  /**  */
  fromDeviceState: DeviceState;

  /**  */
  toDeviceState: DeviceState;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['stationId'] = data['stationId'];
      this['voltageLevelId'] = data['voltageLevelId'];
      this['deviceTypeId'] = data['deviceTypeId'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['boardDesc'] = data['boardDesc'];
      this['deviceType'] = data['deviceType'];
      this['voltageLevel'] = data['voltageLevel'];
      this['station'] = data['station'];
      this['deviceTerms'] = data['deviceTerms'];
      this['fromDeviceState'] = data['fromDeviceState'];
      this['toDeviceState'] = data['toDeviceState'];
      this['id'] = data['id'];
    }
  }
}

export class VoltageLevel {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  no: number;

  /**  */
  name: string;

  /**  */
  voltage: string;

  /**  */
  color: string;

  /**  */
  desPronounce: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['no'] = data['no'];
      this['name'] = data['name'];
      this['voltage'] = data['voltage'];
      this['color'] = data['color'];
      this['desPronounce'] = data['desPronounce'];
      this['id'] = data['id'];
    }
  }
}

export class Station {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  sortId: number;

  /**  */
  stationAreaId: number;

  /**  */
  no: string;

  /**  */
  deviceAreas: DeviceArea[];

  /**  */
  devices: Device[];

  /**  */
  equipments: Equipment[];

  /**  */
  stationArea: StationArea;

  /**  */
  ticketTasks: TicketTask[];

  /**  */
  ticketTypicals: TicketTypical[];

  /**  */
  ticketTypicalInvalids: TicketTypicalInvalid[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['sortId'] = data['sortId'];
      this['stationAreaId'] = data['stationAreaId'];
      this['no'] = data['no'];
      this['deviceAreas'] = data['deviceAreas'];
      this['devices'] = data['devices'];
      this['equipments'] = data['equipments'];
      this['stationArea'] = data['stationArea'];
      this['ticketTasks'] = data['ticketTasks'];
      this['ticketTypicals'] = data['ticketTypicals'];
      this['ticketTypicalInvalids'] = data['ticketTypicalInvalids'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumDeviceTermType {
  'Default' = 'Default',
  'ByLinkage' = 'ByLinkage',
  'AddBefault' = 'AddBefault',
  'AddAfter' = 'AddAfter',
  'Selectable' = 'Selectable'
}
export class DeviceTerm {
  /**  */
  value: string;

  /**  */
  type: EnumDeviceTermType;

  /**  */
  deviceOperationId: number;

  /**  */
  lockType: string;

  /**  */
  deviceOperation: DeviceOperation;

  /**  */
  ticketTasks: TicketTask[];

  /**  */
  ticketTypicals: TicketTypical[];

  /**  */
  ticketTypicalInvalids: TicketTypicalInvalid[];

  /**  */
  tenantId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['type'] = data['type'];
      this['deviceOperationId'] = data['deviceOperationId'];
      this['lockType'] = data['lockType'];
      this['deviceOperation'] = data['deviceOperation'];
      this['ticketTasks'] = data['ticketTasks'];
      this['ticketTypicals'] = data['ticketTypicals'];
      this['ticketTypicalInvalids'] = data['ticketTypicalInvalids'];
      this['tenantId'] = data['tenantId'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceArea {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  /**  */
  parentId: number;

  /**  */
  name: string;

  /**  */
  sortId: number;

  /**  */
  station: Station;

  /**  */
  parent: DeviceArea;

  /**  */
  children: DeviceArea[];

  /**  */
  devices: Device[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['sortId'] = data['sortId'];
      this['station'] = data['station'];
      this['parent'] = data['parent'];
      this['children'] = data['children'];
      this['devices'] = data['devices'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumDeviceInstallLockType {
  'ImmovableLock' = 'ImmovableLock',
  'CommonLock' = 'CommonLock',
  'ImmovableAndCommonLock' = 'ImmovableAndCommonLock'
}
export class Device {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  /**  */
  deviceAreaId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  voltage: number;

  /**  */
  type: number;

  /**  */
  sortId: number;

  /**  */
  state: number;

  /**  */
  toState: number;

  /**  */
  noWorking: string;

  /**  */
  bsLogic: string;

  /**  */
  m1: number;

  /**  */
  lockCodePropertyId: number;

  /**  */
  shapeType: number;

  /**  */
  videoUrl: string;

  /**  */
  installLockType: EnumDeviceInstallLockType;

  /**  */
  locksetJson: string;

  /**  */
  station: Station;

  /**  */
  lockCodeProperty: LockCodeProperty;

  /**  */
  deviceArea: DeviceArea;

  /**  */
  deviceType: DeviceType;

  /**  */
  voltageLevel: VoltageLevel;

  /**  */
  deviceCodeInfos: DeviceCodeInfo[];

  /**  */
  deviceConfigs: DeviceConfig[];

  /**  */
  ticketItemTasks: TicketItemTask[];

  /**  */
  ticketItemTypicals: TicketItemTypical[];

  /**  */
  ticketItemTypicalInvalids: TicketItemTypicalInvalid[];

  /**  */
  deviceLockStatuses: DeviceLockStatus[];

  /**  */
  deviceLockRecords: DeviceLockRecord[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
      this['deviceAreaId'] = data['deviceAreaId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['voltage'] = data['voltage'];
      this['type'] = data['type'];
      this['sortId'] = data['sortId'];
      this['state'] = data['state'];
      this['toState'] = data['toState'];
      this['noWorking'] = data['noWorking'];
      this['bsLogic'] = data['bsLogic'];
      this['m1'] = data['m1'];
      this['lockCodePropertyId'] = data['lockCodePropertyId'];
      this['shapeType'] = data['shapeType'];
      this['videoUrl'] = data['videoUrl'];
      this['installLockType'] = data['installLockType'];
      this['locksetJson'] = data['locksetJson'];
      this['station'] = data['station'];
      this['lockCodeProperty'] = data['lockCodeProperty'];
      this['deviceArea'] = data['deviceArea'];
      this['deviceType'] = data['deviceType'];
      this['voltageLevel'] = data['voltageLevel'];
      this['deviceCodeInfos'] = data['deviceCodeInfos'];
      this['deviceConfigs'] = data['deviceConfigs'];
      this['ticketItemTasks'] = data['ticketItemTasks'];
      this['ticketItemTypicals'] = data['ticketItemTypicals'];
      this['ticketItemTypicalInvalids'] = data['ticketItemTypicalInvalids'];
      this['deviceLockStatuses'] = data['deviceLockStatuses'];
      this['deviceLockRecords'] = data['deviceLockRecords'];
      this['id'] = data['id'];
    }
  }
}

export class Equipment {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  productId: number;

  /**  */
  terminalId: number;

  /**  */
  masterEquipmentId: number;

  /**  */
  stationId: number;

  /**  */
  station: Station;

  /**  */
  terminal: Terminal;

  /**  */
  product: Product;

  /**  */
  equipmentProperties: EquipmentProperty[];

  /**  */
  terminalPortEquipments: TerminalPortEquipment[];

  /**  */
  subEquipments: Equipment[];

  /**  */
  masterEquipment: Equipment;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['productId'] = data['productId'];
      this['terminalId'] = data['terminalId'];
      this['masterEquipmentId'] = data['masterEquipmentId'];
      this['stationId'] = data['stationId'];
      this['station'] = data['station'];
      this['terminal'] = data['terminal'];
      this['product'] = data['product'];
      this['equipmentProperties'] = data['equipmentProperties'];
      this['terminalPortEquipments'] = data['terminalPortEquipments'];
      this['subEquipments'] = data['subEquipments'];
      this['masterEquipment'] = data['masterEquipment'];
      this['id'] = data['id'];
    }
  }
}

export class StationArea {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  parentId: number;

  /**  */
  parent: StationArea;

  /**  */
  stationAreas: StationArea[];

  /**  */
  stations: Station[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['parentId'] = data['parentId'];
      this['parent'] = data['parent'];
      this['stationAreas'] = data['stationAreas'];
      this['stations'] = data['stations'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketTaskTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTaskTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTaskState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTaskTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTaskTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTask {
  /**  */
  lockingStaffId: string;

  /**  */
  ticketValidTime: string;

  /**  */
  ticketItemTasks: TicketItemTask[];

  /**  */
  ticketTaskPersonas: TicketTaskPersona[];

  /**  */
  tenantId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  ticketOperateType: EnumTicketTaskTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTaskTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTaskState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTaskTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTaskTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  station: Station;

  /**  */
  riskPrecontrolTicket: RiskPrecontrolTicket;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['lockingStaffId'] = data['lockingStaffId'];
      this['ticketValidTime'] = data['ticketValidTime'];
      this['ticketItemTasks'] = data['ticketItemTasks'];
      this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
      this['tenantId'] = data['tenantId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['station'] = data['station'];
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketTypicalTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTypicalTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTypicalState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTypicalTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTypicalTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTypical {
  /**  */
  ticketFolderId: string;

  /**  */
  ticketTaskId: string;

  /**  */
  ticketTask: TicketTask;

  /**  */
  ticketFolder: TicketFolder;

  /**  */
  ticketItemTypicals: TicketItemTypical[];

  /**  */
  tenantId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  ticketOperateType: EnumTicketTypicalTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTypicalTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTypicalState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTypicalTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTypicalTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  station: Station;

  /**  */
  riskPrecontrolTicket: RiskPrecontrolTicket;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketFolderId'] = data['ticketFolderId'];
      this['ticketTaskId'] = data['ticketTaskId'];
      this['ticketTask'] = data['ticketTask'];
      this['ticketFolder'] = data['ticketFolder'];
      this['ticketItemTypicals'] = data['ticketItemTypicals'];
      this['tenantId'] = data['tenantId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['station'] = data['station'];
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketTypicalInvalidTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTypicalInvalidTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTypicalInvalidState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTypicalInvalidTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTypicalInvalidTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTypicalInvalid {
  /**  */
  ticketFolderId: string;

  /**  */
  ticketTypicalId: string;

  /**  */
  ticketTaskId: string;

  /**  */
  ticketTypical: TicketTypical;

  /**  */
  ticketTask: TicketTask;

  /**  */
  ticketFolder: TicketFolder;

  /**  */
  ticketItemTypicalInvalids: TicketItemTypicalInvalid[];

  /**  */
  tenantId: number;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  ticketOperateType: EnumTicketTypicalInvalidTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTypicalInvalidTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTypicalInvalidState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTypicalInvalidTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTypicalInvalidTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  station: Station;

  /**  */
  riskPrecontrolTicket: RiskPrecontrolTicket;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketFolderId'] = data['ticketFolderId'];
      this['ticketTypicalId'] = data['ticketTypicalId'];
      this['ticketTaskId'] = data['ticketTaskId'];
      this['ticketTypical'] = data['ticketTypical'];
      this['ticketTask'] = data['ticketTask'];
      this['ticketFolder'] = data['ticketFolder'];
      this['ticketItemTypicalInvalids'] = data['ticketItemTypicalInvalids'];
      this['tenantId'] = data['tenantId'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['station'] = data['station'];
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket'];
      this['id'] = data['id'];
    }
  }
}

export class LockCodeProperty {
  /**  */
  codeName: string;

  /**  */
  opHint1_0: string;

  /**  */
  opHint1_1: string;

  /**  */
  toKey: boolean;

  /**  */
  stateChange: boolean;

  /**  */
  lockCodeConfigs: LockCodeConfig[];

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  devices: Device[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['codeName'] = data['codeName'];
      this['opHint1_0'] = data['opHint1_0'];
      this['opHint1_1'] = data['opHint1_1'];
      this['toKey'] = data['toKey'];
      this['stateChange'] = data['stateChange'];
      this['lockCodeConfigs'] = data['lockCodeConfigs'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['devices'] = data['devices'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumDeviceCodeInfoLockCodeNumber {
  'Um1' = 'Um1',
  'Um2' = 'Um2',
  'Um3' = 'Um3',
  'Um4' = 'Um4',
  'Um5' = 'Um5',
  'Um6' = 'Um6',
  'Um7' = 'Um7',
  'Um8' = 'Um8',
  'Um9' = 'Um9',
  'Um10' = 'Um10',
  'Um11' = 'Um11',
  'Um12' = 'Um12',
  'Um13' = 'Um13',
  'Um14' = 'Um14',
  'Um15' = 'Um15',
  'Um16' = 'Um16',
  'Um17' = 'Um17',
  'Um18' = 'Um18'
}
export class DeviceCodeInfo {
  /**  */
  deviceId: number;

  /**  */
  device: Device;

  /**  */
  lockCodeNumber: EnumDeviceCodeInfoLockCodeNumber;

  /**  */
  code: string;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  lockCodeConfigId: number;

  /**  */
  lockCodeConfig: LockCodeConfig;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['device'] = data['device'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['code'] = data['code'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['lockCodeConfigId'] = data['lockCodeConfigId'];
      this['lockCodeConfig'] = data['lockCodeConfig'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceConfig {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  /**  */
  deviceId: number;

  /**  */
  device: Device;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
      this['deviceId'] = data['deviceId'];
      this['device'] = data['device'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTaskOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTask {
  /**  */
  approver: number;

  /**  */
  requestReason: string;

  /**  */
  statusUpdateTime: string;

  /**  */
  ticketTask: TicketTask;

  /**  */
  tenantId: number;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTaskOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTaskRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTaskOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  /**  */
  deviceBoardId: number;

  /**  */
  device: Device;

  /**  */
  deviceTerm: DeviceTerm;

  /**  */
  deviceBoard: DeviceBoard;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['approver'] = data['approver'];
      this['requestReason'] = data['requestReason'];
      this['statusUpdateTime'] = data['statusUpdateTime'];
      this['ticketTask'] = data['ticketTask'];
      this['tenantId'] = data['tenantId'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
      this['deviceBoardId'] = data['deviceBoardId'];
      this['device'] = data['device'];
      this['deviceTerm'] = data['deviceTerm'];
      this['deviceBoard'] = data['deviceBoard'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTypicalOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTypical {
  /**  */
  ticketTypical: TicketTypical;

  /**  */
  tenantId: number;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTypicalOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTypicalRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTypicalOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  /**  */
  deviceBoardId: number;

  /**  */
  device: Device;

  /**  */
  deviceTerm: DeviceTerm;

  /**  */
  deviceBoard: DeviceBoard;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketTypical'] = data['ticketTypical'];
      this['tenantId'] = data['tenantId'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
      this['deviceBoardId'] = data['deviceBoardId'];
      this['device'] = data['device'];
      this['deviceTerm'] = data['deviceTerm'];
      this['deviceBoard'] = data['deviceBoard'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTypicalInvalidOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalInvalidRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalInvalidOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTypicalInvalid {
  /**  */
  ticketTypicalInvalid: TicketTypicalInvalid;

  /**  */
  tenantId: number;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTypicalInvalidOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTypicalInvalidRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTypicalInvalidOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  /**  */
  deviceBoardId: number;

  /**  */
  device: Device;

  /**  */
  deviceTerm: DeviceTerm;

  /**  */
  deviceBoard: DeviceBoard;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalInvalid'] = data['ticketTypicalInvalid'];
      this['tenantId'] = data['tenantId'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
      this['deviceBoardId'] = data['deviceBoardId'];
      this['device'] = data['device'];
      this['deviceTerm'] = data['deviceTerm'];
      this['deviceBoard'] = data['deviceBoard'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumDeviceLockStatusTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class DeviceLockStatus {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  deviceId: number;

  /**  */
  ticketType: EnumDeviceLockStatusTicketType;

  /**  */
  ticketId: string;

  /**  */
  ticketTaskName: string;

  /**  */
  ticketTaskNo: string;

  /**  */
  deviceBoardId: number;

  /**  */
  deviceBoardName: string;

  /**  */
  device: Device;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['deviceId'] = data['deviceId'];
      this['ticketType'] = data['ticketType'];
      this['ticketId'] = data['ticketId'];
      this['ticketTaskName'] = data['ticketTaskName'];
      this['ticketTaskNo'] = data['ticketTaskNo'];
      this['deviceBoardId'] = data['deviceBoardId'];
      this['deviceBoardName'] = data['deviceBoardName'];
      this['device'] = data['device'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceLockRecord {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  tenantId: number;

  /**  */
  ticketItemTaskId: string;

  /**  */
  deviceId: number;

  /**  */
  ticketItemTask: TicketItemTask;

  /**  */
  device: Device;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['tenantId'] = data['tenantId'];
      this['ticketItemTaskId'] = data['ticketItemTaskId'];
      this['deviceId'] = data['deviceId'];
      this['ticketItemTask'] = data['ticketItemTask'];
      this['device'] = data['device'];
      this['id'] = data['id'];
    }
  }
}

export class Terminal {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  equipments: Equipment[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['equipments'] = data['equipments'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumProductType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class Product {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  model: string;

  /**  */
  type: EnumProductType;

  /**  */
  productProperties: ProductProperty[];

  /**  */
  equipments: Equipment[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['model'] = data['model'];
      this['type'] = data['type'];
      this['productProperties'] = data['productProperties'];
      this['equipments'] = data['equipments'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumEquipmentPropertyType {
  'BaseProperty' = 'BaseProperty',
  'SignalingAndControl' = 'SignalingAndControl',
  'SensingAndAdjustment' = 'SensingAndAdjustment'
}
export enum EnumEquipmentPropertyBitType {
  'ReadOnly' = 'ReadOnly',
  'WriteOnly' = 'WriteOnly',
  'ReadAndWrite' = 'ReadAndWrite'
}
export class EquipmentProperty {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  value: string;

  /**  */
  description: string;

  /**  */
  type: EnumEquipmentPropertyType;

  /**  */
  bitType: EnumEquipmentPropertyBitType;

  /**  */
  equipmentId: number;

  /**  */
  equipment: Equipment;

  /**  */
  state: number;

  /**  */
  productPropertyId: number;

  /**  */
  productProperty: ProductProperty;

  /**  */
  deviceId: number;

  /**  */
  device: Device;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  sortIndex: number;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  equipmentPropertyLogs: EquipmentPropertyLog[];

  /**  */
  equipmentPropertyConfigs: EquipmentPropertyConfig[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['value'] = data['value'];
      this['description'] = data['description'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['equipmentId'] = data['equipmentId'];
      this['equipment'] = data['equipment'];
      this['state'] = data['state'];
      this['productPropertyId'] = data['productPropertyId'];
      this['productProperty'] = data['productProperty'];
      this['deviceId'] = data['deviceId'];
      this['device'] = data['device'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['sortIndex'] = data['sortIndex'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['equipmentPropertyLogs'] = data['equipmentPropertyLogs'];
      this['equipmentPropertyConfigs'] = data['equipmentPropertyConfigs'];
      this['id'] = data['id'];
    }
  }
}

export class TerminalPortEquipment {
  /**  */
  lastModificationTime: string;

  /**  */
  creationTime: string;

  /**  */
  terminalPortConfigId: number;

  /**  */
  equipmentId: number;

  /**  */
  equipment: Equipment;

  /**  */
  terminalPortConfig: TerminalPortConfig;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime'];
      this['creationTime'] = data['creationTime'];
      this['terminalPortConfigId'] = data['terminalPortConfigId'];
      this['equipmentId'] = data['equipmentId'];
      this['equipment'] = data['equipment'];
      this['terminalPortConfig'] = data['terminalPortConfig'];
      this['id'] = data['id'];
    }
  }
}

export class TicketTaskPersona {
  /**  */
  ticketTask: TicketTask;

  /**  */
  tenantId: number;

  /**  */
  ticketId: string;

  /**  */
  userId: number;

  /**  */
  roleType: string;

  /**  */
  isConfirm: boolean;

  /**  */
  isPass: boolean;

  /**  */
  note: string;

  /**  */
  dealTime: string;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketTask'] = data['ticketTask'];
      this['tenantId'] = data['tenantId'];
      this['ticketId'] = data['ticketId'];
      this['userId'] = data['userId'];
      this['roleType'] = data['roleType'];
      this['isConfirm'] = data['isConfirm'];
      this['isPass'] = data['isPass'];
      this['note'] = data['note'];
      this['dealTime'] = data['dealTime'];
      this['id'] = data['id'];
    }
  }
}

export class RiskPrecontrolTicket {
  /**  */
  title: string;

  /**  */
  footTitle: string;

  /**  */
  personnalProtectTools: string;

  /**  */
  note: string;

  /**  */
  riskPrecontrolItems: RiskPrecontrolItem[];

  /**  */
  ticketTasks: TicketTask[];

  /**  */
  ticketTypicals: TicketTypical[];

  /**  */
  ticketTypicalInvalids: TicketTypicalInvalid[];

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['title'] = data['title'];
      this['footTitle'] = data['footTitle'];
      this['personnalProtectTools'] = data['personnalProtectTools'];
      this['note'] = data['note'];
      this['riskPrecontrolItems'] = data['riskPrecontrolItems'];
      this['ticketTasks'] = data['ticketTasks'];
      this['ticketTypicals'] = data['ticketTypicals'];
      this['ticketTypicalInvalids'] = data['ticketTypicalInvalids'];
      this['id'] = data['id'];
    }
  }
}

export class TicketFolder {
  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  /**  */
  parentId: string;

  /**  */
  name: string;

  /**  */
  riskTicketId: string;

  /**  */
  station: Station;

  /**  */
  riskPrecontrolTicket: RiskPrecontrolTicket;

  /**  */
  ticketFolderParent: TicketFolder;

  /**  */
  ticketTypicals: TicketTypical[];

  /**  */
  ticketTypicalInvalids: TicketTypicalInvalid[];

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['riskTicketId'] = data['riskTicketId'];
      this['station'] = data['station'];
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket'];
      this['ticketFolderParent'] = data['ticketFolderParent'];
      this['ticketTypicals'] = data['ticketTypicals'];
      this['ticketTypicalInvalids'] = data['ticketTypicalInvalids'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumLockCodeConfigLockType {
  'NoKey' = 'NoKey',
  'JXLock' = 'JXLock',
  'DBMLock' = 'DBMLock',
  'DKLock' = 'DKLock',
  'DXDKLock' = 'DXDKLock',
  'GSNYD' = 'GSNYD',
  'WYYD' = 'WYYD',
  'YYYD' = 'YYYD',
  'CJFKLock' = 'CJFKLock',
  'FKSDBMLock' = 'FKSDBMLock',
  'ZNLock' = 'ZNLock',
  'ZNYB' = 'ZNYB',
  'YYDWZJC' = 'YYDWZJC',
  'WYDWZJC' = 'WYDWZJC',
  'JXDBMLock' = 'JXDBMLock',
  'DBMLock_2H' = 'DBMLock_2H',
  'DBMLock_3H' = 'DBMLock_3H',
  'XJLock' = 'XJLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_GSN2L' = 'WX_GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'ZNHWMLock' = 'ZNHWMLock',
  'GSN2E' = 'GSN2E',
  'GSN2YD' = 'GSN2YD',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'WX_DZBQ' = 'WX_DZBQ',
  'WX_BSJXLock' = 'WX_BSJXLock',
  'WX_SGWZSLock' = 'WX_SGWZSLock',
  'SGWZSLock' = 'SGWZSLock',
  'TBLock' = 'TBLock',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'ZNSXLock' = 'ZNSXLock',
  'GYJLYDQ' = 'GYJLYDQ',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export enum EnumLockCodeConfigLockPropertyType {
  'NoKey' = 'NoKey',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'HWGMLock' = 'HWGMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'GSN2L' = 'GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'WX_SKJXLock' = 'WX_SKJXLock',
  'GSN2YD' = 'GSN2YD',
  'XJLock' = 'XJLock',
  'JM_GSN2YD' = 'JM_GSN2YD',
  'GLDBP' = 'GLDBP',
  'GLWYBS' = 'GLWYBS',
  'LSGLGLock' = 'LSGLGLock',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export enum EnumLockCodeConfigLockCodeNumber {
  'Um1' = 'Um1',
  'Um2' = 'Um2',
  'Um3' = 'Um3',
  'Um4' = 'Um4',
  'Um5' = 'Um5',
  'Um6' = 'Um6',
  'Um7' = 'Um7',
  'Um8' = 'Um8',
  'Um9' = 'Um9',
  'Um10' = 'Um10',
  'Um11' = 'Um11',
  'Um12' = 'Um12',
  'Um13' = 'Um13',
  'Um14' = 'Um14',
  'Um15' = 'Um15',
  'Um16' = 'Um16',
  'Um17' = 'Um17',
  'Um18' = 'Um18'
}
export class LockCodeConfig {
  /**  */
  lockType: EnumLockCodeConfigLockType;

  /**  */
  lockPropertyType: EnumLockCodeConfigLockPropertyType;

  /**  */
  lockCodeNumber: EnumLockCodeConfigLockCodeNumber;

  /**  */
  lockCodePropertyId: number;

  /**  */
  lockCodeProperty: LockCodeProperty;

  /**  */
  deviceCodeInfos: DeviceCodeInfo[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['lockCodeNumber'] = data['lockCodeNumber'];
      this['lockCodePropertyId'] = data['lockCodePropertyId'];
      this['lockCodeProperty'] = data['lockCodeProperty'];
      this['deviceCodeInfos'] = data['deviceCodeInfos'];
      this['id'] = data['id'];
    }
  }
}

export class DeviceBoard {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  lastModificationTime: string;

  /**  */
  lastModifierUserId: number;

  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  tenantId: number;

  /**  */
  name: string;

  /**  */
  term: string;

  /**  */
  contentStorageId: string;

  /**  */
  dismantleTerm: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['lastModifierUserId'] = data['lastModifierUserId'];
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['tenantId'] = data['tenantId'];
      this['name'] = data['name'];
      this['term'] = data['term'];
      this['contentStorageId'] = data['contentStorageId'];
      this['dismantleTerm'] = data['dismantleTerm'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumProductPropertyType {
  'BaseProperty' = 'BaseProperty',
  'SignalingAndControl' = 'SignalingAndControl',
  'SensingAndAdjustment' = 'SensingAndAdjustment'
}
export enum EnumProductPropertyBitType {
  'ReadOnly' = 'ReadOnly',
  'WriteOnly' = 'WriteOnly',
  'ReadAndWrite' = 'ReadAndWrite'
}
export class ProductProperty {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  value: string;

  /**  */
  description: string;

  /**  */
  productId: number;

  /**  */
  sortIndex: number;

  /**  */
  type: EnumProductPropertyType;

  /**  */
  bitType: EnumProductPropertyBitType;

  /**  */
  factor: number;

  /**  */
  unit: string;

  /**  */
  product: Product;

  /**  */
  productPropertyBatch: ProductPropertyBatch;

  /**  */
  equipmentProperties: EquipmentProperty[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['value'] = data['value'];
      this['description'] = data['description'];
      this['productId'] = data['productId'];
      this['sortIndex'] = data['sortIndex'];
      this['type'] = data['type'];
      this['bitType'] = data['bitType'];
      this['factor'] = data['factor'];
      this['unit'] = data['unit'];
      this['product'] = data['product'];
      this['productPropertyBatch'] = data['productPropertyBatch'];
      this['equipmentProperties'] = data['equipmentProperties'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumEquipmentPropertyLogProductType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class EquipmentPropertyLog {
  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  tenantId: number;

  /**  */
  equipmentPropertyId: number;

  /**  */
  operatorId1: number;

  /**  */
  operatorId2: number;

  /**  */
  operation: string;

  /**  */
  productType: EnumEquipmentPropertyLogProductType;

  /**  */
  stationId: number;

  /**  */
  operatorId3: number;

  /**  */
  operatorId4: number;

  /**  */
  logDate1: string;

  /**  */
  logDate2: string;

  /**  */
  logDate3: string;

  /**  */
  logDate4: string;

  /**  */
  approvers: string;

  /**  */
  equipmentProperty: EquipmentProperty;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['tenantId'] = data['tenantId'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['operatorId1'] = data['operatorId1'];
      this['operatorId2'] = data['operatorId2'];
      this['operation'] = data['operation'];
      this['productType'] = data['productType'];
      this['stationId'] = data['stationId'];
      this['operatorId3'] = data['operatorId3'];
      this['operatorId4'] = data['operatorId4'];
      this['logDate1'] = data['logDate1'];
      this['logDate2'] = data['logDate2'];
      this['logDate3'] = data['logDate3'];
      this['logDate4'] = data['logDate4'];
      this['approvers'] = data['approvers'];
      this['equipmentProperty'] = data['equipmentProperty'];
      this['id'] = data['id'];
    }
  }
}

export class EquipmentPropertyConfig {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  /**  */
  equipmentPropertyId: number;

  /**  */
  equipmentProperty: EquipmentProperty;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['equipmentProperty'] = data['equipmentProperty'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTerminalPortConfigPortType {
  'TcpClient' = 'TcpClient',
  'TcpServer' = 'TcpServer',
  'ComPort' = 'ComPort'
}
export enum EnumTerminalPortConfigProtocolType {
  'WireCabinetProtocol' = 'WireCabinetProtocol',
  'KeySurpervisorProtocol' = 'KeySurpervisorProtocol',
  'Iec104Protocol' = 'Iec104Protocol',
  'JsqProtocol' = 'JsqProtocol'
}
export class TerminalPortConfig {
  /**  */
  creationTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  name: string;

  /**  */
  portType: EnumTerminalPortConfigPortType;

  /**  */
  config: string;

  /**  */
  terminalId: number;

  /**  */
  protocolType: EnumTerminalPortConfigProtocolType;

  /**  */
  terminal: Terminal;

  /**  */
  terminalPortEquipments: TerminalPortEquipment[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['creationTime'] = data['creationTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['name'] = data['name'];
      this['portType'] = data['portType'];
      this['config'] = data['config'];
      this['terminalId'] = data['terminalId'];
      this['protocolType'] = data['protocolType'];
      this['terminal'] = data['terminal'];
      this['terminalPortEquipments'] = data['terminalPortEquipments'];
      this['id'] = data['id'];
    }
  }
}

export class RiskPrecontrolItem {
  /**  */
  sequence: number;

  /**  */
  riskTicketId: string;

  /**  */
  workSequence: string;

  /**  */
  dangerSource: string;

  /**  */
  dangerFactor: string;

  /**  */
  dangerResult: string;

  /**  */
  riskLevel: string;

  /**  */
  workStandard: string;

  /**  */
  ticketItemId: string;

  /**  */
  isTemplateItem: boolean;

  /**  */
  isFinished: boolean;

  /**  */
  operationTime: string;

  /**  */
  riskPrecontrolTicket: RiskPrecontrolTicket;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['sequence'] = data['sequence'];
      this['riskTicketId'] = data['riskTicketId'];
      this['workSequence'] = data['workSequence'];
      this['dangerSource'] = data['dangerSource'];
      this['dangerFactor'] = data['dangerFactor'];
      this['dangerResult'] = data['dangerResult'];
      this['riskLevel'] = data['riskLevel'];
      this['workStandard'] = data['workStandard'];
      this['ticketItemId'] = data['ticketItemId'];
      this['isTemplateItem'] = data['isTemplateItem'];
      this['isFinished'] = data['isFinished'];
      this['operationTime'] = data['operationTime'];
      this['riskPrecontrolTicket'] = data['riskPrecontrolTicket'];
      this['id'] = data['id'];
    }
  }
}

export class ProductPropertyBatch {
  /**  */
  prefix: string;

  /**  */
  suffix: string;

  /**  */
  startNum: number;

  /**  */
  step: number;

  /**  */
  productProperty: ProductProperty;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['prefix'] = data['prefix'];
      this['suffix'] = data['suffix'];
      this['startNum'] = data['startNum'];
      this['step'] = data['step'];
      this['productProperty'] = data['productProperty'];
      this['id'] = data['id'];
    }
  }
}

export class MappingRiskItemByTermInput {
  /**  */
  keyWord: string;

  constructor(data?: any) {
    if (data) {
      this['keyWord'] = data['keyWord'];
    }
  }
}

export class ListResultDto_RiskItemTermMap {
  /**  */
  items: RiskItemTermMap[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class RiskItemDto {
  /**  */
  id: string;

  /**  */
  riskTicketId: string;

  /**  */
  dangerSource: string;

  /**  */
  workStandard: string;

  /**  */
  sequence: number;

  /**  */
  isTemplateItem: boolean;

  /**  */
  isFinished: boolean;

  /**  */
  ticketItemId: string;

  /**  */
  ticketId: string;

  /**  */
  riskItemTemplateId: string;

  /**  */
  isTicketRiskItem: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['riskTicketId'] = data['riskTicketId'];
      this['dangerSource'] = data['dangerSource'];
      this['workStandard'] = data['workStandard'];
      this['sequence'] = data['sequence'];
      this['isTemplateItem'] = data['isTemplateItem'];
      this['isFinished'] = data['isFinished'];
      this['ticketItemId'] = data['ticketItemId'];
      this['ticketId'] = data['ticketId'];
      this['riskItemTemplateId'] = data['riskItemTemplateId'];
      this['isTicketRiskItem'] = data['isTicketRiskItem'];
    }
  }
}

export class ListResultDto_RiskItemDto {
  /**  */
  items: RiskItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ListResultDto_RoleListDto {
  /**  */
  items: RoleListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class RoleListDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  isStatic: boolean;

  /**  */
  isDefault: boolean;

  /**  */
  creationTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['isStatic'] = data['isStatic'];
      this['isDefault'] = data['isDefault'];
      this['creationTime'] = data['creationTime'];
      this['id'] = data['id'];
    }
  }
}

export class GetRoleForEditOutput {
  /**  */
  role: RoleEditDto;

  /**  */
  permissions: FlatPermissionDto[];

  /**  */
  grantedPermissionNames: string[];

  constructor(data?: any) {
    if (data) {
      this['role'] = data['role'];
      this['permissions'] = data['permissions'];
      this['grantedPermissionNames'] = data['grantedPermissionNames'];
    }
  }
}

export class RoleEditDto {
  /**  */
  id: number;

  /**  */
  displayName: string;

  /**  */
  isDefault: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['displayName'] = data['displayName'];
      this['isDefault'] = data['isDefault'];
    }
  }
}

export class FlatPermissionDto {
  /**  */
  parentName: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  isGrantedByDefault: boolean;

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['isGrantedByDefault'] = data['isGrantedByDefault'];
    }
  }
}

export class CreateOrUpdateRoleInput {
  /**  */
  role: RoleEditDto;

  /**  */
  grantedPermissionNames: string[];

  constructor(data?: any) {
    if (data) {
      this['role'] = data['role'];
      this['grantedPermissionNames'] = data['grantedPermissionNames'];
    }
  }
}

export class SafetyWearMonitoringInput {
  /**  */
  userId: number;

  /**  */
  macAddress: string;

  /**  */
  equipmentNo: number;

  /**  */
  workState: boolean;

  /**  */
  usingState: boolean;

  /**  */
  heartRate: number;

  /**  */
  systolicPressure: number;

  /**  */
  diastolicPressure: number;

  /**  */
  longitude: number;

  /**  */
  latitude: number;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['macAddress'] = data['macAddress'];
      this['equipmentNo'] = data['equipmentNo'];
      this['workState'] = data['workState'];
      this['usingState'] = data['usingState'];
      this['heartRate'] = data['heartRate'];
      this['systolicPressure'] = data['systolicPressure'];
      this['diastolicPressure'] = data['diastolicPressure'];
      this['longitude'] = data['longitude'];
      this['latitude'] = data['latitude'];
    }
  }
}

export class SafetyWearMonitoringOutput {
  /**  */
  userName: string;

  /**  */
  createTime: string;

  /**  */
  userId: number;

  /**  */
  stationId: number;

  /**  */
  equipmentId: number;

  /**  */
  macAddress: string;

  /**  */
  equipmentNo: number;

  /**  */
  workState: boolean;

  /**  */
  usingState: boolean;

  /**  */
  heartRate: number;

  /**  */
  systolicPressure: number;

  /**  */
  diastolicPressure: number;

  /**  */
  longitude: number;

  /**  */
  latitude: number;

  /**  */
  updateTime: string;

  constructor(data?: any) {
    if (data) {
      this['userName'] = data['userName'];
      this['createTime'] = data['createTime'];
      this['userId'] = data['userId'];
      this['stationId'] = data['stationId'];
      this['equipmentId'] = data['equipmentId'];
      this['macAddress'] = data['macAddress'];
      this['equipmentNo'] = data['equipmentNo'];
      this['workState'] = data['workState'];
      this['usingState'] = data['usingState'];
      this['heartRate'] = data['heartRate'];
      this['systolicPressure'] = data['systolicPressure'];
      this['diastolicPressure'] = data['diastolicPressure'];
      this['longitude'] = data['longitude'];
      this['latitude'] = data['latitude'];
      this['updateTime'] = data['updateTime'];
    }
  }
}

export class ListResultDto_SafetyWearMonitoringOutput {
  /**  */
  items: SafetyWearMonitoringOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class EquipmentInfoOutput {
  /**  */
  equipmentId: number;

  /**  */
  macAddress: string;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['macAddress'] = data['macAddress'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
    }
  }
}

export class ListResultDto_EquipmentInfoOutput {
  /**  */
  items: EquipmentInfoOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ListResultDto_SafetyWearUserOutput {
  /**  */
  items: SafetyWearUserOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class SafetyWearUserOutput {
  /**  */
  userId: number;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['userName'] = data['userName'];
    }
  }
}

export class AddSerialNumberInput {
  /**  */
  serialNumber: SerialNumberDto;

  constructor(data?: any) {
    if (data) {
      this['serialNumber'] = data['serialNumber'];
    }
  }
}

export class SerialNumberDto {
  /**  */
  id: number;

  /**  */
  tenantId: number;

  /**  */
  stationId: number;

  /**  */
  code: string;

  /**  */
  description: string;

  /**  */
  prefix: string;

  /**  */
  dateFormat: string;

  /**  */
  numberFormat: string;

  /**  */
  maxNumber: number;

  /**  */
  resetType: number;

  /**  */
  lastSerialNumber: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['tenantId'] = data['tenantId'];
      this['stationId'] = data['stationId'];
      this['code'] = data['code'];
      this['description'] = data['description'];
      this['prefix'] = data['prefix'];
      this['dateFormat'] = data['dateFormat'];
      this['numberFormat'] = data['numberFormat'];
      this['maxNumber'] = data['maxNumber'];
      this['resetType'] = data['resetType'];
      this['lastSerialNumber'] = data['lastSerialNumber'];
    }
  }
}

export class ApiResultOutput_String {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: string;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class SetSerialMaxNumberInput {
  /**  */
  stationId: number;

  /**  */
  code: string;

  /**  */
  maxNumber: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['code'] = data['code'];
      this['maxNumber'] = data['maxNumber'];
    }
  }
}

export class GetCurrentLoginInformationsOutput {
  /**  */
  user: UserLoginInfoDto;

  /**  */
  tenant: TenantLoginInfoDto;

  /**  */
  application: ApplicationInfoDto;

  /**  */
  station: StationLoginInfoDto;

  constructor(data?: any) {
    if (data) {
      this['user'] = data['user'];
      this['tenant'] = data['tenant'];
      this['application'] = data['application'];
      this['station'] = data['station'];
    }
  }
}

export class UserLoginInfoDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  profilePictureId: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['profilePictureId'] = data['profilePictureId'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTenantLoginInfoDtoPaymentPeriodType {
  'Monthly' = 'Monthly',
  'Annual' = 'Annual'
}
export class TenantLoginInfoDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  logoId: string;

  /**  */
  logoFileType: string;

  /**  */
  customCssId: string;

  /**  */
  subscriptionEndDateUtc: string;

  /**  */
  isInTrialPeriod: boolean;

  /**  */
  edition: EditionInfoDto;

  /**  */
  creationTime: string;

  /**  */
  paymentPeriodType: EnumTenantLoginInfoDtoPaymentPeriodType;

  /**  */
  subscriptionDateString: string;

  /**  */
  creationTimeString: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['logoId'] = data['logoId'];
      this['logoFileType'] = data['logoFileType'];
      this['customCssId'] = data['customCssId'];
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc'];
      this['isInTrialPeriod'] = data['isInTrialPeriod'];
      this['edition'] = data['edition'];
      this['creationTime'] = data['creationTime'];
      this['paymentPeriodType'] = data['paymentPeriodType'];
      this['subscriptionDateString'] = data['subscriptionDateString'];
      this['creationTimeString'] = data['creationTimeString'];
      this['id'] = data['id'];
    }
  }
}

export class ApplicationInfoDto {
  /**  */
  version: string;

  /**  */
  releaseDate: string;

  /**  */
  features: object;

  constructor(data?: any) {
    if (data) {
      this['version'] = data['version'];
      this['releaseDate'] = data['releaseDate'];
      this['features'] = data['features'];
    }
  }
}

export class StationLoginInfoDto {
  /**  */
  id: number;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}

export class EditionInfoDto {
  /**  */
  displayName: string;

  /**  */
  trialDayCount: number;

  /**  */
  monthlyPrice: number;

  /**  */
  annualPrice: number;

  /**  */
  isHighestEdition: boolean;

  /**  */
  isFree: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName'];
      this['trialDayCount'] = data['trialDayCount'];
      this['monthlyPrice'] = data['monthlyPrice'];
      this['annualPrice'] = data['annualPrice'];
      this['isHighestEdition'] = data['isHighestEdition'];
      this['isFree'] = data['isFree'];
      this['id'] = data['id'];
    }
  }
}

export class UpdateUserSignInTokenOutput {
  /**  */
  signInToken: string;

  /**  */
  encodedUserId: string;

  /**  */
  encodedTenantId: string;

  constructor(data?: any) {
    if (data) {
      this['signInToken'] = data['signInToken'];
      this['encodedUserId'] = data['encodedUserId'];
      this['encodedTenantId'] = data['encodedTenantId'];
    }
  }
}

export class ListResultDto_StationListDto {
  /**  */
  items: StationListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class StationListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  no: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['no'] = data['no'];
      this['id'] = data['id'];
    }
  }
}

export class GetStationEditOutput {
  /**  */
  station: GetStationEditDto;

  constructor(data?: any) {
    if (data) {
      this['station'] = data['station'];
    }
  }
}

export class GetStationEditDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  sortId: number;

  /**  */
  no: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['sortId'] = data['sortId'];
      this['no'] = data['no'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateStationInput {
  /**  */
  station: CreateOrUpdateStationDto;

  constructor(data?: any) {
    if (data) {
      this['station'] = data['station'];
    }
  }
}

export class CreateOrUpdateStationDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  sortId: number;

  /**  */
  no: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['sortId'] = data['sortId'];
      this['no'] = data['no'];
      this['id'] = data['id'];
    }
  }
}

export class PagedResultDto_StationListDto {
  /**  */
  totalCount: number;

  /**  */
  items: StationListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class BindEquipmentStationInput {
  /**  */
  stationId: number;

  /**  */
  equipmentIds: number[];

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['equipmentIds'] = data['equipmentIds'];
    }
  }
}

export class CreateStationUserInput {
  /**  */
  stationUserDtos: StationUserDto[];

  constructor(data?: any) {
    if (data) {
      this['stationUserDtos'] = data['stationUserDtos'];
    }
  }
}

export class StationUserDto {
  /**  */
  stationId: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['userId'] = data['userId'];
    }
  }
}

export class UpdateDefaultUserStationInput {
  /**  */
  stationId: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['userId'] = data['userId'];
    }
  }
}

export class CreateStationAreaInput {
  /**  */
  name: string;

  /**  */
  parentId: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['parentId'] = data['parentId'];
    }
  }
}

export class StationAreaDto {
  /**  */
  stationAreaId: number;

  /**  */
  stationAreaName: string;

  /**  */
  stationAreaParentId: number;

  /**  */
  stationDtos: StationDto[];

  constructor(data?: any) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId'];
      this['stationAreaName'] = data['stationAreaName'];
      this['stationAreaParentId'] = data['stationAreaParentId'];
      this['stationDtos'] = data['stationDtos'];
    }
  }
}

export class StationDto {
  /**  */
  stationName: string;

  /**  */
  stationId: number;

  constructor(data?: any) {
    if (data) {
      this['stationName'] = data['stationName'];
      this['stationId'] = data['stationId'];
    }
  }
}

export class UpdateStationAreaInput {
  /**  */
  name: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['id'] = data['id'];
    }
  }
}

export class MoveStationAreaInput {
  /**  */
  id: number;

  /**  */
  parentId: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['parentId'] = data['parentId'];
    }
  }
}

export class ListResultDto_StationAreaDto {
  /**  */
  items: StationAreaDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ListResultDto_StationAreaWithEquipment {
  /**  */
  items: StationAreaWithEquipment[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class StationAreaWithEquipment {
  /**  */
  stationAreaId: number;

  /**  */
  stationAreaName: string;

  /**  */
  stationAreaParentId: number;

  /**  */
  childrenCount: number;

  /**  */
  stations: StationInArea[];

  constructor(data?: any) {
    if (data) {
      this['stationAreaId'] = data['stationAreaId'];
      this['stationAreaName'] = data['stationAreaName'];
      this['stationAreaParentId'] = data['stationAreaParentId'];
      this['childrenCount'] = data['childrenCount'];
      this['stations'] = data['stations'];
    }
  }
}

export class StationInArea {
  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  equipments: EquipmentInStation[];

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['equipments'] = data['equipments'];
    }
  }
}
export enum EnumEquipmentInStationProductType {
  'KeyCabinet' = 'KeyCabinet',
  'WireCabinet' = 'WireCabinet',
  'SafetyWear' = 'SafetyWear',
  'PhotoelectricTemperature' = 'PhotoelectricTemperature',
  'ManholeCover' = 'ManholeCover'
}
export class EquipmentInStation {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  lastModificationTime: string;

  /**  */
  productType: EnumEquipmentInStationProductType;

  /**  */
  description: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  isOnline: boolean;

  /**  */
  equipmentBaseProperties: BasePropertyInEquipment[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['productType'] = data['productType'];
      this['description'] = data['description'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['isOnline'] = data['isOnline'];
      this['equipmentBaseProperties'] = data['equipmentBaseProperties'];
    }
  }
}

export class BasePropertyInEquipment {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  /**  */
  config: string;

  /**  */
  operation: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
      this['config'] = data['config'];
      this['operation'] = data['operation'];
      this['id'] = data['id'];
    }
  }
}

export class StationAreaBindStationInput {
  /**  */
  stationIds: number[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['stationIds'] = data['stationIds'];
      this['id'] = data['id'];
    }
  }
}

export class PagedResultDto_UserListByStationIdDto {
  /**  */
  totalCount: number;

  /**  */
  items: UserListByStationIdDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class UserListByStationIdDto {
  /**  */
  userName: string;

  /**  */
  lastModificationTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['userName'] = data['userName'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_StationOrganizationUserDto {
  /**  */
  items: StationOrganizationUserDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class StationOrganizationUserDto {
  /**  */
  displayName: string;

  /**  */
  parentId: number;

  /**  */
  userListDtos: StationUserListDto[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['displayName'] = data['displayName'];
      this['parentId'] = data['parentId'];
      this['userListDtos'] = data['userListDtos'];
      this['id'] = data['id'];
    }
  }
}

export class StationUserListDto {
  /**  */
  userId: number;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['userName'] = data['userName'];
    }
  }
}

export class ListResultDto_StationDto {
  /**  */
  items: StationDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class PagedResultDto_TenantListDto {
  /**  */
  totalCount: number;

  /**  */
  items: TenantListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class TenantListDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  editionDisplayName: string;

  /**  */
  connectionString: string;

  /**  */
  isActive: boolean;

  /**  */
  creationTime: string;

  /**  */
  subscriptionEndDateUtc: string;

  /**  */
  editionId: number;

  /**  */
  isInTrialPeriod: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['editionDisplayName'] = data['editionDisplayName'];
      this['connectionString'] = data['connectionString'];
      this['isActive'] = data['isActive'];
      this['creationTime'] = data['creationTime'];
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc'];
      this['editionId'] = data['editionId'];
      this['isInTrialPeriod'] = data['isInTrialPeriod'];
      this['id'] = data['id'];
    }
  }
}

export class CreateTenantInput {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  adminEmailAddress: string;

  /**  */
  adminPassword: string;

  /**  */
  connectionString: string;

  /**  */
  shouldChangePasswordOnNextLogin: boolean;

  /**  */
  sendActivationEmail: boolean;

  /**  */
  editionId: number;

  /**  */
  isActive: boolean;

  /**  */
  subscriptionEndDateUtc: string;

  /**  */
  isInTrialPeriod: boolean;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['adminEmailAddress'] = data['adminEmailAddress'];
      this['adminPassword'] = data['adminPassword'];
      this['connectionString'] = data['connectionString'];
      this['shouldChangePasswordOnNextLogin'] = data['shouldChangePasswordOnNextLogin'];
      this['sendActivationEmail'] = data['sendActivationEmail'];
      this['editionId'] = data['editionId'];
      this['isActive'] = data['isActive'];
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc'];
      this['isInTrialPeriod'] = data['isInTrialPeriod'];
    }
  }
}

export class TenantEditDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  connectionString: string;

  /**  */
  editionId: number;

  /**  */
  isActive: boolean;

  /**  */
  subscriptionEndDateUtc: string;

  /**  */
  isInTrialPeriod: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['connectionString'] = data['connectionString'];
      this['editionId'] = data['editionId'];
      this['isActive'] = data['isActive'];
      this['subscriptionEndDateUtc'] = data['subscriptionEndDateUtc'];
      this['isInTrialPeriod'] = data['isInTrialPeriod'];
      this['id'] = data['id'];
    }
  }
}

export class GetTenantFeaturesEditOutput {
  /**  */
  featureValues: NameValueDto[];

  /**  */
  features: FlatFeatureDto[];

  constructor(data?: any) {
    if (data) {
      this['featureValues'] = data['featureValues'];
      this['features'] = data['features'];
    }
  }
}

export class UpdateTenantFeaturesInput {
  /**  */
  id: number;

  /**  */
  featureValues: NameValueDto[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['featureValues'] = data['featureValues'];
    }
  }
}

export class EntityDto {
  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
    }
  }
}

export class GetMemberActivityOutput {
  /**  */
  memberActivities: MemberActivity[];

  constructor(data?: any) {
    if (data) {
      this['memberActivities'] = data['memberActivities'];
    }
  }
}

export class MemberActivity {
  /**  */
  name: string;

  /**  */
  earnings: string;

  /**  */
  cases: number;

  /**  */
  closed: number;

  /**  */
  rate: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['earnings'] = data['earnings'];
      this['cases'] = data['cases'];
      this['closed'] = data['closed'];
      this['rate'] = data['rate'];
    }
  }
}

export class GetDashboardDataOutput {
  /**  */
  totalProfit: number;

  /**  */
  newFeedbacks: number;

  /**  */
  newOrders: number;

  /**  */
  newUsers: number;

  /**  */
  salesSummary: SalesSummaryData[];

  /**  */
  totalSales: number;

  /**  */
  revenue: number;

  /**  */
  expenses: number;

  /**  */
  growth: number;

  /**  */
  transactionPercent: number;

  /**  */
  newVisitPercent: number;

  /**  */
  bouncePercent: number;

  /**  */
  dailySales: number[];

  /**  */
  profitShares: number[];

  constructor(data?: any) {
    if (data) {
      this['totalProfit'] = data['totalProfit'];
      this['newFeedbacks'] = data['newFeedbacks'];
      this['newOrders'] = data['newOrders'];
      this['newUsers'] = data['newUsers'];
      this['salesSummary'] = data['salesSummary'];
      this['totalSales'] = data['totalSales'];
      this['revenue'] = data['revenue'];
      this['expenses'] = data['expenses'];
      this['growth'] = data['growth'];
      this['transactionPercent'] = data['transactionPercent'];
      this['newVisitPercent'] = data['newVisitPercent'];
      this['bouncePercent'] = data['bouncePercent'];
      this['dailySales'] = data['dailySales'];
      this['profitShares'] = data['profitShares'];
    }
  }
}

export class SalesSummaryData {
  /**  */
  period: string;

  /**  */
  sales: number;

  /**  */
  profit: number;

  constructor(data?: any) {
    if (data) {
      this['period'] = data['period'];
      this['sales'] = data['sales'];
      this['profit'] = data['profit'];
    }
  }
}

export class GetSalesSummaryOutput {
  /**  */
  salesSummary: SalesSummaryData[];

  constructor(data?: any) {
    if (data) {
      this['salesSummary'] = data['salesSummary'];
    }
  }
}

export class GetRegionalStatsInput {
  constructor(data?: any) {
    if (data) {
    }
  }
}

export class GetRegionalStatsOutput {
  /**  */
  stats: RegionalStatCountry[];

  constructor(data?: any) {
    if (data) {
      this['stats'] = data['stats'];
    }
  }
}

export class RegionalStatCountry {
  /**  */
  countryName: string;

  /**  */
  sales: number;

  /**  */
  change: number[];

  /**  */
  averagePrice: number;

  /**  */
  totalPrice: number;

  constructor(data?: any) {
    if (data) {
      this['countryName'] = data['countryName'];
      this['sales'] = data['sales'];
      this['change'] = data['change'];
      this['averagePrice'] = data['averagePrice'];
      this['totalPrice'] = data['totalPrice'];
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
  /**  */
  transactionPercent: number;

  /**  */
  newVisitPercent: number;

  /**  */
  bouncePercent: number;

  constructor(data?: any) {
    if (data) {
      this['transactionPercent'] = data['transactionPercent'];
      this['newVisitPercent'] = data['newVisitPercent'];
      this['bouncePercent'] = data['bouncePercent'];
    }
  }
}
export enum EnumRegisterTenantInputSubscriptionStartType {
  'Free' = 'Free',
  'Trial' = 'Trial',
  'Paid' = 'Paid'
}
export enum EnumRegisterTenantInputGateway {
  'Paypal' = 'Paypal'
}
export class RegisterTenantInput {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  adminEmailAddress: string;

  /**  */
  adminPassword: string;

  /**  */
  captchaResponse: string;

  /**  */
  subscriptionStartType: EnumRegisterTenantInputSubscriptionStartType;

  /**  */
  gateway: EnumRegisterTenantInputGateway;

  /**  */
  editionId: number;

  /**  */
  paymentId: string;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['adminEmailAddress'] = data['adminEmailAddress'];
      this['adminPassword'] = data['adminPassword'];
      this['captchaResponse'] = data['captchaResponse'];
      this['subscriptionStartType'] = data['subscriptionStartType'];
      this['gateway'] = data['gateway'];
      this['editionId'] = data['editionId'];
      this['paymentId'] = data['paymentId'];
    }
  }
}

export class RegisterTenantOutput {
  /**  */
  tenantId: number;

  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  isTenantActive: boolean;

  /**  */
  isActive: boolean;

  /**  */
  isEmailConfirmationRequired: boolean;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['tenancyName'] = data['tenancyName'];
      this['name'] = data['name'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['isTenantActive'] = data['isTenantActive'];
      this['isActive'] = data['isActive'];
      this['isEmailConfirmationRequired'] = data['isEmailConfirmationRequired'];
    }
  }
}

export class EditionsSelectOutput {
  /**  */
  allFeatures: FlatFeatureSelectDto[];

  /**  */
  editionsWithFeatures: EditionWithFeaturesDto[];

  /**  */
  tenantEditionId: number;

  constructor(data?: any) {
    if (data) {
      this['allFeatures'] = data['allFeatures'];
      this['editionsWithFeatures'] = data['editionsWithFeatures'];
      this['tenantEditionId'] = data['tenantEditionId'];
    }
  }
}

export class FlatFeatureSelectDto {
  /**  */
  parentName: string;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  defaultValue: string;

  /**  */
  inputType: IInputType;

  /**  */
  textHtmlColor: string;

  constructor(data?: any) {
    if (data) {
      this['parentName'] = data['parentName'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['defaultValue'] = data['defaultValue'];
      this['inputType'] = data['inputType'];
      this['textHtmlColor'] = data['textHtmlColor'];
    }
  }
}

export class EditionWithFeaturesDto {
  /**  */
  edition: EditionSelectDto;

  /**  */
  featureValues: NameValueDto[];

  constructor(data?: any) {
    if (data) {
      this['edition'] = data['edition'];
      this['featureValues'] = data['featureValues'];
    }
  }
}

export class IInputType {
  /**  */
  name: string;

  /**  */
  attributes: object;

  /**  */
  validator: IValueValidator;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['attributes'] = data['attributes'];
      this['validator'] = data['validator'];
    }
  }
}

export class TenantSettingsEditDto {
  /**  */
  general: GeneralSettingsEditDto;

  /**  */
  userManagement: TenantUserManagementSettingsEditDto;

  /**  */
  email: EmailSettingsEditDto;

  /**  */
  ldap: LdapSettingsEditDto;

  /**  */
  security: SecuritySettingsEditDto;

  /**  */
  billing: TenantBillingSettingsEditDto;

  constructor(data?: any) {
    if (data) {
      this['general'] = data['general'];
      this['userManagement'] = data['userManagement'];
      this['email'] = data['email'];
      this['ldap'] = data['ldap'];
      this['security'] = data['security'];
      this['billing'] = data['billing'];
    }
  }
}

export class TenantUserManagementSettingsEditDto {
  /**  */
  allowSelfRegistration: boolean;

  /**  */
  isNewRegisteredUserActiveByDefault: boolean;

  /**  */
  isEmailConfirmationRequiredForLogin: boolean;

  /**  */
  useCaptchaOnRegistration: boolean;

  constructor(data?: any) {
    if (data) {
      this['allowSelfRegistration'] = data['allowSelfRegistration'];
      this['isNewRegisteredUserActiveByDefault'] = data['isNewRegisteredUserActiveByDefault'];
      this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin'];
      this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration'];
    }
  }
}

export class LdapSettingsEditDto {
  /**  */
  isModuleEnabled: boolean;

  /**  */
  isEnabled: boolean;

  /**  */
  domain: string;

  /**  */
  userName: string;

  /**  */
  password: string;

  constructor(data?: any) {
    if (data) {
      this['isModuleEnabled'] = data['isModuleEnabled'];
      this['isEnabled'] = data['isEnabled'];
      this['domain'] = data['domain'];
      this['userName'] = data['userName'];
      this['password'] = data['password'];
    }
  }
}

export class TenantBillingSettingsEditDto {
  /**  */
  legalName: string;

  /**  */
  address: string;

  /**  */
  taxVatNo: string;

  constructor(data?: any) {
    if (data) {
      this['legalName'] = data['legalName'];
      this['address'] = data['address'];
      this['taxVatNo'] = data['taxVatNo'];
    }
  }
}

export class ListResultDto_TerminalPortConfigListDto {
  /**  */
  items: TerminalPortConfigListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class TerminalPortConfigListDto {
  /**  */
  lastModificationTime: string;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  name: string;

  /**  */
  portType: number;

  /**  */
  terminalId: number;

  /**  */
  protocolType: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['name'] = data['name'];
      this['portType'] = data['portType'];
      this['terminalId'] = data['terminalId'];
      this['protocolType'] = data['protocolType'];
      this['id'] = data['id'];
    }
  }
}

export class GetTerminalPortConfigOutput {
  /**  */
  terminalPortConfig: TerminalPortConfigEditDto;

  /**  */
  terminalPortBindEquipments: TerminalPortBindEquipmentDto[];

  constructor(data?: any) {
    if (data) {
      this['terminalPortConfig'] = data['terminalPortConfig'];
      this['terminalPortBindEquipments'] = data['terminalPortBindEquipments'];
    }
  }
}

export class TerminalPortConfigEditDto {
  /**  */
  lastModificationTime: string;

  /**  */
  creationTime: string;

  /**  */
  creatorUserId: number;

  /**  */
  name: string;

  /**  */
  portType: number;

  /**  */
  terminalId: number;

  /**  */
  protocolType: number;

  /**  */
  config: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['lastModificationTime'] = data['lastModificationTime'];
      this['creationTime'] = data['creationTime'];
      this['creatorUserId'] = data['creatorUserId'];
      this['name'] = data['name'];
      this['portType'] = data['portType'];
      this['terminalId'] = data['terminalId'];
      this['protocolType'] = data['protocolType'];
      this['config'] = data['config'];
      this['id'] = data['id'];
    }
  }
}

export class TerminalPortBindEquipmentDto {
  /**  */
  equipmentId: number;

  /**  */
  productId: number;

  /**  */
  terminalPortConfigId: number;

  /**  */
  terminalId: number;

  /**  */
  canChanged: boolean;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['productId'] = data['productId'];
      this['terminalPortConfigId'] = data['terminalPortConfigId'];
      this['terminalId'] = data['terminalId'];
      this['canChanged'] = data['canChanged'];
    }
  }
}

export class CreateOrUpdateTerminalPortConfigInput {
  /**  */
  configDto: CreateOrUpdateTerminalPortConfigDto;

  constructor(data?: any) {
    if (data) {
      this['configDto'] = data['configDto'];
    }
  }
}

export class CreateOrUpdateTerminalPortConfigDto {
  /**  */
  name: string;

  /**  */
  portType: number;

  /**  */
  config: string;

  /**  */
  terminalId: number;

  /**  */
  protocolType: number;

  /**  */
  equipmentIds: number[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['portType'] = data['portType'];
      this['config'] = data['config'];
      this['terminalId'] = data['terminalId'];
      this['protocolType'] = data['protocolType'];
      this['equipmentIds'] = data['equipmentIds'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_TerminalListDto {
  /**  */
  items: TerminalListDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class TerminalListDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  creationTime: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['creationTime'] = data['creationTime'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['id'] = data['id'];
    }
  }
}

export class GetTerminalEditOutput {
  /**  */
  terminal: TerminalEditDto;

  constructor(data?: any) {
    if (data) {
      this['terminal'] = data['terminal'];
    }
  }
}

export class TerminalEditDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  accessKey: string;

  /**  */
  accessSecret: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['accessKey'] = data['accessKey'];
      this['accessSecret'] = data['accessSecret'];
      this['id'] = data['id'];
    }
  }
}

export class CreateOrUpdateTerminalInput {
  /**  */
  terminal: CreateOrUpdateTerminalDto;

  constructor(data?: any) {
    if (data) {
      this['terminal'] = data['terminal'];
    }
  }
}

export class CreateOrUpdateTerminalDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['id'] = data['id'];
    }
  }
}

export class ResetTerminalInput {
  /**  */
  terminalId: number;

  constructor(data?: any) {
    if (data) {
      this['terminalId'] = data['terminalId'];
    }
  }
}

export class SendControlOperatingInput {
  /**  */
  equipmentId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
    }
  }
}

export class TermperaturePointsOutput {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  registAddress: string;

  /**  */
  termperature: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['registAddress'] = data['registAddress'];
      this['termperature'] = data['termperature'];
    }
  }
}

export class AddOrUpdateTicketFolderInput {
  /**  */
  ticketFolder: TicketFolderDto;

  constructor(data?: any) {
    if (data) {
      this['ticketFolder'] = data['ticketFolder'];
    }
  }
}

export class TicketFolderDto {
  /**  */
  id: string;

  /**  */
  stationId: number;

  /**  */
  parentId: string;

  /**  */
  name: string;

  /**  */
  isUpdateRiskItem: boolean;

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['isUpdateRiskItem'] = data['isUpdateRiskItem'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class ResultBoolean {
  /**  */
  value: boolean;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
    }
  }
}

export class AddOrUpdateTicketFolderRiskInfoInput {
  /**  */
  ticketFolderIds: string[];

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketFolderIds'] = data['ticketFolderIds'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class ListResultDto_IdNameTree {
  /**  */
  items: IdNameTree[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class IdNameTree {
  /**  */
  parentId: string;

  /**  */
  stationId: number;

  /**  */
  childrens: IdNameTree[];

  /**  */
  id: string;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId'];
      this['stationId'] = data['stationId'];
      this['childrens'] = data['childrens'];
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}

export class ListResultDto_GetStationTicketFolderChildrenWithTicketOutput {
  /**  */
  items: GetStationTicketFolderChildrenWithTicketOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class GetStationTicketFolderChildrenWithTicketOutput {
  /**  */
  parentId: string;

  /**  */
  stationId: number;

  /**  */
  childrens: GetStationTicketFolderChildrenWithTicketOutput[];

  /**  */
  items: TicketListItemDto[];

  /**  */
  id: string;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['parentId'] = data['parentId'];
      this['stationId'] = data['stationId'];
      this['childrens'] = data['childrens'];
      this['items'] = data['items'];
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}
export enum EnumTicketListItemDtoTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketListItemDtoState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketListItemDtoTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketListItemDto {
  /**  */
  taskNo: string;

  /**  */
  ticketExecOrder: EnumTicketListItemDtoTicketExecOrder;

  /**  */
  writeTime: string;

  /**  */
  state: EnumTicketListItemDtoState;

  /**  */
  note: string;

  /**  */
  ticketType: EnumTicketListItemDtoTicketType;

  /**  */
  stationId: number;

  /**  */
  ticketOperateProperty: TicketOperatePropertyDto;

  /**  */
  isLoading: boolean;

  /**  */
  id: string;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['taskNo'] = data['taskNo'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['writeTime'] = data['writeTime'];
      this['state'] = data['state'];
      this['note'] = data['note'];
      this['ticketType'] = data['ticketType'];
      this['stationId'] = data['stationId'];
      this['ticketOperateProperty'] = data['ticketOperateProperty'];
      this['isLoading'] = data['isLoading'];
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}

export class TicketOperatePropertyDto {
  /**  */
  canDirectCancel: boolean;

  /**  */
  canEdit: boolean;

  /**  */
  canDelete: boolean;

  /**  */
  canView: boolean;

  /**  */
  canExecute: boolean;

  /**  */
  canApproveToExecute: boolean;

  /**  */
  canApproveCancel: boolean;

  /**  */
  canApproveBreak: boolean;

  /**  */
  canFinish: boolean;

  /**  */
  canApplyForBreak: boolean;

  /**  */
  canApplyForCancel: boolean;

  /**  */
  canCommit: boolean;

  /**  */
  canApprove: boolean;

  /**  */
  canConfirm: boolean;

  /**  */
  canAssignTicketPersonas: boolean;

  constructor(data?: any) {
    if (data) {
      this['canDirectCancel'] = data['canDirectCancel'];
      this['canEdit'] = data['canEdit'];
      this['canDelete'] = data['canDelete'];
      this['canView'] = data['canView'];
      this['canExecute'] = data['canExecute'];
      this['canApproveToExecute'] = data['canApproveToExecute'];
      this['canApproveCancel'] = data['canApproveCancel'];
      this['canApproveBreak'] = data['canApproveBreak'];
      this['canFinish'] = data['canFinish'];
      this['canApplyForBreak'] = data['canApplyForBreak'];
      this['canApplyForCancel'] = data['canApplyForCancel'];
      this['canCommit'] = data['canCommit'];
      this['canApprove'] = data['canApprove'];
      this['canConfirm'] = data['canConfirm'];
      this['canAssignTicketPersonas'] = data['canAssignTicketPersonas'];
    }
  }
}

export class ListResultDto_IdName {
  /**  */
  items: IdName[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class IdName {
  /**  */
  id: string;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}

export class GetTicketFolderOutput {
  /**  */
  id: string;

  /**  */
  stationId: number;

  /**  */
  parentId: string;

  /**  */
  name: string;

  /**  */
  isUpdateRiskItem: boolean;

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['stationId'] = data['stationId'];
      this['parentId'] = data['parentId'];
      this['name'] = data['name'];
      this['isUpdateRiskItem'] = data['isUpdateRiskItem'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class AssignFolderTicketsInput {
  /**  */
  ticketFolderId: string;

  /**  */
  ticketTypicalIds: string[];

  constructor(data?: any) {
    if (data) {
      this['ticketFolderId'] = data['ticketFolderId'];
      this['ticketTypicalIds'] = data['ticketTypicalIds'];
    }
  }
}

export class ListResultDto_TicketListItemDto {
  /**  */
  items: TicketListItemDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class ApiResultOutput_List_TicketRoleDto {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: TicketRoleDto[];

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class TicketRoleDto {
  /**  */
  userId: number;

  /**  */
  name: string;

  /**  */
  userName: string;

  /**  */
  roleType: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['name'] = data['name'];
      this['userName'] = data['userName'];
      this['roleType'] = data['roleType'];
    }
  }
}

export class AddOrUpdateTicketTaskInput {
  /**  */
  ticketTask: TicketTaskDto;

  /**  */
  ticketItemTasks: TicketItemTaskDto[];

  /**  */
  ticketTaskPersonas: TicketTaskPersonaDto[];

  /**  */
  riskItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketTask'] = data['ticketTask'];
      this['ticketItemTasks'] = data['ticketItemTasks'];
      this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
      this['riskItems'] = data['riskItems'];
    }
  }
}
export enum EnumTicketTaskDtoTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTaskDtoTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTaskDtoState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTaskDtoTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTaskDtoTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTaskDto {
  /**  */
  ticketOperateType: EnumTicketTaskDtoTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTaskDtoTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTaskDtoState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTaskDtoTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTaskDtoTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTaskDtoOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskDtoRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskDtoOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTaskDto {
  /**  */
  id: string;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTaskDtoOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTaskDtoRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTaskDtoOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
    }
  }
}

export class TicketTaskPersonaDto {
  /**  */
  id: string;

  /**  */
  ticketId: string;

  /**  */
  roleType: string;

  /**  */
  roleTypeName: string;

  /**  */
  userId: number;

  /**  */
  userName: string;

  /**  */
  isConfirm: boolean;

  /**  */
  isPass: boolean;

  /**  */
  note: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['ticketId'] = data['ticketId'];
      this['roleType'] = data['roleType'];
      this['roleTypeName'] = data['roleTypeName'];
      this['userId'] = data['userId'];
      this['userName'] = data['userName'];
      this['isConfirm'] = data['isConfirm'];
      this['isPass'] = data['isPass'];
      this['note'] = data['note'];
    }
  }
}

export class AssignTicketPersonaesInput {
  /**  */
  ticketId: string;

  /**  */
  ticketPersonaes: TicketTaskPersonaDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['ticketPersonaes'] = data['ticketPersonaes'];
    }
  }
}

export class CommitTicketInput {
  /**  */
  ticketId: string;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
    }
  }
}

export class ConfirmTicketInput {
  /**  */
  ticketId: string;

  /**  */
  isPass: boolean;

  /**  */
  note: string;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['isPass'] = data['isPass'];
      this['note'] = data['note'];
    }
  }
}

export class ApproveTicketInput {
  /**  */
  ticketId: string;

  /**  */
  isPass: boolean;

  /**  */
  note: string;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['isPass'] = data['isPass'];
      this['note'] = data['note'];
    }
  }
}

export class ExecuteTicketInput {
  /**  */
  ticketId: string;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
    }
  }
}

export class FinishTicketInput {
  /**  */
  ticketId: string;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
    }
  }
}

export class UpdateTicketItemsStatusInput {
  /**  */
  ticketId: string;

  /**  */
  ticketItems: UpdateStatusTicketItemDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['ticketItems'] = data['ticketItems'];
    }
  }
}
export enum EnumUpdateStatusTicketItemDtoOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export enum EnumUpdateStatusTicketItemDtoRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export class UpdateStatusTicketItemDto {
  /**  */
  ticketItemId: string;

  /**  */
  operateResult: EnumUpdateStatusTicketItemDtoOperateResult;

  /**  */
  realOperateMode: EnumUpdateStatusTicketItemDtoRealOperateMode;

  /**  */
  operateTime: string;

  /**  */
  finished: boolean;

  /**  */
  note: string;

  /**  */
  deviceStateInfo: TicketItemDeviceStateDto;

  constructor(data?: any) {
    if (data) {
      this['ticketItemId'] = data['ticketItemId'];
      this['operateResult'] = data['operateResult'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateTime'] = data['operateTime'];
      this['finished'] = data['finished'];
      this['note'] = data['note'];
      this['deviceStateInfo'] = data['deviceStateInfo'];
    }
  }
}
export enum EnumTicketItemDeviceStateDtoCommonLockOperate {
  'NotCommonLockOperate' = 'NotCommonLockOperate',
  'HangCommonLock' = 'HangCommonLock',
  'RemoveCommonLock' = 'RemoveCommonLock'
}
export class TicketItemDeviceStateDto {
  /**  */
  deviceId: number;

  /**  */
  rfids: string[];

  /**  */
  commonLockOperate: EnumTicketItemDeviceStateDtoCommonLockOperate;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['rfids'] = data['rfids'];
      this['commonLockOperate'] = data['commonLockOperate'];
    }
  }
}

export class ApiResultOutput_UpdateTicketItemsStatusOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: UpdateTicketItemsStatusOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class UpdateTicketItemsStatusOutput {
  /**  */
  failTicketItems: TicketItemUpdateResultOutput[];

  constructor(data?: any) {
    if (data) {
      this['failTicketItems'] = data['failTicketItems'];
    }
  }
}
export enum EnumTicketItemUpdateResultOutputErrorType {
  'NotFound' = 'NotFound',
  'PreItemNotFinished' = 'PreItemNotFinished',
  'SaveException' = 'SaveException'
}
export class TicketItemUpdateResultOutput {
  /**  */
  ticketItemId: string;

  /**  */
  errorType: EnumTicketItemUpdateResultOutputErrorType;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['ticketItemId'] = data['ticketItemId'];
      this['errorType'] = data['errorType'];
      this['message'] = data['message'];
    }
  }
}

export class UpdateTicketRiskItemsStatusInput {
  /**  */
  ticketId: string;

  /**  */
  riskItems: UpdateStatusTicketRiskItemDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['riskItems'] = data['riskItems'];
    }
  }
}

export class UpdateStatusTicketRiskItemDto {
  /**  */
  riskItemId: string;

  /**  */
  finished: boolean;

  /**  */
  sequence: number;

  /**  */
  operationTime: string;

  constructor(data?: any) {
    if (data) {
      this['riskItemId'] = data['riskItemId'];
      this['finished'] = data['finished'];
      this['sequence'] = data['sequence'];
      this['operationTime'] = data['operationTime'];
    }
  }
}

export class ApiResultOutput_UpdateTicketRiskItemsStatusOutput {
  /**  */
  result: boolean;

  /**  */
  code: number;

  /**  */
  data: UpdateTicketRiskItemsStatusOutput;

  /**  */
  message: string;

  constructor(data?: any) {
    if (data) {
      this['result'] = data['result'];
      this['code'] = data['code'];
      this['data'] = data['data'];
      this['message'] = data['message'];
    }
  }
}

export class UpdateTicketRiskItemsStatusOutput {
  /**  */
  failTicketRiskItems: TicketRiskItemUpdateResultOutput[];

  constructor(data?: any) {
    if (data) {
      this['failTicketRiskItems'] = data['failTicketRiskItems'];
    }
  }
}
export enum EnumTicketRiskItemUpdateResultOutputErrorType {
  'NotFound' = 'NotFound',
  'PreItemNotFinished' = 'PreItemNotFinished',
  'SaveException' = 'SaveException'
}
export class TicketRiskItemUpdateResultOutput {
  /**  */
  riskItemId: string;

  /**  */
  message: string;

  /**  */
  errorType: EnumTicketRiskItemUpdateResultOutputErrorType;

  constructor(data?: any) {
    if (data) {
      this['riskItemId'] = data['riskItemId'];
      this['message'] = data['message'];
      this['errorType'] = data['errorType'];
    }
  }
}
export enum EnumTicketTaskOutputTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTaskOutputTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTaskOutputState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTaskOutputTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTaskOutputTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTaskOutput {
  /**  */
  stateDescription: string;

  /**  */
  stationName: string;

  /**  */
  approverName: string;

  /**  */
  ticketItemExecutingNo: number;

  /**  */
  ticketOperateProperty: TicketOperatePropertyDto;

  /**  */
  ticketItemTasks: TicketItemTaskOutput[];

  /**  */
  ticketTaskPersonas: TicketTaskPersonaOutput[];

  /**  */
  riskItems: RiskItemDto[];

  /**  */
  ticketOperateType: EnumTicketTaskOutputTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTaskOutputTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTaskOutputState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTaskOutputTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTaskOutputTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['stateDescription'] = data['stateDescription'];
      this['stationName'] = data['stationName'];
      this['approverName'] = data['approverName'];
      this['ticketItemExecutingNo'] = data['ticketItemExecutingNo'];
      this['ticketOperateProperty'] = data['ticketOperateProperty'];
      this['ticketItemTasks'] = data['ticketItemTasks'];
      this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
      this['riskItems'] = data['riskItems'];
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTaskOutputOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskOutputRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTaskOutputOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTaskOutput {
  /**  */
  operateLockInfo: TicketItemOperateLockInfoDto;

  /**  */
  riskItems: RiskItemDto[];

  /**  */
  pictures: string[];

  /**  */
  deviceName: string;

  /**  */
  id: string;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTaskOutputOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTaskOutputRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTaskOutputOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  constructor(data?: any) {
    if (data) {
      this['operateLockInfo'] = data['operateLockInfo'];
      this['riskItems'] = data['riskItems'];
      this['pictures'] = data['pictures'];
      this['deviceName'] = data['deviceName'];
      this['id'] = data['id'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
    }
  }
}

export class TicketTaskPersonaOutput {
  /**  */
  sortId: number;

  /**  */
  id: string;

  /**  */
  ticketId: string;

  /**  */
  roleType: string;

  /**  */
  roleTypeName: string;

  /**  */
  userId: number;

  /**  */
  userName: string;

  /**  */
  isConfirm: boolean;

  /**  */
  isPass: boolean;

  /**  */
  note: string;

  constructor(data?: any) {
    if (data) {
      this['sortId'] = data['sortId'];
      this['id'] = data['id'];
      this['ticketId'] = data['ticketId'];
      this['roleType'] = data['roleType'];
      this['roleTypeName'] = data['roleTypeName'];
      this['userId'] = data['userId'];
      this['userName'] = data['userName'];
      this['isConfirm'] = data['isConfirm'];
      this['isPass'] = data['isPass'];
      this['note'] = data['note'];
    }
  }
}
export enum EnumTicketItemOperateLockInfoDtoLockType {
  'NoKey' = 'NoKey',
  'JXLock' = 'JXLock',
  'DBMLock' = 'DBMLock',
  'DKLock' = 'DKLock',
  'DXDKLock' = 'DXDKLock',
  'GSNYD' = 'GSNYD',
  'WYYD' = 'WYYD',
  'YYYD' = 'YYYD',
  'CJFKLock' = 'CJFKLock',
  'FKSDBMLock' = 'FKSDBMLock',
  'ZNLock' = 'ZNLock',
  'ZNYB' = 'ZNYB',
  'YYDWZJC' = 'YYDWZJC',
  'WYDWZJC' = 'WYDWZJC',
  'JXDBMLock' = 'JXDBMLock',
  'DBMLock_2H' = 'DBMLock_2H',
  'DBMLock_3H' = 'DBMLock_3H',
  'XJLock' = 'XJLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_GSN2L' = 'WX_GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'ZNHWMLock' = 'ZNHWMLock',
  'GSN2E' = 'GSN2E',
  'GSN2YD' = 'GSN2YD',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'WX_DZBQ' = 'WX_DZBQ',
  'WX_BSJXLock' = 'WX_BSJXLock',
  'WX_SGWZSLock' = 'WX_SGWZSLock',
  'SGWZSLock' = 'SGWZSLock',
  'TBLock' = 'TBLock',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'ZNSXLock' = 'ZNSXLock',
  'GYJLYDQ' = 'GYJLYDQ',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export enum EnumTicketItemOperateLockInfoDtoLockPropertyType {
  'NoKey' = 'NoKey',
  'XHJGLock' = 'XHJGLock',
  'SLGLock' = 'SLGLock',
  'LTLock' = 'LTLock',
  'BSQLock' = 'BSQLock',
  'BSLock' = 'BSLock',
  'CXLock' = 'CXLock',
  'FDHLock' = 'FDHLock',
  'PMLock' = 'PMLock',
  'LGLock' = 'LGLock',
  'FHMLock' = 'FHMLock',
  'YKLock' = 'YKLock',
  'HWGMLock' = 'HWGMLock',
  'WX_JXLock' = 'WX_JXLock',
  'WX_DBMLock' = 'WX_DBMLock',
  'GSN2L' = 'GSN2L',
  'WX_ZNMBLock' = 'WX_ZNMBLock',
  'WX_ZNFHMLock' = 'WX_ZNFHMLock',
  'WX_SKJXLock' = 'WX_SKJXLock',
  'GSN2YD' = 'GSN2YD',
  'XJLock' = 'XJLock',
  'JM_GSN2YD' = 'JM_GSN2YD',
  'GLDBP' = 'GLDBP',
  'GLWYBS' = 'GLWYBS',
  'LSGLGLock' = 'LSGLGLock',
  'WX_WZSZNMLock' = 'WX_WZSZNMLock',
  'LGLock_6A' = 'LGLock_6A',
  'WTJGLock' = 'WTJGLock',
  'DKHLock' = 'DKHLock'
}
export class TicketItemOperateLockInfoDto {
  /**  */
  rfid: string;

  /**  */
  lockType: EnumTicketItemOperateLockInfoDtoLockType;

  /**  */
  lockPropertyType: EnumTicketItemOperateLockInfoDtoLockPropertyType;

  /**  */
  ticketItemId: string;

  /**  */
  operationDesc: number;

  constructor(data?: any) {
    if (data) {
      this['rfid'] = data['rfid'];
      this['lockType'] = data['lockType'];
      this['lockPropertyType'] = data['lockPropertyType'];
      this['ticketItemId'] = data['ticketItemId'];
      this['operationDesc'] = data['operationDesc'];
    }
  }
}

export class PagedResultDto_TicketTaskListDto {
  /**  */
  totalCount: number;

  /**  */
  items: TicketTaskListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}
export enum EnumTicketTaskListDtoTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTaskListDtoState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTaskListDtoTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export enum EnumTicketTaskListDtoTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export class TicketTaskListDto {
  /**  */
  taskNo: string;

  /**  */
  ticketExecOrder: EnumTicketTaskListDtoTicketExecOrder;

  /**  */
  writeTime: string;

  /**  */
  state: EnumTicketTaskListDtoState;

  /**  */
  stateDescription: string;

  /**  */
  note: string;

  /**  */
  ticketType: EnumTicketTaskListDtoTicketType;

  /**  */
  stationId: number;

  /**  */
  ticketAppoveLevel: EnumTicketTaskListDtoTicketAppoveLevel;

  /**  */
  ticketOperateProperty: TicketOperatePropertyDto;

  /**  */
  ticketTaskPersonas: TicketTaskPersonaOutput[];

  /**  */
  id: string;

  /**  */
  name: string;

  constructor(data?: any) {
    if (data) {
      this['taskNo'] = data['taskNo'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['writeTime'] = data['writeTime'];
      this['state'] = data['state'];
      this['stateDescription'] = data['stateDescription'];
      this['note'] = data['note'];
      this['ticketType'] = data['ticketType'];
      this['stationId'] = data['stationId'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['ticketOperateProperty'] = data['ticketOperateProperty'];
      this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
      this['id'] = data['id'];
      this['name'] = data['name'];
    }
  }
}

export class ListResultDto_TicketItemTaskDto {
  /**  */
  items: TicketItemTaskDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class CheckDeviceStatusForTicketTaskExcutingInput {
  /**  */
  deviceId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
    }
  }
}

export class AnalyseSentenceInput {
  /**  */
  stationId: number;

  /**  */
  sentences: AnalyseSentenceDto[];

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['sentences'] = data['sentences'];
    }
  }
}

export class AnalyseSentenceDto {
  /**  */
  no: number;

  /**  */
  ticketItemId: string;

  /**  */
  text: string;

  constructor(data?: any) {
    if (data) {
      this['no'] = data['no'];
      this['ticketItemId'] = data['ticketItemId'];
      this['text'] = data['text'];
    }
  }
}

export class AnalyseSentenceOutput {
  /**  */
  analyseSentenceResults: AnalyseSentenceResultDto[];

  /**  */
  analyseRiskItemResults: AnalyseRiskItemResultDto[];

  constructor(data?: any) {
    if (data) {
      this['analyseSentenceResults'] = data['analyseSentenceResults'];
      this['analyseRiskItemResults'] = data['analyseRiskItemResults'];
    }
  }
}
export enum EnumAnalyseSentenceResultDtoOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumAnalyseSentenceResultDtoDeviceTermType {
  'Default' = 'Default',
  'ByLinkage' = 'ByLinkage',
  'AddBefault' = 'AddBefault',
  'AddAfter' = 'AddAfter',
  'Selectable' = 'Selectable'
}
export class AnalyseSentenceResultDto {
  /**  */
  deviceId: number;

  /**  */
  deviceName: string;

  /**  */
  operateMode: EnumAnalyseSentenceResultDtoOperateMode;

  /**  */
  deviceTermId: number;

  /**  */
  deviceTermType: EnumAnalyseSentenceResultDtoDeviceTermType;

  /**  */
  deviceBoardId: number;

  /**  */
  fromDeviceStateId: number;

  /**  */
  fromDeviceStateName: string;

  /**  */
  fromDeviceState: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  toDeviceStateName: string;

  /**  */
  toDeviceState: number;

  /**  */
  no: number;

  /**  */
  ticketItemId: string;

  /**  */
  text: string;

  constructor(data?: any) {
    if (data) {
      this['deviceId'] = data['deviceId'];
      this['deviceName'] = data['deviceName'];
      this['operateMode'] = data['operateMode'];
      this['deviceTermId'] = data['deviceTermId'];
      this['deviceTermType'] = data['deviceTermType'];
      this['deviceBoardId'] = data['deviceBoardId'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['fromDeviceStateName'] = data['fromDeviceStateName'];
      this['fromDeviceState'] = data['fromDeviceState'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['toDeviceStateName'] = data['toDeviceStateName'];
      this['toDeviceState'] = data['toDeviceState'];
      this['no'] = data['no'];
      this['ticketItemId'] = data['ticketItemId'];
      this['text'] = data['text'];
    }
  }
}

export class AnalyseRiskItemResultDto {
  /**  */
  ticketItemNo: number;

  /**  */
  ticketItemId: string;

  /**  */
  dangerSource: string;

  /**  */
  workStandard: string;

  constructor(data?: any) {
    if (data) {
      this['ticketItemNo'] = data['ticketItemNo'];
      this['ticketItemId'] = data['ticketItemId'];
      this['dangerSource'] = data['dangerSource'];
      this['workStandard'] = data['workStandard'];
    }
  }
}

export class IListResult_TicketItemOperateLockInfoDto {
  /**  */
  items: TicketItemOperateLockInfoDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class SingleAnalyseSentenceInput {
  /**  */
  stationId: number;

  /**  */
  deviceId: number;

  /**  */
  fromDeviceStateId: number;

  /**  */
  toDeviceStateId: number;

  /**  */
  text: string;

  /**  */
  ticketItemId: string;

  /**  */
  no: number;

  constructor(data?: any) {
    if (data) {
      this['stationId'] = data['stationId'];
      this['deviceId'] = data['deviceId'];
      this['fromDeviceStateId'] = data['fromDeviceStateId'];
      this['toDeviceStateId'] = data['toDeviceStateId'];
      this['text'] = data['text'];
      this['ticketItemId'] = data['ticketItemId'];
      this['no'] = data['no'];
    }
  }
}

export class SingleAnalyseSentenceOutput {
  /**  */
  analyseSentenceResult: AnalyseSentenceResultDto;

  /**  */
  analyseRiskItemResults: AnalyseRiskItemResultDto[];

  constructor(data?: any) {
    if (data) {
      this['analyseSentenceResult'] = data['analyseSentenceResult'];
      this['analyseRiskItemResults'] = data['analyseRiskItemResults'];
    }
  }
}

export class AddOrUpdateTicketTypicalInput {
  /**  */
  ticketTypical: TicketTypicalDto;

  /**  */
  ticketItems: TicketItemTypicalDto[];

  /**  */
  riskPrecontrolItems: RiskPrecontrolItemDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketTypical'] = data['ticketTypical'];
      this['ticketItems'] = data['ticketItems'];
      this['riskPrecontrolItems'] = data['riskPrecontrolItems'];
    }
  }
}
export enum EnumTicketTypicalDtoTicketOperateType {
  'MonitoringOperation' = 'MonitoringOperation',
  'OnePersonOperation' = 'OnePersonOperation'
}
export enum EnumTicketTypicalDtoTicketExecOrder {
  'OrderedExec' = 'OrderedExec',
  'UnorderedExec' = 'UnorderedExec',
  'CustomOrderExec' = 'CustomOrderExec'
}
export enum EnumTicketTypicalDtoState {
  'None' = 'None',
  'WaitCommit' = 'WaitCommit',
  'WaitConfirm' = 'WaitConfirm',
  'ConfirmNotPassed' = 'ConfirmNotPassed',
  'WaitGuardianConfirm' = 'WaitGuardianConfirm',
  'WaitApproverConfirm' = 'WaitApproverConfirm',
  'WaitMainApproverConfirm' = 'WaitMainApproverConfirm',
  'WaitApprove' = 'WaitApprove',
  'ApproveNotPassed' = 'ApproveNotPassed',
  'ReadyGo' = 'ReadyGo',
  'RiskItemExecuting' = 'RiskItemExecuting',
  'Executing' = 'Executing',
  'Pause' = 'Pause',
  'WaitApproveToCancel' = 'WaitApproveToCancel',
  'WaitApproveToBreak' = 'WaitApproveToBreak',
  'WaitApproveExtension' = 'WaitApproveExtension',
  'ExtensionReject' = 'ExtensionReject',
  'Finished' = 'Finished',
  'Break' = 'Break',
  'Cancel' = 'Cancel',
  'WaitReadOver' = 'WaitReadOver',
  'ReadOver' = 'ReadOver',
  'Archived' = 'Archived'
}
export enum EnumTicketTypicalDtoTicketAppoveLevel {
  'NoApprove' = 'NoApprove',
  'OneApprover' = 'OneApprover',
  'TwoApprover' = 'TwoApprover',
  'ThreeApprover' = 'ThreeApprover',
  'FoutApprover' = 'FoutApprover'
}
export enum EnumTicketTypicalDtoTicketType {
  'Task' = 'Task',
  'CentralizedControl' = 'CentralizedControl',
  'Common' = 'Common',
  'Chemistry' = 'Chemistry',
  'SteamEnginePro' = 'SteamEnginePro',
  'AshSulfur' = 'AshSulfur',
  'Overhual' = 'Overhual',
  'Furnace' = 'Furnace',
  'Lockset' = 'Lockset',
  'History' = 'History',
  'Typical' = 'Typical',
  'RiskTicket' = 'RiskTicket',
  'TypicalInvalid' = 'TypicalInvalid',
  'None' = 'None'
}
export class TicketTypicalDto {
  /**  */
  isDeleted: boolean;

  /**  */
  deletionTime: string;

  /**  */
  deleterUserId: number;

  /**  */
  ticketFolderId: string;

  /**  */
  ticketTaskId: string;

  /**  */
  ticketTypicalId: string;

  /**  */
  ticketOperateType: EnumTicketTypicalDtoTicketOperateType;

  /**  */
  ticketExecOrder: EnumTicketTypicalDtoTicketExecOrder;

  /**  */
  taskNo: string;

  /**  */
  title: string;

  /**  */
  state: EnumTicketTypicalDtoState;

  /**  */
  writeTime: string;

  /**  */
  taskBeginTime: string;

  /**  */
  taskEndTime: string;

  /**  */
  taskDeleteTime: string;

  /**  */
  taskName: string;

  /**  */
  stationId: number;

  /**  */
  writer: number;

  /**  */
  executor: number;

  /**  */
  committer: number;

  /**  */
  authenticationType: number;

  /**  */
  note: string;

  /**  */
  isNeedApprover: boolean;

  /**  */
  ticketAppoveLevel: EnumTicketTypicalDtoTicketAppoveLevel;

  /**  */
  riskTicketId: string;

  /**  */
  ticketType: EnumTicketTypicalDtoTicketType;

  /**  */
  docFilePath: string;

  /**  */
  approver: number;

  /**  */
  id: string;

  constructor(data?: any) {
    if (data) {
      this['isDeleted'] = data['isDeleted'];
      this['deletionTime'] = data['deletionTime'];
      this['deleterUserId'] = data['deleterUserId'];
      this['ticketFolderId'] = data['ticketFolderId'];
      this['ticketTaskId'] = data['ticketTaskId'];
      this['ticketTypicalId'] = data['ticketTypicalId'];
      this['ticketOperateType'] = data['ticketOperateType'];
      this['ticketExecOrder'] = data['ticketExecOrder'];
      this['taskNo'] = data['taskNo'];
      this['title'] = data['title'];
      this['state'] = data['state'];
      this['writeTime'] = data['writeTime'];
      this['taskBeginTime'] = data['taskBeginTime'];
      this['taskEndTime'] = data['taskEndTime'];
      this['taskDeleteTime'] = data['taskDeleteTime'];
      this['taskName'] = data['taskName'];
      this['stationId'] = data['stationId'];
      this['writer'] = data['writer'];
      this['executor'] = data['executor'];
      this['committer'] = data['committer'];
      this['authenticationType'] = data['authenticationType'];
      this['note'] = data['note'];
      this['isNeedApprover'] = data['isNeedApprover'];
      this['ticketAppoveLevel'] = data['ticketAppoveLevel'];
      this['riskTicketId'] = data['riskTicketId'];
      this['ticketType'] = data['ticketType'];
      this['docFilePath'] = data['docFilePath'];
      this['approver'] = data['approver'];
      this['id'] = data['id'];
    }
  }
}
export enum EnumTicketItemTypicalDtoOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalDtoRealOperateMode {
  'None' = 'None',
  'Normal' = 'Normal',
  'HintTip' = 'HintTip',
  'NoOperate' = 'NoOperate',
  'FinishedAfterConfirmed' = 'FinishedAfterConfirmed',
  'FinishedAfterBreak' = 'FinishedAfterBreak',
  'HandOnPlacard' = 'HandOnPlacard',
  'DismantlePlacard' = 'DismantlePlacard',
  'TemporaryDismantle' = 'TemporaryDismantle',
  'ScanCode' = 'ScanCode',
  'Remote' = 'Remote',
  'Repeat' = 'Repeat',
  'Skip' = 'Skip',
  'Delete' = 'Delete',
  'Reset' = 'Reset',
  'Error' = 'Error',
  'CommonLock' = 'CommonLock'
}
export enum EnumTicketItemTypicalDtoOperateResult {
  'None' = 'None',
  'Operated' = 'Operated',
  'Finished' = 'Finished'
}
export class TicketItemTypicalDto {
  /**  */
  deviceName: string;

  /**  */
  deviceDescription: string;

  /**  */
  id: string;

  /**  */
  ticketId: string;

  /**  */
  prevFinishedItemNos: string;

  /**  */
  no: number;

  /**  */
  displayNo: string;

  /**  */
  text: string;

  /**  */
  operationTime: string;

  /**  */
  ydTime: string;

  /**  */
  finished: boolean;

  /**  */
  operateMode: EnumTicketItemTypicalDtoOperateMode;

  /**  */
  realOperateMode: EnumTicketItemTypicalDtoRealOperateMode;

  /**  */
  operateResult: EnumTicketItemTypicalDtoOperateResult;

  /**  */
  curRfid: number;

  /**  */
  operationalTermId: number;

  /**  */
  fromState: number;

  /**  */
  toState: number;

  /**  */
  deviceId: number;

  /**  */
  isNeedGuardChecked: boolean;

  constructor(data?: any) {
    if (data) {
      this['deviceName'] = data['deviceName'];
      this['deviceDescription'] = data['deviceDescription'];
      this['id'] = data['id'];
      this['ticketId'] = data['ticketId'];
      this['prevFinishedItemNos'] = data['prevFinishedItemNos'];
      this['no'] = data['no'];
      this['displayNo'] = data['displayNo'];
      this['text'] = data['text'];
      this['operationTime'] = data['operationTime'];
      this['ydTime'] = data['ydTime'];
      this['finished'] = data['finished'];
      this['operateMode'] = data['operateMode'];
      this['realOperateMode'] = data['realOperateMode'];
      this['operateResult'] = data['operateResult'];
      this['curRfid'] = data['curRfid'];
      this['operationalTermId'] = data['operationalTermId'];
      this['fromState'] = data['fromState'];
      this['toState'] = data['toState'];
      this['deviceId'] = data['deviceId'];
      this['isNeedGuardChecked'] = data['isNeedGuardChecked'];
    }
  }
}

export class PagedResultDto_TicketListItemDto {
  /**  */
  totalCount: number;

  /**  */
  items: TicketListItemDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class ListResultDto_TicketItemTypicalDto {
  /**  */
  items: TicketItemTypicalDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class CreateTicketCurrentInput {
  /**  */
  ticketTypicalId: string;

  /**  */
  isAnalyseDeviceName: boolean;

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalId'] = data['ticketTypicalId'];
      this['isAnalyseDeviceName'] = data['isAnalyseDeviceName'];
    }
  }
}

export class AddOrUpdateCommitInput {
  /**  */
  ticketTypicalInvlidId: string;

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalInvlidId'] = data['ticketTypicalInvlidId'];
    }
  }
}

export class AddOrUpdateApproveInput {
  /**  */
  ticketTypicalInvalidId: string;

  /**  */
  isPass: boolean;

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalInvalidId'] = data['ticketTypicalInvalidId'];
      this['isPass'] = data['isPass'];
    }
  }
}

export class ListResultDto_GetTicketTypicalInvalidsOutput {
  /**  */
  items: GetTicketTypicalInvalidsOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class GetTicketTypicalInvalidsOutput {
  /**  */
  ticketId: string;

  /**  */
  taskName: string;

  /**  */
  stateName: string;

  /**  */
  ticketForderName: string;

  /**  */
  ticketTypicalId: string;

  /**  */
  canEdit: boolean;

  /**  */
  canCommit: boolean;

  /**  */
  canApprove: boolean;

  constructor(data?: any) {
    if (data) {
      this['ticketId'] = data['ticketId'];
      this['taskName'] = data['taskName'];
      this['stateName'] = data['stateName'];
      this['ticketForderName'] = data['ticketForderName'];
      this['ticketTypicalId'] = data['ticketTypicalId'];
      this['canEdit'] = data['canEdit'];
      this['canCommit'] = data['canCommit'];
      this['canApprove'] = data['canApprove'];
    }
  }
}

export class AssignTicketItemInput {
  /**  */
  ticketTypicalId: string;

  /**  */
  ticketItemTypicals: TicketItemTypicalDto[];

  constructor(data?: any) {
    if (data) {
      this['ticketTypicalId'] = data['ticketTypicalId'];
      this['ticketItemTypicals'] = data['ticketItemTypicals'];
    }
  }
}

export class ListResultDto_NameValueDto {
  /**  */
  items: NameValueDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class AuthenticateModel {
  /**  */
  userNameOrEmailAddress: string;

  /**  */
  password: string;

  /**  */
  twoFactorVerificationCode: string;

  /**  */
  rememberClient: boolean;

  /**  */
  twoFactorRememberClientToken: string;

  /**  */
  singleSignIn: boolean;

  /**  */
  returnUrl: string;

  constructor(data?: any) {
    if (data) {
      this['userNameOrEmailAddress'] = data['userNameOrEmailAddress'];
      this['password'] = data['password'];
      this['twoFactorVerificationCode'] = data['twoFactorVerificationCode'];
      this['rememberClient'] = data['rememberClient'];
      this['twoFactorRememberClientToken'] = data['twoFactorRememberClientToken'];
      this['singleSignIn'] = data['singleSignIn'];
      this['returnUrl'] = data['returnUrl'];
    }
  }
}

export class AuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  /**  */
  shouldResetPassword: boolean;

  /**  */
  passwordResetCode: string;

  /**  */
  userId: number;

  /**  */
  requiresTwoFactorVerification: boolean;

  /**  */
  twoFactorAuthProviders: string[];

  /**  */
  twoFactorRememberClientToken: string;

  /**  */
  returnUrl: string;

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken'];
      this['encryptedAccessToken'] = data['encryptedAccessToken'];
      this['expireInSeconds'] = data['expireInSeconds'];
      this['shouldResetPassword'] = data['shouldResetPassword'];
      this['passwordResetCode'] = data['passwordResetCode'];
      this['userId'] = data['userId'];
      this['requiresTwoFactorVerification'] = data['requiresTwoFactorVerification'];
      this['twoFactorAuthProviders'] = data['twoFactorAuthProviders'];
      this['twoFactorRememberClientToken'] = data['twoFactorRememberClientToken'];
      this['returnUrl'] = data['returnUrl'];
    }
  }
}

export class SendTwoFactorAuthCodeModel {
  /**  */
  userId: number;

  /**  */
  provider: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['provider'] = data['provider'];
    }
  }
}

export class ImpersonatedAuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken'];
      this['encryptedAccessToken'] = data['encryptedAccessToken'];
      this['expireInSeconds'] = data['expireInSeconds'];
    }
  }
}

export class SwitchedAccountAuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken'];
      this['encryptedAccessToken'] = data['encryptedAccessToken'];
      this['expireInSeconds'] = data['expireInSeconds'];
    }
  }
}

export class ExternalLoginProviderInfoModel {
  /**  */
  name: string;

  /**  */
  clientId: string;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['clientId'] = data['clientId'];
    }
  }
}

export class ExternalAuthenticateModel {
  /**  */
  authProvider: string;

  /**  */
  providerKey: string;

  /**  */
  providerAccessCode: string;

  /**  */
  returnUrl: string;

  /**  */
  singleSignIn: boolean;

  constructor(data?: any) {
    if (data) {
      this['authProvider'] = data['authProvider'];
      this['providerKey'] = data['providerKey'];
      this['providerAccessCode'] = data['providerAccessCode'];
      this['returnUrl'] = data['returnUrl'];
      this['singleSignIn'] = data['singleSignIn'];
    }
  }
}

export class ExternalAuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  /**  */
  waitingForActivation: boolean;

  /**  */
  returnUrl: string;

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken'];
      this['encryptedAccessToken'] = data['encryptedAccessToken'];
      this['expireInSeconds'] = data['expireInSeconds'];
      this['waitingForActivation'] = data['waitingForActivation'];
      this['returnUrl'] = data['returnUrl'];
    }
  }
}

export class SecurityAuthenticateModel {
  /**  */
  authProvider: string;

  /**  */
  providerKey: string;

  /**  */
  singleSignIn: boolean;

  constructor(data?: any) {
    if (data) {
      this['authProvider'] = data['authProvider'];
      this['providerKey'] = data['providerKey'];
      this['singleSignIn'] = data['singleSignIn'];
    }
  }
}

export class SecurityAuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  /**  */
  waitingForActivation: boolean;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['accessToken'] = data['accessToken'];
      this['encryptedAccessToken'] = data['encryptedAccessToken'];
      this['expireInSeconds'] = data['expireInSeconds'];
      this['waitingForActivation'] = data['waitingForActivation'];
      this['userId'] = data['userId'];
    }
  }
}

export class SecurityAuthenticateOTPModel {
  /**  */
  otp: string;

  /**  */
  authProvider: string;

  /**  */
  providerKey: string;

  /**  */
  singleSignIn: boolean;

  constructor(data?: any) {
    if (data) {
      this['otp'] = data['otp'];
      this['authProvider'] = data['authProvider'];
      this['providerKey'] = data['providerKey'];
      this['singleSignIn'] = data['singleSignIn'];
    }
  }
}

export class UserLogin {
  /**  */
  tenantId: number;

  /**  */
  userId: number;

  /**  */
  loginProvider: string;

  /**  */
  providerKey: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['userId'] = data['userId'];
      this['loginProvider'] = data['loginProvider'];
      this['providerKey'] = data['providerKey'];
      this['id'] = data['id'];
    }
  }
}

export class AccountBindingModel {
  /**  */
  userNameOrEmailAddress: string;

  /**  */
  password: string;

  /**  */
  providerKey: string;

  /**  */
  authProvider: string;

  constructor(data?: any) {
    if (data) {
      this['userNameOrEmailAddress'] = data['userNameOrEmailAddress'];
      this['password'] = data['password'];
      this['providerKey'] = data['providerKey'];
      this['authProvider'] = data['authProvider'];
    }
  }
}

export class UiCustomizationSettingsEditDto {
  /**  */
  layout: UiCustomizationLayoutSettingsEditDto;

  /**  */
  header: UiCustomizationHeaderSettingsEditDto;

  /**  */
  menu: UiCustomizationMenuSettingsEditDto;

  /**  */
  footer: UiCustomizationFooterSettingsEditDto;

  constructor(data?: any) {
    if (data) {
      this['layout'] = data['layout'];
      this['header'] = data['header'];
      this['menu'] = data['menu'];
      this['footer'] = data['footer'];
    }
  }
}

export class UiCustomizationLayoutSettingsEditDto {
  /**  */
  layoutType: string;

  /**  */
  contentSkin: string;

  constructor(data?: any) {
    if (data) {
      this['layoutType'] = data['layoutType'];
      this['contentSkin'] = data['contentSkin'];
    }
  }
}

export class UiCustomizationHeaderSettingsEditDto {
  /**  */
  desktopFixedHeader: boolean;

  /**  */
  desktopMinimizeMode: string;

  /**  */
  mobileFixedHeader: boolean;

  /**  */
  dropdownSkinDesktop: string;

  /**  */
  displaySubmenuArrowDesktop: boolean;

  /**  */
  dropdownSkin: string;

  constructor(data?: any) {
    if (data) {
      this['desktopFixedHeader'] = data['desktopFixedHeader'];
      this['desktopMinimizeMode'] = data['desktopMinimizeMode'];
      this['mobileFixedHeader'] = data['mobileFixedHeader'];
      this['dropdownSkinDesktop'] = data['dropdownSkinDesktop'];
      this['displaySubmenuArrowDesktop'] = data['displaySubmenuArrowDesktop'];
      this['dropdownSkin'] = data['dropdownSkin'];
    }
  }
}

export class UiCustomizationMenuSettingsEditDto {
  /**  */
  position: string;

  /**  */
  asideSkin: string;

  /**  */
  fixedAside: boolean;

  /**  */
  allowAsideMinimizing: boolean;

  /**  */
  defaultMinimizedAside: boolean;

  /**  */
  allowAsideHiding: boolean;

  /**  */
  defaultHiddenAside: boolean;

  /**  */
  submenuToggle: string;

  /**  */
  dropdownSubmenuSkin: string;

  /**  */
  dropdownSubmenuArrow: boolean;

  constructor(data?: any) {
    if (data) {
      this['position'] = data['position'];
      this['asideSkin'] = data['asideSkin'];
      this['fixedAside'] = data['fixedAside'];
      this['allowAsideMinimizing'] = data['allowAsideMinimizing'];
      this['defaultMinimizedAside'] = data['defaultMinimizedAside'];
      this['allowAsideHiding'] = data['allowAsideHiding'];
      this['defaultHiddenAside'] = data['defaultHiddenAside'];
      this['submenuToggle'] = data['submenuToggle'];
      this['dropdownSubmenuSkin'] = data['dropdownSubmenuSkin'];
      this['dropdownSubmenuArrow'] = data['dropdownSubmenuArrow'];
    }
  }
}

export class UiCustomizationFooterSettingsEditDto {
  /**  */
  fixedFooter: boolean;

  constructor(data?: any) {
    if (data) {
      this['fixedFooter'] = data['fixedFooter'];
    }
  }
}

export class PagedResultDto_UserListDto {
  /**  */
  totalCount: number;

  /**  */
  items: UserListDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class UserListDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  phoneNumber: string;

  /**  */
  profilePictureId: string;

  /**  */
  isEmailConfirmed: boolean;

  /**  */
  roles: UserListRoleDto[];

  /**  */
  lastLoginTime: string;

  /**  */
  isActive: boolean;

  /**  */
  creationTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['phoneNumber'] = data['phoneNumber'];
      this['profilePictureId'] = data['profilePictureId'];
      this['isEmailConfirmed'] = data['isEmailConfirmed'];
      this['roles'] = data['roles'];
      this['lastLoginTime'] = data['lastLoginTime'];
      this['isActive'] = data['isActive'];
      this['creationTime'] = data['creationTime'];
      this['id'] = data['id'];
    }
  }
}

export class UserListRoleDto {
  /**  */
  roleId: number;

  /**  */
  roleName: string;

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId'];
      this['roleName'] = data['roleName'];
    }
  }
}

export class GetUserForEditOutput {
  /**  */
  profilePictureId: string;

  /**  */
  user: UserEditDto;

  /**  */
  roles: UserRoleDto[];

  /**  */
  allOrganizationUnits: OrganizationUnitDto[];

  /**  */
  memberedOrganizationUnits: string[];

  constructor(data?: any) {
    if (data) {
      this['profilePictureId'] = data['profilePictureId'];
      this['user'] = data['user'];
      this['roles'] = data['roles'];
      this['allOrganizationUnits'] = data['allOrganizationUnits'];
      this['memberedOrganizationUnits'] = data['memberedOrganizationUnits'];
    }
  }
}

export class UserEditDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  phoneNumber: string;

  /**  */
  password: string;

  /**  */
  isActive: boolean;

  /**  */
  shouldChangePasswordOnNextLogin: boolean;

  /**  */
  isTwoFactorEnabled: boolean;

  /**  */
  isLockoutEnabled: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['emailAddress'] = data['emailAddress'];
      this['phoneNumber'] = data['phoneNumber'];
      this['password'] = data['password'];
      this['isActive'] = data['isActive'];
      this['shouldChangePasswordOnNextLogin'] = data['shouldChangePasswordOnNextLogin'];
      this['isTwoFactorEnabled'] = data['isTwoFactorEnabled'];
      this['isLockoutEnabled'] = data['isLockoutEnabled'];
    }
  }
}

export class UserRoleDto {
  /**  */
  roleId: number;

  /**  */
  roleName: string;

  /**  */
  roleDisplayName: string;

  /**  */
  isAssigned: boolean;

  constructor(data?: any) {
    if (data) {
      this['roleId'] = data['roleId'];
      this['roleName'] = data['roleName'];
      this['roleDisplayName'] = data['roleDisplayName'];
      this['isAssigned'] = data['isAssigned'];
    }
  }
}

export class GetUserPermissionsForEditOutput {
  /**  */
  permissions: FlatPermissionDto[];

  /**  */
  grantedPermissionNames: string[];

  constructor(data?: any) {
    if (data) {
      this['permissions'] = data['permissions'];
      this['grantedPermissionNames'] = data['grantedPermissionNames'];
    }
  }
}

export class EntityDto_Int64 {
  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
    }
  }
}

export class UpdateUserPermissionsInput {
  /**  */
  id: number;

  /**  */
  grantedPermissionNames: string[];

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['grantedPermissionNames'] = data['grantedPermissionNames'];
    }
  }
}

export class CreateOrUpdateUserInput {
  /**  */
  user: UserEditDto;

  /**  */
  assignedRoleNames: string[];

  /**  */
  sendActivationEmail: boolean;

  /**  */
  setRandomPassword: boolean;

  /**  */
  organizationUnits: number[];

  constructor(data?: any) {
    if (data) {
      this['user'] = data['user'];
      this['assignedRoleNames'] = data['assignedRoleNames'];
      this['sendActivationEmail'] = data['sendActivationEmail'];
      this['setRandomPassword'] = data['setRandomPassword'];
      this['organizationUnits'] = data['organizationUnits'];
    }
  }
}

export class UserListForLoginDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
      this['id'] = data['id'];
    }
  }
}

export class LinkToUserInput {
  /**  */
  tenancyName: string;

  /**  */
  usernameOrEmailAddress: string;

  /**  */
  password: string;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['usernameOrEmailAddress'] = data['usernameOrEmailAddress'];
      this['password'] = data['password'];
    }
  }
}

export class PagedResultDto_LinkedUserDto {
  /**  */
  totalCount: number;

  /**  */
  items: LinkedUserDto[];

  constructor(data?: any) {
    if (data) {
      this['totalCount'] = data['totalCount'];
      this['items'] = data['items'];
    }
  }
}

export class LinkedUserDto {
  /**  */
  tenantId: number;

  /**  */
  tenancyName: string;

  /**  */
  username: string;

  /**  */
  lastLoginTime: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['tenancyName'] = data['tenancyName'];
      this['username'] = data['username'];
      this['lastLoginTime'] = data['lastLoginTime'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_LinkedUserDto {
  /**  */
  items: LinkedUserDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class UnlinkUserInput {
  /**  */
  tenantId: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this['tenantId'] = data['tenantId'];
      this['userId'] = data['userId'];
    }
  }
}

export class ListResultDto_UserLoginAttemptDto {
  /**  */
  items: UserLoginAttemptDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class UserLoginAttemptDto {
  /**  */
  tenancyName: string;

  /**  */
  userNameOrEmail: string;

  /**  */
  clientIpAddress: string;

  /**  */
  clientName: string;

  /**  */
  browserInfo: string;

  /**  */
  result: string;

  /**  */
  creationTime: string;

  constructor(data?: any) {
    if (data) {
      this['tenancyName'] = data['tenancyName'];
      this['userNameOrEmail'] = data['userNameOrEmail'];
      this['clientIpAddress'] = data['clientIpAddress'];
      this['clientName'] = data['clientName'];
      this['browserInfo'] = data['browserInfo'];
      this['result'] = data['result'];
      this['creationTime'] = data['creationTime'];
    }
  }
}

export class GetNfcCurrentUserLoginOutput {
  /**  */
  userLogin: UserLoginDto;

  constructor(data?: any) {
    if (data) {
      this['userLogin'] = data['userLogin'];
    }
  }
}

export class UserLoginDto {
  /**  */
  key: string;

  constructor(data?: any) {
    if (data) {
      this['key'] = data['key'];
    }
  }
}

export class CreateOrUpdateNfcUserLoginInput {
  /**  */
  userId: number;

  /**  */
  key: string;

  constructor(data?: any) {
    if (data) {
      this['userId'] = data['userId'];
      this['key'] = data['key'];
    }
  }
}

export class GetLatestWebLogsOutput {
  /**  */
  latestWebLogLines: string[];

  constructor(data?: any) {
    if (data) {
      this['latestWebLogLines'] = data['latestWebLogLines'];
    }
  }
}
export enum EnumWireCabinetApplyInputApplyReason {
  'EquipmentFailure' = 'EquipmentFailure',
  'EquipmentOverhaul' = 'EquipmentOverhaul',
  'UrgentUnlock' = 'UrgentUnlock',
  'OtherReason' = 'OtherReason'
}
export class WireCabinetApplyInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  applicantId: number;

  /**  */
  applyReason: EnumWireCabinetApplyInputApplyReason;

  /**  */
  applyReasonNote: string;

  /**  */
  approverId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['applicantId'] = data['applicantId'];
      this['applyReason'] = data['applyReason'];
      this['applyReasonNote'] = data['applyReasonNote'];
      this['approverId'] = data['approverId'];
    }
  }
}

export class WireCabinetApproveInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  approverId: number;

  /**  */
  isApprovePass: boolean;

  /**  */
  approveNote: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['approverId'] = data['approverId'];
      this['isApprovePass'] = data['isApprovePass'];
      this['approveNote'] = data['approveNote'];
    }
  }
}

export class WireCabinetUnlockInput {
  /**  */
  equipmentPropertyId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
    }
  }
}

export class WireCabinetUnlockOutput {
  /**  */
  unlockCode: string;

  constructor(data?: any) {
    if (data) {
      this['unlockCode'] = data['unlockCode'];
    }
  }
}

export class WireCabinetHookInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  hookPosition: string;

  /**  */
  photoIds: string[];

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['hookPosition'] = data['hookPosition'];
      this['photoIds'] = data['photoIds'];
    }
  }
}

export class WireCabinetHook2Input {
  /**  */
  equipmentPropertyId: number;

  /**  */
  photoIds: string[];

  /**  */
  deviceId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['photoIds'] = data['photoIds'];
      this['deviceId'] = data['deviceId'];
    }
  }
}

export class WireCabinetUnHookInput {
  /**  */
  equipmentPropertyId: number;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
    }
  }
}

export class WireCabinetUpdateTaskInput {
  /**  */
  equipmentId: number;

  /**  */
  status: WireCabinetStatusDto[];

  /**  */
  bluetooth: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['status'] = data['status'];
      this['bluetooth'] = data['bluetooth'];
    }
  }
}
export enum EnumWireCabinetStatusDtoBuckleStatus {
  'Unkown' = 'Unkown',
  'Lock' = 'Lock',
  'UnlockAndTake' = 'UnlockAndTake',
  'UnlockNotTake' = 'UnlockNotTake'
}
export class WireCabinetStatusDto {
  /**  */
  buckleNo: number;

  /**  */
  buckleStatus: EnumWireCabinetStatusDtoBuckleStatus;

  constructor(data?: any) {
    if (data) {
      this['buckleNo'] = data['buckleNo'];
      this['buckleStatus'] = data['buckleStatus'];
    }
  }
}

export class WireCabinetValueTextDto {
  /**  */
  value: number;

  /**  */
  text: string;

  constructor(data?: any) {
    if (data) {
      this['value'] = data['value'];
      this['text'] = data['text'];
    }
  }
}
export enum EnumWireCabinetTaskOutputUnlockMode {
  'Online' = 'Online',
  'Bluetooth' = 'Bluetooth',
  'Password' = 'Password'
}
export enum EnumWireCabinetTaskOutputLockMode {
  'LockerDoor' = 'LockerDoor',
  'LockerBuckle' = 'LockerBuckle'
}
export enum EnumWireCabinetTaskOutputTaskStep {
  'None' = 'None',
  'Applying' = 'Applying',
  'ApprovalPassed' = 'ApprovalPassed',
  'ApprovalNotPassed' = 'ApprovalNotPassed',
  'Unlocked' = 'Unlocked',
  'TimeOut' = 'TimeOut',
  'TakenOut' = 'TakenOut',
  'Hooked' = 'Hooked',
  'Unhooked' = 'Unhooked',
  'Returned' = 'Returned',
  'Ended' = 'Ended',
  'ErrorCode' = 'ErrorCode'
}
export enum EnumWireCabinetTaskOutputApplyReason {
  'EquipmentFailure' = 'EquipmentFailure',
  'EquipmentOverhaul' = 'EquipmentOverhaul',
  'UrgentUnlock' = 'UrgentUnlock',
  'OtherReason' = 'OtherReason'
}
export enum EnumWireCabinetTaskOutputTakeReason {
  'UnlockByTicket' = 'UnlockByTicket',
  'UnlockByCard' = 'UnlockByCard',
  'UnlockByKey' = 'UnlockByKey',
  'UnlockByTest' = 'UnlockByTest',
  'UnlockByBorrow' = 'UnlockByBorrow'
}
export class WireCabinetTaskOutput {
  /**  */
  equipmentId: number;

  /**  */
  equipmentName: string;

  /**  */
  equipmentPropertyName: string;

  /**  */
  equipmentPropertyDisplayName: string;

  /**  */
  equipmentPropertyValue: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  applicantName: string;

  /**  */
  approverName: string;

  /**  */
  applyReasonEnumName: string;

  /**  */
  equipmentPropertyId: number;

  /**  */
  isNeedApprove: boolean;

  /**  */
  isApproverCanUnlockDirectly: boolean;

  /**  */
  unlockMode: EnumWireCabinetTaskOutputUnlockMode;

  /**  */
  lockMode: EnumWireCabinetTaskOutputLockMode;

  /**  */
  taskStep: EnumWireCabinetTaskOutputTaskStep;

  /**  */
  applicantId: number;

  /**  */
  applyTime: string;

  /**  */
  applyReason: EnumWireCabinetTaskOutputApplyReason;

  /**  */
  applyReasonNote: string;

  /**  */
  applyReasonPhotoId: string;

  /**  */
  applyReasonVoiceId: string;

  /**  */
  approverId: number;

  /**  */
  approveTime: string;

  /**  */
  isApprovePass: boolean;

  /**  */
  approveNote: string;

  /**  */
  unlockTime: string;

  /**  */
  unlockCode: string;

  /**  */
  unlockTimeoutTime: string;

  /**  */
  takenTime: string;

  /**  */
  hookTime: string;

  /**  */
  hookPosition: string;

  /**  */
  hookPhotoId: string;

  /**  */
  unhookTime: string;

  /**  */
  unhookPhotoId: string;

  /**  */
  returnTime: string;

  /**  */
  returnPhotoId: string;

  /**  */
  takeReason: EnumWireCabinetTaskOutputTakeReason;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['equipmentName'] = data['equipmentName'];
      this['equipmentPropertyName'] = data['equipmentPropertyName'];
      this['equipmentPropertyDisplayName'] = data['equipmentPropertyDisplayName'];
      this['equipmentPropertyValue'] = data['equipmentPropertyValue'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['applicantName'] = data['applicantName'];
      this['approverName'] = data['approverName'];
      this['applyReasonEnumName'] = data['applyReasonEnumName'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['isNeedApprove'] = data['isNeedApprove'];
      this['isApproverCanUnlockDirectly'] = data['isApproverCanUnlockDirectly'];
      this['unlockMode'] = data['unlockMode'];
      this['lockMode'] = data['lockMode'];
      this['taskStep'] = data['taskStep'];
      this['applicantId'] = data['applicantId'];
      this['applyTime'] = data['applyTime'];
      this['applyReason'] = data['applyReason'];
      this['applyReasonNote'] = data['applyReasonNote'];
      this['applyReasonPhotoId'] = data['applyReasonPhotoId'];
      this['applyReasonVoiceId'] = data['applyReasonVoiceId'];
      this['approverId'] = data['approverId'];
      this['approveTime'] = data['approveTime'];
      this['isApprovePass'] = data['isApprovePass'];
      this['approveNote'] = data['approveNote'];
      this['unlockTime'] = data['unlockTime'];
      this['unlockCode'] = data['unlockCode'];
      this['unlockTimeoutTime'] = data['unlockTimeoutTime'];
      this['takenTime'] = data['takenTime'];
      this['hookTime'] = data['hookTime'];
      this['hookPosition'] = data['hookPosition'];
      this['hookPhotoId'] = data['hookPhotoId'];
      this['unhookTime'] = data['unhookTime'];
      this['unhookPhotoId'] = data['unhookPhotoId'];
      this['returnTime'] = data['returnTime'];
      this['returnPhotoId'] = data['returnPhotoId'];
      this['takeReason'] = data['takeReason'];
    }
  }
}

export class ListResultDto_WireCabinetOperatorDto {
  /**  */
  items: WireCabinetOperatorDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class WireCabinetOperatorDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['name'] = data['name'];
      this['surname'] = data['surname'];
      this['userName'] = data['userName'];
    }
  }
}

export class UpdateOperateTimeInput {
  /**  */
  bluetooth: string;

  /**  */
  wireOperateTimeDtos: WireOperateRecordDto[];

  constructor(data?: any) {
    if (data) {
      this['bluetooth'] = data['bluetooth'];
      this['wireOperateTimeDtos'] = data['wireOperateTimeDtos'];
    }
  }
}
export enum EnumWireOperateRecordDtoTakeReason {
  'UnlockByTicket' = 'UnlockByTicket',
  'UnlockByCard' = 'UnlockByCard',
  'UnlockByKey' = 'UnlockByKey',
  'UnlockByTest' = 'UnlockByTest',
  'UnlockByBorrow' = 'UnlockByBorrow'
}
export enum EnumWireOperateRecordDtoMarkBit {
  'TakeOut' = 'TakeOut',
  'Return' = 'Return'
}
export class WireOperateRecordDto {
  /**  */
  buckleNo: string;

  /**  */
  operationTime: string;

  /**  */
  takeReason: EnumWireOperateRecordDtoTakeReason;

  /**  */
  markBit: EnumWireOperateRecordDtoMarkBit;

  constructor(data?: any) {
    if (data) {
      this['buckleNo'] = data['buckleNo'];
      this['operationTime'] = data['operationTime'];
      this['takeReason'] = data['takeReason'];
      this['markBit'] = data['markBit'];
    }
  }
}
export enum EnumWireDetailOutputTaskStep {
  'None' = 'None',
  'Applying' = 'Applying',
  'ApprovalPassed' = 'ApprovalPassed',
  'ApprovalNotPassed' = 'ApprovalNotPassed',
  'Unlocked' = 'Unlocked',
  'TimeOut' = 'TimeOut',
  'TakenOut' = 'TakenOut',
  'Hooked' = 'Hooked',
  'Unhooked' = 'Unhooked',
  'Returned' = 'Returned',
  'Ended' = 'Ended',
  'ErrorCode' = 'ErrorCode'
}
export class WireDetailOutput {
  /**  */
  id: number;

  /**  */
  createTime: string;

  /**  */
  lastModificationTime: string;

  /**  */
  equipmentId: number;

  /**  */
  equipmentName: string;

  /**  */
  buckleNumber: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  taskStep: EnumWireDetailOutputTaskStep;

  /**  */
  isExternal: boolean;

  constructor(data?: any) {
    if (data) {
      this['id'] = data['id'];
      this['createTime'] = data['createTime'];
      this['lastModificationTime'] = data['lastModificationTime'];
      this['equipmentId'] = data['equipmentId'];
      this['equipmentName'] = data['equipmentName'];
      this['buckleNumber'] = data['buckleNumber'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['taskStep'] = data['taskStep'];
      this['isExternal'] = data['isExternal'];
    }
  }
}

export class ListResultDto_UploadFileOutput {
  /**  */
  items: UploadFileOutput[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class WireCabinetOutput {
  /**  */
  wireCabinetId: number;

  /**  */
  name: string;

  /**  */
  stationId: number;

  /**  */
  stationName: string;

  /**  */
  description: string;

  /**  */
  wireDetailDtos: WireDetailDto[];

  constructor(data?: any) {
    if (data) {
      this['wireCabinetId'] = data['wireCabinetId'];
      this['name'] = data['name'];
      this['stationId'] = data['stationId'];
      this['stationName'] = data['stationName'];
      this['description'] = data['description'];
      this['wireDetailDtos'] = data['wireDetailDtos'];
    }
  }
}
export enum EnumWireDetailDtoTaskStep {
  'None' = 'None',
  'Applying' = 'Applying',
  'ApprovalPassed' = 'ApprovalPassed',
  'ApprovalNotPassed' = 'ApprovalNotPassed',
  'Unlocked' = 'Unlocked',
  'TimeOut' = 'TimeOut',
  'TakenOut' = 'TakenOut',
  'Hooked' = 'Hooked',
  'Unhooked' = 'Unhooked',
  'Returned' = 'Returned',
  'Ended' = 'Ended',
  'ErrorCode' = 'ErrorCode'
}
export class WireDetailDto {
  /**  */
  wireId: number;

  /**  */
  buckleNumber: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  taskStep: EnumWireDetailDtoTaskStep;

  /**  */
  isExternal: boolean;

  /**  */
  photoIds: string[];

  /**  */
  wireConfigs: WireConfigDto[];

  constructor(data?: any) {
    if (data) {
      this['wireId'] = data['wireId'];
      this['buckleNumber'] = data['buckleNumber'];
      this['name'] = data['name'];
      this['description'] = data['description'];
      this['taskStep'] = data['taskStep'];
      this['isExternal'] = data['isExternal'];
      this['photoIds'] = data['photoIds'];
      this['wireConfigs'] = data['wireConfigs'];
    }
  }
}

export class WireConfigDto {
  /**  */
  wireConfigId: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['wireConfigId'] = data['wireConfigId'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
    }
  }
}

export class EquipmentPropertyConfigInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
    }
  }
}

export class WirePileOutput {
  /**  */
  name: string;

  /**  */
  hasBind: boolean;

  /**  */
  equipmentPropertyId: number;

  /**  */
  equipmentPropertyName: string;

  /**  */
  stationId: number;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this['name'] = data['name'];
      this['hasBind'] = data['hasBind'];
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['equipmentPropertyName'] = data['equipmentPropertyName'];
      this['stationId'] = data['stationId'];
      this['id'] = data['id'];
    }
  }
}

export class ListResultDto_WireBeTakenDto {
  /**  */
  items: WireBeTakenDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class WireBeTakenDto {
  /**  */
  equipmentPropertyId: number;

  /**  */
  displayName: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['displayName'] = data['displayName'];
    }
  }
}

export class ListResultDto_WireCabinetBluetoothDto {
  /**  */
  items: WireCabinetBluetoothDto[];

  constructor(data?: any) {
    if (data) {
      this['items'] = data['items'];
    }
  }
}

export class WireCabinetBluetoothDto {
  /**  */
  equipmentId: number;

  /**  */
  bluetooth: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentId'] = data['equipmentId'];
      this['bluetooth'] = data['bluetooth'];
    }
  }
}

export class CheckWireConfigInput {
  /**  */
  equipmentPropertyId: number;

  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this['equipmentPropertyId'] = data['equipmentPropertyId'];
      this['name'] = data['name'];
      this['displayName'] = data['displayName'];
      this['description'] = data['description'];
      this['value'] = data['value'];
    }
  }
}
