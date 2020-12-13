import { combineReducers } from 'redux'
import heroReducer from './heroReducer'

const appReducer = combineReducers({
  heroReducer
})

const rootReducer = (state, action) => {
  
  if (action.type === 'CLEAR_DATA') {
    state = undefined
  }
  
  return appReducer(state, action)
}

export default rootReducer