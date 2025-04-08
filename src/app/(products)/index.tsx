import React from "react"

import { SafeAreaView } from "react-native"

import { Loading } from "@/components/loading"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

export default function Home() {
  const { data, isFetching } = useFetchProducts()

  if (isFetching) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <ProductsList products={data?.products} />
    </SafeAreaView>
  )
}
