import {
  PANEL_TOPICS,
  PANEL_CONTEST,
  PANEL_SELECTION_STATUS,
  PANEL_ORGANIZER_GROUPS,
  PANEL_SETTINGS_CONTEST,
  PANEL_TRAINING_CONTESTS,
  PANEL_ENGINEERING_WORKS,
  PANEL_MODERATORS_GROUPS,
} from './constants/routingConstants'

export const routingInitState = {
  activeView: null,
  activePanel_status: PANEL_SELECTION_STATUS,
  activePanel_organizer: PANEL_ORGANIZER_GROUPS,
  activePanel_participant: PANEL_TOPICS,
  activePanel_contest: PANEL_CONTEST,
  activePanel_settings: PANEL_SETTINGS_CONTEST,
  activePanel_training: PANEL_TRAINING_CONTESTS,
  activePanel_moderators: PANEL_MODERATORS_GROUPS,
  activePanel_bung: PANEL_ENGINEERING_WORKS,
  activeModalPage: null,
  statusUser: false,
  routeToContest: false,
  routeToPersonalAccount: false,
  routeToBack: []
}

export const errorsInitState = {
  errorInitUser: false,
  errorGetDataConnectedGroups: false,
  errorGetDataGroupsToConnect: false,
  errorGetContests: false,
  errorGetDataContest: false,
  errorGetDataParticipant: false,

  errorPageTopics: false,

  errorData: {
    cod: null,
    type: null,
    message: null,
    source: null,
    place: null
  }
}

export const dataUserInitState = {
  isModerator: null,
  isAdminContest: null,
  mainData: false,
  tokenUser: false,
  tokenGroup: false,
  countActiveContest: false,
  isNewUser: false,
  isViewTraining: false
}

export const dataGroupsInitState = {
  idActiveGroup: false,
  valuePaidContests: false,
  dataConnectedGroups: null,
  dataGroupsToConnect: false,
  idsGroupsUserAdmin: false,
  idsGroupsConnected: false,
  idsGroupsToConnect: false,
}

export const dataContestsInitState = {
  idActiveContest: false,
  idActiveTopic: false,
  idsTopicsWithContests: false,

  dataContestsActiveGroup: false,
  dataContestsActiveTopic: false,
  dataContestsActiveUser: false,
  moderatorComments: false,
  abridgedDataContests: false,
  dataParticipants: false,
  countParticipants: false,
  pageParticipants: 1,
}

export const dataSettingsContestInitState = {
  settingsContest: false,
  settingsStory: false,
  settingsPublicWall: false,
  flagDisplayButton: false,
  region: {
    country: null,
    city: null
  }
}

export const otherDataInitState = {
  textHeader: false,
  textSearchForModal: '',
}

export const alertsInitState = {
  activeAlert: null,
  snackbarSetting: null
}

export const flagsInitState = {
  isLoadContestsActiveTopic: false,
  isAllowedToUploadToken: false
}

export const analyticsInitState = {
  analyticsContest: false,
  analyticsPeriodContest: false,
  analyticsByCondition: false,
  source: false,
  device: false,
}
