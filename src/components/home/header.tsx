import { View, Text } from "react-native"

export function Header() {
  return (
    <View className="bg-transparent shadow-sm py-4">
      <Text className="text-center text-2xl font-bold">Welcome</Text>
      <Text className="text-center text-lg font-bold">Munich's shop 💰</Text>
    </View>
  )
}
