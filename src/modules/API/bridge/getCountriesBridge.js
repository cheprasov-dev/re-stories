import bridge from '@vkontakte/vk-bridge';

export async function getCountriesBridge(tokenUser) {
  return await bridge.send('VKWebAppCallAPIMethod', {
    "method": "database.getCountries",
    "params": {
      "v": "5.124",
      "access_token": tokenUser,
      'lang': 'ru'
    }
  })
}
