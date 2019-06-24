import { combineReducers } from 'redux'
import login from './login'
import homereducer from './homereducer'

export default combineReducers({
  login,
  homereducer
})
