import * as listActions from '../shared/actions/listActions'

import axios from 'axios'

const apiHome = 'http://localhost:5000'

export function fetchLists(dispatch) {
  dispatch( (dispatch) => {
    dispatch(listActions.refreshStart())
    axios.get(`${apiHome}/lists`)
      .then( (data) => {
        dispatch(listActions.refreshFulfilled(data))
      })
      .catch( (err) => {
        dispatch(listActions.refreshErrored(err))
      })
  })
}

export function submitURL(dispatch, listId, url, title) {
  const postPayload = {
    url: url,
    title: title,
  }
  dispatch( (dispatch) => {
    dispatch(listActions.urlSubmitStart())
    axios.post(
      `${apiHome}/lists/${listId}/list_items`,
      postPayload,
    )
      .then( (data) => {
        dispatch(listActions.urlSubmitFulfilled(data))
      })
      .catch( (err) => {
        dispatch(listActions.urlSubmitErrored(err))
      })
  })
}
