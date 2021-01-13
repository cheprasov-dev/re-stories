import {
  SET_ANALYTICS_BY_CONDITION,
  SET_ANALYTICS_CONTEST,
  SET_ANALYTICS_PERIOD_CONTEST,
  SET_DEVICE,
  SET_SOURCE
} from "../actions/analyticsAction";

export function setSource (source) {
  return {
    type: SET_SOURCE,
    payload: {
      source
    }
  }
}

export function setDevice (device) {
  return {
    type: SET_DEVICE,
    payload: {
      device
    }
  }
}

export function setAnalyticsContest (dataAnalytics) {
  return {
    type: SET_ANALYTICS_CONTEST,
    payload: {
      dataAnalytics
    }
  }
}

export function setAnalyticsPeriodContest (dataAnalytics) {
  return {
    type: SET_ANALYTICS_PERIOD_CONTEST,
    payload: {
      dataAnalytics
    }
  }
}

export function setAnalyticsByCondition (dataAnalytics) {
  return {
    type: SET_ANALYTICS_BY_CONDITION,
    payload: {
      dataAnalytics
    }
  }
}
