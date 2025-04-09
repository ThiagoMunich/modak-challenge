import { useState } from "react"

import { Button, SafeAreaView } from "react-native"

import { Loading } from "@/components/loading"
import { Header } from "@/components/home/header"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"
import { ThemedButton } from "@/components/shared/button"

export default function Home() {
  const [sortBy, setsortBy] = useState("")

  const { data, isFetching, isError, error } = useFetchProducts(sortBy)

  if (isError) {
    return <ErrorFallback message={error?.message} />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Header />

      {isFetching ? <Loading /> : <ProductsList products={data?.products ?? []} />}

      <ThemedButton label="FILTERS 🔎" />
    </SafeAreaView>
  )
}
