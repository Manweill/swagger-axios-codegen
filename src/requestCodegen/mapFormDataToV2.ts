import { ISchema, IParameter, IParameterItems } from '../swaggerInterfaces'

function getType(param: IParameterItems) {
  if (param.format === 'binary') {
    return 'file'
  }

  return param.type
}

export function mapFormDataToV2(schema: ISchema): IParameter[] {
  const properties = schema?.properties
  if (!properties) {
    return []
  }

  return Object.keys(properties).map(p => ({
    in: 'formData',
    name: p,
    description: '',
    required: 'true',
    items: properties[p].items,
    schema: {
      $ref: null,
      type: getType(properties[p])
    },
    type: properties[p].type,
    format: getType(properties[p])
  }))
}
