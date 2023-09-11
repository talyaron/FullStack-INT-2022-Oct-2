import React from 'react'
import { Button, Text, View } from 'react-native'

interface Props{
    navigation: any
}

const Home = ({navigation}:Props) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Go to Breeds" onPress={() => {
                navigation.navigate("breeds")
             }} />
        </View>
    )
}

export default Home