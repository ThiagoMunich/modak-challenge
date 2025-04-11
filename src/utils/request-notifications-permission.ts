// utils/notifications.ts
import * as Notifications from "expo-notifications"

export async function requestNotificationPermission() {
  const { granted } = await Notifications.getPermissionsAsync()

  if (!granted) {
    const response = await Notifications.requestPermissionsAsync()
    return response.granted
  }

  return true
}
