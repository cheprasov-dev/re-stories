import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function getTopicsAPI(idUser) {
  const dataQuery = new FormData()
  dataQuery.append('vk_user_id', idUser)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('getTopics'), dataQuery)
}
