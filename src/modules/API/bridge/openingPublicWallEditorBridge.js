import bridge from '@vkontakte/vk-bridge';

export function openingPublicWallEditorBridge({dataPublicWall, idContest, additional = {}}) {
  let prefix
  if (dataPublicWall.textWall.length > 0) prefix = '\n\n'
  else prefix = ''
  return bridge.send("VKWebAppShowWallPostBox", {
    "message": `${dataPublicWall.textWall} ${prefix} Участвуй по ссылке https://vk.com/app7486100#c=${idContest}&r=wall`,
    "attachments": `${dataPublicWall.backgroundWall},https://vk.com/app${process.env.REACT_APP_APP_ID}#/contest/${idContest}/?r=wall`,
    ...additional
  });
}
