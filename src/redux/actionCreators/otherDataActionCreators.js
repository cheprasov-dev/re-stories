const { SET_TEXT_HEADER, UPGRADE_TEXT_SEARCH_FOR_MODAL } = require('../actions/otherDataAction')

export function setTextHeader (textHeader) {
  return {
    type: SET_TEXT_HEADER,
    payload: {
      textHeader,
    }
  }
}

export function upgradeTextSearchForModal (value) {
  return {
    type: UPGRADE_TEXT_SEARCH_FOR_MODAL,
    payload: {
      value,
    }
  }
}
