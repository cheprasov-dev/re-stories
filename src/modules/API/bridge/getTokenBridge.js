import bridge from '@vkontakte/vk-bridge';

/*
    Получаем токкен
    type - тип запроса
    scope - параметры для запроса
    idGroup - индификатор группы
*/
export async function getTokenBridge({type, scope = '', idGroup = ''}) {
  let token;
  const idAPP = Number(process.env.REACT_APP_API_ID)
  switch (type) {
    case 'user_token': // получени токена пользователя
      token = await bridge.send("VKWebAppGetAuthToken", {"app_id": idAPP, "scope": scope});
      return token;
    case 'group_token': // получение токена группы
        token = await bridge.send("VKWebAppGetCommunityToken", {
        "app_id": idAPP, "group_id": idGroup, "scope": scope
      })
      return token;
    default:
      break;
  }
}
