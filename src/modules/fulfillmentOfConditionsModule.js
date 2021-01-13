import {subscribeToNotificationsBridge} from "./API/bridge/subscribeToNotificationsBridge";
import {subscribeToGroupBridge} from "./API/bridge/subscribeToGroupBridge";
import {openingPublicWallEditorBridge} from "./API/bridge/openingPublicWallEditorBridge";
import {openingStoryEditorBridge} from "./API/bridge/openingStoryEditorBridge";

export async function fulfillmentOfConditionsModule(type, idGroup, idContest, additionalValue) {

  let responseModule = {
    nameStatus: false,
    valueStatus: false,
    error: false
  }

  try {
    switch (type) {
      case 'conditionSubscribeToNotifications':
        let resSubscribeToNotifications = await subscribeToNotificationsBridge(idGroup)
        // TODO отправить результат
        return {
          ...responseModule,
          nameStatus: type,
          valueStatus: resSubscribeToNotifications.result
        }
      case 'conditionSubscribeToGroup':
        let resSubscribeToGroup = await subscribeToGroupBridge(idGroup)
        return {
          ...responseModule,
          nameStatus: type,
          valueStatus: resSubscribeToGroup.result
        }
      case "conditionWall":
        let resOpeningPublicWallEditor = await openingPublicWallEditorBridge({dataPublicWall: additionalValue, idContest})
        return {
          ...responseModule,
          nameStatus: type,
          valueStatus: resOpeningPublicWallEditor.post_id
        }
      case "conditionStories":
        await openingStoryEditorBridge({dataStory: additionalValue, idContest})
        return {
          ...responseModule,
          nameStatus: type,
          valueStatus: true
        }
      default:
        return;
    }

  } catch (error) {
    console.log(error)
    return {
      ...responseModule,
      error: true
    }
  }
}
