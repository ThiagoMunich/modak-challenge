import React from "react"

import { useRouter } from "expo-router"

import { Image } from "expo-image"

import { Product } from "@/@types/products-types"
import { View, Text, TouchableOpacity } from "react-native"

type ProductCardProps = Pick<Product, "id" | "title" | "price" | "thumbnail">

const BLUR_HASH =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

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
      <Image
        transition={500}
        contentFit="cover"
        placeholder={BLUR_HASH}
        source={{ uri: thumbnail }}
        style={{ width: 128, height: "100%", borderTopLeftRadius: 24 }}
      />

      <View className="flex-1 p-4">
        <Text className="text-xl font-bold text-gray-800" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-2xl mt-auto ml-auto text-emerald-500 font-black">${price}</Text>
      </View>
    </TouchableOpacity>
  )
}
