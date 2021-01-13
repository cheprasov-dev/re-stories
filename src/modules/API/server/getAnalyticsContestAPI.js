import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function getAnalyticsContestAPI(idContest, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)
  return await axios.post(getQueryURL('getAnalyticsContest'), dataQuery)
}

export async function getAnalyticsContestPeriodAPI(idContest, dateStart, dateEnd, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('dateStart', dateStart)
  dataQuery.append('dateEnd', dateEnd)
  dataQuery.append('contest_id', idContest)
  return await axios.post(getQueryURL('getAnalyticsContestPeriod'), dataQuery)
}

export async function getAnalyticsByConditionAPI (idContest, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)
  return await axios.post(getQueryURL('getAnalyticsByConditions'), dataQuery)
}
