import { useCallback, useState } from "react"

import { SafeAreaView, Text, View } from "react-native"

import { Loading } from "@/components/loading"
import { Header } from "@/components/home/header"
import { SortBy } from "@/components/home/sort-by"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { ThemedButton } from "@/components/shared/button"
import { useFetchProducts } from "@/hooks/useFetchProducts"
import { CategoriesList } from "@/components/home/categories-list"
import { ThemedBottomSheet } from "@/components/shared/bottom-sheet"

export default function Home() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const [sortBy, setsortBy] = useState<"price" | "rating" | undefined>(undefined)

  const { data, isFetching, isError, error } = useFetchProducts(sortBy)

  const handleCloseBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false)
  }, [])

  if (isError) {
    return <ErrorFallback message={error?.message} />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Header />

      {isFetching ? <Loading /> : <ProductsList products={data?.products ?? []} />}

      <ThemedButton label="FILTERS 🔎" onPress={() => setIsBottomSheetOpen(true)} />

      <ThemedBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <View className="flex-1 p-6 pb-10">
          <Text className="mb-2 text-slate-800 font-bold">Sort products by:</Text>
          <SortBy activeSorting={sortBy} setsortBy={setsortBy} closeBottomSheet={handleCloseBottomSheet} />

          <Text className="mt-5 mb-2 text-slate-800 font-bold">Filter by category:</Text>
          <CategoriesList activeSorting={sortBy} setsortBy={setsortBy} />
        </View>
      </ThemedBottomSheet>
    </SafeAreaView>
  )
}
