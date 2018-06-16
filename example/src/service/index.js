import axios from 'axios';
export class AccountService {
    /**
     *
     */
    static isTenantAvailable(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static register(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendPasswordResetCode(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static resetPassword(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendEmailActivationLink(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static activateEmail(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static impersonate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static backToImpersonator(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static switchToLinkedAccount(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getAuditLogs(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getAuditLogsToExcel(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getAllCaches(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static clearCache(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static clearAllCaches(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static getUserChatFriendsWithSettings(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getUserChatMessages(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static markAllUnreadMessagesOfUserAsRead(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getEditionsForCombobox(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static findUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getDefaultEditionName(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getDeviceTypesForCombobox(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getStationsForCombobox(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getVoltageLevelsForCombobox(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getDeviceStateForCombox(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static sendAndGetDate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendAndGetDateTime(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendAndGetDateRange(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getCountries(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static sendAndGetSelectedCountries(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendAndGetValue(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getDevices(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getLockControlDevices(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getDeviceForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateDevice(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteDevice(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static queryDeviceStates(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateDeviceState(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static checkDeviceNameIsExist(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getDeviceAreas(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getDeviceAreaForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateDeviceArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteDeviceArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getDeviceBoards(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getDeviceBoardForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateDeviceBoard(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteDeviceBoard(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static uploadDeviceBoard(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getLockCodeProperties(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getLockCodePropertySelected(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getLockCodePropertyForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateLockCodeProperty(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteLockCodeProperty(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getDeviceTerms(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTerms(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateDeviceOperation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteDeviceOperation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getDeviceTypes(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getDeviceTypeForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateDeviceType(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteDeviceType(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getEditions(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getEditionForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateEdition(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteEdition(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getEditionComboboxItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getEquipments(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getEquipmentForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateEquipment(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteEquipment(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getEquipmentNotBinded(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getAllStationBindEquipments(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getStationBindEquipments(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getEquipmentWithProperty(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static controlEquipment(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getEquipmentsCombineProperties(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static download(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static file(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createFriendshipRequest(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static createFriendshipRequestByUserName(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static blockUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static unblockUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static acceptFriendshipRequest(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getGraphs(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getGraphForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateGraph(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteGraph(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static uploadGraph(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getDashboardStatisticsData(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getIncomeStatistics(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getEditionTenantStatistics(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getAllSettings(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateAllSettings(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static sendTestEmail(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static createDbBase(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static writeDataToDb(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static readDataFromDb(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static setup(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getAppSettingsJson(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static checkDatabase(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static addIntelligentLocks(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeIntelligentLocks(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static updateIntelligentLocks(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static getIntelligentLockList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getIntelligentLocksInDeviceAreaTree(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getInvoiceInfo(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createInvoice(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetApply(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetApprove(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetUnlock(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetUpdateUnlockCode(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetOpenDoor(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static keyCabinetReturn(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getApplyReasonEnums(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getApplyReasonList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getBuckleTypeEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getLockModeEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getApproverTypeEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static endTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getApplicants(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getApprovers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getIsTaskExpired(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getIsApplicant(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getKeyCarbinetLogs(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static updateKeyCarbinetLog(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static getLanguages(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getLanguageForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateLanguage(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteLanguage(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static setDefaultLanguage(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getLanguageTexts(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static updateLanguageText(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static addOrUpdateLockControlTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getLockControlTaskList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getLockControlTaskItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static commitLockControlTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteLockControlTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getLockControlTaskPendingDetail(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static approvalLockControlTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getLockControlTaskCodeInfos(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static uploadJsqOperationLog(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getJsqOperationLogList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static finishLockControlTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getHistoryLockControlTaskList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getHistoryLockControlTaskItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUserNotifications(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static setAllNotificationsAsRead(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static setNotificationAsRead(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getNotificationSettings(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateNotificationSettings(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static getOperationRecord(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getOperationRecords(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getOperationRecordsByEquipmentPropertyId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getOperationRecordsByEquipmentId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getOrganizationUnits(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getOrganizationUnitUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static moveOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static removeUserFromOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static addUsersToOrganizationUnit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static findUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getPaymentInfo(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createPayment(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static executePayment(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getPaymentHistory(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getPendingList(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getAllPermissions(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getProducts(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getProductForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateProduct(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteProduct(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getProductProperties(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getProductPropertyForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateProductProperty(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteProductProperty(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getCurrentUserProfileForEdit(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateGoogleAuthenticatorKey(options = {}) {
        const configs = { ...options, method: 'put' };
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
    static sendVerificationSms(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static verifySmsCode(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateCurrentUserProfile(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static changePassword(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateProfilePicture(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static getPasswordComplexitySetting(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getProfilePicture(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getFriendProfilePictureById(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getProfilePictureById(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static changeLanguage(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static addOrUpdateRiskTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static addOrUpdateRiskTicketItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteRiskTicketItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static addOrUpdateRiskItemTemplate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteRiskItemTemplate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getAllRiskItemTemplate(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static addOrUpdateRiskItemTermMap(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteRiskItemTermMap(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static mappingRiskItemByTerm(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getRiskItemSingle(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRiskItemArrayByTicketId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRiskItemArrayByRiskTicketId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRiskItemArrayFromTemplate(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getRiskItemArrayByTicketFolderId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRoles(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRoleForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateRole(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteRole(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static addOrUpdateSafetyWearMonitoring(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getOne(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getList(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getSafetyWearEquipmentByMacAddress(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getSafetyWearEquipments(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUserListForSafetyWearLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static addOrUpdateSerialNumber(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getSerialNumber(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static setSerialMaxNumber(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getCurrentLoginInformations(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateUserSignInToken(options = {}) {
        const configs = { ...options, method: 'put' };
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
    static getStations(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getStationForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getStationNotBind(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static bindEquipmentStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeEquipmentStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static createStationUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeUserFromStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static updateDefaultUserStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static createStationArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateStationArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static moveStationArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteStationArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getStationArea(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getCurrentUserStationArea(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getUserStationArea(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getStationAreaWithEquipments(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static stationAreaBindStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeStationAreaStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getRelatedUserListByStationId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getNotRelatedUserListByStationId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getDefaultStation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUserStations(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static upgradeTenantToEquivalentEdition(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTenants(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createTenant(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTenantForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static updateTenant(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static deleteTenant(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getTenantFeaturesForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static updateTenantFeatures(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static resetTenantSpecificFeatures(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static unlockTenantAdmin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getMemberActivity(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getDashboardData(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getSalesSummary(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRegionalStats(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getGeneralStats(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static registerTenant(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getEditionsForSelect(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getEdition(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getAllSettings(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateAllSettings(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static clearLogo(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static clearCustomCss(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static sendTestEmail(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTerminalPortConfigs(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTerminalPortConfigForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateTerminalPortConfig(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTerminalPortConfig(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getTerminals(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getTerminalForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateTerminal(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTerminal(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static resetTerminal(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendControlOperating(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTermperaturePoints(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static addOrUpdateTicketFolder(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteStationTicketFolder(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static deleteTicketFolder(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static addOrUpdateTicketFolderRiskInfo(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getStationTicketFolderChildrens(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketFolderChildrens(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getStationTicketFolderChildrenWithTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketFoldersByName(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketFolderById(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static assignFolderTickets(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getFolderTicketsById(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketFoldersWithTicketsByParentId(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getStationTicketFoldersWithTickets(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketRoleUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static addOrUpdateTicketTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTicketTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static assignTicketPersonas(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static commitTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static confirmTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static approveTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static executeTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static finishTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateTicketItemsStatus(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static updateTicketRiskItemsStatus(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static currentTicketItemDeviceCanOperate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTickets(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static checkDeviceStatusForTicketTaskExcuting(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static analyseSentence(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTicketItemOperateLockInfo(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static singleAnalyseSentenceOutput(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static addOrUpdateTicketTypical(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTicketTypical(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getTicketsByTaskName(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicket(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createTicketCurrent(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static addOrUpdateCommit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static addOrUpdateApprove(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteTicketTypicalInvalid(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getTicketTypicalInvalids(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketTypicalInvalid(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTicketItemTypicalInvalids(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static assignTicketItem(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getTimezones(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getTimezoneComboboxItems(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static authenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static sendTwoFactorAuthCode(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static impersonatedAuthenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static linkedAccountAuthenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getExternalAuthenticationProviders(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static externalAuthenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static securityAuthenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getUserLoginByProviderKey(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static securityOtpAuthenticate(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static bindUserAccount(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static testNotification(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUiManagementSettings(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static updateUiManagementSettings(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static updateDefaultUiManagementSettings(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static useSystemDefaultSettings(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static getUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUsersToExcel(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getUserForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getUserPermissionsForEdit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static resetUserSpecificPermissions(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static updateUserPermissions(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static createOrUpdateUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static deleteUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static unlockUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getUsersForLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static linkToUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getLinkedUsers(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getRecentlyUsedLinkedUsers(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static unlinkUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getRecentUserLoginAttempts(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getNfcCurrentUserLogin(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateNfcUserLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static bindNfcCurrentUserLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeNfcUserLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static removeNfcCurrentUserLogin(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getUserLoginByProviderKey(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static bindUser(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static removeUserBind(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'delete' };
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
    static getLatestWebLogs(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static downloadWebLogs(options = {}) {
        const configs = { ...options, method: 'post' };
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
    static wireCabinetApply(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetApprove(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetUnlock(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetHook(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetDeviceHook(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetUnHook(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static wireCabinetUpdateTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getApplyReasonEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getApplyReasonList(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getBuckleTypeEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getLockModeEnums(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getTask(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getApplicants(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getApprovers(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static getRecentlyTimeForSelectOperation(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static updateOperateTime(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'put' };
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
    static getWireDetail(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static uploadFile(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getWireCabinet(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static createOrUpdateEquipmentPropertyConfig(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
    static getWirePile(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getWiresBeTaken(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'get' };
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
    static getWireCabinetBluetooths(options = {}) {
        const configs = { ...options, method: 'get' };
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
    static checkWireConfigIsExsit(params, options = {}) {
        params = params || {};
        const configs = { ...options, method: 'post' };
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
export class IsTenantAvailableInput {
    constructor(data) {
        if (data) {
            this['tenancyName'] = data['tenancyName'];
        }
    }
}
export var EnumIsTenantAvailableOutputState;
(function (EnumIsTenantAvailableOutputState) {
    EnumIsTenantAvailableOutputState["Available"] = "Available";
    EnumIsTenantAvailableOutputState["InActive"] = "InActive";
    EnumIsTenantAvailableOutputState["NotFound"] = "NotFound";
})(EnumIsTenantAvailableOutputState || (EnumIsTenantAvailableOutputState = {}));
export class IsTenantAvailableOutput {
    constructor(data) {
        if (data) {
            this['state'] = data['state'];
            this['tenantId'] = data['tenantId'];
            this['serverRootAddress'] = data['serverRootAddress'];
        }
    }
}
export class RegisterInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['canLogin'] = data['canLogin'];
        }
    }
}
export class SendPasswordResetCodeInput {
    constructor(data) {
        if (data) {
            this['emailAddress'] = data['emailAddress'];
        }
    }
}
export class ResetPasswordInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['canLogin'] = data['canLogin'];
            this['userName'] = data['userName'];
        }
    }
}
export class SendEmailActivationLinkInput {
    constructor(data) {
        if (data) {
            this['emailAddress'] = data['emailAddress'];
        }
    }
}
export class ActivateEmailInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['confirmationCode'] = data['confirmationCode'];
        }
    }
}
export class ImpersonateInput {
    constructor(data) {
        if (data) {
            this['tenantId'] = data['tenantId'];
            this['userId'] = data['userId'];
        }
    }
}
export class ImpersonateOutput {
    constructor(data) {
        if (data) {
            this['impersonationToken'] = data['impersonationToken'];
            this['tenancyName'] = data['tenancyName'];
        }
    }
}
export class SwitchToLinkedAccountInput {
    constructor(data) {
        if (data) {
            this['targetTenantId'] = data['targetTenantId'];
            this['targetUserId'] = data['targetUserId'];
        }
    }
}
export class SwitchToLinkedAccountOutput {
    constructor(data) {
        if (data) {
            this['switchAccountToken'] = data['switchAccountToken'];
            this['tenancyName'] = data['tenancyName'];
        }
    }
}
export class PagedResultDto_AuditLogListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class AuditLogListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['fileName'] = data['fileName'];
            this['fileType'] = data['fileType'];
            this['fileToken'] = data['fileToken'];
        }
    }
}
export class ListResultDto_CacheDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class CacheDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
        }
    }
}
export class EntityDto_String {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
        }
    }
}
export class GetUserChatFriendsWithSettingsOutput {
    constructor(data) {
        if (data) {
            this['serverTime'] = data['serverTime'];
            this['friends'] = data['friends'];
        }
    }
}
export var EnumFriendDtoState;
(function (EnumFriendDtoState) {
    EnumFriendDtoState["Accepted"] = "Accepted";
    EnumFriendDtoState["Blocked"] = "Blocked";
})(EnumFriendDtoState || (EnumFriendDtoState = {}));
export class FriendDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export var EnumChatMessageDtoSide;
(function (EnumChatMessageDtoSide) {
    EnumChatMessageDtoSide["Sender"] = "Sender";
    EnumChatMessageDtoSide["Receiver"] = "Receiver";
})(EnumChatMessageDtoSide || (EnumChatMessageDtoSide = {}));
export var EnumChatMessageDtoReadState;
(function (EnumChatMessageDtoReadState) {
    EnumChatMessageDtoReadState["Unread"] = "Unread";
    EnumChatMessageDtoReadState["Read"] = "Read";
})(EnumChatMessageDtoReadState || (EnumChatMessageDtoReadState = {}));
export var EnumChatMessageDtoReceiverReadState;
(function (EnumChatMessageDtoReceiverReadState) {
    EnumChatMessageDtoReceiverReadState["Unread"] = "Unread";
    EnumChatMessageDtoReceiverReadState["Read"] = "Read";
})(EnumChatMessageDtoReceiverReadState || (EnumChatMessageDtoReceiverReadState = {}));
export class ChatMessageDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['tenantId'] = data['tenantId'];
            this['userId'] = data['userId'];
        }
    }
}
export class ListResultDto_SubscribableEditionComboboxItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class SubscribableEditionComboboxItemDto {
    constructor(data) {
        if (data) {
            this['isFree'] = data['isFree'];
            this['value'] = data['value'];
            this['displayText'] = data['displayText'];
            this['isSelected'] = data['isSelected'];
        }
    }
}
export class FindUsersInput {
    constructor(data) {
        if (data) {
            this['tenantId'] = data['tenantId'];
            this['maxResultCount'] = data['maxResultCount'];
            this['skipCount'] = data['skipCount'];
            this['filter'] = data['filter'];
        }
    }
}
export class PagedResultDto_NameValueDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class NameValueDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['value'] = data['value'];
        }
    }
}
export class GetDefaultEditionNameOutput {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
        }
    }
}
export class ListResultDto_DeviceTypeComboboxItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class DeviceTypeComboboxItemDto {
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
            this['displayText'] = data['displayText'];
            this['isSelected'] = data['isSelected'];
        }
    }
}
export class ListResultDto_ComboboxItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ComboboxItemDto {
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
            this['displayText'] = data['displayText'];
            this['isSelected'] = data['isSelected'];
        }
    }
}
export class DateToStringOutput {
    constructor(data) {
        if (data) {
            this['dateString'] = data['dateString'];
        }
    }
}
export class NameValue_String {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['value'] = data['value'];
        }
    }
}
export class StringOutput {
    constructor(data) {
        if (data) {
            this['output'] = data['output'];
        }
    }
}
export class PagedResultDto_DeviceListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class DeviceListDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['id'] = data['id'];
        }
    }
}
export class GetDeviceEditOutput {
    constructor(data) {
        if (data) {
            this['device'] = data['device'];
            this['configListDtos'] = data['configListDtos'];
        }
    }
}
export class DeviceEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['device'] = data['device'];
            this['codeInfoDtos'] = data['codeInfoDtos'];
        }
    }
}
export class CreateOrUpdateDeviceDto {
    constructor(data) {
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
export var EnumDeviceCodeInfoEditDtoLockCodeNumber;
(function (EnumDeviceCodeInfoEditDtoLockCodeNumber) {
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um1"] = "Um1";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um2"] = "Um2";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um3"] = "Um3";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um4"] = "Um4";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um5"] = "Um5";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um6"] = "Um6";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um7"] = "Um7";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um8"] = "Um8";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um9"] = "Um9";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um10"] = "Um10";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um11"] = "Um11";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um12"] = "Um12";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um13"] = "Um13";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um14"] = "Um14";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um15"] = "Um15";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um16"] = "Um16";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um17"] = "Um17";
    EnumDeviceCodeInfoEditDtoLockCodeNumber["Um18"] = "Um18";
})(EnumDeviceCodeInfoEditDtoLockCodeNumber || (EnumDeviceCodeInfoEditDtoLockCodeNumber = {}));
export class DeviceCodeInfoEditDto {
    constructor(data) {
        if (data) {
            this['lockCodeNumber'] = data['lockCodeNumber'];
            this['code'] = data['code'];
            this['lockCodeConfigId'] = data['lockCodeConfigId'];
        }
    }
}
export class QueryDevicesStateInput {
    constructor(data) {
        if (data) {
            this['stationDevices'] = data['stationDevices'];
        }
    }
}
export class StationDeviceDto {
    constructor(data) {
        if (data) {
            this['stationName'] = data['stationName'];
            this['pointName'] = data['pointName'];
            this['id'] = data['id'];
        }
    }
}
export class ListResultDto_DeviceStateDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class DeviceStateDto {
    constructor(data) {
        if (data) {
            this['stationName'] = data['stationName'];
            this['pointName'] = data['pointName'];
            this['state'] = data['state'];
            this['id'] = data['id'];
        }
    }
}
export class UpdateDeviceStateInput {
    constructor(data) {
        if (data) {
            this['deviceState'] = data['deviceState'];
        }
    }
}
export class UpdateDeviceStateOutput {
    constructor(data) {
        if (data) {
            this['deviceState'] = data['deviceState'];
        }
    }
}
export class CheckDeviceNameIsExistInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['name'] = data['name'];
            this['id'] = data['id'];
        }
    }
}
export class ListResultDto_DeviceAreaListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class DeviceAreaListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['deviceArea'] = data['deviceArea'];
        }
    }
}
export class GetDeviceAreaEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['deviceArea'] = data['deviceArea'];
            this['children'] = data['children'];
        }
    }
}
export class CreateOrUpdateDeviceAreaDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class DeviceBoardDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['term'] = data['term'];
            this['contentStorageId'] = data['contentStorageId'];
            this['id'] = data['id'];
        }
    }
}
export class GetDeviceBoardEditOutput {
    constructor(data) {
        if (data) {
            this['deviceBoard'] = data['deviceBoard'];
        }
    }
}
export class DeviceBoardEditDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['term'] = data['term'];
            this['contentStorageId'] = data['contentStorageId'];
            this['id'] = data['id'];
        }
    }
}
export class CreateOrUpdateDeviceBoardInput {
    constructor(data) {
        if (data) {
            this['deviceBoard'] = data['deviceBoard'];
        }
    }
}
export class CreateOrUpdateDeviceBoardDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['term'] = data['term'];
            this['contentStorageId'] = data['contentStorageId'];
            this['id'] = data['id'];
        }
    }
}
export class IFormFile {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['fileName'] = data['fileName'];
        }
    }
}
export class PagedResultDto_LockCodePropertyListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class LockCodePropertyListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class LockCodePropertySelectDto {
    constructor(data) {
        if (data) {
            this['codeName'] = data['codeName'];
            this['id'] = data['id'];
        }
    }
}
export class LockCodePropertyEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['lockType'] = data['lockType'];
            this['lockPropertyType'] = data['lockPropertyType'];
            this['lockCodeNumber'] = data['lockCodeNumber'];
            this['id'] = data['id'];
        }
    }
}
export class CreateOrUpdateLockCodePropertyInput {
    constructor(data) {
        if (data) {
            this['codePropertyDto'] = data['codePropertyDto'];
            this['lockCodeConfigs'] = data['lockCodeConfigs'];
        }
    }
}
export class CreateOrUpdateLockCodePropertyDto {
    constructor(data) {
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
export var EnumLockCodeConfigEditDtoLockType;
(function (EnumLockCodeConfigEditDtoLockType) {
    EnumLockCodeConfigEditDtoLockType["NoKey"] = "NoKey";
    EnumLockCodeConfigEditDtoLockType["JXLock"] = "JXLock";
    EnumLockCodeConfigEditDtoLockType["DBMLock"] = "DBMLock";
    EnumLockCodeConfigEditDtoLockType["DKLock"] = "DKLock";
    EnumLockCodeConfigEditDtoLockType["DXDKLock"] = "DXDKLock";
    EnumLockCodeConfigEditDtoLockType["GSNYD"] = "GSNYD";
    EnumLockCodeConfigEditDtoLockType["WYYD"] = "WYYD";
    EnumLockCodeConfigEditDtoLockType["YYYD"] = "YYYD";
    EnumLockCodeConfigEditDtoLockType["CJFKLock"] = "CJFKLock";
    EnumLockCodeConfigEditDtoLockType["FKSDBMLock"] = "FKSDBMLock";
    EnumLockCodeConfigEditDtoLockType["ZNLock"] = "ZNLock";
    EnumLockCodeConfigEditDtoLockType["ZNYB"] = "ZNYB";
    EnumLockCodeConfigEditDtoLockType["YYDWZJC"] = "YYDWZJC";
    EnumLockCodeConfigEditDtoLockType["WYDWZJC"] = "WYDWZJC";
    EnumLockCodeConfigEditDtoLockType["JXDBMLock"] = "JXDBMLock";
    EnumLockCodeConfigEditDtoLockType["DBMLock_2H"] = "DBMLock_2H";
    EnumLockCodeConfigEditDtoLockType["DBMLock_3H"] = "DBMLock_3H";
    EnumLockCodeConfigEditDtoLockType["XJLock"] = "XJLock";
    EnumLockCodeConfigEditDtoLockType["WX_DBMLock"] = "WX_DBMLock";
    EnumLockCodeConfigEditDtoLockType["WX_JXLock"] = "WX_JXLock";
    EnumLockCodeConfigEditDtoLockType["WX_GSN2L"] = "WX_GSN2L";
    EnumLockCodeConfigEditDtoLockType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumLockCodeConfigEditDtoLockType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumLockCodeConfigEditDtoLockType["ZNHWMLock"] = "ZNHWMLock";
    EnumLockCodeConfigEditDtoLockType["GSN2E"] = "GSN2E";
    EnumLockCodeConfigEditDtoLockType["GSN2YD"] = "GSN2YD";
    EnumLockCodeConfigEditDtoLockType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumLockCodeConfigEditDtoLockType["WX_DZBQ"] = "WX_DZBQ";
    EnumLockCodeConfigEditDtoLockType["WX_BSJXLock"] = "WX_BSJXLock";
    EnumLockCodeConfigEditDtoLockType["WX_SGWZSLock"] = "WX_SGWZSLock";
    EnumLockCodeConfigEditDtoLockType["SGWZSLock"] = "SGWZSLock";
    EnumLockCodeConfigEditDtoLockType["TBLock"] = "TBLock";
    EnumLockCodeConfigEditDtoLockType["XHJGLock"] = "XHJGLock";
    EnumLockCodeConfigEditDtoLockType["SLGLock"] = "SLGLock";
    EnumLockCodeConfigEditDtoLockType["LTLock"] = "LTLock";
    EnumLockCodeConfigEditDtoLockType["BSQLock"] = "BSQLock";
    EnumLockCodeConfigEditDtoLockType["BSLock"] = "BSLock";
    EnumLockCodeConfigEditDtoLockType["CXLock"] = "CXLock";
    EnumLockCodeConfigEditDtoLockType["FDHLock"] = "FDHLock";
    EnumLockCodeConfigEditDtoLockType["PMLock"] = "PMLock";
    EnumLockCodeConfigEditDtoLockType["LGLock"] = "LGLock";
    EnumLockCodeConfigEditDtoLockType["FHMLock"] = "FHMLock";
    EnumLockCodeConfigEditDtoLockType["YKLock"] = "YKLock";
    EnumLockCodeConfigEditDtoLockType["ZNSXLock"] = "ZNSXLock";
    EnumLockCodeConfigEditDtoLockType["GYJLYDQ"] = "GYJLYDQ";
    EnumLockCodeConfigEditDtoLockType["LGLock_6A"] = "LGLock_6A";
    EnumLockCodeConfigEditDtoLockType["WTJGLock"] = "WTJGLock";
    EnumLockCodeConfigEditDtoLockType["DKHLock"] = "DKHLock";
})(EnumLockCodeConfigEditDtoLockType || (EnumLockCodeConfigEditDtoLockType = {}));
export var EnumLockCodeConfigEditDtoLockPropertyType;
(function (EnumLockCodeConfigEditDtoLockPropertyType) {
    EnumLockCodeConfigEditDtoLockPropertyType["NoKey"] = "NoKey";
    EnumLockCodeConfigEditDtoLockPropertyType["XHJGLock"] = "XHJGLock";
    EnumLockCodeConfigEditDtoLockPropertyType["SLGLock"] = "SLGLock";
    EnumLockCodeConfigEditDtoLockPropertyType["LTLock"] = "LTLock";
    EnumLockCodeConfigEditDtoLockPropertyType["BSQLock"] = "BSQLock";
    EnumLockCodeConfigEditDtoLockPropertyType["BSLock"] = "BSLock";
    EnumLockCodeConfigEditDtoLockPropertyType["CXLock"] = "CXLock";
    EnumLockCodeConfigEditDtoLockPropertyType["FDHLock"] = "FDHLock";
    EnumLockCodeConfigEditDtoLockPropertyType["PMLock"] = "PMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["LGLock"] = "LGLock";
    EnumLockCodeConfigEditDtoLockPropertyType["FHMLock"] = "FHMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["YKLock"] = "YKLock";
    EnumLockCodeConfigEditDtoLockPropertyType["HWGMLock"] = "HWGMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_JXLock"] = "WX_JXLock";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_DBMLock"] = "WX_DBMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["GSN2L"] = "GSN2L";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_SKJXLock"] = "WX_SKJXLock";
    EnumLockCodeConfigEditDtoLockPropertyType["GSN2YD"] = "GSN2YD";
    EnumLockCodeConfigEditDtoLockPropertyType["XJLock"] = "XJLock";
    EnumLockCodeConfigEditDtoLockPropertyType["JM_GSN2YD"] = "JM_GSN2YD";
    EnumLockCodeConfigEditDtoLockPropertyType["GLDBP"] = "GLDBP";
    EnumLockCodeConfigEditDtoLockPropertyType["GLWYBS"] = "GLWYBS";
    EnumLockCodeConfigEditDtoLockPropertyType["LSGLGLock"] = "LSGLGLock";
    EnumLockCodeConfigEditDtoLockPropertyType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumLockCodeConfigEditDtoLockPropertyType["LGLock_6A"] = "LGLock_6A";
    EnumLockCodeConfigEditDtoLockPropertyType["WTJGLock"] = "WTJGLock";
    EnumLockCodeConfigEditDtoLockPropertyType["DKHLock"] = "DKHLock";
})(EnumLockCodeConfigEditDtoLockPropertyType || (EnumLockCodeConfigEditDtoLockPropertyType = {}));
export var EnumLockCodeConfigEditDtoLockCodeNumber;
(function (EnumLockCodeConfigEditDtoLockCodeNumber) {
    EnumLockCodeConfigEditDtoLockCodeNumber["Um1"] = "Um1";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um2"] = "Um2";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um3"] = "Um3";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um4"] = "Um4";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um5"] = "Um5";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um6"] = "Um6";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um7"] = "Um7";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um8"] = "Um8";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um9"] = "Um9";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um10"] = "Um10";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um11"] = "Um11";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um12"] = "Um12";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um13"] = "Um13";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um14"] = "Um14";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um15"] = "Um15";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um16"] = "Um16";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um17"] = "Um17";
    EnumLockCodeConfigEditDtoLockCodeNumber["Um18"] = "Um18";
})(EnumLockCodeConfigEditDtoLockCodeNumber || (EnumLockCodeConfigEditDtoLockCodeNumber = {}));
export class LockCodeConfigEditDto {
    constructor(data) {
        if (data) {
            this['lockType'] = data['lockType'];
            this['lockPropertyType'] = data['lockPropertyType'];
            this['lockCodeNumber'] = data['lockCodeNumber'];
            this['id'] = data['id'];
        }
    }
}
export class GetDeviceTermsOutput {
    constructor(data) {
        if (data) {
            this['stationName'] = data['stationName'];
            this['pointName'] = data['pointName'];
            this['deviceStateTerms'] = data['deviceStateTerms'];
        }
    }
}
export class DeviceStateTermDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class DeviceOperationListDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['deviceOperation'] = data['deviceOperation'];
        }
    }
}
export class DeviceOperationEditDto {
    constructor(data) {
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
export var EnumTermEditDtoType;
(function (EnumTermEditDtoType) {
    EnumTermEditDtoType["Default"] = "Default";
    EnumTermEditDtoType["ByLinkage"] = "ByLinkage";
    EnumTermEditDtoType["AddBefault"] = "AddBefault";
    EnumTermEditDtoType["AddAfter"] = "AddAfter";
    EnumTermEditDtoType["Selectable"] = "Selectable";
})(EnumTermEditDtoType || (EnumTermEditDtoType = {}));
export class TermEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class DeviceTypeListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['deviceType'] = data['deviceType'];
            this['deviceStates'] = data['deviceStates'];
        }
    }
}
export class DeviceTypeEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['state'] = data['state'];
            this['id'] = data['id'];
        }
    }
}
export class CreateOrUpdateDeviceTypeInput {
    constructor(data) {
        if (data) {
            this['deviceType'] = data['deviceType'];
            this['deviceStates'] = data['deviceStates'];
        }
    }
}
export class ListResultDto_EditionListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class EditionListDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['displayName'] = data['displayName'];
            this['creationTime'] = data['creationTime'];
            this['id'] = data['id'];
        }
    }
}
export class GetEditionEditOutput {
    constructor(data) {
        if (data) {
            this['edition'] = data['edition'];
            this['featureValues'] = data['featureValues'];
            this['features'] = data['features'];
        }
    }
}
export class EditionEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['attributes'] = data['attributes'];
            this['validator'] = data['validator'];
            this['itemSource'] = data['itemSource'];
        }
    }
}
export class IValueValidator {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['attributes'] = data['attributes'];
        }
    }
}
export class LocalizableComboboxItemSourceDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class LocalizableComboboxItemDto {
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
            this['displayText'] = data['displayText'];
        }
    }
}
export class CreateOrUpdateEditionDto {
    constructor(data) {
        if (data) {
            this['edition'] = data['edition'];
            this['featureValues'] = data['featureValues'];
        }
    }
}
export class ListResultDto_EquipmentListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class EquipmentListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['equipment'] = data['equipment'];
            this['equipmentProperties'] = data['equipmentProperties'];
            this['equipmentBindPort'] = data['equipmentBindPort'];
        }
    }
}
export class EquipmentEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['terminalId'] = data['terminalId'];
            this['terminalName'] = data['terminalName'];
            this['terminalPortConfigId'] = data['terminalPortConfigId'];
            this['terminalPortConfigName'] = data['terminalPortConfigName'];
        }
    }
}
export class CreateOrUpdateEquipmentInput {
    constructor(data) {
        if (data) {
            this['equipment'] = data['equipment'];
            this['equipmentProperties'] = data['equipmentProperties'];
            this['bindPorts'] = data['bindPorts'];
        }
    }
}
export class CreateOrUpdateEquipmentDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['productId'] = data['productId'];
            this['bluetooth'] = data['bluetooth'];
            this['id'] = data['id'];
        }
    }
}
export var EnumEquipmentPropertyEditDtoType;
(function (EnumEquipmentPropertyEditDtoType) {
    EnumEquipmentPropertyEditDtoType["BaseProperty"] = "BaseProperty";
    EnumEquipmentPropertyEditDtoType["SignalingAndControl"] = "SignalingAndControl";
    EnumEquipmentPropertyEditDtoType["SensingAndAdjustment"] = "SensingAndAdjustment";
})(EnumEquipmentPropertyEditDtoType || (EnumEquipmentPropertyEditDtoType = {}));
export var EnumEquipmentPropertyEditDtoBitType;
(function (EnumEquipmentPropertyEditDtoBitType) {
    EnumEquipmentPropertyEditDtoBitType["ReadOnly"] = "ReadOnly";
    EnumEquipmentPropertyEditDtoBitType["WriteOnly"] = "WriteOnly";
    EnumEquipmentPropertyEditDtoBitType["ReadAndWrite"] = "ReadAndWrite";
})(EnumEquipmentPropertyEditDtoBitType || (EnumEquipmentPropertyEditDtoBitType = {}));
export class EquipmentPropertyEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['terminalPortConfigId'] = data['terminalPortConfigId'];
        }
    }
}
export class PagedResultDto_EquipmentListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ListResultDto_EquipmentWithPropertyDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export var EnumEquipmentWithPropertyDtoProductType;
(function (EnumEquipmentWithPropertyDtoProductType) {
    EnumEquipmentWithPropertyDtoProductType["KeyCabinet"] = "KeyCabinet";
    EnumEquipmentWithPropertyDtoProductType["WireCabinet"] = "WireCabinet";
    EnumEquipmentWithPropertyDtoProductType["SafetyWear"] = "SafetyWear";
    EnumEquipmentWithPropertyDtoProductType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumEquipmentWithPropertyDtoProductType["ManholeCover"] = "ManholeCover";
})(EnumEquipmentWithPropertyDtoProductType || (EnumEquipmentWithPropertyDtoProductType = {}));
export class EquipmentWithPropertyDto {
    constructor(data) {
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
export var EnumEquipmentPropertyForSingleEquipmentBitType;
(function (EnumEquipmentPropertyForSingleEquipmentBitType) {
    EnumEquipmentPropertyForSingleEquipmentBitType["ReadOnly"] = "ReadOnly";
    EnumEquipmentPropertyForSingleEquipmentBitType["WriteOnly"] = "WriteOnly";
    EnumEquipmentPropertyForSingleEquipmentBitType["ReadAndWrite"] = "ReadAndWrite";
})(EnumEquipmentPropertyForSingleEquipmentBitType || (EnumEquipmentPropertyForSingleEquipmentBitType = {}));
export class EquipmentPropertyForSingleEquipment {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export var EnumEquipmentInpageDtoProductType;
(function (EnumEquipmentInpageDtoProductType) {
    EnumEquipmentInpageDtoProductType["KeyCabinet"] = "KeyCabinet";
    EnumEquipmentInpageDtoProductType["WireCabinet"] = "WireCabinet";
    EnumEquipmentInpageDtoProductType["SafetyWear"] = "SafetyWear";
    EnumEquipmentInpageDtoProductType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumEquipmentInpageDtoProductType["ManholeCover"] = "ManholeCover";
})(EnumEquipmentInpageDtoProductType || (EnumEquipmentInpageDtoProductType = {}));
export class EquipmentInpageDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['equipmentWithProperty'] = data['equipmentWithProperty'];
        }
    }
}
export class ControlEquipmentInput {
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
            this['index'] = data['index'];
            this['value'] = data['value'];
        }
    }
}
export class IListResult_EquipmentCombineProperties {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class EquipmentCombineProperties {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['equipmentProperties'] = data['equipmentProperties'];
            this['id'] = data['id'];
        }
    }
}
export class CreateFriendshipRequestInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['tenantId'] = data['tenantId'];
        }
    }
}
export class CreateFriendshipRequestByUserNameInput {
    constructor(data) {
        if (data) {
            this['tenancyName'] = data['tenancyName'];
            this['userName'] = data['userName'];
        }
    }
}
export class BlockUserInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['tenantId'] = data['tenantId'];
        }
    }
}
export class UnblockUserInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['tenantId'] = data['tenantId'];
        }
    }
}
export class AcceptFriendshipRequestInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['tenantId'] = data['tenantId'];
        }
    }
}
export class ListResultDto_GraphListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class GraphListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['contentStorageId'] = data['contentStorageId'];
            this['parentId'] = data['parentId'];
            this['id'] = data['id'];
        }
    }
}
export class CreateOrUpdateGraphInput {
    constructor(data) {
        if (data) {
            this['graph'] = data['graph'];
        }
    }
}
export class HostDashboardData {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['label'] = data['label'];
            this['date'] = data['date'];
            this['amount'] = data['amount'];
        }
    }
}
export class TenantEdition {
    constructor(data) {
        if (data) {
            this['label'] = data['label'];
            this['value'] = data['value'];
        }
    }
}
export class ExpiringTenant {
    constructor(data) {
        if (data) {
            this['tenantName'] = data['tenantName'];
            this['remainingDayCount'] = data['remainingDayCount'];
        }
    }
}
export class RecentTenant {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
            this['creationTime'] = data['creationTime'];
        }
    }
}
export class GetIncomeStatisticsDataOutput {
    constructor(data) {
        if (data) {
            this['incomeStatistics'] = data['incomeStatistics'];
        }
    }
}
export class GetEditionTenantStatisticsOutput {
    constructor(data) {
        if (data) {
            this['editionStatistics'] = data['editionStatistics'];
        }
    }
}
export class HostSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['timezone'] = data['timezone'];
            this['timezoneForComparison'] = data['timezoneForComparison'];
        }
    }
}
export class HostUserManagementSettingsEditDto {
    constructor(data) {
        if (data) {
            this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin'];
            this['smsVerificationEnabled'] = data['smsVerificationEnabled'];
        }
    }
}
export class EmailSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['allowSelfRegistration'] = data['allowSelfRegistration'];
            this['isNewRegisteredTenantActiveByDefault'] = data['isNewRegisteredTenantActiveByDefault'];
            this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration'];
            this['defaultEditionId'] = data['defaultEditionId'];
        }
    }
}
export class SecuritySettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['legalName'] = data['legalName'];
            this['address'] = data['address'];
        }
    }
}
export class PushSettingEditDto {
    constructor(data) {
        if (data) {
            this['iOSAppKey'] = data['iOSAppKey'];
            this['androidAppKey'] = data['androidAppKey'];
            this['pages'] = data['pages'];
        }
    }
}
export class PasswordComplexitySetting {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['isEnabled'] = data['isEnabled'];
            this['maxFailedAccessAttemptsBeforeLockout'] = data['maxFailedAccessAttemptsBeforeLockout'];
            this['defaultAccountLockoutSeconds'] = data['defaultAccountLockoutSeconds'];
        }
    }
}
export class TwoFactorLoginSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['keyCabinetDetailPage'] = data['keyCabinetDetailPage'];
            this['wireCabinetDetailPage'] = data['wireCabinetDetailPage'];
            this['safetyWearDetailPage'] = data['safetyWearDetailPage'];
        }
    }
}
export class SendTestEmailInput {
    constructor(data) {
        if (data) {
            this['emailAddress'] = data['emailAddress'];
        }
    }
}
export class CreateDbBaseInput {
    constructor(data) {
        if (data) {
            this['dbName'] = data['dbName'];
        }
    }
}
export class WriteDataToDbInput {
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
            this['dataToDbDtos'] = data['dataToDbDtos'];
        }
    }
}
export var EnumWriteDataToDbDtoDataType;
(function (EnumWriteDataToDbDtoDataType) {
    EnumWriteDataToDbDtoDataType["TemperatureBatteryLevelRssiLevel"] = "TemperatureBatteryLevelRssiLevel";
    EnumWriteDataToDbDtoDataType["TemperatureHighByte"] = "TemperatureHighByte";
    EnumWriteDataToDbDtoDataType["TemperatureHighByte00"] = "TemperatureHighByte00";
    EnumWriteDataToDbDtoDataType["TemperatureMagnify10Times"] = "TemperatureMagnify10Times";
})(EnumWriteDataToDbDtoDataType || (EnumWriteDataToDbDtoDataType = {}));
export class WriteDataToDbDto {
    constructor(data) {
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
export var EnumReadDataFromDbInputDataType;
(function (EnumReadDataFromDbInputDataType) {
    EnumReadDataFromDbInputDataType["TemperatureBatteryLevelRssiLevel"] = "TemperatureBatteryLevelRssiLevel";
    EnumReadDataFromDbInputDataType["TemperatureHighByte"] = "TemperatureHighByte";
    EnumReadDataFromDbInputDataType["TemperatureHighByte00"] = "TemperatureHighByte00";
    EnumReadDataFromDbInputDataType["TemperatureMagnify10Times"] = "TemperatureMagnify10Times";
})(EnumReadDataFromDbInputDataType || (EnumReadDataFromDbInputDataType = {}));
export class ReadDataFromDbInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
            this['readDataFromDbDtos'] = data['readDataFromDbDtos'];
        }
    }
}
export class ReadDataFromDbDto {
    constructor(data) {
        if (data) {
            this['rssiLevel'] = data['rssiLevel'];
            this['batteryLevel'] = data['batteryLevel'];
            this['temperature'] = data['temperature'];
            this['dateTime'] = data['dateTime'];
        }
    }
}
export class InstallDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['webSiteUrl'] = data['webSiteUrl'];
            this['serverSiteUrl'] = data['serverSiteUrl'];
            this['languages'] = data['languages'];
        }
    }
}
export class NameValue {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['value'] = data['value'];
        }
    }
}
export class CheckDatabaseOutput {
    constructor(data) {
        if (data) {
            this['isDatabaseExist'] = data['isDatabaseExist'];
        }
    }
}
export class AddIntelligentLocksInput {
    constructor(data) {
        if (data) {
            this['roleId'] = data['roleId'];
            this['intelligentLockDtos'] = data['intelligentLockDtos'];
        }
    }
}
export class AddIntelligentLockDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['roleId'] = data['roleId'];
            this['intelligentLockDtos'] = data['intelligentLockDtos'];
        }
    }
}
export class UpdateIntelligentLockDto {
    constructor(data) {
        if (data) {
            this['deviceId'] = data['deviceId'];
            this['deviceAreaId'] = data['deviceAreaId'];
            this['isEst'] = data['isEst'];
            this['stationId'] = data['stationId'];
        }
    }
}
export class ListResultDto_IntelligentLockOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class IntelligentLockOutput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['deviceId'] = data['deviceId'];
            this['isEst'] = data['isEst'];
        }
    }
}
export class ListResultDto_IntelligentLockDetailOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class IntelligentLockDetailOutput {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['subscriptionPaymentId'] = data['subscriptionPaymentId'];
        }
    }
}
export var EnumKeyCabinetApplyInputApplyReason;
(function (EnumKeyCabinetApplyInputApplyReason) {
    EnumKeyCabinetApplyInputApplyReason["EquipmentFailure"] = "EquipmentFailure";
    EnumKeyCabinetApplyInputApplyReason["EquipmentOverhaul"] = "EquipmentOverhaul";
    EnumKeyCabinetApplyInputApplyReason["UrgentUnlock"] = "UrgentUnlock";
    EnumKeyCabinetApplyInputApplyReason["OtherReason"] = "OtherReason";
    EnumKeyCabinetApplyInputApplyReason["UnLockNormalOperation"] = "UnLockNormalOperation";
    EnumKeyCabinetApplyInputApplyReason["OpenLockDeviceSetupDebug"] = "OpenLockDeviceSetupDebug";
    EnumKeyCabinetApplyInputApplyReason["OpenLockWfDeviceDailyMaintenance"] = "OpenLockWfDeviceDailyMaintenance";
    EnumKeyCabinetApplyInputApplyReason["OpenLockWfDeviceFaultHandling"] = "OpenLockWfDeviceFaultHandling";
    EnumKeyCabinetApplyInputApplyReason["OpenLockNormalDeviceDailyMaintenance"] = "OpenLockNormalDeviceDailyMaintenance";
})(EnumKeyCabinetApplyInputApplyReason || (EnumKeyCabinetApplyInputApplyReason = {}));
export var EnumKeyCabinetApplyInputApproverType;
(function (EnumKeyCabinetApplyInputApproverType) {
    EnumKeyCabinetApplyInputApproverType["BaseApprover"] = "BaseApprover";
    EnumKeyCabinetApplyInputApproverType["OpenLockApprover"] = "OpenLockApprover";
    EnumKeyCabinetApplyInputApproverType["UnLockApprover"] = "UnLockApprover";
})(EnumKeyCabinetApplyInputApproverType || (EnumKeyCabinetApplyInputApproverType = {}));
export class KeyCabinetApplyInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class KeyCabinetApproveInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['approverId'] = data['approverId'];
            this['isApprovePass'] = data['isApprovePass'];
            this['approveNote'] = data['approveNote'];
        }
    }
}
export class KeyCabinetUnlockInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['operatorId'] = data['operatorId'];
            this['unLockReason'] = data['unLockReason'];
        }
    }
}
export class ApiResultOutput_KeyCabinetUnlockOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class KeyCabinetUnlockOutput {
    constructor(data) {
        if (data) {
            this['unlockCode'] = data['unlockCode'];
            this['openDoorCode'] = data['openDoorCode'];
        }
    }
}
export class KeyCabinetGenerateUnlockCodeInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
        }
    }
}
export class ApiResultOutput_KeyCabinetGenerateUnlockCodeOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class KeyCabinetGenerateUnlockCodeOutput {
    constructor(data) {
        if (data) {
            this['unlockCode'] = data['unlockCode'];
            this['openDoorCode'] = data['openDoorCode'];
            this['unlockCodeGenerateTime'] = data['unlockCodeGenerateTime'];
        }
    }
}
export class KeyCabinetOpenDoorInput {
    constructor(data) {
        if (data) {
            this['operatorId'] = data['operatorId'];
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
        }
    }
}
export class KeyCabinetReturnInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['operatorId'] = data['operatorId'];
        }
    }
}
export class ApiResultOutput_Dictionary_Int32_String {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ApiResultOutput_List_KeyCabinetValueTextDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class KeyCabinetValueTextDto {
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
            this['text'] = data['text'];
        }
    }
}
export class ApiResultOutput_KeyCabinetTaskOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export var EnumKeyCabinetTaskOutputUnlockMode;
(function (EnumKeyCabinetTaskOutputUnlockMode) {
    EnumKeyCabinetTaskOutputUnlockMode["Online"] = "Online";
    EnumKeyCabinetTaskOutputUnlockMode["Bluetooth"] = "Bluetooth";
    EnumKeyCabinetTaskOutputUnlockMode["Password"] = "Password";
})(EnumKeyCabinetTaskOutputUnlockMode || (EnumKeyCabinetTaskOutputUnlockMode = {}));
export var EnumKeyCabinetTaskOutputLockMode;
(function (EnumKeyCabinetTaskOutputLockMode) {
    EnumKeyCabinetTaskOutputLockMode["LockerDoor"] = "LockerDoor";
    EnumKeyCabinetTaskOutputLockMode["LockerBuckle"] = "LockerBuckle";
})(EnumKeyCabinetTaskOutputLockMode || (EnumKeyCabinetTaskOutputLockMode = {}));
export var EnumKeyCabinetTaskOutputTaskStep;
(function (EnumKeyCabinetTaskOutputTaskStep) {
    EnumKeyCabinetTaskOutputTaskStep["None"] = "None";
    EnumKeyCabinetTaskOutputTaskStep["Applying"] = "Applying";
    EnumKeyCabinetTaskOutputTaskStep["ApprovalPassed"] = "ApprovalPassed";
    EnumKeyCabinetTaskOutputTaskStep["ApprovalNotPassed"] = "ApprovalNotPassed";
    EnumKeyCabinetTaskOutputTaskStep["Unlocked"] = "Unlocked";
    EnumKeyCabinetTaskOutputTaskStep["TimeOut"] = "TimeOut";
    EnumKeyCabinetTaskOutputTaskStep["TakenOut"] = "TakenOut";
    EnumKeyCabinetTaskOutputTaskStep["Returned"] = "Returned";
    EnumKeyCabinetTaskOutputTaskStep["Ended"] = "Ended";
    EnumKeyCabinetTaskOutputTaskStep["Expired"] = "Expired";
    EnumKeyCabinetTaskOutputTaskStep["ErrorCode"] = "ErrorCode";
})(EnumKeyCabinetTaskOutputTaskStep || (EnumKeyCabinetTaskOutputTaskStep = {}));
export var EnumKeyCabinetTaskOutputApplyReason;
(function (EnumKeyCabinetTaskOutputApplyReason) {
    EnumKeyCabinetTaskOutputApplyReason["EquipmentFailure"] = "EquipmentFailure";
    EnumKeyCabinetTaskOutputApplyReason["EquipmentOverhaul"] = "EquipmentOverhaul";
    EnumKeyCabinetTaskOutputApplyReason["UrgentUnlock"] = "UrgentUnlock";
    EnumKeyCabinetTaskOutputApplyReason["OtherReason"] = "OtherReason";
    EnumKeyCabinetTaskOutputApplyReason["UnLockNormalOperation"] = "UnLockNormalOperation";
    EnumKeyCabinetTaskOutputApplyReason["OpenLockDeviceSetupDebug"] = "OpenLockDeviceSetupDebug";
    EnumKeyCabinetTaskOutputApplyReason["OpenLockWfDeviceDailyMaintenance"] = "OpenLockWfDeviceDailyMaintenance";
    EnumKeyCabinetTaskOutputApplyReason["OpenLockWfDeviceFaultHandling"] = "OpenLockWfDeviceFaultHandling";
    EnumKeyCabinetTaskOutputApplyReason["OpenLockNormalDeviceDailyMaintenance"] = "OpenLockNormalDeviceDailyMaintenance";
})(EnumKeyCabinetTaskOutputApplyReason || (EnumKeyCabinetTaskOutputApplyReason = {}));
export var EnumKeyCabinetTaskOutputApproverType;
(function (EnumKeyCabinetTaskOutputApproverType) {
    EnumKeyCabinetTaskOutputApproverType["BaseApprover"] = "BaseApprover";
    EnumKeyCabinetTaskOutputApproverType["OpenLockApprover"] = "OpenLockApprover";
    EnumKeyCabinetTaskOutputApproverType["UnLockApprover"] = "UnLockApprover";
})(EnumKeyCabinetTaskOutputApproverType || (EnumKeyCabinetTaskOutputApproverType = {}));
export class KeyCabinetTaskOutput {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['applicantId'] = data['applicantId'];
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
        }
    }
}
export class ApiResultOutput_ListResultDto_KeyCabinetOperatorDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDto_KeyCabinetOperatorDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class KeyCabinetOperatorDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
            this['surname'] = data['surname'];
            this['userName'] = data['userName'];
        }
    }
}
export class ApiResultOutput_Boolean {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ApiResultOutput_ListResultDto_KeyCarbinetLogListOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDto_KeyCarbinetLogListOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class KeyCarbinetLogListOutput {
    constructor(data) {
        if (data) {
            this['logId'] = data['logId'];
            this['log'] = data['log'];
        }
    }
}
export class KeyCarbinetLogInput {
    constructor(data) {
        if (data) {
            this['logId'] = data['logId'];
            this['taskName'] = data['taskName'];
            this['equipmentPropertyNameForLog'] = data['equipmentPropertyNameForLog'];
            this['applyReasonNameForLog'] = data['applyReasonNameForLog'];
        }
    }
}
export class GetLanguagesOutput {
    constructor(data) {
        if (data) {
            this['defaultLanguageName'] = data['defaultLanguageName'];
            this['items'] = data['items'];
        }
    }
}
export class ApplicationLanguageListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['language'] = data['language'];
            this['languageNames'] = data['languageNames'];
            this['flags'] = data['flags'];
        }
    }
}
export class ApplicationLanguageEditDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
            this['icon'] = data['icon'];
            this['isEnabled'] = data['isEnabled'];
        }
    }
}
export class CreateOrUpdateLanguageInput {
    constructor(data) {
        if (data) {
            this['language'] = data['language'];
        }
    }
}
export class SetDefaultLanguageInput {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
        }
    }
}
export class PagedResultDto_LanguageTextListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class LanguageTextListDto {
    constructor(data) {
        if (data) {
            this['key'] = data['key'];
            this['baseValue'] = data['baseValue'];
            this['targetValue'] = data['targetValue'];
        }
    }
}
export class UpdateLanguageTextInput {
    constructor(data) {
        if (data) {
            this['languageName'] = data['languageName'];
            this['sourceName'] = data['sourceName'];
            this['key'] = data['key'];
            this['value'] = data['value'];
        }
    }
}
export class AddOrUpdateLockControlTaskInput {
    constructor(data) {
        if (data) {
            this['lockControlTask'] = data['lockControlTask'];
            this['lockControlTaskItems'] = data['lockControlTaskItems'];
        }
    }
}
export var EnumLockControlTaskDtoState;
(function (EnumLockControlTaskDtoState) {
    EnumLockControlTaskDtoState["None"] = "None";
    EnumLockControlTaskDtoState["WaitCommit"] = "WaitCommit";
    EnumLockControlTaskDtoState["WaitConfirm"] = "WaitConfirm";
    EnumLockControlTaskDtoState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumLockControlTaskDtoState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumLockControlTaskDtoState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumLockControlTaskDtoState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumLockControlTaskDtoState["WaitApprove"] = "WaitApprove";
    EnumLockControlTaskDtoState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumLockControlTaskDtoState["ReadyGo"] = "ReadyGo";
    EnumLockControlTaskDtoState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumLockControlTaskDtoState["Executing"] = "Executing";
    EnumLockControlTaskDtoState["Pause"] = "Pause";
    EnumLockControlTaskDtoState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumLockControlTaskDtoState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumLockControlTaskDtoState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumLockControlTaskDtoState["ExtensionReject"] = "ExtensionReject";
    EnumLockControlTaskDtoState["Finished"] = "Finished";
    EnumLockControlTaskDtoState["Break"] = "Break";
    EnumLockControlTaskDtoState["Cancel"] = "Cancel";
    EnumLockControlTaskDtoState["WaitReadOver"] = "WaitReadOver";
    EnumLockControlTaskDtoState["ReadOver"] = "ReadOver";
    EnumLockControlTaskDtoState["Archived"] = "Archived";
})(EnumLockControlTaskDtoState || (EnumLockControlTaskDtoState = {}));
export class LockControlTaskDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['deviceId'] = data['deviceId'];
            this['no'] = data['no'];
            this['name'] = data['name'];
            this['description'] = data['description'];
        }
    }
}
export class ApiResultOutput_PagedResultDto_LockControlTaskDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class PagedResultDto_LockControlTaskDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ApiResultOutput_LockControlTaskDetailOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class LockControlTaskDetailOutput {
    constructor(data) {
        if (data) {
            this['lockControlTask'] = data['lockControlTask'];
            this['lockControlTaskItems'] = data['lockControlTaskItems'];
        }
    }
}
export class LockControlTaskInput {
    constructor(data) {
        if (data) {
            this['taskId'] = data['taskId'];
        }
    }
}
export class ApiResultOutput_LockControlTaskPendingDetailOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class LockControlTaskPendingDetailOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['taskId'] = data['taskId'];
            this['approvalThrough'] = data['approvalThrough'];
            this['approvalReason'] = data['approvalReason'];
        }
    }
}
export class ApiResultOutput_LockControlTaskOptOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class LockControlTaskOptOutput {
    constructor(data) {
        if (data) {
            this['taskNo'] = data['taskNo'];
            this['taskBeginTime'] = data['taskBeginTime'];
            this['taskEndTime'] = data['taskEndTime'];
            this['deviceLockInfoDtos'] = data['deviceLockInfoDtos'];
        }
    }
}
export class DeviceLockInfoDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['code'] = data['code'];
            this['lockCodeNumber'] = data['lockCodeNumber'];
            this['lockType'] = data['lockType'];
            this['lockPropertyType'] = data['lockPropertyType'];
        }
    }
}
export class UploadJsqOperationLogInput {
    constructor(data) {
        if (data) {
            this['jsqOperationLogs'] = data['jsqOperationLogs'];
        }
    }
}
export class JsqOperationLogDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class PagedResultDto_JsqOptLogDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class JsqOptLogDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['unreadCount'] = data['unreadCount'];
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export var EnumUserNotificationState;
(function (EnumUserNotificationState) {
    EnumUserNotificationState["Unread"] = "Unread";
    EnumUserNotificationState["Read"] = "Read";
})(EnumUserNotificationState || (EnumUserNotificationState = {}));
export class UserNotification {
    constructor(data) {
        if (data) {
            this['tenantId'] = data['tenantId'];
            this['userId'] = data['userId'];
            this['state'] = data['state'];
            this['notification'] = data['notification'];
            this['id'] = data['id'];
        }
    }
}
export var EnumTenantNotificationSeverity;
(function (EnumTenantNotificationSeverity) {
    EnumTenantNotificationSeverity["Info"] = "Info";
    EnumTenantNotificationSeverity["Success"] = "Success";
    EnumTenantNotificationSeverity["Warn"] = "Warn";
    EnumTenantNotificationSeverity["Error"] = "Error";
    EnumTenantNotificationSeverity["Fatal"] = "Fatal";
})(EnumTenantNotificationSeverity || (EnumTenantNotificationSeverity = {}));
export class TenantNotification {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['type'] = data['type'];
            this['properties'] = data['properties'];
        }
    }
}
export class EntityDto_Guid {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
        }
    }
}
export class GetNotificationSettingsOutput {
    constructor(data) {
        if (data) {
            this['receiveNotifications'] = data['receiveNotifications'];
            this['notifications'] = data['notifications'];
        }
    }
}
export class NotificationSubscriptionWithDisplayNameDto {
    constructor(data) {
        if (data) {
            this['displayName'] = data['displayName'];
            this['description'] = data['description'];
            this['name'] = data['name'];
            this['isSubscribed'] = data['isSubscribed'];
        }
    }
}
export class UpdateNotificationSettingsInput {
    constructor(data) {
        if (data) {
            this['receiveNotifications'] = data['receiveNotifications'];
            this['notifications'] = data['notifications'];
        }
    }
}
export class NotificationSubscriptionDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['isSubscribed'] = data['isSubscribed'];
        }
    }
}
export class GetOperationRecordOutput {
    constructor(data) {
        if (data) {
            this['infoDto'] = data['infoDto'];
            this['itemDtos'] = data['itemDtos'];
        }
    }
}
export var EnumOperationRecordInfoDtoEquipmentType;
(function (EnumOperationRecordInfoDtoEquipmentType) {
    EnumOperationRecordInfoDtoEquipmentType["KeyCabinet"] = "KeyCabinet";
    EnumOperationRecordInfoDtoEquipmentType["WireCabinet"] = "WireCabinet";
    EnumOperationRecordInfoDtoEquipmentType["SafetyWear"] = "SafetyWear";
    EnumOperationRecordInfoDtoEquipmentType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumOperationRecordInfoDtoEquipmentType["ManholeCover"] = "ManholeCover";
})(EnumOperationRecordInfoDtoEquipmentType || (EnumOperationRecordInfoDtoEquipmentType = {}));
export var EnumOperationRecordInfoDtoRecordLevel;
(function (EnumOperationRecordInfoDtoRecordLevel) {
    EnumOperationRecordInfoDtoRecordLevel["Red"] = "Red";
    EnumOperationRecordInfoDtoRecordLevel["Gray"] = "Gray";
    EnumOperationRecordInfoDtoRecordLevel["Green"] = "Green";
})(EnumOperationRecordInfoDtoRecordLevel || (EnumOperationRecordInfoDtoRecordLevel = {}));
export class OperationRecordInfoDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['operationTime'] = data['operationTime'];
            this['operationDescription'] = data['operationDescription'];
        }
    }
}
export class PagedResultDto_OperationRecordListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export var EnumOperationRecordListDtoEquipmentType;
(function (EnumOperationRecordListDtoEquipmentType) {
    EnumOperationRecordListDtoEquipmentType["KeyCabinet"] = "KeyCabinet";
    EnumOperationRecordListDtoEquipmentType["WireCabinet"] = "WireCabinet";
    EnumOperationRecordListDtoEquipmentType["SafetyWear"] = "SafetyWear";
    EnumOperationRecordListDtoEquipmentType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumOperationRecordListDtoEquipmentType["ManholeCover"] = "ManholeCover";
})(EnumOperationRecordListDtoEquipmentType || (EnumOperationRecordListDtoEquipmentType = {}));
export var EnumOperationRecordListDtoRecordLevel;
(function (EnumOperationRecordListDtoRecordLevel) {
    EnumOperationRecordListDtoRecordLevel["Red"] = "Red";
    EnumOperationRecordListDtoRecordLevel["Gray"] = "Gray";
    EnumOperationRecordListDtoRecordLevel["Green"] = "Green";
})(EnumOperationRecordListDtoRecordLevel || (EnumOperationRecordListDtoRecordLevel = {}));
export class OperationRecordListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class OrganizationUnitDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class OrganizationUnitUserListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['parentId'] = data['parentId'];
            this['displayName'] = data['displayName'];
        }
    }
}
export class UpdateOrganizationUnitInput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['displayName'] = data['displayName'];
        }
    }
}
export class MoveOrganizationUnitInput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['newParentId'] = data['newParentId'];
        }
    }
}
export class UsersToOrganizationUnitInput {
    constructor(data) {
        if (data) {
            this['userIds'] = data['userIds'];
            this['organizationUnitId'] = data['organizationUnitId'];
        }
    }
}
export class FindOrganizationUnitUsersInput {
    constructor(data) {
        if (data) {
            this['organizationUnitId'] = data['organizationUnitId'];
            this['maxResultCount'] = data['maxResultCount'];
            this['skipCount'] = data['skipCount'];
            this['filter'] = data['filter'];
        }
    }
}
export class PaymentInfoDto {
    constructor(data) {
        if (data) {
            this['edition'] = data['edition'];
            this['additionalPrice'] = data['additionalPrice'];
        }
    }
}
export class EditionSelectDto {
    constructor(data) {
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
export var EnumCreatePaymentDtoEditionPaymentType;
(function (EnumCreatePaymentDtoEditionPaymentType) {
    EnumCreatePaymentDtoEditionPaymentType["NewRegistration"] = "NewRegistration";
    EnumCreatePaymentDtoEditionPaymentType["BuyNow"] = "BuyNow";
    EnumCreatePaymentDtoEditionPaymentType["Upgrade"] = "Upgrade";
    EnumCreatePaymentDtoEditionPaymentType["Extend"] = "Extend";
})(EnumCreatePaymentDtoEditionPaymentType || (EnumCreatePaymentDtoEditionPaymentType = {}));
export var EnumCreatePaymentDtoPaymentPeriodType;
(function (EnumCreatePaymentDtoPaymentPeriodType) {
    EnumCreatePaymentDtoPaymentPeriodType["Monthly"] = "Monthly";
    EnumCreatePaymentDtoPaymentPeriodType["Annual"] = "Annual";
})(EnumCreatePaymentDtoPaymentPeriodType || (EnumCreatePaymentDtoPaymentPeriodType = {}));
export var EnumCreatePaymentDtoSubscriptionPaymentGatewayType;
(function (EnumCreatePaymentDtoSubscriptionPaymentGatewayType) {
    EnumCreatePaymentDtoSubscriptionPaymentGatewayType["Paypal"] = "Paypal";
})(EnumCreatePaymentDtoSubscriptionPaymentGatewayType || (EnumCreatePaymentDtoSubscriptionPaymentGatewayType = {}));
export class CreatePaymentDto {
    constructor(data) {
        if (data) {
            this['editionId'] = data['editionId'];
            this['editionPaymentType'] = data['editionPaymentType'];
            this['paymentPeriodType'] = data['paymentPeriodType'];
            this['subscriptionPaymentGatewayType'] = data['subscriptionPaymentGatewayType'];
        }
    }
}
export class CreatePaymentResponse {
    constructor(data) {
        if (data) {
        }
    }
}
export var EnumExecutePaymentDtoGateway;
(function (EnumExecutePaymentDtoGateway) {
    EnumExecutePaymentDtoGateway["Paypal"] = "Paypal";
})(EnumExecutePaymentDtoGateway || (EnumExecutePaymentDtoGateway = {}));
export var EnumExecutePaymentDtoEditionPaymentType;
(function (EnumExecutePaymentDtoEditionPaymentType) {
    EnumExecutePaymentDtoEditionPaymentType["NewRegistration"] = "NewRegistration";
    EnumExecutePaymentDtoEditionPaymentType["BuyNow"] = "BuyNow";
    EnumExecutePaymentDtoEditionPaymentType["Upgrade"] = "Upgrade";
    EnumExecutePaymentDtoEditionPaymentType["Extend"] = "Extend";
})(EnumExecutePaymentDtoEditionPaymentType || (EnumExecutePaymentDtoEditionPaymentType = {}));
export var EnumExecutePaymentDtoPaymentPeriodType;
(function (EnumExecutePaymentDtoPaymentPeriodType) {
    EnumExecutePaymentDtoPaymentPeriodType["Monthly"] = "Monthly";
    EnumExecutePaymentDtoPaymentPeriodType["Annual"] = "Annual";
})(EnumExecutePaymentDtoPaymentPeriodType || (EnumExecutePaymentDtoPaymentPeriodType = {}));
export class ExecutePaymentDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
        }
    }
}
export class PagedResultDto_SubscriptionPaymentListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class SubscriptionPaymentListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDto_PendingDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export var EnumPendingDtoPendingType;
(function (EnumPendingDtoPendingType) {
    EnumPendingDtoPendingType["KeyCabinet"] = "KeyCabinet";
    EnumPendingDtoPendingType["WireCabinet"] = "WireCabinet";
    EnumPendingDtoPendingType["LockControlTask"] = "LockControlTask";
})(EnumPendingDtoPendingType || (EnumPendingDtoPendingType = {}));
export class PendingDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class FlatPermissionWithLevelDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ProductListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['product'] = data['product'];
            this['productProperties'] = data['productProperties'];
        }
    }
}
export class ProductEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['product'] = data['product'];
            this['productProperties'] = data['productProperties'];
        }
    }
}
export var EnumCreateOrUpdateProductDtoType;
(function (EnumCreateOrUpdateProductDtoType) {
    EnumCreateOrUpdateProductDtoType["KeyCabinet"] = "KeyCabinet";
    EnumCreateOrUpdateProductDtoType["WireCabinet"] = "WireCabinet";
    EnumCreateOrUpdateProductDtoType["SafetyWear"] = "SafetyWear";
    EnumCreateOrUpdateProductDtoType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumCreateOrUpdateProductDtoType["ManholeCover"] = "ManholeCover";
})(EnumCreateOrUpdateProductDtoType || (EnumCreateOrUpdateProductDtoType = {}));
export class CreateOrUpdateProductDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['type'] = data['type'];
            this['model'] = data['model'];
            this['id'] = data['id'];
        }
    }
}
export var EnumProductPropertyEditDtoType;
(function (EnumProductPropertyEditDtoType) {
    EnumProductPropertyEditDtoType["BaseProperty"] = "BaseProperty";
    EnumProductPropertyEditDtoType["SignalingAndControl"] = "SignalingAndControl";
    EnumProductPropertyEditDtoType["SensingAndAdjustment"] = "SensingAndAdjustment";
})(EnumProductPropertyEditDtoType || (EnumProductPropertyEditDtoType = {}));
export var EnumProductPropertyEditDtoBitType;
(function (EnumProductPropertyEditDtoBitType) {
    EnumProductPropertyEditDtoBitType["ReadOnly"] = "ReadOnly";
    EnumProductPropertyEditDtoBitType["WriteOnly"] = "WriteOnly";
    EnumProductPropertyEditDtoBitType["ReadAndWrite"] = "ReadAndWrite";
})(EnumProductPropertyEditDtoBitType || (EnumProductPropertyEditDtoBitType = {}));
export class ProductPropertyEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class GetProductPropertyEditOutput {
    constructor(data) {
        if (data) {
            this['productProperty'] = data['productProperty'];
        }
    }
}
export class CreateOrUpdateProductPropertyInput {
    constructor(data) {
        if (data) {
            this['productProperty'] = data['productProperty'];
        }
    }
}
export class CurrentUserProfileEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['qrCodeSetupImageUrl'] = data['qrCodeSetupImageUrl'];
        }
    }
}
export class VerifySmsCodeInputDto {
    constructor(data) {
        if (data) {
            this['code'] = data['code'];
        }
    }
}
export class ChangePasswordInput {
    constructor(data) {
        if (data) {
            this['currentPassword'] = data['currentPassword'];
            this['newPassword'] = data['newPassword'];
        }
    }
}
export class UpdateProfilePictureInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['setting'] = data['setting'];
        }
    }
}
export class GetProfilePictureOutput {
    constructor(data) {
        if (data) {
            this['profilePicture'] = data['profilePicture'];
        }
    }
}
export class ChangeUserLanguageDto {
    constructor(data) {
        if (data) {
            this['languageName'] = data['languageName'];
        }
    }
}
export class AddOrUpdateRiskTicketInput {
    constructor(data) {
        if (data) {
            this['riskTicket'] = data['riskTicket'];
            this['riskItems'] = data['riskItems'];
        }
    }
}
export class RiskPrecontrolTicketDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
        }
    }
}
export class AddOrUpdateRiskTicketItemsInput {
    constructor(data) {
        if (data) {
            this['riskTicketId'] = data['riskTicketId'];
            this['riskItems'] = data['riskItems'];
        }
    }
}
export class AddOrUpdateRiskItemTemplateInput {
    constructor(data) {
        if (data) {
            this['riskItemTemplate'] = data['riskItemTemplate'];
        }
    }
}
export class RiskItemTemplate {
    constructor(data) {
        if (data) {
            this['no'] = data['no'];
            this['dangerSource'] = data['dangerSource'];
            this['workStandard'] = data['workStandard'];
            this['id'] = data['id'];
        }
    }
}
export class ListResultDto_RiskItemTemplate {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class AddOrUpdateRiskItemTermMapInput {
    constructor(data) {
        if (data) {
            this['riskItemTermMap'] = data['riskItemTermMap'];
        }
    }
}
export class RiskItemTermMap {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
export var EnumDeviceTermType;
(function (EnumDeviceTermType) {
    EnumDeviceTermType["Default"] = "Default";
    EnumDeviceTermType["ByLinkage"] = "ByLinkage";
    EnumDeviceTermType["AddBefault"] = "AddBefault";
    EnumDeviceTermType["AddAfter"] = "AddAfter";
    EnumDeviceTermType["Selectable"] = "Selectable";
})(EnumDeviceTermType || (EnumDeviceTermType = {}));
export class DeviceTerm {
    constructor(data) {
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
    constructor(data) {
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
export var EnumDeviceInstallLockType;
(function (EnumDeviceInstallLockType) {
    EnumDeviceInstallLockType["ImmovableLock"] = "ImmovableLock";
    EnumDeviceInstallLockType["CommonLock"] = "CommonLock";
    EnumDeviceInstallLockType["ImmovableAndCommonLock"] = "ImmovableAndCommonLock";
})(EnumDeviceInstallLockType || (EnumDeviceInstallLockType = {}));
export class Device {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
export var EnumTicketTaskTicketOperateType;
(function (EnumTicketTaskTicketOperateType) {
    EnumTicketTaskTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTaskTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTaskTicketOperateType || (EnumTicketTaskTicketOperateType = {}));
export var EnumTicketTaskTicketExecOrder;
(function (EnumTicketTaskTicketExecOrder) {
    EnumTicketTaskTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTaskTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTaskTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTaskTicketExecOrder || (EnumTicketTaskTicketExecOrder = {}));
export var EnumTicketTaskState;
(function (EnumTicketTaskState) {
    EnumTicketTaskState["None"] = "None";
    EnumTicketTaskState["WaitCommit"] = "WaitCommit";
    EnumTicketTaskState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTaskState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTaskState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTaskState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTaskState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTaskState["WaitApprove"] = "WaitApprove";
    EnumTicketTaskState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTaskState["ReadyGo"] = "ReadyGo";
    EnumTicketTaskState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTaskState["Executing"] = "Executing";
    EnumTicketTaskState["Pause"] = "Pause";
    EnumTicketTaskState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTaskState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTaskState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTaskState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTaskState["Finished"] = "Finished";
    EnumTicketTaskState["Break"] = "Break";
    EnumTicketTaskState["Cancel"] = "Cancel";
    EnumTicketTaskState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTaskState["ReadOver"] = "ReadOver";
    EnumTicketTaskState["Archived"] = "Archived";
})(EnumTicketTaskState || (EnumTicketTaskState = {}));
export var EnumTicketTaskTicketAppoveLevel;
(function (EnumTicketTaskTicketAppoveLevel) {
    EnumTicketTaskTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTaskTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTaskTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTaskTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTaskTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTaskTicketAppoveLevel || (EnumTicketTaskTicketAppoveLevel = {}));
export var EnumTicketTaskTicketType;
(function (EnumTicketTaskTicketType) {
    EnumTicketTaskTicketType["Task"] = "Task";
    EnumTicketTaskTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTaskTicketType["Common"] = "Common";
    EnumTicketTaskTicketType["Chemistry"] = "Chemistry";
    EnumTicketTaskTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTaskTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTaskTicketType["Overhual"] = "Overhual";
    EnumTicketTaskTicketType["Furnace"] = "Furnace";
    EnumTicketTaskTicketType["Lockset"] = "Lockset";
    EnumTicketTaskTicketType["History"] = "History";
    EnumTicketTaskTicketType["Typical"] = "Typical";
    EnumTicketTaskTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTaskTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTaskTicketType["None"] = "None";
})(EnumTicketTaskTicketType || (EnumTicketTaskTicketType = {}));
export class TicketTask {
    constructor(data) {
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
export var EnumTicketTypicalTicketOperateType;
(function (EnumTicketTypicalTicketOperateType) {
    EnumTicketTypicalTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTypicalTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTypicalTicketOperateType || (EnumTicketTypicalTicketOperateType = {}));
export var EnumTicketTypicalTicketExecOrder;
(function (EnumTicketTypicalTicketExecOrder) {
    EnumTicketTypicalTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTypicalTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTypicalTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTypicalTicketExecOrder || (EnumTicketTypicalTicketExecOrder = {}));
export var EnumTicketTypicalState;
(function (EnumTicketTypicalState) {
    EnumTicketTypicalState["None"] = "None";
    EnumTicketTypicalState["WaitCommit"] = "WaitCommit";
    EnumTicketTypicalState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTypicalState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTypicalState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTypicalState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTypicalState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTypicalState["WaitApprove"] = "WaitApprove";
    EnumTicketTypicalState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTypicalState["ReadyGo"] = "ReadyGo";
    EnumTicketTypicalState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTypicalState["Executing"] = "Executing";
    EnumTicketTypicalState["Pause"] = "Pause";
    EnumTicketTypicalState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTypicalState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTypicalState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTypicalState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTypicalState["Finished"] = "Finished";
    EnumTicketTypicalState["Break"] = "Break";
    EnumTicketTypicalState["Cancel"] = "Cancel";
    EnumTicketTypicalState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTypicalState["ReadOver"] = "ReadOver";
    EnumTicketTypicalState["Archived"] = "Archived";
})(EnumTicketTypicalState || (EnumTicketTypicalState = {}));
export var EnumTicketTypicalTicketAppoveLevel;
(function (EnumTicketTypicalTicketAppoveLevel) {
    EnumTicketTypicalTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTypicalTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTypicalTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTypicalTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTypicalTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTypicalTicketAppoveLevel || (EnumTicketTypicalTicketAppoveLevel = {}));
export var EnumTicketTypicalTicketType;
(function (EnumTicketTypicalTicketType) {
    EnumTicketTypicalTicketType["Task"] = "Task";
    EnumTicketTypicalTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTypicalTicketType["Common"] = "Common";
    EnumTicketTypicalTicketType["Chemistry"] = "Chemistry";
    EnumTicketTypicalTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTypicalTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTypicalTicketType["Overhual"] = "Overhual";
    EnumTicketTypicalTicketType["Furnace"] = "Furnace";
    EnumTicketTypicalTicketType["Lockset"] = "Lockset";
    EnumTicketTypicalTicketType["History"] = "History";
    EnumTicketTypicalTicketType["Typical"] = "Typical";
    EnumTicketTypicalTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTypicalTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTypicalTicketType["None"] = "None";
})(EnumTicketTypicalTicketType || (EnumTicketTypicalTicketType = {}));
export class TicketTypical {
    constructor(data) {
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
export var EnumTicketTypicalInvalidTicketOperateType;
(function (EnumTicketTypicalInvalidTicketOperateType) {
    EnumTicketTypicalInvalidTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTypicalInvalidTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTypicalInvalidTicketOperateType || (EnumTicketTypicalInvalidTicketOperateType = {}));
export var EnumTicketTypicalInvalidTicketExecOrder;
(function (EnumTicketTypicalInvalidTicketExecOrder) {
    EnumTicketTypicalInvalidTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTypicalInvalidTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTypicalInvalidTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTypicalInvalidTicketExecOrder || (EnumTicketTypicalInvalidTicketExecOrder = {}));
export var EnumTicketTypicalInvalidState;
(function (EnumTicketTypicalInvalidState) {
    EnumTicketTypicalInvalidState["None"] = "None";
    EnumTicketTypicalInvalidState["WaitCommit"] = "WaitCommit";
    EnumTicketTypicalInvalidState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTypicalInvalidState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTypicalInvalidState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTypicalInvalidState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTypicalInvalidState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTypicalInvalidState["WaitApprove"] = "WaitApprove";
    EnumTicketTypicalInvalidState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTypicalInvalidState["ReadyGo"] = "ReadyGo";
    EnumTicketTypicalInvalidState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTypicalInvalidState["Executing"] = "Executing";
    EnumTicketTypicalInvalidState["Pause"] = "Pause";
    EnumTicketTypicalInvalidState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTypicalInvalidState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTypicalInvalidState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTypicalInvalidState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTypicalInvalidState["Finished"] = "Finished";
    EnumTicketTypicalInvalidState["Break"] = "Break";
    EnumTicketTypicalInvalidState["Cancel"] = "Cancel";
    EnumTicketTypicalInvalidState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTypicalInvalidState["ReadOver"] = "ReadOver";
    EnumTicketTypicalInvalidState["Archived"] = "Archived";
})(EnumTicketTypicalInvalidState || (EnumTicketTypicalInvalidState = {}));
export var EnumTicketTypicalInvalidTicketAppoveLevel;
(function (EnumTicketTypicalInvalidTicketAppoveLevel) {
    EnumTicketTypicalInvalidTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTypicalInvalidTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTypicalInvalidTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTypicalInvalidTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTypicalInvalidTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTypicalInvalidTicketAppoveLevel || (EnumTicketTypicalInvalidTicketAppoveLevel = {}));
export var EnumTicketTypicalInvalidTicketType;
(function (EnumTicketTypicalInvalidTicketType) {
    EnumTicketTypicalInvalidTicketType["Task"] = "Task";
    EnumTicketTypicalInvalidTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTypicalInvalidTicketType["Common"] = "Common";
    EnumTicketTypicalInvalidTicketType["Chemistry"] = "Chemistry";
    EnumTicketTypicalInvalidTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTypicalInvalidTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTypicalInvalidTicketType["Overhual"] = "Overhual";
    EnumTicketTypicalInvalidTicketType["Furnace"] = "Furnace";
    EnumTicketTypicalInvalidTicketType["Lockset"] = "Lockset";
    EnumTicketTypicalInvalidTicketType["History"] = "History";
    EnumTicketTypicalInvalidTicketType["Typical"] = "Typical";
    EnumTicketTypicalInvalidTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTypicalInvalidTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTypicalInvalidTicketType["None"] = "None";
})(EnumTicketTypicalInvalidTicketType || (EnumTicketTypicalInvalidTicketType = {}));
export class TicketTypicalInvalid {
    constructor(data) {
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
    constructor(data) {
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
export var EnumDeviceCodeInfoLockCodeNumber;
(function (EnumDeviceCodeInfoLockCodeNumber) {
    EnumDeviceCodeInfoLockCodeNumber["Um1"] = "Um1";
    EnumDeviceCodeInfoLockCodeNumber["Um2"] = "Um2";
    EnumDeviceCodeInfoLockCodeNumber["Um3"] = "Um3";
    EnumDeviceCodeInfoLockCodeNumber["Um4"] = "Um4";
    EnumDeviceCodeInfoLockCodeNumber["Um5"] = "Um5";
    EnumDeviceCodeInfoLockCodeNumber["Um6"] = "Um6";
    EnumDeviceCodeInfoLockCodeNumber["Um7"] = "Um7";
    EnumDeviceCodeInfoLockCodeNumber["Um8"] = "Um8";
    EnumDeviceCodeInfoLockCodeNumber["Um9"] = "Um9";
    EnumDeviceCodeInfoLockCodeNumber["Um10"] = "Um10";
    EnumDeviceCodeInfoLockCodeNumber["Um11"] = "Um11";
    EnumDeviceCodeInfoLockCodeNumber["Um12"] = "Um12";
    EnumDeviceCodeInfoLockCodeNumber["Um13"] = "Um13";
    EnumDeviceCodeInfoLockCodeNumber["Um14"] = "Um14";
    EnumDeviceCodeInfoLockCodeNumber["Um15"] = "Um15";
    EnumDeviceCodeInfoLockCodeNumber["Um16"] = "Um16";
    EnumDeviceCodeInfoLockCodeNumber["Um17"] = "Um17";
    EnumDeviceCodeInfoLockCodeNumber["Um18"] = "Um18";
})(EnumDeviceCodeInfoLockCodeNumber || (EnumDeviceCodeInfoLockCodeNumber = {}));
export class DeviceCodeInfo {
    constructor(data) {
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
    constructor(data) {
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
export var EnumTicketItemTaskOperateMode;
(function (EnumTicketItemTaskOperateMode) {
    EnumTicketItemTaskOperateMode["None"] = "None";
    EnumTicketItemTaskOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskOperateMode["Error"] = "Error";
    EnumTicketItemTaskOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskOperateMode || (EnumTicketItemTaskOperateMode = {}));
export var EnumTicketItemTaskRealOperateMode;
(function (EnumTicketItemTaskRealOperateMode) {
    EnumTicketItemTaskRealOperateMode["None"] = "None";
    EnumTicketItemTaskRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskRealOperateMode["Error"] = "Error";
    EnumTicketItemTaskRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskRealOperateMode || (EnumTicketItemTaskRealOperateMode = {}));
export var EnumTicketItemTaskOperateResult;
(function (EnumTicketItemTaskOperateResult) {
    EnumTicketItemTaskOperateResult["None"] = "None";
    EnumTicketItemTaskOperateResult["Operated"] = "Operated";
    EnumTicketItemTaskOperateResult["Finished"] = "Finished";
})(EnumTicketItemTaskOperateResult || (EnumTicketItemTaskOperateResult = {}));
export class TicketItemTask {
    constructor(data) {
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
export var EnumTicketItemTypicalOperateMode;
(function (EnumTicketItemTypicalOperateMode) {
    EnumTicketItemTypicalOperateMode["None"] = "None";
    EnumTicketItemTypicalOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalOperateMode["Error"] = "Error";
    EnumTicketItemTypicalOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalOperateMode || (EnumTicketItemTypicalOperateMode = {}));
export var EnumTicketItemTypicalRealOperateMode;
(function (EnumTicketItemTypicalRealOperateMode) {
    EnumTicketItemTypicalRealOperateMode["None"] = "None";
    EnumTicketItemTypicalRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalRealOperateMode["Error"] = "Error";
    EnumTicketItemTypicalRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalRealOperateMode || (EnumTicketItemTypicalRealOperateMode = {}));
export var EnumTicketItemTypicalOperateResult;
(function (EnumTicketItemTypicalOperateResult) {
    EnumTicketItemTypicalOperateResult["None"] = "None";
    EnumTicketItemTypicalOperateResult["Operated"] = "Operated";
    EnumTicketItemTypicalOperateResult["Finished"] = "Finished";
})(EnumTicketItemTypicalOperateResult || (EnumTicketItemTypicalOperateResult = {}));
export class TicketItemTypical {
    constructor(data) {
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
export var EnumTicketItemTypicalInvalidOperateMode;
(function (EnumTicketItemTypicalInvalidOperateMode) {
    EnumTicketItemTypicalInvalidOperateMode["None"] = "None";
    EnumTicketItemTypicalInvalidOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalInvalidOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalInvalidOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalInvalidOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalInvalidOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalInvalidOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalInvalidOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalInvalidOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalInvalidOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalInvalidOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalInvalidOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalInvalidOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalInvalidOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalInvalidOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalInvalidOperateMode["Error"] = "Error";
    EnumTicketItemTypicalInvalidOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalInvalidOperateMode || (EnumTicketItemTypicalInvalidOperateMode = {}));
export var EnumTicketItemTypicalInvalidRealOperateMode;
(function (EnumTicketItemTypicalInvalidRealOperateMode) {
    EnumTicketItemTypicalInvalidRealOperateMode["None"] = "None";
    EnumTicketItemTypicalInvalidRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalInvalidRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalInvalidRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalInvalidRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalInvalidRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalInvalidRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalInvalidRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalInvalidRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalInvalidRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalInvalidRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalInvalidRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalInvalidRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalInvalidRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalInvalidRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalInvalidRealOperateMode["Error"] = "Error";
    EnumTicketItemTypicalInvalidRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalInvalidRealOperateMode || (EnumTicketItemTypicalInvalidRealOperateMode = {}));
export var EnumTicketItemTypicalInvalidOperateResult;
(function (EnumTicketItemTypicalInvalidOperateResult) {
    EnumTicketItemTypicalInvalidOperateResult["None"] = "None";
    EnumTicketItemTypicalInvalidOperateResult["Operated"] = "Operated";
    EnumTicketItemTypicalInvalidOperateResult["Finished"] = "Finished";
})(EnumTicketItemTypicalInvalidOperateResult || (EnumTicketItemTypicalInvalidOperateResult = {}));
export class TicketItemTypicalInvalid {
    constructor(data) {
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
export var EnumDeviceLockStatusTicketType;
(function (EnumDeviceLockStatusTicketType) {
    EnumDeviceLockStatusTicketType["Task"] = "Task";
    EnumDeviceLockStatusTicketType["CentralizedControl"] = "CentralizedControl";
    EnumDeviceLockStatusTicketType["Common"] = "Common";
    EnumDeviceLockStatusTicketType["Chemistry"] = "Chemistry";
    EnumDeviceLockStatusTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumDeviceLockStatusTicketType["AshSulfur"] = "AshSulfur";
    EnumDeviceLockStatusTicketType["Overhual"] = "Overhual";
    EnumDeviceLockStatusTicketType["Furnace"] = "Furnace";
    EnumDeviceLockStatusTicketType["Lockset"] = "Lockset";
    EnumDeviceLockStatusTicketType["History"] = "History";
    EnumDeviceLockStatusTicketType["Typical"] = "Typical";
    EnumDeviceLockStatusTicketType["RiskTicket"] = "RiskTicket";
    EnumDeviceLockStatusTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumDeviceLockStatusTicketType["None"] = "None";
})(EnumDeviceLockStatusTicketType || (EnumDeviceLockStatusTicketType = {}));
export class DeviceLockStatus {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
export var EnumProductType;
(function (EnumProductType) {
    EnumProductType["KeyCabinet"] = "KeyCabinet";
    EnumProductType["WireCabinet"] = "WireCabinet";
    EnumProductType["SafetyWear"] = "SafetyWear";
    EnumProductType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumProductType["ManholeCover"] = "ManholeCover";
})(EnumProductType || (EnumProductType = {}));
export class Product {
    constructor(data) {
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
export var EnumEquipmentPropertyType;
(function (EnumEquipmentPropertyType) {
    EnumEquipmentPropertyType["BaseProperty"] = "BaseProperty";
    EnumEquipmentPropertyType["SignalingAndControl"] = "SignalingAndControl";
    EnumEquipmentPropertyType["SensingAndAdjustment"] = "SensingAndAdjustment";
})(EnumEquipmentPropertyType || (EnumEquipmentPropertyType = {}));
export var EnumEquipmentPropertyBitType;
(function (EnumEquipmentPropertyBitType) {
    EnumEquipmentPropertyBitType["ReadOnly"] = "ReadOnly";
    EnumEquipmentPropertyBitType["WriteOnly"] = "WriteOnly";
    EnumEquipmentPropertyBitType["ReadAndWrite"] = "ReadAndWrite";
})(EnumEquipmentPropertyBitType || (EnumEquipmentPropertyBitType = {}));
export class EquipmentProperty {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
export var EnumLockCodeConfigLockType;
(function (EnumLockCodeConfigLockType) {
    EnumLockCodeConfigLockType["NoKey"] = "NoKey";
    EnumLockCodeConfigLockType["JXLock"] = "JXLock";
    EnumLockCodeConfigLockType["DBMLock"] = "DBMLock";
    EnumLockCodeConfigLockType["DKLock"] = "DKLock";
    EnumLockCodeConfigLockType["DXDKLock"] = "DXDKLock";
    EnumLockCodeConfigLockType["GSNYD"] = "GSNYD";
    EnumLockCodeConfigLockType["WYYD"] = "WYYD";
    EnumLockCodeConfigLockType["YYYD"] = "YYYD";
    EnumLockCodeConfigLockType["CJFKLock"] = "CJFKLock";
    EnumLockCodeConfigLockType["FKSDBMLock"] = "FKSDBMLock";
    EnumLockCodeConfigLockType["ZNLock"] = "ZNLock";
    EnumLockCodeConfigLockType["ZNYB"] = "ZNYB";
    EnumLockCodeConfigLockType["YYDWZJC"] = "YYDWZJC";
    EnumLockCodeConfigLockType["WYDWZJC"] = "WYDWZJC";
    EnumLockCodeConfigLockType["JXDBMLock"] = "JXDBMLock";
    EnumLockCodeConfigLockType["DBMLock_2H"] = "DBMLock_2H";
    EnumLockCodeConfigLockType["DBMLock_3H"] = "DBMLock_3H";
    EnumLockCodeConfigLockType["XJLock"] = "XJLock";
    EnumLockCodeConfigLockType["WX_DBMLock"] = "WX_DBMLock";
    EnumLockCodeConfigLockType["WX_JXLock"] = "WX_JXLock";
    EnumLockCodeConfigLockType["WX_GSN2L"] = "WX_GSN2L";
    EnumLockCodeConfigLockType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumLockCodeConfigLockType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumLockCodeConfigLockType["ZNHWMLock"] = "ZNHWMLock";
    EnumLockCodeConfigLockType["GSN2E"] = "GSN2E";
    EnumLockCodeConfigLockType["GSN2YD"] = "GSN2YD";
    EnumLockCodeConfigLockType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumLockCodeConfigLockType["WX_DZBQ"] = "WX_DZBQ";
    EnumLockCodeConfigLockType["WX_BSJXLock"] = "WX_BSJXLock";
    EnumLockCodeConfigLockType["WX_SGWZSLock"] = "WX_SGWZSLock";
    EnumLockCodeConfigLockType["SGWZSLock"] = "SGWZSLock";
    EnumLockCodeConfigLockType["TBLock"] = "TBLock";
    EnumLockCodeConfigLockType["XHJGLock"] = "XHJGLock";
    EnumLockCodeConfigLockType["SLGLock"] = "SLGLock";
    EnumLockCodeConfigLockType["LTLock"] = "LTLock";
    EnumLockCodeConfigLockType["BSQLock"] = "BSQLock";
    EnumLockCodeConfigLockType["BSLock"] = "BSLock";
    EnumLockCodeConfigLockType["CXLock"] = "CXLock";
    EnumLockCodeConfigLockType["FDHLock"] = "FDHLock";
    EnumLockCodeConfigLockType["PMLock"] = "PMLock";
    EnumLockCodeConfigLockType["LGLock"] = "LGLock";
    EnumLockCodeConfigLockType["FHMLock"] = "FHMLock";
    EnumLockCodeConfigLockType["YKLock"] = "YKLock";
    EnumLockCodeConfigLockType["ZNSXLock"] = "ZNSXLock";
    EnumLockCodeConfigLockType["GYJLYDQ"] = "GYJLYDQ";
    EnumLockCodeConfigLockType["LGLock_6A"] = "LGLock_6A";
    EnumLockCodeConfigLockType["WTJGLock"] = "WTJGLock";
    EnumLockCodeConfigLockType["DKHLock"] = "DKHLock";
})(EnumLockCodeConfigLockType || (EnumLockCodeConfigLockType = {}));
export var EnumLockCodeConfigLockPropertyType;
(function (EnumLockCodeConfigLockPropertyType) {
    EnumLockCodeConfigLockPropertyType["NoKey"] = "NoKey";
    EnumLockCodeConfigLockPropertyType["XHJGLock"] = "XHJGLock";
    EnumLockCodeConfigLockPropertyType["SLGLock"] = "SLGLock";
    EnumLockCodeConfigLockPropertyType["LTLock"] = "LTLock";
    EnumLockCodeConfigLockPropertyType["BSQLock"] = "BSQLock";
    EnumLockCodeConfigLockPropertyType["BSLock"] = "BSLock";
    EnumLockCodeConfigLockPropertyType["CXLock"] = "CXLock";
    EnumLockCodeConfigLockPropertyType["FDHLock"] = "FDHLock";
    EnumLockCodeConfigLockPropertyType["PMLock"] = "PMLock";
    EnumLockCodeConfigLockPropertyType["LGLock"] = "LGLock";
    EnumLockCodeConfigLockPropertyType["FHMLock"] = "FHMLock";
    EnumLockCodeConfigLockPropertyType["YKLock"] = "YKLock";
    EnumLockCodeConfigLockPropertyType["HWGMLock"] = "HWGMLock";
    EnumLockCodeConfigLockPropertyType["WX_JXLock"] = "WX_JXLock";
    EnumLockCodeConfigLockPropertyType["WX_DBMLock"] = "WX_DBMLock";
    EnumLockCodeConfigLockPropertyType["GSN2L"] = "GSN2L";
    EnumLockCodeConfigLockPropertyType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumLockCodeConfigLockPropertyType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumLockCodeConfigLockPropertyType["WX_SKJXLock"] = "WX_SKJXLock";
    EnumLockCodeConfigLockPropertyType["GSN2YD"] = "GSN2YD";
    EnumLockCodeConfigLockPropertyType["XJLock"] = "XJLock";
    EnumLockCodeConfigLockPropertyType["JM_GSN2YD"] = "JM_GSN2YD";
    EnumLockCodeConfigLockPropertyType["GLDBP"] = "GLDBP";
    EnumLockCodeConfigLockPropertyType["GLWYBS"] = "GLWYBS";
    EnumLockCodeConfigLockPropertyType["LSGLGLock"] = "LSGLGLock";
    EnumLockCodeConfigLockPropertyType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumLockCodeConfigLockPropertyType["LGLock_6A"] = "LGLock_6A";
    EnumLockCodeConfigLockPropertyType["WTJGLock"] = "WTJGLock";
    EnumLockCodeConfigLockPropertyType["DKHLock"] = "DKHLock";
})(EnumLockCodeConfigLockPropertyType || (EnumLockCodeConfigLockPropertyType = {}));
export var EnumLockCodeConfigLockCodeNumber;
(function (EnumLockCodeConfigLockCodeNumber) {
    EnumLockCodeConfigLockCodeNumber["Um1"] = "Um1";
    EnumLockCodeConfigLockCodeNumber["Um2"] = "Um2";
    EnumLockCodeConfigLockCodeNumber["Um3"] = "Um3";
    EnumLockCodeConfigLockCodeNumber["Um4"] = "Um4";
    EnumLockCodeConfigLockCodeNumber["Um5"] = "Um5";
    EnumLockCodeConfigLockCodeNumber["Um6"] = "Um6";
    EnumLockCodeConfigLockCodeNumber["Um7"] = "Um7";
    EnumLockCodeConfigLockCodeNumber["Um8"] = "Um8";
    EnumLockCodeConfigLockCodeNumber["Um9"] = "Um9";
    EnumLockCodeConfigLockCodeNumber["Um10"] = "Um10";
    EnumLockCodeConfigLockCodeNumber["Um11"] = "Um11";
    EnumLockCodeConfigLockCodeNumber["Um12"] = "Um12";
    EnumLockCodeConfigLockCodeNumber["Um13"] = "Um13";
    EnumLockCodeConfigLockCodeNumber["Um14"] = "Um14";
    EnumLockCodeConfigLockCodeNumber["Um15"] = "Um15";
    EnumLockCodeConfigLockCodeNumber["Um16"] = "Um16";
    EnumLockCodeConfigLockCodeNumber["Um17"] = "Um17";
    EnumLockCodeConfigLockCodeNumber["Um18"] = "Um18";
})(EnumLockCodeConfigLockCodeNumber || (EnumLockCodeConfigLockCodeNumber = {}));
export class LockCodeConfig {
    constructor(data) {
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
    constructor(data) {
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
export var EnumProductPropertyType;
(function (EnumProductPropertyType) {
    EnumProductPropertyType["BaseProperty"] = "BaseProperty";
    EnumProductPropertyType["SignalingAndControl"] = "SignalingAndControl";
    EnumProductPropertyType["SensingAndAdjustment"] = "SensingAndAdjustment";
})(EnumProductPropertyType || (EnumProductPropertyType = {}));
export var EnumProductPropertyBitType;
(function (EnumProductPropertyBitType) {
    EnumProductPropertyBitType["ReadOnly"] = "ReadOnly";
    EnumProductPropertyBitType["WriteOnly"] = "WriteOnly";
    EnumProductPropertyBitType["ReadAndWrite"] = "ReadAndWrite";
})(EnumProductPropertyBitType || (EnumProductPropertyBitType = {}));
export class ProductProperty {
    constructor(data) {
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
export var EnumEquipmentPropertyLogProductType;
(function (EnumEquipmentPropertyLogProductType) {
    EnumEquipmentPropertyLogProductType["KeyCabinet"] = "KeyCabinet";
    EnumEquipmentPropertyLogProductType["WireCabinet"] = "WireCabinet";
    EnumEquipmentPropertyLogProductType["SafetyWear"] = "SafetyWear";
    EnumEquipmentPropertyLogProductType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumEquipmentPropertyLogProductType["ManholeCover"] = "ManholeCover";
})(EnumEquipmentPropertyLogProductType || (EnumEquipmentPropertyLogProductType = {}));
export class EquipmentPropertyLog {
    constructor(data) {
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
    constructor(data) {
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
export var EnumTerminalPortConfigPortType;
(function (EnumTerminalPortConfigPortType) {
    EnumTerminalPortConfigPortType["TcpClient"] = "TcpClient";
    EnumTerminalPortConfigPortType["TcpServer"] = "TcpServer";
    EnumTerminalPortConfigPortType["ComPort"] = "ComPort";
})(EnumTerminalPortConfigPortType || (EnumTerminalPortConfigPortType = {}));
export var EnumTerminalPortConfigProtocolType;
(function (EnumTerminalPortConfigProtocolType) {
    EnumTerminalPortConfigProtocolType["WireCabinetProtocol"] = "WireCabinetProtocol";
    EnumTerminalPortConfigProtocolType["KeySurpervisorProtocol"] = "KeySurpervisorProtocol";
    EnumTerminalPortConfigProtocolType["Iec104Protocol"] = "Iec104Protocol";
    EnumTerminalPortConfigProtocolType["JsqProtocol"] = "JsqProtocol";
})(EnumTerminalPortConfigProtocolType || (EnumTerminalPortConfigProtocolType = {}));
export class TerminalPortConfig {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['keyWord'] = data['keyWord'];
        }
    }
}
export class ListResultDto_RiskItemTermMap {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class RiskItemDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDto_RoleListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class RoleListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['role'] = data['role'];
            this['permissions'] = data['permissions'];
            this['grantedPermissionNames'] = data['grantedPermissionNames'];
        }
    }
}
export class RoleEditDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['displayName'] = data['displayName'];
            this['isDefault'] = data['isDefault'];
        }
    }
}
export class FlatPermissionDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['role'] = data['role'];
            this['grantedPermissionNames'] = data['grantedPermissionNames'];
        }
    }
}
export class SafetyWearMonitoringInput {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class EquipmentInfoOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDto_SafetyWearUserOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class SafetyWearUserOutput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['userName'] = data['userName'];
        }
    }
}
export class AddSerialNumberInput {
    constructor(data) {
        if (data) {
            this['serialNumber'] = data['serialNumber'];
        }
    }
}
export class SerialNumberDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class SetSerialMaxNumberInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['code'] = data['code'];
            this['maxNumber'] = data['maxNumber'];
        }
    }
}
export class GetCurrentLoginInformationsOutput {
    constructor(data) {
        if (data) {
            this['user'] = data['user'];
            this['tenant'] = data['tenant'];
            this['application'] = data['application'];
            this['station'] = data['station'];
        }
    }
}
export class UserLoginInfoDto {
    constructor(data) {
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
export var EnumTenantLoginInfoDtoPaymentPeriodType;
(function (EnumTenantLoginInfoDtoPaymentPeriodType) {
    EnumTenantLoginInfoDtoPaymentPeriodType["Monthly"] = "Monthly";
    EnumTenantLoginInfoDtoPaymentPeriodType["Annual"] = "Annual";
})(EnumTenantLoginInfoDtoPaymentPeriodType || (EnumTenantLoginInfoDtoPaymentPeriodType = {}));
export class TenantLoginInfoDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['version'] = data['version'];
            this['releaseDate'] = data['releaseDate'];
            this['features'] = data['features'];
        }
    }
}
export class StationLoginInfoDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
        }
    }
}
export class EditionInfoDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['signInToken'] = data['signInToken'];
            this['encodedUserId'] = data['encodedUserId'];
            this['encodedTenantId'] = data['encodedTenantId'];
        }
    }
}
export class ListResultDto_StationListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class StationListDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['no'] = data['no'];
            this['id'] = data['id'];
        }
    }
}
export class GetStationEditOutput {
    constructor(data) {
        if (data) {
            this['station'] = data['station'];
        }
    }
}
export class GetStationEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['station'] = data['station'];
        }
    }
}
export class CreateOrUpdateStationDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class BindEquipmentStationInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['equipmentIds'] = data['equipmentIds'];
        }
    }
}
export class CreateStationUserInput {
    constructor(data) {
        if (data) {
            this['stationUserDtos'] = data['stationUserDtos'];
        }
    }
}
export class StationUserDto {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['userId'] = data['userId'];
        }
    }
}
export class UpdateDefaultUserStationInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['userId'] = data['userId'];
        }
    }
}
export class CreateStationAreaInput {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['parentId'] = data['parentId'];
        }
    }
}
export class StationAreaDto {
    constructor(data) {
        if (data) {
            this['stationAreaId'] = data['stationAreaId'];
            this['stationAreaName'] = data['stationAreaName'];
            this['stationAreaParentId'] = data['stationAreaParentId'];
            this['stationDtos'] = data['stationDtos'];
        }
    }
}
export class StationDto {
    constructor(data) {
        if (data) {
            this['stationName'] = data['stationName'];
            this['stationId'] = data['stationId'];
        }
    }
}
export class UpdateStationAreaInput {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['id'] = data['id'];
        }
    }
}
export class MoveStationAreaInput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['parentId'] = data['parentId'];
        }
    }
}
export class ListResultDto_StationAreaDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDto_StationAreaWithEquipment {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class StationAreaWithEquipment {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['stationName'] = data['stationName'];
            this['equipments'] = data['equipments'];
        }
    }
}
export var EnumEquipmentInStationProductType;
(function (EnumEquipmentInStationProductType) {
    EnumEquipmentInStationProductType["KeyCabinet"] = "KeyCabinet";
    EnumEquipmentInStationProductType["WireCabinet"] = "WireCabinet";
    EnumEquipmentInStationProductType["SafetyWear"] = "SafetyWear";
    EnumEquipmentInStationProductType["PhotoelectricTemperature"] = "PhotoelectricTemperature";
    EnumEquipmentInStationProductType["ManholeCover"] = "ManholeCover";
})(EnumEquipmentInStationProductType || (EnumEquipmentInStationProductType = {}));
export class EquipmentInStation {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['stationIds'] = data['stationIds'];
            this['id'] = data['id'];
        }
    }
}
export class PagedResultDto_UserListByStationIdDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class UserListByStationIdDto {
    constructor(data) {
        if (data) {
            this['userName'] = data['userName'];
            this['lastModificationTime'] = data['lastModificationTime'];
            this['id'] = data['id'];
        }
    }
}
export class ListResultDto_StationOrganizationUserDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class StationOrganizationUserDto {
    constructor(data) {
        if (data) {
            this['displayName'] = data['displayName'];
            this['parentId'] = data['parentId'];
            this['userListDtos'] = data['userListDtos'];
            this['id'] = data['id'];
        }
    }
}
export class StationUserListDto {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['userName'] = data['userName'];
        }
    }
}
export class ListResultDto_StationDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class PagedResultDto_TenantListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class TenantListDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['featureValues'] = data['featureValues'];
            this['features'] = data['features'];
        }
    }
}
export class UpdateTenantFeaturesInput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['featureValues'] = data['featureValues'];
        }
    }
}
export class EntityDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
        }
    }
}
export class GetMemberActivityOutput {
    constructor(data) {
        if (data) {
            this['memberActivities'] = data['memberActivities'];
        }
    }
}
export class MemberActivity {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['period'] = data['period'];
            this['sales'] = data['sales'];
            this['profit'] = data['profit'];
        }
    }
}
export class GetSalesSummaryOutput {
    constructor(data) {
        if (data) {
            this['salesSummary'] = data['salesSummary'];
        }
    }
}
export class GetRegionalStatsInput {
    constructor(data) {
        if (data) {
        }
    }
}
export class GetRegionalStatsOutput {
    constructor(data) {
        if (data) {
            this['stats'] = data['stats'];
        }
    }
}
export class RegionalStatCountry {
    constructor(data) {
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
    constructor(data) {
        if (data) {
        }
    }
}
export class GetGeneralStatsOutput {
    constructor(data) {
        if (data) {
            this['transactionPercent'] = data['transactionPercent'];
            this['newVisitPercent'] = data['newVisitPercent'];
            this['bouncePercent'] = data['bouncePercent'];
        }
    }
}
export var EnumRegisterTenantInputSubscriptionStartType;
(function (EnumRegisterTenantInputSubscriptionStartType) {
    EnumRegisterTenantInputSubscriptionStartType["Free"] = "Free";
    EnumRegisterTenantInputSubscriptionStartType["Trial"] = "Trial";
    EnumRegisterTenantInputSubscriptionStartType["Paid"] = "Paid";
})(EnumRegisterTenantInputSubscriptionStartType || (EnumRegisterTenantInputSubscriptionStartType = {}));
export var EnumRegisterTenantInputGateway;
(function (EnumRegisterTenantInputGateway) {
    EnumRegisterTenantInputGateway["Paypal"] = "Paypal";
})(EnumRegisterTenantInputGateway || (EnumRegisterTenantInputGateway = {}));
export class RegisterTenantInput {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['allFeatures'] = data['allFeatures'];
            this['editionsWithFeatures'] = data['editionsWithFeatures'];
            this['tenantEditionId'] = data['tenantEditionId'];
        }
    }
}
export class FlatFeatureSelectDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['edition'] = data['edition'];
            this['featureValues'] = data['featureValues'];
        }
    }
}
export class IInputType {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['attributes'] = data['attributes'];
            this['validator'] = data['validator'];
        }
    }
}
export class TenantSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['allowSelfRegistration'] = data['allowSelfRegistration'];
            this['isNewRegisteredUserActiveByDefault'] = data['isNewRegisteredUserActiveByDefault'];
            this['isEmailConfirmationRequiredForLogin'] = data['isEmailConfirmationRequiredForLogin'];
            this['useCaptchaOnRegistration'] = data['useCaptchaOnRegistration'];
        }
    }
}
export class LdapSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['legalName'] = data['legalName'];
            this['address'] = data['address'];
            this['taxVatNo'] = data['taxVatNo'];
        }
    }
}
export class ListResultDto_TerminalPortConfigListDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class TerminalPortConfigListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['terminalPortConfig'] = data['terminalPortConfig'];
            this['terminalPortBindEquipments'] = data['terminalPortBindEquipments'];
        }
    }
}
export class TerminalPortConfigEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['configDto'] = data['configDto'];
        }
    }
}
export class CreateOrUpdateTerminalPortConfigDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class TerminalListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['terminal'] = data['terminal'];
        }
    }
}
export class TerminalEditDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['terminal'] = data['terminal'];
        }
    }
}
export class CreateOrUpdateTerminalDto {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['description'] = data['description'];
            this['id'] = data['id'];
        }
    }
}
export class ResetTerminalInput {
    constructor(data) {
        if (data) {
            this['terminalId'] = data['terminalId'];
        }
    }
}
export class SendControlOperatingInput {
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
        }
    }
}
export class TermperaturePointsOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['ticketFolder'] = data['ticketFolder'];
        }
    }
}
export class TicketFolderDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
        }
    }
}
export class AddOrUpdateTicketFolderRiskInfoInput {
    constructor(data) {
        if (data) {
            this['ticketFolderIds'] = data['ticketFolderIds'];
            this['riskItems'] = data['riskItems'];
        }
    }
}
export class ListResultDto_IdNameTree {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class IdNameTree {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class GetStationTicketFolderChildrenWithTicketOutput {
    constructor(data) {
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
export var EnumTicketListItemDtoTicketExecOrder;
(function (EnumTicketListItemDtoTicketExecOrder) {
    EnumTicketListItemDtoTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketListItemDtoTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketListItemDtoTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketListItemDtoTicketExecOrder || (EnumTicketListItemDtoTicketExecOrder = {}));
export var EnumTicketListItemDtoState;
(function (EnumTicketListItemDtoState) {
    EnumTicketListItemDtoState["None"] = "None";
    EnumTicketListItemDtoState["WaitCommit"] = "WaitCommit";
    EnumTicketListItemDtoState["WaitConfirm"] = "WaitConfirm";
    EnumTicketListItemDtoState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketListItemDtoState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketListItemDtoState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketListItemDtoState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketListItemDtoState["WaitApprove"] = "WaitApprove";
    EnumTicketListItemDtoState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketListItemDtoState["ReadyGo"] = "ReadyGo";
    EnumTicketListItemDtoState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketListItemDtoState["Executing"] = "Executing";
    EnumTicketListItemDtoState["Pause"] = "Pause";
    EnumTicketListItemDtoState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketListItemDtoState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketListItemDtoState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketListItemDtoState["ExtensionReject"] = "ExtensionReject";
    EnumTicketListItemDtoState["Finished"] = "Finished";
    EnumTicketListItemDtoState["Break"] = "Break";
    EnumTicketListItemDtoState["Cancel"] = "Cancel";
    EnumTicketListItemDtoState["WaitReadOver"] = "WaitReadOver";
    EnumTicketListItemDtoState["ReadOver"] = "ReadOver";
    EnumTicketListItemDtoState["Archived"] = "Archived";
})(EnumTicketListItemDtoState || (EnumTicketListItemDtoState = {}));
export var EnumTicketListItemDtoTicketType;
(function (EnumTicketListItemDtoTicketType) {
    EnumTicketListItemDtoTicketType["Task"] = "Task";
    EnumTicketListItemDtoTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketListItemDtoTicketType["Common"] = "Common";
    EnumTicketListItemDtoTicketType["Chemistry"] = "Chemistry";
    EnumTicketListItemDtoTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketListItemDtoTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketListItemDtoTicketType["Overhual"] = "Overhual";
    EnumTicketListItemDtoTicketType["Furnace"] = "Furnace";
    EnumTicketListItemDtoTicketType["Lockset"] = "Lockset";
    EnumTicketListItemDtoTicketType["History"] = "History";
    EnumTicketListItemDtoTicketType["Typical"] = "Typical";
    EnumTicketListItemDtoTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketListItemDtoTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketListItemDtoTicketType["None"] = "None";
})(EnumTicketListItemDtoTicketType || (EnumTicketListItemDtoTicketType = {}));
export class TicketListItemDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class IdName {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
        }
    }
}
export class GetTicketFolderOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['ticketFolderId'] = data['ticketFolderId'];
            this['ticketTypicalIds'] = data['ticketTypicalIds'];
        }
    }
}
export class ListResultDto_TicketListItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ApiResultOutput_List_TicketRoleDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class TicketRoleDto {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['name'] = data['name'];
            this['userName'] = data['userName'];
            this['roleType'] = data['roleType'];
        }
    }
}
export class AddOrUpdateTicketTaskInput {
    constructor(data) {
        if (data) {
            this['ticketTask'] = data['ticketTask'];
            this['ticketItemTasks'] = data['ticketItemTasks'];
            this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
            this['riskItems'] = data['riskItems'];
        }
    }
}
export var EnumTicketTaskDtoTicketOperateType;
(function (EnumTicketTaskDtoTicketOperateType) {
    EnumTicketTaskDtoTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTaskDtoTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTaskDtoTicketOperateType || (EnumTicketTaskDtoTicketOperateType = {}));
export var EnumTicketTaskDtoTicketExecOrder;
(function (EnumTicketTaskDtoTicketExecOrder) {
    EnumTicketTaskDtoTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTaskDtoTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTaskDtoTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTaskDtoTicketExecOrder || (EnumTicketTaskDtoTicketExecOrder = {}));
export var EnumTicketTaskDtoState;
(function (EnumTicketTaskDtoState) {
    EnumTicketTaskDtoState["None"] = "None";
    EnumTicketTaskDtoState["WaitCommit"] = "WaitCommit";
    EnumTicketTaskDtoState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTaskDtoState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTaskDtoState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTaskDtoState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTaskDtoState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTaskDtoState["WaitApprove"] = "WaitApprove";
    EnumTicketTaskDtoState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTaskDtoState["ReadyGo"] = "ReadyGo";
    EnumTicketTaskDtoState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTaskDtoState["Executing"] = "Executing";
    EnumTicketTaskDtoState["Pause"] = "Pause";
    EnumTicketTaskDtoState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTaskDtoState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTaskDtoState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTaskDtoState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTaskDtoState["Finished"] = "Finished";
    EnumTicketTaskDtoState["Break"] = "Break";
    EnumTicketTaskDtoState["Cancel"] = "Cancel";
    EnumTicketTaskDtoState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTaskDtoState["ReadOver"] = "ReadOver";
    EnumTicketTaskDtoState["Archived"] = "Archived";
})(EnumTicketTaskDtoState || (EnumTicketTaskDtoState = {}));
export var EnumTicketTaskDtoTicketAppoveLevel;
(function (EnumTicketTaskDtoTicketAppoveLevel) {
    EnumTicketTaskDtoTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTaskDtoTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTaskDtoTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTaskDtoTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTaskDtoTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTaskDtoTicketAppoveLevel || (EnumTicketTaskDtoTicketAppoveLevel = {}));
export var EnumTicketTaskDtoTicketType;
(function (EnumTicketTaskDtoTicketType) {
    EnumTicketTaskDtoTicketType["Task"] = "Task";
    EnumTicketTaskDtoTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTaskDtoTicketType["Common"] = "Common";
    EnumTicketTaskDtoTicketType["Chemistry"] = "Chemistry";
    EnumTicketTaskDtoTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTaskDtoTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTaskDtoTicketType["Overhual"] = "Overhual";
    EnumTicketTaskDtoTicketType["Furnace"] = "Furnace";
    EnumTicketTaskDtoTicketType["Lockset"] = "Lockset";
    EnumTicketTaskDtoTicketType["History"] = "History";
    EnumTicketTaskDtoTicketType["Typical"] = "Typical";
    EnumTicketTaskDtoTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTaskDtoTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTaskDtoTicketType["None"] = "None";
})(EnumTicketTaskDtoTicketType || (EnumTicketTaskDtoTicketType = {}));
export class TicketTaskDto {
    constructor(data) {
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
export var EnumTicketItemTaskDtoOperateMode;
(function (EnumTicketItemTaskDtoOperateMode) {
    EnumTicketItemTaskDtoOperateMode["None"] = "None";
    EnumTicketItemTaskDtoOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskDtoOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskDtoOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskDtoOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskDtoOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskDtoOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskDtoOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskDtoOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskDtoOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskDtoOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskDtoOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskDtoOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskDtoOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskDtoOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskDtoOperateMode["Error"] = "Error";
    EnumTicketItemTaskDtoOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskDtoOperateMode || (EnumTicketItemTaskDtoOperateMode = {}));
export var EnumTicketItemTaskDtoRealOperateMode;
(function (EnumTicketItemTaskDtoRealOperateMode) {
    EnumTicketItemTaskDtoRealOperateMode["None"] = "None";
    EnumTicketItemTaskDtoRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskDtoRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskDtoRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskDtoRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskDtoRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskDtoRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskDtoRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskDtoRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskDtoRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskDtoRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskDtoRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskDtoRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskDtoRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskDtoRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskDtoRealOperateMode["Error"] = "Error";
    EnumTicketItemTaskDtoRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskDtoRealOperateMode || (EnumTicketItemTaskDtoRealOperateMode = {}));
export var EnumTicketItemTaskDtoOperateResult;
(function (EnumTicketItemTaskDtoOperateResult) {
    EnumTicketItemTaskDtoOperateResult["None"] = "None";
    EnumTicketItemTaskDtoOperateResult["Operated"] = "Operated";
    EnumTicketItemTaskDtoOperateResult["Finished"] = "Finished";
})(EnumTicketItemTaskDtoOperateResult || (EnumTicketItemTaskDtoOperateResult = {}));
export class TicketItemTaskDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
            this['ticketPersonaes'] = data['ticketPersonaes'];
        }
    }
}
export class CommitTicketInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
        }
    }
}
export class ConfirmTicketInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
            this['isPass'] = data['isPass'];
            this['note'] = data['note'];
        }
    }
}
export class ApproveTicketInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
            this['isPass'] = data['isPass'];
            this['note'] = data['note'];
        }
    }
}
export class ExecuteTicketInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
        }
    }
}
export class FinishTicketInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
        }
    }
}
export class UpdateTicketItemsStatusInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
            this['ticketItems'] = data['ticketItems'];
        }
    }
}
export var EnumUpdateStatusTicketItemDtoOperateResult;
(function (EnumUpdateStatusTicketItemDtoOperateResult) {
    EnumUpdateStatusTicketItemDtoOperateResult["None"] = "None";
    EnumUpdateStatusTicketItemDtoOperateResult["Operated"] = "Operated";
    EnumUpdateStatusTicketItemDtoOperateResult["Finished"] = "Finished";
})(EnumUpdateStatusTicketItemDtoOperateResult || (EnumUpdateStatusTicketItemDtoOperateResult = {}));
export var EnumUpdateStatusTicketItemDtoRealOperateMode;
(function (EnumUpdateStatusTicketItemDtoRealOperateMode) {
    EnumUpdateStatusTicketItemDtoRealOperateMode["None"] = "None";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Normal"] = "Normal";
    EnumUpdateStatusTicketItemDtoRealOperateMode["HintTip"] = "HintTip";
    EnumUpdateStatusTicketItemDtoRealOperateMode["NoOperate"] = "NoOperate";
    EnumUpdateStatusTicketItemDtoRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumUpdateStatusTicketItemDtoRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumUpdateStatusTicketItemDtoRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumUpdateStatusTicketItemDtoRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumUpdateStatusTicketItemDtoRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumUpdateStatusTicketItemDtoRealOperateMode["ScanCode"] = "ScanCode";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Remote"] = "Remote";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Repeat"] = "Repeat";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Skip"] = "Skip";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Delete"] = "Delete";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Reset"] = "Reset";
    EnumUpdateStatusTicketItemDtoRealOperateMode["Error"] = "Error";
    EnumUpdateStatusTicketItemDtoRealOperateMode["CommonLock"] = "CommonLock";
})(EnumUpdateStatusTicketItemDtoRealOperateMode || (EnumUpdateStatusTicketItemDtoRealOperateMode = {}));
export class UpdateStatusTicketItemDto {
    constructor(data) {
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
export var EnumTicketItemDeviceStateDtoCommonLockOperate;
(function (EnumTicketItemDeviceStateDtoCommonLockOperate) {
    EnumTicketItemDeviceStateDtoCommonLockOperate["NotCommonLockOperate"] = "NotCommonLockOperate";
    EnumTicketItemDeviceStateDtoCommonLockOperate["HangCommonLock"] = "HangCommonLock";
    EnumTicketItemDeviceStateDtoCommonLockOperate["RemoveCommonLock"] = "RemoveCommonLock";
})(EnumTicketItemDeviceStateDtoCommonLockOperate || (EnumTicketItemDeviceStateDtoCommonLockOperate = {}));
export class TicketItemDeviceStateDto {
    constructor(data) {
        if (data) {
            this['deviceId'] = data['deviceId'];
            this['rfids'] = data['rfids'];
            this['commonLockOperate'] = data['commonLockOperate'];
        }
    }
}
export class ApiResultOutput_UpdateTicketItemsStatusOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class UpdateTicketItemsStatusOutput {
    constructor(data) {
        if (data) {
            this['failTicketItems'] = data['failTicketItems'];
        }
    }
}
export var EnumTicketItemUpdateResultOutputErrorType;
(function (EnumTicketItemUpdateResultOutputErrorType) {
    EnumTicketItemUpdateResultOutputErrorType["NotFound"] = "NotFound";
    EnumTicketItemUpdateResultOutputErrorType["PreItemNotFinished"] = "PreItemNotFinished";
    EnumTicketItemUpdateResultOutputErrorType["SaveException"] = "SaveException";
})(EnumTicketItemUpdateResultOutputErrorType || (EnumTicketItemUpdateResultOutputErrorType = {}));
export class TicketItemUpdateResultOutput {
    constructor(data) {
        if (data) {
            this['ticketItemId'] = data['ticketItemId'];
            this['errorType'] = data['errorType'];
            this['message'] = data['message'];
        }
    }
}
export class UpdateTicketRiskItemsStatusInput {
    constructor(data) {
        if (data) {
            this['ticketId'] = data['ticketId'];
            this['riskItems'] = data['riskItems'];
        }
    }
}
export class UpdateStatusTicketRiskItemDto {
    constructor(data) {
        if (data) {
            this['riskItemId'] = data['riskItemId'];
            this['finished'] = data['finished'];
            this['sequence'] = data['sequence'];
            this['operationTime'] = data['operationTime'];
        }
    }
}
export class ApiResultOutput_UpdateTicketRiskItemsStatusOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class UpdateTicketRiskItemsStatusOutput {
    constructor(data) {
        if (data) {
            this['failTicketRiskItems'] = data['failTicketRiskItems'];
        }
    }
}
export var EnumTicketRiskItemUpdateResultOutputErrorType;
(function (EnumTicketRiskItemUpdateResultOutputErrorType) {
    EnumTicketRiskItemUpdateResultOutputErrorType["NotFound"] = "NotFound";
    EnumTicketRiskItemUpdateResultOutputErrorType["PreItemNotFinished"] = "PreItemNotFinished";
    EnumTicketRiskItemUpdateResultOutputErrorType["SaveException"] = "SaveException";
})(EnumTicketRiskItemUpdateResultOutputErrorType || (EnumTicketRiskItemUpdateResultOutputErrorType = {}));
export class TicketRiskItemUpdateResultOutput {
    constructor(data) {
        if (data) {
            this['riskItemId'] = data['riskItemId'];
            this['message'] = data['message'];
            this['errorType'] = data['errorType'];
        }
    }
}
export var EnumTicketTaskOutputTicketOperateType;
(function (EnumTicketTaskOutputTicketOperateType) {
    EnumTicketTaskOutputTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTaskOutputTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTaskOutputTicketOperateType || (EnumTicketTaskOutputTicketOperateType = {}));
export var EnumTicketTaskOutputTicketExecOrder;
(function (EnumTicketTaskOutputTicketExecOrder) {
    EnumTicketTaskOutputTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTaskOutputTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTaskOutputTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTaskOutputTicketExecOrder || (EnumTicketTaskOutputTicketExecOrder = {}));
export var EnumTicketTaskOutputState;
(function (EnumTicketTaskOutputState) {
    EnumTicketTaskOutputState["None"] = "None";
    EnumTicketTaskOutputState["WaitCommit"] = "WaitCommit";
    EnumTicketTaskOutputState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTaskOutputState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTaskOutputState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTaskOutputState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTaskOutputState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTaskOutputState["WaitApprove"] = "WaitApprove";
    EnumTicketTaskOutputState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTaskOutputState["ReadyGo"] = "ReadyGo";
    EnumTicketTaskOutputState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTaskOutputState["Executing"] = "Executing";
    EnumTicketTaskOutputState["Pause"] = "Pause";
    EnumTicketTaskOutputState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTaskOutputState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTaskOutputState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTaskOutputState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTaskOutputState["Finished"] = "Finished";
    EnumTicketTaskOutputState["Break"] = "Break";
    EnumTicketTaskOutputState["Cancel"] = "Cancel";
    EnumTicketTaskOutputState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTaskOutputState["ReadOver"] = "ReadOver";
    EnumTicketTaskOutputState["Archived"] = "Archived";
})(EnumTicketTaskOutputState || (EnumTicketTaskOutputState = {}));
export var EnumTicketTaskOutputTicketAppoveLevel;
(function (EnumTicketTaskOutputTicketAppoveLevel) {
    EnumTicketTaskOutputTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTaskOutputTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTaskOutputTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTaskOutputTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTaskOutputTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTaskOutputTicketAppoveLevel || (EnumTicketTaskOutputTicketAppoveLevel = {}));
export var EnumTicketTaskOutputTicketType;
(function (EnumTicketTaskOutputTicketType) {
    EnumTicketTaskOutputTicketType["Task"] = "Task";
    EnumTicketTaskOutputTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTaskOutputTicketType["Common"] = "Common";
    EnumTicketTaskOutputTicketType["Chemistry"] = "Chemistry";
    EnumTicketTaskOutputTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTaskOutputTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTaskOutputTicketType["Overhual"] = "Overhual";
    EnumTicketTaskOutputTicketType["Furnace"] = "Furnace";
    EnumTicketTaskOutputTicketType["Lockset"] = "Lockset";
    EnumTicketTaskOutputTicketType["History"] = "History";
    EnumTicketTaskOutputTicketType["Typical"] = "Typical";
    EnumTicketTaskOutputTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTaskOutputTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTaskOutputTicketType["None"] = "None";
})(EnumTicketTaskOutputTicketType || (EnumTicketTaskOutputTicketType = {}));
export class TicketTaskOutput {
    constructor(data) {
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
export var EnumTicketItemTaskOutputOperateMode;
(function (EnumTicketItemTaskOutputOperateMode) {
    EnumTicketItemTaskOutputOperateMode["None"] = "None";
    EnumTicketItemTaskOutputOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskOutputOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskOutputOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskOutputOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskOutputOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskOutputOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskOutputOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskOutputOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskOutputOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskOutputOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskOutputOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskOutputOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskOutputOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskOutputOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskOutputOperateMode["Error"] = "Error";
    EnumTicketItemTaskOutputOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskOutputOperateMode || (EnumTicketItemTaskOutputOperateMode = {}));
export var EnumTicketItemTaskOutputRealOperateMode;
(function (EnumTicketItemTaskOutputRealOperateMode) {
    EnumTicketItemTaskOutputRealOperateMode["None"] = "None";
    EnumTicketItemTaskOutputRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTaskOutputRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTaskOutputRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTaskOutputRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTaskOutputRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTaskOutputRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTaskOutputRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTaskOutputRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTaskOutputRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTaskOutputRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTaskOutputRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTaskOutputRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTaskOutputRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTaskOutputRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTaskOutputRealOperateMode["Error"] = "Error";
    EnumTicketItemTaskOutputRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTaskOutputRealOperateMode || (EnumTicketItemTaskOutputRealOperateMode = {}));
export var EnumTicketItemTaskOutputOperateResult;
(function (EnumTicketItemTaskOutputOperateResult) {
    EnumTicketItemTaskOutputOperateResult["None"] = "None";
    EnumTicketItemTaskOutputOperateResult["Operated"] = "Operated";
    EnumTicketItemTaskOutputOperateResult["Finished"] = "Finished";
})(EnumTicketItemTaskOutputOperateResult || (EnumTicketItemTaskOutputOperateResult = {}));
export class TicketItemTaskOutput {
    constructor(data) {
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
    constructor(data) {
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
export var EnumTicketItemOperateLockInfoDtoLockType;
(function (EnumTicketItemOperateLockInfoDtoLockType) {
    EnumTicketItemOperateLockInfoDtoLockType["NoKey"] = "NoKey";
    EnumTicketItemOperateLockInfoDtoLockType["JXLock"] = "JXLock";
    EnumTicketItemOperateLockInfoDtoLockType["DBMLock"] = "DBMLock";
    EnumTicketItemOperateLockInfoDtoLockType["DKLock"] = "DKLock";
    EnumTicketItemOperateLockInfoDtoLockType["DXDKLock"] = "DXDKLock";
    EnumTicketItemOperateLockInfoDtoLockType["GSNYD"] = "GSNYD";
    EnumTicketItemOperateLockInfoDtoLockType["WYYD"] = "WYYD";
    EnumTicketItemOperateLockInfoDtoLockType["YYYD"] = "YYYD";
    EnumTicketItemOperateLockInfoDtoLockType["CJFKLock"] = "CJFKLock";
    EnumTicketItemOperateLockInfoDtoLockType["FKSDBMLock"] = "FKSDBMLock";
    EnumTicketItemOperateLockInfoDtoLockType["ZNLock"] = "ZNLock";
    EnumTicketItemOperateLockInfoDtoLockType["ZNYB"] = "ZNYB";
    EnumTicketItemOperateLockInfoDtoLockType["YYDWZJC"] = "YYDWZJC";
    EnumTicketItemOperateLockInfoDtoLockType["WYDWZJC"] = "WYDWZJC";
    EnumTicketItemOperateLockInfoDtoLockType["JXDBMLock"] = "JXDBMLock";
    EnumTicketItemOperateLockInfoDtoLockType["DBMLock_2H"] = "DBMLock_2H";
    EnumTicketItemOperateLockInfoDtoLockType["DBMLock_3H"] = "DBMLock_3H";
    EnumTicketItemOperateLockInfoDtoLockType["XJLock"] = "XJLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_DBMLock"] = "WX_DBMLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_JXLock"] = "WX_JXLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_GSN2L"] = "WX_GSN2L";
    EnumTicketItemOperateLockInfoDtoLockType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumTicketItemOperateLockInfoDtoLockType["ZNHWMLock"] = "ZNHWMLock";
    EnumTicketItemOperateLockInfoDtoLockType["GSN2E"] = "GSN2E";
    EnumTicketItemOperateLockInfoDtoLockType["GSN2YD"] = "GSN2YD";
    EnumTicketItemOperateLockInfoDtoLockType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_DZBQ"] = "WX_DZBQ";
    EnumTicketItemOperateLockInfoDtoLockType["WX_BSJXLock"] = "WX_BSJXLock";
    EnumTicketItemOperateLockInfoDtoLockType["WX_SGWZSLock"] = "WX_SGWZSLock";
    EnumTicketItemOperateLockInfoDtoLockType["SGWZSLock"] = "SGWZSLock";
    EnumTicketItemOperateLockInfoDtoLockType["TBLock"] = "TBLock";
    EnumTicketItemOperateLockInfoDtoLockType["XHJGLock"] = "XHJGLock";
    EnumTicketItemOperateLockInfoDtoLockType["SLGLock"] = "SLGLock";
    EnumTicketItemOperateLockInfoDtoLockType["LTLock"] = "LTLock";
    EnumTicketItemOperateLockInfoDtoLockType["BSQLock"] = "BSQLock";
    EnumTicketItemOperateLockInfoDtoLockType["BSLock"] = "BSLock";
    EnumTicketItemOperateLockInfoDtoLockType["CXLock"] = "CXLock";
    EnumTicketItemOperateLockInfoDtoLockType["FDHLock"] = "FDHLock";
    EnumTicketItemOperateLockInfoDtoLockType["PMLock"] = "PMLock";
    EnumTicketItemOperateLockInfoDtoLockType["LGLock"] = "LGLock";
    EnumTicketItemOperateLockInfoDtoLockType["FHMLock"] = "FHMLock";
    EnumTicketItemOperateLockInfoDtoLockType["YKLock"] = "YKLock";
    EnumTicketItemOperateLockInfoDtoLockType["ZNSXLock"] = "ZNSXLock";
    EnumTicketItemOperateLockInfoDtoLockType["GYJLYDQ"] = "GYJLYDQ";
    EnumTicketItemOperateLockInfoDtoLockType["LGLock_6A"] = "LGLock_6A";
    EnumTicketItemOperateLockInfoDtoLockType["WTJGLock"] = "WTJGLock";
    EnumTicketItemOperateLockInfoDtoLockType["DKHLock"] = "DKHLock";
})(EnumTicketItemOperateLockInfoDtoLockType || (EnumTicketItemOperateLockInfoDtoLockType = {}));
export var EnumTicketItemOperateLockInfoDtoLockPropertyType;
(function (EnumTicketItemOperateLockInfoDtoLockPropertyType) {
    EnumTicketItemOperateLockInfoDtoLockPropertyType["NoKey"] = "NoKey";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["XHJGLock"] = "XHJGLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["SLGLock"] = "SLGLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["LTLock"] = "LTLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["BSQLock"] = "BSQLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["BSLock"] = "BSLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["CXLock"] = "CXLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["FDHLock"] = "FDHLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["PMLock"] = "PMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["LGLock"] = "LGLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["FHMLock"] = "FHMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["YKLock"] = "YKLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["HWGMLock"] = "HWGMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_JXLock"] = "WX_JXLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_DBMLock"] = "WX_DBMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["GSN2L"] = "GSN2L";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_ZNMBLock"] = "WX_ZNMBLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_ZNFHMLock"] = "WX_ZNFHMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_SKJXLock"] = "WX_SKJXLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["GSN2YD"] = "GSN2YD";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["XJLock"] = "XJLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["JM_GSN2YD"] = "JM_GSN2YD";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["GLDBP"] = "GLDBP";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["GLWYBS"] = "GLWYBS";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["LSGLGLock"] = "LSGLGLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WX_WZSZNMLock"] = "WX_WZSZNMLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["LGLock_6A"] = "LGLock_6A";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["WTJGLock"] = "WTJGLock";
    EnumTicketItemOperateLockInfoDtoLockPropertyType["DKHLock"] = "DKHLock";
})(EnumTicketItemOperateLockInfoDtoLockPropertyType || (EnumTicketItemOperateLockInfoDtoLockPropertyType = {}));
export class TicketItemOperateLockInfoDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export var EnumTicketTaskListDtoTicketExecOrder;
(function (EnumTicketTaskListDtoTicketExecOrder) {
    EnumTicketTaskListDtoTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTaskListDtoTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTaskListDtoTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTaskListDtoTicketExecOrder || (EnumTicketTaskListDtoTicketExecOrder = {}));
export var EnumTicketTaskListDtoState;
(function (EnumTicketTaskListDtoState) {
    EnumTicketTaskListDtoState["None"] = "None";
    EnumTicketTaskListDtoState["WaitCommit"] = "WaitCommit";
    EnumTicketTaskListDtoState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTaskListDtoState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTaskListDtoState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTaskListDtoState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTaskListDtoState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTaskListDtoState["WaitApprove"] = "WaitApprove";
    EnumTicketTaskListDtoState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTaskListDtoState["ReadyGo"] = "ReadyGo";
    EnumTicketTaskListDtoState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTaskListDtoState["Executing"] = "Executing";
    EnumTicketTaskListDtoState["Pause"] = "Pause";
    EnumTicketTaskListDtoState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTaskListDtoState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTaskListDtoState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTaskListDtoState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTaskListDtoState["Finished"] = "Finished";
    EnumTicketTaskListDtoState["Break"] = "Break";
    EnumTicketTaskListDtoState["Cancel"] = "Cancel";
    EnumTicketTaskListDtoState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTaskListDtoState["ReadOver"] = "ReadOver";
    EnumTicketTaskListDtoState["Archived"] = "Archived";
})(EnumTicketTaskListDtoState || (EnumTicketTaskListDtoState = {}));
export var EnumTicketTaskListDtoTicketType;
(function (EnumTicketTaskListDtoTicketType) {
    EnumTicketTaskListDtoTicketType["Task"] = "Task";
    EnumTicketTaskListDtoTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTaskListDtoTicketType["Common"] = "Common";
    EnumTicketTaskListDtoTicketType["Chemistry"] = "Chemistry";
    EnumTicketTaskListDtoTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTaskListDtoTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTaskListDtoTicketType["Overhual"] = "Overhual";
    EnumTicketTaskListDtoTicketType["Furnace"] = "Furnace";
    EnumTicketTaskListDtoTicketType["Lockset"] = "Lockset";
    EnumTicketTaskListDtoTicketType["History"] = "History";
    EnumTicketTaskListDtoTicketType["Typical"] = "Typical";
    EnumTicketTaskListDtoTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTaskListDtoTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTaskListDtoTicketType["None"] = "None";
})(EnumTicketTaskListDtoTicketType || (EnumTicketTaskListDtoTicketType = {}));
export var EnumTicketTaskListDtoTicketAppoveLevel;
(function (EnumTicketTaskListDtoTicketAppoveLevel) {
    EnumTicketTaskListDtoTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTaskListDtoTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTaskListDtoTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTaskListDtoTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTaskListDtoTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTaskListDtoTicketAppoveLevel || (EnumTicketTaskListDtoTicketAppoveLevel = {}));
export class TicketTaskListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class CheckDeviceStatusForTicketTaskExcutingInput {
    constructor(data) {
        if (data) {
            this['deviceId'] = data['deviceId'];
            this['fromState'] = data['fromState'];
            this['toState'] = data['toState'];
        }
    }
}
export class AnalyseSentenceInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['sentences'] = data['sentences'];
        }
    }
}
export class AnalyseSentenceDto {
    constructor(data) {
        if (data) {
            this['no'] = data['no'];
            this['ticketItemId'] = data['ticketItemId'];
            this['text'] = data['text'];
        }
    }
}
export class AnalyseSentenceOutput {
    constructor(data) {
        if (data) {
            this['analyseSentenceResults'] = data['analyseSentenceResults'];
            this['analyseRiskItemResults'] = data['analyseRiskItemResults'];
        }
    }
}
export var EnumAnalyseSentenceResultDtoOperateMode;
(function (EnumAnalyseSentenceResultDtoOperateMode) {
    EnumAnalyseSentenceResultDtoOperateMode["None"] = "None";
    EnumAnalyseSentenceResultDtoOperateMode["Normal"] = "Normal";
    EnumAnalyseSentenceResultDtoOperateMode["HintTip"] = "HintTip";
    EnumAnalyseSentenceResultDtoOperateMode["NoOperate"] = "NoOperate";
    EnumAnalyseSentenceResultDtoOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumAnalyseSentenceResultDtoOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumAnalyseSentenceResultDtoOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumAnalyseSentenceResultDtoOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumAnalyseSentenceResultDtoOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumAnalyseSentenceResultDtoOperateMode["ScanCode"] = "ScanCode";
    EnumAnalyseSentenceResultDtoOperateMode["Remote"] = "Remote";
    EnumAnalyseSentenceResultDtoOperateMode["Repeat"] = "Repeat";
    EnumAnalyseSentenceResultDtoOperateMode["Skip"] = "Skip";
    EnumAnalyseSentenceResultDtoOperateMode["Delete"] = "Delete";
    EnumAnalyseSentenceResultDtoOperateMode["Reset"] = "Reset";
    EnumAnalyseSentenceResultDtoOperateMode["Error"] = "Error";
    EnumAnalyseSentenceResultDtoOperateMode["CommonLock"] = "CommonLock";
})(EnumAnalyseSentenceResultDtoOperateMode || (EnumAnalyseSentenceResultDtoOperateMode = {}));
export var EnumAnalyseSentenceResultDtoDeviceTermType;
(function (EnumAnalyseSentenceResultDtoDeviceTermType) {
    EnumAnalyseSentenceResultDtoDeviceTermType["Default"] = "Default";
    EnumAnalyseSentenceResultDtoDeviceTermType["ByLinkage"] = "ByLinkage";
    EnumAnalyseSentenceResultDtoDeviceTermType["AddBefault"] = "AddBefault";
    EnumAnalyseSentenceResultDtoDeviceTermType["AddAfter"] = "AddAfter";
    EnumAnalyseSentenceResultDtoDeviceTermType["Selectable"] = "Selectable";
})(EnumAnalyseSentenceResultDtoDeviceTermType || (EnumAnalyseSentenceResultDtoDeviceTermType = {}));
export class AnalyseSentenceResultDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['ticketItemNo'] = data['ticketItemNo'];
            this['ticketItemId'] = data['ticketItemId'];
            this['dangerSource'] = data['dangerSource'];
            this['workStandard'] = data['workStandard'];
        }
    }
}
export class IListResult_TicketItemOperateLockInfoDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class SingleAnalyseSentenceInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['analyseSentenceResult'] = data['analyseSentenceResult'];
            this['analyseRiskItemResults'] = data['analyseRiskItemResults'];
        }
    }
}
export class AddOrUpdateTicketTypicalInput {
    constructor(data) {
        if (data) {
            this['ticketTypical'] = data['ticketTypical'];
            this['ticketItems'] = data['ticketItems'];
            this['riskPrecontrolItems'] = data['riskPrecontrolItems'];
        }
    }
}
export var EnumTicketTypicalDtoTicketOperateType;
(function (EnumTicketTypicalDtoTicketOperateType) {
    EnumTicketTypicalDtoTicketOperateType["MonitoringOperation"] = "MonitoringOperation";
    EnumTicketTypicalDtoTicketOperateType["OnePersonOperation"] = "OnePersonOperation";
})(EnumTicketTypicalDtoTicketOperateType || (EnumTicketTypicalDtoTicketOperateType = {}));
export var EnumTicketTypicalDtoTicketExecOrder;
(function (EnumTicketTypicalDtoTicketExecOrder) {
    EnumTicketTypicalDtoTicketExecOrder["OrderedExec"] = "OrderedExec";
    EnumTicketTypicalDtoTicketExecOrder["UnorderedExec"] = "UnorderedExec";
    EnumTicketTypicalDtoTicketExecOrder["CustomOrderExec"] = "CustomOrderExec";
})(EnumTicketTypicalDtoTicketExecOrder || (EnumTicketTypicalDtoTicketExecOrder = {}));
export var EnumTicketTypicalDtoState;
(function (EnumTicketTypicalDtoState) {
    EnumTicketTypicalDtoState["None"] = "None";
    EnumTicketTypicalDtoState["WaitCommit"] = "WaitCommit";
    EnumTicketTypicalDtoState["WaitConfirm"] = "WaitConfirm";
    EnumTicketTypicalDtoState["ConfirmNotPassed"] = "ConfirmNotPassed";
    EnumTicketTypicalDtoState["WaitGuardianConfirm"] = "WaitGuardianConfirm";
    EnumTicketTypicalDtoState["WaitApproverConfirm"] = "WaitApproverConfirm";
    EnumTicketTypicalDtoState["WaitMainApproverConfirm"] = "WaitMainApproverConfirm";
    EnumTicketTypicalDtoState["WaitApprove"] = "WaitApprove";
    EnumTicketTypicalDtoState["ApproveNotPassed"] = "ApproveNotPassed";
    EnumTicketTypicalDtoState["ReadyGo"] = "ReadyGo";
    EnumTicketTypicalDtoState["RiskItemExecuting"] = "RiskItemExecuting";
    EnumTicketTypicalDtoState["Executing"] = "Executing";
    EnumTicketTypicalDtoState["Pause"] = "Pause";
    EnumTicketTypicalDtoState["WaitApproveToCancel"] = "WaitApproveToCancel";
    EnumTicketTypicalDtoState["WaitApproveToBreak"] = "WaitApproveToBreak";
    EnumTicketTypicalDtoState["WaitApproveExtension"] = "WaitApproveExtension";
    EnumTicketTypicalDtoState["ExtensionReject"] = "ExtensionReject";
    EnumTicketTypicalDtoState["Finished"] = "Finished";
    EnumTicketTypicalDtoState["Break"] = "Break";
    EnumTicketTypicalDtoState["Cancel"] = "Cancel";
    EnumTicketTypicalDtoState["WaitReadOver"] = "WaitReadOver";
    EnumTicketTypicalDtoState["ReadOver"] = "ReadOver";
    EnumTicketTypicalDtoState["Archived"] = "Archived";
})(EnumTicketTypicalDtoState || (EnumTicketTypicalDtoState = {}));
export var EnumTicketTypicalDtoTicketAppoveLevel;
(function (EnumTicketTypicalDtoTicketAppoveLevel) {
    EnumTicketTypicalDtoTicketAppoveLevel["NoApprove"] = "NoApprove";
    EnumTicketTypicalDtoTicketAppoveLevel["OneApprover"] = "OneApprover";
    EnumTicketTypicalDtoTicketAppoveLevel["TwoApprover"] = "TwoApprover";
    EnumTicketTypicalDtoTicketAppoveLevel["ThreeApprover"] = "ThreeApprover";
    EnumTicketTypicalDtoTicketAppoveLevel["FoutApprover"] = "FoutApprover";
})(EnumTicketTypicalDtoTicketAppoveLevel || (EnumTicketTypicalDtoTicketAppoveLevel = {}));
export var EnumTicketTypicalDtoTicketType;
(function (EnumTicketTypicalDtoTicketType) {
    EnumTicketTypicalDtoTicketType["Task"] = "Task";
    EnumTicketTypicalDtoTicketType["CentralizedControl"] = "CentralizedControl";
    EnumTicketTypicalDtoTicketType["Common"] = "Common";
    EnumTicketTypicalDtoTicketType["Chemistry"] = "Chemistry";
    EnumTicketTypicalDtoTicketType["SteamEnginePro"] = "SteamEnginePro";
    EnumTicketTypicalDtoTicketType["AshSulfur"] = "AshSulfur";
    EnumTicketTypicalDtoTicketType["Overhual"] = "Overhual";
    EnumTicketTypicalDtoTicketType["Furnace"] = "Furnace";
    EnumTicketTypicalDtoTicketType["Lockset"] = "Lockset";
    EnumTicketTypicalDtoTicketType["History"] = "History";
    EnumTicketTypicalDtoTicketType["Typical"] = "Typical";
    EnumTicketTypicalDtoTicketType["RiskTicket"] = "RiskTicket";
    EnumTicketTypicalDtoTicketType["TypicalInvalid"] = "TypicalInvalid";
    EnumTicketTypicalDtoTicketType["None"] = "None";
})(EnumTicketTypicalDtoTicketType || (EnumTicketTypicalDtoTicketType = {}));
export class TicketTypicalDto {
    constructor(data) {
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
export var EnumTicketItemTypicalDtoOperateMode;
(function (EnumTicketItemTypicalDtoOperateMode) {
    EnumTicketItemTypicalDtoOperateMode["None"] = "None";
    EnumTicketItemTypicalDtoOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalDtoOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalDtoOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalDtoOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalDtoOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalDtoOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalDtoOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalDtoOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalDtoOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalDtoOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalDtoOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalDtoOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalDtoOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalDtoOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalDtoOperateMode["Error"] = "Error";
    EnumTicketItemTypicalDtoOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalDtoOperateMode || (EnumTicketItemTypicalDtoOperateMode = {}));
export var EnumTicketItemTypicalDtoRealOperateMode;
(function (EnumTicketItemTypicalDtoRealOperateMode) {
    EnumTicketItemTypicalDtoRealOperateMode["None"] = "None";
    EnumTicketItemTypicalDtoRealOperateMode["Normal"] = "Normal";
    EnumTicketItemTypicalDtoRealOperateMode["HintTip"] = "HintTip";
    EnumTicketItemTypicalDtoRealOperateMode["NoOperate"] = "NoOperate";
    EnumTicketItemTypicalDtoRealOperateMode["FinishedAfterConfirmed"] = "FinishedAfterConfirmed";
    EnumTicketItemTypicalDtoRealOperateMode["FinishedAfterBreak"] = "FinishedAfterBreak";
    EnumTicketItemTypicalDtoRealOperateMode["HandOnPlacard"] = "HandOnPlacard";
    EnumTicketItemTypicalDtoRealOperateMode["DismantlePlacard"] = "DismantlePlacard";
    EnumTicketItemTypicalDtoRealOperateMode["TemporaryDismantle"] = "TemporaryDismantle";
    EnumTicketItemTypicalDtoRealOperateMode["ScanCode"] = "ScanCode";
    EnumTicketItemTypicalDtoRealOperateMode["Remote"] = "Remote";
    EnumTicketItemTypicalDtoRealOperateMode["Repeat"] = "Repeat";
    EnumTicketItemTypicalDtoRealOperateMode["Skip"] = "Skip";
    EnumTicketItemTypicalDtoRealOperateMode["Delete"] = "Delete";
    EnumTicketItemTypicalDtoRealOperateMode["Reset"] = "Reset";
    EnumTicketItemTypicalDtoRealOperateMode["Error"] = "Error";
    EnumTicketItemTypicalDtoRealOperateMode["CommonLock"] = "CommonLock";
})(EnumTicketItemTypicalDtoRealOperateMode || (EnumTicketItemTypicalDtoRealOperateMode = {}));
export var EnumTicketItemTypicalDtoOperateResult;
(function (EnumTicketItemTypicalDtoOperateResult) {
    EnumTicketItemTypicalDtoOperateResult["None"] = "None";
    EnumTicketItemTypicalDtoOperateResult["Operated"] = "Operated";
    EnumTicketItemTypicalDtoOperateResult["Finished"] = "Finished";
})(EnumTicketItemTypicalDtoOperateResult || (EnumTicketItemTypicalDtoOperateResult = {}));
export class TicketItemTypicalDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ListResultDto_TicketItemTypicalDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class CreateTicketCurrentInput {
    constructor(data) {
        if (data) {
            this['ticketTypicalId'] = data['ticketTypicalId'];
            this['isAnalyseDeviceName'] = data['isAnalyseDeviceName'];
        }
    }
}
export class AddOrUpdateCommitInput {
    constructor(data) {
        if (data) {
            this['ticketTypicalInvlidId'] = data['ticketTypicalInvlidId'];
        }
    }
}
export class AddOrUpdateApproveInput {
    constructor(data) {
        if (data) {
            this['ticketTypicalInvalidId'] = data['ticketTypicalInvalidId'];
            this['isPass'] = data['isPass'];
        }
    }
}
export class ListResultDto_GetTicketTypicalInvalidsOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class GetTicketTypicalInvalidsOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['ticketTypicalId'] = data['ticketTypicalId'];
            this['ticketItemTypicals'] = data['ticketItemTypicals'];
        }
    }
}
export class ListResultDto_NameValueDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class AuthenticateModel {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['provider'] = data['provider'];
        }
    }
}
export class ImpersonatedAuthenticateResultModel {
    constructor(data) {
        if (data) {
            this['accessToken'] = data['accessToken'];
            this['encryptedAccessToken'] = data['encryptedAccessToken'];
            this['expireInSeconds'] = data['expireInSeconds'];
        }
    }
}
export class SwitchedAccountAuthenticateResultModel {
    constructor(data) {
        if (data) {
            this['accessToken'] = data['accessToken'];
            this['encryptedAccessToken'] = data['encryptedAccessToken'];
            this['expireInSeconds'] = data['expireInSeconds'];
        }
    }
}
export class ExternalLoginProviderInfoModel {
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['clientId'] = data['clientId'];
        }
    }
}
export class ExternalAuthenticateModel {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['authProvider'] = data['authProvider'];
            this['providerKey'] = data['providerKey'];
            this['singleSignIn'] = data['singleSignIn'];
        }
    }
}
export class SecurityAuthenticateResultModel {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['otp'] = data['otp'];
            this['authProvider'] = data['authProvider'];
            this['providerKey'] = data['providerKey'];
            this['singleSignIn'] = data['singleSignIn'];
        }
    }
}
export class UserLogin {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['userNameOrEmailAddress'] = data['userNameOrEmailAddress'];
            this['password'] = data['password'];
            this['providerKey'] = data['providerKey'];
            this['authProvider'] = data['authProvider'];
        }
    }
}
export class UiCustomizationSettingsEditDto {
    constructor(data) {
        if (data) {
            this['layout'] = data['layout'];
            this['header'] = data['header'];
            this['menu'] = data['menu'];
            this['footer'] = data['footer'];
        }
    }
}
export class UiCustomizationLayoutSettingsEditDto {
    constructor(data) {
        if (data) {
            this['layoutType'] = data['layoutType'];
            this['contentSkin'] = data['contentSkin'];
        }
    }
}
export class UiCustomizationHeaderSettingsEditDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['fixedFooter'] = data['fixedFooter'];
        }
    }
}
export class PagedResultDto_UserListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class UserListDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['roleId'] = data['roleId'];
            this['roleName'] = data['roleName'];
        }
    }
}
export class GetUserForEditOutput {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['roleId'] = data['roleId'];
            this['roleName'] = data['roleName'];
            this['roleDisplayName'] = data['roleDisplayName'];
            this['isAssigned'] = data['isAssigned'];
        }
    }
}
export class GetUserPermissionsForEditOutput {
    constructor(data) {
        if (data) {
            this['permissions'] = data['permissions'];
            this['grantedPermissionNames'] = data['grantedPermissionNames'];
        }
    }
}
export class EntityDto_Int64 {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
        }
    }
}
export class UpdateUserPermissionsInput {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['grantedPermissionNames'] = data['grantedPermissionNames'];
        }
    }
}
export class CreateOrUpdateUserInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['name'] = data['name'];
            this['surname'] = data['surname'];
            this['userName'] = data['userName'];
            this['id'] = data['id'];
        }
    }
}
export class LinkToUserInput {
    constructor(data) {
        if (data) {
            this['tenancyName'] = data['tenancyName'];
            this['usernameOrEmailAddress'] = data['usernameOrEmailAddress'];
            this['password'] = data['password'];
        }
    }
}
export class PagedResultDto_LinkedUserDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class LinkedUserDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class UnlinkUserInput {
    constructor(data) {
        if (data) {
            this['tenantId'] = data['tenantId'];
            this['userId'] = data['userId'];
        }
    }
}
export class ListResultDto_UserLoginAttemptDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class UserLoginAttemptDto {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['userLogin'] = data['userLogin'];
        }
    }
}
export class UserLoginDto {
    constructor(data) {
        if (data) {
            this['key'] = data['key'];
        }
    }
}
export class CreateOrUpdateNfcUserLoginInput {
    constructor(data) {
        if (data) {
            this['userId'] = data['userId'];
            this['key'] = data['key'];
        }
    }
}
export class GetLatestWebLogsOutput {
    constructor(data) {
        if (data) {
            this['latestWebLogLines'] = data['latestWebLogLines'];
        }
    }
}
export var EnumWireCabinetApplyInputApplyReason;
(function (EnumWireCabinetApplyInputApplyReason) {
    EnumWireCabinetApplyInputApplyReason["EquipmentFailure"] = "EquipmentFailure";
    EnumWireCabinetApplyInputApplyReason["EquipmentOverhaul"] = "EquipmentOverhaul";
    EnumWireCabinetApplyInputApplyReason["UrgentUnlock"] = "UrgentUnlock";
    EnumWireCabinetApplyInputApplyReason["OtherReason"] = "OtherReason";
})(EnumWireCabinetApplyInputApplyReason || (EnumWireCabinetApplyInputApplyReason = {}));
export class WireCabinetApplyInput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['approverId'] = data['approverId'];
            this['isApprovePass'] = data['isApprovePass'];
            this['approveNote'] = data['approveNote'];
        }
    }
}
export class WireCabinetUnlockInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
        }
    }
}
export class WireCabinetUnlockOutput {
    constructor(data) {
        if (data) {
            this['unlockCode'] = data['unlockCode'];
        }
    }
}
export class WireCabinetHookInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['hookPosition'] = data['hookPosition'];
            this['photoIds'] = data['photoIds'];
        }
    }
}
export class WireCabinetHook2Input {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['photoIds'] = data['photoIds'];
            this['deviceId'] = data['deviceId'];
        }
    }
}
export class WireCabinetUnHookInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
        }
    }
}
export class WireCabinetUpdateTaskInput {
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
            this['status'] = data['status'];
            this['bluetooth'] = data['bluetooth'];
        }
    }
}
export var EnumWireCabinetStatusDtoBuckleStatus;
(function (EnumWireCabinetStatusDtoBuckleStatus) {
    EnumWireCabinetStatusDtoBuckleStatus["Unkown"] = "Unkown";
    EnumWireCabinetStatusDtoBuckleStatus["Lock"] = "Lock";
    EnumWireCabinetStatusDtoBuckleStatus["UnlockAndTake"] = "UnlockAndTake";
    EnumWireCabinetStatusDtoBuckleStatus["UnlockNotTake"] = "UnlockNotTake";
})(EnumWireCabinetStatusDtoBuckleStatus || (EnumWireCabinetStatusDtoBuckleStatus = {}));
export class WireCabinetStatusDto {
    constructor(data) {
        if (data) {
            this['buckleNo'] = data['buckleNo'];
            this['buckleStatus'] = data['buckleStatus'];
        }
    }
}
export class WireCabinetValueTextDto {
    constructor(data) {
        if (data) {
            this['value'] = data['value'];
            this['text'] = data['text'];
        }
    }
}
export var EnumWireCabinetTaskOutputUnlockMode;
(function (EnumWireCabinetTaskOutputUnlockMode) {
    EnumWireCabinetTaskOutputUnlockMode["Online"] = "Online";
    EnumWireCabinetTaskOutputUnlockMode["Bluetooth"] = "Bluetooth";
    EnumWireCabinetTaskOutputUnlockMode["Password"] = "Password";
})(EnumWireCabinetTaskOutputUnlockMode || (EnumWireCabinetTaskOutputUnlockMode = {}));
export var EnumWireCabinetTaskOutputLockMode;
(function (EnumWireCabinetTaskOutputLockMode) {
    EnumWireCabinetTaskOutputLockMode["LockerDoor"] = "LockerDoor";
    EnumWireCabinetTaskOutputLockMode["LockerBuckle"] = "LockerBuckle";
})(EnumWireCabinetTaskOutputLockMode || (EnumWireCabinetTaskOutputLockMode = {}));
export var EnumWireCabinetTaskOutputTaskStep;
(function (EnumWireCabinetTaskOutputTaskStep) {
    EnumWireCabinetTaskOutputTaskStep["None"] = "None";
    EnumWireCabinetTaskOutputTaskStep["Applying"] = "Applying";
    EnumWireCabinetTaskOutputTaskStep["ApprovalPassed"] = "ApprovalPassed";
    EnumWireCabinetTaskOutputTaskStep["ApprovalNotPassed"] = "ApprovalNotPassed";
    EnumWireCabinetTaskOutputTaskStep["Unlocked"] = "Unlocked";
    EnumWireCabinetTaskOutputTaskStep["TimeOut"] = "TimeOut";
    EnumWireCabinetTaskOutputTaskStep["TakenOut"] = "TakenOut";
    EnumWireCabinetTaskOutputTaskStep["Hooked"] = "Hooked";
    EnumWireCabinetTaskOutputTaskStep["Unhooked"] = "Unhooked";
    EnumWireCabinetTaskOutputTaskStep["Returned"] = "Returned";
    EnumWireCabinetTaskOutputTaskStep["Ended"] = "Ended";
    EnumWireCabinetTaskOutputTaskStep["ErrorCode"] = "ErrorCode";
})(EnumWireCabinetTaskOutputTaskStep || (EnumWireCabinetTaskOutputTaskStep = {}));
export var EnumWireCabinetTaskOutputApplyReason;
(function (EnumWireCabinetTaskOutputApplyReason) {
    EnumWireCabinetTaskOutputApplyReason["EquipmentFailure"] = "EquipmentFailure";
    EnumWireCabinetTaskOutputApplyReason["EquipmentOverhaul"] = "EquipmentOverhaul";
    EnumWireCabinetTaskOutputApplyReason["UrgentUnlock"] = "UrgentUnlock";
    EnumWireCabinetTaskOutputApplyReason["OtherReason"] = "OtherReason";
})(EnumWireCabinetTaskOutputApplyReason || (EnumWireCabinetTaskOutputApplyReason = {}));
export var EnumWireCabinetTaskOutputTakeReason;
(function (EnumWireCabinetTaskOutputTakeReason) {
    EnumWireCabinetTaskOutputTakeReason["UnlockByTicket"] = "UnlockByTicket";
    EnumWireCabinetTaskOutputTakeReason["UnlockByCard"] = "UnlockByCard";
    EnumWireCabinetTaskOutputTakeReason["UnlockByKey"] = "UnlockByKey";
    EnumWireCabinetTaskOutputTakeReason["UnlockByTest"] = "UnlockByTest";
    EnumWireCabinetTaskOutputTakeReason["UnlockByBorrow"] = "UnlockByBorrow";
})(EnumWireCabinetTaskOutputTakeReason || (EnumWireCabinetTaskOutputTakeReason = {}));
export class WireCabinetTaskOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class WireCabinetOperatorDto {
    constructor(data) {
        if (data) {
            this['id'] = data['id'];
            this['name'] = data['name'];
            this['surname'] = data['surname'];
            this['userName'] = data['userName'];
        }
    }
}
export class UpdateOperateTimeInput {
    constructor(data) {
        if (data) {
            this['bluetooth'] = data['bluetooth'];
            this['wireOperateTimeDtos'] = data['wireOperateTimeDtos'];
        }
    }
}
export var EnumWireOperateRecordDtoTakeReason;
(function (EnumWireOperateRecordDtoTakeReason) {
    EnumWireOperateRecordDtoTakeReason["UnlockByTicket"] = "UnlockByTicket";
    EnumWireOperateRecordDtoTakeReason["UnlockByCard"] = "UnlockByCard";
    EnumWireOperateRecordDtoTakeReason["UnlockByKey"] = "UnlockByKey";
    EnumWireOperateRecordDtoTakeReason["UnlockByTest"] = "UnlockByTest";
    EnumWireOperateRecordDtoTakeReason["UnlockByBorrow"] = "UnlockByBorrow";
})(EnumWireOperateRecordDtoTakeReason || (EnumWireOperateRecordDtoTakeReason = {}));
export var EnumWireOperateRecordDtoMarkBit;
(function (EnumWireOperateRecordDtoMarkBit) {
    EnumWireOperateRecordDtoMarkBit["TakeOut"] = "TakeOut";
    EnumWireOperateRecordDtoMarkBit["Return"] = "Return";
})(EnumWireOperateRecordDtoMarkBit || (EnumWireOperateRecordDtoMarkBit = {}));
export class WireOperateRecordDto {
    constructor(data) {
        if (data) {
            this['buckleNo'] = data['buckleNo'];
            this['operationTime'] = data['operationTime'];
            this['takeReason'] = data['takeReason'];
            this['markBit'] = data['markBit'];
        }
    }
}
export var EnumWireDetailOutputTaskStep;
(function (EnumWireDetailOutputTaskStep) {
    EnumWireDetailOutputTaskStep["None"] = "None";
    EnumWireDetailOutputTaskStep["Applying"] = "Applying";
    EnumWireDetailOutputTaskStep["ApprovalPassed"] = "ApprovalPassed";
    EnumWireDetailOutputTaskStep["ApprovalNotPassed"] = "ApprovalNotPassed";
    EnumWireDetailOutputTaskStep["Unlocked"] = "Unlocked";
    EnumWireDetailOutputTaskStep["TimeOut"] = "TimeOut";
    EnumWireDetailOutputTaskStep["TakenOut"] = "TakenOut";
    EnumWireDetailOutputTaskStep["Hooked"] = "Hooked";
    EnumWireDetailOutputTaskStep["Unhooked"] = "Unhooked";
    EnumWireDetailOutputTaskStep["Returned"] = "Returned";
    EnumWireDetailOutputTaskStep["Ended"] = "Ended";
    EnumWireDetailOutputTaskStep["ErrorCode"] = "ErrorCode";
})(EnumWireDetailOutputTaskStep || (EnumWireDetailOutputTaskStep = {}));
export class WireDetailOutput {
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class WireCabinetOutput {
    constructor(data) {
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
export var EnumWireDetailDtoTaskStep;
(function (EnumWireDetailDtoTaskStep) {
    EnumWireDetailDtoTaskStep["None"] = "None";
    EnumWireDetailDtoTaskStep["Applying"] = "Applying";
    EnumWireDetailDtoTaskStep["ApprovalPassed"] = "ApprovalPassed";
    EnumWireDetailDtoTaskStep["ApprovalNotPassed"] = "ApprovalNotPassed";
    EnumWireDetailDtoTaskStep["Unlocked"] = "Unlocked";
    EnumWireDetailDtoTaskStep["TimeOut"] = "TimeOut";
    EnumWireDetailDtoTaskStep["TakenOut"] = "TakenOut";
    EnumWireDetailDtoTaskStep["Hooked"] = "Hooked";
    EnumWireDetailDtoTaskStep["Unhooked"] = "Unhooked";
    EnumWireDetailDtoTaskStep["Returned"] = "Returned";
    EnumWireDetailDtoTaskStep["Ended"] = "Ended";
    EnumWireDetailDtoTaskStep["ErrorCode"] = "ErrorCode";
})(EnumWireDetailDtoTaskStep || (EnumWireDetailDtoTaskStep = {}));
export class WireDetailDto {
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
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
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class WireBeTakenDto {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['displayName'] = data['displayName'];
        }
    }
}
export class ListResultDto_WireCabinetBluetoothDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class WireCabinetBluetoothDto {
    constructor(data) {
        if (data) {
            this['equipmentId'] = data['equipmentId'];
            this['bluetooth'] = data['bluetooth'];
        }
    }
}
export class CheckWireConfigInput {
    constructor(data) {
        if (data) {
            this['equipmentPropertyId'] = data['equipmentPropertyId'];
            this['name'] = data['name'];
            this['displayName'] = data['displayName'];
            this['description'] = data['description'];
            this['value'] = data['value'];
        }
    }
}
//# sourceMappingURL=index.js.map