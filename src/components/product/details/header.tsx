import React from "react"

import { View, Text, TouchableOpacity } from "react-native"

import { useRouter } from "expo-router"
import { Device } from "@/configs/device"
import { Product } from "@/@types/products-types"
import { NotificationReminder } from "@/components/notifications"
import { useScheduleNotification } from "@/hooks/useScheduleNotification"

type Props = Pick<Product, "brand" | "id">

export function Header({ brand, id }: Props) {
  const { scheduleNotification } = useScheduleNotification()

  const { back } = useRouter()

  return (
    <View className="w-full flex-row shadow-xl bg-slate-900 items-center justify-center pt-5 px-5 min-h-40">
      {Device.isAndroid && (
        <TouchableOpacity onPress={back}>
          <Text className="text-3xl">🔙</Text>
        </TouchableOpacity>
      )}
      <Text className="text-white font-thin text-4xl text-center mr-auto ml-auto">{brand}</Text>

      <NotificationReminder onPress={() => scheduleNotification(brand, id)} />
    </View>
  )
}
