import * as request from "superagent";
import {
    SuperAgentStatic
} from "superagent";

type CallbackHandler = (err: any, res?: request.Response) => void;
type IsTenantAvailableInput = {
    'tenancyName': string

};
type IsTenantAvailableOutput = {
    'state'?: "Available" | "InActive" | "NotFound"

    'tenantId'?: number

    'serverRootAddress'?: string

};
type RegisterInput = {
    'name': string

    'surname': string

    'userName': string

    'emailAddress': string

    'password': string

    'captchaResponse'?: string

};
type RegisterOutput = {
    'canLogin'?: boolean

};
type SendPasswordResetCodeInput = {
    'emailAddress': string

};
type ResetPasswordInput = {
    'userId'?: number

    'resetCode': string

    'password': string

    'returnUrl'?: string

    'singleSignIn'?: string

};
type ResetPasswordOutput = {
    'canLogin'?: boolean

    'userName'?: string

};
type SendEmailActivationLinkInput = {
    'emailAddress': string

};
type ActivateEmailInput = {
    'userId': number

    'confirmationCode': string

};
type ImpersonateInput = {
    'tenantId'?: number

    'userId'?: number

};
type ImpersonateOutput = {
    'impersonationToken'?: string

    'tenancyName'?: string

};
type SwitchToLinkedAccountInput = {
    'targetTenantId'?: number

    'targetUserId'?: number

};
type SwitchToLinkedAccountOutput = {
    'switchAccountToken'?: string

    'tenancyName'?: string

};
type PagedResultDto[AuditLogListDto] = {
    'totalCount' ? : number

    'items' ? : Array<AuditLogListDto>
        | AuditLogListDto

};
type AuditLogListDto = {
    'userId'?: number

    'userName'?: string

    'impersonatorTenantId'?: number

    'impersonatorUserId'?: number

    'serviceName'?: string

    'methodName'?: string

    'parameters'?: string

    'executionTime'?: string

    'executionDuration'?: number

    'clientIpAddress'?: string

    'clientName'?: string

    'browserInfo'?: string

    'exception'?: string

    'customData'?: string

    'id'?: number

};
type FileDto = {
    'fileName': string

    'fileType': string

    'fileToken': string

};
type ListResultDto[CacheDto] = {
    'items' ? : Array<CacheDto>
        | CacheDto

};
type CacheDto = {
    'name'?: string

};
type EntityDto[String] = {
    'id' ? : string

};
type GetUserChatFriendsWithSettingsOutput = {
    'serverTime'?: string

    'friends'?: Array<FriendDto>
    | FriendDto

};
type FriendDto = {
    'friendUserId'?: number

    'friendTenantId'?: number

    'friendUserName'?: string

    'friendTenancyName'?: string

    'friendProfilePictureId'?: string

    'unreadMessageCount'?: number

    'isOnline'?: boolean

    'state'?: "Accepted" | "Blocked"

};
type ListResultDto[ChatMessageDto] = {
    'items' ? : Array<ChatMessageDto>
        | ChatMessageDto

};
type ChatMessageDto = {
    'userId'?: number

    'tenantId'?: number

    'targetUserId'?: number

    'targetTenantId'?: number

    'side'?: "Sender" | "Receiver"

    'readState'?: "Unread" | "Read"

    'receiverReadState'?: "Unread" | "Read"

    'message'?: string

    'creationTime'?: string

    'sharedMessageId'?: string

    'id'?: number

};
type MarkAllUnreadMessagesOfUserAsReadInput = {
    'tenantId'?: number

    'userId'?: number

};
type ListResultDto[SubscribableEditionComboboxItemDto] = {
    'items' ? : Array<SubscribableEditionComboboxItemDto>
        | SubscribableEditionComboboxItemDto

};
type SubscribableEditionComboboxItemDto = {
    'isFree'?: boolean

    'value'?: string

    'displayText'?: string

    'isSelected'?: boolean

};
type FindUsersInput = {
    'tenantId'?: number

    'maxResultCount'?: number

    'skipCount'?: number

    'filter'?: string

};
type PagedResultDto[NameValueDto] = {
    'totalCount' ? : number

    'items' ? : Array<NameValueDto>
        | NameValueDto

};
type NameValueDto = {
    'name'?: string

    'value'?: string

};
type GetDefaultEditionNameOutput = {
    'name'?: string

};
type ListResultDto[DeviceTypeComboboxItemDto] = {
    'items' ? : Array<DeviceTypeComboboxItemDto>
        | DeviceTypeComboboxItemDto

};
type DeviceTypeComboboxItemDto = {
    'value'?: string

    'displayText'?: string

    'isSelected'?: boolean

};
type ListResultDto[ComboboxItemDto] = {
    'items' ? : Array<ComboboxItemDto>
        | ComboboxItemDto

};
type ComboboxItemDto = {
    'value'?: string

    'displayText'?: string

    'isSelected'?: boolean

};
type DateToStringOutput = {
    'dateString'?: string

};
type NameValue[String] = {
    'name' ? : string

    'value' ? : string

};
type StringOutput = {
    'output'?: string

};
type PagedResultDto[DeviceListDto] = {
    'totalCount' ? : number

    'items' ? : Array<DeviceListDto>
        | DeviceListDto

};
type DeviceListDto = {
    'name'?: string

    'description'?: string

    'id'?: number

};
type GetDeviceEditOutput = {
    'device'?: DeviceEditDto

    'configListDtos'?: Array<DeviceCodeInfoDto>
    | DeviceCodeInfoDto

};
type DeviceEditDto = {
    'stationId'?: number

    'deviceAreaId'?: number

    'name'?: string

    'description'?: string

    'voltage'?: string

    'type'?: string

    'lockCodePropertyId'?: number

    'id'?: number

};
type DeviceCodeInfoDto = {
    'lockCodeNumber'?: string

    'code'?: string

    'stateFrom1To0'?: string

    'stateFrom0To1'?: string

};
type CreateOrUpdateDeviceInput = {
    'device'?: CreateOrUpdateDeviceDto

    'codeInfoDtos'?: Array<DeviceCodeInfoEditDto>
    | DeviceCodeInfoEditDto

};
type CreateOrUpdateDeviceDto = {
    'stationId'?: number

    'deviceAreaId'?: number

    'name'?: string

    'description'?: string

    'voltage'?: number

    'type'?: number

    'lockCodePropertyId'?: number

    'id'?: number

};
type DeviceCodeInfoEditDto = {
    'lockCodeNumber'?: "Um1" | "Um2" | "Um3" | "Um4" | "Um5" | "Um6" | "Um7" | "Um8" | "Um9" | "Um10" | "Um11" | "Um12" | "Um13" | "Um14" | "Um15" | "Um16" | "Um17" | "Um18"

    'code'?: string

};
type QueryDevicesStateInput = {
    'stationDevices'?: Array<StationDeviceDto>
    | StationDeviceDto

};
type StationDeviceDto = {
    'stationName': string

    'pointName': string

    'id'?: number

};
type ListResultDto[DeviceStateDto] = {
    'items' ? : Array<DeviceStateDto>
        | DeviceStateDto

};
type DeviceStateDto = {
    'stationName': string

    'pointName': string

    'state': number

    'id'?: number

};
type UpdateDeviceStateInput = {
    'deviceState': DeviceStateDto

};
type UpdateDeviceStateOutput = {
    'deviceState'?: DeviceStateDto

};
type CheckDeviceNameIsExistInput = {
    'stationId'?: number

    'name'?: string

    'id'?: number

};
type ListResultDto[DeviceAreaListDto] = {
    'items' ? : Array<DeviceAreaListDto>
        | DeviceAreaListDto

};
type DeviceAreaListDto = {
    'stationId'?: number

    'parentId'?: number

    'name'?: string

    'sortId'?: number

    'id'?: number

};
type GetDeviceAreaEditOutput = {
    'deviceArea'?: GetDeviceAreaEditDto

};
type GetDeviceAreaEditDto = {
    'stationId'?: number

    'parentId'?: number

    'name'?: string

    'sortId'?: number

    'id'?: number

};
type CreateOrUpdateDeviceAreaInput = {
    'deviceArea': CreateOrUpdateDeviceAreaDto

    'children'?: Array<number>
    | number

};
type CreateOrUpdateDeviceAreaDto = {
    'stationId'?: number

    'parentId'?: number

    'name': string

    'sortId'?: number

    'id'?: number

};
type PagedResultDto[LockCodePropertyListDto] = {
    'totalCount' ? : number

    'items' ? : Array<LockCodePropertyListDto>
        | LockCodePropertyListDto

};
type LockCodePropertyListDto = {
    'code'?: string

    'keyCode'?: string

    'codeName'?: string

    'opHint1_0'?: string

    'opHint1_1'?: string

    'toKey'?: boolean

    'stateChange'?: boolean

    'id'?: number

};
type ListResultDto[LockCodePropertySelectDto] = {
    'items' ? : Array<LockCodePropertySelectDto>
        | LockCodePropertySelectDto

};
type LockCodePropertySelectDto = {
    'code'?: string

    'codeName'?: string

    'id'?: number

};
type LockCodePropertyEditDto = {
    'code'?: string

    'keyCode'?: string

    'codeName'?: string

    'opHint1_0'?: string

    'opHint1_1'?: string

    'toKey'?: boolean

    'stateChange'?: boolean

    'configDtos'?: Array<LockCodeConfigListDto>
    | LockCodeConfigListDto

    'id'?: number

};
type LockCodeConfigListDto = {
    'stateFrom1To0'?: string

    'stateFrom0To1'?: string

    'lockCodeNumber'?: string

    'id'?: number

};
type CreateOrUpdateLockCodePropertyInput = {
    'codePropertyDto': CreateOrUpdateLockCodePropertyDto

    'lockCodeConfigs'?: Array<LockCodeConfigEditDto>
    | LockCodeConfigEditDto

};
type CreateOrUpdateLockCodePropertyDto = {
    'code'?: string

    'keyCode'?: string

    'codeName'?: string

    'opHint1_0'?: string

    'opHint1_1'?: string

    'toKey'?: boolean

    'stateChange'?: boolean

    'id'?: number

};
type LockCodeConfigEditDto = {
    'stateFrom1To0'?: "MainCodeLock" | "YDQ" | "OnZTJC" | "OffZTJC" | "TSXCZ" | "DWZJC" | "JXLock" | "DBMLock" | "CJFKLock" | "DXDKLock" | "DKLock" | "OnJXLock" | "OffJXLock" | "OnDBMLock" | "OffDBMLock" | "DBMLock_2H" | "OnDBMLock_2H" | "OffDBMLock_2H" | "OnCJFKLock" | "OffCJFKLock" | "OnDQZTJC" | "OffDQZTJC" | "DXZLockCode" | "PPFDBMLock_3H" | "PNFDBMLock_3H" | "APFDBMLock_3H" | "ANFDBMLock_3H" | "Wire" | "Code29" | "Code30" | "Code31" | "ZNLock" | "ZNCell" | "OnGDCXJSCode" | "OnGDCXBSCode" | "OffGDCXJSCode" | "OffGDCXBSCode" | "OnDBMCXLock" | "OffDBMCXLock" | "XHJGLock" | "SLGLock" | "LTLock" | "BSQLock" | "BSLock" | "CXLock" | "FDHLock" | "PMLock" | "LGLock" | "FHMLock" | "YKLock" | "HWGMLock" | "WX_JXLock" | "WX_DBMLock" | "WX_GSN2L" | "WX_ZNMBLock" | "WX_ZNFHMLock" | "WX_SKJXLock" | "GSNYD" | "XJ" | "WX_OnJXLock" | "WX_OffJXLock" | "WX_OnDBMLock" | "WX_OffDBMLock" | "GSN2YD" | "GLDDW" | "GLDJBLock" | "LSGLDGLock" | "WX_WZSZNMLock" | "LKBDJXLock" | "OnCZDXLock" | "OffCZDXLock" | "OnJDZLock" | "OffJDZLock" | "LGLock_6A" | "WTJGLock" | "DKHLock" | "SHYSXDZLock" | "NoKey"

    'stateFrom0To1'?: "MainCodeLock" | "YDQ" | "OnZTJC" | "OffZTJC" | "TSXCZ" | "DWZJC" | "JXLock" | "DBMLock" | "CJFKLock" | "DXDKLock" | "DKLock" | "OnJXLock" | "OffJXLock" | "OnDBMLock" | "OffDBMLock" | "DBMLock_2H" | "OnDBMLock_2H" | "OffDBMLock_2H" | "OnCJFKLock" | "OffCJFKLock" | "OnDQZTJC" | "OffDQZTJC" | "DXZLockCode" | "PPFDBMLock_3H" | "PNFDBMLock_3H" | "APFDBMLock_3H" | "ANFDBMLock_3H" | "Wire" | "Code29" | "Code30" | "Code31" | "ZNLock" | "ZNCell" | "OnGDCXJSCode" | "OnGDCXBSCode" | "OffGDCXJSCode" | "OffGDCXBSCode" | "OnDBMCXLock" | "OffDBMCXLock" | "XHJGLock" | "SLGLock" | "LTLock" | "BSQLock" | "BSLock" | "CXLock" | "FDHLock" | "PMLock" | "LGLock" | "FHMLock" | "YKLock" | "HWGMLock" | "WX_JXLock" | "WX_DBMLock" | "WX_GSN2L" | "WX_ZNMBLock" | "WX_ZNFHMLock" | "WX_SKJXLock" | "GSNYD" | "XJ" | "WX_OnJXLock" | "WX_OffJXLock" | "WX_OnDBMLock" | "WX_OffDBMLock" | "GSN2YD" | "GLDDW" | "GLDJBLock" | "LSGLDGLock" | "WX_WZSZNMLock" | "LKBDJXLock" | "OnCZDXLock" | "OffCZDXLock" | "OnJDZLock" | "OffJDZLock" | "LGLock_6A" | "WTJGLock" | "DKHLock" | "SHYSXDZLock" | "NoKey"

    'lockCodeNumber'?: "Um1" | "Um2" | "Um3" | "Um4" | "Um5" | "Um6" | "Um7" | "Um8" | "Um9" | "Um10" | "Um11" | "Um12" | "Um13" | "Um14" | "Um15" | "Um16" | "Um17" | "Um18"

};
type GetDeviceTermsOutput = {
    'stationName'?: string

    'pointName'?: string

    'deviceStateTerms'?: Array<DeviceStateTermDto>
    | DeviceStateTermDto

};
type DeviceStateTermDto = {
    'fromState'?: number

    'toState'?: number

    'operationName'?: string

    'boardDesc'?: string

    'terms'?: Array<string>
    | string

};
type ListResultDto[DeviceOperationListDto] = {
    'items' ? : Array<DeviceOperationListDto>
        | DeviceOperationListDto

};
type DeviceOperationListDto = {
    'stationId'?: number

    'stationName'?: string

    'voltageLevelId'?: number

    'voltageLevelName'?: string

    'fromDeviceStateId'?: number

    'toDeviceStateId'?: number

    'name'?: string

    'boardDesc'?: string

    'deviceTypeId'?: number

    'fromDeviceState'?: string

    'toDeviceState'?: string

    'terms'?: Array<TermListDto>
    | TermListDto

    'id'?: number

};
type TermListDto = {
    'type'?: string

    'value'?: string

    'id'?: number

};
type CreateOrUpdateDeviceOperationInput = {
    'deviceOperation': DeviceOperationEditDto

};
type DeviceOperationEditDto = {
    'stationId'?: number

    'voltageLevelId'?: number

    'fromDeviceStateId': number

    'toDeviceStateId': number

    'name'?: string

    'boardDesc'?: string

    'deviceTypeId'?: number

    'terms'?: Array<TermEditDto>
    | TermEditDto

    'id'?: number

};
type TermEditDto = {
    'type'?: "Default" | "ByLinkage" | "AddBefault" | "AddAfter" | "Selectable"

    'value'?: string

    'id'?: number

};
type ListResultDto[DeviceTypeListDto] = {
    'items' ? : Array<DeviceTypeListDto>
        | DeviceTypeListDto

};
type DeviceTypeListDto = {
    'name'?: string

    'dnbsCode'?: string

    'toPrinter'?: boolean

    'toKey'?: boolean

    'graphName'?: string

    'codeName'?: string

    'showMode'?: string

    'isEst'?: boolean

    'isPprimary'?: boolean

    'isSecondary'?: boolean

    'isOperable'?: boolean

    'id'?: number

};
type GetDeviceTypeEditOutput = {
    'deviceType'?: DeviceTypeEditDto

    'deviceStates'?: Array<DeviceStateListDto>
    | DeviceStateListDto

};
type DeviceTypeEditDto = {
    'name': string

    'toPrinter'?: boolean

    'toKey'?: boolean

    'dnbsCode'?: string

    'graphName'?: string

    'codeName'?: string

    'showMode'?: string

    'isEst'?: boolean

    'isPprimary'?: boolean

    'isSecondary'?: boolean

    'isOperable'?: boolean

    'id'?: number

};
type DeviceStateListDto = {
    'name'?: string

    'state'?: number

    'id'?: number

};
type CreateOrUpdateDeviceTypeInput = {
    'deviceType': DeviceTypeEditDto

    'deviceStates'?: Array<DeviceStateListDto>
    | DeviceStateListDto

};
type ListResultDto[EditionListDto] = {
    'items' ? : Array<EditionListDto>
        | EditionListDto

};
type EditionListDto = {
    'name'?: string

    'displayName'?: string

    'creationTime'?: string

    'id'?: number

};
type GetEditionEditOutput = {
    'edition'?: EditionEditDto

    'featureValues'?: Array<NameValueDto>
    | NameValueDto

    'features'?: Array<FlatFeatureDto>
    | FlatFeatureDto

};
type EditionEditDto = {
    'id'?: number

    'displayName': string

    'monthlyPrice'?: number

    'annualPrice'?: number

    'trialDayCount'?: number

    'waitingDayAfterExpire'?: number

    'expiringEditionId'?: number

};
type FlatFeatureDto = {
    'parentName'?: string

    'name'?: string

    'displayName'?: string

    'description'?: string

    'defaultValue'?: string

    'inputType'?: FeatureInputTypeDto

};
type FeatureInputTypeDto = {
    'name'?: string

    'attributes'?: {}

    'validator'?: IValueValidator

    'itemSource'?: LocalizableComboboxItemSourceDto

};
type IValueValidator = {
    'name'?: string

    'attributes'?: {}

};
type LocalizableComboboxItemSourceDto = {
    'items'?: Array<LocalizableComboboxItemDto>
    | LocalizableComboboxItemDto

};
type LocalizableComboboxItemDto = {
    'value'?: string

    'displayText'?: string

};
type CreateOrUpdateEditionDto = {
    'edition': EditionEditDto

    'featureValues': Array<NameValueDto>
    | NameValueDto

};
type ListResultDto[EquipmentListDto] = {
    'items' ? : Array<EquipmentListDto>
        | EquipmentListDto

};
type EquipmentListDto = {
    'name'?: string

    'description'?: string

    'productType'?: string

    'creationTime'?: string

    'accessKey'?: string

    'accessSecret'?: string

    'productId'?: number

    'id'?: number

};
type GetEquipmentEditOutput = {
    'equipment'?: EquipmentEditDto

    'equipmentProperties'?: Array<EquipmentPropertyListDto>
    | EquipmentPropertyListDto

    'equipmentBindPort'?: EquipmentBindPortDto

};
type EquipmentEditDto = {
    'name': string

    'description'?: string

    'accessKey'?: string

    'accessSecret'?: string

    'productType'?: string

    'isEquipmentOnline'?: boolean

    'isEquipmentFault'?: boolean

    'id'?: number

};
type EquipmentPropertyListDto = {
    'name'?: string

    'description'?: string

    'displayName'?: string

    'value'?: string

    'type'?: string

    'bitType'?: string

    'creationTime'?: string

    'productPropertyId'?: number

    'state'?: number

    'config'?: string

    'operation'?: string

    'sortIndex'?: number

    'id'?: number

};
type EquipmentBindPortDto = {
    'terminalId'?: number

    'terminalPortConfigId'?: number

};
type CreateOrUpdateEquipmentInput = {
    'equipment': CreateOrUpdateEquipmentDto

    'equipmentProperties'?: Array<EquipmentPropertyEditDto>
    | EquipmentPropertyEditDto

    'bindPorts'?: Array<CreateOrUpdateBindPortDto>
    | CreateOrUpdateBindPortDto

};
type CreateOrUpdateEquipmentDto = {
    'name': string

    'description'?: string

    'productId'?: number

    'bluetooth'?: string

    'id'?: number

};
type EquipmentPropertyEditDto = {
    'name': string

    'value'?: string

    'productPropertyId'?: number

    'displayName': string

    'description'?: string

    'type'?: "BaseProperty" | "CommunicationProperty"

    'bitType'?: "ReadOnly" | "WriteOnly" | "ReadAndWrite"

    'config'?: string

    'operation'?: string

    'sortIndex'?: number

    'id'?: number

};
type CreateOrUpdateBindPortDto = {
    'terminalPortConfigId'?: number

};
type PagedResultDto[EquipmentListDto] = {
    'totalCount' ? : number

    'items' ? : Array<EquipmentListDto>
        | EquipmentListDto

};
type ListResultDto[EquipmentWithPropertyDto] = {
    'items' ? : Array<EquipmentWithPropertyDto>
        | EquipmentWithPropertyDto

};
type EquipmentWithPropertyDto = {
    'productType'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'id'?: number

    'name'?: string

    'description'?: string

    'productId'?: number

    'productName'?: string

    'stationId'?: number

    'stationName'?: string

    'isOnline'?: boolean

    'equipmentBaseProperties'?: Array<EquipmentPropertyForSingleEquipment>
    | EquipmentPropertyForSingleEquipment

    'equipmentCommunicationProperties'?: Array<EquipmentPropertyForSingleEquipment>
    | EquipmentPropertyForSingleEquipment

};
type EquipmentPropertyForSingleEquipment = {
    'id'?: number

    'name'?: string

    'displayName'?: string

    'photoIds'?: Array<string>
    | string

    'description'?: string

    'value'?: string

    'state'?: number

    'bitType'?: "ReadOnly" | "WriteOnly" | "ReadAndWrite"

    'config'?: string

    'operation'?: string

    'sortIndex'?: number

};
type PagedResultDto[EquipmentInpageDto] = {
    'totalCount' ? : number

    'items' ? : Array<EquipmentInpageDto>
        | EquipmentInpageDto

};
type EquipmentInpageDto = {
    'name'?: string

    'lastModificationTime'?: string

    'productType'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'description'?: string

    'stationId'?: number

    'stationName'?: string

    'isOnline'?: boolean

    'productId'?: number

    'equipmentBaseProperties'?: Array<EquipmentBasePropertyInpageDto>
    | EquipmentBasePropertyInpageDto

    'id'?: number

};
type EquipmentBasePropertyInpageDto = {
    'name'?: string

    'displayName'?: string

    'description'?: string

    'value'?: string

    'config'?: string

    'operation'?: string

    'id'?: number

};
type EquipmentWithPropertyOutput = {
    'equipmentWithProperty'?: EquipmentWithPropertyDto

};
type ControlEquipmentInput = {
    'equipmentId': number

    'index': number

    'value': number

};
type CreateFriendshipRequestInput = {
    'userId'?: number

    'tenantId'?: number

};
type CreateFriendshipRequestByUserNameInput = {
    'tenancyName': string

    'userName'?: string

};
type BlockUserInput = {
    'userId'?: number

    'tenantId'?: number

};
type UnblockUserInput = {
    'userId'?: number

    'tenantId'?: number

};
type AcceptFriendshipRequestInput = {
    'userId'?: number

    'tenantId'?: number

};
type ListResultDto[GraphListDto] = {
    'items' ? : Array<GraphListDto>
        | GraphListDto

};
type GraphListDto = {
    'name'?: string

    'contentStorageId'?: string

    'creationTime'?: string

    'parentId'?: number

    'id'?: number

};
type GraphEditDto = {
    'name'?: string

    'contentStorageId'?: string

    'parentId'?: number

    'id'?: number

};
type CreateOrUpdateGraphInput = {
    'graph'?: GraphEditDto

};
type IFormFile = {
    'contentType'?: string

    'contentDisposition'?: string

    'headers'?: {}

    'length'?: number

    'name'?: string

    'fileName'?: string

};
type UploadFileOutput = {
    'id'?: string

    'fileName'?: string

};
type HostDashboardData = {
    'newTenantsCount'?: number

    'newSubscriptionAmount'?: number

    'dashboardPlaceholder1'?: number

    'dashboardPlaceholder2'?: number

    'incomeStatistics'?: Array<IncomeStastistic>
    | IncomeStastistic

    'editionStatistics'?: Array<TenantEdition>
    | TenantEdition

    'expiringTenants'?: Array<ExpiringTenant>
    | ExpiringTenant

    'recentTenants'?: Array<RecentTenant>
    | RecentTenant

    'maxExpiringTenantsShownCount'?: number

    'maxRecentTenantsShownCount'?: number

    'subscriptionEndAlertDayCount'?: number

    'recentTenantsDayCount'?: number

    'subscriptionEndDateStart'?: string

    'subscriptionEndDateEnd'?: string

    'tenantCreationStartDate'?: string

};
type IncomeStastistic = {
    'label'?: string

    'date'?: string

    'amount'?: number

};
type TenantEdition = {
    'label'?: string

    'value'?: number

};
type ExpiringTenant = {
    'tenantName'?: string

    'remainingDayCount'?: number

};
type RecentTenant = {
    'id'?: number

    'name'?: string

    'creationTime'?: string

};
type GetIncomeStatisticsDataOutput = {
    'incomeStatistics'?: Array<IncomeStastistic>
    | IncomeStastistic

};
type GetEditionTenantStatisticsOutput = {
    'editionStatistics'?: Array<TenantEdition>
    | TenantEdition

};
type HostSettingsEditDto = {
    'general': GeneralSettingsEditDto

    'userManagement': HostUserManagementSettingsEditDto

    'email': EmailSettingsEditDto

    'tenantManagement': TenantManagementSettingsEditDto

    'security': SecuritySettingsEditDto

    'billing'?: HostBillingSettingsEditDto

    'push'?: PushSettingEditDto

};
type GeneralSettingsEditDto = {
    'timezone'?: string

    'timezoneForComparison'?: string

};
type HostUserManagementSettingsEditDto = {
    'isEmailConfirmationRequiredForLogin'?: boolean

    'smsVerificationEnabled'?: boolean

};
type EmailSettingsEditDto = {
    'defaultFromAddress'?: string

    'defaultFromDisplayName'?: string

    'smtpHost'?: string

    'smtpPort'?: number

    'smtpUserName'?: string

    'smtpPassword'?: string

    'smtpDomain'?: string

    'smtpEnableSsl'?: boolean

    'smtpUseDefaultCredentials'?: boolean

};
type TenantManagementSettingsEditDto = {
    'allowSelfRegistration'?: boolean

    'isNewRegisteredTenantActiveByDefault'?: boolean

    'useCaptchaOnRegistration'?: boolean

    'defaultEditionId'?: number

};
type SecuritySettingsEditDto = {
    'useDefaultPasswordComplexitySettings'?: boolean

    'passwordComplexity'?: PasswordComplexitySetting

    'defaultPasswordComplexity'?: PasswordComplexitySetting

    'userLockOut'?: UserLockOutSettingsEditDto

    'twoFactorLogin'?: TwoFactorLoginSettingsEditDto

};
type HostBillingSettingsEditDto = {
    'legalName'?: string

    'address'?: string

};
type PushSettingEditDto = {
    'iOSAppKey'?: string

    'androidAppKey'?: string

    'pages'?: PushMobilePagesSettingEditDto

};
type PasswordComplexitySetting = {
    'requireDigit'?: boolean

    'requireLowercase'?: boolean

    'requireNonAlphanumeric'?: boolean

    'requireUppercase'?: boolean

    'requiredLength'?: number

};
type UserLockOutSettingsEditDto = {
    'isEnabled'?: boolean

    'maxFailedAccessAttemptsBeforeLockout'?: number

    'defaultAccountLockoutSeconds'?: number

};
type TwoFactorLoginSettingsEditDto = {
    'isEnabledForApplication'?: boolean

    'isEnabled'?: boolean

    'isEmailProviderEnabled'?: boolean

    'isSmsProviderEnabled'?: boolean

    'isRememberBrowserEnabled'?: boolean

    'isGoogleAuthenticatorEnabled'?: boolean

};
type PushMobilePagesSettingEditDto = {
    'keyCabinetDetailPage'?: string

    'wireCabinetDetailPage'?: string

    'safetyWearDetailPage'?: string

};
type SendTestEmailInput = {
    'emailAddress': string

};
type InstallDto = {
    'connectionString': string

    'adminPassword': string

    'webSiteUrl': string

    'serverUrl'?: string

    'defaultLanguage': string

    'smtpSettings'?: EmailSettingsEditDto

    'billInfo'?: HostBillingSettingsEditDto

};
type AppSettingsJsonDto = {
    'webSiteUrl'?: string

    'serverSiteUrl'?: string

    'languages'?: Array<NameValue>
    | NameValue

};
type NameValue = {
    'name'?: string

    'value'?: string

};
type CheckDatabaseOutput = {
    'isDatabaseExist'?: boolean

};
type IntelligentLockInput = {
    'deviceId'?: number

    'roleId'?: number

    'isEst'?: boolean

    'tenantId'?: number

    'stationId'?: number

};
type ListResultDto[IntelligentLockOutput] = {
    'items' ? : Array<IntelligentLockOutput>
        | IntelligentLockOutput

};
type IntelligentLockOutput = {
    'id'?: number

    'deviceId'?: number

    'isEst'?: boolean

};
type ListResultDto[IntelligentLockDetailOutput] = {
    'items' ? : Array<IntelligentLockDetailOutput>
        | IntelligentLockDetailOutput

};
type IntelligentLockDetailOutput = {
    'deviceAreaId'?: number

    'deviceAreaName'?: string

    'stationId'?: number

    'sortId'?: number

    'childrens'?: Array<IntelligentLockDetailOutput>
    | IntelligentLockDetailOutput

    'devices'?: Array<DeviceDetailOutput>
    | DeviceDetailOutput

};
type DeviceDetailOutput = {
    'id'?: number

    'deviceId'?: number

    'deviceName'?: string

    'deviceDescription'?: string

};
type InvoiceDto = {
    'amount'?: number

    'editionDisplayName'?: string

    'invoiceNo'?: string

    'invoiceDate'?: string

    'tenantLegalName'?: string

    'tenantAddress'?: Array<string>
    | string

    'tenantTaxNo'?: string

    'hostLegalName'?: string

    'hostAddress'?: Array<string>
    | string

};
type CreateInvoiceDto = {
    'subscriptionPaymentId'?: number

};
type KeyCabinetApplyInput = {
    'taskName'?: string

    'equipmentPropertyId'?: number

    'applicantId'?: number

    'applyReason'?: "EquipmentFailure" | "EquipmentOverhaul" | "UrgentUnlock" | "OtherReason" | "UnLockNormalOperation" | "OpenLockDeviceSetupDebug" | "OpenLockWfDeviceDailyMaintenance" | "OpenLockWfDeviceFaultHandling" | "OpenLockNormalDeviceDailyMaintenance"

    'applyReasonNote'?: string

    'approverIdArray'?: string

    'expiredDate'?: string

    'isAllowToSelectApproverType'?: boolean

    'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover"

};
type ApiResultOutput = {
    'result'?: boolean

    'code'?: number

    'data'?: string

    'message'?: string

};
type KeyCabinetApproveInput = {
    'equipmentPropertyId'?: number

    'approverId'?: number

    'isApprovePass'?: boolean

    'approveNote'?: string

};
type KeyCabinetUnlockInput = {
    'equipmentPropertyId'?: number

    'operatorId'?: number

    'unLockReason'?: string

};
type ApiResultOutput[KeyCabinetUnlockOutput] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : KeyCabinetUnlockOutput

    'message' ? : string

};
type KeyCabinetUnlockOutput = {
    'unlockCode'?: string

};
type KeyCabinetOpenDoorInput = {
    'operatorId'?: number

    'equipmentPropertyId'?: number

};
type ApiResultOutput[Dictionary[Int32, String]] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : {}

    'message' ? : string

};
type ApiResultOutput[List[KeyCabinetValueTextDto]] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : Array<KeyCabinetValueTextDto>
        | KeyCabinetValueTextDto

    'message' ? : string

};
type KeyCabinetValueTextDto = {
    'value'?: number

    'text'?: string

};
type ApiResultOutput[KeyCabinetTaskOutput] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : KeyCabinetTaskOutput

    'message' ? : string

};
type KeyCabinetTaskOutput = {
    'equipmentPropertyId'?: number

    'isNeedApprove'?: boolean

    'isApproverCanUnlockDirectly'?: boolean

    'isApplicantCanEndTask'?: boolean

    'unlockMode'?: "Online" | "Bluetooth" | "Password"

    'lockMode'?: "LockerDoor" | "LockerBuckle"

    'taskStep'?: "None" | "ErrorCode" | "Applying" | "ApprovalPassed" | "ApprovalNotPassed" | "Unlocked" | "TimeOut" | "TakenOut" | "Returned" | "Ended" | "Expired"

    'applicantId'?: number

    'applyTime'?: string

    'applyReason'?: "EquipmentFailure" | "EquipmentOverhaul" | "UrgentUnlock" | "OtherReason" | "UnLockNormalOperation" | "OpenLockDeviceSetupDebug" | "OpenLockWfDeviceDailyMaintenance" | "OpenLockWfDeviceFaultHandling" | "OpenLockNormalDeviceDailyMaintenance"

    'applyReasonNote'?: string

    'applyReasonPhotoId'?: string

    'applyReasonVoiceId'?: string

    'approveFlowItems'?: Array<KeyCabinetApproveFlowItemDto>
    | KeyCabinetApproveFlowItemDto

    'currentApproveFlowItem'?: KeyCabinetApproveFlowItemDto

    'unlockTime'?: string

    'unlockCode'?: string

    'unlockTimeoutTime'?: string

    'takenTime'?: string

    'returnTime'?: string

    'expiredDate'?: string

    'equipmentId'?: number

    'equipmentName'?: string

    'equipmentPropertyName'?: string

    'equipmentPropertyDisplayName'?: string

    'equipmentPropertyValue'?: string

    'stationId'?: number

    'stationName'?: string

    'applicantName'?: string

    'applyReasonEnumName'?: string

    'isExpired'?: boolean

    'taskName'?: string

    'equipmentPropertyNameForLog'?: string

    'applyReasonNameForLog'?: string

    'unlockReasonForLog'?: string

    'operatorId'?: number

    'operatorName'?: string

    'guardianId'?: number

    'guardianName'?: string

    'isAllowToSelectApproverType'?: boolean

    'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover"

    'endTaskTime'?: string

};
type KeyCabinetApproveFlowItemDto = {
    'roles'?: string

    'rolesNames'?: string

    'approverId'?: number

    'approverName'?: string

    'isApprovePassed'?: boolean

    'approveTime'?: string

    'approveNote'?: string

    'sortIndex'?: number

};
type KeyCabinetEndTaskInput = {
    'applicantId'?: number

    'equipmentPropertyId'?: number

};
type ApiResultOutput[ListResultDto[KeyCabinetOperatorDto]] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : ListResultDto[KeyCabinetOperatorDto]

    'message' ? : string

};
type ListResultDto[KeyCabinetOperatorDto] = {
    'items' ? : Array<KeyCabinetOperatorDto>
        | KeyCabinetOperatorDto

};
type KeyCabinetOperatorDto = {
    'id'?: number

    'name'?: string

    'surname'?: string

    'userName'?: string

};
type EntityDto = {
    'id'?: number

};
type ApiResultOutput[Boolean] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : boolean

    'message' ? : string

};
type ApiResultOutput[ListResultDto[KeyCarbinetLogListOutput]] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : ListResultDto[KeyCarbinetLogListOutput]

    'message' ? : string

};
type ListResultDto[KeyCarbinetLogListOutput] = {
    'items' ? : Array<KeyCarbinetLogListOutput>
        | KeyCarbinetLogListOutput

};
type KeyCarbinetLogListOutput = {
    'logId'?: number

    'log'?: KeyCabinetTaskOutput

};
type KeyCarbinetLogInput = {
    'logId'?: number

    'taskName'?: string

    'equipmentPropertyNameForLog'?: string

    'applyReasonNameForLog'?: string

};
type GetLanguagesOutput = {
    'defaultLanguageName'?: string

    'items'?: Array<ApplicationLanguageListDto>
    | ApplicationLanguageListDto

};
type ApplicationLanguageListDto = {
    'tenantId'?: number

    'name'?: string

    'displayName'?: string

    'icon'?: string

    'isDisabled'?: boolean

    'isDeleted'?: boolean

    'deleterUserId'?: number

    'deletionTime'?: string

    'lastModificationTime'?: string

    'lastModifierUserId'?: number

    'creationTime'?: string

    'creatorUserId'?: number

    'id'?: number

};
type GetLanguageForEditOutput = {
    'language'?: ApplicationLanguageEditDto

    'languageNames'?: Array<ComboboxItemDto>
    | ComboboxItemDto

    'flags'?: Array<ComboboxItemDto>
    | ComboboxItemDto

};
type ApplicationLanguageEditDto = {
    'id'?: number

    'name': string

    'icon'?: string

    'isEnabled'?: boolean

};
type CreateOrUpdateLanguageInput = {
    'language': ApplicationLanguageEditDto

};
type SetDefaultLanguageInput = {
    'name': string

};
type PagedResultDto[LanguageTextListDto] = {
    'totalCount' ? : number

    'items' ? : Array<LanguageTextListDto>
        | LanguageTextListDto

};
type LanguageTextListDto = {
    'key'?: string

    'baseValue'?: string

    'targetValue'?: string

};
type UpdateLanguageTextInput = {
    'languageName': string

    'sourceName': string

    'key': string

    'value': string

};
type GetNotificationsOutput = {
    'unreadCount'?: number

    'totalCount'?: number

    'items'?: Array<UserNotification>
    | UserNotification

};
type UserNotification = {
    'tenantId'?: number

    'userId'?: number

    'state'?: "Unread" | "Read"

    'notification'?: TenantNotification

    'id'?: string

};
type TenantNotification = {
    'tenantId'?: number

    'notificationName'?: string

    'data'?: NotificationData

    'entityType'?: string

    'entityTypeName'?: string

    'entityId'?: {}

    'severity'?: "Info" | "Success" | "Warn" | "Error" | "Fatal"

    'creationTime'?: string

    'id'?: string

};
type NotificationData = {
    'type'?: string

    'properties'?: {}

};
type EntityDto[Guid] = {
    'id' ? : string

};
type GetNotificationSettingsOutput = {
    'receiveNotifications'?: boolean

    'notifications'?: Array<NotificationSubscriptionWithDisplayNameDto>
    | NotificationSubscriptionWithDisplayNameDto

};
type NotificationSubscriptionWithDisplayNameDto = {
    'displayName'?: string

    'description'?: string

    'name': string

    'isSubscribed'?: boolean

};
type UpdateNotificationSettingsInput = {
    'receiveNotifications'?: boolean

    'notifications'?: Array<NotificationSubscriptionDto>
    | NotificationSubscriptionDto

};
type NotificationSubscriptionDto = {
    'name': string

    'isSubscribed'?: boolean

};
type GetOperationRecordOutput = {
    'infoDto'?: OperationRecordInfoDto

    'itemDtos'?: Array<OperationRecordItemListDto>
    | OperationRecordItemListDto

};
type OperationRecordInfoDto = {
    'title'?: string

    'applicant'?: string

    'approver'?: string

    'equipmentType'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'startTime'?: string

    'status'?: string

    'recordLevel'?: "Gray" | "Green" | "Red"

    'photoIds'?: Array<string>
    | string

};
type OperationRecordItemListDto = {
    'operationTime'?: string

    'operationDescription'?: string

};
type PagedResultDto[OperationRecordListDto] = {
    'totalCount' ? : number

    'items' ? : Array<OperationRecordListDto>
        | OperationRecordListDto

};
type OperationRecordListDto = {
    'title'?: string

    'applicant'?: string

    'approver'?: string

    'equipmentType'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'startTime'?: string

    'status'?: string

    'recordLevel'?: "Gray" | "Green" | "Red"

    'id'?: number

};
type ListResultDto[OrganizationUnitDto] = {
    'items' ? : Array<OrganizationUnitDto>
        | OrganizationUnitDto

};
type OrganizationUnitDto = {
    'parentId'?: number

    'code'?: string

    'displayName'?: string

    'memberCount'?: number

    'lastModificationTime'?: string

    'lastModifierUserId'?: number

    'creationTime'?: string

    'creatorUserId'?: number

    'id'?: number

};
type PagedResultDto[OrganizationUnitUserListDto] = {
    'totalCount' ? : number

    'items' ? : Array<OrganizationUnitUserListDto>
        | OrganizationUnitUserListDto

};
type OrganizationUnitUserListDto = {
    'name'?: string

    'surname'?: string

    'userName'?: string

    'emailAddress'?: string

    'profilePictureId'?: string

    'addedTime'?: string

    'id'?: number

};
type CreateOrganizationUnitInput = {
    'parentId'?: number

    'displayName': string

};
type UpdateOrganizationUnitInput = {
    'id'?: number

    'displayName': string

};
type MoveOrganizationUnitInput = {
    'id'?: number

    'newParentId'?: number

};
type UsersToOrganizationUnitInput = {
    'userIds'?: Array<number>
    | number

    'organizationUnitId'?: number

};
type FindOrganizationUnitUsersInput = {
    'organizationUnitId'?: number

    'maxResultCount'?: number

    'skipCount'?: number

    'filter'?: string

};
type PaymentInfoDto = {
    'edition'?: EditionSelectDto

    'additionalPrice'?: number

};
type EditionSelectDto = {
    'id'?: number

    'name'?: string

    'displayName'?: string

    'expiringEditionId'?: number

    'monthlyPrice'?: number

    'annualPrice'?: number

    'trialDayCount'?: number

    'waitingDayAfterExpire'?: number

    'isFree'?: boolean

    'additionalData'?: {
        'Paypal'?: {}

    }

};
type CreatePaymentDto = {
    'editionId'?: number

    'editionPaymentType'?: "NewRegistration" | "BuyNow" | "Upgrade" | "Extend"

    'paymentPeriodType'?: "Monthly" | "Annual"

    'subscriptionPaymentGatewayType'?: "Paypal"

};
type CreatePaymentResponse = {};
type ExecutePaymentDto = {
    'gateway'?: "Paypal"

    'editionPaymentType'?: "NewRegistration" | "BuyNow" | "Upgrade" | "Extend"

    'editionId'?: number

    'paymentPeriodType'?: "Monthly" | "Annual"

    'additionalData'?: {}

};
type ExecutePaymentResponse = {};
type PagedResultDto[SubscriptionPaymentListDto] = {
    'totalCount' ? : number

    'items' ? : Array<SubscriptionPaymentListDto>
        | SubscriptionPaymentListDto

};
type SubscriptionPaymentListDto = {
    'gateway'?: string

    'amount'?: number

    'editionId'?: number

    'dayCount'?: number

    'paymentPeriodType'?: string

    'paymentId'?: string

    'payerId'?: string

    'status'?: string

    'editionDisplayName'?: string

    'tenantId'?: number

    'invoiceNo'?: string

    'lastModificationTime'?: string

    'lastModifierUserId'?: number

    'creationTime'?: string

    'creatorUserId'?: number

    'id'?: number

};
type ApiResultOutput[ListResultDto[PendingDto]] = {
    'result' ? : boolean

    'code' ? : number

    'data' ? : ListResultDto[PendingDto]

    'message' ? : string

};
type ListResultDto[PendingDto] = {
    'items' ? : Array<PendingDto>
        | PendingDto

};
type PendingDto = {
    'id'?: number

    'pendingType'?: "KeyCabinet" | "WireCabinet"

    'applicantId'?: number

    'applyTime'?: string

    'title'?: string

    'subTitle'?: string

    'expiredDate'?: string

    'isExpired'?: boolean

    'taskStep'?: number

};
type ListResultDto[FlatPermissionWithLevelDto] = {
    'items' ? : Array<FlatPermissionWithLevelDto>
        | FlatPermissionWithLevelDto

};
type FlatPermissionWithLevelDto = {
    'level'?: number

    'parentName'?: string

    'name'?: string

    'displayName'?: string

    'description'?: string

    'isGrantedByDefault'?: boolean

};
type ListResultDto[ProductListDto] = {
    'items' ? : Array<ProductListDto>
        | ProductListDto

};
type ProductListDto = {
    'name'?: string

    'description'?: string

    'creationTime'?: string

    'type'?: string

    'model'?: string

    'id'?: number

};
type GetProductEditOutput = {
    'product'?: ProductEditDto

    'productProperties'?: Array<ProductPropertyListDto>
    | ProductPropertyListDto

};
type ProductEditDto = {
    'name': string

    'description'?: string

    'type'?: string

    'model'?: string

    'id'?: number

};
type ProductPropertyListDto = {
    'name'?: string

    'description'?: string

    'displayName'?: string

    'value'?: string

    'type'?: string

    'bitType'?: string

    'creationTime'?: string

    'id'?: number

};
type CreateOrUpdateProductInput = {
    'product': CreateOrUpdateProductDto

    'productProperties'?: Array<ProductPropertyEditDto>
    | ProductPropertyEditDto

};
type CreateOrUpdateProductDto = {
    'name': string

    'description'?: string

    'type'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'model'?: string

    'id'?: number

};
type ProductPropertyEditDto = {
    'name': string

    'displayName': string

    'value'?: string

    'description'?: string

    'type'?: "BaseProperty" | "CommunicationProperty"

    'bitType'?: "ReadOnly" | "WriteOnly" | "ReadAndWrite"

    'id'?: number

};
type ListResultDto[ProductPropertyListDto] = {
    'items' ? : Array<ProductPropertyListDto>
        | ProductPropertyListDto

};
type GetProductPropertyEditOutput = {
    'productProperty'?: ProductPropertyEditDto

};
type CreateOrUpdateProductPropertyInput = {
    'productProperty': ProductPropertyEditDto

};
type CurrentUserProfileEditDto = {
    'name': string

    'surname': string

    'userName': string

    'emailAddress': string

    'phoneNumber'?: string

    'isPhoneNumberConfirmed'?: boolean

    'timezone'?: string

    'qrCodeSetupImageUrl'?: string

    'isGoogleAuthenticatorEnabled'?: boolean

};
type UpdateGoogleAuthenticatorKeyOutput = {
    'qrCodeSetupImageUrl'?: string

};
type VerifySmsCodeInputDto = {
    'code'?: string

};
type ChangePasswordInput = {
    'currentPassword': string

    'newPassword': string

};
type UpdateProfilePictureInput = {
    'fileName': string

    'x'?: number

    'y'?: number

    'width'?: number

    'height'?: number

};
type GetPasswordComplexitySettingOutput = {
    'setting'?: PasswordComplexitySetting

};
type GetProfilePictureOutput = {
    'profilePicture'?: string

};
type ChangeUserLanguageDto = {
    'languageName': string

};
type ListResultDto[RoleListDto] = {
    'items' ? : Array<RoleListDto>
        | RoleListDto

};
type RoleListDto = {
    'name'?: string

    'displayName'?: string

    'isStatic'?: boolean

    'isDefault'?: boolean

    'creationTime'?: string

    'id'?: number

};
type GetRoleForEditOutput = {
    'role'?: RoleEditDto

    'permissions'?: Array<FlatPermissionDto>
    | FlatPermissionDto

    'grantedPermissionNames'?: Array<string>
    | string

};
type RoleEditDto = {
    'id'?: number

    'displayName': string

    'isDefault'?: boolean

};
type FlatPermissionDto = {
    'parentName'?: string

    'name'?: string

    'displayName'?: string

    'description'?: string

    'isGrantedByDefault'?: boolean

};
type CreateOrUpdateRoleInput = {
    'role': RoleEditDto

    'grantedPermissionNames': Array<string>
    | string

};
type SafetyWearMonitoringInput = {
    'userId'?: number

    'macAddress'?: string

    'equipmentNo'?: number

    'workState'?: boolean

    'usingState'?: boolean

    'heartRate'?: number

    'systolicPressure'?: number

    'diastolicPressure'?: number

    'longitude'?: number

    'latitude'?: number

};
type SafetyWearMonitoringOutput = {
    'userName'?: string

    'createTime'?: string

    'userId'?: number

    'stationId'?: number

    'equipmentId'?: number

    'macAddress'?: string

    'equipmentNo'?: number

    'workState'?: boolean

    'usingState'?: boolean

    'heartRate'?: number

    'systolicPressure'?: number

    'diastolicPressure'?: number

    'longitude'?: number

    'latitude'?: number

    'updateTime'?: string

};
type ListResultDto[SafetyWearMonitoringOutput] = {
    'items' ? : Array<SafetyWearMonitoringOutput>
        | SafetyWearMonitoringOutput

};
type EquipmentInfoOutput = {
    'equipmentId'?: number

    'macAddress'?: string

    'name'?: string

    'description'?: string

    'tenantId'?: number

    'stationId'?: number

};
type ListResultDto[EquipmentInfoOutput] = {
    'items' ? : Array<EquipmentInfoOutput>
        | EquipmentInfoOutput

};
type ListResultDto[SafetyWearUserOutput] = {
    'items' ? : Array<SafetyWearUserOutput>
        | SafetyWearUserOutput

};
type SafetyWearUserOutput = {
    'userId'?: number

    'userName'?: string

};
type GetCurrentLoginInformationsOutput = {
    'user'?: UserLoginInfoDto

    'tenant'?: TenantLoginInfoDto

    'application'?: ApplicationInfoDto

};
type UserLoginInfoDto = {
    'name'?: string

    'surname'?: string

    'userName'?: string

    'emailAddress'?: string

    'profilePictureId'?: string

    'id'?: number

};
type TenantLoginInfoDto = {
    'tenancyName'?: string

    'name'?: string

    'logoId'?: string

    'logoFileType'?: string

    'customCssId'?: string

    'subscriptionEndDateUtc'?: string

    'isInTrialPeriod'?: boolean

    'edition'?: EditionInfoDto

    'creationTime'?: string

    'paymentPeriodType'?: "Monthly" | "Annual"

    'subscriptionDateString'?: string

    'creationTimeString'?: string

    'id'?: number

};
type ApplicationInfoDto = {
    'version'?: string

    'releaseDate'?: string

    'features'?: {}

};
type EditionInfoDto = {
    'displayName'?: string

    'trialDayCount'?: number

    'monthlyPrice'?: number

    'annualPrice'?: number

    'isHighestEdition'?: boolean

    'isFree'?: boolean

    'id'?: number

};
type UpdateUserSignInTokenOutput = {
    'signInToken'?: string

    'encodedUserId'?: string

    'encodedTenantId'?: string

};
type ListResultDto[StationListDto] = {
    'items' ? : Array<StationListDto>
        | StationListDto

};
type StationListDto = {
    'name'?: string

    'description'?: string

    'no'?: string

    'id'?: number

};
type GetStationEditOutput = {
    'station'?: GetStationEditDto

};
type GetStationEditDto = {
    'name'?: string

    'description'?: string

    'sortId'?: number

    'no'?: string

    'id'?: number

};
type CreateOrUpdateStationInput = {
    'station': CreateOrUpdateStationDto

};
type CreateOrUpdateStationDto = {
    'name': string

    'description'?: string

    'sortId'?: number

    'no'?: string

    'id'?: number

};
type PagedResultDto[StationListDto] = {
    'totalCount' ? : number

    'items' ? : Array<StationListDto>
        | StationListDto

};
type BindEquipmentStationInput = {
    'stationId'?: number

    'equipmentIds'?: Array<number>
    | number

};
type CreateStationUserInput = {
    'stationUserDtos'?: Array<StationUserDto>
    | StationUserDto

};
type StationUserDto = {
    'stationId'?: number

    'userId'?: number

};
type CreateStationAreaInput = {
    'name': string

    'parentId'?: number

};
type StationAreaDto = {
    'stationAreaId'?: number

    'stationAreaName'?: string

    'stationAreaParentId'?: number

    'stationDtos'?: Array<StationDto>
    | StationDto

};
type StationDto = {
    'stationName'?: string

    'stationId'?: number

};
type UpdateStationAreaInput = {
    'name': string

    'id'?: number

};
type MoveStationAreaInput = {
    'id'?: number

    'parentId'?: number

};
type ListResultDto[StationAreaDto] = {
    'items' ? : Array<StationAreaDto>
        | StationAreaDto

};
type ListResultDto[StationAreaWithEquipment] = {
    'items' ? : Array<StationAreaWithEquipment>
        | StationAreaWithEquipment

};
type StationAreaWithEquipment = {
    'stationAreaId'?: number

    'stationAreaName'?: string

    'stationAreaParentId'?: number

    'childrenCount'?: number

    'stations'?: Array<StationInArea>
    | StationInArea

};
type StationInArea = {
    'stationId'?: number

    'stationName'?: string

    'equipments'?: Array<EquipmentInStation>
    | EquipmentInStation

};
type EquipmentInStation = {
    'id'?: number

    'name'?: string

    'lastModificationTime'?: string

    'productType'?: "KeyCabinet" | "WireCabinet" | "SafetyWear"

    'description'?: string

    'stationId'?: number

    'stationName'?: string

    'isOnline'?: boolean

    'equipmentBaseProperties'?: Array<BasePropertyInEquipment>
    | BasePropertyInEquipment

};
type BasePropertyInEquipment = {
    'name'?: string

    'displayName'?: string

    'description'?: string

    'value'?: string

    'config'?: string

    'operation'?: string

    'id'?: number

};
type StationAreaBindStationInput = {
    'stationIds'?: Array<number>
    | number

    'id'?: number

};
type PagedResultDto[UserListByStationIdDto] = {
    'totalCount' ? : number

    'items' ? : Array<UserListByStationIdDto>
        | UserListByStationIdDto

};
type UserListByStationIdDto = {
    'userName'?: string

    'lastModificationTime'?: string

    'id'?: number

};
type ListResultDto[StationOrganizationUserDto] = {
    'items' ? : Array<StationOrganizationUserDto>
        | StationOrganizationUserDto

};
type StationOrganizationUserDto = {
    'displayName'?: string

    'parentId'?: number

    'userListDtos'?: Array<StationUserListDto>
    | StationUserListDto

    'id'?: number

};
type StationUserListDto = {
    'userId'?: number

    'userName'?: string

};
type PagedResultDto[TenantListDto] = {
    'totalCount' ? : number

    'items' ? : Array<TenantListDto>
        | TenantListDto

};
type TenantListDto = {
    'tenancyName'?: string

    'name'?: string

    'editionDisplayName'?: string

    'connectionString'?: string

    'isActive'?: boolean

    'creationTime'?: string

    'subscriptionEndDateUtc'?: string

    'editionId'?: number

    'isInTrialPeriod'?: boolean

    'id'?: number

};
type CreateTenantInput = {
    'tenancyName': string

    'name': string

    'adminEmailAddress': string

    'adminPassword'?: string

    'connectionString'?: string

    'shouldChangePasswordOnNextLogin'?: boolean

    'sendActivationEmail'?: boolean

    'editionId'?: number

    'isActive'?: boolean

    'subscriptionEndDateUtc'?: string

    'isInTrialPeriod'?: boolean

};
type TenantEditDto = {
    'tenancyName': string

    'name': string

    'connectionString'?: string

    'editionId'?: number

    'isActive'?: boolean

    'subscriptionEndDateUtc'?: string

    'isInTrialPeriod'?: boolean

    'id'?: number

};
type GetTenantFeaturesEditOutput = {
    'featureValues'?: Array<NameValueDto>
    | NameValueDto

    'features'?: Array<FlatFeatureDto>
    | FlatFeatureDto

};
type UpdateTenantFeaturesInput = {
    'id'?: number

    'featureValues': Array<NameValueDto>
    | NameValueDto

};
type GetMemberActivityOutput = {
    'memberActivities'?: Array<MemberActivity>
    | MemberActivity

};
type MemberActivity = {
    'name'?: string

    'earnings'?: string

    'cases'?: number

    'closed'?: number

    'rate'?: string

};
type GetDashboardDataOutput = {
    'totalProfit'?: number

    'newFeedbacks'?: number

    'newOrders'?: number

    'newUsers'?: number

    'salesSummary'?: Array<SalesSummaryData>
    | SalesSummaryData

    'totalSales'?: number

    'revenue'?: number

    'expenses'?: number

    'growth'?: number

    'transactionPercent'?: number

    'newVisitPercent'?: number

    'bouncePercent'?: number

    'dailySales'?: Array<number>
    | number

    'profitShares'?: Array<number>
    | number

};
type SalesSummaryData = {
    'period'?: string

    'sales'?: number

    'profit'?: number

};
type GetSalesSummaryOutput = {
    'salesSummary'?: Array<SalesSummaryData>
    | SalesSummaryData

};
type GetWorldMapInput = {};
type GetWorldMapOutput = {
    'countries'?: Array<WorldMapCountry>
    | WorldMapCountry

};
type WorldMapCountry = {
    'countryName'?: string

    'color'?: number

};
type GetGeneralStatsInput = {};
type GetGeneralStatsOutput = {
    'transactionPercent'?: number

    'newVisitPercent'?: number

    'bouncePercent'?: number

};
type RegisterTenantInput = {
    'tenancyName': string

    'name': string

    'adminEmailAddress': string

    'adminPassword'?: string

    'captchaResponse'?: string

    'subscriptionStartType'?: "Free" | "Trial" | "Paid"

    'gateway'?: "Paypal"

    'editionId'?: number

    'paymentId'?: string

};
type RegisterTenantOutput = {
    'tenantId'?: number

    'tenancyName'?: string

    'name'?: string

    'userName'?: string

    'emailAddress'?: string

    'isTenantActive'?: boolean

    'isActive'?: boolean

    'isEmailConfirmationRequired'?: boolean

};
type EditionsSelectOutput = {
    'allFeatures'?: Array<FlatFeatureSelectDto>
    | FlatFeatureSelectDto

    'editionsWithFeatures'?: Array<EditionWithFeaturesDto>
    | EditionWithFeaturesDto

    'tenantEditionId'?: number

};
type FlatFeatureSelectDto = {
    'parentName'?: string

    'name'?: string

    'displayName'?: string

    'description'?: string

    'defaultValue'?: string

    'inputType'?: IInputType

    'textHtmlColor'?: string

};
type EditionWithFeaturesDto = {
    'edition'?: EditionSelectDto

    'featureValues'?: Array<NameValueDto>
    | NameValueDto

};
type IInputType = {
    'name'?: string

    'attributes'?: {}

    'validator'?: IValueValidator

};
type TenantSettingsEditDto = {
    'general'?: GeneralSettingsEditDto

    'userManagement': TenantUserManagementSettingsEditDto

    'email'?: EmailSettingsEditDto

    'ldap'?: LdapSettingsEditDto

    'security': SecuritySettingsEditDto

    'billing'?: TenantBillingSettingsEditDto

};
type TenantUserManagementSettingsEditDto = {
    'allowSelfRegistration'?: boolean

    'isNewRegisteredUserActiveByDefault'?: boolean

    'isEmailConfirmationRequiredForLogin'?: boolean

    'useCaptchaOnRegistration'?: boolean

};
type LdapSettingsEditDto = {
    'isModuleEnabled'?: boolean

    'isEnabled'?: boolean

    'domain'?: string

    'userName'?: string

    'password'?: string

};
type TenantBillingSettingsEditDto = {
    'legalName'?: string

    'address'?: string

    'taxVatNo'?: string

};
type ListResultDto[TerminalPortConfigListDto] = {
    'items' ? : Array<TerminalPortConfigListDto>
        | TerminalPortConfigListDto

};
type TerminalPortConfigListDto = {
    'lastModificationTime'?: string

    'creationTime'?: string

    'creatorUserId'?: number

    'name'?: string

    'portType'?: number

    'terminalId'?: number

    'protocolType'?: number

    'id'?: number

};
type GetTerminalPortConfigOutput = {
    'terminalPortConfig'?: TerminalPortConfigEditDto

    'terminalPortBindEquipments'?: Array<TerminalPortBindEquipmentDto>
    | TerminalPortBindEquipmentDto

};
type TerminalPortConfigEditDto = {
    'lastModificationTime'?: string

    'creationTime'?: string

    'creatorUserId'?: number

    'name'?: string

    'portType'?: number

    'terminalId'?: number

    'protocolType'?: number

    'config'?: string

    'id'?: number

};
type TerminalPortBindEquipmentDto = {
    'equipmentId'?: number

    'productId'?: number

    'terminalPortConfigId'?: number

    'terminalId'?: number

    'canChanged'?: boolean

};
type CreateOrUpdateTerminalPortConfigInput = {
    'configDto': CreateOrUpdateTerminalPortConfigDto

};
type CreateOrUpdateTerminalPortConfigDto = {
    'name'?: string

    'portType'?: number

    'config'?: string

    'terminalId'?: number

    'protocolType'?: number

    'equipmentIds'?: Array<number>
    | number

    'id'?: number

};
type ListResultDto[TerminalListDto] = {
    'items' ? : Array<TerminalListDto>
        | TerminalListDto

};
type TerminalListDto = {
    'name'?: string

    'description'?: string

    'creationTime'?: string

    'accessKey'?: string

    'accessSecret'?: string

    'id'?: number

};
type GetTerminalEditOutput = {
    'terminal'?: TerminalEditDto

};
type TerminalEditDto = {
    'name': string

    'description'?: string

    'accessKey'?: string

    'accessSecret'?: string

    'id'?: number

};
type CreateOrUpdateTerminalInput = {
    'terminal': CreateOrUpdateTerminalDto

};
type CreateOrUpdateTerminalDto = {
    'name'?: string

    'description'?: string

    'id'?: number

};
type ResetTerminalInput = {
    'terminalId': number

};
type ListResultDto[NameValueDto] = {
    'items' ? : Array<NameValueDto>
        | NameValueDto

};
type AuthenticateModel = {
    'userNameOrEmailAddress': string

    'password': string

    'twoFactorVerificationCode'?: string

    'rememberClient'?: boolean

    'twoFactorRememberClientToken'?: string

    'singleSignIn'?: boolean

    'returnUrl'?: string

};
type AuthenticateResultModel = {
    'accessToken'?: string

    'encryptedAccessToken'?: string

    'expireInSeconds'?: number

    'shouldResetPassword'?: boolean

    'passwordResetCode'?: string

    'userId'?: number

    'requiresTwoFactorVerification'?: boolean

    'twoFactorAuthProviders'?: Array<string>
    | string

    'twoFactorRememberClientToken'?: string

    'returnUrl'?: string

};
type SendTwoFactorAuthCodeModel = {
    'userId'?: number

    'provider': string

};
type ImpersonatedAuthenticateResultModel = {
    'accessToken'?: string

    'encryptedAccessToken'?: string

    'expireInSeconds'?: number

};
type SwitchedAccountAuthenticateResultModel = {
    'accessToken'?: string

    'encryptedAccessToken'?: string

    'expireInSeconds'?: number

};
type ExternalLoginProviderInfoModel = {
    'name'?: string

    'clientId'?: string

};
type ExternalAuthenticateModel = {
    'authProvider': string

    'providerKey': string

    'providerAccessCode': string

    'returnUrl'?: string

    'singleSignIn'?: boolean

};
type ExternalAuthenticateResultModel = {
    'accessToken'?: string

    'encryptedAccessToken'?: string

    'expireInSeconds'?: number

    'waitingForActivation'?: boolean

    'returnUrl'?: string

};
type SecurityAuthenticateModel = {
    'authProvider': string

    'providerKey': string

    'singleSignIn'?: boolean

};
type SecurityAuthenticateResultModel = {
    'accessToken'?: string

    'encryptedAccessToken'?: string

    'expireInSeconds'?: number

    'waitingForActivation'?: boolean

    'userId'?: number

};
type UiCustomizationSettingsEditDto = {
    'layout'?: UiCustomizationLayoutSettingsEditDto

    'header'?: UiCustomizationHeaderSettingsEditDto

    'menu'?: UiCustomizationMenuSettingsEditDto

    'footer'?: UiCustomizationFooterSettingsEditDto

};
type UiCustomizationLayoutSettingsEditDto = {
    'layoutType'?: string

    'contentSkin'?: string

};
type UiCustomizationHeaderSettingsEditDto = {
    'desktopFixedHeader'?: boolean

    'desktopMinimizeMode'?: string

    'mobileFixedHeader'?: boolean

    'dropdownSkinDesktop'?: string

    'displaySubmenuArrowDesktop'?: boolean

    'dropdownSkin'?: string

};
type UiCustomizationMenuSettingsEditDto = {
    'position'?: string

    'asideSkin'?: string

    'fixedAside'?: boolean

    'allowAsideMinimizing'?: boolean

    'defaultMinimizedAside'?: boolean

    'allowAsideHiding'?: boolean

    'defaultHiddenAside'?: boolean

    'submenuToggle'?: string

    'dropdownSubmenuSkin'?: string

    'dropdownSubmenuArrow'?: boolean

};
type UiCustomizationFooterSettingsEditDto = {
    'fixedFooter'?: boolean

};
type PagedResultDto[UserListDto] = {
    'totalCount' ? : number

    'items' ? : Array<UserListDto>
        | UserListDto

};
type UserListDto = {
    'name'?: string

    'surname'?: string

    'userName'?: string

    'emailAddress'?: string

    'phoneNumber'?: string

    'profilePictureId'?: string

    'isEmailConfirmed'?: boolean

    'roles'?: Array<UserListRoleDto>
    | UserListRoleDto

    'lastLoginTime'?: string

    'isActive'?: boolean

    'creationTime'?: string

    'id'?: number

};
type UserListRoleDto = {
    'roleId'?: number

    'roleName'?: string

};
type GetUserForEditOutput = {
    'profilePictureId'?: string

    'user'?: UserEditDto

    'roles'?: Array<UserRoleDto>
    | UserRoleDto

    'allOrganizationUnits'?: Array<OrganizationUnitDto>
    | OrganizationUnitDto

    'memberedOrganizationUnits'?: Array<string>
    | string

};
type UserEditDto = {
    'id'?: number

    'name': string

    'surname': string

    'userName': string

    'emailAddress': string

    'phoneNumber'?: string

    'password'?: string

    'isActive'?: boolean

    'shouldChangePasswordOnNextLogin'?: boolean

    'isTwoFactorEnabled'?: boolean

    'isLockoutEnabled'?: boolean

};
type UserRoleDto = {
    'roleId'?: number

    'roleName'?: string

    'roleDisplayName'?: string

    'isAssigned'?: boolean

};
type GetUserPermissionsForEditOutput = {
    'permissions'?: Array<FlatPermissionDto>
    | FlatPermissionDto

    'grantedPermissionNames'?: Array<string>
    | string

};
type EntityDto[Int64] = {
    'id' ? : number

};
type UpdateUserPermissionsInput = {
    'id'?: number

    'grantedPermissionNames': Array<string>
    | string

};
type CreateOrUpdateUserInput = {
    'user': UserEditDto

    'assignedRoleNames': Array<string>
    | string

    'sendActivationEmail'?: boolean

    'setRandomPassword'?: boolean

    'organizationUnits'?: Array<number>
    | number

};
type UserListForLoginDto = {
    'name'?: string

    'surname'?: string

    'userName'?: string

    'id'?: number

};
type LinkToUserInput = {
    'tenancyName'?: string

    'usernameOrEmailAddress': string

    'password': string

};
type PagedResultDto[LinkedUserDto] = {
    'totalCount' ? : number

    'items' ? : Array<LinkedUserDto>
        | LinkedUserDto

};
type LinkedUserDto = {
    'tenantId'?: number

    'tenancyName'?: string

    'username'?: string

    'lastLoginTime'?: string

    'id'?: number

};
type ListResultDto[LinkedUserDto] = {
    'items' ? : Array<LinkedUserDto>
        | LinkedUserDto

};
type UnlinkUserInput = {
    'tenantId'?: number

    'userId'?: number

};
type ListResultDto[UserLoginAttemptDto] = {
    'items' ? : Array<UserLoginAttemptDto>
        | UserLoginAttemptDto

};
type UserLoginAttemptDto = {
    'tenancyName'?: string

    'userNameOrEmail'?: string

    'clientIpAddress'?: string

    'clientName'?: string

    'browserInfo'?: string

    'result'?: string

    'creationTime'?: string

};
type GetNfcCurrentUserLoginOutput = {
    'userLogin'?: UserLoginDto

};
type UserLoginDto = {
    'key': string

};
type CreateOrUpdateNfcUserLoginInput = {
    'userId': number

    'key': string

};
type GetLatestWebLogsOutput = {
    'latestWebLogLines'?: Array<string>
    | string

};
type WireCabinetApplyInput = {
    'equipmentPropertyId'?: number

    'applicantId'?: number

    'applyReason'?: "EquipmentFailure" | "EquipmentOverhaul" | "UrgentUnlock" | "OtherReason"

    'applyReasonNote'?: string

    'approverId'?: number

};
type WireCabinetApproveInput = {
    'equipmentPropertyId'?: number

    'approverId'?: number

    'isApprovePass'?: boolean

    'approveNote'?: string

};
type WireCabinetUnlockInput = {
    'equipmentPropertyId'?: number

};
type WireCabinetUnlockOutput = {
    'unlockCode'?: string

};
type WireCabinetHookInput = {
    'equipmentPropertyId'?: number

    'hookPosition'?: string

    'photoIds'?: Array<string>
    | string

};
type WireCabinetHook2Input = {
    'equipmentPropertyId'?: number

    'photoIds'?: Array<string>
    | string

    'deviceId'?: number

};
type WireCabinetUnHookInput = {
    'equipmentPropertyId'?: number

};
type WireCabinetUpdateTaskInput = {
    'equipmentId'?: number

    'status'?: Array<WireCabinetStatusDto>
    | WireCabinetStatusDto

    'bluetooth'?: string

};
type WireCabinetStatusDto = {
    'buckleNo'?: number

    'buckleStatus'?: "Unkown" | "Lock" | "UnlockAndTake" | "UnlockNotTake"

};
type WireCabinetValueTextDto = {
    'value'?: number

    'text'?: string

};
type WireCabinetTaskOutput = {
    'equipmentId'?: number

    'equipmentName'?: string

    'equipmentPropertyName'?: string

    'equipmentPropertyDisplayName'?: string

    'equipmentPropertyValue'?: string

    'stationId'?: number

    'stationName'?: string

    'applicantName'?: string

    'approverName'?: string

    'applyReasonEnumName'?: string

    'equipmentPropertyId'?: number

    'isNeedApprove'?: boolean

    'isApproverCanUnlockDirectly'?: boolean

    'unlockMode'?: "Online" | "Bluetooth" | "Password"

    'lockMode'?: "LockerDoor" | "LockerBuckle"

    'taskStep'?: "None" | "ErrorCode" | "Applying" | "ApprovalPassed" | "ApprovalNotPassed" | "Unlocked" | "TimeOut" | "TakenOut" | "Hooked" | "Unhooked" | "Returned" | "Ended"

    'applicantId'?: number

    'applyTime'?: string

    'applyReason'?: "EquipmentFailure" | "EquipmentOverhaul" | "UrgentUnlock" | "OtherReason"

    'applyReasonNote'?: string

    'applyReasonPhotoId'?: string

    'applyReasonVoiceId'?: string

    'approverId'?: number

    'approveTime'?: string

    'isApprovePass'?: boolean

    'approveNote'?: string

    'unlockTime'?: string

    'unlockCode'?: string

    'unlockTimeoutTime'?: string

    'takenTime'?: string

    'hookTime'?: string

    'hookPosition'?: string

    'hookPhotoId'?: string

    'unhookTime'?: string

    'unhookPhotoId'?: string

    'returnTime'?: string

    'returnPhotoId'?: string

    'takeReason'?: "UnlockByTicket" | "UnlockByCard" | "UnlockByKey" | "UnlockByTest" | "UnlockByBorrow"

};
type ListResultDto[WireCabinetOperatorDto] = {
    'items' ? : Array<WireCabinetOperatorDto>
        | WireCabinetOperatorDto

};
type WireCabinetOperatorDto = {
    'id'?: number

    'name'?: string

    'surname'?: string

    'userName'?: string

};
type UpdateOperateTimeInput = {
    'bluetooth'?: string

    'wireOperateTimeDtos'?: Array<WireOperateRecordDto>
    | WireOperateRecordDto

};
type WireOperateRecordDto = {
    'buckleNo'?: string

    'operationTime'?: string

    'takeReason'?: "UnlockByTicket" | "UnlockByCard" | "UnlockByKey" | "UnlockByTest" | "UnlockByBorrow"

    'markBit'?: "TakeOut" | "Return"

};
type WireDetailOutput = {
    'id'?: number

    'createTime'?: string

    'lastModificationTime'?: string

    'equipmentId'?: number

    'equipmentName'?: string

    'buckleNumber'?: number

    'name'?: string

    'description'?: string

    'taskStep'?: "None" | "ErrorCode" | "Applying" | "ApprovalPassed" | "ApprovalNotPassed" | "Unlocked" | "TimeOut" | "TakenOut" | "Hooked" | "Unhooked" | "Returned" | "Ended"

    'isExternal'?: boolean

};
type ListResultDto[UploadFileOutput] = {
    'items' ? : Array<UploadFileOutput>
        | UploadFileOutput

};
type WireCabinetOutput = {
    'wireCabinetId'?: number

    'name'?: string

    'stationId'?: number

    'stationName'?: string

    'description'?: string

    'wireDetailDtos'?: Array<WireDetailDto>
    | WireDetailDto

};
type WireDetailDto = {
    'wireId'?: number

    'buckleNumber'?: number

    'name'?: string

    'description'?: string

    'taskStep'?: "None" | "ErrorCode" | "Applying" | "ApprovalPassed" | "ApprovalNotPassed" | "Unlocked" | "TimeOut" | "TakenOut" | "Hooked" | "Unhooked" | "Returned" | "Ended"

    'isExternal'?: boolean

    'photoIds'?: Array<string>
    | string

    'wireConfigs'?: Array<WireConfigDto>
    | WireConfigDto

};
type WireConfigDto = {
    'wireConfigId'?: number

    'name'?: string

    'displayName'?: string

    'description'?: string

    'value'?: string

};
type EquipmentPropertyConfigInput = {
    'equipmentPropertyId'?: number

    'name'?: string

    'displayName'?: string

    'description'?: string

    'value'?: string

};
type WirePileOutput = {
    'name'?: string

    'hasBind'?: boolean

    'equipmentPropertyId'?: number

    'equipmentPropertyName'?: string

    'stationId'?: number

    'id'?: number

};
type ListResultDto[WireBeTakenDto] = {
    'items' ? : Array<WireBeTakenDto>
        | WireBeTakenDto

};
type WireBeTakenDto = {
    'equipmentPropertyId'?: number

    'displayName'?: string

};
type ListResultDto[WireCabinetBluetoothDto] = {
    'items' ? : Array<WireCabinetBluetoothDto>
        | WireCabinetBluetoothDto

};
type WireCabinetBluetoothDto = {
    'equipmentId'?: number

    'bluetooth'?: string

};
type CheckWireConfigInput = {
    'equipmentPropertyId'?: number

    'name': string

    'displayName': string

    'description'?: string

    'value': string

};

type Logger = {
    log: (line: string) => any
};

/**
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class Test {

    private domain: string = "http://petstore.swagger.io";
    private errorHandlers: CallbackHandler[] = [];

    constructor(domain?: string, private logger?: Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    private request(method: string, url: string, body: any, headers: any, queryParameters: any, form: any, reject: CallbackHandler, resolve: CallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        let req = (request as SuperAgentStatic)(method, url).query(queryParameters);

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        });

        if (body) {
            req.send(body);
        }

        if (typeof (body) === 'object' && !(body.constructor.name === 'Buffer')) {
            req.set('Content-Type', 'application/json');
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    ApiServicesAppAccountIsTenantAvailablePostURL(parameters: {
        'input'?: IsTenantAvailableInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/IsTenantAvailable';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountIsTenantAvailablePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountIsTenantAvailablePost(parameters: {
        'input'?: IsTenantAvailableInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/IsTenantAvailable';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountRegisterPostURL(parameters: {
        'input'?: RegisterInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/Register';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountRegisterPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountRegisterPost(parameters: {
        'input'?: RegisterInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/Register';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountSendPasswordResetCodePostURL(parameters: {
        'input'?: SendPasswordResetCodeInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SendPasswordResetCode';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountSendPasswordResetCodePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountSendPasswordResetCodePost(parameters: {
        'input'?: SendPasswordResetCodeInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SendPasswordResetCode';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountResetPasswordPostURL(parameters: {
        'input'?: ResetPasswordInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/ResetPassword';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountResetPasswordPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountResetPasswordPost(parameters: {
        'input'?: ResetPasswordInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/ResetPassword';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountSendEmailActivationLinkPostURL(parameters: {
        'input'?: SendEmailActivationLinkInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SendEmailActivationLink';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountSendEmailActivationLinkPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountSendEmailActivationLinkPost(parameters: {
        'input'?: SendEmailActivationLinkInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SendEmailActivationLink';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountActivateEmailPostURL(parameters: {
        'input'?: ActivateEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/ActivateEmail';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountActivateEmailPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountActivateEmailPost(parameters: {
        'input'?: ActivateEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/ActivateEmail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountImpersonatePostURL(parameters: {
        'input'?: ImpersonateInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/Impersonate';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountImpersonatePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountImpersonatePost(parameters: {
        'input'?: ImpersonateInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/Impersonate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountBackToImpersonatorPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/BackToImpersonator';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountBackToImpersonatorPost
     */
    ApiServicesAppAccountBackToImpersonatorPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/BackToImpersonator';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAccountSwitchToLinkedAccountPostURL(parameters: {
        'input'?: SwitchToLinkedAccountInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SwitchToLinkedAccount';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAccountSwitchToLinkedAccountPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAccountSwitchToLinkedAccountPost(parameters: {
        'input'?: SwitchToLinkedAccountInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Account/SwitchToLinkedAccount';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAuditLogGetAuditLogsGetURL(parameters: {
        'startDate': string,
        'endDate': string,
        'userName'?: string,
        'serviceName'?: string,
        'methodName'?: string,
        'browserInfo'?: string,
        'hasException'?: boolean,
        'minExecutionDuration'?: number,
        'maxExecutionDuration'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/AuditLog/GetAuditLogs';
        if (parameters['startDate'] !== undefined) {
            queryParameters['StartDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['EndDate'] = parameters['endDate'];
        }

        if (parameters['userName'] !== undefined) {
            queryParameters['UserName'] = parameters['userName'];
        }

        if (parameters['serviceName'] !== undefined) {
            queryParameters['ServiceName'] = parameters['serviceName'];
        }

        if (parameters['methodName'] !== undefined) {
            queryParameters['MethodName'] = parameters['methodName'];
        }

        if (parameters['browserInfo'] !== undefined) {
            queryParameters['BrowserInfo'] = parameters['browserInfo'];
        }

        if (parameters['hasException'] !== undefined) {
            queryParameters['HasException'] = parameters['hasException'];
        }

        if (parameters['minExecutionDuration'] !== undefined) {
            queryParameters['MinExecutionDuration'] = parameters['minExecutionDuration'];
        }

        if (parameters['maxExecutionDuration'] !== undefined) {
            queryParameters['MaxExecutionDuration'] = parameters['maxExecutionDuration'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAuditLogGetAuditLogsGet
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} userName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} serviceName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} methodName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} browserInfo - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} hasException - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} minExecutionDuration - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxExecutionDuration - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAuditLogGetAuditLogsGet(parameters: {
        'startDate': string,
        'endDate': string,
        'userName'?: string,
        'serviceName'?: string,
        'methodName'?: string,
        'browserInfo'?: string,
        'hasException'?: boolean,
        'minExecutionDuration'?: number,
        'maxExecutionDuration'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/AuditLog/GetAuditLogs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['startDate'] !== undefined) {
                queryParameters['StartDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['EndDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters['userName'] !== undefined) {
                queryParameters['UserName'] = parameters['userName'];
            }

            if (parameters['serviceName'] !== undefined) {
                queryParameters['ServiceName'] = parameters['serviceName'];
            }

            if (parameters['methodName'] !== undefined) {
                queryParameters['MethodName'] = parameters['methodName'];
            }

            if (parameters['browserInfo'] !== undefined) {
                queryParameters['BrowserInfo'] = parameters['browserInfo'];
            }

            if (parameters['hasException'] !== undefined) {
                queryParameters['HasException'] = parameters['hasException'];
            }

            if (parameters['minExecutionDuration'] !== undefined) {
                queryParameters['MinExecutionDuration'] = parameters['minExecutionDuration'];
            }

            if (parameters['maxExecutionDuration'] !== undefined) {
                queryParameters['MaxExecutionDuration'] = parameters['maxExecutionDuration'];
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppAuditLogGetAuditLogsToExcelGetURL(parameters: {
        'startDate': string,
        'endDate': string,
        'userName'?: string,
        'serviceName'?: string,
        'methodName'?: string,
        'browserInfo'?: string,
        'hasException'?: boolean,
        'minExecutionDuration'?: number,
        'maxExecutionDuration'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/AuditLog/GetAuditLogsToExcel';
        if (parameters['startDate'] !== undefined) {
            queryParameters['StartDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['EndDate'] = parameters['endDate'];
        }

        if (parameters['userName'] !== undefined) {
            queryParameters['UserName'] = parameters['userName'];
        }

        if (parameters['serviceName'] !== undefined) {
            queryParameters['ServiceName'] = parameters['serviceName'];
        }

        if (parameters['methodName'] !== undefined) {
            queryParameters['MethodName'] = parameters['methodName'];
        }

        if (parameters['browserInfo'] !== undefined) {
            queryParameters['BrowserInfo'] = parameters['browserInfo'];
        }

        if (parameters['hasException'] !== undefined) {
            queryParameters['HasException'] = parameters['hasException'];
        }

        if (parameters['minExecutionDuration'] !== undefined) {
            queryParameters['MinExecutionDuration'] = parameters['minExecutionDuration'];
        }

        if (parameters['maxExecutionDuration'] !== undefined) {
            queryParameters['MaxExecutionDuration'] = parameters['maxExecutionDuration'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppAuditLogGetAuditLogsToExcelGet
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} userName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} serviceName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} methodName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} browserInfo - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} hasException - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} minExecutionDuration - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxExecutionDuration - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppAuditLogGetAuditLogsToExcelGet(parameters: {
        'startDate': string,
        'endDate': string,
        'userName'?: string,
        'serviceName'?: string,
        'methodName'?: string,
        'browserInfo'?: string,
        'hasException'?: boolean,
        'minExecutionDuration'?: number,
        'maxExecutionDuration'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/AuditLog/GetAuditLogsToExcel';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['startDate'] !== undefined) {
                queryParameters['StartDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['EndDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters['userName'] !== undefined) {
                queryParameters['UserName'] = parameters['userName'];
            }

            if (parameters['serviceName'] !== undefined) {
                queryParameters['ServiceName'] = parameters['serviceName'];
            }

            if (parameters['methodName'] !== undefined) {
                queryParameters['MethodName'] = parameters['methodName'];
            }

            if (parameters['browserInfo'] !== undefined) {
                queryParameters['BrowserInfo'] = parameters['browserInfo'];
            }

            if (parameters['hasException'] !== undefined) {
                queryParameters['HasException'] = parameters['hasException'];
            }

            if (parameters['minExecutionDuration'] !== undefined) {
                queryParameters['MinExecutionDuration'] = parameters['minExecutionDuration'];
            }

            if (parameters['maxExecutionDuration'] !== undefined) {
                queryParameters['MaxExecutionDuration'] = parameters['maxExecutionDuration'];
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCachingGetAllCachesGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/GetAllCaches';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCachingGetAllCachesGet
     */
    ApiServicesAppCachingGetAllCachesGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/GetAllCaches';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCachingClearCachePostURL(parameters: {
        'input'?: EntityDto[String],
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/ClearCache';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCachingClearCachePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppCachingClearCachePost(parameters: {
        'input'?: EntityDto[String],
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/ClearCache';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCachingClearAllCachesPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/ClearAllCaches';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCachingClearAllCachesPost
     */
    ApiServicesAppCachingClearAllCachesPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Caching/ClearAllCaches';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppChatGetUserChatFriendsWithSettingsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/GetUserChatFriendsWithSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppChatGetUserChatFriendsWithSettingsGet
     */
    ApiServicesAppChatGetUserChatFriendsWithSettingsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/GetUserChatFriendsWithSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppChatGetUserChatMessagesGetURL(parameters: {
        'tenantId'?: number,
        'userId': number,
        'minMessageId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/GetUserChatMessages';
        if (parameters['tenantId'] !== undefined) {
            queryParameters['TenantId'] = parameters['tenantId'];
        }

        if (parameters['userId'] !== undefined) {
            queryParameters['UserId'] = parameters['userId'];
        }

        if (parameters['minMessageId'] !== undefined) {
            queryParameters['MinMessageId'] = parameters['minMessageId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppChatGetUserChatMessagesGet
     * @param {integer} tenantId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} userId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} minMessageId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppChatGetUserChatMessagesGet(parameters: {
        'tenantId'?: number,
        'userId': number,
        'minMessageId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/GetUserChatMessages';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['tenantId'] !== undefined) {
                queryParameters['TenantId'] = parameters['tenantId'];
            }

            if (parameters['userId'] !== undefined) {
                queryParameters['UserId'] = parameters['userId'];
            }

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['minMessageId'] !== undefined) {
                queryParameters['MinMessageId'] = parameters['minMessageId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppChatMarkAllUnreadMessagesOfUserAsReadPostURL(parameters: {
        'input'?: MarkAllUnreadMessagesOfUserAsReadInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppChatMarkAllUnreadMessagesOfUserAsReadPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppChatMarkAllUnreadMessagesOfUserAsReadPost(parameters: {
        'input'?: MarkAllUnreadMessagesOfUserAsReadInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetEditionsForComboboxGetURL(parameters: {
        'onlyFreeItems': boolean,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetEditionsForCombobox';
        if (parameters['onlyFreeItems'] !== undefined) {
            queryParameters['onlyFreeItems'] = parameters['onlyFreeItems'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetEditionsForComboboxGet
     * @param {boolean} onlyFreeItems - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppCommonLookupGetEditionsForComboboxGet(parameters: {
        'onlyFreeItems': boolean,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetEditionsForCombobox';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['onlyFreeItems'] !== undefined) {
                queryParameters['onlyFreeItems'] = parameters['onlyFreeItems'];
            }

            if (parameters['onlyFreeItems'] === undefined) {
                reject(new Error('Missing required  parameter: onlyFreeItems'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupFindUsersPostURL(parameters: {
        'input'?: FindUsersInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/FindUsers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupFindUsersPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppCommonLookupFindUsersPost(parameters: {
        'input'?: FindUsersInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/FindUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetDefaultEditionNameGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDefaultEditionName';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetDefaultEditionNameGet
     */
    ApiServicesAppCommonLookupGetDefaultEditionNameGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDefaultEditionName';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetDeviceTypesForComboboxGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetDeviceTypesForComboboxGet
     */
    ApiServicesAppCommonLookupGetDeviceTypesForComboboxGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDeviceTypesForCombobox';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetStationsForComboboxGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetStationsForCombobox';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetStationsForComboboxGet
     */
    ApiServicesAppCommonLookupGetStationsForComboboxGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetStationsForCombobox';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetVoltageLevelsForComboboxGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetVoltageLevelsForComboboxGet
     */
    ApiServicesAppCommonLookupGetVoltageLevelsForComboboxGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetVoltageLevelsForCombobox';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppCommonLookupGetDeviceStateForComboxGetURL(parameters: {
        'deviceTypeId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDeviceStateForCombox';
        if (parameters['deviceTypeId'] !== undefined) {
            queryParameters['DeviceTypeId'] = parameters['deviceTypeId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppCommonLookupGetDeviceStateForComboxGet
     * @param {integer} deviceTypeId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppCommonLookupGetDeviceStateForComboxGet(parameters: {
        'deviceTypeId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/CommonLookup/GetDeviceStateForCombox';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['deviceTypeId'] !== undefined) {
                queryParameters['DeviceTypeId'] = parameters['deviceTypeId'];
            }

            if (parameters['deviceTypeId'] === undefined) {
                reject(new Error('Missing required  parameter: deviceTypeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsSendAndGetDatePostURL(parameters: {
        'date'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDate';
        if (parameters['date'] !== undefined) {
            queryParameters['date'] = parameters['date'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsSendAndGetDatePost
     * @param {string} date - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsSendAndGetDatePost(parameters: {
        'date'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['date'] !== undefined) {
                queryParameters['date'] = parameters['date'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsSendAndGetDateTimePostURL(parameters: {
        'date'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDateTime';
        if (parameters['date'] !== undefined) {
            queryParameters['date'] = parameters['date'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsSendAndGetDateTimePost
     * @param {string} date - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsSendAndGetDateTimePost(parameters: {
        'date'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDateTime';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['date'] !== undefined) {
                queryParameters['date'] = parameters['date'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsSendAndGetDateRangePostURL(parameters: {
        'startDate'?: string,
        'endDate'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDateRange';
        if (parameters['startDate'] !== undefined) {
            queryParameters['startDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['endDate'] = parameters['endDate'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsSendAndGetDateRangePost
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsSendAndGetDateRangePost(parameters: {
        'startDate'?: string,
        'endDate'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetDateRange';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['startDate'] !== undefined) {
                queryParameters['startDate'] = parameters['startDate'];
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['endDate'] = parameters['endDate'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsGetCountriesGetURL(parameters: {
        'searchTerm'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/GetCountries';
        if (parameters['searchTerm'] !== undefined) {
            queryParameters['searchTerm'] = parameters['searchTerm'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsGetCountriesGet
     * @param {string} searchTerm - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsGetCountriesGet(parameters: {
        'searchTerm'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/GetCountries';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['searchTerm'] !== undefined) {
                queryParameters['searchTerm'] = parameters['searchTerm'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsSendAndGetSelectedCountriesPostURL(parameters: {
        'selectedCountries'?: Array<NameValue[String]>
        | NameValue[String]

        ,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsSendAndGetSelectedCountriesPost
     * @param {} selectedCountries - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsSendAndGetSelectedCountriesPost(parameters: {
        'selectedCountries'?: Array<NameValue[String]>
        | NameValue[String]

        ,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetSelectedCountries';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['selectedCountries'] !== undefined) {
                body = parameters['selectedCountries'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDemoUiComponentsSendAndGetValuePostURL(parameters: {
        'input'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetValue';
        if (parameters['input'] !== undefined) {
            queryParameters['input'] = parameters['input'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDemoUiComponentsSendAndGetValuePost
     * @param {string} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDemoUiComponentsSendAndGetValuePost(parameters: {
        'input'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DemoUiComponents/SendAndGetValue';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['input'] !== undefined) {
                queryParameters['input'] = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceGetDevicesGetURL(parameters: {
        'name'?: string,
        'deviceAreaId': number,
        'skipCount': number,
        'maxResultCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/GetDevices';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['deviceAreaId'] !== undefined) {
            queryParameters['DeviceAreaId'] = parameters['deviceAreaId'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceGetDevicesGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} deviceAreaId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceGetDevicesGet(parameters: {
        'name'?: string,
        'deviceAreaId': number,
        'skipCount': number,
        'maxResultCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/GetDevices';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['deviceAreaId'] !== undefined) {
                queryParameters['DeviceAreaId'] = parameters['deviceAreaId'];
            }

            if (parameters['deviceAreaId'] === undefined) {
                reject(new Error('Missing required  parameter: deviceAreaId'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceGetDeviceForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/GetDeviceForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceGetDeviceForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceGetDeviceForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/GetDeviceForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceCreateOrUpdateDevicePostURL(parameters: {
        'input'?: CreateOrUpdateDeviceInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/CreateOrUpdateDevice';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceCreateOrUpdateDevicePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceCreateOrUpdateDevicePost(parameters: {
        'input'?: CreateOrUpdateDeviceInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/CreateOrUpdateDevice';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceDeleteDeviceDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/DeleteDevice';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceDeleteDeviceDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceDeleteDeviceDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/DeleteDevice';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceQueryDeviceStatesPostURL(parameters: {
        'input'?: QueryDevicesStateInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/QueryDeviceStates';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceQueryDeviceStatesPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceQueryDeviceStatesPost(parameters: {
        'input'?: QueryDevicesStateInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/QueryDeviceStates';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceUpdateDeviceStatePutURL(parameters: {
        'input'?: UpdateDeviceStateInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/UpdateDeviceState';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceUpdateDeviceStatePut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceUpdateDeviceStatePut(parameters: {
        'input'?: UpdateDeviceStateInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/UpdateDeviceState';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceCheckDeviceNameIsExistPostURL(parameters: {
        'input'?: CheckDeviceNameIsExistInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/CheckDeviceNameIsExist';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceCheckDeviceNameIsExistPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceCheckDeviceNameIsExistPost(parameters: {
        'input'?: CheckDeviceNameIsExistInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Device/CheckDeviceNameIsExist';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceAreaGetDeviceAreasGetURL(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/GetDeviceAreas';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceAreaGetDeviceAreasGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceAreaGetDeviceAreasGet(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/GetDeviceAreas';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceAreaGetDeviceAreaForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/GetDeviceAreaForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceAreaGetDeviceAreaForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceAreaGetDeviceAreaForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/GetDeviceAreaForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceAreaCreateOrUpdateDeviceAreaPostURL(parameters: {
        'input'?: CreateOrUpdateDeviceAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceAreaCreateOrUpdateDeviceAreaPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceAreaCreateOrUpdateDeviceAreaPost(parameters: {
        'input'?: CreateOrUpdateDeviceAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/CreateOrUpdateDeviceArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceAreaDeleteDeviceAreaDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/DeleteDeviceArea';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceAreaDeleteDeviceAreaDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceAreaDeleteDeviceAreaDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceArea/DeleteDeviceArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceLockCodeGetLockCodePropertiesGetURL(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodeProperties';
        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceLockCodeGetLockCodePropertiesGet
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceLockCodeGetLockCodePropertiesGet(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodeProperties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceLockCodeGetLockCodePropertySelectedGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceLockCodeGetLockCodePropertySelectedGet
     */
    ApiServicesAppDeviceLockCodeGetLockCodePropertySelectedGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodePropertySelected';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceLockCodeGetLockCodePropertyForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceLockCodeGetLockCodePropertyForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceLockCodeGetLockCodePropertyForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/GetLockCodePropertyForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceLockCodeCreateOrUpdateLockCodePropertyPostURL(parameters: {
        'input'?: CreateOrUpdateLockCodePropertyInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceLockCodeCreateOrUpdateLockCodePropertyPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceLockCodeCreateOrUpdateLockCodePropertyPost(parameters: {
        'input'?: CreateOrUpdateLockCodePropertyInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/CreateOrUpdateLockCodeProperty';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceLockCodeDeleteLockCodePropertyDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceLockCodeDeleteLockCodePropertyDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceLockCodeDeleteLockCodePropertyDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceLockCode/DeleteLockCodeProperty';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTermGetDeviceTermsGetURL(parameters: {
        'stationName': string,
        'pointName': string,
        'state': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/GetDeviceTerms';
        if (parameters['stationName'] !== undefined) {
            queryParameters['StationName'] = parameters['stationName'];
        }

        if (parameters['pointName'] !== undefined) {
            queryParameters['PointName'] = parameters['pointName'];
        }

        if (parameters['state'] !== undefined) {
            queryParameters['State'] = parameters['state'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTermGetDeviceTermsGet
     * @param {string} stationName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} pointName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} state - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTermGetDeviceTermsGet(parameters: {
        'stationName': string,
        'pointName': string,
        'state': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/GetDeviceTerms';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationName'] !== undefined) {
                queryParameters['StationName'] = parameters['stationName'];
            }

            if (parameters['stationName'] === undefined) {
                reject(new Error('Missing required  parameter: stationName'));
                return;
            }

            if (parameters['pointName'] !== undefined) {
                queryParameters['PointName'] = parameters['pointName'];
            }

            if (parameters['pointName'] === undefined) {
                reject(new Error('Missing required  parameter: pointName'));
                return;
            }

            if (parameters['state'] !== undefined) {
                queryParameters['State'] = parameters['state'];
            }

            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTermGetTermsGetURL(parameters: {
        'deviceType': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/GetTerms';
        if (parameters['deviceType'] !== undefined) {
            queryParameters['DeviceType'] = parameters['deviceType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTermGetTermsGet
     * @param {integer} deviceType - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTermGetTermsGet(parameters: {
        'deviceType': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/GetTerms';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['deviceType'] !== undefined) {
                queryParameters['DeviceType'] = parameters['deviceType'];
            }

            if (parameters['deviceType'] === undefined) {
                reject(new Error('Missing required  parameter: deviceType'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTermCreateOrUpdateDeviceOperationPostURL(parameters: {
        'input'?: CreateOrUpdateDeviceOperationInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTermCreateOrUpdateDeviceOperationPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTermCreateOrUpdateDeviceOperationPost(parameters: {
        'input'?: CreateOrUpdateDeviceOperationInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/CreateOrUpdateDeviceOperation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTermDeleteDeviceOperationDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/DeleteDeviceOperation';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTermDeleteDeviceOperationDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTermDeleteDeviceOperationDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceTerm/DeleteDeviceOperation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTypeGetDeviceTypesGetURL(parameters: {
        'name'?: string,
        'isEst'?: boolean,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/GetDeviceTypes';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['isEst'] !== undefined) {
            queryParameters['IsEst'] = parameters['isEst'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTypeGetDeviceTypesGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} isEst - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTypeGetDeviceTypesGet(parameters: {
        'name'?: string,
        'isEst'?: boolean,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/GetDeviceTypes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['isEst'] !== undefined) {
                queryParameters['IsEst'] = parameters['isEst'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTypeGetDeviceTypeForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/GetDeviceTypeForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTypeGetDeviceTypeForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTypeGetDeviceTypeForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/GetDeviceTypeForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTypeCreateOrUpdateDeviceTypePostURL(parameters: {
        'input'?: CreateOrUpdateDeviceTypeInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/CreateOrUpdateDeviceType';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTypeCreateOrUpdateDeviceTypePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTypeCreateOrUpdateDeviceTypePost(parameters: {
        'input'?: CreateOrUpdateDeviceTypeInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/CreateOrUpdateDeviceType';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppDeviceTypeDeleteDeviceTypeDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/DeleteDeviceType';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppDeviceTypeDeleteDeviceTypeDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppDeviceTypeDeleteDeviceTypeDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/DeviceType/DeleteDeviceType';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEditionGetEditionsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditions';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEditionGetEditionsGet
     */
    ApiServicesAppEditionGetEditionsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEditionGetEditionForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditionForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEditionGetEditionForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEditionGetEditionForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditionForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEditionCreateOrUpdateEditionPostURL(parameters: {
        'input'?: CreateOrUpdateEditionDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/CreateOrUpdateEdition';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEditionCreateOrUpdateEditionPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEditionCreateOrUpdateEditionPost(parameters: {
        'input'?: CreateOrUpdateEditionDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/CreateOrUpdateEdition';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEditionDeleteEditionDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/DeleteEdition';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEditionDeleteEditionDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEditionDeleteEditionDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/DeleteEdition';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEditionGetEditionComboboxItemsGetURL(parameters: {
        'selectedEditionId'?: number,
        'addAllItem': boolean,
        'onlyFreeItems': boolean,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditionComboboxItems';
        if (parameters['selectedEditionId'] !== undefined) {
            queryParameters['selectedEditionId'] = parameters['selectedEditionId'];
        }

        if (parameters['addAllItem'] !== undefined) {
            queryParameters['addAllItem'] = parameters['addAllItem'];
        }

        if (parameters['onlyFreeItems'] !== undefined) {
            queryParameters['onlyFreeItems'] = parameters['onlyFreeItems'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEditionGetEditionComboboxItemsGet
     * @param {integer} selectedEditionId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} addAllItem - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} onlyFreeItems - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEditionGetEditionComboboxItemsGet(parameters: {
        'selectedEditionId'?: number,
        'addAllItem': boolean,
        'onlyFreeItems': boolean,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Edition/GetEditionComboboxItems';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['selectedEditionId'] !== undefined) {
                queryParameters['selectedEditionId'] = parameters['selectedEditionId'];
            }

            if (parameters['addAllItem'] !== undefined) {
                queryParameters['addAllItem'] = parameters['addAllItem'];
            }

            if (parameters['addAllItem'] === undefined) {
                reject(new Error('Missing required  parameter: addAllItem'));
                return;
            }

            if (parameters['onlyFreeItems'] !== undefined) {
                queryParameters['onlyFreeItems'] = parameters['onlyFreeItems'];
            }

            if (parameters['onlyFreeItems'] === undefined) {
                reject(new Error('Missing required  parameter: onlyFreeItems'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetEquipmentsGetURL(parameters: {
        'productId'?: number,
        'name'?: string,
        'terminalId'?: number,
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipments';
        if (parameters['productId'] !== undefined) {
            queryParameters['ProductId'] = parameters['productId'];
        }

        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['terminalId'] !== undefined) {
            queryParameters['TerminalId'] = parameters['terminalId'];
        }

        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetEquipmentsGet
     * @param {integer} productId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} terminalId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetEquipmentsGet(parameters: {
        'productId'?: number,
        'name'?: string,
        'terminalId'?: number,
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipments';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['productId'] !== undefined) {
                queryParameters['ProductId'] = parameters['productId'];
            }

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['terminalId'] !== undefined) {
                queryParameters['TerminalId'] = parameters['terminalId'];
            }

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetEquipmentForEditGetURL(parameters: {
        'productId': number,
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentForEdit';
        if (parameters['productId'] !== undefined) {
            queryParameters['ProductId'] = parameters['productId'];
        }

        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetEquipmentForEditGet
     * @param {integer} productId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetEquipmentForEditGet(parameters: {
        'productId': number,
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['productId'] !== undefined) {
                queryParameters['ProductId'] = parameters['productId'];
            }

            if (parameters['productId'] === undefined) {
                reject(new Error('Missing required  parameter: productId'));
                return;
            }

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentCreateOrUpdateEquipmentPostURL(parameters: {
        'input'?: CreateOrUpdateEquipmentInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/CreateOrUpdateEquipment';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentCreateOrUpdateEquipmentPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentCreateOrUpdateEquipmentPost(parameters: {
        'input'?: CreateOrUpdateEquipmentInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/CreateOrUpdateEquipment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentDeleteEquipmentDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/DeleteEquipment';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentDeleteEquipmentDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentDeleteEquipmentDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/DeleteEquipment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetEquipmentNotBindedGetURL(parameters: {
        'stationId'?: number,
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentNotBinded';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetEquipmentNotBindedGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetEquipmentNotBindedGet(parameters: {
        'stationId'?: number,
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentNotBinded';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetAllStationBindEquipmentsGetURL(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetAllStationBindEquipments';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetAllStationBindEquipmentsGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetAllStationBindEquipmentsGet(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetAllStationBindEquipments';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetStationBindEquipmentsGetURL(parameters: {
        'stationId'?: number,
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetStationBindEquipments';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetStationBindEquipmentsGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetStationBindEquipmentsGet(parameters: {
        'stationId'?: number,
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetStationBindEquipments';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentGetEquipmentWithPropertyGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentWithProperty';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentGetEquipmentWithPropertyGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentGetEquipmentWithPropertyGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/GetEquipmentWithProperty';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppEquipmentControlEquipmentPostURL(parameters: {
        'input'?: ControlEquipmentInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/ControlEquipment';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppEquipmentControlEquipmentPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppEquipmentControlEquipmentPost(parameters: {
        'input'?: ControlEquipmentInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Equipment/ControlEquipment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    FileDownloadByIdByNameGetURL(parameters: {
        'id': string,
        'name': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/File/download/{id}/{name}';

        path = path.replace('{id}', `${parameters['id']}`);

        path = path.replace('{name}', `${parameters['name']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#FileDownloadByIdByNameGet
     * @param {string} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    FileDownloadByIdByNameGet(parameters: {
        'id': string,
        'name': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/File/download/{id}/{name}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            path = path.replace('{name}', `${parameters['name']}`);

            if (parameters['name'] === undefined) {
                reject(new Error('Missing required  parameter: name'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    FileByIdByNameGetURL(parameters: {
        'id': string,
        'name': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/File/{id}/{name}';

        path = path.replace('{id}', `${parameters['id']}`);

        path = path.replace('{name}', `${parameters['name']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#FileByIdByNameGet
     * @param {string} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    FileByIdByNameGet(parameters: {
        'id': string,
        'name': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/File/{id}/{name}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            path = path.replace('{name}', `${parameters['name']}`);

            if (parameters['name'] === undefined) {
                reject(new Error('Missing required  parameter: name'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppFriendshipCreateFriendshipRequestPostURL(parameters: {
        'input'?: CreateFriendshipRequestInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/CreateFriendshipRequest';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppFriendshipCreateFriendshipRequestPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppFriendshipCreateFriendshipRequestPost(parameters: {
        'input'?: CreateFriendshipRequestInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/CreateFriendshipRequest';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppFriendshipCreateFriendshipRequestByUserNamePostURL(parameters: {
        'input'?: CreateFriendshipRequestByUserNameInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/CreateFriendshipRequestByUserName';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppFriendshipCreateFriendshipRequestByUserNamePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppFriendshipCreateFriendshipRequestByUserNamePost(parameters: {
        'input'?: CreateFriendshipRequestByUserNameInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/CreateFriendshipRequestByUserName';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppFriendshipBlockUserPostURL(parameters: {
        'input'?: BlockUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/BlockUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppFriendshipBlockUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppFriendshipBlockUserPost(parameters: {
        'input'?: BlockUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/BlockUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppFriendshipUnblockUserPostURL(parameters: {
        'input'?: UnblockUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/UnblockUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppFriendshipUnblockUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppFriendshipUnblockUserPost(parameters: {
        'input'?: UnblockUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/UnblockUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppFriendshipAcceptFriendshipRequestPostURL(parameters: {
        'input'?: AcceptFriendshipRequestInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/AcceptFriendshipRequest';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppFriendshipAcceptFriendshipRequestPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppFriendshipAcceptFriendshipRequestPost(parameters: {
        'input'?: AcceptFriendshipRequestInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Friendship/AcceptFriendshipRequest';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppGraphGetGraphsGetURL(parameters: {
        'name'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/GetGraphs';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppGraphGetGraphsGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppGraphGetGraphsGet(parameters: {
        'name'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/GetGraphs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppGraphGetGraphForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/GetGraphForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppGraphGetGraphForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppGraphGetGraphForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/GetGraphForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppGraphCreateOrUpdateGraphPostURL(parameters: {
        'input'?: CreateOrUpdateGraphInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/CreateOrUpdateGraph';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppGraphCreateOrUpdateGraphPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppGraphCreateOrUpdateGraphPost(parameters: {
        'input'?: CreateOrUpdateGraphInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/CreateOrUpdateGraph';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppGraphDeleteGraphDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/DeleteGraph';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppGraphDeleteGraphDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppGraphDeleteGraphDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/DeleteGraph';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppGraphUploadGraphPostURL(parameters: {
        'file'?: {},
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/UploadGraph';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppGraphUploadGraphPost
     * @param {file} file - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppGraphUploadGraphPost(parameters: {
        'file'?: {},
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Graph/UploadGraph';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'multipart/form-data';

            if (parameters['file'] !== undefined) {
                form['file'] = parameters['file'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostDashboardGetDashboardStatisticsDataGetURL(parameters: {
        'incomeStatisticsDateInterval': "Daily" | "Weekly" | "Monthly",
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetDashboardStatisticsData';
        if (parameters['incomeStatisticsDateInterval'] !== undefined) {
            queryParameters['IncomeStatisticsDateInterval'] = parameters['incomeStatisticsDateInterval'];
        }

        if (parameters['startDate'] !== undefined) {
            queryParameters['StartDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['EndDate'] = parameters['endDate'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostDashboardGetDashboardStatisticsDataGet
     * @param {string} incomeStatisticsDateInterval - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppHostDashboardGetDashboardStatisticsDataGet(parameters: {
        'incomeStatisticsDateInterval': "Daily" | "Weekly" | "Monthly",
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetDashboardStatisticsData';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['incomeStatisticsDateInterval'] !== undefined) {
                queryParameters['IncomeStatisticsDateInterval'] = parameters['incomeStatisticsDateInterval'];
            }

            if (parameters['incomeStatisticsDateInterval'] === undefined) {
                reject(new Error('Missing required  parameter: incomeStatisticsDateInterval'));
                return;
            }

            if (parameters['startDate'] !== undefined) {
                queryParameters['StartDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['EndDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostDashboardGetIncomeStatisticsGetURL(parameters: {
        'incomeStatisticsDateInterval': "Daily" | "Weekly" | "Monthly",
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetIncomeStatistics';
        if (parameters['incomeStatisticsDateInterval'] !== undefined) {
            queryParameters['IncomeStatisticsDateInterval'] = parameters['incomeStatisticsDateInterval'];
        }

        if (parameters['startDate'] !== undefined) {
            queryParameters['StartDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['EndDate'] = parameters['endDate'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostDashboardGetIncomeStatisticsGet
     * @param {string} incomeStatisticsDateInterval - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppHostDashboardGetIncomeStatisticsGet(parameters: {
        'incomeStatisticsDateInterval': "Daily" | "Weekly" | "Monthly",
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetIncomeStatistics';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['incomeStatisticsDateInterval'] !== undefined) {
                queryParameters['IncomeStatisticsDateInterval'] = parameters['incomeStatisticsDateInterval'];
            }

            if (parameters['incomeStatisticsDateInterval'] === undefined) {
                reject(new Error('Missing required  parameter: incomeStatisticsDateInterval'));
                return;
            }

            if (parameters['startDate'] !== undefined) {
                queryParameters['StartDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['EndDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostDashboardGetEditionTenantStatisticsGetURL(parameters: {
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetEditionTenantStatistics';
        if (parameters['startDate'] !== undefined) {
            queryParameters['StartDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['EndDate'] = parameters['endDate'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostDashboardGetEditionTenantStatisticsGet
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppHostDashboardGetEditionTenantStatisticsGet(parameters: {
        'startDate': string,
        'endDate': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostDashboard/GetEditionTenantStatistics';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['startDate'] !== undefined) {
                queryParameters['StartDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['EndDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostSettingsGetAllSettingsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/GetAllSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostSettingsGetAllSettingsGet
     */
    ApiServicesAppHostSettingsGetAllSettingsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/GetAllSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostSettingsUpdateAllSettingsPutURL(parameters: {
        'input'?: HostSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/UpdateAllSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostSettingsUpdateAllSettingsPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppHostSettingsUpdateAllSettingsPut(parameters: {
        'input'?: HostSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/UpdateAllSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppHostSettingsSendTestEmailPostURL(parameters: {
        'input'?: SendTestEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/SendTestEmail';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppHostSettingsSendTestEmailPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppHostSettingsSendTestEmailPost(parameters: {
        'input'?: SendTestEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/HostSettings/SendTestEmail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppInstallSetupPostURL(parameters: {
        'input'?: InstallDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/Setup';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppInstallSetupPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppInstallSetupPost(parameters: {
        'input'?: InstallDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/Setup';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppInstallGetAppSettingsJsonGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/GetAppSettingsJson';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppInstallGetAppSettingsJsonGet
     */
    ApiServicesAppInstallGetAppSettingsJsonGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/GetAppSettingsJson';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppInstallCheckDatabasePostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/CheckDatabase';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppInstallCheckDatabasePost
     */
    ApiServicesAppInstallCheckDatabasePost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Install/CheckDatabase';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppIntelligentLockServiceAddIntelligentLocksPostURL(parameters: {
        'roleId': number,
        'inputs'?: Array<IntelligentLockInput>
        | IntelligentLockInput

        ,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/AddIntelligentLocks';
        if (parameters['roleId'] !== undefined) {
            queryParameters['roleId'] = parameters['roleId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppIntelligentLockServiceAddIntelligentLocksPost
     * @param {integer} roleId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {} inputs - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppIntelligentLockServiceAddIntelligentLocksPost(parameters: {
        'roleId': number,
        'inputs'?: Array<IntelligentLockInput>
        | IntelligentLockInput

        ,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/AddIntelligentLocks';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['roleId'] !== undefined) {
                queryParameters['roleId'] = parameters['roleId'];
            }

            if (parameters['roleId'] === undefined) {
                reject(new Error('Missing required  parameter: roleId'));
                return;
            }

            if (parameters['inputs'] !== undefined) {
                body = parameters['inputs'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppIntelligentLockServiceRemoveIntelligentLocksDeleteURL(parameters: {
        'roleId': number,
        'ids'?: Array<number>
        | number

        ,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks';
        if (parameters['roleId'] !== undefined) {
            queryParameters['roleId'] = parameters['roleId'];
        }

        if (parameters['ids'] !== undefined) {
            queryParameters['ids'] = parameters['ids'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppIntelligentLockServiceRemoveIntelligentLocksDelete
     * @param {integer} roleId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {array} ids - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppIntelligentLockServiceRemoveIntelligentLocksDelete(parameters: {
        'roleId': number,
        'ids'?: Array<number>
        | number

        ,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/RemoveIntelligentLocks';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['roleId'] !== undefined) {
                queryParameters['roleId'] = parameters['roleId'];
            }

            if (parameters['roleId'] === undefined) {
                reject(new Error('Missing required  parameter: roleId'));
                return;
            }

            if (parameters['ids'] !== undefined) {
                queryParameters['ids'] = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppIntelligentLockServiceGetIntelligentLockListGetURL(parameters: {
        'roleId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/GetIntelligentLockList';
        if (parameters['roleId'] !== undefined) {
            queryParameters['roleId'] = parameters['roleId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppIntelligentLockServiceGetIntelligentLockListGet
     * @param {integer} roleId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppIntelligentLockServiceGetIntelligentLockListGet(parameters: {
        'roleId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/GetIntelligentLockList';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['roleId'] !== undefined) {
                queryParameters['roleId'] = parameters['roleId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppIntelligentLockServiceGetIntelligentLocksInDeviceAreaTreeGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppIntelligentLockServiceGetIntelligentLocksInDeviceAreaTreeGet
     */
    ApiServicesAppIntelligentLockServiceGetIntelligentLocksInDeviceAreaTreeGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/IntelligentLockService/GetIntelligentLocksInDeviceAreaTree';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppInvoiceGetInvoiceInfoGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Invoice/GetInvoiceInfo';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppInvoiceGetInvoiceInfoGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppInvoiceGetInvoiceInfoGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Invoice/GetInvoiceInfo';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppInvoiceCreateInvoicePostURL(parameters: {
        'input'?: CreateInvoiceDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Invoice/CreateInvoice';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppInvoiceCreateInvoicePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppInvoiceCreateInvoicePost(parameters: {
        'input'?: CreateInvoiceDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Invoice/CreateInvoice';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetKeyCabinetApplyPostURL(parameters: {
        'input'?: KeyCabinetApplyInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetApply';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetKeyCabinetApplyPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetKeyCabinetApplyPost(parameters: {
        'input'?: KeyCabinetApplyInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetApply';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetKeyCabinetApprovePostURL(parameters: {
        'input'?: KeyCabinetApproveInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetApprove';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetKeyCabinetApprovePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetKeyCabinetApprovePost(parameters: {
        'input'?: KeyCabinetApproveInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetApprove';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetKeyCabinetUnlockPostURL(parameters: {
        'input'?: KeyCabinetUnlockInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetUnlock';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetKeyCabinetUnlockPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetKeyCabinetUnlockPost(parameters: {
        'input'?: KeyCabinetUnlockInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetUnlock';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetKeyCabinetOpenDoorPostURL(parameters: {
        'input'?: KeyCabinetOpenDoorInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetKeyCabinetOpenDoorPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetKeyCabinetOpenDoorPost(parameters: {
        'input'?: KeyCabinetOpenDoorInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/KeyCabinetOpenDoor';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetApplyReasonEnumsGetURL(parameters: {
        'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover",
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplyReasonEnums';
        if (parameters['approverType'] !== undefined) {
            queryParameters['approverType'] = parameters['approverType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetApplyReasonEnumsGet
     * @param {string} approverType - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetGetApplyReasonEnumsGet(parameters: {
        'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover",
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplyReasonEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['approverType'] !== undefined) {
                queryParameters['approverType'] = parameters['approverType'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetApplyReasonListGetURL(parameters: {
        'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover",
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplyReasonList';
        if (parameters['approverType'] !== undefined) {
            queryParameters['approverType'] = parameters['approverType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetApplyReasonListGet
     * @param {string} approverType - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetGetApplyReasonListGet(parameters: {
        'approverType'?: "BaseApprover" | "OpenLockApprover" | "UnLockApprover",
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplyReasonList';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['approverType'] !== undefined) {
                queryParameters['approverType'] = parameters['approverType'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetBuckleTypeEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetBuckleTypeEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetBuckleTypeEnumsGet
     */
    ApiServicesAppKeyCabinetGetBuckleTypeEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetBuckleTypeEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetLockModeEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetLockModeEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetLockModeEnumsGet
     */
    ApiServicesAppKeyCabinetGetLockModeEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetLockModeEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetApproverTypeEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApproverTypeEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetApproverTypeEnumsGet
     */
    ApiServicesAppKeyCabinetGetApproverTypeEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApproverTypeEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetTaskGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetTask';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetTaskGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetGetTaskGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetTask';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetEndTaskPostURL(parameters: {
        'input'?: KeyCabinetEndTaskInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/EndTask';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetEndTaskPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetEndTaskPost(parameters: {
        'input'?: KeyCabinetEndTaskInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/EndTask';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetApplicantsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplicants';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetApplicantsGet
     */
    ApiServicesAppKeyCabinetGetApplicantsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApplicants';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetApproversGetURL(parameters: {
        'roles'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApprovers';
        if (parameters['roles'] !== undefined) {
            queryParameters['roles'] = parameters['roles'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetApproversGet
     * @param {string} roles - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetGetApproversGet(parameters: {
        'roles'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetApprovers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['roles'] !== undefined) {
                queryParameters['roles'] = parameters['roles'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetIsTaskExpiredPostURL(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/IsTaskExpired';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetIsTaskExpiredPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetIsTaskExpiredPost(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/IsTaskExpired';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetGetKeyCarbinetLogsGetURL(parameters: {
        'stationId': number,
        'startDate': string,
        'endDate': string,
        'applicantId'?: number,
        'approverId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs';
        if (parameters['stationId'] !== undefined) {
            queryParameters['stationId'] = parameters['stationId'];
        }

        if (parameters['startDate'] !== undefined) {
            queryParameters['startDate'] = parameters['startDate'];
        }

        if (parameters['endDate'] !== undefined) {
            queryParameters['endDate'] = parameters['endDate'];
        }

        if (parameters['applicantId'] !== undefined) {
            queryParameters['applicantId'] = parameters['applicantId'];
        }

        if (parameters['approverId'] !== undefined) {
            queryParameters['approverId'] = parameters['approverId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetGetKeyCarbinetLogsGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} startDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endDate - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} applicantId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} approverId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetGetKeyCarbinetLogsGet(parameters: {
        'stationId': number,
        'startDate': string,
        'endDate': string,
        'applicantId'?: number,
        'approverId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/GetKeyCarbinetLogs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['stationId'] = parameters['stationId'];
            }

            if (parameters['stationId'] === undefined) {
                reject(new Error('Missing required  parameter: stationId'));
                return;
            }

            if (parameters['startDate'] !== undefined) {
                queryParameters['startDate'] = parameters['startDate'];
            }

            if (parameters['startDate'] === undefined) {
                reject(new Error('Missing required  parameter: startDate'));
                return;
            }

            if (parameters['endDate'] !== undefined) {
                queryParameters['endDate'] = parameters['endDate'];
            }

            if (parameters['endDate'] === undefined) {
                reject(new Error('Missing required  parameter: endDate'));
                return;
            }

            if (parameters['applicantId'] !== undefined) {
                queryParameters['applicantId'] = parameters['applicantId'];
            }

            if (parameters['approverId'] !== undefined) {
                queryParameters['approverId'] = parameters['approverId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppKeyCabinetUpdateKeyCarbinetLogPutURL(parameters: {
        'input'?: KeyCarbinetLogInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppKeyCabinetUpdateKeyCarbinetLogPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppKeyCabinetUpdateKeyCarbinetLogPut(parameters: {
        'input'?: KeyCarbinetLogInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/KeyCabinet/UpdateKeyCarbinetLog';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageGetLanguagesGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguages';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageGetLanguagesGet
     */
    ApiServicesAppLanguageGetLanguagesGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguages';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageGetLanguageForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguageForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageGetLanguageForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageGetLanguageForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguageForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageCreateOrUpdateLanguagePostURL(parameters: {
        'input'?: CreateOrUpdateLanguageInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/CreateOrUpdateLanguage';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageCreateOrUpdateLanguagePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageCreateOrUpdateLanguagePost(parameters: {
        'input'?: CreateOrUpdateLanguageInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/CreateOrUpdateLanguage';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageDeleteLanguageDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/DeleteLanguage';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageDeleteLanguageDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageDeleteLanguageDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/DeleteLanguage';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageSetDefaultLanguagePostURL(parameters: {
        'input'?: SetDefaultLanguageInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/SetDefaultLanguage';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageSetDefaultLanguagePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageSetDefaultLanguagePost(parameters: {
        'input'?: SetDefaultLanguageInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/SetDefaultLanguage';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageGetLanguageTextsGetURL(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        'sorting'?: string,
        'sourceName': string,
        'baseLanguageName'?: string,
        'targetLanguageName': string,
        'targetValueFilter'?: string,
        'filterText'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguageTexts';
        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['sourceName'] !== undefined) {
            queryParameters['SourceName'] = parameters['sourceName'];
        }

        if (parameters['baseLanguageName'] !== undefined) {
            queryParameters['BaseLanguageName'] = parameters['baseLanguageName'];
        }

        if (parameters['targetLanguageName'] !== undefined) {
            queryParameters['TargetLanguageName'] = parameters['targetLanguageName'];
        }

        if (parameters['targetValueFilter'] !== undefined) {
            queryParameters['TargetValueFilter'] = parameters['targetValueFilter'];
        }

        if (parameters['filterText'] !== undefined) {
            queryParameters['FilterText'] = parameters['filterText'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageGetLanguageTextsGet
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sourceName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} baseLanguageName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} targetLanguageName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} targetValueFilter - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} filterText - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageGetLanguageTextsGet(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        'sorting'?: string,
        'sourceName': string,
        'baseLanguageName'?: string,
        'targetLanguageName': string,
        'targetValueFilter'?: string,
        'filterText'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/GetLanguageTexts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['sourceName'] !== undefined) {
                queryParameters['SourceName'] = parameters['sourceName'];
            }

            if (parameters['sourceName'] === undefined) {
                reject(new Error('Missing required  parameter: sourceName'));
                return;
            }

            if (parameters['baseLanguageName'] !== undefined) {
                queryParameters['BaseLanguageName'] = parameters['baseLanguageName'];
            }

            if (parameters['targetLanguageName'] !== undefined) {
                queryParameters['TargetLanguageName'] = parameters['targetLanguageName'];
            }

            if (parameters['targetLanguageName'] === undefined) {
                reject(new Error('Missing required  parameter: targetLanguageName'));
                return;
            }

            if (parameters['targetValueFilter'] !== undefined) {
                queryParameters['TargetValueFilter'] = parameters['targetValueFilter'];
            }

            if (parameters['filterText'] !== undefined) {
                queryParameters['FilterText'] = parameters['filterText'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppLanguageUpdateLanguageTextPutURL(parameters: {
        'input'?: UpdateLanguageTextInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/UpdateLanguageText';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppLanguageUpdateLanguageTextPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppLanguageUpdateLanguageTextPut(parameters: {
        'input'?: UpdateLanguageTextInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Language/UpdateLanguageText';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppNotificationGetUserNotificationsGetURL(parameters: {
        'state'?: "Unread" | "Read",
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/GetUserNotifications';
        if (parameters['state'] !== undefined) {
            queryParameters['State'] = parameters['state'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppNotificationGetUserNotificationsGet
     * @param {string} state - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppNotificationGetUserNotificationsGet(parameters: {
        'state'?: "Unread" | "Read",
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/GetUserNotifications';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['state'] !== undefined) {
                queryParameters['State'] = parameters['state'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppNotificationSetAllNotificationsAsReadPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/SetAllNotificationsAsRead';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppNotificationSetAllNotificationsAsReadPost
     */
    ApiServicesAppNotificationSetAllNotificationsAsReadPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/SetAllNotificationsAsRead';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppNotificationSetNotificationAsReadPostURL(parameters: {
        'input'?: EntityDto[Guid],
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/SetNotificationAsRead';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppNotificationSetNotificationAsReadPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppNotificationSetNotificationAsReadPost(parameters: {
        'input'?: EntityDto[Guid],
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/SetNotificationAsRead';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppNotificationGetNotificationSettingsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/GetNotificationSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppNotificationGetNotificationSettingsGet
     */
    ApiServicesAppNotificationGetNotificationSettingsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/GetNotificationSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppNotificationUpdateNotificationSettingsPutURL(parameters: {
        'input'?: UpdateNotificationSettingsInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/UpdateNotificationSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppNotificationUpdateNotificationSettingsPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppNotificationUpdateNotificationSettingsPut(parameters: {
        'input'?: UpdateNotificationSettingsInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Notification/UpdateNotificationSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOperationRecordGetOperationRecordGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OperationRecord/GetOperationRecord';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOperationRecordGetOperationRecordGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOperationRecordGetOperationRecordGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OperationRecord/GetOperationRecord';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOperationRecordGetOperationRecordsGetURL(parameters: {
        'applicantId'?: number,
        'approverId'?: number,
        'startTime'?: string,
        'endTime'?: string,
        'productTypes'?: Array<string>
        | string

        ,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OperationRecord/GetOperationRecords';
        if (parameters['applicantId'] !== undefined) {
            queryParameters['ApplicantId'] = parameters['applicantId'];
        }

        if (parameters['approverId'] !== undefined) {
            queryParameters['ApproverId'] = parameters['approverId'];
        }

        if (parameters['startTime'] !== undefined) {
            queryParameters['StartTime'] = parameters['startTime'];
        }

        if (parameters['endTime'] !== undefined) {
            queryParameters['EndTime'] = parameters['endTime'];
        }

        if (parameters['productTypes'] !== undefined) {
            queryParameters['ProductTypes'] = parameters['productTypes'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOperationRecordGetOperationRecordsGet
     * @param {integer} applicantId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} approverId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} startTime - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} endTime - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {array} productTypes - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOperationRecordGetOperationRecordsGet(parameters: {
        'applicantId'?: number,
        'approverId'?: number,
        'startTime'?: string,
        'endTime'?: string,
        'productTypes'?: Array<string>
        | string

        ,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OperationRecord/GetOperationRecords';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['applicantId'] !== undefined) {
                queryParameters['ApplicantId'] = parameters['applicantId'];
            }

            if (parameters['approverId'] !== undefined) {
                queryParameters['ApproverId'] = parameters['approverId'];
            }

            if (parameters['startTime'] !== undefined) {
                queryParameters['StartTime'] = parameters['startTime'];
            }

            if (parameters['endTime'] !== undefined) {
                queryParameters['EndTime'] = parameters['endTime'];
            }

            if (parameters['productTypes'] !== undefined) {
                queryParameters['ProductTypes'] = parameters['productTypes'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitGetOrganizationUnitsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/GetOrganizationUnits';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitGetOrganizationUnitsGet
     */
    ApiServicesAppOrganizationUnitGetOrganizationUnitsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/GetOrganizationUnits';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitGetOrganizationUnitUsersGetURL(parameters: {
        'id': number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitGetOrganizationUnitUsersGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitGetOrganizationUnitUsersGet(parameters: {
        'id': number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/GetOrganizationUnitUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitCreateOrganizationUnitPostURL(parameters: {
        'input'?: CreateOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/CreateOrganizationUnit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitCreateOrganizationUnitPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitCreateOrganizationUnitPost(parameters: {
        'input'?: CreateOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/CreateOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitUpdateOrganizationUnitPutURL(parameters: {
        'input'?: UpdateOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitUpdateOrganizationUnitPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitUpdateOrganizationUnitPut(parameters: {
        'input'?: UpdateOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/UpdateOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitMoveOrganizationUnitPostURL(parameters: {
        'input'?: MoveOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/MoveOrganizationUnit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitMoveOrganizationUnitPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitMoveOrganizationUnitPost(parameters: {
        'input'?: MoveOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/MoveOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitDeleteOrganizationUnitDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitDeleteOrganizationUnitDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitDeleteOrganizationUnitDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/DeleteOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitRemoveUserFromOrganizationUnitDeleteURL(parameters: {
        'userId': number,
        'organizationUnitId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit';
        if (parameters['userId'] !== undefined) {
            queryParameters['UserId'] = parameters['userId'];
        }

        if (parameters['organizationUnitId'] !== undefined) {
            queryParameters['OrganizationUnitId'] = parameters['organizationUnitId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitRemoveUserFromOrganizationUnitDelete
     * @param {integer} userId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} organizationUnitId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitRemoveUserFromOrganizationUnitDelete(parameters: {
        'userId': number,
        'organizationUnitId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['userId'] !== undefined) {
                queryParameters['UserId'] = parameters['userId'];
            }

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['organizationUnitId'] !== undefined) {
                queryParameters['OrganizationUnitId'] = parameters['organizationUnitId'];
            }

            if (parameters['organizationUnitId'] === undefined) {
                reject(new Error('Missing required  parameter: organizationUnitId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitAddUsersToOrganizationUnitPostURL(parameters: {
        'input'?: UsersToOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitAddUsersToOrganizationUnitPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitAddUsersToOrganizationUnitPost(parameters: {
        'input'?: UsersToOrganizationUnitInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppOrganizationUnitFindUsersPostURL(parameters: {
        'input'?: FindOrganizationUnitUsersInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/FindUsers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppOrganizationUnitFindUsersPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppOrganizationUnitFindUsersPost(parameters: {
        'input'?: FindOrganizationUnitUsersInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/OrganizationUnit/FindUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPaymentGetPaymentInfoGetURL(parameters: {
        'upgradeEditionId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/GetPaymentInfo';
        if (parameters['upgradeEditionId'] !== undefined) {
            queryParameters['UpgradeEditionId'] = parameters['upgradeEditionId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPaymentGetPaymentInfoGet
     * @param {integer} upgradeEditionId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppPaymentGetPaymentInfoGet(parameters: {
        'upgradeEditionId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/GetPaymentInfo';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['upgradeEditionId'] !== undefined) {
                queryParameters['UpgradeEditionId'] = parameters['upgradeEditionId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPaymentCreatePaymentPostURL(parameters: {
        'input'?: CreatePaymentDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/CreatePayment';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPaymentCreatePaymentPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppPaymentCreatePaymentPost(parameters: {
        'input'?: CreatePaymentDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/CreatePayment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPaymentExecutePaymentPostURL(parameters: {
        'input'?: ExecutePaymentDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/ExecutePayment';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPaymentExecutePaymentPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppPaymentExecutePaymentPost(parameters: {
        'input'?: ExecutePaymentDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/ExecutePayment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPaymentGetPaymentHistoryGetURL(parameters: {
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/GetPaymentHistory';
        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPaymentGetPaymentHistoryGet
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppPaymentGetPaymentHistoryGet(parameters: {
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Payment/GetPaymentHistory';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPendingGetPendingListGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Pending/GetPendingList';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPendingGetPendingListGet
     */
    ApiServicesAppPendingGetPendingListGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Pending/GetPendingList';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppPermissionGetAllPermissionsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Permission/GetAllPermissions';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppPermissionGetAllPermissionsGet
     */
    ApiServicesAppPermissionGetAllPermissionsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Permission/GetAllPermissions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductGetProductsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/GetProducts';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductGetProductsGet
     */
    ApiServicesAppProductGetProductsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/GetProducts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductGetProductForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/GetProductForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductGetProductForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductGetProductForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/GetProductForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductCreateOrUpdateProductPostURL(parameters: {
        'input'?: CreateOrUpdateProductInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/CreateOrUpdateProduct';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductCreateOrUpdateProductPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductCreateOrUpdateProductPost(parameters: {
        'input'?: CreateOrUpdateProductInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/CreateOrUpdateProduct';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductDeleteProductDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/DeleteProduct';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductDeleteProductDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductDeleteProductDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Product/DeleteProduct';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductPropertyGetProductPropertiesGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/GetProductProperties';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductPropertyGetProductPropertiesGet
     */
    ApiServicesAppProductPropertyGetProductPropertiesGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/GetProductProperties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductPropertyGetProductPropertyForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/GetProductPropertyForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductPropertyGetProductPropertyForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductPropertyGetProductPropertyForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/GetProductPropertyForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductPropertyCreateOrUpdateProductPropertyPostURL(parameters: {
        'input'?: CreateOrUpdateProductPropertyInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductPropertyCreateOrUpdateProductPropertyPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductPropertyCreateOrUpdateProductPropertyPost(parameters: {
        'input'?: CreateOrUpdateProductPropertyInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/CreateOrUpdateProductProperty';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProductPropertyDeleteProductPropertyDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/DeleteProductProperty';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProductPropertyDeleteProductPropertyDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProductPropertyDeleteProductPropertyDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/ProductProperty/DeleteProductProperty';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileGetCurrentUserProfileForEditGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetCurrentUserProfileForEdit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileGetCurrentUserProfileForEditGet
     */
    ApiServicesAppProfileGetCurrentUserProfileForEditGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetCurrentUserProfileForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileUpdateGoogleAuthenticatorKeyPutURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileUpdateGoogleAuthenticatorKeyPut
     */
    ApiServicesAppProfileUpdateGoogleAuthenticatorKeyPut(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateGoogleAuthenticatorKey';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileSendVerificationSmsPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/SendVerificationSms';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileSendVerificationSmsPost
     */
    ApiServicesAppProfileSendVerificationSmsPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/SendVerificationSms';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileVerifySmsCodePostURL(parameters: {
        'input'?: VerifySmsCodeInputDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/VerifySmsCode';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileVerifySmsCodePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileVerifySmsCodePost(parameters: {
        'input'?: VerifySmsCodeInputDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/VerifySmsCode';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileUpdateCurrentUserProfilePutURL(parameters: {
        'input'?: CurrentUserProfileEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateCurrentUserProfile';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileUpdateCurrentUserProfilePut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileUpdateCurrentUserProfilePut(parameters: {
        'input'?: CurrentUserProfileEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateCurrentUserProfile';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileChangePasswordPostURL(parameters: {
        'input'?: ChangePasswordInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/ChangePassword';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileChangePasswordPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileChangePasswordPost(parameters: {
        'input'?: ChangePasswordInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/ChangePassword';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileUpdateProfilePicturePutURL(parameters: {
        'input'?: UpdateProfilePictureInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateProfilePicture';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileUpdateProfilePicturePut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileUpdateProfilePicturePut(parameters: {
        'input'?: UpdateProfilePictureInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/UpdateProfilePicture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileGetPasswordComplexitySettingGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetPasswordComplexitySetting';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileGetPasswordComplexitySettingGet
     */
    ApiServicesAppProfileGetPasswordComplexitySettingGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetPasswordComplexitySetting';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileGetProfilePictureGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetProfilePicture';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileGetProfilePictureGet
     */
    ApiServicesAppProfileGetProfilePictureGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetProfilePicture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileGetFriendProfilePictureByIdGetURL(parameters: {
        'profilePictureId'?: string,
        'userId': number,
        'tenantId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetFriendProfilePictureById';
        if (parameters['profilePictureId'] !== undefined) {
            queryParameters['ProfilePictureId'] = parameters['profilePictureId'];
        }

        if (parameters['userId'] !== undefined) {
            queryParameters['UserId'] = parameters['userId'];
        }

        if (parameters['tenantId'] !== undefined) {
            queryParameters['TenantId'] = parameters['tenantId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileGetFriendProfilePictureByIdGet
     * @param {string} profilePictureId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} userId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} tenantId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileGetFriendProfilePictureByIdGet(parameters: {
        'profilePictureId'?: string,
        'userId': number,
        'tenantId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetFriendProfilePictureById';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['profilePictureId'] !== undefined) {
                queryParameters['ProfilePictureId'] = parameters['profilePictureId'];
            }

            if (parameters['userId'] !== undefined) {
                queryParameters['UserId'] = parameters['userId'];
            }

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['tenantId'] !== undefined) {
                queryParameters['TenantId'] = parameters['tenantId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileGetProfilePictureByIdGetURL(parameters: {
        'profilePictureId': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetProfilePictureById';
        if (parameters['profilePictureId'] !== undefined) {
            queryParameters['profilePictureId'] = parameters['profilePictureId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileGetProfilePictureByIdGet
     * @param {string} profilePictureId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileGetProfilePictureByIdGet(parameters: {
        'profilePictureId': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/GetProfilePictureById';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['profilePictureId'] !== undefined) {
                queryParameters['profilePictureId'] = parameters['profilePictureId'];
            }

            if (parameters['profilePictureId'] === undefined) {
                reject(new Error('Missing required  parameter: profilePictureId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppProfileChangeLanguagePostURL(parameters: {
        'input'?: ChangeUserLanguageDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/ChangeLanguage';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppProfileChangeLanguagePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppProfileChangeLanguagePost(parameters: {
        'input'?: ChangeUserLanguageDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Profile/ChangeLanguage';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppRoleGetRolesGetURL(parameters: {
        'permission'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/GetRoles';
        if (parameters['permission'] !== undefined) {
            queryParameters['Permission'] = parameters['permission'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppRoleGetRolesGet
     * @param {string} permission - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppRoleGetRolesGet(parameters: {
        'permission'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/GetRoles';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['permission'] !== undefined) {
                queryParameters['Permission'] = parameters['permission'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppRoleGetRoleForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/GetRoleForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppRoleGetRoleForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppRoleGetRoleForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/GetRoleForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppRoleCreateOrUpdateRolePostURL(parameters: {
        'input'?: CreateOrUpdateRoleInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/CreateOrUpdateRole';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppRoleCreateOrUpdateRolePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppRoleCreateOrUpdateRolePost(parameters: {
        'input'?: CreateOrUpdateRoleInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/CreateOrUpdateRole';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppRoleDeleteRoleDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/DeleteRole';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppRoleDeleteRoleDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppRoleDeleteRoleDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Role/DeleteRole';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearAddOrUpdateSafetyWearMonitoringPostURL(parameters: {
        'input'?: SafetyWearMonitoringInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearAddOrUpdateSafetyWearMonitoringPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearAddOrUpdateSafetyWearMonitoringPost(parameters: {
        'input'?: SafetyWearMonitoringInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/AddOrUpdateSafetyWearMonitoring';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearGetOneGetURL(parameters: {
        'userId': number,
        'equipmentNo': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetOne';
        if (parameters['userId'] !== undefined) {
            queryParameters['userId'] = parameters['userId'];
        }

        if (parameters['equipmentNo'] !== undefined) {
            queryParameters['equipmentNo'] = parameters['equipmentNo'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearGetOneGet
     * @param {integer} userId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} equipmentNo - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearGetOneGet(parameters: {
        'userId': number,
        'equipmentNo': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetOne';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['userId'] !== undefined) {
                queryParameters['userId'] = parameters['userId'];
            }

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['equipmentNo'] !== undefined) {
                queryParameters['equipmentNo'] = parameters['equipmentNo'];
            }

            if (parameters['equipmentNo'] === undefined) {
                reject(new Error('Missing required  parameter: equipmentNo'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearGetListGetURL(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetList';
        if (parameters['stationId'] !== undefined) {
            queryParameters['stationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearGetListGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearGetListGet(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetList';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['stationId'] = parameters['stationId'];
            }

            if (parameters['stationId'] === undefined) {
                reject(new Error('Missing required  parameter: stationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearGetSafetyWearEquipmentByMacAddressGetURL(parameters: {
        'macAddress'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress';
        if (parameters['macAddress'] !== undefined) {
            queryParameters['macAddress'] = parameters['macAddress'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearGetSafetyWearEquipmentByMacAddressGet
     * @param {string} macAddress - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearGetSafetyWearEquipmentByMacAddressGet(parameters: {
        'macAddress'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetSafetyWearEquipmentByMacAddress';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['macAddress'] !== undefined) {
                queryParameters['macAddress'] = parameters['macAddress'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearGetSafetyWearEquipmentsGetURL(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetSafetyWearEquipments';
        if (parameters['stationId'] !== undefined) {
            queryParameters['stationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearGetSafetyWearEquipmentsGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearGetSafetyWearEquipmentsGet(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetSafetyWearEquipments';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['stationId'] = parameters['stationId'];
            }

            if (parameters['stationId'] === undefined) {
                reject(new Error('Missing required  parameter: stationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSafetyWearGetUserListForSafetyWearLoginGetURL(parameters: {
        'userName'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin';
        if (parameters['userName'] !== undefined) {
            queryParameters['userName'] = parameters['userName'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSafetyWearGetUserListForSafetyWearLoginGet
     * @param {string} userName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSafetyWearGetUserListForSafetyWearLoginGet(parameters: {
        'userName'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/SafetyWear/GetUserListForSafetyWearLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['userName'] !== undefined) {
                queryParameters['userName'] = parameters['userName'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSessionGetCurrentLoginInformationsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Session/GetCurrentLoginInformations';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSessionGetCurrentLoginInformationsGet
     */
    ApiServicesAppSessionGetCurrentLoginInformationsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Session/GetCurrentLoginInformations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSessionUpdateUserSignInTokenPutURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Session/UpdateUserSignInToken';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSessionUpdateUserSignInTokenPut
     */
    ApiServicesAppSessionUpdateUserSignInTokenPut(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Session/UpdateUserSignInToken';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationGetStationsGetURL(parameters: {
        'name'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStations';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationGetStationsGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationGetStationsGet(parameters: {
        'name'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationGetStationForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStationForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationGetStationForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationGetStationForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStationForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationCreateOrUpdateStationPostURL(parameters: {
        'input'?: CreateOrUpdateStationInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/CreateOrUpdateStation';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationCreateOrUpdateStationPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationCreateOrUpdateStationPost(parameters: {
        'input'?: CreateOrUpdateStationInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/CreateOrUpdateStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationDeleteStationDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/DeleteStation';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationDeleteStationDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationDeleteStationDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/DeleteStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationGetStationNotBindGetURL(parameters: {
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStationNotBind';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationGetStationNotBindGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationGetStationNotBindGet(parameters: {
        'name'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/GetStationNotBind';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationBindEquipmentStationPostURL(parameters: {
        'input'?: BindEquipmentStationInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/BindEquipmentStation';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationBindEquipmentStationPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationBindEquipmentStationPost(parameters: {
        'input'?: BindEquipmentStationInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/BindEquipmentStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationRemoveEquipmentStationDeleteURL(parameters: {
        'equipmentId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/RemoveEquipmentStation';
        if (parameters['equipmentId'] !== undefined) {
            queryParameters['EquipmentId'] = parameters['equipmentId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationRemoveEquipmentStationDelete
     * @param {integer} equipmentId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationRemoveEquipmentStationDelete(parameters: {
        'equipmentId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/RemoveEquipmentStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['equipmentId'] !== undefined) {
                queryParameters['EquipmentId'] = parameters['equipmentId'];
            }

            if (parameters['equipmentId'] === undefined) {
                reject(new Error('Missing required  parameter: equipmentId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationCreateStationUsersPostURL(parameters: {
        'input'?: CreateStationUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/CreateStationUsers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationCreateStationUsersPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationCreateStationUsersPost(parameters: {
        'input'?: CreateStationUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/CreateStationUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationRemoveUserFromStationDeleteURL(parameters: {
        'stationUserDtoStationId': number,
        'stationUserDtoUserId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/RemoveUserFromStation';
        if (parameters['stationUserDtoStationId'] !== undefined) {
            queryParameters['StationUserDto.StationId'] = parameters['stationUserDtoStationId'];
        }

        if (parameters['stationUserDtoUserId'] !== undefined) {
            queryParameters['StationUserDto.UserId'] = parameters['stationUserDtoUserId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationRemoveUserFromStationDelete
     * @param {integer} stationUserDtoStationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} stationUserDtoUserId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationRemoveUserFromStationDelete(parameters: {
        'stationUserDtoStationId': number,
        'stationUserDtoUserId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Station/RemoveUserFromStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['stationUserDtoStationId'] !== undefined) {
                queryParameters['StationUserDto.StationId'] = parameters['stationUserDtoStationId'];
            }

            if (parameters['stationUserDtoStationId'] === undefined) {
                reject(new Error('Missing required  parameter: stationUserDtoStationId'));
                return;
            }

            if (parameters['stationUserDtoUserId'] !== undefined) {
                queryParameters['StationUserDto.UserId'] = parameters['stationUserDtoUserId'];
            }

            if (parameters['stationUserDtoUserId'] === undefined) {
                reject(new Error('Missing required  parameter: stationUserDtoUserId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaCreateStationAreaPostURL(parameters: {
        'input'?: CreateStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/CreateStationArea';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaCreateStationAreaPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaCreateStationAreaPost(parameters: {
        'input'?: CreateStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/CreateStationArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaUpdateStationAreaPutURL(parameters: {
        'input'?: UpdateStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/UpdateStationArea';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaUpdateStationAreaPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaUpdateStationAreaPut(parameters: {
        'input'?: UpdateStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/UpdateStationArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaMoveStationAreaPostURL(parameters: {
        'input'?: MoveStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/MoveStationArea';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaMoveStationAreaPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaMoveStationAreaPost(parameters: {
        'input'?: MoveStationAreaInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/MoveStationArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaDeleteStationAreaDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/DeleteStationArea';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaDeleteStationAreaDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaDeleteStationAreaDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/DeleteStationArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaGetStationAreaGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/GetStationArea';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaGetStationAreaGet
     */
    ApiServicesAppStationAreaGetStationAreaGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/GetStationArea';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaGetStationAreaWithEquipmentsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/GetStationAreaWithEquipments';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaGetStationAreaWithEquipmentsGet
     */
    ApiServicesAppStationAreaGetStationAreaWithEquipmentsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/GetStationAreaWithEquipments';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaStationAreaBindStationPostURL(parameters: {
        'input'?: StationAreaBindStationInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/StationAreaBindStation';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaStationAreaBindStationPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaStationAreaBindStationPost(parameters: {
        'input'?: StationAreaBindStationInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/StationAreaBindStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationAreaRemoveStationAreaStationDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/RemoveStationAreaStation';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationAreaRemoveStationAreaStationDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationAreaRemoveStationAreaStationDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationArea/RemoveStationAreaStation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationUserGetRelatedUserListByStationIdGetURL(parameters: {
        'id': number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationUser/GetRelatedUserListByStationId';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationUserGetRelatedUserListByStationIdGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationUserGetRelatedUserListByStationIdGet(parameters: {
        'id': number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationUser/GetRelatedUserListByStationId';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppStationUserGetNotRelatedUserListByStationIdGetURL(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationUser/GetNotRelatedUserListByStationId';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppStationUserGetNotRelatedUserListByStationIdGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppStationUserGetNotRelatedUserListByStationIdGet(parameters: {
        'stationId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/StationUser/GetNotRelatedUserListByStationId';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters['stationId'] === undefined) {
                reject(new Error('Missing required  parameter: stationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppSubscriptionUpgradeTenantToEquivalentEditionPostURL(parameters: {
        'upgradeEditionId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition';
        if (parameters['upgradeEditionId'] !== undefined) {
            queryParameters['upgradeEditionId'] = parameters['upgradeEditionId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppSubscriptionUpgradeTenantToEquivalentEditionPost
     * @param {integer} upgradeEditionId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppSubscriptionUpgradeTenantToEquivalentEditionPost(parameters: {
        'upgradeEditionId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Subscription/UpgradeTenantToEquivalentEdition';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['upgradeEditionId'] !== undefined) {
                queryParameters['upgradeEditionId'] = parameters['upgradeEditionId'];
            }

            if (parameters['upgradeEditionId'] === undefined) {
                reject(new Error('Missing required  parameter: upgradeEditionId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantGetTenantsGetURL(parameters: {
        'filter'?: string,
        'subscriptionEndDateStart'?: string,
        'subscriptionEndDateEnd'?: string,
        'creationDateStart'?: string,
        'creationDateEnd'?: string,
        'editionId'?: number,
        'editionIdSpecified': boolean,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenants';
        if (parameters['filter'] !== undefined) {
            queryParameters['Filter'] = parameters['filter'];
        }

        if (parameters['subscriptionEndDateStart'] !== undefined) {
            queryParameters['SubscriptionEndDateStart'] = parameters['subscriptionEndDateStart'];
        }

        if (parameters['subscriptionEndDateEnd'] !== undefined) {
            queryParameters['SubscriptionEndDateEnd'] = parameters['subscriptionEndDateEnd'];
        }

        if (parameters['creationDateStart'] !== undefined) {
            queryParameters['CreationDateStart'] = parameters['creationDateStart'];
        }

        if (parameters['creationDateEnd'] !== undefined) {
            queryParameters['CreationDateEnd'] = parameters['creationDateEnd'];
        }

        if (parameters['editionId'] !== undefined) {
            queryParameters['EditionId'] = parameters['editionId'];
        }

        if (parameters['editionIdSpecified'] !== undefined) {
            queryParameters['EditionIdSpecified'] = parameters['editionIdSpecified'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantGetTenantsGet
     * @param {string} filter - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} subscriptionEndDateStart - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} subscriptionEndDateEnd - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} creationDateStart - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} creationDateEnd - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} editionId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {boolean} editionIdSpecified - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantGetTenantsGet(parameters: {
        'filter'?: string,
        'subscriptionEndDateStart'?: string,
        'subscriptionEndDateEnd'?: string,
        'creationDateStart'?: string,
        'creationDateEnd'?: string,
        'editionId'?: number,
        'editionIdSpecified': boolean,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenants';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['filter'] !== undefined) {
                queryParameters['Filter'] = parameters['filter'];
            }

            if (parameters['subscriptionEndDateStart'] !== undefined) {
                queryParameters['SubscriptionEndDateStart'] = parameters['subscriptionEndDateStart'];
            }

            if (parameters['subscriptionEndDateEnd'] !== undefined) {
                queryParameters['SubscriptionEndDateEnd'] = parameters['subscriptionEndDateEnd'];
            }

            if (parameters['creationDateStart'] !== undefined) {
                queryParameters['CreationDateStart'] = parameters['creationDateStart'];
            }

            if (parameters['creationDateEnd'] !== undefined) {
                queryParameters['CreationDateEnd'] = parameters['creationDateEnd'];
            }

            if (parameters['editionId'] !== undefined) {
                queryParameters['EditionId'] = parameters['editionId'];
            }

            if (parameters['editionIdSpecified'] !== undefined) {
                queryParameters['EditionIdSpecified'] = parameters['editionIdSpecified'];
            }

            if (parameters['editionIdSpecified'] === undefined) {
                reject(new Error('Missing required  parameter: editionIdSpecified'));
                return;
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantCreateTenantPostURL(parameters: {
        'input'?: CreateTenantInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/CreateTenant';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantCreateTenantPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantCreateTenantPost(parameters: {
        'input'?: CreateTenantInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/CreateTenant';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantGetTenantForEditGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenantForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantGetTenantForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantGetTenantForEditGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenantForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantUpdateTenantPutURL(parameters: {
        'input'?: TenantEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UpdateTenant';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantUpdateTenantPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantUpdateTenantPut(parameters: {
        'input'?: TenantEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UpdateTenant';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDeleteTenantDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/DeleteTenant';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDeleteTenantDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantDeleteTenantDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/DeleteTenant';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantGetTenantFeaturesForEditGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenantFeaturesForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantGetTenantFeaturesForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantGetTenantFeaturesForEditGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/GetTenantFeaturesForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantUpdateTenantFeaturesPutURL(parameters: {
        'input'?: UpdateTenantFeaturesInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UpdateTenantFeatures';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantUpdateTenantFeaturesPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantUpdateTenantFeaturesPut(parameters: {
        'input'?: UpdateTenantFeaturesInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UpdateTenantFeatures';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantResetTenantSpecificFeaturesPostURL(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/ResetTenantSpecificFeatures';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantResetTenantSpecificFeaturesPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantResetTenantSpecificFeaturesPost(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/ResetTenantSpecificFeatures';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantUnlockTenantAdminPostURL(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UnlockTenantAdmin';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantUnlockTenantAdminPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantUnlockTenantAdminPost(parameters: {
        'input'?: EntityDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Tenant/UnlockTenantAdmin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDashboardGetMemberActivityGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetMemberActivity';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDashboardGetMemberActivityGet
     */
    ApiServicesAppTenantDashboardGetMemberActivityGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetMemberActivity';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDashboardGetDashboardDataGetURL(parameters: {
        'salesSummaryDatePeriod': "Daily" | "Weekly" | "Monthly",
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetDashboardData';
        if (parameters['salesSummaryDatePeriod'] !== undefined) {
            queryParameters['SalesSummaryDatePeriod'] = parameters['salesSummaryDatePeriod'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDashboardGetDashboardDataGet
     * @param {string} salesSummaryDatePeriod - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantDashboardGetDashboardDataGet(parameters: {
        'salesSummaryDatePeriod': "Daily" | "Weekly" | "Monthly",
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetDashboardData';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['salesSummaryDatePeriod'] !== undefined) {
                queryParameters['SalesSummaryDatePeriod'] = parameters['salesSummaryDatePeriod'];
            }

            if (parameters['salesSummaryDatePeriod'] === undefined) {
                reject(new Error('Missing required  parameter: salesSummaryDatePeriod'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDashboardGetSalesSummaryGetURL(parameters: {
        'salesSummaryDatePeriod': "Daily" | "Weekly" | "Monthly",
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetSalesSummary';
        if (parameters['salesSummaryDatePeriod'] !== undefined) {
            queryParameters['SalesSummaryDatePeriod'] = parameters['salesSummaryDatePeriod'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDashboardGetSalesSummaryGet
     * @param {string} salesSummaryDatePeriod - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantDashboardGetSalesSummaryGet(parameters: {
        'salesSummaryDatePeriod': "Daily" | "Weekly" | "Monthly",
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetSalesSummary';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['salesSummaryDatePeriod'] !== undefined) {
                queryParameters['SalesSummaryDatePeriod'] = parameters['salesSummaryDatePeriod'];
            }

            if (parameters['salesSummaryDatePeriod'] === undefined) {
                reject(new Error('Missing required  parameter: salesSummaryDatePeriod'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDashboardGetWorldMapGetURL(parameters: {
        'input'?: {},
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetWorldMap';
        if (parameters['input'] !== undefined) {
            queryParameters['input'] = parameters['input'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDashboardGetWorldMapGet
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantDashboardGetWorldMapGet(parameters: {
        'input'?: {},
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetWorldMap';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['input'] !== undefined) {
                queryParameters['input'] = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantDashboardGetGeneralStatsGetURL(parameters: {
        'input'?: {},
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetGeneralStats';
        if (parameters['input'] !== undefined) {
            queryParameters['input'] = parameters['input'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantDashboardGetGeneralStatsGet
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantDashboardGetGeneralStatsGet(parameters: {
        'input'?: {},
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantDashboard/GetGeneralStats';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['input'] !== undefined) {
                queryParameters['input'] = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantRegistrationRegisterTenantPostURL(parameters: {
        'input'?: RegisterTenantInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/RegisterTenant';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantRegistrationRegisterTenantPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantRegistrationRegisterTenantPost(parameters: {
        'input'?: RegisterTenantInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/RegisterTenant';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantRegistrationGetEditionsForSelectGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/GetEditionsForSelect';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantRegistrationGetEditionsForSelectGet
     */
    ApiServicesAppTenantRegistrationGetEditionsForSelectGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/GetEditionsForSelect';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantRegistrationGetEditionGetURL(parameters: {
        'editionId': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/GetEdition';
        if (parameters['editionId'] !== undefined) {
            queryParameters['editionId'] = parameters['editionId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantRegistrationGetEditionGet
     * @param {integer} editionId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantRegistrationGetEditionGet(parameters: {
        'editionId': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantRegistration/GetEdition';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['editionId'] !== undefined) {
                queryParameters['editionId'] = parameters['editionId'];
            }

            if (parameters['editionId'] === undefined) {
                reject(new Error('Missing required  parameter: editionId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantSettingsGetAllSettingsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/GetAllSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantSettingsGetAllSettingsGet
     */
    ApiServicesAppTenantSettingsGetAllSettingsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/GetAllSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantSettingsUpdateAllSettingsPutURL(parameters: {
        'input'?: TenantSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/UpdateAllSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantSettingsUpdateAllSettingsPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantSettingsUpdateAllSettingsPut(parameters: {
        'input'?: TenantSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/UpdateAllSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantSettingsClearLogoPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/ClearLogo';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantSettingsClearLogoPost
     */
    ApiServicesAppTenantSettingsClearLogoPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/ClearLogo';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantSettingsClearCustomCssPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/ClearCustomCss';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantSettingsClearCustomCssPost
     */
    ApiServicesAppTenantSettingsClearCustomCssPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/ClearCustomCss';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTenantSettingsSendTestEmailPostURL(parameters: {
        'input'?: SendTestEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/SendTestEmail';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTenantSettingsSendTestEmailPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTenantSettingsSendTestEmailPost(parameters: {
        'input'?: SendTestEmailInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TenantSettings/SendTestEmail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerimalPortConfigGetTerminalPortConfigsGetURL(parameters: {
        'terminalId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs';
        if (parameters['terminalId'] !== undefined) {
            queryParameters['terminalId'] = parameters['terminalId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerimalPortConfigGetTerminalPortConfigsGet
     * @param {integer} terminalId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerimalPortConfigGetTerminalPortConfigsGet(parameters: {
        'terminalId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['terminalId'] !== undefined) {
                queryParameters['terminalId'] = parameters['terminalId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerimalPortConfigGetTerminalPortConfigForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerimalPortConfigGetTerminalPortConfigForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerimalPortConfigGetTerminalPortConfigForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/GetTerminalPortConfigForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerimalPortConfigCreateOrUpdateTerminalPortConfigPostURL(parameters: {
        'input'?: CreateOrUpdateTerminalPortConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerimalPortConfigCreateOrUpdateTerminalPortConfigPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerimalPortConfigCreateOrUpdateTerminalPortConfigPost(parameters: {
        'input'?: CreateOrUpdateTerminalPortConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/CreateOrUpdateTerminalPortConfig';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerimalPortConfigDeleteTerminalPortConfigDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerimalPortConfigDeleteTerminalPortConfigDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerimalPortConfigDeleteTerminalPortConfigDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/TerimalPortConfig/DeleteTerminalPortConfig';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerminalGetTerminalsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/GetTerminals';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerminalGetTerminalsGet
     */
    ApiServicesAppTerminalGetTerminalsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/GetTerminals';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerminalGetTerminalForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/GetTerminalForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerminalGetTerminalForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerminalGetTerminalForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/GetTerminalForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerminalCreateOrUpdateTerminalPostURL(parameters: {
        'input'?: CreateOrUpdateTerminalInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/CreateOrUpdateTerminal';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerminalCreateOrUpdateTerminalPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerminalCreateOrUpdateTerminalPost(parameters: {
        'input'?: CreateOrUpdateTerminalInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/CreateOrUpdateTerminal';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerminalDeleteTerminalDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/DeleteTerminal';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerminalDeleteTerminalDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerminalDeleteTerminalDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/DeleteTerminal';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTerminalResetTerminalPostURL(parameters: {
        'input'?: ResetTerminalInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/ResetTerminal';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTerminalResetTerminalPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTerminalResetTerminalPost(parameters: {
        'input'?: ResetTerminalInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Terminal/ResetTerminal';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTimingGetTimezonesGetURL(parameters: {
        'defaultTimezoneScope': "Application" | "Tenant" | "User" | "All",
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Timing/GetTimezones';
        if (parameters['defaultTimezoneScope'] !== undefined) {
            queryParameters['DefaultTimezoneScope'] = parameters['defaultTimezoneScope'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTimingGetTimezonesGet
     * @param {string} defaultTimezoneScope - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTimingGetTimezonesGet(parameters: {
        'defaultTimezoneScope': "Application" | "Tenant" | "User" | "All",
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Timing/GetTimezones';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['defaultTimezoneScope'] !== undefined) {
                queryParameters['DefaultTimezoneScope'] = parameters['defaultTimezoneScope'];
            }

            if (parameters['defaultTimezoneScope'] === undefined) {
                reject(new Error('Missing required  parameter: defaultTimezoneScope'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppTimingGetTimezoneComboboxItemsGetURL(parameters: {
        'selectedTimezoneId'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Timing/GetTimezoneComboboxItems';
        if (parameters['selectedTimezoneId'] !== undefined) {
            queryParameters['SelectedTimezoneId'] = parameters['selectedTimezoneId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppTimingGetTimezoneComboboxItemsGet
     * @param {string} selectedTimezoneId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppTimingGetTimezoneComboboxItemsGet(parameters: {
        'selectedTimezoneId'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/Timing/GetTimezoneComboboxItems';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['selectedTimezoneId'] !== undefined) {
                queryParameters['SelectedTimezoneId'] = parameters['selectedTimezoneId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthAuthenticatePostURL(parameters: {
        'model'?: AuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/Authenticate';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthAuthenticatePost
     * @param {} model - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthAuthenticatePost(parameters: {
        'model'?: AuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/Authenticate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthSendTwoFactorAuthCodePostURL(parameters: {
        'model'?: SendTwoFactorAuthCodeModel,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/SendTwoFactorAuthCode';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthSendTwoFactorAuthCodePost
     * @param {} model - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthSendTwoFactorAuthCodePost(parameters: {
        'model'?: SendTwoFactorAuthCodeModel,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/SendTwoFactorAuthCode';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthImpersonatedAuthenticatePostURL(parameters: {
        'impersonationToken'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/ImpersonatedAuthenticate';
        if (parameters['impersonationToken'] !== undefined) {
            queryParameters['impersonationToken'] = parameters['impersonationToken'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthImpersonatedAuthenticatePost
     * @param {string} impersonationToken - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthImpersonatedAuthenticatePost(parameters: {
        'impersonationToken'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/ImpersonatedAuthenticate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['impersonationToken'] !== undefined) {
                queryParameters['impersonationToken'] = parameters['impersonationToken'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthLinkedAccountAuthenticatePostURL(parameters: {
        'switchAccountToken'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/LinkedAccountAuthenticate';
        if (parameters['switchAccountToken'] !== undefined) {
            queryParameters['switchAccountToken'] = parameters['switchAccountToken'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthLinkedAccountAuthenticatePost
     * @param {string} switchAccountToken - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthLinkedAccountAuthenticatePost(parameters: {
        'switchAccountToken'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/LinkedAccountAuthenticate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['switchAccountToken'] !== undefined) {
                queryParameters['switchAccountToken'] = parameters['switchAccountToken'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthGetExternalAuthenticationProvidersGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/GetExternalAuthenticationProviders';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthGetExternalAuthenticationProvidersGet
     */
    ApiTokenAuthGetExternalAuthenticationProvidersGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/GetExternalAuthenticationProviders';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthExternalAuthenticatePostURL(parameters: {
        'model'?: ExternalAuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/ExternalAuthenticate';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthExternalAuthenticatePost
     * @param {} model - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthExternalAuthenticatePost(parameters: {
        'model'?: ExternalAuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/ExternalAuthenticate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthSecurityAuthenticatePostURL(parameters: {
        'model'?: SecurityAuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/SecurityAuthenticate';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthSecurityAuthenticatePost
     * @param {} model - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthSecurityAuthenticatePost(parameters: {
        'model'?: SecurityAuthenticateModel,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/SecurityAuthenticate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiTokenAuthTestNotificationGetURL(parameters: {
        'message'?: string,
        'severity'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/TestNotification';
        if (parameters['message'] !== undefined) {
            queryParameters['message'] = parameters['message'];
        }

        if (parameters['severity'] !== undefined) {
            queryParameters['severity'] = parameters['severity'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiTokenAuthTestNotificationGet
     * @param {string} message - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} severity - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiTokenAuthTestNotificationGet(parameters: {
        'message'?: string,
        'severity'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/TokenAuth/TestNotification';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['message'] !== undefined) {
                queryParameters['message'] = parameters['message'];
            }

            if (parameters['severity'] !== undefined) {
                queryParameters['severity'] = parameters['severity'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUiCustomizationSettingsGetUiManagementSettingsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUiCustomizationSettingsGetUiManagementSettingsGet
     */
    ApiServicesAppUiCustomizationSettingsGetUiManagementSettingsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/GetUiManagementSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUiCustomizationSettingsUpdateUiManagementSettingsPutURL(parameters: {
        'settings'?: UiCustomizationSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUiCustomizationSettingsUpdateUiManagementSettingsPut
     * @param {} settings - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUiCustomizationSettingsUpdateUiManagementSettingsPut(parameters: {
        'settings'?: UiCustomizationSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['settings'] !== undefined) {
                body = parameters['settings'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUiCustomizationSettingsUpdateDefaultUiManagementSettingsPutURL(parameters: {
        'settings'?: UiCustomizationSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUiCustomizationSettingsUpdateDefaultUiManagementSettingsPut
     * @param {} settings - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUiCustomizationSettingsUpdateDefaultUiManagementSettingsPut(parameters: {
        'settings'?: UiCustomizationSettingsEditDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['settings'] !== undefined) {
                body = parameters['settings'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUiCustomizationSettingsUseSystemDefaultSettingsPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUiCustomizationSettingsUseSystemDefaultSettingsPost
     */
    ApiServicesAppUiCustomizationSettingsUseSystemDefaultSettingsPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserGetUsersGetURL(parameters: {
        'filter'?: string,
        'permission'?: string,
        'role'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsers';
        if (parameters['filter'] !== undefined) {
            queryParameters['Filter'] = parameters['filter'];
        }

        if (parameters['permission'] !== undefined) {
            queryParameters['Permission'] = parameters['permission'];
        }

        if (parameters['role'] !== undefined) {
            queryParameters['Role'] = parameters['role'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserGetUsersGet
     * @param {string} filter - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} permission - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} role - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserGetUsersGet(parameters: {
        'filter'?: string,
        'permission'?: string,
        'role'?: number,
        'sorting'?: string,
        'maxResultCount': number,
        'skipCount': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['filter'] !== undefined) {
                queryParameters['Filter'] = parameters['filter'];
            }

            if (parameters['permission'] !== undefined) {
                queryParameters['Permission'] = parameters['permission'];
            }

            if (parameters['role'] !== undefined) {
                queryParameters['Role'] = parameters['role'];
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserGetUsersToExcelGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsersToExcel';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserGetUsersToExcelGet
     */
    ApiServicesAppUserGetUsersToExcelGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsersToExcel';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserGetUserForEditGetURL(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUserForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserGetUserForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserGetUserForEditGet(parameters: {
        'id'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUserForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserGetUserPermissionsForEditGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUserPermissionsForEdit';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserGetUserPermissionsForEditGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserGetUserPermissionsForEditGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUserPermissionsForEdit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserResetUserSpecificPermissionsPostURL(parameters: {
        'input'?: EntityDto[Int64],
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/ResetUserSpecificPermissions';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserResetUserSpecificPermissionsPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserResetUserSpecificPermissionsPost(parameters: {
        'input'?: EntityDto[Int64],
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/ResetUserSpecificPermissions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserUpdateUserPermissionsPutURL(parameters: {
        'input'?: UpdateUserPermissionsInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/UpdateUserPermissions';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserUpdateUserPermissionsPut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserUpdateUserPermissionsPut(parameters: {
        'input'?: UpdateUserPermissionsInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/UpdateUserPermissions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserCreateOrUpdateUserPostURL(parameters: {
        'input'?: CreateOrUpdateUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/CreateOrUpdateUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserCreateOrUpdateUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserCreateOrUpdateUserPost(parameters: {
        'input'?: CreateOrUpdateUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/CreateOrUpdateUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserDeleteUserDeleteURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/DeleteUser';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserDeleteUserDelete
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserDeleteUserDelete(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/DeleteUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserUnlockUserPostURL(parameters: {
        'input'?: EntityDto[Int64],
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/UnlockUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserUnlockUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserUnlockUserPost(parameters: {
        'input'?: EntityDto[Int64],
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/UnlockUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserGetUsersForLoginGetURL(parameters: {
        'name'?: string,
        'surname'?: string,
        'userName'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsersForLogin';
        if (parameters['name'] !== undefined) {
            queryParameters['Name'] = parameters['name'];
        }

        if (parameters['surname'] !== undefined) {
            queryParameters['Surname'] = parameters['surname'];
        }

        if (parameters['userName'] !== undefined) {
            queryParameters['UserName'] = parameters['userName'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserGetUsersForLoginGet
     * @param {string} name - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} surname - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} userName - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserGetUsersForLoginGet(parameters: {
        'name'?: string,
        'surname'?: string,
        'userName'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/User/GetUsersForLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['name'] !== undefined) {
                queryParameters['Name'] = parameters['name'];
            }

            if (parameters['surname'] !== undefined) {
                queryParameters['Surname'] = parameters['surname'];
            }

            if (parameters['userName'] !== undefined) {
                queryParameters['UserName'] = parameters['userName'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLinkLinkToUserPostURL(parameters: {
        'input'?: LinkToUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/LinkToUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLinkLinkToUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLinkLinkToUserPost(parameters: {
        'input'?: LinkToUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/LinkToUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLinkGetLinkedUsersGetURL(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        'sorting'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/GetLinkedUsers';
        if (parameters['maxResultCount'] !== undefined) {
            queryParameters['MaxResultCount'] = parameters['maxResultCount'];
        }

        if (parameters['skipCount'] !== undefined) {
            queryParameters['SkipCount'] = parameters['skipCount'];
        }

        if (parameters['sorting'] !== undefined) {
            queryParameters['Sorting'] = parameters['sorting'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLinkGetLinkedUsersGet
     * @param {integer} maxResultCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {integer} skipCount - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} sorting - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLinkGetLinkedUsersGet(parameters: {
        'maxResultCount': number,
        'skipCount': number,
        'sorting'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/GetLinkedUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['maxResultCount'] !== undefined) {
                queryParameters['MaxResultCount'] = parameters['maxResultCount'];
            }

            if (parameters['maxResultCount'] === undefined) {
                reject(new Error('Missing required  parameter: maxResultCount'));
                return;
            }

            if (parameters['skipCount'] !== undefined) {
                queryParameters['SkipCount'] = parameters['skipCount'];
            }

            if (parameters['skipCount'] === undefined) {
                reject(new Error('Missing required  parameter: skipCount'));
                return;
            }

            if (parameters['sorting'] !== undefined) {
                queryParameters['Sorting'] = parameters['sorting'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLinkGetRecentlyUsedLinkedUsersGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLinkGetRecentlyUsedLinkedUsersGet
     */
    ApiServicesAppUserLinkGetRecentlyUsedLinkedUsersGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/GetRecentlyUsedLinkedUsers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLinkUnlinkUserPostURL(parameters: {
        'input'?: UnlinkUserInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/UnlinkUser';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLinkUnlinkUserPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLinkUnlinkUserPost(parameters: {
        'input'?: UnlinkUserInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLink/UnlinkUser';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginGetRecentUserLoginAttemptsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/GetRecentUserLoginAttempts';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginGetRecentUserLoginAttemptsGet
     */
    ApiServicesAppUserLoginGetRecentUserLoginAttemptsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/GetRecentUserLoginAttempts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginGetNfcCurrentUserLoginGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/GetNfcCurrentUserLogin';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginGetNfcCurrentUserLoginGet
     */
    ApiServicesAppUserLoginGetNfcCurrentUserLoginGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/GetNfcCurrentUserLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginCreateOrUpdateNfcUserLoginPostURL(parameters: {
        'input'?: CreateOrUpdateNfcUserLoginInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginCreateOrUpdateNfcUserLoginPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLoginCreateOrUpdateNfcUserLoginPost(parameters: {
        'input'?: CreateOrUpdateNfcUserLoginInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/CreateOrUpdateNfcUserLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginBindNfcCurrentUserLoginPostURL(parameters: {
        'input'?: UserLoginDto,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/BindNfcCurrentUserLogin';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginBindNfcCurrentUserLoginPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLoginBindNfcCurrentUserLoginPost(parameters: {
        'input'?: UserLoginDto,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/BindNfcCurrentUserLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginRemoveNfcUserLoginDeleteURL(parameters: {
        'userId': number,
        'key': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/RemoveNfcUserLogin';
        if (parameters['userId'] !== undefined) {
            queryParameters['UserId'] = parameters['userId'];
        }

        if (parameters['key'] !== undefined) {
            queryParameters['Key'] = parameters['key'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginRemoveNfcUserLoginDelete
     * @param {integer} userId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} key - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLoginRemoveNfcUserLoginDelete(parameters: {
        'userId': number,
        'key': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/RemoveNfcUserLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['userId'] !== undefined) {
                queryParameters['UserId'] = parameters['userId'];
            }

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['key'] !== undefined) {
                queryParameters['Key'] = parameters['key'];
            }

            if (parameters['key'] === undefined) {
                reject(new Error('Missing required  parameter: key'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppUserLoginRemoveNfcCurrentUserLoginDeleteURL(parameters: {
        'key': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin';
        if (parameters['key'] !== undefined) {
            queryParameters['Key'] = parameters['key'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppUserLoginRemoveNfcCurrentUserLoginDelete
     * @param {string} key - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppUserLoginRemoveNfcCurrentUserLoginDelete(parameters: {
        'key': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/UserLogin/RemoveNfcCurrentUserLogin';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['key'] !== undefined) {
                queryParameters['Key'] = parameters['key'];
            }

            if (parameters['key'] === undefined) {
                reject(new Error('Missing required  parameter: key'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWebLogGetLatestWebLogsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WebLog/GetLatestWebLogs';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWebLogGetLatestWebLogsGet
     */
    ApiServicesAppWebLogGetLatestWebLogsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WebLog/GetLatestWebLogs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWebLogDownloadWebLogsPostURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WebLog/DownloadWebLogs';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWebLogDownloadWebLogsPost
     */
    ApiServicesAppWebLogDownloadWebLogsPost(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WebLog/DownloadWebLogs';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetApplyPostURL(parameters: {
        'input'?: WireCabinetApplyInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetApply';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetApplyPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetApplyPost(parameters: {
        'input'?: WireCabinetApplyInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetApply';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetApprovePostURL(parameters: {
        'input'?: WireCabinetApproveInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetApprove';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetApprovePost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetApprovePost(parameters: {
        'input'?: WireCabinetApproveInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetApprove';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetUnlockPostURL(parameters: {
        'input'?: WireCabinetUnlockInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUnlock';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetUnlockPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetUnlockPost(parameters: {
        'input'?: WireCabinetUnlockInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUnlock';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetHookPostURL(parameters: {
        'input'?: WireCabinetHookInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetHook';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetHookPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetHookPost(parameters: {
        'input'?: WireCabinetHookInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetHook';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetDeviceHookPostURL(parameters: {
        'input'?: WireCabinetHook2Input,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetDeviceHook';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetDeviceHookPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetDeviceHookPost(parameters: {
        'input'?: WireCabinetHook2Input,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetDeviceHook';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetUnHookPostURL(parameters: {
        'input'?: WireCabinetUnHookInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUnHook';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetUnHookPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetUnHookPost(parameters: {
        'input'?: WireCabinetUnHookInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUnHook';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetWireCabinetUpdateTaskPostURL(parameters: {
        'input'?: WireCabinetUpdateTaskInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUpdateTask';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetWireCabinetUpdateTaskPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetWireCabinetUpdateTaskPost(parameters: {
        'input'?: WireCabinetUpdateTaskInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/WireCabinetUpdateTask';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetApplyReasonEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplyReasonEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetApplyReasonEnumsGet
     */
    ApiServicesAppWireCabinetGetApplyReasonEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplyReasonEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetApplyReasonListGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplyReasonList';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetApplyReasonListGet
     */
    ApiServicesAppWireCabinetGetApplyReasonListGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplyReasonList';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetBuckleTypeEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetBuckleTypeEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetBuckleTypeEnumsGet
     */
    ApiServicesAppWireCabinetGetBuckleTypeEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetBuckleTypeEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetLockModeEnumsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetLockModeEnums';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetLockModeEnumsGet
     */
    ApiServicesAppWireCabinetGetLockModeEnumsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetLockModeEnums';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetTaskGetURL(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetTask';
        if (parameters['id'] !== undefined) {
            queryParameters['Id'] = parameters['id'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetTaskGet
     * @param {integer} id - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetTaskGet(parameters: {
        'id': number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetTask';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['id'] !== undefined) {
                queryParameters['Id'] = parameters['id'];
            }

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetApplicantsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplicants';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetApplicantsGet
     */
    ApiServicesAppWireCabinetGetApplicantsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApplicants';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetApproversGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApprovers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetApproversGet
     */
    ApiServicesAppWireCabinetGetApproversGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetApprovers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetRecentlyTimeForSelectOperationGetURL(parameters: {
        'equipmentId'?: number,
        'bluetooth'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation';
        if (parameters['equipmentId'] !== undefined) {
            queryParameters['EquipmentId'] = parameters['equipmentId'];
        }

        if (parameters['bluetooth'] !== undefined) {
            queryParameters['Bluetooth'] = parameters['bluetooth'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetRecentlyTimeForSelectOperationGet
     * @param {integer} equipmentId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} bluetooth - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetRecentlyTimeForSelectOperationGet(parameters: {
        'equipmentId'?: number,
        'bluetooth'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetRecentlyTimeForSelectOperation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['equipmentId'] !== undefined) {
                queryParameters['EquipmentId'] = parameters['equipmentId'];
            }

            if (parameters['bluetooth'] !== undefined) {
                queryParameters['Bluetooth'] = parameters['bluetooth'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetUpdateOperateTimePutURL(parameters: {
        'input'?: UpdateOperateTimeInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/UpdateOperateTime';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetUpdateOperateTimePut
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetUpdateOperateTimePut(parameters: {
        'input'?: UpdateOperateTimeInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/UpdateOperateTime';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetWireDetailGetURL(parameters: {
        'value': string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireDetail';
        if (parameters['value'] !== undefined) {
            queryParameters['Value'] = parameters['value'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetWireDetailGet
     * @param {string} value - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetWireDetailGet(parameters: {
        'value': string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireDetail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['value'] !== undefined) {
                queryParameters['Value'] = parameters['value'];
            }

            if (parameters['value'] === undefined) {
                reject(new Error('Missing required  parameter: value'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetUploadFilePostURL(parameters: {
        'file'?: {},
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/UploadFile';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetUploadFilePost
     * @param {file} file - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetUploadFilePost(parameters: {
        'file'?: {},
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/UploadFile';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'multipart/form-data';

            if (parameters['file'] !== undefined) {
                form['file'] = parameters['file'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetWireCabinetGetURL(parameters: {
        'equipmentId'?: number,
        'bluetooth'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireCabinet';
        if (parameters['equipmentId'] !== undefined) {
            queryParameters['EquipmentId'] = parameters['equipmentId'];
        }

        if (parameters['bluetooth'] !== undefined) {
            queryParameters['Bluetooth'] = parameters['bluetooth'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetWireCabinetGet
     * @param {integer} equipmentId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     * @param {string} bluetooth - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetWireCabinetGet(parameters: {
        'equipmentId'?: number,
        'bluetooth'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireCabinet';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['equipmentId'] !== undefined) {
                queryParameters['EquipmentId'] = parameters['equipmentId'];
            }

            if (parameters['bluetooth'] !== undefined) {
                queryParameters['Bluetooth'] = parameters['bluetooth'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetCreateOrUpdateEquipmentPropertyConfigPostURL(parameters: {
        'input'?: EquipmentPropertyConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetCreateOrUpdateEquipmentPropertyConfigPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetCreateOrUpdateEquipmentPropertyConfigPost(parameters: {
        'input'?: EquipmentPropertyConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/CreateOrUpdateEquipmentPropertyConfig';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetWirePileGetURL(parameters: {
        'value'?: string,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWirePile';
        if (parameters['value'] !== undefined) {
            queryParameters['Value'] = parameters['value'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetWirePileGet
     * @param {string} value - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetWirePileGet(parameters: {
        'value'?: string,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWirePile';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['value'] !== undefined) {
                queryParameters['Value'] = parameters['value'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetWiresBeTakenGetURL(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWiresBeTaken';
        if (parameters['stationId'] !== undefined) {
            queryParameters['StationId'] = parameters['stationId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetWiresBeTakenGet
     * @param {integer} stationId - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetGetWiresBeTakenGet(parameters: {
        'stationId'?: number,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWiresBeTaken';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters['stationId'] !== undefined) {
                queryParameters['StationId'] = parameters['stationId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetGetWireCabinetBluetoothsGetURL(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireCabinetBluetooths';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetGetWireCabinetBluetoothsGet
     */
    ApiServicesAppWireCabinetGetWireCabinetBluetoothsGet(parameters: {
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/GetWireCabinetBluetooths';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiServicesAppWireCabinetCheckWireConfigIsExsitPostURL(parameters: {
        'input'?: CheckWireConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/CheckWireConfigIsExsit';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#ApiServicesAppWireCabinetCheckWireConfigIsExsitPost
     * @param {} input - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    ApiServicesAppWireCabinetCheckWireConfigIsExsitPost(parameters: {
        'input'?: CheckWireConfigInput,
        $queryParameters?: any,
        $domain?: string
    }): Promise<request.Response> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/services/app/WireCabinet/CheckWireConfigIsExsit';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json,application/json,text/json,application/*+json';

            if (parameters['input'] !== undefined) {
                body = parameters['input'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

}