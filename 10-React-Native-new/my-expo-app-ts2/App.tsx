import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './screen/TodoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
