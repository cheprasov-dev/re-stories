import axios from 'axios'
import {getQueryURL} from "../../functions/getQueryURL";

export async function addContestAPI (idUser, idGroup, data) {
  const settingsContest = JSON.stringify(data.settingsContest);
  const settingsStory = JSON.stringify(data.settingsStory);
  const settingsPublicWall = JSON.stringify(data.settingsPublicWall);
  const dataQuery = new FormData()
  dataQuery.append('vk_user_id', idUser);
  dataQuery.append('group_id', idGroup);
  dataQuery.append('settingsContest', settingsContest);
  dataQuery.append('settingsStory', settingsStory);
  dataQuery.append('settingsPublicWall', settingsPublicWall);
  dataQuery.append('search', window.location.search);
  return await axios.post(getQueryURL('addContest'), dataQuery)
}
