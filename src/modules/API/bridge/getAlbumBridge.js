import bridge from '@vkontakte/vk-bridge'

export async function getAlbumBridge ({access_token, id}) {
  return await bridge.send('VKWebAppCallAPIMethod', {
    method: 'photos.getAlbums',
    params: {
      need_system: 1,
      access_token: access_token,
      owner_id: id,
      v: 5.126
    }
  })
}
