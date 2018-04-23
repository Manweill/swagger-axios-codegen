import { AxiosPromise } from 'axios';
export interface IRequestOptions {
    headers?: any;
}
export declare class AccountService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static isTenantAvailable(parameters: {
        input?: IsTenantAvailableInput;
    }, options?: IRequestOptions): AxiosPromise<IsTenantAvailableOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static register(parameters: {
        input?: RegisterInput;
    }, options?: IRequestOptions): AxiosPromise<RegisterOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendPasswordResetCode(parameters: {
        input?: SendPasswordResetCodeInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetPassword(parameters: {
        input?: ResetPasswordInput;
    }, options?: IRequestOptions): AxiosPromise<ResetPasswordOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendEmailActivationLink(parameters: {
        input?: SendEmailActivationLinkInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static activateEmail(parameters: {
        input?: ActivateEmailInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static impersonate(parameters: {
        input?: ImpersonateInput;
    }, options?: IRequestOptions): AxiosPromise<ImpersonateOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static backToImpersonator(options?: IRequestOptions): AxiosPromise<ImpersonateOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static switchToLinkedAccount(parameters: {
        input?: SwitchToLinkedAccountInput;
    }, options?: IRequestOptions): AxiosPromise<SwitchToLinkedAccountOutput>;
}
export declare class AuditLogService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAuditLogs(parameters: {
        startDate: string;
        endDate: string;
        userName?: string;
        serviceName?: string;
        methodName?: string;
        browserInfo?: string;
        hasException?: boolean;
        minExecutionDuration?: number;
        maxExecutionDuration?: number;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoAuditLogListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAuditLogsToExcel(parameters: {
        startDate: string;
        endDate: string;
        userName?: string;
        serviceName?: string;
        methodName?: string;
        browserInfo?: string;
        hasException?: boolean;
        minExecutionDuration?: number;
        maxExecutionDuration?: number;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<FileDto>;
}
export declare class CachingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllCaches(options?: IRequestOptions): AxiosPromise<ListResultDtoCacheDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearCache(parameters: {
        input?: EntityDtoString;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearAllCaches(options?: IRequestOptions): AxiosPromise<any>;
}
export declare class ChatService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserChatFriendsWithSettings(options?: IRequestOptions): AxiosPromise<GetUserChatFriendsWithSettingsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserChatMessages(parameters: {
        tenantId?: number;
        userId: number;
        minMessageId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoChatMessageDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static markAllUnreadMessagesOfUserAsRead(parameters: {
        input?: MarkAllUnreadMessagesOfUserAsReadInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class CommonLookupService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionsForCombobox(parameters: {
        onlyFreeItems: boolean;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoSubscribableEditionComboboxItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static findUsers(parameters: {
        input?: FindUsersInput;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoNameValueDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDefaultEditionName(options?: IRequestOptions): AxiosPromise<GetDefaultEditionNameOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypesForCombobox(options?: IRequestOptions): AxiosPromise<ListResultDtoDeviceTypeComboboxItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationsForCombobox(options?: IRequestOptions): AxiosPromise<ListResultDtoComboboxItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getVoltageLevelsForCombobox(options?: IRequestOptions): AxiosPromise<ListResultDtoComboboxItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceStateForCombox(parameters: {
        deviceTypeId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoComboboxItemDto>;
}
export declare class DemoUiComponentsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDate(parameters: {
        date?: string;
    }, options?: IRequestOptions): AxiosPromise<DateToStringOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDateTime(parameters: {
        date?: string;
    }, options?: IRequestOptions): AxiosPromise<DateToStringOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetDateRange(parameters: {
        startDate?: string;
        endDate?: string;
    }, options?: IRequestOptions): AxiosPromise<DateToStringOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCountries(parameters: {
        searchTerm?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetSelectedCountries(parameters: {
        selectedCountries?: NameValueString;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendAndGetValue(parameters: {
        input?: string;
    }, options?: IRequestOptions): AxiosPromise<StringOutput>;
}
export declare class DeviceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDevices(parameters: {
        name?: string;
        deviceAreaId?: number;
        stationId?: number;
        skipCount: number;
        maxResultCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoDeviceListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlDevices(parameters: {
        stationId: number;
        deviceAreaId?: number;
        deviceName?: string;
        isEst: boolean;
        isPprimary: boolean;
        isSecondary: boolean;
        unPage: boolean;
        skipCount: number;
        maxResultCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoDeviceListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetDeviceEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDevice(parameters: {
        input?: CreateOrUpdateDeviceInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDevice(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static queryDeviceStates(parameters: {
        input?: QueryDevicesStateInput;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoDeviceStateDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDeviceState(parameters: {
        input?: UpdateDeviceStateInput;
    }, options?: IRequestOptions): AxiosPromise<UpdateDeviceStateOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkDeviceNameIsExist(parameters: {
        input?: CheckDeviceNameIsExistInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class DeviceAreaService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceAreas(parameters: {
        stationId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoDeviceAreaListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceAreaForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetDeviceAreaEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceArea(parameters: {
        input?: CreateOrUpdateDeviceAreaInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceArea(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class DeviceBoardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceBoards(parameters: {
        name?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoDeviceBoardDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceBoardForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetDeviceBoardEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceBoard(parameters: {
        input?: CreateOrUpdateDeviceBoardInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceBoard(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadDeviceBoard(parameters: {
        file?: any;
    }, options?: IRequestOptions): AxiosPromise<UploadFileOutput>;
}
export declare class DeviceLockCodeService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodeProperties(parameters: {
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoLockCodePropertyListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodePropertySelected(options?: IRequestOptions): AxiosPromise<ListResultDtoLockCodePropertySelectDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockCodePropertyForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<LockCodePropertyEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateLockCodeProperty(parameters: {
        input?: CreateOrUpdateLockCodePropertyInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLockCodeProperty(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class DeviceTermService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTerms(parameters: {
        stationName: string;
        pointName: string;
        state: number;
    }, options?: IRequestOptions): AxiosPromise<GetDeviceTermsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerms(parameters: {
        deviceType: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoDeviceOperationListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceOperation(parameters: {
        input?: CreateOrUpdateDeviceOperationInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceOperation(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class DeviceTypeService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypes(parameters: {
        name?: string;
        isEst?: boolean;
        unPaged?: boolean;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoDeviceTypeListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDeviceTypeForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetDeviceTypeEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateDeviceType(parameters: {
        input?: CreateOrUpdateDeviceTypeInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteDeviceType(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class EditionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditions(options?: IRequestOptions): AxiosPromise<ListResultDtoEditionListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetEditionEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEdition(parameters: {
        input?: CreateOrUpdateEditionDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteEdition(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionComboboxItems(parameters: {
        selectedEditionId?: number;
        addAllItem: boolean;
        onlyFreeItems: boolean;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class EquipmentService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipments(parameters: {
        productId?: number;
        name?: string;
        terminalId?: number;
        stationId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoEquipmentListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentForEdit(parameters: {
        productId: number;
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetEquipmentEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEquipment(parameters: {
        input?: CreateOrUpdateEquipmentInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteEquipment(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentNotBinded(parameters: {
        stationId?: number;
        name?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoEquipmentListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllStationBindEquipments(parameters: {
        stationId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoEquipmentWithPropertyDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationBindEquipments(parameters: {
        stationId?: number;
        name?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoEquipmentInpageDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentWithProperty(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<EquipmentWithPropertyOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static controlEquipment(parameters: {
        input?: ControlEquipmentInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEquipmentsCombineProperties(parameters: {
        type: string;
    }, options?: IRequestOptions): AxiosPromise<IListResultEquipmentCombineProperties>;
}
export declare class FileService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static download(parameters: {
        id: string;
        name: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static file(parameters: {
        id: string;
        name: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class FriendshipService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createFriendshipRequest(parameters: {
        input?: CreateFriendshipRequestInput;
    }, options?: IRequestOptions): AxiosPromise<FriendDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createFriendshipRequestByUserName(parameters: {
        input?: CreateFriendshipRequestByUserNameInput;
    }, options?: IRequestOptions): AxiosPromise<FriendDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static blockUser(parameters: {
        input?: BlockUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unblockUser(parameters: {
        input?: UnblockUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static acceptFriendshipRequest(parameters: {
        input?: AcceptFriendshipRequestInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class GraphService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGraphs(parameters: {
        name?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoGraphListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGraphForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GraphEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateGraph(parameters: {
        input?: CreateOrUpdateGraphInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteGraph(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadGraph(parameters: {
        file?: any;
    }, options?: IRequestOptions): AxiosPromise<UploadFileOutput>;
}
export declare class HostDashboardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDashboardStatisticsData(parameters: {
        incomeStatisticsDateInterval: string;
        startDate: string;
        endDate: string;
    }, options?: IRequestOptions): AxiosPromise<HostDashboardData>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIncomeStatistics(parameters: {
        incomeStatisticsDateInterval: string;
        startDate: string;
        endDate: string;
    }, options?: IRequestOptions): AxiosPromise<GetIncomeStatisticsDataOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionTenantStatistics(parameters: {
        startDate: string;
        endDate: string;
    }, options?: IRequestOptions): AxiosPromise<GetEditionTenantStatisticsOutput>;
}
export declare class HostSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllSettings(options?: IRequestOptions): AxiosPromise<HostSettingsEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateAllSettings(parameters: {
        input?: HostSettingsEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTestEmail(parameters: {
        input?: SendTestEmailInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class InfluxDBService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createDbBase(parameters: {
        input?: CreateDbBaseInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static writeDataToDb(parameters: {
        input?: WriteDataToDbInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static readDataFromDb(parameters: {
        input?: ReadDataFromDbInput;
    }, options?: IRequestOptions): AxiosPromise<ReadDataFromDbOutput>;
}
export declare class InstallService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setup(parameters: {
        input?: InstallDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAppSettingsJson(options?: IRequestOptions): AxiosPromise<AppSettingsJsonDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkDatabase(options?: IRequestOptions): AxiosPromise<CheckDatabaseOutput>;
}
export declare class IntelligentLockServiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addIntelligentLocks(parameters: {
        input?: AddIntelligentLocksInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeIntelligentLocks(parameters: {
        roleId: number;
        intelligentLockIds?: number[];
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateIntelligentLocks(parameters: {
        input?: UpdateIntelligentLocksInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIntelligentLockList(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoIntelligentLockOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIntelligentLocksInDeviceAreaTree(options?: IRequestOptions): AxiosPromise<ListResultDtoIntelligentLockDetailOutput>;
}
export declare class InvoiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getInvoiceInfo(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<InvoiceDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createInvoice(parameters: {
        input?: CreateInvoiceDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class KeyCabinetService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetApply(parameters: {
        input?: KeyCabinetApplyInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetApprove(parameters: {
        input?: KeyCabinetApproveInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetUnlock(parameters: {
        input?: KeyCabinetUnlockInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputKeyCabinetUnlockOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetUpdateUnlockCode(parameters: {
        input?: KeyCabinetGenerateUnlockCodeInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputKeyCabinetGenerateUnlockCodeOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetOpenDoor(parameters: {
        input?: KeyCabinetOpenDoorInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static keyCabinetReturn(parameters: {
        input?: KeyCabinetReturnInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonEnums(parameters: {
        approverType?: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputDictionaryInt32String>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonList(parameters: {
        approverType?: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputListKeyCabinetValueTextDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getBuckleTypeEnums(options?: IRequestOptions): AxiosPromise<ApiResultOutputDictionaryInt32String>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockModeEnums(options?: IRequestOptions): AxiosPromise<ApiResultOutputDictionaryInt32String>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApproverTypeEnums(options?: IRequestOptions): AxiosPromise<ApiResultOutputDictionaryInt32String>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTask(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputKeyCabinetTaskOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static endTask(parameters: {
        input?: KeyCabinetEndTaskInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplicants(options?: IRequestOptions): AxiosPromise<ApiResultOutputListResultDtoKeyCabinetOperatorDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApprovers(parameters: {
        roles?: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputListResultDtoKeyCabinetOperatorDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIsTaskExpired(parameters: {
        equipmentPropertyId: number;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getIsApplicant(parameters: {
        operatorId: number;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getKeyCarbinetLogs(parameters: {
        stationId: number;
        startDate: string;
        endDate: string;
        applicantId?: number;
        approverId?: number;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputListResultDtoKeyCarbinetLogListOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateKeyCarbinetLog(parameters: {
        input?: KeyCarbinetLogInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
}
export declare class LanguageService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguages(options?: IRequestOptions): AxiosPromise<GetLanguagesOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguageForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetLanguageForEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateLanguage(parameters: {
        input?: CreateOrUpdateLanguageInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLanguage(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setDefaultLanguage(parameters: {
        input?: SetDefaultLanguageInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLanguageTexts(parameters: {
        maxResultCount: number;
        skipCount: number;
        sorting?: string;
        sourceName: string;
        baseLanguageName?: string;
        targetLanguageName: string;
        targetValueFilter?: string;
        filterText?: string;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoLanguageTextListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateLanguageText(parameters: {
        input?: UpdateLanguageTextInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class LockControlTaskServiceService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateLockControlTask(parameters: {
        input?: AddOrUpdateLockControlTaskInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskList(parameters: {
        taskName?: string;
        state: string;
        skipCount: number;
        maxResultCount: number;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputPagedResultDtoListLockControlTaskDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskItems(parameters: {
        taskId: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputLockControlTaskDetailOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static commitLockControlTask(parameters: {
        input?: LockControlTaskInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteLockControlTask(parameters: {
        taskId: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskPendingDetail(parameters: {
        taskId: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputLockControlTaskPendingDetailOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static approvalLockControlTask(parameters: {
        input?: AprroveLockControlPendingInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockControlTaskCodeInfos(parameters: {
        taskId: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputLockControlTaskOptOutput>;
}
export declare class NotificationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserNotifications(parameters: {
        state?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<GetNotificationsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setAllNotificationsAsRead(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static setNotificationAsRead(parameters: {
        input?: EntityDtoGuid;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNotificationSettings(options?: IRequestOptions): AxiosPromise<GetNotificationSettingsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateNotificationSettings(parameters: {
        input?: UpdateNotificationSettingsInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class OperationRecordService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecord(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<GetOperationRecordOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecords(parameters: {
        applicantId?: number;
        approverId?: number;
        startTime?: string;
        endTime?: string;
        stationId?: number;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoOperationRecordListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecordsByEquipmentPropertyId(parameters: {
        equipmentPropertyId: number;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoOperationRecordListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOperationRecordsByEquipmentId(parameters: {
        equipmentId: number;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoOperationRecordListDto>;
}
export declare class OrganizationUnitService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOrganizationUnits(options?: IRequestOptions): AxiosPromise<ListResultDtoOrganizationUnitDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOrganizationUnitUsers(parameters: {
        id: number;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoOrganizationUnitUserListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrganizationUnit(parameters: {
        input?: CreateOrganizationUnitInput;
    }, options?: IRequestOptions): AxiosPromise<OrganizationUnitDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateOrganizationUnit(parameters: {
        input?: UpdateOrganizationUnitInput;
    }, options?: IRequestOptions): AxiosPromise<OrganizationUnitDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static moveOrganizationUnit(parameters: {
        input?: MoveOrganizationUnitInput;
    }, options?: IRequestOptions): AxiosPromise<OrganizationUnitDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteOrganizationUnit(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserFromOrganizationUnit(parameters: {
        userId: number;
        organizationUnitId: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addUsersToOrganizationUnit(parameters: {
        input?: UsersToOrganizationUnitInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static findUsers(parameters: {
        input?: FindOrganizationUnitUsersInput;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoNameValueDto>;
}
export declare class PaymentService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPaymentInfo(parameters: {
        upgradeEditionId?: number;
    }, options?: IRequestOptions): AxiosPromise<PaymentInfoDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createPayment(parameters: {
        input?: CreatePaymentDto;
    }, options?: IRequestOptions): AxiosPromise<CreatePaymentResponse>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static executePayment(parameters: {
        input?: ExecutePaymentDto;
    }, options?: IRequestOptions): AxiosPromise<ExecutePaymentResponse>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPaymentHistory(parameters: {
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoSubscriptionPaymentListDto>;
}
export declare class PendingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPendingList(options?: IRequestOptions): AxiosPromise<ApiResultOutputListResultDtoPendingDto>;
}
export declare class PermissionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllPermissions(options?: IRequestOptions): AxiosPromise<ListResultDtoFlatPermissionWithLevelDto>;
}
export declare class ProductService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProducts(options?: IRequestOptions): AxiosPromise<ListResultDtoProductListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetProductEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateProduct(parameters: {
        input?: CreateOrUpdateProductInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteProduct(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class ProductPropertyService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductProperties(options?: IRequestOptions): AxiosPromise<ListResultDtoProductPropertyListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProductPropertyForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetProductPropertyEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateProductProperty(parameters: {
        input?: CreateOrUpdateProductPropertyInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteProductProperty(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class ProfileService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentUserProfileForEdit(options?: IRequestOptions): AxiosPromise<CurrentUserProfileEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateGoogleAuthenticatorKey(options?: IRequestOptions): AxiosPromise<UpdateGoogleAuthenticatorKeyOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendVerificationSms(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static verifySmsCode(parameters: {
        input?: VerifySmsCodeInputDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateCurrentUserProfile(parameters: {
        input?: CurrentUserProfileEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static changePassword(parameters: {
        input?: ChangePasswordInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateProfilePicture(parameters: {
        input?: UpdateProfilePictureInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getPasswordComplexitySetting(options?: IRequestOptions): AxiosPromise<GetPasswordComplexitySettingOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProfilePicture(options?: IRequestOptions): AxiosPromise<GetProfilePictureOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getFriendProfilePictureById(parameters: {
        profilePictureId?: string;
        userId: number;
        tenantId?: number;
    }, options?: IRequestOptions): AxiosPromise<GetProfilePictureOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getProfilePictureById(parameters: {
        profilePictureId: string;
    }, options?: IRequestOptions): AxiosPromise<GetProfilePictureOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static changeLanguage(parameters: {
        input?: ChangeUserLanguageDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class RiskTicketItemService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskTicket(parameters: {
        input?: AddOrUpdateRiskTicketInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicket(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskTicketItems(parameters: {
        input?: AddOrUpdateRiskTicketItemsInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskTicketItems(parameters: {
        riskTicketId: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskItemTemplate(parameters: {
        input?: AddOrUpdateRiskItemTemplateInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskItemTemplate(parameters: {
        riskPublicItemId: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllRiskItemTemplate(options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemTemplate>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateRiskItemTermMap(parameters: {
        input?: AddOrUpdateRiskItemTermMapInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRiskItemTermMap(parameters: {
        riskItemTermMapId: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static mappingRiskItemByTerm(parameters: {
        input?: MappingRiskItemByTermInput;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemTermMap>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemSingle(parameters: {
        riskItemId: string;
    }, options?: IRequestOptions): AxiosPromise<RiskItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByTicketId(parameters: {
        ticketId: string;
        ticketType: string;
        isContainsTicketItemRisk: boolean;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByRiskTicketId(parameters: {
        riskTicketId: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayFromTemplate(options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRiskItemArrayByTicketFolderId(parameters: {
        ticketFolderId: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoRiskItemDto>;
}
export declare class RoleService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRoles(parameters: {
        permission?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoRoleListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRoleForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetRoleForEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateRole(parameters: {
        input?: CreateOrUpdateRoleInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteRole(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class SafetyWearService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateSafetyWearMonitoring(parameters: {
        input?: SafetyWearMonitoringInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getOne(parameters: {
        userId: number;
        equipmentNo: number;
    }, options?: IRequestOptions): AxiosPromise<SafetyWearMonitoringOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getList(parameters: {
        stationId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoSafetyWearMonitoringOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSafetyWearEquipmentByMacAddress(parameters: {
        macAddress?: string;
    }, options?: IRequestOptions): AxiosPromise<EquipmentInfoOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSafetyWearEquipments(parameters: {
        stationId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoEquipmentInfoOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserListForSafetyWearLogin(parameters: {
        userName?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoSafetyWearUserOutput>;
}
export declare class SessionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentLoginInformations(options?: IRequestOptions): AxiosPromise<GetCurrentLoginInformationsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUserSignInToken(options?: IRequestOptions): AxiosPromise<UpdateUserSignInTokenOutput>;
}
export declare class StationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStations(parameters: {
        name?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoStationListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetStationEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateStation(parameters: {
        input?: CreateOrUpdateStationInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStation(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationNotBind(parameters: {
        name?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoStationListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindEquipmentStation(parameters: {
        input?: BindEquipmentStationInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeEquipmentStation(parameters: {
        equipmentId: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createStationUsers(parameters: {
        input?: CreateStationUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserFromStation(parameters: {
        stationUserDtoStationId: number;
        stationUserDtoUserId: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDefaultUserStation(parameters: {
        input?: UpdateDefaultUserStationInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class StationAreaService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createStationArea(parameters: {
        input?: CreateStationAreaInput;
    }, options?: IRequestOptions): AxiosPromise<StationAreaDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateStationArea(parameters: {
        input?: UpdateStationAreaInput;
    }, options?: IRequestOptions): AxiosPromise<StationAreaDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static moveStationArea(parameters: {
        input?: MoveStationAreaInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStationArea(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationArea(options?: IRequestOptions): AxiosPromise<ListResultDtoStationAreaDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getCurrentUserStationArea(options?: IRequestOptions): AxiosPromise<ListResultDtoStationAreaDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserStationArea(parameters: {
        userId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoStationAreaDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationAreaWithEquipments(options?: IRequestOptions): AxiosPromise<ListResultDtoStationAreaWithEquipment>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static stationAreaBindStation(parameters: {
        input?: StationAreaBindStationInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeStationAreaStation(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class StationUserService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRelatedUserListByStationId(parameters: {
        id: number;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoUserListByStationIdDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNotRelatedUserListByStationId(parameters: {
        stationId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoStationOrganizationUserDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDefaultStation(parameters: {
        userId: number;
    }, options?: IRequestOptions): AxiosPromise<StationDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserStations(parameters: {
        userId: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoStationDto>;
}
export declare class SubscriptionService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static upgradeTenantToEquivalentEdition(parameters: {
        upgradeEditionId: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TenantService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenants(parameters: {
        filter?: string;
        subscriptionEndDateStart?: string;
        subscriptionEndDateEnd?: string;
        creationDateStart?: string;
        creationDateEnd?: string;
        editionId?: number;
        editionIdSpecified: boolean;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoTenantListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createTenant(parameters: {
        input?: CreateTenantInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenantForEdit(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<TenantEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTenant(parameters: {
        input?: TenantEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTenant(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTenantFeaturesForEdit(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<GetTenantFeaturesEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTenantFeatures(parameters: {
        input?: UpdateTenantFeaturesInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetTenantSpecificFeatures(parameters: {
        input?: EntityDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlockTenantAdmin(parameters: {
        input?: EntityDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TenantDashboardService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getMemberActivity(options?: IRequestOptions): AxiosPromise<GetMemberActivityOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getDashboardData(parameters: {
        salesSummaryDatePeriod: string;
    }, options?: IRequestOptions): AxiosPromise<GetDashboardDataOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getSalesSummary(parameters: {
        salesSummaryDatePeriod: string;
    }, options?: IRequestOptions): AxiosPromise<GetSalesSummaryOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRegionalStats(parameters: {
        input?: any | null;
    }, options?: IRequestOptions): AxiosPromise<GetRegionalStatsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getGeneralStats(parameters: {
        input?: any | null;
    }, options?: IRequestOptions): AxiosPromise<GetGeneralStatsOutput>;
}
export declare class TenantRegistrationService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static registerTenant(parameters: {
        input?: RegisterTenantInput;
    }, options?: IRequestOptions): AxiosPromise<RegisterTenantOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEditionsForSelect(options?: IRequestOptions): AxiosPromise<EditionsSelectOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getEdition(parameters: {
        editionId: number;
    }, options?: IRequestOptions): AxiosPromise<EditionSelectDto>;
}
export declare class TenantSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getAllSettings(options?: IRequestOptions): AxiosPromise<TenantSettingsEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateAllSettings(parameters: {
        input?: TenantSettingsEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearLogo(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static clearCustomCss(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTestEmail(parameters: {
        input?: SendTestEmailInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TerimalPortConfigService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalPortConfigs(parameters: {
        terminalId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoTerminalPortConfigListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalPortConfigForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetTerminalPortConfigOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateTerminalPortConfig(parameters: {
        input?: CreateOrUpdateTerminalPortConfigInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTerminalPortConfig(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TerminalService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminals(options?: IRequestOptions): AxiosPromise<ListResultDtoTerminalListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTerminalForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetTerminalEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateTerminal(parameters: {
        input?: CreateOrUpdateTerminalInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTerminal(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetTerminal(parameters: {
        input?: ResetTerminalInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TermperatureControlService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendControlOperating(parameters: {
        input?: SendControlOperatingInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTermperaturePoints(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TicketFolderService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketFolder(parameters: {
        input?: AddOrUpdateTicketFolderInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteStationTicketFolder(parameters: {
        stationId?: number;
        isForce: boolean;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketFolder(parameters: {
        ticketFolderId: string;
        isForce: boolean;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketFolderRiskInfo(parameters: {
        input?: AddOrUpdateTicketFolderRiskInfoInput;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFolderChildrens(parameters: {
        stationId?: number;
        depth: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoIdNameTree>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFolderChildrens(parameters: {
        ticketFolderId?: string;
        depth: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoIdNameTree>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFolderChildrenWithTicket(parameters: {
        stationId?: number;
        depth: number;
        ticketFolderId?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFoldersByName(parameters: {
        partName?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoIdName>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFolderById(parameters: {
        ticketFolderId: string;
    }, options?: IRequestOptions): AxiosPromise<GetTicketFolderOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignFolderTickets(parameters: {
        input?: AssignFolderTicketsInput;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getFolderTicketsById(parameters: {
        ticketFolderId: string;
        isRecursive: boolean;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoTicketListItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketFoldersWithTicketsByParentId(parameters: {
        ticktFolderId?: string;
        depth: number;
        isNeedSearchByUserProfessional: boolean;
        stationId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getStationTicketFoldersWithTickets(parameters: {
        stationId?: number;
        depth: number;
        ticketFolderId?: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoGetStationTicketFolderChildrenWithTicketOutput>;
}
export declare class TicketTaskService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketTask(parameters: {
        input?: AddOrUpdateTicketTaskInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTask(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignTicketPersonaes(parameters: {
        input?: AssignTicketPersonaesInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static commitTicket(parameters: {
        input?: CommitTicketInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static approveTicket(parameters: {
        input?: ApproveTicketInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static executeTicket(parameters: {
        input?: ExecuteTicketInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static finishTicket(parameters: {
        input?: FinishTicketInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateTicketItemsStatus(parameters: {
        input?: UpdateTicketItemsStatusInput;
    }, options?: IRequestOptions): AxiosPromise<ApiResultOutputUpdateTicketItemsStatusOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicket(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<TicketTaskDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTickets(parameters: {
        stationId?: number;
        unPage: boolean;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoTicketListItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItems(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoTicketItemTaskDto>;
}
export declare class TicketTypicalService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateTicketTypical(parameters: {
        input?: AddOrUpdateTicketTypicalInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTypical(parameters: {
        ticketTypicalId: string;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketsByTaskName(parameters: {
        partTitle?: string;
        stationId?: number;
        ticketFolderId?: string;
        isRecursive: boolean;
        skipCount: number;
        maxResultCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoTicketListItemDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItems(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoTicketItemTypicalDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicket(parameters: {
        ticketId: string;
    }, options?: IRequestOptions): AxiosPromise<TicketTypicalDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createTicketCurrent(parameters: {
        input?: CreateTicketCurrentInput;
    }, options?: IRequestOptions): AxiosPromise<IdGuid>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateCommit(parameters: {
        input?: AddOrUpdateCommitInput;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static addOrUpdateApprove(parameters: {
        input?: AddOrUpdateApproveInput;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteTicketTypicalInvalid(parameters: {
        ticketTypicalInvalidId: string;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketTypicalInvalids(parameters: {
        stationId: number;
        ticketRunStates?: string[];
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoGetTicketTypicalInvalidsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketTypicalInvalid(parameters: {
        ticketTypicalInvalidId: string;
    }, options?: IRequestOptions): AxiosPromise<TicketTypicalDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTicketItemTypicalInvalids(parameters: {
        ticketTypicalInvalidId: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoTicketItemTypicalDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static assignTicketItem(parameters: {
        input?: AssignTicketItemInput;
    }, options?: IRequestOptions): AxiosPromise<ResultBoolean>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static analyseSentence(parameters: {
        input?: AnalyseSentenceInput;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoAnalyseSentenceDto>;
}
export declare class TimingService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTimezones(parameters: {
        defaultTimezoneScope: string;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoNameValueDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTimezoneComboboxItems(parameters: {
        selectedTimezoneId?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class TokenAuthService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static authenticate(parameters: {
        model?: AuthenticateModel;
    }, options?: IRequestOptions): AxiosPromise<AuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static sendTwoFactorAuthCode(parameters: {
        model?: SendTwoFactorAuthCodeModel;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static impersonatedAuthenticate(parameters: {
        impersonationToken?: string;
    }, options?: IRequestOptions): AxiosPromise<ImpersonatedAuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static linkedAccountAuthenticate(parameters: {
        switchAccountToken?: string;
    }, options?: IRequestOptions): AxiosPromise<SwitchedAccountAuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getExternalAuthenticationProviders(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static externalAuthenticate(parameters: {
        model?: ExternalAuthenticateModel;
    }, options?: IRequestOptions): AxiosPromise<ExternalAuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static securityAuthenticate(parameters: {
        model?: SecurityAuthenticateModel;
    }, options?: IRequestOptions): AxiosPromise<SecurityAuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserLoginByProviderKey(parameters: {
        model?: SecurityAuthenticateOTPModel;
    }, options?: IRequestOptions): AxiosPromise<UserLogin>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static securityOtpAuthenticate(parameters: {
        model?: SecurityAuthenticateOTPModel;
    }, options?: IRequestOptions): AxiosPromise<SecurityAuthenticateResultModel>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindUserAccount(parameters: {
        model?: AccountBindingModel;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static testNotification(parameters: {
        message?: string;
        severity?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class UiCustomizationSettingsService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUiManagementSettings(options?: IRequestOptions): AxiosPromise<UiCustomizationSettingsEditDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUiManagementSettings(parameters: {
        settings?: UiCustomizationSettingsEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateDefaultUiManagementSettings(parameters: {
        settings?: UiCustomizationSettingsEditDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static useSystemDefaultSettings(options?: IRequestOptions): AxiosPromise<any>;
}
export declare class UserService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsers(parameters: {
        filter?: string;
        permission?: string;
        role?: number;
        sorting?: string;
        maxResultCount: number;
        skipCount: number;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoUserListDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsersToExcel(options?: IRequestOptions): AxiosPromise<FileDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserForEdit(parameters: {
        id?: number;
    }, options?: IRequestOptions): AxiosPromise<GetUserForEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserPermissionsForEdit(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<GetUserPermissionsForEditOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static resetUserSpecificPermissions(parameters: {
        input?: EntityDtoInt64;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateUserPermissions(parameters: {
        input?: UpdateUserPermissionsInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateUser(parameters: {
        input?: CreateOrUpdateUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static deleteUser(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlockUser(parameters: {
        input?: EntityDtoInt64;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUsersForLogin(parameters: {
        name?: string;
        surname?: string;
        userName?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class UserLinkService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static linkToUser(parameters: {
        input?: LinkToUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLinkedUsers(parameters: {
        maxResultCount: number;
        skipCount: number;
        sorting?: string;
    }, options?: IRequestOptions): AxiosPromise<PagedResultDtoLinkedUserDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentlyUsedLinkedUsers(options?: IRequestOptions): AxiosPromise<ListResultDtoLinkedUserDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static unlinkUser(parameters: {
        input?: UnlinkUserInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class UserLoginService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentUserLoginAttempts(options?: IRequestOptions): AxiosPromise<ListResultDtoUserLoginAttemptDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getNfcCurrentUserLogin(options?: IRequestOptions): AxiosPromise<GetNfcCurrentUserLoginOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateNfcUserLogin(parameters: {
        input?: CreateOrUpdateNfcUserLoginInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindNfcCurrentUserLogin(parameters: {
        input?: UserLoginDto;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeNfcUserLogin(parameters: {
        userId: number;
        key: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeNfcCurrentUserLogin(parameters: {
        key: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getUserLoginByProviderKey(parameters: {
        providerKey?: string;
    }, options?: IRequestOptions): AxiosPromise<UserLogin>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static bindUser(parameters: {
        userId: number;
        externalAccountPk?: string;
        type?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static removeUserBind(parameters: {
        provider: string;
        userId: number;
        key: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class WebLogService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLatestWebLogs(options?: IRequestOptions): AxiosPromise<GetLatestWebLogsOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static downloadWebLogs(options?: IRequestOptions): AxiosPromise<FileDto>;
}
export declare class WireCabinetService {
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetApply(parameters: {
        input?: WireCabinetApplyInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetApprove(parameters: {
        input?: WireCabinetApproveInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUnlock(parameters: {
        input?: WireCabinetUnlockInput;
    }, options?: IRequestOptions): AxiosPromise<WireCabinetUnlockOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetHook(parameters: {
        input?: WireCabinetHookInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetDeviceHook(parameters: {
        input?: WireCabinetHook2Input;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUnHook(parameters: {
        input?: WireCabinetUnHookInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static wireCabinetUpdateTask(parameters: {
        input?: WireCabinetUpdateTaskInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonEnums(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplyReasonList(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getBuckleTypeEnums(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getLockModeEnums(options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getTask(parameters: {
        id: number;
    }, options?: IRequestOptions): AxiosPromise<WireCabinetTaskOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApplicants(options?: IRequestOptions): AxiosPromise<ListResultDtoWireCabinetOperatorDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getApprovers(options?: IRequestOptions): AxiosPromise<ListResultDtoWireCabinetOperatorDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getRecentlyTimeForSelectOperation(parameters: {
        equipmentId?: number;
        bluetooth?: string;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static updateOperateTime(parameters: {
        input?: UpdateOperateTimeInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireDetail(parameters: {
        value: string;
    }, options?: IRequestOptions): AxiosPromise<WireDetailOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static uploadFile(parameters: {
        file?: any;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoUploadFileOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireCabinet(parameters: {
        equipmentId?: number;
        bluetooth?: string;
    }, options?: IRequestOptions): AxiosPromise<WireCabinetOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static createOrUpdateEquipmentPropertyConfig(parameters: {
        input?: EquipmentPropertyConfigInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWirePile(parameters: {
        value?: string;
    }, options?: IRequestOptions): AxiosPromise<WirePileOutput>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWiresBeTaken(parameters: {
        stationId?: number;
    }, options?: IRequestOptions): AxiosPromise<ListResultDtoWireBeTakenDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static getWireCabinetBluetooths(options?: IRequestOptions): AxiosPromise<ListResultDtoWireCabinetBluetoothDto>;
    /**
     *
     * @param {IRequestOptions} [options] Override http request option.
     * @throws {RequiredError}
     */
    static checkWireConfigIsExsit(parameters: {
        input?: CheckWireConfigInput;
    }, options?: IRequestOptions): AxiosPromise<any>;
}
export declare class IsTenantAvailableInput {
    /**
     *
     * @type {string}
     * @memberof IsTenantAvailableInput
     */
    tenancyName: string;
    constructor(data?: any);
}
export declare class IsTenantAvailableOutput {
    /**
     *
     * @type {'Available'|'InActive'|'NotFound'}
     * @memberof IsTenantAvailableOutput
     */
    state: 'Available' | 'InActive' | 'NotFound';
    /**
     *
     * @type {number}
     * @memberof IsTenantAvailableOutput
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof IsTenantAvailableOutput
     */
    serverRootAddress: string;
    constructor(data?: any);
}
export declare class RegisterInput {
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof RegisterInput
     */
    captchaResponse: string;
    constructor(data?: any);
}
export declare class RegisterOutput {
    /**
     *
     * @type {boolean}
     * @memberof RegisterOutput
     */
    canLogin: boolean;
    constructor(data?: any);
}
export declare class SendPasswordResetCodeInput {
    /**
     *
     * @type {string}
     * @memberof SendPasswordResetCodeInput
     */
    emailAddress: string;
    constructor(data?: any);
}
export declare class ResetPasswordInput {
    /**
     *
     * @type {number}
     * @memberof ResetPasswordInput
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof ResetPasswordInput
     */
    resetCode: string;
    /**
     *
     * @type {string}
     * @memberof ResetPasswordInput
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof ResetPasswordInput
     */
    returnUrl: string;
    /**
     *
     * @type {string}
     * @memberof ResetPasswordInput
     */
    singleSignIn: string;
    constructor(data?: any);
}
export declare class ResetPasswordOutput {
    /**
     *
     * @type {boolean}
     * @memberof ResetPasswordOutput
     */
    canLogin: boolean;
    /**
     *
     * @type {string}
     * @memberof ResetPasswordOutput
     */
    userName: string;
    constructor(data?: any);
}
export declare class SendEmailActivationLinkInput {
    /**
     *
     * @type {string}
     * @memberof SendEmailActivationLinkInput
     */
    emailAddress: string;
    constructor(data?: any);
}
export declare class ActivateEmailInput {
    /**
     *
     * @type {number}
     * @memberof ActivateEmailInput
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof ActivateEmailInput
     */
    confirmationCode: string;
    constructor(data?: any);
}
export declare class ImpersonateInput {
    /**
     *
     * @type {number}
     * @memberof ImpersonateInput
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof ImpersonateInput
     */
    userId: number;
    constructor(data?: any);
}
export declare class ImpersonateOutput {
    /**
     *
     * @type {string}
     * @memberof ImpersonateOutput
     */
    impersonationToken: string;
    /**
     *
     * @type {string}
     * @memberof ImpersonateOutput
     */
    tenancyName: string;
    constructor(data?: any);
}
export declare class SwitchToLinkedAccountInput {
    /**
     *
     * @type {number}
     * @memberof SwitchToLinkedAccountInput
     */
    targetTenantId: number;
    /**
     *
     * @type {number}
     * @memberof SwitchToLinkedAccountInput
     */
    targetUserId: number;
    constructor(data?: any);
}
export declare class SwitchToLinkedAccountOutput {
    /**
     *
     * @type {string}
     * @memberof SwitchToLinkedAccountOutput
     */
    switchAccountToken: string;
    /**
     *
     * @type {string}
     * @memberof SwitchToLinkedAccountOutput
     */
    tenancyName: string;
    constructor(data?: any);
}
export declare class PagedResultDtoAuditLogListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoAuditLogListDto
     */
    totalCount: number;
    /**
     *
     * @type {AuditLogListDto[]}
     * @memberof PagedResultDtoAuditLogListDto
     */
    items: AuditLogListDto[];
    constructor(data?: any);
}
export declare class AuditLogListDto {
    /**
     *
     * @type {number}
     * @memberof AuditLogListDto
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    userName: string;
    /**
     *
     * @type {number}
     * @memberof AuditLogListDto
     */
    impersonatorTenantId: number;
    /**
     *
     * @type {number}
     * @memberof AuditLogListDto
     */
    impersonatorUserId: number;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    serviceName: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    methodName: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    parameters: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    executionTime: string;
    /**
     *
     * @type {number}
     * @memberof AuditLogListDto
     */
    executionDuration: number;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    clientIpAddress: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    clientName: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    browserInfo: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    exception: string;
    /**
     *
     * @type {string}
     * @memberof AuditLogListDto
     */
    customData: string;
    /**
     *
     * @type {number}
     * @memberof AuditLogListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class FileDto {
    /**
     *
     * @type {string}
     * @memberof FileDto
     */
    fileName: string;
    /**
     *
     * @type {string}
     * @memberof FileDto
     */
    fileType: string;
    /**
     *
     * @type {string}
     * @memberof FileDto
     */
    fileToken: string;
    constructor(data?: any);
}
export declare class ListResultDtoCacheDto {
    /**
     *
     * @type {CacheDto[]}
     * @memberof ListResultDtoCacheDto
     */
    items: CacheDto[];
    constructor(data?: any);
}
export declare class CacheDto {
    /**
     *
     * @type {string}
     * @memberof CacheDto
     */
    name: string;
    constructor(data?: any);
}
export declare class EntityDtoString {
    /**
     *
     * @type {string}
     * @memberof EntityDtoString
     */
    id: string;
    constructor(data?: any);
}
export declare class GetUserChatFriendsWithSettingsOutput {
    /**
     *
     * @type {string}
     * @memberof GetUserChatFriendsWithSettingsOutput
     */
    serverTime: string;
    /**
     *
     * @type {FriendDto[]}
     * @memberof GetUserChatFriendsWithSettingsOutput
     */
    friends: FriendDto[];
    constructor(data?: any);
}
export declare class FriendDto {
    /**
     *
     * @type {number}
     * @memberof FriendDto
     */
    friendUserId: number;
    /**
     *
     * @type {number}
     * @memberof FriendDto
     */
    friendTenantId: number;
    /**
     *
     * @type {string}
     * @memberof FriendDto
     */
    friendUserName: string;
    /**
     *
     * @type {string}
     * @memberof FriendDto
     */
    friendTenancyName: string;
    /**
     *
     * @type {string}
     * @memberof FriendDto
     */
    friendProfilePictureId: string;
    /**
     *
     * @type {number}
     * @memberof FriendDto
     */
    unreadMessageCount: number;
    /**
     *
     * @type {boolean}
     * @memberof FriendDto
     */
    isOnline: boolean;
    /**
     *
     * @type {'Accepted'|'Blocked'}
     * @memberof FriendDto
     */
    state: 'Accepted' | 'Blocked';
    constructor(data?: any);
}
export declare class ListResultDtoChatMessageDto {
    /**
     *
     * @type {ChatMessageDto[]}
     * @memberof ListResultDtoChatMessageDto
     */
    items: ChatMessageDto[];
    constructor(data?: any);
}
export declare class ChatMessageDto {
    /**
     *
     * @type {number}
     * @memberof ChatMessageDto
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof ChatMessageDto
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof ChatMessageDto
     */
    targetUserId: number;
    /**
     *
     * @type {number}
     * @memberof ChatMessageDto
     */
    targetTenantId: number;
    /**
     *
     * @type {'Sender'|'Receiver'}
     * @memberof ChatMessageDto
     */
    side: 'Sender' | 'Receiver';
    /**
     *
     * @type {'Unread'|'Read'}
     * @memberof ChatMessageDto
     */
    readState: 'Unread' | 'Read';
    /**
     *
     * @type {'Unread'|'Read'}
     * @memberof ChatMessageDto
     */
    receiverReadState: 'Unread' | 'Read';
    /**
     *
     * @type {string}
     * @memberof ChatMessageDto
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDto
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDto
     */
    sharedMessageId: string;
    /**
     *
     * @type {number}
     * @memberof ChatMessageDto
     */
    id: number;
    constructor(data?: any);
}
export declare class MarkAllUnreadMessagesOfUserAsReadInput {
    /**
     *
     * @type {number}
     * @memberof MarkAllUnreadMessagesOfUserAsReadInput
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof MarkAllUnreadMessagesOfUserAsReadInput
     */
    userId: number;
    constructor(data?: any);
}
export declare class ListResultDtoSubscribableEditionComboboxItemDto {
    /**
     *
     * @type {SubscribableEditionComboboxItemDto[]}
     * @memberof ListResultDtoSubscribableEditionComboboxItemDto
     */
    items: SubscribableEditionComboboxItemDto[];
    constructor(data?: any);
}
export declare class SubscribableEditionComboboxItemDto {
    /**
     *
     * @type {boolean}
     * @memberof SubscribableEditionComboboxItemDto
     */
    isFree: boolean;
    /**
     *
     * @type {string}
     * @memberof SubscribableEditionComboboxItemDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof SubscribableEditionComboboxItemDto
     */
    displayText: string;
    /**
     *
     * @type {boolean}
     * @memberof SubscribableEditionComboboxItemDto
     */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class FindUsersInput {
    /**
     *
     * @type {number}
     * @memberof FindUsersInput
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof FindUsersInput
     */
    maxResultCount: number;
    /**
     *
     * @type {number}
     * @memberof FindUsersInput
     */
    skipCount: number;
    /**
     *
     * @type {string}
     * @memberof FindUsersInput
     */
    filter: string;
    constructor(data?: any);
}
export declare class PagedResultDtoNameValueDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoNameValueDto
     */
    totalCount: number;
    /**
     *
     * @type {NameValueDto[]}
     * @memberof PagedResultDtoNameValueDto
     */
    items: NameValueDto[];
    constructor(data?: any);
}
export declare class NameValueDto {
    /**
     *
     * @type {string}
     * @memberof NameValueDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof NameValueDto
     */
    value: string;
    constructor(data?: any);
}
export declare class GetDefaultEditionNameOutput {
    /**
     *
     * @type {string}
     * @memberof GetDefaultEditionNameOutput
     */
    name: string;
    constructor(data?: any);
}
export declare class ListResultDtoDeviceTypeComboboxItemDto {
    /**
     *
     * @type {DeviceTypeComboboxItemDto[]}
     * @memberof ListResultDtoDeviceTypeComboboxItemDto
     */
    items: DeviceTypeComboboxItemDto[];
    constructor(data?: any);
}
export declare class DeviceTypeComboboxItemDto {
    /**
     *
     * @type {string}
     * @memberof DeviceTypeComboboxItemDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeComboboxItemDto
     */
    displayText: string;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeComboboxItemDto
     */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoComboboxItemDto {
    /**
     *
     * @type {ComboboxItemDto[]}
     * @memberof ListResultDtoComboboxItemDto
     */
    items: ComboboxItemDto[];
    constructor(data?: any);
}
export declare class ComboboxItemDto {
    /**
     *
     * @type {string}
     * @memberof ComboboxItemDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof ComboboxItemDto
     */
    displayText: string;
    /**
     *
     * @type {boolean}
     * @memberof ComboboxItemDto
     */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class DateToStringOutput {
    /**
     *
     * @type {string}
     * @memberof DateToStringOutput
     */
    dateString: string;
    constructor(data?: any);
}
export declare class NameValueString {
    /**
     *
     * @type {string}
     * @memberof NameValueString
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof NameValueString
     */
    value: string;
    constructor(data?: any);
}
export declare class StringOutput {
    /**
     *
     * @type {string}
     * @memberof StringOutput
     */
    output: string;
    constructor(data?: any);
}
export declare class PagedResultDtoDeviceListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoDeviceListDto
     */
    totalCount: number;
    /**
     *
     * @type {DeviceListDto[]}
     * @memberof PagedResultDtoDeviceListDto
     */
    items: DeviceListDto[];
    constructor(data?: any);
}
export declare class DeviceListDto {
    /**
     *
     * @type {string}
     * @memberof DeviceListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceListDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof DeviceListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceEditOutput {
    /**
     *
     * @type {DeviceEditDto}
     * @memberof GetDeviceEditOutput
     */
    device: DeviceEditDto;
    /**
     *
     * @type {DeviceCodeInfoDto[]}
     * @memberof GetDeviceEditOutput
     */
    configListDtos: DeviceCodeInfoDto[];
    constructor(data?: any);
}
export declare class DeviceEditDto {
    /**
     *
     * @type {number}
     * @memberof DeviceEditDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceEditDto
     */
    deviceAreaId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceEditDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DeviceEditDto
     */
    voltage: string;
    /**
     *
     * @type {string}
     * @memberof DeviceEditDto
     */
    type: string;
    /**
     *
     * @type {number}
     * @memberof DeviceEditDto
     */
    lockCodePropertyId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class DeviceCodeInfoDto {
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoDto
     */
    lockCodeNumber: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoDto
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoDto
     */
    lockType: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoDto
     */
    lockPropertyType: string;
    /**
     *
     * @type {number}
     * @memberof DeviceCodeInfoDto
     */
    lockCodeConfigId: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceInput {
    /**
     *
     * @type {CreateOrUpdateDeviceDto}
     * @memberof CreateOrUpdateDeviceInput
     */
    device: CreateOrUpdateDeviceDto;
    /**
     *
     * @type {DeviceCodeInfoEditDto[]}
     * @memberof CreateOrUpdateDeviceInput
     */
    codeInfoDtos: DeviceCodeInfoEditDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceDto {
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    deviceAreaId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    voltage: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    type: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    lockCodePropertyId: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceDto
     */
    id: number;
    constructor(data?: any);
}
export declare class DeviceCodeInfoEditDto {
    /**
     *
     * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
     * @memberof DeviceCodeInfoEditDto
     */
    lockCodeNumber: 'Um1' | 'Um2' | 'Um3' | 'Um4' | 'Um5' | 'Um6' | 'Um7' | 'Um8' | 'Um9' | 'Um10' | 'Um11' | 'Um12' | 'Um13' | 'Um14' | 'Um15' | 'Um16' | 'Um17' | 'Um18';
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoEditDto
     */
    code: string;
    /**
     *
     * @type {number}
     * @memberof DeviceCodeInfoEditDto
     */
    lockCodeConfigId: number;
    constructor(data?: any);
}
export declare class QueryDevicesStateInput {
    /**
     *
     * @type {StationDeviceDto[]}
     * @memberof QueryDevicesStateInput
     */
    stationDevices: StationDeviceDto[];
    constructor(data?: any);
}
export declare class StationDeviceDto {
    /**
     *
     * @type {string}
     * @memberof StationDeviceDto
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof StationDeviceDto
     */
    pointName: string;
    /**
     *
     * @type {number}
     * @memberof StationDeviceDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoDeviceStateDto {
    /**
     *
     * @type {DeviceStateDto[]}
     * @memberof ListResultDtoDeviceStateDto
     */
    items: DeviceStateDto[];
    constructor(data?: any);
}
export declare class DeviceStateDto {
    /**
     *
     * @type {string}
     * @memberof DeviceStateDto
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceStateDto
     */
    pointName: string;
    /**
     *
     * @type {number}
     * @memberof DeviceStateDto
     */
    state: number;
    /**
     *
     * @type {number}
     * @memberof DeviceStateDto
     */
    id: number;
    constructor(data?: any);
}
export declare class UpdateDeviceStateInput {
    /**
     *
     * @type {DeviceStateDto}
     * @memberof UpdateDeviceStateInput
     */
    deviceState: DeviceStateDto;
    constructor(data?: any);
}
export declare class UpdateDeviceStateOutput {
    /**
     *
     * @type {DeviceStateDto}
     * @memberof UpdateDeviceStateOutput
     */
    deviceState: DeviceStateDto;
    constructor(data?: any);
}
export declare class CheckDeviceNameIsExistInput {
    /**
     *
     * @type {number}
     * @memberof CheckDeviceNameIsExistInput
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof CheckDeviceNameIsExistInput
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof CheckDeviceNameIsExistInput
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoDeviceAreaListDto {
    /**
     *
     * @type {DeviceAreaListDto[]}
     * @memberof ListResultDtoDeviceAreaListDto
     */
    items: DeviceAreaListDto[];
    constructor(data?: any);
}
export declare class DeviceAreaListDto {
    /**
     *
     * @type {number}
     * @memberof DeviceAreaListDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceAreaListDto
     */
    parentId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceAreaListDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof DeviceAreaListDto
     */
    sortId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceAreaListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceAreaEditOutput {
    /**
     *
     * @type {GetDeviceAreaEditDto}
     * @memberof GetDeviceAreaEditOutput
     */
    deviceArea: GetDeviceAreaEditDto;
    constructor(data?: any);
}
export declare class GetDeviceAreaEditDto {
    /**
     *
     * @type {number}
     * @memberof GetDeviceAreaEditDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof GetDeviceAreaEditDto
     */
    parentId: number;
    /**
     *
     * @type {string}
     * @memberof GetDeviceAreaEditDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof GetDeviceAreaEditDto
     */
    sortId: number;
    /**
     *
     * @type {number}
     * @memberof GetDeviceAreaEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceAreaInput {
    /**
     *
     * @type {CreateOrUpdateDeviceAreaDto}
     * @memberof CreateOrUpdateDeviceAreaInput
     */
    deviceArea: CreateOrUpdateDeviceAreaDto;
    /**
     *
     * @type {number[]}
     * @memberof CreateOrUpdateDeviceAreaInput
     */
    children: number[];
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceAreaDto {
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceAreaDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceAreaDto
     */
    parentId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceAreaDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceAreaDto
     */
    sortId: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceAreaDto
     */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDtoDeviceBoardDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoDeviceBoardDto
     */
    totalCount: number;
    /**
     *
     * @type {DeviceBoardDto[]}
     * @memberof PagedResultDtoDeviceBoardDto
     */
    items: DeviceBoardDto[];
    constructor(data?: any);
}
export declare class DeviceBoardDto {
    /**
     *
     * @type {string}
     * @memberof DeviceBoardDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceBoardDto
     */
    term: string;
    /**
     *
     * @type {string}
     * @memberof DeviceBoardDto
     */
    contentStorageId: string;
    /**
     *
     * @type {number}
     * @memberof DeviceBoardDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceBoardEditOutput {
    /**
     *
     * @type {DeviceBoardEditDto}
     * @memberof GetDeviceBoardEditOutput
     */
    deviceBoard: DeviceBoardEditDto;
    constructor(data?: any);
}
export declare class DeviceBoardEditDto {
    /**
     *
     * @type {string}
     * @memberof DeviceBoardEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceBoardEditDto
     */
    term: string;
    /**
     *
     * @type {string}
     * @memberof DeviceBoardEditDto
     */
    contentStorageId: string;
    /**
     *
     * @type {number}
     * @memberof DeviceBoardEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceBoardInput {
    /**
     *
     * @type {CreateOrUpdateDeviceBoardDto}
     * @memberof CreateOrUpdateDeviceBoardInput
     */
    deviceBoard: CreateOrUpdateDeviceBoardDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceBoardDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceBoardDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceBoardDto
     */
    term: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateDeviceBoardDto
     */
    contentStorageId: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateDeviceBoardDto
     */
    id: number;
    constructor(data?: any);
}
export declare class IFormFile {
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    contentType: string;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    contentDisposition: string;
    /**
     *
     * @type {object}
     * @memberof IFormFile
     */
    headers: object;
    /**
     *
     * @type {number}
     * @memberof IFormFile
     */
    length: number;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof IFormFile
     */
    fileName: string;
    constructor(data?: any);
}
export declare class UploadFileOutput {
    /**
     *
     * @type {string}
     * @memberof UploadFileOutput
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof UploadFileOutput
     */
    fileName: string;
    constructor(data?: any);
}
export declare class PagedResultDtoLockCodePropertyListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoLockCodePropertyListDto
     */
    totalCount: number;
    /**
     *
     * @type {LockCodePropertyListDto[]}
     * @memberof PagedResultDtoLockCodePropertyListDto
     */
    items: LockCodePropertyListDto[];
    constructor(data?: any);
}
export declare class LockCodePropertyListDto {
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyListDto
     */
    codeName: string;
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyListDto
     */
    opHint1_0: string;
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyListDto
     */
    opHint1_1: string;
    /**
     *
     * @type {boolean}
     * @memberof LockCodePropertyListDto
     */
    toKey: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LockCodePropertyListDto
     */
    stateChange: boolean;
    /**
     *
     * @type {number}
     * @memberof LockCodePropertyListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoLockCodePropertySelectDto {
    /**
     *
     * @type {LockCodePropertySelectDto[]}
     * @memberof ListResultDtoLockCodePropertySelectDto
     */
    items: LockCodePropertySelectDto[];
    constructor(data?: any);
}
export declare class LockCodePropertySelectDto {
    /**
     *
     * @type {string}
     * @memberof LockCodePropertySelectDto
     */
    codeName: string;
    /**
     *
     * @type {number}
     * @memberof LockCodePropertySelectDto
     */
    id: number;
    constructor(data?: any);
}
export declare class LockCodePropertyEditDto {
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyEditDto
     */
    codeName: string;
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyEditDto
     */
    opHint1_0: string;
    /**
     *
     * @type {string}
     * @memberof LockCodePropertyEditDto
     */
    opHint1_1: string;
    /**
     *
     * @type {boolean}
     * @memberof LockCodePropertyEditDto
     */
    toKey: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LockCodePropertyEditDto
     */
    stateChange: boolean;
    /**
     *
     * @type {LockCodeConfigListDto[]}
     * @memberof LockCodePropertyEditDto
     */
    configDtos: LockCodeConfigListDto[];
    /**
     *
     * @type {number}
     * @memberof LockCodePropertyEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class LockCodeConfigListDto {
    /**
     *
     * @type {string}
     * @memberof LockCodeConfigListDto
     */
    lockType: string;
    /**
     *
     * @type {string}
     * @memberof LockCodeConfigListDto
     */
    lockPropertyType: string;
    /**
     *
     * @type {string}
     * @memberof LockCodeConfigListDto
     */
    lockCodeNumber: string;
    /**
     *
     * @type {number}
     * @memberof LockCodeConfigListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateLockCodePropertyInput {
    /**
     *
     * @type {CreateOrUpdateLockCodePropertyDto}
     * @memberof CreateOrUpdateLockCodePropertyInput
     */
    codePropertyDto: CreateOrUpdateLockCodePropertyDto;
    /**
     *
     * @type {LockCodeConfigEditDto[]}
     * @memberof CreateOrUpdateLockCodePropertyInput
     */
    lockCodeConfigs: LockCodeConfigEditDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateLockCodePropertyDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    codeName: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    opHint1_0: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    opHint1_1: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    toKey: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    stateChange: boolean;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateLockCodePropertyDto
     */
    id: number;
    constructor(data?: any);
}
export declare class LockCodeConfigEditDto {
    /**
     *
     * @type {'NoKey'|'JXLock'|'DBMLock'|'DKLock'|'DXDKLock'|'GSNYD'|'WYYD'|'YYYD'|'CJFKLock'|'FKSDBMLock'|'ZNLock'|'ZNYB'|'YYDWZJC'|'WYDWZJC'|'JXDBMLock'|'DBMLock_2H'|'DBMLock_3H'|'XJLock'|'WX_DBMLock'|'WX_JXLock'|'WX_GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'ZNHWMLock'|'GSN2E'|'GSN2YD'|'WX_WZSZNMLock'|'WX_DZBQ'|'WX_BSJXLock'|'TBLock'|'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'ZNSXLock'|'GYJLYDQ'|'LGLock_6A'|'WTJGLock'|'DKHLock'}
     * @memberof LockCodeConfigEditDto
     */
    lockType: 'NoKey' | 'JXLock' | 'DBMLock' | 'DKLock' | 'DXDKLock' | 'GSNYD' | 'WYYD' | 'YYYD' | 'CJFKLock' | 'FKSDBMLock' | 'ZNLock' | 'ZNYB' | 'YYDWZJC' | 'WYDWZJC' | 'JXDBMLock' | 'DBMLock_2H' | 'DBMLock_3H' | 'XJLock' | 'WX_DBMLock' | 'WX_JXLock' | 'WX_GSN2L' | 'WX_ZNMBLock' | 'WX_ZNFHMLock' | 'ZNHWMLock' | 'GSN2E' | 'GSN2YD' | 'WX_WZSZNMLock' | 'WX_DZBQ' | 'WX_BSJXLock' | 'TBLock' | 'XHJGLock' | 'SLGLock' | 'LTLock' | 'BSQLock' | 'BSLock' | 'CXLock' | 'FDHLock' | 'PMLock' | 'LGLock' | 'FHMLock' | 'YKLock' | 'ZNSXLock' | 'GYJLYDQ' | 'LGLock_6A' | 'WTJGLock' | 'DKHLock';
    /**
     *
     * @type {'NoKey'|'XHJGLock'|'SLGLock'|'LTLock'|'BSQLock'|'BSLock'|'CXLock'|'FDHLock'|'PMLock'|'LGLock'|'FHMLock'|'YKLock'|'HWGMLock'|'WX_JXLock'|'WX_DBMLock'|'GSN2L'|'WX_ZNMBLock'|'WX_ZNFHMLock'|'WX_SKJXLock'|'GSN2YD'|'XJLock'|'JM_GSN2YD'|'GLDBP'|'GLWYBS'|'LSGLGLock'|'WX_WZSZNMLock'|'LGLock_6A'|'WTJGLock'|'DKHLock'}
     * @memberof LockCodeConfigEditDto
     */
    lockPropertyType: 'NoKey' | 'XHJGLock' | 'SLGLock' | 'LTLock' | 'BSQLock' | 'BSLock' | 'CXLock' | 'FDHLock' | 'PMLock' | 'LGLock' | 'FHMLock' | 'YKLock' | 'HWGMLock' | 'WX_JXLock' | 'WX_DBMLock' | 'GSN2L' | 'WX_ZNMBLock' | 'WX_ZNFHMLock' | 'WX_SKJXLock' | 'GSN2YD' | 'XJLock' | 'JM_GSN2YD' | 'GLDBP' | 'GLWYBS' | 'LSGLGLock' | 'WX_WZSZNMLock' | 'LGLock_6A' | 'WTJGLock' | 'DKHLock';
    /**
     *
     * @type {'Um1'|'Um2'|'Um3'|'Um4'|'Um5'|'Um6'|'Um7'|'Um8'|'Um9'|'Um10'|'Um11'|'Um12'|'Um13'|'Um14'|'Um15'|'Um16'|'Um17'|'Um18'}
     * @memberof LockCodeConfigEditDto
     */
    lockCodeNumber: 'Um1' | 'Um2' | 'Um3' | 'Um4' | 'Um5' | 'Um6' | 'Um7' | 'Um8' | 'Um9' | 'Um10' | 'Um11' | 'Um12' | 'Um13' | 'Um14' | 'Um15' | 'Um16' | 'Um17' | 'Um18';
    /**
     *
     * @type {number}
     * @memberof LockCodeConfigEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceTermsOutput {
    /**
     *
     * @type {string}
     * @memberof GetDeviceTermsOutput
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof GetDeviceTermsOutput
     */
    pointName: string;
    /**
     *
     * @type {DeviceStateTermDto[]}
     * @memberof GetDeviceTermsOutput
     */
    deviceStateTerms: DeviceStateTermDto[];
    constructor(data?: any);
}
export declare class DeviceStateTermDto {
    /**
     *
     * @type {number}
     * @memberof DeviceStateTermDto
     */
    fromState: number;
    /**
     *
     * @type {number}
     * @memberof DeviceStateTermDto
     */
    toState: number;
    /**
     *
     * @type {string}
     * @memberof DeviceStateTermDto
     */
    operationName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceStateTermDto
     */
    boardDesc: string;
    /**
     *
     * @type {string[]}
     * @memberof DeviceStateTermDto
     */
    terms: string[];
    constructor(data?: any);
}
export declare class ListResultDtoDeviceOperationListDto {
    /**
     *
     * @type {DeviceOperationListDto[]}
     * @memberof ListResultDtoDeviceOperationListDto
     */
    items: DeviceOperationListDto[];
    constructor(data?: any);
}
export declare class DeviceOperationListDto {
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    stationName: string;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    voltageLevelId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    voltageLevelName: string;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    fromDeviceStateId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    toDeviceStateId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    boardDesc: string;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    deviceTypeId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    fromDeviceState: string;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationListDto
     */
    toDeviceState: string;
    /**
     *
     * @type {TermListDto[]}
     * @memberof DeviceOperationListDto
     */
    terms: TermListDto[];
    /**
     *
     * @type {number}
     * @memberof DeviceOperationListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class TermListDto {
    /**
     *
     * @type {string}
     * @memberof TermListDto
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof TermListDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof TermListDto
     */
    lockType: string;
    /**
     *
     * @type {string[]}
     * @memberof TermListDto
     */
    lockTypes: string[];
    /**
     *
     * @type {number}
     * @memberof TermListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceOperationInput {
    /**
     *
     * @type {DeviceOperationEditDto}
     * @memberof CreateOrUpdateDeviceOperationInput
     */
    deviceOperation: DeviceOperationEditDto;
    constructor(data?: any);
}
export declare class DeviceOperationEditDto {
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    voltageLevelId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    fromDeviceStateId: number;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    toDeviceStateId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceOperationEditDto
     */
    boardDesc: string;
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    deviceTypeId: number;
    /**
     *
     * @type {TermEditDto[]}
     * @memberof DeviceOperationEditDto
     */
    terms: TermEditDto[];
    /**
     *
     * @type {number}
     * @memberof DeviceOperationEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class TermEditDto {
    /**
     *
     * @type {'Default'|'ByLinkage'|'AddBefault'|'AddAfter'|'Selectable'}
     * @memberof TermEditDto
     */
    type: 'Default' | 'ByLinkage' | 'AddBefault' | 'AddAfter' | 'Selectable';
    /**
     *
     * @type {string}
     * @memberof TermEditDto
     */
    value: string;
    /**
     *
     * @type {string[]}
     * @memberof TermEditDto
     */
    lockTypes: string[];
    /**
     *
     * @type {string}
     * @memberof TermEditDto
     */
    lockType: string;
    /**
     *
     * @type {number}
     * @memberof TermEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDtoDeviceTypeListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoDeviceTypeListDto
     */
    totalCount: number;
    /**
     *
     * @type {DeviceTypeListDto[]}
     * @memberof PagedResultDtoDeviceTypeListDto
     */
    items: DeviceTypeListDto[];
    constructor(data?: any);
}
export declare class DeviceTypeListDto {
    /**
     *
     * @type {string}
     * @memberof DeviceTypeListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeListDto
     */
    dnbsCode: string;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    toPrinter: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    toKey: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeListDto
     */
    graphName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeListDto
     */
    codeName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeListDto
     */
    showMode: string;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    isEst: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    isPprimary: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    isSecondary: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeListDto
     */
    isOperable: boolean;
    /**
     *
     * @type {number}
     * @memberof DeviceTypeListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceTypeEditOutput {
    /**
     *
     * @type {DeviceTypeEditDto}
     * @memberof GetDeviceTypeEditOutput
     */
    deviceType: DeviceTypeEditDto;
    /**
     *
     * @type {DeviceStateListDto[]}
     * @memberof GetDeviceTypeEditOutput
     */
    deviceStates: DeviceStateListDto[];
    constructor(data?: any);
}
export declare class DeviceTypeEditDto {
    /**
     *
     * @type {string}
     * @memberof DeviceTypeEditDto
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    toPrinter: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    toKey: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeEditDto
     */
    dnbsCode: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeEditDto
     */
    graphName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeEditDto
     */
    codeName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceTypeEditDto
     */
    showMode: string;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    isEst: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    isPprimary: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    isSecondary: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceTypeEditDto
     */
    isOperable: boolean;
    /**
     *
     * @type {number}
     * @memberof DeviceTypeEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class DeviceStateListDto {
    /**
     *
     * @type {string}
     * @memberof DeviceStateListDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof DeviceStateListDto
     */
    state: number;
    /**
     *
     * @type {number}
     * @memberof DeviceStateListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceTypeInput {
    /**
     *
     * @type {DeviceTypeEditDto}
     * @memberof CreateOrUpdateDeviceTypeInput
     */
    deviceType: DeviceTypeEditDto;
    /**
     *
     * @type {DeviceStateListDto[]}
     * @memberof CreateOrUpdateDeviceTypeInput
     */
    deviceStates: DeviceStateListDto[];
    constructor(data?: any);
}
export declare class ListResultDtoEditionListDto {
    /**
     *
     * @type {EditionListDto[]}
     * @memberof ListResultDtoEditionListDto
     */
    items: EditionListDto[];
    constructor(data?: any);
}
export declare class EditionListDto {
    /**
     *
     * @type {string}
     * @memberof EditionListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EditionListDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EditionListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof EditionListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetEditionEditOutput {
    /**
     *
     * @type {EditionEditDto}
     * @memberof GetEditionEditOutput
     */
    edition: EditionEditDto;
    /**
     *
     * @type {NameValueDto[]}
     * @memberof GetEditionEditOutput
     */
    featureValues: NameValueDto[];
    /**
     *
     * @type {FlatFeatureDto[]}
     * @memberof GetEditionEditOutput
     */
    features: FlatFeatureDto[];
    constructor(data?: any);
}
export declare class EditionEditDto {
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof EditionEditDto
     */
    displayName: string;
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    monthlyPrice: number;
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    annualPrice: number;
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    trialDayCount: number;
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    waitingDayAfterExpire: number;
    /**
     *
     * @type {number}
     * @memberof EditionEditDto
     */
    expiringEditionId: number;
    constructor(data?: any);
}
export declare class FlatFeatureDto {
    /**
     *
     * @type {string}
     * @memberof FlatFeatureDto
     */
    parentName: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureDto
     */
    defaultValue: string;
    /**
     *
     * @type {FeatureInputTypeDto}
     * @memberof FlatFeatureDto
     */
    inputType: FeatureInputTypeDto;
    constructor(data?: any);
}
export declare class FeatureInputTypeDto {
    /**
     *
     * @type {string}
     * @memberof FeatureInputTypeDto
     */
    name: string;
    /**
     *
     * @type {object}
     * @memberof FeatureInputTypeDto
     */
    attributes: object;
    /**
     *
     * @type {IValueValidator}
     * @memberof FeatureInputTypeDto
     */
    validator: IValueValidator;
    /**
     *
     * @type {LocalizableComboboxItemSourceDto}
     * @memberof FeatureInputTypeDto
     */
    itemSource: LocalizableComboboxItemSourceDto;
    constructor(data?: any);
}
export declare class IValueValidator {
    /**
     *
     * @type {string}
     * @memberof IValueValidator
     */
    name: string;
    /**
     *
     * @type {object}
     * @memberof IValueValidator
     */
    attributes: object;
    constructor(data?: any);
}
export declare class LocalizableComboboxItemSourceDto {
    /**
     *
     * @type {LocalizableComboboxItemDto[]}
     * @memberof LocalizableComboboxItemSourceDto
     */
    items: LocalizableComboboxItemDto[];
    constructor(data?: any);
}
export declare class LocalizableComboboxItemDto {
    /**
     *
     * @type {string}
     * @memberof LocalizableComboboxItemDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof LocalizableComboboxItemDto
     */
    displayText: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateEditionDto {
    /**
     *
     * @type {EditionEditDto}
     * @memberof CreateOrUpdateEditionDto
     */
    edition: EditionEditDto;
    /**
     *
     * @type {NameValueDto[]}
     * @memberof CreateOrUpdateEditionDto
     */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class ListResultDtoEquipmentListDto {
    /**
     *
     * @type {EquipmentListDto[]}
     * @memberof ListResultDtoEquipmentListDto
     */
    items: EquipmentListDto[];
    constructor(data?: any);
}
export declare class EquipmentListDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    productType: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    accessKey: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentListDto
     */
    accessSecret: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentListDto
     */
    productId: number;
    /**
     *
     * @type {number}
     * @memberof EquipmentListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetEquipmentEditOutput {
    /**
     *
     * @type {EquipmentEditDto}
     * @memberof GetEquipmentEditOutput
     */
    equipment: EquipmentEditDto;
    /**
     *
     * @type {EquipmentPropertyListDto[]}
     * @memberof GetEquipmentEditOutput
     */
    equipmentProperties: EquipmentPropertyListDto[];
    /**
     *
     * @type {EquipmentBindPortDto}
     * @memberof GetEquipmentEditOutput
     */
    equipmentBindPort: EquipmentBindPortDto;
    constructor(data?: any);
}
export declare class EquipmentEditDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentEditDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentEditDto
     */
    accessKey: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentEditDto
     */
    accessSecret: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentEditDto
     */
    productType: string;
    /**
     *
     * @type {boolean}
     * @memberof EquipmentEditDto
     */
    isEquipmentOnline: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EquipmentEditDto
     */
    isEquipmentFault: boolean;
    /**
     *
     * @type {number}
     * @memberof EquipmentEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class EquipmentPropertyListDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    bitType: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyListDto
     */
    productPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyListDto
     */
    state: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    config: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    operation: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyListDto
     */
    sortIndex: number;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyListDto
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyListDto
     */
    unit: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class EquipmentBindPortDto {
    /**
     *
     * @type {number}
     * @memberof EquipmentBindPortDto
     */
    terminalId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentBindPortDto
     */
    terminalName: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentBindPortDto
     */
    terminalPortConfigId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentBindPortDto
     */
    terminalPortConfigName: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateEquipmentInput {
    /**
     *
     * @type {CreateOrUpdateEquipmentDto}
     * @memberof CreateOrUpdateEquipmentInput
     */
    equipment: CreateOrUpdateEquipmentDto;
    /**
     *
     * @type {EquipmentPropertyEditDto[]}
     * @memberof CreateOrUpdateEquipmentInput
     */
    equipmentProperties: EquipmentPropertyEditDto[];
    /**
     *
     * @type {CreateOrUpdateBindPortDto[]}
     * @memberof CreateOrUpdateEquipmentInput
     */
    bindPorts: CreateOrUpdateBindPortDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateEquipmentDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateEquipmentDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateEquipmentDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateEquipmentDto
     */
    productId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateEquipmentDto
     */
    bluetooth: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateEquipmentDto
     */
    id: number;
    constructor(data?: any);
}
export declare class EquipmentPropertyEditDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    value: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyEditDto
     */
    productPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    description: string;
    /**
     *
     * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
     * @memberof EquipmentPropertyEditDto
     */
    type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment';
    /**
     *
     * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
     * @memberof EquipmentPropertyEditDto
     */
    bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite';
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    config: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    operation: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyEditDto
     */
    sortIndex: number;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyEditDto
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyEditDto
     */
    unit: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateBindPortDto {
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateBindPortDto
     */
    terminalPortConfigId: number;
    constructor(data?: any);
}
export declare class PagedResultDtoEquipmentListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoEquipmentListDto
     */
    totalCount: number;
    /**
     *
     * @type {EquipmentListDto[]}
     * @memberof PagedResultDtoEquipmentListDto
     */
    items: EquipmentListDto[];
    constructor(data?: any);
}
export declare class ListResultDtoEquipmentWithPropertyDto {
    /**
     *
     * @type {EquipmentWithPropertyDto[]}
     * @memberof ListResultDtoEquipmentWithPropertyDto
     */
    items: EquipmentWithPropertyDto[];
    constructor(data?: any);
}
export declare class EquipmentWithPropertyDto {
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof EquipmentWithPropertyDto
     */
    productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {number}
     * @memberof EquipmentWithPropertyDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentWithPropertyDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentWithPropertyDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentWithPropertyDto
     */
    productId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentWithPropertyDto
     */
    productName: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentWithPropertyDto
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentWithPropertyDto
     */
    stationName: string;
    /**
     *
     * @type {boolean}
     * @memberof EquipmentWithPropertyDto
     */
    isOnline: boolean;
    /**
     *
     * @type {EquipmentPropertyForSingleEquipment[]}
     * @memberof EquipmentWithPropertyDto
     */
    equipmentBaseProperties: EquipmentPropertyForSingleEquipment[];
    /**
     *
     * @type {EquipmentPropertyForSingleEquipment[]}
     * @memberof EquipmentWithPropertyDto
     */
    equipmentCommunicationProperties: EquipmentPropertyForSingleEquipment[];
    constructor(data?: any);
}
export declare class EquipmentPropertyForSingleEquipment {
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    displayName: string;
    /**
     *
     * @type {string[]}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    photoIds: string[];
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    value: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    state: number;
    /**
     *
     * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite';
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    config: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    operation: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyForSingleEquipment
     */
    sortIndex: number;
    constructor(data?: any);
}
export declare class PagedResultDtoEquipmentInpageDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoEquipmentInpageDto
     */
    totalCount: number;
    /**
     *
     * @type {EquipmentInpageDto[]}
     * @memberof PagedResultDtoEquipmentInpageDto
     */
    items: EquipmentInpageDto[];
    constructor(data?: any);
}
export declare class EquipmentInpageDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentInpageDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentInpageDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof EquipmentInpageDto
     */
    productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {string}
     * @memberof EquipmentInpageDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentInpageDto
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentInpageDto
     */
    stationName: string;
    /**
     *
     * @type {boolean}
     * @memberof EquipmentInpageDto
     */
    isOnline: boolean;
    /**
     *
     * @type {number}
     * @memberof EquipmentInpageDto
     */
    productId: number;
    /**
     *
     * @type {EquipmentBasePropertyInpageDto[]}
     * @memberof EquipmentInpageDto
     */
    equipmentBaseProperties: EquipmentBasePropertyInpageDto[];
    /**
     *
     * @type {number}
     * @memberof EquipmentInpageDto
     */
    id: number;
    constructor(data?: any);
}
export declare class EquipmentBasePropertyInpageDto {
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    config: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentBasePropertyInpageDto
     */
    operation: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentBasePropertyInpageDto
     */
    id: number;
    constructor(data?: any);
}
export declare class EquipmentWithPropertyOutput {
    /**
     *
     * @type {EquipmentWithPropertyDto}
     * @memberof EquipmentWithPropertyOutput
     */
    equipmentWithProperty: EquipmentWithPropertyDto;
    constructor(data?: any);
}
export declare class ControlEquipmentInput {
    /**
     *
     * @type {number}
     * @memberof ControlEquipmentInput
     */
    equipmentId: number;
    /**
     *
     * @type {number}
     * @memberof ControlEquipmentInput
     */
    index: number;
    /**
     *
     * @type {number}
     * @memberof ControlEquipmentInput
     */
    value: number;
    constructor(data?: any);
}
export declare class IListResultEquipmentCombineProperties {
    /**
     *
     * @type {EquipmentCombineProperties[]}
     * @memberof IListResultEquipmentCombineProperties
     */
    items: EquipmentCombineProperties[];
    constructor(data?: any);
}
export declare class EquipmentCombineProperties {
    /**
     *
     * @type {string}
     * @memberof EquipmentCombineProperties
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentCombineProperties
     */
    description: string;
    /**
     *
     * @type {EquipmentPropertyListDto[]}
     * @memberof EquipmentCombineProperties
     */
    equipmentProperties: EquipmentPropertyListDto[];
    /**
     *
     * @type {number}
     * @memberof EquipmentCombineProperties
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateFriendshipRequestInput {
    /**
     *
     * @type {number}
     * @memberof CreateFriendshipRequestInput
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof CreateFriendshipRequestInput
     */
    tenantId: number;
    constructor(data?: any);
}
export declare class CreateFriendshipRequestByUserNameInput {
    /**
     *
     * @type {string}
     * @memberof CreateFriendshipRequestByUserNameInput
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof CreateFriendshipRequestByUserNameInput
     */
    userName: string;
    constructor(data?: any);
}
export declare class BlockUserInput {
    /**
     *
     * @type {number}
     * @memberof BlockUserInput
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof BlockUserInput
     */
    tenantId: number;
    constructor(data?: any);
}
export declare class UnblockUserInput {
    /**
     *
     * @type {number}
     * @memberof UnblockUserInput
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof UnblockUserInput
     */
    tenantId: number;
    constructor(data?: any);
}
export declare class AcceptFriendshipRequestInput {
    /**
     *
     * @type {number}
     * @memberof AcceptFriendshipRequestInput
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof AcceptFriendshipRequestInput
     */
    tenantId: number;
    constructor(data?: any);
}
export declare class ListResultDtoGraphListDto {
    /**
     *
     * @type {GraphListDto[]}
     * @memberof ListResultDtoGraphListDto
     */
    items: GraphListDto[];
    constructor(data?: any);
}
export declare class GraphListDto {
    /**
     *
     * @type {string}
     * @memberof GraphListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof GraphListDto
     */
    contentStorageId: string;
    /**
     *
     * @type {string}
     * @memberof GraphListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof GraphListDto
     */
    parentId: number;
    /**
     *
     * @type {number}
     * @memberof GraphListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GraphEditDto {
    /**
     *
     * @type {string}
     * @memberof GraphEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof GraphEditDto
     */
    contentStorageId: string;
    /**
     *
     * @type {number}
     * @memberof GraphEditDto
     */
    parentId: number;
    /**
     *
     * @type {number}
     * @memberof GraphEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateGraphInput {
    /**
     *
     * @type {GraphEditDto}
     * @memberof CreateOrUpdateGraphInput
     */
    graph: GraphEditDto;
    constructor(data?: any);
}
export declare class HostDashboardData {
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    newTenantsCount: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    newSubscriptionAmount: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    dashboardPlaceholder1: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    dashboardPlaceholder2: number;
    /**
     *
     * @type {IncomeStastistic[]}
     * @memberof HostDashboardData
     */
    incomeStatistics: IncomeStastistic[];
    /**
     *
     * @type {TenantEdition[]}
     * @memberof HostDashboardData
     */
    editionStatistics: TenantEdition[];
    /**
     *
     * @type {ExpiringTenant[]}
     * @memberof HostDashboardData
     */
    expiringTenants: ExpiringTenant[];
    /**
     *
     * @type {RecentTenant[]}
     * @memberof HostDashboardData
     */
    recentTenants: RecentTenant[];
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    maxExpiringTenantsShownCount: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    maxRecentTenantsShownCount: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    subscriptionEndAlertDayCount: number;
    /**
     *
     * @type {number}
     * @memberof HostDashboardData
     */
    recentTenantsDayCount: number;
    /**
     *
     * @type {string}
     * @memberof HostDashboardData
     */
    subscriptionEndDateStart: string;
    /**
     *
     * @type {string}
     * @memberof HostDashboardData
     */
    subscriptionEndDateEnd: string;
    /**
     *
     * @type {string}
     * @memberof HostDashboardData
     */
    tenantCreationStartDate: string;
    constructor(data?: any);
}
export declare class IncomeStastistic {
    /**
     *
     * @type {string}
     * @memberof IncomeStastistic
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof IncomeStastistic
     */
    date: string;
    /**
     *
     * @type {number}
     * @memberof IncomeStastistic
     */
    amount: number;
    constructor(data?: any);
}
export declare class TenantEdition {
    /**
     *
     * @type {string}
     * @memberof TenantEdition
     */
    label: string;
    /**
     *
     * @type {number}
     * @memberof TenantEdition
     */
    value: number;
    constructor(data?: any);
}
export declare class ExpiringTenant {
    /**
     *
     * @type {string}
     * @memberof ExpiringTenant
     */
    tenantName: string;
    /**
     *
     * @type {number}
     * @memberof ExpiringTenant
     */
    remainingDayCount: number;
    constructor(data?: any);
}
export declare class RecentTenant {
    /**
     *
     * @type {number}
     * @memberof RecentTenant
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof RecentTenant
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RecentTenant
     */
    creationTime: string;
    constructor(data?: any);
}
export declare class GetIncomeStatisticsDataOutput {
    /**
     *
     * @type {IncomeStastistic[]}
     * @memberof GetIncomeStatisticsDataOutput
     */
    incomeStatistics: IncomeStastistic[];
    constructor(data?: any);
}
export declare class GetEditionTenantStatisticsOutput {
    /**
     *
     * @type {TenantEdition[]}
     * @memberof GetEditionTenantStatisticsOutput
     */
    editionStatistics: TenantEdition[];
    constructor(data?: any);
}
export declare class HostSettingsEditDto {
    /**
     *
     * @type {GeneralSettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    general: GeneralSettingsEditDto;
    /**
     *
     * @type {HostUserManagementSettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    userManagement: HostUserManagementSettingsEditDto;
    /**
     *
     * @type {EmailSettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    email: EmailSettingsEditDto;
    /**
     *
     * @type {TenantManagementSettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    tenantManagement: TenantManagementSettingsEditDto;
    /**
     *
     * @type {SecuritySettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    security: SecuritySettingsEditDto;
    /**
     *
     * @type {HostBillingSettingsEditDto}
     * @memberof HostSettingsEditDto
     */
    billing: HostBillingSettingsEditDto;
    /**
     *
     * @type {PushSettingEditDto}
     * @memberof HostSettingsEditDto
     */
    push: PushSettingEditDto;
    constructor(data?: any);
}
export declare class GeneralSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof GeneralSettingsEditDto
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof GeneralSettingsEditDto
     */
    timezoneForComparison: string;
    constructor(data?: any);
}
export declare class HostUserManagementSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof HostUserManagementSettingsEditDto
     */
    isEmailConfirmationRequiredForLogin: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HostUserManagementSettingsEditDto
     */
    smsVerificationEnabled: boolean;
    constructor(data?: any);
}
export declare class EmailSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    defaultFromAddress: string;
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    defaultFromDisplayName: string;
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    smtpHost: string;
    /**
     *
     * @type {number}
     * @memberof EmailSettingsEditDto
     */
    smtpPort: number;
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    smtpUserName: string;
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    smtpPassword: string;
    /**
     *
     * @type {string}
     * @memberof EmailSettingsEditDto
     */
    smtpDomain: string;
    /**
     *
     * @type {boolean}
     * @memberof EmailSettingsEditDto
     */
    smtpEnableSsl: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EmailSettingsEditDto
     */
    smtpUseDefaultCredentials: boolean;
    constructor(data?: any);
}
export declare class TenantManagementSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof TenantManagementSettingsEditDto
     */
    allowSelfRegistration: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TenantManagementSettingsEditDto
     */
    isNewRegisteredTenantActiveByDefault: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TenantManagementSettingsEditDto
     */
    useCaptchaOnRegistration: boolean;
    /**
     *
     * @type {number}
     * @memberof TenantManagementSettingsEditDto
     */
    defaultEditionId: number;
    constructor(data?: any);
}
export declare class SecuritySettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof SecuritySettingsEditDto
     */
    useDefaultPasswordComplexitySettings: boolean;
    /**
     *
     * @type {PasswordComplexitySetting}
     * @memberof SecuritySettingsEditDto
     */
    passwordComplexity: PasswordComplexitySetting;
    /**
     *
     * @type {PasswordComplexitySetting}
     * @memberof SecuritySettingsEditDto
     */
    defaultPasswordComplexity: PasswordComplexitySetting;
    /**
     *
     * @type {UserLockOutSettingsEditDto}
     * @memberof SecuritySettingsEditDto
     */
    userLockOut: UserLockOutSettingsEditDto;
    /**
     *
     * @type {TwoFactorLoginSettingsEditDto}
     * @memberof SecuritySettingsEditDto
     */
    twoFactorLogin: TwoFactorLoginSettingsEditDto;
    constructor(data?: any);
}
export declare class HostBillingSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof HostBillingSettingsEditDto
     */
    legalName: string;
    /**
     *
     * @type {string}
     * @memberof HostBillingSettingsEditDto
     */
    address: string;
    constructor(data?: any);
}
export declare class PushSettingEditDto {
    /**
     *
     * @type {string}
     * @memberof PushSettingEditDto
     */
    iOSAppKey: string;
    /**
     *
     * @type {string}
     * @memberof PushSettingEditDto
     */
    androidAppKey: string;
    /**
     *
     * @type {PushMobilePagesSettingEditDto}
     * @memberof PushSettingEditDto
     */
    pages: PushMobilePagesSettingEditDto;
    constructor(data?: any);
}
export declare class PasswordComplexitySetting {
    /**
     *
     * @type {boolean}
     * @memberof PasswordComplexitySetting
     */
    requireDigit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PasswordComplexitySetting
     */
    requireLowercase: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PasswordComplexitySetting
     */
    requireNonAlphanumeric: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PasswordComplexitySetting
     */
    requireUppercase: boolean;
    /**
     *
     * @type {number}
     * @memberof PasswordComplexitySetting
     */
    requiredLength: number;
    constructor(data?: any);
}
export declare class UserLockOutSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof UserLockOutSettingsEditDto
     */
    isEnabled: boolean;
    /**
     *
     * @type {number}
     * @memberof UserLockOutSettingsEditDto
     */
    maxFailedAccessAttemptsBeforeLockout: number;
    /**
     *
     * @type {number}
     * @memberof UserLockOutSettingsEditDto
     */
    defaultAccountLockoutSeconds: number;
    constructor(data?: any);
}
export declare class TwoFactorLoginSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isEnabledForApplication: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isEmailProviderEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isSmsProviderEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isRememberBrowserEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TwoFactorLoginSettingsEditDto
     */
    isGoogleAuthenticatorEnabled: boolean;
    constructor(data?: any);
}
export declare class PushMobilePagesSettingEditDto {
    /**
     *
     * @type {string}
     * @memberof PushMobilePagesSettingEditDto
     */
    keyCabinetDetailPage: string;
    /**
     *
     * @type {string}
     * @memberof PushMobilePagesSettingEditDto
     */
    wireCabinetDetailPage: string;
    /**
     *
     * @type {string}
     * @memberof PushMobilePagesSettingEditDto
     */
    safetyWearDetailPage: string;
    constructor(data?: any);
}
export declare class SendTestEmailInput {
    /**
     *
     * @type {string}
     * @memberof SendTestEmailInput
     */
    emailAddress: string;
    constructor(data?: any);
}
export declare class CreateDbBaseInput {
    /**
     *
     * @type {string}
     * @memberof CreateDbBaseInput
     */
    dbName: string;
    constructor(data?: any);
}
export declare class WriteDataToDbInput {
    /**
     *
     * @type {string}
     * @memberof WriteDataToDbInput
     */
    equipmentId: string;
    /**
     *
     * @type {WriteDataToDbDto[]}
     * @memberof WriteDataToDbInput
     */
    dataToDbDtos: WriteDataToDbDto[];
    constructor(data?: any);
}
export declare class WriteDataToDbDto {
    /**
     *
     * @type {string}
     * @memberof WriteDataToDbDto
     */
    address: string;
    /**
     *
     * @type {'TemperatureBatteryLevelRssiLevel'|'TemperatureHighByte'|'TemperatureHighByte00'|'TemperatureMagnify10Times'}
     * @memberof WriteDataToDbDto
     */
    dataType: 'TemperatureBatteryLevelRssiLevel' | 'TemperatureHighByte' | 'TemperatureHighByte00' | 'TemperatureMagnify10Times';
    /**
     *
     * @type {number}
     * @memberof WriteDataToDbDto
     */
    rssiLevel: number;
    /**
     *
     * @type {number}
     * @memberof WriteDataToDbDto
     */
    batteryLevel: number;
    /**
     *
     * @type {number}
     * @memberof WriteDataToDbDto
     */
    temperature: number;
    /**
     *
     * @type {string}
     * @memberof WriteDataToDbDto
     */
    dateTime: string;
    constructor(data?: any);
}
export declare class ReadDataFromDbInput {
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbInput
     */
    startTime: string;
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbInput
     */
    endTime: string;
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbInput
     */
    equipmentId: string;
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbInput
     */
    address: string;
    /**
     *
     * @type {'TemperatureBatteryLevelRssiLevel'|'TemperatureHighByte'|'TemperatureHighByte00'|'TemperatureMagnify10Times'}
     * @memberof ReadDataFromDbInput
     */
    dataType: 'TemperatureBatteryLevelRssiLevel' | 'TemperatureHighByte' | 'TemperatureHighByte00' | 'TemperatureMagnify10Times';
    constructor(data?: any);
}
export declare class ReadDataFromDbOutput {
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbOutput
     */
    equipmentId: string;
    /**
     *
     * @type {ReadDataFromDbDto[]}
     * @memberof ReadDataFromDbOutput
     */
    readDataFromDbDtos: ReadDataFromDbDto[];
    constructor(data?: any);
}
export declare class ReadDataFromDbDto {
    /**
     *
     * @type {number}
     * @memberof ReadDataFromDbDto
     */
    rssiLevel: number;
    /**
     *
     * @type {number}
     * @memberof ReadDataFromDbDto
     */
    batteryLevel: number;
    /**
     *
     * @type {number}
     * @memberof ReadDataFromDbDto
     */
    temperature: number;
    /**
     *
     * @type {string}
     * @memberof ReadDataFromDbDto
     */
    dateTime: string;
    constructor(data?: any);
}
export declare class InstallDto {
    /**
     *
     * @type {string}
     * @memberof InstallDto
     */
    connectionString: string;
    /**
     *
     * @type {string}
     * @memberof InstallDto
     */
    adminPassword: string;
    /**
     *
     * @type {string}
     * @memberof InstallDto
     */
    webSiteUrl: string;
    /**
     *
     * @type {string}
     * @memberof InstallDto
     */
    serverUrl: string;
    /**
     *
     * @type {string}
     * @memberof InstallDto
     */
    defaultLanguage: string;
    /**
     *
     * @type {EmailSettingsEditDto}
     * @memberof InstallDto
     */
    smtpSettings: EmailSettingsEditDto;
    /**
     *
     * @type {HostBillingSettingsEditDto}
     * @memberof InstallDto
     */
    billInfo: HostBillingSettingsEditDto;
    constructor(data?: any);
}
export declare class AppSettingsJsonDto {
    /**
     *
     * @type {string}
     * @memberof AppSettingsJsonDto
     */
    webSiteUrl: string;
    /**
     *
     * @type {string}
     * @memberof AppSettingsJsonDto
     */
    serverSiteUrl: string;
    /**
     *
     * @type {NameValue[]}
     * @memberof AppSettingsJsonDto
     */
    languages: NameValue[];
    constructor(data?: any);
}
export declare class NameValue {
    /**
     *
     * @type {string}
     * @memberof NameValue
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof NameValue
     */
    value: string;
    constructor(data?: any);
}
export declare class CheckDatabaseOutput {
    /**
     *
     * @type {boolean}
     * @memberof CheckDatabaseOutput
     */
    isDatabaseExist: boolean;
    constructor(data?: any);
}
export declare class AddIntelligentLocksInput {
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLocksInput
     */
    roleId: number;
    /**
     *
     * @type {AddIntelligentLockDto[]}
     * @memberof AddIntelligentLocksInput
     */
    intelligentLockDtos: AddIntelligentLockDto[];
    constructor(data?: any);
}
export declare class AddIntelligentLockDto {
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLockDto
     */
    deviceId: number;
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLockDto
     */
    roleId: number;
    /**
     *
     * @type {boolean}
     * @memberof AddIntelligentLockDto
     */
    isEst: boolean;
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLockDto
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLockDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof AddIntelligentLockDto
     */
    deviceAreaId: number;
    constructor(data?: any);
}
export declare class UpdateIntelligentLocksInput {
    /**
     *
     * @type {number}
     * @memberof UpdateIntelligentLocksInput
     */
    roleId: number;
    /**
     *
     * @type {UpdateIntelligentLockDto[]}
     * @memberof UpdateIntelligentLocksInput
     */
    intelligentLockDtos: UpdateIntelligentLockDto[];
    constructor(data?: any);
}
export declare class UpdateIntelligentLockDto {
    /**
     *
     * @type {number}
     * @memberof UpdateIntelligentLockDto
     */
    deviceId: number;
    /**
     *
     * @type {number}
     * @memberof UpdateIntelligentLockDto
     */
    deviceAreaId: number;
    /**
     *
     * @type {boolean}
     * @memberof UpdateIntelligentLockDto
     */
    isEst: boolean;
    /**
     *
     * @type {number}
     * @memberof UpdateIntelligentLockDto
     */
    stationId: number;
    constructor(data?: any);
}
export declare class ListResultDtoIntelligentLockOutput {
    /**
     *
     * @type {IntelligentLockOutput[]}
     * @memberof ListResultDtoIntelligentLockOutput
     */
    items: IntelligentLockOutput[];
    constructor(data?: any);
}
export declare class IntelligentLockOutput {
    /**
     *
     * @type {number}
     * @memberof IntelligentLockOutput
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof IntelligentLockOutput
     */
    deviceId: number;
    /**
     *
     * @type {boolean}
     * @memberof IntelligentLockOutput
     */
    isEst: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoIntelligentLockDetailOutput {
    /**
     *
     * @type {IntelligentLockDetailOutput[]}
     * @memberof ListResultDtoIntelligentLockDetailOutput
     */
    items: IntelligentLockDetailOutput[];
    constructor(data?: any);
}
export declare class IntelligentLockDetailOutput {
    /**
     *
     * @type {number}
     * @memberof IntelligentLockDetailOutput
     */
    deviceAreaId: number;
    /**
     *
     * @type {string}
     * @memberof IntelligentLockDetailOutput
     */
    deviceAreaName: string;
    /**
     *
     * @type {number}
     * @memberof IntelligentLockDetailOutput
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof IntelligentLockDetailOutput
     */
    sortId: number;
    /**
     *
     * @type {DeviceDetailOutput[]}
     * @memberof IntelligentLockDetailOutput
     */
    devices: DeviceDetailOutput[];
    constructor(data?: any);
}
export declare class DeviceDetailOutput {
    /**
     *
     * @type {number}
     * @memberof DeviceDetailOutput
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof DeviceDetailOutput
     */
    deviceId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceDetailOutput
     */
    deviceName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceDetailOutput
     */
    deviceDescription: string;
    /**
     *
     * @type {DeviceCodeInfoOutput[]}
     * @memberof DeviceDetailOutput
     */
    codeInfoDtos: DeviceCodeInfoOutput[];
    constructor(data?: any);
}
export declare class DeviceCodeInfoOutput {
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoOutput
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoOutput
     */
    lockCodeNumber: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoOutput
     */
    lockType: string;
    /**
     *
     * @type {string}
     * @memberof DeviceCodeInfoOutput
     */
    lockPropertyType: string;
    /**
     *
     * @type {number}
     * @memberof DeviceCodeInfoOutput
     */
    id: number;
    constructor(data?: any);
}
export declare class InvoiceDto {
    /**
     *
     * @type {number}
     * @memberof InvoiceDto
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    editionDisplayName: string;
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    invoiceNo: string;
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    invoiceDate: string;
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    tenantLegalName: string;
    /**
     *
     * @type {string[]}
     * @memberof InvoiceDto
     */
    tenantAddress: string[];
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    tenantTaxNo: string;
    /**
     *
     * @type {string}
     * @memberof InvoiceDto
     */
    hostLegalName: string;
    /**
     *
     * @type {string[]}
     * @memberof InvoiceDto
     */
    hostAddress: string[];
    constructor(data?: any);
}
export declare class CreateInvoiceDto {
    /**
     *
     * @type {number}
     * @memberof CreateInvoiceDto
     */
    subscriptionPaymentId: number;
    constructor(data?: any);
}
export declare class KeyCabinetApplyInput {
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApplyInput
     */
    taskName: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApplyInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApplyInput
     */
    applicantId: number;
    /**
     *
     * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'|'UnLockNormalOperation'|'OpenLockDeviceSetupDebug'|'OpenLockWfDeviceDailyMaintenance'|'OpenLockWfDeviceFaultHandling'|'OpenLockNormalDeviceDailyMaintenance'}
     * @memberof KeyCabinetApplyInput
     */
    applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason' | 'UnLockNormalOperation' | 'OpenLockDeviceSetupDebug' | 'OpenLockWfDeviceDailyMaintenance' | 'OpenLockWfDeviceFaultHandling' | 'OpenLockNormalDeviceDailyMaintenance';
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApplyInput
     */
    applyReasonNote: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApplyInput
     */
    approverIdArray: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApplyInput
     */
    expiredDate: string;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetApplyInput
     */
    isAllowToSelectApproverType: boolean;
    /**
     *
     * @type {'BaseApprover'|'OpenLockApprover'|'UnLockApprover'}
     * @memberof KeyCabinetApplyInput
     */
    approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover';
    constructor(data?: any);
}
export declare class ApiResultOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutput
     */
    code: number;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutput
     */
    data: string;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetApproveInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApproveInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApproveInput
     */
    approverId: number;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetApproveInput
     */
    isApprovePass: boolean;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveInput
     */
    approveNote: string;
    constructor(data?: any);
}
export declare class KeyCabinetUnlockInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetUnlockInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetUnlockInput
     */
    operatorId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetUnlockInput
     */
    unLockReason: string;
    constructor(data?: any);
}
export declare class ApiResultOutputKeyCabinetUnlockOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputKeyCabinetUnlockOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputKeyCabinetUnlockOutput
     */
    code: number;
    /**
     *
     * @type {KeyCabinetUnlockOutput}
     * @memberof ApiResultOutputKeyCabinetUnlockOutput
     */
    data: KeyCabinetUnlockOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputKeyCabinetUnlockOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetUnlockOutput {
    /**
     *
     * @type {string}
     * @memberof KeyCabinetUnlockOutput
     */
    unlockCode: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetUnlockOutput
     */
    openDoorCode: string;
    constructor(data?: any);
}
export declare class KeyCabinetGenerateUnlockCodeInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetGenerateUnlockCodeInput
     */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class ApiResultOutputKeyCabinetGenerateUnlockCodeOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputKeyCabinetGenerateUnlockCodeOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputKeyCabinetGenerateUnlockCodeOutput
     */
    code: number;
    /**
     *
     * @type {KeyCabinetGenerateUnlockCodeOutput}
     * @memberof ApiResultOutputKeyCabinetGenerateUnlockCodeOutput
     */
    data: KeyCabinetGenerateUnlockCodeOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputKeyCabinetGenerateUnlockCodeOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetGenerateUnlockCodeOutput {
    /**
     *
     * @type {string}
     * @memberof KeyCabinetGenerateUnlockCodeOutput
     */
    unlockCode: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetGenerateUnlockCodeOutput
     */
    openDoorCode: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetGenerateUnlockCodeOutput
     */
    unlockCodeGenerateTime: string;
    constructor(data?: any);
}
export declare class KeyCabinetOpenDoorInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetOpenDoorInput
     */
    operatorId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetOpenDoorInput
     */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class KeyCabinetReturnInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetReturnInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetReturnInput
     */
    operatorId: number;
    constructor(data?: any);
}
export declare class ApiResultOutputDictionaryInt32String {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputDictionaryInt32String
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputDictionaryInt32String
     */
    code: number;
    /**
     *
     * @type {object}
     * @memberof ApiResultOutputDictionaryInt32String
     */
    data: object;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputDictionaryInt32String
     */
    message: string;
    constructor(data?: any);
}
export declare class ApiResultOutputListKeyCabinetValueTextDto {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputListKeyCabinetValueTextDto
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputListKeyCabinetValueTextDto
     */
    code: number;
    /**
     *
     * @type {KeyCabinetValueTextDto[]}
     * @memberof ApiResultOutputListKeyCabinetValueTextDto
     */
    data: KeyCabinetValueTextDto[];
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputListKeyCabinetValueTextDto
     */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetValueTextDto {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetValueTextDto
     */
    value: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetValueTextDto
     */
    text: string;
    constructor(data?: any);
}
export declare class ApiResultOutputKeyCabinetTaskOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputKeyCabinetTaskOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputKeyCabinetTaskOutput
     */
    code: number;
    /**
     *
     * @type {KeyCabinetTaskOutput}
     * @memberof ApiResultOutputKeyCabinetTaskOutput
     */
    data: KeyCabinetTaskOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputKeyCabinetTaskOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetTaskOutput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetTaskOutput
     */
    isNeedApprove: boolean;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetTaskOutput
     */
    isApproverCanUnlockDirectly: boolean;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetTaskOutput
     */
    isApplicantCanEndTask: boolean;
    /**
     *
     * @type {'Online'|'Bluetooth'|'Password'}
     * @memberof KeyCabinetTaskOutput
     */
    unlockMode: 'Online' | 'Bluetooth' | 'Password';
    /**
     *
     * @type {'LockerDoor'|'LockerBuckle'}
     * @memberof KeyCabinetTaskOutput
     */
    lockMode: 'LockerDoor' | 'LockerBuckle';
    /**
     *
     * @type {'None'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Returned'|'Ended'|'Expired'|'ErrorCode'}
     * @memberof KeyCabinetTaskOutput
     */
    taskStep: 'None' | 'Applying' | 'ApprovalPassed' | 'ApprovalNotPassed' | 'Unlocked' | 'TimeOut' | 'TakenOut' | 'Returned' | 'Ended' | 'Expired' | 'ErrorCode';
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    applicantId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyTime: string;
    /**
     *
     * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'|'UnLockNormalOperation'|'OpenLockDeviceSetupDebug'|'OpenLockWfDeviceDailyMaintenance'|'OpenLockWfDeviceFaultHandling'|'OpenLockNormalDeviceDailyMaintenance'}
     * @memberof KeyCabinetTaskOutput
     */
    applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason' | 'UnLockNormalOperation' | 'OpenLockDeviceSetupDebug' | 'OpenLockWfDeviceDailyMaintenance' | 'OpenLockWfDeviceFaultHandling' | 'OpenLockNormalDeviceDailyMaintenance';
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyReasonNote: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyReasonPhotoId: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyReasonVoiceId: string;
    /**
     *
     * @type {KeyCabinetApproveFlowItemDto[]}
     * @memberof KeyCabinetTaskOutput
     */
    approveFlowItems: KeyCabinetApproveFlowItemDto[];
    /**
     *
     * @type {KeyCabinetApproveFlowItemDto}
     * @memberof KeyCabinetTaskOutput
     */
    currentApproveFlowItem: KeyCabinetApproveFlowItemDto;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    unlockTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    unlockCode: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    unlockTimeoutTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    takenTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    returnTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    expiredDate: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentPropertyName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentPropertyDisplayName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentPropertyValue: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applicantName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyReasonEnumName: string;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetTaskOutput
     */
    isExpired: boolean;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    taskName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    equipmentPropertyNameForLog: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    applyReasonNameForLog: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    unlockReasonForLog: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    operatorId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    operatorName: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetTaskOutput
     */
    guardianId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    guardianName: string;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetTaskOutput
     */
    isAllowToSelectApproverType: boolean;
    /**
     *
     * @type {'BaseApprover'|'OpenLockApprover'|'UnLockApprover'}
     * @memberof KeyCabinetTaskOutput
     */
    approverType: 'BaseApprover' | 'OpenLockApprover' | 'UnLockApprover';
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    endTaskTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    unlockCodeGenerateTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetTaskOutput
     */
    openDoorCode: string;
    constructor(data?: any);
}
export declare class KeyCabinetApproveFlowItemDto {
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    roles: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    rolesNames: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    approverId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    approverName: string;
    /**
     *
     * @type {boolean}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    isApprovePassed: boolean;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    approveTime: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    approveNote: string;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetApproveFlowItemDto
     */
    sortIndex: number;
    constructor(data?: any);
}
export declare class KeyCabinetEndTaskInput {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetEndTaskInput
     */
    applicantId: number;
    /**
     *
     * @type {number}
     * @memberof KeyCabinetEndTaskInput
     */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class ApiResultOutputListResultDtoKeyCabinetOperatorDto {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
     */
    code: number;
    /**
     *
     * @type {ListResultDtoKeyCabinetOperatorDto}
     * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
     */
    data: ListResultDtoKeyCabinetOperatorDto;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputListResultDtoKeyCabinetOperatorDto
     */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDtoKeyCabinetOperatorDto {
    /**
     *
     * @type {KeyCabinetOperatorDto[]}
     * @memberof ListResultDtoKeyCabinetOperatorDto
     */
    items: KeyCabinetOperatorDto[];
    constructor(data?: any);
}
export declare class KeyCabinetOperatorDto {
    /**
     *
     * @type {number}
     * @memberof KeyCabinetOperatorDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetOperatorDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetOperatorDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof KeyCabinetOperatorDto
     */
    userName: string;
    constructor(data?: any);
}
export declare class ApiResultOutputBoolean {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputBoolean
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputBoolean
     */
    code: number;
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputBoolean
     */
    data: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputBoolean
     */
    message: string;
    constructor(data?: any);
}
export declare class ApiResultOutputListResultDtoKeyCarbinetLogListOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
     */
    code: number;
    /**
     *
     * @type {ListResultDtoKeyCarbinetLogListOutput}
     * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
     */
    data: ListResultDtoKeyCarbinetLogListOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputListResultDtoKeyCarbinetLogListOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDtoKeyCarbinetLogListOutput {
    /**
     *
     * @type {KeyCarbinetLogListOutput[]}
     * @memberof ListResultDtoKeyCarbinetLogListOutput
     */
    items: KeyCarbinetLogListOutput[];
    constructor(data?: any);
}
export declare class KeyCarbinetLogListOutput {
    /**
     *
     * @type {number}
     * @memberof KeyCarbinetLogListOutput
     */
    logId: number;
    /**
     *
     * @type {KeyCabinetTaskOutput}
     * @memberof KeyCarbinetLogListOutput
     */
    log: KeyCabinetTaskOutput;
    constructor(data?: any);
}
export declare class KeyCarbinetLogInput {
    /**
     *
     * @type {number}
     * @memberof KeyCarbinetLogInput
     */
    logId: number;
    /**
     *
     * @type {string}
     * @memberof KeyCarbinetLogInput
     */
    taskName: string;
    /**
     *
     * @type {string}
     * @memberof KeyCarbinetLogInput
     */
    equipmentPropertyNameForLog: string;
    /**
     *
     * @type {string}
     * @memberof KeyCarbinetLogInput
     */
    applyReasonNameForLog: string;
    constructor(data?: any);
}
export declare class GetLanguagesOutput {
    /**
     *
     * @type {string}
     * @memberof GetLanguagesOutput
     */
    defaultLanguageName: string;
    /**
     *
     * @type {ApplicationLanguageListDto[]}
     * @memberof GetLanguagesOutput
     */
    items: ApplicationLanguageListDto[];
    constructor(data?: any);
}
export declare class ApplicationLanguageListDto {
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageListDto
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    icon: string;
    /**
     *
     * @type {boolean}
     * @memberof ApplicationLanguageListDto
     */
    isDisabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ApplicationLanguageListDto
     */
    isDeleted: boolean;
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageListDto
     */
    deleterUserId: number;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    deletionTime: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageListDto
     */
    lastModifierUserId: number;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageListDto
     */
    creatorUserId: number;
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetLanguageForEditOutput {
    /**
     *
     * @type {ApplicationLanguageEditDto}
     * @memberof GetLanguageForEditOutput
     */
    language: ApplicationLanguageEditDto;
    /**
     *
     * @type {ComboboxItemDto[]}
     * @memberof GetLanguageForEditOutput
     */
    languageNames: ComboboxItemDto[];
    /**
     *
     * @type {ComboboxItemDto[]}
     * @memberof GetLanguageForEditOutput
     */
    flags: ComboboxItemDto[];
    constructor(data?: any);
}
export declare class ApplicationLanguageEditDto {
    /**
     *
     * @type {number}
     * @memberof ApplicationLanguageEditDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationLanguageEditDto
     */
    icon: string;
    /**
     *
     * @type {boolean}
     * @memberof ApplicationLanguageEditDto
     */
    isEnabled: boolean;
    constructor(data?: any);
}
export declare class CreateOrUpdateLanguageInput {
    /**
     *
     * @type {ApplicationLanguageEditDto}
     * @memberof CreateOrUpdateLanguageInput
     */
    language: ApplicationLanguageEditDto;
    constructor(data?: any);
}
export declare class SetDefaultLanguageInput {
    /**
     *
     * @type {string}
     * @memberof SetDefaultLanguageInput
     */
    name: string;
    constructor(data?: any);
}
export declare class PagedResultDtoLanguageTextListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoLanguageTextListDto
     */
    totalCount: number;
    /**
     *
     * @type {LanguageTextListDto[]}
     * @memberof PagedResultDtoLanguageTextListDto
     */
    items: LanguageTextListDto[];
    constructor(data?: any);
}
export declare class LanguageTextListDto {
    /**
     *
     * @type {string}
     * @memberof LanguageTextListDto
     */
    key: string;
    /**
     *
     * @type {string}
     * @memberof LanguageTextListDto
     */
    baseValue: string;
    /**
     *
     * @type {string}
     * @memberof LanguageTextListDto
     */
    targetValue: string;
    constructor(data?: any);
}
export declare class UpdateLanguageTextInput {
    /**
     *
     * @type {string}
     * @memberof UpdateLanguageTextInput
     */
    languageName: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLanguageTextInput
     */
    sourceName: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLanguageTextInput
     */
    key: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLanguageTextInput
     */
    value: string;
    constructor(data?: any);
}
export declare class AddOrUpdateLockControlTaskInput {
    /**
     *
     * @type {LockControlTaskDto}
     * @memberof AddOrUpdateLockControlTaskInput
     */
    lockControlTask: LockControlTaskDto;
    /**
     *
     * @type {LockControlTaskItemDto[]}
     * @memberof AddOrUpdateLockControlTaskInput
     */
    lockControlTaskItems: LockControlTaskItemDto[];
    constructor(data?: any);
}
export declare class LockControlTaskDto {
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof LockControlTaskDto
     */
    writer: number;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    writerName: string;
    /**
     *
     * @type {number}
     * @memberof LockControlTaskDto
     */
    executor: number;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    executorName: string;
    /**
     *
     * @type {boolean}
     * @memberof LockControlTaskDto
     */
    isNeedApprover: boolean;
    /**
     *
     * @type {number}
     * @memberof LockControlTaskDto
     */
    approver: number;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    approverName: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    note: string;
    /**
     *
     * @type {number}
     * @memberof LockControlTaskDto
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    stationName: string;
    /**
     *
     * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
     * @memberof LockControlTaskDto
     */
    state: 'None' | 'WaitCommit' | 'WaitConfirm' | 'ConfirmNotPassed' | 'WaitApprove' | 'ApproveNotPassed' | 'ReadyGo' | 'Executing' | 'Pause' | 'WaitApproveToCancel' | 'WaitApproveToBreak' | 'WaitApproveExtension' | 'ExtensionReject' | 'Finished' | 'Break' | 'Cancel' | 'WaitReadOver' | 'ReadOver' | 'Archived';
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    taskName: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    taskBeginTime: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskDto
     */
    taskEndTime: string;
    constructor(data?: any);
}
export declare class LockControlTaskItemDto {
    /**
     *
     * @type {number}
     * @memberof LockControlTaskItemDto
     */
    deviceId: number;
    /**
     *
     * @type {number}
     * @memberof LockControlTaskItemDto
     */
    no: number;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskItemDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskItemDto
     */
    description: string;
    constructor(data?: any);
}
export declare class ApiResultOutputPagedResultDtoListLockControlTaskDto {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputPagedResultDtoListLockControlTaskDto
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputPagedResultDtoListLockControlTaskDto
     */
    code: number;
    /**
     *
     * @type {PagedResultDtoListLockControlTaskDto}
     * @memberof ApiResultOutputPagedResultDtoListLockControlTaskDto
     */
    data: PagedResultDtoListLockControlTaskDto;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputPagedResultDtoListLockControlTaskDto
     */
    message: string;
    constructor(data?: any);
}
export declare class PagedResultDtoListLockControlTaskDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoListLockControlTaskDto
     */
    totalCount: number;
    /**
     *
     * @type {LockControlTaskDto[][]}
     * @memberof PagedResultDtoListLockControlTaskDto
     */
    items: LockControlTaskDto[][];
    constructor(data?: any);
}
export declare class ApiResultOutputLockControlTaskDetailOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputLockControlTaskDetailOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputLockControlTaskDetailOutput
     */
    code: number;
    /**
     *
     * @type {LockControlTaskDetailOutput}
     * @memberof ApiResultOutputLockControlTaskDetailOutput
     */
    data: LockControlTaskDetailOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputLockControlTaskDetailOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskDetailOutput {
    /**
     *
     * @type {LockControlTaskDto}
     * @memberof LockControlTaskDetailOutput
     */
    lockControlTask: LockControlTaskDto;
    /**
     *
     * @type {LockControlTaskItemDto[]}
     * @memberof LockControlTaskDetailOutput
     */
    lockControlTaskItems: LockControlTaskItemDto[];
    constructor(data?: any);
}
export declare class LockControlTaskInput {
    /**
     *
     * @type {string}
     * @memberof LockControlTaskInput
     */
    taskId: string;
    constructor(data?: any);
}
export declare class ApiResultOutputLockControlTaskPendingDetailOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputLockControlTaskPendingDetailOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputLockControlTaskPendingDetailOutput
     */
    code: number;
    /**
     *
     * @type {LockControlTaskPendingDetailOutput}
     * @memberof ApiResultOutputLockControlTaskPendingDetailOutput
     */
    data: LockControlTaskPendingDetailOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputLockControlTaskPendingDetailOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskPendingDetailOutput {
    /**
     *
     * @type {string}
     * @memberof LockControlTaskPendingDetailOutput
     */
    applyTime: string;
    /**
     *
     * @type {boolean}
     * @memberof LockControlTaskPendingDetailOutput
     */
    needApprovalOperation: boolean;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskPendingDetailOutput
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskPendingDetailOutput
     */
    subTitle: string;
    /**
     *
     * @type {LockControlTaskDto}
     * @memberof LockControlTaskPendingDetailOutput
     */
    lockControlTask: LockControlTaskDto;
    /**
     *
     * @type {LockControlTaskItemDto[]}
     * @memberof LockControlTaskPendingDetailOutput
     */
    lockControlTaskItems: LockControlTaskItemDto[];
    constructor(data?: any);
}
export declare class AprroveLockControlPendingInput {
    /**
     *
     * @type {string}
     * @memberof AprroveLockControlPendingInput
     */
    taskId: string;
    /**
     *
     * @type {boolean}
     * @memberof AprroveLockControlPendingInput
     */
    approvalThrough: boolean;
    /**
     *
     * @type {string}
     * @memberof AprroveLockControlPendingInput
     */
    approvalReason: string;
    constructor(data?: any);
}
export declare class ApiResultOutputLockControlTaskOptOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputLockControlTaskOptOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputLockControlTaskOptOutput
     */
    code: number;
    /**
     *
     * @type {LockControlTaskOptOutput}
     * @memberof ApiResultOutputLockControlTaskOptOutput
     */
    data: LockControlTaskOptOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputLockControlTaskOptOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskOptOutput {
    /**
     *
     * @type {string}
     * @memberof LockControlTaskOptOutput
     */
    taskBeginTime: string;
    /**
     *
     * @type {string}
     * @memberof LockControlTaskOptOutput
     */
    taskEndTime: string;
    /**
     *
     * @type {DeviceLockInfoDto[]}
     * @memberof LockControlTaskOptOutput
     */
    deviceLockInfoDtos: DeviceLockInfoDto[];
    constructor(data?: any);
}
export declare class DeviceLockInfoDto {
    /**
     *
     * @type {number}
     * @memberof DeviceLockInfoDto
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof DeviceLockInfoDto
     */
    deviceId: number;
    /**
     *
     * @type {string}
     * @memberof DeviceLockInfoDto
     */
    deviceName: string;
    /**
     *
     * @type {string}
     * @memberof DeviceLockInfoDto
     */
    deviceDescription: string;
    /**
     *
     * @type {LockInfoDto[]}
     * @memberof DeviceLockInfoDto
     */
    lockList: LockInfoDto[];
    constructor(data?: any);
}
export declare class LockInfoDto {
    /**
     *
     * @type {string}
     * @memberof LockInfoDto
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof LockInfoDto
     */
    lockCodeNumber: string;
    /**
     *
     * @type {string}
     * @memberof LockInfoDto
     */
    lockType: string;
    /**
     *
     * @type {string}
     * @memberof LockInfoDto
     */
    lockPropertyType: string;
    constructor(data?: any);
}
export declare class GetNotificationsOutput {
    /**
     *
     * @type {number}
     * @memberof GetNotificationsOutput
     */
    unreadCount: number;
    /**
     *
     * @type {number}
     * @memberof GetNotificationsOutput
     */
    totalCount: number;
    /**
     *
     * @type {UserNotification[]}
     * @memberof GetNotificationsOutput
     */
    items: UserNotification[];
    constructor(data?: any);
}
export declare class UserNotification {
    /**
     *
     * @type {number}
     * @memberof UserNotification
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof UserNotification
     */
    userId: number;
    /**
     *
     * @type {'Unread'|'Read'}
     * @memberof UserNotification
     */
    state: 'Unread' | 'Read';
    /**
     *
     * @type {TenantNotification}
     * @memberof UserNotification
     */
    notification: TenantNotification;
    /**
     *
     * @type {string}
     * @memberof UserNotification
     */
    id: string;
    constructor(data?: any);
}
export declare class TenantNotification {
    /**
     *
     * @type {number}
     * @memberof TenantNotification
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof TenantNotification
     */
    notificationName: string;
    /**
     *
     * @type {NotificationData}
     * @memberof TenantNotification
     */
    data: NotificationData;
    /**
     *
     * @type {string}
     * @memberof TenantNotification
     */
    entityType: string;
    /**
     *
     * @type {string}
     * @memberof TenantNotification
     */
    entityTypeName: string;
    /**
     *
     * @type {object}
     * @memberof TenantNotification
     */
    entityId: object;
    /**
     *
     * @type {'Info'|'Success'|'Warn'|'Error'|'Fatal'}
     * @memberof TenantNotification
     */
    severity: 'Info' | 'Success' | 'Warn' | 'Error' | 'Fatal';
    /**
     *
     * @type {string}
     * @memberof TenantNotification
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof TenantNotification
     */
    id: string;
    constructor(data?: any);
}
export declare class NotificationData {
    /**
     *
     * @type {string}
     * @memberof NotificationData
     */
    type: string;
    /**
     *
     * @type {object}
     * @memberof NotificationData
     */
    properties: object;
    constructor(data?: any);
}
export declare class EntityDtoGuid {
    /**
     *
     * @type {string}
     * @memberof EntityDtoGuid
     */
    id: string;
    constructor(data?: any);
}
export declare class GetNotificationSettingsOutput {
    /**
     *
     * @type {boolean}
     * @memberof GetNotificationSettingsOutput
     */
    receiveNotifications: boolean;
    /**
     *
     * @type {NotificationSubscriptionWithDisplayNameDto[]}
     * @memberof GetNotificationSettingsOutput
     */
    notifications: NotificationSubscriptionWithDisplayNameDto[];
    constructor(data?: any);
}
export declare class NotificationSubscriptionWithDisplayNameDto {
    /**
     *
     * @type {string}
     * @memberof NotificationSubscriptionWithDisplayNameDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof NotificationSubscriptionWithDisplayNameDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof NotificationSubscriptionWithDisplayNameDto
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof NotificationSubscriptionWithDisplayNameDto
     */
    isSubscribed: boolean;
    constructor(data?: any);
}
export declare class UpdateNotificationSettingsInput {
    /**
     *
     * @type {boolean}
     * @memberof UpdateNotificationSettingsInput
     */
    receiveNotifications: boolean;
    /**
     *
     * @type {NotificationSubscriptionDto[]}
     * @memberof UpdateNotificationSettingsInput
     */
    notifications: NotificationSubscriptionDto[];
    constructor(data?: any);
}
export declare class NotificationSubscriptionDto {
    /**
     *
     * @type {string}
     * @memberof NotificationSubscriptionDto
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof NotificationSubscriptionDto
     */
    isSubscribed: boolean;
    constructor(data?: any);
}
export declare class GetOperationRecordOutput {
    /**
     *
     * @type {OperationRecordInfoDto}
     * @memberof GetOperationRecordOutput
     */
    infoDto: OperationRecordInfoDto;
    /**
     *
     * @type {OperationRecordItemListDto[]}
     * @memberof GetOperationRecordOutput
     */
    itemDtos: OperationRecordItemListDto[];
    constructor(data?: any);
}
export declare class OperationRecordInfoDto {
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    applicant: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    approver: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof OperationRecordInfoDto
     */
    equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    startTime: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    status: string;
    /**
     *
     * @type {'Red'|'Gray'|'Green'}
     * @memberof OperationRecordInfoDto
     */
    recordLevel: 'Red' | 'Gray' | 'Green';
    /**
     *
     * @type {string[]}
     * @memberof OperationRecordInfoDto
     */
    photoIds: string[];
    /**
     *
     * @type {string}
     * @memberof OperationRecordInfoDto
     */
    stationName: string;
    constructor(data?: any);
}
export declare class OperationRecordItemListDto {
    /**
     *
     * @type {string}
     * @memberof OperationRecordItemListDto
     */
    operationTime: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordItemListDto
     */
    operationDescription: string;
    constructor(data?: any);
}
export declare class PagedResultDtoOperationRecordListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoOperationRecordListDto
     */
    totalCount: number;
    /**
     *
     * @type {OperationRecordListDto[]}
     * @memberof PagedResultDtoOperationRecordListDto
     */
    items: OperationRecordListDto[];
    constructor(data?: any);
}
export declare class OperationRecordListDto {
    /**
     *
     * @type {string}
     * @memberof OperationRecordListDto
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordListDto
     */
    applicant: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordListDto
     */
    approver: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof OperationRecordListDto
     */
    equipmentType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {string}
     * @memberof OperationRecordListDto
     */
    startTime: string;
    /**
     *
     * @type {string}
     * @memberof OperationRecordListDto
     */
    status: string;
    /**
     *
     * @type {'Red'|'Gray'|'Green'}
     * @memberof OperationRecordListDto
     */
    recordLevel: 'Red' | 'Gray' | 'Green';
    /**
     *
     * @type {number}
     * @memberof OperationRecordListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoOrganizationUnitDto {
    /**
     *
     * @type {OrganizationUnitDto[]}
     * @memberof ListResultDtoOrganizationUnitDto
     */
    items: OrganizationUnitDto[];
    constructor(data?: any);
}
export declare class OrganizationUnitDto {
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitDto
     */
    parentId: number;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitDto
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitDto
     */
    displayName: string;
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitDto
     */
    memberCount: number;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitDto
     */
    lastModifierUserId: number;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitDto
     */
    creatorUserId: number;
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitDto
     */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDtoOrganizationUnitUserListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoOrganizationUnitUserListDto
     */
    totalCount: number;
    /**
     *
     * @type {OrganizationUnitUserListDto[]}
     * @memberof PagedResultDtoOrganizationUnitUserListDto
     */
    items: OrganizationUnitUserListDto[];
    constructor(data?: any);
}
export declare class OrganizationUnitUserListDto {
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    profilePictureId: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationUnitUserListDto
     */
    addedTime: string;
    /**
     *
     * @type {number}
     * @memberof OrganizationUnitUserListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrganizationUnitInput {
    /**
     *
     * @type {number}
     * @memberof CreateOrganizationUnitInput
     */
    parentId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrganizationUnitInput
     */
    displayName: string;
    constructor(data?: any);
}
export declare class UpdateOrganizationUnitInput {
    /**
     *
     * @type {number}
     * @memberof UpdateOrganizationUnitInput
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof UpdateOrganizationUnitInput
     */
    displayName: string;
    constructor(data?: any);
}
export declare class MoveOrganizationUnitInput {
    /**
     *
     * @type {number}
     * @memberof MoveOrganizationUnitInput
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof MoveOrganizationUnitInput
     */
    newParentId: number;
    constructor(data?: any);
}
export declare class UsersToOrganizationUnitInput {
    /**
     *
     * @type {number[]}
     * @memberof UsersToOrganizationUnitInput
     */
    userIds: number[];
    /**
     *
     * @type {number}
     * @memberof UsersToOrganizationUnitInput
     */
    organizationUnitId: number;
    constructor(data?: any);
}
export declare class FindOrganizationUnitUsersInput {
    /**
     *
     * @type {number}
     * @memberof FindOrganizationUnitUsersInput
     */
    organizationUnitId: number;
    /**
     *
     * @type {number}
     * @memberof FindOrganizationUnitUsersInput
     */
    maxResultCount: number;
    /**
     *
     * @type {number}
     * @memberof FindOrganizationUnitUsersInput
     */
    skipCount: number;
    /**
     *
     * @type {string}
     * @memberof FindOrganizationUnitUsersInput
     */
    filter: string;
    constructor(data?: any);
}
export declare class PaymentInfoDto {
    /**
     *
     * @type {EditionSelectDto}
     * @memberof PaymentInfoDto
     */
    edition: EditionSelectDto;
    /**
     *
     * @type {number}
     * @memberof PaymentInfoDto
     */
    additionalPrice: number;
    constructor(data?: any);
}
export declare class EditionSelectDto {
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof EditionSelectDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EditionSelectDto
     */
    displayName: string;
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    expiringEditionId: number;
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    monthlyPrice: number;
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    annualPrice: number;
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    trialDayCount: number;
    /**
     *
     * @type {number}
     * @memberof EditionSelectDto
     */
    waitingDayAfterExpire: number;
    /**
     *
     * @type {boolean}
     * @memberof EditionSelectDto
     */
    isFree: boolean;
    /**
     *
     * @type {object}
     * @memberof EditionSelectDto
     */
    additionalData: object;
    constructor(data?: any);
}
export declare class CreatePaymentDto {
    /**
     *
     * @type {number}
     * @memberof CreatePaymentDto
     */
    editionId: number;
    /**
     *
     * @type {'NewRegistration'|'BuyNow'|'Upgrade'|'Extend'}
     * @memberof CreatePaymentDto
     */
    editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend';
    /**
     *
     * @type {'Monthly'|'Annual'}
     * @memberof CreatePaymentDto
     */
    paymentPeriodType: 'Monthly' | 'Annual';
    /**
     *
     * @type {'Paypal'}
     * @memberof CreatePaymentDto
     */
    subscriptionPaymentGatewayType: 'Paypal';
    constructor(data?: any);
}
export declare class CreatePaymentResponse {
    constructor(data?: any);
}
export declare class ExecutePaymentDto {
    /**
     *
     * @type {'Paypal'}
     * @memberof ExecutePaymentDto
     */
    gateway: 'Paypal';
    /**
     *
     * @type {'NewRegistration'|'BuyNow'|'Upgrade'|'Extend'}
     * @memberof ExecutePaymentDto
     */
    editionPaymentType: 'NewRegistration' | 'BuyNow' | 'Upgrade' | 'Extend';
    /**
     *
     * @type {number}
     * @memberof ExecutePaymentDto
     */
    editionId: number;
    /**
     *
     * @type {'Monthly'|'Annual'}
     * @memberof ExecutePaymentDto
     */
    paymentPeriodType: 'Monthly' | 'Annual';
    /**
     *
     * @type {object}
     * @memberof ExecutePaymentDto
     */
    additionalData: object;
    constructor(data?: any);
}
export declare class ExecutePaymentResponse {
    constructor(data?: any);
}
export declare class PagedResultDtoSubscriptionPaymentListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoSubscriptionPaymentListDto
     */
    totalCount: number;
    /**
     *
     * @type {SubscriptionPaymentListDto[]}
     * @memberof PagedResultDtoSubscriptionPaymentListDto
     */
    items: SubscriptionPaymentListDto[];
    constructor(data?: any);
}
export declare class SubscriptionPaymentListDto {
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    gateway: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    amount: number;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    editionId: number;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    dayCount: number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    paymentPeriodType: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    paymentId: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    payerId: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    editionDisplayName: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    invoiceNo: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    lastModifierUserId: number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPaymentListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    creatorUserId: number;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPaymentListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ApiResultOutputListResultDtoPendingDto {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputListResultDtoPendingDto
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputListResultDtoPendingDto
     */
    code: number;
    /**
     *
     * @type {ListResultDtoPendingDto}
     * @memberof ApiResultOutputListResultDtoPendingDto
     */
    data: ListResultDtoPendingDto;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputListResultDtoPendingDto
     */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDtoPendingDto {
    /**
     *
     * @type {PendingDto[]}
     * @memberof ListResultDtoPendingDto
     */
    items: PendingDto[];
    constructor(data?: any);
}
export declare class PendingDto {
    /**
     *
     * @type {number}
     * @memberof PendingDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof PendingDto
     */
    taskId: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'LockControlTask'}
     * @memberof PendingDto
     */
    pendingType: 'KeyCabinet' | 'WireCabinet' | 'LockControlTask';
    /**
     *
     * @type {number}
     * @memberof PendingDto
     */
    applicantId: number;
    /**
     *
     * @type {string}
     * @memberof PendingDto
     */
    applyTime: string;
    /**
     *
     * @type {string}
     * @memberof PendingDto
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof PendingDto
     */
    subTitle: string;
    /**
     *
     * @type {string}
     * @memberof PendingDto
     */
    expiredDate: string;
    /**
     *
     * @type {boolean}
     * @memberof PendingDto
     */
    isExpired: boolean;
    /**
     *
     * @type {number}
     * @memberof PendingDto
     */
    taskStep: number;
    constructor(data?: any);
}
export declare class ListResultDtoFlatPermissionWithLevelDto {
    /**
     *
     * @type {FlatPermissionWithLevelDto[]}
     * @memberof ListResultDtoFlatPermissionWithLevelDto
     */
    items: FlatPermissionWithLevelDto[];
    constructor(data?: any);
}
export declare class FlatPermissionWithLevelDto {
    /**
     *
     * @type {number}
     * @memberof FlatPermissionWithLevelDto
     */
    level: number;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionWithLevelDto
     */
    parentName: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionWithLevelDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionWithLevelDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionWithLevelDto
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof FlatPermissionWithLevelDto
     */
    isGrantedByDefault: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoProductListDto {
    /**
     *
     * @type {ProductListDto[]}
     * @memberof ListResultDtoProductListDto
     */
    items: ProductListDto[];
    constructor(data?: any);
}
export declare class ProductListDto {
    /**
     *
     * @type {string}
     * @memberof ProductListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ProductListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ProductListDto
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof ProductListDto
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ProductListDto
     */
    model: string;
    /**
     *
     * @type {number}
     * @memberof ProductListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetProductEditOutput {
    /**
     *
     * @type {ProductEditDto}
     * @memberof GetProductEditOutput
     */
    product: ProductEditDto;
    /**
     *
     * @type {ProductPropertyListDto[]}
     * @memberof GetProductEditOutput
     */
    productProperties: ProductPropertyListDto[];
    constructor(data?: any);
}
export declare class ProductEditDto {
    /**
     *
     * @type {string}
     * @memberof ProductEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ProductEditDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ProductEditDto
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ProductEditDto
     */
    model: string;
    /**
     *
     * @type {number}
     * @memberof ProductEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ProductPropertyListDto {
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    value: string;
    /**
     *
     * @type {number}
     * @memberof ProductPropertyListDto
     */
    sortIndex: number;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    bitType: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof ProductPropertyListDto
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyListDto
     */
    unit: string;
    /**
     *
     * @type {number}
     * @memberof ProductPropertyListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateProductInput {
    /**
     *
     * @type {CreateOrUpdateProductDto}
     * @memberof CreateOrUpdateProductInput
     */
    product: CreateOrUpdateProductDto;
    /**
     *
     * @type {ProductPropertyEditDto[]}
     * @memberof CreateOrUpdateProductInput
     */
    productProperties: ProductPropertyEditDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateProductDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateProductDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateProductDto
     */
    description: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof CreateOrUpdateProductDto
     */
    type: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateProductDto
     */
    model: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateProductDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ProductPropertyEditDto {
    /**
     *
     * @type {string}
     * @memberof ProductPropertyEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyEditDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyEditDto
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyEditDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof ProductPropertyEditDto
     */
    sortIndex: number;
    /**
     *
     * @type {'BaseProperty'|'SignalingAndControl'|'SensingAndAdjustment'}
     * @memberof ProductPropertyEditDto
     */
    type: 'BaseProperty' | 'SignalingAndControl' | 'SensingAndAdjustment';
    /**
     *
     * @type {'ReadOnly'|'WriteOnly'|'ReadAndWrite'}
     * @memberof ProductPropertyEditDto
     */
    bitType: 'ReadOnly' | 'WriteOnly' | 'ReadAndWrite';
    /**
     *
     * @type {number}
     * @memberof ProductPropertyEditDto
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof ProductPropertyEditDto
     */
    unit: string;
    /**
     *
     * @type {number}
     * @memberof ProductPropertyEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoProductPropertyListDto {
    /**
     *
     * @type {ProductPropertyListDto[]}
     * @memberof ListResultDtoProductPropertyListDto
     */
    items: ProductPropertyListDto[];
    constructor(data?: any);
}
export declare class GetProductPropertyEditOutput {
    /**
     *
     * @type {ProductPropertyEditDto}
     * @memberof GetProductPropertyEditOutput
     */
    productProperty: ProductPropertyEditDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateProductPropertyInput {
    /**
     *
     * @type {ProductPropertyEditDto}
     * @memberof CreateOrUpdateProductPropertyInput
     */
    productProperty: ProductPropertyEditDto;
    constructor(data?: any);
}
export declare class CurrentUserProfileEditDto {
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    phoneNumber: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUserProfileEditDto
     */
    isPhoneNumberConfirmed: boolean;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUserProfileEditDto
     */
    qrCodeSetupImageUrl: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUserProfileEditDto
     */
    isGoogleAuthenticatorEnabled: boolean;
    constructor(data?: any);
}
export declare class UpdateGoogleAuthenticatorKeyOutput {
    /**
     *
     * @type {string}
     * @memberof UpdateGoogleAuthenticatorKeyOutput
     */
    qrCodeSetupImageUrl: string;
    constructor(data?: any);
}
export declare class VerifySmsCodeInputDto {
    /**
     *
     * @type {string}
     * @memberof VerifySmsCodeInputDto
     */
    code: string;
    constructor(data?: any);
}
export declare class ChangePasswordInput {
    /**
     *
     * @type {string}
     * @memberof ChangePasswordInput
     */
    currentPassword: string;
    /**
     *
     * @type {string}
     * @memberof ChangePasswordInput
     */
    newPassword: string;
    constructor(data?: any);
}
export declare class UpdateProfilePictureInput {
    /**
     *
     * @type {string}
     * @memberof UpdateProfilePictureInput
     */
    fileName: string;
    /**
     *
     * @type {number}
     * @memberof UpdateProfilePictureInput
     */
    x: number;
    /**
     *
     * @type {number}
     * @memberof UpdateProfilePictureInput
     */
    y: number;
    /**
     *
     * @type {number}
     * @memberof UpdateProfilePictureInput
     */
    width: number;
    /**
     *
     * @type {number}
     * @memberof UpdateProfilePictureInput
     */
    height: number;
    constructor(data?: any);
}
export declare class GetPasswordComplexitySettingOutput {
    /**
     *
     * @type {PasswordComplexitySetting}
     * @memberof GetPasswordComplexitySettingOutput
     */
    setting: PasswordComplexitySetting;
    constructor(data?: any);
}
export declare class GetProfilePictureOutput {
    /**
     *
     * @type {string}
     * @memberof GetProfilePictureOutput
     */
    profilePicture: string;
    constructor(data?: any);
}
export declare class ChangeUserLanguageDto {
    /**
     *
     * @type {string}
     * @memberof ChangeUserLanguageDto
     */
    languageName: string;
    constructor(data?: any);
}
export declare class AddOrUpdateRiskTicketInput {
    /**
     *
     * @type {RiskPrecontrolTicketDto}
     * @memberof AddOrUpdateRiskTicketInput
     */
    riskTicket: RiskPrecontrolTicketDto;
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof AddOrUpdateRiskTicketInput
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class RiskPrecontrolTicketDto {
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolTicketDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolTicketDto
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolTicketDto
     */
    footTitle: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolTicketDto
     */
    personnalProtectTools: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolTicketDto
     */
    note: string;
    constructor(data?: any);
}
export declare class RiskPrecontrolItemDto {
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof RiskPrecontrolItemDto
     */
    sequence: number;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    riskTicketId: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    workSequence: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    dangerSource: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    dangerFactor: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    dangerResult: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    riskLevel: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    workStandard: string;
    /**
     *
     * @type {string}
     * @memberof RiskPrecontrolItemDto
     */
    ticketItemId: string;
    /**
     *
     * @type {boolean}
     * @memberof RiskPrecontrolItemDto
     */
    isTemplateItem: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RiskPrecontrolItemDto
     */
    isFinished: boolean;
    constructor(data?: any);
}
export declare class IdGuid {
    /**
     *
     * @type {string}
     * @memberof IdGuid
     */
    id: string;
    constructor(data?: any);
}
export declare class AddOrUpdateRiskTicketItemsInput {
    /**
     *
     * @type {string}
     * @memberof AddOrUpdateRiskTicketItemsInput
     */
    riskTicketId: string;
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof AddOrUpdateRiskTicketItemsInput
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class AddOrUpdateRiskItemTemplateInput {
    /**
     *
     * @type {RiskItemTemplate}
     * @memberof AddOrUpdateRiskItemTemplateInput
     */
    riskItemTemplate: RiskItemTemplate;
    constructor(data?: any);
}
export declare class RiskItemTemplate {
    /**
     *
     * @type {number}
     * @memberof RiskItemTemplate
     */
    no: number;
    /**
     *
     * @type {string}
     * @memberof RiskItemTemplate
     */
    dangerSource: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTemplate
     */
    workStandard: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTemplate
     */
    id: string;
    constructor(data?: any);
}
export declare class ListResultDtoRiskItemTemplate {
    /**
     *
     * @type {RiskItemTemplate[]}
     * @memberof ListResultDtoRiskItemTemplate
     */
    items: RiskItemTemplate[];
    constructor(data?: any);
}
export declare class AddOrUpdateRiskItemTermMapInput {
    /**
     *
     * @type {RiskItemTermMap}
     * @memberof AddOrUpdateRiskItemTermMapInput
     */
    riskItemTermMap: RiskItemTermMap;
    constructor(data?: any);
}
export declare class RiskItemTermMap {
    /**
     *
     * @type {string}
     * @memberof RiskItemTermMap
     */
    dangerSource: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTermMap
     */
    workStandard: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTermMap
     */
    firstKey: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTermMap
     */
    secondKey: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemTermMap
     */
    id: string;
    constructor(data?: any);
}
export declare class MappingRiskItemByTermInput {
    /**
     *
     * @type {string}
     * @memberof MappingRiskItemByTermInput
     */
    keyWord: string;
    constructor(data?: any);
}
export declare class ListResultDtoRiskItemTermMap {
    /**
     *
     * @type {RiskItemTermMap[]}
     * @memberof ListResultDtoRiskItemTermMap
     */
    items: RiskItemTermMap[];
    constructor(data?: any);
}
export declare class RiskItemDto {
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    riskTicketId: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    dangerSource: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    workStandard: string;
    /**
     *
     * @type {number}
     * @memberof RiskItemDto
     */
    sequence: number;
    /**
     *
     * @type {boolean}
     * @memberof RiskItemDto
     */
    isTemplateItem: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RiskItemDto
     */
    isFinished: boolean;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    ticketItemId: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    ticketId: string;
    /**
     *
     * @type {string}
     * @memberof RiskItemDto
     */
    riskItemTemplateId: string;
    /**
     *
     * @type {boolean}
     * @memberof RiskItemDto
     */
    isTicketRiskItem: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoRiskItemDto {
    /**
     *
     * @type {RiskItemDto[]}
     * @memberof ListResultDtoRiskItemDto
     */
    items: RiskItemDto[];
    constructor(data?: any);
}
export declare class ListResultDtoRoleListDto {
    /**
     *
     * @type {RoleListDto[]}
     * @memberof ListResultDtoRoleListDto
     */
    items: RoleListDto[];
    constructor(data?: any);
}
export declare class RoleListDto {
    /**
     *
     * @type {string}
     * @memberof RoleListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RoleListDto
     */
    displayName: string;
    /**
     *
     * @type {boolean}
     * @memberof RoleListDto
     */
    isStatic: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleListDto
     */
    isDefault: boolean;
    /**
     *
     * @type {string}
     * @memberof RoleListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof RoleListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetRoleForEditOutput {
    /**
     *
     * @type {RoleEditDto}
     * @memberof GetRoleForEditOutput
     */
    role: RoleEditDto;
    /**
     *
     * @type {FlatPermissionDto[]}
     * @memberof GetRoleForEditOutput
     */
    permissions: FlatPermissionDto[];
    /**
     *
     * @type {string[]}
     * @memberof GetRoleForEditOutput
     */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class RoleEditDto {
    /**
     *
     * @type {number}
     * @memberof RoleEditDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof RoleEditDto
     */
    displayName: string;
    /**
     *
     * @type {boolean}
     * @memberof RoleEditDto
     */
    isDefault: boolean;
    constructor(data?: any);
}
export declare class FlatPermissionDto {
    /**
     *
     * @type {string}
     * @memberof FlatPermissionDto
     */
    parentName: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof FlatPermissionDto
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof FlatPermissionDto
     */
    isGrantedByDefault: boolean;
    constructor(data?: any);
}
export declare class CreateOrUpdateRoleInput {
    /**
     *
     * @type {RoleEditDto}
     * @memberof CreateOrUpdateRoleInput
     */
    role: RoleEditDto;
    /**
     *
     * @type {string[]}
     * @memberof CreateOrUpdateRoleInput
     */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class SafetyWearMonitoringInput {
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof SafetyWearMonitoringInput
     */
    macAddress: string;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    equipmentNo: number;
    /**
     *
     * @type {boolean}
     * @memberof SafetyWearMonitoringInput
     */
    workState: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SafetyWearMonitoringInput
     */
    usingState: boolean;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    heartRate: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    systolicPressure: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    diastolicPressure: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    longitude: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringInput
     */
    latitude: number;
    constructor(data?: any);
}
export declare class SafetyWearMonitoringOutput {
    /**
     *
     * @type {string}
     * @memberof SafetyWearMonitoringOutput
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof SafetyWearMonitoringOutput
     */
    createTime: string;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    userId: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof SafetyWearMonitoringOutput
     */
    macAddress: string;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    equipmentNo: number;
    /**
     *
     * @type {boolean}
     * @memberof SafetyWearMonitoringOutput
     */
    workState: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SafetyWearMonitoringOutput
     */
    usingState: boolean;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    heartRate: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    systolicPressure: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    diastolicPressure: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    longitude: number;
    /**
     *
     * @type {number}
     * @memberof SafetyWearMonitoringOutput
     */
    latitude: number;
    /**
     *
     * @type {string}
     * @memberof SafetyWearMonitoringOutput
     */
    updateTime: string;
    constructor(data?: any);
}
export declare class ListResultDtoSafetyWearMonitoringOutput {
    /**
     *
     * @type {SafetyWearMonitoringOutput[]}
     * @memberof ListResultDtoSafetyWearMonitoringOutput
     */
    items: SafetyWearMonitoringOutput[];
    constructor(data?: any);
}
export declare class EquipmentInfoOutput {
    /**
     *
     * @type {number}
     * @memberof EquipmentInfoOutput
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentInfoOutput
     */
    macAddress: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentInfoOutput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentInfoOutput
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentInfoOutput
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof EquipmentInfoOutput
     */
    stationId: number;
    constructor(data?: any);
}
export declare class ListResultDtoEquipmentInfoOutput {
    /**
     *
     * @type {EquipmentInfoOutput[]}
     * @memberof ListResultDtoEquipmentInfoOutput
     */
    items: EquipmentInfoOutput[];
    constructor(data?: any);
}
export declare class ListResultDtoSafetyWearUserOutput {
    /**
     *
     * @type {SafetyWearUserOutput[]}
     * @memberof ListResultDtoSafetyWearUserOutput
     */
    items: SafetyWearUserOutput[];
    constructor(data?: any);
}
export declare class SafetyWearUserOutput {
    /**
     *
     * @type {number}
     * @memberof SafetyWearUserOutput
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof SafetyWearUserOutput
     */
    userName: string;
    constructor(data?: any);
}
export declare class GetCurrentLoginInformationsOutput {
    /**
     *
     * @type {UserLoginInfoDto}
     * @memberof GetCurrentLoginInformationsOutput
     */
    user: UserLoginInfoDto;
    /**
     *
     * @type {TenantLoginInfoDto}
     * @memberof GetCurrentLoginInformationsOutput
     */
    tenant: TenantLoginInfoDto;
    /**
     *
     * @type {ApplicationInfoDto}
     * @memberof GetCurrentLoginInformationsOutput
     */
    application: ApplicationInfoDto;
    /**
     *
     * @type {StationLoginInfoDto}
     * @memberof GetCurrentLoginInformationsOutput
     */
    station: StationLoginInfoDto;
    constructor(data?: any);
}
export declare class UserLoginInfoDto {
    /**
     *
     * @type {string}
     * @memberof UserLoginInfoDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginInfoDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginInfoDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginInfoDto
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginInfoDto
     */
    profilePictureId: string;
    /**
     *
     * @type {number}
     * @memberof UserLoginInfoDto
     */
    id: number;
    constructor(data?: any);
}
export declare class TenantLoginInfoDto {
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    logoId: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    logoFileType: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    customCssId: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    subscriptionEndDateUtc: string;
    /**
     *
     * @type {boolean}
     * @memberof TenantLoginInfoDto
     */
    isInTrialPeriod: boolean;
    /**
     *
     * @type {EditionInfoDto}
     * @memberof TenantLoginInfoDto
     */
    edition: EditionInfoDto;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    creationTime: string;
    /**
     *
     * @type {'Monthly'|'Annual'}
     * @memberof TenantLoginInfoDto
     */
    paymentPeriodType: 'Monthly' | 'Annual';
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    subscriptionDateString: string;
    /**
     *
     * @type {string}
     * @memberof TenantLoginInfoDto
     */
    creationTimeString: string;
    /**
     *
     * @type {number}
     * @memberof TenantLoginInfoDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ApplicationInfoDto {
    /**
     *
     * @type {string}
     * @memberof ApplicationInfoDto
     */
    version: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationInfoDto
     */
    releaseDate: string;
    /**
     *
     * @type {object}
     * @memberof ApplicationInfoDto
     */
    features: object;
    constructor(data?: any);
}
export declare class StationLoginInfoDto {
    /**
     *
     * @type {number}
     * @memberof StationLoginInfoDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof StationLoginInfoDto
     */
    name: string;
    constructor(data?: any);
}
export declare class EditionInfoDto {
    /**
     *
     * @type {string}
     * @memberof EditionInfoDto
     */
    displayName: string;
    /**
     *
     * @type {number}
     * @memberof EditionInfoDto
     */
    trialDayCount: number;
    /**
     *
     * @type {number}
     * @memberof EditionInfoDto
     */
    monthlyPrice: number;
    /**
     *
     * @type {number}
     * @memberof EditionInfoDto
     */
    annualPrice: number;
    /**
     *
     * @type {boolean}
     * @memberof EditionInfoDto
     */
    isHighestEdition: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EditionInfoDto
     */
    isFree: boolean;
    /**
     *
     * @type {number}
     * @memberof EditionInfoDto
     */
    id: number;
    constructor(data?: any);
}
export declare class UpdateUserSignInTokenOutput {
    /**
     *
     * @type {string}
     * @memberof UpdateUserSignInTokenOutput
     */
    signInToken: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserSignInTokenOutput
     */
    encodedUserId: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserSignInTokenOutput
     */
    encodedTenantId: string;
    constructor(data?: any);
}
export declare class ListResultDtoStationListDto {
    /**
     *
     * @type {StationListDto[]}
     * @memberof ListResultDtoStationListDto
     */
    items: StationListDto[];
    constructor(data?: any);
}
export declare class StationListDto {
    /**
     *
     * @type {string}
     * @memberof StationListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof StationListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof StationListDto
     */
    no: string;
    /**
     *
     * @type {number}
     * @memberof StationListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetStationEditOutput {
    /**
     *
     * @type {GetStationEditDto}
     * @memberof GetStationEditOutput
     */
    station: GetStationEditDto;
    constructor(data?: any);
}
export declare class GetStationEditDto {
    /**
     *
     * @type {string}
     * @memberof GetStationEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof GetStationEditDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof GetStationEditDto
     */
    sortId: number;
    /**
     *
     * @type {string}
     * @memberof GetStationEditDto
     */
    no: string;
    /**
     *
     * @type {number}
     * @memberof GetStationEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateStationInput {
    /**
     *
     * @type {CreateOrUpdateStationDto}
     * @memberof CreateOrUpdateStationInput
     */
    station: CreateOrUpdateStationDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateStationDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateStationDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateStationDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateStationDto
     */
    sortId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateStationDto
     */
    no: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateStationDto
     */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDtoStationListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoStationListDto
     */
    totalCount: number;
    /**
     *
     * @type {StationListDto[]}
     * @memberof PagedResultDtoStationListDto
     */
    items: StationListDto[];
    constructor(data?: any);
}
export declare class BindEquipmentStationInput {
    /**
     *
     * @type {number}
     * @memberof BindEquipmentStationInput
     */
    stationId: number;
    /**
     *
     * @type {number[]}
     * @memberof BindEquipmentStationInput
     */
    equipmentIds: number[];
    constructor(data?: any);
}
export declare class CreateStationUserInput {
    /**
     *
     * @type {StationUserDto[]}
     * @memberof CreateStationUserInput
     */
    stationUserDtos: StationUserDto[];
    constructor(data?: any);
}
export declare class StationUserDto {
    /**
     *
     * @type {number}
     * @memberof StationUserDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof StationUserDto
     */
    userId: number;
    constructor(data?: any);
}
export declare class UpdateDefaultUserStationInput {
    /**
     *
     * @type {number}
     * @memberof UpdateDefaultUserStationInput
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof UpdateDefaultUserStationInput
     */
    userId: number;
    constructor(data?: any);
}
export declare class CreateStationAreaInput {
    /**
     *
     * @type {string}
     * @memberof CreateStationAreaInput
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof CreateStationAreaInput
     */
    parentId: number;
    constructor(data?: any);
}
export declare class StationAreaDto {
    /**
     *
     * @type {number}
     * @memberof StationAreaDto
     */
    stationAreaId: number;
    /**
     *
     * @type {string}
     * @memberof StationAreaDto
     */
    stationAreaName: string;
    /**
     *
     * @type {number}
     * @memberof StationAreaDto
     */
    stationAreaParentId: number;
    /**
     *
     * @type {StationDto[]}
     * @memberof StationAreaDto
     */
    stationDtos: StationDto[];
    constructor(data?: any);
}
export declare class StationDto {
    /**
     *
     * @type {string}
     * @memberof StationDto
     */
    stationName: string;
    /**
     *
     * @type {number}
     * @memberof StationDto
     */
    stationId: number;
    constructor(data?: any);
}
export declare class UpdateStationAreaInput {
    /**
     *
     * @type {string}
     * @memberof UpdateStationAreaInput
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof UpdateStationAreaInput
     */
    id: number;
    constructor(data?: any);
}
export declare class MoveStationAreaInput {
    /**
     *
     * @type {number}
     * @memberof MoveStationAreaInput
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof MoveStationAreaInput
     */
    parentId: number;
    constructor(data?: any);
}
export declare class ListResultDtoStationAreaDto {
    /**
     *
     * @type {StationAreaDto[]}
     * @memberof ListResultDtoStationAreaDto
     */
    items: StationAreaDto[];
    constructor(data?: any);
}
export declare class ListResultDtoStationAreaWithEquipment {
    /**
     *
     * @type {StationAreaWithEquipment[]}
     * @memberof ListResultDtoStationAreaWithEquipment
     */
    items: StationAreaWithEquipment[];
    constructor(data?: any);
}
export declare class StationAreaWithEquipment {
    /**
     *
     * @type {number}
     * @memberof StationAreaWithEquipment
     */
    stationAreaId: number;
    /**
     *
     * @type {string}
     * @memberof StationAreaWithEquipment
     */
    stationAreaName: string;
    /**
     *
     * @type {number}
     * @memberof StationAreaWithEquipment
     */
    stationAreaParentId: number;
    /**
     *
     * @type {number}
     * @memberof StationAreaWithEquipment
     */
    childrenCount: number;
    /**
     *
     * @type {StationInArea[]}
     * @memberof StationAreaWithEquipment
     */
    stations: StationInArea[];
    constructor(data?: any);
}
export declare class StationInArea {
    /**
     *
     * @type {number}
     * @memberof StationInArea
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof StationInArea
     */
    stationName: string;
    /**
     *
     * @type {EquipmentInStation[]}
     * @memberof StationInArea
     */
    equipments: EquipmentInStation[];
    constructor(data?: any);
}
export declare class EquipmentInStation {
    /**
     *
     * @type {number}
     * @memberof EquipmentInStation
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentInStation
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentInStation
     */
    lastModificationTime: string;
    /**
     *
     * @type {'KeyCabinet'|'WireCabinet'|'SafetyWear'|'PhotoelectricTemperature'|'ManholeCover'}
     * @memberof EquipmentInStation
     */
    productType: 'KeyCabinet' | 'WireCabinet' | 'SafetyWear' | 'PhotoelectricTemperature' | 'ManholeCover';
    /**
     *
     * @type {string}
     * @memberof EquipmentInStation
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof EquipmentInStation
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentInStation
     */
    stationName: string;
    /**
     *
     * @type {boolean}
     * @memberof EquipmentInStation
     */
    isOnline: boolean;
    /**
     *
     * @type {BasePropertyInEquipment[]}
     * @memberof EquipmentInStation
     */
    equipmentBaseProperties: BasePropertyInEquipment[];
    constructor(data?: any);
}
export declare class BasePropertyInEquipment {
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    config: string;
    /**
     *
     * @type {string}
     * @memberof BasePropertyInEquipment
     */
    operation: string;
    /**
     *
     * @type {number}
     * @memberof BasePropertyInEquipment
     */
    id: number;
    constructor(data?: any);
}
export declare class StationAreaBindStationInput {
    /**
     *
     * @type {number[]}
     * @memberof StationAreaBindStationInput
     */
    stationIds: number[];
    /**
     *
     * @type {number}
     * @memberof StationAreaBindStationInput
     */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDtoUserListByStationIdDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoUserListByStationIdDto
     */
    totalCount: number;
    /**
     *
     * @type {UserListByStationIdDto[]}
     * @memberof PagedResultDtoUserListByStationIdDto
     */
    items: UserListByStationIdDto[];
    constructor(data?: any);
}
export declare class UserListByStationIdDto {
    /**
     *
     * @type {string}
     * @memberof UserListByStationIdDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof UserListByStationIdDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {number}
     * @memberof UserListByStationIdDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoStationOrganizationUserDto {
    /**
     *
     * @type {StationOrganizationUserDto[]}
     * @memberof ListResultDtoStationOrganizationUserDto
     */
    items: StationOrganizationUserDto[];
    constructor(data?: any);
}
export declare class StationOrganizationUserDto {
    /**
     *
     * @type {string}
     * @memberof StationOrganizationUserDto
     */
    displayName: string;
    /**
     *
     * @type {number}
     * @memberof StationOrganizationUserDto
     */
    parentId: number;
    /**
     *
     * @type {StationUserListDto[]}
     * @memberof StationOrganizationUserDto
     */
    userListDtos: StationUserListDto[];
    /**
     *
     * @type {number}
     * @memberof StationOrganizationUserDto
     */
    id: number;
    constructor(data?: any);
}
export declare class StationUserListDto {
    /**
     *
     * @type {number}
     * @memberof StationUserListDto
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof StationUserListDto
     */
    userName: string;
    constructor(data?: any);
}
export declare class ListResultDtoStationDto {
    /**
     *
     * @type {StationDto[]}
     * @memberof ListResultDtoStationDto
     */
    items: StationDto[];
    constructor(data?: any);
}
export declare class PagedResultDtoTenantListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoTenantListDto
     */
    totalCount: number;
    /**
     *
     * @type {TenantListDto[]}
     * @memberof PagedResultDtoTenantListDto
     */
    items: TenantListDto[];
    constructor(data?: any);
}
export declare class TenantListDto {
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    editionDisplayName: string;
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    connectionString: string;
    /**
     *
     * @type {boolean}
     * @memberof TenantListDto
     */
    isActive: boolean;
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof TenantListDto
     */
    subscriptionEndDateUtc: string;
    /**
     *
     * @type {number}
     * @memberof TenantListDto
     */
    editionId: number;
    /**
     *
     * @type {boolean}
     * @memberof TenantListDto
     */
    isInTrialPeriod: boolean;
    /**
     *
     * @type {number}
     * @memberof TenantListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateTenantInput {
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    adminEmailAddress: string;
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    adminPassword: string;
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    connectionString: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateTenantInput
     */
    shouldChangePasswordOnNextLogin: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateTenantInput
     */
    sendActivationEmail: boolean;
    /**
     *
     * @type {number}
     * @memberof CreateTenantInput
     */
    editionId: number;
    /**
     *
     * @type {boolean}
     * @memberof CreateTenantInput
     */
    isActive: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateTenantInput
     */
    subscriptionEndDateUtc: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateTenantInput
     */
    isInTrialPeriod: boolean;
    constructor(data?: any);
}
export declare class TenantEditDto {
    /**
     *
     * @type {string}
     * @memberof TenantEditDto
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof TenantEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TenantEditDto
     */
    connectionString: string;
    /**
     *
     * @type {number}
     * @memberof TenantEditDto
     */
    editionId: number;
    /**
     *
     * @type {boolean}
     * @memberof TenantEditDto
     */
    isActive: boolean;
    /**
     *
     * @type {string}
     * @memberof TenantEditDto
     */
    subscriptionEndDateUtc: string;
    /**
     *
     * @type {boolean}
     * @memberof TenantEditDto
     */
    isInTrialPeriod: boolean;
    /**
     *
     * @type {number}
     * @memberof TenantEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetTenantFeaturesEditOutput {
    /**
     *
     * @type {NameValueDto[]}
     * @memberof GetTenantFeaturesEditOutput
     */
    featureValues: NameValueDto[];
    /**
     *
     * @type {FlatFeatureDto[]}
     * @memberof GetTenantFeaturesEditOutput
     */
    features: FlatFeatureDto[];
    constructor(data?: any);
}
export declare class UpdateTenantFeaturesInput {
    /**
     *
     * @type {number}
     * @memberof UpdateTenantFeaturesInput
     */
    id: number;
    /**
     *
     * @type {NameValueDto[]}
     * @memberof UpdateTenantFeaturesInput
     */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class EntityDto {
    /**
     *
     * @type {number}
     * @memberof EntityDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetMemberActivityOutput {
    /**
     *
     * @type {MemberActivity[]}
     * @memberof GetMemberActivityOutput
     */
    memberActivities: MemberActivity[];
    constructor(data?: any);
}
export declare class MemberActivity {
    /**
     *
     * @type {string}
     * @memberof MemberActivity
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof MemberActivity
     */
    earnings: string;
    /**
     *
     * @type {number}
     * @memberof MemberActivity
     */
    cases: number;
    /**
     *
     * @type {number}
     * @memberof MemberActivity
     */
    closed: number;
    /**
     *
     * @type {string}
     * @memberof MemberActivity
     */
    rate: string;
    constructor(data?: any);
}
export declare class GetDashboardDataOutput {
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    totalProfit: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    newFeedbacks: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    newOrders: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    newUsers: number;
    /**
     *
     * @type {SalesSummaryData[]}
     * @memberof GetDashboardDataOutput
     */
    salesSummary: SalesSummaryData[];
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    totalSales: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    revenue: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    expenses: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    growth: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    transactionPercent: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    newVisitPercent: number;
    /**
     *
     * @type {number}
     * @memberof GetDashboardDataOutput
     */
    bouncePercent: number;
    /**
     *
     * @type {number[]}
     * @memberof GetDashboardDataOutput
     */
    dailySales: number[];
    /**
     *
     * @type {number[]}
     * @memberof GetDashboardDataOutput
     */
    profitShares: number[];
    constructor(data?: any);
}
export declare class SalesSummaryData {
    /**
     *
     * @type {string}
     * @memberof SalesSummaryData
     */
    period: string;
    /**
     *
     * @type {number}
     * @memberof SalesSummaryData
     */
    sales: number;
    /**
     *
     * @type {number}
     * @memberof SalesSummaryData
     */
    profit: number;
    constructor(data?: any);
}
export declare class GetSalesSummaryOutput {
    /**
     *
     * @type {SalesSummaryData[]}
     * @memberof GetSalesSummaryOutput
     */
    salesSummary: SalesSummaryData[];
    constructor(data?: any);
}
export declare class GetRegionalStatsInput {
    constructor(data?: any);
}
export declare class GetRegionalStatsOutput {
    /**
     *
     * @type {RegionalStatCountry[]}
     * @memberof GetRegionalStatsOutput
     */
    stats: RegionalStatCountry[];
    constructor(data?: any);
}
export declare class RegionalStatCountry {
    /**
     *
     * @type {string}
     * @memberof RegionalStatCountry
     */
    countryName: string;
    /**
     *
     * @type {number}
     * @memberof RegionalStatCountry
     */
    sales: number;
    /**
     *
     * @type {number[]}
     * @memberof RegionalStatCountry
     */
    change: number[];
    /**
     *
     * @type {number}
     * @memberof RegionalStatCountry
     */
    averagePrice: number;
    /**
     *
     * @type {number}
     * @memberof RegionalStatCountry
     */
    totalPrice: number;
    constructor(data?: any);
}
export declare class GetGeneralStatsInput {
    constructor(data?: any);
}
export declare class GetGeneralStatsOutput {
    /**
     *
     * @type {number}
     * @memberof GetGeneralStatsOutput
     */
    transactionPercent: number;
    /**
     *
     * @type {number}
     * @memberof GetGeneralStatsOutput
     */
    newVisitPercent: number;
    /**
     *
     * @type {number}
     * @memberof GetGeneralStatsOutput
     */
    bouncePercent: number;
    constructor(data?: any);
}
export declare class RegisterTenantInput {
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    adminEmailAddress: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    adminPassword: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    captchaResponse: string;
    /**
     *
     * @type {'Free'|'Trial'|'Paid'}
     * @memberof RegisterTenantInput
     */
    subscriptionStartType: 'Free' | 'Trial' | 'Paid';
    /**
     *
     * @type {'Paypal'}
     * @memberof RegisterTenantInput
     */
    gateway: 'Paypal';
    /**
     *
     * @type {number}
     * @memberof RegisterTenantInput
     */
    editionId: number;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantInput
     */
    paymentId: string;
    constructor(data?: any);
}
export declare class RegisterTenantOutput {
    /**
     *
     * @type {number}
     * @memberof RegisterTenantOutput
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantOutput
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantOutput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantOutput
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof RegisterTenantOutput
     */
    emailAddress: string;
    /**
     *
     * @type {boolean}
     * @memberof RegisterTenantOutput
     */
    isTenantActive: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RegisterTenantOutput
     */
    isActive: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RegisterTenantOutput
     */
    isEmailConfirmationRequired: boolean;
    constructor(data?: any);
}
export declare class EditionsSelectOutput {
    /**
     *
     * @type {FlatFeatureSelectDto[]}
     * @memberof EditionsSelectOutput
     */
    allFeatures: FlatFeatureSelectDto[];
    /**
     *
     * @type {EditionWithFeaturesDto[]}
     * @memberof EditionsSelectOutput
     */
    editionsWithFeatures: EditionWithFeaturesDto[];
    /**
     *
     * @type {number}
     * @memberof EditionsSelectOutput
     */
    tenantEditionId: number;
    constructor(data?: any);
}
export declare class FlatFeatureSelectDto {
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    parentName: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    defaultValue: string;
    /**
     *
     * @type {IInputType}
     * @memberof FlatFeatureSelectDto
     */
    inputType: IInputType;
    /**
     *
     * @type {string}
     * @memberof FlatFeatureSelectDto
     */
    textHtmlColor: string;
    constructor(data?: any);
}
export declare class EditionWithFeaturesDto {
    /**
     *
     * @type {EditionSelectDto}
     * @memberof EditionWithFeaturesDto
     */
    edition: EditionSelectDto;
    /**
     *
     * @type {NameValueDto[]}
     * @memberof EditionWithFeaturesDto
     */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class IInputType {
    /**
     *
     * @type {string}
     * @memberof IInputType
     */
    name: string;
    /**
     *
     * @type {object}
     * @memberof IInputType
     */
    attributes: object;
    /**
     *
     * @type {IValueValidator}
     * @memberof IInputType
     */
    validator: IValueValidator;
    constructor(data?: any);
}
export declare class TenantSettingsEditDto {
    /**
     *
     * @type {GeneralSettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    general: GeneralSettingsEditDto;
    /**
     *
     * @type {TenantUserManagementSettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    userManagement: TenantUserManagementSettingsEditDto;
    /**
     *
     * @type {EmailSettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    email: EmailSettingsEditDto;
    /**
     *
     * @type {LdapSettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    ldap: LdapSettingsEditDto;
    /**
     *
     * @type {SecuritySettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    security: SecuritySettingsEditDto;
    /**
     *
     * @type {TenantBillingSettingsEditDto}
     * @memberof TenantSettingsEditDto
     */
    billing: TenantBillingSettingsEditDto;
    constructor(data?: any);
}
export declare class TenantUserManagementSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof TenantUserManagementSettingsEditDto
     */
    allowSelfRegistration: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TenantUserManagementSettingsEditDto
     */
    isNewRegisteredUserActiveByDefault: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TenantUserManagementSettingsEditDto
     */
    isEmailConfirmationRequiredForLogin: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TenantUserManagementSettingsEditDto
     */
    useCaptchaOnRegistration: boolean;
    constructor(data?: any);
}
export declare class LdapSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof LdapSettingsEditDto
     */
    isModuleEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LdapSettingsEditDto
     */
    isEnabled: boolean;
    /**
     *
     * @type {string}
     * @memberof LdapSettingsEditDto
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof LdapSettingsEditDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof LdapSettingsEditDto
     */
    password: string;
    constructor(data?: any);
}
export declare class TenantBillingSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof TenantBillingSettingsEditDto
     */
    legalName: string;
    /**
     *
     * @type {string}
     * @memberof TenantBillingSettingsEditDto
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof TenantBillingSettingsEditDto
     */
    taxVatNo: string;
    constructor(data?: any);
}
export declare class ListResultDtoTerminalPortConfigListDto {
    /**
     *
     * @type {TerminalPortConfigListDto[]}
     * @memberof ListResultDtoTerminalPortConfigListDto
     */
    items: TerminalPortConfigListDto[];
    constructor(data?: any);
}
export declare class TerminalPortConfigListDto {
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigListDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigListDto
     */
    creatorUserId: number;
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigListDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigListDto
     */
    portType: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigListDto
     */
    terminalId: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigListDto
     */
    protocolType: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetTerminalPortConfigOutput {
    /**
     *
     * @type {TerminalPortConfigEditDto}
     * @memberof GetTerminalPortConfigOutput
     */
    terminalPortConfig: TerminalPortConfigEditDto;
    /**
     *
     * @type {TerminalPortBindEquipmentDto[]}
     * @memberof GetTerminalPortConfigOutput
     */
    terminalPortBindEquipments: TerminalPortBindEquipmentDto[];
    constructor(data?: any);
}
export declare class TerminalPortConfigEditDto {
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigEditDto
     */
    lastModificationTime: string;
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigEditDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigEditDto
     */
    creatorUserId: number;
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigEditDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigEditDto
     */
    portType: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigEditDto
     */
    terminalId: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigEditDto
     */
    protocolType: number;
    /**
     *
     * @type {string}
     * @memberof TerminalPortConfigEditDto
     */
    config: string;
    /**
     *
     * @type {number}
     * @memberof TerminalPortConfigEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class TerminalPortBindEquipmentDto {
    /**
     *
     * @type {number}
     * @memberof TerminalPortBindEquipmentDto
     */
    equipmentId: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortBindEquipmentDto
     */
    productId: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortBindEquipmentDto
     */
    terminalPortConfigId: number;
    /**
     *
     * @type {number}
     * @memberof TerminalPortBindEquipmentDto
     */
    terminalId: number;
    /**
     *
     * @type {boolean}
     * @memberof TerminalPortBindEquipmentDto
     */
    canChanged: boolean;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalPortConfigInput {
    /**
     *
     * @type {CreateOrUpdateTerminalPortConfigDto}
     * @memberof CreateOrUpdateTerminalPortConfigInput
     */
    configDto: CreateOrUpdateTerminalPortConfigDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalPortConfigDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    portType: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    config: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    terminalId: number;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    protocolType: number;
    /**
     *
     * @type {number[]}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    equipmentIds: number[];
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateTerminalPortConfigDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoTerminalListDto {
    /**
     *
     * @type {TerminalListDto[]}
     * @memberof ListResultDtoTerminalListDto
     */
    items: TerminalListDto[];
    constructor(data?: any);
}
export declare class TerminalListDto {
    /**
     *
     * @type {string}
     * @memberof TerminalListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TerminalListDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof TerminalListDto
     */
    creationTime: string;
    /**
     *
     * @type {string}
     * @memberof TerminalListDto
     */
    accessKey: string;
    /**
     *
     * @type {string}
     * @memberof TerminalListDto
     */
    accessSecret: string;
    /**
     *
     * @type {number}
     * @memberof TerminalListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class GetTerminalEditOutput {
    /**
     *
     * @type {TerminalEditDto}
     * @memberof GetTerminalEditOutput
     */
    terminal: TerminalEditDto;
    constructor(data?: any);
}
export declare class TerminalEditDto {
    /**
     *
     * @type {string}
     * @memberof TerminalEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TerminalEditDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof TerminalEditDto
     */
    accessKey: string;
    /**
     *
     * @type {string}
     * @memberof TerminalEditDto
     */
    accessSecret: string;
    /**
     *
     * @type {number}
     * @memberof TerminalEditDto
     */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalInput {
    /**
     *
     * @type {CreateOrUpdateTerminalDto}
     * @memberof CreateOrUpdateTerminalInput
     */
    terminal: CreateOrUpdateTerminalDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalDto {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateTerminalDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateTerminalDto
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateTerminalDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ResetTerminalInput {
    /**
     *
     * @type {number}
     * @memberof ResetTerminalInput
     */
    terminalId: number;
    constructor(data?: any);
}
export declare class SendControlOperatingInput {
    /**
     *
     * @type {number}
     * @memberof SendControlOperatingInput
     */
    equipmentId: number;
    constructor(data?: any);
}
export declare class TermperaturePointsOutput {
    /**
     *
     * @type {number}
     * @memberof TermperaturePointsOutput
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof TermperaturePointsOutput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TermperaturePointsOutput
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof TermperaturePointsOutput
     */
    registAddress: string;
    /**
     *
     * @type {number}
     * @memberof TermperaturePointsOutput
     */
    termperature: number;
    constructor(data?: any);
}
export declare class AddOrUpdateTicketFolderInput {
    /**
     *
     * @type {TicketFolderDto}
     * @memberof AddOrUpdateTicketFolderInput
     */
    ticketFolder: TicketFolderDto;
    constructor(data?: any);
}
export declare class TicketFolderDto {
    /**
     *
     * @type {string}
     * @memberof TicketFolderDto
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof TicketFolderDto
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof TicketFolderDto
     */
    parentId: string;
    /**
     *
     * @type {string}
     * @memberof TicketFolderDto
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketFolderDto
     */
    isUpdateRiskItem: boolean;
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof TicketFolderDto
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class ResultBoolean {
    /**
     *
     * @type {boolean}
     * @memberof ResultBoolean
     */
    value: boolean;
    constructor(data?: any);
}
export declare class AddOrUpdateTicketFolderRiskInfoInput {
    /**
     *
     * @type {string[]}
     * @memberof AddOrUpdateTicketFolderRiskInfoInput
     */
    ticketFolderIds: string[];
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof AddOrUpdateTicketFolderRiskInfoInput
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class ListResultDtoIdNameTree {
    /**
     *
     * @type {IdNameTree[]}
     * @memberof ListResultDtoIdNameTree
     */
    items: IdNameTree[];
    constructor(data?: any);
}
export declare class IdNameTree {
    /**
     *
     * @type {string}
     * @memberof IdNameTree
     */
    parentId: string;
    /**
     *
     * @type {number}
     * @memberof IdNameTree
     */
    stationId: number;
    /**
     *
     * @type {IdNameTree[]}
     * @memberof IdNameTree
     */
    childrens: IdNameTree[];
    /**
     *
     * @type {string}
     * @memberof IdNameTree
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof IdNameTree
     */
    name: string;
    constructor(data?: any);
}
export declare class ListResultDtoGetStationTicketFolderChildrenWithTicketOutput {
    /**
     *
     * @type {GetStationTicketFolderChildrenWithTicketOutput[]}
     * @memberof ListResultDtoGetStationTicketFolderChildrenWithTicketOutput
     */
    items: GetStationTicketFolderChildrenWithTicketOutput[];
    constructor(data?: any);
}
export declare class GetStationTicketFolderChildrenWithTicketOutput {
    /**
     *
     * @type {string}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    parentId: string;
    /**
     *
     * @type {number}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    stationId: number;
    /**
     *
     * @type {GetStationTicketFolderChildrenWithTicketOutput[]}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    childrens: GetStationTicketFolderChildrenWithTicketOutput[];
    /**
     *
     * @type {TicketListItemDto[]}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    items: TicketListItemDto[];
    /**
     *
     * @type {string}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GetStationTicketFolderChildrenWithTicketOutput
     */
    name: string;
    constructor(data?: any);
}
export declare class TicketListItemDto {
    /**
     *
     * @type {string}
     * @memberof TicketListItemDto
     */
    taskNo: string;
    /**
     *
     * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
     * @memberof TicketListItemDto
     */
    ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec';
    /**
     *
     * @type {string}
     * @memberof TicketListItemDto
     */
    writeTime: string;
    /**
     *
     * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
     * @memberof TicketListItemDto
     */
    state: 'None' | 'WaitCommit' | 'WaitConfirm' | 'ConfirmNotPassed' | 'WaitApprove' | 'ApproveNotPassed' | 'ReadyGo' | 'Executing' | 'Pause' | 'WaitApproveToCancel' | 'WaitApproveToBreak' | 'WaitApproveExtension' | 'ExtensionReject' | 'Finished' | 'Break' | 'Cancel' | 'WaitReadOver' | 'ReadOver' | 'Archived';
    /**
     *
     * @type {string}
     * @memberof TicketListItemDto
     */
    note: string;
    /**
     *
     * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'TypicalInvalid'|'None'}
     * @memberof TicketListItemDto
     */
    ticketType: 'Task' | 'CentralizedControl' | 'Common' | 'Chemistry' | 'SteamEnginePro' | 'AshSulfur' | 'Overhual' | 'Furnace' | 'Lockset' | 'History' | 'Typical' | 'RiskTicket' | 'TypicalInvalid' | 'None';
    /**
     *
     * @type {number}
     * @memberof TicketListItemDto
     */
    stationId: number;
    /**
     *
     * @type {TicketOperatePropertyDto}
     * @memberof TicketListItemDto
     */
    ticketOperateProperty: TicketOperatePropertyDto;
    /**
     *
     * @type {boolean}
     * @memberof TicketListItemDto
     */
    isLoading: boolean;
    /**
     *
     * @type {string}
     * @memberof TicketListItemDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TicketListItemDto
     */
    name: string;
    constructor(data?: any);
}
export declare class TicketOperatePropertyDto {
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canCancel: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canEdit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canDelete: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canView: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canExecute: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApproveToExecute: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApproveCancel: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApproveBreak: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canFinish: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApplyForBreak: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApplyForCancel: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canCommit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketOperatePropertyDto
     */
    canApprove: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoIdName {
    /**
     *
     * @type {IdName[]}
     * @memberof ListResultDtoIdName
     */
    items: IdName[];
    constructor(data?: any);
}
export declare class IdName {
    /**
     *
     * @type {string}
     * @memberof IdName
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof IdName
     */
    name: string;
    constructor(data?: any);
}
export declare class GetTicketFolderOutput {
    /**
     *
     * @type {string}
     * @memberof GetTicketFolderOutput
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof GetTicketFolderOutput
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof GetTicketFolderOutput
     */
    parentId: string;
    /**
     *
     * @type {string}
     * @memberof GetTicketFolderOutput
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof GetTicketFolderOutput
     */
    isUpdateRiskItem: boolean;
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof GetTicketFolderOutput
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class AssignFolderTicketsInput {
    /**
     *
     * @type {string}
     * @memberof AssignFolderTicketsInput
     */
    ticketFolderId: string;
    /**
     *
     * @type {string[]}
     * @memberof AssignFolderTicketsInput
     */
    ticketTypicalIds: string[];
    constructor(data?: any);
}
export declare class ListResultDtoTicketListItemDto {
    /**
     *
     * @type {TicketListItemDto[]}
     * @memberof ListResultDtoTicketListItemDto
     */
    items: TicketListItemDto[];
    constructor(data?: any);
}
export declare class AddOrUpdateTicketTaskInput {
    /**
     *
     * @type {TicketTaskDto}
     * @memberof AddOrUpdateTicketTaskInput
     */
    ticketTask: TicketTaskDto;
    /**
     *
     * @type {TicketItemTaskDto[]}
     * @memberof AddOrUpdateTicketTaskInput
     */
    ticketItemTasks: TicketItemTaskDto[];
    /**
     *
     * @type {TicketTaskPersonaDto[]}
     * @memberof AddOrUpdateTicketTaskInput
     */
    ticketTaskPersonas: TicketTaskPersonaDto[];
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof AddOrUpdateTicketTaskInput
     */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class TicketTaskDto {
    /**
     *
     * @type {TicketItemTaskDto[]}
     * @memberof TicketTaskDto
     */
    ticketItemTasks: TicketItemTaskDto[];
    /**
     *
     * @type {TicketTaskPersonaDto[]}
     * @memberof TicketTaskDto
     */
    ticketTaskPersonas: TicketTaskPersonaDto[];
    /**
     *
     * @type {'MonitoringOperation'|'OnePersonOperation'}
     * @memberof TicketTaskDto
     */
    ticketOperateType: 'MonitoringOperation' | 'OnePersonOperation';
    /**
     *
     * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
     * @memberof TicketTaskDto
     */
    ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec';
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    taskNo: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    title: string;
    /**
     *
     * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
     * @memberof TicketTaskDto
     */
    state: 'None' | 'WaitCommit' | 'WaitConfirm' | 'ConfirmNotPassed' | 'WaitApprove' | 'ApproveNotPassed' | 'ReadyGo' | 'Executing' | 'Pause' | 'WaitApproveToCancel' | 'WaitApproveToBreak' | 'WaitApproveExtension' | 'ExtensionReject' | 'Finished' | 'Break' | 'Cancel' | 'WaitReadOver' | 'ReadOver' | 'Archived';
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    writeTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    taskBeginTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    taskEndTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    taskDeleteTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    taskName: string;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    writer: number;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    executor: number;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    committer: number;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    authenticationType: number;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    note: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketTaskDto
     */
    isNeedApprover: boolean;
    /**
     *
     * @type {'NoApprove'|'OneApprover'|'TwoApprover'|'ThreeApprover'}
     * @memberof TicketTaskDto
     */
    ticketAppoveLevel: 'NoApprove' | 'OneApprover' | 'TwoApprover' | 'ThreeApprover';
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    riskTicketId: string;
    /**
     *
     * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'TypicalInvalid'|'None'}
     * @memberof TicketTaskDto
     */
    ticketType: 'Task' | 'CentralizedControl' | 'Common' | 'Chemistry' | 'SteamEnginePro' | 'AshSulfur' | 'Overhual' | 'Furnace' | 'Lockset' | 'History' | 'Typical' | 'RiskTicket' | 'TypicalInvalid' | 'None';
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    docFilePath: string;
    /**
     *
     * @type {number}
     * @memberof TicketTaskDto
     */
    approver: number;
    /**
     *
     * @type {string}
     * @memberof TicketTaskDto
     */
    id: string;
    constructor(data?: any);
}
export declare class TicketItemTaskDto {
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    ticketId: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    prevFinishedItemNos: string;
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    no: number;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    displayNo: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    text: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    operationTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTaskDto
     */
    ydTime: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketItemTaskDto
     */
    finished: boolean;
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof TicketItemTaskDto
     */
    operateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof TicketItemTaskDto
     */
    realOperateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {'None'|'Operated'|'Finished'}
     * @memberof TicketItemTaskDto
     */
    operateResult: 'None' | 'Operated' | 'Finished';
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    curRfid: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    operationalTermId: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    fromState: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    toState: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTaskDto
     */
    deviceId: number;
    /**
     *
     * @type {boolean}
     * @memberof TicketItemTaskDto
     */
    isNeedGuardChecked: boolean;
    constructor(data?: any);
}
export declare class TicketTaskPersonaDto {
    /**
     *
     * @type {string}
     * @memberof TicketTaskPersonaDto
     */
    ticketId: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskPersonaDto
     */
    roleType: string;
    /**
     *
     * @type {number}
     * @memberof TicketTaskPersonaDto
     */
    userId: number;
    /**
     *
     * @type {boolean}
     * @memberof TicketTaskPersonaDto
     */
    isConfirm: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TicketTaskPersonaDto
     */
    isPass: boolean;
    /**
     *
     * @type {string}
     * @memberof TicketTaskPersonaDto
     */
    note: string;
    /**
     *
     * @type {string}
     * @memberof TicketTaskPersonaDto
     */
    id: string;
    constructor(data?: any);
}
export declare class AssignTicketPersonaesInput {
    /**
     *
     * @type {string}
     * @memberof AssignTicketPersonaesInput
     */
    ticketId: string;
    /**
     *
     * @type {TicketTaskPersonaDto[]}
     * @memberof AssignTicketPersonaesInput
     */
    ticketPersonaes: TicketTaskPersonaDto[];
    constructor(data?: any);
}
export declare class CommitTicketInput {
    /**
     *
     * @type {string}
     * @memberof CommitTicketInput
     */
    ticketId: string;
    constructor(data?: any);
}
export declare class ApproveTicketInput {
    /**
     *
     * @type {string}
     * @memberof ApproveTicketInput
     */
    ticketTaskId: string;
    /**
     *
     * @type {boolean}
     * @memberof ApproveTicketInput
     */
    isPass: boolean;
    /**
     *
     * @type {string}
     * @memberof ApproveTicketInput
     */
    note: string;
    constructor(data?: any);
}
export declare class ExecuteTicketInput {
    /**
     *
     * @type {string}
     * @memberof ExecuteTicketInput
     */
    ticketId: string;
    constructor(data?: any);
}
export declare class FinishTicketInput {
    /**
     *
     * @type {string}
     * @memberof FinishTicketInput
     */
    ticketTaskId: string;
    constructor(data?: any);
}
export declare class UpdateTicketItemsStatusInput {
    /**
     *
     * @type {string}
     * @memberof UpdateTicketItemsStatusInput
     */
    ticketId: string;
    /**
     *
     * @type {UpdateStatusTicketItemDto[]}
     * @memberof UpdateTicketItemsStatusInput
     */
    ticketItems: UpdateStatusTicketItemDto[];
    constructor(data?: any);
}
export declare class UpdateStatusTicketItemDto {
    /**
     *
     * @type {string}
     * @memberof UpdateStatusTicketItemDto
     */
    ticketItemId: string;
    /**
     *
     * @type {string}
     * @memberof UpdateStatusTicketItemDto
     */
    operateTime: string;
    /**
     *
     * @type {'None'|'Operated'|'Finished'}
     * @memberof UpdateStatusTicketItemDto
     */
    operateResult: 'None' | 'Operated' | 'Finished';
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof UpdateStatusTicketItemDto
     */
    operateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {string}
     * @memberof UpdateStatusTicketItemDto
     */
    statusUpdateTime: string;
    /**
     *
     * @type {boolean}
     * @memberof UpdateStatusTicketItemDto
     */
    finished: boolean;
    /**
     *
     * @type {string}
     * @memberof UpdateStatusTicketItemDto
     */
    note: string;
    /**
     *
     * @type {TicketItemDeviceStateDto}
     * @memberof UpdateStatusTicketItemDto
     */
    deviceStateInfo: TicketItemDeviceStateDto;
    constructor(data?: any);
}
export declare class TicketItemDeviceStateDto {
    /**
     *
     * @type {number}
     * @memberof TicketItemDeviceStateDto
     */
    deviceId: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemDeviceStateDto
     */
    deviceState: number;
    constructor(data?: any);
}
export declare class ApiResultOutputUpdateTicketItemsStatusOutput {
    /**
     *
     * @type {boolean}
     * @memberof ApiResultOutputUpdateTicketItemsStatusOutput
     */
    result: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiResultOutputUpdateTicketItemsStatusOutput
     */
    code: number;
    /**
     *
     * @type {UpdateTicketItemsStatusOutput}
     * @memberof ApiResultOutputUpdateTicketItemsStatusOutput
     */
    data: UpdateTicketItemsStatusOutput;
    /**
     *
     * @type {string}
     * @memberof ApiResultOutputUpdateTicketItemsStatusOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class UpdateTicketItemsStatusOutput {
    /**
     *
     * @type {TicketItemUpdateResultOutput[]}
     * @memberof UpdateTicketItemsStatusOutput
     */
    successTicketItems: TicketItemUpdateResultOutput[];
    /**
     *
     * @type {TicketItemUpdateResultOutput[]}
     * @memberof UpdateTicketItemsStatusOutput
     */
    failTicketItems: TicketItemUpdateResultOutput[];
    constructor(data?: any);
}
export declare class TicketItemUpdateResultOutput {
    /**
     *
     * @type {string}
     * @memberof TicketItemUpdateResultOutput
     */
    ticketItemId: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketItemUpdateResultOutput
     */
    isSuccess: boolean;
    /**
     *
     * @type {string}
     * @memberof TicketItemUpdateResultOutput
     */
    message: string;
    constructor(data?: any);
}
export declare class PagedResultDtoTicketListItemDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoTicketListItemDto
     */
    totalCount: number;
    /**
     *
     * @type {TicketListItemDto[]}
     * @memberof PagedResultDtoTicketListItemDto
     */
    items: TicketListItemDto[];
    constructor(data?: any);
}
export declare class ListResultDtoTicketItemTaskDto {
    /**
     *
     * @type {TicketItemTaskDto[]}
     * @memberof ListResultDtoTicketItemTaskDto
     */
    items: TicketItemTaskDto[];
    constructor(data?: any);
}
export declare class AddOrUpdateTicketTypicalInput {
    /**
     *
     * @type {TicketTypicalDto}
     * @memberof AddOrUpdateTicketTypicalInput
     */
    ticketTypical: TicketTypicalDto;
    /**
     *
     * @type {TicketItemTypicalDto[]}
     * @memberof AddOrUpdateTicketTypicalInput
     */
    ticketItems: TicketItemTypicalDto[];
    /**
     *
     * @type {RiskPrecontrolItemDto[]}
     * @memberof AddOrUpdateTicketTypicalInput
     */
    riskPrecontrolItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class TicketTypicalDto {
    /**
     *
     * @type {boolean}
     * @memberof TicketTypicalDto
     */
    isDeleted: boolean;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    deletionTime: string;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    deleterUserId: number;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    ticketFolderId: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    ticketTaskId: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    ticketTypicalId: string;
    /**
     *
     * @type {'MonitoringOperation'|'OnePersonOperation'}
     * @memberof TicketTypicalDto
     */
    ticketOperateType: 'MonitoringOperation' | 'OnePersonOperation';
    /**
     *
     * @type {'OrderedExec'|'UnorderedExec'|'CustomOrderExec'}
     * @memberof TicketTypicalDto
     */
    ticketExecOrder: 'OrderedExec' | 'UnorderedExec' | 'CustomOrderExec';
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    taskNo: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    title: string;
    /**
     *
     * @type {'None'|'WaitCommit'|'WaitConfirm'|'ConfirmNotPassed'|'WaitApprove'|'ApproveNotPassed'|'ReadyGo'|'Executing'|'Pause'|'WaitApproveToCancel'|'WaitApproveToBreak'|'WaitApproveExtension'|'ExtensionReject'|'Finished'|'Break'|'Cancel'|'WaitReadOver'|'ReadOver'|'Archived'}
     * @memberof TicketTypicalDto
     */
    state: 'None' | 'WaitCommit' | 'WaitConfirm' | 'ConfirmNotPassed' | 'WaitApprove' | 'ApproveNotPassed' | 'ReadyGo' | 'Executing' | 'Pause' | 'WaitApproveToCancel' | 'WaitApproveToBreak' | 'WaitApproveExtension' | 'ExtensionReject' | 'Finished' | 'Break' | 'Cancel' | 'WaitReadOver' | 'ReadOver' | 'Archived';
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    writeTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    taskBeginTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    taskEndTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    taskDeleteTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    taskName: string;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    writer: number;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    executor: number;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    committer: number;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    authenticationType: number;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    note: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketTypicalDto
     */
    isNeedApprover: boolean;
    /**
     *
     * @type {'NoApprove'|'OneApprover'|'TwoApprover'|'ThreeApprover'}
     * @memberof TicketTypicalDto
     */
    ticketAppoveLevel: 'NoApprove' | 'OneApprover' | 'TwoApprover' | 'ThreeApprover';
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    riskTicketId: string;
    /**
     *
     * @type {'Task'|'CentralizedControl'|'Common'|'Chemistry'|'SteamEnginePro'|'AshSulfur'|'Overhual'|'Furnace'|'Lockset'|'History'|'Typical'|'RiskTicket'|'TypicalInvalid'|'None'}
     * @memberof TicketTypicalDto
     */
    ticketType: 'Task' | 'CentralizedControl' | 'Common' | 'Chemistry' | 'SteamEnginePro' | 'AshSulfur' | 'Overhual' | 'Furnace' | 'Lockset' | 'History' | 'Typical' | 'RiskTicket' | 'TypicalInvalid' | 'None';
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    docFilePath: string;
    /**
     *
     * @type {number}
     * @memberof TicketTypicalDto
     */
    approver: number;
    /**
     *
     * @type {string}
     * @memberof TicketTypicalDto
     */
    id: string;
    constructor(data?: any);
}
export declare class TicketItemTypicalDto {
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    deviceName: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    deviceDescription: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    ticketId: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    prevFinishedItemNos: string;
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    no: number;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    displayNo: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    text: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    operationTime: string;
    /**
     *
     * @type {string}
     * @memberof TicketItemTypicalDto
     */
    ydTime: string;
    /**
     *
     * @type {boolean}
     * @memberof TicketItemTypicalDto
     */
    finished: boolean;
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof TicketItemTypicalDto
     */
    operateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof TicketItemTypicalDto
     */
    realOperateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {'None'|'Operated'|'Finished'}
     * @memberof TicketItemTypicalDto
     */
    operateResult: 'None' | 'Operated' | 'Finished';
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    curRfid: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    operationalTermId: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    fromState: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    toState: number;
    /**
     *
     * @type {number}
     * @memberof TicketItemTypicalDto
     */
    deviceId: number;
    /**
     *
     * @type {boolean}
     * @memberof TicketItemTypicalDto
     */
    isNeedGuardChecked: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoTicketItemTypicalDto {
    /**
     *
     * @type {TicketItemTypicalDto[]}
     * @memberof ListResultDtoTicketItemTypicalDto
     */
    items: TicketItemTypicalDto[];
    constructor(data?: any);
}
export declare class CreateTicketCurrentInput {
    /**
     *
     * @type {string}
     * @memberof CreateTicketCurrentInput
     */
    ticketTypicalId: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateTicketCurrentInput
     */
    isAnalyseDeviceName: boolean;
    constructor(data?: any);
}
export declare class AddOrUpdateCommitInput {
    /**
     *
     * @type {string}
     * @memberof AddOrUpdateCommitInput
     */
    ticketTypicalInvlidId: string;
    constructor(data?: any);
}
export declare class AddOrUpdateApproveInput {
    /**
     *
     * @type {string}
     * @memberof AddOrUpdateApproveInput
     */
    ticketTypicalInvalidId: string;
    /**
     *
     * @type {boolean}
     * @memberof AddOrUpdateApproveInput
     */
    isPass: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoGetTicketTypicalInvalidsOutput {
    /**
     *
     * @type {GetTicketTypicalInvalidsOutput[]}
     * @memberof ListResultDtoGetTicketTypicalInvalidsOutput
     */
    items: GetTicketTypicalInvalidsOutput[];
    constructor(data?: any);
}
export declare class GetTicketTypicalInvalidsOutput {
    /**
     *
     * @type {string}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    ticketId: string;
    /**
     *
     * @type {string}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    taskName: string;
    /**
     *
     * @type {string}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    stateName: string;
    /**
     *
     * @type {string}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    ticketForderName: string;
    /**
     *
     * @type {string}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    ticketTypicalId: string;
    /**
     *
     * @type {boolean}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    canEdit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    canCommit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetTicketTypicalInvalidsOutput
     */
    canApprove: boolean;
    constructor(data?: any);
}
export declare class AssignTicketItemInput {
    /**
     *
     * @type {string}
     * @memberof AssignTicketItemInput
     */
    ticketTypicalId: string;
    /**
     *
     * @type {TicketItemTypicalDto[]}
     * @memberof AssignTicketItemInput
     */
    ticketItemTypicals: TicketItemTypicalDto[];
    constructor(data?: any);
}
export declare class AnalyseSentenceInput {
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceInput
     */
    stationId: number;
    /**
     *
     * @type {string[]}
     * @memberof AnalyseSentenceInput
     */
    sentences: string[];
    constructor(data?: any);
}
export declare class ListResultDtoAnalyseSentenceDto {
    /**
     *
     * @type {AnalyseSentenceDto[]}
     * @memberof ListResultDtoAnalyseSentenceDto
     */
    items: AnalyseSentenceDto[];
    constructor(data?: any);
}
export declare class AnalyseSentenceDto {
    /**
     *
     * @type {string}
     * @memberof AnalyseSentenceDto
     */
    sentence: string;
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    deviceId: number;
    /**
     *
     * @type {string}
     * @memberof AnalyseSentenceDto
     */
    deviceName: string;
    /**
     *
     * @type {'Normal'|'HintTip'|'NoOperate'|'FinishedAfterConfirmed'|'FinishedAfterBreak'|'HandOnPlacard'|'DismantlePlacard'|'TemporaryDismantle'|'Remote'|'Repeat'|'Skip'|'Delete'|'Reset'|'Error'}
     * @memberof AnalyseSentenceDto
     */
    operateMode: 'Normal' | 'HintTip' | 'NoOperate' | 'FinishedAfterConfirmed' | 'FinishedAfterBreak' | 'HandOnPlacard' | 'DismantlePlacard' | 'TemporaryDismantle' | 'Remote' | 'Repeat' | 'Skip' | 'Delete' | 'Reset' | 'Error';
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    termId: number;
    /**
     *
     * @type {'Default'|'ByLinkage'|'AddBefault'|'AddAfter'|'Selectable'}
     * @memberof AnalyseSentenceDto
     */
    termType: 'Default' | 'ByLinkage' | 'AddBefault' | 'AddAfter' | 'Selectable';
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    deviceBoardId: number;
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    fromDeviceStateId: number;
    /**
     *
     * @type {string}
     * @memberof AnalyseSentenceDto
     */
    fromDeviceStateName: string;
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    fromDeviceState: number;
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    toDeviceStateId: number;
    /**
     *
     * @type {string}
     * @memberof AnalyseSentenceDto
     */
    toDeviceStateName: string;
    /**
     *
     * @type {number}
     * @memberof AnalyseSentenceDto
     */
    toDeviceState: number;
    constructor(data?: any);
}
export declare class ListResultDtoNameValueDto {
    /**
     *
     * @type {NameValueDto[]}
     * @memberof ListResultDtoNameValueDto
     */
    items: NameValueDto[];
    constructor(data?: any);
}
export declare class AuthenticateModel {
    /**
     *
     * @type {string}
     * @memberof AuthenticateModel
     */
    userNameOrEmailAddress: string;
    /**
     *
     * @type {string}
     * @memberof AuthenticateModel
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof AuthenticateModel
     */
    twoFactorVerificationCode: string;
    /**
     *
     * @type {boolean}
     * @memberof AuthenticateModel
     */
    rememberClient: boolean;
    /**
     *
     * @type {string}
     * @memberof AuthenticateModel
     */
    twoFactorRememberClientToken: string;
    /**
     *
     * @type {boolean}
     * @memberof AuthenticateModel
     */
    singleSignIn: boolean;
    /**
     *
     * @type {string}
     * @memberof AuthenticateModel
     */
    returnUrl: string;
    constructor(data?: any);
}
export declare class AuthenticateResultModel {
    /**
     *
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    accessToken: string;
    /**
     *
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    encryptedAccessToken: string;
    /**
     *
     * @type {number}
     * @memberof AuthenticateResultModel
     */
    expireInSeconds: number;
    /**
     *
     * @type {boolean}
     * @memberof AuthenticateResultModel
     */
    shouldResetPassword: boolean;
    /**
     *
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    passwordResetCode: string;
    /**
     *
     * @type {number}
     * @memberof AuthenticateResultModel
     */
    userId: number;
    /**
     *
     * @type {boolean}
     * @memberof AuthenticateResultModel
     */
    requiresTwoFactorVerification: boolean;
    /**
     *
     * @type {string[]}
     * @memberof AuthenticateResultModel
     */
    twoFactorAuthProviders: string[];
    /**
     *
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    twoFactorRememberClientToken: string;
    /**
     *
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    returnUrl: string;
    constructor(data?: any);
}
export declare class SendTwoFactorAuthCodeModel {
    /**
     *
     * @type {number}
     * @memberof SendTwoFactorAuthCodeModel
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof SendTwoFactorAuthCodeModel
     */
    provider: string;
    constructor(data?: any);
}
export declare class ImpersonatedAuthenticateResultModel {
    /**
     *
     * @type {string}
     * @memberof ImpersonatedAuthenticateResultModel
     */
    accessToken: string;
    /**
     *
     * @type {string}
     * @memberof ImpersonatedAuthenticateResultModel
     */
    encryptedAccessToken: string;
    /**
     *
     * @type {number}
     * @memberof ImpersonatedAuthenticateResultModel
     */
    expireInSeconds: number;
    constructor(data?: any);
}
export declare class SwitchedAccountAuthenticateResultModel {
    /**
     *
     * @type {string}
     * @memberof SwitchedAccountAuthenticateResultModel
     */
    accessToken: string;
    /**
     *
     * @type {string}
     * @memberof SwitchedAccountAuthenticateResultModel
     */
    encryptedAccessToken: string;
    /**
     *
     * @type {number}
     * @memberof SwitchedAccountAuthenticateResultModel
     */
    expireInSeconds: number;
    constructor(data?: any);
}
export declare class ExternalLoginProviderInfoModel {
    /**
     *
     * @type {string}
     * @memberof ExternalLoginProviderInfoModel
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ExternalLoginProviderInfoModel
     */
    clientId: string;
    constructor(data?: any);
}
export declare class ExternalAuthenticateModel {
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateModel
     */
    authProvider: string;
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateModel
     */
    providerKey: string;
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateModel
     */
    providerAccessCode: string;
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateModel
     */
    returnUrl: string;
    /**
     *
     * @type {boolean}
     * @memberof ExternalAuthenticateModel
     */
    singleSignIn: boolean;
    constructor(data?: any);
}
export declare class ExternalAuthenticateResultModel {
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateResultModel
     */
    accessToken: string;
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateResultModel
     */
    encryptedAccessToken: string;
    /**
     *
     * @type {number}
     * @memberof ExternalAuthenticateResultModel
     */
    expireInSeconds: number;
    /**
     *
     * @type {boolean}
     * @memberof ExternalAuthenticateResultModel
     */
    waitingForActivation: boolean;
    /**
     *
     * @type {string}
     * @memberof ExternalAuthenticateResultModel
     */
    returnUrl: string;
    constructor(data?: any);
}
export declare class SecurityAuthenticateModel {
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateModel
     */
    authProvider: string;
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateModel
     */
    providerKey: string;
    /**
     *
     * @type {boolean}
     * @memberof SecurityAuthenticateModel
     */
    singleSignIn: boolean;
    constructor(data?: any);
}
export declare class SecurityAuthenticateResultModel {
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateResultModel
     */
    accessToken: string;
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateResultModel
     */
    encryptedAccessToken: string;
    /**
     *
     * @type {number}
     * @memberof SecurityAuthenticateResultModel
     */
    expireInSeconds: number;
    /**
     *
     * @type {boolean}
     * @memberof SecurityAuthenticateResultModel
     */
    waitingForActivation: boolean;
    /**
     *
     * @type {number}
     * @memberof SecurityAuthenticateResultModel
     */
    userId: number;
    constructor(data?: any);
}
export declare class SecurityAuthenticateOTPModel {
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateOTPModel
     */
    otp: string;
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateOTPModel
     */
    authProvider: string;
    /**
     *
     * @type {string}
     * @memberof SecurityAuthenticateOTPModel
     */
    providerKey: string;
    /**
     *
     * @type {boolean}
     * @memberof SecurityAuthenticateOTPModel
     */
    singleSignIn: boolean;
    constructor(data?: any);
}
export declare class UserLogin {
    /**
     *
     * @type {number}
     * @memberof UserLogin
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof UserLogin
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof UserLogin
     */
    loginProvider: string;
    /**
     *
     * @type {string}
     * @memberof UserLogin
     */
    providerKey: string;
    /**
     *
     * @type {number}
     * @memberof UserLogin
     */
    id: number;
    constructor(data?: any);
}
export declare class AccountBindingModel {
    /**
     *
     * @type {string}
     * @memberof AccountBindingModel
     */
    userNameOrEmailAddress: string;
    /**
     *
     * @type {string}
     * @memberof AccountBindingModel
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof AccountBindingModel
     */
    providerKey: string;
    /**
     *
     * @type {string}
     * @memberof AccountBindingModel
     */
    otp: string;
    /**
     *
     * @type {string}
     * @memberof AccountBindingModel
     */
    authProvider: string;
    constructor(data?: any);
}
export declare class UiCustomizationSettingsEditDto {
    /**
     *
     * @type {UiCustomizationLayoutSettingsEditDto}
     * @memberof UiCustomizationSettingsEditDto
     */
    layout: UiCustomizationLayoutSettingsEditDto;
    /**
     *
     * @type {UiCustomizationHeaderSettingsEditDto}
     * @memberof UiCustomizationSettingsEditDto
     */
    header: UiCustomizationHeaderSettingsEditDto;
    /**
     *
     * @type {UiCustomizationMenuSettingsEditDto}
     * @memberof UiCustomizationSettingsEditDto
     */
    menu: UiCustomizationMenuSettingsEditDto;
    /**
     *
     * @type {UiCustomizationFooterSettingsEditDto}
     * @memberof UiCustomizationSettingsEditDto
     */
    footer: UiCustomizationFooterSettingsEditDto;
    constructor(data?: any);
}
export declare class UiCustomizationLayoutSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof UiCustomizationLayoutSettingsEditDto
     */
    layoutType: string;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationLayoutSettingsEditDto
     */
    contentSkin: string;
    constructor(data?: any);
}
export declare class UiCustomizationHeaderSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    desktopFixedHeader: boolean;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    desktopMinimizeMode: string;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    mobileFixedHeader: boolean;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    dropdownSkinDesktop: string;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    displaySubmenuArrowDesktop: boolean;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationHeaderSettingsEditDto
     */
    dropdownSkin: string;
    constructor(data?: any);
}
export declare class UiCustomizationMenuSettingsEditDto {
    /**
     *
     * @type {string}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    position: string;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    asideSkin: string;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    fixedAside: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    allowAsideMinimizing: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    defaultMinimizedAside: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    allowAsideHiding: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    defaultHiddenAside: boolean;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    submenuToggle: string;
    /**
     *
     * @type {string}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    dropdownSubmenuSkin: string;
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationMenuSettingsEditDto
     */
    dropdownSubmenuArrow: boolean;
    constructor(data?: any);
}
export declare class UiCustomizationFooterSettingsEditDto {
    /**
     *
     * @type {boolean}
     * @memberof UiCustomizationFooterSettingsEditDto
     */
    fixedFooter: boolean;
    constructor(data?: any);
}
export declare class PagedResultDtoUserListDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoUserListDto
     */
    totalCount: number;
    /**
     *
     * @type {UserListDto[]}
     * @memberof PagedResultDtoUserListDto
     */
    items: UserListDto[];
    constructor(data?: any);
}
export declare class UserListDto {
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    phoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    profilePictureId: string;
    /**
     *
     * @type {boolean}
     * @memberof UserListDto
     */
    isEmailConfirmed: boolean;
    /**
     *
     * @type {UserListRoleDto[]}
     * @memberof UserListDto
     */
    roles: UserListRoleDto[];
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    lastLoginTime: string;
    /**
     *
     * @type {boolean}
     * @memberof UserListDto
     */
    isActive: boolean;
    /**
     *
     * @type {string}
     * @memberof UserListDto
     */
    creationTime: string;
    /**
     *
     * @type {number}
     * @memberof UserListDto
     */
    id: number;
    constructor(data?: any);
}
export declare class UserListRoleDto {
    /**
     *
     * @type {number}
     * @memberof UserListRoleDto
     */
    roleId: number;
    /**
     *
     * @type {string}
     * @memberof UserListRoleDto
     */
    roleName: string;
    constructor(data?: any);
}
export declare class GetUserForEditOutput {
    /**
     *
     * @type {string}
     * @memberof GetUserForEditOutput
     */
    profilePictureId: string;
    /**
     *
     * @type {UserEditDto}
     * @memberof GetUserForEditOutput
     */
    user: UserEditDto;
    /**
     *
     * @type {UserRoleDto[]}
     * @memberof GetUserForEditOutput
     */
    roles: UserRoleDto[];
    /**
     *
     * @type {OrganizationUnitDto[]}
     * @memberof GetUserForEditOutput
     */
    allOrganizationUnits: OrganizationUnitDto[];
    /**
     *
     * @type {string[]}
     * @memberof GetUserForEditOutput
     */
    memberedOrganizationUnits: string[];
    constructor(data?: any);
}
export declare class UserEditDto {
    /**
     *
     * @type {number}
     * @memberof UserEditDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    userName: string;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    phoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof UserEditDto
     */
    password: string;
    /**
     *
     * @type {boolean}
     * @memberof UserEditDto
     */
    isActive: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserEditDto
     */
    shouldChangePasswordOnNextLogin: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserEditDto
     */
    isTwoFactorEnabled: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserEditDto
     */
    isLockoutEnabled: boolean;
    constructor(data?: any);
}
export declare class UserRoleDto {
    /**
     *
     * @type {number}
     * @memberof UserRoleDto
     */
    roleId: number;
    /**
     *
     * @type {string}
     * @memberof UserRoleDto
     */
    roleName: string;
    /**
     *
     * @type {string}
     * @memberof UserRoleDto
     */
    roleDisplayName: string;
    /**
     *
     * @type {boolean}
     * @memberof UserRoleDto
     */
    isAssigned: boolean;
    constructor(data?: any);
}
export declare class GetUserPermissionsForEditOutput {
    /**
     *
     * @type {FlatPermissionDto[]}
     * @memberof GetUserPermissionsForEditOutput
     */
    permissions: FlatPermissionDto[];
    /**
     *
     * @type {string[]}
     * @memberof GetUserPermissionsForEditOutput
     */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class EntityDtoInt64 {
    /**
     *
     * @type {number}
     * @memberof EntityDtoInt64
     */
    id: number;
    constructor(data?: any);
}
export declare class UpdateUserPermissionsInput {
    /**
     *
     * @type {number}
     * @memberof UpdateUserPermissionsInput
     */
    id: number;
    /**
     *
     * @type {string[]}
     * @memberof UpdateUserPermissionsInput
     */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class CreateOrUpdateUserInput {
    /**
     *
     * @type {UserEditDto}
     * @memberof CreateOrUpdateUserInput
     */
    user: UserEditDto;
    /**
     *
     * @type {string[]}
     * @memberof CreateOrUpdateUserInput
     */
    assignedRoleNames: string[];
    /**
     *
     * @type {boolean}
     * @memberof CreateOrUpdateUserInput
     */
    sendActivationEmail: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateOrUpdateUserInput
     */
    setRandomPassword: boolean;
    /**
     *
     * @type {number[]}
     * @memberof CreateOrUpdateUserInput
     */
    organizationUnits: number[];
    constructor(data?: any);
}
export declare class UserListForLoginDto {
    /**
     *
     * @type {string}
     * @memberof UserListForLoginDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserListForLoginDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof UserListForLoginDto
     */
    userName: string;
    /**
     *
     * @type {number}
     * @memberof UserListForLoginDto
     */
    id: number;
    constructor(data?: any);
}
export declare class LinkToUserInput {
    /**
     *
     * @type {string}
     * @memberof LinkToUserInput
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof LinkToUserInput
     */
    usernameOrEmailAddress: string;
    /**
     *
     * @type {string}
     * @memberof LinkToUserInput
     */
    password: string;
    constructor(data?: any);
}
export declare class PagedResultDtoLinkedUserDto {
    /**
     *
     * @type {number}
     * @memberof PagedResultDtoLinkedUserDto
     */
    totalCount: number;
    /**
     *
     * @type {LinkedUserDto[]}
     * @memberof PagedResultDtoLinkedUserDto
     */
    items: LinkedUserDto[];
    constructor(data?: any);
}
export declare class LinkedUserDto {
    /**
     *
     * @type {number}
     * @memberof LinkedUserDto
     */
    tenantId: number;
    /**
     *
     * @type {string}
     * @memberof LinkedUserDto
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof LinkedUserDto
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof LinkedUserDto
     */
    lastLoginTime: string;
    /**
     *
     * @type {number}
     * @memberof LinkedUserDto
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoLinkedUserDto {
    /**
     *
     * @type {LinkedUserDto[]}
     * @memberof ListResultDtoLinkedUserDto
     */
    items: LinkedUserDto[];
    constructor(data?: any);
}
export declare class UnlinkUserInput {
    /**
     *
     * @type {number}
     * @memberof UnlinkUserInput
     */
    tenantId: number;
    /**
     *
     * @type {number}
     * @memberof UnlinkUserInput
     */
    userId: number;
    constructor(data?: any);
}
export declare class ListResultDtoUserLoginAttemptDto {
    /**
     *
     * @type {UserLoginAttemptDto[]}
     * @memberof ListResultDtoUserLoginAttemptDto
     */
    items: UserLoginAttemptDto[];
    constructor(data?: any);
}
export declare class UserLoginAttemptDto {
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    tenancyName: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    userNameOrEmail: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    clientIpAddress: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    clientName: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    browserInfo: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    result: string;
    /**
     *
     * @type {string}
     * @memberof UserLoginAttemptDto
     */
    creationTime: string;
    constructor(data?: any);
}
export declare class GetNfcCurrentUserLoginOutput {
    /**
     *
     * @type {UserLoginDto}
     * @memberof GetNfcCurrentUserLoginOutput
     */
    userLogin: UserLoginDto;
    constructor(data?: any);
}
export declare class UserLoginDto {
    /**
     *
     * @type {string}
     * @memberof UserLoginDto
     */
    key: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateNfcUserLoginInput {
    /**
     *
     * @type {number}
     * @memberof CreateOrUpdateNfcUserLoginInput
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateNfcUserLoginInput
     */
    key: string;
    constructor(data?: any);
}
export declare class GetLatestWebLogsOutput {
    /**
     *
     * @type {string[]}
     * @memberof GetLatestWebLogsOutput
     */
    latestWebLogLines: string[];
    constructor(data?: any);
}
export declare class WireCabinetApplyInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetApplyInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof WireCabinetApplyInput
     */
    applicantId: number;
    /**
     *
     * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'}
     * @memberof WireCabinetApplyInput
     */
    applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason';
    /**
     *
     * @type {string}
     * @memberof WireCabinetApplyInput
     */
    applyReasonNote: string;
    /**
     *
     * @type {number}
     * @memberof WireCabinetApplyInput
     */
    approverId: number;
    constructor(data?: any);
}
export declare class WireCabinetApproveInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetApproveInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {number}
     * @memberof WireCabinetApproveInput
     */
    approverId: number;
    /**
     *
     * @type {boolean}
     * @memberof WireCabinetApproveInput
     */
    isApprovePass: boolean;
    /**
     *
     * @type {string}
     * @memberof WireCabinetApproveInput
     */
    approveNote: string;
    constructor(data?: any);
}
export declare class WireCabinetUnlockInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetUnlockInput
     */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class WireCabinetUnlockOutput {
    /**
     *
     * @type {string}
     * @memberof WireCabinetUnlockOutput
     */
    unlockCode: string;
    constructor(data?: any);
}
export declare class WireCabinetHookInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetHookInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetHookInput
     */
    hookPosition: string;
    /**
     *
     * @type {string[]}
     * @memberof WireCabinetHookInput
     */
    photoIds: string[];
    constructor(data?: any);
}
export declare class WireCabinetHook2Input {
    /**
     *
     * @type {number}
     * @memberof WireCabinetHook2Input
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string[]}
     * @memberof WireCabinetHook2Input
     */
    photoIds: string[];
    /**
     *
     * @type {number}
     * @memberof WireCabinetHook2Input
     */
    deviceId: number;
    constructor(data?: any);
}
export declare class WireCabinetUnHookInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetUnHookInput
     */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class WireCabinetUpdateTaskInput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetUpdateTaskInput
     */
    equipmentId: number;
    /**
     *
     * @type {WireCabinetStatusDto[]}
     * @memberof WireCabinetUpdateTaskInput
     */
    status: WireCabinetStatusDto[];
    /**
     *
     * @type {string}
     * @memberof WireCabinetUpdateTaskInput
     */
    bluetooth: string;
    constructor(data?: any);
}
export declare class WireCabinetStatusDto {
    /**
     *
     * @type {number}
     * @memberof WireCabinetStatusDto
     */
    buckleNo: number;
    /**
     *
     * @type {'Lock'|'UnlockAndTake'|'UnlockNotTake'|'Unkown'}
     * @memberof WireCabinetStatusDto
     */
    buckleStatus: 'Lock' | 'UnlockAndTake' | 'UnlockNotTake' | 'Unkown';
    constructor(data?: any);
}
export declare class WireCabinetValueTextDto {
    /**
     *
     * @type {number}
     * @memberof WireCabinetValueTextDto
     */
    value: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetValueTextDto
     */
    text: string;
    constructor(data?: any);
}
export declare class WireCabinetTaskOutput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetTaskOutput
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    equipmentName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    equipmentPropertyName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    equipmentPropertyDisplayName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    equipmentPropertyValue: string;
    /**
     *
     * @type {number}
     * @memberof WireCabinetTaskOutput
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applicantName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    approverName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applyReasonEnumName: string;
    /**
     *
     * @type {number}
     * @memberof WireCabinetTaskOutput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {boolean}
     * @memberof WireCabinetTaskOutput
     */
    isNeedApprove: boolean;
    /**
     *
     * @type {boolean}
     * @memberof WireCabinetTaskOutput
     */
    isApproverCanUnlockDirectly: boolean;
    /**
     *
     * @type {'Online'|'Bluetooth'|'Password'}
     * @memberof WireCabinetTaskOutput
     */
    unlockMode: 'Online' | 'Bluetooth' | 'Password';
    /**
     *
     * @type {'LockerDoor'|'LockerBuckle'}
     * @memberof WireCabinetTaskOutput
     */
    lockMode: 'LockerDoor' | 'LockerBuckle';
    /**
     *
     * @type {'None'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'|'ErrorCode'}
     * @memberof WireCabinetTaskOutput
     */
    taskStep: 'None' | 'Applying' | 'ApprovalPassed' | 'ApprovalNotPassed' | 'Unlocked' | 'TimeOut' | 'TakenOut' | 'Hooked' | 'Unhooked' | 'Returned' | 'Ended' | 'ErrorCode';
    /**
     *
     * @type {number}
     * @memberof WireCabinetTaskOutput
     */
    applicantId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applyTime: string;
    /**
     *
     * @type {'EquipmentFailure'|'EquipmentOverhaul'|'UrgentUnlock'|'OtherReason'}
     * @memberof WireCabinetTaskOutput
     */
    applyReason: 'EquipmentFailure' | 'EquipmentOverhaul' | 'UrgentUnlock' | 'OtherReason';
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applyReasonNote: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applyReasonPhotoId: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    applyReasonVoiceId: string;
    /**
     *
     * @type {number}
     * @memberof WireCabinetTaskOutput
     */
    approverId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    approveTime: string;
    /**
     *
     * @type {boolean}
     * @memberof WireCabinetTaskOutput
     */
    isApprovePass: boolean;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    approveNote: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    unlockTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    unlockCode: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    unlockTimeoutTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    takenTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    hookTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    hookPosition: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    hookPhotoId: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    unhookTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    unhookPhotoId: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    returnTime: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetTaskOutput
     */
    returnPhotoId: string;
    /**
     *
     * @type {'UnlockByTicket'|'UnlockByCard'|'UnlockByKey'|'UnlockByTest'|'UnlockByBorrow'}
     * @memberof WireCabinetTaskOutput
     */
    takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow';
    constructor(data?: any);
}
export declare class ListResultDtoWireCabinetOperatorDto {
    /**
     *
     * @type {WireCabinetOperatorDto[]}
     * @memberof ListResultDtoWireCabinetOperatorDto
     */
    items: WireCabinetOperatorDto[];
    constructor(data?: any);
}
export declare class WireCabinetOperatorDto {
    /**
     *
     * @type {number}
     * @memberof WireCabinetOperatorDto
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOperatorDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOperatorDto
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOperatorDto
     */
    userName: string;
    constructor(data?: any);
}
export declare class UpdateOperateTimeInput {
    /**
     *
     * @type {string}
     * @memberof UpdateOperateTimeInput
     */
    bluetooth: string;
    /**
     *
     * @type {WireOperateRecordDto[]}
     * @memberof UpdateOperateTimeInput
     */
    wireOperateTimeDtos: WireOperateRecordDto[];
    constructor(data?: any);
}
export declare class WireOperateRecordDto {
    /**
     *
     * @type {string}
     * @memberof WireOperateRecordDto
     */
    buckleNo: string;
    /**
     *
     * @type {string}
     * @memberof WireOperateRecordDto
     */
    operationTime: string;
    /**
     *
     * @type {'UnlockByTicket'|'UnlockByCard'|'UnlockByKey'|'UnlockByTest'|'UnlockByBorrow'}
     * @memberof WireOperateRecordDto
     */
    takeReason: 'UnlockByTicket' | 'UnlockByCard' | 'UnlockByKey' | 'UnlockByTest' | 'UnlockByBorrow';
    /**
     *
     * @type {'TakeOut'|'Return'}
     * @memberof WireOperateRecordDto
     */
    markBit: 'TakeOut' | 'Return';
    constructor(data?: any);
}
export declare class WireDetailOutput {
    /**
     *
     * @type {number}
     * @memberof WireDetailOutput
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof WireDetailOutput
     */
    createTime: string;
    /**
     *
     * @type {string}
     * @memberof WireDetailOutput
     */
    lastModificationTime: string;
    /**
     *
     * @type {number}
     * @memberof WireDetailOutput
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof WireDetailOutput
     */
    equipmentName: string;
    /**
     *
     * @type {number}
     * @memberof WireDetailOutput
     */
    buckleNumber: number;
    /**
     *
     * @type {string}
     * @memberof WireDetailOutput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof WireDetailOutput
     */
    description: string;
    /**
     *
     * @type {'None'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'|'ErrorCode'}
     * @memberof WireDetailOutput
     */
    taskStep: 'None' | 'Applying' | 'ApprovalPassed' | 'ApprovalNotPassed' | 'Unlocked' | 'TimeOut' | 'TakenOut' | 'Hooked' | 'Unhooked' | 'Returned' | 'Ended' | 'ErrorCode';
    /**
     *
     * @type {boolean}
     * @memberof WireDetailOutput
     */
    isExternal: boolean;
    constructor(data?: any);
}
export declare class ListResultDtoUploadFileOutput {
    /**
     *
     * @type {UploadFileOutput[]}
     * @memberof ListResultDtoUploadFileOutput
     */
    items: UploadFileOutput[];
    constructor(data?: any);
}
export declare class WireCabinetOutput {
    /**
     *
     * @type {number}
     * @memberof WireCabinetOutput
     */
    wireCabinetId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOutput
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof WireCabinetOutput
     */
    stationId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOutput
     */
    stationName: string;
    /**
     *
     * @type {string}
     * @memberof WireCabinetOutput
     */
    description: string;
    /**
     *
     * @type {WireDetailDto[]}
     * @memberof WireCabinetOutput
     */
    wireDetailDtos: WireDetailDto[];
    constructor(data?: any);
}
export declare class WireDetailDto {
    /**
     *
     * @type {number}
     * @memberof WireDetailDto
     */
    wireId: number;
    /**
     *
     * @type {number}
     * @memberof WireDetailDto
     */
    buckleNumber: number;
    /**
     *
     * @type {string}
     * @memberof WireDetailDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof WireDetailDto
     */
    description: string;
    /**
     *
     * @type {'None'|'Applying'|'ApprovalPassed'|'ApprovalNotPassed'|'Unlocked'|'TimeOut'|'TakenOut'|'Hooked'|'Unhooked'|'Returned'|'Ended'|'ErrorCode'}
     * @memberof WireDetailDto
     */
    taskStep: 'None' | 'Applying' | 'ApprovalPassed' | 'ApprovalNotPassed' | 'Unlocked' | 'TimeOut' | 'TakenOut' | 'Hooked' | 'Unhooked' | 'Returned' | 'Ended' | 'ErrorCode';
    /**
     *
     * @type {boolean}
     * @memberof WireDetailDto
     */
    isExternal: boolean;
    /**
     *
     * @type {string[]}
     * @memberof WireDetailDto
     */
    photoIds: string[];
    /**
     *
     * @type {WireConfigDto[]}
     * @memberof WireDetailDto
     */
    wireConfigs: WireConfigDto[];
    constructor(data?: any);
}
export declare class WireConfigDto {
    /**
     *
     * @type {number}
     * @memberof WireConfigDto
     */
    wireConfigId: number;
    /**
     *
     * @type {string}
     * @memberof WireConfigDto
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof WireConfigDto
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof WireConfigDto
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof WireConfigDto
     */
    value: string;
    constructor(data?: any);
}
export declare class EquipmentPropertyConfigInput {
    /**
     *
     * @type {number}
     * @memberof EquipmentPropertyConfigInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyConfigInput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyConfigInput
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyConfigInput
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof EquipmentPropertyConfigInput
     */
    value: string;
    constructor(data?: any);
}
export declare class WirePileOutput {
    /**
     *
     * @type {string}
     * @memberof WirePileOutput
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof WirePileOutput
     */
    hasBind: boolean;
    /**
     *
     * @type {number}
     * @memberof WirePileOutput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof WirePileOutput
     */
    equipmentPropertyName: string;
    /**
     *
     * @type {number}
     * @memberof WirePileOutput
     */
    stationId: number;
    /**
     *
     * @type {number}
     * @memberof WirePileOutput
     */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDtoWireBeTakenDto {
    /**
     *
     * @type {WireBeTakenDto[]}
     * @memberof ListResultDtoWireBeTakenDto
     */
    items: WireBeTakenDto[];
    constructor(data?: any);
}
export declare class WireBeTakenDto {
    /**
     *
     * @type {number}
     * @memberof WireBeTakenDto
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof WireBeTakenDto
     */
    displayName: string;
    constructor(data?: any);
}
export declare class ListResultDtoWireCabinetBluetoothDto {
    /**
     *
     * @type {WireCabinetBluetoothDto[]}
     * @memberof ListResultDtoWireCabinetBluetoothDto
     */
    items: WireCabinetBluetoothDto[];
    constructor(data?: any);
}
export declare class WireCabinetBluetoothDto {
    /**
     *
     * @type {number}
     * @memberof WireCabinetBluetoothDto
     */
    equipmentId: number;
    /**
     *
     * @type {string}
     * @memberof WireCabinetBluetoothDto
     */
    bluetooth: string;
    constructor(data?: any);
}
export declare class CheckWireConfigInput {
    /**
     *
     * @type {number}
     * @memberof CheckWireConfigInput
     */
    equipmentPropertyId: number;
    /**
     *
     * @type {string}
     * @memberof CheckWireConfigInput
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CheckWireConfigInput
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof CheckWireConfigInput
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof CheckWireConfigInput
     */
    value: string;
    constructor(data?: any);
}
