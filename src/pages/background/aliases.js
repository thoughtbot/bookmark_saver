import {
  LISTS_REFRESH_REQUESTED,
  URL_SUBMIT_REQUESTED,
} from '../../shared/constants'

import { fetchLists, submitURL } from '../../modules/ajax'

const listsRefreshRequestedAlias = (originalAction) => {
  return (dispatch, getState) => {
    fetchLists(dispatch)
  }
}

const urlSubmitRequestedAlias = (originalAction) => {
  const { listId, url, title } = originalAction.payload

  return (dispatch, getState) => {
    submitURL(dispatch, listId, url, title)
  }
}

export default {
  LISTS_REFRESH_REQUESTED: listsRefreshRequestedAlias,
  URL_SUBMIT_REQUESTED: urlSubmitRequestedAlias,
}
