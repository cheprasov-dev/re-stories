import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function checkAdminContestAPI(idContest, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('id_contest', idContest)
  dataQuery.append('id_user', idUser)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('checkAdminContest'), dataQuery)
}
