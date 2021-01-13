import bridge from "@vkontakte/vk-bridge";

export async function savePhotoBridge ({idAlbum, access_token, idGroup, photo }) {
  return await  bridge.send('VKWebAppCallAPIMethod', {
    method: 'photos.save',
    params: {
      album_id: idAlbum,
      access_token: access_token,
      server: photo.server,
      photos_list: photo.photos_list,
      hash: photo.hash,
      group_id: idGroup,
      lang: 'ru',
      v: 5.126
    }
  })
}
