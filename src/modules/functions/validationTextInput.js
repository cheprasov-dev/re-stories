import {openSnackbarErrorLengthInput} from "./openAlerts";

export function validationTextInput(string, validateCount, dispatch, flag=true) {
  if (string.length > validateCount) {
    string = string.slice(0, validateCount)
    if (flag) openSnackbarErrorLengthInput(dispatch, validateCount)
  }

  if (string[string.length-2] === ' ') {
    return string.replace(/^\s*/,'').replace(/\s$/,'')
  } else {
    return string.replace(/^\s*/,'')
  }
}
