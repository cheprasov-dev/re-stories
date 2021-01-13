import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function getConditionsStatusesAPI (idUser, idContest) {
  const dataQuery = new FormData()
  dataQuery.append('vk_user_id', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)
  return await axios.post(getQueryURL('getConditionsStatuses'), dataQuery)
}
