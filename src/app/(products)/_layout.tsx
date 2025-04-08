import React from "react"
import { Stack } from "expo-router"

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  )
}
