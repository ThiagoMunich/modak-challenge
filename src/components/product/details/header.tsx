import React from "react"

import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"

import { Product } from "@/@types/products-types"
import clsx from "clsx"
import { Device } from "@/configs/device"
import { useRouter } from "expo-router"

type Props = Pick<Product, "brand">

export function Header({ brand }: Props) {
  const { back } = useRouter()

  return (
    <View className="w-full flex-row shadow-xl bg-slate-900 items-center justify-center pt-5 px-5 min-h-40">
      {Device.isAndroid && (
        <TouchableOpacity className="mr-auto w-1/11" onPress={back}>
          <Text className="text-3xl">🔙</Text>
        </TouchableOpacity>
      )}
      <Text className="text-white font-thin text-5xl text-center w-ful">✨ {brand}</Text>
    </View>
  )
}
