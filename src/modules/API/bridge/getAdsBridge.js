import bridge from '@vkontakte/vk-bridge'

export const getAdsBridge = async () => {
  return await bridge.send('VKWebAppGetAds', {});
}
