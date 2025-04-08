import React from "react"

import { SafeAreaView } from "react-native"

import { useFetchProducts } from "@/hooks/useFetchProducts"
import { ProductsList } from "@/components/products"

export default function Home() {
  const { data } = useFetchProducts()

  return (
    <SafeAreaView className="flex-1 bg-slate-200">{data && <ProductsList products={data?.products} />}</SafeAreaView>
  )
}
