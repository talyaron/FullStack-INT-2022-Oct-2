import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import styles from "../style/loginStyle";



const Login = ({navigation}: any) => {
  const image = {uri: 'https://st2.depositphotos.com/3746151/5305/v/950/depositphotos_53050219-stock-illustration-dog-footsteps-pattern.jpg'};

  return (
<ImageBackground style={styles.image} source={image}>
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="password" />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
        />
    </View>

        </ImageBackground>
  );
};

export default Login;
