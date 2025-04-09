import { Dimensions, Platform } from "react-native"

const { height, width } = Dimensions.get("window")

export const Device = {
  isIos: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  screenHeight: height,
  screenWidth: width,
}
