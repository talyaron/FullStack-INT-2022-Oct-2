import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function About({navigation, route}:any) {
  const name = route.params.name
  return (
    <View>
      <Text style={{fontSize: 40}}>About {name}</Text>
      <Button onPress={() => {navigation.navigate("Home")}}> Go to Home </Button>

    </View>
  )
}