import React, { Suspense } from "react"

import { SafeAreaView, Text } from "react-native"

import { ErrorBoundary } from "react-error-boundary"

import { Loading } from "@/components/loading"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

export default function Home() {
  const { data, isError, error } = useFetchProducts()

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <Suspense fallback={<Loading />}>
        <ProductsList products={data?.products} />
      </Suspense>
    </SafeAreaView>
  )
}
