import bridge from "@vkontakte/vk-bridge";

export function subscribeToNotificationsBridge (idGroups) {
  return bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": Number(idGroups)});
}
