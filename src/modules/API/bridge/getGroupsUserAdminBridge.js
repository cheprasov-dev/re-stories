import bridge from '@vkontakte/vk-bridge';

/*
    Получение индификаторов групп в которых пользователь администратор
    Данные:
        userID - индификатор пользователя
        token - токкен пользователя
    Ожидаемый данные в ответе:
        [id_group1, id_group1, ..., id_groupN ] - массив индификаторов групп
*/

export async function getGroupsUserAdminBridge (userID, token) {
    return await bridge.send("VKWebAppCallAPIMethod", {
        "method": "groups.get",
        "request_id": 'get_user_groups',
        "params": {
            "user_id": `${userID}`,
            "filter": "admin",
            "count": 1000,
            "v":"5.103",
            "access_token": `${token}`,
        }
    });
}
