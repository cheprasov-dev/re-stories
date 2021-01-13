import bridge from '@vkontakte/vk-bridge';

export async function getCitiesBridge(text, countryId, tokenUser) {
  return await bridge.send('VKWebAppCallAPIMethod', {
    "method": "database.getCities",
    "params": {
      "country_id": countryId,
      "q": text,
      "count": 20,
      "v": "5.124",
      "access_token": tokenUser,
      'lang': 'ru'
    }
  })
}
