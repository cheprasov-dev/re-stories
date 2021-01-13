import bridge from '@vkontakte/vk-bridge';

export async function createAlbumBridge ({access_token, idGroup}) {
  return await bridge.send('VKWebAppCallAPIMethod', {
    method: 'photos.createAlbum',
    params: {
      title: 'ReStories',
      upload_by_admins_only: 1,
      access_token: access_token,
      group_id: idGroup,
      v: 5.126
    }
  })
}
