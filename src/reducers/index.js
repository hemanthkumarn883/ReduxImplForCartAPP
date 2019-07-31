import { combineReducers } from 'redux'
import login from './login'
import homereducer from './homereducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  login,
  homereducer,
  form: formReducer,
})
