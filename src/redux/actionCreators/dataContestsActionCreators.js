import {
  RESET_DATA_ACTIVE_CONTEST,
  RESET_ID_ACTIVE_CONTEST,
  SET_CONDITIONS_STATUSES,
  SET_DATA_ACTIVE_CONTEST,
  SET_DATA_POPULAR_CONTESTS,
  SET_ID_ACTIVE_CONTEST,
  SET_ID_ACTIVE_TOPIC,
  SET_IDS_TOPICS_WITH_CONTESTS,
  UPGRADE_CONDITION_STATUS,
  SET_ABRIDGED_DATA_CONTESTS,
  RESET_ABRIDGED_DATA_CONTESTS,
  RESET_CONDITIONS_STATUSES,
  RESET_IDS_TOPICS_WITH_CONTESTS,
  SET_DATA_PARTICIPANTS,
  SET_PAGE_PARTICIPANTS, SET_COUNT_PARTICIPANTS, RESET_DATA_PARTICIPANTS,
} from '../actions/dataContestsAction'

export const setIdActiveContest = (idContest) => ({type: SET_ID_ACTIVE_CONTEST, payload: {idContest}})
export const resetIdActiveContest = () => ({type: RESET_ID_ACTIVE_CONTEST})

//-----------------------------------------------------------------------------

export const setIdActiveTopic = (idTopic) => ({type: SET_ID_ACTIVE_TOPIC, payload: {idTopic}})

//-----------------------------------------------------------------------------

export const setDataActiveContest = (dataContest) => ({type: SET_DATA_ACTIVE_CONTEST, payload: {dataContest}})
export const resetDataActiveContest = () => ({type: RESET_DATA_ACTIVE_CONTEST})

//-----------------------------------------------------------------------------

export const setDataPopularContests = (dataContests) => ({type: SET_DATA_POPULAR_CONTESTS, payload: {dataContests}})

//-----------------------------------------------------------------------------

export const setAbridgedDataContests = (abridgedDataContests) => ({
  type: SET_ABRIDGED_DATA_CONTESTS,
  payload: {abridgedDataContests}
})
export const resetAbridgedDataContests = () => ({type: RESET_ABRIDGED_DATA_CONTESTS})

//-----------------------------------------------------------------------------

export const setConditionsStatuses = (conditionsStatuses) => ({
  type: SET_CONDITIONS_STATUSES,
  payload: {conditionsStatuses}
})
export const upgradeConditionStatus = (nameStatus, valueStatus) => ({
  type: UPGRADE_CONDITION_STATUS,
  payload: {nameStatus, valueStatus,}
})
export const resetConditionsStatuses = () => ({type: RESET_CONDITIONS_STATUSES})

//-----------------------------------------------------------------------------

export const setIdsTopicsWithContests = (idTopics) => ({type: SET_IDS_TOPICS_WITH_CONTESTS, payload: {idTopics}})
export const resetIdsTopicsWithContests = () => ({type: RESET_IDS_TOPICS_WITH_CONTESTS})

//-----------------------------------------------------------------------------

export const setDataParticipants = (data) => ({type: SET_DATA_PARTICIPANTS,  payload: {data}})
export const resetDataParticipants = (data) => ({type: RESET_DATA_PARTICIPANTS,  payload: {data}})

//-----------------------------------------------------------------------------

export const setCountParticipants = (count) => ({type: SET_COUNT_PARTICIPANTS,  payload: {count}})
export const setPageParticipants = (page) => ({type: SET_PAGE_PARTICIPANTS, payload: {page}})

//-----------------------------------------------------------------------------


