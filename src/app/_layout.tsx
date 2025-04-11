import "../../global.css"

import "react-native-reanimated"

import React, { useEffect } from "react"

import { StatusBar } from "expo-status-bar"

import { useFonts } from "expo-font"

import { Stack } from "expo-router"

import * as SplashScreen from "expo-splash-screen"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useNotificationRedirect } from "@/hooks/useNotificationRedirect"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function RootLayout() {
  useNotificationRedirect()

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(products)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </QueryClientProvider>
  )
}
