import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import CustomNavBar from './navBar'; // Assuming you have a 'NavBar' component
import { useNavigation } from '@react-navigation/native';

export default function UrDog() {
  const [dogImages, setDogImages] = useState([]);
    const navigation:any = useNavigation();



  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const { data } = await axios.get('https://dog.ceo/api/breeds/image/random/1');
        const { message } = data;
        setDogImages(message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImage();
  }, []);

  const getRandomColor = () => {
    const colors = ['#FF5733', '#FFC300', '#33FF57', '#338BFF', '#FF33E9'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const renderItem = ({ item }:any) => (
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
      <Text style={styles.text}>UR DOG</Text>
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
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  text: {
    fontSize: 20,
    marginBottom: 10, // Add some spacing below the text
  },
  item: {
    marginVertical: 10, // Add vertical spacing between items
    alignItems: 'center',
  },
  imageContainer: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center', // Center the image horizontally and vertically
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 120,
  },
});
