import bridge from '@vkontakte/vk-bridge'
import { getURLContest } from '../../functions/getURLContest'

export async function openingStoryEditorBridge({dataStory, idContest = null}) {
  const {
    backgroundType, backgroundStory, movingBackground, degreeRotation, stickerWidth,
    valueHorizontal, valueVertical, valueAlignment
  } = dataStory
  const link = `${getURLContest(idContest)}/?r=story`
  const props = {
    "background_type": `${backgroundType}`,
    "url": `${backgroundStory}`,
    "locked": Boolean(movingBackground),
    "stickers": [{
      "sticker_type": "renderable",
      "sticker": {
        "content_type": "image",
        "transform": {
          "rotation": Number(degreeRotation),
          "relation_width": Number(stickerWidth),
          "translation_x": Number(valueHorizontal),
          "translation_y": Number(valueVertical),
          "gravity": `${valueAlignment}`,
        },
        "clickable_zones": [{
          "action_type": "link",
          "tooltip_text_key": "Участвовать",
          "action": {
            "link": link,
            "tooltip_text_key": "open"
          },
          "clickable_area": [
            {"x": -30000, "y": -30000},
            {"x": 30000, "y": -30000},
            {"x": 30000, "y": 30000},
            {"x": -30000, "y": 30000}
          ]
        }],
        "original_width": 1,
        "original_height": 1,
        "can_delete": false
      }
    }]
  }
  if (dataStory.buttonStory.indexOf(process.env.REACT_APP_API_URL) > -1) {
    props.stickers[0].sticker.url = dataStory.buttonStory
  } else {
    props.stickers[0].sticker.blob = dataStory.buttonStory
  }
  return await bridge.send("VKWebAppShowStoryBox", {...props});
}
