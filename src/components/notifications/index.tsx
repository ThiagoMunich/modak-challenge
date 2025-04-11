import React from "react"

import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

export function NotificationReminder({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="w-28 h-12 absolute top-[95%] bg-white rounded-full items-center justify-center"
    >
      <Text className="text-sm font-black">🔔</Text>

      <Text className="text-xs font-black">Notify me</Text>
    </TouchableOpacity>
  )
}
