import { useLocalSearchParams } from "expo-router"
import React from "react"
import { View, Text } from "react-native"

export default function ProductDetails() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}
