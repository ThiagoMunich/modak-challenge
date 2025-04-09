import React from "react"

import { View, Text } from "react-native"

export default function EmptyProductsList() {
  return (
    <View className="flex-1 justify-center items-center px-6 border-2 border-dashed border-red-500 rounded-lg py-4 gap-y-2">
      <Text className="text-xl font-bold text-slate-600 mb-2 text-center">⚠️ No product found</Text>
      <Text className="text-base text-slate-500 text-center">It looks like there are no products at the moment.</Text>

      <Text className="text-base text-slate-500 text-center">Please try again later or pull down to refresh. 🔄</Text>
    </View>
  )
}
