import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function getParticipantsAPI ({idUser, idContest, page}) {
  const dataQuery = new FormData()
  dataQuery.append('vk_user_id', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)
  dataQuery.append('page', page)

  return await axios.post(getQueryURL('getParticipants'), dataQuery)
}
