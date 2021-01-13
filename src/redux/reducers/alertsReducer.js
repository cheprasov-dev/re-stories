import {CLOSE_ACTIVE_ALERT, ERROR_VALUE_FORM_SETTINGS_CONTEST, SET_SNACKBAR_SETTING} from '../actions/alertsAction'
import { alertsInitState } from '../initState'

export function alertsReducer (state=alertsInitState, action) {
  switch (action.type) {
    case ERROR_VALUE_FORM_SETTINGS_CONTEST:
      return {
        ...state,
        activeAlert: action.payload.alert
      }
    case CLOSE_ACTIVE_ALERT:
      return {
        ...state,
        activeAlert: null
      }
    case SET_SNACKBAR_SETTING:
      return {
        ...state,
        snackbarSetting: action.payload.snackbar
      }
    default:
      return state
  }
}
