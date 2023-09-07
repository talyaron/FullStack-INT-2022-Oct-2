import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const App = () => {
  return (
    <ImageBackground
      source={require("./assets/footsteps.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image
          source={require("./assets/licensed-image.jpeg")}
          style={styles.userIcon}
        />
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Username" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="password" />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 54,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    color: "red",
  },
  form: {
    backgroundColor: "lightblue",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    width: 350,
    padding: 30,
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
    alignSelf: "stretch",
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "gray",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 54,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#24261a",
    textAlign: "center",
  },
});

export default App;
