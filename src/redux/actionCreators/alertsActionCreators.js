import {CLOSE_ACTIVE_ALERT, ERROR_VALUE_FORM_SETTINGS_CONTEST, SET_SNACKBAR_SETTING} from '../actions/alertsAction'

export function openAlert (alert) {
  return {
    type: ERROR_VALUE_FORM_SETTINGS_CONTEST,
    payload: {
      alert
    }
  }
}

export function setSnackbarSetting (snackbar) {
  return {
    type: SET_SNACKBAR_SETTING,
    payload: {
      snackbar
    }
  }
}

export function closeAlert () {
  return {
    type: CLOSE_ACTIVE_ALERT,
  }
}
