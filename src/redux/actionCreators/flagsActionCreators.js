import { SWITCH_IS_LOAD_FLAG } from '../actions/flagsAction'

export const switchIsLoadFlag = (nameFlag, statusFlag) => ({
  type: SWITCH_IS_LOAD_FLAG, payload: { nameFlag, statusFlag }
})
