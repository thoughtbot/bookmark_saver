import {
  LISTS_REFRESH_START,
  LISTS_REFRESH_FULFILLED,
  LISTS_REFRESH_ERRORED,
  LISTS_REFRESH_REQUESTED,

  LISTS_SET_ACTIVE,

  URL_SUBMIT_START,
  URL_SUBMIT_FULFILLED,
  URL_SUBMIT_ERRORED,
  URL_SUBMIT_REQUESTED,
} from '../constants'

export function setActive(listId) {
  return {
    type: LISTS_SET_ACTIVE,
    payload: listId,
  }
}

export function refreshStart() {
  return {
    type: LISTS_REFRESH_START,
  }
}

export function refreshFulfilled(data) {
  return {
    type: LISTS_REFRESH_FULFILLED,
    payload: data,
  }
}

export function refreshErrored(error) {
  return {
    type: LISTS_REFRESH_ERRORED,
    payload: error,
  }
}

export function requestRefresh() {
  return {
    type: LISTS_REFRESH_REQUESTED,
  }
}

export function urlSubmitStart() {
  return {
    type: URL_SUBMIT_START,
  }
}

export function urlSubmitFulfilled(data) {
  return {
    type: URL_SUBMIT_FULFILLED,
    payload: data,
  }
}

export function urlSubmitErrored(error) {
  return {
    type: URL_SUBMIT_ERRORED,
    payload: error,
  }
}

export function requestURLSubmit(listId, url, title) {
  return {
    type: URL_SUBMIT_REQUESTED,
    payload: {
      listId: listId,
      url: url,
      title: title,
    }
  }
}
