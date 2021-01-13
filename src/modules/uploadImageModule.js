import {setFlagDisplayButton} from "../redux/actionCreators/dataSettingsContestActionCreators";
import {getTokenBridge} from "./API/bridge/getTokenBridge";
import {requestWrapper} from "./functions/requestWrapper";
import {getAlbumBridge} from "./API/bridge/getAlbumBridge";
import {openAlertErrorSettings, openSnackbarFileLoading} from "./functions/openAlerts";
import {getUploadServerBridge} from "./API/bridge/getUploadServerBridge";
import {loadImageOrganizerGroupAPI} from "./API/server/loadImageOrganizerGroupAPI";
import {savePhotoBridge} from "./API/bridge/savePhotoBridge";
import {getURLLoadFile} from "./functions/getURLLoadFile";

export async function uploadImageModule(event, type, dispatch, saveUrl, idGroup, idUser) {
  dispatch(setFlagDisplayButton(true))
  const file = event.currentTarget.files[0]
  const fileName = event.currentTarget.files[0].name

  const {access_token, scope, catchError: catchErrorToken} = await requestWrapper(getTokenBridge, {
    type: 'user_token',
    scope: 'photos, groups',
    idGroup
  })
  if (catchErrorToken.isError || !scope.includes('photos')) {
    openAlertErrorSettings('errorGetTokenLoadImage', dispatch)
  } else {
    const {catchError, response: resGetAlbums} = await requestWrapper(getAlbumBridge, {access_token, id: -idGroup})
    if (catchError.isError) {
      openAlertErrorSettings('errorSettingPhotoGroup', dispatch)
    } else {
      //TODO: позволить выбрать человеку в какой альбом сохранить фото
      const {items: albums} = resGetAlbums
      const idAlbum = albums[albums.length - 1].id
      const {
        response: {upload_url, album_id},
        catchError: errorUploadServerBridge
      } = await requestWrapper(getUploadServerBridge, {access_token, idAlbum, idGroup})
      if (errorUploadServerBridge.isError) {
        console.log(errorUploadServerBridge)// TODO: отработать ошибку
      } else {
        const {data, catchError: {isError}} = await requestWrapper(loadImageOrganizerGroupAPI, {
          idUser,
          upload_url,
          album_id,
          file,
          fileName
        })
        if (isError) {
          openAlertErrorSettings('errorSizeFile', dispatch)
        } else {
          if (data?.error) console.log(data?.error) // TODO: отработать ошибку
          else {
            const {
              catchError: {isError},
              response: resSavePhoto
            } = await requestWrapper(savePhotoBridge, {idAlbum: album_id, access_token, photo: data?.dataPhoto, idGroup})
            if (isError) {
              openAlertErrorSettings('errorLoadFile', dispatch)
            } else {
              const url = getURLLoadFile(resSavePhoto, type)
              if (url) {
                openSnackbarFileLoading(dispatch)
                saveUrl(url)
              } else {
                openAlertErrorSettings('errorLoadFile', dispatch)
              }
            }
          }
        }
      }
    }
  }

  dispatch(setFlagDisplayButton(false))
}
