import {
  SET_COUNT_ACTIVE_CONTESTS_USER, SET_VALUE_IS_ADMIN_CONTEST,
  SET_VALUE_IS_VIEW_TRAINING, SET_VALUE_IS_MODERATOR,
  UPGRADE_DATA_USER, UPGRADE_TOKEN_USER
} from '../actions/dataUserAction'

export const upgradeDataUser = (data, isNewUser, isViewTraining) => {
  return {type: UPGRADE_DATA_USER, payload: {data, isNewUser, isViewTraining}}
}

export const upgradeTokenUser = (token) => ({type: UPGRADE_TOKEN_USER, payload: {token}})

export const setCountActiveContestsUser = (count) => ({type: SET_COUNT_ACTIVE_CONTESTS_USER, payload: {count}})

export const setValueIsViewTraining = (value) => ({type: SET_VALUE_IS_VIEW_TRAINING, payload: {value}})

export const setValueIsModerator = (value) => ({type: SET_VALUE_IS_MODERATOR, payload: {value}})

export const setValueIsAdminContest = (value) => ({type: SET_VALUE_IS_ADMIN_CONTEST, payload: {value}})
