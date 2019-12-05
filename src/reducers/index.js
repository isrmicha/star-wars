import { planetReducer } from './planet'
import { combineReducers } from 'redux'
export const Reducers = combineReducers({
  planet: planetReducer
})
