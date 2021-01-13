import bridge from '@vkontakte/vk-bridge';

export async function getUploadServerBridge ({access_token, idGroup, idAlbum}) {
  return await  bridge.send('VKWebAppCallAPIMethod', {
    "method": "photos.getUploadServer",
    "params": {
      'album_id': idAlbum,
      'access_token': access_token,
      'group_id': idGroup,
      'v': 5.126
    }
  })
}
