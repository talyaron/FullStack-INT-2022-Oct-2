import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("./assets/licensed-image.jpg")}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.loginText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.loginText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.loginText}>Forgot Password?</Text> 
      </TouchableOpacity>
      <Pressable
        android_ripple={{ color: "green", radius: 200 }}
        onPress={() => console.log("btn prees")}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "green",
  },
  img: {
    height: "10%",
    width: "10%",
    borderColor: "green",
    borderRadius: 5,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#FF1493",
  },
  loginText: {
    color: "red",
  },
});
