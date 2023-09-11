import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';


type ItemProps = { title: string, index:number };

const Item = ({ title, index }: ItemProps) => {
  try {
    console.log(title)
    if (title === undefined) throw new Error("title is undefined");
    if (typeof title !== "string") throw new Error("title is not string");

    return (
      
      <View style={styles.item} key={index}>
        <Text style={styles.title}>{title} ({index})</Text>
      </View>
    )
  } catch (error) {
    console.log(error);
    return <Text style={styles.title}>Error</Text>;
  }

};

const Breeds = () => {

  const [breeds, setBreeds] = useState<Array<string>>(["test"]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
      // console.log(data);
      const { message } = data;
      const _breeds = Object.keys(message)
      console.log(_breeds);
      setBreeds(_breeds);
    })();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={({item, index}) => {
       
          return <Item title={item} index={index} />
        }}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

function test(data: any) {
  console.log(data);
  return data;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Breeds;