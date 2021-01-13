import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function addUserAPI (id) {
    const dataQuery = new FormData();
    dataQuery.append('vk_user_id', id);
    dataQuery.append('search', window.location.search);
    return await axios.post(getQueryURL('addUser'), dataQuery);
}
