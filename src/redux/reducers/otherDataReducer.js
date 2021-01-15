import { otherDataInitState } from '../initState'
import { SET_TEXT_HEADER } from '../actions/otherDataAction'

export function otherDataReducer (state = otherDataInitState, action) {
  switch (action.type) {
    case SET_TEXT_HEADER:
      return {
        ...state,
        textHeader: action.payload.textHeader,
      }
    default:
      return state
  }
}
