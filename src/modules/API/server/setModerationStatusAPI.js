import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function setModerationStatusAPI(idContest, idModerators, status, comment, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('idContest', idContest)
  dataQuery.append('idModerators', idModerators)
  dataQuery.append('status', status)
  dataQuery.append('comment', comment)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('setModerationStatus'), dataQuery)
}
