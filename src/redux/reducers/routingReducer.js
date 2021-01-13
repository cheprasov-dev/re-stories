import {
  VIEW_STATUS,
  VIEW_ORGANIZER,
  VIEW_PARTICIPANT,
  VIEW_CONTEST,
  VIEW_SETTINGS_CONTEST, VIEW_TRAINING_SECTION, VIEW_BUNG, VIEW_MODERATORS
} from '../constants/routingConstants'
import {routingInitState} from '../initState'
import {
  MAIN_ROUTE,
  MODAL_ROUTE,
  MODAL_CLOSE,
  SET_STATUS_USER,
  SET_ROUTING_TO_CONTEST,
  SET_ROUTING_TO_PERSONAL_ACCOUNT, SET_ROUTE_TO_BACK, GO_BACK
} from '../actions/routinAction'

export function routingReducer(state = routingInitState, action) {
  switch (action.type) {
    case MAIN_ROUTE:
      let view = action.payload.view
      let panel = action.payload.panel
      switch (view) {
        case VIEW_STATUS:
          return {
            ...state,
            activeView: view,
            activePanel_status: panel,
            statusUser: false,
          }
        case VIEW_ORGANIZER:
          return {
            ...state,
            activeView: view,
            activePanel_organizer: panel,
            statusUser: VIEW_ORGANIZER,
          }
        case VIEW_PARTICIPANT:
          return {
            ...state,
            activeView: view,
            activePanel_participant: panel,
            statusUser: VIEW_PARTICIPANT,
          }
        case VIEW_CONTEST:
          return {
            ...state,
            activeView: view,
            activePanel_contest: panel,
          }
        case VIEW_SETTINGS_CONTEST:
          return {
            ...state,
            activeView: view,
            activePanel_settings: panel,
          }
        case VIEW_TRAINING_SECTION:
          return {
            ...state,
            activeView: view,
            activePanel_training: panel,
          }
        case VIEW_MODERATORS:
          return {
            ...state,
            activeView: view,
            activePanel_moderators: panel,
          }
        case VIEW_BUNG:
          return {
            ...state,
            activeView: view,
            activePanel_bung: panel,
          }
        default:
          return {
            ...state,
            activeView: false,
          }
      }
    case MODAL_ROUTE:
      return {
        ...state,
        activeModalPage: action.payload.modalPage
      }
    case MODAL_CLOSE:
      return {
        ...state,
        activeModalPage: action.payload.modalPage
      }
    case SET_STATUS_USER:
      return {
        ...state,
        statusUser: action.payload.status
      }
    case SET_ROUTING_TO_CONTEST:
      return {
        ...state,
        routeToContest: action.payload.rout
      }
    case SET_ROUTING_TO_PERSONAL_ACCOUNT:
      return {
        ...state,
        routeToPersonalAccount: action.payload.rout
      }
    case SET_ROUTE_TO_BACK:
      let pushRouteToBack = state.routeToBack.slice()
      pushRouteToBack.push({
        view: action.payload.view,
        panel: action.payload.panel
      })
      return {
        ...state,
        routeToBack: pushRouteToBack
      }
    case GO_BACK:
      let popRouteToBack = state.routeToBack.slice()
      popRouteToBack.pop()
      return {
        ...state,
        routeToBack: popRouteToBack
      }
    default:
      return state
  }
}
