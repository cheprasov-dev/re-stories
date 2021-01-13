import bridge from "@vkontakte/vk-bridge";

/*
    bridge запрос на получение информации о пользователе
*/

export async function getDataUserBridge  ()  {
    return await bridge.send('VKWebAppGetUserInfo', {})
}
