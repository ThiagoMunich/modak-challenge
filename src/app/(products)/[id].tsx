import React from "react"

import { View } from "react-native"

import { useLocalSearchParams } from "expo-router"

import { Loading } from "@/components/loading"
import { ErrorFallback } from "@/components/error"
import { Header } from "@/components/product/details/header"
import { useFetchProductById } from "@/hooks/useFetchProductById"
import { Description } from "@/components/product/details/description"
import { StockAvailability } from "@/components/product/details/stock-availability"

export default function ProductDetails() {
  const { id } = useLocalSearchParams()

  const { data, isFetching, isError, error } = useFetchProductById(Number(id))

  if (isFetching) {
    return <Loading />
  }

  if (isError) {
    return <ErrorFallback message={error?.message} />
  }

  if (!data) {
    return null
  }

  return (
    <View className="flex-1">
      <Header brand={data?.brand ?? "Hire Brazilian Dev"} />

      <Description description={data.description} />

      <StockAvailability stock={data.stock} />
    </View>
  )
}
