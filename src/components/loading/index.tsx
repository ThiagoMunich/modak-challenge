import React from "react"
import { View, Text, ActivityIndicator } from "react-native"

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
      <Text className="text-base text-green-800">Loading...</Text>
    </View>
  )
}
