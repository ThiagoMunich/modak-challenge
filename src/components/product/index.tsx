import React from "react"

import { View, Text, Image, TouchableOpacity } from "react-native"

export function ProductCard({ title, price, thumbnail, onPress }: any) {
  return (
    <TouchableOpacity
      className="w-full h-32 bg-white rounded-tl-3xl rounded-br-3xl shadow-md flex-row"
      onPress={onPress}
    >
      <Image source={{ uri: thumbnail }} className="w-32 h-full" />

      <View className="flex-1 p-4">
        <Text className="text-xl font-bold text-gray-800" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-2xl mt-auto ml-auto text-emerald-500 font-black">${price}</Text>
      </View>
    </TouchableOpacity>
  )
}
