import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useBackground } from '../contexts/BackgroundContext';

type Props = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { background } = useBackground();

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to MovieApp!</Text>
        <Text style={styles.description}>
          Dive into a world of cinematic wonders with MovieApp. Explore a vast collection of films, from timeless classics to the latest blockbusters. Create your personalized watchlist, rent your favorite movies with just a tap, and stay updated with upcoming titles. Experience the magic of cinema, right at your fingertips.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Browse Movies"
            onPress={() => navigation.navigate('MoviesForRent')}
            color="#007bff"
            style={styles.button}
          />
          <Button
            title="View Watchlist"
            onPress={() => navigation.navigate('Watchlist')}
            color="#28a745"
            style={styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for better readability
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2, // subtle shadow for buttons
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;