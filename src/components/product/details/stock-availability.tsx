import React from "react"

import { Text } from "react-native"

import Animated, { FadeInDown } from "react-native-reanimated"

import { Product } from "@/@types/products-types"

type Props = Pick<Product, "stock">

export function StockAvailability({ stock }: Props) {
  return (
    <Animated.View entering={FadeInDown.duration(600)} className="w-full px-5 mt-auto pb-20">
      <Text className="text-gray-600 text-lg text-center">ONLY</Text>
      <Text className="text-red-700 text-[160px] text-center font-black">{stock}</Text>
      <Text className="text-gray-600 text-lg text-center">REMAINING</Text>
    </Animated.View>
  )
}
