import React, { ReactNode } from "react"

import { Modal } from "react-native"

import { BlurView } from "expo-blur"

import Animated, { SlideInDown, SlideInUp, SlideOutDown, SlideOutUp } from "react-native-reanimated"

interface ThemedBottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function ThemedBottomSheet({ isOpen, onClose, children }: ThemedBottomSheetProps) {
  return (
    <Modal transparent visible={isOpen} onRequestClose={onClose} animationType="none">
      <BlurView
        tint="dark"
        intensity={20}
        onTouchStart={onClose}
        experimentalBlurMethod="dimezisBlurView"
        className="absolute top-0 left-0 bottom-0 right-0"
      />
      <Animated.View
        entering={SlideInDown.duration(500)}
        exiting={SlideOutUp.duration(500)}
        className="absolute bottom-0 z-10 bg-white w-full rounded-t-3xl"
      >
        {isOpen && children}
      </Animated.View>
    </Modal>
  )
}
