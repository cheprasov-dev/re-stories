import {
  SET_COUNT_ACTIVE_CONTESTS_USER, SET_DEVICE, SET_SOURCE, UPGRADE_DATA_USER
} from '../actions/dataUserAction'

export const upgradeDataUser = (data, isNewUser) => {
  return {type: UPGRADE_DATA_USER, payload: {data, isNewUser}}
}

export const setCountActiveContestsUser = (count) => ({type: SET_COUNT_ACTIVE_CONTESTS_USER, payload: {count}})

export const setSource = (source) => ({ type: SET_SOURCE, payload: { source } })

export const setDevice = (device) => ({ type: SET_DEVICE, payload: { device } })
