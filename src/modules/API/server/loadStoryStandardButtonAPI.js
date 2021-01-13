import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function loadStoryStandardButtonAPI(dataUrl, idUser) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('data', dataUrl)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('loadStoryStandardButton'), dataQuery)
}
