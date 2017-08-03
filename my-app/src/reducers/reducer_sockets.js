import {IMPORT_SOCKETS_UPDATE} from './actions'
import {EXPORT_SOCKETS_UPDATE} from './actions'

import dummyColorArray from './dummy_array_generator'

export default function socketsReducer(state=dummyColorArray(), action){
  switch(action.type){
    case IMPORT_SOCKETS_UPDATE:{
      let newState = [...action.payload]
      return newState || dummyColorArray()}
    case EXPORT_SOCKETS_UPDATE:{
      let newState = [...action.payload]
      return newState || dummyColorArray()}
  }
}
