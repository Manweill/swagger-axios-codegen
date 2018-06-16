export interface IRequestOptions {
    headers?: any;
}
export declare class AccountService {
    /**
     *
     */
    static isTenantAvailable(params: IIsTenantAvailableParams, options?: IRequestOptions): Promise<IsTenantAvailableOutput>;
    /**
     *
     */
    static register(params: IRegisterParams, options?: IRequestOptions): Promise<RegisterOutput>;
    /**
     *
     */
    static sendPasswordResetCode(params: ISendPasswordResetCodeParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static resetPassword(params: IResetPasswordParams, options?: IRequestOptions): Promise<ResetPasswordOutput>;
    /**
     *
     */
    static sendEmailActivationLink(params: ISendEmailActivationLinkParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static activateEmail(params: IActivateEmailParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static impersonate(params: IImpersonateParams, options?: IRequestOptions): Promise<ImpersonateOutput>;
    /**
     *
     */
    static backToImpersonator(options?: IRequestOptions): Promise<ImpersonateOutput>;
    /**
     *
     */
    static switchToLinkedAccount(params: ISwitchToLinkedAccountParams, options?: IRequestOptions): Promise<SwitchToLinkedAccountOutput>;
}
export declare class AuditLogService {
    /**
     *
     */
    static getAuditLogs(params: IGetAuditLogsParams, options?: IRequestOptions): Promise<PagedResultDto_AuditLogListDto>;
    /**
     *
     */
    static getAuditLogsToExcel(params: IGetAuditLogsToExcelParams, options?: IRequestOptions): Promise<FileDto>;
}
export declare class CachingService {
    /**
     *
     */
    static getAllCaches(options?: IRequestOptions): Promise<ListResultDto_CacheDto>;
    /**
     *
     */
    static clearCache(params: IClearCacheParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static clearAllCaches(options?: IRequestOptions): Promise<any>;
}
export declare class ChatService {
    /**
     *
     */
    static getUserChatFriendsWithSettings(options?: IRequestOptions): Promise<GetUserChatFriendsWithSettingsOutput>;
    /**
     *
     */
    static getUserChatMessages(params: IGetUserChatMessagesParams, options?: IRequestOptions): Promise<ListResultDto_ChatMessageDto>;
    /**
     *
     */
    static markAllUnreadMessagesOfUserAsRead(params: IMarkAllUnreadMessagesOfUserAsReadParams, options?: IRequestOptions): Promise<any>;
}
export declare class CommonLookupService {
    /**
     *
     */
    static getEditionsForCombobox(params: IGetEditionsForComboboxParams, options?: IRequestOptions): Promise<ListResultDto_SubscribableEditionComboboxItemDto>;
    /**
     *
     */
    static findUsers(params: IFindUsersParams, options?: IRequestOptions): Promise<PagedResultDto_NameValueDto>;
    /**
     *
     */
    static getDefaultEditionName(options?: IRequestOptions): Promise<GetDefaultEditionNameOutput>;
    /**
     *
     */
    static getDeviceTypesForCombobox(options?: IRequestOptions): Promise<ListResultDto_DeviceTypeComboboxItemDto>;
    /**
     *
     */
    static getStationsForCombobox(options?: IRequestOptions): Promise<ListResultDto_ComboboxItemDto>;
    /**
     *
     */
    static getVoltageLevelsForCombobox(options?: IRequestOptions): Promise<ListResultDto_ComboboxItemDto>;
    /**
     *
     */
    static getDeviceStateForCombox(params: IGetDeviceStateForComboxParams, options?: IRequestOptions): Promise<ListResultDto_ComboboxItemDto>;
}
export declare class DemoUiComponentsService {
    /**
     *
     */
    static sendAndGetDate(params: ISendAndGetDateParams, options?: IRequestOptions): Promise<DateToStringOutput>;
    /**
     *
     */
    static sendAndGetDateTime(params: ISendAndGetDateTimeParams, options?: IRequestOptions): Promise<DateToStringOutput>;
    /**
     *
     */
    static sendAndGetDateRange(params: ISendAndGetDateRangeParams, options?: IRequestOptions): Promise<DateToStringOutput>;
    /**
     *
     */
    static getCountries(params: IGetCountriesParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static sendAndGetSelectedCountries(params: ISendAndGetSelectedCountriesParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static sendAndGetValue(params: ISendAndGetValueParams, options?: IRequestOptions): Promise<StringOutput>;
}
export declare class DeviceService {
    /**
     *
     */
    static getDevices(params: IGetDevicesParams, options?: IRequestOptions): Promise<PagedResultDto_DeviceListDto>;
    /**
     *
     */
    static getLockControlDevices(params: IGetLockControlDevicesParams, options?: IRequestOptions): Promise<PagedResultDto_DeviceListDto>;
    /**
     *
     */
    static getDeviceForEdit(params: IGetDeviceForEditParams, options?: IRequestOptions): Promise<GetDeviceEditOutput>;
    /**
     *
     */
    static createOrUpdateDevice(params: ICreateOrUpdateDeviceParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteDevice(params: IDeleteDeviceParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static queryDeviceStates(params: IQueryDeviceStatesParams, options?: IRequestOptions): Promise<ListResultDto_DeviceStateDto>;
    /**
     *
     */
    static updateDeviceState(params: IUpdateDeviceStateParams, options?: IRequestOptions): Promise<UpdateDeviceStateOutput>;
    /**
     *
     */
    static checkDeviceNameIsExist(params: ICheckDeviceNameIsExistParams, options?: IRequestOptions): Promise<any>;
}
export declare class DeviceAreaService {
    /**
     *
     */
    static getDeviceAreas(params: IGetDeviceAreasParams, options?: IRequestOptions): Promise<ListResultDto_DeviceAreaListDto>;
    /**
     *
     */
    static getDeviceAreaForEdit(params: IGetDeviceAreaForEditParams, options?: IRequestOptions): Promise<GetDeviceAreaEditOutput>;
    /**
     *
     */
    static createOrUpdateDeviceArea(params: ICreateOrUpdateDeviceAreaParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteDeviceArea(params: IDeleteDeviceAreaParams, options?: IRequestOptions): Promise<any>;
}
export declare class DeviceBoardService {
    /**
     *
     */
    static getDeviceBoards(params: IGetDeviceBoardsParams, options?: IRequestOptions): Promise<PagedResultDto_DeviceBoardDto>;
    /**
     *
     */
    static getDeviceBoardForEdit(params: IGetDeviceBoardForEditParams, options?: IRequestOptions): Promise<GetDeviceBoardEditOutput>;
    /**
     *
     */
    static createOrUpdateDeviceBoard(params: ICreateOrUpdateDeviceBoardParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteDeviceBoard(params: IDeleteDeviceBoardParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static uploadDeviceBoard(params: IUploadDeviceBoardParams, options?: IRequestOptions): Promise<UploadFileOutput>;
}
export declare class DeviceLockCodeService {
    /**
     *
     */
    static getLockCodeProperties(params: IGetLockCodePropertiesParams, options?: IRequestOptions): Promise<PagedResultDto_LockCodePropertyListDto>;
    /**
     *
     */
    static getLockCodePropertySelected(options?: IRequestOptions): Promise<ListResultDto_LockCodePropertySelectDto>;
    /**
     *
     */
    static getLockCodePropertyForEdit(params: IGetLockCodePropertyForEditParams, options?: IRequestOptions): Promise<LockCodePropertyEditDto>;
    /**
     *
     */
    static createOrUpdateLockCodeProperty(params: ICreateOrUpdateLockCodePropertyParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteLockCodeProperty(params: IDeleteLockCodePropertyParams, options?: IRequestOptions): Promise<any>;
}
export declare class DeviceTermService {
    /**
     *
     */
    static getDeviceTerms(params: IGetDeviceTermsParams, options?: IRequestOptions): Promise<GetDeviceTermsOutput>;
    /**
     *
     */
    static getTerms(params: IGetTermsParams, options?: IRequestOptions): Promise<ListResultDto_DeviceOperationListDto>;
    /**
     *
     */
    static createOrUpdateDeviceOperation(params: ICreateOrUpdateDeviceOperationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteDeviceOperation(params: IDeleteDeviceOperationParams, options?: IRequestOptions): Promise<any>;
}
export declare class DeviceTypeService {
    /**
     *
     */
    static getDeviceTypes(params: IGetDeviceTypesParams, options?: IRequestOptions): Promise<PagedResultDto_DeviceTypeListDto>;
    /**
     *
     */
    static getDeviceTypeForEdit(params: IGetDeviceTypeForEditParams, options?: IRequestOptions): Promise<GetDeviceTypeEditOutput>;
    /**
     *
     */
    static createOrUpdateDeviceType(params: ICreateOrUpdateDeviceTypeParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteDeviceType(params: IDeleteDeviceTypeParams, options?: IRequestOptions): Promise<any>;
}
export declare class EditionService {
    /**
     *
     */
    static getEditions(options?: IRequestOptions): Promise<ListResultDto_EditionListDto>;
    /**
     *
     */
    static getEditionForEdit(params: IGetEditionForEditParams, options?: IRequestOptions): Promise<GetEditionEditOutput>;
    /**
     *
     */
    static createOrUpdateEdition(params: ICreateOrUpdateEditionParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteEdition(params: IDeleteEditionParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getEditionComboboxItems(params: IGetEditionComboboxItemsParams, options?: IRequestOptions): Promise<any>;
}
export declare class EquipmentService {
    /**
     *
     */
    static getEquipments(params: IGetEquipmentsParams, options?: IRequestOptions): Promise<ListResultDto_EquipmentListDto>;
    /**
     *
     */
    static getEquipmentForEdit(params: IGetEquipmentForEditParams, options?: IRequestOptions): Promise<GetEquipmentEditOutput>;
    /**
     *
     */
    static createOrUpdateEquipment(params: ICreateOrUpdateEquipmentParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteEquipment(params: IDeleteEquipmentParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getEquipmentNotBinded(params: IGetEquipmentNotBindedParams, options?: IRequestOptions): Promise<PagedResultDto_EquipmentListDto>;
    /**
     *
     */
    static getAllStationBindEquipments(params: IGetAllStationBindEquipmentsParams, options?: IRequestOptions): Promise<ListResultDto_EquipmentWithPropertyDto>;
    /**
     *
     */
    static getStationBindEquipments(params: IGetStationBindEquipmentsParams, options?: IRequestOptions): Promise<PagedResultDto_EquipmentInpageDto>;
    /**
     *
     */
    static getEquipmentWithProperty(params: IGetEquipmentWithPropertyParams, options?: IRequestOptions): Promise<EquipmentWithPropertyOutput>;
    /**
     *
     */
    static controlEquipment(params: IControlEquipmentParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getEquipmentsCombineProperties(params: IGetEquipmentsCombinePropertiesParams, options?: IRequestOptions): Promise<IListResult_EquipmentCombineProperties>;
}
export declare class FileService {
    /**
     *
     */
    static download(params: IDownloadParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static file(params: IFileParams, options?: IRequestOptions): Promise<any>;
}
export declare class FriendshipService {
    /**
     *
     */
    static createFriendshipRequest(params: ICreateFriendshipRequestParams, options?: IRequestOptions): Promise<FriendDto>;
    /**
     *
     */
    static createFriendshipRequestByUserName(params: ICreateFriendshipRequestByUserNameParams, options?: IRequestOptions): Promise<FriendDto>;
    /**
     *
     */
    static blockUser(params: IBlockUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static unblockUser(params: IUnblockUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static acceptFriendshipRequest(params: IAcceptFriendshipRequestParams, options?: IRequestOptions): Promise<any>;
}
export declare class GraphService {
    /**
     *
     */
    static getGraphs(params: IGetGraphsParams, options?: IRequestOptions): Promise<ListResultDto_GraphListDto>;
    /**
     *
     */
    static getGraphForEdit(params: IGetGraphForEditParams, options?: IRequestOptions): Promise<GraphEditDto>;
    /**
     *
     */
    static createOrUpdateGraph(params: ICreateOrUpdateGraphParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteGraph(params: IDeleteGraphParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static uploadGraph(params: IUploadGraphParams, options?: IRequestOptions): Promise<UploadFileOutput>;
}
export declare class HostDashboardService {
    /**
     *
     */
    static getDashboardStatisticsData(params: IGetDashboardStatisticsDataParams, options?: IRequestOptions): Promise<HostDashboardData>;
    /**
     *
     */
    static getIncomeStatistics(params: IGetIncomeStatisticsParams, options?: IRequestOptions): Promise<GetIncomeStatisticsDataOutput>;
    /**
     *
     */
    static getEditionTenantStatistics(params: IGetEditionTenantStatisticsParams, options?: IRequestOptions): Promise<GetEditionTenantStatisticsOutput>;
}
export declare class HostSettingsService {
    /**
     *
     */
    static getAllSettings(options?: IRequestOptions): Promise<HostSettingsEditDto>;
    /**
     *
     */
    static updateAllSettings(params: IUpdateAllSettingsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static sendTestEmail(params: ISendTestEmailParams, options?: IRequestOptions): Promise<any>;
}
export declare class InfluxDBService {
    /**
     *
     */
    static createDbBase(params: ICreateDbBaseParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static writeDataToDb(params: IWriteDataToDbParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static readDataFromDb(params: IReadDataFromDbParams, options?: IRequestOptions): Promise<ReadDataFromDbOutput>;
}
export declare class InstallService {
    /**
     *
     */
    static setup(params: ISetupParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getAppSettingsJson(options?: IRequestOptions): Promise<AppSettingsJsonDto>;
    /**
     *
     */
    static checkDatabase(options?: IRequestOptions): Promise<CheckDatabaseOutput>;
}
export declare class IntelligentLockServiceService {
    /**
     *
     */
    static addIntelligentLocks(params: IAddIntelligentLocksParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeIntelligentLocks(params: IRemoveIntelligentLocksParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateIntelligentLocks(params: IUpdateIntelligentLocksParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getIntelligentLockList(params: IGetIntelligentLockListParams, options?: IRequestOptions): Promise<ListResultDto_IntelligentLockOutput>;
    /**
     *
     */
    static getIntelligentLocksInDeviceAreaTree(options?: IRequestOptions): Promise<ListResultDto_IntelligentLockDetailOutput>;
}
export declare class InvoiceService {
    /**
     *
     */
    static getInvoiceInfo(params: IGetInvoiceInfoParams, options?: IRequestOptions): Promise<InvoiceDto>;
    /**
     *
     */
    static createInvoice(params: ICreateInvoiceParams, options?: IRequestOptions): Promise<any>;
}
export declare class KeyCabinetService {
    /**
     *
     */
    static keyCabinetApply(params: IKeyCabinetApplyParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static keyCabinetApprove(params: IKeyCabinetApproveParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static keyCabinetUnlock(params: IKeyCabinetUnlockParams, options?: IRequestOptions): Promise<ApiResultOutput_KeyCabinetUnlockOutput>;
    /**
     *
     */
    static keyCabinetUpdateUnlockCode(params: IKeyCabinetUpdateUnlockCodeParams, options?: IRequestOptions): Promise<ApiResultOutput_KeyCabinetGenerateUnlockCodeOutput>;
    /**
     *
     */
    static keyCabinetOpenDoor(params: IKeyCabinetOpenDoorParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static keyCabinetReturn(params: IKeyCabinetReturnParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getApplyReasonEnums(params: IGetApplyReasonEnumsParams, options?: IRequestOptions): Promise<ApiResultOutput_Dictionary_Int32_String>;
    /**
     *
     */
    static getApplyReasonList(params: IGetApplyReasonListParams, options?: IRequestOptions): Promise<ApiResultOutput_List_KeyCabinetValueTextDto>;
    /**
     *
     */
    static getBuckleTypeEnums(options?: IRequestOptions): Promise<ApiResultOutput_Dictionary_Int32_String>;
    /**
     *
     */
    static getLockModeEnums(options?: IRequestOptions): Promise<ApiResultOutput_Dictionary_Int32_String>;
    /**
     *
     */
    static getApproverTypeEnums(options?: IRequestOptions): Promise<ApiResultOutput_Dictionary_Int32_String>;
    /**
     *
     */
    static getTask(params: IGetTaskParams, options?: IRequestOptions): Promise<ApiResultOutput_KeyCabinetTaskOutput>;
    /**
     *
     */
    static endTask(params: IEndTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getApplicants(options?: IRequestOptions): Promise<ApiResultOutput_ListResultDto_KeyCabinetOperatorDto>;
    /**
     *
     */
    static getApprovers(params: IGetApproversParams, options?: IRequestOptions): Promise<ApiResultOutput_ListResultDto_KeyCabinetOperatorDto>;
    /**
     *
     */
    static getIsTaskExpired(params: IGetIsTaskExpiredParams, options?: IRequestOptions): Promise<ApiResultOutput_Boolean>;
    /**
     *
     */
    static getIsApplicant(params: IGetIsApplicantParams, options?: IRequestOptions): Promise<ApiResultOutput_Boolean>;
    /**
     *
     */
    static getKeyCarbinetLogs(params: IGetKeyCarbinetLogsParams, options?: IRequestOptions): Promise<ApiResultOutput_ListResultDto_KeyCarbinetLogListOutput>;
    /**
     *
     */
    static updateKeyCarbinetLog(params: IUpdateKeyCarbinetLogParams, options?: IRequestOptions): Promise<ApiResultOutput_Boolean>;
}
export declare class LanguageService {
    /**
     *
     */
    static getLanguages(options?: IRequestOptions): Promise<GetLanguagesOutput>;
    /**
     *
     */
    static getLanguageForEdit(params: IGetLanguageForEditParams, options?: IRequestOptions): Promise<GetLanguageForEditOutput>;
    /**
     *
     */
    static createOrUpdateLanguage(params: ICreateOrUpdateLanguageParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteLanguage(params: IDeleteLanguageParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static setDefaultLanguage(params: ISetDefaultLanguageParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getLanguageTexts(params: IGetLanguageTextsParams, options?: IRequestOptions): Promise<PagedResultDto_LanguageTextListDto>;
    /**
     *
     */
    static updateLanguageText(params: IUpdateLanguageTextParams, options?: IRequestOptions): Promise<any>;
}
export declare class LockControlTaskServiceService {
    /**
     *
     */
    static addOrUpdateLockControlTask(params: IAddOrUpdateLockControlTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getLockControlTaskList(params: IGetLockControlTaskListParams, options?: IRequestOptions): Promise<ApiResultOutput_PagedResultDto_LockControlTaskDto>;
    /**
     *
     */
    static getLockControlTaskItems(params: IGetLockControlTaskItemsParams, options?: IRequestOptions): Promise<ApiResultOutput_LockControlTaskDetailOutput>;
    /**
     *
     */
    static commitLockControlTask(params: ICommitLockControlTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static deleteLockControlTask(params: IDeleteLockControlTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getLockControlTaskPendingDetail(params: IGetLockControlTaskPendingDetailParams, options?: IRequestOptions): Promise<ApiResultOutput_LockControlTaskPendingDetailOutput>;
    /**
     *
     */
    static approvalLockControlTask(params: IApprovalLockControlTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getLockControlTaskCodeInfos(params: IGetLockControlTaskCodeInfosParams, options?: IRequestOptions): Promise<ApiResultOutput_LockControlTaskOptOutput>;
    /**
     *
     */
    static uploadJsqOperationLog(params: IUploadJsqOperationLogParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getJsqOperationLogList(params: IGetJsqOperationLogListParams, options?: IRequestOptions): Promise<ApiResultOutput_PagedResultDto_JsqOptLogDto>;
    /**
     *
     */
    static finishLockControlTask(params: IFinishLockControlTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getHistoryLockControlTaskList(params: IGetHistoryLockControlTaskListParams, options?: IRequestOptions): Promise<ApiResultOutput_PagedResultDto_LockControlTaskDto>;
    /**
     *
     */
    static getHistoryLockControlTaskItems(params: IGetHistoryLockControlTaskItemsParams, options?: IRequestOptions): Promise<ApiResultOutput_LockControlTaskDetailOutput>;
}
export declare class NotificationService {
    /**
     *
     */
    static getUserNotifications(params: IGetUserNotificationsParams, options?: IRequestOptions): Promise<GetNotificationsOutput>;
    /**
     *
     */
    static setAllNotificationsAsRead(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static setNotificationAsRead(params: ISetNotificationAsReadParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getNotificationSettings(options?: IRequestOptions): Promise<GetNotificationSettingsOutput>;
    /**
     *
     */
    static updateNotificationSettings(params: IUpdateNotificationSettingsParams, options?: IRequestOptions): Promise<any>;
}
export declare class OperationRecordService {
    /**
     *
     */
    static getOperationRecord(params: IGetOperationRecordParams, options?: IRequestOptions): Promise<GetOperationRecordOutput>;
    /**
     *
     */
    static getOperationRecords(params: IGetOperationRecordsParams, options?: IRequestOptions): Promise<PagedResultDto_OperationRecordListDto>;
    /**
     *
     */
    static getOperationRecordsByEquipmentPropertyId(params: IGetOperationRecordsByEquipmentPropertyIdParams, options?: IRequestOptions): Promise<PagedResultDto_OperationRecordListDto>;
    /**
     *
     */
    static getOperationRecordsByEquipmentId(params: IGetOperationRecordsByEquipmentIdParams, options?: IRequestOptions): Promise<PagedResultDto_OperationRecordListDto>;
}
export declare class OrganizationUnitService {
    /**
     *
     */
    static getOrganizationUnits(options?: IRequestOptions): Promise<ListResultDto_OrganizationUnitDto>;
    /**
     *
     */
    static getOrganizationUnitUsers(params: IGetOrganizationUnitUsersParams, options?: IRequestOptions): Promise<PagedResultDto_OrganizationUnitUserListDto>;
    /**
     *
     */
    static createOrganizationUnit(params: ICreateOrganizationUnitParams, options?: IRequestOptions): Promise<OrganizationUnitDto>;
    /**
     *
     */
    static updateOrganizationUnit(params: IUpdateOrganizationUnitParams, options?: IRequestOptions): Promise<OrganizationUnitDto>;
    /**
     *
     */
    static moveOrganizationUnit(params: IMoveOrganizationUnitParams, options?: IRequestOptions): Promise<OrganizationUnitDto>;
    /**
     *
     */
    static deleteOrganizationUnit(params: IDeleteOrganizationUnitParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeUserFromOrganizationUnit(params: IRemoveUserFromOrganizationUnitParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static addUsersToOrganizationUnit(params: IAddUsersToOrganizationUnitParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static findUsers(params: IFindUsersParams1, options?: IRequestOptions): Promise<PagedResultDto_NameValueDto>;
}
export declare class PaymentService {
    /**
     *
     */
    static getPaymentInfo(params: IGetPaymentInfoParams, options?: IRequestOptions): Promise<PaymentInfoDto>;
    /**
     *
     */
    static createPayment(params: ICreatePaymentParams, options?: IRequestOptions): Promise<CreatePaymentResponse>;
    /**
     *
     */
    static executePayment(params: IExecutePaymentParams, options?: IRequestOptions): Promise<ExecutePaymentResponse>;
    /**
     *
     */
    static getPaymentHistory(params: IGetPaymentHistoryParams, options?: IRequestOptions): Promise<PagedResultDto_SubscriptionPaymentListDto>;
}
export declare class PendingService {
    /**
     *
     */
    static getPendingList(options?: IRequestOptions): Promise<ApiResultOutput_ListResultDto_PendingDto>;
}
export declare class PermissionService {
    /**
     *
     */
    static getAllPermissions(options?: IRequestOptions): Promise<ListResultDto_FlatPermissionWithLevelDto>;
}
export declare class ProductService {
    /**
     *
     */
    static getProducts(options?: IRequestOptions): Promise<ListResultDto_ProductListDto>;
    /**
     *
     */
    static getProductForEdit(params: IGetProductForEditParams, options?: IRequestOptions): Promise<GetProductEditOutput>;
    /**
     *
     */
    static createOrUpdateProduct(params: ICreateOrUpdateProductParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteProduct(params: IDeleteProductParams, options?: IRequestOptions): Promise<any>;
}
export declare class ProductPropertyService {
    /**
     *
     */
    static getProductProperties(options?: IRequestOptions): Promise<ListResultDto_ProductPropertyListDto>;
    /**
     *
     */
    static getProductPropertyForEdit(params: IGetProductPropertyForEditParams, options?: IRequestOptions): Promise<GetProductPropertyEditOutput>;
    /**
     *
     */
    static createOrUpdateProductProperty(params: ICreateOrUpdateProductPropertyParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteProductProperty(params: IDeleteProductPropertyParams, options?: IRequestOptions): Promise<any>;
}
export declare class ProfileService {
    /**
     *
     */
    static getCurrentUserProfileForEdit(options?: IRequestOptions): Promise<CurrentUserProfileEditDto>;
    /**
     *
     */
    static updateGoogleAuthenticatorKey(options?: IRequestOptions): Promise<UpdateGoogleAuthenticatorKeyOutput>;
    /**
     *
     */
    static sendVerificationSms(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static verifySmsCode(params: IVerifySmsCodeParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateCurrentUserProfile(params: IUpdateCurrentUserProfileParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static changePassword(params: IChangePasswordParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateProfilePicture(params: IUpdateProfilePictureParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getPasswordComplexitySetting(options?: IRequestOptions): Promise<GetPasswordComplexitySettingOutput>;
    /**
     *
     */
    static getProfilePicture(options?: IRequestOptions): Promise<GetProfilePictureOutput>;
    /**
     *
     */
    static getFriendProfilePictureById(params: IGetFriendProfilePictureByIdParams, options?: IRequestOptions): Promise<GetProfilePictureOutput>;
    /**
     *
     */
    static getProfilePictureById(params: IGetProfilePictureByIdParams, options?: IRequestOptions): Promise<GetProfilePictureOutput>;
    /**
     *
     */
    static changeLanguage(params: IChangeLanguageParams, options?: IRequestOptions): Promise<any>;
}
export declare class RiskTicketItemService {
    /**
     *
     */
    static addOrUpdateRiskTicket(params: IAddOrUpdateRiskTicketParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static deleteTicket(params: IDeleteTicketParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static addOrUpdateRiskTicketItems(params: IAddOrUpdateRiskTicketItemsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteRiskTicketItems(params: IDeleteRiskTicketItemsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static addOrUpdateRiskItemTemplate(params: IAddOrUpdateRiskItemTemplateParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static deleteRiskItemTemplate(params: IDeleteRiskItemTemplateParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getAllRiskItemTemplate(options?: IRequestOptions): Promise<ListResultDto_RiskItemTemplate>;
    /**
     *
     */
    static addOrUpdateRiskItemTermMap(params: IAddOrUpdateRiskItemTermMapParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static deleteRiskItemTermMap(params: IDeleteRiskItemTermMapParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static mappingRiskItemByTerm(params: IMappingRiskItemByTermParams, options?: IRequestOptions): Promise<ListResultDto_RiskItemTermMap>;
    /**
     *
     */
    static getRiskItemSingle(params: IGetRiskItemSingleParams, options?: IRequestOptions): Promise<RiskItemDto>;
    /**
     *
     */
    static getRiskItemArrayByTicketId(params: IGetRiskItemArrayByTicketIdParams, options?: IRequestOptions): Promise<ListResultDto_RiskItemDto>;
    /**
     *
     */
    static getRiskItemArrayByRiskTicketId(params: IGetRiskItemArrayByRiskTicketIdParams, options?: IRequestOptions): Promise<ListResultDto_RiskItemDto>;
    /**
     *
     */
    static getRiskItemArrayFromTemplate(options?: IRequestOptions): Promise<ListResultDto_RiskItemDto>;
    /**
     *
     */
    static getRiskItemArrayByTicketFolderId(params: IGetRiskItemArrayByTicketFolderIdParams, options?: IRequestOptions): Promise<ListResultDto_RiskItemDto>;
}
export declare class RoleService {
    /**
     *
     */
    static getRoles(params: IGetRolesParams, options?: IRequestOptions): Promise<ListResultDto_RoleListDto>;
    /**
     *
     */
    static getRoleForEdit(params: IGetRoleForEditParams, options?: IRequestOptions): Promise<GetRoleForEditOutput>;
    /**
     *
     */
    static createOrUpdateRole(params: ICreateOrUpdateRoleParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteRole(params: IDeleteRoleParams, options?: IRequestOptions): Promise<any>;
}
export declare class SafetyWearService {
    /**
     *
     */
    static addOrUpdateSafetyWearMonitoring(params: IAddOrUpdateSafetyWearMonitoringParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getOne(params: IGetOneParams, options?: IRequestOptions): Promise<SafetyWearMonitoringOutput>;
    /**
     *
     */
    static getList(params: IGetListParams, options?: IRequestOptions): Promise<ListResultDto_SafetyWearMonitoringOutput>;
    /**
     *
     */
    static getSafetyWearEquipmentByMacAddress(params: IGetSafetyWearEquipmentByMacAddressParams, options?: IRequestOptions): Promise<EquipmentInfoOutput>;
    /**
     *
     */
    static getSafetyWearEquipments(params: IGetSafetyWearEquipmentsParams, options?: IRequestOptions): Promise<ListResultDto_EquipmentInfoOutput>;
    /**
     *
     */
    static getUserListForSafetyWearLogin(params: IGetUserListForSafetyWearLoginParams, options?: IRequestOptions): Promise<ListResultDto_SafetyWearUserOutput>;
}
export declare class SerialNumberService {
    /**
     *
     */
    static addOrUpdateSerialNumber(params: IAddOrUpdateSerialNumberParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getSerialNumber(params: IGetSerialNumberParams, options?: IRequestOptions): Promise<ApiResultOutput_String>;
    /**
     *
     */
    static setSerialMaxNumber(params: ISetSerialMaxNumberParams, options?: IRequestOptions): Promise<ApiResultOutput>;
}
export declare class SessionService {
    /**
     *
     */
    static getCurrentLoginInformations(options?: IRequestOptions): Promise<GetCurrentLoginInformationsOutput>;
    /**
     *
     */
    static updateUserSignInToken(options?: IRequestOptions): Promise<UpdateUserSignInTokenOutput>;
}
export declare class StationService {
    /**
     *
     */
    static getStations(params: IGetStationsParams, options?: IRequestOptions): Promise<ListResultDto_StationListDto>;
    /**
     *
     */
    static getStationForEdit(params: IGetStationForEditParams, options?: IRequestOptions): Promise<GetStationEditOutput>;
    /**
     *
     */
    static createOrUpdateStation(params: ICreateOrUpdateStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteStation(params: IDeleteStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getStationNotBind(params: IGetStationNotBindParams, options?: IRequestOptions): Promise<PagedResultDto_StationListDto>;
    /**
     *
     */
    static bindEquipmentStation(params: IBindEquipmentStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeEquipmentStation(params: IRemoveEquipmentStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static createStationUsers(params: ICreateStationUsersParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeUserFromStation(params: IRemoveUserFromStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateDefaultUserStation(params: IUpdateDefaultUserStationParams, options?: IRequestOptions): Promise<any>;
}
export declare class StationAreaService {
    /**
     *
     */
    static createStationArea(params: ICreateStationAreaParams, options?: IRequestOptions): Promise<StationAreaDto>;
    /**
     *
     */
    static updateStationArea(params: IUpdateStationAreaParams, options?: IRequestOptions): Promise<StationAreaDto>;
    /**
     *
     */
    static moveStationArea(params: IMoveStationAreaParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteStationArea(params: IDeleteStationAreaParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getStationArea(options?: IRequestOptions): Promise<ListResultDto_StationAreaDto>;
    /**
     *
     */
    static getCurrentUserStationArea(options?: IRequestOptions): Promise<ListResultDto_StationAreaDto>;
    /**
     *
     */
    static getUserStationArea(params: IGetUserStationAreaParams, options?: IRequestOptions): Promise<ListResultDto_StationAreaDto>;
    /**
     *
     */
    static getStationAreaWithEquipments(options?: IRequestOptions): Promise<ListResultDto_StationAreaWithEquipment>;
    /**
     *
     */
    static stationAreaBindStation(params: IStationAreaBindStationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeStationAreaStation(params: IRemoveStationAreaStationParams, options?: IRequestOptions): Promise<any>;
}
export declare class StationUserService {
    /**
     *
     */
    static getRelatedUserListByStationId(params: IGetRelatedUserListByStationIdParams, options?: IRequestOptions): Promise<PagedResultDto_UserListByStationIdDto>;
    /**
     *
     */
    static getNotRelatedUserListByStationId(params: IGetNotRelatedUserListByStationIdParams, options?: IRequestOptions): Promise<ListResultDto_StationOrganizationUserDto>;
    /**
     *
     */
    static getDefaultStation(params: IGetDefaultStationParams, options?: IRequestOptions): Promise<StationDto>;
    /**
     *
     */
    static getUserStations(params: IGetUserStationsParams, options?: IRequestOptions): Promise<ListResultDto_StationDto>;
}
export declare class SubscriptionService {
    /**
     *
     */
    static upgradeTenantToEquivalentEdition(params: IUpgradeTenantToEquivalentEditionParams, options?: IRequestOptions): Promise<any>;
}
export declare class TenantService {
    /**
     *
     */
    static getTenants(params: IGetTenantsParams, options?: IRequestOptions): Promise<PagedResultDto_TenantListDto>;
    /**
     *
     */
    static createTenant(params: ICreateTenantParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getTenantForEdit(params: IGetTenantForEditParams, options?: IRequestOptions): Promise<TenantEditDto>;
    /**
     *
     */
    static updateTenant(params: IUpdateTenantParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteTenant(params: IDeleteTenantParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getTenantFeaturesForEdit(params: IGetTenantFeaturesForEditParams, options?: IRequestOptions): Promise<GetTenantFeaturesEditOutput>;
    /**
     *
     */
    static updateTenantFeatures(params: IUpdateTenantFeaturesParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static resetTenantSpecificFeatures(params: IResetTenantSpecificFeaturesParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static unlockTenantAdmin(params: IUnlockTenantAdminParams, options?: IRequestOptions): Promise<any>;
}
export declare class TenantDashboardService {
    /**
     *
     */
    static getMemberActivity(options?: IRequestOptions): Promise<GetMemberActivityOutput>;
    /**
     *
     */
    static getDashboardData(params: IGetDashboardDataParams, options?: IRequestOptions): Promise<GetDashboardDataOutput>;
    /**
     *
     */
    static getSalesSummary(params: IGetSalesSummaryParams, options?: IRequestOptions): Promise<GetSalesSummaryOutput>;
    /**
     *
     */
    static getRegionalStats(params: IGetRegionalStatsParams, options?: IRequestOptions): Promise<GetRegionalStatsOutput>;
    /**
     *
     */
    static getGeneralStats(params: IGetGeneralStatsParams, options?: IRequestOptions): Promise<GetGeneralStatsOutput>;
}
export declare class TenantRegistrationService {
    /**
     *
     */
    static registerTenant(params: IRegisterTenantParams, options?: IRequestOptions): Promise<RegisterTenantOutput>;
    /**
     *
     */
    static getEditionsForSelect(options?: IRequestOptions): Promise<EditionsSelectOutput>;
    /**
     *
     */
    static getEdition(params: IGetEditionParams, options?: IRequestOptions): Promise<EditionSelectDto>;
}
export declare class TenantSettingsService {
    /**
     *
     */
    static getAllSettings(options?: IRequestOptions): Promise<TenantSettingsEditDto>;
    /**
     *
     */
    static updateAllSettings(params: IUpdateAllSettingsParams1, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static clearLogo(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static clearCustomCss(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static sendTestEmail(params: ISendTestEmailParams1, options?: IRequestOptions): Promise<any>;
}
export declare class TerimalPortConfigService {
    /**
     *
     */
    static getTerminalPortConfigs(params: IGetTerminalPortConfigsParams, options?: IRequestOptions): Promise<ListResultDto_TerminalPortConfigListDto>;
    /**
     *
     */
    static getTerminalPortConfigForEdit(params: IGetTerminalPortConfigForEditParams, options?: IRequestOptions): Promise<GetTerminalPortConfigOutput>;
    /**
     *
     */
    static createOrUpdateTerminalPortConfig(params: ICreateOrUpdateTerminalPortConfigParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteTerminalPortConfig(params: IDeleteTerminalPortConfigParams, options?: IRequestOptions): Promise<any>;
}
export declare class TerminalService {
    /**
     *
     */
    static getTerminals(options?: IRequestOptions): Promise<ListResultDto_TerminalListDto>;
    /**
     *
     */
    static getTerminalForEdit(params: IGetTerminalForEditParams, options?: IRequestOptions): Promise<GetTerminalEditOutput>;
    /**
     *
     */
    static createOrUpdateTerminal(params: ICreateOrUpdateTerminalParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteTerminal(params: IDeleteTerminalParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static resetTerminal(params: IResetTerminalParams, options?: IRequestOptions): Promise<any>;
}
export declare class TermperatureControlService {
    /**
     *
     */
    static sendControlOperating(params: ISendControlOperatingParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getTermperaturePoints(params: IGetTermperaturePointsParams, options?: IRequestOptions): Promise<any>;
}
export declare class TicketFolderService {
    /**
     *
     */
    static addOrUpdateTicketFolder(params: IAddOrUpdateTicketFolderParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static deleteStationTicketFolder(params: IDeleteStationTicketFolderParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static deleteTicketFolder(params: IDeleteTicketFolderParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static addOrUpdateTicketFolderRiskInfo(params: IAddOrUpdateTicketFolderRiskInfoParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static getStationTicketFolderChildrens(params: IGetStationTicketFolderChildrensParams, options?: IRequestOptions): Promise<ListResultDto_IdNameTree>;
    /**
     *
     */
    static getTicketFolderChildrens(params: IGetTicketFolderChildrensParams, options?: IRequestOptions): Promise<ListResultDto_IdNameTree>;
    /**
     *
     */
    static getStationTicketFolderChildrenWithTicket(params: IGetStationTicketFolderChildrenWithTicketParams, options?: IRequestOptions): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput>;
    /**
     *
     */
    static getTicketFoldersByName(params: IGetTicketFoldersByNameParams, options?: IRequestOptions): Promise<ListResultDto_IdName>;
    /**
     *
     */
    static getTicketFolderById(params: IGetTicketFolderByIdParams, options?: IRequestOptions): Promise<GetTicketFolderOutput>;
    /**
     *
     */
    static assignFolderTickets(params: IAssignFolderTicketsParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static getFolderTicketsById(params: IGetFolderTicketsByIdParams, options?: IRequestOptions): Promise<ListResultDto_TicketListItemDto>;
    /**
     *
     */
    static getTicketFoldersWithTicketsByParentId(params: IGetTicketFoldersWithTicketsByParentIdParams, options?: IRequestOptions): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput>;
    /**
     *
     */
    static getStationTicketFoldersWithTickets(params: IGetStationTicketFoldersWithTicketsParams, options?: IRequestOptions): Promise<ListResultDto_GetStationTicketFolderChildrenWithTicketOutput>;
}
export declare class TicketRoleService {
    /**
     *
     */
    static getTicketRoleUsers(params: IGetTicketRoleUsersParams, options?: IRequestOptions): Promise<ApiResultOutput_List_TicketRoleDto>;
}
export declare class TicketTaskService {
    /**
     *
     */
    static addOrUpdateTicketTask(params: IAddOrUpdateTicketTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static deleteTicketTask(params: IDeleteTicketTaskParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static assignTicketPersonas(params: IAssignTicketPersonasParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static commitTicket(params: ICommitTicketParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static confirmTicket(params: IConfirmTicketParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static approveTicket(params: IApproveTicketParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static executeTicket(params: IExecuteTicketParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static finishTicket(params: IFinishTicketParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static updateTicketItemsStatus(params: IUpdateTicketItemsStatusParams, options?: IRequestOptions): Promise<ApiResultOutput_UpdateTicketItemsStatusOutput>;
    /**
     *
     */
    static updateTicketRiskItemsStatus(params: IUpdateTicketRiskItemsStatusParams, options?: IRequestOptions): Promise<ApiResultOutput_UpdateTicketRiskItemsStatusOutput>;
    /**
     *
     */
    static currentTicketItemDeviceCanOperate(params: ICurrentTicketItemDeviceCanOperateParams, options?: IRequestOptions): Promise<ApiResultOutput>;
    /**
     *
     */
    static getTicket(params: IGetTicketParams, options?: IRequestOptions): Promise<TicketTaskOutput>;
    /**
     *
     */
    static getTickets(params: IGetTicketsParams, options?: IRequestOptions): Promise<PagedResultDto_TicketTaskListDto>;
    /**
     *
     */
    static getTicketItems(params: IGetTicketItemsParams, options?: IRequestOptions): Promise<ListResultDto_TicketItemTaskDto>;
    /**
     *
     */
    static checkDeviceStatusForTicketTaskExcuting(params: ICheckDeviceStatusForTicketTaskExcutingParams, options?: IRequestOptions): Promise<ApiResultOutput>;
}
export declare class TicketTermService {
    /**
     *
     */
    static analyseSentence(params: IAnalyseSentenceParams, options?: IRequestOptions): Promise<AnalyseSentenceOutput>;
    /**
     *
     */
    static getTicketItemOperateLockInfo(params: IGetTicketItemOperateLockInfoParams, options?: IRequestOptions): Promise<IListResult_TicketItemOperateLockInfoDto>;
    /**
     *
     */
    static singleAnalyseSentenceOutput(params: ISingleAnalyseSentenceOutputParams, options?: IRequestOptions): Promise<SingleAnalyseSentenceOutput>;
}
export declare class TicketTypicalService {
    /**
     *
     */
    static addOrUpdateTicketTypical(params: IAddOrUpdateTicketTypicalParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static deleteTicketTypical(params: IDeleteTicketTypicalParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static getTicketsByTaskName(params: IGetTicketsByTaskNameParams, options?: IRequestOptions): Promise<PagedResultDto_TicketListItemDto>;
    /**
     *
     */
    static getTicketItems(params: IGetTicketItemsParams1, options?: IRequestOptions): Promise<ListResultDto_TicketItemTypicalDto>;
    /**
     *
     */
    static getTicket(params: IGetTicketParams1, options?: IRequestOptions): Promise<TicketTypicalDto>;
    /**
     *
     */
    static createTicketCurrent(params: ICreateTicketCurrentParams, options?: IRequestOptions): Promise<IdGuid>;
    /**
     *
     */
    static addOrUpdateCommit(params: IAddOrUpdateCommitParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static addOrUpdateApprove(params: IAddOrUpdateApproveParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static deleteTicketTypicalInvalid(params: IDeleteTicketTypicalInvalidParams, options?: IRequestOptions): Promise<ResultBoolean>;
    /**
     *
     */
    static getTicketTypicalInvalids(params: IGetTicketTypicalInvalidsParams, options?: IRequestOptions): Promise<ListResultDto_GetTicketTypicalInvalidsOutput>;
    /**
     *
     */
    static getTicketTypicalInvalid(params: IGetTicketTypicalInvalidParams, options?: IRequestOptions): Promise<TicketTypicalDto>;
    /**
     *
     */
    static getTicketItemTypicalInvalids(params: IGetTicketItemTypicalInvalidsParams, options?: IRequestOptions): Promise<ListResultDto_TicketItemTypicalDto>;
    /**
     *
     */
    static assignTicketItem(params: IAssignTicketItemParams, options?: IRequestOptions): Promise<ResultBoolean>;
}
export declare class TimingService {
    /**
     *
     */
    static getTimezones(params: IGetTimezonesParams, options?: IRequestOptions): Promise<ListResultDto_NameValueDto>;
    /**
     *
     */
    static getTimezoneComboboxItems(params: IGetTimezoneComboboxItemsParams, options?: IRequestOptions): Promise<any>;
}
export declare class TokenAuthService {
    /**
     *
     */
    static authenticate(params: IAuthenticateParams, options?: IRequestOptions): Promise<AuthenticateResultModel>;
    /**
     *
     */
    static sendTwoFactorAuthCode(params: ISendTwoFactorAuthCodeParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static impersonatedAuthenticate(params: IImpersonatedAuthenticateParams, options?: IRequestOptions): Promise<ImpersonatedAuthenticateResultModel>;
    /**
     *
     */
    static linkedAccountAuthenticate(params: ILinkedAccountAuthenticateParams, options?: IRequestOptions): Promise<SwitchedAccountAuthenticateResultModel>;
    /**
     *
     */
    static getExternalAuthenticationProviders(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static externalAuthenticate(params: IExternalAuthenticateParams, options?: IRequestOptions): Promise<ExternalAuthenticateResultModel>;
    /**
     *
     */
    static securityAuthenticate(params: ISecurityAuthenticateParams, options?: IRequestOptions): Promise<SecurityAuthenticateResultModel>;
    /**
     *
     */
    static getUserLoginByProviderKey(params: IGetUserLoginByProviderKeyParams, options?: IRequestOptions): Promise<UserLogin>;
    /**
     *
     */
    static securityOtpAuthenticate(params: ISecurityOTPAuthenticateParams, options?: IRequestOptions): Promise<SecurityAuthenticateResultModel>;
    /**
     *
     */
    static bindUserAccount(params: IBindUserAccountParams, options?: IRequestOptions): Promise<AuthenticateResultModel>;
    /**
     *
     */
    static testNotification(params: ITestNotificationParams, options?: IRequestOptions): Promise<any>;
}
export declare class UiCustomizationSettingsService {
    /**
     *
     */
    static getUiManagementSettings(options?: IRequestOptions): Promise<UiCustomizationSettingsEditDto>;
    /**
     *
     */
    static updateUiManagementSettings(params: IUpdateUiManagementSettingsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateDefaultUiManagementSettings(params: IUpdateDefaultUiManagementSettingsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static useSystemDefaultSettings(options?: IRequestOptions): Promise<any>;
}
export declare class UserService {
    /**
     *
     */
    static getUsers(params: IGetUsersParams, options?: IRequestOptions): Promise<PagedResultDto_UserListDto>;
    /**
     *
     */
    static getUsersToExcel(options?: IRequestOptions): Promise<FileDto>;
    /**
     *
     */
    static getUserForEdit(params: IGetUserForEditParams, options?: IRequestOptions): Promise<GetUserForEditOutput>;
    /**
     *
     */
    static getUserPermissionsForEdit(params: IGetUserPermissionsForEditParams, options?: IRequestOptions): Promise<GetUserPermissionsForEditOutput>;
    /**
     *
     */
    static resetUserSpecificPermissions(params: IResetUserSpecificPermissionsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateUserPermissions(params: IUpdateUserPermissionsParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static createOrUpdateUser(params: ICreateOrUpdateUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static deleteUser(params: IDeleteUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static unlockUser(params: IUnlockUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getUsersForLogin(params: IGetUsersForLoginParams, options?: IRequestOptions): Promise<any>;
}
export declare class UserLinkService {
    /**
     *
     */
    static linkToUser(params: ILinkToUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getLinkedUsers(params: IGetLinkedUsersParams, options?: IRequestOptions): Promise<PagedResultDto_LinkedUserDto>;
    /**
     *
     */
    static getRecentlyUsedLinkedUsers(options?: IRequestOptions): Promise<ListResultDto_LinkedUserDto>;
    /**
     *
     */
    static unlinkUser(params: IUnlinkUserParams, options?: IRequestOptions): Promise<any>;
}
export declare class UserLoginService {
    /**
     *
     */
    static getRecentUserLoginAttempts(options?: IRequestOptions): Promise<ListResultDto_UserLoginAttemptDto>;
    /**
     *
     */
    static getNfcCurrentUserLogin(options?: IRequestOptions): Promise<GetNfcCurrentUserLoginOutput>;
    /**
     *
     */
    static createOrUpdateNfcUserLogin(params: ICreateOrUpdateNfcUserLoginParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static bindNfcCurrentUserLogin(params: IBindNfcCurrentUserLoginParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeNfcUserLogin(params: IRemoveNfcUserLoginParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeNfcCurrentUserLogin(params: IRemoveNfcCurrentUserLoginParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getUserLoginByProviderKey(params: IGetUserLoginByProviderKeyParams1, options?: IRequestOptions): Promise<UserLogin>;
    /**
     *
     */
    static bindUser(params: IBindUserParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static removeUserBind(params: IRemoveUserBindParams, options?: IRequestOptions): Promise<any>;
}
export declare class WebLogService {
    /**
     *
     */
    static getLatestWebLogs(options?: IRequestOptions): Promise<GetLatestWebLogsOutput>;
    /**
     *
     */
    static downloadWebLogs(options?: IRequestOptions): Promise<FileDto>;
}
export declare class WireCabinetService {
    /**
     *
     */
    static wireCabinetApply(params: IWireCabinetApplyParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static wireCabinetApprove(params: IWireCabinetApproveParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static wireCabinetUnlock(params: IWireCabinetUnlockParams, options?: IRequestOptions): Promise<WireCabinetUnlockOutput>;
    /**
     *
     */
    static wireCabinetHook(params: IWireCabinetHookParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static wireCabinetDeviceHook(params: IWireCabinetDeviceHookParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static wireCabinetUnHook(params: IWireCabinetUnHookParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static wireCabinetUpdateTask(params: IWireCabinetUpdateTaskParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getApplyReasonEnums(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getApplyReasonList(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getBuckleTypeEnums(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getLockModeEnums(options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getTask(params: IGetTaskParams1, options?: IRequestOptions): Promise<WireCabinetTaskOutput>;
    /**
     *
     */
    static getApplicants(options?: IRequestOptions): Promise<ListResultDto_WireCabinetOperatorDto>;
    /**
     *
     */
    static getApprovers(options?: IRequestOptions): Promise<ListResultDto_WireCabinetOperatorDto>;
    /**
     *
     */
    static getRecentlyTimeForSelectOperation(params: IGetRecentlyTimeForSelectOperationParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static updateOperateTime(params: IUpdateOperateTimeParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getWireDetail(params: IGetWireDetailParams, options?: IRequestOptions): Promise<WireDetailOutput>;
    /**
     *
     */
    static uploadFile(params: IUploadFileParams, options?: IRequestOptions): Promise<ListResultDto_UploadFileOutput>;
    /**
     *
     */
    static getWireCabinet(params: IGetWireCabinetParams, options?: IRequestOptions): Promise<WireCabinetOutput>;
    /**
     *
     */
    static createOrUpdateEquipmentPropertyConfig(params: ICreateOrUpdateEquipmentPropertyConfigParams, options?: IRequestOptions): Promise<any>;
    /**
     *
     */
    static getWirePile(params: IGetWirePileParams, options?: IRequestOptions): Promise<WirePileOutput>;
    /**
     *
     */
    static getWiresBeTaken(params: IGetWiresBeTakenParams, options?: IRequestOptions): Promise<ListResultDto_WireBeTakenDto>;
    /**
     *
     */
    static getWireCabinetBluetooths(options?: IRequestOptions): Promise<ListResultDto_WireCabinetBluetoothDto>;
    /**
     *
     */
    static checkWireConfigIsExsit(params: ICheckWireConfigIsExsitParams, options?: IRequestOptions): Promise<any>;
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
export declare class IsTenantAvailableInput {
    /**  */
    tenancyName: string;
    constructor(data?: any);
}
export declare enum EnumIsTenantAvailableOutputState {
    'Available' = "Available",
    'InActive' = "InActive",
    'NotFound' = "NotFound"
}
export declare class IsTenantAvailableOutput {
    /**  */
    state: EnumIsTenantAvailableOutputState;
    /**  */
    tenantId: number;
    /**  */
    serverRootAddress: string;
    constructor(data?: any);
}
export declare class RegisterInput {
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
    constructor(data?: any);
}
export declare class RegisterOutput {
    /**  */
    canLogin: boolean;
    constructor(data?: any);
}
export declare class SendPasswordResetCodeInput {
    /**  */
    emailAddress: string;
    constructor(data?: any);
}
export declare class ResetPasswordInput {
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
    constructor(data?: any);
}
export declare class ResetPasswordOutput {
    /**  */
    canLogin: boolean;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class SendEmailActivationLinkInput {
    /**  */
    emailAddress: string;
    constructor(data?: any);
}
export declare class ActivateEmailInput {
    /**  */
    userId: number;
    /**  */
    confirmationCode: string;
    constructor(data?: any);
}
export declare class ImpersonateInput {
    /**  */
    tenantId: number;
    /**  */
    userId: number;
    constructor(data?: any);
}
export declare class ImpersonateOutput {
    /**  */
    impersonationToken: string;
    /**  */
    tenancyName: string;
    constructor(data?: any);
}
export declare class SwitchToLinkedAccountInput {
    /**  */
    targetTenantId: number;
    /**  */
    targetUserId: number;
    constructor(data?: any);
}
export declare class SwitchToLinkedAccountOutput {
    /**  */
    switchAccountToken: string;
    /**  */
    tenancyName: string;
    constructor(data?: any);
}
export declare class PagedResultDto_AuditLogListDto {
    /**  */
    totalCount: number;
    /**  */
    items: AuditLogListDto[];
    constructor(data?: any);
}
export declare class AuditLogListDto {
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
    constructor(data?: any);
}
export declare class FileDto {
    /**  */
    fileName: string;
    /**  */
    fileType: string;
    /**  */
    fileToken: string;
    constructor(data?: any);
}
export declare class ListResultDto_CacheDto {
    /**  */
    items: CacheDto[];
    constructor(data?: any);
}
export declare class CacheDto {
    /**  */
    name: string;
    constructor(data?: any);
}
export declare class EntityDto_String {
    /**  */
    id: string;
    constructor(data?: any);
}
export declare class GetUserChatFriendsWithSettingsOutput {
    /**  */
    serverTime: string;
    /**  */
    friends: FriendDto[];
    constructor(data?: any);
}
export declare enum EnumFriendDtoState {
    'Accepted' = "Accepted",
    'Blocked' = "Blocked"
}
export declare class FriendDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_ChatMessageDto {
    /**  */
    items: ChatMessageDto[];
    constructor(data?: any);
}
export declare enum EnumChatMessageDtoSide {
    'Sender' = "Sender",
    'Receiver' = "Receiver"
}
export declare enum EnumChatMessageDtoReadState {
    'Unread' = "Unread",
    'Read' = "Read"
}
export declare enum EnumChatMessageDtoReceiverReadState {
    'Unread' = "Unread",
    'Read' = "Read"
}
export declare class ChatMessageDto {
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
    constructor(data?: any);
}
export declare class MarkAllUnreadMessagesOfUserAsReadInput {
    /**  */
    tenantId: number;
    /**  */
    userId: number;
    constructor(data?: any);
}
export declare class ListResultDto_SubscribableEditionComboboxItemDto {
    /**  */
    items: SubscribableEditionComboboxItemDto[];
    constructor(data?: any);
}
export declare class SubscribableEditionComboboxItemDto {
    /**  */
    isFree: boolean;
    /**  */
    value: string;
    /**  */
    displayText: string;
    /**  */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class FindUsersInput {
    /**  */
    tenantId: number;
    /**  */
    maxResultCount: number;
    /**  */
    skipCount: number;
    /**  */
    filter: string;
    constructor(data?: any);
}
export declare class PagedResultDto_NameValueDto {
    /**  */
    totalCount: number;
    /**  */
    items: NameValueDto[];
    constructor(data?: any);
}
export declare class NameValueDto {
    /**  */
    name: string;
    /**  */
    value: string;
    constructor(data?: any);
}
export declare class GetDefaultEditionNameOutput {
    /**  */
    name: string;
    constructor(data?: any);
}
export declare class ListResultDto_DeviceTypeComboboxItemDto {
    /**  */
    items: DeviceTypeComboboxItemDto[];
    constructor(data?: any);
}
export declare class DeviceTypeComboboxItemDto {
    /**  */
    value: string;
    /**  */
    displayText: string;
    /**  */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class ListResultDto_ComboboxItemDto {
    /**  */
    items: ComboboxItemDto[];
    constructor(data?: any);
}
export declare class ComboboxItemDto {
    /**  */
    value: string;
    /**  */
    displayText: string;
    /**  */
    isSelected: boolean;
    constructor(data?: any);
}
export declare class DateToStringOutput {
    /**  */
    dateString: string;
    constructor(data?: any);
}
export declare class NameValue_String {
    /**  */
    name: string;
    /**  */
    value: string;
    constructor(data?: any);
}
export declare class StringOutput {
    /**  */
    output: string;
    constructor(data?: any);
}
export declare class PagedResultDto_DeviceListDto {
    /**  */
    totalCount: number;
    /**  */
    items: DeviceListDto[];
    constructor(data?: any);
}
export declare class DeviceListDto {
    /**  */
    name: string;
    /**  */
    description: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceEditOutput {
    /**  */
    device: DeviceEditDto;
    /**  */
    configListDtos: DeviceCodeInfoDto[];
    constructor(data?: any);
}
export declare class DeviceEditDto {
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
    constructor(data?: any);
}
export declare class DeviceCodeInfoDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceInput {
    /**  */
    device: CreateOrUpdateDeviceDto;
    /**  */
    codeInfoDtos: DeviceCodeInfoEditDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceDto {
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
    constructor(data?: any);
}
export declare enum EnumDeviceCodeInfoEditDtoLockCodeNumber {
    'Um1' = "Um1",
    'Um2' = "Um2",
    'Um3' = "Um3",
    'Um4' = "Um4",
    'Um5' = "Um5",
    'Um6' = "Um6",
    'Um7' = "Um7",
    'Um8' = "Um8",
    'Um9' = "Um9",
    'Um10' = "Um10",
    'Um11' = "Um11",
    'Um12' = "Um12",
    'Um13' = "Um13",
    'Um14' = "Um14",
    'Um15' = "Um15",
    'Um16' = "Um16",
    'Um17' = "Um17",
    'Um18' = "Um18"
}
export declare class DeviceCodeInfoEditDto {
    /**  */
    lockCodeNumber: EnumDeviceCodeInfoEditDtoLockCodeNumber;
    /**  */
    code: string;
    /**  */
    lockCodeConfigId: number;
    constructor(data?: any);
}
export declare class QueryDevicesStateInput {
    /**  */
    stationDevices: StationDeviceDto[];
    constructor(data?: any);
}
export declare class StationDeviceDto {
    /**  */
    stationName: string;
    /**  */
    pointName: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDto_DeviceStateDto {
    /**  */
    items: DeviceStateDto[];
    constructor(data?: any);
}
export declare class DeviceStateDto {
    /**  */
    stationName: string;
    /**  */
    pointName: string;
    /**  */
    state: number;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class UpdateDeviceStateInput {
    /**  */
    deviceState: DeviceStateDto;
    constructor(data?: any);
}
export declare class UpdateDeviceStateOutput {
    /**  */
    deviceState: DeviceStateDto;
    constructor(data?: any);
}
export declare class CheckDeviceNameIsExistInput {
    /**  */
    stationId: number;
    /**  */
    name: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDto_DeviceAreaListDto {
    /**  */
    items: DeviceAreaListDto[];
    constructor(data?: any);
}
export declare class DeviceAreaListDto {
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
    constructor(data?: any);
}
export declare class GetDeviceAreaEditOutput {
    /**  */
    deviceArea: GetDeviceAreaEditDto;
    constructor(data?: any);
}
export declare class GetDeviceAreaEditDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceAreaInput {
    /**  */
    deviceArea: CreateOrUpdateDeviceAreaDto;
    /**  */
    children: number[];
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceAreaDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_DeviceBoardDto {
    /**  */
    totalCount: number;
    /**  */
    items: DeviceBoardDto[];
    constructor(data?: any);
}
export declare class DeviceBoardDto {
    /**  */
    name: string;
    /**  */
    term: string;
    /**  */
    contentStorageId: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceBoardEditOutput {
    /**  */
    deviceBoard: DeviceBoardEditDto;
    constructor(data?: any);
}
export declare class DeviceBoardEditDto {
    /**  */
    name: string;
    /**  */
    term: string;
    /**  */
    contentStorageId: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceBoardInput {
    /**  */
    deviceBoard: CreateOrUpdateDeviceBoardDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceBoardDto {
    /**  */
    name: string;
    /**  */
    term: string;
    /**  */
    contentStorageId: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class IFormFile {
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
    constructor(data?: any);
}
export declare class UploadFileOutput {
    /**  */
    id: string;
    /**  */
    fileName: string;
    constructor(data?: any);
}
export declare class PagedResultDto_LockCodePropertyListDto {
    /**  */
    totalCount: number;
    /**  */
    items: LockCodePropertyListDto[];
    constructor(data?: any);
}
export declare class LockCodePropertyListDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_LockCodePropertySelectDto {
    /**  */
    items: LockCodePropertySelectDto[];
    constructor(data?: any);
}
export declare class LockCodePropertySelectDto {
    /**  */
    codeName: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class LockCodePropertyEditDto {
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
    constructor(data?: any);
}
export declare class LockCodeConfigListDto {
    /**  */
    lockType: string;
    /**  */
    lockPropertyType: string;
    /**  */
    lockCodeNumber: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateLockCodePropertyInput {
    /**  */
    codePropertyDto: CreateOrUpdateLockCodePropertyDto;
    /**  */
    lockCodeConfigs: LockCodeConfigEditDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateLockCodePropertyDto {
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
    constructor(data?: any);
}
export declare enum EnumLockCodeConfigEditDtoLockType {
    'NoKey' = "NoKey",
    'JXLock' = "JXLock",
    'DBMLock' = "DBMLock",
    'DKLock' = "DKLock",
    'DXDKLock' = "DXDKLock",
    'GSNYD' = "GSNYD",
    'WYYD' = "WYYD",
    'YYYD' = "YYYD",
    'CJFKLock' = "CJFKLock",
    'FKSDBMLock' = "FKSDBMLock",
    'ZNLock' = "ZNLock",
    'ZNYB' = "ZNYB",
    'YYDWZJC' = "YYDWZJC",
    'WYDWZJC' = "WYDWZJC",
    'JXDBMLock' = "JXDBMLock",
    'DBMLock_2H' = "DBMLock_2H",
    'DBMLock_3H' = "DBMLock_3H",
    'XJLock' = "XJLock",
    'WX_DBMLock' = "WX_DBMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_GSN2L' = "WX_GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'ZNHWMLock' = "ZNHWMLock",
    'GSN2E' = "GSN2E",
    'GSN2YD' = "GSN2YD",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'WX_DZBQ' = "WX_DZBQ",
    'WX_BSJXLock' = "WX_BSJXLock",
    'WX_SGWZSLock' = "WX_SGWZSLock",
    'SGWZSLock' = "SGWZSLock",
    'TBLock' = "TBLock",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'ZNSXLock' = "ZNSXLock",
    'GYJLYDQ' = "GYJLYDQ",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare enum EnumLockCodeConfigEditDtoLockPropertyType {
    'NoKey' = "NoKey",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'HWGMLock' = "HWGMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_DBMLock' = "WX_DBMLock",
    'GSN2L' = "GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'WX_SKJXLock' = "WX_SKJXLock",
    'GSN2YD' = "GSN2YD",
    'XJLock' = "XJLock",
    'JM_GSN2YD' = "JM_GSN2YD",
    'GLDBP' = "GLDBP",
    'GLWYBS' = "GLWYBS",
    'LSGLGLock' = "LSGLGLock",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare enum EnumLockCodeConfigEditDtoLockCodeNumber {
    'Um1' = "Um1",
    'Um2' = "Um2",
    'Um3' = "Um3",
    'Um4' = "Um4",
    'Um5' = "Um5",
    'Um6' = "Um6",
    'Um7' = "Um7",
    'Um8' = "Um8",
    'Um9' = "Um9",
    'Um10' = "Um10",
    'Um11' = "Um11",
    'Um12' = "Um12",
    'Um13' = "Um13",
    'Um14' = "Um14",
    'Um15' = "Um15",
    'Um16' = "Um16",
    'Um17' = "Um17",
    'Um18' = "Um18"
}
export declare class LockCodeConfigEditDto {
    /**  */
    lockType: EnumLockCodeConfigEditDtoLockType;
    /**  */
    lockPropertyType: EnumLockCodeConfigEditDtoLockPropertyType;
    /**  */
    lockCodeNumber: EnumLockCodeConfigEditDtoLockCodeNumber;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetDeviceTermsOutput {
    /**  */
    stationName: string;
    /**  */
    pointName: string;
    /**  */
    deviceStateTerms: DeviceStateTermDto[];
    constructor(data?: any);
}
export declare class DeviceStateTermDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_DeviceOperationListDto {
    /**  */
    items: DeviceOperationListDto[];
    constructor(data?: any);
}
export declare class DeviceOperationListDto {
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
    constructor(data?: any);
}
export declare class TermListDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceOperationInput {
    /**  */
    deviceOperation: DeviceOperationEditDto;
    constructor(data?: any);
}
export declare class DeviceOperationEditDto {
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
    constructor(data?: any);
}
export declare enum EnumTermEditDtoType {
    'Default' = "Default",
    'ByLinkage' = "ByLinkage",
    'AddBefault' = "AddBefault",
    'AddAfter' = "AddAfter",
    'Selectable' = "Selectable"
}
export declare class TermEditDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_DeviceTypeListDto {
    /**  */
    totalCount: number;
    /**  */
    items: DeviceTypeListDto[];
    constructor(data?: any);
}
export declare class DeviceTypeListDto {
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
    constructor(data?: any);
}
export declare class GetDeviceTypeEditOutput {
    /**  */
    deviceType: DeviceTypeEditDto;
    /**  */
    deviceStates: DeviceStateListDto[];
    constructor(data?: any);
}
export declare class DeviceTypeEditDto {
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
    constructor(data?: any);
}
export declare class DeviceStateListDto {
    /**  */
    name: string;
    /**  */
    state: number;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateDeviceTypeInput {
    /**  */
    deviceType: DeviceTypeEditDto;
    /**  */
    deviceStates: DeviceStateListDto[];
    constructor(data?: any);
}
export declare class ListResultDto_EditionListDto {
    /**  */
    items: EditionListDto[];
    constructor(data?: any);
}
export declare class EditionListDto {
    /**  */
    name: string;
    /**  */
    displayName: string;
    /**  */
    creationTime: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetEditionEditOutput {
    /**  */
    edition: EditionEditDto;
    /**  */
    featureValues: NameValueDto[];
    /**  */
    features: FlatFeatureDto[];
    constructor(data?: any);
}
export declare class EditionEditDto {
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
    constructor(data?: any);
}
export declare class FlatFeatureDto {
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
    constructor(data?: any);
}
export declare class FeatureInputTypeDto {
    /**  */
    name: string;
    /**  */
    attributes: object;
    /**  */
    validator: IValueValidator;
    /**  */
    itemSource: LocalizableComboboxItemSourceDto;
    constructor(data?: any);
}
export declare class IValueValidator {
    /**  */
    name: string;
    /**  */
    attributes: object;
    constructor(data?: any);
}
export declare class LocalizableComboboxItemSourceDto {
    /**  */
    items: LocalizableComboboxItemDto[];
    constructor(data?: any);
}
export declare class LocalizableComboboxItemDto {
    /**  */
    value: string;
    /**  */
    displayText: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateEditionDto {
    /**  */
    edition: EditionEditDto;
    /**  */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class ListResultDto_EquipmentListDto {
    /**  */
    items: EquipmentListDto[];
    constructor(data?: any);
}
export declare class EquipmentListDto {
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
    constructor(data?: any);
}
export declare class GetEquipmentEditOutput {
    /**  */
    equipment: EquipmentEditDto;
    /**  */
    equipmentProperties: EquipmentPropertyListDto[];
    /**  */
    equipmentBindPort: EquipmentBindPortDto;
    constructor(data?: any);
}
export declare class EquipmentEditDto {
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
    constructor(data?: any);
}
export declare class EquipmentPropertyListDto {
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
    constructor(data?: any);
}
export declare class EquipmentBindPortDto {
    /**  */
    terminalId: number;
    /**  */
    terminalName: string;
    /**  */
    terminalPortConfigId: number;
    /**  */
    terminalPortConfigName: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateEquipmentInput {
    /**  */
    equipment: CreateOrUpdateEquipmentDto;
    /**  */
    equipmentProperties: EquipmentPropertyEditDto[];
    /**  */
    bindPorts: CreateOrUpdateBindPortDto[];
    constructor(data?: any);
}
export declare class CreateOrUpdateEquipmentDto {
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
    constructor(data?: any);
}
export declare enum EnumEquipmentPropertyEditDtoType {
    'BaseProperty' = "BaseProperty",
    'SignalingAndControl' = "SignalingAndControl",
    'SensingAndAdjustment' = "SensingAndAdjustment"
}
export declare enum EnumEquipmentPropertyEditDtoBitType {
    'ReadOnly' = "ReadOnly",
    'WriteOnly' = "WriteOnly",
    'ReadAndWrite' = "ReadAndWrite"
}
export declare class EquipmentPropertyEditDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateBindPortDto {
    /**  */
    terminalPortConfigId: number;
    constructor(data?: any);
}
export declare class PagedResultDto_EquipmentListDto {
    /**  */
    totalCount: number;
    /**  */
    items: EquipmentListDto[];
    constructor(data?: any);
}
export declare class ListResultDto_EquipmentWithPropertyDto {
    /**  */
    items: EquipmentWithPropertyDto[];
    constructor(data?: any);
}
export declare enum EnumEquipmentWithPropertyDtoProductType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class EquipmentWithPropertyDto {
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
    constructor(data?: any);
}
export declare enum EnumEquipmentPropertyForSingleEquipmentBitType {
    'ReadOnly' = "ReadOnly",
    'WriteOnly' = "WriteOnly",
    'ReadAndWrite' = "ReadAndWrite"
}
export declare class EquipmentPropertyForSingleEquipment {
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
    constructor(data?: any);
}
export declare class PagedResultDto_EquipmentInpageDto {
    /**  */
    totalCount: number;
    /**  */
    items: EquipmentInpageDto[];
    constructor(data?: any);
}
export declare enum EnumEquipmentInpageDtoProductType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class EquipmentInpageDto {
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
    constructor(data?: any);
}
export declare class EquipmentBasePropertyInpageDto {
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
    constructor(data?: any);
}
export declare class EquipmentWithPropertyOutput {
    /**  */
    equipmentWithProperty: EquipmentWithPropertyDto;
    constructor(data?: any);
}
export declare class ControlEquipmentInput {
    /**  */
    equipmentId: number;
    /**  */
    index: number;
    /**  */
    value: number;
    constructor(data?: any);
}
export declare class IListResult_EquipmentCombineProperties {
    /**  */
    items: EquipmentCombineProperties[];
    constructor(data?: any);
}
export declare class EquipmentCombineProperties {
    /**  */
    name: string;
    /**  */
    description: string;
    /**  */
    equipmentProperties: EquipmentPropertyListDto[];
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class CreateFriendshipRequestInput {
    /**  */
    userId: number;
    /**  */
    tenantId: number;
    constructor(data?: any);
}
export declare class CreateFriendshipRequestByUserNameInput {
    /**  */
    tenancyName: string;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class BlockUserInput {
    /**  */
    userId: number;
    /**  */
    tenantId: number;
    constructor(data?: any);
}
export declare class UnblockUserInput {
    /**  */
    userId: number;
    /**  */
    tenantId: number;
    constructor(data?: any);
}
export declare class AcceptFriendshipRequestInput {
    /**  */
    userId: number;
    /**  */
    tenantId: number;
    constructor(data?: any);
}
export declare class ListResultDto_GraphListDto {
    /**  */
    items: GraphListDto[];
    constructor(data?: any);
}
export declare class GraphListDto {
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
    constructor(data?: any);
}
export declare class GraphEditDto {
    /**  */
    name: string;
    /**  */
    contentStorageId: string;
    /**  */
    parentId: number;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class CreateOrUpdateGraphInput {
    /**  */
    graph: GraphEditDto;
    constructor(data?: any);
}
export declare class HostDashboardData {
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
    constructor(data?: any);
}
export declare class IncomeStastistic {
    /**  */
    label: string;
    /**  */
    date: string;
    /**  */
    amount: number;
    constructor(data?: any);
}
export declare class TenantEdition {
    /**  */
    label: string;
    /**  */
    value: number;
    constructor(data?: any);
}
export declare class ExpiringTenant {
    /**  */
    tenantName: string;
    /**  */
    remainingDayCount: number;
    constructor(data?: any);
}
export declare class RecentTenant {
    /**  */
    id: number;
    /**  */
    name: string;
    /**  */
    creationTime: string;
    constructor(data?: any);
}
export declare class GetIncomeStatisticsDataOutput {
    /**  */
    incomeStatistics: IncomeStastistic[];
    constructor(data?: any);
}
export declare class GetEditionTenantStatisticsOutput {
    /**  */
    editionStatistics: TenantEdition[];
    constructor(data?: any);
}
export declare class HostSettingsEditDto {
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
    constructor(data?: any);
}
export declare class GeneralSettingsEditDto {
    /**  */
    timezone: string;
    /**  */
    timezoneForComparison: string;
    constructor(data?: any);
}
export declare class HostUserManagementSettingsEditDto {
    /**  */
    isEmailConfirmationRequiredForLogin: boolean;
    /**  */
    smsVerificationEnabled: boolean;
    constructor(data?: any);
}
export declare class EmailSettingsEditDto {
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
    constructor(data?: any);
}
export declare class TenantManagementSettingsEditDto {
    /**  */
    allowSelfRegistration: boolean;
    /**  */
    isNewRegisteredTenantActiveByDefault: boolean;
    /**  */
    useCaptchaOnRegistration: boolean;
    /**  */
    defaultEditionId: number;
    constructor(data?: any);
}
export declare class SecuritySettingsEditDto {
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
    constructor(data?: any);
}
export declare class HostBillingSettingsEditDto {
    /**  */
    legalName: string;
    /**  */
    address: string;
    constructor(data?: any);
}
export declare class PushSettingEditDto {
    /**  */
    iOSAppKey: string;
    /**  */
    androidAppKey: string;
    /**  */
    pages: PushMobilePagesSettingEditDto;
    constructor(data?: any);
}
export declare class PasswordComplexitySetting {
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
    constructor(data?: any);
}
export declare class UserLockOutSettingsEditDto {
    /**  */
    isEnabled: boolean;
    /**  */
    maxFailedAccessAttemptsBeforeLockout: number;
    /**  */
    defaultAccountLockoutSeconds: number;
    constructor(data?: any);
}
export declare class TwoFactorLoginSettingsEditDto {
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
    constructor(data?: any);
}
export declare class PushMobilePagesSettingEditDto {
    /**  */
    keyCabinetDetailPage: string;
    /**  */
    wireCabinetDetailPage: string;
    /**  */
    safetyWearDetailPage: string;
    constructor(data?: any);
}
export declare class SendTestEmailInput {
    /**  */
    emailAddress: string;
    constructor(data?: any);
}
export declare class CreateDbBaseInput {
    /**  */
    dbName: string;
    constructor(data?: any);
}
export declare class WriteDataToDbInput {
    /**  */
    equipmentId: string;
    /**  */
    dataToDbDtos: WriteDataToDbDto[];
    constructor(data?: any);
}
export declare enum EnumWriteDataToDbDtoDataType {
    'TemperatureBatteryLevelRssiLevel' = "TemperatureBatteryLevelRssiLevel",
    'TemperatureHighByte' = "TemperatureHighByte",
    'TemperatureHighByte00' = "TemperatureHighByte00",
    'TemperatureMagnify10Times' = "TemperatureMagnify10Times"
}
export declare class WriteDataToDbDto {
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
    constructor(data?: any);
}
export declare enum EnumReadDataFromDbInputDataType {
    'TemperatureBatteryLevelRssiLevel' = "TemperatureBatteryLevelRssiLevel",
    'TemperatureHighByte' = "TemperatureHighByte",
    'TemperatureHighByte00' = "TemperatureHighByte00",
    'TemperatureMagnify10Times' = "TemperatureMagnify10Times"
}
export declare class ReadDataFromDbInput {
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
    constructor(data?: any);
}
export declare class ReadDataFromDbOutput {
    /**  */
    equipmentId: string;
    /**  */
    readDataFromDbDtos: ReadDataFromDbDto[];
    constructor(data?: any);
}
export declare class ReadDataFromDbDto {
    /**  */
    rssiLevel: number;
    /**  */
    batteryLevel: number;
    /**  */
    temperature: number;
    /**  */
    dateTime: string;
    constructor(data?: any);
}
export declare class InstallDto {
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
    constructor(data?: any);
}
export declare class AppSettingsJsonDto {
    /**  */
    webSiteUrl: string;
    /**  */
    serverSiteUrl: string;
    /**  */
    languages: NameValue[];
    constructor(data?: any);
}
export declare class NameValue {
    /**  */
    name: string;
    /**  */
    value: string;
    constructor(data?: any);
}
export declare class CheckDatabaseOutput {
    /**  */
    isDatabaseExist: boolean;
    constructor(data?: any);
}
export declare class AddIntelligentLocksInput {
    /**  */
    roleId: number;
    /**  */
    intelligentLockDtos: AddIntelligentLockDto[];
    constructor(data?: any);
}
export declare class AddIntelligentLockDto {
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
    constructor(data?: any);
}
export declare class UpdateIntelligentLocksInput {
    /**  */
    roleId: number;
    /**  */
    intelligentLockDtos: UpdateIntelligentLockDto[];
    constructor(data?: any);
}
export declare class UpdateIntelligentLockDto {
    /**  */
    deviceId: number;
    /**  */
    deviceAreaId: number;
    /**  */
    isEst: boolean;
    /**  */
    stationId: number;
    constructor(data?: any);
}
export declare class ListResultDto_IntelligentLockOutput {
    /**  */
    items: IntelligentLockOutput[];
    constructor(data?: any);
}
export declare class IntelligentLockOutput {
    /**  */
    id: number;
    /**  */
    deviceId: number;
    /**  */
    isEst: boolean;
    constructor(data?: any);
}
export declare class ListResultDto_IntelligentLockDetailOutput {
    /**  */
    items: IntelligentLockDetailOutput[];
    constructor(data?: any);
}
export declare class IntelligentLockDetailOutput {
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
    constructor(data?: any);
}
export declare class DeviceDetailOutput {
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
    constructor(data?: any);
}
export declare class DeviceCodeInfoOutput {
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
    constructor(data?: any);
}
export declare class InvoiceDto {
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
    constructor(data?: any);
}
export declare class CreateInvoiceDto {
    /**  */
    subscriptionPaymentId: number;
    constructor(data?: any);
}
export declare enum EnumKeyCabinetApplyInputApplyReason {
    'EquipmentFailure' = "EquipmentFailure",
    'EquipmentOverhaul' = "EquipmentOverhaul",
    'UrgentUnlock' = "UrgentUnlock",
    'OtherReason' = "OtherReason",
    'UnLockNormalOperation' = "UnLockNormalOperation",
    'OpenLockDeviceSetupDebug' = "OpenLockDeviceSetupDebug",
    'OpenLockWfDeviceDailyMaintenance' = "OpenLockWfDeviceDailyMaintenance",
    'OpenLockWfDeviceFaultHandling' = "OpenLockWfDeviceFaultHandling",
    'OpenLockNormalDeviceDailyMaintenance' = "OpenLockNormalDeviceDailyMaintenance"
}
export declare enum EnumKeyCabinetApplyInputApproverType {
    'BaseApprover' = "BaseApprover",
    'OpenLockApprover' = "OpenLockApprover",
    'UnLockApprover' = "UnLockApprover"
}
export declare class KeyCabinetApplyInput {
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
    constructor(data?: any);
}
export declare class ApiResultOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: string;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetApproveInput {
    /**  */
    equipmentPropertyId: number;
    /**  */
    approverId: number;
    /**  */
    isApprovePass: boolean;
    /**  */
    approveNote: string;
    constructor(data?: any);
}
export declare class KeyCabinetUnlockInput {
    /**  */
    equipmentPropertyId: number;
    /**  */
    operatorId: number;
    /**  */
    unLockReason: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_KeyCabinetUnlockOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: KeyCabinetUnlockOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetUnlockOutput {
    /**  */
    unlockCode: string;
    /**  */
    openDoorCode: string;
    constructor(data?: any);
}
export declare class KeyCabinetGenerateUnlockCodeInput {
    /**  */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class ApiResultOutput_KeyCabinetGenerateUnlockCodeOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: KeyCabinetGenerateUnlockCodeOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetGenerateUnlockCodeOutput {
    /**  */
    unlockCode: string;
    /**  */
    openDoorCode: string;
    /**  */
    unlockCodeGenerateTime: string;
    constructor(data?: any);
}
export declare class KeyCabinetOpenDoorInput {
    /**  */
    operatorId: number;
    /**  */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class KeyCabinetReturnInput {
    /**  */
    equipmentPropertyId: number;
    /**  */
    operatorId: number;
    constructor(data?: any);
}
export declare class ApiResultOutput_Dictionary_Int32_String {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: object;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_List_KeyCabinetValueTextDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: KeyCabinetValueTextDto[];
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class KeyCabinetValueTextDto {
    /**  */
    value: number;
    /**  */
    text: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_KeyCabinetTaskOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: KeyCabinetTaskOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare enum EnumKeyCabinetTaskOutputUnlockMode {
    'Online' = "Online",
    'Bluetooth' = "Bluetooth",
    'Password' = "Password"
}
export declare enum EnumKeyCabinetTaskOutputLockMode {
    'LockerDoor' = "LockerDoor",
    'LockerBuckle' = "LockerBuckle"
}
export declare enum EnumKeyCabinetTaskOutputTaskStep {
    'None' = "None",
    'Applying' = "Applying",
    'ApprovalPassed' = "ApprovalPassed",
    'ApprovalNotPassed' = "ApprovalNotPassed",
    'Unlocked' = "Unlocked",
    'TimeOut' = "TimeOut",
    'TakenOut' = "TakenOut",
    'Returned' = "Returned",
    'Ended' = "Ended",
    'Expired' = "Expired",
    'ErrorCode' = "ErrorCode"
}
export declare enum EnumKeyCabinetTaskOutputApplyReason {
    'EquipmentFailure' = "EquipmentFailure",
    'EquipmentOverhaul' = "EquipmentOverhaul",
    'UrgentUnlock' = "UrgentUnlock",
    'OtherReason' = "OtherReason",
    'UnLockNormalOperation' = "UnLockNormalOperation",
    'OpenLockDeviceSetupDebug' = "OpenLockDeviceSetupDebug",
    'OpenLockWfDeviceDailyMaintenance' = "OpenLockWfDeviceDailyMaintenance",
    'OpenLockWfDeviceFaultHandling' = "OpenLockWfDeviceFaultHandling",
    'OpenLockNormalDeviceDailyMaintenance' = "OpenLockNormalDeviceDailyMaintenance"
}
export declare enum EnumKeyCabinetTaskOutputApproverType {
    'BaseApprover' = "BaseApprover",
    'OpenLockApprover' = "OpenLockApprover",
    'UnLockApprover' = "UnLockApprover"
}
export declare class KeyCabinetTaskOutput {
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
    constructor(data?: any);
}
export declare class KeyCabinetApproveFlowItemDto {
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
    constructor(data?: any);
}
export declare class KeyCabinetEndTaskInput {
    /**  */
    applicantId: number;
    /**  */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class ApiResultOutput_ListResultDto_KeyCabinetOperatorDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: ListResultDto_KeyCabinetOperatorDto;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDto_KeyCabinetOperatorDto {
    /**  */
    items: KeyCabinetOperatorDto[];
    constructor(data?: any);
}
export declare class KeyCabinetOperatorDto {
    /**  */
    id: number;
    /**  */
    name: string;
    /**  */
    surname: string;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_Boolean {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: boolean;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_ListResultDto_KeyCarbinetLogListOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: ListResultDto_KeyCarbinetLogListOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDto_KeyCarbinetLogListOutput {
    /**  */
    items: KeyCarbinetLogListOutput[];
    constructor(data?: any);
}
export declare class KeyCarbinetLogListOutput {
    /**  */
    logId: number;
    /**  */
    log: KeyCabinetTaskOutput;
    constructor(data?: any);
}
export declare class KeyCarbinetLogInput {
    /**  */
    logId: number;
    /**  */
    taskName: string;
    /**  */
    equipmentPropertyNameForLog: string;
    /**  */
    applyReasonNameForLog: string;
    constructor(data?: any);
}
export declare class GetLanguagesOutput {
    /**  */
    defaultLanguageName: string;
    /**  */
    items: ApplicationLanguageListDto[];
    constructor(data?: any);
}
export declare class ApplicationLanguageListDto {
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
    constructor(data?: any);
}
export declare class GetLanguageForEditOutput {
    /**  */
    language: ApplicationLanguageEditDto;
    /**  */
    languageNames: ComboboxItemDto[];
    /**  */
    flags: ComboboxItemDto[];
    constructor(data?: any);
}
export declare class ApplicationLanguageEditDto {
    /**  */
    id: number;
    /**  */
    name: string;
    /**  */
    icon: string;
    /**  */
    isEnabled: boolean;
    constructor(data?: any);
}
export declare class CreateOrUpdateLanguageInput {
    /**  */
    language: ApplicationLanguageEditDto;
    constructor(data?: any);
}
export declare class SetDefaultLanguageInput {
    /**  */
    name: string;
    constructor(data?: any);
}
export declare class PagedResultDto_LanguageTextListDto {
    /**  */
    totalCount: number;
    /**  */
    items: LanguageTextListDto[];
    constructor(data?: any);
}
export declare class LanguageTextListDto {
    /**  */
    key: string;
    /**  */
    baseValue: string;
    /**  */
    targetValue: string;
    constructor(data?: any);
}
export declare class UpdateLanguageTextInput {
    /**  */
    languageName: string;
    /**  */
    sourceName: string;
    /**  */
    key: string;
    /**  */
    value: string;
    constructor(data?: any);
}
export declare class AddOrUpdateLockControlTaskInput {
    /**  */
    lockControlTask: LockControlTaskDto;
    /**  */
    lockControlTaskItems: LockControlTaskItemDto[];
    constructor(data?: any);
}
export declare enum EnumLockControlTaskDtoState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare class LockControlTaskDto {
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
    constructor(data?: any);
}
export declare class LockControlTaskItemDto {
    /**  */
    deviceId: number;
    /**  */
    no: number;
    /**  */
    name: string;
    /**  */
    description: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_PagedResultDto_LockControlTaskDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: PagedResultDto_LockControlTaskDto;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class PagedResultDto_LockControlTaskDto {
    /**  */
    totalCount: number;
    /**  */
    items: LockControlTaskDto[];
    constructor(data?: any);
}
export declare class ApiResultOutput_LockControlTaskDetailOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: LockControlTaskDetailOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskDetailOutput {
    /**  */
    lockControlTask: LockControlTaskDto;
    /**  */
    lockControlTaskItems: LockControlTaskItemDto[];
    constructor(data?: any);
}
export declare class LockControlTaskInput {
    /**  */
    taskId: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_LockControlTaskPendingDetailOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: LockControlTaskPendingDetailOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskPendingDetailOutput {
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
    constructor(data?: any);
}
export declare class AprroveLockControlPendingInput {
    /**  */
    taskId: string;
    /**  */
    approvalThrough: boolean;
    /**  */
    approvalReason: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_LockControlTaskOptOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: LockControlTaskOptOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class LockControlTaskOptOutput {
    /**  */
    taskNo: number;
    /**  */
    taskBeginTime: string;
    /**  */
    taskEndTime: string;
    /**  */
    deviceLockInfoDtos: DeviceLockInfoDto[];
    constructor(data?: any);
}
export declare class DeviceLockInfoDto {
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
    constructor(data?: any);
}
export declare class LockInfoDto {
    /**  */
    code: string;
    /**  */
    lockCodeNumber: number;
    /**  */
    lockType: number;
    /**  */
    lockPropertyType: number;
    constructor(data?: any);
}
export declare class UploadJsqOperationLogInput {
    /**  */
    jsqOperationLogs: JsqOperationLogDto[];
    constructor(data?: any);
}
export declare class JsqOperationLogDto {
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
    constructor(data?: any);
}
export declare class ApiResultOutput_PagedResultDto_JsqOptLogDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: PagedResultDto_JsqOptLogDto;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class PagedResultDto_JsqOptLogDto {
    /**  */
    totalCount: number;
    /**  */
    items: JsqOptLogDto[];
    constructor(data?: any);
}
export declare class JsqOptLogDto {
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
    constructor(data?: any);
}
export declare class GetNotificationsOutput {
    /**  */
    unreadCount: number;
    /**  */
    totalCount: number;
    /**  */
    items: UserNotification[];
    constructor(data?: any);
}
export declare enum EnumUserNotificationState {
    'Unread' = "Unread",
    'Read' = "Read"
}
export declare class UserNotification {
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
    constructor(data?: any);
}
export declare enum EnumTenantNotificationSeverity {
    'Info' = "Info",
    'Success' = "Success",
    'Warn' = "Warn",
    'Error' = "Error",
    'Fatal' = "Fatal"
}
export declare class TenantNotification {
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
    constructor(data?: any);
}
export declare class NotificationData {
    /**  */
    type: string;
    /**  */
    properties: object;
    constructor(data?: any);
}
export declare class EntityDto_Guid {
    /**  */
    id: string;
    constructor(data?: any);
}
export declare class GetNotificationSettingsOutput {
    /**  */
    receiveNotifications: boolean;
    /**  */
    notifications: NotificationSubscriptionWithDisplayNameDto[];
    constructor(data?: any);
}
export declare class NotificationSubscriptionWithDisplayNameDto {
    /**  */
    displayName: string;
    /**  */
    description: string;
    /**  */
    name: string;
    /**  */
    isSubscribed: boolean;
    constructor(data?: any);
}
export declare class UpdateNotificationSettingsInput {
    /**  */
    receiveNotifications: boolean;
    /**  */
    notifications: NotificationSubscriptionDto[];
    constructor(data?: any);
}
export declare class NotificationSubscriptionDto {
    /**  */
    name: string;
    /**  */
    isSubscribed: boolean;
    constructor(data?: any);
}
export declare class GetOperationRecordOutput {
    /**  */
    infoDto: OperationRecordInfoDto;
    /**  */
    itemDtos: OperationRecordItemListDto[];
    constructor(data?: any);
}
export declare enum EnumOperationRecordInfoDtoEquipmentType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare enum EnumOperationRecordInfoDtoRecordLevel {
    'Red' = "Red",
    'Gray' = "Gray",
    'Green' = "Green"
}
export declare class OperationRecordInfoDto {
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
    constructor(data?: any);
}
export declare class OperationRecordItemListDto {
    /**  */
    operationTime: string;
    /**  */
    operationDescription: string;
    constructor(data?: any);
}
export declare class PagedResultDto_OperationRecordListDto {
    /**  */
    totalCount: number;
    /**  */
    items: OperationRecordListDto[];
    constructor(data?: any);
}
export declare enum EnumOperationRecordListDtoEquipmentType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare enum EnumOperationRecordListDtoRecordLevel {
    'Red' = "Red",
    'Gray' = "Gray",
    'Green' = "Green"
}
export declare class OperationRecordListDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_OrganizationUnitDto {
    /**  */
    items: OrganizationUnitDto[];
    constructor(data?: any);
}
export declare class OrganizationUnitDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_OrganizationUnitUserListDto {
    /**  */
    totalCount: number;
    /**  */
    items: OrganizationUnitUserListDto[];
    constructor(data?: any);
}
export declare class OrganizationUnitUserListDto {
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
    constructor(data?: any);
}
export declare class CreateOrganizationUnitInput {
    /**  */
    parentId: number;
    /**  */
    displayName: string;
    constructor(data?: any);
}
export declare class UpdateOrganizationUnitInput {
    /**  */
    id: number;
    /**  */
    displayName: string;
    constructor(data?: any);
}
export declare class MoveOrganizationUnitInput {
    /**  */
    id: number;
    /**  */
    newParentId: number;
    constructor(data?: any);
}
export declare class UsersToOrganizationUnitInput {
    /**  */
    userIds: number[];
    /**  */
    organizationUnitId: number;
    constructor(data?: any);
}
export declare class FindOrganizationUnitUsersInput {
    /**  */
    organizationUnitId: number;
    /**  */
    maxResultCount: number;
    /**  */
    skipCount: number;
    /**  */
    filter: string;
    constructor(data?: any);
}
export declare class PaymentInfoDto {
    /**  */
    edition: EditionSelectDto;
    /**  */
    additionalPrice: number;
    constructor(data?: any);
}
export declare class EditionSelectDto {
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
    constructor(data?: any);
}
export declare enum EnumCreatePaymentDtoEditionPaymentType {
    'NewRegistration' = "NewRegistration",
    'BuyNow' = "BuyNow",
    'Upgrade' = "Upgrade",
    'Extend' = "Extend"
}
export declare enum EnumCreatePaymentDtoPaymentPeriodType {
    'Monthly' = "Monthly",
    'Annual' = "Annual"
}
export declare enum EnumCreatePaymentDtoSubscriptionPaymentGatewayType {
    'Paypal' = "Paypal"
}
export declare class CreatePaymentDto {
    /**  */
    editionId: number;
    /**  */
    editionPaymentType: EnumCreatePaymentDtoEditionPaymentType;
    /**  */
    paymentPeriodType: EnumCreatePaymentDtoPaymentPeriodType;
    /**  */
    subscriptionPaymentGatewayType: EnumCreatePaymentDtoSubscriptionPaymentGatewayType;
    constructor(data?: any);
}
export declare class CreatePaymentResponse {
    constructor(data?: any);
}
export declare enum EnumExecutePaymentDtoGateway {
    'Paypal' = "Paypal"
}
export declare enum EnumExecutePaymentDtoEditionPaymentType {
    'NewRegistration' = "NewRegistration",
    'BuyNow' = "BuyNow",
    'Upgrade' = "Upgrade",
    'Extend' = "Extend"
}
export declare enum EnumExecutePaymentDtoPaymentPeriodType {
    'Monthly' = "Monthly",
    'Annual' = "Annual"
}
export declare class ExecutePaymentDto {
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
    constructor(data?: any);
}
export declare class ExecutePaymentResponse {
    constructor(data?: any);
}
export declare class PagedResultDto_SubscriptionPaymentListDto {
    /**  */
    totalCount: number;
    /**  */
    items: SubscriptionPaymentListDto[];
    constructor(data?: any);
}
export declare class SubscriptionPaymentListDto {
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
    constructor(data?: any);
}
export declare class ApiResultOutput_ListResultDto_PendingDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: ListResultDto_PendingDto;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class ListResultDto_PendingDto {
    /**  */
    items: PendingDto[];
    constructor(data?: any);
}
export declare enum EnumPendingDtoPendingType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'LockControlTask' = "LockControlTask"
}
export declare class PendingDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_FlatPermissionWithLevelDto {
    /**  */
    items: FlatPermissionWithLevelDto[];
    constructor(data?: any);
}
export declare class FlatPermissionWithLevelDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_ProductListDto {
    /**  */
    items: ProductListDto[];
    constructor(data?: any);
}
export declare class ProductListDto {
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
    constructor(data?: any);
}
export declare class GetProductEditOutput {
    /**  */
    product: ProductEditDto;
    /**  */
    productProperties: ProductPropertyListDto[];
    constructor(data?: any);
}
export declare class ProductEditDto {
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
    constructor(data?: any);
}
export declare class ProductPropertyListDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateProductInput {
    /**  */
    product: CreateOrUpdateProductDto;
    /**  */
    productProperties: ProductPropertyEditDto[];
    constructor(data?: any);
}
export declare enum EnumCreateOrUpdateProductDtoType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class CreateOrUpdateProductDto {
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
    constructor(data?: any);
}
export declare enum EnumProductPropertyEditDtoType {
    'BaseProperty' = "BaseProperty",
    'SignalingAndControl' = "SignalingAndControl",
    'SensingAndAdjustment' = "SensingAndAdjustment"
}
export declare enum EnumProductPropertyEditDtoBitType {
    'ReadOnly' = "ReadOnly",
    'WriteOnly' = "WriteOnly",
    'ReadAndWrite' = "ReadAndWrite"
}
export declare class ProductPropertyEditDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_ProductPropertyListDto {
    /**  */
    items: ProductPropertyListDto[];
    constructor(data?: any);
}
export declare class GetProductPropertyEditOutput {
    /**  */
    productProperty: ProductPropertyEditDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateProductPropertyInput {
    /**  */
    productProperty: ProductPropertyEditDto;
    constructor(data?: any);
}
export declare class CurrentUserProfileEditDto {
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
    constructor(data?: any);
}
export declare class UpdateGoogleAuthenticatorKeyOutput {
    /**  */
    qrCodeSetupImageUrl: string;
    constructor(data?: any);
}
export declare class VerifySmsCodeInputDto {
    /**  */
    code: string;
    constructor(data?: any);
}
export declare class ChangePasswordInput {
    /**  */
    currentPassword: string;
    /**  */
    newPassword: string;
    constructor(data?: any);
}
export declare class UpdateProfilePictureInput {
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
    constructor(data?: any);
}
export declare class GetPasswordComplexitySettingOutput {
    /**  */
    setting: PasswordComplexitySetting;
    constructor(data?: any);
}
export declare class GetProfilePictureOutput {
    /**  */
    profilePicture: string;
    constructor(data?: any);
}
export declare class ChangeUserLanguageDto {
    /**  */
    languageName: string;
    constructor(data?: any);
}
export declare class AddOrUpdateRiskTicketInput {
    /**  */
    riskTicket: RiskPrecontrolTicketDto;
    /**  */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class RiskPrecontrolTicketDto {
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
    constructor(data?: any);
}
export declare class RiskPrecontrolItemDto {
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
    constructor(data?: any);
}
export declare class IdGuid {
    /**  */
    id: string;
    constructor(data?: any);
}
export declare class AddOrUpdateRiskTicketItemsInput {
    /**  */
    riskTicketId: string;
    /**  */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class AddOrUpdateRiskItemTemplateInput {
    /**  */
    riskItemTemplate: RiskItemTemplate;
    constructor(data?: any);
}
export declare class RiskItemTemplate {
    /**  */
    no: number;
    /**  */
    dangerSource: string;
    /**  */
    workStandard: string;
    /**  */
    id: string;
    constructor(data?: any);
}
export declare class ListResultDto_RiskItemTemplate {
    /**  */
    items: RiskItemTemplate[];
    constructor(data?: any);
}
export declare class AddOrUpdateRiskItemTermMapInput {
    /**  */
    riskItemTermMap: RiskItemTermMap;
    constructor(data?: any);
}
export declare class RiskItemTermMap {
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
    constructor(data?: any);
}
export declare class DeviceType {
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
    constructor(data?: any);
}
export declare class DeviceState {
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
    constructor(data?: any);
}
export declare class DeviceOperation {
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
    constructor(data?: any);
}
export declare class VoltageLevel {
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
    constructor(data?: any);
}
export declare class Station {
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
    constructor(data?: any);
}
export declare enum EnumDeviceTermType {
    'Default' = "Default",
    'ByLinkage' = "ByLinkage",
    'AddBefault' = "AddBefault",
    'AddAfter' = "AddAfter",
    'Selectable' = "Selectable"
}
export declare class DeviceTerm {
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
    constructor(data?: any);
}
export declare class DeviceArea {
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
    constructor(data?: any);
}
export declare enum EnumDeviceInstallLockType {
    'ImmovableLock' = "ImmovableLock",
    'CommonLock' = "CommonLock",
    'ImmovableAndCommonLock' = "ImmovableAndCommonLock"
}
export declare class Device {
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
    constructor(data?: any);
}
export declare class Equipment {
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
    constructor(data?: any);
}
export declare class StationArea {
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
    constructor(data?: any);
}
export declare enum EnumTicketTaskTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTaskTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTaskState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTaskTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTaskTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTask {
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
    constructor(data?: any);
}
export declare enum EnumTicketTypicalTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTypicalTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTypicalState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTypicalTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTypicalTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTypical {
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
    constructor(data?: any);
}
export declare enum EnumTicketTypicalInvalidTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTypicalInvalidTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTypicalInvalidState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTypicalInvalidTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTypicalInvalidTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTypicalInvalid {
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
    constructor(data?: any);
}
export declare class LockCodeProperty {
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
    constructor(data?: any);
}
export declare enum EnumDeviceCodeInfoLockCodeNumber {
    'Um1' = "Um1",
    'Um2' = "Um2",
    'Um3' = "Um3",
    'Um4' = "Um4",
    'Um5' = "Um5",
    'Um6' = "Um6",
    'Um7' = "Um7",
    'Um8' = "Um8",
    'Um9' = "Um9",
    'Um10' = "Um10",
    'Um11' = "Um11",
    'Um12' = "Um12",
    'Um13' = "Um13",
    'Um14' = "Um14",
    'Um15' = "Um15",
    'Um16' = "Um16",
    'Um17' = "Um17",
    'Um18' = "Um18"
}
export declare class DeviceCodeInfo {
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
    constructor(data?: any);
}
export declare class DeviceConfig {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTaskOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTask {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTypicalOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTypical {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTypicalInvalidOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalInvalidRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalInvalidOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTypicalInvalid {
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
    constructor(data?: any);
}
export declare enum EnumDeviceLockStatusTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class DeviceLockStatus {
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
    constructor(data?: any);
}
export declare class DeviceLockRecord {
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
    constructor(data?: any);
}
export declare class Terminal {
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
    constructor(data?: any);
}
export declare enum EnumProductType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class Product {
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
    constructor(data?: any);
}
export declare enum EnumEquipmentPropertyType {
    'BaseProperty' = "BaseProperty",
    'SignalingAndControl' = "SignalingAndControl",
    'SensingAndAdjustment' = "SensingAndAdjustment"
}
export declare enum EnumEquipmentPropertyBitType {
    'ReadOnly' = "ReadOnly",
    'WriteOnly' = "WriteOnly",
    'ReadAndWrite' = "ReadAndWrite"
}
export declare class EquipmentProperty {
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
    constructor(data?: any);
}
export declare class TerminalPortEquipment {
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
    constructor(data?: any);
}
export declare class TicketTaskPersona {
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
    constructor(data?: any);
}
export declare class RiskPrecontrolTicket {
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
    constructor(data?: any);
}
export declare class TicketFolder {
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
    constructor(data?: any);
}
export declare enum EnumLockCodeConfigLockType {
    'NoKey' = "NoKey",
    'JXLock' = "JXLock",
    'DBMLock' = "DBMLock",
    'DKLock' = "DKLock",
    'DXDKLock' = "DXDKLock",
    'GSNYD' = "GSNYD",
    'WYYD' = "WYYD",
    'YYYD' = "YYYD",
    'CJFKLock' = "CJFKLock",
    'FKSDBMLock' = "FKSDBMLock",
    'ZNLock' = "ZNLock",
    'ZNYB' = "ZNYB",
    'YYDWZJC' = "YYDWZJC",
    'WYDWZJC' = "WYDWZJC",
    'JXDBMLock' = "JXDBMLock",
    'DBMLock_2H' = "DBMLock_2H",
    'DBMLock_3H' = "DBMLock_3H",
    'XJLock' = "XJLock",
    'WX_DBMLock' = "WX_DBMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_GSN2L' = "WX_GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'ZNHWMLock' = "ZNHWMLock",
    'GSN2E' = "GSN2E",
    'GSN2YD' = "GSN2YD",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'WX_DZBQ' = "WX_DZBQ",
    'WX_BSJXLock' = "WX_BSJXLock",
    'WX_SGWZSLock' = "WX_SGWZSLock",
    'SGWZSLock' = "SGWZSLock",
    'TBLock' = "TBLock",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'ZNSXLock' = "ZNSXLock",
    'GYJLYDQ' = "GYJLYDQ",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare enum EnumLockCodeConfigLockPropertyType {
    'NoKey' = "NoKey",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'HWGMLock' = "HWGMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_DBMLock' = "WX_DBMLock",
    'GSN2L' = "GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'WX_SKJXLock' = "WX_SKJXLock",
    'GSN2YD' = "GSN2YD",
    'XJLock' = "XJLock",
    'JM_GSN2YD' = "JM_GSN2YD",
    'GLDBP' = "GLDBP",
    'GLWYBS' = "GLWYBS",
    'LSGLGLock' = "LSGLGLock",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare enum EnumLockCodeConfigLockCodeNumber {
    'Um1' = "Um1",
    'Um2' = "Um2",
    'Um3' = "Um3",
    'Um4' = "Um4",
    'Um5' = "Um5",
    'Um6' = "Um6",
    'Um7' = "Um7",
    'Um8' = "Um8",
    'Um9' = "Um9",
    'Um10' = "Um10",
    'Um11' = "Um11",
    'Um12' = "Um12",
    'Um13' = "Um13",
    'Um14' = "Um14",
    'Um15' = "Um15",
    'Um16' = "Um16",
    'Um17' = "Um17",
    'Um18' = "Um18"
}
export declare class LockCodeConfig {
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
    constructor(data?: any);
}
export declare class DeviceBoard {
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
    constructor(data?: any);
}
export declare enum EnumProductPropertyType {
    'BaseProperty' = "BaseProperty",
    'SignalingAndControl' = "SignalingAndControl",
    'SensingAndAdjustment' = "SensingAndAdjustment"
}
export declare enum EnumProductPropertyBitType {
    'ReadOnly' = "ReadOnly",
    'WriteOnly' = "WriteOnly",
    'ReadAndWrite' = "ReadAndWrite"
}
export declare class ProductProperty {
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
    constructor(data?: any);
}
export declare enum EnumEquipmentPropertyLogProductType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class EquipmentPropertyLog {
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
    constructor(data?: any);
}
export declare class EquipmentPropertyConfig {
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
    constructor(data?: any);
}
export declare enum EnumTerminalPortConfigPortType {
    'TcpClient' = "TcpClient",
    'TcpServer' = "TcpServer",
    'ComPort' = "ComPort"
}
export declare enum EnumTerminalPortConfigProtocolType {
    'WireCabinetProtocol' = "WireCabinetProtocol",
    'KeySurpervisorProtocol' = "KeySurpervisorProtocol",
    'Iec104Protocol' = "Iec104Protocol",
    'JsqProtocol' = "JsqProtocol"
}
export declare class TerminalPortConfig {
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
    constructor(data?: any);
}
export declare class RiskPrecontrolItem {
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
    constructor(data?: any);
}
export declare class ProductPropertyBatch {
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
    constructor(data?: any);
}
export declare class MappingRiskItemByTermInput {
    /**  */
    keyWord: string;
    constructor(data?: any);
}
export declare class ListResultDto_RiskItemTermMap {
    /**  */
    items: RiskItemTermMap[];
    constructor(data?: any);
}
export declare class RiskItemDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_RiskItemDto {
    /**  */
    items: RiskItemDto[];
    constructor(data?: any);
}
export declare class ListResultDto_RoleListDto {
    /**  */
    items: RoleListDto[];
    constructor(data?: any);
}
export declare class RoleListDto {
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
    constructor(data?: any);
}
export declare class GetRoleForEditOutput {
    /**  */
    role: RoleEditDto;
    /**  */
    permissions: FlatPermissionDto[];
    /**  */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class RoleEditDto {
    /**  */
    id: number;
    /**  */
    displayName: string;
    /**  */
    isDefault: boolean;
    constructor(data?: any);
}
export declare class FlatPermissionDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateRoleInput {
    /**  */
    role: RoleEditDto;
    /**  */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class SafetyWearMonitoringInput {
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
    constructor(data?: any);
}
export declare class SafetyWearMonitoringOutput {
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
    constructor(data?: any);
}
export declare class ListResultDto_SafetyWearMonitoringOutput {
    /**  */
    items: SafetyWearMonitoringOutput[];
    constructor(data?: any);
}
export declare class EquipmentInfoOutput {
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
    constructor(data?: any);
}
export declare class ListResultDto_EquipmentInfoOutput {
    /**  */
    items: EquipmentInfoOutput[];
    constructor(data?: any);
}
export declare class ListResultDto_SafetyWearUserOutput {
    /**  */
    items: SafetyWearUserOutput[];
    constructor(data?: any);
}
export declare class SafetyWearUserOutput {
    /**  */
    userId: number;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class AddSerialNumberInput {
    /**  */
    serialNumber: SerialNumberDto;
    constructor(data?: any);
}
export declare class SerialNumberDto {
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
    constructor(data?: any);
}
export declare class ApiResultOutput_String {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: string;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class SetSerialMaxNumberInput {
    /**  */
    stationId: number;
    /**  */
    code: string;
    /**  */
    maxNumber: number;
    constructor(data?: any);
}
export declare class GetCurrentLoginInformationsOutput {
    /**  */
    user: UserLoginInfoDto;
    /**  */
    tenant: TenantLoginInfoDto;
    /**  */
    application: ApplicationInfoDto;
    /**  */
    station: StationLoginInfoDto;
    constructor(data?: any);
}
export declare class UserLoginInfoDto {
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
    constructor(data?: any);
}
export declare enum EnumTenantLoginInfoDtoPaymentPeriodType {
    'Monthly' = "Monthly",
    'Annual' = "Annual"
}
export declare class TenantLoginInfoDto {
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
    constructor(data?: any);
}
export declare class ApplicationInfoDto {
    /**  */
    version: string;
    /**  */
    releaseDate: string;
    /**  */
    features: object;
    constructor(data?: any);
}
export declare class StationLoginInfoDto {
    /**  */
    id: number;
    /**  */
    name: string;
    constructor(data?: any);
}
export declare class EditionInfoDto {
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
    constructor(data?: any);
}
export declare class UpdateUserSignInTokenOutput {
    /**  */
    signInToken: string;
    /**  */
    encodedUserId: string;
    /**  */
    encodedTenantId: string;
    constructor(data?: any);
}
export declare class ListResultDto_StationListDto {
    /**  */
    items: StationListDto[];
    constructor(data?: any);
}
export declare class StationListDto {
    /**  */
    name: string;
    /**  */
    description: string;
    /**  */
    no: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetStationEditOutput {
    /**  */
    station: GetStationEditDto;
    constructor(data?: any);
}
export declare class GetStationEditDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateStationInput {
    /**  */
    station: CreateOrUpdateStationDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateStationDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_StationListDto {
    /**  */
    totalCount: number;
    /**  */
    items: StationListDto[];
    constructor(data?: any);
}
export declare class BindEquipmentStationInput {
    /**  */
    stationId: number;
    /**  */
    equipmentIds: number[];
    constructor(data?: any);
}
export declare class CreateStationUserInput {
    /**  */
    stationUserDtos: StationUserDto[];
    constructor(data?: any);
}
export declare class StationUserDto {
    /**  */
    stationId: number;
    /**  */
    userId: number;
    constructor(data?: any);
}
export declare class UpdateDefaultUserStationInput {
    /**  */
    stationId: number;
    /**  */
    userId: number;
    constructor(data?: any);
}
export declare class CreateStationAreaInput {
    /**  */
    name: string;
    /**  */
    parentId: number;
    constructor(data?: any);
}
export declare class StationAreaDto {
    /**  */
    stationAreaId: number;
    /**  */
    stationAreaName: string;
    /**  */
    stationAreaParentId: number;
    /**  */
    stationDtos: StationDto[];
    constructor(data?: any);
}
export declare class StationDto {
    /**  */
    stationName: string;
    /**  */
    stationId: number;
    constructor(data?: any);
}
export declare class UpdateStationAreaInput {
    /**  */
    name: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class MoveStationAreaInput {
    /**  */
    id: number;
    /**  */
    parentId: number;
    constructor(data?: any);
}
export declare class ListResultDto_StationAreaDto {
    /**  */
    items: StationAreaDto[];
    constructor(data?: any);
}
export declare class ListResultDto_StationAreaWithEquipment {
    /**  */
    items: StationAreaWithEquipment[];
    constructor(data?: any);
}
export declare class StationAreaWithEquipment {
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
    constructor(data?: any);
}
export declare class StationInArea {
    /**  */
    stationId: number;
    /**  */
    stationName: string;
    /**  */
    equipments: EquipmentInStation[];
    constructor(data?: any);
}
export declare enum EnumEquipmentInStationProductType {
    'KeyCabinet' = "KeyCabinet",
    'WireCabinet' = "WireCabinet",
    'SafetyWear' = "SafetyWear",
    'PhotoelectricTemperature' = "PhotoelectricTemperature",
    'ManholeCover' = "ManholeCover"
}
export declare class EquipmentInStation {
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
    constructor(data?: any);
}
export declare class BasePropertyInEquipment {
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
    constructor(data?: any);
}
export declare class StationAreaBindStationInput {
    /**  */
    stationIds: number[];
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class PagedResultDto_UserListByStationIdDto {
    /**  */
    totalCount: number;
    /**  */
    items: UserListByStationIdDto[];
    constructor(data?: any);
}
export declare class UserListByStationIdDto {
    /**  */
    userName: string;
    /**  */
    lastModificationTime: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class ListResultDto_StationOrganizationUserDto {
    /**  */
    items: StationOrganizationUserDto[];
    constructor(data?: any);
}
export declare class StationOrganizationUserDto {
    /**  */
    displayName: string;
    /**  */
    parentId: number;
    /**  */
    userListDtos: StationUserListDto[];
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class StationUserListDto {
    /**  */
    userId: number;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class ListResultDto_StationDto {
    /**  */
    items: StationDto[];
    constructor(data?: any);
}
export declare class PagedResultDto_TenantListDto {
    /**  */
    totalCount: number;
    /**  */
    items: TenantListDto[];
    constructor(data?: any);
}
export declare class TenantListDto {
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
    constructor(data?: any);
}
export declare class CreateTenantInput {
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
    constructor(data?: any);
}
export declare class TenantEditDto {
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
    constructor(data?: any);
}
export declare class GetTenantFeaturesEditOutput {
    /**  */
    featureValues: NameValueDto[];
    /**  */
    features: FlatFeatureDto[];
    constructor(data?: any);
}
export declare class UpdateTenantFeaturesInput {
    /**  */
    id: number;
    /**  */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class EntityDto {
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class GetMemberActivityOutput {
    /**  */
    memberActivities: MemberActivity[];
    constructor(data?: any);
}
export declare class MemberActivity {
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
    constructor(data?: any);
}
export declare class GetDashboardDataOutput {
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
    constructor(data?: any);
}
export declare class SalesSummaryData {
    /**  */
    period: string;
    /**  */
    sales: number;
    /**  */
    profit: number;
    constructor(data?: any);
}
export declare class GetSalesSummaryOutput {
    /**  */
    salesSummary: SalesSummaryData[];
    constructor(data?: any);
}
export declare class GetRegionalStatsInput {
    constructor(data?: any);
}
export declare class GetRegionalStatsOutput {
    /**  */
    stats: RegionalStatCountry[];
    constructor(data?: any);
}
export declare class RegionalStatCountry {
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
    constructor(data?: any);
}
export declare class GetGeneralStatsInput {
    constructor(data?: any);
}
export declare class GetGeneralStatsOutput {
    /**  */
    transactionPercent: number;
    /**  */
    newVisitPercent: number;
    /**  */
    bouncePercent: number;
    constructor(data?: any);
}
export declare enum EnumRegisterTenantInputSubscriptionStartType {
    'Free' = "Free",
    'Trial' = "Trial",
    'Paid' = "Paid"
}
export declare enum EnumRegisterTenantInputGateway {
    'Paypal' = "Paypal"
}
export declare class RegisterTenantInput {
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
    constructor(data?: any);
}
export declare class RegisterTenantOutput {
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
    constructor(data?: any);
}
export declare class EditionsSelectOutput {
    /**  */
    allFeatures: FlatFeatureSelectDto[];
    /**  */
    editionsWithFeatures: EditionWithFeaturesDto[];
    /**  */
    tenantEditionId: number;
    constructor(data?: any);
}
export declare class FlatFeatureSelectDto {
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
    constructor(data?: any);
}
export declare class EditionWithFeaturesDto {
    /**  */
    edition: EditionSelectDto;
    /**  */
    featureValues: NameValueDto[];
    constructor(data?: any);
}
export declare class IInputType {
    /**  */
    name: string;
    /**  */
    attributes: object;
    /**  */
    validator: IValueValidator;
    constructor(data?: any);
}
export declare class TenantSettingsEditDto {
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
    constructor(data?: any);
}
export declare class TenantUserManagementSettingsEditDto {
    /**  */
    allowSelfRegistration: boolean;
    /**  */
    isNewRegisteredUserActiveByDefault: boolean;
    /**  */
    isEmailConfirmationRequiredForLogin: boolean;
    /**  */
    useCaptchaOnRegistration: boolean;
    constructor(data?: any);
}
export declare class LdapSettingsEditDto {
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
    constructor(data?: any);
}
export declare class TenantBillingSettingsEditDto {
    /**  */
    legalName: string;
    /**  */
    address: string;
    /**  */
    taxVatNo: string;
    constructor(data?: any);
}
export declare class ListResultDto_TerminalPortConfigListDto {
    /**  */
    items: TerminalPortConfigListDto[];
    constructor(data?: any);
}
export declare class TerminalPortConfigListDto {
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
    constructor(data?: any);
}
export declare class GetTerminalPortConfigOutput {
    /**  */
    terminalPortConfig: TerminalPortConfigEditDto;
    /**  */
    terminalPortBindEquipments: TerminalPortBindEquipmentDto[];
    constructor(data?: any);
}
export declare class TerminalPortConfigEditDto {
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
    constructor(data?: any);
}
export declare class TerminalPortBindEquipmentDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalPortConfigInput {
    /**  */
    configDto: CreateOrUpdateTerminalPortConfigDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalPortConfigDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_TerminalListDto {
    /**  */
    items: TerminalListDto[];
    constructor(data?: any);
}
export declare class TerminalListDto {
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
    constructor(data?: any);
}
export declare class GetTerminalEditOutput {
    /**  */
    terminal: TerminalEditDto;
    constructor(data?: any);
}
export declare class TerminalEditDto {
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
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalInput {
    /**  */
    terminal: CreateOrUpdateTerminalDto;
    constructor(data?: any);
}
export declare class CreateOrUpdateTerminalDto {
    /**  */
    name: string;
    /**  */
    description: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class ResetTerminalInput {
    /**  */
    terminalId: number;
    constructor(data?: any);
}
export declare class SendControlOperatingInput {
    /**  */
    equipmentId: number;
    constructor(data?: any);
}
export declare class TermperaturePointsOutput {
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
    constructor(data?: any);
}
export declare class AddOrUpdateTicketFolderInput {
    /**  */
    ticketFolder: TicketFolderDto;
    constructor(data?: any);
}
export declare class TicketFolderDto {
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
    constructor(data?: any);
}
export declare class ResultBoolean {
    /**  */
    value: boolean;
    constructor(data?: any);
}
export declare class AddOrUpdateTicketFolderRiskInfoInput {
    /**  */
    ticketFolderIds: string[];
    /**  */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare class ListResultDto_IdNameTree {
    /**  */
    items: IdNameTree[];
    constructor(data?: any);
}
export declare class IdNameTree {
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
    constructor(data?: any);
}
export declare class ListResultDto_GetStationTicketFolderChildrenWithTicketOutput {
    /**  */
    items: GetStationTicketFolderChildrenWithTicketOutput[];
    constructor(data?: any);
}
export declare class GetStationTicketFolderChildrenWithTicketOutput {
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
    constructor(data?: any);
}
export declare enum EnumTicketListItemDtoTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketListItemDtoState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketListItemDtoTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketListItemDto {
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
    constructor(data?: any);
}
export declare class TicketOperatePropertyDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_IdName {
    /**  */
    items: IdName[];
    constructor(data?: any);
}
export declare class IdName {
    /**  */
    id: string;
    /**  */
    name: string;
    constructor(data?: any);
}
export declare class GetTicketFolderOutput {
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
    constructor(data?: any);
}
export declare class AssignFolderTicketsInput {
    /**  */
    ticketFolderId: string;
    /**  */
    ticketTypicalIds: string[];
    constructor(data?: any);
}
export declare class ListResultDto_TicketListItemDto {
    /**  */
    items: TicketListItemDto[];
    constructor(data?: any);
}
export declare class ApiResultOutput_List_TicketRoleDto {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: TicketRoleDto[];
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class TicketRoleDto {
    /**  */
    userId: number;
    /**  */
    name: string;
    /**  */
    userName: string;
    /**  */
    roleType: string;
    constructor(data?: any);
}
export declare class AddOrUpdateTicketTaskInput {
    /**  */
    ticketTask: TicketTaskDto;
    /**  */
    ticketItemTasks: TicketItemTaskDto[];
    /**  */
    ticketTaskPersonas: TicketTaskPersonaDto[];
    /**  */
    riskItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare enum EnumTicketTaskDtoTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTaskDtoTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTaskDtoState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTaskDtoTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTaskDtoTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTaskDto {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTaskDtoOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskDtoRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskDtoOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTaskDto {
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
    constructor(data?: any);
}
export declare class TicketTaskPersonaDto {
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
    constructor(data?: any);
}
export declare class AssignTicketPersonaesInput {
    /**  */
    ticketId: string;
    /**  */
    ticketPersonaes: TicketTaskPersonaDto[];
    constructor(data?: any);
}
export declare class CommitTicketInput {
    /**  */
    ticketId: string;
    constructor(data?: any);
}
export declare class ConfirmTicketInput {
    /**  */
    ticketId: string;
    /**  */
    isPass: boolean;
    /**  */
    note: string;
    constructor(data?: any);
}
export declare class ApproveTicketInput {
    /**  */
    ticketId: string;
    /**  */
    isPass: boolean;
    /**  */
    note: string;
    constructor(data?: any);
}
export declare class ExecuteTicketInput {
    /**  */
    ticketId: string;
    constructor(data?: any);
}
export declare class FinishTicketInput {
    /**  */
    ticketId: string;
    constructor(data?: any);
}
export declare class UpdateTicketItemsStatusInput {
    /**  */
    ticketId: string;
    /**  */
    ticketItems: UpdateStatusTicketItemDto[];
    constructor(data?: any);
}
export declare enum EnumUpdateStatusTicketItemDtoOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare enum EnumUpdateStatusTicketItemDtoRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare class UpdateStatusTicketItemDto {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemDeviceStateDtoCommonLockOperate {
    'NotCommonLockOperate' = "NotCommonLockOperate",
    'HangCommonLock' = "HangCommonLock",
    'RemoveCommonLock' = "RemoveCommonLock"
}
export declare class TicketItemDeviceStateDto {
    /**  */
    deviceId: number;
    /**  */
    rfids: string[];
    /**  */
    commonLockOperate: EnumTicketItemDeviceStateDtoCommonLockOperate;
    constructor(data?: any);
}
export declare class ApiResultOutput_UpdateTicketItemsStatusOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: UpdateTicketItemsStatusOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class UpdateTicketItemsStatusOutput {
    /**  */
    failTicketItems: TicketItemUpdateResultOutput[];
    constructor(data?: any);
}
export declare enum EnumTicketItemUpdateResultOutputErrorType {
    'NotFound' = "NotFound",
    'PreItemNotFinished' = "PreItemNotFinished",
    'SaveException' = "SaveException"
}
export declare class TicketItemUpdateResultOutput {
    /**  */
    ticketItemId: string;
    /**  */
    errorType: EnumTicketItemUpdateResultOutputErrorType;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class UpdateTicketRiskItemsStatusInput {
    /**  */
    ticketId: string;
    /**  */
    riskItems: UpdateStatusTicketRiskItemDto[];
    constructor(data?: any);
}
export declare class UpdateStatusTicketRiskItemDto {
    /**  */
    riskItemId: string;
    /**  */
    finished: boolean;
    /**  */
    sequence: number;
    /**  */
    operationTime: string;
    constructor(data?: any);
}
export declare class ApiResultOutput_UpdateTicketRiskItemsStatusOutput {
    /**  */
    result: boolean;
    /**  */
    code: number;
    /**  */
    data: UpdateTicketRiskItemsStatusOutput;
    /**  */
    message: string;
    constructor(data?: any);
}
export declare class UpdateTicketRiskItemsStatusOutput {
    /**  */
    failTicketRiskItems: TicketRiskItemUpdateResultOutput[];
    constructor(data?: any);
}
export declare enum EnumTicketRiskItemUpdateResultOutputErrorType {
    'NotFound' = "NotFound",
    'PreItemNotFinished' = "PreItemNotFinished",
    'SaveException' = "SaveException"
}
export declare class TicketRiskItemUpdateResultOutput {
    /**  */
    riskItemId: string;
    /**  */
    message: string;
    /**  */
    errorType: EnumTicketRiskItemUpdateResultOutputErrorType;
    constructor(data?: any);
}
export declare enum EnumTicketTaskOutputTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTaskOutputTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTaskOutputState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTaskOutputTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTaskOutputTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTaskOutput {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTaskOutputOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskOutputRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTaskOutputOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTaskOutput {
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
    constructor(data?: any);
}
export declare class TicketTaskPersonaOutput {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemOperateLockInfoDtoLockType {
    'NoKey' = "NoKey",
    'JXLock' = "JXLock",
    'DBMLock' = "DBMLock",
    'DKLock' = "DKLock",
    'DXDKLock' = "DXDKLock",
    'GSNYD' = "GSNYD",
    'WYYD' = "WYYD",
    'YYYD' = "YYYD",
    'CJFKLock' = "CJFKLock",
    'FKSDBMLock' = "FKSDBMLock",
    'ZNLock' = "ZNLock",
    'ZNYB' = "ZNYB",
    'YYDWZJC' = "YYDWZJC",
    'WYDWZJC' = "WYDWZJC",
    'JXDBMLock' = "JXDBMLock",
    'DBMLock_2H' = "DBMLock_2H",
    'DBMLock_3H' = "DBMLock_3H",
    'XJLock' = "XJLock",
    'WX_DBMLock' = "WX_DBMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_GSN2L' = "WX_GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'ZNHWMLock' = "ZNHWMLock",
    'GSN2E' = "GSN2E",
    'GSN2YD' = "GSN2YD",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'WX_DZBQ' = "WX_DZBQ",
    'WX_BSJXLock' = "WX_BSJXLock",
    'WX_SGWZSLock' = "WX_SGWZSLock",
    'SGWZSLock' = "SGWZSLock",
    'TBLock' = "TBLock",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'ZNSXLock' = "ZNSXLock",
    'GYJLYDQ' = "GYJLYDQ",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare enum EnumTicketItemOperateLockInfoDtoLockPropertyType {
    'NoKey' = "NoKey",
    'XHJGLock' = "XHJGLock",
    'SLGLock' = "SLGLock",
    'LTLock' = "LTLock",
    'BSQLock' = "BSQLock",
    'BSLock' = "BSLock",
    'CXLock' = "CXLock",
    'FDHLock' = "FDHLock",
    'PMLock' = "PMLock",
    'LGLock' = "LGLock",
    'FHMLock' = "FHMLock",
    'YKLock' = "YKLock",
    'HWGMLock' = "HWGMLock",
    'WX_JXLock' = "WX_JXLock",
    'WX_DBMLock' = "WX_DBMLock",
    'GSN2L' = "GSN2L",
    'WX_ZNMBLock' = "WX_ZNMBLock",
    'WX_ZNFHMLock' = "WX_ZNFHMLock",
    'WX_SKJXLock' = "WX_SKJXLock",
    'GSN2YD' = "GSN2YD",
    'XJLock' = "XJLock",
    'JM_GSN2YD' = "JM_GSN2YD",
    'GLDBP' = "GLDBP",
    'GLWYBS' = "GLWYBS",
    'LSGLGLock' = "LSGLGLock",
    'WX_WZSZNMLock' = "WX_WZSZNMLock",
    'LGLock_6A' = "LGLock_6A",
    'WTJGLock' = "WTJGLock",
    'DKHLock' = "DKHLock"
}
export declare class TicketItemOperateLockInfoDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_TicketTaskListDto {
    /**  */
    totalCount: number;
    /**  */
    items: TicketTaskListDto[];
    constructor(data?: any);
}
export declare enum EnumTicketTaskListDtoTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTaskListDtoState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTaskListDtoTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare enum EnumTicketTaskListDtoTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare class TicketTaskListDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_TicketItemTaskDto {
    /**  */
    items: TicketItemTaskDto[];
    constructor(data?: any);
}
export declare class CheckDeviceStatusForTicketTaskExcutingInput {
    /**  */
    deviceId: number;
    /**  */
    fromState: number;
    /**  */
    toState: number;
    constructor(data?: any);
}
export declare class AnalyseSentenceInput {
    /**  */
    stationId: number;
    /**  */
    sentences: AnalyseSentenceDto[];
    constructor(data?: any);
}
export declare class AnalyseSentenceDto {
    /**  */
    no: number;
    /**  */
    ticketItemId: string;
    /**  */
    text: string;
    constructor(data?: any);
}
export declare class AnalyseSentenceOutput {
    /**  */
    analyseSentenceResults: AnalyseSentenceResultDto[];
    /**  */
    analyseRiskItemResults: AnalyseRiskItemResultDto[];
    constructor(data?: any);
}
export declare enum EnumAnalyseSentenceResultDtoOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumAnalyseSentenceResultDtoDeviceTermType {
    'Default' = "Default",
    'ByLinkage' = "ByLinkage",
    'AddBefault' = "AddBefault",
    'AddAfter' = "AddAfter",
    'Selectable' = "Selectable"
}
export declare class AnalyseSentenceResultDto {
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
    constructor(data?: any);
}
export declare class AnalyseRiskItemResultDto {
    /**  */
    ticketItemNo: number;
    /**  */
    ticketItemId: string;
    /**  */
    dangerSource: string;
    /**  */
    workStandard: string;
    constructor(data?: any);
}
export declare class IListResult_TicketItemOperateLockInfoDto {
    /**  */
    items: TicketItemOperateLockInfoDto[];
    constructor(data?: any);
}
export declare class SingleAnalyseSentenceInput {
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
    constructor(data?: any);
}
export declare class SingleAnalyseSentenceOutput {
    /**  */
    analyseSentenceResult: AnalyseSentenceResultDto;
    /**  */
    analyseRiskItemResults: AnalyseRiskItemResultDto[];
    constructor(data?: any);
}
export declare class AddOrUpdateTicketTypicalInput {
    /**  */
    ticketTypical: TicketTypicalDto;
    /**  */
    ticketItems: TicketItemTypicalDto[];
    /**  */
    riskPrecontrolItems: RiskPrecontrolItemDto[];
    constructor(data?: any);
}
export declare enum EnumTicketTypicalDtoTicketOperateType {
    'MonitoringOperation' = "MonitoringOperation",
    'OnePersonOperation' = "OnePersonOperation"
}
export declare enum EnumTicketTypicalDtoTicketExecOrder {
    'OrderedExec' = "OrderedExec",
    'UnorderedExec' = "UnorderedExec",
    'CustomOrderExec' = "CustomOrderExec"
}
export declare enum EnumTicketTypicalDtoState {
    'None' = "None",
    'WaitCommit' = "WaitCommit",
    'WaitConfirm' = "WaitConfirm",
    'ConfirmNotPassed' = "ConfirmNotPassed",
    'WaitGuardianConfirm' = "WaitGuardianConfirm",
    'WaitApproverConfirm' = "WaitApproverConfirm",
    'WaitMainApproverConfirm' = "WaitMainApproverConfirm",
    'WaitApprove' = "WaitApprove",
    'ApproveNotPassed' = "ApproveNotPassed",
    'ReadyGo' = "ReadyGo",
    'RiskItemExecuting' = "RiskItemExecuting",
    'Executing' = "Executing",
    'Pause' = "Pause",
    'WaitApproveToCancel' = "WaitApproveToCancel",
    'WaitApproveToBreak' = "WaitApproveToBreak",
    'WaitApproveExtension' = "WaitApproveExtension",
    'ExtensionReject' = "ExtensionReject",
    'Finished' = "Finished",
    'Break' = "Break",
    'Cancel' = "Cancel",
    'WaitReadOver' = "WaitReadOver",
    'ReadOver' = "ReadOver",
    'Archived' = "Archived"
}
export declare enum EnumTicketTypicalDtoTicketAppoveLevel {
    'NoApprove' = "NoApprove",
    'OneApprover' = "OneApprover",
    'TwoApprover' = "TwoApprover",
    'ThreeApprover' = "ThreeApprover",
    'FoutApprover' = "FoutApprover"
}
export declare enum EnumTicketTypicalDtoTicketType {
    'Task' = "Task",
    'CentralizedControl' = "CentralizedControl",
    'Common' = "Common",
    'Chemistry' = "Chemistry",
    'SteamEnginePro' = "SteamEnginePro",
    'AshSulfur' = "AshSulfur",
    'Overhual' = "Overhual",
    'Furnace' = "Furnace",
    'Lockset' = "Lockset",
    'History' = "History",
    'Typical' = "Typical",
    'RiskTicket' = "RiskTicket",
    'TypicalInvalid' = "TypicalInvalid",
    'None' = "None"
}
export declare class TicketTypicalDto {
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
    constructor(data?: any);
}
export declare enum EnumTicketItemTypicalDtoOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalDtoRealOperateMode {
    'None' = "None",
    'Normal' = "Normal",
    'HintTip' = "HintTip",
    'NoOperate' = "NoOperate",
    'FinishedAfterConfirmed' = "FinishedAfterConfirmed",
    'FinishedAfterBreak' = "FinishedAfterBreak",
    'HandOnPlacard' = "HandOnPlacard",
    'DismantlePlacard' = "DismantlePlacard",
    'TemporaryDismantle' = "TemporaryDismantle",
    'ScanCode' = "ScanCode",
    'Remote' = "Remote",
    'Repeat' = "Repeat",
    'Skip' = "Skip",
    'Delete' = "Delete",
    'Reset' = "Reset",
    'Error' = "Error",
    'CommonLock' = "CommonLock"
}
export declare enum EnumTicketItemTypicalDtoOperateResult {
    'None' = "None",
    'Operated' = "Operated",
    'Finished' = "Finished"
}
export declare class TicketItemTypicalDto {
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
    constructor(data?: any);
}
export declare class PagedResultDto_TicketListItemDto {
    /**  */
    totalCount: number;
    /**  */
    items: TicketListItemDto[];
    constructor(data?: any);
}
export declare class ListResultDto_TicketItemTypicalDto {
    /**  */
    items: TicketItemTypicalDto[];
    constructor(data?: any);
}
export declare class CreateTicketCurrentInput {
    /**  */
    ticketTypicalId: string;
    /**  */
    isAnalyseDeviceName: boolean;
    constructor(data?: any);
}
export declare class AddOrUpdateCommitInput {
    /**  */
    ticketTypicalInvlidId: string;
    constructor(data?: any);
}
export declare class AddOrUpdateApproveInput {
    /**  */
    ticketTypicalInvalidId: string;
    /**  */
    isPass: boolean;
    constructor(data?: any);
}
export declare class ListResultDto_GetTicketTypicalInvalidsOutput {
    /**  */
    items: GetTicketTypicalInvalidsOutput[];
    constructor(data?: any);
}
export declare class GetTicketTypicalInvalidsOutput {
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
    constructor(data?: any);
}
export declare class AssignTicketItemInput {
    /**  */
    ticketTypicalId: string;
    /**  */
    ticketItemTypicals: TicketItemTypicalDto[];
    constructor(data?: any);
}
export declare class ListResultDto_NameValueDto {
    /**  */
    items: NameValueDto[];
    constructor(data?: any);
}
export declare class AuthenticateModel {
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
    constructor(data?: any);
}
export declare class AuthenticateResultModel {
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
    constructor(data?: any);
}
export declare class SendTwoFactorAuthCodeModel {
    /**  */
    userId: number;
    /**  */
    provider: string;
    constructor(data?: any);
}
export declare class ImpersonatedAuthenticateResultModel {
    /**  */
    accessToken: string;
    /**  */
    encryptedAccessToken: string;
    /**  */
    expireInSeconds: number;
    constructor(data?: any);
}
export declare class SwitchedAccountAuthenticateResultModel {
    /**  */
    accessToken: string;
    /**  */
    encryptedAccessToken: string;
    /**  */
    expireInSeconds: number;
    constructor(data?: any);
}
export declare class ExternalLoginProviderInfoModel {
    /**  */
    name: string;
    /**  */
    clientId: string;
    constructor(data?: any);
}
export declare class ExternalAuthenticateModel {
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
    constructor(data?: any);
}
export declare class ExternalAuthenticateResultModel {
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
    constructor(data?: any);
}
export declare class SecurityAuthenticateModel {
    /**  */
    authProvider: string;
    /**  */
    providerKey: string;
    /**  */
    singleSignIn: boolean;
    constructor(data?: any);
}
export declare class SecurityAuthenticateResultModel {
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
    constructor(data?: any);
}
export declare class SecurityAuthenticateOTPModel {
    /**  */
    otp: string;
    /**  */
    authProvider: string;
    /**  */
    providerKey: string;
    /**  */
    singleSignIn: boolean;
    constructor(data?: any);
}
export declare class UserLogin {
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
    constructor(data?: any);
}
export declare class AccountBindingModel {
    /**  */
    userNameOrEmailAddress: string;
    /**  */
    password: string;
    /**  */
    providerKey: string;
    /**  */
    authProvider: string;
    constructor(data?: any);
}
export declare class UiCustomizationSettingsEditDto {
    /**  */
    layout: UiCustomizationLayoutSettingsEditDto;
    /**  */
    header: UiCustomizationHeaderSettingsEditDto;
    /**  */
    menu: UiCustomizationMenuSettingsEditDto;
    /**  */
    footer: UiCustomizationFooterSettingsEditDto;
    constructor(data?: any);
}
export declare class UiCustomizationLayoutSettingsEditDto {
    /**  */
    layoutType: string;
    /**  */
    contentSkin: string;
    constructor(data?: any);
}
export declare class UiCustomizationHeaderSettingsEditDto {
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
    constructor(data?: any);
}
export declare class UiCustomizationMenuSettingsEditDto {
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
    constructor(data?: any);
}
export declare class UiCustomizationFooterSettingsEditDto {
    /**  */
    fixedFooter: boolean;
    constructor(data?: any);
}
export declare class PagedResultDto_UserListDto {
    /**  */
    totalCount: number;
    /**  */
    items: UserListDto[];
    constructor(data?: any);
}
export declare class UserListDto {
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
    constructor(data?: any);
}
export declare class UserListRoleDto {
    /**  */
    roleId: number;
    /**  */
    roleName: string;
    constructor(data?: any);
}
export declare class GetUserForEditOutput {
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
    constructor(data?: any);
}
export declare class UserEditDto {
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
    constructor(data?: any);
}
export declare class UserRoleDto {
    /**  */
    roleId: number;
    /**  */
    roleName: string;
    /**  */
    roleDisplayName: string;
    /**  */
    isAssigned: boolean;
    constructor(data?: any);
}
export declare class GetUserPermissionsForEditOutput {
    /**  */
    permissions: FlatPermissionDto[];
    /**  */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class EntityDto_Int64 {
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class UpdateUserPermissionsInput {
    /**  */
    id: number;
    /**  */
    grantedPermissionNames: string[];
    constructor(data?: any);
}
export declare class CreateOrUpdateUserInput {
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
    constructor(data?: any);
}
export declare class UserListForLoginDto {
    /**  */
    name: string;
    /**  */
    surname: string;
    /**  */
    userName: string;
    /**  */
    id: number;
    constructor(data?: any);
}
export declare class LinkToUserInput {
    /**  */
    tenancyName: string;
    /**  */
    usernameOrEmailAddress: string;
    /**  */
    password: string;
    constructor(data?: any);
}
export declare class PagedResultDto_LinkedUserDto {
    /**  */
    totalCount: number;
    /**  */
    items: LinkedUserDto[];
    constructor(data?: any);
}
export declare class LinkedUserDto {
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
    constructor(data?: any);
}
export declare class ListResultDto_LinkedUserDto {
    /**  */
    items: LinkedUserDto[];
    constructor(data?: any);
}
export declare class UnlinkUserInput {
    /**  */
    tenantId: number;
    /**  */
    userId: number;
    constructor(data?: any);
}
export declare class ListResultDto_UserLoginAttemptDto {
    /**  */
    items: UserLoginAttemptDto[];
    constructor(data?: any);
}
export declare class UserLoginAttemptDto {
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
    constructor(data?: any);
}
export declare class GetNfcCurrentUserLoginOutput {
    /**  */
    userLogin: UserLoginDto;
    constructor(data?: any);
}
export declare class UserLoginDto {
    /**  */
    key: string;
    constructor(data?: any);
}
export declare class CreateOrUpdateNfcUserLoginInput {
    /**  */
    userId: number;
    /**  */
    key: string;
    constructor(data?: any);
}
export declare class GetLatestWebLogsOutput {
    /**  */
    latestWebLogLines: string[];
    constructor(data?: any);
}
export declare enum EnumWireCabinetApplyInputApplyReason {
    'EquipmentFailure' = "EquipmentFailure",
    'EquipmentOverhaul' = "EquipmentOverhaul",
    'UrgentUnlock' = "UrgentUnlock",
    'OtherReason' = "OtherReason"
}
export declare class WireCabinetApplyInput {
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
    constructor(data?: any);
}
export declare class WireCabinetApproveInput {
    /**  */
    equipmentPropertyId: number;
    /**  */
    approverId: number;
    /**  */
    isApprovePass: boolean;
    /**  */
    approveNote: string;
    constructor(data?: any);
}
export declare class WireCabinetUnlockInput {
    /**  */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class WireCabinetUnlockOutput {
    /**  */
    unlockCode: string;
    constructor(data?: any);
}
export declare class WireCabinetHookInput {
    /**  */
    equipmentPropertyId: number;
    /**  */
    hookPosition: string;
    /**  */
    photoIds: string[];
    constructor(data?: any);
}
export declare class WireCabinetHook2Input {
    /**  */
    equipmentPropertyId: number;
    /**  */
    photoIds: string[];
    /**  */
    deviceId: number;
    constructor(data?: any);
}
export declare class WireCabinetUnHookInput {
    /**  */
    equipmentPropertyId: number;
    constructor(data?: any);
}
export declare class WireCabinetUpdateTaskInput {
    /**  */
    equipmentId: number;
    /**  */
    status: WireCabinetStatusDto[];
    /**  */
    bluetooth: string;
    constructor(data?: any);
}
export declare enum EnumWireCabinetStatusDtoBuckleStatus {
    'Unkown' = "Unkown",
    'Lock' = "Lock",
    'UnlockAndTake' = "UnlockAndTake",
    'UnlockNotTake' = "UnlockNotTake"
}
export declare class WireCabinetStatusDto {
    /**  */
    buckleNo: number;
    /**  */
    buckleStatus: EnumWireCabinetStatusDtoBuckleStatus;
    constructor(data?: any);
}
export declare class WireCabinetValueTextDto {
    /**  */
    value: number;
    /**  */
    text: string;
    constructor(data?: any);
}
export declare enum EnumWireCabinetTaskOutputUnlockMode {
    'Online' = "Online",
    'Bluetooth' = "Bluetooth",
    'Password' = "Password"
}
export declare enum EnumWireCabinetTaskOutputLockMode {
    'LockerDoor' = "LockerDoor",
    'LockerBuckle' = "LockerBuckle"
}
export declare enum EnumWireCabinetTaskOutputTaskStep {
    'None' = "None",
    'Applying' = "Applying",
    'ApprovalPassed' = "ApprovalPassed",
    'ApprovalNotPassed' = "ApprovalNotPassed",
    'Unlocked' = "Unlocked",
    'TimeOut' = "TimeOut",
    'TakenOut' = "TakenOut",
    'Hooked' = "Hooked",
    'Unhooked' = "Unhooked",
    'Returned' = "Returned",
    'Ended' = "Ended",
    'ErrorCode' = "ErrorCode"
}
export declare enum EnumWireCabinetTaskOutputApplyReason {
    'EquipmentFailure' = "EquipmentFailure",
    'EquipmentOverhaul' = "EquipmentOverhaul",
    'UrgentUnlock' = "UrgentUnlock",
    'OtherReason' = "OtherReason"
}
export declare enum EnumWireCabinetTaskOutputTakeReason {
    'UnlockByTicket' = "UnlockByTicket",
    'UnlockByCard' = "UnlockByCard",
    'UnlockByKey' = "UnlockByKey",
    'UnlockByTest' = "UnlockByTest",
    'UnlockByBorrow' = "UnlockByBorrow"
}
export declare class WireCabinetTaskOutput {
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
    constructor(data?: any);
}
export declare class ListResultDto_WireCabinetOperatorDto {
    /**  */
    items: WireCabinetOperatorDto[];
    constructor(data?: any);
}
export declare class WireCabinetOperatorDto {
    /**  */
    id: number;
    /**  */
    name: string;
    /**  */
    surname: string;
    /**  */
    userName: string;
    constructor(data?: any);
}
export declare class UpdateOperateTimeInput {
    /**  */
    bluetooth: string;
    /**  */
    wireOperateTimeDtos: WireOperateRecordDto[];
    constructor(data?: any);
}
export declare enum EnumWireOperateRecordDtoTakeReason {
    'UnlockByTicket' = "UnlockByTicket",
    'UnlockByCard' = "UnlockByCard",
    'UnlockByKey' = "UnlockByKey",
    'UnlockByTest' = "UnlockByTest",
    'UnlockByBorrow' = "UnlockByBorrow"
}
export declare enum EnumWireOperateRecordDtoMarkBit {
    'TakeOut' = "TakeOut",
    'Return' = "Return"
}
export declare class WireOperateRecordDto {
    /**  */
    buckleNo: string;
    /**  */
    operationTime: string;
    /**  */
    takeReason: EnumWireOperateRecordDtoTakeReason;
    /**  */
    markBit: EnumWireOperateRecordDtoMarkBit;
    constructor(data?: any);
}
export declare enum EnumWireDetailOutputTaskStep {
    'None' = "None",
    'Applying' = "Applying",
    'ApprovalPassed' = "ApprovalPassed",
    'ApprovalNotPassed' = "ApprovalNotPassed",
    'Unlocked' = "Unlocked",
    'TimeOut' = "TimeOut",
    'TakenOut' = "TakenOut",
    'Hooked' = "Hooked",
    'Unhooked' = "Unhooked",
    'Returned' = "Returned",
    'Ended' = "Ended",
    'ErrorCode' = "ErrorCode"
}
export declare class WireDetailOutput {
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
    constructor(data?: any);
}
export declare class ListResultDto_UploadFileOutput {
    /**  */
    items: UploadFileOutput[];
    constructor(data?: any);
}
export declare class WireCabinetOutput {
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
    constructor(data?: any);
}
export declare enum EnumWireDetailDtoTaskStep {
    'None' = "None",
    'Applying' = "Applying",
    'ApprovalPassed' = "ApprovalPassed",
    'ApprovalNotPassed' = "ApprovalNotPassed",
    'Unlocked' = "Unlocked",
    'TimeOut' = "TimeOut",
    'TakenOut' = "TakenOut",
    'Hooked' = "Hooked",
    'Unhooked' = "Unhooked",
    'Returned' = "Returned",
    'Ended' = "Ended",
    'ErrorCode' = "ErrorCode"
}
export declare class WireDetailDto {
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
    constructor(data?: any);
}
export declare class WireConfigDto {
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
    constructor(data?: any);
}
export declare class EquipmentPropertyConfigInput {
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
    constructor(data?: any);
}
export declare class WirePileOutput {
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
    constructor(data?: any);
}
export declare class ListResultDto_WireBeTakenDto {
    /**  */
    items: WireBeTakenDto[];
    constructor(data?: any);
}
export declare class WireBeTakenDto {
    /**  */
    equipmentPropertyId: number;
    /**  */
    displayName: string;
    constructor(data?: any);
}
export declare class ListResultDto_WireCabinetBluetoothDto {
    /**  */
    items: WireCabinetBluetoothDto[];
    constructor(data?: any);
}
export declare class WireCabinetBluetoothDto {
    /**  */
    equipmentId: number;
    /**  */
    bluetooth: string;
    constructor(data?: any);
}
export declare class CheckWireConfigInput {
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
    constructor(data?: any);
}
