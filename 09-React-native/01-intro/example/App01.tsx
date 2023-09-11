import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log("tetst")
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "navy" }}>
        <Text style={styles.text}>Change text</Text>

      </View>
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text style={styles.text}>Change text</Text>

      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center"

  }
});