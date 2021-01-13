import {getTokenBridge} from "./API/bridge/getTokenBridge";
import {connectGroupAPI} from "./API/server/connectGroupAPI";
import {getDataGroupsBridge} from "./API/bridge/getDataGroupsBridge";

export async function connectGroupModule(userId, idGroup) {
  let responseModule = {
    dataConnectGroup: false,
    tokenGroup: false,
    error: false,
  }

  try {
    const {access_token} = await getTokenBridge({type: 'group_token', scope: 'manage', idGroup})
    const {data: {error}} = await connectGroupAPI(userId, idGroup, access_token)
    if (!error) {
      let {response} = await getDataGroupsBridge([idGroup], access_token)
      responseModule = {
        ...responseModule,
        dataConnectGroup: response,
        tokenGroup: access_token,
      }
    } else {
      responseModule = {
        ...responseModule,
        error: error,
      }
    }
    return responseModule
  } catch (error) {
    console.log(error)
    return {
      ...responseModule,
      error,
    }
  }
}
