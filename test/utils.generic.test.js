const { isGenerics, refClassName, trimString } = require('../dist/utils')

console.log('isGenerics', isGenerics('ApiResultOutput[KeyCabinetGenerateUnlockCodeOutput]'));

const className = refClassName('ApiResultOutput[List[TicketRoleDto]]')
console.log('className', className);

console.log(trimString('ApiResultOutput_List_TicketRoleDto__', '_'));
