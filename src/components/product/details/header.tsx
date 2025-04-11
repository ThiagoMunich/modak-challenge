import React from "react"

import { View, Text, TouchableOpacity } from "react-native"

import { useRouter } from "expo-router"
import { Device } from "@/configs/device"
import { Product } from "@/@types/products-types"
import { NotificationReminder } from "@/components/notifications"
import { useScheduleNotification } from "@/hooks/useScheduleNotification"

type Props = Pick<Product, "brand">

export function Header({ brand }: Props) {
  const { isLoading, scheduleNotification } = useScheduleNotification()

  const { back } = useRouter()

  return (
    <View className="w-full flex-row shadow-xl bg-slate-900 items-center justify-center pt-5 px-5 min-h-40">
      {Device.isAndroid && (
        <TouchableOpacity className="mr-auto w-1/11" onPress={back}>
          <Text className="text-3xl">🔙</Text>
        </TouchableOpacity>
      )}
      <Text className="text-white font-thin text-5xl text-center w-ful">✨ {brand}</Text>

      <NotificationReminder onPress={() => scheduleNotification(brand)} />
    </View>
  )
}
