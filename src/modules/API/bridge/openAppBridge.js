import bridge from '@vkontakte/vk-bridge'

export function openAppBridge ({page, location = ''}) {
  bridge.send("VKWebAppOpenApp", {"app_id": page, "location": location})
}
