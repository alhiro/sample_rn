import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Text, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const TAGLINE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}

export const DemoScreen = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View testID="DemoScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text style={TITLE} preset="header" tx="demoScreen.subtitle" />
        <Text style={TAGLINE} tx="demoScreen.tagLine" />
      </Screen>
    </View>
  )
})
