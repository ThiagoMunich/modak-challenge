import { View, Text } from "react-native"
import React from "react"

export function ProductCard({ title }: any) {
  return (
    <View className="w-full h-40 bg-cyan-100">
      <Text>{title}</Text>
    </View>
  )
}
