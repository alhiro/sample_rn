import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"
import { FlatList } from "react-native"
import { TouchableOpacity } from "react-native"
import { Dimensions } from "react-native"
import { palette } from "../../theme/palette"
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { YellowBox } from "react-native"

YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested", // TODO: Remove when fixed
])

// List Image
const banner = require("./banner.png")

// Set dimensi
const win = Dimensions.get("window")

// Style
const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const BANNERIMAGE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[3],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: palette.black,
  fontSize: 15,
  lineHeight: 22,
}
const SMALLCAPTION: TextStyle = {
  ...TEXT,
  color: palette.lightGrey,
  fontSize: 13,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const INPUTWRAPPER: TextStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
const ICONINPUT: TextStyle = {
  backgroundColor: '#eaeaea',
  position:"absolute",
  bottom:25,
  left:1,
  lineHeight: 28,
  height:38,
  width: 40,
  padding: 7,
  zIndex:9,
}
const HEADERINPUT: TextStyle = {
  ...TEXT,
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  borderRadius: 4,
  borderWidth: 1.2,
  color: "#444444",
  fontSize: 15,
  height: 40,
  paddingLeft: 70,
  paddingRight: 12,
  marginTop: spacing[5],
  marginBottom: spacing[5],
  flex: 1,
}
const TEXTCAT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  lineHeight: 18,
  paddingTop: 8,
  color: palette.lightGrey,
}
const CONTAINERIMAGE: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 18,
}
const LISTIMAGE: ViewStyle = {
  borderRadius: 50,
  backgroundColor: palette.green,
  width: win.width / 4 - 45,
  height: win.width / 4 - 45,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 18,
}

const category= [
  {
    id: 1,
    name: "Food",
    image: require("./services.png")
  },
  {
    id: 2,
    name: "Mart",
    image: require("./services.png")
  },
  {
    id: 3,
    name: "Express",
    image: require("./services.png")
  },
  {
    id: 4,
    name: "Pulsa",
    image: require("./services.png")
  },
  {
    id: 5,
    name: "Car",
    image: require("./services.png")
  },
  {
    id: 6,
    name: "Bike",
    image: require("./services.png")
  },
  {
    id: 7,
    name: "Insurance",
    image: require("./services.png")
  },
  {
    id: 8,
    name: "More",
    image: require("./services.png")
  },
]

export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  const renderItemCategory = ({ item, index }: { item: any; index }) => (
    <TouchableOpacity onPress={nextScreen}>
      <View style={CONTAINERIMAGE} key={index}>
        <View style={LISTIMAGE}><Image source={item.image} /></View>
        <Text style={TEXTCAT}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <View style={INPUTWRAPPER}>
          <Icon style={ICONINPUT} name="search" size={28} />
          <TextInput style={HEADERINPUT}
            placeholder="Offers, food, and places to go"
            placeholderTextColor={color.palette.lightGrey}
          />
        </View>
       
        <FlatList
          data={category.slice()}
          renderItem={renderItemCategory}
          numColumns={4}
          keyExtractor={(item, index) => String(index)}
        />
        <Image source={banner} style={BANNERIMAGE} />
        <Text style={CONTENT}>
          Klik 'BOBAMILKTEA' bisa dapet OVO 20rb
        </Text>
        <Text style={SMALLCAPTION}>
          Sponsored by Good Doctor
        </Text>
      </Screen>
    </View>
  )
})
