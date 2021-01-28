import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function getDataContestAPI ({idContest, idUser}) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)
  dataQuery.append('type', 'user')
  return await axios.post(getQueryURL('getDataContest'), dataQuery)
}
