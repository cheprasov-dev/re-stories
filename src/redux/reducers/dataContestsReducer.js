import {dataContestsInitState} from '../initState'
import {
  RESET_DATA_ACTIVE_CONTEST,
  SET_CONDITIONS_STATUSES,
  SET_DATA_ACTIVE_CONTEST,
  SET_DATA_POPULAR_CONTESTS,
  SET_ID_ACTIVE_CONTEST,
  SET_ID_ACTIVE_TOPIC,
  SET_IDS_TOPICS_WITH_CONTESTS,
  UPGRADE_CONDITION_STATUS,
  RESET_ID_ACTIVE_CONTEST,
  SET_ABRIDGED_DATA_CONTESTS,
  RESET_ABRIDGED_DATA_CONTESTS,
  RESET_CONDITIONS_STATUSES,
  RESET_IDS_TOPICS_WITH_CONTESTS,
  SET_DATA_PARTICIPANTS,
  SET_MODERATOR_COMMENTS,
  SET_PAGE_PARTICIPANTS, SET_COUNT_PARTICIPANTS, RESET_DATA_PARTICIPANTS,
} from '../actions/dataContestsAction'
import _isArray from 'lodash/isArray'
import _concat from 'lodash/concat'

export function dataContestsReducer(state = dataContestsInitState, action) {
  switch (action.type) {
    case SET_ID_ACTIVE_CONTEST:
      return {
        ...state,
        idActiveContest: action.payload.idContest
      }
    case SET_ID_ACTIVE_TOPIC:
      return {
        ...state,
        idActiveTopic: action.payload.idTopic
      }
    case SET_DATA_ACTIVE_CONTEST:
      return {
        ...state,
        dataActiveContest: action.payload.dataContest
      }
    case SET_DATA_POPULAR_CONTESTS:
      return {
        ...state,
        dataPopularContests: action.payload.dataContests
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_CONDITIONS_STATUSES:
      return {
        ...state,
        conditionsStatuses: action.payload.conditionsStatuses
      }
    case UPGRADE_CONDITION_STATUS:
      return {
        ...state,
        conditionsStatuses: {
          ...state.conditionsStatuses,
          [`${action.payload.nameStatus}`]: action.payload.valueStatus
        }
      }
    case RESET_CONDITIONS_STATUSES:
      return {
        ...state,
        conditionsStatuses: false
      }
//--------------------------------------------------------------------------------------------------------------------//
    case RESET_DATA_ACTIVE_CONTEST:
      return {
        ...state,
        dataActiveContest: false,
        conditionsStatuses: false
      }
    case RESET_ID_ACTIVE_CONTEST:
      return {
        ...state,
        idActiveContest: false,
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_ABRIDGED_DATA_CONTESTS:
      return {
        ...state,
        abridgedDataContests: action.payload.abridgedDataContests,
      }
    case RESET_ABRIDGED_DATA_CONTESTS:
      return {
        ...state,
        abridgedDataContests: false,
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_IDS_TOPICS_WITH_CONTESTS:
      return {
        ...state,
        idsTopicsWithContests: action.payload.idTopics
      }
    case RESET_IDS_TOPICS_WITH_CONTESTS:
      return {
        ...state,
        idsTopicsWithContests: false
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_DATA_PARTICIPANTS:
      let copyData
      if (_isArray(state.dataParticipants)) {
        copyData = state.dataParticipants.slice()
        copyData = (_concat(copyData, action.payload.data))
      } else {
        copyData = action.payload.data
      }
      return {
        ...state,
        dataParticipants: copyData
      }
    case RESET_DATA_PARTICIPANTS:
      return {
        ...state,
        dataParticipants: action.payload.data
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_COUNT_PARTICIPANTS:
      return {
        ...state,
        countParticipants: action.payload.count
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_MODERATOR_COMMENTS:
      return {
        ...state,
        moderatorComments: action.payload.comments
      }
//--------------------------------------------------------------------------------------------------------------------//
    case SET_PAGE_PARTICIPANTS:
      return {
        ...state,
        pageParticipants: action.payload.page
      }
    default:
      return state
  }
}
