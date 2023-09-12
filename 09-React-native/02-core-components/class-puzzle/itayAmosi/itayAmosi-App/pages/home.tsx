import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from "../style/loginStyle";

function Home({navigation} :any) {  
  const image = {uri: 'https://st2.depositphotos.com/3746151/5305/v/950/depositphotos_53050219-stock-illustration-dog-footsteps-pattern.jpg'};

  return (
<ImageBackground style={styles.image} source={image}>
      <Text style={styles.title}>Home Page</Text>
      <Button
        title="Go to Other Page"
        onPress={() => navigation.navigate("Login")}
      />
    </ImageBackground>
  );
}

export default Home
