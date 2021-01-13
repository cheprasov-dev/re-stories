import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function setAnalyticsContestAPI ({idUser, source, device, idContest}) {
  const dataQuery = new FormData()
  dataQuery.append('source', source)
  dataQuery.append('idUser', idUser)
  dataQuery.append('idContest', idContest)
  dataQuery.append('device', device)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('setAnalyticsContest'), dataQuery)
}
