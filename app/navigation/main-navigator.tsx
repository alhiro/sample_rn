/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

import { palette } from '../theme/palette'

import {
  WelcomeScreen,
  DemoScreen
} from "../screens"
import { PrimaryParamList } from "./types"
import { Text } from "../components"
import { TextStyle } from "react-native"
import { color, typography } from "../theme"

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
  marginBottom: 20
}

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

function ActivityScreen({ navigation }) {
  return (
    <View>
      <Text style={TEXT}>Activity</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  )
}
function PaymentScreen({ navigation }) {
  return (
    <View>
      <Text style={TEXT}>Payment</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  )
}
function MessagesScreen({ navigation }) {
  return (
    <View>
      <Text style={TEXT}>Messages</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  )
}
function AccountScreen({ navigation }) {
  return (
    <View>
      <Text style={TEXT}>Account</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: palette.green,
      labelStyle: {
        fontSize: 14,
      },
      tabStyle: {
        padding: 5,
      },
      style: {
        height: 60,
        borderTopWidth: .5,
        borderTopColor: palette.lighterGrey
      }
    }}>
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen 
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Icon name="note" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color, size }) => (
            <Icon name="payment" color={color} size={size} />
          ),
        }} />
      <Tab.Screen 
        name="Messages" 
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          ),
        }} />
      <Tab.Screen 
        name="Account"
        component={AccountScreen} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  )
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="welcome" component={HomeTabs} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
