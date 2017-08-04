import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'
import PERSIST from './persist'

const rootReducer = combineReducers({
  colorData: colorReducer,
  socketsData: socketsReducer,
  persist: PERSIST
})

export default rootReducer
