import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function getConnectedGroupsAPI (idUser, idsGroups) {
    const dataQuery = new FormData();
    dataQuery.append('vk_user_id', idUser);
    dataQuery.append('groups', idsGroups);
    dataQuery.append('search', window.location.search);
    return await axios.post(getQueryURL('getConnectedGroups'), dataQuery);
}
