import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation'
import TodoScreen from './TodoScreen'

export default function Home() {

  const navigation:any = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title='Go to Todo App' onPress={() => {navigation.navigate("Todo App")}} />
    </View>
  )
}