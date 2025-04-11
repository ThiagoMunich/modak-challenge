// utils/notifications.ts
import * as Notifications from "expo-notifications"

export async function requestNotificationPermission() {
  const settings = await Notifications.getPermissionsAsync()

  if (!settings.granted) {
    const response = await Notifications.requestPermissionsAsync()
    return response.granted
  }

  return true
}
