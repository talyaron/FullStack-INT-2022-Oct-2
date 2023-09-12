
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomNavBar from './navBar';

export default function Main() {
  const [dogImages, setDogImages] = useState<Array<string>>([]);
  const navigation:any = useNavigation();



  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://dog.ceo/api/breeds/image/random/10');
        const { message } = data;
        setDogImages(message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    })();
  }, []);

  const getRandomColor = () => {
    const colors = ['#FF5733', '#FFC300', '#33FF57', '#338BFF', '#FF33E9'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const renderItem = ({ item}:any) => (
    <View style={styles.item}>
      <View style={[styles.imageContainer, { borderColor: getRandomColor() }]}>
        <Image
          style={styles.image}
          source={{ uri: item }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>OUR DOGS</Text>
      <FlatList
        data={dogImages}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
<CustomNavBar navigation={navigation} />    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    fontSize: 20,
  },
  item: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: 240,
    height: 240, 
    borderRadius: 120, 
    borderWidth: 5,
    justifyContent: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 120, 
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});