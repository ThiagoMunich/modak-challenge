import React from "react"

import { View, Text } from "react-native"

import { Product } from "@/@types/products-types"

type Props = Pick<Product, "brand">

export function Header({ brand }: Props) {
  return (
    <View className="w-full bg-slate-900 items-center py-10 px-2">
      <Text className="text-white font-thin text-5xl">✨ {brand}</Text>
    </View>
  )
}
