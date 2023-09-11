import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default function App() {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random/5").then((res) => {
      console.log(res.data.message);
      setDogs(res.data.message);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>who let the dogs out?</Text>
      <FlatList
        data={dogs}
        renderItem={({ item }) => <Image style={styles.img} source={{ uri: item }} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    paddingTop: 70,
  },
  img: {
    width: 350,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
});
