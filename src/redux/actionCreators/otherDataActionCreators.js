const { SET_TEXT_HEADER } = require('../actions/otherDataAction')

export function setTextHeader (textHeader) {
  return {
    type: SET_TEXT_HEADER,
    payload: {
      textHeader,
    }
  }
}
