import {combineReducers} from 'redux'

import listsReducer from './reducers/listsReducer'

export default combineReducers({
  lists: listsReducer,
})
