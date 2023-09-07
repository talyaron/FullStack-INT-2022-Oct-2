import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable, TouchableOpacity  } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{maxWidth:600}}>
        <Text style={{color:"gray"}}>
          Login Page
        </Text>
        <View style={styles.flexCenter}>
          <View style={styles.flexCenter}>
            <TextInput style={styles.loginInput} placeholder="Enter your name" />
            <TextInput style={styles.loginInput} placeholder="Enter your name" />
          </View>
          <View style={styles.flexCenter}>
            <TouchableOpacity onPress={() => console.log("Pressed Login")} style={styles.loginButton}>
              <Text>Login</Text>
            </TouchableOpacity>
            <Text>
              Forgot Your password?
            </Text>
          </View>
          <View style={styles.flexCenter}>
            <Text>
              or connect with
            </Text>
            <View style={styles.flexRow}>
              <TouchableOpacity onPress={() => console.log("Pressed Facebook")} style={styles.socialLoginButton}>
                <Text>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Pressed X")} style={styles.socialLoginButton}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{bottom:40}}>
              Don't have an account? Sign up
            </Text>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    
  },
  flexRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
    gap: 10,
    
  },
  loginInput: {
    backgroundColor:"gray",
    height:40,
    borderRadius:20,
    width:260,
    padding:10,
  },
  loginButton: {
    borderRadius:20,
    width:200,
    height:40,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
  },
  socialLoginButton: {
    borderRadius:20,
    width:160,
    height:40,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
  }
});
