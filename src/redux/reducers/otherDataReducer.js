import { otherDataInitState } from '../initState'

const SET_TEXT_HEADER = 'OTHER_DATA/SET_TEXT_HEADER';

export const setTextHeader = (textHeader) => ({ type: SET_TEXT_HEADER, payload: { textHeader } })

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
