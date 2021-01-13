export function createDataError (data, type, message=null) {
  if (typeof data.error_type === "undefined") {
    return {
      cod: 'catch',
      type: data.type,
      message,
      source: 'api'
    }
  }
  switch (type) {
    case 'api':
      return {
        cod: data.error_type,
        type: '',
        message,
        source: type
      }
    case 'bridge':
      return {
        cod: data.error_data.error_code,
        type: data.error_type,
        massage: data.error_data.error_reason,
        source: type
      }
    default:
      return {}
  }
}
