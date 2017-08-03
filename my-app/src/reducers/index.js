import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'
import PERSIST from './persist'

export default const rootReducer = combineReducer({
  colorData: colorReducer,
  socketsData: socketsReducer,
  persist: PERSIST
})
