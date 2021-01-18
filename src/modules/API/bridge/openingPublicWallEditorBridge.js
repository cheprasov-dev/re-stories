import bridge from '@vkontakte/vk-bridge';
import { getURLContest } from '../../functions/getURLContest'

export function openingPublicWallEditorBridge({dataPublicWall, idContest, additional = {}}) {
  let prefix
  if (dataPublicWall.textWall.length > 0) prefix = '\n\n'
  else prefix = ''
  const link = `${getURLContest(idContest)}/?r=wall`
  return bridge.send("VKWebAppShowWallPostBox", {
    "message": `${dataPublicWall.textWall} ${prefix} Участвуй по ссылке ${link}`,
    "attachments": `${dataPublicWall.backgroundWall}, ${link}`,
    ...additional
  });
}
