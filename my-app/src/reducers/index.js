import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'

export default const rootReducer = combineReducer({
  colorData: colorReducer,
  socketsData: socketsReducer
})
