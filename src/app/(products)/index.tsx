import React from "react"

import { SafeAreaView } from "react-native"

import { useFetchProducts } from "@/hooks/useFetchProducts"
import { ProductsList } from "@/components/products"
import { Loading } from "@/components/loading"

export default function Home() {
  const { data, isFetching } = useFetchProducts()

  if (isFetching) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">{data && <ProductsList products={data?.products} />}</SafeAreaView>
  )
}
