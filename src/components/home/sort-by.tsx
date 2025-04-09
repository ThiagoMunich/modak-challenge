import React from "react"
import { View } from "react-native"

import { ThemedChip } from "../shared/chip"
import { useFiltersStore } from "@/store/filters"

export function SortBy({ closeBottomSheet }: any) {
  const { currentFilter, setCurrentFilter } = useFiltersStore()

  const handleFilterPress = (filter: string) => {
    setCurrentFilter(filter, "sort")
    closeBottomSheet()
  }

  return (
    <View className="flex-row gap-x-4">
      <ThemedChip label="Price" onPress={() => handleFilterPress("price")} isActive={currentFilter === "price"} />
      <ThemedChip label="Rating" onPress={() => handleFilterPress("rating")} isActive={currentFilter === "rating"} />
    </View>
  )
}
