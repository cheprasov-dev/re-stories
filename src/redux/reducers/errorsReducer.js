import { errorsInitState } from '../initState'
import {
  ERROR_INIT_USER,
  SET_ERROR_GET_DATA_CONNECTED_GROUPS,
  ERROR_GET_DATA_CONTEST,
  ERROR_GET_DATA_GROUPS_TO_CONNECT,
  RESET_ERROR_GET_DATA_CONNECTED_GROUPS,
  SET_ERROR_GET_DATA_CONTESTS,
  RESET_ERROR_GET_DATA_CONTESTS,
  ERROR_DATA,
  SET_ERROR_GET_DATA_PARTICIPANTS,
  RESET_ERROR_GET_DATA_PARTICIPANTS
} from '../actions/errorsAction'

export function errorsReducer (state = errorsInitState, action) {
  switch (action.type) {
    case ERROR_INIT_USER:
      return {
        ...state,
        errorInitUser: action.payload.error
      }
    case SET_ERROR_GET_DATA_CONNECTED_GROUPS:
      return {
        ...state,
        errorGetDataConnectedGroups: action.payload.error
      }
    case ERROR_GET_DATA_GROUPS_TO_CONNECT:
      return {
        ...state,
        errorGetDataGroupsToConnect: action.payload.error
      }
    case SET_ERROR_GET_DATA_CONTESTS:
      return {
        ...state,
        errorGetContests: action.payload.error
      }
    case RESET_ERROR_GET_DATA_CONTESTS:
      return {
        ...state,
        errorGetContests: false
      }
    case SET_ERROR_GET_DATA_PARTICIPANTS:
      return {
        ...state,
        errorGetDataParticipant: action.payload.error
      }
    case RESET_ERROR_GET_DATA_PARTICIPANTS:
      return {
        ...state,
        errorGetDataParticipant: false
      }
    case ERROR_GET_DATA_CONTEST:
      return {
        ...state,
        errorGetDataContest: action.payload.error
      }
    case RESET_ERROR_GET_DATA_CONNECTED_GROUPS:
      return {
        ...state,
        errorGetDataConnectedGroups: false
      }
    case ERROR_DATA:
      const {cod, type, message, source, place } = action.payload
      return {
        ...state,
        errorData: { ...state.errorData, cod, type, message, source, place }
      }
    default:
      return state
  }
}
