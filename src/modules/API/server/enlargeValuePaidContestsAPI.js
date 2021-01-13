import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function enlargeValuePaidContestsAPI(idGroup, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('id_group', idGroup)
  dataQuery.append('id_user', idUser)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('enlargeValuePaidContests'), dataQuery)
}
