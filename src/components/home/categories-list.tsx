import React, { useCallback } from "react"

import { View } from "react-native"

import { Loading } from "../loading"
import { ErrorFallback } from "../error"
import { ThemedChip } from "../shared/chip"
import { useFetchCategories } from "@/hooks/useFetchCategories"
import { CategoriesListResponse } from "@/@types/category-types"

export const CategoriesList = ({ activeSorting, setSortBy, closeBottomSheet }: any) => {
  const { data, isFetching, isError, error } = useFetchCategories()

  const handleCategoryPress = useCallback((category: CategoriesListResponse) => {
    setSortBy(category.slug)
    closeBottomSheet()
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
            isActive={activeSorting === category.slug}
            onPress={() => handleCategoryPress(category)}
          />
        ))
      )}
    </View>
  )
}
