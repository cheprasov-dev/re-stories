import { flagsInitState } from '../initState'
import { SWITCH_IS_LOAD_FLAG } from '../actions/flagsAction'

export function flagsReducer (state = flagsInitState, action) {
  switch (action.type) {
    case SWITCH_IS_LOAD_FLAG:
      return {
        ...state,
        [`${action.payload.nameFlag}`]: action.payload.statusFlag
      }
    default:
      return state
  }
}
