import {
  ERROR_GET_DATA_CONTEST,
  SET_ERROR_GET_DATA_CONTESTS,
  RESET_ERROR_GET_DATA_CONNECTED_GROUPS,
  RESET_ERROR_GET_DATA_CONTESTS,
  ERROR_GET_DATA_GROUPS_TO_CONNECT,
  SET_ERROR_GET_DATA_CONNECTED_GROUPS,
  ERROR_INIT_USER,
  ERROR_DATA,
  SET_ERROR_GET_DATA_PARTICIPANTS,
  RESET_ERROR_GET_DATA_PARTICIPANTS
} from '../actions/errorsAction'

//----------------------------------------------------------
export function setErrorInitUser(error) {
  return {
    type: ERROR_INIT_USER,
    payload: {error}
  }
}

//----------------------------------------------------------
export function setErrorGetDataGroupsToConnect(error) {
  return {
    type: ERROR_GET_DATA_GROUPS_TO_CONNECT,
    payload: {error}
  }
}

//----------------------------------------------------------
export function setErrorGetDataContest(error) {
  return {
    type: ERROR_GET_DATA_CONTEST,
    payload: {error}
  }
}

//----------------------------------------------------------
export function setErrorGetContests(error) {
  return {
    type: SET_ERROR_GET_DATA_CONTESTS,
    payload: {error}
  }
}

export function resetErrorGetContests() {
  return {type: RESET_ERROR_GET_DATA_CONTESTS}
}

//----------------------------------------------------------
export function setErrorGetDataConnectedGroups(error) {
  return {
    type: SET_ERROR_GET_DATA_CONNECTED_GROUPS,
    payload: {error}
  }
}

export function resetErrorGetDataConnectedGroups() {
  return {type: RESET_ERROR_GET_DATA_CONNECTED_GROUPS}
}

//----------------------------------------------------------
export function setErrorGetDataParticipants(error) {
  return {
    type: SET_ERROR_GET_DATA_PARTICIPANTS,
    payload: {error}
  }
}

export function resetErrorGetDataParticipants() {
  return {type: RESET_ERROR_GET_DATA_PARTICIPANTS}
}

//----------------------------------------------------------
export function setErrorData(objError) {
  const {cod, type, message, source} = objError
  return {
    type: ERROR_DATA,
    payload: {cod, type, message, source}
  }
}

//----------------------------------------------------------

