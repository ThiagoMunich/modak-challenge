import React, { useCallback } from "react"

import { View } from "react-native"

import { Loading } from "../loading"
import { ErrorFallback } from "../error"
import { ThemedChip } from "../shared/chip"
import { useFiltersStore } from "@/store/filters"
import { CategoriesListResponse } from "@/@types/category-types"
import { useFetchCategories } from "@/hooks/categories/useFetchCategories"

export const CategoriesList = ({ closeBottomSheet }: any) => {
  const { currentFilter, setCurrentFilter } = useFiltersStore()

  const { data, isFetching, isError, error } = useFetchCategories()

  const handleCategoryPress = useCallback((category: CategoriesListResponse) => {
    setCurrentFilter(category.slug, "category")
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
            isActive={currentFilter === category.slug}
            onPress={() => handleCategoryPress(category)}
          />
        ))
      )}
    </View>
  )
}
