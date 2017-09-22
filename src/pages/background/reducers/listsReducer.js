import {
  LISTS_REFRESH_FULFILLED,
  LISTS_SET_ACTIVE,
} from '../../../shared/constants'

export default function listsReducer(state={}, action) {
  switch(action.type) {
    case LISTS_SET_ACTIVE:
      state =  {...state, activeId: action.payload}
      break

    case LISTS_REFRESH_FULFILLED:
      const records = action.payload.data.map( (item) => {
        return {
          icon: item.icon,
          name: item.name,
          id: item.id,
        }
      })
      state =  {...state, records: records, activeId: state.activeId || records[0].id}
      break
  }

  return state
}
