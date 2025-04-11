// hooks/useNotificationRedirect.ts
import { useEffect } from "react"
import { useRootNavigationState, useRouter } from "expo-router"
import * as Notifications from "expo-notifications"

export function useNotificationRedirect() {
  const router = useRouter()

  const rootNavigationState = useRootNavigationState()

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      const productId = response.notification.request.content.data.productId
      if (productId) {
        router.push(`/(products)/${productId}`)
      }
    })

    const checkInitialNotification = async () => {
      const response = await Notifications.getLastNotificationResponseAsync()

      const productId = response?.notification.request.content.data.productId

      if (productId) {
        setTimeout(() => {
          router.push(`/(products)/${productId}`)
        }, 500)
      }
    }

    checkInitialNotification()

    return () => {
      subscription.remove()
    }
  }, [])
}
