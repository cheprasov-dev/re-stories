import bridge from '@vkontakte/vk-bridge';

/*
    Функция получения информации о группах
*/

export async function getDataGroupsBridge(idGroups, token) {
    const {response} =  await bridge.send("VKWebAppCallAPIMethod", {
        "method": "groups.getById",
        "params": {
            "group_ids": `${idGroups.join(',')}`,
            "fields": "members_count",
            "v":"5.110",
            "access_token": `${token}`,
        }
    })

    return {response: response.filter(elem => elem.is_closed === 0)}
}
