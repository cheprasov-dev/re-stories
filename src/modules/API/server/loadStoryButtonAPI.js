import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";
export async function loadStoryButtonAPI(event, idUser) {
  const dataQuery = new FormData();
  dataQuery.append('idUser', idUser)
  dataQuery.append('file', event.target.files[0], event.target.files[0].name);
  dataQuery.append('search', window.location.search);
  return await axios.post(getQueryURL('loadStoryButton'), dataQuery)
}
