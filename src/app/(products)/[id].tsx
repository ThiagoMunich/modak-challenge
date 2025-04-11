import React from "react"

import { SafeAreaView } from "react-native"

import { useLocalSearchParams } from "expo-router"

import { Loading } from "@/components/loading"
import { ErrorFallback } from "@/components/error"
import { ThemedButton } from "@/components/shared/button"
import { Header } from "@/components/product/details/header"
import { Description } from "@/components/product/details/description"
import { useFetchProductById } from "@/hooks/products/useFetchProductById"
import { StockAvailability } from "@/components/product/details/stock-availability"

export default function ProductDetails() {
  const { id } = useLocalSearchParams()

  const { data, isFetching, isError, error, refetch } = useFetchProductById(Number(id))

  if (isFetching) {
    return <Loading />
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

  if (!data) {
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Header brand={data?.brand} id={data?.id} />

      <Description description={data.description} />

      <StockAvailability stock={data.stock} />
    </SafeAreaView>
  )
}
