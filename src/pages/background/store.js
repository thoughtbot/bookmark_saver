import { applyMiddleware, createStore } from 'redux'
import { wrapStore, alias } from 'react-chrome-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import aliases from './aliases'
import reducer from './reducers'

const logger = createLogger({
  collapsed: true,
})

const initialState = {
  lists: {
    activeId: null,
    records: [],
  }
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(
    alias(aliases),
    thunk,
    logger,  // NOTE: logger _must_ be last in middleware chain
  ),
)

wrapStore(store, {
  portName: 'BOOKMARKSAVER',
})

export default store
