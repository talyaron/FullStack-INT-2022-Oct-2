import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../style/loginStyle";

const Login = () => {
  function onPress(event: any): void {
    console.log("test");
  }

  return (
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
      </View>
  );
};

export default Login;
