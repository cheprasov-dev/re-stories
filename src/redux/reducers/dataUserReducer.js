import { dataUserInitState } from '../initState'
import {
  SET_COUNT_ACTIVE_CONTESTS_USER, SET_DEVICE, SET_SOURCE, UPGRADE_DATA_USER
} from '../actions/dataUserAction'

export function dataUserReducer (state = dataUserInitState, action) {
  switch (action.type) {
    case UPGRADE_DATA_USER:
      return {
        ...state,
        mainData: action.payload.data,
        isNewUser: action.payload.isNewUser,
      }
    case SET_COUNT_ACTIVE_CONTESTS_USER:
      return {
        ...state,
        countActiveContest: action.payload.count
      }
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload.source
      }
    case SET_DEVICE:
      return {
        ...state,
        device: action.payload.device
      }
    default:
      return state
  }
}
