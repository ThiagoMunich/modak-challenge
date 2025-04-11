import { useState } from "react"
import { Alert } from "react-native"
import * as Notifications from "expo-notifications"
import { requestNotificationPermission } from "@/utils/notifications"

export function useScheduleNotification() {
  const [loading, setLoading] = useState(false)

  const scheduleNotification = async () => {
    try {
      setLoading(true)

      const hasPermission = await requestNotificationPermission()

      if (!hasPermission) {
        Alert.alert("Permission required", "Enable notifications in settings.")
        return
      }

      // Agendar notificação
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "Hey! Don’t forget to purchase your product!",
        },
        trigger: {
          type: "timeInterval",
          seconds: 8,
        } as Notifications.TimeIntervalTriggerInput,
      })
    } catch (error) {
      console.error("Erro ao agendar notificação:", error)
    } finally {
      setLoading(false)
    }
  }

  return {
    scheduleNotification,
    loading,
  }
}
