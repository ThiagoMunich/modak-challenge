import React from "react"

import { View, Text, SafeAreaView } from "react-native"

import { useFetchProducts } from "@/hooks/useFetchProducts"
import { ProductsList } from "@/components/products"

export default function Home() {
  const { data } = useFetchProducts()

  return <SafeAreaView>{data && <ProductsList products={data?.products} />}</SafeAreaView>
}
