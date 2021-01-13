import bridge from '@vkontakte/vk-bridge'

export async function openingStoryEditorBridge({dataStory, idContest = null}) {
  const props = {
    "background_type": `${dataStory.backgroundType}`,
    "url": `${dataStory.backgroundStory}`,
    "locked": Boolean(dataStory.movingBackground),
    "stickers": [{
      "sticker_type": "renderable",
      "sticker": {
        "content_type": "image",
        "transform": {
          "rotation": Number(dataStory.degreeRotation),
          "relation_width": Number(dataStory.stickerWidth),
          "translation_x": Number(dataStory.valueHorizontal),
          "translation_y": Number(dataStory.valueVertical),
          "gravity": `${dataStory.valueAlignment}`,
        },
        "clickable_zones": [{
          "action_type": "link",
          "tooltip_text_key": "Участвовать",
          "action": {
            "link": `https://vk.com/app7486100#c=${idContest}&r=story`,
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
