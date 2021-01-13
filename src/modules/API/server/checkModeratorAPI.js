import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function checkModeratorAPI (idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('checkModerator'), dataQuery)
}
