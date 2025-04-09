import React from "react"
import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native"

interface Props extends TouchableOpacityProps {
  label: string
}
export function ThemedButton({ label, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="bg-slate-900 py-3 px-6 rounded-full shadow-lg items-center justify-center mx-4 my-4"
    >
      <Text className="text-white font-black text-xl">{label}</Text>
    </TouchableOpacity>
  )
}
