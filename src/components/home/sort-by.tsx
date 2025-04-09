import React from "react"
import { View } from "react-native"

import { ThemedChip } from "../shared/chip"

export function SortBy({ activeSorting, setsortBy, closeBottomSheet }: any) {
  const handleFilterPress = (filter: string | undefined) => {
    setsortBy(filter)
    closeBottomSheet()
  }

  return (
    <View className="flex-row gap-x-4">
      <ThemedChip label="Price" onPress={() => handleFilterPress("price")} isActive={activeSorting === "price"} />
      <ThemedChip label="Rating" onPress={() => handleFilterPress("rating")} isActive={activeSorting === "rating"} />
    </View>
  )
}
