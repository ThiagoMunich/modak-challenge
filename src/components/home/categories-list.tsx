import React, { useCallback } from "react"

import { View } from "react-native"

import { Loading } from "../loading"
import { ErrorFallback } from "../error"
import { ThemedChip } from "../shared/chip"
import { useFetchCategories } from "@/hooks/useFetchCategories"

export const CategoriesList = () => {
  const { data, isFetching, isError, error } = useFetchCategories()

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const handleCategoryPress = useCallback((category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }, [])

  if (isError) {
    return <ErrorFallback message={error?.message} />
  }

  return (
    <View className="flex-row flex-wrap gap-2">
      {isFetching ? (
        <Loading />
      ) : (
        data?.map((category) => (
          <ThemedChip
            key={category.name}
            label={category.name}
            isActive={selectedCategory === category.name}
            onPress={() => handleCategoryPress(category.name)}
          />
        ))
      )}
    </View>
  )
}
