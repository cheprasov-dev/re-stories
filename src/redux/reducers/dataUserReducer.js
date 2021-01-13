import { dataUserInitState } from '../initState'
import {
  SET_COUNT_ACTIVE_CONTESTS_USER, SET_VALUE_IS_ADMIN_CONTEST, SET_VALUE_IS_MODERATOR,
  SET_VALUE_IS_VIEW_TRAINING, UPGRADE_DATA_USER, UPGRADE_TOKEN_USER
} from '../actions/dataUserAction'

export function dataUserReducer (state = dataUserInitState, action) {
  switch (action.type) {
    case UPGRADE_DATA_USER:
      return {
        ...state,
        mainData: action.payload.data,
        isNewUser: action.payload.isNewUser,
        isViewTraining: action.payload.isViewTraining
      }
    case UPGRADE_TOKEN_USER:
      return {
        ...state,
        tokenUser: action.payload.token
      }
    case SET_COUNT_ACTIVE_CONTESTS_USER:
      return {
        ...state,
        countActiveContest: action.payload.count
      }
    case SET_VALUE_IS_VIEW_TRAINING:
      return {
        ...state,
        isViewTraining: action.payload.value
      }
    case SET_VALUE_IS_MODERATOR:
      return {
        ...state,
        isModerator: action.payload.value
      }
    case SET_VALUE_IS_ADMIN_CONTEST:
      return {
        ...state,
        isAdminContest: action.payload.value
      }
    default:
      return state
  }
}
