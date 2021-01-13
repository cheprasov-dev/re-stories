import {
  GO_BACK,
  SET_ROUTE_TO_BACK,
  SET_ROUTING_TO_CONTEST,
  SET_ROUTING_TO_PERSONAL_ACCOUNT
} from '../actions/routinAction'

const { MAIN_ROUTE, MODAL_ROUTE, MODAL_CLOSE, SET_STATUS_USER } = require('../actions/routinAction')

export function mainRoute (view, panel) {
  return {
    type: MAIN_ROUTE,
    payload: {
      view,
      panel,
    }
  }
}

export function modalRoute (modalPage) {
  return {
    type: MODAL_ROUTE,
    payload: {
      modalPage
    }
  }
}

export function closeModalPage () {
  return {
    type: MODAL_CLOSE,
    payload: {
      modalPage: null
    }
  }
}

export function setStatusUser (status) {
  return {
    type: SET_STATUS_USER,
    payload: {
      status
    }
  }
}

export function setRoutingToContest (rout) {
  return {
    type: SET_ROUTING_TO_CONTEST,
    payload: {
      rout
    }
  }
}

export function setRoutingToPersonalAccount (rout) {
  return {
    type: SET_ROUTING_TO_PERSONAL_ACCOUNT,
    payload: {
      rout
    }
  }
}

export function setRouteToBack (view, panel) {
  return {
    type: SET_ROUTE_TO_BACK,
    payload: {
      view,
      panel
    }
  }
}

export function goBack () {
  return {
    type: GO_BACK,
  }
}


