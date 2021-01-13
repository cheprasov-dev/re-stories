import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function loadFileAPI (event, idUser) {
    const dataQuery = new FormData();
    dataQuery.append('file', event.target.files[0], event.target.files[0].name);
    dataQuery.append('vk_user_id', idUser);
    dataQuery.append('search', window.location.search);
    return await axios.post(getQueryURL('loadImage'), dataQuery)
}
