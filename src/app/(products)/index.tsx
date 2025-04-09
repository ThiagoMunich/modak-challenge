import React, { Suspense } from "react"

import { SafeAreaView } from "react-native"

import { Loading } from "@/components/loading"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

export default function Home() {
  const { data } = useFetchProducts()

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Suspense fallback={<Loading />}>
        <ProductsList products={data?.products} />
      </Suspense>
    </SafeAreaView>
  )
}
