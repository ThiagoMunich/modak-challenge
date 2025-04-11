// components/NotificationButton.tsx
import React from "react"
import { Button, Alert } from "react-native"
import * as Notifications from "expo-notifications"
import { requestNotificationPermission } from "@/utils/notifications"

export default function NotificationButton() {
  const handlePress = async () => {
    const hasPermission = await requestNotificationPermission()

    if (!hasPermission) {
      Alert.alert("Permission required", "Enable notifications in settings.")
      return
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Reminder",
        body: "Hey! Don’t forget to purchase your product!",
      },

      trigger: {
        type: "timeInterval",
        seconds: 5,
      } as Notifications.TimeIntervalTriggerInput,
    })
  }

  return <Button title="Remind me in 10 seconds" onPress={handlePress} />
}
