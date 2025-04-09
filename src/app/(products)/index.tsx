import { useCallback, useState } from "react"

import { SafeAreaView, Text } from "react-native"

import { Loading } from "@/components/loading"
import { Header } from "@/components/home/header"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"
import { ThemedButton } from "@/components/shared/button"
import { ThemedBottomSheet } from "@/components/shared/bottom-sheet"

export default function Home() {
  const [sortBy, setsortBy] = useState("")

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

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
        <Text>test</Text>
      </ThemedBottomSheet>
    </SafeAreaView>
  )
}
