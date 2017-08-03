import {UPDATE_PIXEL_VALUE, SET_ACTIVE_COLOR} from '../actions'
import dummyColorArray from './dummy_array_generator'
const initialState = dummyColorArray()

export default function colorReducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PIXEL_VALUE:
      return action.payload
    case SET_ACTIVE_COLOR:
      return action.payload
    default:
      return state
  }
}
