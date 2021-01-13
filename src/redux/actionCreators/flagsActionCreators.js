import { SWITCH_IS_LOAD_FLAG } from '../actions/flagsAction'

export function switchIsLoadFlag (nameFlag, statusFlag) {
  return {
    type: SWITCH_IS_LOAD_FLAG,
    payload: {
      nameFlag,
      statusFlag
    }
  }
}
