import React from "react"

import { useRouter } from "expo-router"

import { Product } from "@/@types/products-types"
import { View, Text, Image, TouchableOpacity } from "react-native"

type ProductCardProps = Pick<Product, "id" | "title" | "price" | "thumbnail">

export function ProductCard({ id, title, price, thumbnail }: ProductCardProps) {
  const router = useRouter()

  const handlePres = () => {
    router.push(`/(products)/${id}`)
  }
  return (
    <TouchableOpacity
      onPress={handlePres}
      className="w-full h-32 bg-white rounded-tl-3xl rounded-br-3xl shadow-md flex-row"
    >
      <Image source={{ uri: thumbnail }} className="w-32 h-full" />

      <View className="flex-1 p-4">
        <Text className="text-xl font-bold text-gray-800" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-2xl mt-auto ml-auto text-emerald-500 font-black">${price}</Text>
      </View>
    </TouchableOpacity>
  )
}
