import bridge from '@vkontakte/vk-bridge';

export async function getParticipantsDataBridge({idsUser, tokenUser}) {
  return await bridge.send('VKWebAppCallAPIMethod', {
    method: "users.get",
    params: {
      user_ids: idsUser,
      fields: 'photo_50',
      v: "5.122",
      access_token: tokenUser,
    }
  })
}
