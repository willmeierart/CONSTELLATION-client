import {UPDATE_PIXEL_VALUE} from './actions'
import {SET_ACTIVE_COLOR} from './actions'

export default function colorReducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PIXEL_VALUE:
      return action.payload
    case SET_ACTIVE_COLOR:
      return action.payload
  }
}
