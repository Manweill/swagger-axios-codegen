import axios from 'axios';
export class AccountService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static isTenantAvailable(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/IsTenantAvailable';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static register(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/Register';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendPasswordResetCode(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/SendPasswordResetCode';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetPassword(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/ResetPassword';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendEmailActivationLink(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/SendEmailActivationLink';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static activateEmail(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/ActivateEmail';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static impersonate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/Impersonate';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static backToImpersonator(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/BackToImpersonator';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static switchToLinkedAccount(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Account/SwitchToLinkedAccount';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class AuditLogService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAuditLogs(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/AuditLog/GetAuditLogs';
        configs.url = url;
        configs.params = {
            startDate: parameters['startDate'],
            endDate: parameters['endDate'],
            userName: parameters['userName'],
            serviceName: parameters['serviceName'],
            methodName: parameters['methodName'],
            browserInfo: parameters['browserInfo'],
            hasException: parameters['hasException'],
            minExecutionDuration: parameters['minExecutionDuration'],
            maxExecutionDuration: parameters['maxExecutionDuration'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAuditLogsToExcel(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/AuditLog/GetAuditLogsToExcel';
        configs.url = url;
        configs.params = {
            startDate: parameters['startDate'],
            endDate: parameters['endDate'],
            userName: parameters['userName'],
            serviceName: parameters['serviceName'],
            methodName: parameters['methodName'],
            browserInfo: parameters['browserInfo'],
            hasException: parameters['hasException'],
            minExecutionDuration: parameters['minExecutionDuration'],
            maxExecutionDuration: parameters['maxExecutionDuration'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class CachingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllCaches(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Caching/GetAllCaches';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearCache(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Caching/ClearCache';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearAllCaches(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Caching/ClearAllCaches';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class ChatService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserChatFriendsWithSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Chat/GetUserChatFriendsWithSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserChatMessages(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Chat/GetUserChatMessages';
        configs.url = url;
        configs.params = {
            tenantId: parameters['tenantId'],
            userId: parameters['userId'],
            minMessageId: parameters['minMessageId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static markAllUnreadMessagesOfUserAsRead(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class CommonLookupService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionsForCombobox(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetEditionsForCombobox';
        configs.url = url;
        configs.params = { onlyFreeItems: parameters['onlyFreeItems'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static findUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/FindUsers';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDefaultEditionName(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetDefaultEditionName';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypesForCombobox(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationsForCombobox(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetStationsForCombobox';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getVoltageLevelsForCombobox(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceStateForCombox(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/CommonLookup/GetDeviceStateForCombox';
        configs.url = url;
        configs.params = { deviceTypeId: parameters['deviceTypeId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class DemoUiComponentsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/SendAndGetDate';
        configs.url = url;
        configs.params = { date: parameters['date'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDateTime(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/SendAndGetDateTime';
        configs.url = url;
        configs.params = { date: parameters['date'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDateRange(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/SendAndGetDateRange';
        configs.url = url;
        configs.params = { startDate: parameters['startDate'], endDate: parameters['endDate'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCountries(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/GetCountries';
        configs.url = url;
        configs.params = { searchTerm: parameters['searchTerm'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetSelectedCountries(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries';
        configs.url = url;
        let data = null;
        data = { ...parameters['selectedCountries'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetValue(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DemoUiComponents/SendAndGetValue';
        configs.url = url;
        configs.params = { input: parameters['input'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDevices(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/GetDevices';
        configs.url = url;
        configs.params = {
            name: parameters['name'],
            deviceAreaId: parameters['deviceAreaId'],
            stationId: parameters['stationId'],
            skipCount: parameters['skipCount'],
            maxResultCount: parameters['maxResultCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlDevices(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/GetLockControlDevices';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            deviceAreaId: parameters['deviceAreaId'],
            deviceName: parameters['deviceName'],
            isEst: parameters['isEst'],
            isPprimary: parameters['isPprimary'],
            isSecondary: parameters['isSecondary'],
            unPage: parameters['unPage'],
            skipCount: parameters['skipCount'],
            maxResultCount: parameters['maxResultCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/GetDeviceForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDevice(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/CreateOrUpdateDevice';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDevice(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/DeleteDevice';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static queryDeviceStates(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/QueryDeviceStates';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDeviceState(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/UpdateDeviceState';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkDeviceNameIsExist(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Device/CheckDeviceNameIsExist';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceAreaService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceAreas(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceArea/GetDeviceAreas';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceAreaForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceArea/GetDeviceAreaForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceArea/DeleteDeviceArea';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceBoardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceBoards(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceBoard/GetDeviceBoards';
        configs.url = url;
        configs.params = {
            name: parameters['name'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceBoardForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceBoard/GetDeviceBoardForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceBoard(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceBoard/CreateOrUpdateDeviceBoard';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceBoard(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceBoard/DeleteDeviceBoard';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadDeviceBoard(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'multipart/form-data';
        let url = '/api/services/app/DeviceBoard/UploadDeviceBoard';
        configs.url = url;
        let data = null;
        data = new FormData();
        if (parameters['file']) {
            data.append('file', parameters['file'], 'file');
        }
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceLockCodeService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodeProperties(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceLockCode/GetLockCodeProperties';
        configs.url = url;
        configs.params = { maxResultCount: parameters['maxResultCount'], skipCount: parameters['skipCount'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodePropertySelected(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodePropertyForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateLockCodeProperty(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLockCodeProperty(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceTermService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTerms(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceTerm/GetDeviceTerms';
        configs.url = url;
        configs.params = {
            stationName: parameters['stationName'],
            pointName: parameters['pointName'],
            state: parameters['state']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerms(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceTerm/GetTerms';
        configs.url = url;
        configs.params = { deviceType: parameters['deviceType'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceOperation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceOperation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceTerm/DeleteDeviceOperation';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class DeviceTypeService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypes(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceType/GetDeviceTypes';
        configs.url = url;
        configs.params = {
            name: parameters['name'],
            isEst: parameters['isEst'],
            unPaged: parameters['unPaged'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypeForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceType/GetDeviceTypeForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceType(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceType/CreateOrUpdateDeviceType';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceType(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/DeviceType/DeleteDeviceType';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class EditionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditions(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Edition/GetEditions';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Edition/GetEditionForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEdition(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Edition/CreateOrUpdateEdition';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteEdition(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Edition/DeleteEdition';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionComboboxItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Edition/GetEditionComboboxItems';
        configs.url = url;
        configs.params = {
            selectedEditionId: parameters['selectedEditionId'],
            addAllItem: parameters['addAllItem'],
            onlyFreeItems: parameters['onlyFreeItems']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class EquipmentService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipments(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetEquipments';
        configs.url = url;
        configs.params = {
            productId: parameters['productId'],
            name: parameters['name'],
            terminalId: parameters['terminalId'],
            stationId: parameters['stationId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetEquipmentForEdit';
        configs.url = url;
        configs.params = { productId: parameters['productId'], id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEquipment(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/CreateOrUpdateEquipment';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteEquipment(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/DeleteEquipment';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentNotBinded(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetEquipmentNotBinded';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            name: parameters['name'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllStationBindEquipments(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetAllStationBindEquipments';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationBindEquipments(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetStationBindEquipments';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            name: parameters['name'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentWithProperty(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetEquipmentWithProperty';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static controlEquipment(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/ControlEquipment';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentsCombineProperties(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Equipment/GetEquipmentsCombineProperties';
        configs.url = url;
        configs.params = { type: parameters['type'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class FileService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static download(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/File/download/{id}/{name}';
        url = url.replace('{id}', parameters['id'] + '');
        url = url.replace('{name}', parameters['name'] + '');
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static file(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/File/{id}/{name}';
        url = url.replace('{id}', parameters['id'] + '');
        url = url.replace('{name}', parameters['name'] + '');
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class FriendshipService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createFriendshipRequest(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Friendship/CreateFriendshipRequest';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createFriendshipRequestByUserName(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Friendship/CreateFriendshipRequestByUserName';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static blockUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Friendship/BlockUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unblockUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Friendship/UnblockUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static acceptFriendshipRequest(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Friendship/AcceptFriendshipRequest';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class GraphService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGraphs(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Graph/GetGraphs';
        configs.url = url;
        configs.params = { name: parameters['name'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGraphForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Graph/GetGraphForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateGraph(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Graph/CreateOrUpdateGraph';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteGraph(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Graph/DeleteGraph';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadGraph(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'multipart/form-data';
        let url = '/api/services/app/Graph/UploadGraph';
        configs.url = url;
        let data = null;
        data = new FormData();
        if (parameters['file']) {
            data.append('file', parameters['file'], 'file');
        }
        configs.data = data;
        return axios(configs);
    }
}
export class HostDashboardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDashboardStatisticsData(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostDashboard/GetDashboardStatisticsData';
        configs.url = url;
        configs.params = {
            incomeStatisticsDateInterval: parameters['incomeStatisticsDateInterval'],
            startDate: parameters['startDate'],
            endDate: parameters['endDate']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIncomeStatistics(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostDashboard/GetIncomeStatistics';
        configs.url = url;
        configs.params = {
            incomeStatisticsDateInterval: parameters['incomeStatisticsDateInterval'],
            startDate: parameters['startDate'],
            endDate: parameters['endDate']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionTenantStatistics(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostDashboard/GetEditionTenantStatistics';
        configs.url = url;
        configs.params = { startDate: parameters['startDate'], endDate: parameters['endDate'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class HostSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostSettings/GetAllSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateAllSettings(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostSettings/UpdateAllSettings';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTestEmail(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/HostSettings/SendTestEmail';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class InfluxDBService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createDbBase(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/InfluxDB/CreateDbBase';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static writeDataToDb(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/InfluxDB/WriteDataToDb';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static readDataFromDb(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/InfluxDB/ReadDataFromDb';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class InstallService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setup(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Install/Setup';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAppSettingsJson(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Install/GetAppSettingsJson';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkDatabase(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Install/CheckDatabase';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class IntelligentLockServiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addIntelligentLocks(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/IntelligentLockService/AddIntelligentLocks';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeIntelligentLocks(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks';
        configs.url = url;
        configs.params = { roleId: parameters['roleId'], intelligentLockIds: parameters['intelligentLockIds'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateIntelligentLocks(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/IntelligentLockService/UpdateIntelligentLocks';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIntelligentLockList(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/IntelligentLockService/GetIntelligentLockList';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIntelligentLocksInDeviceAreaTree(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class InvoiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getInvoiceInfo(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Invoice/GetInvoiceInfo';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createInvoice(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Invoice/CreateInvoice';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class KeyCabinetService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetApply(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetApply';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetApprove(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetApprove';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetUnlock(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetUnlock';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetUpdateUnlockCode(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetUpdateUnlockCode';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetOpenDoor(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetReturn(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/KeyCabinetReturn';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonEnums(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetApplyReasonEnums';
        configs.url = url;
        configs.params = { approverType: parameters['approverType'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonList(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetApplyReasonList';
        configs.url = url;
        configs.params = { approverType: parameters['approverType'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getBuckleTypeEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetBuckleTypeEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockModeEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetLockModeEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApproverTypeEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetApproverTypeEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetTask';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static endTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/EndTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplicants(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetApplicants';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApprovers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetApprovers';
        configs.url = url;
        configs.params = { roles: parameters['roles'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIsTaskExpired(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetIsTaskExpired';
        configs.url = url;
        configs.params = { equipmentPropertyId: parameters['equipmentPropertyId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIsApplicant(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetIsApplicant';
        configs.url = url;
        configs.params = { operatorId: parameters['operatorId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getKeyCarbinetLogs(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            startDate: parameters['startDate'],
            endDate: parameters['endDate'],
            applicantId: parameters['applicantId'],
            approverId: parameters['approverId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateKeyCarbinetLog(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class LanguageService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguages(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/GetLanguages';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguageForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/GetLanguageForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateLanguage(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/CreateOrUpdateLanguage';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLanguage(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/DeleteLanguage';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setDefaultLanguage(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/SetDefaultLanguage';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguageTexts(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/GetLanguageTexts';
        configs.url = url;
        configs.params = {
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount'],
            sorting: parameters['sorting'],
            sourceName: parameters['sourceName'],
            baseLanguageName: parameters['baseLanguageName'],
            targetLanguageName: parameters['targetLanguageName'],
            targetValueFilter: parameters['targetValueFilter'],
            filterText: parameters['filterText']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateLanguageText(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Language/UpdateLanguageText';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class LockControlTaskServiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateLockControlTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/AddOrUpdateLockControlTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskList(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/GetLockControlTaskList';
        configs.url = url;
        configs.params = {
            taskName: parameters['taskName'],
            state: parameters['state'],
            skipCount: parameters['skipCount'],
            maxResultCount: parameters['maxResultCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/GetLockControlTaskItems';
        configs.url = url;
        configs.params = { taskId: parameters['taskId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static commitLockControlTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/CommitLockControlTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLockControlTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/DeleteLockControlTask';
        configs.url = url;
        configs.params = { taskId: parameters['taskId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskPendingDetail(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/GetLockControlTaskPendingDetail';
        configs.url = url;
        configs.params = { taskId: parameters['taskId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static approvalLockControlTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/ApprovalLockControlTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskCodeInfos(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/LockControlTaskService/GetLockControlTaskCodeInfos';
        configs.url = url;
        configs.params = { taskId: parameters['taskId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class NotificationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserNotifications(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Notification/GetUserNotifications';
        configs.url = url;
        configs.params = {
            state: parameters['state'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setAllNotificationsAsRead(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Notification/SetAllNotificationsAsRead';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setNotificationAsRead(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Notification/SetNotificationAsRead';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNotificationSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Notification/GetNotificationSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateNotificationSettings(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Notification/UpdateNotificationSettings';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class OperationRecordService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecord(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OperationRecord/GetOperationRecord';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecords(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OperationRecord/GetOperationRecords';
        configs.url = url;
        configs.params = {
            applicantId: parameters['applicantId'],
            approverId: parameters['approverId'],
            startTime: parameters['startTime'],
            endTime: parameters['endTime'],
            stationId: parameters['stationId'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecordsByEquipmentPropertyId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OperationRecord/GetOperationRecordsByEquipmentPropertyId';
        configs.url = url;
        configs.params = {
            equipmentPropertyId: parameters['equipmentPropertyId'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecordsByEquipmentId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OperationRecord/GetOperationRecordsByEquipmentId';
        configs.url = url;
        configs.params = {
            equipmentId: parameters['equipmentId'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class OrganizationUnitService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOrganizationUnits(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/GetOrganizationUnits';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOrganizationUnitUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers';
        configs.url = url;
        configs.params = {
            id: parameters['id'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/CreateOrganizationUnit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static moveOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/MoveOrganizationUnit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserFromOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit';
        configs.url = url;
        configs.params = { userId: parameters['userId'], organizationUnitId: parameters['organizationUnitId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addUsersToOrganizationUnit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static findUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/OrganizationUnit/FindUsers';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class PaymentService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPaymentInfo(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Payment/GetPaymentInfo';
        configs.url = url;
        configs.params = { upgradeEditionId: parameters['upgradeEditionId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createPayment(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Payment/CreatePayment';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static executePayment(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Payment/ExecutePayment';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPaymentHistory(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Payment/GetPaymentHistory';
        configs.url = url;
        configs.params = {
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class PendingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPendingList(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Pending/GetPendingList';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class PermissionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllPermissions(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Permission/GetAllPermissions';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class ProductService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProducts(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Product/GetProducts';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Product/GetProductForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateProduct(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Product/CreateOrUpdateProduct';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteProduct(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Product/DeleteProduct';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class ProductPropertyService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductProperties(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/ProductProperty/GetProductProperties';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductPropertyForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/ProductProperty/GetProductPropertyForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateProductProperty(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteProductProperty(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/ProductProperty/DeleteProductProperty';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class ProfileService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentUserProfileForEdit(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/GetCurrentUserProfileForEdit';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateGoogleAuthenticatorKey(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendVerificationSms(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/SendVerificationSms';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static verifySmsCode(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/VerifySmsCode';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateCurrentUserProfile(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/UpdateCurrentUserProfile';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static changePassword(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/ChangePassword';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateProfilePicture(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/UpdateProfilePicture';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPasswordComplexitySetting(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/GetPasswordComplexitySetting';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProfilePicture(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/GetProfilePicture';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getFriendProfilePictureById(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/GetFriendProfilePictureById';
        configs.url = url;
        configs.params = {
            profilePictureId: parameters['profilePictureId'],
            userId: parameters['userId'],
            tenantId: parameters['tenantId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProfilePictureById(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/GetProfilePictureById';
        configs.url = url;
        configs.params = { profilePictureId: parameters['profilePictureId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static changeLanguage(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Profile/ChangeLanguage';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class RiskTicketItemService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicket';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/DeleteTicket';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskTicketItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskTicketItems';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskTicketItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/DeleteRiskTicketItems';
        configs.url = url;
        configs.params = { riskTicketId: parameters['riskTicketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskItemTemplate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTemplate';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskItemTemplate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/DeleteRiskItemTemplate';
        configs.url = url;
        configs.params = { riskPublicItemId: parameters['riskPublicItemId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllRiskItemTemplate(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetAllRiskItemTemplate';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskItemTermMap(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/AddOrUpdateRiskItemTermMap';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskItemTermMap(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/DeleteRiskItemTermMap';
        configs.url = url;
        configs.params = { riskItemTermMapId: parameters['riskItemTermMapId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static mappingRiskItemByTerm(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/MappingRiskItemByTerm';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemSingle(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetRiskItemSingle';
        configs.url = url;
        configs.params = { riskItemId: parameters['riskItemId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByTicketId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketId';
        configs.url = url;
        configs.params = {
            ticketId: parameters['ticketId'],
            ticketType: parameters['ticketType'],
            isContainsTicketItemRisk: parameters['isContainsTicketItemRisk']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByRiskTicketId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByRiskTicketId';
        configs.url = url;
        configs.params = { riskTicketId: parameters['riskTicketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayFromTemplate(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayFromTemplate';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByTicketFolderId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/RiskTicketItem/GetRiskItemArrayByTicketFolderId';
        configs.url = url;
        configs.params = { ticketFolderId: parameters['ticketFolderId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class RoleService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRoles(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Role/GetRoles';
        configs.url = url;
        configs.params = { permission: parameters['permission'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRoleForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Role/GetRoleForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateRole(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Role/CreateOrUpdateRole';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRole(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Role/DeleteRole';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class SafetyWearService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateSafetyWearMonitoring(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOne(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/GetOne';
        configs.url = url;
        configs.params = { userId: parameters['userId'], equipmentNo: parameters['equipmentNo'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getList(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/GetList';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSafetyWearEquipmentByMacAddress(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress';
        configs.url = url;
        configs.params = { macAddress: parameters['macAddress'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSafetyWearEquipments(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/GetSafetyWearEquipments';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserListForSafetyWearLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin';
        configs.url = url;
        configs.params = { userName: parameters['userName'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class SessionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentLoginInformations(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Session/GetCurrentLoginInformations';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUserSignInToken(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Session/UpdateUserSignInToken';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class StationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStations(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/GetStations';
        configs.url = url;
        configs.params = { name: parameters['name'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/GetStationForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/CreateOrUpdateStation';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/DeleteStation';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationNotBind(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/GetStationNotBind';
        configs.url = url;
        configs.params = {
            name: parameters['name'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindEquipmentStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/BindEquipmentStation';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeEquipmentStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/RemoveEquipmentStation';
        configs.url = url;
        configs.params = { equipmentId: parameters['equipmentId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createStationUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/CreateStationUsers';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserFromStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/RemoveUserFromStation';
        configs.url = url;
        configs.params = {
            stationUserDtoStationId: parameters['stationUserDtoStationId'],
            stationUserDtoUserId: parameters['stationUserDtoUserId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDefaultUserStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Station/UpdateDefaultUserStation';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class StationAreaService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createStationArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/CreateStationArea';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateStationArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/UpdateStationArea';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static moveStationArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/MoveStationArea';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStationArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/DeleteStationArea';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationArea(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/GetStationArea';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentUserStationArea(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/GetCurrentUserStationArea';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserStationArea(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/GetUserStationArea';
        configs.url = url;
        configs.params = { userId: parameters['userId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationAreaWithEquipments(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/GetStationAreaWithEquipments';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static stationAreaBindStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/StationAreaBindStation';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeStationAreaStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationArea/RemoveStationAreaStation';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class StationUserService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRelatedUserListByStationId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationUser/GetRelatedUserListByStationId';
        configs.url = url;
        configs.params = {
            id: parameters['id'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNotRelatedUserListByStationId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationUser/GetNotRelatedUserListByStationId';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDefaultStation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationUser/GetDefaultStation';
        configs.url = url;
        configs.params = { userId: parameters['userId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserStations(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/StationUser/GetUserStations';
        configs.url = url;
        configs.params = { userId: parameters['userId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class SubscriptionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static upgradeTenantToEquivalentEdition(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition';
        configs.url = url;
        configs.params = { upgradeEditionId: parameters['upgradeEditionId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TenantService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenants(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/GetTenants';
        configs.url = url;
        configs.params = {
            filter: parameters['filter'],
            subscriptionEndDateStart: parameters['subscriptionEndDateStart'],
            subscriptionEndDateEnd: parameters['subscriptionEndDateEnd'],
            creationDateStart: parameters['creationDateStart'],
            creationDateEnd: parameters['creationDateEnd'],
            editionId: parameters['editionId'],
            editionIdSpecified: parameters['editionIdSpecified'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createTenant(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/CreateTenant';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenantForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/GetTenantForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTenant(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/UpdateTenant';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTenant(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/DeleteTenant';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenantFeaturesForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/GetTenantFeaturesForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTenantFeatures(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/UpdateTenantFeatures';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetTenantSpecificFeatures(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/ResetTenantSpecificFeatures';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlockTenantAdmin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Tenant/UnlockTenantAdmin';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class TenantDashboardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getMemberActivity(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantDashboard/GetMemberActivity';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDashboardData(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantDashboard/GetDashboardData';
        configs.url = url;
        configs.params = { salesSummaryDatePeriod: parameters['salesSummaryDatePeriod'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSalesSummary(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantDashboard/GetSalesSummary';
        configs.url = url;
        configs.params = { salesSummaryDatePeriod: parameters['salesSummaryDatePeriod'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRegionalStats(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantDashboard/GetRegionalStats';
        configs.url = url;
        configs.params = { input: parameters['input'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGeneralStats(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantDashboard/GetGeneralStats';
        configs.url = url;
        configs.params = { input: parameters['input'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TenantRegistrationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static registerTenant(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantRegistration/RegisterTenant';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionsForSelect(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantRegistration/GetEditionsForSelect';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEdition(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantRegistration/GetEdition';
        configs.url = url;
        configs.params = { editionId: parameters['editionId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TenantSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantSettings/GetAllSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateAllSettings(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantSettings/UpdateAllSettings';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearLogo(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantSettings/ClearLogo';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearCustomCss(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantSettings/ClearCustomCss';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTestEmail(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TenantSettings/SendTestEmail';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class TerimalPortConfigService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalPortConfigs(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs';
        configs.url = url;
        configs.params = { terminalId: parameters['terminalId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalPortConfigForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateTerminalPortConfig(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTerminalPortConfig(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TerminalService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminals(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Terminal/GetTerminals';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Terminal/GetTerminalForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateTerminal(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Terminal/CreateOrUpdateTerminal';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTerminal(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Terminal/DeleteTerminal';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetTerminal(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Terminal/ResetTerminal';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class TermperatureControlService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendControlOperating(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TermperatureControl/SendControlOperating';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTermperaturePoints(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TermperatureControl/GetTermperaturePoints';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TicketFolderService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketFolder(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/AddOrUpdateTicketFolder';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStationTicketFolder(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/DeleteStationTicketFolder';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'], isForce: parameters['isForce'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketFolder(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/DeleteTicketFolder';
        configs.url = url;
        configs.params = { ticketFolderId: parameters['ticketFolderId'], isForce: parameters['isForce'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketFolderRiskInfo(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/AddOrUpdateTicketFolderRiskInfo';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFolderChildrens(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetStationTicketFolderChildrens';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'], depth: parameters['depth'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFolderChildrens(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetTicketFolderChildrens';
        configs.url = url;
        configs.params = { ticketFolderId: parameters['ticketFolderId'], depth: parameters['depth'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFolderChildrenWithTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetStationTicketFolderChildrenWithTicket';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            depth: parameters['depth'],
            ticketFolderId: parameters['ticketFolderId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFoldersByName(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetTicketFoldersByName';
        configs.url = url;
        configs.params = { partName: parameters['partName'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFolderById(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetTicketFolderById';
        configs.url = url;
        configs.params = { ticketFolderId: parameters['ticketFolderId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignFolderTickets(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/AssignFolderTickets';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getFolderTicketsById(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetFolderTicketsById';
        configs.url = url;
        configs.params = { ticketFolderId: parameters['ticketFolderId'], isRecursive: parameters['isRecursive'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFoldersWithTicketsByParentId(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetTicketFoldersWithTicketsByParentId';
        configs.url = url;
        configs.params = {
            ticktFolderId: parameters['ticktFolderId'],
            depth: parameters['depth'],
            isNeedSearchByUserProfessional: parameters['isNeedSearchByUserProfessional'],
            stationId: parameters['stationId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFoldersWithTickets(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketFolder/GetStationTicketFoldersWithTickets';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            depth: parameters['depth'],
            ticketFolderId: parameters['ticketFolderId']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TicketTaskService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/AddOrUpdateTicketTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/DeleteTicketTask';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignTicketPersonaes(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/AssignTicketPersonaes';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static commitTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/CommitTicket';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static approveTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/ApproveTicket';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static executeTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/ExecuteTicket';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static finishTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/FinishTicket';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTicketItemsStatus(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/UpdateTicketItemsStatus';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/GetTicket';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTickets(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/GetTickets';
        configs.url = url;
        configs.params = {
            stationId: parameters['stationId'],
            unPage: parameters['unPage'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTask/GetTicketItems';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TicketTypicalService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketTypical(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/AddOrUpdateTicketTypical';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTypical(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/DeleteTicketTypical';
        configs.url = url;
        configs.params = { ticketTypicalId: parameters['ticketTypicalId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketsByTaskName(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicketsByTaskName';
        configs.url = url;
        configs.params = {
            partTitle: parameters['partTitle'],
            stationId: parameters['stationId'],
            ticketFolderId: parameters['ticketFolderId'],
            isRecursive: parameters['isRecursive'],
            skipCount: parameters['skipCount'],
            maxResultCount: parameters['maxResultCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicketItems';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicket(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicket';
        configs.url = url;
        configs.params = { ticketId: parameters['ticketId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createTicketCurrent(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/CreateTicketCurrent';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateCommit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/AddOrUpdateCommit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateApprove(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/AddOrUpdateApprove';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTypicalInvalid(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/DeleteTicketTypicalInvalid';
        configs.url = url;
        configs.params = { ticketTypicalInvalidId: parameters['ticketTypicalInvalidId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketTypicalInvalids(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicketTypicalInvalids';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'], ticketRunStates: parameters['ticketRunStates'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketTypicalInvalid(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicketTypicalInvalid';
        configs.url = url;
        configs.params = { ticketTypicalInvalidId: parameters['ticketTypicalInvalidId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItemTypicalInvalids(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/GetTicketItemTypicalInvalids';
        configs.url = url;
        configs.params = { ticketTypicalInvalidId: parameters['ticketTypicalInvalidId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignTicketItem(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/AssignTicketItem';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static analyseSentence(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/TicketTypical/AnalyseSentence';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class TimingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTimezones(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Timing/GetTimezones';
        configs.url = url;
        configs.params = { defaultTimezoneScope: parameters['defaultTimezoneScope'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTimezoneComboboxItems(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/Timing/GetTimezoneComboboxItems';
        configs.url = url;
        configs.params = { selectedTimezoneId: parameters['selectedTimezoneId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class TokenAuthService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static authenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/Authenticate';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTwoFactorAuthCode(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/SendTwoFactorAuthCode';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static impersonatedAuthenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/ImpersonatedAuthenticate';
        configs.url = url;
        configs.params = { impersonationToken: parameters['impersonationToken'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static linkedAccountAuthenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/LinkedAccountAuthenticate';
        configs.url = url;
        configs.params = { switchAccountToken: parameters['switchAccountToken'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getExternalAuthenticationProviders(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/GetExternalAuthenticationProviders';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static externalAuthenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/ExternalAuthenticate';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static securityAuthenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/SecurityAuthenticate';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserLoginByProviderKey(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/GetUserLoginByProviderKey';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static securityOtpAuthenticate(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/SecurityOTPAuthenticate';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindUserAccount(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/BindUserAccount';
        configs.url = url;
        let data = null;
        data = { ...parameters['model'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static testNotification(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/TokenAuth/TestNotification';
        configs.url = url;
        configs.params = { message: parameters['message'], severity: parameters['severity'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class UiCustomizationSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUiManagementSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUiManagementSettings(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings';
        configs.url = url;
        let data = null;
        data = { ...parameters['settings'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDefaultUiManagementSettings(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings';
        configs.url = url;
        let data = null;
        data = { ...parameters['settings'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static useSystemDefaultSettings(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class UserService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/GetUsers';
        configs.url = url;
        configs.params = {
            filter: parameters['filter'],
            permission: parameters['permission'],
            role: parameters['role'],
            sorting: parameters['sorting'],
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsersToExcel(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/GetUsersToExcel';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/GetUserForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserPermissionsForEdit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/GetUserPermissionsForEdit';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetUserSpecificPermissions(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/ResetUserSpecificPermissions';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUserPermissions(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/UpdateUserPermissions';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/CreateOrUpdateUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/DeleteUser';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlockUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/UnlockUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsersForLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/User/GetUsersForLogin';
        configs.url = url;
        configs.params = { name: parameters['name'], surname: parameters['surname'], userName: parameters['userName'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class UserLinkService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static linkToUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLink/LinkToUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLinkedUsers(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLink/GetLinkedUsers';
        configs.url = url;
        configs.params = {
            maxResultCount: parameters['maxResultCount'],
            skipCount: parameters['skipCount'],
            sorting: parameters['sorting']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentlyUsedLinkedUsers(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlinkUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLink/UnlinkUser';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class UserLoginService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentUserLoginAttempts(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/GetRecentUserLoginAttempts';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNfcCurrentUserLogin(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/GetNfcCurrentUserLogin';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateNfcUserLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindNfcCurrentUserLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/BindNfcCurrentUserLogin';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeNfcUserLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/RemoveNfcUserLogin';
        configs.url = url;
        configs.params = { userId: parameters['userId'], key: parameters['key'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeNfcCurrentUserLogin(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin';
        configs.url = url;
        configs.params = { key: parameters['key'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserLoginByProviderKey(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/GetUserLoginByProviderKey';
        configs.url = url;
        configs.params = { providerKey: parameters['providerKey'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindUser(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/BindUser';
        configs.url = url;
        configs.params = {
            userId: parameters['userId'],
            externalAccountPk: parameters['externalAccountPk'],
            type: parameters['type']
        };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserBind(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/UserLogin/RemoveUserBind';
        configs.url = url;
        configs.params = { provider: parameters['provider'], userId: parameters['userId'], key: parameters['key'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class WebLogService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLatestWebLogs(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WebLog/GetLatestWebLogs';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static downloadWebLogs(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WebLog/DownloadWebLogs';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
}
export class WireCabinetService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetApply(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetApply';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetApprove(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetApprove';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUnlock(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetUnlock';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetHook(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetHook';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetDeviceHook(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetDeviceHook';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUnHook(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetUnHook';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUpdateTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/WireCabinetUpdateTask';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetApplyReasonEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonList(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetApplyReasonList';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getBuckleTypeEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetBuckleTypeEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockModeEnums(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetLockModeEnums';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTask(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetTask';
        configs.url = url;
        configs.params = { id: parameters['id'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplicants(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetApplicants';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApprovers(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetApprovers';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentlyTimeForSelectOperation(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation';
        configs.url = url;
        configs.params = { equipmentId: parameters['equipmentId'], bluetooth: parameters['bluetooth'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateOperateTime(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/UpdateOperateTime';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireDetail(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetWireDetail';
        configs.url = url;
        configs.params = { value: parameters['value'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadFile(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'multipart/form-data';
        let url = '/api/services/app/WireCabinet/UploadFile';
        configs.url = url;
        let data = null;
        data = new FormData();
        if (parameters['file']) {
            data.append('file', parameters['file'], 'file');
        }
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireCabinet(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetWireCabinet';
        configs.url = url;
        configs.params = { equipmentId: parameters['equipmentId'], bluetooth: parameters['bluetooth'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEquipmentPropertyConfig(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWirePile(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetWirePile';
        configs.url = url;
        configs.params = { value: parameters['value'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWiresBeTaken(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetWiresBeTaken';
        configs.url = url;
        configs.params = { stationId: parameters['stationId'] };
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireCabinetBluetooths(options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/GetWireCabinetBluetooths';
        configs.url = url;
        let data = null;
        configs.data = data;
        return axios(configs);
    }
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkWireConfigIsExsit(parameters, options = {}) {
        const configs = { ...options };
        configs.headers['Content-Type'] = 'application/json';
        let url = '/api/services/app/WireCabinet/CheckWireConfigIsExsit';
        configs.url = url;
        let data = null;
        data = { ...parameters['input'] };
        configs.data = data;
        return axios(configs);
    }
}
export class IsTenantAvailableInput {
    constructor(data) {
        if (data) {
            this['tenancyName'] = data['tenancyName'];
        }
    }
}
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
export class PagedResultDtoAuditLogListDto {
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
export class ListResultDtoCacheDto {
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
export class EntityDtoString {
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
export class ListResultDtoChatMessageDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
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
export class ListResultDtoSubscribableEditionComboboxItemDto {
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
export class PagedResultDtoNameValueDto {
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
export class ListResultDtoDeviceTypeComboboxItemDto {
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
export class ListResultDtoComboboxItemDto {
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
export class NameValueString {
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
export class PagedResultDtoDeviceListDto {
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
export class ListResultDtoDeviceStateDto {
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
export class ListResultDtoDeviceAreaListDto {
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
export class PagedResultDtoDeviceBoardDto {
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
export class PagedResultDtoLockCodePropertyListDto {
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
export class ListResultDtoLockCodePropertySelectDto {
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
export class ListResultDtoDeviceOperationListDto {
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
export class PagedResultDtoDeviceTypeListDto {
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
export class ListResultDtoEditionListDto {
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
export class ListResultDtoEquipmentListDto {
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
export class PagedResultDtoEquipmentListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ListResultDtoEquipmentWithPropertyDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
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
export class PagedResultDtoEquipmentInpageDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
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
export class IListResultEquipmentCombineProperties {
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
export class ListResultDtoGraphListDto {
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
export class ListResultDtoIntelligentLockOutput {
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
export class ListResultDtoIntelligentLockDetailOutput {
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
export class ApiResultOutputKeyCabinetUnlockOutput {
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
export class ApiResultOutputKeyCabinetGenerateUnlockCodeOutput {
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
export class ApiResultOutputDictionaryInt32String {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ApiResultOutputListKeyCabinetValueTextDto {
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
export class ApiResultOutputKeyCabinetTaskOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
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
export class ApiResultOutputListResultDtoKeyCabinetOperatorDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDtoKeyCabinetOperatorDto {
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
export class ApiResultOutputBoolean {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ApiResultOutputListResultDtoKeyCarbinetLogListOutput {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDtoKeyCarbinetLogListOutput {
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
export class PagedResultDtoLanguageTextListDto {
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
export class ApiResultOutputPagedResultDtoListLockControlTaskDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class PagedResultDtoListLockControlTaskDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ApiResultOutputLockControlTaskDetailOutput {
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
export class ApiResultOutputLockControlTaskPendingDetailOutput {
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
export class ApiResultOutputLockControlTaskOptOutput {
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
export class GetNotificationsOutput {
    constructor(data) {
        if (data) {
            this['unreadCount'] = data['unreadCount'];
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
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
export class EntityDtoGuid {
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
export class PagedResultDtoOperationRecordListDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
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
export class ListResultDtoOrganizationUnitDto {
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
export class PagedResultDtoOrganizationUnitUserListDto {
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
export class PagedResultDtoSubscriptionPaymentListDto {
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
export class ApiResultOutputListResultDtoPendingDto {
    constructor(data) {
        if (data) {
            this['result'] = data['result'];
            this['code'] = data['code'];
            this['data'] = data['data'];
            this['message'] = data['message'];
        }
    }
}
export class ListResultDtoPendingDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
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
export class ListResultDtoFlatPermissionWithLevelDto {
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
export class ListResultDtoProductListDto {
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
export class ListResultDtoProductPropertyListDto {
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
export class ListResultDtoRiskItemTemplate {
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
            this['dangerSource'] = data['dangerSource'];
            this['workStandard'] = data['workStandard'];
            this['firstKey'] = data['firstKey'];
            this['secondKey'] = data['secondKey'];
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
export class ListResultDtoRiskItemTermMap {
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
export class ListResultDtoRiskItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDtoRoleListDto {
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
export class ListResultDtoSafetyWearMonitoringOutput {
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
export class ListResultDtoEquipmentInfoOutput {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDtoSafetyWearUserOutput {
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
export class ListResultDtoStationListDto {
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
export class PagedResultDtoStationListDto {
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
export class ListResultDtoStationAreaDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class ListResultDtoStationAreaWithEquipment {
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
export class PagedResultDtoUserListByStationIdDto {
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
export class ListResultDtoStationOrganizationUserDto {
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
export class ListResultDtoStationDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class PagedResultDtoTenantListDto {
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
export class ListResultDtoTerminalPortConfigListDto {
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
export class ListResultDtoTerminalListDto {
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
export class ListResultDtoIdNameTree {
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
export class ListResultDtoGetStationTicketFolderChildrenWithTicketOutput {
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
            this['canCancel'] = data['canCancel'];
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
        }
    }
}
export class ListResultDtoIdName {
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
export class ListResultDtoTicketListItemDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
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
export class TicketTaskDto {
    constructor(data) {
        if (data) {
            this['ticketItemTasks'] = data['ticketItemTasks'];
            this['ticketTaskPersonas'] = data['ticketTaskPersonas'];
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
            this['ticketId'] = data['ticketId'];
            this['roleType'] = data['roleType'];
            this['userId'] = data['userId'];
            this['isConfirm'] = data['isConfirm'];
            this['isPass'] = data['isPass'];
            this['note'] = data['note'];
            this['id'] = data['id'];
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
export class ApproveTicketInput {
    constructor(data) {
        if (data) {
            this['ticketTaskId'] = data['ticketTaskId'];
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
            this['ticketTaskId'] = data['ticketTaskId'];
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
export class UpdateStatusTicketItemDto {
    constructor(data) {
        if (data) {
            this['ticketItemId'] = data['ticketItemId'];
            this['operateTime'] = data['operateTime'];
            this['operateResult'] = data['operateResult'];
            this['operateMode'] = data['operateMode'];
            this['statusUpdateTime'] = data['statusUpdateTime'];
            this['finished'] = data['finished'];
            this['note'] = data['note'];
            this['deviceStateInfo'] = data['deviceStateInfo'];
        }
    }
}
export class TicketItemDeviceStateDto {
    constructor(data) {
        if (data) {
            this['deviceId'] = data['deviceId'];
            this['deviceState'] = data['deviceState'];
        }
    }
}
export class ApiResultOutputUpdateTicketItemsStatusOutput {
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
            this['successTicketItems'] = data['successTicketItems'];
            this['failTicketItems'] = data['failTicketItems'];
        }
    }
}
export class TicketItemUpdateResultOutput {
    constructor(data) {
        if (data) {
            this['ticketItemId'] = data['ticketItemId'];
            this['isSuccess'] = data['isSuccess'];
            this['message'] = data['message'];
        }
    }
}
export class PagedResultDtoTicketListItemDto {
    constructor(data) {
        if (data) {
            this['totalCount'] = data['totalCount'];
            this['items'] = data['items'];
        }
    }
}
export class ListResultDtoTicketItemTaskDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
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
export class ListResultDtoTicketItemTypicalDto {
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
export class ListResultDtoGetTicketTypicalInvalidsOutput {
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
export class AnalyseSentenceInput {
    constructor(data) {
        if (data) {
            this['stationId'] = data['stationId'];
            this['sentences'] = data['sentences'];
        }
    }
}
export class ListResultDtoAnalyseSentenceDto {
    constructor(data) {
        if (data) {
            this['items'] = data['items'];
        }
    }
}
export class AnalyseSentenceDto {
    constructor(data) {
        if (data) {
            this['sentence'] = data['sentence'];
            this['deviceId'] = data['deviceId'];
            this['deviceName'] = data['deviceName'];
            this['operateMode'] = data['operateMode'];
            this['termId'] = data['termId'];
            this['termType'] = data['termType'];
            this['deviceBoardId'] = data['deviceBoardId'];
            this['fromDeviceStateId'] = data['fromDeviceStateId'];
            this['fromDeviceStateName'] = data['fromDeviceStateName'];
            this['fromDeviceState'] = data['fromDeviceState'];
            this['toDeviceStateId'] = data['toDeviceStateId'];
            this['toDeviceStateName'] = data['toDeviceStateName'];
            this['toDeviceState'] = data['toDeviceState'];
        }
    }
}
export class ListResultDtoNameValueDto {
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
            this['otp'] = data['otp'];
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
export class PagedResultDtoUserListDto {
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
export class EntityDtoInt64 {
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
export class PagedResultDtoLinkedUserDto {
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
export class ListResultDtoLinkedUserDto {
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
export class ListResultDtoUserLoginAttemptDto {
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
export class ListResultDtoWireCabinetOperatorDto {
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
export class ListResultDtoUploadFileOutput {
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
export class ListResultDtoWireBeTakenDto {
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
export class ListResultDtoWireCabinetBluetoothDto {
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