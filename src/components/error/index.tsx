import React from "react"
import { View, Text } from "react-native"

type Props = {
  error: Error
}

export function ErrorFallback({ error }: Props) {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <Text className="text-red-600 font-bold text-xl">Something went wrong 😢</Text>
      <Text className="text-center mt-2 text-gray-700">{error.message}</Text>
    </View>
  )
}
