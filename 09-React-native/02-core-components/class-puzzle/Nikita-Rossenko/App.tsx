import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [apiData, setApiData] = useState([{
    id: "",
    title: '',
  }]);
  type ItemProps = {
    title: string
  };

  useEffect(() => {
    (async () => {
      getData()
    })()

  }, []);

  const getData = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random/20')
    console.log(response.data);
    setApiData(response.data.message.map((item: string, index: number) => ({id: index, title: item})))

  }

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      {/* map throw array */}
      <Image source={{uri:title}} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
        {/* <TouchableOpacity onPress={getData}>Fetch dogs</TouchableOpacity> */}
          <FlatList
            data={apiData}
            renderItem={({item}) => <Item title={item.title} />}
            // keyExtractor={item => item.id}
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginHorizontal: 20,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 8,
    padding: 20,
    height: 200,
  },
  image: {
    height: 200,
    borderRadius:100,
  },
});
