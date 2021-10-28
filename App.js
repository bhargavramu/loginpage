import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/HomeScreen'
import LoginScreen from './src/LoginScreen'
import ResetScreen from './src/ResetScreen'
import VerificationScreen from './src/VerificationScreen'
const Stack = createStackNavigator()

export default function App() {
  return (
    <View >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
          <Stack.Screen name="ResetScreen" component={ResetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}