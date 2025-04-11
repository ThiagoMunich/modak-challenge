import { useState } from "react"
import { Alert } from "react-native"
import * as Notifications from "expo-notifications"
import { requestNotificationPermission } from "@/utils/request-notifications-permission"

export function useScheduleNotification() {
  const [isLoading, setIsLoading] = useState(false)

  const scheduleNotification = async (brand: string) => {
    try {
      setIsLoading(true)

      const hasPermission = await requestNotificationPermission()

      if (!hasPermission) {
        Alert.alert("Permission required", "Enable notifications in settings.")
        return
      }
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Notificação 🔔",
          body: `${brand} is now available ✅`,
        },
        trigger: {
          type: "timeInterval",
          seconds: 5,
        } as Notifications.TimeIntervalTriggerInput,
      })
    } catch (error) {
      console.error("Erro ao agendar notificação:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    scheduleNotification,
    isLoading,
  }
}
