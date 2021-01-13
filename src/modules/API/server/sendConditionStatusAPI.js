import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function sendConditionStatusAPI (idUser, idContest, nameStatus, valueStatus) {
  const dataQuery = new FormData();
  dataQuery.append('vk_user_id', idUser);
  dataQuery.append('search', window.location.search);
  dataQuery.append('idContest', idContest);

  dataQuery.append('nameStatus', nameStatus);
  dataQuery.append('valueStatus', valueStatus);

  return await axios.post(getQueryURL('sendConditionStatus'), dataQuery)
}
