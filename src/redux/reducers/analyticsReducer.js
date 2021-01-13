import { analyticsInitState } from '../initState'
import {
  SET_ANALYTICS_BY_CONDITION,
  SET_ANALYTICS_CONTEST,
  SET_ANALYTICS_PERIOD_CONTEST,
  SET_DEVICE,
  SET_SOURCE
} from "../actions/analyticsAction";

export function analyticsReducer (state=analyticsInitState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload.source
      }
    case SET_DEVICE:
      return {
        ...state,
        device: action.payload.device
      }
    case SET_ANALYTICS_CONTEST:
      return {
        ...state,
        analyticsContest: action.payload.dataAnalytics
      }
    case SET_ANALYTICS_PERIOD_CONTEST:
      return {
        ...state,
        analyticsPeriodContest: action.payload.dataAnalytics
      }
    case SET_ANALYTICS_BY_CONDITION:
      return {
        ...state,
        analyticsByCondition: action.payload.dataAnalytics
      }
    default:
      return state
  }
}
