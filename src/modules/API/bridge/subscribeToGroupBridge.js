import bridge from "@vkontakte/vk-bridge";

export function subscribeToGroupBridge(idGroup) {
  return bridge.send("VKWebAppJoinGroup", {"group_id": Number(idGroup)});
}
