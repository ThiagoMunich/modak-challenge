import React from "react"

import { Text } from "react-native"

import { Product } from "@/@types/products-types"
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated"

type Props = Pick<Product, "description">

export function Description({ description }: Props) {
  return (
    <Animated.View entering={FadeInUp.duration(600)} className="w-full mt-10 px-5">
      <Text className="text-gray-800 text-2xl mb-2">About this product</Text>

      <Text className="text-gray-800 text-xl">{description}</Text>
    </Animated.View>
  )
}
