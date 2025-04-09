import React, { useCallback, useState } from "react"

import { SafeAreaView, Text, View } from "react-native"

import { Loading } from "@/components/loading"
import { Header } from "@/components/home/header"
import { useFiltersStore } from "@/store/filters"
import { SortBy } from "@/components/home/sort-by"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { ThemedButton } from "@/components/shared/button"
import { useFetchProducts } from "@/hooks/useFetchProducts"
import { CategoriesList } from "@/components/home/categories-list"
import { ThemedBottomSheet } from "@/components/shared/bottom-sheet"

export default function Home() {
  const { clearFilters } = useFiltersStore()

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const { data, isFetching, isError, error, refetch } = useFetchProducts()

  const handleCloseBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false)
  }, [])

  const handleClearFilters = () => {
    refetch()
    clearFilters()
    handleCloseBottomSheet()
  }

  if (isError) {
    return (
      <ErrorFallback message={error?.message}>
        <ThemedButton onPress={() => refetch()}>
          <ThemedButton.Text>TRY AGAIN</ThemedButton.Text>
        </ThemedButton>
      </ErrorFallback>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Header />

      {isFetching ? <Loading /> : <ProductsList products={data || []} />}

      <ThemedButton onPress={() => setIsBottomSheetOpen(true)}>
        <ThemedButton.Text>FILTERS 🔎</ThemedButton.Text>
      </ThemedButton>

      <ThemedBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <View className="flex-1 p-6 pb-10">
          <Text className="mb-2 text-slate-800 font-bold">Sort products by:</Text>
          <SortBy closeBottomSheet={handleCloseBottomSheet} />

          <Text className="mt-5 mb-2 text-slate-800 font-bold">Filter by category:</Text>
          <CategoriesList closeBottomSheet={handleCloseBottomSheet} />

          <ThemedButton onPress={handleClearFilters}>
            <ThemedButton.Text>CLEAR FILTERS 🗑️</ThemedButton.Text>
          </ThemedButton>
        </View>
      </ThemedBottomSheet>
    </SafeAreaView>
  )
}
