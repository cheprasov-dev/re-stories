import bridge from '@vkontakte/vk-bridge'

export const getDataGroupBridge = async (idGroup) => {
  return await bridge.send('VKWebAppGetGroupInfo', {"group_id": Number(idGroup)});
}
