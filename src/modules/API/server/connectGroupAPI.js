import axios from "axios"
import {getQueryURL} from "../../functions/getQueryURL"

/*
    Запрос на добавление группы в БД (подключение группы)
    Данные:
        id - индификатор пользователя
        search - уникальный индификатора
        type - тип запроса
    Ожидаемый ответ:
        [{Стандартный набор + members_count: members_count,} .... + data new group , error: num_error}, ...]
        Стандартный набор + members_count: members_count - читать в документации
                                                            VK https://vk.com/dev/groups.getById
        data new group - данные добавленного сообщества
        error - код ошибки
    Структура ответа:
*/

export async function connectGroupAPI (idUser, groupId, accessTokenGroup) {
    const dataQuery = new FormData();
    dataQuery.append('vk_user_id', idUser);
    dataQuery.append('group_id', groupId);
    dataQuery.append('access_token', accessTokenGroup);
    dataQuery.append('search', window.location.search);
    return await axios.post(getQueryURL('connectGroup'), dataQuery)
}
