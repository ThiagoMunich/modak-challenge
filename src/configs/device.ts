import { Dimensions, Platform } from "react-native"

const { height, width } = Dimensions.get("window")

export const Device = {
  isIos: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  SCREEN_HEIGHT: height,
  SCREEN_WIDTH: width,
}
