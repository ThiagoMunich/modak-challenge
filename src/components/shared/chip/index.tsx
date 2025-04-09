import React from "react"

import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import clsx from "clsx"

interface Props extends TouchableOpacityProps {
  isActive: boolean
  label: string
}
export function ThemedChip({ isActive, label, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx("px-4 py-2 rounded-full bg-slate-200", {
        "bg-slate-800": isActive,
      })}
    >
      <Text
        className={clsx("font-black text-slate-500", {
          "text-white": isActive,
        })}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
