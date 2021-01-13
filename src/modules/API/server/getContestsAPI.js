import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function getContestsAPI(id, idUser, type) {// получаем конкурсы в группе
  const dataQuery = new FormData();
  dataQuery.append('search', window.location.search);
  dataQuery.append('group_id', id);
  dataQuery.append('topic_id', id);
  dataQuery.append('user_id', idUser);
  dataQuery.append('type', type);
  return await axios.post(getQueryURL('getContests'), dataQuery)
}
