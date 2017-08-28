export const IMPORT_SOCKETS_UPDATE = 'server/import_master_update'
export const EXPORT_SOCKETS_UPDATE = 'server/export_master_update'
export const UPDATE_PIXEL_VALUE = 'update_pixel_value'
export const SET_ACTIVE_COLOR = 'set_active_color'
export const FETCH_PALETTE = 'fetch_palette'
export const GET_NUMBER_USERS = 'get_number_users'

export function exportSocketsUpdate(data){
  return {
    type:EXPORT_SOCKETS_UPDATE,
    payload: data
  }
}

export function importSocketsUpdate(data){
  return {
    type:IMPORT_SOCKETS_UPDATE,
    payload: data
  }
}

export function updatePixelValue(index, newRGB){
  return {
    type:UPDATE_PIXEL_VALUE,
    payload: [index, newRGB]
  }
}

export function setActiveColor(color){
  return {
    type:SET_ACTIVE_COLOR,
    payload: color
  }
}

export function fetchPalette(){
  const actualPalette = {
    purple: "rgb(199,11,255)",
    blue: "rgb(11,132,203)",
    green: "rgb(26,216,9)",
    yellow: "rgb(248,243,41)",
    orange: "rgb(247,163,20)",
    red: "rgb(250,48,32)",
    magenta: "rgb(218,42,100)",
    pink: "rgb(246,65,156)",
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)"
  }
  return {
    type:FETCH_PALETTE,
    payload:actualPalette
  }
}
