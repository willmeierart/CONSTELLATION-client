export const IMPORT_SOCKETS_UPDATE = 'import_master_update'
export const EXPORT_SOCKETS_UPDATE = 'export_master_update'
export const UPDATE_PIXEL_VALUE = 'update_pixel_value'
export const SET_ACTIVE_COLOR = 'set_active_color'


export function importSocketsUpdate(){
  const getRequest
  return {
    type:IMPORT_SOCKETS_UPDATE,
    payload: getRequest.data
  }
}

export function exportSocketsUpdate(){
  const postRequest
  return {
    type:EXPORT_SOCKETS_UPDATE,
    payload: postRequest
  }
}

export function updatePixelValue(index, newRGB){
  return {
    type:UPDATE_PIXEL_VALUE,
    payload: [index, newRGB]
  }
}

export const setActiveColor(color){
  return {
    type:SET_ACTIVE_COLOR,
    payload: color
  }
}
