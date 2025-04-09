import { Loading } from "@/components/loading"
import { useFetchProductById } from "@/hooks/useFetchProductById"
import { useLocalSearchParams } from "expo-router"
import React from "react"
import { View, Text } from "react-native"

export default function ProductDetails() {
  const { id } = useLocalSearchParams()

  const { data, isFetching } = useFetchProductById(Number(id))

  if (isFetching) {
    return <Loading />
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}
