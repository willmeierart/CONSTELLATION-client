import {UPDATE_PIXEL_VALUE, SET_ACTIVE_COLOR, FETCH_PALETTE} from '../actions'
const initialState = {
  palette:{},
  activeColor:{}
}
export default function colorReducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PIXEL_VALUE:
      return action.payload
    case SET_ACTIVE_COLOR:{
      const newState = {...state}
      newState.activeColor = {...newState.activeColor}
      newState.activeColor = action.payload
      return newState}
    case FETCH_PALETTE:{
      const newState = {...state}
      newState.palette = {...newState.palette}
      newState.palette = action.payload
      return newState}
    default:
      return state
  }
}
