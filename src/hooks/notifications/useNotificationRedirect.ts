// hooks/useNotificationRedirect.ts
import { useEffect } from "react"
import { useRouter } from "expo-router"
import * as Notifications from "expo-notifications"

export function useNotificationRedirect() {
  const router = useRouter()

  const onNavigate = (id: number) => {
    setTimeout(() => {
      router.push(`/(products)/${id}`)
    }, 500)
  }

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      const productId = response?.notification.request.content.data.productId
      if (productId) {
        onNavigate(productId)
      }
    })

    const checkInitialNotification = async () => {
      const response = await Notifications.getLastNotificationResponseAsync()

      const productId = response?.notification.request.content.data.productId

      if (productId) {
        onNavigate(productId)
      }
    }

    checkInitialNotification()

    return () => {
      subscription.remove()
    }
  }, [])
}
