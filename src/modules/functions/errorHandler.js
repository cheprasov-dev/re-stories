import React from 'react'
import {openAlertArbitraryError, openAlertErrorSettings} from "./openAlerts";

export function errorHandler ({error_type, dispatch, value}) {
  switch (error_type) {
    case 16:
      openAlertErrorSettings(value, dispatch)
      break
    case 'catchLoadImage':
      openAlertArbitraryError(value, dispatch)
      break
    default:
      break
  }
}
