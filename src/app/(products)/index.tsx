import React from "react"

import { View, Text, SafeAreaView } from "react-native"

import { useFetchProducts } from "@/hooks/useFetchProducts"

export default function Home() {
  const { data } = useFetchProducts()

  return (
    <SafeAreaView>
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </SafeAreaView>
  )
}
