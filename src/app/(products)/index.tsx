import { SafeAreaView, Text } from "react-native"

import { Loading } from "@/components/loading"
import { ErrorFallback } from "@/components/error"
import { ProductsList } from "@/components/products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

export default function Home() {
  const { data, isLoading, isError, error } = useFetchProducts()

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorFallback message={error?.message} />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <ProductsList products={data?.products ?? []} />
    </SafeAreaView>
  )
}
