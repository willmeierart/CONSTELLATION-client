import {IMPORT_SOCKETS_UPDATE} from './actions'
import {EXPORT_SOCKETS_UPDATE} from './actions'

export default function socketsReducer(state={}, action){
  switch(action.type){
    case IMPORT_SOCKETS_UPDATE:
      return action.payload
    case EXPORT_SOCKETS_UPDATE:
      return action.payload
  }
}
