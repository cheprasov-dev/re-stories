
export const dataUserInitState = {
  mainData: false,
  tokenUser: false,
  source: false,
  device: false,
  countActiveContest: false,
  isNewUser: false,
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

export const otherDataInitState = {
  textHeader: false,
}

export const alertsInitState = {
  activeAlert: null,
  snackbarSetting: null
}

export const flagsInitState = {
  isLoadContestsActiveTopic: false,
  isAllowedToUploadToken: false
}
