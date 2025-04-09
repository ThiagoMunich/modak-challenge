import React from "react"
import { View } from "react-native"

import { ThemedChip } from "../shared/chip"

export function SortBy({ activeSorting, setSortBy, closeBottomSheet }: any) {
  const handleFilterPress = (filter: string | undefined) => {
    setSortBy(filter)
    closeBottomSheet()
  }

  return (
    <View className="flex-row gap-x-4">
      <ThemedChip label="Price" onPress={() => handleFilterPress("price")} isActive={activeSorting === "price"} />
      <ThemedChip label="Rating" onPress={() => handleFilterPress("rating")} isActive={activeSorting === "rating"} />
    </View>
  )
}
