import axios from "axios"
import {getQueryURL} from "../../functions/getQueryURL"

export async function loadImageOrganizerGroupAPI ({idUser, upload_url, album_id, file, fileName}) {
  const dataQuery = new FormData()
  dataQuery.append('file', file, fileName)
  dataQuery.append('album_id', album_id)
  dataQuery.append('idUser', idUser)
  dataQuery.append('upload_url', upload_url)
  dataQuery.append('search', window.location.search)
  return await axios.post(getQueryURL('loadImageOrganizerGroup'), dataQuery)
}
