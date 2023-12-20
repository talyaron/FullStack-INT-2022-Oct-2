import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const MovieDetailsScreen = ({ route }: any) => {
  const { movie } = route.params;

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

  const trailerUrl = 'https://www.youtube.com/embed/' + movie.trailer_key; // Replace 'trailer_key' with the actual key

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Image source={{ uri: posterUrl }} style={styles.image} />
        <Text style={styles.description}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
});

export default MovieDetailsScreen;
