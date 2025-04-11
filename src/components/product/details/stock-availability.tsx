import React from "react"

import { Button, Text, View } from "react-native"

import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated"

import { Product } from "@/@types/products-types"
import { ThemedButton } from "@/components/shared/button"

type Props = Pick<Product, "stock">

export function StockAvailability({ stock }: Props) {
  const hasStock = stock > 0

  return (
    <Animated.View entering={FadeInDown.duration(600)} className="w-full px-5 mt-auto pb-20">
      {hasStock ? <CurrentStock stock={stock} /> : <NoStock />}
    </Animated.View>
  )
}

function CurrentStock({ stock }: Props) {
  return (
    <>
      <Text className="text-gray-800 text-lg text-center">ONLY</Text>
      <Text className="text-red-700 text-[160px] text-center font-black">{stock}</Text>
      <Text className="text-gray-800 text-lg text-center">REMAINING</Text>
    </>
  )
}

function NoStock() {
  return (
    <View className="items-center py-5 border-2 border-dashed border-red-700">
      <Animated.Text
        entering={SlideInDown.springify().mass(0.4).delay(200)}
        className="absolute right-0 -top-10 text-6xl py-3 -rotate-45"
      >
        🚀
      </Animated.Text>
      <Text className="text-gray-600">This item has just</Text>
      <Text className="text-red-700 text-center font-black text-4xl">SOLD OUT</Text>
    </View>
  )
}
